---
source_id: "s015"
title: "samtools 1.24 manuals: quickcheck, view and faidx"
creators: ["samtools maintainers"]
kind: "official versioned documentation"
roles: ["software","method"]
canonical_url: "https://www.htslib.org/doc/samtools-quickcheck.html"
identifiers: {}
version: "samtools 1.24 manuals"
published_or_updated: "2026-07-09"
inspected_at: "2026-10-02"
status: "included"
inspected_scope: "quickcheck DESCRIPTION/OPTIONS; view DESCRIPTION/REGIONS/-T/-c/-h; faidx DESCRIPTION"
status_checked_at: "2026-10-02"
status_note: "Official source inspected; version/date recorded where available. Live unversioned pages are not an archived byte-identical snapshot."
reuse_terms: "Original redistribution terms not established; no original retained; original paraphrased notes and links only."
files: []
---

# samtools 1.24 manuals: quickcheck, view and faidx

## Appraisal for this packet

- **Fit — Strong:** practical bounded checks and their limitations.
- **Authority — Strong:** primary tool documentation.
- **Support — Strong:** explicit command descriptions and exit semantics.
- **Currency — Strong:** release/date displayed by inspected pages.
- **Clarity — Strong:** concrete command options.

## Inspected source statements

- **[quickcheck DESCRIPTION](https://www.htslib.org/doc/samtools-quickcheck.html):** checks header and BAM/CRAM EOF; skips middle records. `samtools quickcheck -v input.bam` passing does not rule out internal corruption. -u changes the header target expectation for unmapped input.
- **[view DESCRIPTION/options](https://www.htslib.org/doc/samtools-view.html):** `samtools view -h input.bam` decodes SAM; `samtools view -h -T reference.fa input.cram` supplies a reference while decoding full SAM output. Use no regional filter for a whole-file decode; regional requests require an index. Header-only `-H` and optimized count-only `-c` output provide weaker evidence than full record/sequence restoration.
- **[faidx DESCRIPTION](https://www.htslib.org/doc/samtools-faidx.html):** indexing duplicate names warns, but retrieval returns only the first. `samtools faidx reference.fa` is an indexing action, not complete validation.

## Pedagogical inference and limits

Commands are guidance, not executed evidence. Inspect installed version, stderr and exit code. Header-only output proves less than a whole-file decode; a whole-file decode proves less than semantic/biological correctness. Avoid adding filtering or repair options to an audit scan.
