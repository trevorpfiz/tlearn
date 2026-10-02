---
source_id: "s008"
title: "Ensembl GFF/GTF File Format"
creators: ["Ensembl / EMBL-EBI"]
kind: "official archived documentation"
roles: ["method","foundation"]
canonical_url: "https://jun2026.archive.ensembl.org/info/website/upload/gff.html"
identifiers: {}
version: "Ensembl release 116; June 2026 archive"
published_or_updated: "2026-06"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Fields; Sample GTF output; Track lines"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Ensembl GFF/GTF File Format

## Appraisal for this packet

- **Fit — Strong:** modern Ensembl GTF dialect and inclusive coordinates.
- **Authority — Strong:** producing annotation database's documentation.
- **Support — Strong:** fields plus gene/transcript examples.
- **Currency — Strong:** dated archive supplies a stable release context.
- **Clarity — Adequate:** page mixes GFF/GTF dialects, so scope examples carefully.

## Inspected source statements

- **Fields:** nine tab-separated fields describe sequence name, source, feature, start, end, score, strand, frame and attributes. Undefined fields use . . Start/end are 1-based and both included.
- **Sample GTF output:** quoted semicolon-terminated attributes use `gene_id "…";` and `transcript_id "…";` syntax. The gene row lacks transcript_id while the transcript row includes it.
- IDs can connect features into a larger annotation.
- **Track lines:** Ensembl accepts display extensions that it explicitly says are not part of the formal GFF specification.
- Generic-looking nine-column files still require dialect-specific interpretation of attributes.

## Pedagogical inference and limits

Use an Ensembl-style GTF exon/CDS profile with gene_id and transcript_id. Do not reject every gene row for missing transcript_id, or claim GTF and GFF3 attributes are interchangeable.
