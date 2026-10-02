---
source_id: s024
title: "NCBI BankIt Submission Help: Protein FASTA"
creators: [NCBI GenBank]
kind: official submission documentation
roles: [foundation, method]
canonical_url: https://www.ncbi.nlm.nih.gov/WebSub/html/help/protein.html
identifiers: {}
version: Unversioned page inspected 2026-10-02
published_or_updated: null
inspected_at: 2026-10-02
status: included
inspected_scope: Definition-line guidance and Sample Protein FASTA
status_checked_at: 2026-10-02
status_note: Official page inspected; no immutable revision established.
reuse_terms: Original redistribution terms not established; no original retained; original paraphrased notes and links only.
files: []
---

# NCBI BankIt Submission Help: Protein FASTA

## Appraisal for this packet

- **Fit — Strong:** confirms FASTA can contain protein sequences.
- **Authority — Strong:** primary GenBank receiving workflow documentation.
- **Support — Strong:** explicit text and sequence examples.
- **Currency — Adequate:** unversioned submission page, no archived revision.
- **Clarity — Strong:** straightforward examples.

## Inspected source statements

- **Definition-line guidance:** protein FASTA uses a >SequenceID header followed by a protein sequence on later lines, similarly to nucleotide FASTA.
- **Sample Protein FASTA:** examples contain amino-acid letters beyond A/C/G/T and are wrapped.
- Submission linkage rules (such as matching the ID of the translated nucleotide record) are BankIt workflow constraints, not universal FASTA requirements.
- Therefore file identity and alphabet profile are separate checks: an amino-acid sequence is not malformed merely because a DNA-only checker rejects it.

## Pedagogical inference and limits

Use DNA examples for the main genomic path while retaining the ability to recognize protein FASTA. Declare the sequence alphabet before judging characters. Do not invent a complete amino-acid validity rule from this page alone.
