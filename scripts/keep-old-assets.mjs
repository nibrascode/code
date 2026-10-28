/**
 * Keep previous deploys' hashed JS/CSS for 14 days so open tabs and Googlebot
 * never hit "Failed to fetch dynamically imported module". Each build publishes
 * /asset-history.json ({ file: firstSeenMs }); the next build downloads still-young
 * old files from the live site into this build's static/assets.
 */
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const SITE = process.env.ASSET_KEEP_SITE || "https://nibrascode.com";
const KEEP_MS = 14 * 24 * 3600 * 1000;
const dirs = [".vercel/output/static", ".output/public", "dist/client"];
const root = dirs.find((d) => existsSync(join(d, "assets")));
if (!root) {
  console.log("[keep-old-assets] no static assets dir; skip");
  process.exit(0);
}
const assets = join(root, "assets");
const now = Date.now();
const current = new Set(readdirSync(assets));
let history = {};
try {
  const r = await fetch(`${SITE}/asset-history.json`, { signal: AbortSignal.timeout(15000) });
  if (r.ok) history = await r.json();
} catch (e) {
  console.log("[keep-old-assets] no live history:", e?.message);
}
const next = {};
for (const f of current) next[f] = history[f] && now - history[f] < KEEP_MS ? history[f] : now;
const old = Object.entries(history).filter(([f, t]) => !current.has(f) && now - t < KEEP_MS && /^[\w.-]+\.(js|css)$/.test(f));
let ok = 0;
const queue = [...old];
async function worker() {
  for (let item = queue.shift(); item; item = queue.shift()) {
    const [f, t] = item;
    try {
      const r = await fetch(`${SITE}/assets/${f}`, { signal: AbortSignal.timeout(15000) });
      if (!r.ok) continue;
      writeFileSync(join(assets, f), Buffer.from(await r.arrayBuffer()));
      next[f] = t;
      ok++;
    } catch {}
  }
}
await Promise.all(Array.from({ length: 12 }, worker));
mkdirSync(root, { recursive: true });
writeFileSync(join(root, "asset-history.json"), JSON.stringify(next));
console.log(`[keep-old-assets] kept ${ok}/${old.length} old files, tracking ${Object.keys(next).length}`);
