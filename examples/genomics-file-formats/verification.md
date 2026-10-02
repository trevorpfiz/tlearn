# Verification: genomics file formats

Objective: recognize and assess FASTA, FASTQ, BED, BEDPE, WIG, GTF, GFF3,
SAM, BAM, CRAM, VCF, gVCF, and GFA. Documentation is allowed when a task says
so. Record checks, whole-file evidence, and reference/profile context are
distinct; a teaching excerpt cannot certify a real file or its biological truth.

## Source and graph evidence — passed

Inspected 24 primary sources, recording relevant passages, versions/profiles,
source-selection reasons, and limitations in `sources.md` and `sources/`.
Recursive mapping requested additional biology vocabulary, coordinate
exceptions, binary-file evidence, and producer/version distinctions. All four
requests were resolved before the graph was marked ready.

Graph revision **1** has 12 foundations and 13 format targets. Review traced
every target to the stated reading/arithmetic baseline; required edges express
actual reasoning dependencies, with parallel format branches. This is a
prerequisite map, not an empirically validated formal knowledge space.

```sh
python3 ../../skills/workflow/verify-learning-tool/scripts/verify_artifacts.py . --stage graph
```

Observed: graph verification passed; no open research gaps. All 165 graph
source references resolve to registered, inspected notes. Required edges have
no transitive redundancy. Source/dependency review separately checked profile
qualifications and dependency rationale; a script pass alone cannot establish
those judgments.

Checked SHA-256 identities:

```text
sources.md     71c604d88bff55c488ed3799548315169002d2efe4ee783a0dc9901e2fd3cc95
knowledge.json fb2e1b20e3babcd621872974fabee6ae967bdaf262f4df39db2825e4b0d4364c
source notes   ece4491e4edd05fdcef89520404247ae3a1edf27a8482250e1b67aee0e00119a
```

The notes identity hashes the sorted relative paths and raw bytes of all 24
`sources/*/notes.md` files, with a NUL after each path and each file's bytes.

## Lesson review — passed

The canonical lesson has 16 sections, 44 tasks, two authored visuals, and 13
mixed applications covering every target. The lesson-stage artifact checker
passes against graph revision 1. Review checked actual teaching order, seven
numeric derivations, rubric alternatives, format profiles, evidence scope,
and application prompts. It replaced a duplicated protein case with a new DNA
alphabet violation, supplied a missing worked-example reference premise,
and corrected WIG span wording before the final review snapshot.

Current lesson SHA-256:

```text
b841bf5ac6738464ed854b9800b6a79e70fd61df2b83da1ccf6469612bca63b9
```

A separate reviewer solved all 44 tasks from prompts, options, supplied
reference keys and evidence, without authored answer keys or feedback.
All 32 choice answers and seven numeric answers agree; the five rubric answers
agree in meaning. Review flagged an ambiguous minus-strand “start”; instruction,
prompt and rubric now explicitly use the codon's 5′ genomic coordinate. A final
CDS distractor now uses inclusive length nine rather than endpoint difference.

The numeric derivations are 6−2=4, 5−1=4, 63−33=30, 4+2×2=8,
2+3+1+2=8, 21+(3+2+2)−1=27, and 25−21+1=5. Rubric review accepted
complement-then-reverse as well as reverse-then-complement, and challenged
reverse-only strings, DNA-only protein tests, conflated FASTQ wrapping/encoding,
the lower-bound interpretation of minus-strand codons, and changing stored
segments during traversal. No exact-string grading is authorized for them.

Blind review used `/tmp/tlearn-blind-tasks.json`; compact expected answers and
reasons were saved separately at `/tmp/tlearn-genomics-browser/blind-answers.json`.
Those temporary review files are not runtime dependencies. Repeat by preparing
prompts/options/evidence without keys or feedback, asking a separate reviewer
to solve them, then comparing against `lesson.json`. Correct browser
implementation of a key remains a different check.

