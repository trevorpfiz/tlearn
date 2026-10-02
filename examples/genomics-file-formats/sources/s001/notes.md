---
source_id: "s001"
title: "HTSlib faidx index format"
creators: ["HTSlib maintainers"]
kind: "official documentation"
roles: ["foundation","software"]
canonical_url: "https://www.htslib.org/doc/faidx.html"
identifiers: {}
version: "faidx(5), June 2018"
published_or_updated: "2018-06"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "FASTA Files, FASTQ Files, DESCRIPTION"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# HTSlib faidx index format

## Appraisal for this packet

- **Fit — Strong:** directly explains sequence records and indexing restrictions.
- **Authority — Strong:** maintained by the HTSlib project implementing this format.
- **Support — Strong:** explicit examples and constraints.
- **Currency — Adequate:** legacy manual explains stable structure; current command behavior is separately recorded in s015.
- **Clarity — Adequate:** clear examples; indexing-specific constraints need labeling.

## Inspected source statements

- **FASTA Files:** a record has a `>name [description...]` header followed by sequence text; sequence text can wrap. samtools uses the header's first word as the indexed name.
- **FASTA Files:** faidx requires constant sequence-line width within a record except its last line, and consistent line endings. This is an **indexability constraint**, not a universal FASTA requirement.
- **FASTQ Files:** wrapped sequence and quality lines are supported by faidx when their corresponding line lengths match.
- **DESCRIPTION:** an .fai index records names, lengths, offsets and line widths; it supports access, not proof of biological identity.

## Pedagogical inference and limits

Use simple unwrapped DNA FASTA examples first. Separate recognition, sequence-alphabet profile, unique names needed for reliable retrieval, and indexing requirements. A parser accepting a file does not prove that its labels or bases describe the claimed organism.
