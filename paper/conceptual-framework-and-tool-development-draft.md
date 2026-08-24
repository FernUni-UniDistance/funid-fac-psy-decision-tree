# 2. Conceptual Framework

The Statistical Decision Tree was designed around the view that selecting a statistical analysis is a conditional reasoning task rather than a test-recognition task. A research question rarely determines a procedure by itself. The choice also depends on the role of the analysis, the number and measurement level of the variables, the study design, the independence or clustering of observations, distributional features, and the inferential or predictive target. Statistical selection skills therefore involve translating a substantive problem into a sequence of methodological distinctions (Gardner & Hudson, 1999). This translation is particularly demanding for learners because information that experts may process together as a familiar design pattern is often encountered by novices as separate terminology. Consistent with findings from psychology education, the tool makes this reasoning process explicit and embeds statistical choices in applied research situations rather than presenting procedures as isolated software commands (Allen et al., 2016).

## 2.1. Guided conditional reasoning

The first design principle is to decompose a complex selection problem into a series of smaller, observable decisions. The tree begins with the analytical purpose, distinguishing between testing a hypothesis or multivariable model and exploring patterns from which hypotheses may be developed. Subsequent questions narrow the space of appropriate methods using characteristics such as the target of inference, outcome scale, number of variables or groups, repeated or independent observations, covariates, latent variables, clustering, and distributional conditions. Each answer is retained in a visible path. The recommendation is therefore presented as the endpoint of an inspectable argument rather than as an unexplained result.

This structure has a scaffolding function. Scaffolding temporarily organizes parts of a problem that a learner may not yet coordinate independently, allowing attention to be directed to the features that matter for the next decision (Wood et al., 1976). In the present tool, the interface reveals one question at a time, provides a short explanation of the distinction being made, and permits users to return to an earlier decision. Progressive disclosure reduces the amount of competing information shown at any one moment, while the persistent path preserves the relationship between the current question and earlier answers. The same principle is applied to direct search: users who search for a known procedure are shown the reconstructed decision path associated with that procedure. Search therefore provides faster access without removing the methodological conditions that should justify the choice.

The tree is not intended to imply that statistical decisions are always binary or mechanically determined. Some choices depend on disciplinary conventions, sampling processes, diagnostics, model comparison, or the consequences of assumption violations. For this reason, questions use qualifications such as *plausible* or *appropriate* where a simple pass/fail rule would be misleading. Endpoints also include limitations and diagnostic guidance. The recommendation should be understood as a common analytical route that is compatible with the selected conditions, not as proof that the procedure is optimal for every dataset sharing those surface characteristics.

## 2.2. From selection to a worked analytical example

The second principle is that selecting the name of a procedure is only an intermediate learning objective. Users must still understand why it applies, how data should be structured, how assumptions can be examined, how the procedure is implemented, and how its output is interpreted and reported. The endpoint was therefore conceived as a compact worked example. Each recommendation combines a rationale, domain-specific scenarios, a prepared dataset, software instructions, assumption explanations, effect-size guidance, and a reporting scaffold.

Worked examples can support the initial acquisition of cognitive skills by making the steps and relations within a solution visible (Renkl, 2014). The psychology and sport-science scenarios translate abstract terms such as *paired observations*, *categorical outcome*, or *nested data* into recognizable research designs. The downloadable dataset then allows the user to reproduce the analysis rather than only read about it. Because examples alone do not guarantee transfer, the decision path remains visible beside the example: the user can relate the particular dataset back to the more general design features that led to the recommendation. The two disciplinary scenarios also show that the same statistical structure can occur in different substantive contexts.

The endpoint information is segmented rather than presented as one uninterrupted explanation. Assumptions appear first as concise, clickable statements. Selecting one opens a focused window explaining what the condition means, how it may be examined, and what may need to be reported. Software steps, screenshots, examples, effect sizes, and reporting guidance occupy separate functional areas. This organization follows the broader multimedia-learning principle that explanatory words and relevant visual information should be coordinated while unnecessary competing material is minimized (Mayer & Moreno, 2003). A screenshot is used as interface orientation, not as a substitute for explaining the analytical decision.

## 2.3. Bridging graphical and reproducible workflows

