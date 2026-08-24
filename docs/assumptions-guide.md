# Assumptions Guide for the Decision Tree

This document expands the short assumption bullets shown in the interactive decision tree. It is meant as a methodological reference: the website helps choose a common analysis, but the researcher still needs to check whether the design, data structure, coding, and diagnostics make that analysis defensible.

The sections below follow the English result names used in the website. Each entry includes the short purpose from the decision tree and a more detailed explanation of every assumption bullet.

## How To Use This Guide

- Start with the analysis recommended by the decision tree.
- Read the corresponding assumptions before running or reporting the analysis.
- Treat assumptions as checks to document, not as automatic pass/fail rules.
- If an assumption is doubtful, inspect plots, descriptive statistics, robust alternatives, transformations, or a model that better matches the design.
- For causal claims, remember that statistical significance is never enough; the study design must support the causal interpretation.

## Common Diagnostic Questions

- **Scale level:** Are variables metric, ordinal, nominal, dichotomous, or counts in the way the selected method requires?
- **Independence:** Are observations independent, or are there repeated, paired, clustered, nested, or study-level dependencies?
- **Distribution:** Is the normality assumption about the correct quantity, such as residuals or paired differences rather than all raw values pooled together?
- **Variance and covariance:** Do groups have comparable variability or covariance structures, or is a robust/Welch/mixed alternative more appropriate?
- **Sample size:** Is there enough information for the number of groups, predictors, parameters, clusters, events, or studies?
- **Model diagnostics:** Do residuals, influence, fit, validation, and sensitivity checks support the interpretation?

## Detailed Assumptions By Analysis

### ANCOVA

**Result id:** `ancova`

**Purpose:** Compares groups on one metric dependent variable while controlling for one or more covariates.

**Assumptions and checks:**

- **One metric dependent variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **One or more categorical independent variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **One or more metric covariates:** Covariates should be quantitative predictors measured before or independently of the grouping variable. Check their scale, missingness, outliers, and whether they are conceptually appropriate controls.
- **Linear relation between covariates and the dependent variable:** The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.
- **Homogeneity of regression slopes:** The relation between each covariate and the dependent variable should be similar across groups. Check covariate-by-group interactions; if slopes differ, the adjusted group comparison may be misleading.
- **Normally distributed residuals and homogeneity of variance:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### Binary logistic regression

**Result id:** `logisticRegression`

**Purpose:** Models the probability of a dichotomous outcome variable.

**Assumptions and checks:**

- **Dichotomous outcome variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **No strong multicollinearity:** Predictors should not be nearly redundant. Inspect correlations, variance inflation factors, condition indices, or unstable coefficients that change markedly when other predictors are added.
- **Sufficient number of events:** There should be enough outcome events in each modeled category for stable estimation. Sparse outcomes can produce wide confidence intervals, separation, or unstable odds ratios.

### Binomial test

**Result id:** `binomialTest`

**Purpose:** Tests whether the empirical frequency or proportion of a two-level variable differs from a theoretically expected probability.

**Assumptions and checks:**

- **Two-level categorical variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Theoretically expected proportion is defined:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Fixed number of trials or cases:** The number of observations or trials should be determined by the design rather than by stopping after seeing the result. The expected probability should be defined before the observed count is evaluated.

### Chi-square test for one variance

**Result id:** `chiSquareVariance`

**Purpose:** Tests whether a sample variance differs from a known or theoretical population variance.

**Assumptions and checks:**

- **One metric variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Known or theoretically justified population variance:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Normality in the population:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### Chi-square test of independence

**Result id:** `chiSquareAssociation`

**Purpose:** Tests whether two categorical variables are statistically associated.

**Assumptions and checks:**

- **Categorical variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Sufficient expected cell counts:** Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.

### Cluster analysis

**Result id:** `clusterAnalysis`

**Purpose:** Exploratory procedure for grouping people or objects based on similarity.

**Assumptions and checks:**

- **Features describing people or objects:** The variables used to define similarity should be relevant to the grouping goal. Remove identifiers, outcomes that should not define clusters, duplicate measures, and variables whose scale would dominate the solution.
- **Appropriate scaling or standardisation:** Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.
- **Meaningful distance or similarity measure:** The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.
- **Cluster solution is substantively interpretable:** The chosen grouping should make substantive sense, not merely optimize an algorithmic criterion. Compare alternative numbers of clusters and inspect whether clusters are stable, interpretable, and useful for the research question.

