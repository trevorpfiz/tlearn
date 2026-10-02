---
source_id: "s021"
title: "UCSC bigBed and bigWig conversion guidance"
creators: ["UCSC Genome Browser"]
kind: "official documentation set"
roles: ["software","method"]
canonical_url: "https://www.genome.ucsc.edu/goldenPath/help/bigBed.html"
identifiers: {}
version: "Unversioned pages inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "bigBed Creating a bigBed track/Troubleshooting; bigWig Creating a bigWig track"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# UCSC bigBed and bigWig conversion guidance

## Appraisal for this packet

- **Fit — Strong:** practical interval/signal parsing with chromosome context.
- **Authority — Strong:** primary UCSC tool documentation.
- **Support — Strong:** required inputs, converter restrictions and commands explicit.
- **Currency — Adequate:** live documentation, no installed utility version recorded.
- **Clarity — Strong:** short concrete steps.

## Inspected source statements

- **[bigBed / Creating a bigBed track](https://www.genome.ucsc.edu/goldenPath/help/bigBed.html):** `bedToBigBed input.bed chrom.sizes output.bb` requires chromosome sizes and grouping/sorting. Custom-track track/browser lines must be removed; use correct -type/-as for additional fields.
- **bigBed / Troubleshooting:** coordinates beyond chromosome limits cause errors.
- **[bigWig / Creating a bigWig track](https://www.genome.ucsc.edu/goldenPath/help/bigWig.html):** `wigToBigWig signal.wig chrom.sizes output.bw` converts WIG against chromosome-size context; omit custom-track display lines.
- These converters write derived outputs and enforce their input profiles; they are not universal validators of all BED/WIG dialects.

## Pedagogical inference and limits

Treat converter acceptance as bounded compatibility evidence. Keep originals, use a disposable output, record assembly/size-file identity, and distinguish context mismatch from intrinsic grammar failure.
