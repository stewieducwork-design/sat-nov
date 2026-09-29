/* Where attempts live. Every page talks to `Store`; the backend is chosen in config.js.
   An attempt is one document: student, test, timing, responses, flags, highlights, score. */
(function () {
  const LS_KEY = "ep_attempts_v1";
  const lower = (s) => U.normName(s).toLowerCase();
  const matches = (a, { name, studentId }) =>
    studentId && studentId.trim() ? a.studentIdLower === studentId.trim().toLowerCase() : a.nameLower === lower(name);

  const Local = {
    name: "local",
    async init() {},
    _all() { return U.readJSON(LS_KEY, {}) || {}; },
    async save(a) {
      const m = this._all();
      m[a.id] = a;
      try { localStorage.setItem(LS_KEY, JSON.stringify(m)); }
      catch (e) { throw new Error("this browser's storage is full"); }
      return a;
    },
    async get(id) { return this._all()[id] || null; },
    async listAll() { return Object.values(this._all()); },
    async listByStudent(q) { return (await this.listAll()).filter((a) => matches(a, q)); }
  };

  const SDK = "https://www.gstatic.com/firebasejs/10.12.2/";
  const loadScript = (src) => new Promise((res, rej) => {
    const s = document.createElement("script");
    s.src = src; s.onload = res; s.onerror = () => rej(new Error("could not load " + src));
    document.head.append(s);
  });

  const Fire = {
    name: "firebase",
    async init(cfg, col) {
      if (!window.firebase) {
        await loadScript(SDK + "firebase-app-compat.js");
        await loadScript(SDK + "firebase-firestore-compat.js");
      }
      if (!firebase.apps.length) firebase.initializeApp(cfg);
      this.db = firebase.firestore();
      this.col = col;
      await this.db.collection(col).limit(1).get(); // fails fast on wrong project or rules
    },
    c() { return this.db.collection(this.col); },
    async save(a) { await this.c().doc(a.id).set(JSON.parse(JSON.stringify(a))); return a; },
    async get(id) { const d = await this.c().doc(id).get(); return d.exists ? d.data() : null; },
    async listAll() { return (await this.c().get()).docs.map((d) => d.data()); },
    async listByStudent({ name, studentId }) {
      const q = studentId && studentId.trim()
        ? this.c().where("studentIdLower", "==", studentId.trim().toLowerCase())
        : this.c().where("nameLower", "==", lower(name));
      return (await q.get()).docs.map((d) => d.data());
    }
  };

  const Store = {
    backend: Local,
    mode: "local",
    notice: null,
    _ready: null,
    init() {
      if (this._ready) return this._ready;
      this._ready = (async () => {
        const cfg = window.APP_CONFIG || {};
        if (cfg.storage !== "firebase") return;
        const fb = cfg.firebase || {};
        if (!fb.apiKey || !fb.projectId) {
          this.notice = 'config.js is set to "firebase" but the firebase block is empty. Results are being saved in this browser only.';
          return;
        }
        try {
          await Fire.init(fb, cfg.firebaseCollection || "practiceAttempts");
          this.backend = Fire;
          this.mode = "firebase";
        } catch (e) {
          console.error(e);
          this.notice = `Could not reach Firebase project "${fb.projectId}" (${e.code || e.message}). Results are being saved in this browser only.`;
        }
      })();
      return this._ready;
    },
    save(a) { return this.backend.save(a); },
    get(id) { return this.backend.get(id); },
    listAll() { return this.backend.listAll(); },
    listByStudent(q) { return this.backend.listByStudent(q); }
  };
  window.Store = Store;
})();
