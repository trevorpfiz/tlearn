# Genomics file formats — source packet

## Objective and scope

> Demonstrate understanding of different data formats and types by recognizing each file type and
> assessing its validity. Data formats to include FASTA, FASTQ, BED, BEDPE, WIG, GTF/GFF3, SAM,
> BAM, CRAM, gVCF, VCF, and GFA.

Research pass: **2026-10-02**. Baseline: everyday language and basic arithmetic; biological and file-format foundations are taught.

The objective covers **13 distinct formats**: GTF and GFF3 are separately assessed. Learn to identify the format from content and available metadata, check declared syntax/profile and within-file consistency, and decide which external/reference evidence is still needed. Filename extensions are clues. A snippet is not a whole-file certificate; format conformance, tool compatibility and biological suitability are separate conclusions.

Depth is introductory operational recognition and validity judgment, including selecting a bounded real-tool check. This is not a production validator, assembler, variant-calling workflow or claim of biological correctness. Plain text, compression, headers, rows, bases, qualities, coordinates, references, features, allele indexes and graph links need explicit instruction. No existing learner knowledge inventory is required.

**Profiles:** genomic DNA FASTA, with recognition of protein FASTA; unwrapped modern Phred+33 DNA FASTQ (wrapped/historical variants explained); GA4GH BEDv1 plus explicit UCSC/bedtools consumer distinctions; bedtools2.31 BEDPE; UCSC fixedStep/variableStep WIG; Ensembl-style GTF; GFF3v1.26; SAM/BAM1.6; CRAM3.0/3.1; simple VCF with the version declared; common GATK VCF4.2 <NON_REF>/END gVCF with VCF4.5 alternatives explained; GFA1.0 H/S/L/P with later-version boundaries. Profiles keep decisions meaningful without excluding named formats.

## Coverage

| Question / capability | Status | Source IDs and original locators | Remaining need |
| --- | --- | --- | --- |
| DNA/protein, sequencing/read/reference, chromosome, exon/CDS/codon basics | supported | s022 selected Definition sections; s023 Transcript sequence; s011 §1.2; s024 Protein FASTA | Translate into concise original explanations; no full biology course. |
| Text records, delimiters, compression, absent values and validation evidence | supported | s001 FASTA Files; s005 §§1.3/1.5; s011 §§1.3–1.4/4.1–4.2; s013 §§1.5–1.6; s015 quickcheck DESCRIPTION | Separate format/profile checks from scientific inference. |
| Recognize/check FASTA with sequence-alphabet and indexing/submission caveats | supported | s001 FASTA Files; s002 definition/sequence paragraphs; s024 definition/example | Avoid treating submission rules as universal. |
| Recognize/check FASTQ sequence/quality record consistency and encoding profile | supported | s003 FASTQ DEFINITION/Table1; s004 File Format | Historical encoding can remain ambiguous without producer metadata. |
| Recognize/check BED and interval length/bounds/optional fields | supported | s005 §§1.5–1.9; s006 BED format; s021 bigBed Creating/Troubleshooting | External reference sizes required for complete bounds checks. |
| Recognize/check BEDPE paired intervals and unknown sentinels | supported | s006 BEDPE format | Declare producer profile and whole-file width/context. |
| Recognize/check WIG fixedStep/variableStep positions, span and values | supported | s007 General structure/modes/Data values; s021 bigWig Creating | Distinguish custom-track and converter input. |
| Recognize/check GTF quoted attributes and feature-dependent IDs | supported | s008 Fields/Sample GTF; s009 TablesA/B.1 | Minimal Ensembl-style examples must not claim full GENCODE profile. |
| Recognize/check GFF3 directives, coordinates, phase, attributes and parent relationships | supported | s010 Description/Columns4–9/ID/Parent/directives; s018 DESCRIPTION | Full relationships need complete supplied file and chosen ontology. |
| Recognize/check SAM fields, flags, CIGAR, sequence/quality and references | supported | s011 §§1.3–1.5; s016 ValidateSamFile/SAM Differences | Preserve allowed missing/unmapped cases; source-backed CIGAR key. |
| Recognize/check BAM container, decoding, record consistency and quickcheck limit | supported | s011 §§4.1–4.2; s015 quickcheck/view; s016 ValidateSamFile | Signature, full decode and semantic checks prove different things. |
| Recognize/check CRAM, required references and resource failure | supported | s012 §§6/8.4/8.5/11/12; s015 view -T | Embedded/reference-free cases mean missing FASTA is not universal invalidity. |
| Recognize/check VCF version/header/types/genotype indexes/reference context | supported | s013 §§1.4–1.6; s017 Overview/Usage | Exact reference needed to assess REF agreement; declare version. |
| Recognize/check gVCF nonvariant blocks and reference-confidence profile | supported | s014 Types/example; s013 §5.5; s017 --validate-GVCF | Producer/territory needed to judge gaps; all-sites VCF is insufficient. |
| Recognize/check GFA segments, oriented links, paths and relationship completeness | supported | s019 H/S/L/P/namespace; s020 Gfa class/Validation | GFA1 profile; no claim later extensions/GFA2 share grammar. |
| Choose and interpret real-tool checks instead of judging binary gibberish | supported | s015–s018, s020–s021 named commands/options | Commands are inspected guidance; no production dataset/tool execution is asserted. |
| Prove an unknown whole file is biologically correct | partial | Specs establish serialized constraints; reference checks s012/s013/s017/s021 | Cannot conclude from appearance or parser success; needs provenance, reference and domain evidence. |

