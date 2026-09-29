/* Shared page chrome: site header, notices, modal dialog, toast, icons. */
(function () {
  const { h } = U;

  const Chrome = {
    header(active, opts = {}) {
      const cfg = window.APP_CONFIG || {};
      const link = (href, label, key) =>
        h("a", { href, class: "site-nav__link" + (active === key ? " is-on" : ""), "aria-current": active === key ? "page" : null }, label);
      return h("header", { class: "site-top" + (opts.band ? " site-top--band" : "") },
        h("a", { href: "index.html", class: "site-brand" }, h("span", { html: Art.mark() }), cfg.siteName || "Practice"),
        h("nav", { class: "site-nav", "aria-label": "Main" },
          link("index.html", "Tests", "tests"),
          link("history.html", "My results", "history"),
          link("teacher.html", "Teacher", "teacher")));
    },

    footer() {
      const cfg = window.APP_CONFIG || {};
      return h("footer", { class: "site-foot" },
        h("span", { class: "site-brand" }, h("span", { html: Art.mark() }), cfg.siteName || "Practice"),
        h("nav", { class: "site-foot__nav", "aria-label": "Footer" },
          h("a", { href: "history.html" }, "My results"), h("a", { href: "teacher.html" }, "Teacher")));
    },

    notice() { return Store.notice ? h("div", { class: "notice", role: "status" }, Store.notice) : null; },

    icon(name) {
      const paths = {
        flag: '<path d="M4 21V4m0 0h11l-2 4 2 4H4" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>',
        caret: '<path d="M6 15l6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
        close: '<path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>'
      };
      return h("span", { class: "ico ico--" + name, "aria-hidden": "true", html: `<svg viewBox="0 0 24 24" width="18" height="18">${paths[name]}</svg>` });
    },

    _modal: null,
    modal({ title, body, actions = [], wide = false }) {
      this.closeModal();
      const prev = document.activeElement;
      const close = () => {
        back.remove(); document.removeEventListener("keydown", onKey); this._modal = null;
        if (prev && prev.focus) prev.focus();
      };
      const onKey = (e) => { if (e.key === "Escape") { e.preventDefault(); close(); } };
      const titleId = "m" + U.uid();
      const dlg = h("div", { class: "modal" + (wide ? " modal--wide" : ""), role: "dialog", "aria-modal": "true", "aria-labelledby": titleId },
        h("div", { class: "modal__head" },
          h("h2", { class: "modal__title", id: titleId }, title),
          h("button", { class: "iconbtn", type: "button", "aria-label": "Close", onclick: close }, this.icon("close"))),
        h("div", { class: "modal__body" }, body),
        actions.length ? h("div", { class: "modal__actions" }, actions.map((a) =>
          h("button", { type: "button", class: "btn btn--pill" + (a.primary ? " btn--primary" : ""), onclick: () => { if (a.keepOpen !== true) close(); a.onClick && a.onClick(); } }, a.label))) : null);
      const back = h("div", { class: "modal-back", onmousedown: (e) => { if (e.target === back) close(); } }, dlg);
      document.body.append(back);
      document.addEventListener("keydown", onKey);
      const first = dlg.querySelector(".modal__actions .btn--primary, .modal__body button, .modal__actions button");
      (first || dlg.querySelector(".iconbtn")).focus();
      this._modal = { close };
      return close;
    },
    closeModal() { if (this._modal) this._modal.close(); },
    get modalOpen() { return !!this._modal; },

    toast(msg) {
      const t = h("div", { class: "toast", role: "status" }, msg);
      document.body.append(t);
      setTimeout(() => t.classList.add("is-out"), 3200);
      setTimeout(() => t.remove(), 3600);
    }
  };
  window.Chrome = Chrome;
})();
