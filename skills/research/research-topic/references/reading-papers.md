# Read a paper for learning

Read when a paper anchors the objective or supplies a consequential method or result. Extract what later stages need to teach; do not write a generic whole-paper summary.

## Orient, then inspect the needed evidence

Identify the question, contribution, publication or preprint version, and the intended learner performance. Screen the abstract and structure to locate relevant methods, results, figures, and supplements. Read the passages supporting selected claims. Record the inspected scope so a skim never becomes an implied full review.

Use the paper's bibliography to locate foundations, competing methods, and prior evidence. A paper can assume substantial knowledge; those assumptions suggest prerequisite research, rather than justify presenting its introduction as sufficient instruction.

## Preserve a compact teaching record

For the selected portion, capture:

- **Question and claim:** what is being asked, what is proposed, and whether each statement is background, observation, interpretation, or speculation.
- **Method:** inputs, outputs, mechanism or computational steps, notation, and assumptions needed to explain the chosen result.
- **Evidence:** the relevant experiment, dataset, comparison, derivation, figure, or table, with exact locations.
- **Limitations:** what the design establishes, what remains uncertain, and where a simplified teaching example would depart from the work.
- **Resources:** available data, code, supplements, versions, and practical requirements, when they matter to the objective. Use links for large resources; downloading entire datasets is not part of ordinary source gathering.
- **Prerequisite suggestions:** capabilities needed to understand the selected part, clearly labeled as instructional inference for the mapping stage.

Follow [the source format](source-format.md) for storage. Keep a claim linked to its original passage even when a more accessible source explains the prerequisite. A review and the study it cites are different records, with their relationship explicit.

## Appraise the claim at the right level

Check whether design, sample, measurements, controls or baselines, analyses, and uncertainty support the interpretation. Distinguish the authors' interpretation from what the result directly shows. Missing reporting can leave a question unknown; it is not automatically proof of a flawed method. Check notices and updated versions when available.

For computational biology, inspect the relevant path from biological question through measurement to computation and conclusion. Ask what observations represent, which assumptions affect the result, whether comparisons are appropriate, and what independent validation exists.

For supervised ML, [DOME](https://doi.org/10.1038/s41592-021-01205-4) supplies a domain-specific lens: data, optimization, model, and evaluation. Inspect independence of training and evaluation data, tuning and preprocessing boundaries, metrics, baselines, and available implementation details as relevant. Reporting these details aids appraisal; a completed reporting checklist does not prove a model is valid. Use the publication together with its [correction](https://www.nature.com/articles/s41592-021-01304-2); an earlier [preprint](https://arxiv.org/abs/2006.16189) is a separate version.

## Check extraction before teaching

Inspect original equations, plots, table headers, captions, and labels when text extraction could lose signs, units, alignment, or qualifications. Preserve equation numbers, figure/panel IDs, supplement names, and both PDF page index and printed page where they differ. Mark missing or ambiguous details; never silently reconstruct a damaged expression.

When the goal involves reconstruction, identify a bounded part that can be explained or implemented, its necessary inputs, and a plausible check. Do not equate running author code with independent reconstruction, or a toy example with replication of a biological study. Further guidance is in the repository's [paper-to-learning research note](../../../../docs/paper-to-learning-research.md); its broader proposals are background, not additional required skills.