## Source registry

All rows are **included** for the stated bounded role. Original URLs plus compact notes are retained; no research originals are distributed. Closely related manual pages are indexed as one explicitly scoped documentation set, with individual page links in the notes.

| ID | Source / kind | Role | Version/date | Status | Original / notes | Selection reason |
| --- | --- | --- | --- | --- | --- | --- |
| s001 | HTSlib faidx index format (official documentation) | foundation, software | faidx(5), June 2018 | included | [Original](https://www.htslib.org/doc/faidx.html) · [Notes](sources/s001/notes.md) | Generic records/index restrictions |
| s002 | NCBI FASTA Format for Nucleotide Sequences (official submission documentation) | method | Unversioned GenBank submission page inspected 2026-10-02 | included | [Original](https://www.ncbi.nlm.nih.gov/genbank/fastaformat/) · [Notes](sources/s002/notes.md) | Nucleotide submission dialect boundary |
| s003 | The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants (methods paper) | foundation, method | Nucleic Acids Research 38(6):1767–1771, 2010 | included | [Original](https://doi.org/10.1093/nar/gkp1137) · [Notes](sources/s003/notes.md) | FASTQ wrapping and historical encodings |
| s004 | Illumina DRAGEN v4.2: Output Files (official versioned documentation) | software, method | DRAGEN v4.2; document 200033181 v02 | included | [Original](https://support-docs.illumina.com/SW/dragen_v42/Content/SW/DRAGEN/OutputFiles.htm) · [Notes](sources/s004/notes.md) | Modern four-line producer profile |
| s005 | The Browser Extensible Data (BED) format (format specification) | method, foundation | GA4GH BEDv1; printing 9ddbc52 | included | [Original](https://samtools.github.io/hts-specs/BEDv1.pdf) · [Notes](sources/s005/notes.md) | Canonical BED constraints/exceptions |
| s006 | bedtools General usage: BEDPE format (official versioned documentation) | method, software | bedtools 2.31.0 documentation | included | [Original](https://bedtools.readthedocs.io/en/stable/content/general-usage.html) · [Notes](sources/s006/notes.md) | Defining BEDPE profile |
| s007 | UCSC Wiggle Track ASCII Text Format (official format documentation) | method, foundation | Unversioned page inspected 2026-10-02 | included | [Original](https://www.genome.ucsc.edu/goldenPath/help/wiggle.html) · [Notes](sources/s007/notes.md) | WIG modes and 1-based positions |
| s008 | Ensembl GFF/GTF File Format (official archived documentation) | method, foundation | Ensembl release 116; June 2026 archive | included | [Original](https://jun2026.archive.ensembl.org/info/website/upload/gff.html) · [Notes](sources/s008/notes.md) | Modern archived GTF examples |
| s009 | GENCODE GTF Data format (official producer documentation) | method | Unversioned GENCODE format page inspected 2026-10-02 | included | [Original](https://www.gencodegenes.org/pages/data_format.html) · [Notes](sources/s009/notes.md) | Feature-dependent GTF metadata |
| s010 | Generic Feature Format Version 3 (GFF3) (format specification) | method, foundation | GFF3 specification 1.26; commit fe73505276dd324bf6a55773f3413fe2bed47af4 | included | [Original](https://github.com/the-sequence-ontology/specifications/blob/fe73505276dd324bf6a55773f3413fe2bed47af4/gff3.md) · [Notes](sources/s010/notes.md) | Canonical GFF3 attributes/relationships |
| s011 | Sequence Alignment/Map Format Specification (format specification) | method, foundation | SAM/BAM 1.6; printing b5341fb | included | [Original](https://samtools.github.io/hts-specs/SAMv1.pdf) · [Notes](sources/s011/notes.md) | Canonical SAM and binary BAM |
| s012 | CRAM format specification (version 3.1) (format specification) | method, foundation | CRAM 3.0/3.1; printing 07a4382 | included | [Original](https://samtools.github.io/hts-specs/CRAMv3.pdf) · [Notes](sources/s012/notes.md) | CRAM signature/reference conditions |
| s013 | Variant Call Format Specification (format specification) | method, foundation | VCF 4.5 / BCF 2.2; printing e821e4f | included | [Original](https://samtools.github.io/hts-specs/VCFv4.5.pdf) · [Notes](sources/s013/notes.md) | Canonical current VCF/genotype/gVCF |
| s014 | GATK GVCF — Genomic Variant Call Format (official method documentation) | method, foundation | Unversioned article inspected 2026-10-02; example VCFv4.2 | included | [Original](https://gatk.broadinstitute.org/hc/en-us/articles/360035531812-GVCF-Genomic-Variant-Call-Format) · [Notes](sources/s014/notes.md) | Common GATK reference-confidence profile |
| s015 | samtools 1.24 manuals: quickcheck, view and faidx (official versioned documentation) | software, method | samtools 1.24 manuals | included | [Original](https://www.htslib.org/doc/samtools-quickcheck.html) · [Notes](sources/s015/notes.md) | Current basic tool checks and limits |
| s016 | Picard ValidateSamFile and SAM Differences in Picard (official documentation set) | software, method | Unversioned documentation inspected 2026-10-02 | included | [Original](https://broadinstitute.github.io/picard/command-line-overview.html#ValidateSamFile) · [Notes](sources/s016/notes.md) | Semantic validator and stricter policy |
| s017 | GATK ValidateVariants (official archived tool documentation) | software, method | GATK 4.0.7.0 documentation | included | [Original](https://gatk.broadinstitute.org/hc/en-us/articles/360036823891-ValidateVariants) · [Notes](sources/s017/notes.md) | Versioned variant-validator example/limits |
| s018 | GenomeTools gt gff3validator manual (official tool documentation) | software, method | Unversioned manual inspected 2026-10-02 | included | [Original](https://genometools.org/tools/gt_gff3validator.html) · [Notes](sources/s018/notes.md) | GFF3 validation/ontology requirements |
| s019 | Graphical Fragment Assembly (GFA) Format Specification (format specification) | method, foundation | GFA1.0/1.1/1.2; commit 9774d44132884d9a019c0f2682cb109be23c2db4 | included | [Original](https://github.com/GFA-spec/GFA-spec/blob/9774d44132884d9a019c0f2682cb109be23c2db4/GFA1.md) · [Notes](sources/s019/notes.md) | Canonical GFA1 graph records |
| s020 | Gfapy 1.2.3 documentation: validation and graph construction (official tool documentation) | software, method | Gfapy 1.2.3 documentation | included | [Original](https://gfapy.readthedocs.io/en/latest/tutorial/validation.html) · [Notes](sources/s020/notes.md) | Concrete GFA1.0 parser route |
| s021 | UCSC bigBed and bigWig conversion guidance (official documentation set) | software, method | Unversioned pages inspected 2026-10-02 | included | [Original](https://www.genome.ucsc.edu/goldenPath/help/bigBed.html) · [Notes](sources/s021/notes.md) | Reference-aware BED/WIG converters |
| s022 | NHGRI Talking Glossary: selected foundational definitions (institutional glossary) | foundation | Definition entries inspected 2026-10-02; live pages display this date | included | [Original](https://www.genome.gov/genetics-glossary) · [Notes](sources/s022/notes.md) | Mapping-requested biological foundations |
| s023 | Ensembl Retrieving sequences (official archived tutorial) | foundation | Ensembl release 116; June2026 archive | included | [Original](https://jun2026.archive.ensembl.org/info/website/tutorials/sequence.html) · [Notes](sources/s023/notes.md) | Mapping-requested CDS/transcript distinction |
| s024 | NCBI BankIt Submission Help: Protein FASTA (official submission documentation) | foundation, method | Unversioned page inspected 2026-10-02 | included | [Original](https://www.ncbi.nlm.nih.gov/WebSub/html/help/protein.html) · [Notes](sources/s024/notes.md) | Protein FASTA recognition/alphabet caveat |

## Search and recursive foundation pass

Web search and official-source inspection on **2026-10-02**:

- `site.ncbi.nlm.nih.gov fasta format nucleotide sequence input format`: locate primary nucleotide profile and avoid derivative generic restrictions.
- `site.htslib.org FASTQ format` and HTS-specs source links: locate canonical alignment/variant/BED specs and Cock2010; inspect the paper's fullTextXML through EuropePMC when the PMC browser page challenged access.
- `site.genome.ucsc.edu FAQformat BED wiggle`, `site.bedtools.readthedocs.io BEDPE format`: compare format definitions with consumer profiles.
- `site.gencodegenes.org gtf format annotation 9 fields`, `site.github.com The-Sequence-Ontology Specifications gff3`: distinguish current GTF producer conventions from GFF3.
- `site.gatk.broadinstitute.org GVCF genomic variant call format NON_REF reference blocks` and `site.gfa-spec.github.io GFA1 format`: inspect intended subtype/version semantics.
- `site.htslib.org/doc samtools quickcheck view reference CRAM`, `site.broadinstitute.github.io picard ValidateSamFile MODE SUMMARY`, `site.gatk.broadinstitute.org ValidateVariants --validate-GVCF`, `site.gfapy.readthedocs.io validate GFA from_file`: find real verification routes and limits.
- **Mapping gap lookup:** after backward mapping identified unexplained biological terms, directly inspected NHGRI DNA/sequencing/reference/chromosome/protein/exon/codon/allele/genotype Definition entries (s022), Ensembl CDS/transcript tutorial (s023), and searched `site.uniprot.org help FASTA format sequence protein header` to find the primary NCBI Protein FASTA help (s024). These support elementary vocabulary without expanding into a genetics course.

## Qualifications, access and stopping rule

Canonical PDF printings supply revision/date identities; GFF3/GFA Markdown commits were checked through the GitHub API and inspected at pinned URLs. Dated Ensembl archive pages preserve a release context. Remaining live pages are identified by retrieval date, with exact-byte fidelity limited to these notes and links.

The empty NCBI BLAST FASTA shell and a challenged PMC webpage were not used as evidence. EuropePMC's supported fullTextXML route supplied the listed Cock2010 sections; only paraphrases are retained. One guessed GATK ValidateVariants URL failed; the inspected replacement is explicitly GATK4.0.7.0, with installed-version verification required for execution. No invented claim of latest GATK/Picard/Gfapy behavior.

Specification and tool disagreements are retained: BED delimiters/scores, GTF feature/producer attributes, custom-track headers, Picard strictness, FASTQ historical encodings, and modern versus legacy gVCF representations. These are profile boundaries, not evidence resolved by source voting.

The pass stops because each requested format and the needed foundations now have inspected primary support. It is bounded instructional research, not an exhaustive survey. No central target remains unsupported. Unknown real files still require exact bytes, full-file context, producer/version, reference identity and relevant biological/provenance evidence; absent resources are honest **cannot conclude** cases. Mapping/lesson authors must reopen exact originals for unrecorded edge cases and keep invented teaching snippets separate from source examples.
