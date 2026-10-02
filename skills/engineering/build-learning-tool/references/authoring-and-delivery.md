# Authoring and delivery

Read when creating the implementation or deciding whether the objective needs more than one HTML file. These are tlearn's engineering choices, grounded in the browser constraints below.

## Small source, portable output

```text
learning-project/
├── sources.md
├── sources/                 # Notes and optional originals; not deployed
├── knowledge.json
├── lesson.json
├── interface.md
├── verification.md
├── src/
│   ├── index.html           # Document, vetted markup, packaging slots
│   ├── styles.css
│   └── app.js               # Helpers and lesson-specific behavior
└── dist/
    └── index.html           # Generated, self-contained learning tool
```

The source packet, graph, and lesson retain their existing owners. `src/` owns implementation; `dist/index.html` is the derived delivery artifact. Separate source files reduce repeated generation of a giant document without requiring a framework, package manager, watcher, or universal rendering engine. A tiny existing self-contained implementation can remain direct-authored if splitting it adds no useful clarity; it must satisfy the same delivery checks.

Resolve source IDs through the inspected `sources.md` registry when creating citation links. Include needed titles, original URLs, and passage anchors in the authored markup or a small embedded lookup. Do not fetch the registry at runtime or link to undeployed local notes. Required media need appropriate reuse rights and retained attribution; linking a source does not grant permission to redistribute its figures.

For a new project, copy the skill's `assets/starter/` directory to `src/`, adapt it, then run `scripts/bundle_html.py <project>`. Python's standard library is sufficient for this build; learners only need a browser. The source template is not the delivered app. Preview the rebuilt output.

The packager replaces exactly one of each slot in the original template:

| Slot | Embedded input |
| --- | --- |
| `/* TLEARN_STYLES */` | `src/styles.css` inside a style element |
| `/* TLEARN_SCRIPT */` | `src/app.js` inside a classic script element |
| `TLEARN_LESSON_JSON` | `lesson.json` inside its JSON data block |
| `TLEARN_KNOWLEDGE_JSON` | `knowledge.json` inside its JSON data block |
| `TLEARN_BUILD_JSON` | Raw input SHA-256 identities inside its JSON data block |

Keep those slots in their intended elements. The script checks marker counts, strict JSON, ready graph/revision binding, and raw-text hazards; it does not establish full contract consistency or inspect arbitrary code dependencies. Full artifact checking stays with verify-learning-tool. Its fixed output, stable serialization, and absence of timestamps make unchanged inputs produce identical bytes. It replaces output atomically after validation and rejects output aliases to inputs.

## Starter helper boundary

`window.tlearn` exposes the embedded `lesson`, `knowledge`, and `build`, plus:

- `gradeNumber(raw, check)`: returns `invalid`, `correct`, or `incorrect`; accepts a complete finite decimal/scientific number and uses the authored absolute tolerance. It accepts no suffixes, percentages, expression evaluation, or implicit unit conversion.
- `gradeChoice(optionId, response, check)`: checks declared option IDs and the authored key; missing/unknown IDs are invalid.
- `createCompletionStore()`: returns `isComplete(sectionId)` and `setComplete(sectionId, boolean)`. State always updates in memory; the latter returns whether that update was saved. It validates stored section IDs and isolates storage by lesson-byte identity. It stores completion only.

The helper does not choose feedback, infer mastery, render blocks, execute code, or mark help use. The builder owns native controls, sticky assistance flags, in-memory responses, rubric presentation, local feedback, and completion UI. Keep these small and task-specific. For numeric controls, use a labeled text input with appropriate input mode or `type="number"` with deliberate `step`; default step constraints must not reject authored decimals. State the accepted format and units. [MDN numeric inputs](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/input/number).

## Browser constraints and safe content

File URLs usually have opaque origins; nearby files are not reliably readable through fetch or module imports. Embed runtime data and assets. Classic inline JavaScript is the uncomplicated default; import-free inline modules are not categorically forbidden, but an external module graph needs additional packaging. [MDN file origins](https://developer.mozilla.org/en-US/docs/Web/Security/Defenses/Same-origin_policy#file_origins), [modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

JSON data blocks are parsed with `JSON.parse(element.textContent)`. Packaging escapes literal `<` as JSON `\u003c`, so content such as a closing script tag cannot change HTML parser state. Do not substitute HTML entities or executable JavaScript escapes into JSON. Responses and source/data strings use `textContent` or DOM creation; vetted markup stays separate. No `eval` or `Function` for learner input. [WHATWG script restrictions](https://html.spec.whatwg.org/multipage/scripting.html#restrictions-for-contents-of-script-elements), [OWASP safe DOM guidance](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html).

Use inline SVG for modest plots/diagrams, with responsive dimensions and task-equivalent accessible information. Native MathML can serve authored notation; test its actual rendering and meaning. Extensive LaTeX may justify build-time KaTeX, but its CSS/fonts must also be embedded; JavaScript alone does not make it portable. Prefer build-time preparation over runtime packages for fixed content. [SVG](https://developer.mozilla.org/en-US/docs/Web/SVG/Guides/SVG_in_HTML), [MathML](https://developer.mozilla.org/en-US/docs/Web/MathML), [KaTeX server rendering](https://katex.org/docs/node).

`localStorage` access or writes can fail; behavior for local files is undefined. The tool must remain usable in memory. Completion is best-effort convenience, not portable progress between file locations, browsers, devices, or the hosted URL. Add export/import only when needed. [MDN storage constraints](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage).

## Escalate for an actual need

Single-file delivery supports explanations, quizzes, modest datasets, SVG plots, and small simulations. Embedded answer keys remain inspectable; this is a learning tool, not a secure examination system. Hide solutions from the initial visual and accessible interface, not from browser inspection.

Consider a larger static bundle, companion notebook, or web app when essential datasets/media become impractical to embed, computation blocks interaction, or the objective requires live/authenticated services. Record the concrete need and verified delivery tradeoff. Add a library only if it earns its bytes and complexity, with its version, license, and needed assets accounted for. Do not add a backend merely to host the HTML. Source changes are occasional rebuilds, not a reason for content synchronization infrastructure.

## Reusable mechanics checked

On 2026-10-02, temporary checks exercised packaging reproducibility, strict/safely embedded JSON, marker handling, input/output alias protection, atomic-write failure, numeric/choice grading, and corrupt or denied completion storage. A bundled arithmetic probe ran in Chromium 154.0.8037.93 from a standalone file with networking disabled and over HTTP serving identical bytes. Grading, hint state, completion/reopening, safe text rendering, blocked storage, and 320px reflow were exercised. These checks cover the reusable mechanics; each authored lesson still needs its own content and rendered-behavior verification. Mobile attachment delivery and other browser engines were not exercised.
