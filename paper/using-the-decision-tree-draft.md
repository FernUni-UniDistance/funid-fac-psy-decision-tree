# 4. Using the Decision Tree: Two Worked Examples

The Statistical Decision Tree can be used in two ways. Users who are uncertain about the appropriate analysis can follow the guided questions from the beginning. Users who already have a procedure in mind can search for it directly; the application then reconstructs a compatible decision path so that the conditions associated with the procedure remain visible. The guided mode is used in the following examples because it demonstrates how the recommendation is derived.

Before starting, the user can select English, German, French, Spanish, or Italian from the language menu. English is displayed by default. The left panel records each decision, the central panel presents the current question, and the recommendation panel becomes available when an endpoint is reached. At any stage, **Back** returns to the preceding question and **Start again** clears the current path. These controls are important when a question reveals that the original description of the study was incomplete or that an earlier answer should be reconsidered.

## 4.1. Worked example 1: Testing a hypothesis with a paired-samples t-test

### Research situation

Suppose a researcher evaluates whether a brief cognitive training programme changes memory-test performance. The same 48 participants complete the test immediately before and after the programme. Scores are measured on a metric scale. The preregistered hypothesis is that mean performance will differ between the two measurement occasions.

This is a hypothesis-testing problem with one metric outcome measured twice in the same participants. The observations at the two occasions are therefore paired rather than independent. The analysis must evaluate the within-person differences.

### Step 1: Follow the decision path

From the first screen, the user selects the following answers:

| Decision question | Selected answer | Reason |
|---|---|---|
| What do you want to do with your data? | **Test a hypothesis or a model with multiple variables** | The mean-change hypothesis was specified before examining the result. |
| What kind of research question do you want to answer? | **Compare difference between means, medians or variances** | The substantive question concerns change in average memory scores. |
| What type of dependent variable do you have? | **Metric dependent variable** | The memory score is treated as a quantitative measure. |
| How many metric dependent variables do you want to compare jointly? | **One metric dependent variable** | Baseline and follow-up are two measurements of the same outcome, not two different dependent constructs. |
| Do you want to control for one or more covariates? | **No covariates** | The example is an unadjusted within-person comparison. |
| How many groups or measurement times are you comparing? | **Two paired measurements** | Each baseline value is linked to the follow-up value from the same participant. |
| Are the differences between paired measurements approximately normal? | **Yes** | This answer should be based on the distribution of the follow-up-minus-baseline differences. |

The resulting recommendation is **Paired-samples t-test**. The visible history provides a concise methodological justification: a predefined comparison was selected, the dependent variable was metric, there was one outcome without covariates, two measurements were paired, and the differences were considered approximately normal. If the differences had been markedly non-normal or the outcome ordinal, the final answer would instead lead to the Wilcoxon signed-rank test.

### Step 2: Inspect the recommendation and assumptions

The recommendation panel explains that the paired-samples t-test compares two related means. Three concise assumptions are shown:

1. **Two paired measurements.** Every value at the first occasion must correspond to a value from the same participant or matched unit at the second occasion. Unpaired observations should not be entered as though they were matched.
2. **Metric difference scores.** The difference between the two measurements must have a meaningful quantitative interpretation.
3. **Approximate normality of the differences.** The relevant distribution is the set of within-person differences, not the baseline and follow-up distributions considered separately.

Clicking any assumption opens the detailed explanation, including practical checks and reporting guidance. For this example, a histogram or Q-Q plot of the difference variable should be examined for strong skew, extreme outliers, or other major departures. A Shapiro-Wilk test may be reported as supplementary information, but a non-significant result should not be treated as proof of exact normality.

### Step 3: Download and inspect the example dataset

The **Download dataset** control retrieves `pairedT.csv`. The file contains four columns:

- `participant`: participant identifier;
- `baseline_score`: score before training;
- `followup_score`: score after training; and
- `difference`: follow-up minus baseline score.

There are 48 rows, one for each participant. The wide format makes the pairing explicit because baseline and follow-up values occupy the same row. The prepared difference column is useful for checking the normality assumption, although jamovi and R can calculate the paired comparison directly from the two score columns.

### Step 4: Run the analysis in jamovi

In the procedure selector, the user chooses **jamovi** and follows the displayed route:

1. Open **Analyses > T-Tests > Paired Samples T-Test**.
2. Add `baseline_score` and `followup_score` as one paired row.
3. Request descriptive statistics, the mean difference, a confidence interval, the normality check for the differences, and an effect size.
4. Inspect the difference-score Q-Q plot and any extreme values before interpreting the test.

The associated screenshot provides visual confirmation of the menu and variable placement. It is an orientation aid; the current software output remains the source of the reported values.

### Step 5: Run the corresponding R analysis

Selecting **R** displays a concise command, while the companion R Markdown project provides the complete example:

