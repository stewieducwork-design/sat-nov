/* Teacher dashboard. Routes:
   #/students  #/student/<key>  #/attempt/<id>  #/tests  #/test/<id> */
(async function () {
  const { h } = U;
  const app = document.getElementById("app");
  const cfg = window.APP_CONFIG || {};
  let all = [], query = "", hardestFirst = false;

  await Store.init();
  if (sessionStorage.getItem("ep_teacher") === "1") start(); else gate();

  function gate() {
    const pass = h("input", { class: "input", type: "password", autocomplete: "current-password" });
    const err = h("p", { class: "form-err", role: "alert" });
    app.innerHTML = "";
    app.append(Chrome.header("teacher"), h("main", { class: "start" },
      h("h1", { class: "start__title" }, "Teacher dashboard"),
      h("form", {
        class: "start__form", onsubmit: (e) => {
          e.preventDefault();
          if (pass.value === String(cfg.teacherPasscode || "")) { sessionStorage.setItem("ep_teacher", "1"); start(); }
          else { err.textContent = "That passcode is not correct."; pass.select(); }
        }
      }, h("label", { class: "field" }, h("span", { class: "field__label" }, "Passcode"), pass), err,
        h("button", { class: "btn btn--primary btn--block", type: "submit" }, "Open dashboard"))));
    pass.focus();
  }

  async function start() {
    window.addEventListener("hashchange", route);
    await reload();
  }

  async function reload() {
    shell(h("p", { class: "muted" }, "Loading attempts…"));
    try { all = (await Store.listAll()).filter((a) => a.status !== "abandoned"); }
    catch (e) { shell(h("p", { class: "form-err" }, "Attempts could not be loaded: " + e.message)); return; }
    route();
  }

  function shell(...kids) {
    const tab = (href, label, on) => h("a", { href, class: "tab" + (on ? " is-on" : ""), "aria-current": on ? "page" : null }, label);
    const onTests = /^#\/tests?/.test(location.hash);
    app.innerHTML = "";
    app.append(Chrome.header("teacher"), h("main", { class: "wrap wrap--wide" },
      Chrome.notice(),
      Store.mode === "local" ? h("div", { class: "notice" }, "Local mode: only attempts made in this browser are shown. Set storage to \"firebase\" in config.js to collect every student's results.") : null,
      h("div", { class: "dash-bar" },
        h("div", { class: "tabs", role: "navigation", "aria-label": "Dashboard" }, tab("#/students", "Students", !onTests), tab("#/tests", "Tests", onTests)),
        h("div", { class: "row" },
          h("button", { class: "btn", type: "button", onclick: reload }, "Refresh"),
          h("button", { class: "btn", type: "button", onclick: () => exportCSV(all) }, "Export CSV"))),
      ...kids));
    window.scrollTo(0, 0);
  }

  function route() {
    const hsh = location.hash;
    let m;
    if ((m = hsh.match(/^#\/student\/(.+)$/))) return showStudent(decodeURIComponent(m[1]));
    if ((m = hsh.match(/^#\/attempt\/(.+)$/))) return showAttempt(decodeURIComponent(m[1]));
    if ((m = hsh.match(/^#\/test\/(.+)$/))) return showTest(decodeURIComponent(m[1]));
    if (hsh === "#/tests") return showTests();
    return showStudents();
  }

  const stat = (n, l) => h("div", { class: "stat" }, h("div", { class: "stat__n" }, n), h("div", { class: "stat__l" }, l));
  const bar = (pct) => h("span", { class: "bar", role: "img", "aria-label": U.pct(pct) }, h("i", { style: `width:${Math.round(pct || 0)}%` }));
  const clickRow = (href, ...cells) => h("tr", { tabindex: "0", onclick: () => (location.hash = href), onkeydown: (e) => { if (e.key === "Enter") location.hash = href; } }, ...cells);
  const table = (heads, rows, cls = "") => h("div", { class: "table-wrap" }, h("table", { class: "table table--click " + cls },
    h("thead", {}, h("tr", {}, heads.map((x) => (typeof x === "string" ? h("th", {}, x) : h("th", { class: x.cls }, x.t))))),
    h("tbody", {}, rows)));
  const num = (t) => ({ t, cls: "num" });

  /* ----- Students ----- */
  function showStudents() {
    const o = Stats.overview(all);
    const students = Stats.students(all);
    const body = h("tbody");
    const search = h("input", { class: "input input--search", type: "search", placeholder: "Search by name or student ID", value: query, "aria-label": "Search students" });
    const paint = () => {
      const s = query.trim().toLowerCase();
      const rows = students.filter((x) => !s || x.name.toLowerCase().includes(s) || (x.studentId || "").toLowerCase().includes(s));
      body.innerHTML = "";
      if (!rows.length) body.append(h("tr", {}, h("td", { colspan: 6, class: "empty" }, all.length ? "No students match that search." : "No attempts yet. Results appear here once students start a test.")));
      rows.forEach((x) => body.append(clickRow("#/student/" + encodeURIComponent(x.key),
        h("td", {}, h("strong", {}, x.name)), h("td", {}, x.studentId || "—"),
        h("td", { class: "num" }, x.submitted), h("td", { class: "num" }, U.pct(x.avgPercent)),
        h("td", { class: "num" }, U.pct(x.best)), h("td", {}, U.fmtDate(x.last)))));
    };
    search.addEventListener("input", () => { query = search.value; paint(); });
    shell(
      h("div", { class: "stats" }, stat(o.students, "Students"), stat(o.submitted, "Tests submitted"), stat(o.inProgress, "In progress"), stat(U.pct(o.avgPercent), "Average score"), stat(U.fmtDuration(o.avgTime), "Average time")),
      h("div", { class: "section-bar" }, h("h1", { class: "h2" }, "Students"), search),
      h("div", { class: "table-wrap" }, h("table", { class: "table table--click" },
        h("thead", {}, h("tr", {}, h("th", {}, "Name"), h("th", {}, "Student ID"), h("th", { class: "num" }, "Tests"), h("th", { class: "num" }, "Average"), h("th", { class: "num" }, "Best"), h("th", {}, "Last active"))),
        body)));
    paint();
    if (query) { search.focus(); search.setSelectionRange(query.length, query.length); }
  }

  function showStudent(key) {
    const s = Stats.students(all).find((x) => x.key === key);
    if (!s) return shell(h("p", { class: "empty" }, "This student has no attempts."), h("a", { class: "btn", href: "#/students" }, "All students"));
    const perTest = Stats.tests(s.attempts);
    shell(
      h("a", { class: "crumb", href: "#/students" }, "Students"),
      h("h1", { class: "h1" }, s.name),
      s.studentId ? h("p", { class: "lede" }, "Student ID " + s.studentId) : null,
      h("div", { class: "stats" }, stat(s.submitted, "Tests submitted"), stat(U.pct(s.avgPercent), "Average score"), stat(U.pct(s.best), "Best score"), stat(U.fmtDuration(s.avgTime), "Average time")),
      perTest.length > 1 ? [h("h2", { class: "h2" }, "By test"), table(["Test", num("Attempts"), num("Average"), num("Best"), num("Average time")],
        perTest.map((t) => h("tr", {}, h("td", {}, t.title), h("td", { class: "num" }, t.submitted), h("td", { class: "num" }, U.pct(t.avgPercent)), h("td", { class: "num" }, U.pct(t.high)), h("td", { class: "num" }, U.fmtDuration(t.avgTime)))), "table--static")] : null,
      h("h2", { class: "h2" }, "Attempts"),
      attemptsTable(s.attempts, false));
  }

  function attemptsTable(list, withStudent) {
    return table([withStudent ? "Student" : "Test", "Started", num("Time used"), num("Correct"), num("Incorrect"), num("Unanswered"), num("Score")],
      list.slice().sort(Stats.byNewest).map((a) => {
        const sc = a.score;
        return clickRow("#/attempt/" + encodeURIComponent(a.id),
          h("td", {}, withStudent ? a.student.name : a.testTitle, a.status === "in-progress" ? h("span", { class: "tag" }, "In progress") : null, a.autoSubmitted ? h("span", { class: "tag" }, "Time ran out") : null),
          h("td", {}, U.fmtDate(a.startedAt)),
          h("td", { class: "num" }, U.fmtDuration(a.durationSec)),
          h("td", { class: "num" }, sc ? sc.correct : "—"), h("td", { class: "num" }, sc ? sc.incorrect : "—"), h("td", { class: "num" }, sc ? sc.unanswered : "—"),
          h("td", { class: "num" }, sc ? h("strong", {}, U.pct(sc.percent)) : "—"));
      }));
  }

  async function showAttempt(id) {
    const a = all.find((x) => x.id === id) || (await Store.get(id).catch(() => null));
    if (!a) return shell(h("p", { class: "empty" }, "Attempt not found."));
    const test = await QBank.load(a.testId).catch(() => null);
    const back = h("a", { class: "crumb", href: "#/student/" + encodeURIComponent(a.student.key) }, a.student.name);
    if (a.status !== "submitted") {
      const answered = test ? test.all.filter((q) => Scoring.isAnswered(q, (a.responses || {})[q.id])).length : Object.keys(a.responses || {}).length;
      return shell(back, h("h1", { class: "h1" }, a.testTitle), h("p", { class: "lede" }, `In progress: started ${U.fmtDate(a.startedAt)}, ${answered} of ${a.questionCount} answered, last saved ${U.fmtDate(a.updatedAt)}.`));
    }
    let onlyMissed = false;
    const list = h("div");
    const paint = () => { list.innerHTML = ""; list.append(Review.render(test, a, { onlyMissed })); };
    shell(back, Review.summary(a),
      h("div", { class: "section-bar" }, h("h2", { class: "h2" }, "Answers"),
        h("label", { class: "check-label" }, h("input", { type: "checkbox", onchange: (e) => { onlyMissed = e.target.checked; paint(); } }), "Show only missed questions")),
      list);
    paint();
  }

  /* ----- Tests ----- */
  function showTests() {
    const tests = Stats.tests(all);
    shell(h("h1", { class: "h2" }, "Tests"),
      tests.length
        ? table(["Test", num("Students"), num("Submitted"), num("Average"), num("Highest"), num("Lowest"), num("Average time")],
          tests.map((t) => clickRow("#/test/" + encodeURIComponent(t.testId),
            h("td", {}, h("strong", {}, t.title)), h("td", { class: "num" }, t.students), h("td", { class: "num" }, t.submitted),
            h("td", { class: "num" }, U.pct(t.avgPercent)), h("td", { class: "num" }, U.pct(t.high)), h("td", { class: "num" }, U.pct(t.low)), h("td", { class: "num" }, U.fmtDuration(t.avgTime)))))
        : h("p", { class: "empty" }, "No attempts yet."));
  }

  async function showTest(id) {
    const t = Stats.tests(all).find((x) => x.testId === id);
    if (!t) return shell(h("p", { class: "empty" }, "No attempts for this test yet."));
    const test = await QBank.load(id).catch(() => null);
    const qBox = h("div");
    const paintQ = () => {
      qBox.innerHTML = "";
      if (!test) { qBox.append(h("p", { class: "muted" }, "The question file for this test is not on the site, so per-question results are unavailable.")); return; }
      let rows = Stats.questions(test, t.attempts);
      if (hardestFirst) rows = rows.slice().sort((a, b) => (a.pct ?? 101) - (b.pct ?? 101));
      qBox.append(table(["#", "Skill", num("Correct"), "", "Most common wrong answer"],
        rows.map((r) => h("tr", {},
          h("td", {}, h("span", { class: "qnum" }, r.q.number)),
          h("td", { class: "muted" }, r.q.skill || r.q.sectionTitle),
          h("td", { class: "num" }, `${r.correct} / ${r.n}`),
          h("td", { class: "bar-cell" }, bar(r.pct), h("span", { class: "bar-pct" }, U.pct(r.pct))),
          h("td", {}, r.commonWrong ? `${r.commonWrong.label} (${r.commonWrong.count})` : "—"))), "table--static"));
    };
    shell(
      h("a", { class: "crumb", href: "#/tests" }, "Tests"),
      h("h1", { class: "h1" }, t.title),
      h("div", { class: "stats" }, stat(t.students, "Students"), stat(t.submitted, "Submitted"), stat(U.pct(t.avgPercent), "Average"), stat(U.pct(t.high), "Highest"), stat(U.pct(t.low), "Lowest"), stat(U.fmtDuration(t.avgTime), "Average time")),
      h("div", { class: "section-bar" }, h("h2", { class: "h2" }, "Question by question"),
        h("label", { class: "check-label" }, h("input", { type: "checkbox", checked: hardestFirst, onchange: (e) => { hardestFirst = e.target.checked; paintQ(); } }), "Hardest first")),
      qBox,
      h("h2", { class: "h2" }, "Attempts"),
      attemptsTable(t.attempts, true));
    paintQ();
  }

  /* ----- CSV ----- */
  function exportCSV(list) {
    const rows = [["Student", "Student ID", "Test", "Started", "Submitted", "Status", "Time used (s)", "Correct", "Incorrect", "Unanswered", "Total", "Percent", "Flagged", "Answers"]];
    list.slice().sort(Stats.byNewest).forEach((a) => {
      const s = a.score || {};
      const answers = a.answerText
        ? Object.keys(a.answerText).map((id, i) => `${i + 1}:${a.answerText[id]}`).join("; ")
        : Object.entries(a.responses || {}).map(([k, v]) => `${k}:${Array.isArray(v) ? v.join("/") : v}`).join("; ");
      rows.push([a.student.name, a.student.studentId, a.testTitle, a.startedAt, a.submittedAt || "", a.status, a.durationSec ?? "",
        s.correct ?? "", s.incorrect ?? "", s.unanswered ?? "", s.total ?? "", s.percent != null ? Math.round(s.percent) : "", (a.flagged || []).length, answers]);
    });
    const csv = "\ufeff" + rows.map((r) => r.map((c) => `"${String(c ?? "").replace(/"/g, '""')}"`).join(",")).join("\r\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv;charset=utf-8" }));
    const link = h("a", { href: url, download: `attempts-${new Date().toISOString().slice(0, 10)}.csv` });
    document.body.append(link); link.click(); link.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
})();
