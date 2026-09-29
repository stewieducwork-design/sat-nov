/* Aggregations for the teacher dashboard. Pure functions over attempt records. */
(function () {
  const avg = (xs) => (xs.length ? xs.reduce((s, x) => s + x, 0) / xs.length : null);
  const done = (list) => list.filter((a) => a.status === "submitted" && a.score);
  const byNewest = (a, b) => (b.startedAt || "").localeCompare(a.startedAt || "");

  const Stats = {
    avg, done, byNewest,
    overview(list) {
      const d = done(list);
      return {
        students: new Set(list.map((a) => a.student.key)).size,
        submitted: d.length,
        inProgress: list.filter((a) => a.status === "in-progress").length,
        avgPercent: avg(d.map((a) => a.score.percent)),
        avgTime: avg(d.map((a) => a.durationSec || 0))
      };
    },
    students(list) {
      const map = new Map();
      list.forEach((a) => {
        const k = a.student.key;
        if (!map.has(k)) map.set(k, { key: k, name: a.student.name, studentId: a.student.studentId, attempts: [] });
        map.get(k).attempts.push(a);
      });
      return Array.from(map.values()).map((s) => {
        s.attempts.sort(byNewest);
        const d = done(s.attempts);
        s.name = s.attempts[0].student.name;
        s.submitted = d.length;
        s.avgPercent = avg(d.map((a) => a.score.percent));
        s.best = d.length ? Math.max(...d.map((a) => a.score.percent)) : null;
        s.avgTime = avg(d.map((a) => a.durationSec || 0));
        s.last = s.attempts[0].startedAt;
        return s;
      }).sort((a, b) => (b.last || "").localeCompare(a.last || ""));
    },
    tests(list) {
      const map = new Map();
      list.forEach((a) => {
        if (!map.has(a.testId)) map.set(a.testId, { testId: a.testId, title: a.testTitle, attempts: [] });
        map.get(a.testId).attempts.push(a);
      });
      return Array.from(map.values()).map((t) => {
        const d = done(t.attempts);
        const p = d.map((a) => a.score.percent);
        t.submitted = d.length;
        t.students = new Set(t.attempts.map((a) => a.student.key)).size;
        t.avgPercent = avg(p);
        t.high = p.length ? Math.max(...p) : null;
        t.low = p.length ? Math.min(...p) : null;
        t.avgTime = avg(d.map((a) => a.durationSec || 0));
        return t;
      }).sort((a, b) => a.title.localeCompare(b.title, undefined, { numeric: true }));
    },
    /* Per-question accuracy for one test. Needs the loaded test for question order and keys. */
    questions(test, attempts) {
      const d = done(attempts);
      return test.all.map((q) => {
        let correct = 0, answered = 0;
        const picks = {};
        d.forEach((a) => {
          const v = (a.responses || {})[q.id];
          if (Scoring.isAnswered(q, v)) {
            answered++;
            const label = Scoring.responseText(q, v);
            picks[label] = (picks[label] || 0) + 1;
          }
          if (a.results && a.results[q.id] === true) correct++;
        });
        const key = Scoring.keyText(q);
        const wrong = Object.entries(picks).filter(([k]) => k !== key).sort((a, b) => b[1] - a[1])[0];
        return { q, n: d.length, answered, correct, pct: d.length ? (correct / d.length) * 100 : null, commonWrong: wrong ? { label: wrong[0], count: wrong[1] } : null };
      });
    }
  };
  window.Stats = Stats;
})();
