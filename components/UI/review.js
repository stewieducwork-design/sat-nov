/* Attempt summary and per-question review. Used by the results screen,
   the student history page and the teacher dashboard. */
(function () {
  const { h } = U;
  const R = () => window.Renderers;
  const STATUS = { ok: "Correct", bad: "Incorrect", skip: "Unanswered", na: "Not graded" };

  function statusOf(q, a) {
    const r = a.results ? a.results[q.id] : Scoring.grade(q, (a.responses || {})[q.id]);
    if (r === true) return "ok";
    if (r === false) return Scoring.isAnswered(q, (a.responses || {})[q.id]) ? "bad" : "skip";
    return "na";
  }

  function answerBlock(q, v) {
    if (q.type === "mcq") {
      return h("ol", { class: "rv-choices" }, q.choices.map((c, i) => {
        const L = U.letters[i], isKey = L === q.answer, isPick = L === v;
        const tags = [isPick && "Your answer", isKey && "Correct answer"].filter(Boolean);
        return h("li", { class: "rv-choice" + (isKey ? " is-key" : "") + (isPick ? " is-pick" : "") },
          h("span", { class: "choice__letter" }, L),
          h("span", { class: "rv-choice__text", html: c }),
          tags.length ? h("span", { class: "rv-choice__tag" }, tags.join(", ")) : null);
      }));
    }
    return h("dl", { class: "rv-dl" },
      q.text ? [h("dt", {}, "Sentence"), h("dd", { html: q.text.replace(/\{\{(\d+)\}\}/g, (m, n) => `<span class="blank blank--num">${+n + 1}</span>`) })] : null,
      h("dt", {}, "Your answer"), h("dd", {}, Scoring.responseText(q, v)),
      h("dt", {}, "Correct answer"), h("dd", {}, Scoring.keyText(q)));
  }

  function card(q, a, opts) {
    const v = (a.responses || {})[q.id];
    const st = statusOf(q, a);
    let passage = null;
    if (R().hasPassage(q)) {
      const body = h("div", { class: "passage passage--sm", html: R().passageHTML(q) });
      const hl = (a.highlights || {})[q.id] || [];
      Highlighter.apply(body, hl);
      passage = h("details", { class: "rv__passage", open: opts.openPassage !== false },
        h("summary", {}, hl.length ? "Passage, with highlights" : "Passage"), body);
    }
    return h("article", { class: "rv rv--" + st, id: "rv-" + q.id },
      h("header", { class: "rv__head" },
        h("span", { class: "qnum" }, q.number),
        h("span", { class: "chip chip--" + st }, STATUS[st]),
        (a.flagged || []).includes(q.id) ? h("span", { class: "rv__flag" }, Chrome.icon("flag"), "Marked for review") : null,
        q.skill ? h("span", { class: "rv__skill" }, q.skill) : null),
      passage,
      q.prompt ? h("div", { class: "prompt", html: R().promptHTML(q) }) : null,
      answerBlock(q, v),
      q.explanation ? h("details", { class: "rv__exp", open: st === "bad" || st === "skip" }, h("summary", {}, "Explanation"), h("div", { html: q.explanation })) : null);
  }

  const Review = {
    statusOf,
    summary(a, { showStudent = true } = {}) {
      const s = a.score || {};
      const stat = (n, label, cls) => h("div", { class: "stat " + (cls || "") }, h("div", { class: "stat__n" }, n), h("div", { class: "stat__l" }, label));
      return h("section", { class: "summary" },
        h("div", { class: "summary__top" },
          h("div", {},
            h("h1", { class: "summary__title" }, a.testTitle || a.testId),
            h("p", { class: "summary__meta" },
              showStudent ? `${a.student.name}${a.student.studentId ? " (ID " + a.student.studentId + ")" : ""}, ` : "",
              `submitted ${U.fmtDate(a.submittedAt)}`)),
          h("div", { class: "score" },
            h("span", { class: "score__big" }, s.correct ?? 0),
            h("span", { class: "score__of" }, `of ${s.total ?? 0} correct`),
            h("span", { class: "score__pct" }, U.pct(s.percent)))),
        h("div", { class: "stats" },
          stat(s.correct ?? 0, "Correct", "stat--ok"),
          stat(s.incorrect ?? 0, "Incorrect", "stat--bad"),
          stat(s.unanswered ?? 0, "Unanswered"),
          stat((a.flagged || []).length, "Marked for review"),
          stat(U.fmtDuration(a.durationSec), a.timeLimitSec ? `Time used of ${Math.round(a.timeLimitSec / 60)} min` : "Time used")),
        s.sections && s.sections.length > 1 ? h("table", { class: "table table--compact" },
          h("thead", {}, h("tr", {}, h("th", {}, "Section"), h("th", { class: "num" }, "Correct"), h("th", { class: "num" }, "Score"))),
          h("tbody", {}, s.sections.map((x) => h("tr", {}, h("td", {}, x.title), h("td", { class: "num" }, `${x.correct} / ${x.total}`), h("td", { class: "num" }, U.pct(x.total ? (x.correct / x.total) * 100 : 0)))))) : null);
    },

    render(test, a, opts = {}) {
      const wrap = h("div", { class: "rv-list" });
      if (!test) {
        wrap.append(h("div", { class: "notice" }, "The question file for this test is no longer on the site, so only the recorded answers are shown."));
        wrap.append(h("table", { class: "table" },
          h("thead", {}, h("tr", {}, h("th", {}, "Question"), h("th", {}, "Answer"), h("th", {}, "Correct answer"), h("th", {}, "Result"))),
          h("tbody", {}, Object.keys(a.keys || {}).map((id, i) => h("tr", {},
            h("td", {}, i + 1), h("td", {}, (a.answerText || {})[id] || "—"), h("td", {}, a.keys[id]),
            h("td", {}, a.results && a.results[id] === true ? "Correct" : a.results && a.results[id] === false ? "Incorrect" : "—"))))));
        return wrap;
      }
      if (a.testHash && test.hash !== a.testHash) {
        wrap.append(h("div", { class: "notice" }, "This test was edited after the attempt. Questions show the current version; answers and the score are as recorded at the time."));
      }
      let shown = 0;
      test.all.forEach((q) => {
        const st = statusOf(q, a);
        if (opts.onlyMissed && (st === "ok" || st === "na")) return;
        wrap.append(card(q, a, opts)); shown++;
      });
      if (!shown) wrap.append(h("p", { class: "empty" }, "No missed questions in this attempt."));
      return wrap;
    }
  };
  window.Review = Review;
})();