```r
data <- read.csv("data/examples/pairedT.csv")
difference <- data$followup_score - data$baseline_score

shapiro.test(difference)
t.test(data$followup_score, data$baseline_score, paired = TRUE)

cohen_dz <- mean(difference) / sd(difference)
cohen_dz
```

For the prepared dataset, baseline scores had a mean of 68.22 (*SD* = 5.51), and follow-up scores had a mean of 73.35 (*SD* = 5.96). The mean increase was 5.13 points, with a 95% confidence interval from 4.59 to 5.66. The Shapiro-Wilk result for the difference scores was *W* = .983, *p* = .705; together with a graphical check, this does not indicate a serious violation of the normality assumption. The paired test produced *t*(47) = 19.33, *p* < .001. Cohen's *d*<sub>z</sub>, calculated as the mean difference divided by the standard deviation of the differences, was 2.79.

The unusually large effect is a property of this constructed teaching dataset and should not be interpreted as an expected effect of cognitive training. In substantive research, the estimate, confidence interval, measurement quality, design, and plausibility of the effect would all require scrutiny.

### Step 6: Use the effect-size and reporting guidance

The effect-size box identifies Cohen's *d*<sub>z</sub> as a common standardized measure for a paired mean difference. The displayed values of 0.20, 0.50, and 0.80 are conventional orientation points rather than universal boundaries. Interpretation should prioritize the observed magnitude and its uncertainty in the substantive context.

The reporting panel lists the quantities normally retained from the output: number of pairs, means and standard deviations at both occasions, mean difference, confidence interval, *t*, degrees of freedom, *p*, and Cohen's *d*<sub>z</sub>. Adapting the scaffold to the example gives:

> A paired-samples *t*-test indicated that memory scores increased from baseline (*M* = 68.22, *SD* = 5.51) to follow-up (*M* = 73.35, *SD* = 5.96), mean difference = 5.13, 95% CI [4.59, 5.66], *t*(47) = 19.33, *p* < .001, *d*<sub>z</sub> = 2.79.

This sentence is a reporting example, not a complete results section. A manuscript should also identify the intervention, outcome measure, analysis plan, diagnostic checks, exclusions or missing-data handling, and whether the test was one- or two-sided.

## 4.2. Worked example 2: Discovering profiles with cluster analysis

### Research situation

Suppose a sport-science team has measurements describing 12 athletes: training load, recovery score, sprint time, jump height, and number of injuries. No outcome variable or predefined group label is available. The aim is to explore whether athletes with similar multivariate profiles form interpretable groups that could motivate hypotheses for a later, adequately powered study.

Unlike the preceding example, this analysis does not test a preregistered difference or estimate the effect of an intervention. It searches for structure without a known target variable. The resulting clusters are data-dependent descriptions and should not be treated as naturally existing categories without replication and substantive validation.

### Step 1: Follow the exploratory decision path

The user selects:

| Decision question | Selected answer | Reason |
|---|---|---|
| What do you want to do with your data? | **Discover hypotheses exploratively** | The objective is to identify possible structure rather than test a predefined group difference. |
| What kind of structure do you want to discover in the data? | **Group similar people or objects** | The units are athletes, and the goal is to group athletes with similar multivariate profiles. |

The recommendation is **Cluster analysis**. The alternative exploratory answers lead to factor analysis when the goal is to group or reduce variables, network analysis when conditional relations among variables are of interest, or multidimensional scaling when distances are to be represented in a small number of dimensions. This distinction is essential: factor analysis groups patterns among variables, whereas cluster analysis groups cases or objects.

Cluster analysis can also be reached through the machine-learning route by selecting prediction or classification, indicating that no known outcome variable is available, and choosing to group similar people or objects. Both routes lead to the same recommendation because the underlying task is unsupervised grouping.

### Step 2: Examine the assumptions and analytical choices

The recommendation presents four central conditions:

1. **Features describing people or objects.** Rows must represent comparable cases, and the selected variables must be relevant to the grouping objective.
2. **Appropriate scaling or standardisation.** Variables measured in different units can dominate a distance calculation. In this example, training load, sprint time, jump height, and injury count are therefore standardized before clustering.
3. **Meaningful distance or similarity measure.** Euclidean distance is used for the worked example because the standardized variables are quantitative. Other variable types may require a different measure.
4. **Substantively interpretable cluster solution.** A numerical partition is not sufficient. The solution should be stable, reproducible, and meaningful in relation to domain knowledge.

Users should also inspect outliers, missingness, highly redundant variables, and the sensitivity of the solution to the variables, scaling method, distance measure, clustering algorithm, and requested number of clusters. Cluster analysis has no single universal assumption test that validates all these decisions.

### Step 3: Download and inspect the example dataset

