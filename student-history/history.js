/* Student results page: look up attempts by name or student ID, then open any attempt. */
(async function () {
  const { h } = U;
  const app = document.getElementById("app");
  await Store.init();

  const last = U.readJSON("ep_last_student", {}) || {};
  let q = { name: U.qs("name") || last.name || "", studentId: U.qs("sid") || last.studentId || "" };

  window.addEventListener("hashchange", route);
  route();

  function shell(...kids) {
    app.innerHTML = "";
    app.append(Chrome.header("history"), h("main", { class: "wrap" }, Chrome.notice(), ...kids));
    window.scrollTo(0, 0);
  }

  function route() {
    const m = location.hash.match(/^#\/attempt\/(.+)$/);
    if (m) showAttempt(decodeURIComponent(m[1]));
    else showLookup();
  }

  async function showLookup() {
    const name = h("input", { class: "input", type: "text", autocomplete: "name", value: q.name });
    const sid = h("input", { class: "input", type: "text", value: q.studentId });
    const out = h("div", { class: "results-out" });
    const form = h("form", {
      class: "lookup", onsubmit: (e) => {
        e.preventDefault();
        q = { name: U.normName(name.value), studentId: sid.value.trim() };
        search(out);
      }
    },
      h("label", { class: "field" }, h("span", { class: "field__label" }, "Full name"), name),
      h("label", { class: "field" }, h("span", { class: "field__label" }, "Student ID"), sid),
      h("button", { class: "btn btn--primary", type: "submit" }, "Show results"));

    shell(h("h1", { class: "h1" }, "My results"),
      h("p", { class: "lede" }, "Enter the name or student ID you used when starting a test. If you used an ID, search by ID."),
      form, out);
    if (q.name || q.studentId) search(out);
  }

  async function search(out) {
    if (!q.name && !q.studentId) { out.innerHTML = ""; out.append(h("p", { class: "form-err" }, "Enter your name or student ID.")); return; }
    out.innerHTML = "";
    out.append(h("p", { class: "muted" }, "Loading…"));
    let list;
    try { list = await Store.listByStudent(q); }
    catch (e) { out.innerHTML = ""; out.append(h("p", { class: "form-err" }, "Results could not be loaded: " + e.message)); return; }
    list = list.filter((a) => a.status !== "abandoned").sort((a, b) => (b.startedAt || "").localeCompare(a.startedAt || ""));
    out.innerHTML = "";
    if (!list.length) {
      out.append(h("p", { class: "empty" }, `No attempts found for ${q.studentId ? "student ID " + q.studentId : q.name}. Check the spelling, or try the other field.`));
      return;
    }
    const done = list.filter((a) => a.status === "submitted" && a.score);
    const avg = done.length ? done.reduce((s, a) => s + a.score.percent, 0) / done.length : null;
    out.append(
      h("div", { class: "stats" },
        h("div", { class: "stat" }, h("div", { class: "stat__n" }, done.length), h("div", { class: "stat__l" }, "Tests completed")),
        h("div", { class: "stat" }, h("div", { class: "stat__n" }, U.pct(avg)), h("div", { class: "stat__l" }, "Average score")),
        h("div", { class: "stat" }, h("div", { class: "stat__n" }, done.length ? U.pct(Math.max(...done.map((a) => a.score.percent))) : "—"), h("div", { class: "stat__l" }, "Best score"))),
      attemptsTable(list, (a) => (location.hash = "#/attempt/" + encodeURIComponent(a.id))));
  }

  function attemptsTable(list, onOpen) {
    return h("div", { class: "table-wrap" }, h("table", { class: "table table--click" },
      h("thead", {}, h("tr", {}, h("th", {}, "Test"), h("th", {}, "Date"), h("th", { class: "num" }, "Time used"), h("th", { class: "num" }, "Score"), h("th", {}, ""))),
      h("tbody", {}, list.map((a) => {
        const done = a.status === "submitted" && a.score;
        return h("tr", { tabindex: done ? "0" : null, onclick: () => done && onOpen(a), onkeydown: (e) => { if (done && e.key === "Enter") onOpen(a); } },
          h("td", {}, a.testTitle || a.testId),
          h("td", {}, U.fmtDate(a.startedAt)),
          h("td", { class: "num" }, U.fmtDuration(a.durationSec)),
          h("td", { class: "num" }, done ? `${a.score.correct} / ${a.score.total}` : ""),
          h("td", { class: "right" }, done ? h("span", { class: "link" }, "Review") : h("a", { class: "link", href: "test.html?id=" + encodeURIComponent(a.testId), onclick: (e) => e.stopPropagation() }, "In progress, resume")));
      }))));
  }

  async function showAttempt(id) {
    shell(h("p", { class: "muted" }, "Loading…"));
    const a = await Store.get(id).catch(() => null);
    if (!a) { shell(h("h1", { class: "h1" }, "Attempt not found"), h("a", { class: "btn", href: "#" }, "Back to my results")); return; }
    const test = await QBank.load(a.testId).catch(() => null);
    let onlyMissed = false;
    const list = h("div");
    const paint = () => { list.innerHTML = ""; list.append(Review.render(test, a, { onlyMissed })); };
    shell(
      h("a", { class: "crumb", href: "#" }, "My results"),
      Review.summary(a),
      h("div", { class: "section-bar" },
        h("h2", { class: "h2" }, "Answer review"),
        h("label", { class: "check-label" }, h("input", { type: "checkbox", onchange: (e) => { onlyMissed = e.target.checked; paint(); } }), "Show only questions I missed")),
      list);
    paint();
  }
})();
