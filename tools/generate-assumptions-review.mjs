import fs from "node:fs";
import vm from "node:vm";

const appSource = fs.readFileSync("app.js", "utf8");
const setupSource = appSource.slice(0, appSource.indexOf("const state ="));
const guideSource = fs.existsSync("docs/assumptions-guide.md")
  ? fs.readFileSync("docs/assumptions-guide.md", "utf8")
  : "";

const context = {
  window: {
    extraLanguagePacks: {}
  },
  console
};

vm.createContext(context);
vm.runInContext(`${setupSource}\nglobalThis.__results = languagePacks.en.results;`, context);

const results = context.__results;

function clean(text) {
  return String(text || "").replace(/\s+/g, " ").trim();
}

function slug(text) {
  return clean(text)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "")
    .slice(0, 58);
}

function csvCell(value) {
  const text = String(value ?? "");
  return `"${text.replace(/"/g, '""')}"`;
}

function familyFor(resultId, title) {
  const text = `${resultId} ${title}`.toLowerCase();

  if (text.includes("meta")) return "Meta-analysis";
  if (text.includes("anova") || text.includes("ancova") || text.includes("manova") || text.includes("mancova")) return "ANOVA / covariance models";
  if (text.includes("mixed")) return "Mixed models";
  if (text.includes("regression") || text.includes("logistic") || text.includes("linear model") || text.includes("discriminant")) return "Regression / prediction models";
  if (text.includes("correlation") || text.includes("chi-square") || text.includes("fisher") || text.includes("mcnemar") || text.includes("log-linear")) return "Association / frequency tests";
  if (text.includes("t-test") || text.includes("wilcoxon") || text.includes("mann") || text.includes("kruskal") || text.includes("friedman") || text.includes("variance") || text.includes("binomial")) return "Mean / median / variance tests";
  if (text.includes("factor") || text.includes("component") || text.includes("sem") || text.includes("structural") || text.includes("network") || text.includes("path analysis")) return "Latent / exploratory structure";
  if (text.includes("cluster") || text.includes("tree") || text.includes("forest") || text.includes("nearest") || text.includes("bayes")) return "Machine learning / exploratory grouping";
  return "Other";
}

function parseGuideDetails(markdown) {
  const details = new Map();
  let currentId = "";

  for (const rawLine of markdown.split(/\r?\n/)) {
    const idMatch = rawLine.match(/^\*\*Result id:\*\* `([^`]+)`/);
    if (idMatch) {
      currentId = idMatch[1];
      continue;
    }

    const assumptionMatch = rawLine.match(/^- \*\*(.+?):\*\*\s*(.+)$/) || rawLine.match(/^- \*\*(.+?)\*\*:\s*(.+)$/);
    if (currentId && assumptionMatch) {
      details.set(`${currentId}::${clean(assumptionMatch[1])}`, clean(assumptionMatch[2]));
    }
  }

  return details;
}

const guideDetails = parseGuideDetails(guideSource);
const headers = [
  "review_group",
  "result_id",
  "result_name",
  "assumption_id",
  "short_assumption",
  "current_detail",
  "review_status",
  "proposed_revision",
  "how_to_check",
  "what_to_report",
  "review_notes"
];

const rows = [headers];

for (const [resultId, result] of Object.entries(results).sort(([, a], [, b]) => clean(a.title).localeCompare(clean(b.title)))) {
  const title = clean(result.title);
  const usedIds = new Map();

  for (const assumption of result.assumptions || []) {
    const shortAssumption = clean(assumption);
    const baseId = `${resultId}.${slug(shortAssumption) || "assumption"}`;
    const duplicateCount = usedIds.get(baseId) || 0;
    usedIds.set(baseId, duplicateCount + 1);
    const assumptionId = duplicateCount ? `${baseId}_${duplicateCount + 1}` : baseId;
    const currentDetail = guideDetails.get(`${resultId}::${shortAssumption}`) || "";

    rows.push([
      familyFor(resultId, title),
      resultId,
      title,
      assumptionId,
      shortAssumption,
      currentDetail,
      "Needs review",
      "",
      "",
      "",
      ""
    ]);
  }
}

const csv = rows.map((row) => row.map(csvCell).join(",")).join("\n");
fs.writeFileSync("docs/assumptions-review-table.csv", `${csv}\n`);

const summary = new Map();
for (const row of rows.slice(1)) {
  summary.set(row[0], (summary.get(row[0]) || 0) + 1);
}

const summaryLines = [
  "# Assumptions Review Summary",
  "",
  `Generated ${rows.length - 1} assumption rows from the English website content.`,
  "",
  "## Rows By Review Group",
  "",
  ...Array.from(summary.entries()).sort(([a], [b]) => a.localeCompare(b)).map(([group, count]) => `- **${group}:** ${count}`),
  "",
  "## Files",
  "",
  "- `docs/assumptions-review-table.csv`: editable review table.",
  "- `docs/assumptions-review-workflow.md`: suggested review process and status definitions.",
  ""
];

fs.writeFileSync("docs/assumptions-review-summary.md", `${summaryLines.join("\n")}\n`);
