---
name: principle-verifiable-outcomes
description: Establish evidence for the claimed learning artifact or behavior before declaring it complete. Apply when setting acceptance criteria, checking generated explanations or exercises, reviewing artifact handoffs, or reporting what a tool or learner has demonstrated.
---
# Verifiable outcomes

Name the claim, choose evidence capable of challenging it, and verify against the actual artifact or observed response.

**Why:** A coherent explanation, passing schema, or working button can coexist with incorrect content. Verification must match the conclusion being reported.

**Apply:**

- Define the intended action and acceptable evidence before finalizing its instruction. “Interpret this result” needs interpretation evidence; a vocabulary tag or calculation alone may not supply it.
- Check claims against inspected passages and answers against independently derived expectations. Exercise the delivered interface through its real controls.
- Make checks sensitive to relevant failures. When introducing or materially changing a checker, demonstrate detection of a relevant broken reference, wrong unit, stale revision, incorrect response, or flawed reasoning. Reuse that proof while the check remains unchanged; do not repeat fault injection for every tool.
- Distinguish artifact consistency, factual accuracy, instructional adequacy, browser behavior, and learner performance. Report only the layers actually checked.
- Preserve concise repeatable procedures and observed results. Return defects to their owning stage and rerun checks affected by changes.
- Keep completion separate from evidence of independent performance; retention needs a later observation. A structural pass or agreement between agents cannot establish mastery.

**Check:** For each reported success, identify the actual observation, what relevant failure the check would catch, and what remains unestablished.

**Sources:** Adapted from pstack's [prove-it-works](https://github.com/cursor/plugins/blob/7022c81efb48d8b5eb15498ce6043a3bd74b694c/pstack/skills/principle-prove-it-works/SKILL.md) and [test-behavior principle](https://github.com/michael-denyer/pstack-claude/blob/92debb73437f599c014788b1a11ade7db72c3e93/plugins/pstack/skills/principle-test-behavior-not-implementation/SKILL.md), with [backward design](https://ascd.org/el/articles/understanding-by-design) and the [Testing Standards](https://www.testingstandards.net/uploads/7/6/6/4/76643089/standards_2014edition.pdf). See [adaptation and limits](../verify-learning-tool/references/verification-rationale.md).
