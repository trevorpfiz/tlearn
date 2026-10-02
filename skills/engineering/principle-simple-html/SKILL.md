---
name: principle-simple-html
description: Build a tlearn tool with a small browser implementation and portable delivery file. Apply when organizing HTML source, implementing lesson interactions, choosing dependencies, or considering richer delivery.
---
# Simple HTML, reliable behavior

Keep the tool easy to open, share, and inspect. Organize its authoring files, then deliver self-contained HTML that works directly in a browser and on static hosting.

**Why:** Organized source reduces mistakes; a single delivery file removes learner setup. Bundling provides both.

**Apply:**

- Preserve the canonical graph and lesson outside the app. Implement the authored content and interface plan; return changes to claims, task demands, keys, units, or tolerances to their owning stage.
- Start with semantic HTML, CSS, and modest JavaScript. Use native links, buttons, labels, grouped choices, and disclosure controls before inventing widgets. ARIA supplements semantics; it does not supply missing keyboard behavior.
- Keep authoring HTML, styles, and behavior separate when useful. Generate the delivery file deterministically; embed required data, styles, scripts, and assets so core learning needs no runtime fetch, remote library, account, or server. External references may remain links.
- Keep state small and explicit. Preserve entered responses; distinguish invalid input, checked answers, rubric self-checks, and assisted attempts. Manual section completion never proves independent performance or locks navigation.
- Grade only what the lesson authorizes. Validate complete finite numeric input and use the authored tolerance and units. Match choice IDs. Treat short-text and code rubrics as self-checks; do not execute a learner's code as ordinary page JavaScript.
- Render responses and source-derived text as data with escaped markup or safe DOM text operations. Escape embedded JSON for its HTML context. Avoid evaluating input or rebuilding focused controls to update feedback.
- Make optional persistence fail gracefully. In-memory interaction must work when storage is blocked; direct-file storage behavior is not guaranteed. Do not promise cross-device progress.
- Add a dependency or richer delivery mode only for a demonstrated learning requirement. Prefer a small embedded dataset or bounded simulation before introducing a computation service; state any meaningful scientific simplification.

**Check:** Does the final file work from a clean location with networking unavailable, preserve the authored task behavior, and remain usable through keyboard navigation? Use [build-learning-tool](../build-learning-tool/SKILL.md) and its [browser checks](../build-learning-tool/references/browser-checks.md).

**Sources:** [W3C native semantics and ARIA](https://www.w3.org/WAI/ARIA/apg/practices/read-me-first/), [MDN local storage limitations](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage), and [OWASP safe DOM operations](https://cheatsheetseries.owasp.org/cheatsheets/DOM_based_XSS_Prevention_Cheat_Sheet.html). These inform tlearn's portability defaults.
