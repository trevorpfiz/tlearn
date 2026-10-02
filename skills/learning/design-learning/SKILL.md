---
name: design-learning
description: Turn a focused learning objective, sources, and prerequisite graph into a lesson specification for a lightweight HTML tool. Use when sequencing instruction or writing explanations, worked examples, practice, feedback, mixed review, and independent application tasks.
---
# Design learning

Design the learner's actions before the interface. Produce a sourced, checked `lesson.json` that an HTML builder can implement without inventing instruction or answer keys.

## Ground the lesson

Read the objective and coverage in `sources.md`, the relevant source notes it links, and the required route in `knowledge.json`. Reuse inspected content; reopen original passages for new details, uncertainty, or version checks. Apply [source integrity](../../research/principle-source-integrity/SKILL.md) when resolving content or citation concerns. If artifacts are missing, form a small capability/prerequisite outline from supplied materials and identify evidence gaps. Resolve gaps before finalizing dependent content; continue supported sections.

Express the outcome as something the learner can explain, predict, interpret, or do. Decide what a fresh demonstration would require. Assume everyday language and basic arithmetic unless the user specifies otherwise. Teach necessary domain foundations in ordinary opening sections. Do not require a knowledge inventory or diagnostic exam.

Use graph items as capability types and exercises as instances. Preserve item and source IDs. Order required prerequisites before their uses; retain parallel branches and distinguish helpful context from requirements. Flag questionable dependencies instead of treating an inferred graph as a measured learner state. Split an oversized objective before adding an entire prerequisite curriculum.

## Shape the learning path

Use the following rules throughout. Read the linked principle when its decision needs more detail; do not load every evidence reference by default.

| Decision | Principle |
| --- | --- |
| Brief instruction enables a meaningful attempt; visuals need a reasoning prompt. | [Active practice](../principle-active-practice/SKILL.md) |
| Model a small step, leave steps to complete, then remove the worked solution. | [Scaffold and fade](../principle-scaffold-and-fade/SKILL.md) |
| Practice recurring components and use them again in advanced work. | [Fluency and layering](../principle-fluency-and-layering/SKILL.md) |
| Retrieve before revealing; begin with similar practice, then mix appropriate tasks. | [Retrieve and mix](../principle-retrieve-and-mix/SKILL.md) |
| Connect small skills to whole tasks and practice evidence, assumptions, and limits. | [Scientific reasoning](../principle-scientific-reasoning/SKILL.md) |
| Check fresh performance and distinguish completion, help, and independence. | [Independent performance](../principle-independent-performance/SKILL.md) |

Start with a brief view of the goal and why the foundations matter. Follow with short instruction–attempt–feedback cycles, gradually combining components into meaningful work. A cycle may need a worked example, comparison, diagram, or procedural reference; use what enables the next action. Choose activities by capability, without fixed explanation/quiz ratios or exercise quotas.

## Author and check

Read [the lesson format](references/lesson-format.md) when writing the deliverable. Supply actual explanations, examples, prompts, answer checks or rubrics, optional hints, error-specific feedback, and fresh retries. Keep answers hidden until an attempt or explicit reveal. Link feedback to the ordinary section that teaches the relevant component.

Solve every task yourself. Check arithmetic, units, choices, code outputs, alternative valid responses, and the adequacy of reasoning rubrics. Match scoring to the response: deterministic checks for suitable answers, transparent self-check rubrics for reasoning that the HTML cannot reliably grade. Identify synthetic data and pedagogical simplifications. Preserve provenance for scientific claims; label invented teaching examples as such.

Finish with fresh tasks that exercise the target outcome under stated resource conditions. Specify one-click **Mark complete**, reopening, and optional help without locked progression. Completion expresses navigation; it never proves mastery. Within-tool revisits do not establish long-term retention.

## Deliver and verify

Write `lesson.json` in the learner's project. Confirm every target has instruction, practice, and a fresh application; required foundations precede use; all item/source/task links resolve; answer checks and remediation match their prompts. Report any remaining content gaps and the next build stage concisely.

For biological data, methods, or code, consult [computational biology patterns](references/computational-biology.md). For rationale, source passages, or evidence limits, consult only the relevant section of [learning evidence](references/learning-evidence.md).