### Confirmatory factor analysis (CFA)

**Result id:** `confirmatoryFactorAnalysis`

**Purpose:** Tests whether a theoretically predefined measurement model fits the observed indicators.

**Assumptions and checks:**

- **Latent constructs are predefined:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Multiple indicators per factor:** For Confirmatory factor analysis (CFA), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **The item-factor assignment is theoretically justified:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Model fit and local misfit should be evaluated:** Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives. A statistically acceptable fit does not by itself make the model substantively correct.

### Correlation-coefficient meta-analysis

**Result id:** `metaCorrelationAnalysis`

**Purpose:** Synthesizes correlation coefficients from several studies.

**Assumptions and checks:**

- **Correlation and sample size available for each study:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Studies measure comparable constructs:** For Correlation-coefficient meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Moderator and Study Label can be added:** For Correlation-coefficient meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Select fixed/random effects, moderator analyses, and publication-bias checks in the model options:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### Decision tree classifier

**Result id:** `decisionTreeClassifier`

**Purpose:** Classifies cases with transparent decision rules and is useful when interpretability matters.

**Assumptions and checks:**

- **Categorical outcome variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Training/test split or cross-validation:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.
- **Pruning or depth control to reduce overfitting:** Flexible models can learn noise. Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.
- **Inspect class distribution:** The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.

### Decision tree regression

**Result id:** `decisionTreeRegression`

**Purpose:** Predicts a metric outcome using interpretable if-then decision rules.

**Assumptions and checks:**

- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Training/test split or cross-validation:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.
- **Pruning or depth control to reduce overfitting:** Flexible models can learn noise. Limit tree depth, prune, tune hyperparameters, or use validation data to check whether performance generalizes beyond the training sample.
- **Predictors are meaningfully coded:** Variable coding should match the analysis: categories, contrasts, missing values, dummy variables, and direction of scales should be checked before interpretation.

### Discriminant analysis

**Result id:** `discriminantAnalysis`

**Purpose:** Classifies cases into nominal groups from several interval-scaled predictors and describes which variables separate the groups.

**Assumptions and checks:**

- **Nominal dependent variable with known groups:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Interval-scaled independent variables:** For Discriminant analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Multivariate normality within groups:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Similar covariance matrices:** Groups should have broadly similar covariance matrices among the dependent variables or predictors. Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes.
- **Adequate group sizes:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.

### Effect-size meta-analysis

**Result id:** `metaEffectSizeAnalysis`

**Purpose:** Synthesizes already computed effect sizes with their variance or standard error.

**Assumptions and checks:**

- **Effect size available for each study:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Variance or standard error available for each effect size:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Moderator and Study Label can be added:** For Effect-size meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Select fixed/random effects, moderator analyses, and publication-bias checks in the model options:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### F-test for comparing two variances

**Result id:** `varianceFTest`

**Purpose:** Compares whether the variances of two independent samples differ.

**Assumptions and checks:**

- **Two independent samples:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Normality in both populations:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Sensitive to outliers and skew:** A few extreme or influential observations should not dominate the result. Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.

### Factor analysis

**Result id:** `factorAnalysis`

**Purpose:** Exploratory procedure for reducing several correlated variables to a smaller set of latent factors or dimensions.

**Assumptions and checks:**

- **Several metric or approximately metric variables:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Meaningful correlations among variables:** Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure; extremely high correlations can indicate redundancy.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Interpretable factor structure:** The result should be explainable in the context of the construct, measurement scale, and research design. Avoid treating purely algorithmic groupings or dimensions as meaningful without substantive validation.
- **No a priori hypothesis about the relationships among the factors:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.

### Factorial ANOVA (two or more factors)

**Result id:** `twoWayAnova`

**Purpose:** Tests the main effects and interactions of two or more independent factors on a metric outcome variable.

**Assumptions and checks:**

- **Two or more categorical independent factors:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Normality within cells:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Homogeneity of variances:** Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.

### Factorial repeated-measures ANOVA (two or more factors)

**Result id:** `twoWayRepeatedAnova`

**Purpose:** Tests main effects and interactions for two or more factors when at least one factor is measured within the same participants.

**Assumptions and checks:**

