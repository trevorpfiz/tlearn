# Lesson format

Read when creating or revising `lesson.json`. This is the initial handoff contract for learning content; interface styling and HTML implementation belong to later stages.

Save this canonical artifact before building the app. It owns explanations, quizzes, answer keys, hints, feedback, and meaningful visual requirements. The HTML builder implements these and returns missing content to the owning stage. A portable HTML file may embed derived copies of the lesson and graph without replacing their source files.

## Required contents

Use UTF-8 JSON with these top-level fields:

| Field | Meaning |
| --- | --- |
| `version` | `1` for this initial contract |
| `knowledge_revision` | The positive integer `revision` of the ready `knowledge.json` used to author this lesson |
| `objective` | The bounded, observable outcome |
| `baseline` | General basics, or an explicit user-supplied alternative |
| `target_item_ids` | Target capabilities from the knowledge graph |
| `sections` | Ordered sections, including necessary foundations, practice, and fresh applications |
| `navigation` | `{ "completion": "manual", "reopen": true, "gating": "none" }` |
| `verification_notes` | What was checked, deliberate simplifications, and any unresolved gaps |

Each section has a unique `id`, `title`, `item_ids`, `required_section_ids`, and ordered `blocks`. Required section IDs express teaching order, not locked navigation. A preview of the goal may precede foundations if it does not demand untaught skills.

Use these block kinds:

- **`explanation`:** actual `text` and `source_refs` for the claims taught. Define new notation before using it.
- **`worked-example`:** a `prompt`, named `steps` with reasons, `source_refs`, and `origin` identifying an adapted or synthetic example.
- **`task`:** the complete task contract below.
- **`visual`:** a `purpose`, `representation` describing the required diagram, plot, or simulation, `source_refs`, and `task_id` linking a prediction, comparison, or explanation task. Specify meaningful behavior and any simplification; leave styling to interface design.

Source references use `{ "source_id": "s1", "locator": "Figure 2 legend" }` and resolve to `sources.md`. Do not invent source IDs or omit the relevant passage location. A synthetic arithmetic example may have an empty list, with its origin explicit; scientific statements within it still need support. Reuse concise inspected notes instead of embedding full source documents.

## Task contract

Each task has a unique `id`, `role` (`practice`, `mixed-review`, or `application`), `item_ids`, `prompt`, `response`, `check`, `hints`, `feedback`, `source_refs`, and `origin`. `origin` identifies an adapted source example or an invented teaching example, including whether its data are synthetic.

- **Response:** declare `kind` as `number`, `choice`, `short-text`, or `code`. Supply units for numbers and unique option IDs with text for choices. State allowed resources in the prompt or an optional `resources` field.
- **Check:** for `number`, supply `expected`, `absolute_tolerance`, and required units; choose precision deliberately. For `choice`, supply the correct option ID. For `rubric`, supply required criteria, acceptable alternatives, and a sample answer, with `judgment: "self-check"`. A rubric checks content and reasoning; it is not exact-string matching or verified automatic grading.
- **Help and feedback:** supply ordered optional hints. Include `correct` feedback explaining why, `otherwise` feedback giving a useful next action, and optional `patterns` describing specific likely errors with feedback. A pattern is an authoring instruction for the builder, not executable grader code. Optional `revisit_section_ids` point to ordinary instructional sections.
- **Retry:** use `retry_task_id` for an authored fresh instance, or provide a fresh task later in the path. A repeated answer after reveal supplies assisted practice, not new independent evidence. Do not create dangling retry links or procedural loops.

Application tasks test the target action without worked steps or solution cues. Keep help optional and record its use separately. Rubric comparisons remain self-checks; a learner's “looks right” action cannot become an automatically verified success badge.

Keep answer keys, sample responses, and explanatory feedback separate from prompts. The builder initially hides them and reveals them after an attempt or an explicit request. Worked examples are intentionally visible support. Resource conditions determine what counts as independent; documentation can be legitimate when using it is part of the goal.

## Example section

This valid JSON is a section fragment, not a complete lesson. Assume `k-fraction` exists in the input graph. A full lesson adds the other required fields, target capabilities, mixed practice where useful, and fresh application tasks. The numbers and wording are invented for teaching; they make no empirical claim.

```json
{
  "id": "sec-fractions",
  "title": "Read a fraction of a total",
  "item_ids": ["k-fraction"],
  "required_section_ids": [],
  "blocks": [
    {
      "kind": "worked-example",
      "prompt": "An invented table contains 3 blue tokens out of 12 total. What fraction are blue?",
      "steps": [
        { "name": "Choose the whole", "text": "Use all 12 tokens as the denominator." },
        { "name": "Compute the share", "text": "Divide 3 by 12: the blue share is 0.25, or 25%." }
      ],
      "source_refs": [],
      "origin": "Invented arithmetic example; synthetic counts."
    },
    {
      "kind": "task",
      "id": "t-fraction-practice",
      "role": "practice",
      "item_ids": ["k-fraction"],
      "prompt": "A new invented table has 5 blue tokens out of 25 total. Enter the blue share as a decimal from 0 to 1.",
      "response": { "kind": "number", "units": "dimensionless" },
      "check": { "kind": "number", "expected": 0.2, "absolute_tolerance": 0.000001, "units": "dimensionless" },
      "hints": ["Which count is the whole?", "Divide the blue count by the total count."],
      "feedback": {
        "correct": "5/25 = 0.2: blue tokens make up one fifth of the total.",
        "otherwise": "Use the blue count divided by all tokens, then express the result from 0 to 1.",
        "patterns": [
          { "when": "The learner enters 20", "text": "20 is the percentage. The requested decimal share is 0.2." }
        ]
      },
      "revisit_section_ids": ["sec-fractions"],
      "source_refs": [],
      "origin": "Invented practice instance; synthetic counts."
    }
  ]
}
```

## Handoff checks

Confirm JSON parses; the graph is `ready` and its `revision` matches `knowledge_revision`; IDs are unique; graph, source, section, visual-task, and retry references resolve; required sections precede uses; each target has instruction, practice, and a fresh application. Solve all tasks and inspect rubrics against both acceptable and flawed responses. Ensure visual prompts do not reveal their own answers. Keep completion and performance separate in the eventual interface. Record remaining gaps instead of claiming a completed lesson when dependent content is missing.

When the graph revision changes, inspect affected item meanings, dependencies, and source references before updating `knowledge_revision`. Recheck affected content and section order, then regenerate the HTML. A visual restyle alone need not change either canonical artifact.
