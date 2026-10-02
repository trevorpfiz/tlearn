# tlearn

> Skills and principles for efficient AI-assisted learning.

AI agents amplify what we can do. Our knowledge and judgment guide that work.

tlearn equips **Codex and Claude Code** to turn a focused learning objective into a lightweight, one-off HTML tool. Computational biology will be an early proving ground.

**Status:** learning and research skills authored. Knowledge mapping, interface design, HTML construction, and packaging are next.

## Getting started

The planned **upskill** command takes a topic, question, or paper. The agent helps define a narrow learning objective.

```text
upskill "Understand how differential gene expression analysis works."
```

Assume general basics: everyday language and basic arithmetic. Teach needed domain foundations in the opening sections, without a knowledge inventory. Learners can mark familiar sections complete in one click and reopen them; completion records their choice, not demonstrated mastery.

## Learning philosophy

Our foundation is [The Math Academy Way](https://www.justinmath.com/books/) and Justin Skycak's [biology learning experience](https://www.justinmath.com/q-and-a-4/), extended with research on learning complex scientific skills.

- **Begin with an outcome.** Define what the learner should explain, predict, interpret, or do, and how to demonstrate it.
- **Build in small steps.** Teach needed prerequisites. Coordinate relevant branches of biology, mathematics, statistics, and computing as they converge.
- **Practice with fading support.** Move from brief instruction and worked examples to completion tasks and independent attempts. Give specific feedback and address the component skill behind mistakes.
- **Build fluent foundations and layer them.** Understand recurring concepts, practice their procedures, and actively use both in later tasks.
- **Retrieve and mix.** Recall before revealing answers. Begin unfamiliar skills with similar examples, then vary and mix tasks so learners must choose the method.
- **Connect parts to meaningful work.** Combine small exercises with interpreting figures, explaining mechanisms, analyzing small datasets, or implementing a simplified method. Teach assumptions, uncertainty, limitations, and evidence alongside procedures.
- **Protect attention, preserve challenge.** Keep the interface minimal, readable, and welcoming. Visuals should support predictions or explanations. Make learning satisfying through meaningful challenges and visible progress.
- **Verify independence and respect retention.** Check fresh applications with reduced assistance. Distinguish completion, assisted success, and independent performance. Durable retention needs later practice; ongoing review is optional.

See [research notes](docs/learning-philosophy-research.md) for evidence, adaptations, and limits.

The [learning skill](skills/learning/design-learning/SKILL.md) coordinates six focused principle skills. Its references provide the [lesson format](skills/learning/design-learning/references/lesson-format.md), [evidence and adaptations](skills/learning/design-learning/references/learning-evidence.md), and [computational biology patterns](skills/learning/design-learning/references/computational-biology.md). Detailed guidance loads only when needed; Codex/Claude installation remains a later step.

[Research-topic](skills/research/research-topic/SKILL.md) creates a compact local source index and inspected notes, with selective original caching. Selection uses explicit criteria and claim-linked reasons. See the [research decisions](docs/source-research.md) for storage, organization, and source appraisal.

## Where Knowledge Space Theory fits

The [knowledge-spaces project](https://github.com/vanderbilt-data-science/knowledge-spaces) inspires atomic items and prerequisite relationships. [Knowledge Space Theory](https://arxiv.org/abs/1511.06757) also models feasible combinations of mastered items. Our initial graph organizes instruction, with inferred dependencies marked as hypotheses. Full adaptive assessment is deferred; class-wide planning is outside tlearn's scope.

## From objective to learning tool

1. **Frame:** turn the request into a bounded objective using the basic starting assumption.
2. **Research:** collect authoritative materials and summarize relevant sections with citations and uncertainties.
3. **Map and revisit:** extract knowledge items, discover prerequisites, and research gaps until the route reaches general basics. Split objectives whose foundations exceed a practical tool's scope.
4. **Preserve:** save a reusable knowledge graph with dependencies, source references, and marked inferences. Keep inspected source notes and links locally; cache useful originals and reopen passages when needed.
5. **Teach and verify:** build the HTML learning path, foundational sections first. Check scientific accuracy, exercises, feedback, interactions, and accessibility.

## Roadmap

- [ ] Complete principle skills for knowledge mapping, interface design, and HTML engineering.
- [x] **Research:** source-integrity and research-topic, with repeatable selection, provenance, reusable notes, and selective original caching.
- [ ] **Knowledge mapping:** prerequisite discovery, research bounds, and a graph artifact format.
- [x] **Learning design:** six principle skills, `design-learning`, and a lesson format covering practice, feedback, scientific reasoning, and fresh applications.
- [ ] **Interface design:** clear hierarchy, minimal cognitive load, accessible controls, one-click section completion, and a clean, playful feel.
- [ ] **HTML engineering:** reusable starter, semantic HTML, responsive layout, minimal dependencies, and proportionate validation.
- [ ] **upskill and packaging:** easy onboarding, artifact reuse, selective guidance loading, and verified Codex/Claude support.
- [ ] **First complete tool:** follow the core path for one narrow computational biology objective and refine it through use.

Later: optional spaced-review tools for ongoing retention.

See the [proposed repository structure](docs/repository-structure.md) for the draft organization.
