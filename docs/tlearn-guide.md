# The tlearn guide

tlearn turns a learning goal into a small, sourced tool you can open in a browser. You describe what you want to understand; `upskill` coordinates the research, prerequisite map, learning content, interface, and verification.

This is a library of Agent Skills for Codex and Claude Code. It is not a separate learning service. Creating tools needs an agent with browsing, file, and browser-testing capabilities; using a generated tool needs only a browser.

## Start with something you want to do

Install the complete plugin using the [README instructions](../README.md#getting-started). Keep the full library together: workflows use neighboring principles, references, and scripts. In Codex, select `tlearn:upskill` in the skill picker; in Claude Code, invoke `/tlearn:upskill`. [Installation details](installation.md) cover the tested commands, requirements, and session-only trial.

Ask for the outcome in ordinary language. You do not need to describe your knowledge or supply a complete prerequisite tree.

```text
Use upskill to help me recognize genomics file formats and assess whether
their contents are valid. Include FASTA, FASTQ, BED, BEDPE, WIG, GTF,
GFF3, SAM, BAM, CRAM, gVCF, VCF, and GFA. Save the tool in a new folder.
```

Other useful starts:

```text
Use upskill to teach me how to interpret a volcano plot and explain
what it cannot tell me about differential expression.

Use upskill with this paper and its supplement. I want to explain
the method's main assumptions and interpret Figure 3.
```

A topic is enough; an observable action helps the agent choose depth. “Recognize and check a file” calls for different instruction from “implement a parser.” Include constraints that matter: source materials, time available, desired depth, output folder, or whether a computational companion is acceptable. Explicitly named topics remain part of the outcome.

The starting assumption is everyday language and basic arithmetic. Needed domain foundations appear in ordinary opening sections. If you know one already, mark it complete and continue; you can reopen it. There is no preliminary knowledge inventory or locked progression.

## What happens during upskill

| Stage | What the agent decides | Saved result |
| --- | --- | --- |
| Frame | What you should be able to explain, recognize, predict, or do; the relevant depth | Objective carried through the artifacts |
| Research | Which inspected sources support the subject, examples, and qualifications | `sources.md` and concise source notes |
| Map | Which observable capabilities and prerequisites the chosen route needs | `knowledge.json` |
| Author | How instruction, practice, feedback, and fresh applications develop those capabilities | `lesson.json` |
| Design | How to present the material with clear hierarchy, useful visuals, and accessible interactions | `interface.md` |
| Build and verify | How the actual delivered file implements the lesson and works in a browser | `src/`, `dist/index.html`, and `verification.md` |

Research and mapping form a loop. If a prerequisite exposes a missing definition or procedure, the agent researches that specific gap and updates the packet before proceeding. It stops branches at the stated basics, rather than silently assuming domain knowledge.

The graph records a selected teaching route. Required and helpful dependencies are different; inferred prerequisites are identified as judgments. It is not a measurement of your mastery or a validated adaptive-assessment model.

Content is authored before interface construction. Explanations, examples, tasks, answers, feedback, and scientific assumptions belong to the lesson. The builder presents them; a design or code change that alters their meaning returns to the content stage.

## What a lesson should feel like

Expect brief explanations and worked examples, then meaningful attempts with gradually reduced support. A useful diagram helps you reason; a quiz asks you to retrieve, predict, interpret, or apply something. Feedback explains the relevant next step while keeping your response in view.

Related skills recur in later work. Fresh applications test the goal with new data or cases, rather than asking you to repeat an answer just revealed. Complex scientific objectives include assumptions, uncertainty, and the evidence needed for a justified conclusion.

The interface stays quiet and predictable. It uses readable type, modest color, useful visual character, learner-controlled pacing, and local feedback. Sources and the learning map can be explored when useful. The subject supplies the challenge.

Completion is your navigation choice. Correctness checks, rubric self-checks, and assisted attempts use honest labels. A green authoring check does not establish that you learned the material; durable retention still benefits from later practice.

## Find, use, and share the result

The delivered file is `<project>/dist/index.html`. Open it directly in a browser. Core learning includes its required content, styles, scripts, and data, so it should work without internet access. Citation links can still take you to online sources.

```text
my-learning-tool/
├── sources.md
├── sources/
├── knowledge.json
├── lesson.json
├── interface.md
├── verification.md
├── src/
│   ├── index.html
│   ├── styles.css
│   └── app.js
└── dist/
    └── index.html
```

Send the HTML file to someone, or host the same output on a static host. For Vercel, serve `dist/`; the research packet and editable sources do not need to be published. Once a public URL exists, share that link on X, optionally with an image. A social preview is separate from the learning tool's runtime. See [sharing and hosting](../skills/engineering/build-learning-tool/references/sharing-and-hosting.md) for current settings and preview checks.

Saved completion is optional browser convenience. It may not persist for local files and does not travel between browsers, devices, or the hosted URL. The lesson remains usable in memory if storage fails. Desktop browser checks do not establish how a phone's attachment viewer opens HTML; a hosted link can offer a convenient alternative.

## Review what was verified

Read `verification.md` when you want to know what the agent actually checked. It should identify the artifact versions and distinguish passed, failed, and pending checks.

- **Source and content checks:** claims match inspected passages, qualifications remain present, prerequisites serve the goal, and tasks exercise the intended actions.
- **Answer checks:** a separate solution or trusted calculation establishes the answer; agreeing with the same copied key is insufficient.
- **Mechanical checks:** JSON structure, graph relationships, source-note presence, IDs, revision binding, and declared coverage.
- **Browser checks:** actual responses, invalid input, hints/reveals, completion/reopening, navigation, meaningful visuals, keyboard use, narrow layouts, and promised delivery modes.

Verification is proportionate to the actual tool. A structural pass does not prove scientific correctness, and a screenshot does not prove grading. Missing browser access should be reported as pending, rather than replaced with a claim that the app works.

## Reuse or revise a tool

Keep the whole authoring directory if you may want a revision. Sending only the HTML is sufficient for a learner; the canonical artifacts help agents avoid repeating work.

```text
Use upskill to continue this tool. Keep the objective and checked sources,
but add practice interpreting the coordinate convention in the examples.

Review this lesson's answers and browser behavior using verify-learning-tool.
Record any remaining gaps in verification.md.
```

The agent inspects existing artifacts and reuses what still fits. A new source or graph revision prompts review of affected content; a visual restyle need not repeat the research. Fix source files and rebuild the HTML rather than maintaining divergent copies.

For manual packaging, from the learner's project:

```sh
python3 /path/to/tlearn/skills/engineering/build-learning-tool/scripts/bundle_html.py .
```

The packager embeds the known source files and JSON safely and reproducibly. It does not author content, resolve dependencies, inline arbitrary media, or verify answers.

## Reach for a stage skill when useful

`upskill` is the normal entry point. The other workflow skills are useful when you want a particular stage reviewed or revised:

| Skill | Use it for |
| --- | --- |
| [research-topic](../skills/research/research-topic/SKILL.md) | A reusable inspected source packet or a specific evidence gap |
| [map-knowledge](../skills/knowledge/map-knowledge/SKILL.md) | Prerequisite depth, route selection, or graph revision |
| [design-learning](../skills/learning/design-learning/SKILL.md) | Explanations, practice, checked answers, and applications |
| [design-interface](../skills/design/design-interface/SKILL.md) | Layout, task states, visual direction, and accessible representations |
| [build-learning-tool](../skills/engineering/build-learning-tool/SKILL.md) | HTML implementation, packaging, and delivery checks |
| [verify-learning-tool](../skills/workflow/verify-learning-tool/SKILL.md) | Evidence-based review across the stages |

Principles and detailed references load when the active stage needs them. You do not need to invoke each principle or ask several agents to reread every source.

## The complete example

The [genomics file-formats example](../examples/genomics-file-formats/README.md) follows this path for all the requested formats, preserving its sources, graph, lesson, design, implementation, and verification. Its learning objective includes identifying each format and assessing what validity evidence supports—or does not support—a conclusion.

Save its [portable HTML](../examples/genomics-file-formats/dist/index.html) and open it in a browser. Its [verification record](../examples/genomics-file-formats/verification.md) distinguishes independent answer review from the actual offline and HTTP interaction checks.

## Adapt the library

The [repository structure](repository-structure.md) describes the stage contracts and ownership. Improve a principle or skill when real use exposes a missing decision, then recheck affected resources. Keep reusable mechanics in scripts and source-specific detail in notes. A new objective should mainly require new learning content, not a new orchestration system.

The current path intentionally stays small. Ongoing spaced review can be added for objectives that need it; a larger static bundle or computational companion is justified when the subject actually requires more computation or data.

The guide's goal-and-evidence approach is inspired by [the pstack guide](https://github.com/backnotprop/pstack/blob/main/docs/guide/README.md); tlearn's stages and learning artifacts follow its own principles.
