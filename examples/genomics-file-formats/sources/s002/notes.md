---
source_id: "s002"
title: "NCBI FASTA Format for Nucleotide Sequences"
creators: ["NCBI GenBank"]
kind: "official submission documentation"
roles: ["method"]
canonical_url: "https://www.ncbi.nlm.nih.gov/genbank/fastaformat/"
identifiers: {}
version: "Unversioned GenBank submission page inspected 2026-10-02"
published_or_updated: null
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "FASTA definition line and nucleotide sequence paragraphs"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# NCBI FASTA Format for Nucleotide Sequences

## Appraisal for this packet

- **Fit — Strong:** supplies explicit nucleotide/submission profile checks.
- **Authority — Strong:** primary receiving database's submission instructions.
- **Support — Strong:** requirements and recommendations are stated directly.
- **Currency — Adequate:** official live page; no immutable revision established.
- **Clarity — Strong:** concrete short examples.

## Inspected source statements

- **Definition-line paragraphs:** GenBank's nucleotide submission profile begins with `>` and a unique SeqID; it limits SeqID characters and recommends at most 25 characters. The header stays on one line.
- **Organism-modifier paragraphs:** submission metadata uses bracketed modifiers such as `[organism=...]`; those requirements belong to this workflow.
- **Sequence paragraph:** this profile requests IUPAC nucleotide symbols, allows sequence wrapping, recommends lines no longer than 80 characters, and uses N for an ambiguous nucleotide. Unaligned submission sequences should not use ? or -.
- These are NCBI's **submission constraints/recommendations**, not a single universal definition of every FASTA dialect.

## Pedagogical inference and limits

Teach genomic DNA FASTA with an explicitly chosen nucleotide alphabet. Do not invalidate a general FASTA merely because it lacks organism brackets, a 25-character ID, or 80-character wrapping.
