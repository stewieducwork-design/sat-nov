/* Wall-clock timer. Counts down when limitSec is set, otherwise counts up.
   Uses the attempt's start time, so a reload does not reset the clock. */
(function () {
  class Timer {
    constructor({ limitSec = null, startedAt = Date.now(), onTick = () => {}, onExpire = () => {} }) {
      Object.assign(this, { limitSec, startedAt, onTick, onExpire });
      this.iv = null;
    }
    elapsed() { return (Date.now() - this.startedAt) / 1000; }
    remaining() { return this.limitSec == null ? null : this.limitSec - this.elapsed(); }
    start() { this.stop(); this.iv = setInterval(() => this.tick(), 250); this.tick(); }
    stop() { if (this.iv) clearInterval(this.iv); this.iv = null; }
    tick() {
      const left = this.remaining();
      this.onTick(left, this.elapsed());
      if (left != null && left <= 0) { this.stop(); this.onExpire(); }
    }
  }
  window.Timer = Timer;
})();
