import fs from "node:fs/promises";
import path from "node:path";

const rootDir = path.resolve(import.meta.dirname, "..");
const source = await fs.readFile(path.join(rootDir, "app.js"), "utf8");

function extractConstObject(src, name) {
  const marker = `const ${name} =`;
  const start = src.indexOf(marker);
  if (start < 0) throw new Error(`Missing ${name}`);
  const braceStart = src.indexOf("{", start);
  let depth = 0;
  let inString = false;
  let quote = "";
  let escaped = false;

  for (let index = braceStart; index < src.length; index += 1) {
    const character = src[index];
    if (inString) {
      if (escaped) escaped = false;
      else if (character === "\\") escaped = true;
      else if (character === quote) inString = false;
      continue;
    }
    if (character === "\"" || character === "'" || character === "`") {
      inString = true;
      quote = character;
      continue;
    }
    if (character === "{") depth += 1;
    if (character === "}") {
      depth -= 1;
      if (depth === 0) return src.slice(braceStart, index + 1);
    }
  }

  throw new Error(`Could not parse ${name}`);
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const baseTree = Function(`return (${extractConstObject(source, "tree")});`)();
const baseResults = Function(`return (${extractConstObject(source, "results")});`)();
const languagePacks = Function(
  "tree",
  "results",
  `return (${extractConstObject(source, "languagePacks")});`
)(baseTree, baseResults);

const additions = [
  Function(`return (${extractConstObject(source, "mlLanguageAdditions")});`)(),
  Function(`return (${extractConstObject(source, "metaLanguageAdditions")});`)()
];

const pack = clone(languagePacks.en);

for (const additionGroup of additions) {
  const addition = additionGroup.en;
  Object.assign(pack.tree.goal, addition.goalUpdate);
  if (!pack.tree.goal.answers.some((answer) => answer.next === addition.goalAnswer.next)) {
    pack.tree.goal.answers.push(addition.goalAnswer);
  }
  Object.assign(pack.tree, addition.tree);
  Object.assign(pack.results, addition.results);
}

function collectFromAnswer(answer, routeIndex) {
  const route = {
    id: slugify(answer.label),
    index: routeIndex + 1,
    label: answer.label,
    paths: []
  };

  const firstStep = {
    question: pack.tree.goal.question,
    answer: answer.label,
    step: pack.tree.goal.step
  };

  function walk(nodeId, trail) {
    const node = pack.tree[nodeId];
    if (!node?.answers) return;

    for (const nodeAnswer of node.answers) {
      const nextTrail = [
        ...trail,
        {
          question: node.question,
          answer: nodeAnswer.label,
          step: node.step
        }
      ];

      if (nodeAnswer.result) {
        const result = pack.results[nodeAnswer.result] || {};
        route.paths.push({
          resultId: nodeAnswer.result,
          resultTitle: result.title || nodeAnswer.result,
          summary: result.summary || "",
          trail: nextTrail
        });
      } else if (nodeAnswer.next) {
        walk(nodeAnswer.next, nextTrail);
      }
    }
  }

  if (answer.result) {
    const result = pack.results[answer.result] || {};
    route.paths.push({
      resultId: answer.result,
      resultTitle: result.title || answer.result,
      summary: result.summary || "",
      trail: [firstStep]
    });
  } else if (answer.next) {
    walk(answer.next, [firstStep]);
  }

  route.paths.sort((left, right) => left.resultTitle.localeCompare(right.resultTitle));
  return route;
}

const routes = pack.tree.goal.answers.map(collectFromAnswer);
const payload = {
  generatedFrom: "app.js",
  language: "en",
  rootQuestion: pack.tree.goal.question,
  routes
};

process.stdout.write(`${JSON.stringify(payload, null, 2)}\n`);
