// Fire-and-ice logo mark for GBL HVAC LTD.
// Single source of truth: used by the <LogoMark /> component and by
// scripts/build-icons.mjs to generate the favicon (app/icon.svg).

const r2 = (n) => Math.round(n * 100) / 100;
const CX = 60;
const CY = 60;

// Point on a circle. Angle in degrees, 0 = right, 90 = down (SVG coords).
const pt = (deg, r) => {
  const a = (deg * Math.PI) / 180;
  return [r2(CX + r * Math.cos(a)), r2(CY + r * Math.sin(a))];
};

// Flame tongues licking outward along the left half of the ring.
function flames(id) {
  const out = [];
  const count = 9;
  for (let i = 0; i < count; i++) {
    const mid = 100 + (i * 160) / (count - 1); // 100deg (bottom-left) -> 260deg (top-left)
    const tall = i % 2 === 0 ? 17 : 12;
    const half = 9;
    const [bx1, by1] = pt(mid - half, 44);
    const [bx2, by2] = pt(mid + half, 44);
    const [tx, ty] = pt(mid + 7, 44 + tall); // tip curls upward
    const [c1x, c1y] = pt(mid - half - 2, 52);
    const [c2x, c2y] = pt(mid + half, 50);
    out.push(
      `<path d="M${bx1} ${by1} Q${c1x} ${c1y} ${tx} ${ty} Q${c2x} ${c2y} ${bx2} ${by2} Z" fill="url(#${id}-fire)"/>`
    );
  }
  // inner yellow cores
  for (let i = 0; i < count; i += 2) {
    const mid = 100 + (i * 160) / (count - 1);
    const [bx1, by1] = pt(mid - 4, 45);
    const [bx2, by2] = pt(mid + 4, 45);
    const [tx, ty] = pt(mid + 4, 54);
    out.push(`<path d="M${bx1} ${by1} Q${pt(mid - 4, 50).join(" ")} ${tx} ${ty} Q${pt(mid + 4, 49).join(" ")} ${bx2} ${by2} Z" fill="#FFD27A" opacity="0.9"/>`);
  }
  return out.join("");
}

// Ice crystals + snowflakes along the right half.
function snowflake(x, y, s, color) {
  const arms = [];
  for (let k = 0; k < 6; k++) {
    const a = (k * 60 * Math.PI) / 180;
    const ex = r2(x + s * Math.cos(a));
    const ey = r2(y + s * Math.sin(a));
    arms.push(`M${x} ${y}L${ex} ${ey}`);
    // little barbs
    const mx = x + s * 0.6 * Math.cos(a);
    const my = y + s * 0.6 * Math.sin(a);
    for (const d of [-0.6, 0.6]) {
      arms.push(`M${r2(mx)} ${r2(my)}L${r2(mx + s * 0.32 * Math.cos(a + d))} ${r2(my + s * 0.32 * Math.sin(a + d))}`);
    }
  }
  return `<path d="${arms.join("")}" stroke="${color}" stroke-width="1.4" stroke-linecap="round" fill="none"/>`;
}

function frost(id) {
  const out = [];
  // jagged crystal spikes
  for (let i = 0; i <= 12; i++) {
    const deg = -80 + (i * 160) / 12;
    const len = i % 3 === 0 ? 12 : i % 3 === 1 ? 7 : 9;
    const [x1, y1] = pt(deg, 45);
    const [x2, y2] = pt(deg, 45 + len);
    const [l1x, l1y] = pt(deg - 4, 45);
    const [l2x, l2y] = pt(deg + 4, 45);
    out.push(`<path d="M${l1x} ${l1y}L${x2} ${y2}L${l2x} ${l2y}Z" fill="url(#${id}-ice)" opacity="0.85"/>`);
    out.push(`<path d="M${x1} ${y1}L${x2} ${y2}" stroke="#E8FAFF" stroke-width="0.8"/>`);
  }
  const flakes = [
    [-55, 53, 5.5],
    [-15, 56, 6.5],
    [25, 54, 5],
    [60, 52, 6],
  ];
  for (const [deg, r, s] of flakes) {
    const [x, y] = pt(deg, r);
    out.push(snowflake(x, y, s, "#D4F1F7"));
  }
  return out.join("");
}

function house() {
  // simple light-blue house outline: peaked roof, chimney, 4-pane window
  return `
  <g fill="none" stroke="#A8DDE8" stroke-width="3.2" stroke-linejoin="round" stroke-linecap="round">
    <path d="M34 60 L60 37 L86 60"/>
    <path d="M70 46 V38 H77 V52"/>
    <path d="M40 55 V83 H80 V55"/>
    <rect x="51" y="62" width="18" height="15" rx="1"/>
    <path d="M60 62 V77 M51 69.5 H69" stroke-width="2.4"/>
  </g>`;
}

export function logoSvgInner(id = "gbl") {
  return `
  <defs>
    <linearGradient id="${id}-fire" x1="0" y1="1" x2="0" y2="0">
      <stop offset="0" stop-color="#C8261A"/>
      <stop offset="0.5" stop-color="#F07A2B"/>
      <stop offset="1" stop-color="#FFB547"/>
    </linearGradient>
    <linearGradient id="${id}-ice" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#E8FAFF"/>
      <stop offset="1" stop-color="#5FB8CC"/>
    </linearGradient>
    <linearGradient id="${id}-ring" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#F07A2B"/>
      <stop offset="0.48" stop-color="#F07A2B"/>
      <stop offset="0.52" stop-color="#A8DDE8"/>
      <stop offset="1" stop-color="#A8DDE8"/>
    </linearGradient>
  </defs>
  ${flames(id)}
  ${frost(id)}
  <circle cx="60" cy="60" r="44" fill="#141C33" stroke="url(#${id}-ring)" stroke-width="3"/>
  ${house()}`;
}

export function logoSvg(id = "gbl", size = 120) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-8 -8 136 136" width="${size}" height="${size}">${logoSvgInner(id)}</svg>`;
}
