# tlearn

> Skills and principles for efficient AI-assisted learning.

AI agents amplify what we can do. Our knowledge and judgment guide that work.

tlearn equips **Codex and Claude Code** to turn a focused learning objective into a lightweight, one-off HTML tool. Computational biology will be an early proving ground.

**Status:** the core skills, upskill workflow, and Codex/Claude packages are authored and checked. The [genomics file-formats example](examples/genomics-file-formats/README.md) is complete, with offline and static-host delivery verified.

## Getting started

Clone the repo, then install the complete plugin in your agent. Replace the local path below with your checkout:

```sh
git clone https://github.com/trevorpfiz/tlearn.git

# Codex
codex plugin marketplace add /absolute/path/to/tlearn
codex plugin add tlearn@tlearn

# Claude Code
claude plugin marketplace add /absolute/path/to/tlearn
claude plugin install tlearn@tlearn
```

Start a new session and use **upskill** with a topic, question, or paper. The agent helps define the relevant outcome and depth. In Claude Code, use `/tlearn:upskill`; in Codex, select `tlearn:upskill` in the skill picker or ask for it by name.

```text
Use upskill to help me understand how differential gene expression analysis works.
```

Assume general basics: everyday language and basic arithmetic. Teach needed domain foundations in the opening sections, without a knowledge inventory. Learners can mark familiar sections complete in one click and reopen them; completion records their choice, not demonstrated mastery.

**New here? [The tlearn guide](docs/tlearn-guide.md)** walks through a real request, the stage handoffs, verification, revisions, and sharing. [Installation evidence](docs/installation.md) records tested host versions and scope.

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

Detailed guidance loads only when needed. See the [learning evidence](skills/learning/design-learning/references/learning-evidence.md), [computational biology patterns](skills/learning/design-learning/references/computational-biology.md), and [research decisions](docs/source-research.md).

## Where Knowledge Space Theory fits

The [knowledge-spaces project](https://github.com/vanderbilt-data-science/knowledge-spaces) inspires observable capability types and prerequisite relationships. [Knowledge Space Theory](https://arxiv.org/abs/1511.06757) also models feasible knowledge states and alternative prerequisite routes. Our graph selects a bounded instructional route, with inferred dependencies marked as hypotheses. It does not establish a learner's mastery state. Full adaptive assessment is deferred; class-wide planning is outside tlearn's scope.

Math Academy informs small prerequisite steps; the objective determines their depth and relevant branches. Biology's mechanisms and feedback relationships belong in cited notes or lesson visuals, rather than automatically becoming teaching-order dependencies. See [mapping rationale](skills/knowledge/map-knowledge/references/mapping-rationale.md).

## From objective to learning tool

1. **Frame:** turn the request into a bounded objective using the basic starting assumption.
2. **Research:** [research-topic](skills/research/research-topic/SKILL.md) saves an inspected source packet with citations, uncertainties, and selectively cached originals.
3. **Map and revisit:** [map-knowledge](skills/knowledge/map-knowledge/SKILL.md) saves capabilities and prerequisites, returning to research for missing foundations. Reach general basics or split an oversized objective explicitly.
4. **Author learning content:** [design-learning](skills/learning/design-learning/SKILL.md) writes and checks explanations, examples, quizzes, answers, feedback, and fresh applications against the saved graph.
5. **Design:** [design-interface](skills/design/design-interface/SKILL.md) plans a quiet learning surface with clear hierarchy, local feedback, purposeful visuals, accessible controls, and modest character.
6. **Build:** [build-learning-tool](skills/engineering/build-learning-tool/SKILL.md) implements the saved content and design, bundles portable HTML, and checks actual browser behavior.

The learner's project preserves separate content inputs and a delivered artifact:

| Artifact | Purpose |
| --- | --- |
| `sources.md` and `sources/` | Reusable evidence, inspected notes, links, and optional originals |
| [`knowledge.json`](skills/knowledge/map-knowledge/references/knowledge-format.md) | Source-backed capabilities, required/helpful dependencies, scope, and gaps |
| [`lesson.json`](skills/learning/design-learning/references/lesson-format.md) | Learning content and checked tasks linked to graph IDs and revision |
| `dist/index.html` | The portable interface presenting the lesson and, when useful, its graph |

Create the graph and content **before** the HTML app. Revise them independently and return gaps to their owning stage. A self-contained HTML file may embed derived copies for portable delivery; its canonical inputs remain separate.

Supporting `interface.md` records presentation and interaction decisions without rewriting lesson content. [Design rationale](skills/design/design-interface/references/design-rationale.md) connects marimo, Math Academy, and Brilliant inspirations to learning evidence and selected web guidelines. Fun comes from discovery, useful visual character, and responsive feedback; the interface stays predictable.

Author the implementation in a small `src/` directory, then bundle its HTML, CSS, JavaScript, and required data into **one HTML file**. Send it for direct browser use or serve the same file on a static host such as Vercel; share the hosted link on X. Optional social-preview images live alongside the hosted file. Core learning works offline, and saved completion is best-effort browser convenience. See [authoring and delivery](skills/engineering/build-learning-tool/references/authoring-and-delivery.md) and [sharing](skills/engineering/build-learning-tool/references/sharing-and-hosting.md).

[Verification](skills/workflow/verify-learning-tool/SKILL.md) spans these stages: preserve tool-specific checks in `verification.md`, inspect source support, independently solve answers, and exercise delivered behavior. Scripts handle mechanical consistency; reviewers assess scientific and instructional adequacy. Authoring checks cannot establish learner mastery or retention. See [deterministic operations](skills/workflow/principle-deterministic-operations/SKILL.md).

## Roadmap

- [x] **Research:** source-integrity and research-topic, with repeatable selection, provenance, reusable notes, and selective original caching.
- [x] **Knowledge mapping:** objective-and-foundations and map-knowledge, with recursive source discovery, bounded routes, and a versioned graph contract.
- [x] **Learning design:** six principle skills, `design-learning`, and a lesson format covering practice, feedback, scientific reasoning, and fresh applications.
- [x] **Verification foundation:** shared verification skill, repeatable artifact checks, browser recipes, and principles for evidence and deterministic work.
- [x] **Interface design:** attention-first and design-interface, with reusable defaults, a design handoff, accessibility/review guidance, and deterministic color-contrast checks.
- [x] **HTML engineering:** simple-html and build-learning-tool, with organized source, a reusable starter, deterministic single-file packaging, browser checks, and static-sharing guidance.
- [x] **upskill and packaging:** easy onboarding, artifact reuse, selective guidance loading, matching manifests, and verified host discovery/resource resolution.
- [x] **Usage guide:** first request, workflow, verification, revision, and sharing documentation.
- [x] **First complete tool:** a sourced genomics file-formats lesson, with all 13 formats, checked answers, portable HTML, and browser evidence.

Later: optional spaced-review tools for ongoing retention.

See the [repository structure](docs/repository-structure.md) for organization and artifact ownership.
