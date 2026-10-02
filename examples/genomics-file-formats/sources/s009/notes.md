---
source_id: "s009"
title: "GENCODE GTF Data format"
creators: ["GENCODE consortium"]
kind: "official producer documentation"
roles: ["method"]
canonical_url: "https://www.gencodegenes.org/pages/data_format.html"
identifiers: {}
version: "Unversioned GENCODE format page inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "A. TAB-separated standard GTF columns; B.1 Mandatory fields; B.2 Optional fields"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# GENCODE GTF Data format

## Appraisal for this packet

- **Fit — Strong:** clarifies feature-dependent GTF attributes.
- **Authority — Strong:** primary producer of GENCODE annotations.
- **Support — Strong:** tables explicitly scope mandatory attributes by feature and release.
- **Currency — Adequate:** unversioned page, release qualifications preserved.
- **Clarity — Adequate:** detailed schema exceeds the minimal teaching profile.

## Inspected source statements

- **Table A:** GENCODE GTF uses nine tab-separated columns with 1-based start, genomic end, strand, phase and additional key-value information.
- **Table B:** attributes use `key "value";` syntax.
- **B.1:** gene_id is mandatory for all listed features; transcript_id is mandatory except on gene features. Many other producer-specific fields are required, with release-specific qualifications.
- **Table A/B:** GENCODE identifiers, source values and chromosome naming conventions are database-profile requirements, not universal rules for every GTF producer.

## Pedagogical inference and limits

GENCODE is corroboration for gene-row exceptions and an optional real-world profile. Do not label minimal synthetic GTF as fully GENCODE-conformant if it intentionally omits producer-required metadata.
