// Məlumat yükləyicisi: brotli+base64 JSON hissələri yalnız lazım olanda (tənbəl) yüklənir.
import { brotliDecompressSync } from "node:zlib";

const LOADERS = {
  ar: () => import("./data/ar.js"),
  az: () => import("./data/az.js"),
  tr: () => import("./data/tr.js"),
  en: () => import("./data/en.js"),
  ru: () => import("./data/ru.js"),
  formulae: () => import("./data/formulae.js"),
};
const cache = new Map();

export function loadPart(name) {
  if (!cache.has(name)) {
    cache.set(
      name,
      LOADERS[name]().then((m) => (name === "formulae" ? m.default : JSON.parse(brotliDecompressSync(Buffer.from(m.default, "base64")).toString("utf8")))),
    );
  }
  return cache.get(name);
}