The third principle is to support movement between accessible graphical analysis and reproducible code. jamovi offers a graphical environment that can lower the initial barrier to statistical analysis and can be extended through specialist modules (Sahin & Aybek, 2019). R provides a scriptable environment in which data preparation, model specification, diagnostics, and output can be recorded. The tool therefore allows users to choose between jamovi and R instructions at the same recommendation endpoint. Where available, jamovi screenshots show the relevant menu, variable placement, options, or output. The companion R Markdown project uses the corresponding example datasets and combines a short statement of purpose with installation checks and executable code.

This dual route is not based on the assumption that one interface is educationally superior in every context. Instead, it treats the interfaces as complementary representations of the same analytical workflow. A novice may begin with jamovi to identify variables and options, while an instructor or more experienced user can inspect, modify, and rerun the R implementation. Connecting both routes to the same dataset also makes discrepancies easier to investigate. More broadly, the R Markdown component supports the reproducibility principle that analytical claims should be connected to accessible data, code, and computational output (LeBeau et al., 2021).

## 2.4. Reporting as part of statistical reasoning

The fourth principle is that an analysis is incomplete when users are shown only a significance decision. Each endpoint identifies a commonly used effect-size or performance measure, provides an interpretation note, and lists the statistics ordinarily needed to communicate the result. An APA-style scaffold illustrates the structure of a possible results sentence using placeholders rather than invented values. This encourages users to retain relevant quantities such as estimates, degrees of freedom, confidence intervals, effect sizes, model-fit indices, or predictive performance measures as appropriate to the method.

The reporting component is aligned with the broader goals of quantitative reporting standards, which emphasize transparent specification of designs, analyses, estimates, uncertainty, and interpretation (Appelbaum et al., 2018). It is deliberately presented as a scaffold rather than text ready for uncritical insertion into a manuscript. Reporting requirements differ across analyses and journals, and not all effect-size thresholds are universal. Users must replace placeholders with verified output, describe their actual model and diagnostics, and interpret findings in relation to the design. In particular, the interface repeatedly distinguishes statistical association or prediction from causal evidence.

## 2.5. Accessibility, multilingual consistency, and user control

The final principle is to make the same conceptual structure accessible through multiple routes. The interface is available in English, German, French, Spanish, and Italian. Language packs preserve common identifiers for nodes and recommendations, allowing the decision logic to remain constant while questions, assumptions, procedures, examples, and reporting guidance are localized. This architecture is intended to reduce avoidable language barriers without creating separate methodological trees that could drift apart.

Users can enter through the guided pathway or direct search, move backward, restart, switch languages, select jamovi or R output, open assumption details, and download example data. These controls serve users with different levels of prior knowledge while preserving the visibility of the underlying reasoning. The conceptual framework can thus be summarized as a linked sequence: **research problem -> explicit design decisions -> justified recommendation -> executable example -> diagnostic evaluation -> effect-size interpretation -> transparent reporting**. The tool supports each transition, but responsibility for the quality of the research design and analysis remains with the researcher.

# 3. Tool Development

## 3.1. Development approach and scope

The Statistical Decision Tree was developed through an iterative, author-led process informed by statistics teaching, applied research scenarios, published test-selection resources, and repeated use of the represented procedures in jamovi and R. Development did not follow a one-time conversion of an existing flowchart. The initial stepwise selector was progressively expanded to include multivariable models, exploratory analyses, mixed models, machine-learning procedures, and meta-analysis, together with practical resources at each endpoint. Terminology, branches, datasets, software routes, screenshots, and reporting guidance were revised when content review or software testing revealed ambiguity or incompatibility.

The intended audience comprises university students, instructors, and applied researchers in psychology, sport science, and related behavioral disciplines. Methods were included when they represented a common instructional need, filled a meaningful gap in the existing tree, or extended the framework to a distinct analytical objective. The current scope includes association and frequency procedures; one-sample, independent, paired, factorial, repeated-measures, variance, and covariance comparisons; regression and classification; mixed models; exploratory and latent-variable methods; supervised machine learning; and meta-analysis. The application is labeled as a beta version because the content continues to evolve and formal external validation has not yet been completed.

## 3.2. Decision architecture

