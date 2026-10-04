// Söhbət UI-sında hər oyun: adı ilə sorğu → tam kod DOM-da (bayt-bayt), kod yığılı + «Davamını aç ▾», «Aç» tam kodu URL-ə qoyur (dekod edəndə orijinalla eyni).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import http from "node:http";
import zlib from "node:zlib";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import chat from "../api/chat.js";
import { GAMES } from "../api/_games/index.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME || ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find((p) => fs.existsSync(p));
let pw = null;
for (const where of [ROOT, "/workspace/terminal"]) { try { pw = createRequire(path.join(where, "x.js"))("playwright"); break; } catch {} }
const skip = !pw || !CHROME ? "playwright/chrome yoxdur" : false;
const QUERY = { "dan-yerine-qeder": "dan yerinə qədər oyun kodu yaz", "baki-gecesi": "bakı gecəsi oyun kodu yaz", "qala-kesikcisi": "qala keşikçisi oyun kodu yaz", "neon-drive": "neon drive oyun kodu yaz", "neon-void": "neon void oyun kodu yaz", "neon-breakout": "neon breakout oyun kodu yaz" };

test("UI: yeni oyunlar adı ilə gəlir, kod yığılır, «Aç» və tam kod orijinalla eynidir", { skip, timeout: 120000 }, async () => {
  const srv = http.createServer((req, res) => {
    if (req.url === "/api/chat") {
      const r = Object.assign(res, { status(c) { res.statusCode = c; return res; }, json(o) { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); } });
      let b = ""; req.on("data", (c) => (b += c)); req.on("end", () => { req.body = JSON.parse(b || "{}"); chat(req, r); });
      return;
    }
    const f = path.join(ROOT, "public", req.url.split("?")[0] === "/" ? "ai.html" : req.url.split("?")[0]);
    try { res.end(fs.readFileSync(f)); } catch { res.statusCode = 404; res.end(); }
  }).listen(0);
  const port = srv.address().port;
  const browser = await pw.chromium.launch({ executablePath: CHROME });
  try {
    for (const [slug, q] of Object.entries(QUERY)) {
      assert.ok(GAMES.some((g) => g.slug === slug), slug);
      const src = fs.readFileSync(path.join(ROOT, "content/games", slug + ".html"), "utf8");
      const page = await browser.newPage({ viewport: { width: 390, height: 800 } });
      await page.addInitScript(() => { window.__opened = []; window.open = (u) => { window.__opened.push(u); return null; }; });
      await page.goto(`http://localhost:${port}/`);
      await page.fill("#inp", q);
      await page.press("#inp", "Enter");
      await page.waitForSelector(".cb");
      const s = await page.evaluate(() => { const cb = document.querySelector(".cb"); const pre = cb.querySelector("pre"); return { col: cb.classList.contains("col"), h: pre.getBoundingClientRect().height, code: cb.querySelector("pre code").textContent, more: !cb.querySelector(".morebtn").hidden, lead: document.querySelector("#msgs").innerText.slice(0, 200) }; });
      assert.equal(s.col, true, slug);
      assert.ok(s.h <= 301, slug + " h=" + s.h);
      assert.equal(s.more, true, slug);
      assert.equal(s.code.replace(/^\uFEFF/, "").trimEnd(), src.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").trimEnd(), slug + ": DOM-dakı kod orijinalla eyni deyil");
      await page.click(".runbtn");
      await page.waitForFunction(() => window.__opened.length === 1);
      const url = await page.evaluate(() => window.__opened[0]);
      const m = /#l=html&c=([^&]+)(&z=1)?$/.exec(url);
      assert.ok(m, slug + " url");
      const buf = Buffer.from(m[1].replace(/-/g, "+").replace(/_/g, "/"), "base64");
      const dec = (m[2] ? zlib.inflateRawSync(buf) : buf).toString("utf8");
      assert.equal(dec.replace(/^\uFEFF/, "").trimEnd(), src.replace(/^\uFEFF/, "").replace(/\r\n/g, "\n").trimEnd(), slug + ": «Aç» kodu tam deyil");
      await page.close();
    }
  } finally { await browser.close(); srv.close(); }
});
