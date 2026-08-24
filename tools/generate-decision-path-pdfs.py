#!/usr/bin/env python3
import json
import math
import os
import re
import sys
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfgen import canvas


ROOT = Path(__file__).resolve().parents[1]
OUTPUT_DIR = ROOT / "output" / "pdf"

PAGE_W, PAGE_H = landscape(A4)
MARGIN = 22
GAP = 7
HEADER_H = 38
FOOTER_H = 13
COLS = 4
CARD_H = 50
CARD_GAP = 6

INK = colors.HexColor("#1d292c")
MUTED = colors.HexColor("#5f6f73")
LINE = colors.HexColor("#d7e0e0")
SOFT = colors.HexColor("#f6f8f8")
TEAL = colors.HexColor("#087b78")


def slugify(value):
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")


def clean_text(value):
    return re.sub(r"\s+", " ", str(value or "")).strip()


def text_width(text, font_name, font_size):
    return pdfmetrics.stringWidth(text, font_name, font_size)


def truncate_to_width(text, font_name, font_size, max_width):
    text = clean_text(text)
    if text_width(text, font_name, font_size) <= max_width:
        return text
    ellipsis = "..."
    while text and text_width(text + ellipsis, font_name, font_size) > max_width:
        text = text[:-1].rstrip()
    return text + ellipsis


def wrap_text(c, text, max_width, font_name, font_size, max_lines=None):
    words = clean_text(text).split(" ")
    lines = []
    line = ""
    for word in words:
        candidate = word if not line else f"{line} {word}"
        if c.stringWidth(candidate, font_name, font_size) <= max_width:
            line = candidate
        else:
            if line:
                lines.append(line)
            line = word
    if line:
        lines.append(line)

    if max_lines and len(lines) > max_lines:
        lines = lines[:max_lines]
        lines[-1] = truncate_to_width(lines[-1], font_name, font_size, max_width)
    return lines


def draw_wrapped(c, text, x, y, width, font_name, font_size, leading, max_lines=None, fill=INK):
    c.setFillColor(fill)
    c.setFont(font_name, font_size)
    lines = wrap_text(c, text, width, font_name, font_size, max_lines)
    for index, line in enumerate(lines):
        c.drawString(x, y - index * leading, line)
    return y - len(lines) * leading


def build_question_key(route):
    key = {}
    ordered = []
    for path in route["paths"]:
        for step in path["trail"]:
            question = clean_text(step["question"])
            if question not in key:
                code = f"Q{len(ordered) + 1:02d}"
                key[question] = code
                ordered.append({"code": code, "question": question, "step": clean_text(step.get("step", ""))})
    return key, ordered


def path_code_line(path, question_key):
    parts = []
    for step in path["trail"]:
        code = question_key[clean_text(step["question"])]
        parts.append(f"{code}: {clean_text(step['answer'])}")
    return " / ".join(parts)


def draw_header(c, route, page_num, page_total, total_paths):
    c.setFillColor(INK)
    c.setFont("Helvetica-Bold", 15)
    c.drawString(MARGIN, PAGE_H - MARGIN - 6, route["label"])
    c.setFont("Helvetica", 7.8)
    c.setFillColor(MUTED)
    c.drawRightString(
        PAGE_W - MARGIN,
        PAGE_H - MARGIN - 5,
        f"Decision tree path map - {total_paths} recommended analyses - page {page_num}/{page_total}",
    )
    c.setStrokeColor(LINE)
    c.setLineWidth(0.7)
    c.line(MARGIN, PAGE_H - MARGIN - HEADER_H + 7, PAGE_W - MARGIN, PAGE_H - MARGIN - HEADER_H + 7)


def draw_footer(c):
    c.setFillColor(MUTED)
    c.setFont("Helvetica", 6.5)
    c.drawString(MARGIN, MARGIN - 5, "Generated from app.js - English decision paths")
    c.drawRightString(PAGE_W - MARGIN, MARGIN - 5, "Minimal overview for print")


