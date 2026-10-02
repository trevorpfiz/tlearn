---
source_id: "s019"
title: "Graphical Fragment Assembly (GFA) Format Specification"
creators: ["GFA Format Specification Working Group"]
kind: "format specification"
roles: ["method","foundation"]
canonical_url: "https://github.com/GFA-spec/GFA-spec/blob/9774d44132884d9a019c0f2682cb109be23c2db4/GFA1.md"
identifiers: {}
version: "GFA1.0/1.1/1.2; commit 9774d44132884d9a019c0f2682cb109be23c2db4"
published_or_updated: "2022-06-16"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "Introduction; Segment/path names; H/S/L/P lines; GFA1.1/GFA1.2 additions"
status_checked_at: "2026-10-02"
status_note: "Exact source commit inspected; latest file revision identity checked through GitHub API."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# Graphical Fragment Assembly (GFA) Format Specification

## Appraisal for this packet

- **Fit — Strong:** record signatures and graph relationships.
- **Authority — Strong:** originating format working group's repository.
- **Support — Strong:** explicit fields, namespace and orientation semantics.
- **Currency — Strong:** pinned source commit checked through GitHub API.
- **Clarity — Adequate:** declare v1 subset rather than teaching every graph dialect.

## Inspected source statements

- **Introduction/H/S/L/P:** GFA1 is tab-delimited sequence-graph text. H optionally carries VN; S declares segment name/sequence; L connects oriented segments; P gives an oriented path.
- **Segment/path names:** names share a namespace and are unique; references to segments need the appropriate declarations in a complete graph.
- **S:** * means sequence unspecified, not an empty malformed sequence; LN may provide length.
- **L:** + uses the segment as written and - its reverse complement. 0M means adjacency with no overlap; * means overlap unspecified.
- **P:** explicit overlaps number one fewer than path segments; * is allowed.
- W is added in1.1 and J in1.2. GFA2 has a different grammar.

## Pedagogical inference and limits

Use a declared GFA1.0 H/S/L/P profile and a complete tiny graph. Judge referenced segments against the complete supplied graph; an isolated link excerpt cannot show whether declarations exist elsewhere.
