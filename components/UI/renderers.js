/* Renders question content. One function per question type; each returns a DOM element
   and reports changes through onChange(value). Renderers never touch storage or scoring. */
(function () {
  const { h } = U;

  const paras = (s) => (/^\s*</.test(s) ? s : s.trim().split(/\n\s*\n/).map((p) => `<p>${p.trim()}</p>`).join(""));
  const blanks = (html) => html.replace(/_{3,}/g, '<span class="blank" role="img" aria-label="blank"></span>');

  function mcq(q, value, onChange, opts) {
    const elim = opts.eliminated || [];
    const wrap = h("div", { class: "choices" + (opts.showElim ? " has-elim" : ""), role: "radiogroup", "aria-label": "Answer choices" });
    let current = value;
    const rows = [];
    const paint = () => rows.forEach(({ row, main, L }) => {
      row.classList.toggle("is-picked", current === L);
      main.setAttribute("aria-checked", String(current === L));
    });
    q.choices.forEach((c, i) => {
      const L = U.letters[i];
      const out = elim.includes(L);
      const main = h("button", {
        type: "button", class: "choice__main", role: "radio",
        onclick: () => {
          current = L; paint(); onChange(L);
          if (out && opts.onEliminate) opts.onEliminate(L, false);
        }
      }, h("span", { class: "choice__letter" }, L), h("span", { class: "choice__text", html: c }));
      const row = h("div", { class: "choice" + (out ? " is-out" : "") }, main);
      if (opts.showElim) {
        row.append(h("button", {
          type: "button", class: "choice__strike", "aria-pressed": String(out),
          "aria-label": (out ? "Restore choice " : "Cross out choice ") + L,
          onclick: () => opts.onEliminate(L, !out)
        }, out ? "Undo" : h("span", { class: "strike-letter" }, L)));
      }
      rows.push({ row, main, L });
      wrap.append(row);
    });
    paint();
    return wrap;
  }

  function cloze(q, value, onChange, kind) {
    const vals = Array.isArray(value) ? value.slice() : [];
    const box = h("div", { class: "cloze" });
    String(q.text || "").split(/\{\{(\d+)\}\}/).forEach((part, i) => {
      if (i % 2 === 0) { if (part) box.append(h("span", { html: part })); return; }
      const n = +part;
      if (kind === "select") {
        const sel = h("select", { class: "cloze__select", "aria-label": "Blank " + (n + 1) },
          h("option", { value: "" }, "Select…"),
          (q.options[n] || []).map((o) => h("option", { value: o }, o)));
        sel.value = vals[n] || "";
        sel.addEventListener("change", () => { vals[n] = sel.value; onChange(vals.slice()); });
        box.append(sel);
      } else {
        const inp = h("input", { class: "cloze__input", type: "text", autocomplete: "off", autocapitalize: "off", spellcheck: "false", "aria-label": "Blank " + (n + 1), size: q.width || 12 });
        inp.value = vals[n] || "";
        inp.addEventListener("input", () => { vals[n] = inp.value; onChange(vals.slice()); });
        box.append(inp);
      }
    });
    return box;
  }

  function order(q, value, onChange) {
    let seq = Array.isArray(value) ? value.slice() : [];
    const built = h("div", { class: "order__built", "aria-label": "Your answer", "aria-live": "polite" });
    const bank = h("div", { class: "order__bank", "aria-label": "Word bank" });
    const commit = () => { draw(); onChange(seq.slice()); };
    function draw() {
      built.innerHTML = ""; bank.innerHTML = "";
      if (!seq.length) built.append(h("span", { class: "order__hint" }, "Select words below to build your answer."));
      seq.forEach((idx, pos) => built.append(h("button", { type: "button", class: "tok tok--placed", "aria-label": `Remove "${q.items[idx]}"`, onclick: () => { seq.splice(pos, 1); commit(); } }, q.items[idx])));
      q.items.forEach((w, idx) => bank.append(h("button", { type: "button", class: "tok", disabled: seq.includes(idx), onclick: () => { seq.push(idx); commit(); } }, w)));
    }
    draw();
    return h("div", { class: "order" },
      h("div", { class: "order__label" }, "Your answer"), built,
      h("div", { class: "order__label" }, "Words"), bank,
      h("button", { type: "button", class: "linkbtn", onclick: () => { seq = []; commit(); } }, "Start over"));
  }

  const Renderers = {
    hasPassage(q) { return !!(q.passage || (q.notes && q.notes.length)); },
    passageHTML(q) {
      let out = "";
      if (q.passage) out += paras(q.passage);
      if (q.notes && q.notes.length) {
        out += `<p>${q.notesIntro || "While researching a topic, a student has taken the following notes:"}</p>`;
        out += '<ul class="notes">' + q.notes.map((n) => `<li>${n}</li>`).join("") + "</ul>";
      }
      return blanks(out);
    },
    promptHTML(q) { return blanks(q.prompt || ""); },
    answerArea(q, value, onChange, opts = {}) {
      switch (q.type) {
        case "mcq": return mcq(q, value, onChange, opts);
        case "select": return cloze(q, value, onChange, "select");
        case "fill": return cloze(q, value, onChange, "fill");
        case "order": return order(q, value, onChange);
      }
      return h("p", { class: "muted" }, `This question has an unknown type.`);
    }
  };
  window.Renderers = Renderers;
})();
