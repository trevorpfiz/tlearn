---
source_id: "s014"
title: "GATK GVCF — Genomic Variant Call Format"
creators: ["Broad Institute GATK Team"]
kind: "official method documentation"
roles: ["method","foundation"]
canonical_url: "https://gatk.broadinstitute.org/hc/en-us/articles/360035531812-GVCF-Genomic-Variant-Call-Format"
identifiers: {}
version: "Unversioned article inspected 2026-10-02; example VCFv4.2"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "What is a GVCF?; Types of GVCFs; example header and records; nonvariant-block explanation"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# GATK GVCF — Genomic Variant Call Format

## Appraisal for this packet

- **Fit — Strong:** common GATK profile and nonvariant evidence.
- **Authority — Strong:** primary creator's workflow documentation.
- **Support — Strong:** explicit reference-confidence purpose and examples.
- **Currency — Adequate:** common profile article; newer VCF representation separately recorded in s013.
- **Clarity — Strong:** concrete END/NON_REF records.

## Inspected source statements

- **Introductory/type sections:** GVCF is VCF-based output that records evidence at variant and nonvariant positions for downstream joint genotyping.
- BP_RESOLUTION emits per-position records; GVCF mode can group nonvariant positions into blocks.
- **Example header/records:** the GATK example declares VCFv4.2, <NON_REF>, reference-confidence/GQ metadata and INFO END block endpoints.
- <NON_REF> represents possible alternatives not explicitly listed; it is not a literal observed DNA sequence.
- Superficially similar all-sites VCFs from other callers may lack the required reference-confidence model and need not be suitable for GATK joint genotyping.

## Pedagogical inference and limits

Teach a declared GATK-style profile. Explain a block as summarized reference-confidence evidence rather than absolute biological certainty. A missing END where a BP_RESOLUTION one-base record is allowed is not universally invalid.