- **At least one repeated-measures factor:** For Factorial repeated-measures ANOVA (two or more factors), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Sphericity or suitable correction:** For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar. If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.
- **Balanced assignment of time points or conditions:** For Factorial repeated-measures ANOVA (two or more factors), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Fisher's exact test

**Result id:** `fisher`

**Purpose:** Tests associations in small 2x2 tables when chi-square assumptions are not met.

**Assumptions and checks:**

- **Dichotomous categorical variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Small expected counts:** Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.

### Fixed-effect meta-analysis

**Result id:** `fixedEffectMetaAnalysis`

**Purpose:** Estimates one common effect under the assumption that all studies share the same true effect.

**Assumptions and checks:**

- **Several independent studies or effect sizes:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Common effect size and standard error/variance available:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Studies are substantively very similar:** For Fixed-effect meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Heterogeneity is low:** Effects may differ across studies or subgroups. Report heterogeneity statistics and interpret them together with study design, populations, measures, and interventions.

### Friedman test

**Result id:** `friedman`

**Purpose:** Nonparametric alternative to repeated-measures ANOVA for several paired conditions.

**Assumptions and checks:**

- **Several paired measurements:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **At least ordinal values:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Same cases in all conditions:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.

### Generalized linear mixed model

**Result id:** `generalizedLinearMixedModel`

**Purpose:** Extends logistic or other generalized models to repeated, nested, or clustered data.

**Assumptions and checks:**

- **Dichotomous, categorical, or count dependent variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Appropriate link function and distribution:** The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.
- **Clusters or persons entered as random effects:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.
- **Adequate events per parameter:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.

### Independent-samples t-test

**Result id:** `independentT`

**Purpose:** Compares the means of two independent groups with a metric outcome.

**Assumptions and checks:**

- **Two independent groups:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Approximate normality:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Equal variances or Welch correction:** Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.

### k-nearest neighbors classifier

**Result id:** `knnClassifier`

**Purpose:** Classifies cases according to the classes of their most similar neighbors.

**Assumptions and checks:**

- **Categorical outcome variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Scaled/standardised predictors:** Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.
- **Meaningful distance metric:** The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.
- **Choose k and weighting using validation:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.

### k-nearest neighbors regression

**Result id:** `knnRegression`

**Purpose:** Predicts metric values from the most similar cases in the feature space.

**Assumptions and checks:**

- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Scaled/standardised predictors:** Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.
- **Meaningful distance metric:** The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.
- **Choose k using validation:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.

### Kendall's rank correlation

**Result id:** `kendall`

**Purpose:** Rank-based correlation for ordinal variables or monotonic relationships, especially useful with small samples or many ties.

**Assumptions and checks:**

- **At least ordinal scale level:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Monotonic relationship:** As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear. A scatterplot or rank plot is usually the clearest check.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Useful with ties or smaller samples:** For Kendall's rank correlation, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Kruskal-Wallis test

**Result id:** `kruskalWallis`

**Purpose:** Nonparametric alternative to one-way ANOVA for several independent groups.

**Assumptions and checks:**

- **Several independent groups:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **At least ordinal outcome:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.

### Linear mixed model

**Result id:** `linearMixedModel`

**Purpose:** Models metric outcomes for repeated, nested, or clustered observations using fixed and random effects.

**Assumptions and checks:**

- **Metric dependent variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Observations nested within people, teams, or measurement occasions:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.
- **Random effects are theoretically justified:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.
- **Check residual diagnostics and variance structure:** Inspect residual plots, Q-Q plots, fitted-vs-residual patterns, and the estimated variance components. For mixed models, check whether the random-effect structure is plausible and whether residual variance differs across groups or time points.

### Linear regression

**Result id:** `linearRegression`

**Purpose:** Models a metric outcome variable using one or more predictors; without a suitable design, it does not provide evidence of causality.

**Assumptions and checks:**

- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Linear relationships:** The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.
- **Independent residuals:** Model errors should not show systematic dependence across time, persons, groups, or measurement order. Check the study design first, then inspect residual plots or autocorrelation if observations are ordered.
- **Homoscedasticity and residual diagnostics:** Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.
- **Prediction or association, not causality by itself:** The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.

### Log-linear model

**Result id:** `logLinearModel`

**Purpose:** Models associations and interactions among several nominal variables in a contingency table.

**Assumptions and checks:**

