# Mapping rationale and domain choices

Read when granularity, prerequisite direction, alternative routes, or domain differences affect a mapping decision. The JSON contract and bounded workflow are tlearn design choices; the sources below inform them rather than validate an AI-generated curriculum.

## Math Academy: small steps with real foundations

The Math Academy Way describes fine-grained prerequisites, scaffolded learning, and additional relationships used for remediation and practice. tlearn takes the small-step structure and deliberate use of foundations, while leaving diagnostics, mastery estimates, and long-term scheduling out of this first path. Inspect chapter 4, “Core Technology: the Knowledge Graph,” and chapters 13–16 when more detail is needed. The inspected PDF is the August 13, 2026 working draft; Skycak's books page links a newer live document as well. [Book and current document](https://www.justinmath.com/books/), [inspected PDF](https://www.justinmath.com/files/the-math-academy-way.pdf).

Skycak's prerequisite essay supports planning from a goal while learning through the necessary foundations. His biology account emphasizes short practice loops and coordinated foundations across a wider domain. It is a practitioner account, not evidence for a universal biology prerequisite structure. [Prerequisites](https://www.justinmath.com/the-importance-of-learning-your-prerequisites/), [learning biology](https://www.justinmath.com/q-and-a-4/).

Operationally, ask whether an intermediate capability makes the next step teachable and usable. Avoid a node for every vocabulary word and avoid giant nodes such as “learn calculus.” The map should support later scaffolding and targeted feedback without authoring the exercises itself.

## KST: capability types, with alternative routes

Doignon and Falmagne distinguish problem types from individual problem instances and model collections of feasible knowledge states. Their surmise systems can express alternative sufficient prerequisite sets. A pairwise prerequisite DAG is a restricted representation; it cannot faithfully express every such alternative. See sections 1, 4–5, and 11. [Knowledge Spaces and Learning Spaces](https://arxiv.org/html/1511.06757v1).

For a narrow initial tool, choose one supported instructional route and record credible alternatives as notes. Do not accidentally require the union of all alternatives. Neither an agent's prerequisite hypothesis nor a learner's “Mark complete” action establishes a feasible mastery state. Implementing a formal knowledge structure and adaptive assessment would be a separate future decision.

## Concept maps: relationships need different semantics

Novak and Cañas describe concept maps built around a focus question, labeled propositions, hierarchy, and selective cross-links. Their concept nodes differ from tlearn's observable capability nodes. A useful mechanistic map can inform understanding without defining teaching order. [IHMC technical report](https://cmap.ihmc.us/docs/theory-of-concept-maps).

For example, a regulatory feedback loop may belong in a cited biological diagram. The capabilities to read that diagram and predict a perturbation can still be taught in an acyclic order. Do not encode a protein's inhibitory effect as an edge between two learning capabilities. Keep conceptual relationships in anchored notes or lesson visuals initially; add a separate concept-map artifact only when an objective needs it.

## Biology and computation: converging branches, depth by objective

The BioSkills Guide supplies observable outcomes for quantitative reasoning, modeling, and scientific work. ISCB's competency framework varies relevant depth by role and distinguishes knowledge, skills, and attitudes. Use them to spot missing dimensions of the target performance, not to infer a universal dependency order. [BioSkills Guide](https://pmc.ncbi.nlm.nih.gov/articles/PMC8693931/), [ISCB framework v3](https://pmc.ncbi.nlm.nih.gov/articles/PMC11646570/).

A route to interpreting a plot may require biological measurement context, axes and transformations, and the limits of the inference. A route to implementing its underlying method may add array operations, statistical assumptions, and algorithmic steps. Include a branch because the chosen performance needs it, rather than because the objective belongs to “computational biology.” Mathematical learning also admits alternative methods; domain labels alone do not settle dependencies.

The map organizes components, while lesson design reconnects them in meaningful whole tasks. This follows 4C/ID's distinction between whole learning tasks and their supporting knowledge and component practice. [4C/ID](https://www.4cid.org/about/).
