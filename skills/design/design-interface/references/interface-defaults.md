# Interface defaults

Read when choosing tokens, layout, or presentation. These are tlearn starting heuristics for a one-off learning tool; adjust them for the actual material. They do not prescribe a framework or replace scientific and accessibility review.

## A quiet visual vocabulary

| Role | Starting choice | Purpose |
| --- | --- | --- |
| Canvas / paper | `#f7f8f5` / `#ffffff` | Separate the working surface gently without repeated card shadows |
| Main / secondary text | `#202822` / `#58635b` | Readable hierarchy; secondary text still conveys information |
| Action / action text | `#21664e` / `#ffffff` | A clear, consistent primary action |
| Playful accent | `#dff39a` with `#202822` text | Small highlights or a meaningful visual motif, rather than large attention-grabbing fields |
| Error / success | Explicit labels and reviewed colors | Status remains intelligible without red/green discrimination |

Check every actual pairing, including hover, focus, selection, error, and figure labels. A passing token palette does not establish contrast for gradients, overlays, transparency, or a complex image. Use one main accent; add data-series colors only when they encode a useful distinction, with labels or another redundant cue.

Use a local system sans-serif by default; a bundled font is optional when it adds enough character to justify its weight and reuse terms. Use monospace for code and appropriate numeric alignment, not for every label. Keep essential text as text, and preserve mathematical notation semantically.

Start body text near `1rem`–`1.125rem`, line height around `1.5`–`1.65`, and a reading measure near `60`–`75ch`. Use a small type scale, left-aligned prose, and purposeful headings. These values are usability heuristics, not learned thresholds. Inputs should use at least 16 CSS px text at the default scale; browser zoom remains available.

Use a compact spacing vocabulary such as 4, 8, 12, 16, 24, 32, and 48 CSS px. Give related elements tighter spacing than separate ideas. Borders, tinted surfaces, and modest rounding may distinguish an input or worked example; avoid placing every paragraph inside an identical box. Keep critical control boundaries visibly distinct.

## Layout around the next meaningful action

A default working view has a short objective/section heading, the relevant explanation or visual, a response area, local feedback, and an obvious next action. Keep source details and the knowledge map reachable on request. A small outline helps orientation; on narrow screens it can collapse to a labeled control without obscuring focus or the current task.

Source details are secondary; units, assumptions, uncertainty, and qualifications needed for the current task stay visible as permitted by its resource conditions.

Use one reading column when it works. A wider visual plus adjacent prompt is useful only when the learner benefits from comparing them. Stack naturally on narrow screens; retain necessary labels, data, and definitions near the response. Avoid decorative hero sections, excessive blank space, or a progress dashboard before the lesson.

Long equations, tables, and code may need a contained scroll region or an equivalent representation. The prose and controls should still reflow. Do not ellipsize prompts, qualifications, legends, or explanations to preserve a preferred layout.

## Calm controls and feedback

Use consistent action names: **Check answer**, **Show hint**, **Show solution**, **Continue**, and **Mark complete** when these actions exist. Differentiate completing a section from evaluating an answer. Keep secondary actions accessible but visually quieter.

Prefer native inputs and buttons. A custom math keypad, drag task, or bespoke slider is justified only when it meaningfully supports the objective; provide equivalent keyboard and non-drag pointer routes. Show control values, units, and reset where useful. Do not introduce a custom control just to look more interactive.

Keep feedback beside the response with a clear status and the authored next step. Preserve the entered value. Input errors explain the requested format; answer feedback explains reasoning. Avoid shaming language, loud failure effects, or congratulatory overlays that interrupt the next attempt.

Default to stillness. A short transition can clarify an intentional state change; avoid entrance cascades, pulsing attention cues, and gratuitous page motion. Instructional animation needs pause/step/replay and a reduced-motion equivalent. Meaningful before/after views can often do the job more simply.

Ordinary text needs at least 4.5:1 contrast; qualifying large text and essential non-text distinctions have different 3:1 requirements. A roughly 44 px primary touch area is a comfortable tlearn default; WCAG 2.2 AA's target-size rule is 24 px with exceptions. See [review criteria and primary standards](interface-review.md) for the distinctions.
