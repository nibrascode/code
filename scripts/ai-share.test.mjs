// Nibras AI: hər cavab balonunun yuxarı sağında «Kopyala» və «Paylaş» ikon düymələri (jsdom + saxta fetch/clipboard/share).
import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));
const LINK = "https://nibrascode.com/ai";
const HTML = (f) => readFileSync(join(ROOT, f), "utf8");

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(HTML("public/ai.html"), HTML("public/ai/index.html"));
});

test("OG/Twitter meta: başlıq, təsvir, url, şəkil", () => {
  const h = HTML("public/ai/index.html");
  for (const re of [
    /property="og:title" content="Nibras AI"/,
    /property="og:description" content="[^"]+"/,
    /property="og:url" content="https:\/\/nibrascode\.com\/ai"/,
    /property="og:image" content="https:\/\/nibrascode\.com\/nibras-ai\.png"/,
    /name="twitter:card" content="summary"/,
    /rel="canonical" href="https:\/\/nibrascode\.com\/ai"/,
  ]) assert.match(h, re);
  assert.doesNotMatch(h.match(/<head>[\s\S]*<\/head>/)[0], /yarat/i);
});

for (const file of ["public/ai/index.html", "public/ai.html"]) {
  // opts: reply(req) => string; clipboard: false => yoxdur (execCommand yolu); share: "ok" | "abort" | "fail" | undefined
  function boot({ reply = (r) => "Cavab: " + r.message, clipboard = true, share, storage = {}, execOk = true } = {}) {
    const log = { clip: [], shared: [], exec: [], sent: [] };
    const dom = new JSDOM(HTML(file), {
      url: LINK,
      runScripts: "dangerously",
      pretendToBeVisual: true,
      beforeParse(w) {
        for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
        w.TextEncoder = TextEncoder;
        if (clipboard) Object.defineProperty(w.navigator, "clipboard", { configurable: true, value: { writeText: async (t) => { log.clip.push(t); } } });
        if (share) Object.defineProperty(w.navigator, "share", { configurable: true, value: async (o) => {
          log.shared.push(o);
          if (share === "abort") throw Object.assign(new Error("x"), { name: "AbortError" });
          if (share === "fail") throw Object.assign(new Error("x"), { name: "NotAllowedError" });
        } });
        w.document.execCommand = (c) => { log.exec.push([c, w.document.activeElement && w.document.activeElement.value]); return execOk; };
        w.fetch = async (url, init = {}) => {
          const u = new URL(url, "https://nibrascode.com");
          const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
          if (u.pathname === "/api/chat") {
            const req = JSON.parse(init.body);
            log.sent.push(req);
            const r = reply(req);
            return r === "FAIL" ? out(500, { error: "Xəta oldu" }) : out(200, { reply: r });
          }
          if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
          return out(200, { ok: true });
        };
      },
    });
    const w = dom.window, d = w.document;
    return { w, d, log, snapshot() { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; },
      async say(t) { d.querySelector("#inp").value = t; d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true })); await wait(40); },
      btn(sel, i = -1) { const all = d.querySelectorAll("#msgs .msg.b " + sel); return all[i < 0 ? all.length + i : i]; },
      menu() { const m = d.querySelector(".shm"); return m && !m.hidden ? m : null; } };
  }

  test(`${file}: cavabda sağ üstdə iki ikon düymə (aria-label/title), qarşılama və xəta balonunda yoxdur`, { skip }, async () => {
    const p = boot({ reply: (r) => (r.message === "xeta" ? "FAIL" : "Salam, necəsən?") });
    assert.equal(p.d.querySelectorAll(".tools").length, 0, "qarşılama ekranı");
    await p.say("salam");
    const tools = p.d.querySelectorAll("#msgs .msg.b .tools");
    assert.equal(tools.length, 1);
    const [c, s] = tools[0].querySelectorAll("button");
    assert.equal(c.getAttribute("aria-label"), "Kopyala");
    assert.equal(c.title, "Kopyala");
    assert.equal(s.getAttribute("aria-label"), "Paylaş");
    assert.equal(s.title, "Paylaş");
    assert.equal(c.textContent, "", "mətn etiketi yoxdur");
    assert.equal(s.textContent, "");
    assert.ok(c.querySelector("svg") && s.querySelector("svg"));
    assert.ok(p.btn("", 0).classList.contains("ht"), "yuxarı boşluq sinfi");
    const css = HTML(file);
    assert.match(css, /\.msg \.tools button \{ width: 32px; height: 32px;/);
    // istifadəçi mesajında yoxdur
    assert.equal(p.d.querySelectorAll("#msgs .msg.u .tools").length, 0);
    // xəta balonunda yoxdur
    await p.say("xeta");
    assert.equal(p.d.querySelectorAll("#msgs .msg.b.err").length, 1);
    assert.equal(p.d.querySelectorAll("#msgs .msg.err .tools").length, 0);
    assert.equal(p.d.querySelectorAll("#msgs .tools").length, 1);
    // balonun mətni (textContent) ikonlardan təsirlənmir
    assert.equal(p.btn("", 0).textContent, "Salam, necəsən?");
    p.w.close();
  });

  test(`${file}: Kopyala — yalnız cavabın sadə mətni (gizli sətirlər, blok işarələri olmadan); Kopyalandı ✓`, { skip }, async () => {
    const reply = "Giriş\n::ctx:: gizli\n::ayah 1:1::\nبِسْمِ\n::tr:: Tərcümə\nAdı ilə\n::src:: Tanzil\n::/ayah::\n::note:: Qeyd\n::sug::\n::sl:: Sual\n::sb:: Düymə | sorğu\n::/sug::";
    const p = boot({ reply: () => reply });
    await p.say("ayə");
    p.btn(".cpbtn").click();
    await wait(10);
    assert.equal(p.log.clip.length, 1);
    assert.equal(p.log.clip[0], "Giriş\n\nبِسْمِ\nTərcümə\nAdı ilə\nTanzil\nQeyd");
    assert.ok(!p.log.clip[0].includes("::"));
    assert.ok(!p.log.clip[0].includes(LINK), "sadə kopyada link yoxdur");
    assert.equal(p.d.querySelector("#toast").textContent, "Kopyalandı ✓");
    assert.ok(p.btn(".cpbtn").classList.contains("ok"));
    p.w.close();
  });

  test(`${file}: clipboard API yoxdursa execCommand ehtiyatı; alınmasa xəbərdarlıq`, { skip }, async () => {
    const p = boot({ clipboard: false, reply: () => "Mətn" });
    await p.say("a");
    p.btn(".cpbtn").click();
    await wait(10);
    assert.deepEqual(p.log.exec, [["copy", "Mətn"]]);
    assert.equal(p.d.querySelector("#toast").textContent, "Kopyalandı ✓");
    assert.equal(p.d.querySelectorAll("textarea[readonly]").length, 0, "müvəqqəti sahə silinir");
    const q = boot({ clipboard: false, execOk: false, reply: () => "Mətn" });
    await q.say("a");
    q.btn(".cpbtn").click();
    await wait(10);
    assert.equal(q.d.querySelector("#toast").textContent, "Kopyalamaq alınmadı");
    p.w.close(); q.w.close();
  });

  test(`${file}: Paylaş — navigator.share varsa mətnin sonu nibrascode.com/ai linki; ləğv menyu açmır`, { skip }, async () => {
    const p = boot({ share: "ok", reply: () => "Faydalı cavab\n::game:: x | y".replace(/\n::game.*/, "") });
    await p.say("s");
    p.btn(".shbtn").click();
    await wait(10);
    assert.equal(p.log.shared.length, 1);
    assert.equal(p.log.shared[0].text, "Faydalı cavab\n\nNibras AI: " + LINK);
    assert.ok(p.log.shared[0].text.endsWith("\nNibras AI: " + LINK));
    assert.equal(p.menu(), null);
    const q = boot({ share: "abort", reply: () => "Cavab" });
    await q.say("s");
    q.btn(".shbtn").click();
    await wait(10);
    assert.equal(q.menu(), null, "istifadəçi ləğv etdi");
    const r = boot({ share: "fail", reply: () => "Cavab" });
    await r.say("s");
    r.btn(".shbtn").click();
    await wait(10);
    assert.ok(r.menu(), "share alınmadı → menyu");
    p.w.close(); q.w.close(); r.w.close();
  });

  test(`${file}: navigator.share yoxdursa menyu: WhatsApp, Telegram, X, Facebook, Kopyala; Escape/kənar klik bağlayır`, { skip }, async () => {
    const p = boot({ reply: () => "Salam & \"dünya\"? ok" });
    await p.say("s");
    const sb = p.btn(".shbtn");
    sb.click();
    const m = p.menu();
    assert.ok(m);
    assert.equal(sb.getAttribute("aria-expanded"), "true");
    const links = [...m.querySelectorAll("a")];
    assert.deepEqual(links.map((a) => a.textContent), ["WhatsApp", "Telegram", "X (Twitter)", "Facebook"]);
    assert.ok(links.every((a) => a.target === "_blank" && /noopener/.test(a.rel)));
    const full = "Salam & \"dünya\"? ok\n\nNibras AI: " + LINK;
    assert.equal(links[0].href, "https://wa.me/?text=" + encodeURIComponent(full));
    assert.match(links[1].href, /^https:\/\/t\.me\/share\/url\?url=https%3A%2F%2Fnibrascode\.com%2Fai&text=/);
    assert.match(links[2].href, /^https:\/\/twitter\.com\/intent\/tweet\?text=.*&url=https%3A%2F%2Fnibrascode\.com%2Fai$/);
    assert.match(links[3].href, /^https:\/\/www\.facebook\.com\/sharer\/sharer\.php\?u=https%3A%2F%2Fnibrascode\.com%2Fai/);
    // menyudakı Kopyala: link ilə
    [...m.querySelectorAll("button")].find((b) => /Kopyala/.test(b.textContent)).click();
    await wait(10);
    assert.equal(p.log.clip[0], full);
    assert.equal(p.menu(), null);
    // Escape
    sb.click(); assert.ok(p.menu());
    p.d.dispatchEvent(new p.w.KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    assert.equal(p.menu(), null);
    // kənar klik
    sb.click(); assert.ok(p.menu());
    p.d.body.click();
    assert.equal(p.menu(), null);
    // eyni düyməyə təkrar klik bağlayır
    sb.click(); sb.click();
    assert.equal(p.menu(), null);
    p.w.close();
  });

  test(`${file}: uzun cavab ~1500 simvola kəsilir, link isə həmişə sonda qalır`, { skip }, async () => {
    const long = "Uzun cümlə burada. ".repeat(300);
    const p = boot({ share: "ok", reply: () => long });
    await p.say("s");
    p.btn(".shbtn").click();
    await wait(10);
    const t = p.log.shared[0].text;
    assert.ok(t.endsWith("\n\nNibras AI: " + LINK));
    const body = t.slice(0, -("\n\nNibras AI: " + LINK).length);
    assert.ok(body.length <= 1500 && body.length > 1000, String(body.length));
    assert.ok(body.endsWith("…"));
    // kopyada isə kəsilmir
    p.btn(".cpbtn").click();
    await wait(10);
    assert.equal(p.log.clip[0], long.trim());
    p.w.close();
  });

  const GAME_CODE = "<!DOCTYPE html><html><body><script>" + "var x=1;\n".repeat(400) + "</script></body></html>";
  const GAME_REPLY = "Budur «İlan» oyununun kodu. Aç düyməsinə bas.\n::game:: ilan | İlan\n\n```html\n" + GAME_CODE + "\n```";

  test(`${file}: oyun kodu cavabında paylaşma yalnız giriş sətri + link (kodsuz, gizli işarəsiz); Aç düyməsi işləyir`, { skip }, async () => {
    const p = boot({ share: "ok", reply: () => GAME_REPLY });
    await p.say("oyun kodu yaz");
    assert.equal(p.d.querySelectorAll("#msgs .msg.b button.runbtn").length, 1, "Aç düyməsi yerindədir");
    assert.equal(p.d.querySelectorAll("#msgs .msg.b .cb .bar button").length, 1, "alət düymələri kod blokunun içində deyil");
    p.btn(".shbtn").click();
    await wait(10);
    const t = p.log.shared[0].text;
    assert.equal(t, "Budur «İlan» oyununun kodu. Aç düyməsinə bas.\n\nNibras AI: " + LINK);
    assert.ok(!/DOCTYPE|```|::game::|var x/.test(t));
    p.btn(".cpbtn").click();
    await wait(10);
    assert.ok(!p.log.clip[0].includes("::game::"));
    assert.ok(p.log.clip[0].includes("<!DOCTYPE html>"), "sadə Kopyala kodu da kopyalayır");
    p.w.close();
  });

  test(`${file}: uzun html bloku (işarəsiz) də kod kimi paylaşılmır; qısa kod bloku isə paylaşılır`, { skip }, async () => {
    const big = boot({ share: "ok", reply: () => "Oyun hazırdır:\n```html\n" + GAME_CODE + "\n```" });
    await big.say("s");
    big.btn(".shbtn").click();
    await wait(10);
    assert.equal(big.log.shared[0].text, "Oyun hazırdır:\n\nNibras AI: " + LINK);
    const small = boot({ share: "ok", reply: () => "Budur:\n```python\nprint('salam')\n```" });
    await small.say("s");
    small.btn(".shbtn").click();
    await wait(10);
    assert.equal(small.log.shared[0].text, "Budur:\n```python\nprint('salam')\n```\n\nNibras AI: " + LINK);
    big.w.close(); small.w.close();
  });

  test(`${file}: bərpa edilən söhbətdə düymələr var, xəta balonunda yoxdur; «Oyunu yenidən göstər» çipi işləyir`, { skip }, async () => {
    const first = boot({ reply: (r) => (r.message === "xeta" ? "FAIL" : GAME_REPLY) });
    await first.say("oyun kodu yaz");
    await first.say("xeta");
    // serverdən bərpa: oyun kodu orada saxlanmır (yalnız gizli işarə qalır)
    const snap = first.snapshot();
    const st = JSON.parse(snap["nibras_chats_v1"]);
    for (const it of Object.values(st.items)) for (const m of it.msgs) m.t = m.t.replace(/```[\s\S]*?```/, "");
    snap["nibras_chats_v1"] = JSON.stringify(st);
    const q = boot({ storage: snap, share: "ok", reply: () => GAME_REPLY });
    const bots = q.d.querySelectorAll("#msgs .msg.b");
    assert.equal(bots.length, 2);
    assert.equal(q.d.querySelectorAll("#msgs .tools").length, 1);
    assert.equal(q.d.querySelectorAll("#msgs .msg.err .tools").length, 0);
    // kod serverdə/yerdə saxlanmır → çip; paylaşma yenə giriş sətri + link
    const chip = q.d.querySelector("#msgs .msg.b .sg button.chip");
    assert.ok(chip, "Oyunu yenidən göstər çipi");
    assert.equal(chip.textContent, "Oyunu yenidən göstər");
    q.btn(".shbtn", 0).click();
    await wait(10);
    assert.ok(q.log.shared[0].text.endsWith("\n\nNibras AI: " + LINK));
    assert.ok(!q.log.shared[0].text.includes("::"));
    assert.ok(!q.log.shared[0].text.includes("Oyunu yenidən göstər"));
    chip.click();
    await wait(60);
    assert.equal(q.log.sent.pop().message, "İlan oyun kodu yaz");
    assert.equal(q.d.querySelectorAll("#msgs .msg.b .tools").length, 2, "yeni cavaba da düymələr əlavə olunur");
    first.w.close(); q.w.close();
  });
}
