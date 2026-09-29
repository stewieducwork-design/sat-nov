/* Original inline illustrations: the mascot, step icons, brand mark and the wavy band edge. */
(function () {
  // Same hexes as the tokens in styles.css (SVG attributes can't read CSS variables in every browser).
  const INK = "#121318", BLUE = "#3D63F5", SUN = "#FFC83D", SUN_D = "#E9A82A",
    PINK = "#F4A9E4", CREAM = "#FFF6E3", CREAM_D = "#EADCBF", SKY = "#D6E1FF";

  const star = (x, y, s) =>
    `<path d="M${x} ${y - s} Q${x} ${y} ${x + s} ${y} Q${x} ${y} ${x} ${y + s} Q${x} ${y} ${x - s} ${y} Q${x} ${y} ${x} ${y - s}Z" fill="${SUN}"/>`;

  const bubble = (cx, letter, filled) =>
    `<circle cx="${cx}" cy="236" r="10" fill="${filled ? BLUE : "#fff"}" stroke-width="3"/>` +
    `<text x="${cx}" y="240" text-anchor="middle" font-size="11" font-weight="800" font-family="Be Vietnam Pro, Arial, sans-serif" fill="${filled ? "#fff" : INK}" stroke="none">${letter}</text>`;

  const Art = {
    /* The mascot: a boxy test-taking robot with answer bubbles on its chest. */
    robot() {
      return `<svg class="robot" viewBox="0 0 340 380" role="img" aria-label="A friendly robot holding up a pencil">
<g stroke="${INK}" stroke-width="4" stroke-linejoin="round" stroke-linecap="round">
  ${star(44, 96, 18)}${star(306, 262, 14)}${star(62, 300, 10)}
  <ellipse cx="170" cy="340" rx="124" ry="24" fill="${PINK}"/>
  <rect x="128" y="272" width="28" height="52" rx="8" fill="${SUN}"/>
  <rect x="186" y="272" width="28" height="52" rx="8" fill="${SUN}"/>
  <rect x="116" y="310" width="50" height="22" rx="10" fill="${INK}"/>
  <rect x="176" y="310" width="50" height="22" rx="10" fill="${INK}"/>
  <rect x="106" y="178" width="144" height="108" rx="20" fill="${SUN_D}"/>
  <rect x="96" y="168" width="144" height="108" rx="20" fill="${SUN}"/>
  <rect x="112" y="184" width="112" height="74" rx="12" fill="#fff" stroke-width="3"/>
  <rect x="124" y="197" width="72" height="6" rx="3" fill="${INK}" stroke="none"/>
  <rect x="124" y="209" width="46" height="6" rx="3" fill="${INK}" opacity=".25" stroke="none"/>
  ${bubble(136, "A")}${bubble(160, "B", true)}${bubble(184, "C")}${bubble(208, "D")}
  <rect x="70" y="184" width="26" height="66" rx="12" fill="${SUN}"/>
  <circle cx="83" cy="256" r="13" fill="${CREAM}"/>
  <g transform="rotate(20 282 132)">
    <rect x="271" y="30" width="22" height="18" rx="5" fill="${PINK}"/>
    <rect x="271" y="48" width="22" height="10" fill="${SKY}"/>
    <rect x="271" y="58" width="22" height="86" fill="${SUN}"/>
    <line x1="282" y1="62" x2="282" y2="140" stroke-width="2.5"/>
    <path d="M271 144 L293 144 L282 170 Z" fill="${CREAM}"/>
    <path d="M277 158 L287 158 L282 170 Z" fill="${INK}"/>
  </g>
  <line x1="236" y1="194" x2="274" y2="142" stroke-width="30"/>
  <line x1="236" y1="194" x2="274" y2="142" stroke="${SUN}" stroke-width="22"/>
  <circle cx="278" cy="136" r="14" fill="${CREAM}"/>
  <rect x="156" y="150" width="24" height="22" fill="${INK}"/>
  <rect x="84" y="90" width="16" height="34" rx="6" fill="${PINK}"/>
  <rect x="236" y="90" width="16" height="34" rx="6" fill="${PINK}"/>
  <rect x="106" y="62" width="136" height="96" rx="22" fill="${CREAM_D}"/>
  <rect x="98" y="54" width="136" height="96" rx="22" fill="${CREAM}"/>
  <rect x="112" y="68" width="108" height="66" rx="14" fill="${BLUE}" stroke-width="3"/>
  <rect x="138" y="84" width="14" height="22" rx="7" fill="#fff" stroke="none"/>
  <rect x="180" y="84" width="14" height="22" rx="7" fill="#fff" stroke="none"/>
  <path d="M150 114 Q166 128 182 114" fill="none" stroke="#fff"/>
  <circle cx="128" cy="116" r="5" fill="${PINK}" stroke="none"/>
  <circle cx="204" cy="116" r="5" fill="${PINK}" stroke="none"/>
  <line x1="166" y1="54" x2="166" y2="30"/>
  <circle cx="166" cy="22" r="10" fill="${PINK}"/>
</g></svg>`;
    },

    /* Icons for the "How it works" steps (64×64). */
    icon(name) {
      const g = (inner) => `<svg viewBox="0 0 64 64" aria-hidden="true"><g stroke="${INK}" stroke-width="3" stroke-linejoin="round" stroke-linecap="round">${inner}</g></svg>`;
      if (name === "name") return g(`
        <rect x="8" y="14" width="48" height="38" rx="8" fill="#fff"/>
        <path d="M8 26 V22 a8 8 0 0 1 8 -8 h32 a8 8 0 0 1 8 8 v4 Z" fill="${BLUE}"/>
        <rect x="24" y="9" width="16" height="10" rx="3" fill="${SUN}"/>
        <rect x="16" y="34" width="32" height="5" rx="2.5" fill="${INK}" stroke="none"/>
        <rect x="16" y="43" width="20" height="5" rx="2.5" fill="${INK}" opacity=".3" stroke="none"/>`);
      if (name === "clock") return g(`
        <rect x="27" y="6" width="10" height="8" rx="2" fill="${PINK}"/>
        <circle cx="32" cy="36" r="21" fill="${SUN}"/>
        <circle cx="32" cy="36" r="15" fill="#fff" stroke-width="2.5"/>
        <path d="M32 36 V26 M32 36 L39 40"/>
        <circle cx="32" cy="36" r="2" fill="${INK}"/>`);
      return g(`
        <rect x="10" y="8" width="38" height="48" rx="6" fill="#fff"/>
        <circle cx="20" cy="22" r="4.5" fill="${BLUE}"/><rect x="28" y="20" width="14" height="4" rx="2" fill="${INK}" stroke="none"/>
        <circle cx="20" cy="36" r="4.5" fill="#fff"/><rect x="28" y="34" width="10" height="4" rx="2" fill="${INK}" stroke="none"/>
        <circle cx="42" cy="46" r="13" fill="${PINK}"/>
        <path d="M36 46 l4 4 l8 -8" fill="none"/>`);
    },

    /* Brand mark: a filled answer bubble. */
    mark() {
      return `<svg class="mark" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="13" fill="#fff" stroke="${INK}" stroke-width="3"/><circle cx="16" cy="16" r="7" fill="${SUN}" stroke="${INK}" stroke-width="2.5"/></svg>`;
    },

    /* Wavy top edge for a band; takes the band's own colour through currentColor. */
    wave() {
      return `<svg class="wave" viewBox="0 0 1440 40" preserveAspectRatio="none" aria-hidden="true"><path d="M0 20 C120 0 240 40 360 20 S600 0 720 20 S960 40 1080 20 S1320 0 1440 20 V40 H0 Z" fill="currentColor"/></svg>`;
    }
  };
  window.Art = Art;
})();
