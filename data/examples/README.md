# Example Datasets

Each CSV matches one result id in the decision tree. Use these files to create Jamovi screenshots and to test the R snippets.

| Result id | CSV | Variables to use |
| --- | --- | --- |
| `pearson` | `pearson.csv` | Correlate `x` and `y` with Pearson. |
| `spearman` | `spearman.csv` | Correlate `stress_rank` and `wellbeing_rank` with Spearman. |
| `kendall` | `kendall.csv` | Correlate `adherence_rank` and `wellbeing_rank` with Kendall's tau. |
| `chiSquareAssociation` | `chiSquareAssociation.csv` | Contingency table: `group` by `outcome`. |
| `logLinearModel` | `logLinearModel.csv` | Multiway nominal table using `therapy`, `outcome`, `gender`, and frequency `count`. |
| `oneSampleT` | `oneSampleT.csv` | Test `score` against a reference value, e.g. `50`. |
| `oneSampleZ` | `oneSampleZ.csv` | Test `score` against a reference mean, e.g. `100`, with known population SD, e.g. `15`. |
| `oneSampleWilcoxon` | `oneSampleWilcoxon.csv` | Test `rating` against a reference value, e.g. `3`. |
| `independentT` | `independentT.csv` | Dependent variable `score`, grouping variable `group`. |
| `mannWhitney` | `mannWhitney.csv` | Outcome `pain_score`, grouping variable `group`. |
| `pairedT` | `pairedT.csv` | Pair `before` with `after`. |
| `wilcoxon` | `wilcoxon.csv` | Pair `before` with `after`, use Wilcoxon signed-rank. |
| `anova` | `anova.csv` | Dependent variable `score`, factor `group`. |
| `repeatedAnova` | `repeatedAnova.csv` | Repeated measures columns: `baseline`, `week4`, `week8`; subject id: `id`. |
| `manova` | `manova.csv` | Dependent variables `stress_score`, `wellbeing_score`, and `performance_score`; grouping variable `group`. Generated to give non-significant Shapiro-Wilk and Box's M checks. |
| `twoWayAnova` | `twoWayAnova.csv` | Dependent variable `stress_score`; fixed factors `therapy` and `age_group`. |
| `twoWayRepeatedAnova` | `twoWayRepeatedAnova.csv` | Repeated measures cells from two within-subject factors: intensity (`low`, `high`) by time (`pre`, `post`, `followup`). |
| `linearMixedModel` | `linearMixedModel.csv` | Metric outcome `score`; fixed effects `condition` and `week`; random intercept for `participant`. |
| `generalizedLinearMixedModel` | `generalizedLinearMixedModel.csv` | Binary nominal outcome `success` (`no`/`yes`); fixed effects `condition` and `week`; random intercept for `participant`; use binomial/logit, not a linear mixed model. |
| `ordinalMixedModel` | `ordinalMixedModel.csv` | Ordinal outcome `rating`; fixed effects `condition` and `day`; random intercept for `participant` or `team`. |
| `kruskalWallis` | `kruskalWallis.csv` | Outcome `rank_score`, grouping variable `group`. |
| `friedman` | `friedman.csv` | Repeated measures columns: `condition_a`, `condition_b`, `condition_c`; subject id: `id`. |
| `nonparametricTwoWayAnova` | `nonparametricTwoWayAnova.csv` | Ordinal outcome `stress_rating`; fixed factors `therapy` and `age_group`; use ART in R/Rj Editor. |
| `nonparametricTwoWayRepeatedAnova` | `nonparametricTwoWayRepeatedAnova.csv` | Ordinal repeated cells from intensity (`low`, `high`) by time (`pre`, `post`, `followup`); use ART in R/Rj Editor. |
| `fisher` | `fisher.csv` | 2x2 table: `treatment` by `response`; enable Fisher's exact test. |
| `mcnemar` | `mcnemar.csv` | Paired categorical variables: `before`, `after`. |
| `binomialTest` | `binomialTest.csv` | Two-level variable `response`; compare the observed `yes` proportion to an expected value, e.g. `0.50`. |
| `chiSquareGoodness` | `chiSquareGoodness.csv` | Multilevel categorical variable `preference`; compare observed frequencies to expected proportions. |
| `linearRegression` | `linearRegression.csv` | Dependent variable `race_time_min`; predictors `training_volume_km_week`, `vo2max_ml_kg_min`, and `age_years`. |
| `decisionTreeRegression` | `decisionTreeRegression.csv` | Dependent variable `outcome_symptom_score`; predictors `motivation_score`, `baseline_distress_score`, and `sessions_attended`. |
| `randomForestRegression` | `randomForestRegression.csv` | Dependent variable `race_time_min`; predictors `training_volume_km_week`, `vo2max_ml_kg_min`, `tempo_pace_min_km`, `long_run_km`, `recovery_score`, `sleep_hours`, `age_years`, and `injury_days_last_month`. |
| `knnRegression` | `knnRegression.csv` | Dependent variable `wellbeing_score`; predictors `sleep_hours`, `stress_score`, `physical_activity_min_week`, and `social_support_score`; standardise/scale predictors before fitting KNN. |
| `logisticRegression` | `logisticRegression.csv` | Binary outcome `injury`; predictors `training_load_au`, `previous_injury`, `recovery_score`, and `age_years`. |
| `multinomialRegression` | `multinomialRegression.csv` | Multicategory outcome `treatment_outcome`; predictors `baseline_symptom_score`, `motivation_score`, `previous_therapy`, and `age_years`. |
| `pathAnalysis` | `pathAnalysis.csv` | Observed-variable mediation model: `predictor` -> `mediator` -> `outcome`. |
| `structuralEquationModeling` | `structuralEquationModeling.csv` | Latent `stress` and `sleep` indicators plus observed `performance`. |
| `discriminantAnalysis` | `discriminantAnalysis.csv` | Nominal dependent variable `group`; interval-scaled predictors `anxiety`, `motivation`, and `reaction_time`. |
| `factorAnalysis` | `factorAnalysis.csv` | Explore factors among the stress, mood, and sleep item columns. |
| `clusterAnalysis` | `clusterAnalysis.csv` | Cluster athletes using training load, recovery, sprint, jump, and sleep duration. |
| `multidimensionalScaling` | `multidimensionalScaling.csv` | Use the symmetric distance matrix among emotions for MDS. |
| `chiSquareVariance` | `chiSquareVariance.csv` | Test the variance of `score` against a hypothesised population variance, e.g. `100`. |
| `varianceFTest` | `varianceFTest.csv` | Compare the variance of `score` between the two levels of `group`. |
| `metaOddsRatio` | `metaOddsRatio.csv` | Odds-ratio meta-analysis via MAJOR Effect Sizes, using precomputed `log_odds_ratio`, `variance`, `se`, `study_label`, and optional `moderator_code` (1 = psychology, 2 = sport). |
| `metaCorrelation` | `metaCorrelation.csv` | MAJOR correlation-coefficient meta-analysis using `correlation`, `sample_size`, `moderator`, and `study_label`. |
| `metaMeanDifferences` | `metaMeanDifferences.csv` | MAJOR mean-difference meta-analysis from `n`, `M`, and `SD` for treatment and control groups. |
| `metaEffectSizes` | `metaEffectSizes.csv` | MAJOR effect-size meta-analysis using `effect_size`, `variance` or `se`, `moderator`, and `study_label`. |
| `metaProportion` | `metaProportion.csv` | MAJOR Proportions analysis using raw `event_frequency` counts and `total_sample_size`. Use `moderator_code` as 1 = psychology and 2 = sport if needed. |

For clean screenshots, avoid extra ID columns unless Jamovi needs them for the specific analysis. Extra variables can accidentally be selected during manual setup.
