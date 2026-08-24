# Statistical Decision Tree

An interactive, multilingual decision-support tool for selecting common statistical analyses and connecting them to assumptions, example data, jamovi procedures, R code, effect sizes, and scientific reporting.

**Live application:** <https://dariho.github.io/decision-tree/>

> **Development status:** Beta. The tool is intended for education and initial methodological orientation. It does not replace statistical consultation, study-design expertise, diagnostic evaluation, or subject-specific literature.

## What the Tool Provides

- A guided path based on the analytical goal, variables, measurement level, study design, dependence structure, and relevant assumptions
- Direct procedure search with automatic reconstruction of a compatible decision path
- Hypothesis-testing, exploratory, predictive, latent-variable, mixed-model, machine-learning, and meta-analysis routes
- Expandable explanations of assumptions, including practical checks and reporting considerations
- Psychology and sport-science examples
- Downloadable CSV datasets for practising the analyses
- Procedures for both jamovi and R, with jamovi screenshots where available
- Common effect-size or performance measures and interpretation notes
- APA-style reporting scaffolds
- English, German, French, Spanish, and Italian interfaces

## Using the Website

1. Choose the language from the top navigation.
2. Select the option that best represents the purpose of the analysis.
3. Answer each question using information from the research design and dataset.
4. Review the visible decision path and the recommended procedure.
5. Open the assumption details and verify them against the actual data and design.
6. Download the example dataset or switch between the jamovi and R procedures.
7. Adapt the effect-size and reporting guidance to the real analysis output.

Users who already know a possible procedure can use **Search**. Opening a search result reconstructs the associated path so that the methodological conditions remain visible.


## Example Datasets

Prepared datasets are stored in [`data/examples`](data/examples). The accompanying [dataset guide](data/examples/README.md) identifies the relevant variables and analysis for each CSV file.

The datasets are educational examples. Some are intentionally simple or strongly structured to make an analytical workflow easy to reproduce. They are not benchmark datasets and should not be used to infer realistic effects, model performance, or required sample sizes.

## R Companion Project

The [`r-markdown-project`](r-markdown-project) directory contains:

- `decision-tree-r.Rproj`
- `decision-tree-analyses.Rmd`
- package-installation checks and executable examples

Open the project in RStudio and follow the [R project instructions](r-markdown-project/README.md). The notebook reads the same CSV files offered through the website.

## Repository Structure

```text
.
|-- index.html                     Application interface
|-- styles.css                     Responsive visual design
|-- app.js                         Decision graph and result rendering
|-- translations-extra.js          Additional language content
|-- scenarios.js                   Psychology and sport-science examples
|-- procedure-translations.js      Localized software procedures
|-- assumptions-details.js         Expanded assumption guidance
|-- apa-reporting.js               Reporting requirements and scaffolds
|-- assets/jamovi/                 Available jamovi screenshots
|-- data/examples/                 Downloadable teaching datasets
|-- docs/                          Reviewed assumption and overview material
|-- r-markdown-project/            Reproducible R companion project
|-- LICENSE                        MIT software license
`-- LICENSE-CONTENT.md             Educational-content license and attribution
```

## Methodological Limits

A recommendation indicates that a procedure is commonly compatible with the selected conditions; it does not establish that the procedure is optimal for every dataset. Users remain responsible for checking measurement quality, sampling, missing data, outliers, model specification, statistical power, uncertainty, multiplicity, and design-specific assumptions.

Statistical association, regression, mediation, structural equation modelling, and machine-learning predictions do not by themselves provide evidence of causality. Causal interpretation requires an appropriate design, temporal structure, measurement strategy, and defensible assumptions.

## Feedback

To report a bug, incorrect procedure, translation issue, or improvement proposal, contact:

**Darías Holgado:** [darias.holgado@fernuni.ch](mailto:darias.holgado@fernuni.ch)

When reporting a problem, include the selected language, decision path or procedure, browser, and a short description of the expected and observed behaviour.

## Citation

Until a versioned DOI is available, please cite the project as:

> Holgado, D., & Martarelli, C. (2026). *Statistical Decision Tree* [Computer software and educational resource]. UniDistance Suisse. https://dariho.github.io/decision-tree/

## Licences

The application code is licensed under the [MIT License](LICENSE).

The decision paths, explanations, translations, diagrams, documentation, and example datasets are licensed under the [Creative Commons Attribution 4.0 International License](LICENSE-CONTENT.md). The repository contains third-party jamovi interface screenshots that are excluded from these licences as described in `LICENSE-CONTENT.md`.

## Authors

- Darías Holgado
- Corinna Martarelli

Developed at **UniDistance Suisse (FernUni Schweiz)**.
