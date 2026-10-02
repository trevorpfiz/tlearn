---
source_id: "s018"
title: "GenomeTools gt gff3validator manual"
creators: ["GenomeTools authors"]
kind: "official tool documentation"
roles: ["software","method"]
canonical_url: "https://genometools.org/tools/gt_gff3validator.html"
identifiers: {}
version: "Unversioned manual inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "NAME; SYNOPSIS; DESCRIPTION (-typecheck, -xrfcheck)"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# GenomeTools gt gff3validator manual

## Appraisal for this packet

- **Fit — Strong:** concrete GFF3 validation route.
- **Authority — Strong:** primary GenomeTools maintainers.
- **Support — Strong:** options and ontology dependency stated.
- **Currency — Adequate:** copyright through 2023; no installed release checked.
- **Clarity — Strong:** short command synopsis.

## Inspected source statements

- **NAME/SYNOPSIS:** `gt gff3validator annotation.gff3` is a dedicated strict GFF3 validator.
- **DESCRIPTION / -typecheck:** an OBO ontology can check feature parent-child relationships; without an argument the documented option uses bundled sofa.obo.
- **-xrfcheck:** validates Dbxref and Ontology_term syntax against abbreviation definitions.
- `gt gff3validator -typecheck sofa.obo annotation.gff3` makes the selected ontology dependency explicit; actual pathname/version must be recorded.
- These optional checks address relationships and annotation vocabulary, not evidence that the biological annotation is correct.

## Pedagogical inference and limits

Keep the original file; run the validator without automatic repair. If the example is only an excerpt, unresolved references in that excerpt are not evidence about the unseen complete file.
