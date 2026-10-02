---
source_id: "s003"
title: "The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants"
creators: ["Peter J. A. Cock and coauthors"]
kind: "methods paper"
roles: ["foundation","method"]
canonical_url: "https://doi.org/10.1093/nar/gkp1137"
identifiers: {"doi":"10.1093/nar/gkp1137","pmcid":"PMC2847217"}
version: "Nucleic Acids Research 38(6):1767–1771, 2010"
published_or_updated: "2009-12-16"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "FASTQ DEFINITION; SANGER FASTQ FORMAT; SOLEXA FASTQ FORMAT; ILLUMINA 1.3+ FASTQ FORMAT; Table 1"
status_checked_at: "2026-10-02"
status_note: "Full text inspected through Europe PMC fullTextXML; PMC browser route challenged; no correction notice identified in inspected metadata. No independent exhaustive notice audit."
reuse_terms: "Article CC BY-NC 2.5; no original redistributed; short paraphrased notes only."
files: []
---

# The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants

## Appraisal for this packet

- **Fit — Strong:** resolves structural and historical encoding ambiguity.
- **Authority — Strong:** original format clarification by Open Bioinformatics Foundation implementers.
- **Support — Strong:** explicit definitions and parser test cases.
- **Currency — Adequate:** historical paper; modern Illumina producer profile checked independently in s004.
- **Clarity — Strong:** clear record examples and counterexamples.

## Inspected source statements

- **FASTQ DEFINITION:** records have title (@), sequence, separator (+), and quality portions. Sequence and quality may wrap; after removing line breaks their lengths must match.
- The + line can omit repeated title text. @ and + are legitimate quality characters; an @ at a quality-line start alone does not establish a new record.
- The authors recommend unwrapped four-line output for compatibility.
- **SANGER FASTQ FORMAT/Table 1:** Phred+33 uses printable ASCII 33–126 for quality values 0–93.
- **Solexa/Illumina variant sections/Table 1:** historical formats use different scales/offsets. Overlapping character ranges mean some files cannot be assigned an encoding from characters alone.

## Pedagogical inference and limits

Use the modern four-line Phred+33 profile for primary exercises, but explicitly distinguish unsupported wrapping from intrinsically invalid FASTQ. A low quality score is not a malformed record. Consult producer metadata to resolve overlapping encodings.

Inspection route: [Europe PMC fullTextXML](https://www.ebi.ac.uk/europepmc/webservices/rest/PMC2847217/fullTextXML). Only the listed sections and Table1 were used; no full text copy is included in this repository.
