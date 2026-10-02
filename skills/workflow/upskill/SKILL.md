---
name: upskill
description: Turn a topic, question, paper, or stated learning objective into a sourced, prerequisite-aware HTML learning tool. Use as tlearn's entry point to coordinate research, knowledge mapping, lesson authoring, interface design, construction, and verification, or resume an existing tool.
---
# Upskill

Make the requested understanding actionable, then create a tool the learner can open and use. Start from the user's topic or objective; avoid a knowledge inventory. Assume everyday language and basic arithmetic unless the user specifies another baseline.

## Establish the outcome and workspace

State what the learner will explain, recognize, predict, interpret, or do. Preserve explicit topics and formats; bound the depth rather than silently dropping part of the request. A broader but coherent objective can use several short sections in one tool. If a split is necessary, keep the complete requested outcome visible and identify all linked parts.

Choose a short descriptive project directory in the user's workspace; use a requested location. Keep generated projects outside the installed plugin. Inspect existing artifacts before creating or replacing them. Reuse current sources, graph, lesson, design, and verification evidence when their objective, versions, and checks still fit. Ask only for information that materially changes the work and cannot be inferred; proceed with reasonable stated assumptions where possible.

## Follow the core path

Load each workflow when its stage needs it, with only the relevant principle or reference. Use saved artifacts as handoffs rather than repeating research or long transcripts.

1. [Research-topic](../../research/research-topic/SKILL.md): inspect authoritative materials and save `sources.md` plus concise `sources/<id>/notes.md`. Reuse passages; cache originals selectively.
2. [Map-knowledge](../../knowledge/map-knowledge/SKILL.md): work backward from observable target capabilities, separate required prerequisites from helpful context, and save `knowledge.json`. Return missing foundations to research with the exact question and required depth. Continue until the selected route reaches the stated basics. A partial graph preserves progress but cannot support a finished dependent lesson.
3. [Design-learning](../../learning/design-learning/SKILL.md): save `lesson.json` with foundations, brief explanations, worked examples, practice with fading support, useful mixing, checked feedback, and fresh applications. Keep scientific qualifications and allowed resources explicit. Independently verify answers and rubrics.
4. [Design-interface](../../design/design-interface/SKILL.md): save a compact `interface.md` describing hierarchy, useful visuals, task states, readable tokens, accessible controls, and one-click completion/reopening. Design preserves the authored content.
5. [Build-learning-tool](../../engineering/build-learning-tool/SKILL.md): implement readable source, bundle `dist/index.html`, and exercise its actual interactions in direct-file/offline and static-server modes. Adapt the small starter rather than introducing a platform by default.

Use [verify-learning-tool](../verify-learning-tool/SKILL.md) throughout. Save current artifact identities, concrete expectations, executed checks, limitations, and pending work in `verification.md`. Scripts check mechanical rules; source support, scientific judgments, instructional adequacy, and actual browser behavior require their respective evidence. Changed inputs invalidate affected downstream checks; revise the owning artifact before renewing handoffs.

## Keep learning and delivery honest

Teach domain foundations in ordinary opening sections. Let learners mark familiar sections complete in one click, reopen them, and navigate freely. Completion, assisted practice, rubric self-check, independent performance, and retention remain different claims.

Core learning should work from the delivered HTML without runtime fetches, accounts, or a server. Storage is optional convenience. A larger static bundle, companion computation, or service needs a concrete learning requirement; it is not necessary merely for hosting. Source updates are occasional rebuilds, not a synchronization subsystem.

## Deliver

Continue through the requested outcome rather than stopping at a plan or an intermediate artifact. Report real gaps if a required source, computation, or browser check is unavailable; do not claim a pending check passed.

Return the HTML path, a short description of what learners can do, verified delivery modes, and any material limitation. Keep source and authoring artifacts alongside it for future reuse. Prepare static-host sharing details when useful; publish only when requested or already authorized. The [tlearn guide](../../../docs/tlearn-guide.md) explains user-facing usage and workflow choices.
