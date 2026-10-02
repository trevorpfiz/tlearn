# Knowledge format

Read when creating or revising canonical `knowledge.json`. This artifact records an instructional route, not a learner's mastery state or a formal KST learning space. Store it in the learner's project beside `sources.md` and the later `lesson.json`.

## Contract

Use UTF-8 JSON with these fields:

| Field | Meaning |
| --- | --- |
| `version` | `1`, the format version |
| `revision` | Positive integer; increment when revising the saved graph |
| `status` | `ready` or `partial`; ready means the in-scope route has no open research gaps, not validated learning effectiveness |
| `objective` | Bounded observable outcome, including intended depth |
| `baseline` | Array of assumed general basics, normally everyday language and basic arithmetic |
| `scope_note` | Chosen route, important exclusions, and any split boundary |
| `target_item_ids` | Nonempty array of target capability IDs |
| `items` | Capability records below |
| `dependencies` | Required and helpful relationships below |
| `research_gaps` | Open or resolved questions below; use an empty array when none exist |
| `alternative_routes` | Optional array of concise notes about credible alternatives, not additional mandatory branches |

Keep IDs stable across rewording. Give a substantively different capability a new ID, then update its consumers. Schema version and graph revision serve different purposes: `lesson.json.knowledge_revision` binds authored content to the exact graph revision. After a graph change, review affected content and renew that binding before rebuilding HTML; do not merely increment the lesson field without review.

Each **item** has `id`, `label`, `capability`, and `source_refs`. The label is short enough to display; the capability describes an observable action, including conditions when needed. An item with no incoming required dependency also needs `entry_reason`: why its initial instruction requires only the baseline. In a partial graph, a root may lack this reason only when an open research gap explicitly names it; its foundations remain unresolved. Optional string `notes` preserve distinctions, simplifications, or conceptual relationships with their source anchors.

Each **dependency** has `from`, `to`, `kind`, `basis`, `rationale`, and `source_refs`:

- Direction is prerequisite → dependent capability.
- `kind` is `required` or `helpful`. Required edges form a directed acyclic graph; only they constrain teaching order. Helpful links may connect parallel branches and must not become progression gates.
- An instructional order chosen for convenience or error prevention does not by itself establish a required dependency; lesson design can choose an order among parallel capabilities.
- `basis` is `source-stated` or `pedagogical-inference`. Source-stated requires a passage actually claiming the stated dependency or helpful relationship. For inference, cite the passages exposing the component steps, and explain the pedagogical judgment in `rationale`.
- Requirements apply to the selected route, depth, and method. Different valid routes are not automatically cumulative prerequisites; alternative-route notes identify supporting source IDs and locators.

Every capability and dependency needs at least one inspected source reference using `{ "source_id": "s001", "locator": "Section 2.3, worked example ..." }`. Resolve IDs through `sources.md` and use original passage locations. A mapping rationale may be inferred; the subject content still needs support. Baseline assumptions are recorded separately, rather than inventing unsourced domain nodes.

Each **research gap** has `id`, `item_ids`, `question`, `why_needed`, `depth`, `existing_source_ids`, and `status` (`open` or `resolved`). Item IDs identify affected existing capabilities, even when the request concerns a not-yet-created prerequisite. Record inspected supporting passages in the source packet when resolving a gap; update the affected graph records. Remove resolved entries when their history no longer helps, rather than growing a transcript inside the graph.

A partial graph has at least one open gap. A ready graph has none. An unresolved required foundation cannot be hidden in `scope_note` or an alternative-route note. Narrow the objective and target IDs explicitly if only a smaller supported route is ready.

Every item must reach a target through required or justified helpful links. Check direct dependencies carefully; redundant transitive edges obscure the small steps. Keep exercises, answers, section order, UI coordinates, and learner progress outside this artifact. Scientific concept maps, if needed, use separately identified concept nodes; do not attach biological `activates` or `inhibits` relations to learning-capability nodes.

## Example

This complete structural example assumes `s001` already identifies inspected teaching material on ratios and proportions in the source registry. The locators must be replaced with exact original locations from that material before use; this example supplies no evidence packet.

```json
{
  "version": 1,
  "revision": 1,
  "status": "ready",
  "objective": "Compare two proportions of counted objects and explain why the totals matter.",
  "baseline": ["everyday language", "basic arithmetic"],
  "scope_note": "Compare known counts; exclude sampling uncertainty and statistical inference.",
  "target_item_ids": ["k-compare-proportions"],
  "items": [
    {
      "id": "k-proportion",
      "label": "Part and whole",
      "capability": "Choose the relevant whole and express a part as a share of it.",
      "entry_reason": "Instruction introduces part and whole using familiar counted objects and basic division.",
      "source_refs": [{"source_id": "s001", "locator": "Inspected definition and example of a proportion"}]
    },
    {
      "id": "k-compare-proportions",
      "label": "Compare shares",
      "capability": "Compare shares with different totals and justify the comparison rather than comparing raw counts.",
      "source_refs": [{"source_id": "s001", "locator": "Inspected example comparing proportions"}]
    }
  ],
  "dependencies": [
    {
      "from": "k-proportion",
      "to": "k-compare-proportions",
      "kind": "required",
      "basis": "pedagogical-inference",
      "rationale": "The selected comparison procedure computes each share using its relevant whole.",
      "source_refs": [{"source_id": "s001", "locator": "Inspected comparison procedure"}]
    }
  ],
  "research_gaps": [],
  "alternative_routes": []
}
```

## Verification and handoff

Run `python3 <skill-dir>/scripts/validate_graph.py <project>/knowledge.json`. It checks JSON shape, unique IDs, references within the graph, required cycles, target relevance, entry reasons, and gap/status consistency. It does not inspect the source registry, confirm passage locations, or validate prerequisite judgments.

Separately verify source IDs and passages against the packet, reconsider uncertain edges, and trace a target task for hidden prerequisites. Save the graph before design-learning writes the content. The HTML stage may display it and embed a derived copy for one-file delivery, while canonical graph and lesson files remain editable independently. Do not add a runtime network or local server requirement solely to preserve separate authoring artifacts.
