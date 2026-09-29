/* Grading. Pure functions: (question, response) → true | false | null (no fixed answer). */
(function () {
  const norm = (s, caseSensitive) => {
    s = String(s ?? "").trim().replace(/\s+/g, " ").replace(/\s+([,.;:!?])/g, "$1");
    return caseSensitive ? s : s.toLowerCase();
  };

  const Scoring = {
    hasKey(q) {
      if (q.answer == null || q.answer === "") return false;
      return !(Array.isArray(q.answer) && !q.answer.length);
    },
    isAnswered(q, v) {
      if (q.type === "mcq") return !!v;
      if (!Array.isArray(v)) return false;
      if (q.type === "order") return v.length > 0;
      return v.some((x) => x != null && String(x).trim() !== "");
    },
    grade(q, v) {
      if (!this.hasKey(q)) return null;
      if (!this.isAnswered(q, v)) return false;
      switch (q.type) {
        case "mcq": return v === q.answer;
        case "select": return q.answer.every((a, i) => v[i] === a);
        case "fill": return q.answer.every((acc, i) => [].concat(acc).some((a) => norm(a, q.caseSensitive) === norm(v[i], q.caseSensitive)));
        case "order": {
          const built = v.map((i) => q.items[i]).join(" ");
          return [].concat(q.answer).some((a) => norm(a, q.caseSensitive) === norm(built, q.caseSensitive));
        }
      }
      return null;
    },
    keyText(q) {
      if (!this.hasKey(q)) return "Not graded";
      switch (q.type) {
        case "mcq": return q.answer;
        case "select": return q.answer.join(" / ");
        case "fill": return q.answer.map((a) => [].concat(a)[0]).join(" / ");
        case "order": return [].concat(q.answer)[0];
      }
      return "";
    },
    responseText(q, v) {
      if (!this.isAnswered(q, v)) return "No answer";
      switch (q.type) {
        case "mcq": return v;
        case "select":
        case "fill": return v.map((x) => (x && String(x).trim()) || "—").join(" / ");
        case "order": return v.map((i) => q.items[i]).join(" ");
      }
      return "";
    },
    gradeAll(test, responses) {
      const results = {};
      let correct = 0, incorrect = 0, unanswered = 0, total = 0;
      const sections = test.sections.map((s) => ({ title: s.title, correct: 0, total: 0 }));
      test.all.forEach((q) => {
        const v = responses[q.id];
        const r = this.grade(q, v);
        results[q.id] = r;
        if (r === null) return;
        total++; sections[q.sectionIndex].total++;
        if (r) { correct++; sections[q.sectionIndex].correct++; }
        else if (this.isAnswered(q, v)) incorrect++;
        else unanswered++;
      });
      return { results, correct, incorrect, unanswered, total, percent: total ? (correct / total) * 100 : 0, sections };
    }
  };
  window.Scoring = Scoring;
})();
