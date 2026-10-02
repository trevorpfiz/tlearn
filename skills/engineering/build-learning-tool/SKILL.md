---
name: build-learning-tool
description: Build a lightweight tlearn HTML learning tool from checked lesson content and interface decisions. Use when implementing quizzes, visuals, completion controls, offline delivery, a single-file bundle, and optional static-host sharing preparation.
---
# Build the learning tool

Implement the authored learning experience with readable HTML, CSS, and modest JavaScript. Deliver one self-contained `dist/index.html` that works when opened directly and can also be served by a static host.

## Use the checked inputs

Read `lesson.json`, its ready `knowledge.json`, and `interface.md`. Reuse current `verification.md` evidence; run [verify-learning-tool](../../workflow/verify-learning-tool/SKILL.md) when checks are absent or stale. Preserve source qualifications, block order, IDs, answers, resource conditions, and graph revision. Return missing content or changed scientific reasoning to design-learning; return consequential presentation changes to design-interface.

Read the `sources.md` registry as needed to resolve citation links and asset provenance. Include useful citation metadata in the delivery without copying the research packet or requiring its local paths at runtime.

Apply [simple HTML](../principle-simple-html/SKILL.md) and [attention first](../../design/principle-attention-first/SKILL.md). Use the [authoring and delivery reference](references/authoring-and-delivery.md) for file boundaries, starter helpers, safe data embedding, and dependency decisions.

## Implement the specific lesson

Copy `assets/starter/` into the learner project's `src/` when starting a new tool; reuse an existing suitable implementation instead of replacing it. Adapt its tokens and shell to `interface.md`. The starter supplies packaging slots and small helpers, not a complete lesson renderer. Implement the actual blocks and task controls; remove its unfinished-content message before delivery.

Keep `src/index.html`, `styles.css`, and `app.js` readable. Prefer semantic document structure, ordinary forms and controls, inline SVG, and native scientific notation when suitable. Map controls to canonical task/section IDs. Render response and data strings through safe DOM methods; keep vetted authored markup distinct. Reuse the starter's graders rather than inventing permissive parsers. Do not execute learner code for a rubric task.

Implement the task states in the interface plan. A malformed response is invalid input; a finite, well-formed but wrong answer gets authored feedback. Preserve entries while revisiting sections. Keep help/reveal use sticky for that task during the visit; later attempts after reveal remain assisted. Short-text and code use transparent rubric self-checks. Manual completion/reopening is independent of answer outcomes and never gates navigation.

Keep learning operable without storage or network access. Persist only useful state, with lesson-specific identity and caught access/parse/write failures. The starter optionally saves section completion; responses and assistance stay in memory unless the actual tool needs more. If persisting attempts, persist assistance with them. External citation links can remain links; required lesson assets must be embedded.

## Package and exercise the delivery

Run `python3 <skill-dir>/scripts/bundle_html.py <project>`. It embeds the two JSON inputs, CSS, and classic JavaScript into `dist/index.html`, recording input hashes inside the file. It is a narrow packager, not a transpiler, dependency resolver, content verifier, or automatic image/font inliner. Inline any required media explicitly before packaging. Fix sources and rebuild; avoid editing the derived output separately.

Use [browser checks](references/browser-checks.md) with verify-learning-tool against the **delivered file**: actual `file:` navigation with network blocked, then the same file over HTTP. Exercise relevant grading, help, self-check, completion, navigation, denied storage, keyboard, narrow layouts, and solution concealment. Record actual results and pending checks in `verification.md`; authoring and bundle success do not prove browser behavior or learner gains.

For hosting or a public post, read [sharing and hosting](references/sharing-and-hosting.md). Serve only `dist/`; add optional static metadata once real public URLs are known. Publish when requested or already authorized. Deliver the HTML path, verified modes, and any meaningful limitation concisely.
