// Hazır oyun kodu: «oyun kodu yaz» → AI-siz, kolleksiyadan TAM tək-fayl HTML oyun (```html bloku, «Aç» düyməsi). Fərqli oyun hər dəfə.
// Test oyunları scripts/fixtures/games/*.html-dir (yalnız test; istehsal index-ində yoxdur).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";
import { GAMES } from "../api/_games/index.js";
import { createGameReply, pickGame, shownGames, langOf } from "../api/_game.js";
import { buildGames, toModule, HEADER } from "./build-games.mjs";
import { compactHistory, stripAyahMarkup } from "../api/_ayah.js";
import { hasNotice } from "../api/_notice.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const FIX = path.join(ROOT, "scripts/fixtures/games");
const OUT = fs.mkdtempSync(path.join(os.tmpdir(), "games-"));
buildGames(FIX, OUT);
const META = {
  "fx-tetris": { title: "FX Tetris", keywords: ["tetris"], kinds: ["puzzle", "arcade"] },
  "fx-snake": { title: "FX Snake", keywords: ["ilan", "yilan", "snake", "змейка", "ثعبان"], kinds: ["snake", "arcade"] },
  "fx-2048": { title: "FX 2048", keywords: ["2048"], kinds: ["puzzle"] },
  "fx-xox": { title: "FX XOX", keywords: ["xox", "tic tac toe", "x o", "крестики нолики"], kinds: ["board"] },
};
const mk = (slug, extra = {}) => ({ slug, ...META[slug], load: () => import(pathToFileURL(path.join(OUT, slug + ".js")).href), ...extra });
const FX = Object.keys(META).map((s) => mk(s));
const fixGame = createGameReply(FX);
const code = (reply) => reply.match(/```html\n([\s\S]*)```$/)[1];
const slugOf = (reply) => reply.match(/^::game:: ([a-z0-9-]+) \| /m)[1];
const seeded = (seq) => { let i = 0; return () => seq[i++ % seq.length]; };
const asHist = (replies) => replies.flatMap((r, i) => [{ role: "user", text: "oyun kodu yaz" }, { role: "assistant", text: r }]);

// ------------------------------------------------------------------ build + bayt-bayt
test("build: HTML → JS modulu itkisiz (CRLF, BOM, U+2028, ${}, \\, backtick-sız), köhnə generated fayl silinir", async () => {
  for (const f of fs.readdirSync(FIX)) {
    const slug = f.slice(0, -5);
    const bytes = fs.readFileSync(path.join(FIX, f));
    const mod = (await import(pathToFileURL(path.join(OUT, slug + ".js")).href)).default;
    assert.ok(Buffer.from(mod, "utf8").equals(bytes), slug + " bayt-bayt eyni deyil");
  }
  assert.ok(fs.readFileSync(path.join(OUT, "fx-tetris.js"), "utf8").startsWith(HEADER));
  assert.ok(!fs.readFileSync(path.join(OUT, "fx-tetris.js"), "utf8").includes("\u2028"), "U+2028 escape olunur");
  // köhnə generated silinir, əl ilə yazılan (HEADER-siz) qalır
  const tmpSrc = fs.mkdtempSync(path.join(os.tmpdir(), "src-"));
  const tmpOut = fs.mkdtempSync(path.join(os.tmpdir(), "out-"));
  fs.writeFileSync(path.join(tmpSrc, "a.html"), "<p>a</p>");
  fs.writeFileSync(path.join(tmpOut, "old.js"), toModule("x"));
  fs.writeFileSync(path.join(tmpOut, "index.js"), "export const GAMES = [];");
  fs.writeFileSync(path.join(tmpOut, "manual.js"), "export default 1;");
  buildGames(tmpSrc, tmpOut);
  assert.deepEqual(fs.readdirSync(tmpOut).sort(), ["a.js", "index.js", "manual.js"]);
  assert.throws(() => { fs.writeFileSync(path.join(tmpSrc, "Bad Name.html"), "x"); buildGames(tmpSrc, tmpOut); }, /slug/);
  fs.writeFileSync(path.join(tmpSrc, "bin.html"), "");
  fs.rmSync(path.join(tmpSrc, "Bad Name.html"));
  fs.writeFileSync(path.join(tmpSrc, "bin.html"), Buffer.from([0xff, 0xfe, 0x41]));
  assert.throws(() => buildGames(tmpSrc, tmpOut), /UTF-8/);
});

