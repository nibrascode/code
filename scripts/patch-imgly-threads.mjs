// @imgly/background-removal always sets wasm threads to hardwareConcurrency.
// Without Cross-Origin-Isolation that crashes the session, so Erase never finishes.
// When the page is not isolated, force one thread. Idempotent.

import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { pathToFileURL } from "node:url";

export const NEEDLE = "ort2.env.wasm.numThreads = maxNumThreads();";
export const REPLACEMENT =
  'ort2.env.wasm.numThreads = typeof crossOriginIsolated === "boolean" && crossOriginIsolated ? maxNumThreads() : 1;';

const FILES = [
  "node_modules/@imgly/background-removal/dist/index.mjs",
  "node_modules/@imgly/background-removal/dist/index.cjs",
];

export function patchSource(src) {
  if (!src.includes(NEEDLE)) return src;
  return src.replaceAll(NEEDLE, REPLACEMENT);
}

function patchFile(file) {
  if (!existsSync(file)) return;
  const src = readFileSync(file, "utf8");
  const next = patchSource(src);
  if (next === src) return;
  writeFileSync(file, next);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  for (const file of FILES) patchFile(file);
}
