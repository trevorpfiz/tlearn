**From one paper to understanding and reconstruction**

Research note, October 1, 2026. This extends the philosophy in tlearn's README and the proposed skill structure. The workflow below is a research-informed design proposal; the studies cited do not establish that an automatically generated tool can teach an arbitrary paper through to independent reconstruction.

The strongest approach is to make the paper the target of a learning journey, with observable performance defining its destination. Starting with one paper should trigger discovery of the supporting knowledge and resources. The resulting HTML tool should help a learner explain the argument, reason about the method, interpret the evidence, and reconstruct a meaningful part of the work.

**What the research supports**

Your existing emphasis on brief instruction, prerequisites, practice, feedback, and independent application fits this vision. Justin Skycak's biology account describes short information-and-exercise cycles and the need to keep an LLM's teaching behavior structured. It is a useful practitioner account, rather than a controlled evaluation of that approach. [Skycak's biology learning account](https://www.justinmath.com/q-and-a-4/).

| Finding | Evidence and its limits | Implication for tlearn |
| --- | --- | --- |
| Retrieval and distributed practice deserve a central role. | Dunlosky et al.'s review rated practice testing and distributed practice highly across varied conditions. It rated self-explanation and interleaving as promising but more conditional. | Require learner attempts; revisit useful earlier material; provide optional later review for durable retention. [Dunlosky et al., 2013](https://www.psychologicalscience.org/journals/pspi/1529100612453266/). |
| A knowledge map benefits from retrieval activities. | Karpicke and Blunt found retrieval practice outperformed elaborative concept mapping for their science-text tasks, including inference questions. This does not make all concept maps ineffective. | Use the graph for navigation and sequencing, then ask learners to reconstruct relationships and use them. [Karpicke and Blunt, 2011](https://pubmed.ncbi.nlm.nih.gov/21252317/). |
| Interface activity and cognitive engagement differ. | ICAP distinguishes passive, active, constructive, and interactive engagement, with caveats about how behaviors reflect cognition. | Make visualizations elicit a prediction, explanation, comparison, or correction. A slider needs a learning task around it. [Chi and Wylie, 2014](https://education.asu.edu/sites/default/files/lcl/chiwylie2014icap_2.pdf). |
| Complex competence requires integrated tasks. | The 4C/ID model combines learning tasks, supportive information, procedural information, and part-task practice. It is a design framework for complex skills. | Combine small prerequisite exercises with progressively harder versions of the paper's actual work; provide procedural help when needed and fade it. [4C/ID model](https://www.4cid.org/about/). |
| Research expertise includes strategic judgment. | Cognitive apprenticeship makes expert reasoning visible through modeling, coaching, scaffolding, articulation, reflection, and exploration. | Teach decisions about assumptions, controls, debugging, and evidence alongside definitions and procedures. [Collins, Brown, and Holum, 1991](https://www.aft.org/ae/winter1991/collins_brown_holum). |
| Structured AI tutoring can improve learning. | Kestin et al.'s randomized study involved 194 undergraduate physics students and two lessons. It found greater immediate learning gains with a designed tutor; it did not establish long-term research competence. | Encode lesson progression in the tool and use checked solutions and focused feedback. [Kestin et al., 2025](https://www.nature.com/articles/s41598-025-97652-6). |
| Assisted success can conceal weak independent learning. | Bastani et al.'s field experiment involved nearly 1,000 high school math students. Unrestricted AI improved practice performance but reduced performance after removal; a tutor with instructional safeguards largely mitigated that harm. | Record assistance and test fresh tasks without AI-generated solutions or hints. [Bastani et al., 2025](https://www.pnas.org/doi/10.1073/pnas.2422633122). |
| Automatically transformed learning materials are promising. | Google's Learn Your Way study involved 60 students and one textbook topic. The reported delayed-test scores were 78% versus 67% after 3–5 days. The bundled intervention cannot establish which individual features caused the improvement. | Treat generated interactive materials as feasible, then evaluate tlearn on its own learning outcomes. [Google Research, 2025](https://research.google/blog/learn-your-way-reimagining-textbooks-with-generative-ai/), [research publication record](https://research.google/pubs/an-experimental-evaluation-of-an-ai-powered-interactive-learning-platform/). |

These findings support an overall design direction. They do not establish a universal ratio of explanation, visualization, quizzes, and projects. Choose each activity for the capability it develops and the evidence it provides.

**Define what “grasping and recreating” means**

Use a capability ladder with separate evidence at each level:

1. Explain the research question, contribution, main assumptions, and limits.
2. Interpret the key notation, figures, measurements, and methods.
3. Predict how a change in an input, assumption, or design choice affects the result, and justify the prediction.
4. Derive or implement a simplified core method and verify it on a small example.
5. Reconstruct a selected result with available resources and explain discrepancies.
6. Design a useful extension, ablation, control, or independent replication attempt.

A toy reconstruction, execution of author code, independent implementation, and a new empirical study demonstrate different capabilities. In the National Academies' terminology, computational reproducibility uses the same data and analytical conditions; replicability concerns consistent results from studies with their own data. State the intended outcome in the paper's domain and record what was actually accomplished. [National Academies, 2019](https://www.nationalacademies.org/read/25303/chapter/3).

For a theoretical paper, reconstruction might mean rebuilding a proof and recognizing when its assumptions fail. For an algorithm paper, it could mean implementing the central method and regenerating a selected comparison. For laboratory research, an HTML tool can support conceptual preparation, data analysis, and study design; practical competence also depends on equipment, supervised experience, and access to materials.

One paper can be the only new user input. Assume general basics and teach the necessary domain foundations in the opening sections, which learners can mark complete in one click. A learner profile or preliminary diagnostic is unnecessary. Generation can be quick even when the necessary learning spans many sessions.

**Represent three connected layers in one reusable artifact**

| Layer | Contents | Question it answers |
| --- | --- | --- |
| Paper and evidence | Claims, assumptions, definitions, equations, methods, datasets, figures, limitations, and their source locations | What does the paper argue, and what supports each part? |
| Learning prerequisites | Observable capabilities and the dependencies needed to acquire them | What must this learner be able to do next? |
| Reconstruction tasks | Inputs, procedures, outputs, checks, resources, and dependencies for rebuilding selected results | What work demonstrates the capability? |

This is a proposed tlearn representation. A relationship such as “method evaluated on dataset” differs from “learner needs skill A before skill B.” Scientific information extraction research such as SciREX addresses document-level entities and relations; pedagogical dependency inference is a separate research problem. [SciREX](https://aclanthology.org/2020.acl-main.670/), [prerequisite relation learning](https://aclanthology.org/P17-1133/).

Make instructional nodes assessable. Replace a node labeled “normalization” with a capability such as “explain how this normalization changes the interpretation of a comparison, and apply it to a small dataset.” The appropriate granularity is the smallest meaningful capability that can be practiced and checked, while still connecting to the paper's work.

For each instructional node, preserve a stable ID, capability statement, source anchors, prerequisite groups, a practice check, likely misconceptions, and links to reconstruction tasks. Preserve typed edges, their rationale, and whether they are explicit in a source or inferred for teaching. Separate “required” from “helpful,” and allow alternative prerequisite routes when appropriate. Review cycles in required prerequisites; broader scientific relationships can legitimately be cyclic.

For each claim, distinguish author-reported findings from background, teaching analogies, design inferences, and unresolved questions. A citation should identify a supporting passage, equation, table, or figure. Record paper versions and source locations so later corrections can be traced. An LLM's confidence alone should not determine whether an edge or claim is accepted.

Knowledge Space Theory concerns feasible knowledge states and their assessment, extending beyond an ordinary prerequisite graph. It can inform later adaptive work. Initially, tlearn can use a bounded capability graph, foundational sections, and ordinary practice checks, consistent with the preference for narrow tools. [Doignon and Falmagne, 2015](https://arxiv.org/abs/1511.06757).

**Use a staged workflow with explicit outputs**

1. **Read and inspect the paper.** Preserve sections, notation, equations, tables, figure captions, references, and supplements. Verify critical extracted material against the original. Record available code and data, missing information, and the source version. Output: a source record and structured paper brief.
2. **Choose demonstration tasks.** Identify the central contributions and define how the learner would demonstrate understanding. Select an initial reconstruction target and inventory its practical requirements. Output: a scope and reconstruction plan with acceptance criteria.
3. **Work backward to prerequisites.** Decompose the target tasks into capabilities. Research missing foundations using authoritative textbooks, documentation, reviews, and original research where relevant. Expand only dependencies that matter to the declared route. Stop at the learner's starting level, group excessive detail into modules, and split an oversized journey into sessions. Output: a sourced graph and an explicit list of unresolved gaps.
4. **Design the learning route.** Begin with foundational sections learners can mark complete in one click. Introduce the whole problem early, then alternate focused foundation work with manageable versions of the target task. Output: a lesson specification linking every activity to a capability and paper anchor.
5. **Create and check practice.** Write worked examples, partial solutions, retrieval prompts, prediction tasks, code or derivation exercises, feedback, and independent transfer checks. Solve and validate the tasks before publishing them. Output: a practice bank with checked answers and rubrics.
6. **Build the HTML tool.** Render the specification with a reusable shell and the small number of interactions this paper needs. Keep the source artifacts available for revision. Output: the learning tool and its companion resources.
7. **Verify and evaluate.** Check source fidelity, prerequisite coverage, answer validity, simulation behavior, interaction state, and accessibility. Evaluate whether learners improve on fresh tasks and can complete the selected reconstruction. Output: a quality report and learning evidence.

These stages are workflow responsibilities. They can run sequentially in one agent and resume from saved artifacts. A revised exercise should require only the affected stages to run again.

**Design the lesson around attempts and increasing independence**

A useful default cycle is a brief explanation or worked example, a learner attempt, targeted feedback, and a new attempt with less support. Follow with a changed example and return to the relevant part of the paper. This cycle is a proposed implementation of the research above, rather than a fixed universal prescription.

For a paper introducing an algorithm, the route could begin with an input/output example and the main comparison. The learner then practices a necessary component, predicts a result on a tiny case, completes missing implementation steps, and builds the core method. Finally, they compare it with a baseline and explain a failure case or ablation. Larger dependencies can be taught through linked modules using the same pattern.

Keep recall concise for terminology and recurring facts. Use derivation, code, prediction, interpretation, and justified critique for the higher capabilities. Provide optional hints and worked solutions, record their use, and follow assisted tasks with fresh unaided tasks. Independence means the learner supplies the reasoning; normal scientific resources such as a formula sheet or library documentation can be allowed when the task calls for them.

Progress should distinguish exposure, success with help, and independent performance. Claims of retention require a later check. Local mastery criteria should reflect the skill and consequences of mistakes; a universal pass percentage or one correct answer is insufficient evidence for every capability.

The interface should foreground one meaningful current task, with nearby feedback and an obvious next action. Reveal the relevant neighborhood of the graph on demand. Use the full graph for orientation and exploration. Simulations should ask learners to predict before observing, then explain what changed. Show where a simplified model omits important features of the actual research. Minimal visual design should reduce interface effort while preserving the effort needed to reason.

**Reuse technical components selectively**

| Component | Useful starting point | Recommended role |
| --- | --- | --- |
| Structured document conversion | Docling represents document hierarchy, tables, pictures, layout, and provenance. | A candidate PDF ingestion component to evaluate on representative papers, with inspection of critical equations and figures. [Docling documentation](https://docling-project.github.io/docling/concepts/docling_document/). |
| Scholarly metadata and reference parsing | GROBID extracts scholarly documents into structured XML/TEI. | Add where bibliography and reference resolution justify the extra component. [GROBID](https://github.com/grobidOrg/grobid). |
| Scientific research and evidence gathering | PaperQA supports paper search, evidence gathering, and cited answers. | Borrow or integrate its research workflow when corpus scale warrants it; validate its outputs for teaching. [PaperQA repository](https://github.com/Future-House/paper-qa). |
| Reconstruction assessment | PaperBench decomposes research reconstruction into hierarchical, individually gradable tasks. | Borrow the rubric pattern for learner milestones. Its agent benchmark evaluates reconstruction rather than human learning. [PaperBench paper](https://arxiv.org/abs/2504.01848). |
| Small simulations and exercises | A reusable HTML/CSS/JavaScript shell | Default to this for portable lessons and browser-sized examples. This is an engineering recommendation. |
| Browser Python | Pyodide and JupyterLite provide browser computation; Python compatibility and browser capabilities have limits. | Add optional Python labs when they serve the target capability. Validate required packages and deployment conditions. [JupyterLite](https://jupyterlite.readthedocs.io/en/stable/), [Pyodide compatibility](https://pyodide.org/en/stable/usage/wasm-constraints.html). |

Start with ordinary JSON artifacts and stable IDs. Introduce a graph database, embeddings, or a broader retrieval system when reuse and corpus size make them useful. The graph's teaching quality comes from its capabilities, evidence, and validated dependencies.

Keep core content and checked feedback usable without a live model. An optional tutor can handle follow-up explanation within the current task. Larger computational work can use a companion notebook or repository with documented inputs, environment, commands, and validation criteria. The HTML tool remains the teaching interface even when the experiment runs elsewhere.

Preserve original source files where practical, compact source notes, graph data, lesson specifications, and checked practice. Cache by source version and regenerate affected pieces. A portable tool can be a self-contained HTML file for simpler lessons; runtime-heavy labs are better delivered as a small static bundle with explicit dependencies. Export learner progress so a one-off tool can support several sessions and optional later review.

**Extend the existing skill stack with clear contracts**

| Skill | Responsibility | Observable completion check |
| --- | --- | --- |
| `upskill` with a paper playbook | Coordinate stages, select scope, manage artifacts and research bounds | Every selected target has a route, resources, and assessment criteria |
| New `read-paper` | Extract the argument, methods, notation, evidence, limitations, and available resources | Critical details retain source anchors and extraction problems are recorded |
| Existing `research-topic` | Supply missing foundations and resolve content uncertainties | Required gaps have adequate sources or remain explicitly unresolved |
| Existing `map-knowledge` | Build the capability and prerequisite layer and connect it to paper evidence | Nodes are assessable; dependency types and inferences are explicit |
| New `plan-reconstruction` | Define toy examples, reconstruction milestones, resources, and comparisons | Inputs, outputs, checks, and missing practical requirements are explicit |
| Existing `design-lesson` and `create-practice` | Sequence integrated tasks and small practice, with fading support and transfer | Activities map to capabilities; answers and rubrics have been checked |
| Existing `build-learning-tool` | Render the lesson using reusable accessible interactions | Learner attempts, feedback, hints, and progress work coherently |
| Existing `review-learning-resource` | Audit scientific fidelity, instructional coverage, grading, and behavior | Findings distinguish verified checks from untested learning claims |

Use templates and schemas to enforce these contracts. Keep principle guidance short and load references only when needed. Reuse the principles already proposed; the paper-specific additions are to connect components to whole tasks, fade assistance, teach scientific judgment, and verify reconstruction. Pilots should establish which rules deserve separate principle skills.

**Build and evaluate a narrow end-to-end pilot first**

Begin with one computational or theoretical paper with clear methods and accessible resources, the default basic starting assumption, and one central reconstruction target. The tool should still orient the learner to the paper's overall argument and mark which contributions its learning route covers.

First define the source, graph, reconstruction, lesson, and practice formats. Run the workflow with direct inspection before automating every stage. Build one complete example, learn where the representations break down, and then codify the successful steps into skills. This keeps the skill library grounded in actual use.

Evaluate three dimensions separately:

- **Scientific reliability:** inspect central claims, equations, extracted tables, instructional dependencies, answer keys, and computational checks against the sources.
- **Learning:** compare fresh pre/post tasks, include a delayed assessment when retention matters, and score the selected reconstruction with explicit criteria. Track hint use and separate learner performance from agent-generated output.
- **Practical cost:** record learner time, generation time and tokens, correction effort, interaction failures, and artifact reuse.

When feasible, compare with the paper and ordinary study notes at similar study time. Use unfamiliar examples and an assessor or checks independent of the generation process. Small pilots provide formative evidence; they do not justify a universal effectiveness claim.

Expand next to a second paper in the same domain to test reuse, then a different domain to test portability. Add richer adaptive assessment, broader source discovery, or ongoing spaced review when the learning evidence and actual user needs justify them.

The proposed guiding principle is: **organize a paper's knowledge around what the learner must independently explain, predict, build, and evaluate; connect every learning activity to that work and its evidence.**