test("istehsal index-i: hər giriş üçün content/games/<slug>.html və yenilənmiş api/_games/<slug>.js var, bayt-bayt eynidir; ``` yoxdur; test oyunu yoxdur", async () => {
  const slugs = new Set();
  for (const g of GAMES) {
    assert.match(g.slug, /^[a-z0-9][a-z0-9-]*$/);
    assert.ok(!slugs.has(g.slug), "təkrar slug " + g.slug);
    slugs.add(g.slug);
    assert.ok(g.title && !/placeholder|test|fx-/i.test(g.title + g.slug), "test oyunu istehsalda olmamalıdır: " + g.slug);
    assert.ok(Array.isArray(g.keywords) && g.keywords.length && Array.isArray(g.kinds), g.slug);
    const bytes = fs.readFileSync(path.join(ROOT, "content/games", g.slug + ".html"));
    const mod = (await g.load()).default;
    assert.ok(Buffer.from(mod, "utf8").equals(bytes), g.slug + ": generated .js köhnədir — node scripts/build-games.mjs işlət");
    assert.ok(!mod.includes("```"), g.slug + ": ``` kod blokunu pozar");
    assert.ok(bytes.length < 400 * 1024, g.slug + " çox böyükdür");
  }
  // content/games-dəki hər HTML indexdə olmalıdır
  const dir = path.join(ROOT, "content/games");
  for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).filter((x) => x.endsWith(".html")) : []) assert.ok(slugs.has(f.slice(0, -5)), f + " index-də yoxdur");
  // loader hər slug üçün statik import: Vercel paketə qoyur
  const idx = fs.readFileSync(path.join(ROOT, "api/_games/index.js"), "utf8");
  for (const g of GAMES) assert.match(idx, new RegExp(`import\\("\\./${g.slug}\\.js"\\)`), g.slug);
});

// ------------------------------------------------------------------ niyyət
const POS = [
  "oyun kodu yaz", "oyun yaz", "oyun kodu ver", "bir oyun düzəlt", "Mənə oyun kodu yaz", "oyun kodu yazarsan?", "zəhmət olmasa bir oyun yaz", "oyun kodu lazımdır", "Oyun Kodu Yaz!", "bir oyun kodu ver mənə", "başqa oyun kodu yaz", "daha bir oyun yaz", "html oyun kodu yaz",
  "oyun kodu yapar mısın", "bana oyun kodu yaz", "bir oyun yap",
  "اكتب كود لعبة", "اكتب لي لعبة", "اعطني كود لعبة", "اريد كود لعبة",
  "write a game code", "make me a game", "write a game", "give me a game code", "create a game", "write game code please",
  "напиши код игры", "напиши игру", "сделай мне игру", "дай код игры",
];
const NEG = [
  "oyun haqqında məlumat ver", "oyun nədir", "oyun oynayaq", "oyunun tarixi", "oyun", "kod yaz", "salam", "python ilə oyun kodu yaz", "pygame oyun kodu", "unity oyun kodu yaz", "mənim oyun kodumda xəta var",
  "oyun kodunu düzəlt", "pong oyunu kodu yaz", "3D yarış oyunu kodu yaz ki maşın sürsün", "write python game code", "what is a game", "game history", "tell me about games", "расскажи про игры", "напиши код на python",
  "ما هي اللعبة", "اكتب كود", "شرح لعبة", "oyun kodu necə yazılır", "kalkulyator kodu yaz", "html səhifə yaz",
];
test("niyyət: oyun kodu yaz/ver (az/tr/ar/en/ru) tanınır; sual/başqa mövzu/başqa dil tanınmır", () => {
  for (const q of POS) assert.ok(pickGame(q, [], () => 0, FX), "müsbət: " + q);
  for (const q of NEG) assert.equal(pickGame(q, [], () => 0, FX), null, "mənfi: " + q);
  assert.equal(pickGame("oyun kodu yaz", [], () => 0, []), null, "oyun yoxdursa null (adi axın)");
  assert.equal(pickGame("x".repeat(300) + " oyun kodu yaz", [], () => 0, FX), null);
});

