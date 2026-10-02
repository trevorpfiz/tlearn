---
source_id: "s010"
title: "Generic Feature Format Version 3 (GFF3)"
creators: ["Lincoln Stein / Sequence Ontology"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://github.com/the-sequence-ontology/specifications/blob/fe73505276dd324bf6a55773f3413fe2bed47af4/gff3.md"
identifiers: {}
version: "GFF3 specification 1.26; commit fe73505276dd324bf6a55773f3413fe2bed47af4"
published_or_updated: "2020-08-18"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Description of the Format; Columns 4–9; ID/Parent; GFF3 directives; The Canonical Gene"
status_checked_at: "2026-10-02"
status_note: "Exact source commit inspected; latest file revision identity checked through GitHub API."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Generic Feature Format Version 3 (GFF3)

## Appraisal for this packet

- **Fit — Strong:** attribute and relationship rules plus exceptions.
- **Authority — Strong:** Sequence Ontology's primary specification repository.
- **Support — Strong:** normative definitions and canonical example.
- **Currency — Strong:** exact inspected commit; latest file commit checked via GitHub API.
- **Clarity — Adequate:** long reference requires bounded examples.

## Inspected source statements

- **Description/Columns:** nine tab-separated columns; positive 1-based start ≤ end, with specified circular/zero-length exceptions. Strand allows +, -, ., ?.
- **Column 8:** CDS phase is required and is 0/1/2, counted from the strand-relative 5′ end; it is not simply genomic coordinate modulo three.
- **Column 9:** attributes use tag=value separated by semicolons; reserved characters require percent escaping. Quotes are literal content, not GTF-style delimiters.
- **ID/Parent:** ID is required for features with children or spanning rows; leaf IDs can be omitted. Repeated ID can represent one discontinuous feature. Parent denotes a part-of relationship and may list multiple parents.
- **Directives:** topmost gff-version 3 directive is required; sequence-region, when supplied, supports bounds checks.

## Pedagogical inference and limits

Teach complete tiny relationship examples or clearly label an excerpt. A missing parent elsewhere in an excerpt cannot prove an unresolved parent in the whole file. Never apply a blanket unique-ID-per-row or mandatory-ID-on-every-leaf rule.
