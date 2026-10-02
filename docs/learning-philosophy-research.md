# Learning philosophy: research and adaptations

Research note, October 1, 2026. This supports the concise [README](../README.md). The recommendations below are proposed tlearn design decisions; the cited studies have not evaluated tlearn.

## Easy entry, conservative foundations

A topic, question, or paper should be enough to begin. The agent scopes the outcome and assumes general basics: everyday language and basic arithmetic. It supplies the biology, statistics, mathematics, and computing foundations the outcome needs.

Foundations belong in the ordinary learning path. Each section can be marked complete in one click and reopened. The learner's choice supports navigation; evidence from exercises remains separate. No preliminary knowledge inventory or diagnostic exam is required.

This is our adaptation of MathAcademy's approach. Its system measures prerequisites and chooses tasks accordingly. tlearn initially provides the relevant foundations by default and leaves navigation under learner control. Skycak's biology account supports low-friction instruction-and-exercise cycles, while also describing the limitations of improvised LLM tutoring. His experience is a practitioner account. [MathAcademy's learning process](https://www.mathacademy.com/how-it-works), [Skycak's biology account](https://www.justinmath.com/q-and-a-4/).

Research must stop at an explicit, useful boundary. If the required foundations make the objective too large, split it into linked tools and make the remaining prerequisites visible. Keep the original objective connected to each foundational section.

## What the deeper reading adds

The [Math Academy Way PDF](https://www.justinmath.com/files/the-math-academy-way.pdf) inspected here is the working draft updated August 13, 2026. Relevant sections included mastery learning, micro-scaffolding and expertise reversal, layering, non-interference, interleaving, and targeted remediation. The [book index](https://www.justinmath.com/books/) points to the maintained document.

| Addition | Grounding and limits | Decision for tlearn |
| --- | --- | --- |
| Progress from guidance to independence | Skycak describes scaffolding and fluent prerequisites. Atkinson, Renkl, and Merrill's two experiments found that fading solution steps with prompts about underlying principles improved transfer; fading alone had less consistent far-transfer benefits. | Use worked examples, then completion tasks, then fresh independent problems. Ask short explanations of why a step applies. Reduce help as performance improves. [Cognitive load](https://www.justinmath.com/cognitive-science-of-learning-minimizing-cognitive-load/), [Atkinson et al., 2003](https://asu.elsevierpure.com/en/publications/transitioning-from-studying-examples-to-solving-problems-effects-/). |
| Fluent component skills and layering | Skycak emphasizes that dependable low-level skills free attention for harder reasoning, and that advanced tasks should exercise their components. These are a learning rationale, not a measured tlearn outcome. | Reuse foundational skills in later tasks. For a computational biology tool, repeatedly interpret ratios, dimensions, notation, or data transformations where relevant. A brief encounter establishes a starting point; extensive automaticity requires more practice. [Automaticity](https://www.justinmath.com/cognitive-science-of-learning-developing-automaticity/), [layering](https://www.justinmath.com/layering-building-structural-integrity-in-knowledge/). |
| Retrieval, then mixed practice | Karpicke and Blunt found retrieval outperformed elaborative concept mapping in their science-text tasks, including inference questions. Skycak distinguishes initial similar practice from later interleaving. | Attempt recall before reopening explanations. Once the basic procedure is understood, mix suitable problems and remove cues that announce which method to use. The graph organizes learning; viewing it alone is insufficient practice. [Karpicke and Blunt, 2011](https://pubmed.ncbi.nlm.nih.gov/21252317/), [Skycak on interleaving](https://www.justinmath.com/cognitive-science-of-learning-interleaving/). |
| Coordinate branches and manage confusion | Skycak's biology account advocates breadth across foundations. His non-interference discussion recommends separating initial instruction on easily confused concepts. This does not establish one optimal ordering for every domain. | Coordinate the branches needed by the goal. Introduce confusing ideas clearly, then use contrast questions after each is understood. Let prerequisites determine readiness rather than enforce a rigid breadth-first traversal. [Biology account](https://www.justinmath.com/q-and-a-4/), [associative interference](https://www.justinmath.com/cognitive-science-of-learning-minimizing-associative-interference/). |
| Repair the specific gap | The book's targeted-remediation sections connect mistakes to component skills and also describe revising content that repeatedly causes struggle. This is a design account, not independent validation of tlearn. | Feedback should explain the error, point to a relevant earlier section, and offer a fresh attempt. Repeated difficulty can reveal ambiguous instruction or a bad answer key. Preserve the intended capability while repairing the route. [Math Academy Way, chapter 21](https://www.justinmath.com/files/the-math-academy-way.pdf). |
| Require meaningful cognitive activity | Chi and Wylie's ICAP framework distinguishes manipulation from generating explanations, inferences, and other new outputs. Visible activity is an imperfect indicator of mental engagement. | Pair a visualization with a prediction, comparison, explanation, or correction. A section checkbox serves navigation; a simulation needs a reasoning task. [Chi and Wylie, 2014](https://education.asu.edu/sites/default/files/lcl/chiwylie2014icap_2.pdf). |
| Integrate small skills into whole tasks | Van Merriënboer's 4C/ID framework combines whole learning tasks, supportive information, procedural information, and component practice. It is an instructional design framework for complex competencies. | Alternate focused exercises with progressively harder versions of meaningful work. Include an early simplified task showing why the foundations matter, then connect those foundations back to it. [4C/ID model](https://www.4cid.org/about/). |

## Computational biology: what counts as learning

Two particularly useful domain sources are the **ISCB competency framework v3** (2024) and **BioSkills Guide** (2020).

ISCB organizes competencies across bioscience, data science, computer science, and professional conduct. It includes data preparation, appropriate tool selection, programming, data management, and communication. Its detailed data-preparation example includes technology limitations, sources of measurement error, and documenting methodology. This is a community-developed competency framework, rather than an experiment comparing teaching methods. Use relevant competencies to check objective coverage; a narrow tool does not need the entire curriculum. [ISCB framework v3](https://pmc.ncbi.nlm.nih.gov/articles/PMC11646570/).

Clemmons and colleagues' BioSkills Guide translates biology competencies into learning outcomes. It emphasizes interpreting quantitative results biologically, designing studies, evaluating evidence, and building or evaluating models. Validation concerns educator agreement about the outcomes' relevance, not proof that any particular teaching interface develops them. It offers a useful basis for defining scientific performance. [BioSkills Guide](https://pmc.ncbi.nlm.nih.gov/articles/PMC8693931/).

For tlearn, these sources motivate tasks that connect biological meaning, data, and computation. The following examples are our proposed adaptations:

| Capability | Example task |
| --- | --- |
| Explain the measurement | Identify what a value represents, its units, and how it was collected. |
| Connect representations | Explain how a diagram, equation, data table, plot, and short code fragment describe the same process. |
| Interpret and predict | Predict what changes when an input or assumption changes, then compare with a small simulation or dataset. |
| Choose and critique a method | Explain why a method fits the question and what assumptions or data-quality problems could undermine it. |
| Build and check | Complete or implement a simplified method, verify a small known case, and explain discrepancies. |
| Communicate evidence | State the biological conclusion, the uncertainty, and what the analysis cannot establish. |

Scientific judgment needs its own practice. Answering a definition question, running provided code, independently implementing a method, and evaluating a conclusion supply different evidence. Match the task to the stated learning outcome.

HTML tools can support these activities with small datasets, diagrams, simulations, code tracing, and checked exercises. A companion notebook or script can support goals requiring substantial computation. Simplifications should be labeled and linked back to the real method.

## Boundaries for the first implementation

- Supply foundations by default and allow section completion in one click.
- Use local exercises and corrective feedback without requiring a broad adaptive assessment engine.
- Use concise retrieval and reasoning prompts; choose activities by their purpose rather than a fixed quiz ratio.
- Build challenge through reasoning, variation, and reduced assistance. Timing is an optional tool for suitable fluency tasks, not a default measure of scientific understanding.
- Keep recurring foundational practice tied to the objective. Useful reference material and documentation can remain available when the real task calls for them.
- Revisit earlier material within the learning path. Do not describe this as a substitute for distributed practice across days.
- Evaluate source fidelity, exercise correctness, independent application, and usability. Add a delayed check when making claims about retention.

The existing [paper-to-learning research note](paper-to-learning-research.md) develops the complementary path from understanding a paper to reconstructing selected work.