## Delivery — passed

Checked **2026-10-02**, Chromium **154.0.8037.93**. Rebuilt output is
**207,590 bytes**. Repeating the build produced identical bytes; the standalone
copy and HTTP response matched that same SHA-256:

```text
dist/index.html b8f7f730a633228ba1f494fe1504b8d9fe4634f7d69ac2e35422d055870679d0
src/index.html  80bf8c8dad5127d6d82c9959a7201620e0195bcd52722786e445230bd8bc1009
src/styles.css  f11b3c23bf763a58de8984cfe58d5f713e827082427681f401b51840791f3bc3
src/app.js      4b402e099c3eb5a2f2b86dd6e79b9d0738f73fed7b25db2176872ad0c0c3da34
```

| Claim / procedure | Observed evidence |
| --- | --- |
| Copy only `dist/index.html` to an otherwise empty directory; open via `file:` with network disabled | All content, both visuals and task controls operate without sibling files or runtime network assets |
| Serve the same file using `python3 -m http.server 8766 --bind 127.0.0.1 --directory dist` | The identical bytes run over HTTP; no framework or API server is needed |
| Exercise every authored task using independently solved expectations | 700 content/interaction assertions passed in **each** delivery mode: all 28 explanations, 19 worked examples, 44 tasks, exact snippets/options/resources, blank/wrong/correct submissions, five honest rubric comparisons and local feedback |
| Test hints, explicit solutions, editing, revisit, completion and storage failures | 78 additional state/access checks passed offline: assistance survives navigation, editing clears stale results, completion does not grade/advance, denied/corrupt/stale storage leaves the lesson usable |
| Check numeric syntax and precision | `4.0` and `4e0` match four; `4.0000000001` and `-4` are wrong at tolerance zero; blank, `12junk`, hex, NaN, infinity and overflow are invalid |
| Use native controls through the keyboard | Section typeahead, previous navigation, radio arrows/Space, Enter submission and completion work; focus is visible. The skip link now preserves the selected section and focuses main |
| Inspect initial applications and accessible content | Generic case headings, empty solution/help/provenance elements and no selected choice. Task-specific sources and revisit links appear only after attempt/reveal; global references are unfiltered |
| Compare the two visuals with their canonical data | Ten paired coordinate labels/inclusion markers and all nine CIGAR operator rules match; no summed answer is inserted before an attempt |
| Inspect reflow and text enlargement | Representative foundations, visuals, variants and mixed cases have no page overflow at 320 px or with 200% CSS text sizing. Scientific rows/diagrams retain contained keyboard-reachable scrolling |
| Check provenance and safe rendering | 24 source entries and 25 mapped capabilities; companion `view`/`bigWig` links are available. Markup-like responses remain text; no injected image/SVG executes |
| Check normal HTTP persistence | Manual completion survives reload and can be reopened; responses/help deliberately last only for the visit |

Review corrected a skip-link reset and missing companion source links before
the final passes. Browser console recorded zero errors/warnings; required
learning uses no runtime HTTP requests. The header was compacted after visual
inspection so more learning content is visible promptly.

Temporary Playwright recipes, observations, hashes and screenshots are under
`/tmp/tlearn-genomics-browser/`; they are not a shipped test framework or runtime
dependency. To repeat, use the shared browser recipes and the concrete inputs
above against a fresh standalone copy, then against identical HTTP bytes.
Regenerate content expectations from the current canonical lesson, and solve
changed answers separately before testing their implementation.

## Limits

These checks establish the authored content and exercised browser behavior,
not learning gains, retention, biological truth, or a production file validator.
Scientific tool commands are inspected guidance; no external production
validator was run on the teaching fixtures. Other browser engines, real mobile
attachment delivery, screen-reader announcements and browser UI zoom were not
tested. The reflow checks used viewport sizing and CSS text enlargement.
Public deployment and an X preview were not requested or tested.
