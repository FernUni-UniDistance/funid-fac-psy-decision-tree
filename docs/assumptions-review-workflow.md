# Assumptions Review Workflow

This workflow is meant to review the assumption content before it is integrated into the interactive floating windows.

## Files

- `docs/assumptions-review-table.csv` is the working review table.
- `docs/assumptions-guide.md` is the readable reference document currently generated from the website assumptions.
- `docs/assumptions-popover-draft.html` is only a design draft for the future floating window interaction.

## Recommended Review Order

1. Mean / median / variance tests
2. Association / frequency tests
3. Regression / prediction models
4. ANOVA / covariance models
5. Mixed models
6. Latent / exploratory structure
7. Machine learning / exploratory grouping
8. Meta-analysis
9. Other

## Review Columns

- `review_group`: methodological family used to organize the review.
- `result_id`: internal website identifier for the recommended analysis.
- `result_name`: English name shown to the user.
- `assumption_id`: stable identifier proposed for the future popup content.
- `short_assumption`: current short bullet shown in the website.
- `current_detail`: current expanded explanation from the assumptions guide.
- `review_status`: review decision.
- `proposed_revision`: corrected final wording, if the current text needs changes.
- `how_to_check`: optional practical checks to show in the floating window.
- `what_to_report`: optional reporting guidance to show in the floating window.
- `review_notes`: comments, doubts, references, or questions.

## Review Statuses

- `OK`: the short assumption and current detail can be used as written.
- `Edit`: the assumption is correct in principle, but wording should be revised.
- `Delete`: the assumption should not be shown for this analysis.
- `Add`: a missing assumption should be added. Add a new row if needed.
- `Needs expert check`: the assumption needs methodological confirmation before integration.

## Practical Rules

- Review the English content first.
- Keep the short assumption concise because it appears in the result panel.
- Put fuller explanations in `current_detail` or `proposed_revision`.
- Use `how_to_check` for concrete diagnostics, plots, or design checks.
- Use `what_to_report` for article-style reporting guidance.
- Avoid causal wording unless the study design, not only the statistical model, supports it.
- If an assumption is design-related rather than statistical, say so explicitly.

## Integration Criteria

The floating-window feature should only be integrated after:

- every row has a review status;
- all `Edit` rows have a proposed revision;
- all `Delete` rows are confirmed;
- all `Needs expert check` rows are resolved or intentionally left out;
- the English version is considered stable enough to translate.
