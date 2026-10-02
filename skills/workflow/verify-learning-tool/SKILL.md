---
name: verify-learning-tool
description: Plan and run evidence-based checks for a tlearn source packet, knowledge graph, lesson, or delivered HTML tool. Use at artifact handoffs or after changes to verify consistency, source fidelity, instructional alignment, answer validity, and actual interface behavior.
---
# Verify a learning tool

Define acceptable evidence before relying on generated content, then inspect and exercise the actual artifacts. Preserve a compact project-local `verification.md` so future agents can repeat the checks without rediscovering them. This shared skill serves the core path; it does not add a separate evaluation platform.

## Choose the claims to verify

Read the bounded objective, relevant sources, graph, and available lesson. Identify what the learner should demonstrate, under which resource conditions, and what failures would invalidate the tool. Create or update the [verification record](references/verification-record.md) with concrete inputs, independently established expectations, commands or reviewer procedures, and observed evidence.

Use [verifiable outcomes](../principle-verifiable-outcomes/SKILL.md) and [deterministic operations](../principle-deterministic-operations/SKILL.md). A generated recipe stays unverified until executed. Scope results to the artifacts and stage actually checked; missing later stages remain pending.

## Check each boundary

| Boundary | Evidence |
| --- | --- |
| Research → graph | Important claims match inspected passages; source versions and qualifications are preserved; inferred dependencies are identifiable. |
| Graph → lesson | The selected route is supported; foundations are taught before use; every target has instruction, practice, and a fresh application requiring its action. |
| Lesson answers | Independently derived solutions, appropriate numerical precision, defensible choices, and rubrics tested against valid alternatives and plausible errors. |
| Lesson → HTML | The delivered interface presents the authored content and exercises the promised response, feedback, reveal, navigation, and visual behavior. |

Run `python3 <skill-dir>/scripts/verify_artifacts.py <project> --stage graph` after mapping, or `--stage lesson` after learning design. It reuses graph validation and checks artifact links, revision binding, response/check shapes, navigation, and declared coverage. Graph checks can preserve a partial route; lesson completion requires a ready graph. Source-note presence is checked mechanically; registration, inspected status, and passage support require review.

Structural success is one piece of evidence. Review the actual objective, prerequisite rationale, explanations, diagrams, task demands, and source passages; tags do not prove instruction or scientific correctness. Return missing evidence to research-topic, questionable routes to map-knowledge, and content defects to design-learning.

## Verify answers without circular confirmation

Solve every authored task from its prompt, data, and allowed resources. When useful, give an independent solver those inputs without the answer key; otherwise use a separate derivation, a trusted worked result, or an executable calculation based on the inputs. Comparing an app with the same authored key checks implementation agreement, not whether that key is right.

Check meaningful counterexamples: a likely wrong unit, reversed ratio, ambiguous choice, acceptable alternative explanation, or flawed scientific conclusion. Resolve disagreements using reasoning and inspected sources. Agreement between agents is corroboration, not proof; their errors may be shared. Keep rubrics transparent self-checks where automatic grading cannot establish correctness.

## Exercise the delivered tool

When HTML exists, open the actual delivery file through an available browser harness. Use the [browser checks](../../engineering/build-learning-tool/references/browser-checks.md) for direct-file/offline and static-server modes. Run recipes for its implemented or promised interactions: correct and incorrect responses, empty or invalid input, numerical boundaries where relevant, hints and explicit reveals, completion and reopening, and keyboard navigation. Check authored retry controls, remediation links, and purposeful visuals when present; a later fresh task can supply practice without a retry control. Confirm the initial interface does not reveal practice or application solutions inadvertently.

Check the promised delivery mode and content against the canonical artifacts. A screenshot cannot establish answer handling; an artifact validator cannot establish browser behavior. Reuse an existing harness and stable accessible controls. Retain compact results and useful failure evidence; clean up only processes or temporary state created by this run. Report an unavailable browser check as pending rather than verified.

For rendered design, use [interface review](../../design/design-interface/references/interface-review.md) to check the planned hierarchy, responsive states, keyboard/focus behavior, meaningful alternatives, and solution concealment. Mechanical contrast checks supplement this review; they cannot certify accessibility.

## Report and maintain

Record artifact revision or byte identity, checks run, results, limitations, and unresolved defects in `verification.md`. Fix defects in their owning artifact, then rerun affected checks and handoffs. Update stale recipes from observed behavior without weakening an expectation merely to make a regression pass.

Authoring verification supports a trustworthy tool. A learner's fresh response supplies separate evidence about performance under stated conditions. Section completion, assisted success, independent performance, and later retention remain distinct; do not infer learning gains or mastery from a green authoring check.

See [evidence and pstack adaptation](references/verification-rationale.md) when choosing verification depth or interpreting results.
