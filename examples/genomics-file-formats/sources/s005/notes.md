---
source_id: "s005"
title: "The Browser Extensible Data (BED) format"
creators: ["Jeffrey Niu; Danielle Denisko; Michael M. Hoffman"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://samtools.github.io/hts-specs/BEDv1.pdf"
identifiers: {}
version: "GA4GH BEDv1; printing 9ddbc52"
published_or_updated: "2022-01-05"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Sections 1.3, 1.5–1.10; Table 2; Recommended practice"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# The Browser Extensible Data (BED) format

## Appraisal for this packet

- **Fit — Strong:** canonical coordinate/field constraints.
- **Authority — Strong:** GA4GH-maintained HTS specification.
- **Support — Strong:** normative fields and exceptions explicit.
- **Currency — Strong:** canonical BED specification listed by HTS-specs on inspection date.
- **Clarity — Adequate:** precise reference needs small pedagogical examples.

## Inspected source statements

- **§§1.3/1.5:** space/tab delimiters are permitted by this specification; choose tabs for tool portability. Each data row has the same number of fields. BED3 through BED9 and BED12 are defined; BED10/BED11 are not permitted.
- **§1.6:** positions are 0-based, half-open; end ≥ start. Equal endpoints can describe insertion sites, not automatically an error.
- **§1.7:** BED score is integer 0–1000; strand can be +, - or . .
- **§1.9:** blockCount matches both lists; starts are relative to chromStart; blocks stay inside the feature, are sorted and nonoverlapping, and the outer blocks meet feature endpoints.
- Bounds require chromosome length; reference-name compatibility is a separate context check.

## Pedagogical inference and limits

Teach ordinary nonempty intervals and lengths end-start first; label that scope before introducing valid zero-length exceptions. Do not conflate bedtools' permissive score parser with BED conformance.
