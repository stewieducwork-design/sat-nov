/* Home page: hero, the list of tests from questions/data/manifest.js (newest first), how it works. */
(async function () {
  const { h } = U;
  const app = document.getElementById("app");
  const cfg = window.APP_CONFIG || {};
  await Store.init();

  const tests = QBank.manifest().filter((t) => !t.hidden).slice().reverse();
  const hrefOf = (t) => "test.html?id=" + encodeURIComponent(t.id);
  const inProgress = (t) => !!localStorage.getItem("ep_active_" + t.id);
  const band = (cls, ...kids) => h("section", { class: "band " + cls }, h("div", { html: Art.wave(), class: "band__edge" }), h("div", { class: "band__in" }, ...kids));

  const card = (t, i) => {
    // Big label on the card: manifest "cover" if set, else digits in the title, else list position.
    const num = t.cover || (String(t.title).match(/\d+/) || [String(tests.length - i)])[0];
    const meta = [t.questions ? `${t.questions} questions` : null, t.minutes ? `${t.minutes} min` : null].filter(Boolean).join(", ");
    const resume = inProgress(t);
    return h("li", { class: "tcard" + (i === 0 ? " tcard--new" : "") },
      h("a", { class: "tcard__top", href: hrefOf(t), tabindex: "-1", "aria-hidden": "true" },
        h("span", { class: "tcard__num" }, num.padStart(2, "0")),
        i === 0 ? h("span", { class: "tcard__badge" }, "Newest") : null),
      h("div", { class: "tcard__body" },
        h("h3", { class: "tcard__title" }, t.title),
        t.description ? h("p", { class: "tcard__desc" }, t.description) : null,
        h("div", { class: "tcard__foot" },
          meta ? h("span", { class: "tcard__meta" }, meta) : h("span"),
          h("a", { class: "btn" + (resume ? "" : " btn--primary"), href: hrefOf(t) }, resume ? "Resume" : "Start"))));
  };

  const step = (icon, title, text) => h("li", { class: "step" },
    h("div", { class: "step__art", html: Art.icon(icon) }),
    h("div", { class: "step__body" }, h("h3", { class: "step__title" }, title), h("p", {}, text)));

  const newest = tests[0];
  document.body.classList.add("is-home");
  app.append(
    h("div", { class: "hero" },
      Chrome.header("tests", { band: true }),
      h("div", { class: "hero__in" },
        h("div", { class: "hero__copy" },
          h("h1", { class: "wordmark" }, h("span", {}, "echelon"), h("span", {}, "practice")),
          h("p", { class: "hero__sub" }, cfg.tagline || "One test a day. Real test-day feel."),
          h("p", { class: "hero__text" }, "Timed like the real thing, graded the second you submit, and saved so you can see how far you've come."),
          newest ? h("a", { class: "btn btn--sun btn--lg", href: hrefOf(newest) }, inProgress(newest) ? `Resume ${newest.title}` : `Start ${newest.title}`) : null),
        h("div", { class: "hero__art", html: Art.robot() }))),
    band("band--sun",
      Chrome.notice(),
      h("h2", { class: "band__title" }, "Tests"),
      tests.length
        ? h("ul", { class: "tgrid" }, tests.map(card))
        : h("p", { class: "empty" }, "No tests yet. Add a question file to questions/data and list it in manifest.js.")),
    band("band--cream",
      h("h2", { class: "band__title" }, "How it works"),
      h("ol", { class: "steps" },
        step("name", "Enter your name", "Type your full name, and your student ID if you have one. That's how your results find their way back to you."),
        step("clock", "Beat the clock", "Split screen, highlighter, flag for review, cross out choices. Everything you'll have on test day, with the timer running."),
        step("check", "Review every answer", "See your score right away, then go through each question with the correct answer and an explanation."))),
    Chrome.footer());
})();
