import fs from "node:fs";
import vm from "node:vm";

const appSource = fs.readFileSync("app.js", "utf8");
const setupSource = appSource.slice(0, appSource.indexOf("const state ="));
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
  return String(text || "").trim();
}

function detailFor(assumption, title) {
  const text = clean(assumption);
  const lower = text.toLowerCase();
  const analysis = clean(title);

  if (lower.includes("metric outcome") || lower.includes("metric dependent") || lower === "metric variable" || lower.includes("one metric variable") || lower.includes("metric variables")) {
    return "The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.";
  }
  if (lower.includes("ordinal")) {
    return "The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.";
  }
  if (lower.includes("categorical") || lower.includes("nominal") || lower.includes("dichotomous") || lower.includes("multicategory") || lower.includes("two-level")) {
    return "Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.";
  }
  if (lower.includes("independent observations") || lower.includes("independent groups") || lower.includes("independent samples") || lower.includes("independent studies")) {
    return "One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.";
  }
  if (lower.includes("independent residuals")) {
    return "Model errors should not show systematic dependence across time, persons, groups, or measurement order. Check the study design first, then inspect residual plots or autocorrelation if observations are ordered.";
  }
  if (lower.includes("paired") || lower.includes("pairing") || lower.includes("repeated measurements") || lower.includes("same cases")) {
    return "Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.";
  }
  if (lower.includes("multicollinearity")) {
    return "Predictors should not be nearly redundant. Inspect correlations, variance inflation factors, condition indices, or unstable coefficients that change markedly when other predictors are added.";
  }
  if (lower.includes("homogeneity of regression slopes")) {
    return "The relation between each covariate and the dependent variable should be similar across groups. Check covariate-by-group interactions; if slopes differ, the adjusted group comparison may be misleading.";
  }
  if (lower.includes("metric covariate") || lower.includes("metric covariates")) {
    return "Covariates should be quantitative predictors measured before or independently of the grouping variable. Check their scale, missingness, outliers, and whether they are conceptually appropriate controls.";
  }
  if (lower.includes("cluster solution")) {
    return "The chosen grouping should make substantive sense, not merely optimize an algorithmic criterion. Compare alternative numbers of clusters and inspect whether clusters are stable, interpretable, and useful for the research question.";
  }
  if (lower.includes("features describing people or objects")) {
    return "The variables used to define similarity should be relevant to the grouping goal. Remove identifiers, outcomes that should not define clusters, duplicate measures, and variables whose scale would dominate the solution.";
  }
  if (lower.includes("fixed number of trials") || lower.includes("fixed number of cases")) {
    return "The number of observations or trials should be determined by the design rather than by stopping after seeing the result. The expected probability should be defined before the observed count is evaluated.";
  }
  if (lower.includes("sufficient number of events")) {
    return "There should be enough outcome events in each modeled category for stable estimation. Sparse outcomes can produce wide confidence intervals, separation, or unstable odds ratios.";
  }
  if (lower.includes("nested") || lower.includes("cluster") || lower.includes("random effects")) {
    return "The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.";
  }
  if (lower.includes("normal")) {
    return "The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.";
  }
  if (lower.includes("multivariate normality")) {
    return "The joint distribution of the dependent variables or predictors should be approximately multivariate normal within each group. Inspect univariate distributions, bivariate scatterplots, outliers, and whether transformations or robust alternatives are needed.";
  }
  if (lower.includes("homogeneity of variances") || lower.includes("equal variances") || lower.includes("homoscedasticity")) {
    return "Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.";
  }
  if (lower.includes("covariance")) {
    return "Groups should have broadly similar covariance matrices among the dependent variables or predictors. Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes.";
  }
  if (lower.includes("linearity") || lower.includes("linear relationship") || lower.includes("linear relation") || lower.includes("linear relationships")) {
    return "The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.";
  }
  if (lower.includes("monotonic")) {
    return "As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear. A scatterplot or rank plot is usually the clearest check.";
  }
  if (lower.includes("outlier")) {
    return "A few extreme or influential observations should not dominate the result. Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.";
  }
  if (lower.includes("sphericity")) {
    return "For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar. If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.";
  }
  if (lower.includes("residual diagnostics") || lower.includes("variance structure")) {
    return "Inspect residual plots, Q-Q plots, fitted-vs-residual patterns, and the estimated variance components. For mixed models, check whether the random-effect structure is plausible and whether residual variance differs across groups or time points.";
  }
  if (lower.includes("expected cell") || lower.includes("expected count") || lower.includes("expected frequencies") || lower.includes("expected proportions")) {
    return "Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.";
  }
  if (lower.includes("sample size") || lower.includes("events per parameter") || lower.includes("group sizes") || lower.includes("adequate sample") || lower.includes("adequate events")) {
    return "There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.";
  }
  if (lower.includes("reference category")) {
    return "The baseline category should be substantively meaningful because model coefficients are interpreted relative to it. Record the chosen reference category before reporting odds ratios or contrasts.";
  }
  if (lower.includes("link function") || lower.includes("distribution")) {
    return "The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.";
  }
  if (lower.includes("proportional-odds")) {
    return "The relation between predictors and the cumulative odds should be approximately constant across thresholds. If this is not plausible, consider partial proportional-odds or multinomial models.";
  }
  if (lower.includes("causal") || lower.includes("causality")) {
    return "The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.";
  }
  if (lower.includes("theoretically") || lower.includes("a priori") || lower.includes("predefined") || lower.includes("justified")) {
    return "The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.";
  }
  if (lower.includes("model fit") || lower.includes("misfit") || lower.includes("alternative models")) {
    return "Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives. A statistically acceptable fit does not by itself make the model substantively correct.";
  }
  if (lower.includes("correlations among variables") || lower.includes("meaningful correlations")) {
    return "Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure; extremely high correlations can indicate redundancy.";
  }
  if (lower.includes("standardise") || lower.includes("standardized") || lower.includes("standardisation") || lower.includes("scaling")) {
    return "Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.";
  }
  if (lower.includes("distance") || lower.includes("similarity") || lower.includes("dissimilarity")) {
    return "The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.";
  }
  if (lower.includes("training") || lower.includes("validation") || lower.includes("cross-validation") || lower.includes("unseen data")) {
    return "Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.";
  }
  if (lower.includes("overfitting") || lower.includes("pruning") || lower.includes("depth")) {
    return "Flexible models can learn noise. Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.";
  }
  if (lower.includes("class distribution") || lower.includes("class imbalance")) {
    return "Check whether outcome classes are rare or unevenly distributed. Accuracy alone can be misleading; also inspect sensitivity, specificity, balanced accuracy, F1, AUC, or calibration as appropriate.";
  }
  if (lower.includes("heterogeneity") || lower.includes("tau") || lower.includes("i2")) {
    return "Effects may differ across studies or subgroups. Report heterogeneity statistics and interpret them together with study design, populations, measures, and interventions.";
  }
  if (lower.includes("effect size") || lower.includes("variance") || lower.includes("standard error") || lower.includes("precision")) {
    return "Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.";
  }
  if (lower.includes("publication") || lower.includes("small-study") || lower.includes("funnel")) {
    return "Publication-bias diagnostics require enough comparable studies and are not definitive. Funnel asymmetry can reflect bias, heterogeneity, study quality, or chance.";
  }
  if (lower.includes("interpretable")) {
    return "The result should be explainable in the context of the construct, measurement scale, and research design. Avoid treating purely algorithmic groupings or dimensions as meaningful without substantive validation.";
  }
  if (lower.includes("coded")) {
    return "Variable coding should match the analysis: categories, contrasts, missing values, dummy variables, and direction of scales should be checked before interpretation.";
  }

  return `For ${analysis}, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.`;
}

