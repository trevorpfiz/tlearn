---
source_id: "s011"
title: "Sequence Alignment/Map Format Specification"
creators: ["SAM/BAM Format Specification Working Group / GA4GH"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://samtools.github.io/hts-specs/SAMv1.pdf"
identifiers: {}
version: "SAM/BAM 1.6; printing b5341fb"
published_or_updated: "2025-08-12"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "§1.2 Terminologies; §1.3 Header; §1.4 Mandatory fields/CIGAR; §1.5 Tags; §§4.1–4.2 BAM/BGZF"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Sequence Alignment/Map Format Specification

## Appraisal for this packet

- **Fit — Strong:** distinguishes SAM/BAM and core record invariants.
- **Authority — Strong:** canonical GA4GH specification.
- **Support — Strong:** normative fields and CIGAR consumption table.
- **Currency — Strong:** printed revision and date established.
- **Clarity — Adequate:** formal details need selected novice examples.

## Inspected source statements

- **§§1.3–1.4:** SAM is tab-delimited alignment text; optional headers precede ≥11-field records. @SQ supplies reference SN/LN. POS is 1-based; FLAG is a bit field (0x4 means unmapped); MAPQ255 means unavailable.
- **§1.4:** CIGAR M/I/S/=/X consume query; M/D/N/=/X consume reference. When SEQ and CIGAR are available, query-consuming lengths equal SEQ length. QUAL can be *; otherwise it corresponds to SEQ.
- M may mean match **or mismatch**. Header reference names and record references must agree when @SQ is present; unmapped records have special rules.
- **§1.5:** optional tags use TAG:TYPE:VALUE.
- **§§4.1–4.2:** BAM is binary alignment encoding in BGZF blocks; BAM\1 appears in the decompressed stream, not necessarily the disk's first bytes. BAM stores positions internally zero-based; decoded SAM is one-based.

## Pedagogical inference and limits

Use a mapped single-read example first and provide the CIGAR consumption key before independent calculation. A readable SAM preview is evidence of decoding a binary container, not evidence of perfect alignment or full-file validity.
