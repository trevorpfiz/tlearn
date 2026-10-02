# Maintaining tlearn

tlearn is a shared Agent Skills library for Codex and Claude Code. Read the
[README](README.md) for the vision and [repository structure](docs/repository-structure.md)
for ownership and artifact contracts. This file guides changes to the library;
installed workflow skills guide generated learning projects.

- Keep one canonical skill library grouped by function. Every leaf contains
  `SKILL.md` with a unique `name` matching its directory and a concise trigger
  `description`. Keep both host manifests aligned with the existing groups.
- Keep skill bodies operational and short. Put conditional details in owning
  references; load them when needed. Do not copy third-party skills or source
  materials without preserving their license and attribution.
- Preserve stage ownership: research owns inspected source records, mapping
  owns `knowledge.json`, learning owns `lesson.json`, design owns `interface.md`,
  and engineering derives `dist/index.html`. Revisit affected artifacts when
  upstream assumptions, identifiers, or content change.
- Assume only general basics. Teach required foundations in ordinary sections;
  allow one-click completion and reopening. Completion is navigation state,
  never evidence of mastery. Preserve independent practice and scientific limits.
- Prefer small standard-library scripts for repeatable mechanical checks. Keep
  evidence and teaching judgments explicit. A validator pass does not prove
  source fidelity, correct answers, accessibility, or learning gains.
- Author readable HTML/CSS/JavaScript and deliver a self-contained HTML file by
  default. Learner-critical content and interactions must work offline from disk;
  expand the architecture only for a concrete learning requirement.
- Verify the changed behavior at the right layer, with independent expectations.
  Exercise the delivered file for browser changes. Keep concise artifact-specific
  observations and pending checks in `verification.md`; avoid adding an eval
  framework or unrelated infrastructure.
- Store generated tools outside the installed plugin. Repository examples are
  explicit demonstration projects under `examples/`, with their canonical
  artifacts, implementation source, delivery, and verification evidence.

Python helpers require Python 3 and its standard library. Run them from their
actual paths; resolve cross-skill resources relative to the loaded skill before
using a generated project's working directory. Test packaging in isolated host
configuration before claiming discovery or invocation support.
