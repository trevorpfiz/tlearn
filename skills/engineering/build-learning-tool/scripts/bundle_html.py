#!/usr/bin/env python3
"""Embed fixed tlearn source files into one reproducible HTML file.

This is a packager, not a transpiler, asset crawler, or semantic verifier.
"""

import argparse
import hashlib
import json
import os
import re
import tempfile
from pathlib import Path


MARKERS = (
    "/* TLEARN_STYLES */",
    "/* TLEARN_SCRIPT */",
    "TLEARN_LESSON_JSON",
    "TLEARN_KNOWLEDGE_JSON",
    "TLEARN_BUILD_JSON",
)
MARKER_PATTERN = re.compile("|".join(re.escape(marker) for marker in MARKERS))


def reject_constant(value):
    raise ValueError(f"nonfinite JSON value {value!r}")


def unique_object(pairs):
    result = {}
    for key, value in pairs:
        if key in result:
            raise ValueError(f"duplicate JSON key {key!r}")
        result[key] = value
    return result


def load_object(raw, name):
    try:
        value = json.loads(raw.decode("utf-8"), parse_constant=reject_constant,
                           object_pairs_hook=unique_object)
        if not isinstance(value, dict):
            raise ValueError("top-level JSON object required")
        # Also reject finite JSON syntax such as 1e999 that overflows a float.
        json.dumps(value, allow_nan=False)
        return value
    except (UnicodeError, ValueError) as error:
        raise ValueError(f"{name}: {error}") from error


def embedded_json(value):
    text = json.dumps(value, ensure_ascii=False, allow_nan=False,
                      sort_keys=True, separators=(",", ":"))
    for original, escaped in (("<", "\\u003c"), (">", "\\u003e"),
                              ("&", "\\u0026"), ("\u2028", "\\u2028"),
                              ("\u2029", "\\u2029")):
        text = text.replace(original, escaped)
    return text


def guard_output(output, inputs):
    if output.is_symlink():
        raise ValueError("dist/index.html must not be a symlink")
    for source in inputs:
        same_path = output.resolve() == source.resolve()
        same_file = output.exists() and os.path.samefile(output, source)
        if same_path or same_file:
            raise ValueError(f"dist/index.html aliases input {source}")


def build(project):
    paths = {
        "template": project / "src" / "index.html",
        "styles": project / "src" / "styles.css",
        "script": project / "src" / "app.js",
        "lesson": project / "lesson.json",
        "knowledge": project / "knowledge.json",
    }
    output = project / "dist" / "index.html"
    raw = {name: path.read_bytes() for name, path in paths.items()}
    template, styles, script = (raw[name].decode("utf-8")
                                for name in ("template", "styles", "script"))
    lesson = load_object(raw["lesson"], "lesson.json")
    knowledge = load_object(raw["knowledge"], "knowledge.json")

    revision = knowledge.get("revision")
    if knowledge.get("status") != "ready" or type(revision) is not int or revision < 1:
        raise ValueError("knowledge.json requires status 'ready' and a positive integer revision")
    bound_revision = lesson.get("knowledge_revision")
    if type(bound_revision) is not int or bound_revision != revision:
        raise ValueError("lesson.json knowledge_revision must match knowledge.json revision")
    for marker in MARKERS:
        if template.count(marker) != 1:
            raise ValueError(f"src/index.html must contain {marker!r} exactly once")
    if re.search(r"</style", styles, re.IGNORECASE):
        raise ValueError("src/styles.css contains a raw </style sequence; rewrite it before embedding")
    if re.search(r"</script|<script|<!--|-->", script, re.IGNORECASE):
        raise ValueError("src/app.js contains a raw script/comment boundary; rewrite it before embedding")

    build_info = {f"{name}_sha256": hashlib.sha256(raw[name]).hexdigest()
                  for name in ("lesson", "knowledge")}
    replacements = dict(zip(MARKERS, (styles, script, embedded_json(lesson),
                                      embedded_json(knowledge), embedded_json(build_info))))
    # Substitute only original-template matches, never tokens in inserted data.
    result = MARKER_PATTERN.sub(lambda match: replacements[match.group()], template).encode("utf-8")
    guard_output(output, paths.values())
    output.parent.mkdir(parents=True, exist_ok=True)
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(dir=output.parent, prefix=".tlearn-",
                                         suffix=".tmp", delete=False) as handle:
            temporary = Path(handle.name)
            handle.write(result)
        guard_output(output, paths.values())
        os.replace(temporary, output)
    finally:
        if temporary is not None:
            temporary.unlink(missing_ok=True)
    return output


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project", type=Path, help="learner project containing src and canonical JSON")
    args = parser.parse_args()
    try:
        output = build(args.project.resolve())
    except (OSError, ValueError, UnicodeError, RecursionError) as error:
        parser.exit(1, f"ERROR: {error}\n")
    print(f"Built {output}")


if __name__ == "__main__":
    main()
