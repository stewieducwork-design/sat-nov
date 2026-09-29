/* Page index for the test runner. Pages 0..count-1 are questions; page `count` is the review page. */
(function () {
  class Navigator {
    constructor(count, onChange) { this.count = count; this.i = 0; this.onChange = onChange; }
    get onReview() { return this.i === this.count; }
    go(i) {
      i = Math.max(0, Math.min(this.count, i));
      if (i === this.i) return;
      this.i = i;
      this.onChange(i);
    }
    next() { this.go(this.i + 1); }
    prev() { this.go(this.i - 1); }
  }
  window.Navigator = Navigator;
})();