const entries = Object.entries(results).sort(([, a], [, b]) => clean(a.title).localeCompare(clean(b.title)));
const lines = [];

lines.push("# Assumptions Guide for the Decision Tree");
lines.push("");
lines.push("This document expands the short assumption bullets shown in the interactive decision tree. It is meant as a methodological reference: the website helps choose a common analysis, but the researcher still needs to check whether the design, data structure, coding, and diagnostics make that analysis defensible.");
lines.push("");
lines.push("The sections below follow the English result names used in the website. Each entry includes the short purpose from the decision tree and a more detailed explanation of every assumption bullet.");
lines.push("");
lines.push("## How To Use This Guide");
lines.push("");
lines.push("- Start with the analysis recommended by the decision tree.");
lines.push("- Read the corresponding assumptions before running or reporting the analysis.");
lines.push("- Treat assumptions as checks to document, not as automatic pass/fail rules.");
lines.push("- If an assumption is doubtful, inspect plots, descriptive statistics, robust alternatives, transformations, or a model that better matches the design.");
lines.push("- For causal claims, remember that statistical significance is never enough; the study design must support the causal interpretation.");
lines.push("");
lines.push("## Common Diagnostic Questions");
lines.push("");
lines.push("- **Scale level:** Are variables metric, ordinal, nominal, dichotomous, or counts in the way the selected method requires?");
lines.push("- **Independence:** Are observations independent, or are there repeated, paired, clustered, nested, or study-level dependencies?");
lines.push("- **Distribution:** Is the normality assumption about the correct quantity, such as residuals or paired differences rather than all raw values pooled together?");
lines.push("- **Variance and covariance:** Do groups have comparable variability or covariance structures, or is a robust/Welch/mixed alternative more appropriate?");
lines.push("- **Sample size:** Is there enough information for the number of groups, predictors, parameters, clusters, events, or studies?");
lines.push("- **Model diagnostics:** Do residuals, influence, fit, validation, and sensitivity checks support the interpretation?");
lines.push("");
lines.push("## Detailed Assumptions By Analysis");
lines.push("");

for (const [id, result] of entries) {
  lines.push(`### ${clean(result.title)}`);
  lines.push("");
  lines.push(`**Result id:** \`${id}\``);
  lines.push("");
  lines.push(`**Purpose:** ${clean(result.summary)}`);
  lines.push("");
  lines.push("**Assumptions and checks:**");
  lines.push("");
  for (const assumption of result.assumptions || []) {
    lines.push(`- **${clean(assumption)}:** ${detailFor(assumption, result.title)}`);
  }
  lines.push("");
}

lines.push("## Notes For Reporting");
lines.push("");
lines.push("- State which assumptions were checked and how.");
lines.push("- Report any relevant correction, robust alternative, transformation, or sensitivity analysis.");
lines.push("- If an assumption is only approximately met, describe the residual risk rather than hiding it.");
lines.push("- Separate statistical assumptions from design assumptions: a clean model diagnostic does not repair confounding, nonrandom assignment, measurement bias, or unclear temporal ordering.");
lines.push("");

fs.writeFileSync("docs/assumptions-guide.md", `${lines.join("\n")}\n`);
