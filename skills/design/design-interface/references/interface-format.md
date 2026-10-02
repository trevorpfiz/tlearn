# Interface handoff

Read when creating or revising `<project>/interface.md`. This is a concise supporting design plan, separate from `lesson.json`. It does not duplicate lesson copy or introduce another canonical content format.

## What to preserve

Record the objective, `knowledge.json` revision, and the lesson identity used. A SHA-256 of `lesson.json` identifies its exact bytes when needed; use an existing hashing command. After changed inputs, review affected design decisions before reusing the plan.

Include only decisions relevant to this tool:

| Part | Builder needs |
| --- | --- |
| Direction | One sentence describing the learning atmosphere and where character comes from |
| Tokens | Named colors, type roles, small spacing scale, control/focus treatment, and any reviewed contrast pairs |
| Layout | Desktop and narrow-screen reading order, persistent context, navigation, and overflow decisions |
| Blocks | Presentation of existing explanation, example, task, and visual blocks using section/task IDs |
| States | Response entry, invalid input, evaluated answers or self-check, hints/reveals, retries when authored, and revisits |
| Visuals | Existing purpose/task binding, labels/units, controls, motion behavior, and accessible equivalent |
| Progress | One-click completion/reopening with honest labels and no locked navigation |
| Checks | Concrete rendering and interaction observations to add to `verification.md` |

Assets are optional; record source and reuse terms where applicable. Avoid committing a layout prototype, component inventory, or new design-system file merely to fill a template. A short Markdown plan and a text wireframe are sufficient when they settle the decisions.

## Example layout decision

For an authored plot-interpretation task, an appropriate plan might say:

```text
Wide view                     Narrow view
section + brief objective     section + brief objective
plot | prompt + response      plot
     | local feedback         prompt + response
     | next action            local feedback + next action
```

Specify which plot labels and data remain available while answering. A source drawer and graph view are secondary. The example sets no fixed column ratio, screen height, or universal task length; choose these using the actual content.

## State decisions

- **Initial:** authored task and permitted context are visible. Practice/application keys, hints, explanatory feedback, and solution-bearing alternatives stay concealed. Worked examples remain visible support.
- **Entered:** preserve the response; controls communicate what can happen next without relying on color alone.
- **Invalid:** identify the format problem locally. Do not treat blank input as zero or mark malformed input as conceptually incorrect.
- **Evaluated:** show authored feedback after an attempt. Numeric/choice results and a rubric comparison have distinct meanings; a rubric is labeled self-check.
- **Helped/revealed:** show the requested hint or solution without silently converting assisted work into independent success. Repeated answers after reveal are practice.
- **Revisited:** preserve meaningful state as promised by the tool; reopening or marking a section complete does not change the canonical prerequisites.

These describe presentation, not a new grader or progress schema. Implement only states and interactions the lesson needs. Resource conditions may intentionally require recall rather than keeping every formula visible; respect them and make optional help explicit.

## Content boundary and acceptance

Design can change arrangement, emphasis, control shape, and feedback placement. It cannot silently change scientific claims, notation, data, prompts, expected answers, scoring tolerance, or the task's permitted resources. If a needed representation changes the instructional meaning, return that decision to design-learning and renew the handoff.

Accessible equivalents should supply the task's information without its solution. For example, a graph-trend task can offer labeled data in a readable table; its alternative must not announce the trend being assessed. If an equivalent changes what is assessed, involve learning design rather than declaring automatic parity.

Name a few actual acceptance cases: the longest prompt remains readable; a plot and its labels remain usable at narrow width; keyboard users can answer and reveal help; feedback does not shift the response out of view; completion/reopening remains one click; no answer leaks through a placeholder, visual default, or accessible label. Record checks as pending until the rendered artifact is exercised.
