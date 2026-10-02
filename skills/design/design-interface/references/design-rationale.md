# Design rationale: research, inspirations, and limits

Read when revising a design principle or resolving a tradeoff. The rules and token defaults are tlearn adaptations. Separate learning evidence, accessibility standards, observed product patterns, and aesthetic preferences; none establishes a universally best interface.

## Learning evidence

- **Coherence, signaling, and contiguity:** Mayer's multimedia principles support removing irrelevant material, highlighting meaningful structure, and placing related words and pictures together. Applying these to controls and local feedback is a design adaptation. They do not justify removing essential explanation or setting a universal word/card quota. [Mayer chapter](https://www.cambridge.org/core/books/abs/cambridge-handbook-of-multimedia-learning/principles-for-reducing-extraneous-processing-in-multimedia-learning-coherence-signaling-redundancy-spatial-contiguity-and-temporal-contiguity-principles/C98AB3A6CE760DD63C048936EA0B3B44).
- **Segmentation:** research on dynamic explanations supports meaningful learner-paced segments, particularly for novices. Extending that to every static page is not a tested universal rule. [Spanjers et al., 2010](https://link.springer.com/article/10.1007/s10648-010-9135-6).
- **Interactivity:** PhET's interview-based design research shows how confusing or crowded controls can divert attention from the subject. Use clear affordances and task-relevant manipulation; clicking alone is not learning evidence. [Adams et al.](https://phet.colorado.edu/publications/PhET_Interviews_II.pdf).
- **Animation:** a review and reanalysis found stronger benefits when displayed changes were relevant to the assessed learning. Choose motion for necessary change, with controllable or static equivalents, rather than treating animation as engagement by default. [Ploetzner et al., 2020](https://onlinelibrary.wiley.com/doi/10.1111/jcal.12476).
- **Feedback:** Shute's review supports manageable, specific, task-focused feedback; timing and detail depend on context. Keep authorship of the explanation in the learning stage and its nearby presentation in design. [Shute, 2008](https://journals.sagepub.com/doi/abs/10.3102/0034654307313795).
- **Warmth:** one experimental lesson used combined color and anthropomorphic-shape treatments with learning benefits. It does not establish a universal palette, mascot, or celebration requirement. Our modest warmth and playfulness primarily express the user's preference. [Um et al., 2012](https://tecfa.unige.ch/tecfa/teaching/methodo/Plass2012.pdf).

[W3C cognitive accessibility guidance](https://www.w3.org/TR/coga-usable/) adds predictable structure, clear purpose, familiar controls, and limited interruptions. It is supplemental guidance. Its effort-reduction patterns concern operating the interface: retain retrieval and calculation when they are the intended learning challenge. Normative requirements and practical verification are distinguished in [interface review](interface-review.md).

## Platform inspiration

Use official public documentation and inspected examples, not assumptions about inaccessible logged-in products. Record observations separately from claimed learning efficacy.

| Inspiration | Useful pattern for tlearn | Scope |
| --- | --- | --- |
| marimo | Connect prose, controls, and affected output; make exploration responsive and state understandable | [For learners](https://marimo.io/for-learners), [app documentation](https://docs.marimo.io/guides/apps/), and the [spectral-decomposition example](https://marimo.io/gallery/l/spectral-decomposition); its notebook/runtime architecture is not a tlearn requirement |
| Math Academy | Small worked-example/practice steps, direct feedback, and focus on the current learning action | [How it works](https://www.mathacademy.com/how-it-works); adaptive scheduling, diagnostics, and mastery gates remain outside the initial path |
| Brilliant | Integrate visual tasks and their controls, show active input state, and offer a clear reset where useful | [Official interactive help](https://brilliant.org/help/features/how-do-i-use-interactives-on-brilliant/); custom controls are not inherently better than ordinary inputs |

The inspected Brilliant math-entry example used a light surface, a compact prompt, a highlighted active field, nearby keypad, and a reset action. Its documentation also describes control confusion. Adopt locality and clarity rather than a keypad or drag mechanism in every tool. Brilliant's current public site features Koji; older course-design impressions do not establish its present logged-in interface.

An inspected account-free [Brilliant K–5 activity](https://brilliant.org/practice/kindergarten/counting/count-with-fiveframes/) retained its prompt and blue-dot visual while replacing the local answer area with wrong-answer guidance and a retry action. That illustrates the stable-feedback pattern; it is a separate product, not evidence about authenticated main courses. Math Academy's public learning-loop descriptions informed instruction, not claims about its current authenticated control layout. marimo's public preview included editor conveniences, which are not part of the proposed learner interface.

Our synthesis is a quiet working surface with subject-relevant character and satisfying, understandable responses. Minimalism means reducing interface overhead while retaining the material and intellectual work the objective needs. A product's visual polish or marketing claim is not evidence that its design alone improves learning.

## Representative design skills

| Skill | Structure / goal | Selective reuse |
| --- | --- | --- |
| [Vercel web-design-guidelines](https://github.com/vercel-labs/agent-skills/blob/063bee94c3f4df8453406c830b0a7df0f2860278/skills/web-design-guidelines/SKILL.md) | Short audit instructions that fetch detailed current rules and report code findings | Stable workflow plus detailed review reference; adapt the baseline and review updates deliberately |
| [Anthropic frontend-design](https://github.com/anthropics/skills/blob/8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4/skills/frontend-design/SKILL.md) | Visual direction, compact tokens/wireframes, brief review, implementation, and screenshot critique; current guidance emphasizes restraint | Subject-grounded character and purposeful iteration; a learning task replaces a marketing hero as the focal point |
| [baseline-ui](https://github.com/ibelick/ui-skills/blob/ebf5f26cd275b1412be8a2c8784c4f8da628e7c2/skills/baseline-ui/SKILL.md) | Apply/review entry point with concrete constraints for interaction, type, layout, motion, and performance | Useful explicit rules; omit mandatory React/Tailwind/library choices from portable HTML guidance |

These are complementary patterns, not an empirical ranking. tlearn uses one interface workflow, one attention principle, and conditional references for defaults, handoff, review, and rationale. It consumes checked content instead of inventing questions during frontend construction.

The inspected source snapshots are Vercel Agent Skills `063bee94c3f4df8453406c830b0a7df0f2860278`, Web Interface Guidelines `e3d624baaf29dc1fc645aff3e38f03e564d2d6b1`, Anthropic Skills `8a1541c4a3ffa5a20a5a91de0dcf3f0bab1d1ef4`, and ui-skills `ebf5f26cd275b1412be8a2c8784c4f8da628e7c2`. The tlearn wording and helper are original adaptations; primary links attribute the ideas without transplanting their text or frameworks.
