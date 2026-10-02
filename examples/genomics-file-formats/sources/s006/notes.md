---
source_id: "s006"
title: "bedtools General usage: BEDPE format"
creators: ["bedtools maintainers"]
kind: "official versioned documentation"
roles: ["method","software"]
canonical_url: "https://bedtools.readthedocs.io/en/stable/content/general-usage.html"
identifiers: {}
version: "bedtools 2.31.0 documentation"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "BED format; BEDPE format; Genome file format"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# bedtools General usage: BEDPE format

## Appraisal for this packet

- **Fit — Strong:** original defining BEDPE documentation.
- **Authority — Strong:** bedtools project defines this profile.
- **Support — Strong:** fields, unknown-value sentinels and examples explicit.
- **Currency — Adequate:** selected documented version; no claim every producer follows it.
- **Clarity — Strong:** short paired-locus examples.

## Inspected source statements

- **BEDPE format:** first six fields describe chrom1/start1/end1 and chrom2/start2/end2. Starts are zero-based and intervals correspond to BED's half-open convention. The paired loci can be on different chromosomes.
- Unknown chromosome is .; unknown start/end is -1 in this profile. Name, score and separate strand fields are optional; ten-column examples are common, not a universal exact-width requirement. Extra columns may be passed through.
- **BED format:** bedtools requires tabs and permits score strings beyond UCSC's 0–1000 integer profile; that flexibility can break other consumers.
- **Genome file format:** chromosome-name/length files provide reference context.

## Pedagogical inference and limits

Declare the bedtools BEDPE profile; use ordinary known coordinates in initial examples. A -1 unknown-coordinate sentinel is not a generic negative BED coordinate rule. Validate each end and its context independently.
