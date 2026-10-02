---
source_id: "s017"
title: "GATK ValidateVariants"
creators: ["Broad Institute GATK Team"]
kind: "official archived tool documentation"
roles: ["software","method"]
canonical_url: "https://gatk.broadinstitute.org/hc/en-us/articles/360036823891-ValidateVariants"
identifiers: {}
version: "GATK 4.0.7.0 documentation"
published_or_updated: "2019-11-25"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Overview; Usage examples; --validate-GVCF; --validation-type-to-exclude"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# GATK ValidateVariants

## Appraisal for this packet

- **Fit — Strong:** shows VCF syntax/context/profile verification layers.
- **Authority — Strong:** primary GATK maintainers.
- **Support — Strong:** strict checks and resource conditions explicit.
- **Currency — Adequate:** older version labeled; do not assert current behavior without installed-version inspection.
- **Clarity — Strong:** useful example commands with qualifications.

## Inspected source statements

- **Overview:** ValidateVariants checks VCF structure and can apply stricter REF, AC/AN, IDs (when dbSNP supplied) and allele-use checks.
- **Usage:** `gatk ValidateVariants -V input.vcf -R reference.fa` provides a reference; `--validation-type-to-exclude ALL` disables strict extra checks, retaining format checking.
- **--validate-GVCF / -gvcf:** validates GVCF assumptions including coverage of the territory under consideration; interval inputs affect that territory.
- `gatk ValidateVariants -V sample.g.vcf.gz -R reference.fa --validate-GVCF` is a documented profile-aware check.
- This inspected page identifies GATK4.0.7.0, not the latest release; verify options and reference/dictionary/index requirements for an actual installed version.

## Pedagogical inference and limits

Teach what evidence/resource each command supplies. A failure under an additional strict check does not always mean the serialized VCF grammar is broken. Expected territory must be specified before interpreting GVCF coverage gaps.
