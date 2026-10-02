---
source_id: "s016"
title: "Picard ValidateSamFile and SAM Differences in Picard"
creators: ["Broad Institute / Picard maintainers"]
kind: "official documentation set"
roles: ["software","method"]
canonical_url: "https://broadinstitute.github.io/picard/command-line-overview.html#ValidateSamFile"
identifiers: {}
version: "Unversioned documentation inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "ValidateSamFile overview/example/options; SAM Differences in Picard"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Picard ValidateSamFile and SAM Differences in Picard

## Appraisal for this packet

- **Fit — Strong:** semantic-validator purpose and stricter policy caveat.
- **Authority — Strong:** primary Picard maintainers.
- **Support — Strong:** documented command and explicit policy comparison.
- **Currency — Adequate:** no release pinned; confirm installed tool behavior before execution.
- **Clarity — Strong:** summary-mode example.

## Inspected source statements

- **[ValidateSamFile](https://broadinstitute.github.io/picard/command-line-overview.html#ValidateSamFile):** reports SAM/BAM errors and warnings, including formatting, alignment/flag issues; `java -jar picard.jar ValidateSamFile I=input.bam MODE=SUMMARY` reports counts rather than stopping after the default verbose error quota.
- IGNORE / IGNORE_WARNINGS change what is reported; record such settings.
- **[SAM Differences in Picard](https://broadinstitute.github.io/picard/sam-differences.html):** some Picard CIGAR checks are more stringent than the SAM specification.
- Therefore validator output is evidence under the chosen implementation and policy; it is not a universal, version-free definition of invalidity.

## Pedagogical inference and limits

Use errors/warnings and documented assumptions to make a defensible conclusion. Do not require every valid BAM to be sorted, indexed or have read groups solely because a downstream workflow prefers those properties.
