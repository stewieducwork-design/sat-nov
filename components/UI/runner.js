/* The test room: start screen → questions → check your work → results.
   Content comes from QBank, grading from Scoring, time from Timer, highlights from Highlighter. */
(function () {
  const { h } = U;
  const R = Renderers;
  const app = document.getElementById("app");
  const testId = U.qs("id");
  const ACTIVE = (id) => "ep_active_" + id;

  let test, A, timer, nav;
  let elimMode = false, splitPct = 50, warned = false, submitting = false, hlPop = null;
  const pane = {};

  const persist = () => {
    A.updatedAt = new Date().toISOString();
    return Store.save(A).catch((e) => Chrome.toast("Your answers could not be saved: " + e.message));
  };
  const saveSoon = U.debounce(persist, 600);

  (async function boot() {
    try {
      await Store.init();
      if (!testId) throw new Error("No test was chosen. Open a test from the test list.");
      test = await QBank.load(testId);
      await showStart();
    } catch (e) { showError(e); }
  })();

  function showError(e) {
    app.innerHTML = "";
    app.append(Chrome.header("tests"), h("main", { class: "wrap" },
      h("h1", { class: "h1" }, "This test could not be opened"),
      h("p", { class: "lede" }, e.message),
      h("a", { class: "btn", href: "index.html" }, "Back to tests")));
  }

  const field = (label, input, hint) => h("label", { class: "field" }, h("span", { class: "field__label" }, label), input, hint ? h("span", { class: "field__hint" }, hint) : null);

  /* ---------- Start screen ---------- */
  async function showStart() {
    document.title = test.title;
    const last = U.readJSON("ep_last_student", {}) || {};
    let resume = null;
    const activeId = localStorage.getItem(ACTIVE(test.id));
    if (activeId) {
      try {
        const a = await Store.get(activeId);
        if (a && a.status === "in-progress") resume = a; else localStorage.removeItem(ACTIVE(test.id));
      } catch (e) { /* offline: just offer a new start */ }
    }

    const name = h("input", { class: "input", type: "text", autocomplete: "name", required: true, value: last.name || "" });
    const sid = h("input", { class: "input", type: "text", autocomplete: "off", value: last.studentId || "" });
    const err = h("p", { class: "form-err", role: "alert" });
    const go = h("button", { class: "btn btn--primary btn--block", type: "submit" }, "Start test");
    const form = h("form", {
      class: "start__form", novalidate: true,
      onsubmit: async (ev) => {
        ev.preventDefault();
        const n = U.normName(name.value);
        if (!n) { err.textContent = "Enter your full name to start."; name.focus(); return; }
        go.disabled = true; go.textContent = "Starting…";
        try { await startNew(n, sid.value.trim()); }
        catch (e) { err.textContent = "The test could not start: " + e.message; go.disabled = false; go.textContent = "Start test"; }
      }
    }, field("Full name", name), field("Student ID", sid, "Optional"), err, go);

    const n = test.all.length;
    const meta = `${n} questions, ` + (test.timeLimitSec ? `${Math.round(test.timeLimitSec / 60)} minutes` : "untimed");

    const resumeBox = resume && h("div", { class: "resume" },
      h("p", {}, `${resume.student.name} started this test on ${U.fmtDate(resume.startedAt)} and has not submitted it.`),
      resume.timeLimitSec ? h("p", { class: "muted" }, "The timer kept running while the test was closed.") : null,
      h("div", { class: "row" },
        h("button", { class: "btn btn--primary", type: "button", onclick: () => begin(resume) }, "Resume test"),
        h("button", {
          class: "btn", type: "button", onclick: async () => {
            resume.status = "abandoned"; await Store.save(resume).catch(() => {});
            localStorage.removeItem(ACTIVE(test.id)); showStart();
          }
        }, "Discard and start over")));

    app.innerHTML = "";
    app.append(Chrome.header("tests"), h("main", { class: "start" },
      Chrome.notice(),
      h("a", { class: "crumb", href: "index.html" }, "All tests"),
      h("h1", { class: "start__title" }, test.title),
      test.description ? h("p", { class: "start__desc" }, test.description) : null,
      h("ol", { class: "start__sections" }, test.sections.map((s) =>
        h("li", {}, h("span", {}, s.title), h("span", { class: "muted" }, `${(s.questions || []).length} questions`)))),
      h("p", { class: "start__meta" }, meta),
      resumeBox || form));
    if (!resume) (name.value ? go : name).focus();
  }

  async function startNew(name, studentId) {
    localStorage.setItem("ep_last_student", JSON.stringify({ name, studentId }));
    const now = new Date().toISOString();
    const a = {
      id: "att_" + U.uid(),
      testId: test.id, testTitle: test.title, testHash: test.hash,
      student: { name, studentId: studentId || "", key: U.studentKey(name, studentId) },
      nameLower: name.toLowerCase(), studentIdLower: (studentId || "").toLowerCase(),
      startedAt: now, updatedAt: now, submittedAt: null, status: "in-progress",
      timeLimitSec: test.timeLimitSec, durationSec: null, questionCount: test.all.length,
      position: 0, responses: {}, flagged: [], highlights: {}, eliminated: {},
      score: null, results: null, keys: null, answerText: null
    };
    await Store.save(a);
    localStorage.setItem(ACTIVE(test.id), a.id);
    begin(a);
  }

  /* ---------- Test room ---------- */
  function begin(a) {
    A = a;
    ["responses", "highlights", "eliminated"].forEach((k) => (A[k] = A[k] || {}));
    A.flagged = A.flagged || [];
    submitting = false; warned = false;
    buildShell();
    nav = new Navigator(test.all.length, (i) => { A.position = i; render(); saveSoon(); });
    nav.i = Math.min(A.position || 0, test.all.length);
    render();
    timer = new Timer({ limitSec: A.timeLimitSec, startedAt: Date.parse(A.startedAt), onTick: paintTimer, onExpire: () => submit(true) });
    timer.start();
  }

  function buildShell() {
    app.innerHTML = "";
    document.body.classList.add("in-exam");
    pane.sec = h("div", { class: "exam-section" });
    pane.dir = h("button", { class: "linkbtn", type: "button", onclick: showDirections }, "Directions");
    pane.timer = h("div", { class: "timer", role: "timer" });
    pane.timerToggle = h("button", {
      class: "linkbtn", type: "button", onclick: () => {
        const hidden = pane.timer.classList.toggle("is-hidden");
        pane.timerToggle.textContent = hidden ? "Show" : "Hide";
      }
    }, "Hide");
    pane.clear = h("button", { class: "tool", type: "button", onclick: clearHighlights }, "Clear highlights");
    pane.rail = h("nav", { class: "rail", "aria-label": "Questions" });
    test.all.forEach((q, i) => pane.rail.append(h("button", {
      type: "button",
      class: "rail__seg" + (i && q.sectionIndex !== test.all[i - 1].sectionIndex ? " is-newsec" : ""),
      onclick: () => nav.go(i)
    })));
    pane.body = h("main", { class: "exam-body" });
    pane.count = h("button", { class: "qcount", type: "button", "aria-haspopup": "dialog", onclick: openNavigator });
    pane.back = h("button", { class: "btn btn--pill", type: "button", onclick: () => nav.prev() }, "Back");
    pane.next = h("button", { class: "btn btn--pill btn--primary", type: "button", onclick: () => (nav.onReview ? confirmSubmit() : nav.next()) }, "Next");

    app.append(h("div", { class: "exam" },
      h("header", { class: "exam-top" },
        h("div", { class: "exam-top__l" }, pane.sec, pane.dir),
        h("div", { class: "timer-wrap" }, pane.timer, pane.timerToggle),
        h("div", { class: "exam-top__r" }, pane.clear)),
      pane.rail,
      pane.body,
      h("footer", { class: "exam-bottom" },
        h("div", { class: "who" }, A.student.name),
        pane.count,
        h("div", { class: "navbtns" }, pane.back, pane.next))));

    pane.body.addEventListener("mouseup", () => setTimeout(onSelectEnd, 0));
    pane.body.addEventListener("touchend", () => setTimeout(onSelectEnd, 30));
    pane.body.addEventListener("click", (e) => {
      const m = e.target.closest("mark.hl");
      if (m && pane.passage && pane.passage.contains(m) && window.getSelection().isCollapsed) showRemovePop(m);
    });
    document.addEventListener("mousedown", (e) => { if (hlPop && !hlPop.contains(e.target)) hidePop(); });
    document.addEventListener("keydown", onKey);
    document.addEventListener("visibilitychange", () => { if (document.hidden && A && A.status === "in-progress") saveSoon.flush(); });
    window.addEventListener("pagehide", () => { if (A && A.status === "in-progress") saveSoon.flush(); });
  }

  const isAnswered = (q) => Scoring.isAnswered(q, A.responses[q.id]);
  const isFlagged = (q) => A.flagged.includes(q.id);

  function paintRail() {
    Array.from(pane.rail.children).forEach((b, i) => {
      const q = test.all[i];
      b.classList.toggle("is-done", isAnswered(q));
      b.classList.toggle("is-flag", isFlagged(q));
      b.classList.toggle("is-cur", i === nav.i);
      b.setAttribute("aria-label", `Question ${q.number}, ${isAnswered(q) ? "answered" : "unanswered"}${isFlagged(q) ? ", marked for review" : ""}`);
      b.setAttribute("aria-current", i === nav.i ? "step" : "false");
    });
  }

  function render() {
    hidePop();
    const i = nav.i, n = test.all.length;
    paintRail();
    pane.back.disabled = i === 0;
    pane.count.innerHTML = "";
    pane.count.append(i === n ? "Check your work" : `Question ${i + 1} of ${n}`, Chrome.icon("caret"));
    pane.body.innerHTML = "";
    pane.body.scrollTop = 0;

    if (i === n) {
      pane.sec.textContent = "Check your work";
      pane.dir.hidden = true; pane.clear.hidden = true; pane.passage = null;
      pane.next.textContent = "Submit test";
      pane.body.append(checkPage());
      return;
    }

    const q = test.all[i];
    pane.sec.textContent = q.sectionTitle;
    pane.dir.hidden = !test.sections[q.sectionIndex].directions;
    pane.next.textContent = i === n - 1 ? "Review" : "Next";
    pane.q = h("section", { class: "qpane", "aria-label": `Question ${q.number}` });
    renderQuestionPane(q);

    if (R.hasPassage(q)) {
      pane.clear.hidden = false;
      pane.passage = h("div", { class: "passage" });
      paintPassage(q);
      const left = h("section", { class: "pane pane--left", "aria-label": "Passage" }, pane.passage);
      const div = h("div", { class: "divider", role: "separator", tabindex: "0", "aria-orientation": "vertical", "aria-label": "Resize panels" }, h("span", { class: "divider__grip" }));
      const right = h("section", { class: "pane pane--right" }, pane.q);
      const split = h("div", { class: "split" }, left, div, right);
      split.style.setProperty("--left", splitPct + "%");
      bindDivider(div, split);
      pane.body.append(split);
    } else {
      pane.clear.hidden = true;
      pane.passage = null;
      pane.body.append(h("div", { class: "solo" }, pane.q));
    }
  }

  function renderQuestionPane(q) {
    const el = pane.q;
    el.innerHTML = "";
    const fl = isFlagged(q);
    const flagBtn = h("button", { type: "button", class: "flag" + (fl ? " is-on" : ""), "aria-pressed": String(fl), onclick: () => toggleFlag(q) },
      Chrome.icon("flag"), fl ? "Marked for review" : "Mark for review");
    const elimBtn = q.type === "mcq" ? h("button", {
      type: "button", class: "elim-toggle" + (elimMode ? " is-on" : ""), "aria-pressed": String(elimMode),
      title: "Cross out answer choices", "aria-label": "Cross out answer choices",
      onclick: () => { elimMode = !elimMode; renderQuestionPane(q); }
    }, "ABC") : null;
    el.append(h("div", { class: "qhead" }, h("span", { class: "qnum" }, q.number), flagBtn, h("span", { class: "qhead__sp" }), elimBtn));
    if (q.prompt) el.append(h("div", { class: "prompt", html: R.promptHTML(q) }));
    el.append(R.answerArea(q, A.responses[q.id], (v) => setResponse(q, v), {
      showElim: q.type === "mcq" && elimMode,
      eliminated: A.eliminated[q.id] || [],
      onEliminate: (L, on) => {
        const s = new Set(A.eliminated[q.id] || []);
        on ? s.add(L) : s.delete(L);
        A.eliminated[q.id] = Array.from(s);
        saveSoon();
        renderQuestionPane(q);
      }
    }));
  }

  function setResponse(q, v) { A.responses[q.id] = v; paintRail(); saveSoon(); }

  function toggleFlag(q) {
    A.flagged = isFlagged(q) ? A.flagged.filter((id) => id !== q.id) : A.flagged.concat(q.id);
    renderQuestionPane(q); paintRail(); saveSoon();
  }

  function paintTimer(left, elapsed) {
    if (left == null) { pane.timer.textContent = U.fmtClock(elapsed); return; }
    pane.timer.textContent = U.fmtClock(left);
    const low = left <= 300;
    pane.timer.classList.toggle("is-low", low);
    if (low && !warned) {
      warned = true;
      if (pane.timer.classList.contains("is-hidden")) pane.timerToggle.click();
      Chrome.toast("5 minutes left");
    }
  }

  function showDirections() {
    const sec = test.sections[test.all[Math.min(nav.i, test.all.length - 1)].sectionIndex];
    Chrome.modal({ title: sec.title, body: h("div", { class: "prose", html: sec.directions || "" }), actions: [{ label: "Close", primary: true }] });
  }

  /* ---------- Question navigator & review page ---------- */
  function qGrid(onPick) {
    return test.sections.map((sec, si) => {
      const qs = test.all.filter((q) => q.sectionIndex === si);
      if (!qs.length) return null;
      return h("div", { class: "qgroup" },
        test.sections.length > 1 ? h("h3", { class: "qgroup__title" }, sec.title) : null,
        h("div", { class: "qgrid" }, qs.map((q) => {
          const i = q.number - 1;
          return h("button", {
            type: "button",
            class: "qcell" + (isAnswered(q) ? " is-done" : "") + (isFlagged(q) ? " is-flag" : "") + (i === nav.i ? " is-cur" : ""),
            "aria-label": `Question ${q.number}, ${isAnswered(q) ? "answered" : "unanswered"}${isFlagged(q) ? ", marked for review" : ""}`,
            onclick: () => onPick(i)
          }, String(q.number));
        })));
    });
  }
  const legend = () => h("div", { class: "legend" },
    h("span", {}, h("i", { class: "qcell qcell--k is-cur" }), "Current"),
    h("span", {}, h("i", { class: "qcell qcell--k" }), "Unanswered"),
    h("span", {}, h("i", { class: "qcell qcell--k is-done" }), "Answered"),
    h("span", {}, h("i", { class: "qcell qcell--k is-flag" }), "Marked for review"));

  function openNavigator() {
    const close = Chrome.modal({
      title: test.title, wide: true,
      body: h("div", {}, legend(), qGrid((i) => { close(); nav.go(i); })),
      actions: [{ label: "Go to review page", primary: true, onClick: () => nav.go(test.all.length) }]
    });
  }

  function checkPage() {
    const un = test.all.filter((q) => !isAnswered(q)).length;
    const fl = A.flagged.length;
    return h("div", { class: "check" },
      h("h2", { class: "check__title" }, "Check your work"),
      h("p", { class: "lede" }, "Select a question to go back to it. When you're ready, select Submit test."),
      h("p", { class: "check__counts" },
        `${test.all.length - un} of ${test.all.length} answered`,
        un ? h("span", { class: "tag tag--bad" }, `${un} unanswered`) : null,
        fl ? h("span", { class: "tag tag--flag" }, `${fl} marked for review`) : null),
      legend(),
      qGrid((i) => nav.go(i)));
  }

  function confirmSubmit() {
    const un = test.all.filter((q) => !isAnswered(q)).length;
    Chrome.modal({
      title: "Submit test?",
      body: h("p", {}, un ? `You have ${un} unanswered question${un > 1 ? "s" : ""}. You can't change your answers after submitting.` : "You can't change your answers after submitting."),
      actions: [{ label: "Keep working" }, { label: "Submit test", primary: true, onClick: () => submit(false) }]
    });
  }

  function onKey(e) {
    if (Chrome.modalOpen || /INPUT|SELECT|TEXTAREA/.test(e.target.tagName)) return;
    if (e.key === "ArrowRight" && !nav.onReview) nav.next();
    else if (e.key === "ArrowLeft") nav.prev();
  }

  function bindDivider(div, split) {
    const set = (p) => { splitPct = Math.min(72, Math.max(28, p)); split.style.setProperty("--left", splitPct + "%"); };
    div.addEventListener("pointerdown", (e) => {
      e.preventDefault();
      div.setPointerCapture(e.pointerId);
      const rect = split.getBoundingClientRect();
      const move = (ev) => set(((ev.clientX - rect.left) / rect.width) * 100);
      const up = () => { div.removeEventListener("pointermove", move); div.removeEventListener("pointerup", up); };
      div.addEventListener("pointermove", move);
      div.addEventListener("pointerup", up);
    });
    div.addEventListener("keydown", (e) => {
      if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return;
      e.preventDefault(); e.stopPropagation();
      set(splitPct + (e.key === "ArrowLeft" ? -4 : 4));
    });
  }

  /* ---------- Highlighting ---------- */
  function paintPassage(q) {
    const list = A.highlights[q.id] || [];
    pane.passage.innerHTML = R.passageHTML(q);
    Highlighter.apply(pane.passage, list);
    pane.clear.disabled = !list.length;
  }

  function showPop(rect, label, action) {
    hidePop();
    hlPop = h("div", { class: "hl-pop", role: "toolbar" },
      h("button", { type: "button", onmousedown: (e) => e.preventDefault(), onclick: () => { action(); hidePop(); } }, label));
    document.body.append(hlPop);
    const w = hlPop.offsetWidth;
    const top = rect.top > 60 ? rect.top - 46 : rect.bottom + 8;
    hlPop.style.top = Math.max(8, top) + "px";
    hlPop.style.left = Math.min(window.innerWidth - w - 8, Math.max(8, rect.left + rect.width / 2 - w / 2)) + "px";
  }
  function hidePop() { if (hlPop) { hlPop.remove(); hlPop = null; } }

  function onSelectEnd() {
    const root = pane.passage;
    if (!root) return;
    const sel = window.getSelection();
    if (!sel.rangeCount || sel.isCollapsed) return;
    const r = sel.getRangeAt(0);
    if (!r.toString().trim()) return;
    const off = Highlighter.offsets(root, r);
    if (!off) return;
    const q = test.all[nav.i];
    showPop(r.getBoundingClientRect(), "Highlight", () => {
      A.highlights[q.id] = Highlighter.add(A.highlights[q.id], off);
      sel.removeAllRanges();
      paintPassage(q); saveSoon();
    });
  }

  function showRemovePop(mark) {
    const q = test.all[nav.i];
    const off = Highlighter.offsetOf(pane.passage, mark, 0);
    showPop(mark.getBoundingClientRect(), "Remove highlight", () => {
      A.highlights[q.id] = Highlighter.removeAt(A.highlights[q.id], off);
      paintPassage(q); saveSoon();
    });
  }

  function clearHighlights() {
    const q = test.all[nav.i];
    if (!q || !(A.highlights[q.id] || []).length) return;
    delete A.highlights[q.id];
    paintPassage(q); saveSoon();
  }

  /* ---------- Submit & results ---------- */
  async function submit(auto) {
    if (submitting) return;
    submitting = true;
    timer.stop(); hidePop(); Chrome.closeModal();
    document.removeEventListener("keydown", onKey);
    const g = Scoring.gradeAll(test, A.responses);
    const elapsed = timer.elapsed();
    A.durationSec = Math.round(A.timeLimitSec ? Math.min(elapsed, A.timeLimitSec) : elapsed);
    A.status = "submitted";
    A.submittedAt = new Date().toISOString();
    A.autoSubmitted = !!auto;
    A.results = g.results;
    A.score = { correct: g.correct, incorrect: g.incorrect, unanswered: g.unanswered, total: g.total, percent: g.percent, sections: g.sections };
    A.keys = {}; A.answerText = {};
    test.all.forEach((q) => { A.keys[q.id] = Scoring.keyText(q); A.answerText[q.id] = Scoring.responseText(q, A.responses[q.id]); });
    let err = null;
    try { await Store.save(A); localStorage.removeItem(ACTIVE(test.id)); } catch (e) { err = e; }
    showResults(auto, err);
  }

  function showResults(auto, err) {
    document.body.classList.remove("in-exam");
    app.innerHTML = "";
    let onlyMissed = false;
    const list = h("div");
    const paint = () => { list.innerHTML = ""; list.append(Review.render(test, A, { onlyMissed })); };
    const retry = h("button", {
      class: "linkbtn", type: "button", onclick: async () => {
        try { await Store.save(A); localStorage.removeItem(ACTIVE(test.id)); saveErr.remove(); Chrome.toast("Result saved"); }
        catch (e) { Chrome.toast("Still can't save: " + e.message); }
      }
    }, "Try again");
    const saveErr = err ? h("div", { class: "notice notice--bad", role: "alert" }, `Your result could not be saved (${err.message}). `, retry) : null;
    const hist = `history.html?name=${encodeURIComponent(A.student.name)}${A.student.studentId ? "&sid=" + encodeURIComponent(A.student.studentId) : ""}`;

    app.append(Chrome.header("tests"), h("main", { class: "wrap" },
      saveErr,
      auto ? h("div", { class: "notice", role: "status" }, "Time ran out, so the test was submitted automatically.") : null,
      Review.summary(A),
      h("div", { class: "row" }, h("a", { class: "btn", href: hist }, "See all my results"), h("a", { class: "btn", href: "index.html" }, "Back to tests")),
      h("div", { class: "section-bar" },
        h("h2", { class: "h2" }, "Answer review"),
        h("label", { class: "check-label" },
          h("input", { type: "checkbox", onchange: (e) => { onlyMissed = e.target.checked; paint(); } }),
          "Show only questions I missed")),
      list));
    paint();
    window.scrollTo(0, 0);
  }
})();
