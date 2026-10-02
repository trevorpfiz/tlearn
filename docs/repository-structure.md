# tlearn repository structure

> Skills and principles for efficient AI-assisted learning.

This outline implements the vision in the [README](../README.md): a topic, question, or paper becomes a focused HTML learning tool through sourced research, prerequisite mapping, learning design, interface design, and construction.

Status: research, knowledge, learning, and cross-cutting workflow guidance authored, October 2, 2026. Fourteen skills and their resources exist under these four groups. upskill, design/engineering groups, manifests, and support files below remain planned; host discovery has not been tested.

## Organization and compatibility

Keep one canonical skill library, grouped by function. Each leaf skill retains the standard `<skill-name>/SKILL.md` layout. Principles are small skills placed beside the workflow they inform.

Register each functional group explicitly in both plugin manifests. Codex's compatibility manifest accepts a skill directory or an array of directories; Claude Code accepts an array of skill directories containing skill folders. This provides a documented route for grouped authoring on our two initial hosts. [Codex manifest fields](https://developers.openai.com/plugins/deploy/submission), [Claude manifest reference](https://code.claude.com/docs/en/plugins-reference).

Use `.codex-plugin/plugin.json` and `.claude-plugin/plugin.json` for this layout. OpenAI continues to support the Codex compatibility manifest. Its newer portable package and public submission guidance use immediate children of `skills/`; publishing through that route would require a flat package. We are designing the Codex/Claude plugin layout here. [OpenAI packaging](https://developers.openai.com/plugins/build/plugins), [submission layout rules](https://developers.openai.com/plugins/deploy/submission-errors).

The shared `skills` field in the two manifests will list:

```json
{
  "skills": [
    "./skills/workflow/",
    "./skills/research/",
    "./skills/knowledge/",
    "./skills/learning/",
    "./skills/design/",
    "./skills/engineering/"
  ]
}
```

This is a component-field example, not a complete manifest. Group folders contain no `SKILL.md`; only individual skill folders do. Skill names stay unique across groups. The initial installation unit is the complete plugin, preserving its internal dependencies and assets.

Before calling the package compatible, load it in both hosts and confirm all declared skills are discovered once, upskill can use its helpers and principles, and references and assets resolve. Documented manifest support is not a completed installation test.

## Proposed layout

```text
tlearn/
├── README.md
├── AGENTS.md
├── CLAUDE.md
├── LICENSE
├── .gitignore
├── .codex-plugin/
│   └── plugin.json
├── .claude-plugin/
│   └── plugin.json
├── skills/
│   ├── workflow/
│   │   ├── upskill/
│   │   │   └── SKILL.md
│   │   ├── verify-learning-tool/
│   │   │   ├── SKILL.md
│   │   │   ├── scripts/
│   │   │   │   └── verify_artifacts.py
│   │   │   └── references/
│   │   │       ├── verification-record.md
│   │   │       └── verification-rationale.md
│   │   ├── principle-verifiable-outcomes/
│   │   └── principle-deterministic-operations/
│   ├── research/
│   │   ├── research-topic/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       ├── source-quality.md
│   │   │       ├── source-format.md
│   │   │       └── reading-papers.md
│   │   └── principle-source-integrity/
│   ├── knowledge/
│   │   ├── map-knowledge/
│   │   │   ├── SKILL.md
│   │   │   ├── scripts/
│   │   │   │   └── validate_graph.py
│   │   │   └── references/
│   │   │       ├── knowledge-format.md
│   │   │       └── mapping-rationale.md
│   │   └── principle-objective-and-foundations/
│   ├── learning/
│   │   ├── design-learning/
│   │   │   ├── SKILL.md
│   │   │   └── references/
│   │   │       ├── lesson-format.md
│   │   │       ├── learning-evidence.md
│   │   │       └── computational-biology.md
│   │   ├── principle-active-practice/
│   │   ├── principle-scaffold-and-fade/
│   │   ├── principle-fluency-and-layering/
│   │   ├── principle-retrieve-and-mix/
│   │   ├── principle-scientific-reasoning/
│   │   └── principle-independent-performance/
│   ├── design/
│   │   ├── design-interface/
│   │   │   └── SKILL.md
│   │   └── principle-attention-first/
│   └── engineering/
│       ├── build-learning-tool/
│       │   ├── SKILL.md
│       │   └── assets/
│       │       └── starter.html
│       └── principle-simple-html/
└── docs/
    ├── repository-structure.md
    ├── learning-philosophy-research.md
    ├── paper-to-learning-research.md
    └── source-research.md
```

Every principle directory contains its own `SKILL.md`; repeated filenames are omitted above. References and the starter are concrete resources to author with their owning skills. Add scripts only when a repeated operation actually needs one.

The README owns the vision and eventual installation instructions. AGENTS.md holds concise maintainer guidance; CLAUDE.md imports it. Choose the repository license before distribution. Existing research notes retain the supporting evidence without duplicating the philosophy into another document.

## Six core workflow skills

| Group / skill | Responsibility | Deliverable |
| --- | --- | --- |
| workflow / **upskill** | Scope the request, assume general basics, coordinate the core path, manage research bounds, and reuse artifacts. Load guidance when its stage needs it. | The requested learning tool and its supporting artifacts |
| research / **research-topic** | Find authoritative materials; inspect relevant sections; extract definitions, mechanisms, examples, uncertainties, and source anchors. For papers, capture the question, method, evidence, and limitations. | A compact source record |
| knowledge / **map-knowledge** | Define observable target capabilities and a selected route; distinguish required prerequisites from helpful background. Research missing foundations recursively and preserve scope and gaps. | Canonical `knowledge.json` |
| learning / **design-learning** | Sequence foundations and target capabilities. Write explanations, worked examples, practice, checked answers, hints, feedback, mixed review, and application tasks. | Canonical `lesson.json`, bound to a graph revision |
| design / **design-interface** | Shape the authored lesson into a focused, accessible interface with clear hierarchy, purposeful visuals, and section completion in one click. | Interface decisions for construction |
| engineering / **build-learning-tool** | Adapt the starter, implement the lesson and interactions, and verify content, answer handling, accessibility, and browser behavior. | A lightweight HTML tool |

Practice creation belongs in design-learning initially. Paper reading belongs in research-topic, with its conditional reference. Interface design remains separate from construction because it governs the learner's experience.

The core chain is:

```text
upskill
  → research-topic ⇄ map-knowledge
  → design-learning
  → design-interface
  → build-learning-tool
```

The research/mapping loop fills required gaps, reuses existing sources, and stops at the general-basic assumption. Each research request identifies a missing capability or question, its required depth, why it serves the objective, and existing sources. If the resulting objective is too large, split it into linked tools with clear boundaries. An unmet required foundation remains a gap until covered; source quality and dependency uncertainty stay explicit.

Verification belongs in every stage. [verify-learning-tool](../skills/workflow/verify-learning-tool/SKILL.md) defines and executes appropriate checks and preserves their tool-specific recipes and observations. Its read-only helper reuses graph validation and checks cross-artifact consistency and lesson declarations. Source fidelity, prerequisite judgments, task adequacy, and independent solutions still need review; actual browser behavior needs a delivered app. A separate evaluation suite is unnecessary for the first path.

This cross-cutting skill sits under workflow beside the future upskill, preserving grouped discovery. A compact project-local `verification.md` provides the topic-specific details; a new generated Agent Skill per one-off tool would usually duplicate the shared procedure. Create one only when unusual computation or interactions justify reusable project-specific instructions. See [pstack adaptation](../skills/workflow/verify-learning-tool/references/verification-rationale.md).

## Core and cross-cutting principles

| Group / principle | Rule that changes agent behavior |
| --- | --- |
| workflow / **verifiable-outcomes** | Define acceptable evidence and verify the actual artifact or response; distinguish structural, scientific, instructional, interface, and learner claims. |
| workflow / **deterministic-operations** | Reuse scripts for mechanical rules with explicit inputs and outputs; keep source and pedagogical judgments visible. |
| research / **source-integrity** | Ground content in inspected sources, preserve passage locations, and distinguish evidence from inference or uncertainty. |
| knowledge / **objective-and-foundations** | Tie every item to the objective. Assume general basics, teach necessary foundations, and avoid learner knowledge inventories. |
| learning / **active-practice** | Center learner attempts. Brief instruction enables retrieval, explanation, prediction, or execution; visuals require a meaningful task. |
| learning / **scaffold-and-fade** | Start with small supported steps, reduce assistance, and repair the component skill behind errors through fresh attempts. |
| learning / **fluency-and-layering** | Establish meaning, practice recurring components, and deliberately exercise them in more advanced tasks. |
| learning / **retrieve-and-mix** | Retrieve before revealing. Use similar initial examples, then varied and mixed tasks that require selecting a method. |
| learning / **scientific-reasoning** | Connect mechanisms, measurements, models, and computation. Practice assumptions, uncertainty, limitations, and justified conclusions. |
| learning / **independent-performance** | Check fresh applications. Distinguish section completion, assisted success, independent performance, and later retention. |
| design / **attention-first** | Reduce interface effort while preserving useful challenge. Use clear hierarchy, accessible controls, purposeful visuals, and satisfying progress. |
| engineering / **simple-html** | Reuse the starter, prefer semantic HTML and modest JavaScript, keep dependencies justified, and verify meaningful behavior. |

Directory names use the `principle-` prefix shown in the tree. These principles translate the agreed philosophy into operational decisions. Their evidence and adaptations are documented in the [learning philosophy research](learning-philosophy-research.md).

The six learning principles and [design-learning](../skills/learning/design-learning/SKILL.md) are authored. Their shared [evidence reference](../skills/learning/design-learning/references/learning-evidence.md) distinguishes practitioner accounts, research findings, competency frameworks, and tlearn's adaptations. Each principle remains operational without loading that reference.

[Source-integrity](../skills/research/principle-source-integrity/SKILL.md) and [research-topic](../skills/research/research-topic/SKILL.md) are also authored. Source selection uses role-specific screening and separate judgments for fit, authority, support, currency, and clarity, with recorded reasons rather than a total score.

[Objective-and-foundations](../skills/knowledge/principle-objective-and-foundations/SKILL.md) and [map-knowledge](../skills/knowledge/map-knowledge/SKILL.md) are authored. The [mapping rationale](../skills/knowledge/map-knowledge/references/mapping-rationale.md) distinguishes Math Academy's prerequisite steps, KST capability types, conceptual relationships, and domain-specific competency guidance. The graph records an instructional route; it does not infer learner mastery.

Learners can mark familiar foundational sections complete and reopen them. Completion supports navigation and does not trigger a claim of mastery. Ordinary exercises check understanding; no preliminary adaptive assessment or separate refresher feature is required.

## Minimal artifact contract

Generated tools live in the learner's working project, outside the installed plugin. The core path preserves four artifacts:

| Artifact | Owner | Contents |
| --- | --- | --- |
| `sources.md` | research-topic | Objective, baseline, source registry, coverage, search record, links to notes, and unresolved questions |
| `knowledge.json` | map-knowledge | Revision, observable capabilities, sourced required/helpful dependencies, inferred rationale, targets, scope, and research gaps |
| `lesson.json` | design-learning | Graph revision and item IDs, ordered sections, explanations, examples, exercises, checked answers, hints, feedback, and application tasks |
| `index.html` | build-learning-tool | Designed interface, lesson presentation, optional graph view, and completion controls that allow reopening |

The [source format](../skills/research/research-topic/references/source-format.md), [knowledge format](../skills/knowledge/map-knowledge/references/knowledge-format.md), and [lesson format](../skills/learning/design-learning/references/lesson-format.md) define their stage contracts. Save a ready graph before completing its dependent lesson; author and verify content before interface construction. Later stages return missing or changed content to its owner. Graph revision changes require review of the affected lesson before regenerating HTML.

Supporting `verification.md` records the checked artifact identities, independent expectations, reusable commands or reviewer steps, observed results, and pending checks. It supplies evidence for the four canonical artifacts without duplicating their content. A pass from the artifact checker means mechanical consistency only; it does not certify source support, answers, or learning effectiveness.

Supporting source files live under `sources/<source-id>/` in the generated project: inspected notes, optional originals, and optional extraction with original locators. Use notes as working context and inspect original passages for new details, uncertainty, or freshness checks. Preserve source identity and inspected versions; substantive updates get a new linked ID. See [research decisions](source-research.md) for grounding and limits. The graph supplies the instructional structure without claiming a validated Knowledge Space Theory assessment model.

Start with a self-contained HTML output that may embed derived graph and lesson copies. Separate canonical files preserve independent authoring and revision without requiring runtime fetches or a local server. Source originals need not travel inside the app. A companion notebook or script can support an objective that needs substantial computation; it is conditional on the learning task.

## Skill format and implementation order

Use portable frontmatter with `name` matching the leaf directory and a concise `description`. Workflow skills contain their purpose, needed inputs, decisions, output contract, verification, and conditional references. Principle skills contain the rule, rationale, concrete actions, an observable check, and sources.

Keep bodies short. Read source excerpts, format references, and related principles only when they affect the current stage. Reuse the four artifacts instead of repeating research or handing off long transcripts.

Continue in this order:

1. Learning principles and design-learning are authored, with the initial lesson format. Refine them through the first complete tool.
2. Source-integrity/research-topic and objective-and-foundations/map-knowledge are authored, with source and graph contracts. Refine the recursive mapping loop using one narrow computational biology objective.
   Shared verification and deterministic-operation principles are authored, with a reusable graph/lesson checker. Add actual delivery checks when the builder exists.
3. Attention-first and design-interface; simple-html, the starter, and build-learning-tool.
4. Connect the working stages through a concise upskill; add both manifests and verify discovery and invocation.
5. Produce one complete learning tool and improve the core path from using it.

This first scope includes the core workflow, principles, starter, and existing notes. Evals, CI, an examples gallery, a setup skill, and additional playbooks are deferred.
