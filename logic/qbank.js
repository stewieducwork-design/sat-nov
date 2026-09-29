/* Loads question files from questions/data and normalises them.
   A question file only has to call QBank.register({...}). */
(function () {
  const TYPES = { mcq: "mcq", "multiple-choice": "mcq", reading: "mcq", select: "select", fill: "fill", order: "order", rearrange: "order" };

  function normalize(raw) {
    const t = Object.assign({ title: raw.id, description: "" }, raw);
    t.sections = Array.isArray(raw.sections) && raw.sections.length
      ? raw.sections
      : [{ title: t.title, directions: raw.directions || "", questions: raw.questions || [] }];

    const all = [], warnings = [], seen = new Set();
    t.sections.forEach((sec, si) => {
      (sec.questions || []).forEach((q0) => {
        const q = Object.assign({}, q0);
        q.type = TYPES[String(q.type || "mcq").toLowerCase()];
        q.number = all.length + 1;
        q.id = q.id || "q" + q.number;
        q.sectionIndex = si;
        q.sectionTitle = sec.title || "";
        const tag = `Q${q.number} (${q.id})`;
        if (!q.type) warnings.push(`${tag}: unknown type "${q0.type}"`);
        if (seen.has(q.id)) warnings.push(`${tag}: duplicate id`);
        seen.add(q.id);

        if (q.type === "mcq") {
          if (typeof q.answer === "string") q.answer = q.answer.trim().toUpperCase();
          if (!Array.isArray(q.choices) || q.choices.length < 2) warnings.push(`${tag}: needs at least two choices`);
          else if (q.answer && U.letters.indexOf(q.answer) >= q.choices.length) warnings.push(`${tag}: answer "${q.answer}" has no matching choice`);
        }
        if (q.type === "select" || q.type === "fill") {
          const blanks = (String(q.text || "").match(/\{\{\d+\}\}/g) || []).length;
          if (!blanks) warnings.push(`${tag}: text has no {{0}} blanks`);
          if (q.answer != null && !Array.isArray(q.answer)) q.answer = [q.answer];
          if (q.type === "select" && (!Array.isArray(q.options) || q.options.length < blanks)) warnings.push(`${tag}: needs one options list per blank`);
        }
        if (q.type === "order" && (!Array.isArray(q.items) || !q.items.length)) warnings.push(`${tag}: needs an items array`);
        all.push(q);
      });
    });

    t.all = all;
    t.warnings = warnings;
    t.timeLimitSec = t.timeLimitMinutes ? Math.round(t.timeLimitMinutes * 60) : null;
    t.hash = U.hash(JSON.stringify(all.map((q) => [q.id, q.type, q.prompt, q.choices, q.answer, q.text, q.items, q.options])));
    warnings.forEach((w) => console.warn(`[${t.id}] ${w}`));
    return t;
  }

  const QBank = {
    _tests: {},
    register(raw) {
      if (!raw || !raw.id) { console.error("QBank.register: the test needs an id"); return; }
      this._tests[raw.id] = normalize(raw);
    },
    manifest() { return window.TEST_MANIFEST || []; },
    entry(id) { return this.manifest().find((t) => t.id === id); },
    load(id) {
      if (this._tests[id]) return Promise.resolve(this._tests[id]);
      const e = this.entry(id);
      if (!e) return Promise.reject(new Error(`There is no test "${id}" in questions/data/manifest.js.`));
      return new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = "questions/data/" + e.file + (e.version ? "?v=" + e.version : "");
        s.onload = () => (this._tests[id] ? res(this._tests[id]) : rej(new Error(`${e.file} loaded, but it did not register a test with id "${id}".`)));
        s.onerror = () => rej(new Error(`questions/data/${e.file} could not be loaded.`));
        document.head.append(s);
      });
    }
  };
  window.QBank = QBank;
})();