- **Several nominal variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Frequency data in a contingency table:** For Log-linear model, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Sufficient expected cell counts:** Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.

### MANCOVA

**Result id:** `mancova`

**Purpose:** Compares groups on two or more related metric dependent variables while controlling for one or more covariates.

**Assumptions and checks:**

- **Two or more metric dependent variables:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **One or more categorical independent variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **One or more metric covariates:** Covariates should be quantitative predictors measured before or independently of the grouping variable. Check their scale, missingness, outliers, and whether they are conceptually appropriate controls.
- **Linear relation between covariates and dependent variables:** The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.
- **Homogeneity of regression slopes:** The relation between each covariate and the dependent variable should be similar across groups. Check covariate-by-group interactions; if slopes differ, the adjusted group comparison may be misleading.
- **Multivariate normality and homogeneity of covariance matrices:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### Mann-Whitney U test

**Result id:** `mannWhitney`

**Purpose:** Nonparametric alternative to the independent t-test for two independent groups.

**Assumptions and checks:**

- **Two independent groups:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **At least ordinal outcome:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Similar distribution shapes for location interpretation:** The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.

### MANOVA

**Result id:** `manova`

**Purpose:** Compares groups on two or more related metric dependent variables simultaneously.

**Assumptions and checks:**

- **Two or more metric dependent variables:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **One or more categorical independent variables:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Multivariate normality within groups:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Homogeneity of covariance matrices:** Groups should have broadly similar covariance matrices among the dependent variables or predictors. Large differences can make multivariate tests or discriminant functions unstable, especially with small or unequal group sizes.
- **Meaningful correlations among dependent variables:** Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure; extremely high correlations can indicate redundancy.

### McNemar test

**Result id:** `mcnemar`

**Purpose:** Compares two paired dichotomous measurements, such as pre-post categories.

**Assumptions and checks:**

- **Two paired dichotomous measurements:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Paired data:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **Discordant pairs are relevant:** For McNemar test, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Mean-difference meta-analysis

**Result id:** `metaMeanDifferenceAnalysis`

**Purpose:** Synthesizes group differences from n, mean, and standard deviation.

**Assumptions and checks:**

- **n, M, and SD available for each group:** For Mean-difference meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Groups and measurement scales are comparable:** For Mean-difference meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Moderator and Study Label can be added:** For Mean-difference meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Select fixed/random effects, moderator analyses, and publication-bias checks in the model options:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### Meta-analysis

**Result id:** `majorMetaAnalysis`

**Purpose:** Synthesizes several studies with the appropriate input option. The fixed- or random-effects model, moderator analyses, and publication-bias diagnostics are then chosen in the model options.

**Assumptions and checks:**

- **Several independent studies or effect sizes:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Input data match the selected option:** For Meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Justify fixed vs. random effects from study design and heterogeneity:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.
- **Report moderator analyses and publication-bias checks as optional follow-up analyses:** Publication-bias diagnostics require enough comparable studies and are not definitive. Funnel asymmetry can reflect bias, heterogeneity, study quality, or chance.

### Meta-regression

**Result id:** `metaRegression`

**Purpose:** Tests whether continuous or multiple study-level moderators explain between-study differences.

**Assumptions and checks:**

- **Enough studies:** For Meta-regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Moderator measured at study level:** For Meta-regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Same effect metric:** For Meta-regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Ecological interpretation considered:** For Meta-regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Multidimensional scaling

**Result id:** `multidimensionalScaling`

**Purpose:** Exploratory procedure for representing distances or dissimilarities among people or objects in a small number of dimensions.

**Assumptions and checks:**

- **Distance or dissimilarity matrix:** The chosen distance or similarity measure should match the meaning of the variables and the research question. Check whether Euclidean, Manhattan, correlation-based, or other distances are most defensible.
- **People or objects are comparable:** For Multidimensional scaling, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Number of dimensions chosen using stress and interpretability:** For Multidimensional scaling, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Primarily an exploratory representation:** For Multidimensional scaling, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Multinomial logistic regression

**Result id:** `multinomialRegression`

**Purpose:** Models a categorical outcome variable with more than two categories.

**Assumptions and checks:**

- **Multicategory categorical outcome:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Meaningful reference category:** The baseline category should be substantively meaningful because model coefficients are interpreted relative to it. Record the chosen reference category before reporting odds ratios or contrasts.

### Naive Bayes classifier

