---
name: map-knowledge
description: Build or revise a sourced capability and prerequisite graph for a focused learning objective. Use before lesson authoring to discover foundations, distinguish required dependencies from helpful context, and request targeted research for missing prerequisites.
---
# Map knowledge

Produce canonical `knowledge.json` in the learner's project before learning content or HTML construction. Map what must be learned for a bounded outcome; exercises and learner completion belong to later artifacts.

## Define the route

Read the objective and coverage in `sources.md`, then relevant inspected notes. Reuse an existing graph where its objective, depth, and evidence still fit. Apply [objective and foundations](../principle-objective-and-foundations/SKILL.md). If the source packet is missing, use [research-topic](../../research/research-topic/SKILL.md) first.

State an observable outcome and its depth: explaining a method, interpreting results, deriving it, and implementing it need different routes. Assume everyday language and basic arithmetic unless the user specifies otherwise. Teach domain fundamentals as ordinary opening capabilities; familiarity is not presumed from the topic's name.

Work backward from target capabilities. Make each item a small, meaningful capability that could support instruction and several exercise instances. Split an item when it hides distinct prerequisite steps or different failure causes; combine trivia that cannot usefully be practiced alone. Keep stable IDs and merge equivalent capabilities across branches. A topic label such as “statistics” is not an atomic item.

## Review dependencies

For each candidate prerequisite, ask: what action in the chosen target task needs this capability, and could the intended lesson reasonably teach that action without it? Record the reason and supporting passages. A source's teaching order is evidence to consider, not proof of necessity.

- **Required:** needed for the selected route, depth, and method. These edges determine sequencing.
- **Helpful:** useful context or reinforcement. These edges do not impose order.
- **Alternative route:** a credible different way to reach the outcome. Record it briefly rather than requiring both routes' foundations.

Mark whether a dependency is source-stated or a pedagogical inference. A citation supporting the component skills does not establish that the edge has been empirically validated. Avoid adding every transitive ancestor as another direct edge.

Prefer a helpful link or a later lesson-order choice when the reason is simply “teach this first to prevent confusion.” If two capabilities can be taught from the same foundations, keep them parallel; their later combination does not make one a prerequisite of the other.

Use the same contract across domains. Mathematics may need notation, procedures, and reasoning steps; computational biology may combine mechanisms, measurement, quantitative interpretation, and computation. Map only the branches demanded by the outcome, coordinating their foundations as they converge. Biological activation, inhibition, or feedback describes relationships between concepts, not prerequisite arrows between capabilities; retain these in cited notes and later lesson visuals. Consult [mapping rationale](references/mapping-rationale.md) when choosing granularity or handling domain differences.

## Resolve foundations recursively

Maintain a worklist of unreviewed items. Inspect how each capability is explained or performed, identify its essential component steps, and review their foundations. Expand required gaps and useful supporting items, reusing equivalent nodes and previously inspected passages.

When evidence is missing, send research-topic a targeted request: item ID or provisional capability, unresolved question, required depth, why the target needs it, and relevant existing source IDs. Merge returned passages into the source packet, reconsider the affected items and edges, then continue backward. Research may change the proposed route; do not preserve an unsupported dependency merely because it was generated first.

Stop a branch only when its entry capability can be taught from the stated baseline, with an explicit reason. Domain terminology, algebra, probability, or programming cannot silently become assumed basics. If foundations exceed a practical tool, split the objective into linked tools with an explicit boundary. Do not mark an unmet prerequisite as covered by a future tool.

Avoid repeating an unsuccessful search without a new question, query, or source lead. Record unresolved gaps and save a partial graph; revise scope or seek the specific missing information. A partial graph can preserve progress but cannot support a claim that dependent lesson content is complete.

## Save and check

Read [knowledge format](references/knowledge-format.md) when writing the graph. Check that each retained item serves a target, sources resolve, and required edges are acyclic. Ready entry capabilities must reach the baseline; unresolved roots in a partial graph need explicit open gaps. Trace a fresh target task backward to catch hidden assumptions; reconsider uncertain edges.

Run `python3 <skill-dir>/scripts/validate_graph.py <project>/knowledge.json` for structural checks, then review source fidelity and pedagogical judgments yourself. The script cannot verify scientific correctness or prerequisite necessity.

Hand off the saved graph revision, source index, and any remaining gaps to [design-learning](../../learning/design-learning/SKILL.md). Later stages consume these artifacts; proposed structural changes return here instead of becoming an undocumented graph inside the HTML.
