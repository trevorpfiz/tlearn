---
source_id: "s007"
title: "UCSC Wiggle Track ASCII Text Format"
creators: ["UCSC Genome Browser"]
kind: "official format documentation"
roles: ["method","foundation"]
canonical_url: "https://www.genome.ucsc.edu/goldenPath/help/wiggle.html"
identifiers: {}
version: "Unversioned page inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "General structure; variableStep; fixedStep; Data values; 1-start coordinate system"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# UCSC Wiggle Track ASCII Text Format

## Appraisal for this packet

- **Fit — Strong:** authoritative WIG modes and coordinates.
- **Authority — Strong:** originating Genome Browser documentation.
- **Support — Strong:** declarations and worked expansions explicit.
- **Currency — Adequate:** live unversioned page; no archived revision established.
- **Clarity — Strong:** concrete mode examples.

## Inspected source statements

- **General structure:** WIG has declaration and data lines. Custom tracks require a track definition; conversion to bigWig omits that line.
- **variableStep:** declaration names chromosome and optional span (default 1); data rows contain position and value.
- **fixedStep:** declaration specifies chromosome/start/step and optional span; each following row supplies a value. Positions advance by step.
- **1-start coordinate system:** WIG coordinates are 1-based; span covers that many bases starting at the stated position. bedGraph uses BED coordinates instead.
- **Data values:** values may be real, negative or positive; positions are numerically ordered. Omitted positions have no data, not an implied zero; browser does not support NaN.

## Pedagogical inference and limits

Teach both modes and explicitly expand fixedStep positions. Distinguish a signal value from a base sequence and absent measurements from zero. Declare custom-track versus converter profile before evaluating the track line.
