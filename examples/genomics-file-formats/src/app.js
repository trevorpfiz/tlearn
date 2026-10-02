(() => {
  "use strict";

  const readData = (id) => JSON.parse(document.getElementById(id).textContent);
  const lesson = readData("tlearn-lesson");
  const knowledge = readData("tlearn-knowledge");
  const build = readData("tlearn-build");

  function gradeNumber(raw, check) {
    if (check.kind !== "number" || !Number.isFinite(check.expected) ||
        !Number.isFinite(check.absolute_tolerance) || check.absolute_tolerance < 0) {
      throw new Error("Use a checked numeric task contract.");
    }
    const text = String(raw ?? "").trim();
    const decimal = /^[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i;
    if (!decimal.test(text)) return "invalid";
    const value = Number(text);
    if (!Number.isFinite(value)) return "invalid";
    return Math.abs(value - check.expected) <= check.absolute_tolerance ? "correct" : "incorrect";
  }

  function gradeChoice(optionId, response, check) {
    if (check.kind !== "choice" || response.kind !== "choice" ||
        !response.options.some((option) => option.id === check.correct_option_id)) {
      throw new Error("Use a checked choice task contract.");
    }
    if (!response.options.some((option) => option.id === optionId)) return "invalid";
    return optionId === check.correct_option_id ? "correct" : "incorrect";
  }

  function createCompletionStore() {
    const key = `tlearn:completion:v1:${build.lesson_sha256}`;
    const sectionIds = new Set(lesson.sections.map((section) => section.id));
    let completed = new Set();
    try {
      const stored = JSON.parse(window.localStorage.getItem(key));
      if (stored?.version === 1 && Array.isArray(stored.completed) &&
          stored.completed.every((id) => typeof id === "string" && sectionIds.has(id))) {
        completed = new Set(stored.completed);
      }
    } catch {
      // Denied storage and corrupt data leave a usable in-memory visit.
    }
    return Object.freeze({
      isComplete: (sectionId) => completed.has(sectionId),
      setComplete(sectionId, done) {
        if (!sectionIds.has(sectionId) || typeof done !== "boolean") {
          throw new Error("Completion needs a current section ID and boolean.");
        }
        if (done) completed.add(sectionId);
        else completed.delete(sectionId);
        try {
          window.localStorage.setItem(key, JSON.stringify({ version: 1, completed: [...completed].sort() }));
          return true;
        } catch {
          return false;
        }
      }
    });
  }

  window.tlearn = Object.freeze({ lesson, knowledge, build, gradeNumber, gradeChoice, createCompletionStore });
  document.getElementById("tool-objective").textContent = lesson.objective;

})();

(() => {
  "use strict";
  const { lesson, knowledge, gradeNumber, gradeChoice, createCompletionStore } = window.tlearn;
  const sources = {
  "s001": {
    "title": "HTSlib faidx index format",
    "url": "https://www.htslib.org/doc/faidx.html",
    "version": "faidx(5), June 2018"
  },
  "s002": {
    "title": "NCBI FASTA Format for Nucleotide Sequences",
    "url": "https://www.ncbi.nlm.nih.gov/genbank/fastaformat/",
    "version": "Unversioned GenBank submission page inspected 2026-10-02"
  },
  "s003": {
    "title": "The Sanger FASTQ file format for sequences with quality scores, and the Solexa/Illumina FASTQ variants",
    "url": "https://doi.org/10.1093/nar/gkp1137",
    "version": "Nucleic Acids Research 38(6):1767–1771, 2010"
  },
  "s004": {
    "title": "Illumina DRAGEN v4.2: Output Files",
    "url": "https://support-docs.illumina.com/SW/dragen_v42/Content/SW/DRAGEN/OutputFiles.htm",
    "version": "DRAGEN v4.2; document 200033181 v02"
  },
  "s005": {
    "title": "The Browser Extensible Data (BED) format",
    "url": "https://samtools.github.io/hts-specs/BEDv1.pdf",
    "version": "GA4GH BEDv1; printing 9ddbc52"
  },
  "s006": {
    "title": "bedtools General usage: BEDPE format",
    "url": "https://bedtools.readthedocs.io/en/stable/content/general-usage.html",
    "version": "bedtools 2.31.0 documentation"
  },
  "s007": {
    "title": "UCSC Wiggle Track ASCII Text Format",
    "url": "https://www.genome.ucsc.edu/goldenPath/help/wiggle.html",
    "version": "Unversioned page inspected 2026-10-02"
  },
  "s008": {
    "title": "Ensembl GFF/GTF File Format",
    "url": "https://jun2026.archive.ensembl.org/info/website/upload/gff.html",
    "version": "Ensembl release 116; June 2026 archive"
  },
  "s009": {
    "title": "GENCODE GTF Data format",
    "url": "https://www.gencodegenes.org/pages/data_format.html",
    "version": "Unversioned GENCODE format page inspected 2026-10-02"
  },
  "s010": {
    "title": "Generic Feature Format Version 3 (GFF3)",
    "url": "https://github.com/the-sequence-ontology/specifications/blob/fe73505276dd324bf6a55773f3413fe2bed47af4/gff3.md",
    "version": "GFF3 specification 1.26; commit fe73505276dd324bf6a55773f3413fe2bed47af4"
  },
  "s011": {
    "title": "Sequence Alignment/Map Format Specification",
    "url": "https://samtools.github.io/hts-specs/SAMv1.pdf",
    "version": "SAM/BAM 1.6; printing b5341fb"
  },
  "s012": {
    "title": "CRAM format specification (version 3.1)",
    "url": "https://samtools.github.io/hts-specs/CRAMv3.pdf",
    "version": "CRAM 3.0/3.1; printing 07a4382"
  },
  "s013": {
    "title": "Variant Call Format Specification",
    "url": "https://samtools.github.io/hts-specs/VCFv4.5.pdf",
    "version": "VCF 4.5 / BCF 2.2; printing e821e4f"
  },
  "s014": {
    "title": "GATK GVCF — Genomic Variant Call Format",
    "url": "https://gatk.broadinstitute.org/hc/en-us/articles/360035531812-GVCF-Genomic-Variant-Call-Format",
    "version": "Unversioned article inspected 2026-10-02; example VCFv4.2"
  },
  "s015": {
    "title": "samtools 1.24 manuals: quickcheck, view and faidx",
    "url": "https://www.htslib.org/doc/samtools-quickcheck.html",
    "version": "samtools 1.24 manuals"
  },
  "s016": {
    "title": "Picard ValidateSamFile and SAM Differences in Picard",
    "url": "https://broadinstitute.github.io/picard/command-line-overview.html#ValidateSamFile",
    "version": "Unversioned documentation inspected 2026-10-02"
  },
  "s017": {
    "title": "GATK ValidateVariants",
    "url": "https://gatk.broadinstitute.org/hc/en-us/articles/360036823891-ValidateVariants",
    "version": "GATK 4.0.7.0 documentation"
  },
  "s018": {
    "title": "GenomeTools gt gff3validator manual",
    "url": "https://genometools.org/tools/gt_gff3validator.html",
    "version": "Unversioned manual inspected 2026-10-02"
  },
  "s019": {
    "title": "Graphical Fragment Assembly (GFA) Format Specification",
    "url": "https://github.com/GFA-spec/GFA-spec/blob/9774d44132884d9a019c0f2682cb109be23c2db4/GFA1.md",
    "version": "GFA1.0/1.1/1.2; commit 9774d44132884d9a019c0f2682cb109be23c2db4"
  },
  "s020": {
    "title": "Gfapy 1.2.3 documentation: validation and graph construction",
    "url": "https://gfapy.readthedocs.io/en/latest/tutorial/validation.html",
    "version": "Gfapy 1.2.3 documentation"
  },
  "s021": {
    "title": "UCSC bigBed and bigWig conversion guidance",
    "url": "https://www.genome.ucsc.edu/goldenPath/help/bigBed.html",
    "version": "Unversioned pages inspected 2026-10-02"
  },
  "s022": {
    "title": "NHGRI Talking Glossary: selected foundational definitions",
    "url": "https://www.genome.gov/genetics-glossary",
    "version": "Definition entries inspected 2026-10-02; live pages display this date"
  },
  "s023": {
    "title": "Ensembl Retrieving sequences",
    "url": "https://jun2026.archive.ensembl.org/info/website/tutorials/sequence.html",
    "version": "Ensembl release 116; June2026 archive"
  },
  "s024": {
    "title": "NCBI BankIt Submission Help: Protein FASTA",
    "url": "https://www.ncbi.nlm.nih.gov/WebSub/html/help/protein.html",
    "version": "Unversioned page inspected 2026-10-02"
  }
};
  sources.s015.companions = [
    { title: "view", url: "https://www.htslib.org/doc/samtools-view.html" },
    { title: "faidx", url: "https://www.htslib.org/doc/samtools-faidx.html" }
  ];
  sources.s021.companions = [
    { title: "bigWig", url: "https://www.genome.ucsc.edu/goldenPath/help/bigWig.html" }
  ];
  const completion = createCompletionStore();
  const sectionViews = new Map();
  const picker = document.getElementById("section-picker");
  const sectionHost = document.getElementById("sections");
  let current = 0;

  function el(tag, text, className) {
    const node = document.createElement(tag);
    if (text !== undefined) node.textContent = String(text);
    if (className) node.className = className;
    return node;
  }

  function addSnippet(parent, block) {
    if (!block.snippet) return;
    const figure = el("figure", undefined, "snippet");
    const label = block.snippet_label || "Synthetic example";
    figure.append(el("figcaption", label));
    const pre = el("pre");
    pre.tabIndex = 0;
    pre.setAttribute("aria-label", label + "; scroll horizontally when needed");
    pre.append(el("code", block.snippet));
    figure.append(pre);
    parent.append(figure);
  }

  function sourceLink(title, address) {
    const link = el("a", title);
    const url = new URL(address);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error("Source URL requires HTTP(S).");
    link.href = url.href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    return link;
  }
  function addCompanions(parent, source) {
    for (const companion of source.companions || []) {
      parent.append(document.createTextNode(" · "), sourceLink(companion.title, companion.url));
    }
  }
  function citationList(refs) {
    const list = el("ul", undefined, "citations");
    for (const ref of refs) {
      const source = sources[ref.source_id];
      const item = el("li");
      item.append(sourceLink(source.title, source.url));
      addCompanions(item, source);
      item.append(document.createTextNode(" — " + ref.locator));
      list.append(item);
    }
    return list;
  }

  function addCitations(parent, refs) {
    if (!refs.length) return;
    const details = el("details");
    details.append(el("summary", "Source passages"), citationList(refs));
    parent.append(details);
  }

  function table(headers, rows) {
    const node = el("table");
    const head = el("thead");
    const tr = el("tr");
    for (const h of headers) {
      const th = el("th", h);
      th.scope = "col";
      tr.append(th);
    }
    head.append(tr);
    node.append(head);
    const body = el("tbody");
    for (const row of rows) {
      const r = el("tr");
      for (const value of row) r.append(el("td", value));
      body.append(r);
    }
    node.append(body);
    const wrapper = el("div", undefined, "scientific-overflow");
    wrapper.tabIndex = 0;
    wrapper.setAttribute("aria-label", "Data table; scroll horizontally when needed");
    wrapper.append(node);
    return wrapper;
  }

  function renderVisual(block) {
    const figure = el("figure", undefined, "visual");
    figure.dataset.visualTask = block.task_id;
    figure.append(el("figcaption", block.purpose));
    if (block.data.base_count) {
      const d = block.data;
      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("viewBox", "0 0 560 154");
      svg.setAttribute("role", "img");
      svg.setAttribute("aria-label", "Aligned zero-based and one-based coordinate labels. Included bases have an outline and marker; a table follows.");
      function shape(tag, attrs, text) {
        const n = document.createElementNS(svg.namespaceURI, tag);
        for (const [key, value] of Object.entries(attrs)) n.setAttribute(key, value);
        if (text !== undefined) n.textContent = text;
        svg.append(n);
      }
      shape("text", { x: 8, y: 28, fill: "#202822", "font-size": 15 }, "0-based");
      shape("text", { x: 8, y: 115, fill: "#202822", "font-size": 15 }, "1-based");
      const rows = [];
      for (let i = 0; i < d.base_count; i++) {
        const included = i >= d.zero_based.start && i < d.zero_based.end_exclusive;
        const x = 95 + i * 44;
        shape("rect", { x, y: 44, width: 40, height: 39, rx: 4, fill: included ? "#dff39a" : "#ffffff", stroke: included ? "#21664e" : "#708078", "stroke-width": included ? 2 : 1 });
        shape("text", { x: x + 20, y: 29, "text-anchor": "middle", fill: "#202822", "font-size": 16 }, i);
        shape("text", { x: x + 20, y: 114, "text-anchor": "middle", fill: "#202822", "font-size": 16 }, i + 1);
        if (included) shape("text", { x: x + 20, y: 70, "text-anchor": "middle", fill: "#202822", "font-size": 17 }, "•");
        rows.push([i, i + 1, included ? "Included" : "Outside"]);
      }
      const plot = el("div", undefined, "coordinate-plot scientific-overflow");
      plot.tabIndex = 0;
      plot.setAttribute("aria-label", "Coordinate diagram; scroll horizontally when needed");
      plot.append(svg);
      figure.append(plot);
      const equivalent = el("details");
      equivalent.append(el("summary", "Coordinate table"), table(["0-based label", "1-based label", "Interval"], rows));
      figure.append(equivalent);
    } else {
      const tokens = el("div", undefined, "tokens");
      tokens.setAttribute("aria-label", "Authored CIGAR operations");
      for (const op of block.data.operations) tokens.append(el("span", op.length + op.operator, "token"));
      figure.append(tokens, table(["Operator", "Consumes query", "Consumes reference"], block.data.key.map((r) => [r.operator, r.query ? "Yes" : "No", r.reference ? "Yes" : "No"])));
    }
    addCitations(figure, block.source_refs);
    return figure;
  }

  function renderTask(task, index) {
    const card = el("article", undefined, "task");
    card.dataset.taskId = task.id;
    const title = el("h3", task.title || "Practice " + index);
    title.id = "title-" + task.id;
    if (task.role === "application" || task.check.kind === "rubric") {
      title.append(el("span", task.role === "application" ? "Fresh case" : "Self-check", "task-role"));
    }
    card.setAttribute("aria-labelledby", title.id);
    card.append(title, el("p", task.prompt, "task-prompt"));
    if (task.profile) card.append(el("p", task.profile, "profile"));
    addSnippet(card, task);
    const resource = el("p", task.resources || "Use the supplied rules and documentation.", "resource-note muted");
    resource.id = "resources-" + task.id;
    card.append(resource);
    const form = el("form");
    form.noValidate = true;
    const status = el("p", undefined, "result-label");
    status.id = "status-" + task.id;
    status.setAttribute("role", "status");
    const feedback = el("div", undefined, "feedback");
    feedback.hidden = true;
    const helpState = el("p", undefined, "help-state");
    const helpContent = el("div", undefined, "help-content");
    helpContent.hidden = true;
    const solution = el("div", undefined, "solution");
    solution.hidden = true;
    const evidence = el("div", undefined, "task-evidence");
    const state = { helped: false, hintCount: 0, exposed: false };
    const controls = [];
    let input;
    const description = resource.id + " " + status.id;
    if (task.response.kind === "choice") {
      const group = el("fieldset");
      group.append(el("legend", "Your choice"));
      for (const option of task.response.options) {
        const label = el("label", undefined, "choice");
        const radio = el("input");
        radio.type = "radio";
        radio.name = "answer-" + task.id;
        radio.value = option.id;
        radio.setAttribute("aria-describedby", description);
        controls.push(radio);
        label.append(radio, el("span", option.text));
        group.append(label);
      }
      form.append(group);
    } else {
      const label = el("label", task.response.kind === "number" ? "Your answer" : "Your reasoning");
      input = el(task.response.kind === "number" ? "input" : "textarea");
      input.id = "answer-" + task.id;
      label.htmlFor = input.id;
      input.setAttribute("aria-describedby", description);
      controls.push(input);
      form.append(label);
      if (task.response.kind === "number") {
        input.type = "text";
        input.inputMode = "decimal";
        input.autocomplete = "off";
        const row = el("div", undefined, "response-line");
        row.append(input, el("span", task.response.units));
        form.append(row, el("p", "Enter a number; decimals and scientific notation are accepted. Use the shown units.", "response-note"));
      } else {
        input.rows = 4;
        form.append(input);
      }
    }
    const actions = el("div", undefined, "actions");
    const submit = el("button", task.check.kind === "rubric" ? "Compare with rubric" : "Check answer");
    submit.type = "submit";
    actions.append(submit);
    const reveal = el("button", "Show solution", "secondary");
    reveal.type = "button";

    function markHelp(message) {
      state.helped = true;
      helpState.textContent = message + " Later attempts on this task are assisted practice.";
    }
    function exposeEvidence() {
      if (state.exposed) return;
      state.exposed = true;
      evidence.append(el("p", task.origin));
      addCitations(evidence, task.source_refs);
      if (task.revisit_section_ids?.length) {
        const p = el("p", "Revisit: ");
        for (const [i, id] of task.revisit_section_ids.entries()) {
          if (i) p.append(document.createTextNode(" · "));
          const link = el("a", lesson.sections.find((s) => s.id === id).title);
          link.href = "#" + id;
          p.append(link);
        }
        evidence.append(p);
      }
    }
    function showSolution() {
      if (!solution.childNodes.length) {
        if (task.check.kind === "rubric") {
          solution.append(el("h4", "Rubric self-check"));
          const criteria = el("ul");
          for (const c of task.check.criteria) criteria.append(el("li", c));
          solution.append(criteria);
          if (task.check.acceptable_alternatives.length) {
            solution.append(el("h4", "Acceptable alternatives"));
            const alternatives = el("ul");
            for (const a of task.check.acceptable_alternatives) alternatives.append(el("li", a));
            solution.append(alternatives);
          }
          solution.append(el("h4", "Sample answer"), el("p", task.check.sample_answer));
        } else {
          const answer = task.check.kind === "number" ? task.check.expected + " " + task.check.units : task.response.options.find((o) => o.id === task.check.correct_option_id).text;
          solution.append(el("h4", "Worked solution"), el("p", answer), el("p", task.feedback.correct));
        }
      }
      solution.hidden = false;
      exposeEvidence();
    }
    reveal.addEventListener("click", () => {
      markHelp("Solution opened.");
      showSolution();
    });
    if (task.hints.length) {
      const hint = el("button", "Show hint", "secondary");
      hint.type = "button";
      hint.addEventListener("click", () => {
        helpContent.hidden = false;
        helpContent.append(el("p", task.hints[state.hintCount++]));
        markHelp("Hint opened.");
        if (state.hintCount === task.hints.length) {
          hint.disabled = true;
          hint.textContent = "All hints shown";
        }
      });
      actions.append(hint);
    }
    actions.append(reveal);
    form.append(actions, status, feedback, helpState, helpContent, solution);
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const raw = task.response.kind === "choice" ? controls.find((r) => r.checked)?.value : input.value;
      const result = task.check.kind === "number" ? gradeNumber(raw, task.check) : task.check.kind === "choice" ? gradeChoice(raw, task.response, task.check) : raw.trim() ? "self-check" : "invalid";
      card.dataset.result = result;
      feedback.dataset.result = result;
      for (const c of controls) c.setAttribute("aria-invalid", result === "invalid" ? "true" : "false");
      feedback.replaceChildren();
      feedback.hidden = result === "invalid";
      if (result === "invalid") {
        status.textContent = task.response.kind === "choice" ? "Choose an option before checking." : task.response.kind === "number" ? "Enter a complete, finite number in the shown units." : "Write a response before comparing with the rubric.";
        return;
      }
      const assisted = state.helped;
      exposeEvidence();
      if (result === "self-check") {
        status.textContent = "Self-check: compare your reasoning. It has not been automatically graded.";
        feedback.append(el("p", task.feedback.correct));
        markHelp("Rubric and sample opened.");
        showSolution();
      } else {
        status.textContent = result === "correct" ? assisted ? "Correct — assisted practice." : "Correct — no hint or solution opened before this attempt." : "Not yet — review the feedback and try again.";
        feedback.append(el("p", result === "correct" ? task.feedback.correct : task.feedback.otherwise));
        if (result === "incorrect" && task.response.kind === "choice") {
          const pattern = task.feedback.patterns?.find((p) => p.option_id === raw);
          if (pattern) feedback.append(el("p", pattern.text));
        }
        markHelp("Feedback opened.");
      }
    });
    for (const c of controls) c.addEventListener("input", () => {
      delete card.dataset.result;
      status.textContent = "";
      feedback.hidden = true;
      feedback.replaceChildren();
      for (const control of controls) control.removeAttribute("aria-invalid");
    });
    card.append(form, evidence);
    return card;
  }

  for (const [i, section] of lesson.sections.entries()) {
    const option = el("option", (i + 1) + ". " + section.title);
    option.value = section.id;
    picker.append(option);
    const view = el("div", undefined, "lesson-section");
    view.dataset.sectionId = section.id;
    view.hidden = true;
    let taskIndex = 0;
    for (const block of section.blocks) {
      if (block.kind === "explanation") {
        const p = el("div", undefined, "explanation");
        if (block.title) p.append(el("h3", block.title));
        p.append(el("p", block.text));
        addCitations(p, block.source_refs);
        view.append(p);
      } else if (block.kind === "worked-example") {
        const worked = el("div", undefined, "worked");
        worked.append(el("h3", block.title || "Worked example"), el("p", block.prompt));
        if (block.profile) worked.append(el("p", block.profile, "profile"));
        addSnippet(worked, block);
        const steps = el("ol");
        for (const step of block.steps) {
          const li = el("li");
          li.append(el("strong", step.name + ". "), document.createTextNode(step.text));
          steps.append(li);
        }
        worked.append(steps);
        addCitations(worked, block.source_refs);
        view.append(worked);
      } else if (block.kind === "visual") view.append(renderVisual(block));
      else view.append(renderTask(block, ++taskIndex));
    }
    sectionHost.append(view);
    sectionViews.set(section.id, view);
  }

  function refreshCompletion() {
    const section = lesson.sections[current];
    document.getElementById("complete-section").textContent = completion.isComplete(section.id) ? "Reopen section" : "Mark complete";
    document.getElementById("completion-count").textContent = lesson.sections.filter((s) => completion.isComplete(s.id)).length + " of " + lesson.sections.length + " sections marked complete";
  }
  function navigate(index, updateHash = true, focus = false) {
    current = Math.max(0, Math.min(lesson.sections.length - 1, index));
    const section = lesson.sections[current];
    for (const [id, view] of sectionViews) view.hidden = id !== section.id;
    picker.value = section.id;
    document.getElementById("current-title").textContent = section.title;
    document.getElementById("section-position").textContent = "Section " + (current + 1) + " / " + lesson.sections.length;
    document.getElementById("completion-status").textContent = "";
    for (const position of ["top", "bottom"]) {
      document.getElementById("previous-" + position).disabled = current === 0;
      document.getElementById("next-" + position).disabled = current === lesson.sections.length - 1;
    }
    refreshCompletion();
    if (updateHash) history.replaceState(null, "", "#" + section.id);
    if (focus) {
      const heading = document.getElementById("current-title");
      heading.tabIndex = -1;
      heading.focus();
      heading.scrollIntoView({ block: "start" });
    }
  }
  picker.addEventListener("change", () => navigate(lesson.sections.findIndex((s) => s.id === picker.value)));
  for (const position of ["top", "bottom"]) {
    document.getElementById("previous-" + position).addEventListener("click", () => navigate(current - 1, true, position === "bottom"));
    document.getElementById("next-" + position).addEventListener("click", () => navigate(current + 1, true, position === "bottom"));
  }
  document.getElementById("complete-section").addEventListener("click", () => {
    const section = lesson.sections[current];
    const done = !completion.isComplete(section.id);
    const saved = completion.setComplete(section.id, done);
    refreshCompletion();
    document.getElementById("completion-status").textContent = (done ? "Section marked complete." : "Section reopened.") + (saved ? "" : " Saved for this visit; browser storage is unavailable.");
  });
  function fromHash() {
    const index = lesson.sections.findIndex((s) => "#" + s.id === location.hash);
    if (index >= 0) navigate(index, false);
  }
  window.addEventListener("hashchange", fromHash);
  navigate(0, false);
  fromHash();

  for (const [id, source] of Object.entries(sources)) {
    const item = el("li");
    item.append(sourceLink(source.title, source.url));
    addCompanions(item, source);
    item.append(el("p", id + " · " + source.version, "muted"));
    document.getElementById("source-list").append(item);
  }
  const items = new Map(knowledge.items.map((i) => [i.id, i]));
  for (const item of knowledge.items) {
    const row = el("div", undefined, "map-item");
    row.append(el("h3", item.label), el("p", item.capability));
    const dependencies = knowledge.dependencies.filter((d) => d.to === item.id && d.kind === "required");
    row.append(el("p", dependencies.length ? "Builds on: " + dependencies.map((d) => items.get(d.from).label).join("; ") + "." : "Begins from the assumed general basics.", "muted"));
    document.getElementById("map-list").append(row);
  }
})();
