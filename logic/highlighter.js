/* Highlights are stored as character ranges {s, e} over a passage's text content,
   so they survive re-rendering and can be saved with the attempt. */
(function () {
  const H = {
    offsetOf(root, node, offset) {
      const r = document.createRange();
      r.setStart(root, 0);
      r.setEnd(node, offset);
      return r.toString().length;
    },
    offsets(root, range) {
      if (!root.contains(range.startContainer) || !root.contains(range.endContainer)) return null;
      const s = this.offsetOf(root, range.startContainer, range.startOffset);
      const e = this.offsetOf(root, range.endContainer, range.endOffset);
      return e > s ? { s, e } : null;
    },
    merge(list) {
      const sorted = list.filter((r) => r.e > r.s).sort((a, b) => a.s - b.s);
      const out = [];
      sorted.forEach((r) => {
        const last = out[out.length - 1];
        if (last && r.s <= last.e) last.e = Math.max(last.e, r.e);
        else out.push({ s: r.s, e: r.e });
      });
      return out;
    },
    add(list, r) { return this.merge([...(list || []), r]); },
    removeAt(list, offset) { return (list || []).filter((r) => !(offset >= r.s && offset < r.e)); },
    apply(root, list) {
      const ranges = this.merge(list || []);
      if (!ranges.length) return;
      const nodes = [];
      const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      let n, pos = 0;
      while ((n = w.nextNode())) { nodes.push({ n, start: pos, end: pos + n.data.length }); pos += n.data.length; }
      nodes.forEach(({ n, start, end }) => {
        const segs = ranges
          .filter((r) => r.s < end && r.e > start)
          .map((r) => [Math.max(r.s, start) - start, Math.min(r.e, end) - start])
          .sort((a, b) => b[0] - a[0]);
        segs.forEach(([a, b]) => {
          if (!n.data.slice(a, b).trim()) return; // skip whitespace-only pieces between blocks
          const mid = n.splitText(a);
          mid.splitText(b - a);
          const mark = document.createElement("mark");
          mark.className = "hl";
          mid.parentNode.insertBefore(mark, mid);
          mark.appendChild(mid);
        });
      });
    }
  };
  window.Highlighter = H;
})();
