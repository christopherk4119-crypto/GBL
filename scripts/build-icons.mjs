// Regenerates the icons and social share image from the client's logo PNGs in /public:
//   app/icon.png 512x512, app/apple-icon.png 180x180  (ring on navy, square as Google requires)
//   app/opengraph-image.png 1200x630                  (full logo + phone, for link previews)
// app/favicon.ico (16/32/48, ring on a navy rounded square) is made separately with Pillow, see README.
// Run: node scripts/build-icons.mjs   (needs Playwright + Chromium)
import { readFileSync } from "node:fs";

const root = new URL("../", import.meta.url);
const dataUri = (file) => `data:image/png;base64,${readFileSync(new URL(file, root)).toString("base64")}`;
const MARK = dataUri("public/logo-mark.png");
const FULL = dataUri("public/logo.png");

const { chromium } = await import(process.env.PLAYWRIGHT_PATH || "playwright");
const browser = await chromium.launch();
async function shot(html, w, h, file) {
  const page = await browser.newPage({ viewport: { width: w, height: h } });
  await page.setContent(`<html><body style="margin:0">${html}</body></html>`);
  await page.waitForLoadState("networkidle");
  await page.screenshot({ path: new URL(file, root).pathname });
  await page.close();
}
const square = (size, pad) =>
  `<div style="width:${size}px;height:${size}px;background:#141C33;display:flex;align-items:center;justify-content:center">
     <img src="${MARK}" style="width:${size - pad * 2}px;height:${size - pad * 2}px;object-fit:contain"></div>`;

await shot(square(512, 36), 512, 512, "app/icon.png");
await shot(square(180, 12), 180, 180, "app/apple-icon.png");
await shot(
  `<div style="width:1200px;height:630px;box-sizing:border-box;padding:60px 80px;display:flex;align-items:center;gap:70px;font-family:Arial,Helvetica,sans-serif;color:#fff;
     background:radial-gradient(circle at 0% 60%,rgba(240,122,43,.3),transparent 45%),radial-gradient(circle at 100% 20%,rgba(168,221,232,.25),transparent 45%),#141C33">
     <img src="${FULL}" style="width:480px">
     <div>
       <div style="font-size:60px;font-weight:900;line-height:1.05">Calgary's 24/7<br>HVAC Experts</div>
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