The downloadable `clusterAnalysis.csv` file contains an identifier and five clustering variables:

- `training_load`;
- `recovery_score`;
- `sprint_time`;
- `jump_height`; and
- `injury_count`.

The file is deliberately small and strongly structured so that the workflow and profile interpretation are easy to inspect. It is suitable for demonstrating the software steps, but it is too small to support a stable empirical taxonomy of athletes. A real application would require more cases, justification of the feature set, assessment of stability, and ideally confirmation in new data.

### Step 4: Run hierarchical clustering in jamovi

The jamovi procedure uses the SnowCluster module:

1. Install **SnowCluster** from the jamovi module library and open it from the **Analyses** menu.
2. Choose **Hierarchical Clustering**.
3. Move `training_load`, `recovery_score`, `sprint_time`, `jump_height`, and `injury_count` into the clustering-variable field. Do not use `id` as a clustering feature.
4. Standardize the variables because they use different units.
5. Select an appropriate distance and linkage method. For comparison with the R example, use Euclidean distance and Ward's method where these options are available.
6. Inspect the dendrogram, compare plausible cluster counts, and request available cluster-quality information.

The screenshot linked to this endpoint shows the SnowCluster interface. The user should still record the installed module version because menus and available diagnostics may change over time.

### Step 5: Reproduce the solution in R

The companion code standardizes the five variables, calculates Euclidean distances, applies Ward's hierarchical method, and cuts the dendrogram into three clusters:

```r
data <- read.csv("data/examples/clusterAnalysis.csv")
variables <- c(
  "training_load", "recovery_score", "sprint_time",
  "jump_height", "injury_count"
)

scaled <- scale(data[, variables])
distances <- dist(scaled, method = "euclidean")
fit <- hclust(distances, method = "ward.D2")
plot(fit)

clusters <- cutree(fit, k = 3)
table(clusters)
aggregate(data[, variables], list(cluster = clusters), mean)

if (requireNamespace("cluster", quietly = TRUE)) {
  silhouette_values <- cluster::silhouette(clusters, distances)
  mean(silhouette_values[, "sil_width"])
}
```

The three-cluster solution assigns four athletes to each cluster. In the teaching data, the cluster means are:

| Cluster | Training load | Recovery | Sprint time | Jump height | Injuries | Tentative description |
|---|---:|---:|---:|---:|---:|---|
| 1 | 80.00 | 40.00 | 11.88 | 41.00 | 2.50 | Higher load and performance indicators, with lower recovery and more injuries |
| 2 | 38.75 | 81.25 | 13.33 | 31.50 | 0.00 | Lower load and performance indicators, with higher recovery and no injuries |
| 3 | 60.50 | 61.50 | 12.35 | 37.00 | 1.00 | Intermediate profile across the selected variables |

The average silhouette width is .65. According to the tool's rough orientation range, this indicates good separation within this constructed dataset. It does not establish that three athlete types exist in the wider population. The labels are tentative summaries of the measured variables and should not be interpreted causally; for example, the clustering cannot show that training load caused injury differences.

### Step 6: Report an exploratory result transparently

For cluster analysis, the tool identifies silhouette width as a common quality measure and prompts the user to report the variables, standardisation, distance measure, clustering method, number and sizes of clusters, and substantive interpretation. A worked reporting example is:

> An exploratory hierarchical cluster analysis was conducted on five standardized athlete characteristics using Euclidean distance and Ward's method. Inspection of the dendrogram and a three-cluster solution yielded three equally sized profiles (*n* = 4 per cluster), with an average silhouette width of .65. The profiles were tentatively characterized as higher-load/lower-recovery, lower-load/higher-recovery, and intermediate groups. Given the small illustrative sample, the solution should be treated as descriptive and requires evaluation in a larger independent dataset.

In a substantive analysis, this paragraph should be supplemented with the rationale for the included variables, treatment of missing data and outliers, software and version, criteria used to choose the number of clusters, sensitivity analyses, and a table or figure describing the profiles. Inferential comparisons performed after clusters have been created from the same variables require particular caution because the groups are data-derived.

## 4.3. What the two examples demonstrate

The paired-samples example begins with a predefined hypothesis and uses design and distributional information to select an inferential test. Its endpoint emphasizes the estimated mean change, uncertainty, standardized effect, and test statistic. The cluster example begins without a known outcome or predefined grouping and selects an exploratory procedure. Its endpoint emphasizes preprocessing choices, distance and algorithm specification, solution quality, interpretability, and stability.

Together, the examples illustrate the intended role of the application. The tree does not merely attach software commands to test names. It preserves the reasoning path, links the recommendation to assumptions and example data, provides equivalent jamovi and R routes, and identifies the information required for transparent reporting. The final interpretation nevertheless depends on the study design, measurement quality, data-generating process, and substantive expertise of the user.