test("konkret növ: tetris, ilan/snake, 2048, xox/tic tac toe, ad ilə; yoxdursa (pong) hazır nümunələrə/AI-yə qalır", () => {
  const cases = [
    ["tetris oyunu yaz", "fx-tetris"], ["Tetris oyun kodu ver", "fx-tetris"], ["ilan oyunu kodu yaz", "fx-snake"], ["ilan oyunu yaz", "fx-snake"], ["write a snake game", "fx-snake"], ["snake game code", "fx-snake"],
    ["2048 oyun kodu yaz", "fx-2048"], ["2048 oyunu", null], ["xox oyunu yaz", "fx-xox"], ["tic tac toe game code", "fx-xox"], ["X O oyunu kodu ver", "fx-xox"], ["напиши код игры змейка", "fx-snake"], ["напиши игру крестики нолики", "fx-xox"],
    ["اكتب كود لعبة ثعبان", "fx-snake"], ["FX Tetris oyun kodu yaz", "fx-tetris"], ["snake oyunu yaz", "fx-snake"], ["tetris game please write", "fx-tetris"],
  ];
  for (const [q, want] of cases) {
    const p = pickGame(q, [], () => 0.5, FX);
    if (want === null) assert.equal(p, null, q);
    else assert.equal(p && p.slug, want, q);
  }
  // kateqoriya: puzzle oyunu → yalnız puzzle olanlar
  const seen = new Set();
  for (const r of [0, 0.3, 0.6, 0.99]) seen.add(pickGame("puzzle oyun kodu yaz", [], () => r, FX).slug);
  assert.ok([...seen].every((s) => ["fx-tetris", "fx-2048"].includes(s)), [...seen].join());
  // konkret istək təkrar olsa da verilir
  const h = asHist([`x\n::game:: fx-tetris | FX Tetris\n\n\`\`\`html\n<p>\n\`\`\``]);
  assert.equal(pickGame("tetris oyunu yaz", h, () => 0, FX).slug, "fx-tetris");
});

// ------------------------------------------------------------------ cavab + təkrarsızlıq
test("cavab: giriş sətri (5 dildə, oyun adı ilə), gizli işarə, tam orijinal kod ```html blokunda; «yarat» sözü yoxdur", async () => {
  const q = { az: "oyun kodu yaz", tr: "bana oyun kodu yaz", en: "write a game code", ru: "напиши код игры", ar: "اكتب كود لعبة" };
  for (const [lang, msg] of Object.entries(q)) {
    assert.equal(langOf(msg), lang, msg);
    const r = await fixGame(msg, [], () => 0.1);
    assert.ok(r, msg);
    const slug = slugOf(r);
    const game = FX.find((g) => g.slug === slug);
    assert.ok(r.split("\n")[0].includes(game.title), "giriş sətrində ad: " + r.split("\n")[0]);
    assert.doesNotMatch(r.split("\n")[0], /yarat/i);
    assert.match(r, /^```html\n/m);
    assert.ok(r.endsWith("```"));
    // kod bayt-bayt eyni (fence-dən əvvəl yeni sətir yalnız kod ona bitmirsə əlavə olunur)
    const orig = fs.readFileSync(path.join(FIX, slug + ".html"), "utf8");
    assert.equal(code(r), orig.endsWith("\n") ? orig : orig + "\n", slug);
  }
});

test("hər dəfə fərqli oyun: tarixçədəkilər çıxılır; hamısı bitəndə təsadüfi yenidən, sonuncu ilə eyni olmadan", async () => {
  for (const seq of [[0], [0.99], [0.5], [0.2, 0.7, 0.4, 0.9], [0.13, 0.57, 0.31]]) {
    const rand = seeded(seq);
    let hist = [];
    const order = [];
    for (let i = 0; i < 4; i++) {
      const r = await fixGame("oyun kodu yaz", hist, rand);
      order.push(slugOf(r));
      hist = hist.concat([{ role: "user", text: "oyun kodu yaz" }, { role: "assistant", text: r.replace(/```html[\s\S]*```/, "") }]); // client kodu göndərmir, işarə qalır
    }
    assert.equal(new Set(order).size, 4, "ilk 4 fərqli: " + order);
    // dövr bitdi: sonrakılar sonuncudan fərqli (təsadüfi yenidən)
    for (let i = 0; i < 12; i++) {
      const r = await fixGame("oyun kodu ver", hist, rand);
      const prev = shownGames(hist, FX).at(-1);
      assert.notEqual(slugOf(r), prev, `təkrar: ${i}`);
      hist = hist.concat([{ role: "user", text: "oyun kodu ver" }, { role: "assistant", text: r }]);
    }
  }
  // tarixçə sonsuz uzun olsa da (slug hamısı istifadə olunub) işləyir; işarə itibsə giriş sətrindəki ada görə tanınır
  const noMark = [{ role: "assistant", text: "Hazır oyun: FX Tetris. Kodun altındakı «Aç» düyməsi ilə oyunu aça bilərsən.\n\n```html\n<p>\n```" }];
  assert.deepEqual(shownGames(noMark, FX), ["fx-tetris"]);
  const r = await fixGame("oyun kodu yaz", noMark, () => 0);
  assert.notEqual(slugOf(r), "fx-tetris");
  // yalnız köməkçi mesajları sayılır
  assert.deepEqual(shownGames([{ role: "user", text: "::game:: fx-snake | x" }], FX), []);
});

test("``` olan oyun seçilmir (UI kod blokunu pozmasın); başqası verilir; bütün oyunlar belədirsə null", async () => {
  const withFence = createGameReply([...FX.slice(0, 1), mk("fx-fence", { title: "FX Fence", keywords: ["fence"], kinds: [] })]);
  for (let i = 0; i < 6; i++) {
    const r = await withFence("oyun kodu yaz", [], () => 0.99);
    assert.equal(slugOf(r), "fx-tetris");
  }
  assert.equal(await createGameReply([mk("fx-fence", { title: "FX Fence", keywords: ["fence"], kinds: [] })])("oyun kodu yaz", [], () => 0), null);
  // yüklənməyən modul
  assert.equal(await createGameReply([{ slug: "fx-bad", title: "Bad", keywords: [], kinds: [], load: async () => { throw new Error("yox"); } }])("oyun kodu yaz", [], () => 0), null);
});

// ------------------------------------------------------------------ chat.js
async function chat(body) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}
const withGames = async (list, fn) => {
  const before = GAMES.splice(0, GAMES.length, ...list);
  try { return await fn(); } finally { GAMES.splice(0, GAMES.length, ...before); }
};

