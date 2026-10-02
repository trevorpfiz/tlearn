---
source_id: "s004"
title: "Illumina DRAGEN v4.2: Output Files"
creators: ["Illumina"]
kind: "official versioned documentation"
roles: ["software","method"]
canonical_url: "https://support-docs.illumina.com/SW/dragen_v42/Content/SW/DRAGEN/OutputFiles.htm"
identifiers: {}
version: "DRAGEN v4.2; document 200033181 v02"
published_or_updated: "2024"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "FASTQ Files: File Format and Sequence Identifier Fields"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Illumina DRAGEN v4.2: Output Files

## Appraisal for this packet

- **Fit — Strong:** defines the example's modern producer profile.
- **Authority — Strong:** primary producer documentation.
- **Support — Strong:** exact record layout and encoding given.
- **Currency — Adequate:** selected version, not asserted latest; current page still accessible.
- **Clarity — Strong:** four-line layout is simple to teach.

## Inspected source statements

- **FASTQ Files / File Format:** BCL Convert FASTQ is per-read text containing base calls and corresponding Q-scores. Each record has four lines: @ identifier, base calls, + separator, ASCII33 quality string.
- The documented base calls use A, G, C, T and N (unknown).
- **FASTQ Files:** paired-end samples produce separate Read 1 and Read 2 files. Pairing is additional sample/read metadata, not an extra column in a record.
- **Sequence Identifier Fields:** this producer's title includes run and cluster metadata; other FASTQ producers need not use that exact title syntax.

## Pedagogical inference and limits

Declare unwrapped Phred+33 DNA FASTQ in exercises. Check equal sequence/quality length using s003, not just four-line counting. Do not enforce instrument-specific title fields in a generic teaching profile.
