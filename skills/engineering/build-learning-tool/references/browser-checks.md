# Browser checks for the delivered tool

Read when verifying generated HTML. Exercise the actual `dist/index.html`, using an available browser harness and task inputs with independently established expectations. These checks establish implementation behavior; they do not prove the authored answers or learning effectiveness.

Use [verify-learning-tool](../../../workflow/verify-learning-tool/SKILL.md) for the verification record and content boundaries. Use [interface review](../../../design/design-interface/references/interface-review.md) for visual hierarchy, accessible representations, contrast, and responsive design. Keep only applicable checks here; a tool need not implement every response kind or optional feature.

## Verify both delivery modes

1. Copy only the delivery HTML to a clean temporary directory. Open that copy through a `file:` URL with network access blocked. Confirm the lesson, required visuals, response controls, feedback, navigation, and completion work without sibling source files or a previous online visit. Record unexpected network requests and browser errors. Core learning must not depend on a request that happened to succeed during development.
2. Serve the same bytes with a simple local static server and exercise representative interactions through HTTP. Hosting must not require an API, framework server, or different lesson implementation. A successful localhost check does not substitute for the direct-file check.
3. Check required content against `lesson.json` and graph identities: section order, prompts, worked steps, options, units, feedback, and meaningful visual behavior. Inspect long or scientific content where formatting could omit a qualification. Confirm optional source links remain usable references when online; following those links is not part of the offline core.

Reuse a browser harness rather than adding a test platform to each generated tool. [Playwright network controls](https://playwright.dev/docs/network) and [emulation](https://playwright.dev/docs/emulation) support these checks. Locate controls by their accessible names or labels when possible, so the recipe also exposes missing semantics.

Some harnesses disable file navigation by default. Use their documented local-file setting for the temporary delivery copy when available; otherwise record direct-file verification as pending. An HTTP preview cannot establish that mode.

## Exercise task handling

For each implemented response kind, use representative authored tasks and any special behavior the tool promises:

- **Number:** submit a known correct value, a plausible wrong value, blank input, and malformed input. Accept supported decimal, negative, or scientific notation when the task permits it; reject trailing junk and nonfinite values. Blank input cannot become zero. Check values within and outside the authored absolute tolerance, including meaningful boundaries, without rounding before comparison. Units and accepted format remain clear; do not silently convert a percentage, fraction, or alternate unit into the requested answer. A number input's default step is `1`, so decimal answers need an appropriate step or another validated control. See [MDN numeric inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number) and [parseFloat prefix parsing](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat).
- **Choice:** submit no selection, a wrong option, and the correct option. Check by authored option ID rather than display position or text. No option is preselected merely because it is correct. Group related choices with native semantics and preserve the authored wording.
- **Short-text or code:** enter a response, then open the authored rubric and sample response. Label the result as self-check; comparison with a sample is not automatic correctness. Preserve valid alternative criteria. A code response is text unless a separately designed executable checker is required; the page must not evaluate it as page JavaScript.
- **Help and reveal:** inspect the initial visible and accessible interface for leaked keys, samples, solution-bearing feedback, or defaults. Reveal a hint or solution, then answer correctly, revisit the section, and retry. Help use remains recorded for that task; closing the help or editing the answer cannot turn the result into independent success. An authored fresh task has its own state. Resources allowed by the task remain distinct from optional solution help.
- **Feedback and editing:** show the authored local feedback while preserving the response. Invalid format and an incorrect answer have different messages. After editing a checked response, clear stale feedback or identify it as belonging to the previous submission. Specific error-pattern feedback needs an explicit, tested predicate; an authoring description is not executable grading logic.

Use a native form so submitting with the keyboard behaves predictably. Check that labels, instructions, and feedback are associated with the relevant controls; use [W3C form grouping](https://www.w3.org/WAI/tutorials/forms/grouping/) and [user notifications](https://www.w3.org/WAI/tutorials/forms/notifications/) where needed.

## Check navigation, state, and access

- Mark an early section complete in one action, reopen it, and navigate to later sections. Navigation remains unlocked; completion does not submit a quiz, reveal a solution, erase a response, or assert mastery.
- Use only the keyboard to enter responses, submit, reveal help, follow navigation, and complete or reopen sections. Confirm visible focus, a sensible order, and concise feedback announcements without unnecessary focus movement. Check feedback accessibility using [W3C status-message guidance](https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html).
- Exercise a narrow viewport and browser zoom with the longest relevant prompt, notation, and visual. Confirm controls and essential content remain reachable. Use interface review for detailed reflow and scientific overflow decisions.
- If persistence is implemented, block storage and try malformed or stale saved state. Learning interactions still work in memory. Test reload behavior only against what the tool promises; namespace saved state by tool and lesson identity so changed content cannot inherit misleading outcomes. Clear only this tool's stored state. [MDN documents that direct-file storage is undefined and access may throw](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).
- Render a response containing markup-like text and confirm it remains text. Check any imported or source-derived data uses the same safe rendering boundary. No `eval`, unexpected script execution, or network side effect should follow a response.

Record the exact artifact identity, browser and delivery modes, inputs, expectations, observed outcomes, and unresolved failures in `verification.md`. Test additional engines when required by the audience or a browser-dependent feature; report the engines actually exercised. Fix a defect in its owning source and rebuild before repeating affected checks. Leave unavailable browser checks pending rather than replacing them with screenshots or source inspection.
