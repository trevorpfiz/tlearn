# Interface: genomics file formats

A quiet reading document with local practice. Character comes from useful
coordinate/CIGAR representations, restrained green controls, and lime highlights.

## Binding and boundary

Preserve the objective, all profiles/version distinctions, canonical block order,
scientific qualifications, and permitted resources. Design changes presentation;
content, answer, tolerance, or reasoning changes return to learning authoring.

- `knowledge.json`: ready, revision **1**; SHA-256
  `fb2e1b20e3babcd621872974fabee6ae967bdaf262f4df39db2825e4b0d4364c`.
- `lesson.json`: graph revision **1**; SHA-256
  `b841bf5ac6738464ed854b9800b6a79e70fd61df2b83da1ccf6469612bca63b9`.
- Structure: **16 sections, 44 tasks, 2 visuals**. Review affected decisions
  and renew the binding after lesson changes.

## Tokens and layout

| Role | Choice |
| --- | --- |
| Canvas / paper | `#f7f8f5` / `#ffffff` |
| Main / secondary text | `#202822` / `#58635b` |
| Action / action text | `#21664e` / `#ffffff` |
| Useful highlight | `#dff39a` with `#202822` text |
| Error / essential border | `#8c2e25` / `#708078` on white |
| Type / rhythm | System sans-serif; about 1.0625rem/1.6, 70ch; monospace snippets; 4/8/12/16/24/32/48 px spacing |
| Controls | Native controls; visible green focus outline; roughly 44 px primary targets |

Executed opaque-pair contrast checks: main/white **15.13**, secondary/canvas
**5.88**, white/action **6.83**, main/highlight **12.55**, error/white **8.29**,
border/white **4.16**. Text passes 4.5:1; border passes 3:1. Rendered states and
figures still require review.

Use the same reading order at wide and narrow widths:

```text
Genomics file formats                      Sources | Learning map
Section [canonical title ▾]                Previous | Next
Current heading + Mark complete/Reopen section
Explanation → worked example → visual/task, in canonical order
Task context + snippet → response → actions → local feedback
Previous | Next
```

The labeled section selector lists all 16 exact titles in canonical order,
unlocked. Stack controls on narrow screens; avoid a dashboard/sidebar. Show
“N of 16 sections marked complete,” without a mastery percentage. Use semantic
headings and a skip link. Prose/controls reflow; snippets retain exact tabs and
line breaks in `pre/code`, with keyboard-reachable contained scrolling as needed.
Never truncate a prompt, profile, scientific row, or qualification.

## Blocks and task states

Explanations remain prose; worked examples show their authored prompt, context,
snippet, and steps visibly. Avoid a decorative card around every paragraph.
Keep each task's prompt, profile, permitted resources, labeled evidence, response,
and local feedback together.

- **Choice (32):** unselected native radios in a labeled fieldset; exact option
  text; **Check answer**.
- **Numeric (7):** labeled entry with canonical units, exact authored check,
  and no answer-bearing placeholder; **Check answer**.
- **Short text (5):** textarea; **Compare with rubric** after a nonblank attempt.
  Show exact criteria, alternatives, and sample answer as explicit **self-check**,
  never automatically verified reasoning.
- **Initial:** construct feedback, keys, rubrics, and solutions as learner-facing
  elements only after the corresponding attempt/reveal. A populated answer in
  a closed disclosure is insufficient concealment.
- **Invalid/evaluated:** preserve responses. Empty, malformed, or unselected input
  gets a local input message without counting as conceptual failure. Evaluated
  answers show authored feedback and applicable choice patterns locally.
- **Helped/revisited:** offer only authored hints plus explicit **Show solution**;
  label assisted work, rubric comparison, and retries honestly. Preserve responses,
  feedback, and reveal state during navigation. No automatic advancement.

## Applications and useful visuals

In `sec-cases`, show only the authored generic **Case 01–13** titles. Before an
attempt/reveal, conceal task-specific source titles/locators, origin panels,
capability labels/IDs, and remediation links that could identify the answer.
Never derive titles, badges, accessible labels, or navigation highlights from
keys. Keep the actual authored signatures, profiles, and context visible.

Global Sources and Learning map remain optional, available resources; do not
filter/highlight them by the current case's target. Task evidence and revisit
links may appear after an attempt. Correcting an answer after feedback/reveal
is distinct from independently correct first-attempt work.

- **`sec-coordinates` / `t-coordinate-count`:** use the authored ten-base strip
  with aligned 0-based/1-based labels and highlighted interval. Label conventions
  above rows; indicate inclusion through a marker/outline as well as color.
  Provide an equivalent label/inclusion table. No summed length in initial
  captions, alternatives, tooltips, or status labels.
- **`sec-alignments` / `t-query-count`:** show the authored nine-operator key,
  query/reference consumption booleans, and operation tokens. A two-lane diagram
  is optional; provide the same information as text/table. Hide cumulative totals
  before an attempt; never depict `M` as proof of matching bases. No animation
  or custom keypad is needed.

## Progress and acceptance

**Mark complete** marks a section in one click; **Reopen section** clears its
mark in one click. Navigation stays unrestricted and separate from correctness.
Storage is optional: failed storage leaves in-memory use intact. Feedback uses a
polite status announcement without stealing focus or scrolling the response away.

Rendered observations are recorded in [verification.md](verification.md): all
blocks/profiles/units preserved; 320 px/text-resize reflow and scientific overflow;
initial application/accessible-label concealment; correct/incorrect/invalid/helped
states and five rubric self-checks; both equivalent visuals without initial
totals; keyboard access/unobscured focus; completion/reopening, retained responses,
storage failure, and direct-file offline plus HTTP delivery. Screenshots alone
do not establish interaction behavior or learning gains. Browser UI zoom and
screen-reader announcements were not tested; the record states those limits.
