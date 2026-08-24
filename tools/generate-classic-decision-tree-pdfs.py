#!/usr/bin/env python3
import json
import math
import re
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf" / "classic"

PAGE_W, PAGE_H = A4
MARGIN_X = 36
MARGIN_TOP = 54
MARGIN_BOTTOM = 52
MAX_LEAVES_PER_PAGE = 11
MAX_DEPTH_PER_PAGE = 5
MAX_PAGE_COMPLEXITY = 30

INK = colors.black
LIGHT_FILL = colors.HexColor("#fbfbfb")
BLUE = colors.HexColor("#0f766e")


class Node:
    def __init__(self, question="", answer=""):
        self.question = question
        self.answer = answer
        self.children = {}
        self.results = []
        self.continuation = ""


def slugify(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def clean(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def wrap_text(c, text, width, font_name, font_size, max_lines=None):
    words = clean(text).split()
    lines = []
    line = ""
    for word in words:
        candidate = word if not line else f"{line} {word}"
        if c.stringWidth(candidate, font_name, font_size) <= width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)
    if max_lines and len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = truncate(c, lines[-1], width, font_name, font_size)
    return lines


def truncate(c, text, width, font_name, font_size):
    text = clean(text)
    if c.stringWidth(text, font_name, font_size) <= width:
        return text
    while text and c.stringWidth(text + "...", font_name, font_size) > width:
        text = text[:-1].rstrip()
    return text + "..."


def draw_centered_wrapped(c, text, x, y, width, font_name, font_size, leading, max_lines=None):
    lines = wrap_text(c, text, width, font_name, font_size, max_lines=max_lines)
    c.setFont(font_name, font_size)
    c.setFillColor(INK)
    for index, line in enumerate(lines):
        c.drawCentredString(x, y - index * leading, line)
    return len(lines)


def draw_box(c, x, y, w, h, text, font_size=8, bold=False, max_lines=3):
    c.setStrokeColor(INK)
    c.setLineWidth(0.7)
    c.setFillColor(LIGHT_FILL)
    c.rect(x - w / 2, y - h / 2, w, h, stroke=1, fill=1)
    font = "Helvetica-Bold" if bold else "Helvetica"
    lines = wrap_text(c, text, w - 8, font, font_size, max_lines=max_lines)
    total_h = (len(lines) - 1) * (font_size + 1)
    c.setFont(font, font_size)
    c.setFillColor(INK)
    for index, line in enumerate(lines):
        c.drawCentredString(x, y + total_h / 2 - index * (font_size + 1) - font_size / 3, line)


def leaf_count(node):
    total = len(node.results)
    for child in node.children.values():
        total += leaf_count(child)
    return total


def max_depth(node):
    child_depths = [max_depth(child) for child in node.children.values()]
    return 1 + (max(child_depths) if child_depths else 0)


def page_fits(node):
    leaves = leaf_count(node)
    depth = max_depth(node)
    return (
        leaves <= MAX_LEAVES_PER_PAGE
        and depth <= MAX_DEPTH_PER_PAGE
        and leaves * depth <= MAX_PAGE_COMPLEXITY
    )


def add_path(root, trail, result_title):
    node = root
    for index, step in enumerate(trail[1:], start=1):
        question = clean(step["question"])
        answer = clean(step["answer"])
        child = node.children.get(answer)
        if child is None:
            child = Node(question=question, answer=answer)
            node.children[answer] = child
        elif not child.question:
            child.question = question
        node = child
    node.results.append(result_title)


def build_route_tree(route):
    root = Node(question=route["label"])
    for path in route["paths"]:
        add_path(root, path["trail"], clean(path["resultTitle"]))
    return root


def compact_node_for_page(node, marker_prefix, split_all=False):
    page_node = Node(question=node.question)
    child_pages = []

    for index, (answer, child) in enumerate(node.children.items(), start=1):
        if split_all or leaf_count(child) > MAX_LEAVES_PER_PAGE or max_depth(child) > MAX_DEPTH_PER_PAGE:
            marker = f"{marker_prefix}{index}"
            placeholder = Node(question=f"{answer}\nweiter bei ({marker})")
            placeholder.continuation = marker
            page_node.children[answer] = placeholder
            child_pages.extend(make_pages(child, marker, f"({marker}) {answer}"))
        else:
            page_node.children[answer] = child

    page_node.results = list(node.results)
    return page_node, child_pages


def make_pages(node, marker_prefix, title, split_all=False):
    if page_fits(node):
        return [{"title": title, "node": node}]

    should_split_all = split_all or not page_fits(node) or len(node.children) > 4
    overview, child_pages = compact_node_for_page(node, marker_prefix, split_all=should_split_all)
    return [{"title": title, "node": overview}] + child_pages


def assign_positions(node, x_min, x_max, y_by_depth, depth=0, positions=None):
    if positions is None:
        positions = {}

    leaves = []

    def gather_leaves(current):
        for child in current.children.values():
            gather_leaves(child)
        for result in current.results:
            leaves.append(("result", result, current))
        if not current.children and not current.results:
            leaves.append(("node", current.question, current))

    gather_leaves(node)
    if not leaves:
        leaves.append(("node", node.question, node))

    spacing = (x_max - x_min) / max(1, len(leaves))
    leaf_x = {}
    for index, (_, value, owner) in enumerate(leaves):
        leaf_x.setdefault(id(owner), []).append(x_min + spacing * (index + 0.5))

    def walk(current, current_depth=0):
        for child in current.children.values():
            walk(child, current_depth + 1)
        if current.children:
            child_x = [positions[id(child)][0] for child in current.children.values()]
            x = sum(child_x) / len(child_x)
        else:
            owned = leaf_x.get(id(current), [(x_min + x_max) / 2])
            x = sum(owned) / len(owned)
        y = y_by_depth[min(current_depth, len(y_by_depth) - 1)]
        positions[id(current)] = (x, y)

    walk(node, depth)
    return positions, leaves


def draw_page(c, page, page_num, page_total, route_label):
    c.setTitle(route_label)
    draw_centered_wrapped(c, page["title"], PAGE_W / 2, PAGE_H - 50, PAGE_W - 70, "Helvetica", 17, 18, max_lines=2)
    c.setFont("Helvetica", 8)
    c.setFillColor(colors.HexColor("#555555"))
    c.drawCentredString(PAGE_W / 2, 28, "Darías Holgado & Corinna Martarelli")
    c.drawRightString(PAGE_W - MARGIN_X, 28, f"{page_num}/{page_total}")

    node = page["node"]
    depth = max_depth(node)
    levels = max(2, min(MAX_DEPTH_PER_PAGE + 1, depth + 1))
    top_y = PAGE_H - MARGIN_TOP - 55
    bottom_y = MARGIN_BOTTOM + 80
    y_by_depth = [
        top_y - index * ((top_y - bottom_y) / max(1, levels - 1))
        for index in range(levels)
    ]

    positions, leaves = assign_positions(node, MARGIN_X + 12, PAGE_W - MARGIN_X - 12, y_by_depth)
    node_w = 112
    node_h = 34
    leaf_h = 40
    leaf_w = max(44, min(104, (PAGE_W - 2 * MARGIN_X) / max(1, len(leaves))))

    def draw_edges(current):
        x1, y1 = positions[id(current)]
        for answer, child in current.children.items():
            x2, y2 = positions[id(child)]
            c.setStrokeColor(INK)
            c.setLineWidth(0.75)
            c.line(x1, y1 - node_h / 2, x2, y2 + node_h / 2)
            if not child.continuation and len(current.children) <= 3:
                label_x = (x1 + x2) / 2
                label_y = (y1 + y2) / 2 + 4
                draw_centered_wrapped(c, answer, label_x, label_y, max(56, abs(x2 - x1) + 22), "Helvetica", 6.2, 6.5, max_lines=3)
            draw_edges(child)

    draw_edges(node)

    def draw_nodes(current, is_root=False):
        x, y = positions[id(current)]
        if is_root:
            text = current.question
        elif current.continuation:
            text = current.question
        elif current.results and not current.children:
            text = current.answer or current.question
        else:
            text = current.question or current.answer or "Decision"
        draw_box(c, x, y, node_w if is_root else 100, node_h, text, font_size=7.2, bold=is_root, max_lines=3)
        for child in current.children.values():
            draw_nodes(child)

    draw_nodes(node, is_root=True)

    leaf_y = MARGIN_BOTTOM + 42
    leaf_items = []

    def collect_results(current):
        for child in current.children.values():
            collect_results(child)
        for result in current.results:
            leaf_items.append((*positions[id(current)], result))

    collect_results(node)
    leaf_items.sort(key=lambda item: item[0])

    for index, (owner_x, owner_y, result) in enumerate(leaf_items):
        x = owner_x if len(leaf_items) <= 6 else MARGIN_X + leaf_w / 2 + index * leaf_w
        if x + leaf_w / 2 > PAGE_W - MARGIN_X:
            x = PAGE_W - MARGIN_X - leaf_w / 2
        if x - leaf_w / 2 < MARGIN_X:
            x = MARGIN_X + leaf_w / 2
        current_leaf_y = leaf_y
        if len(leaf_items) == 1:
            current_leaf_y = max(MARGIN_BOTTOM + leaf_h, owner_y - node_h / 2 - 72)
        c.setStrokeColor(INK)
        c.setLineWidth(0.75)
        line_start_y = owner_y - node_h / 2 if len(leaf_items) <= 6 else leaf_y + leaf_h / 2 + 10
        c.line(x, line_start_y, x, current_leaf_y + leaf_h / 2)
        draw_box(c, x, current_leaf_y, leaf_w, leaf_h, result, font_size=6.8, bold=False, max_lines=4)


def write_route_pdf(route):
    tree = build_route_tree(route)
    pages = make_pages(tree, f"{route['index']}.", route["label"], split_all=True)
    out_path = OUTPUT_DIR / f"classic-decision-tree-{route['index']:02d}-{slugify(route['label'])}.pdf"
    c = canvas.Canvas(str(out_path), pagesize=A4)
    for index, page in enumerate(pages, start=1):
        draw_page(c, page, index, len(pages), route["label"])
        c.showPage()
    c.save()
    return out_path, len(pages)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: generate-classic-decision-tree-pdfs.py /path/to/decision-paths.json")

    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    for route in data["routes"]:
        path, pages = write_route_pdf(route)
        print(f"Wrote {path.relative_to(ROOT)} ({pages} page(s))")


if __name__ == "__main__":
    main()
