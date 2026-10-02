---
name: design-interface
description: Turn an authored tlearn lesson into a minimal, welcoming interface plan for lightweight HTML. Use when deciding visual hierarchy, typography, layout, controls, task states, accessible visualizations, completion behavior, and the handoff to HTML engineering.
---
# Design the learning interface

Design a calm place to think and a satisfying place to act. Produce a compact `interface.md` in the learner's project, separate from canonical lesson content and the later HTML implementation.

## Ground the design

Read the objective, ready `knowledge.json`, and authored `lesson.json`, preserving IDs and the graph revision binding. Reuse current verification evidence; use [verify-learning-tool](../../workflow/verify-learning-tool/SKILL.md) if the inputs lack current checks. Missing content or a changed learning route returns to its owning stage.

Identify the main learner action and the difficult representation: a diagram, equation, plot, table, or code fragment. Apply [attention first](../principle-attention-first/SKILL.md) and the relevant [active practice](../../learning/principle-active-practice/SKILL.md) guidance. Plan with real lesson blocks, not generic landing-page copy.

Preserve prompts, checked answers, explanations, resource conditions, and scientific qualifications. Choose how to present them; request a learning-stage revision if the representation requires new data, a different task, or altered reasoning. Keep UI instructions separate from authored instructional content.

## Establish a restrained visual direction

Read [interface defaults](references/interface-defaults.md) for a starting vocabulary: readable type, light surfaces, a compact spacing scale, a limited accent palette, and predictable controls. These are adjustable tlearn heuristics, not scientifically optimal measurements or a mandatory framework.

Take marimo's connection between controls and output, Math Academy's direct lesson focus, and Brilliant's integrated visual practice as inspiration. Use subject-relevant diagrams or a small visual motif for character; keep the surrounding interface quiet. Do not copy branding, import a notebook runtime, or add accounts, mastery dashboards, streaks, or engagement features to reproduce a platform's feel.

Write a brief visual intention, a small token set, and a desktop/narrow-screen wireframe. Compare layout alternatives only when they resolve a real tension, such as seeing a plot while answering. A focused reading column is the default; a useful adjacent figure can justify more space. Avoid fixed-height screens that separate necessary context or clip content.

Reuse the visual vocabulary and control behavior across topics; let the material and its purposeful representations provide variation. A new objective does not require a new interface grammar or branding exercise.

## Plan the learning interaction

Map each lesson block to its presentation and task IDs to their control/state behavior. Keep the response, permitted context, and feedback close together. Use learner-paced steps, clear action names, visible input labels, and ordinary controls.

Specify initial, entered, invalid, evaluated, helped/revealed, and revisited states where applicable. Distinguish malformed input from a valid but incorrect answer. Preserve the response and show the authored feedback locally; a rubric remains an explicit self-check. Revealed answers and help use must not become independently verified success.

Keep essential definitions and assumptions visible as allowed by the task. Disclose optional help, sources, and graph exploration without turning the main view into a dashboard. Maintain the lesson's prediction/retrieval-before-reveal behavior; interactive output must not reveal the answer before the intended attempt. Provide accessible alternatives that preserve the same information and reasoning demand.

Use one-click **Mark complete**, reopening, and unrestricted section navigation. Show completion as a learner navigation choice. Navigation, hint use, answer feedback, and section completion are different states; do not blur them into a mastery indicator. Avoid automatic advancement, focus jumps, or reset of an in-progress response on navigation.

## Save and hand off

Use [interface format](references/interface-format.md) to save only decisions the builder needs: input identities, tokens, layout, block presentation, interaction states, visual equivalents, and concrete acceptance checks. Link supporting assets only when useful and preserve provenance. Keep implementation libraries and code organization for engineering unless a design requirement genuinely constrains them.

Check planned opaque colors with `python3 <skill-dir>/scripts/check_contrast.py '#202822' '#ffffff' --minimum 4.5`; select the threshold by the actual text or control role. This checks one color pair, not overall accessibility.

Add relevant design checks to `verification.md`. When a rendered prototype exists, use [interface review](references/interface-review.md) to inspect actual task states, narrow layouts, zoom, keyboard use, and solution concealment; screenshots alone cannot prove interaction behavior. Before rendering, report these checks as pending. Revisit the plan if critique shows unnecessary effort or distracting decoration.

Hand the plan and unchanged canonical content to [build-learning-tool](../../engineering/build-learning-tool/SKILL.md) for implementation, portable packaging, and actual browser checks.

For research, platform observations, or tradeoffs, consult [design rationale](references/design-rationale.md). Load those sections selectively; the working defaults and handoff do not require rereading every source.
