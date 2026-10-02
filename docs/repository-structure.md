# tlearn repository structure

> Skills and principles for efficient AI-assisted learning.

This outline implements the vision in the [README](../README.md): a topic, question, or paper becomes a focused HTML learning tool through sourced research, prerequisite mapping, learning design, interface design, and construction.

Status: nineteen skills and their resources are authored under six groups, October 2, 2026. upskill, both host packages, maintainer guidance, license, and the usage guide are present. Host discovery, invocation routing, and installed resource resolution were checked; [installation evidence](installation.md) records versions and model-execution limits. The [complete genomics example](../examples/genomics-file-formats/README.md) follows the core path, with independent answer review and offline/HTTP browser evidence.

## Organization and compatibility

Keep one canonical skill library, grouped by function. Each leaf skill retains the standard `<skill-name>/SKILL.md` layout. Principles are small skills placed beside the workflow they inform.

Each functional group is registered explicitly in both plugin manifests. Codex's compatibility manifest accepts a skill directory or an array of directories; Claude Code accepts an array of skill directories containing skill folders. Both installed hosts discovered the grouped library. [Codex manifest fields](https://developers.openai.com/plugins/deploy/submission), [Claude manifest reference](https://code.claude.com/docs/en/plugins-reference).

Use `.codex-plugin/plugin.json` and `.claude-plugin/plugin.json` for this layout. OpenAI continues to support the Codex compatibility manifest. Its newer portable package and public submission guidance use immediate children of `skills/`; publishing through that route would require a flat package. We are designing the Codex/Claude plugin layout here. [OpenAI packaging](https://developers.openai.com/plugins/build/plugins), [submission layout rules](https://developers.openai.com/plugins/deploy/submission-errors).

The shared `skills` field in the two manifests lists:

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

Packaging checks confirm unique discovery, upskill invocation routing, and helper/resource resolution in both hosts. Model-backed generation was unavailable in the isolated probes; see the exact scope in [installation evidence](installation.md). Recheck these boundaries when changing manifests, library layout, or host-specific entry points.

## Layout

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
│   ├── plugin.json
│   └── marketplace.json
├── .agents/
│   └── plugins/
│       └── marketplace.json
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
│   │   │   ├── SKILL.md
│   │   │   ├── scripts/
│   │   │   │   └── check_contrast.py
│   │   │   └── references/
│   │   │       ├── interface-format.md
│   │   │       ├── interface-defaults.md
│   │   │       ├── interface-review.md
│   │   │       └── design-rationale.md
│   │   └── principle-attention-first/
│   └── engineering/
│       ├── build-learning-tool/
│       │   ├── SKILL.md
│       │   ├── scripts/
│       │   │   └── bundle_html.py
│       │   ├── references/
│       │   │   ├── authoring-and-delivery.md
│       │   │   ├── browser-checks.md
│       │   │   └── sharing-and-hosting.md
│       │   └── assets/
│       │       └── starter/
│       │           ├── index.html
│       │           ├── styles.css
│       │           └── app.js
│       └── principle-simple-html/
└── docs/
    ├── tlearn-guide.md
    ├── installation.md
    ├── repository-structure.md
    ├── learning-philosophy-research.md
    ├── paper-to-learning-research.md
    └── source-research.md
```

Every principle directory contains its own `SKILL.md`; repeated filenames are omitted above. References and the starter are concrete resources to author with their owning skills. Add scripts only when a repeated operation actually needs one.

The README owns the vision and quick start; the tlearn guide walks through actual usage. AGENTS.md holds concise maintainer guidance; CLAUDE.md imports it. Original tlearn material uses the MIT license. Existing research notes retain supporting evidence without duplicating the philosophy. The user-requested demonstration lives under `examples/genomics-file-formats/`, outside the skill library, with its canonical artifacts, source implementation, delivery, and verification.

## Six core workflow skills

| Group / skill | Responsibility | Deliverable |
| --- | --- | --- |
| workflow / **upskill** | Scope the request, assume general basics, coordinate the core path, manage research bounds, and reuse artifacts. Load guidance when its stage needs it. | The requested learning tool and its supporting artifacts |
| research / **research-topic** | Find authoritative materials; inspect relevant sections; extract definitions, mechanisms, examples, uncertainties, and source anchors. For papers, capture the question, method, evidence, and limitations. | A compact source record |
| knowledge / **map-knowledge** | Define observable target capabilities and a selected route; distinguish required prerequisites from helpful background. Research missing foundations recursively and preserve scope and gaps. | Canonical `knowledge.json` |
| learning / **design-learning** | Sequence foundations and target capabilities. Write explanations, worked examples, practice, checked answers, hints, feedback, mixed review, and application tasks. | Canonical `lesson.json`, bound to a graph revision |
| design / **design-interface** | Shape the authored lesson into a focused, accessible interface with clear hierarchy, purposeful visuals, local feedback, and section completion in one click. | Supporting `interface.md` for construction |
| engineering / **build-learning-tool** | Adapt the starter, implement the lesson and interactions, bundle one portable file, and verify content, answer handling, accessibility, and browser behavior. | Derived `dist/index.html` |

Practice creation belongs in design-learning initially. Paper reading belongs in research-topic, with its conditional reference. Interface design remains separate from construction because it governs the learner's experience.

[Design-interface](../skills/design/design-interface/SKILL.md) and [attention-first](../skills/design/principle-attention-first/SKILL.md) are authored. Their references separate adjustable visual defaults, the content-preserving handoff, rendered review, and research rationale. Vercel-style web guidelines inform semantic controls, focus, input feedback, motion, and responsive behavior; engineering will implement and exercise these. Stack-specific defaults are not imported into portable HTML.

[Build-learning-tool](../skills/engineering/build-learning-tool/SKILL.md) and [simple-html](../skills/engineering/principle-simple-html/SKILL.md) are authored. A small HTML/CSS/JavaScript starter and deterministic standard-library packager support one-file delivery. The starter supplies focused helpers rather than a universal lesson engine. The browser and sharing references cover direct-file use, static hosting, and optional public previews.

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
| `dist/index.html` | build-learning-tool | Derived portable interface, lesson presentation, optional graph view, and completion controls that allow reopening |

The [source format](../skills/research/research-topic/references/source-format.md), [knowledge format](../skills/knowledge/map-knowledge/references/knowledge-format.md), and [lesson format](../skills/learning/design-learning/references/lesson-format.md) define their stage contracts. Save a ready graph before completing its dependent lesson; author and verify content before interface construction. Later stages return missing or changed content to its owner. Graph revision changes require review of the affected lesson before regenerating HTML.

Supporting `verification.md` records the checked artifact identities, independent expectations, reusable commands or reviewer steps, observed results, and pending checks. It supplies evidence for the four core artifacts without duplicating their content. A pass from the artifact checker means mechanical consistency only; it does not certify source support, answers, or learning effectiveness.

Supporting `interface.md` binds the design to its graph revision and lesson identity, then specifies tokens, layout, block presentation, task states, visual equivalents, navigation, and concrete acceptance checks. The [interface format](../skills/design/design-interface/references/interface-format.md) avoids duplicating the lesson or adding another content schema. Design changes with instructional consequences return to design-learning; visual implementation and browser proof belong to engineering.

Supporting source files live under `sources/<source-id>/` in the generated project: inspected notes, optional originals, and optional extraction with original locators. Use notes as working context and inspect original passages for new details, uncertainty, or freshness checks. Preserve source identity and inspected versions; substantive updates get a new linked ID. See [research decisions](source-research.md) for grounding and limits. The graph supplies the instructional structure without claiming a validated Knowledge Space Theory assessment model.

Author implementation in `src/index.html`, `src/styles.css`, and `src/app.js`; bundle those and derived graph/lesson copies into `dist/index.html`. Keep source materials outside the served `dist/` directory. The same output supports direct-file use and static hosting without runtime fetches or a local server for the learner. Required media must be embedded explicitly; an optional hosted social-preview image is separate from learner assets. A companion notebook, larger static bundle, or web app is conditional on a concrete learning requirement. See [delivery decisions](../skills/engineering/build-learning-tool/references/authoring-and-delivery.md).

## Skill format and implementation order

Use portable frontmatter with `name` matching the leaf directory and a concise `description`. Workflow skills contain their purpose, needed inputs, decisions, output contract, verification, and conditional references. Principle skills contain the rule, rationale, concrete actions, an observable check, and sources.

Keep bodies short. Read source excerpts, format references, and related principles only when they affect the current stage. Reuse the four artifacts instead of repeating research or handing off long transcripts.

The core path is connected:

1. Learning principles and design-learning preserve instruction and checked tasks separately from the implementation.
2. Source-integrity/research-topic and objective-and-foundations/map-knowledge preserve inspected evidence and recursive foundation requests. Shared verification distinguishes mechanical consistency from scientific and teaching judgments.
3. Attention-first/design-interface and simple-html/build-learning-tool provide handoffs, a starter, deterministic packaging, and actual browser recipes.
4. [Upskill](../skills/workflow/upskill/SKILL.md) coordinates the stages. Both manifests/catalogs and host discovery checks are present; [the guide](tlearn-guide.md) covers first requests, reuse, verification, and sharing.
5. The complete genomics example exercises all stages. Content and browser review corrected a repeated application, ambiguous coordinate wording, a skip-link navigation defect, and companion source links.

This first scope includes the core workflow, principles, starter, guides, and one explicit demonstration. Evals, CI, an examples gallery, a setup skill, and additional playbooks remain deferred.
