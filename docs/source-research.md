# Research sources: storage and selection

Research note, October 2, 2026. This records the reasoning behind [research-topic](../skills/research/research-topic/SKILL.md) and [source integrity](../skills/research/principle-source-integrity/SKILL.md). The storage policy and appraisal profile are tlearn design decisions informed by the sources below.

## Storage decision

Use **local inspected notes plus links, with selective original caching**. Agents read the notes first and inspect original passages when the next task needs them. Retaining a source on disk and loading it into model context are separate decisions.

| Approach | Useful property | Main limitation |
| --- | --- | --- |
| Links only | Small and easy to create | Repeated access work; content may change or disappear; no durable record of what was inspected |
| Full originals only | Preserves available evidence for later inspection | Does not organize the relevant knowledge; repeatedly reading whole files wastes context |
| Summaries only | Fast handoff between stages | Can omit conditions and detail; another agent cannot verify a claim without a route to the original |
| Notes, links, and selected originals | Reuses inspected work while retaining a verification route | Requires explicit provenance and a freshness policy |

[Zotero's item model](https://www.zotero.org/support/kb/library_items) separates bibliographic records, notes, links, and attachments; snapshots preserve a captured page when its online version changes. We borrow that separation without requiring Zotero installation. Its [collections model](https://www.zotero.org/support/collections_and_tags) also supports linking one source to several topics without duplicating it.

[Anthropic's context engineering guidance](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents) describes lightweight identifiers, selective runtime retrieval, and persistent notes. It acknowledges tradeoffs between precomputed material and runtime exploration. This is engineering guidance, not a measured guarantee of tlearn's token savings. Our adaptation is a small local research packet, not a large ingestion or retrieval system.

Cache selected central papers or useful snapshots when access and retention permit, especially for figures, equations, repeated reads, or fragile version access. Keep supplied local originals in place unless portability needs a copy. Candidates do not need downloads. A note should retain claim-level passage locations even when the original stays online.

## Organization

In each learning project, `sources.md` holds the objective, source registry, coverage, search record, and gaps. `sources/s001/notes.md` holds identity, inspected scope, appraisal, and claim-linked notes; an optional original and extraction sit beside it. A source can support several capabilities. Stable local IDs connect the packet to graph and lesson artifacts; DOI, edition, or release records establish identity across projects.

[FAIR principles](https://www.nature.com/articles/sdata201618) motivate durable identifiers, descriptive metadata, provenance, and reuse information. [The Turing Way](https://book.the-turing-way.org/reproducible-research/rdm/rdm-storage/) recommends clear, unambiguous organization. Neither prescribes this specific folder tree; it is the smallest arrangement that serves our current workflow.

An inspected version is preserved rather than silently overwritten. Substantive changes receive a new ID linked to the previous version; affected graph and lesson content can then be checked deliberately. An unversioned webpage without a snapshot has weaker reconstruction guarantees, which the record must state.

[Crossref's Crossmark](https://www.crossref.org/services/crossmark/) exposes participating publishers' updates and corrections, with explicit limits on what its presence guarantees. Use publisher and bibliographic status information when relevant, recording what was checked rather than claiming a universal clean bill of health. [PMC's Open Access Subset](https://pmc.ncbi.nlm.nih.gov/tools/openftlist/) distinguishes reuse conditions and supported automated access routes. Links remain a valid fallback.

## Selection decision

Agents should perform **structured appraisal with recorded reasons**, rather than supply an unexplained ranking. The repeatable method is:

1. Define the source's job and the bounded research question.
2. Screen relevance, identity, inspectability, and current status.
3. Inspect the passage that would support the proposed content.
4. Record separate judgments for fit, authority, support, currency, and clarity.
5. Corroborate important uncertain claims, preserving contradictions and recognizing reports derived from the same evidence.
6. Select a complementary set; stop when the current questions are supported or the remaining gaps and scope limits are explicit.

[ACRL's framework](https://www.ala.org/acrl/standards/ilframework) treats authority in relation to the information need. This supports distinguishing a useful foundation textbook, a methods paper, and release-specific software documentation. Clear teaching and scientific support are separate needs.

[Civic Online Reasoning](https://cor.inquirygroup.org/about/) emphasizes investigating who produced information, its evidence, and other sources. Its research concerns evaluating online information; lateral investigation is useful here but does not replace inspecting scientific methods.

[CASP](https://casp-uk.net/casp-tools-checklists/) uses questions appropriate to study design, and its [diagnostic checklist guidance](https://casp-uk.net/checklists-archive/casp-diagnostic-studies-checklist-fillable.pdf) asks for reasons without recommending a scoring system. We adopt separate, explained judgments rather than an apparently precise total. The tlearn profile has not itself been validated; it makes agent judgment reviewable.

[Cochrane chapter 4](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-04) informs explicit selection criteria, search documentation, and identifying multiple reports of one study. [Chapter 5](https://www.cochrane.org/authors/handbooks-and-manuals/handbook/current/chapter-05) supports structured extraction that faithfully represents sources. We use a bounded adaptation for learning resources; ordinary tlearn research does not establish systematic-review completeness.

## Computational biology

Use appropriate domain appraisal when a result or method matters to the objective. For supervised ML, [DOME](https://doi.org/10.1038/s41592-021-01205-4) organizes reporting around data, optimization, model, and evaluation. Its recommendations make questions about data independence, evaluation, and reproducibility concrete; reporting compliance alone does not establish correctness. Consult its [correction](https://www.nature.com/articles/s41592-021-01304-2) alongside the publication. An accessible [copy of the published PDF](https://biofold.github.io/pages/documents/papers/walsh_nmeth2021.pdf) was inspected during this research.

For foundations, prioritize accurate definitions, intelligible examples, and manageable prerequisite burden. For particular results, inspect the original evidence and its limits. For current computational behavior, use documentation matching the implementation version. Preserve uncertainty when adequate evidence is unavailable.

The authored skills and references implement these decisions. A complete research-to-HTML run remains the next opportunity to assess their practical efficiency and refine the contracts.