**Result id:** `naiveBayes`

**Purpose:** Fast probabilistic baseline for categorical prediction, especially with many simple features.

**Assumptions and checks:**

- **Categorical outcome variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Predictors are treated as approximately conditionally independent:** For Naive Bayes classifier, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Suitable distribution for metric features:** The model family should match the outcome scale and data-generating process, such as Gaussian for continuous outcomes, binomial/logit for binary outcomes, Poisson or negative binomial for counts, and cumulative links for ordinal outcomes.
- **Check predicted probabilities with validation data:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.

### Network analysis

**Result id:** `networkAnalysis`

**Purpose:** Explores direct relations among several variables as a network of nodes and edges.

**Assumptions and checks:**

- **Several metric or ordinal variables:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Edges are interpreted as conditional associations:** For Network analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Network stability and robustness should be checked:** For Network analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **No causal interpretation without a suitable design:** The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.

### Nonparametric factorial ANOVA (ART)

**Result id:** `nonparametricTwoWayAnova`

**Purpose:** Robust alternative for factorial designs with two or more independent factors, commonly using the aligned-rank-transform approach.

**Assumptions and checks:**

- **Two or more categorical independent factors:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **At least ordinal outcome:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Interactions tested on rank-transformed data:** For Nonparametric factorial ANOVA (ART), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Nonparametric factorial repeated-measures ANOVA (ART)

**Result id:** `nonparametricTwoWayRepeatedAnova`

**Purpose:** Robust alternative for factorial repeated-measures designs with two or more factors when parametric assumptions are not tenable.

**Assumptions and checks:**

- **At least one repeated-measures factor:** For Nonparametric factorial repeated-measures ANOVA (ART), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **At least ordinal outcome:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Same cases in paired conditions:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **Interactions tested on rank-transformed data:** For Nonparametric factorial repeated-measures ANOVA (ART), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Odds-ratio meta-analysis

**Result id:** `metaOddsRatioAnalysis`

**Purpose:** Synthesizes odds ratios from event counts and group sizes across studies.

**Assumptions and checks:**

- **Several independent studies:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Events and total sample size available for each group:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Moderator and Study Label can be added:** For Odds-ratio meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Select fixed/random effects, moderator analyses, and publication-bias checks in the model options:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### One-sample t-test

**Result id:** `oneSampleT`

**Purpose:** Compares the mean of one metric sample with a specified reference value.

**Assumptions and checks:**

- **Metric variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Approximate normal distribution:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### One-sample Wilcoxon signed-rank test

**Result id:** `oneSampleWilcoxon`

**Purpose:** Nonparametric alternative when a median or rank pattern is tested against a reference value.

**Assumptions and checks:**

- **At least ordinal data:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Symmetric differences helpful:** For One-sample Wilcoxon signed-rank test, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.

### One-sample z-test

**Result id:** `oneSampleZ`

**Purpose:** Compares the mean of one metric sample with a reference value when the population standard deviation or variance is known.

**Assumptions and checks:**

- **Metric variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Known population standard deviation or variance:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Normal population or sufficiently large sample:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### One-way ANOVA

**Result id:** `anova`

**Purpose:** Compares means across more than two independent groups.

**Assumptions and checks:**

- **Independent groups:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Normality within groups:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.
- **Homogeneity of variances:** Groups or fitted values should show roughly comparable variability. Use residual plots, group standard deviations, Levene-type checks, or robust/Welch alternatives when variability differs strongly.

### Ordinal mixed model

**Result id:** `ordinalMixedModel`

**Purpose:** Models ordinal outcomes with repeated or clustered observations, often using cumulative link models.

**Assumptions and checks:**

- **Ordinal dependent variable:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Repeated or clustered observations:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.
- **Check proportional-odds assumption:** The relation between predictors and the cumulative odds should be approximately constant across thresholds. If this is not plausible, consider partial proportional-odds or multinomial models.
- **Random effects are theoretically justified:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### Paired-samples t-test

**Result id:** `pairedT`

**Purpose:** Compares two paired means, for example pre-post measurements.

**Assumptions and checks:**

- **Two paired measurements:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **Metric difference scores:** For Paired-samples t-test, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Approximate normality of differences:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### Path analysis (mediation)

**Result id:** `pathAnalysis`

**Purpose:** Models directed relations among several observed variables, often to test direct, indirect, or mediated effects.

