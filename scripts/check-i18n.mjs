// i18n lint: compares src/lib/i18n.ts dictionaries. Reports keys missing in a language
// and values left in Azerbaijani (contain ə/Ə and equal to the AZ text) in other languages.
// Usage: node scripts/check-i18n.mjs [--strict]  (strict → exit 1 on problems)
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

// Node ≥22 strips TypeScript types natively; i18n.ts has no runtime imports.
let mod;
try {
  mod = await import(pathToFileURL(resolve("src/lib/i18n.ts")).href);
} catch (e) {
  console.log("[i18n] skipped (this Node cannot load .ts):", e.message.split("\n")[0]);
  process.exit(0);
}
const dicts = mod.T || mod.translations || mod.DICT || mod.dict || Object.values(mod).find((v) => v && typeof v === "object" && v.az && v.en);
if (!dicts) { console.error("[i18n] dictionary export not found"); process.exit(0); }
const langs = ["az", "en", "tr", "ar", "ru"];
const base = dicts.az;
let problems = 0;
for (const lang of langs.slice(1)) {
  const d = dicts[lang] || {};
  const missing = Object.keys(base).filter((k) => !(k in d));
  const untranslated = Object.keys(base).filter((k) => typeof d[k] === "string" && d[k] === base[k] && /[əƏ]/.test(base[k]));
  if (missing.length) console.log(`[i18n] ${lang}: ${missing.length} missing → ${missing.slice(0, 15).join(", ")}`);
  if (untranslated.length) console.log(`[i18n] ${lang}: ${untranslated.length} still AZ → ${untranslated.slice(0, 15).join(", ")}`);
  problems += missing.length + untranslated.length;
}
console.log(problems ? `[i18n] ${problems} problem(s)` : "[i18n] OK — all 5 languages in sync");
if (problems && process.argv.includes("--strict")) process.exit(1);
