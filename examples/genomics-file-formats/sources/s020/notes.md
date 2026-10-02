---
source_id: "s020"
title: "Gfapy 1.2.3 documentation: validation and graph construction"
creators: ["Gfapy / Giorgio Gonnella"]
kind: "official tool documentation"
roles: ["software","method"]
canonical_url: "https://gfapy.readthedocs.io/en/latest/tutorial/validation.html"
identifiers: {}
version: "Gfapy 1.2.3 documentation"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Validation levels; The Gfa class: from_file/version/validation"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Gfapy 1.2.3 documentation: validation and graph construction

## Appraisal for this packet

- **Fit — Strong:** provides a real graph-parser validation route.
- **Authority — Strong:** primary project's own documentation.
- **Support — Strong:** validation levels and manual checks explicit.
- **Currency — Adequate:** old selected version; supports the taught v1.0 subset, not claimed current GFA1.2 coverage.
- **Clarity — Adequate:** Python route is for future operators, not needed by browser learner.

## Inspected source statements

- **[Validation](https://gfapy.readthedocs.io/en/latest/tutorial/validation.html):** vlevel 0 disables checks;1 validates reading;2 reading/writing;3 continuous validation.
- **[The Gfa class](https://gfapy.readthedocs.io/en/latest/tutorial/gfa.html):** `gfapy.Gfa.from_file("assembly.gfa", vlevel=3)` constructs/checks a graph from a file; field and graph validation can be invoked explicitly.
- Tool/version and chosen GFA grammar determine accepted extensions. Do not assume this documented version recognizes all later1.1/1.2 additions.
- A parser's success does not establish that the assembly graph is biologically accurate.

## Pedagogical inference and limits

Optional operational route for the explicit GFA1.0 examples. It is not an in-browser validator dependency. Use specification-derived checks to interpret messages and distinguish unsupported newer records from corrupt graphs.