def draw_question_key(c, questions, x, y, width):
    c.setFillColor(SOFT)
    c.roundRect(x, y - 92, width, 92, 5, stroke=0, fill=1)
    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 7.2)
    c.drawString(x + 8, y - 12, "Question key")

    col_w = (width - 22) / 2
    line_h = 6.6
    for index, item in enumerate(questions):
        col = index // 12
        row = index % 12
        if col > 1:
            break
        tx = x + 8 + col * (col_w + 8)
        ty = y - 24 - row * line_h
        label = f"{item['code']} {item['step']}: {item['question']}"
        c.setFillColor(INK)
        c.setFont("Helvetica-Bold", 5.7)
        c.drawString(tx, ty, item["code"])
        c.setFillColor(MUTED)
        c.setFont("Helvetica", 5.7)
        c.drawString(tx + 17, ty, truncate_to_width(label[4:], "Helvetica", 5.7, col_w - 17))


def draw_card(c, path, question_key, x, y, width):
    c.setStrokeColor(LINE)
    c.setFillColor(colors.white)
    c.roundRect(x, y - CARD_H, width, CARD_H, 4, stroke=1, fill=1)

    c.setFillColor(TEAL)
    c.setFont("Helvetica-Bold", 6.8)
    c.drawString(x + 6, y - 10, truncate_to_width(path["resultTitle"], "Helvetica-Bold", 6.8, width - 12))

    c.setFillColor(MUTED)
    c.setFont("Helvetica", 5.4)
    lines = wrap_text(c, path_code_line(path, question_key), width - 12, "Helvetica", 5.4, max_lines=5)
    for index, line in enumerate(lines):
        c.drawString(x + 6, y - 20 - index * 5.7, line)


def paginate(route, first_page_slots, later_page_slots):
    paths = route["paths"]
    if len(paths) <= first_page_slots:
        return [paths]
    pages = [paths[:first_page_slots]]
    remaining = paths[first_page_slots:]
    for index in range(0, len(remaining), later_page_slots):
        pages.append(remaining[index:index + later_page_slots])
    return pages


def draw_route_pdf(route):
    question_key, questions = build_question_key(route)
    out_path = OUTPUT_DIR / f"decision-path-{route['index']:02d}-{slugify(route['label'])}.pdf"
    c = canvas.Canvas(str(out_path), pagesize=landscape(A4))

    usable_w = PAGE_W - 2 * MARGIN
    col_w = (usable_w - (COLS - 1) * GAP) / COLS
    later_top = PAGE_H - MARGIN - HEADER_H - 4
    later_rows = int((later_top - (MARGIN + FOOTER_H)) // (CARD_H + CARD_GAP))
    first_top = later_top - 101
    first_rows = max(1, int((first_top - (MARGIN + FOOTER_H)) // (CARD_H + CARD_GAP)))
    first_slots = first_rows * COLS
    later_slots = later_rows * COLS
    pages = paginate(route, first_slots, later_slots)

    for page_index, page_paths in enumerate(pages, start=1):
        draw_header(c, route, page_index, len(pages), len(route["paths"]))
        draw_footer(c)
        top = later_top
        if page_index == 1:
            draw_question_key(c, questions, MARGIN, PAGE_H - MARGIN - HEADER_H - 2, usable_w)
            top = first_top

        for item_index, path in enumerate(page_paths):
            col = item_index % COLS
            row = item_index // COLS
            x = MARGIN + col * (col_w + GAP)
            y = top - row * (CARD_H + CARD_GAP)
            draw_card(c, path, question_key, x, y, col_w)

        c.showPage()

    c.save()
    return out_path, len(pages)


def main():
    if len(sys.argv) < 2:
        raise SystemExit("Usage: generate-decision-path-pdfs.py /path/to/decision-paths.json")

    data = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)

    written = []
    for route in data["routes"]:
        pdf_path, page_count = draw_route_pdf(route)
        written.append((pdf_path, page_count, len(route["paths"])))

    for pdf_path, page_count, path_count in written:
        print(f"Wrote {pdf_path.relative_to(ROOT)} ({page_count} page(s), {path_count} tests)")


if __name__ == "__main__":
    main()
