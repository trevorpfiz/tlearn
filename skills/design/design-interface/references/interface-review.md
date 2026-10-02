# Interface review: design intent and engineering defaults

Read when reviewing a rendered prototype or the delivered HTML with verify-learning-tool. Design specifies the behavior and equivalent representations; engineering implements the semantics and proves them in the browser. Static checks and screenshots supply partial evidence, not overall accessibility certification.

## Review the learning experience

Trace an actual lesson task in its initial, incorrect, correct or self-check, helped, and revisited states as applicable. Confirm that the authored content and resource conditions survive rendering. Check local feedback, clear next actions, preserved responses, completion/reopening, and graph/source access without distracting from the task.

Inspect long prompts, scientific labels, units, equations, code, and meaningful visuals. Test narrow layouts and browser zoom rather than judging only a desktop screenshot. Avoid fixed-height panels, clipped context, sticky controls that obscure focus, or extra scrolling between related information. Screenshot critique should identify the effort or misunderstanding a change would remove, not merely a preferred aesthetic.

Check solution concealment in visible text and accessible representations. Alt text, table alternatives, default slider values, option placeholders, feedback, and graph annotations must respect the authored attempt/reveal behavior. Worked-example solutions are intentional support.

## Implement and exercise smart defaults

| Concern | Required direction | Primary guidance |
| --- | --- | --- |
| Structure | Semantic headings/landmarks, native buttons/links and labeled inputs; native keyboard behavior before custom handlers | [WAI forms](https://www.w3.org/WAI/tutorials/forms/labels/), [page structure](https://www.w3.org/WAI/tutorials/page-structure/) |
| Focus and operation | Logical keyboard route, visible focus, no trap, focus not obscured; move focus only when behavior requires it | [Keyboard](https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html), [focus not obscured](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html) |
| Contrast and color | At least 4.5:1 ordinary text; 3:1 qualifying large text and essential control/graphic distinctions; status and data use more than color | [Text contrast](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), [non-text contrast](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html), [use of color](https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html) |
| Reflow and zoom | Preserve browser zoom; reading content reflows at 320 CSS px; genuinely two-dimensional material has specific exceptions and usable alternatives | [Reflow](https://www.w3.org/WAI/WCAG22/Understanding/reflow.html), [resize text](https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html) |
| Touch and drag | Comfortable targets; AA minimum is 24×24 CSS px with spacing/exceptions; drag actions also have a non-drag pointer route | [Target size](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), [dragging](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html) |
| Input and feedback | Persistent labels, format cues without solution clues, local error text, and suitable status announcements that do not steal focus | [Error identification](https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html), [status messages](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html) |
| Representations | Meaningful diagram/chart/math equivalents; test alternatives preserve the action rather than reveal the answer | [Complex images](https://www.w3.org/WAI/tutorials/images/complex/), [non-text content](https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html) |
| Disclosure and motion | Essential information is not hover-only; optional hover/focus content is usable; explanatory motion can pause/stop and reduced motion preserves meaning | [Hover/focus](https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html), [pause/stop/hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html), [interaction animation](https://www.w3.org/WAI/WCAG22/Understanding/animation-from-interactions.html) |

These draw on WCAG 2.2 and WAI techniques. Reduced-motion support is a tlearn default; the interaction-animation criterion is AAA. The approximately 44 px primary touch target suggested in our defaults is a heuristic, not the AA minimum. Required contrast thresholds use the unrounded measured ratio.

Use the small contrast helper for opaque color pairs, then inspect the actual backgrounds and states. Gradients, overlays, charts, typography, focus, and assistive-technology behavior need their own checks. Record only what was exercised in `verification.md`.

## Where Vercel fits

The [Vercel skill](https://github.com/vercel-labs/agent-skills/blob/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines/SKILL.md) loads [Web Interface Guidelines](https://github.com/vercel-labs/web-interface-guidelines/blob/e3d624baaf29dc1fc645aff3e38f03e564d2d6b1/README.md) to audit existing UI code. Its semantic controls, focus, feedback, resilient layout, and restrained motion are useful at design handoff and HTML review. Its framework, brand-copy, and application-state preferences are not universal tlearn requirements.

Our local baseline is explicit and reproducible. Review upstream changes deliberately when maintaining the skill rather than downloading a new rule set during every generation. Preserve zoom, prefer native controls, avoid truncating required material, and do not prefill or hint an assessed answer merely to follow a generic form guideline. Consult current primary standards when a rule or browser behavior is uncertain.
