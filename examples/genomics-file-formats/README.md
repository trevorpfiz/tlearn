# Genomics file formats

A tlearn demonstration following the upskill workflow.

**Learning objective:** Demonstrate understanding of different data formats and types by recognizing each file type and assessing its validity. Data formats include FASTA, FASTQ, BED, BEDPE, WIG, GTF/GFF3, SAM, BAM, CRAM, gVCF, VCF, and GFA.

**Build status:** complete. The 24-source packet, prerequisite map, 16-section lesson, interface, and delivered interactions are checked. All 44 task answers received independent review.

## Use the tool

Save [the portable HTML](dist/index.html) and open it in a browser, or serve `dist/` on a static host. On GitHub, use **Download raw file** to save it before opening. The required learning content and interactions are embedded; source links are online references. The file is about 208 kB and needs no account or setup.

Direct-file/offline and HTTP modes were exercised in Chromium. See [verification](verification.md) for the checked inputs, independent answer review, browser observations, and limits.

The starting assumption is everyday language and basic arithmetic. Foundations introduce the vocabulary, coordinate conventions, record structure, quality values, and evidence needed for the format-specific sections. Mark familiar sections complete in one click and reopen them when useful. Navigation remains unrestricted.

## What understanding means here

Recognize meaningful signatures and structures, apply the stated format/profile rules, and justify what the available evidence says about validity. GTF and GFF3 are distinct targets; gVCF conventions are identified separately from ordinary VCF.

The tool distinguishes local record checks, complete-file consistency/decoding, and reference or producer context. A snippet can expose a violation without proving an entire file valid. Binary formats need decoding evidence; an intact header or an index alone cannot establish every condition. Examples state their dialect, version, and whether they are excerpts or complete synthetic fixtures.

Practice develops each format-specific capability; fresh applications use new cases and permit documentation where the task calls for it. Completion, help use, checked responses, and rubric self-checks use different labels.

## Follow the artifacts

| Artifact | Role |
| --- | --- |
| `sources.md` and `sources/` | Inspected primary evidence and source-selection notes |
| `knowledge.json` | Observable capabilities and sourced prerequisite route |
| `lesson.json` | Canonical instruction, practice, answers, feedback, and fresh applications |
| `interface.md` | Content-preserving presentation and interaction decisions |
| `src/` | Readable HTML, styles, and behavior |
| `dist/index.html` | Portable delivery generated from the checked inputs |
| `verification.md` | Actual checks, artifact identities, observations, and limits |

From this directory, rebuild after editing implementation source:

```sh
python3 ../../skills/engineering/build-learning-tool/scripts/bundle_html.py .
```

Check graph/lesson consistency with the shared verifier:

```sh
python3 ../../skills/workflow/verify-learning-tool/scripts/verify_artifacts.py . --stage lesson
```

These commands check packaging and mechanical consistency. Source fidelity, answer correctness, and browser behavior have their own evidence in `verification.md`.

See [the tlearn guide](../../docs/tlearn-guide.md) for the full workflow, reuse, and sharing instructions. Generated examples preserve canonical inputs so a later agent can improve the tool without reconstructing the research from the HTML.
