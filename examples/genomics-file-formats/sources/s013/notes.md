---
source_id: "s013"
title: "Variant Call Format Specification"
creators: ["VCF Format Specification Working Group / GA4GH"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://samtools.github.io/hts-specs/VCFv4.5.pdf"
identifiers: {}
version: "VCF 4.5 / BCF 2.2; printing e821e4f"
published_or_updated: "2026-02-25"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "§1.4 Metadata; §1.5 Header; §1.6 Fields/genotype; §5.5 REF-only blocks (gVCF)"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Variant Call Format Specification

## Appraisal for this packet

- **Fit — Strong:** canonical VCF structure, types and modern gVCF semantics.
- **Authority — Strong:** primary GA4GH specification.
- **Support — Strong:** normative field/cardinality definitions.
- **Currency — Strong:** exact printing and latest listed canonical version inspected.
- **Clarity — Adequate:** selected simple SNP/diploid cases needed.

## Inspected source statements

- **§§1.4–1.6:** VCF is tab-separated text with fileformat metadata and a #CHROM header naming eight fixed columns. Samples add FORMAT and sample columns. Missing values use . rather than empty fields.
- POS is normally 1-based; telomeric 0/N+1 exceptions exist. REF/ALT describe alleles; GT indexes REF as 0 and ALT entries from 1, with . for missing alleles. Header Number/Type constrain values, including A/R/G cardinalities.
- FILTER PASS means filters passed; . means filters not applied, not automatically success.
- **§5.5:** modern reference blocks use <*> and FORMAT LEN; <NON_REF> is a backward-compatible alias and INFO END can supply legacy block length.
- A plausible row cannot establish REF agreement without the exact reference.

## Pedagogical inference and limits

Use explicit version/profile declarations. Teach common GATK gVCF separately with s014; do not declare every VCF with a symbolic ALT to be a gVCF. Missing calls and missing records are not assured homozygous-reference calls.
