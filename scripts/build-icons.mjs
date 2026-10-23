// Regenerates every icon from lib/logo-svg.mjs:
//   app/icon.svg, public/logo-icon.svg       (vector)
//   app/icon.png 512x512, app/apple-icon.png 180x180  (square PNGs, required by Google)
//   app/opengraph-image.png 1200x630          (social share card)
// Run: node scripts/build-icons.mjs   (PNG step needs Playwright + Chromium)
import { writeFileSync } from "node:fs";
import { logoSvg } from "../lib/logo-svg.mjs";

const root = new URL("../", import.meta.url);
writeFileSync(new URL("app/icon.svg", root), logoSvg("ico", 120));
writeFileSync(new URL("public/logo-icon.svg", root), logoSvg("gbl", 240));
console.log("Wrote app/icon.svg and public/logo-icon.svg");

let chromium;
try {
  ({ chromium } = await import(process.env.PLAYWRIGHT_PATH || "playwright"));
} catch {
  console.log("Playwright not available; skipped PNG icons.");
  process.exit(0);
}

const browser = await chromium.launch();
async function shot(html, w, h, file) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.setContent(`<html><body style="margin:0">${html}</body></html>`);
  await page.screenshot({ path: new URL(file, root).pathname, omitBackground: false });
  await page.close();
}
const mark = (size) => logoSvg("png", size);
const square = (size, pad) =>
  `<div style="width:${size}px;height:${size}px;background:#1E2A4A;display:flex;align-items:center;justify-content:center">${mark(size - pad * 2)}</div>`;

await shot(square(512, 24), 512, 512, "app/icon.png");
await shot(square(180, 10), 180, 180, "app/apple-icon.png");
await shot(
  `<div style="width:1200px;height:630px;box-sizing:border-box;padding:70px;display:flex;align-items:center;gap:56px;font-family:Arial,Helvetica,sans-serif;color:#fff;
     background:radial-gradient(circle at 0% 60%,rgba(240,122,43,.35),transparent 45%),radial-gradient(circle at 100% 20%,rgba(168,221,232,.3),transparent 45%),#141C33">
     ${mark(360)}
     <div>
       <div style="font-size:30px;font-weight:800;letter-spacing:6px;color:#A8DDE8">GBL HVAC LTD</div>
       <div style="font-size:64px;font-weight:900;line-height:1.05;margin-top:16px">Calgary's 24/7<br>HVAC Experts</div>
       <div style="font-size:28px;margin-top:20px;color:#D4F1F7">Heating · Cooling · Refrigeration</div>
       <div style="display:inline-block;margin-top:30px;background:#F07A2B;border-radius:14px;padding:14px 28px;font-size:40px;font-weight:900">403-970-6988</div>
     </div>
   </div>`,
  1200,
  630,
  "app/opengraph-image.png"
);
await browser.close();
console.log("Wrote app/icon.png, app/apple-icon.png, app/opengraph-image.png");
