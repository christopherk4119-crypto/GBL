// Regenerates the favicon and a standalone logo icon from lib/logo-svg.mjs.
// Run: node scripts/build-icons.mjs
import { writeFileSync } from "node:fs";
import { logoSvg } from "../lib/logo-svg.mjs";

writeFileSync(new URL("../app/icon.svg", import.meta.url), logoSvg("ico", 120));
writeFileSync(new URL("../public/logo-icon.svg", import.meta.url), logoSvg("gbl", 240));
console.log("Wrote app/icon.svg and public/logo-icon.svg");
