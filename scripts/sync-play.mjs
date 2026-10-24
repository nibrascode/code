// Reads public Google Play listing pages and stores version / updated date / min Android.
// Writes src/data/play-facts.json only with values that pass sanity checks.
// No API keys. Size is not exposed on the public web page, so it stays manual.
import { readFileSync, writeFileSync } from "node:fs";

const OUT = new URL("../src/data/play-facts.json", import.meta.url);
export const APPS = {
  "nibras-arabic": "com.nibrasarabic.app",
  "nibras-docs": "com.nibras.docs",
  "nibras-qr": "com.nibras.qr",
  "nibras-pdf": "com.nibras.pdf",
  "nibras-office": "com.nibrascode.pdf",
  "majmu-al-fatawa": "com.nibrascode.fatawa",
};
const MONTHS = { Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6, Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12 };

export function parse(html) {
  const v = html.match(/"141":\[\[\["([^"]{1,40})"\]\],\[\[\[\d+\]\],\[\[\[\d+,"([^"]{1,12})"/);
  const u = html.match(/"146":\[\["([A-Z][a-z]{2}) (\d{1,2}), (20\d\d)"/);
  const out = {};
  if (v && /^\d+(\.\d+){1,3}([-+][\w.]+)?$/.test(v[1])) out.version = v[1];
  if (v && /^\d{1,2}(\.\d{1,2})?$/.test(v[2])) out.minAndroid = v[2];
  if (u && MONTHS[u[1]]) {
    const d = `${u[3]}-${String(MONTHS[u[1]]).padStart(2, "0")}-${u[2].padStart(2, "0")}`;
    const t = Date.parse(d);
    if (t > Date.parse("2020-01-01") && t < Date.now() + 2 * 864e5) out.updated = d;
  }
  return out;
}

async function main() {
  let prev = {};
  try { prev = JSON.parse(readFileSync(OUT, "utf8")); } catch {}
  const next = { ...prev };
  for (const [slug, id] of Object.entries(APPS)) {
    const url = `https://play.google.com/store/apps/details?id=${id}&hl=en&gl=US`;
    let res;
    try {
      res = await fetch(url, { headers: { "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 Chrome/126 Safari/537.36", "accept-language": "en-US" } });
    } catch (e) {
      console.log(slug, "network error, keeping previous", e.message);
      continue;
    }
    if (res.status === 404) {
      next[slug] = { listed: false };
      console.log(slug, "not listed");
      continue;
    }
    if (!res.ok) { console.log(slug, "HTTP", res.status, "keeping previous"); continue; }
    const facts = parse(await res.text());
    if (!facts.version || !facts.updated) { console.log(slug, "unparsable, keeping previous"); continue; }
    next[slug] = { listed: true, playUrl: `https://play.google.com/store/apps/details?id=${id}`, ...facts };
    console.log(slug, JSON.stringify(next[slug]));
  }
  const body = JSON.stringify(next, Object.keys(next).length ? undefined : undefined, 2) + "\n";
  writeFileSync(OUT, body);
}

if (import.meta.url === `file://${process.argv[1]}`) await main();