The decision logic is represented as a directed graph of question nodes and recommendation endpoints. In the August 2026 development snapshot, the interface contains 27 question nodes leading to 62 recommendation endpoints. Each question node stores four principal elements: a methodological area, the question shown to the user, a short explanatory hint, and a set of answers. An answer links either to another question or to a recommendation identifier. This identifier is then used across the result content, translations, scenarios, procedures, screenshots, datasets, effect-size guidance, and reporting templates.

The root question separates hypothesis or model testing from exploratory discovery. Confirmatory routes are subsequently organized around four broad aims: examining relationships, comparing means, medians, or variances, predicting an outcome, and comparing frequencies, categories, or proportions. Exploratory routes distinguish variable reduction, network structure, grouping of cases, and low-dimensional representation of distances. Additional branches address observed versus latent variables, measurement versus structural models, independent versus repeated observations, covariates, clustered outcomes, machine-learning prediction, and the type of study-level information available for meta-analysis.

Branches were written to expose distinctions that materially change the analysis. For example, the paired-samples route asks about the distribution of the difference scores rather than the marginal distribution at each time point; mixed-model routes distinguish continuous, non-Gaussian categorical or count, and ordinal outcomes; and multivariate comparison routes separate MANOVA from MANCOVA according to the presence of covariates. Where a method does not establish causality, the endpoint and assumption guidance explicitly state that causal interpretation depends on theory, measurement, and study design rather than on the model name.

Two access mechanisms use the same recommendation identifiers. In guided mode, the user reaches an endpoint by answering the questions. In search mode, procedure names and keywords are matched as the user types. Selecting a result triggers a graph search that reconstructs a valid route from the root to the requested endpoint and populates the visible history with the corresponding decisions. This prevents the search function from presenting recommendations without their data and design context.

## 3.3. Recommendation content model

Each recommendation endpoint contains a title, short rationale, and concise list of assumptions. Supplementary content is linked by the same endpoint identifier rather than embedded in a single block. The current content model includes:

1. psychology and sport-science scenarios illustrating structurally equivalent research questions;
2. a downloadable example dataset when case-level or study-level data are appropriate;
3. stepwise jamovi instructions, including required modules for procedures outside the core installation;
4. R commands and a corresponding analysis in the companion R Markdown project;
5. an optional jamovi screenshot mapped to the procedure;
6. a commonly used effect-size, fit, or predictive-performance measure and an interpretation note;
7. the quantities ordinarily required for reporting; and
8. an APA-style sentence scaffold with placeholders.

At the current snapshot, 56 CSV example datasets are available. They were prepared to demonstrate the variable structure and workflow of the associated analysis rather than to function as benchmark research datasets. The datasets include cross-sectional, paired, repeated, clustered, multivariate, classification, regression, and study-level meta-analytic formats. Several were revised iteratively after import into jamovi exposed problems with variable types, outcome coding, module requirements, or assumptions. The R Markdown compendium contains executable sections for the represented analytical families, package-installation checks, and short explanations of each method's purpose.

The screenshot inventory currently contains 43 jamovi images. Screenshots are mapped to recommendation identifiers and are displayed in all interface languages as procedural illustrations; the image text itself remains in the language of the captured jamovi interface unless a localized image is supplied. Coverage is therefore reported separately from procedure coverage. This distinction prevents the absence of an image from being interpreted as the absence of software guidance.

## 3.4. Assumption-review workflow

Assumption content was treated as a separate review object because short labels can hide important qualifications. English assumption statements were exported from the application into a structured table containing the recommendation identifier, method name, short assumption, expanded explanation, review status, proposed revision, practical checks, reporting guidance, and reviewer notes. The table was organized by methodological family to support a systematic review order.

The revised review table contains 243 assumption entries for the current set of procedures. All entries were marked as accepted after revision. The approved content was then transformed into the structured assumption-detail data used by the application. In the interface, clicking an assumption opens a modal window containing the expanded explanation and, where available, sections on how to check the condition and what to report. The stable recommendation and assumption identifiers allow the details to be associated with the correct endpoint and translated without changing the decision graph.

This workflow separates three levels that are easily conflated: whether an assumption is conceptually relevant, how it can be assessed in a particular dataset, and how the assessment should be documented. It also permits design conditions, such as independence or meaningful nesting, to be distinguished from distributional diagnostics. The review table and generated assumption guide provide an auditable record for later expert review, although acceptance by the authors should not be described as independent methodological validation.

