# Project verification record

Read when preparing or updating `<project>/verification.md`. Keep one short record with the recipes needed for this tool. This is supporting evidence, not another canonical content model or a formal learning evaluation.

## Record the scope

Include the bounded objective, target actions and allowed resources, graph revision, and the exact artifacts checked. Record byte hashes when a revision field is absent or evidence must identify an exact snapshot; standard `shasum -a 256` or Python `hashlib` is sufficient. Changed inputs make old results stale until affected checks are repeated.

List current checks as **passed**, **failed**, or **pending** with their actual scope. A draft recipe or unavailable browser pass remains pending. A structurally valid partial graph is still partial; the script's exit status cannot erase its research gaps.

For each useful recipe, preserve:

| Field | Contents |
| --- | --- |
| Claim | What content, linkage, response, or behavior should hold |
| Input/action | A concrete prompt, dataset, command, or sequence through the delivered interface |
| Expected evidence | Observable result and how it was established independently |
| Procedure | Exact reusable command or brief reviewer steps |
| Observation | Actual result, artifact identity, and a compact evidence location when useful |
| Limitation | What this check cannot establish, or which check is still pending |

Use enough cases to cover the real risks; do not generate a fixed quota or an exhaustive feature catalog for every one-off tool.

## Minimal stage checks

**Graph:** run `verify_artifacts.py <project> --stage graph`; review source registration and inspected status through `sources.md`; inspect important passages and dependency rationale; trace the target backward for hidden foundations. The script checks graph structure and conventional source-note presence, not source fidelity or a valid formal KST model.

**Lesson:** run `verify_artifacts.py <project> --stage lesson`; review foundation teaching order and actual target coverage; solve tasks independently; challenge answer choices, precision, units, and rubrics; inspect source qualifications and solution cues. Section/block associations are declarations, not proof of instructional adequacy. The script does not execute embedded code or scientific models.

**HTML:** run saved browser recipes against the actual delivery file. Test both accepted and rejected responses, explicit help/reveal, feedback, navigation, completion/reopening, visuals, and promised offline behavior. Check content against the saved lesson and graph. Record real interaction results; no HTML stage is currently established by the artifact checker.

## Example expectation

For an invented share-of-counts task with 5 selected objects among 25 total, establish `5 / 25 = 0.2` from the input counts using a separate calculation. In the delivered numeric interface, `0.2` should be accepted; `20` should receive the percentage-versus-decimal feedback; blank or invalid input should not become a correct answer. Probe numerical tolerance boundaries separately when the grader uses tolerance.

Testing the interface against an authored `expected: 0.2` checks that it implements the key. Recomputing from the counts checks the key itself. Deliberately changing the key to `0.3` should still pass a shape-only validator and should fail the independent answer comparison; preserve that distinction in reported results.

A fresh application needs a new task that demands the target reasoning. A later human response supplies evidence about that performance under the specified help conditions. Authoring checks cannot establish learning gains or retention.

When a recipe fails, fix the source, graph, lesson, or implementation that owns the defect, then repeat the affected checks. Do not alter an expected result merely to agree with the current output.
