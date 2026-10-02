#!/usr/bin/env python3
"""Check the v1 graph contract; source fidelity and pedagogy need separate review."""

import argparse
import json
from collections import deque
from pathlib import Path


def validate(graph):
    errors = []

    def require(condition, message):
        if not condition:
            errors.append(message)

    def string(value):
        return isinstance(value, str) and bool(value.strip())

    def strings(value, nonempty=False):
        return (isinstance(value, list) and (bool(value) or not nonempty)
                and all(string(v) for v in value) and len(set(value)) == len(value))

    def records(key):
        value = graph.get(key)
        if not isinstance(value, list) or not all(isinstance(v, dict) for v in value):
            errors.append(f"{key} must be an array of objects")
            return []
        return value

    def references(value, context):
        require(isinstance(value, list) and bool(value)
                and all(isinstance(r, dict) and string(r.get("source_id"))
                        and string(r.get("locator")) for r in value),
                f"{context}: inspected source_refs with source_id and locator required")

    if not isinstance(graph, dict):
        return ["graph must be a JSON object"]
    require(type(graph.get("version")) is int and graph["version"] == 1, "version must be 1")
    require(type(graph.get("revision")) is int and graph["revision"] > 0,
            "revision must be a positive integer")
    require(graph.get("status") in ("ready", "partial"), "status must be ready or partial")
    for key in ("objective", "scope_note"):
        require(string(graph.get(key)), f"{key} must be a nonempty string")
    require(strings(graph.get("baseline"), True), "baseline must list unique assumptions")
    targets = graph.get("target_item_ids")
    require(strings(targets, True), "target_item_ids must be a nonempty array of unique IDs")
    targets = targets if strings(targets, True) else []
    if "alternative_routes" in graph:
        require(strings(graph["alternative_routes"]), "alternative_routes must be an array of unique notes")

    items = records("items")
    require(bool(items), "items cannot be empty")
    ids = [i.get("id") for i in items]
    valid_ids = [i for i in ids if string(i)]
    require(len(valid_ids) == len(ids) and len(set(valid_ids)) == len(ids),
            "item IDs must be nonempty and unique")
    item_ids = set(valid_ids)
    require(all(t in item_ids for t in targets), "target_item_ids must reference existing items")
    for item in items:
        context = f"item {item.get('id', '?')}"
        for key in ("label", "capability"):
            require(string(item.get(key)), f"{context}: {key} required")
        references(item.get("source_refs"), context)
        if "notes" in item:
            require(string(item["notes"]), f"{context}: notes must be a nonempty string")

    outgoing = {i: [] for i in item_ids}
    incoming = {i: 0 for i in item_ids}
    reverse = {i: [] for i in item_ids}
    seen_edges = set()
    for edge in records("dependencies"):
        start, end, kind = edge.get("from"), edge.get("to"), edge.get("kind")
        context = f"dependency {start!r} -> {end!r}"
        endpoints_ok = string(start) and string(end) and start in item_ids and end in item_ids
        require(endpoints_ok, f"{context}: endpoints must reference existing items")
        require(start != end, f"{context}: self-dependency is invalid")
        require(kind in ("required", "helpful"), f"{context}: invalid kind")
        require(edge.get("basis") in ("source-stated", "pedagogical-inference"),
                f"{context}: invalid basis")
        require(string(edge.get("rationale")), f"{context}: rationale required")
        references(edge.get("source_refs"), context)
        if endpoints_ok and kind in ("required", "helpful"):
            identity = (start, end, kind)
            require(identity not in seen_edges, f"{context}: duplicate {kind} dependency")
            seen_edges.add(identity)
            reverse[end].append(start)
            if kind == "required":
                outgoing[start].append(end)
                incoming[end] += 1

    gaps = records("research_gaps")
    unresolved_roots = {
        item_id for gap in gaps if gap.get("status") == "open"
        and isinstance(gap.get("item_ids"), list)
        for item_id in gap["item_ids"] if string(item_id)
    }
    for item in items:
        item_id = item.get("id")
        if string(item_id) and incoming.get(item_id) == 0:
            unresolved = graph.get("status") == "partial" and item_id in unresolved_roots
            require(string(item.get("entry_reason")) or unresolved,
                    f"item {item_id}: entry_reason or an explicit open gap required")
    remaining = dict(incoming)
    queue = deque(i for i, count in remaining.items() if count == 0)
    visited = 0
    while queue:
        visited += 1
        for dependent in outgoing[queue.popleft()]:
            remaining[dependent] -= 1
            if remaining[dependent] == 0:
                queue.append(dependent)
    require(visited == len(item_ids), "required dependencies contain a cycle")
    relevant = set(t for t in targets if t in item_ids)
    queue = deque(relevant)
    while queue:
        for predecessor in reverse[queue.popleft()]:
            if predecessor not in relevant:
                relevant.add(predecessor)
                queue.append(predecessor)
    require(relevant == item_ids, "every item must contribute to a target")

    gap_ids = [g.get("id") for g in gaps]
    require(strings(gap_ids), "research gap IDs must be nonempty and unique")
    for gap in gaps:
        context = f"gap {gap.get('id', '?')}"
        for key in ("question", "why_needed", "depth"):
            require(string(gap.get(key)), f"{context}: {key} required")
        affected = gap.get("item_ids")
        require(strings(affected, True) and all(i in item_ids for i in affected),
                f"{context}: item_ids must name affected existing items")
        require(strings(gap.get("existing_source_ids")), f"{context}: existing_source_ids required")
        require(gap.get("status") in ("open", "resolved"), f"{context}: invalid status")
    has_open = any(g.get("status") == "open" for g in gaps)
    require((graph.get("status") == "partial") == has_open,
            "partial requires open gaps; ready requires no open gaps")
    return errors


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("graph", type=Path)
    args = parser.parse_args()
    try:
        graph = json.loads(args.graph.read_text(encoding="utf-8"))
    except (OSError, ValueError) as exc:
        parser.exit(1, f"Cannot read graph: {exc}\n")
    errors = validate(graph)
    if errors:
        parser.exit(1, "\n".join(f"- {e}" for e in errors) + "\n")
    print("Graph structure valid. Review source fidelity and prerequisite judgments separately.")


if __name__ == "__main__":
    main()
