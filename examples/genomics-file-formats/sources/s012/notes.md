---
source_id: "s012"
title: "CRAM format specification (version 3.1)"
creators: ["CRAM / samtools specification maintainers"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://samtools.github.io/hts-specs/CRAMv3.pdf"
identifiers: {}
version: "CRAM 3.0/3.1; printing 07a4382"
published_or_updated: "2025-06-04"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "§6 File definition; §8.4 Preservation map; §8.5 Slice header; §11 Reference sequences; §12 Indexing"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Specification declares Apache 2.0; no original retained; original paraphrased notes."
files: []
---

# CRAM format specification (version 3.1)

## Appraisal for this packet

- **Fit — Strong:** signature, reference dependency and reference-free exceptions.
- **Authority — Strong:** primary GA4GH/HTS specification.
- **Support — Strong:** binary field descriptions and preservation/reference rules.
- **Currency — Strong:** printing revision and date pinned.
- **Clarity — Adequate:** binary internals are selectively summarized.

## Inspected source statements

- **§6:** CRAM begins with CRAM magic bytes followed by major/minor version; those bytes establish a candidate container type, not complete validity.
- **§8.4 Preservation map:** RR records whether reference sequence is needed for full restoration.
- **§8.5/§11:** external-reference differencing, embedded-reference and no-external-reference cases exist. Correct required reference sequence/checksum matters; an unavailable external reference can prevent decoding without making the file intrinsically invalid.
- **§12:** indexing assumes coordinate ordering; indexability is different from whether a container is valid.
- The specification is for 3.0/3.1; do not apply these fields indiscriminately to all historical CRAM versions.

## Pedagogical inference and limits

Teach three conclusions separately: recognized CRAM, successful full decoding with required resources, and biological suitability. If decoding fails because reference is absent, classify evidence as insufficient/resource unavailable rather than automatically corrupt.