## 3.5. Software implementation and localization

The application is a static client-side website implemented with HTML, CSS, and JavaScript. It does not require a database or server-side analytical engine. Decision logic and default result content are stored as JavaScript objects; additional files contain localized interface text, scenarios, software procedures, reporting guidance, and assumption details. At runtime, the application maintains the current node, selected answers, language, and requested software output, and re-renders the question or recommendation panel following each interaction.

This architecture was selected to keep deployment and access requirements low. The website can be hosted directly through GitHub Pages, opened in a modern browser, and updated through version-controlled source files. Example datasets, screenshots, static decision-tree PDFs, and the R Markdown project are stored alongside the application. No participant data are uploaded or processed by the website.

English is the default interface language. German content is included in the core data structure, while French, Spanish, and Italian localization layers extend the same node and result identifiers. Procedure descriptions and assumption details have language-specific content rather than translating only headings. When a language is changed, the current location in the tree is retained and the corresponding text is rendered. Shared identifiers also make it possible to audit missing or mismatched translations programmatically.

## 3.6. Iterative verification and current status

Verification has so far combined structural checks and formative author testing. Decision paths were followed in the browser, backtracking and resetting were tested, search results were checked against reconstructed paths, and the responsive layout was reviewed at desktop and mobile dimensions. jamovi menu descriptions and module names were revised against the available interfaces and author-generated analyses. Screenshot filenames were mapped explicitly to recommendation identifiers. Example datasets were imported into the relevant procedures and revised when coding or model errors occurred. R analyses were assembled in a common R Markdown project so that dataset paths, package requirements, and commands could be inspected together.

Version control records changes to the decision logic, content, assets, and interface, while the deployed site displays its beta status and last-update information. Generated static overview PDFs provide an additional representation of the decision routes for teaching and visual inspection. The repository also contains scripts for exporting paths, generating assumption-review materials, and producing the overview diagrams.

The current verification should be characterized as formative. The project has not yet completed an independent statistical review of every endpoint, a formal linguistic review by native speakers for every language, a documented accessibility audit, or an empirical usability and decision-accuracy study with representative users. These steps form the next validation phase. A publication release should additionally archive the exact source version, software and module versions, a dataset dictionary and expected output for each example, a clean-session render of the R Markdown project, and a machine-readable inventory of decision paths and translated content.

## Additional References for Sections 2 and 3

Allen, P., Dorozenko, K. P., & Roberts, L. D. (2016). Difficult decisions: A qualitative exploration of the statistical decision making process from the perspectives of psychology students and academics. *Frontiers in Psychology, 7*, 188. https://doi.org/10.3389/fpsyg.2016.00188

Appelbaum, M., Cooper, H., Kline, R. B., Mayo-Wilson, E., Nezu, A. M., & Rao, S. M. (2018). Journal article reporting standards for quantitative research in psychology: The APA Publications and Communications Board task force report. *American Psychologist, 73*(1), 3-25. https://doi.org/10.1037/amp0000191

Gardner, P. L., & Hudson, I. (1999). University students' ability to apply statistical procedures. *Journal of Statistics Education, 7*(1). https://doi.org/10.1080/10691898.1999.12131264

LeBeau, B., Ellison, S., & Aloe, A. M. (2021). Reproducible analyses in education research. *Review of Research in Education, 45*(1), 195-222. https://doi.org/10.3102/0091732X20985076

Mayer, R. E., & Moreno, R. (2003). Nine ways to reduce cognitive load in multimedia learning. *Educational Psychologist, 38*(1), 43-52. https://doi.org/10.1207/S15326985EP3801_6

Renkl, A. (2014). Toward an instructionally oriented theory of example-based learning. *Cognitive Science, 38*(1), 1-37. https://doi.org/10.1111/cogs.12086

Sahin, M. D., & Aybek, E. C. (2019). Jamovi: An easy to use statistical software for the social scientists. *International Journal of Assessment Tools in Education, 6*(4), 670-692. https://doi.org/10.21449/ijate.661803

Wood, D., Bruner, J. S., & Ross, G. (1976). The role of tutoring in problem solving. *Journal of Child Psychology and Psychiatry, 17*(2), 89-100. https://doi.org/10.1111/j.1469-7610.1976.tb00381.x
