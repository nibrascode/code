// Nibras AI: python/html/javascript kod blokunun yanında «Aç» düyməsi (Studio /run linki) testi.
// Playwright + Chrome lazımdır; yoxdursa test buraxılır.
import test from "node:test";
import assert from "node:assert/strict";
import http from "node:http";
import { existsSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import chat from "../api/chat.js";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const CHROME = process.env.CHROME || ["/usr/bin/google-chrome", "/usr/bin/chromium", "/usr/bin/chromium-browser"].find(existsSync);
let pw = null;
for (const where of [ROOT, "/workspace/terminal"]) {
  try { pw = createRequire(join(where, "x.js"))("playwright"); break; } catch {}
}
const skip = !pw || !CHROME ? "playwright/chrome yoxdur" : false;

function server() {
  return new Promise((resolve) => {
    const srv = http.createServer((req, res) => {
      if (req.url === "/api/chat") {
        const r = Object.assign(res, {
          status(c) { res.statusCode = c; return res; },
          json(o) { res.setHeader("content-type", "application/json"); res.end(JSON.stringify(o)); },
        });
        return chat(req, r);
      }
      const f = join(ROOT, "public", req.url.split("?")[0] === "/" ? "ai.html" : req.url.split("?")[0]);
      if (existsSync(f) && !f.endsWith("/")) { res.setHeader("content-type", "text/html; charset=utf-8"); return res.end(readFileSync(f)); }
      res.statusCode = 404; res.end("yox");
    });
    srv.listen(0, "127.0.0.1", () => resolve(srv));
  });
}

async function decode(url) {
  const h = new URLSearchParams(url.split("#")[1]);
  let bytes = Buffer.from(h.get("c"), "base64url");
  if (h.get("z") === "1") {
    bytes = Buffer.from(await new Response(new Blob([bytes]).stream().pipeThrough(new DecompressionStream("deflate-raw"))).arrayBuffer());
  }
  return { lang: h.get("l"), code: bytes.toString("utf8") };
}

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(readFileSync(join(ROOT, "public/ai.html"), "utf8"), readFileSync(join(ROOT, "public/ai/index.html"), "utf8"));
});

