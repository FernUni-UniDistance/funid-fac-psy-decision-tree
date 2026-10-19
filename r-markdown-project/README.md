# Decision Tree R Markdown Project

This folder contains an R Markdown companion notebook for the statistical decision tree website.

Extract the complete ZIP before opening `decision-tree-r.Rproj` in RStudio, then open `decision-tree-analyses.Rmd`.

The notebook reads the prepared example datasets directly from:

`../data/examples`

That means the R examples stay connected to the same CSV files that are downloadable from the website.

Some analyses use optional R packages such as `lavaan`, `metafor`, `lme4`, `lmerTest`, `ordinal`, `MASS`, `ARTool`, `rpart`, `caret`, `randomForest`, `e1071`, and `psych`.

In the notebook, run the `install-missing-packages` chunk once to install only the packages that are not already available on your computer.
