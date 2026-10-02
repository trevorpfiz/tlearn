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

  // Implement this lesson's blocks and native controls below. Keep answers hidden
  // until an attempt/explicit reveal; retain response and sticky assistance state.
  // Completion is separate. Do not persist a graded attempt without its help state.
})();
