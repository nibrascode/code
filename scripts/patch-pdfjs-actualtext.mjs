// pdf.js ignores /ActualText on marked content, but LibreOffice and Chrome put the real Arabic letters there
// (the glyphs themselves map to dotless shapes). Expose it on "beginMarkedContentProps" text items. Idempotent.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

const FILES = [
  "node_modules/pdfjs-dist/build/pdf.worker.min.mjs",
  "node_modules/pdfjs-dist/build/pdf.worker.mjs",
  "node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs",
  "node_modules/pdfjs-dist/legacy/build/pdf.worker.mjs",
];
const RE = /(type:\s*"beginMarkedContentProps",\s*id:[\s\S]{0,160}?,\s*tag:\s*(\w+)\[0\]\s*instanceof Name\s*\?\s*\2\[0\]\.name\s*:\s*null)(\s*\})/g;

export function patchSource(src) {
  if (src.includes("/*nb-actualtext*/")) return src;
  return src.replace(RE, (_m, head, a, tail) => `${head},/*nb-actualtext*/actualText:${a}[1] instanceof Dict&&typeof ${a}[1].get("ActualText")==="string"?stringToPDFString(${a}[1].get("ActualText")):null${tail}`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  for (const file of FILES) {
    if (!existsSync(file)) continue;
    const src = readFileSync(file, "utf8");
    const next = patchSource(src);
    if (next !== src) writeFileSync(file, next);
    console.log(`[patch-pdfjs-actualtext] ${file}: ${next.includes("/*nb-actualtext*/") ? "ok" : "NOT PATCHED"}`);
  }
}
