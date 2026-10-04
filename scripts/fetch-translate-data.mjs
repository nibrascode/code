// HadeethEnc.com API-dən hədisləri çəkir (ar, az, tr, en, ru). Xam cavablar RAW qovluğunda saxlanır (repoya girmir).
// İstifadə: node scripts/fetch-hadeethenc.mjs <RAW_DIR>
import fs from "node:fs";
import path from "node:path";
const RAW = path.resolve(process.argv[2] || "../translate-raw");
fs.mkdirSync(RAW, { recursive: true });
const BASE = "https://hadeethenc.com/api/v1";
const LANGS = ["ar", "az", "tr", "en", "ru"];
async function j(url, tries = 6) {
  for (let i = 0; i < tries; i++) {
    try {
      const r = await fetch(url, { signal: AbortSignal.timeout(30000) });
      if (r.ok) return await r.json();
    } catch {}
    await new Promise((r) => setTimeout(r, 500 * (i + 1)));
  }
  throw new Error("fetch failed " + url);
}
const cats = (await j(`${BASE}/categories/list/?language=ar`)).filter((c) => c.parent_id === null);
const ids = new Map();
for (const c of cats) {
  for (let page = 1; ; page++) {
    const r = await j(`${BASE}/hadeeths/list/?language=ar&category_id=${c.id}&page=${page}&per_page=1000`);
    for (const h of r.data) ids.set(h.id, h.translations);
    if (page >= (r.meta?.last_page || 1)) break;
  }
}
console.log("ids", ids.size);
fs.writeFileSync(path.join(RAW, "ids.json"), JSON.stringify([...ids]));
const jobs = [];
for (const [id, tr] of ids) for (const l of LANGS) if (l === "ar" || tr.includes(l)) jobs.push([id, l]);
console.log("jobs", jobs.length);
const out = {};
for (const l of LANGS) out[l] = {};
let n = 0;
async function worker() {
  while (jobs.length) {
    const [id, l] = jobs.pop();
    const d = await j(`${BASE}/hadeeths/one/?language=${l}&id=${id}`);
    out[l][id] = l === "ar"
      ? { hadeeth: d.hadeeth, attribution: d.attribution, grade: d.grade, ref: d.reference }
      : { hadeeth: d.hadeeth, attribution: d.attribution, grade: d.grade, ar: d.hadeeth_ar, arAttr: d.attribution_ar, arGrade: d.grade_ar };
    if (++n % 1000 === 0) console.log(n);
  }
}
await Promise.all(Array.from({ length: 12 }, worker));
for (const l of LANGS) fs.writeFileSync(path.join(RAW, `${l}.json`), JSON.stringify(out[l]));
console.log("done", Object.fromEntries(LANGS.map((l) => [l, Object.keys(out[l]).length])));