test("chat.js: istehsal index-i boşdursa «oyun kodu yaz» əvvəlki axınla davam edir (AI-yə düşür); oyun varsa AI çağırılmır, dini bildiriş yoxdur", async () => {
  if (!GAMES.length) {
    const r = await chat({ message: "oyun kodu yaz" });
    assert.ok(!/::game::/.test(String(r.reply)), "oyun yoxdur → hijack yoxdur");
  }
  await withGames(FX, async () => {
    const r = await chat({ message: "oyun kodu yaz", noticeShown: false });
    assert.equal(r.usedAI, false);
    assert.equal(r.success, true);
    assert.ok(!r.religious && !r.notice && !hasNotice(r.reply));
    assert.match(r.reply, /^Hazır oyun: FX /);
    assert.match(r.reply, /```html\n[\s\S]+```$/);
    // limit dolu olsa da hazır cavab verilir
    const l = await chat({ message: "oyun yaz", limitReached: true });
    assert.equal(l.usedAI, false);
    assert.match(l.reply, /```html/);
    // ardıcıl söhbət: client kodu göndərmir (yalnız işarə), 4 fərqli oyun
    const hist = [];
    const got = [];
    for (let i = 0; i < 4; i++) {
      hist.push({ role: "user", text: "oyun kodu yaz" });
      const x = await chat({ message: "oyun kodu yaz", messages: hist.slice(-8) });
      got.push(slugOf(x.reply));
      hist.push({ role: "assistant", text: x.reply.replace(/```[\s\S]*?```/, "") });
    }
    assert.equal(new Set(got).size, 4, got.join());
    // konkret
    assert.match((await chat({ message: "ilan oyunu yaz" })).reply, /::game:: fx-snake \| FX Snake/);
    // adi suallar toxunulmaz
    for (const q of ["oyun haqqında məlumat ver", "salam", "Bəqərə 255", "python ilə oyun kodu yaz"]) assert.doesNotMatch(String((await chat({ message: q })).reply), /::game::/, q);
  });
});

test("chat.js: böyük oyun (~95KB) cavabda tam gəlir; AI tarixçəsinə kod düşmür (compactHistory)", async () => {
  const big = "<!doctype html><html><body><script>\n" + "var x = 1; // " + "ü".repeat(40) + "\n".repeat(1) + "function f(){return `a${1}`}\n".repeat(3300) + "</script></body></html>\n";
  assert.ok(Buffer.byteLength(big) > 90 * 1024);
  const g = { slug: "fx-big", title: "FX Big", keywords: ["big"], kinds: [], load: async () => ({ default: big }) };
  await withGames([g], async () => {
    const r = await chat({ message: "oyun kodu yaz" });
    assert.equal(code(r.reply), big);
    assert.ok(Buffer.byteLength(JSON.stringify(r)) < 4 * 1024 * 1024, "Vercel cavab limiti 4.5MB");
    const c = compactHistory(r.reply);
    assert.match(c, /\[\[game:fx-big\]\]/);
    assert.ok(c.length < 300, "AI tarixçəsi: " + c.length);
    assert.doesNotMatch(stripAyahMarkup(r.reply), /::game::/);
  });
});

// ------------------------------------------------------------------ səhifə
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function page({ stored } = {}) {
  const sent = [];
  const puts = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.TextEncoder = TextEncoder;
      if (stored) for (const [k, v] of Object.entries(stored)) w.localStorage.setItem(k, v);
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          sent.push(req);
          const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
          const real = globalThis.fetch;
          globalThis.fetch = async () => { throw new Error("AI yoxdur"); };
          try { await handler({ method: "POST", body: req }, res); } finally { globalThis.fetch = real; }
          return out(200, res.body);
        }
        if (u.pathname === "/api/chats") {
          if (init.method === "PUT") { puts.push(JSON.parse(init.body)); return out(200, { ok: true, storage: true }); }
          return out(200, { ok: true, storage: true, chats: [], chat: null });
        }
        return out(200, { ok: true });
      };
    },
  });
  const d = dom.window.document;
  const send = async (t) => { d.querySelector("#inp").value = t; d.querySelector("#btn").click(); await wait(150); };
  return { w: dom.window, d, send, sent, puts };
}

test("səhifə: oyun cavabı kod bloku + «Aç» düyməsi kimi çəkilir, gizli işarə görünmür; növbəti sorğuda kod göndərilmir və oyun fərqlidir", { skip }, async () => {
  await withGames(FX, async () => {
    const p = page();
    await p.send("oyun kodu yaz");
    const bots = () => p.d.querySelectorAll("#msgs .msg.b");
    const first = bots()[0];
    assert.ok(first.querySelector(".cb pre code"), "kod bloku");
    assert.ok(first.querySelector("button.runbtn"), "«Aç» düyməsi");
    assert.doesNotMatch(first.textContent.replace(first.querySelector("pre").textContent, ""), /::game::/);
    assert.match(first.textContent, /Hazır oyun: FX /);
    assert.match(first.querySelector("pre code").textContent, /^<!doctype html>/i);
    assert.equal(p.d.querySelectorAll("#msgs .nt").length, 0, "dini bildiriş yoxdur");
    await p.send("oyun kodu yaz");
    await p.send("oyun kodu yaz");
    const req = p.sent.at(-1);
    assert.ok(req.messages.some((m) => /::game:: fx-/.test(m.text)));
    assert.equal(req.games.length, 2, "client bütün söhbətdəki göstərilmiş oyunların slug-larını göndərir");
    assert.ok(req.games.every((x) => /^fx-/.test(x)) && new Set(req.games).size === 2);
    assert.ok(req.messages.every((m) => !/```|<!doctype/i.test(m.text)), "xam tarixçədə oyun kodu yoxdur");
    const titles = [...p.d.querySelectorAll("#msgs .msg.b")].map((b) => b.textContent.match(/Hazır oyun: (FX \S+)/)[1]);
    assert.equal(new Set(titles).size, 3, titles.join());
    assert.equal(p.d.querySelector("#btn").disabled, false);
    // server sinxronu: oyun mesajı kodsuz (serverdə 20000 limit) + işarə
    p.w.nibrasChats.flush();
    await wait(50);
    const last = p.puts.at(-1);
    assert.ok(last && last.messages.filter((m) => m.k === "b").every((m) => !/```/.test(m.t) && /::game:: fx-/.test(m.t)));
    p.w.close();
  });
});

test("səhifə: serverdən bərpa olunmuş (kodsuz) oyun mesajı «Oyunu yenidən göstər» düyməsi verir, klik həmin oyunu qaytarır", { skip }, async () => {
  await withGames(FX, async () => {
    const p = page();
    await p.send("tetris oyunu yaz");
    const key = Object.keys(p.w.localStorage).find((k) => /chats/i.test(k));
    const st = JSON.parse(p.w.localStorage.getItem(key));
    const id = st.cur;
    const stripped = st.items[id].msgs.map((m) => (m.k === "b" ? { ...m, t: m.t.replace(/```[\s\S]*?```/, "") } : m));
    st.items[id].msgs = stripped;
    const q = page({ stored: { [key]: JSON.stringify(st) } });
    await wait(80);
    const chip = q.d.querySelector("#msgs .sg button.chip");
    assert.ok(chip, "yenidən göstər düyməsi");
    assert.doesNotMatch(q.d.querySelector("#msgs .msg.b").textContent, /::game::/);
    chip.click();
    await wait(200);
    assert.equal(q.sent.at(-1).message, "FX Tetris oyun kodu yaz");
    const last = [...q.d.querySelectorAll("#msgs .msg.b")].at(-1);
    assert.match(last.textContent, /Hazır oyun: FX Tetris/);
    assert.ok(last.querySelector("button.runbtn"));
    p.w.close();
    q.w.close();
  });
});
