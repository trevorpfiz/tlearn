---
name: principle-deterministic-operations
description: Use reusable scripts and existing tools for mechanical tlearn operations instead of repeatedly reasoning through them. Apply to artifact checks, hashes, numerical calculations, rendering, and repeatable interactions while preserving source and pedagogical judgments.
---
# Deterministic operations

Execute a known mechanical rule with a reusable tool; reserve agent judgment for decisions the rule cannot establish.

**Why:** Recreating the same ID check, calculation, or transformation consumes context and introduces avoidable variation. A small rerunnable tool preserves the procedure and exposes failures consistently.

**Apply:**

- Reuse an existing command or helper before writing another. Import the graph validator instead of duplicating its contract; use standard hashing tools for source bytes.
- Script repeatable rules: JSON parsing, IDs and references, revision binding, finite numbers, choice keys, unit consistency, deterministic calculations, and eventually artifact-to-HTML rendering and browser flows.
- Preserve explicit inputs, outputs, exit status, and independently established expected results. Run representative success and failure cases before relying on a new helper.
- Keep output compact; return failed fields and useful evidence rather than whole documents. Agents can execute a helper without loading its implementation every time.
- Keep checks read-only by default, or make an intentional transform reproduce its output from canonical inputs. Do not overwrite sources or hide semantic changes behind automatic repairs.
- Do not automate a source-quality score, prerequisite necessity, scientific interpretation, or rubric adequacy merely because a model can produce a number. Keep these judgments and their reasons visible.
- Build a helper when reuse or error risk justifies it. Avoid a framework for a one-line command or hypothetical future workflow.

**Check:** Can another agent rerun the operation from saved inputs and observe the same mechanical result? Does its output accurately state what still requires review?

**Sources:** Adapted from pstack's [build-the-lever](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-build-the-lever/SKILL.md) and [encode-lessons-in-structure](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-encode-lessons-in-structure/SKILL.md). Scope and proportionality are tlearn adaptations; see [verification rationale](../verify-learning-tool/references/verification-rationale.md).