**Assumptions and checks:**

- **All variables are observed/measurable:** For Path analysis (mediation), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Theoretically justified path direction:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Linear relationships:** The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Causal interpretation only with a suitable design:** The statistical model alone does not establish causality. Causal interpretation requires design support such as randomization, temporal ordering, strong theory, careful confounder control, and sensitivity analysis.

### Pearson chi-square goodness-of-fit test

**Result id:** `chiSquareGoodness`

**Purpose:** Tests whether the empirical frequency distribution of a multilevel categorical variable matches a theoretically expected distribution.

**Assumptions and checks:**

- **Multilevel categorical variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Expected frequencies or proportions are defined:** Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Sufficient expected counts per category:** Expected frequencies should be large enough for asymptotic approximations to work. If many expected cells are small, combine substantively similar categories, use an exact test where available, or choose a model designed for sparse counts.

### Pearson correlation

**Result id:** `pearson`

**Purpose:** Suitable when two metric variables are tested for a linear relationship.

**Assumptions and checks:**

- **Metric variables:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Linear relationship:** The association should be adequately described by a straight-line relation on the model scale. Scatterplots, partial residual plots, and fitted-vs-residual plots help detect curvature or threshold patterns.
- **No dominant outliers:** A few extreme or influential observations should not dominate the result. Inspect raw data, scatterplots, standardized residuals, leverage, and influence diagnostics before deciding whether values are errors, legitimate extremes, or reasons to use robust methods.
- **For inference: approximate bivariate normality:** The relevant distribution should be approximately normal, usually within groups or for residuals rather than for the raw pooled data. Inspect histograms, Q-Q plots, residual plots, and outliers; with larger samples, mild deviations are often less problematic.

### Principal component analysis (PCA)

**Result id:** `principalComponentAnalysis`

**Purpose:** Reduces many correlated metric variables to a smaller set of components that explain as much variance as possible.

**Assumptions and checks:**

- **Several metric or approximately metric variables:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Meaningful correlations among variables:** Variables should share enough common information for dimension reduction or latent structure to be meaningful. Very weak correlations suggest little shared structure; extremely high correlations can indicate redundancy.
- **Standardise variables on different scales:** Put predictors on comparable scales before distance-based or component-based methods when units differ. Otherwise variables with larger numeric ranges can dominate the result.
- **Choose components by explained variance and interpretability:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.

### Proportion meta-analysis

**Result id:** `metaProportionAnalysis`

**Purpose:** Synthesizes proportions from event frequencies/counts and total sample sizes.

**Assumptions and checks:**

- **Event frequency/count available for each study:** For Proportion meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Total sample size available for each study:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Moderator and Study Label can be added:** For Proportion meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Select fixed/random effects, moderator analyses, and publication-bias checks in the model options:** The data contain grouping structures such as repeated measures within participants or athletes within teams. The random-effect structure should match the design question and should be supported by enough clusters and observations per cluster.

### Publication-bias diagnostics

**Result id:** `publicationBiasDiagnostics`

**Purpose:** Inspects funnel-plot asymmetry and small-study effects as possible signs of bias.

**Assumptions and checks:**

- **Enough studies for meaningful diagnostics:** For Publication-bias diagnostics, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Comparable effect metric:** For Publication-bias diagnostics, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Asymmetry can have several causes:** For Publication-bias diagnostics, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Diagnostics are not proof of bias:** For Publication-bias diagnostics, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Random forest classifier

**Result id:** `randomForestClassifier`

**Purpose:** Combines many decision trees for robust classification, often with stronger prediction than a single tree.

**Assumptions and checks:**

- **Categorical outcome variable:** Categories should be mutually exclusive and coded consistently. Check that each case belongs to the intended category, that reference categories are meaningful when models require them, and that sparse categories are not driving unstable estimates.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Validation on unseen data:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.
- **Handle class imbalance:** Check whether outcome classes are rare or unevenly distributed. Accuracy alone can be misleading; also inspect sensitivity, specificity, balanced accuracy, F1, AUC, or calibration as appropriate.

### Random forest regression

**Result id:** `randomForestRegression`

**Purpose:** Combines many regression trees to produce robust nonlinear predictions for metric outcomes.

**Assumptions and checks:**

- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Enough cases for training and validation:** Evaluate predictive models on data not used to fit them. Use train/test splits, cross-validation, or external validation and report metrics that match the outcome and class balance.
- **Tune number of trees and variables per split:** For Random forest regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Interpret with variable importance or partial effects:** For Random forest regression, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Random-effects meta-analysis

**Result id:** `randomEffectsMetaAnalysis`

**Purpose:** Estimates an average effect when true effects may vary between studies.

**Assumptions and checks:**

- **Several independent studies or effect sizes:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.
- **Effect size and precision measure available:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Between-study variance is estimated:** Each study should provide a comparable effect estimate and a valid measure of uncertainty. Check coding direction, scale, transformation, and whether all studies use the same effect-size metric.
- **Heterogeneity is reported with tau2/I2:** Effects may differ across studies or subgroups. Report heterogeneity statistics and interpret them together with study design, populations, measures, and interventions.

### Repeated-measures ANOVA

**Result id:** `repeatedAnova`

**Purpose:** Tests mean differences across several paired time points or conditions.

**Assumptions and checks:**

- **Repeated measurements:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **Metric outcome variable:** The variable should be quantitative enough that means, variances, distances, or linear model coefficients are meaningful. Check the scale, units, plausible range, and whether strong floor or ceiling effects make a metric interpretation questionable.
- **Sphericity or suitable correction:** For repeated-measures factors with more than two levels, the variances of the pairwise differences should be similar. If this is doubtful, report a correction such as Greenhouse-Geisser or use a mixed-model approach.

### Spearman rank correlation

**Result id:** `spearman`

**Purpose:** A robust choice for ordinal variables or monotonic relationships without strict linearity.

**Assumptions and checks:**

- **At least ordinal scale level:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Monotonic relationship:** As one variable increases, the other should tend to move consistently upward or downward, even if the relation is not linear. A scatterplot or rank plot is usually the clearest check.
- **Independent observations:** One observation should not determine or duplicate another unless the method explicitly models that dependence. Repeated measurements, matched pairs, team membership, classrooms, clinics, studies from the same lab, or multiple rows per person can violate this assumption.

### Structural equation modeling (SEM)

**Result id:** `structuralEquationModeling`

**Purpose:** Combines measurement models for latent variables with directed structural paths among latent and observed variables.

**Assumptions and checks:**

- **Latent constructs measured by multiple indicators:** For Structural equation modeling (SEM), this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Theoretically justified measurement and structural model:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Adequate sample size:** There should be enough information for the model or test to estimate effects reliably. Consider the number of groups, predictors, parameters, events, clusters, and studies rather than only the total N.
- **Model fit and alternative models should be evaluated:** Evaluate global fit, local residuals, parameter estimates, and theoretically plausible alternatives. A statistically acceptable fit does not by itself make the model substantively correct.

### Subgroup meta-analysis

**Result id:** `subgroupMetaAnalysis`

**Purpose:** Compares pooled effects between categorically defined groups of studies.

**Assumptions and checks:**

- **Subgroups justified in advance:** The model structure or hypothesis should be motivated before looking at the result. Document why paths, factors, covariates, subgroups, or expected proportions were chosen.
- **Enough studies per subgroup:** For Subgroup meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Same effect metric:** For Subgroup meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.
- **Subgroup comparisons interpreted cautiously:** For Subgroup meta-analysis, this condition should be checked against the research design, variable coding, descriptive statistics, and diagnostic plots before relying on the result.

### Wilcoxon signed-rank test

**Result id:** `wilcoxon`

**Purpose:** Nonparametric choice for two paired measurements or ordinal paired comparisons.

**Assumptions and checks:**

- **Two paired measurements:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.
- **At least ordinal values:** The values must at least have a meaningful order. The exact distance between adjacent response categories does not need to be equal, which is why rank-based or ordinal models can be more appropriate than mean-based tests.
- **Pairing is present:** Measurements must be correctly linked within the same person, object, team, study, or matched pair. The analysis uses these links, so missing or incorrectly matched rows can change both the estimate and the standard error.

## Notes For Reporting

- State which assumptions were checked and how.
- Report any relevant correction, robust alternative, transformation, or sensitivity analysis.
- If an assumption is only approximately met, describe the residual risk rather than hiding it.
- Separate statistical assumptions from design assumptions: a clean model diagnostic does not repair confounding, nonrandom assignment, measurement bias, or unclear temporal ordering.
