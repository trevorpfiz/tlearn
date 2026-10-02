# Verification rationale and pstack adaptation

Read when deciding verification depth, reusing pstack ideas, or interpreting evidence. These procedures are tlearn adaptations, not a guarantee of educational effectiveness.

## Why project-specific verification matters

pstack's create-verification-skill captures the real launch path, interaction tools, evidence, and cleanup in a project-local skill and indexed feature recipes. It executes a generated recipe against an actual feature before delivery. Its maintenance companion checks the recipes against source and live behavior rather than trusting a static document. [Create workflow](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/create-verification-skill/SKILL.md), [maintenance workflow](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/maintain-verification-skill/SKILL.md).

tlearn has shared artifact shapes and intentionally small tools. Use one shared verifier and a compact project-specific record initially. Preserve exact procedures and expectations so later agents can rerun them; do not generate duplicate skill scaffolding for every topic. A separate project-local skill becomes useful when unusual computation or interactions need substantial reusable instructions. Refresh affected checks when artifacts change; periodic maintenance and PR orchestration are unnecessary for this core path.

## The educational extension

Backward design starts with desired results, then acceptable evidence, then instruction. This supports deciding what a target application must demand before generating attractive explanations or quizzes. [ASCD description](https://ascd.org/el/articles/understanding-by-design).

The AERA/APA/NCME Testing Standards discuss validity for particular interpretations and uses of responses, including content and cognitive demands. Checklist satisfaction alone does not establish acceptability. We borrow this caution without imposing formal psychometric assessment on narrow self-study tools. See printed pages 11–15 and the introduction. [2014 Standards](https://www.testingstandards.net/uploads/7/6/6/4/76643089/standards_2014edition.pdf).

BioSkills identifies quantitative, modeling, and scientific-reasoning outcomes. Accordingly, a computational biology objective may need a justified interpretation or limitation as well as a correct calculation. This framework informs outcome coverage, not a guarantee that a generated rubric is valid. [BioSkills Guide](https://pmc.ncbi.nlm.nih.gov/articles/PMC8693931/).

Skycak's biology account describes actively correcting LLM drift to preserve short, accurate practice loops. It supports scrutinizing the authored learning experience; it remains practitioner experience. [Biology learning account](https://www.justinmath.com/q-and-a-4/).

Authoring verification establishes specific properties of the artifact. Human learning claims need observed responses and appropriate comparison conditions. Fresh independent performance, improvement, mastery, and later retention are different conclusions; none follows from green JSON or browser checks.

## Selective reuse

Adapt four pstack ideas into two tlearn principles:

- **Verifiable outcomes:** actual artifact evidence and checks sensitive to relevant failures, from [prove-it-works](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-prove-it-works/SKILL.md) and [test-behavior-not-implementation](https://github.com/michael-denyer/pstack-claude/blob/92debb73437f599c014788b1a11ade7db72c3e93/plugins/pstack/skills/principle-test-behavior-not-implementation/SKILL.md).
- **Deterministic operations:** reusable mechanical tools and rules encoded in structure, from [build-the-lever](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-build-the-lever/SKILL.md) and [encode-lessons-in-structure](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-encode-lessons-in-structure/SKILL.md).

Reuse the existing graph validator. Add cross-artifact and lesson checks now; use ordinary hashing and independent calculations where needed. A deterministic HTML renderer, stale-delivery checks, and browser helpers should follow the real builder rather than speculative interfaces.

Keep source appraisal, prerequisite necessity, scientific conclusions, and instructional adequacy as reasoned reviews. Agreement between agents can corroborate a result but cannot remove correlated errors. A wrong numerical key can remain structurally valid: checking its type and comparing the app with that key do not independently solve the problem.

The inspected source snapshots are cursor/plugins `7022c81efb48d8b5eb15498ce6043a3bd74b694c`, backnotprop/pstack `157aae39a733135e93d8b5b19ff62c6a84b0ad56`, and michael-denyer/pstack-claude `92debb73437f599c014788b1a11ade7db72c3e93`. The wording and new helper are authored for tlearn; these links attribute the workflow ideas without transplanting harness-specific instructions.
