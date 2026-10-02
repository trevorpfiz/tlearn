#!/usr/bin/env python3
"""Check saved artifact structure; scientific and learning judgments need review."""

import argparse
import importlib.util
import json
import math
import re
from pathlib import Path


def graph_validator():
    path = (Path(__file__).resolve().parents[3] / "knowledge" / "map-knowledge"
            / "scripts" / "validate_graph.py")
    spec = importlib.util.spec_from_file_location("tlearn_graph_validator", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.validate


def is_string(value):
    return isinstance(value, str) and bool(value.strip())


def is_number(value):
    if type(value) not in (int, float):
        return False
    try:
        return math.isfinite(value)
    except OverflowError:
        return False


class Checks:
    def __init__(self, project):
        self.project = project
        self.errors = []

    def require(self, condition, context, message):
        if not condition:
            self.errors.append(f"{context}: {message}")

    def string(self, value, context):
        self.require(is_string(value), context, "nonempty string required")

    def strings(self, value, context, nonempty=False, unique=False):
        if not isinstance(value, list):
            self.errors.append(f"{context}: array of strings required")
            return []
        valid = [v for v in value if is_string(v)]
        self.require(len(valid) == len(value), context, "nonempty strings required")
        self.require(bool(value) or not nonempty, context, "array cannot be empty")
        if unique:
            self.require(len(set(valid)) == len(valid), context, "IDs must be unique")
        return valid

    def records(self, value, context, nonempty=False):
        if not isinstance(value, list):
            self.errors.append(f"{context}: array of objects required")
            return []
        valid = [v for v in value if isinstance(v, dict)]
        self.require(len(valid) == len(value), context, "each entry must be an object")
        self.require(bool(value) or not nonempty, context, "array cannot be empty")
        return valid

    def object(self, value, context):
        self.require(isinstance(value, dict), context, "object required")
        return value if isinstance(value, dict) else {}

    def refs(self, value, context):
        refs = self.records(value, f"{context}.source_refs")
        for index, ref in enumerate(refs):
            where = f"{context}.source_refs[{index}]"
            source_id = ref.get("source_id")
            self.string(ref.get("locator"), f"{where}.locator")
            safe = is_string(source_id) and re.fullmatch(r"[A-Za-z0-9][A-Za-z0-9._-]*", source_id)
            self.require(bool(safe), where, "source_id must be a safe single path component")
            if safe:
                path = self.project / "sources" / source_id / "notes.md"
                self.require(path.is_file(), where, f"missing sources/{source_id}/notes.md")

    def item_ids(self, value, context, graph_ids):
        ids = self.strings(value, context, nonempty=True, unique=True)
        for item_id in ids:
            self.require(item_id in graph_ids, context, f"unknown graph item {item_id!r}")
        return ids


def check_lesson(checks, lesson, graph):
    checks.require(isinstance(lesson, dict), "lesson.json", "JSON object required")
    if not isinstance(lesson, dict) or not isinstance(graph, dict):
        return
    checks.require(type(lesson.get("version")) is int and lesson["version"] == 1,
                   "lesson.json.version", "must be 1")
    checks.require(graph.get("status") == "ready", "knowledge.json.status",
                   "a completed lesson requires a ready graph")
    revision = lesson.get("knowledge_revision")
    checks.require(type(revision) is int and revision > 0 and revision == graph.get("revision"),
                   "lesson.json.knowledge_revision", "must match the saved graph revision")
    checks.string(lesson.get("objective"), "lesson.json.objective")
    checks.strings(lesson.get("baseline"), "lesson.json.baseline", nonempty=True, unique=True)
    checks.require(lesson.get("baseline") == graph.get("baseline"),
                   "lesson.json.baseline", "must match the graph baseline")
    targets = checks.strings(lesson.get("target_item_ids"), "lesson.json.target_item_ids",
                             nonempty=True, unique=True)
    graph_targets = graph.get("target_item_ids")
    graph_targets = graph_targets if isinstance(graph_targets, list) else []
    checks.require(set(targets) == set(v for v in graph_targets if is_string(v)),
                   "lesson.json.target_item_ids", "must match the graph target set")
    navigation = checks.object(lesson.get("navigation"), "lesson.json.navigation")
    checks.require(navigation == {"completion": "manual", "reopen": True, "gating": "none"}
                   and navigation.get("reopen") is True, "lesson.json.navigation",
                   "must declare manual completion, reopen true, and no gating")
    notes = lesson.get("verification_notes")
    checks.require(is_string(notes) or (isinstance(notes, list) and bool(notes)
                   and all(is_string(v) for v in notes)), "lesson.json.verification_notes",
                   "nonempty string or nonempty array of strings required")

    graph_items = graph.get("items")
    graph_items = graph_items if isinstance(graph_items, list) else []
    graph_ids = {item.get("id") for item in graph_items
                 if isinstance(item, dict) and is_string(item.get("id"))}
    sections = checks.records(lesson.get("sections"), "lesson.json.sections", nonempty=True)
    section_ids = checks.strings([s.get("id") for s in sections], "section IDs", unique=True)
    section_positions = {s.get("id"): index for index, s in enumerate(sections)
                         if is_string(s.get("id"))}
    tasks, visual_links, revisit_links = {}, [], []
    instruction, practice, application = set(), set(), set()

    for index, section in enumerate(sections):
        where = f"section[{index}] ({section.get('id', '?')})"
        checks.string(section.get("title"), f"{where}.title")
        ids = checks.item_ids(section.get("item_ids"), f"{where}.item_ids", graph_ids)
        required = checks.strings(section.get("required_section_ids"),
                                  f"{where}.required_section_ids", unique=True)
        for required_id in required:
            checks.require(required_id in section_positions, where,
                           f"unknown required section {required_id!r}")
            if required_id in section_positions:
                checks.require(section_positions[required_id] < index, where,
                               f"required section {required_id!r} must precede this section")
        blocks = checks.records(section.get("blocks"), f"{where}.blocks", nonempty=True)
        for block_index, block in enumerate(blocks):
            context = f"{where}.block[{block_index}]"
            kind = block.get("kind")
            checks.refs(block.get("source_refs"), context)
            if kind == "explanation":
                checks.string(block.get("text"), f"{context}.text")
                instruction.update(ids)
            elif kind == "worked-example":
                checks.string(block.get("prompt"), f"{context}.prompt")
                checks.string(block.get("origin"), f"{context}.origin")
                for step_index, step in enumerate(checks.records(block.get("steps"),
                                                  f"{context}.steps", nonempty=True)):
                    for field in ("name", "text"):
                        checks.string(step.get(field), f"{context}.step[{step_index}].{field}")
                    if "reason" in step:
                        checks.string(step["reason"], f"{context}.step[{step_index}].reason")
                instruction.update(ids)
            elif kind == "visual":
                for field in ("purpose", "representation", "task_id"):
                    checks.string(block.get(field), f"{context}.{field}")
                visual_links.append((context, block.get("task_id")))
            elif kind == "task":
                task_id = block.get("id")
                checks.string(task_id, f"{context}.id")
                if is_string(task_id):
                    checks.require(task_id not in tasks, context, f"duplicate task ID {task_id!r}")
                    tasks[task_id] = block
                task_items = checks.item_ids(block.get("item_ids"), f"{context}.item_ids", graph_ids)
                role = block.get("role")
                checks.require(role in ("practice", "mixed-review", "application"), context,
                               "task role must be practice, mixed-review, or application")
                if role in ("practice", "mixed-review"):
                    practice.update(task_items)
                elif role == "application":
                    application.update(task_items)
                check_task(checks, block, context)
                if "retry_task_id" in block:
                    checks.string(block["retry_task_id"], f"{context}.retry_task_id")
                if "revisit_section_ids" in block:
                    for section_id in checks.strings(block["revisit_section_ids"],
                                                   f"{context}.revisit_section_ids", unique=True):
                        revisit_links.append((context, section_id))
            else:
                checks.errors.append(f"{context}: unknown block kind {kind!r}")

    for context, task_id in visual_links:
        checks.require(is_string(task_id) and task_id in tasks, context,
                       "visual task_id must reference an authored task")
    for context, section_id in revisit_links:
        checks.require(section_id in section_ids, context,
                       f"unknown revisit section {section_id!r}")
    retry_edges = {}
    for task_id, task in tasks.items():
        if "retry_task_id" in task:
            retry = task["retry_task_id"]
            checks.require(is_string(retry) and retry in tasks, f"task {task_id}",
                           "retry_task_id must reference an authored task")
            if is_string(retry) and retry in tasks:
                retry_edges[task_id] = retry
    visited = set()
    for task_id in retry_edges:
        path, current = set(), task_id
        while current in retry_edges and current not in visited:
            if current in path:
                checks.errors.append(f"task {task_id}: retry links contain a cycle")
                break
            path.add(current)
            current = retry_edges[current]
        visited.update(path)
    for label, coverage in (("instruction", instruction), ("practice", practice),
                            ("application", application)):
        for target in targets:
            checks.require(target in coverage, f"target {target!r}",
                           f"missing declared {label} coverage")


def check_task(checks, task, context):
    for field in ("prompt", "origin"):
        checks.string(task.get(field), f"{context}.{field}")
    checks.strings(task.get("hints"), f"{context}.hints")
    feedback = checks.object(task.get("feedback"), f"{context}.feedback")
    for field in ("correct", "otherwise"):
        checks.string(feedback.get(field), f"{context}.feedback.{field}")
    if "patterns" in feedback:
        for index, pattern in enumerate(checks.records(feedback["patterns"],
                                                      f"{context}.feedback.patterns")):
            for field in ("when", "text"):
                checks.string(pattern.get(field), f"{context}.feedback.pattern[{index}].{field}")
    response = checks.object(task.get("response"), f"{context}.response")
    answer = checks.object(task.get("check"), f"{context}.check")
    kind = response.get("kind")
    if kind == "number":
        checks.require(answer.get("kind") == "number", context, "number response needs a number check")
        checks.require(is_number(answer.get("expected")), f"{context}.check.expected",
                       "finite non-boolean number required")
        tolerance = answer.get("absolute_tolerance")
        checks.require(is_number(tolerance) and tolerance >= 0,
                       f"{context}.check.absolute_tolerance", "finite nonnegative number required")
        checks.string(response.get("units"), f"{context}.response.units")
        checks.string(answer.get("units"), f"{context}.check.units")
        checks.require(response.get("units") == answer.get("units"), context,
                       "response and check units must match")
    elif kind == "choice":
        checks.require(answer.get("kind") == "choice", context, "choice response needs a choice check")
        options = checks.records(response.get("options"), f"{context}.response.options", nonempty=True)
        option_ids = checks.strings([o.get("id") for o in options], f"{context}.option IDs", unique=True)
        for index, option in enumerate(options):
            checks.string(option.get("text"), f"{context}.option[{index}].text")
        correct = answer.get("correct_option_id")
        checks.require(is_string(correct) and correct in option_ids, context,
                       "correct_option_id must reference a response option")
    elif kind in ("short-text", "code"):
        checks.require(answer.get("kind") == "rubric", context, "text/code responses need a rubric check")
        checks.strings(answer.get("criteria"), f"{context}.check.criteria", nonempty=True)
        checks.strings(answer.get("acceptable_alternatives"), f"{context}.check.acceptable_alternatives")
        checks.string(answer.get("sample_answer"), f"{context}.check.sample_answer")
        checks.require(answer.get("judgment") == "self-check", context,
                       "rubric judgment must be self-check")
    else:
        checks.errors.append(f"{context}: response kind must be number, choice, short-text, or code")


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project", type=Path)
    parser.add_argument("--stage", choices=("graph", "lesson"), required=True)
    args = parser.parse_args()
    project = args.project.expanduser().resolve()
    checks = Checks(project)
    try:
        source_index = (project / "sources.md").read_text(encoding="utf-8")
        checks.require(bool(source_index.strip()), "sources.md", "nonempty source index required")
    except (OSError, UnicodeError) as exc:
        checks.errors.append(f"sources.md: cannot read source index: {exc}")
    artifacts = {}
    for filename in (("knowledge.json", "lesson.json") if args.stage == "lesson" else ("knowledge.json",)):
        try:
            artifacts[filename] = json.loads((project / filename).read_text(encoding="utf-8"))
        except (OSError, ValueError, UnicodeError, RecursionError) as exc:
            checks.errors.append(f"{filename}: cannot read JSON: {exc}")
    graph = artifacts.get("knowledge.json")
    if "knowledge.json" in artifacts:
        try:
            checks.errors.extend(f"knowledge.json: {e}" for e in graph_validator()(graph))
        except (OSError, ImportError, AttributeError) as exc:
            checks.errors.append(f"graph validator: cannot load bundled checker: {exc}")
        if isinstance(graph, dict):
            for field in ("items", "dependencies"):
                records = graph.get(field)
                if isinstance(records, list):
                    for index, record in enumerate(records):
                        if isinstance(record, dict):
                            checks.refs(record.get("source_refs"), f"knowledge.json.{field}[{index}]")
    if args.stage == "lesson" and "lesson.json" in artifacts:
        check_lesson(checks, artifacts["lesson.json"], graph)
    if checks.errors:
        parser.exit(1, "\n".join(f"- {e}" for e in checks.errors) + "\n")
    if args.stage == "graph":
        open_gaps = sum(g.get("status") == "open" for g in graph["research_gaps"])
        print(f"Graph structure valid; {open_gaps} open research gap(s).")
    else:
        print("Lesson structure and declared coverage valid; graph revision and artifact links match.")
    print("Source-note presence checked. Review registry/status, passages, answers, prerequisite judgments, "
          "and learning adequacy separately; HTML behavior is not checked.")


if __name__ == "__main__":
    main()