test("«Aç» düyməsi", { skip, timeout: 120000 }, async (t) => {
  const srv = await server();
  const base = `http://127.0.0.1:${srv.address().port}`;
  const browser = await pw.chromium.launch({ executablePath: CHROME, args: ["--no-sandbox"] });
  t.after(async () => { await browser.close(); srv.close(); });

  async function open(page) {
    await page.addInitScript(() => { window.__opened = []; window.open = (u, n, f) => { window.__opened.push([u, n, f]); return null; }; });
    await page.goto(base + "/");
  }
  async function ask(page, text) {
    await page.fill("#inp", text);
    await page.press("#inp", "Enter");
    await page.waitForSelector(".msg.b:not(:has(.dots))", { timeout: 15000 });
  }

  for (const [q, lang] of [["python kod nümunəsi", "python"], ["html form nümunəsi", "html"], ["javascript massiv nümunə", "javascript"], ["css flexbox nümunə", "html"]]) {
    await t.test(`kitabxana cavabı: ${q} -> l=${lang}`, async () => {
      const page = await browser.newPage();
      await open(page);
      await ask(page, q);
      const btns = page.locator(".msg.b .runbtn");
      assert.ok((await btns.count()) >= 1, "düymə yoxdur");
      assert.equal((await btns.first().innerText()).trim(), "Aç");
      const text = await page.locator(".msg.b").last().innerText();
      assert.ok(!/nibrasterminal|vercel|https?:/i.test(text), "link görünür: " + text.slice(0, 80));
      const html = await page.locator(".msg.b").last().innerHTML();
      assert.ok(!/nibrasterminal/i.test(html), "link DOM-dadır");
      const shown = await page.locator(".msg.b pre code").first().textContent();
      await btns.first().click();
      const opened = await page.evaluate(() => window.__opened);
      assert.equal(opened.length, 1);
      assert.match(opened[0][0], /^https:\/\/nibrasterminal\.vercel\.app\/run#l=/);
      assert.equal(opened[0][1], "_blank");
      assert.equal(opened[0][2], "noopener");
      const d = await decode(opened[0][0]);
      assert.equal(d.lang, lang);
      assert.equal(d.code, shown.replace(/\n$/, ""));
      await page.close();
    });
  }

  await t.test("adi AI cavabı: ```python, ```html, ```js düymə alır; ```sql və ```ruby almır", async () => {
    const page = await browser.newPage();
    await page.route("**/api/chat", (r) => r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, reply: "Bax:\n```python\nprint('Salam ə')\n```\nvə\n```html\n<h1>Salam</h1>\n```\nvə\n```js\nconsole.log(1)\n```\nvə\n```sql\nSELECT 1;\n```\nvə\n```ruby\nputs 1\n```\nSon." }) }));
    await open(page);
    await ask(page, "kod yaz");
    assert.equal(await page.locator(".msg.b .runbtn").count(), 3);
    assert.equal(await page.locator(".msg.b pre").count(), 5);
    await page.locator(".msg.b .runbtn").nth(1).click();
    await page.locator(".msg.b .runbtn").nth(2).click();
    const opened = await page.evaluate(() => window.__opened);
    assert.deepEqual(await decode(opened[0][0]), { lang: "html", code: "<h1>Salam</h1>" });
    assert.deepEqual(await decode(opened[1][0]), { lang: "javascript", code: "console.log(1)" });
    await page.close();
  });

  await t.test("kitabxana sql cavabında Aç düyməsi yoxdur", async () => {
    const page = await browser.newPage();
    await open(page);
    await ask(page, "sql join nümunə");
    assert.equal(await page.locator(".msg.b pre").count(), 1);
    assert.equal(await page.locator(".msg.b .runbtn").count(), 0);
    await page.close();
  });

  await t.test("sayğac: ziyarət, rejim və xəta hadisələri /api/stats-a gedir (məzmun yoxdur)", async () => {
    const page = await browser.newPage();
    const got = [];
    await page.route("**/api/stats", (r) => { got.push(JSON.parse(r.request().postData() || "{}")); return r.fulfill({ contentType: "application/json", body: '{"ok":true}' }); });
    await page.route("**/api/chat", (r) => r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: false, reply: "xəta" }) }));
    await open(page);
    await ask(page, "gizli sual mətni");
    await page.waitForFunction(() => true);
    await new Promise((r) => setTimeout(r, 300));
    assert.deepEqual(got.filter((e) => e.type === "visit"), [{ type: "visit", name: "ai" }]);
    assert.ok(got.some((e) => e.type === "mode" && e.name === "ask"));
    assert.ok(got.some((e) => e.type === "error" && e.name === "chat"));
    assert.ok(!JSON.stringify(got).includes("gizli"), "mətn göndərilməməlidir");
    await page.close();
  });

  await t.test("sayğac sorğusu bloklansa da səhifə işləməyə davam edir", async () => {
    const page = await browser.newPage();
    await page.route("**/api/stats", (r) => r.abort());
    await open(page);
    await ask(page, "python kod nümunəsi");
    assert.ok((await page.locator(".msg.b .runbtn").count()) >= 1);
    await page.close();
  });

  await t.test("çox böyük kod: toast, pəncərə açılmır", async () => {
    const page = await browser.newPage();
    const big = Array.from({ length: 4000 }, (_, i) => `x${i} = "${Math.random().toString(36).slice(2)}${Math.random().toString(36).slice(2)}"`).join("\n");
    await page.route("**/api/chat", (r) => r.fulfill({ contentType: "application/json", body: JSON.stringify({ success: true, reply: "```python\n" + big + "\n```" }) }));
    await open(page);
    await ask(page, "böyük kod");
    await page.locator(".msg.b .runbtn").click();
    assert.equal((await page.evaluate(() => window.__opened)).length, 0);
    await page.waitForFunction(() => document.getElementById("toast").classList.contains("on"));
    assert.equal(await page.locator("#toast").innerText(), "Kod çox böyükdür");
    await page.close();
  });
});
