// Real 16 oyunluq kolleksiya: index ↔ content/games ↔ api/_games/*.js, chat.js-də «oyun kodu yaz» axını (AI çağırılmadan), rotasiya, konkret növ, hijack yoxdur.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import handler from "../api/chat.js";
import { GAMES } from "../api/_games/index.js";
import { pickGame, shownGames } from "../api/_game.js";
import { toModule } from "./build-games.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SLUGS = ["2048", "baki-gecesi", "dan-yerine-qeder", "ilan", "kerpic-qirma", "kostebek-vur", "mina-axtaran", "neon-breakout", "neon-drive", "neon-void", "pinq-ponq", "qala-kesikcisi", "qus-ucusu", "sonsuz-qacis", "xox", "yaddas-kartlari"];
// İstifadəçinin özünün yüklədiyi (olduğu kimi saxlanan) oyunlar: daha böyük ola bilər; kənar resurs yalnız Google Fonts (fallback şriftlə də işləyir) və <meta> şəkil ünvanı
const USER_GAMES = ["baki-gecesi", "dan-yerine-qeder", "neon-breakout", "neon-drive", "neon-void", "qala-kesikcisi"];

async function chat(body) {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}
const codeOf = (reply) => /```html\n([\s\S]*)```$/.exec(reply)?.[1];
const slugOf = (reply) => /^::game:: ([a-z0-9-]+) \| /m.exec(reply)?.[1];

test("kolleksiya: 16 oyun, hər biri content/*.html ilə bayt-bayt eyni generated modulda", async () => {
  assert.deepEqual(GAMES.map((g) => g.slug).sort(), SLUGS);
  assert.equal(new Set(GAMES.map((g) => g.title)).size, 16);
  for (const g of GAMES) {
    const src = fs.readFileSync(path.join(ROOT, "content/games", g.slug + ".html"), "utf8");
    const mod = (await g.load()).default;
    assert.equal(mod, src, g.slug);
    assert.equal(fs.readFileSync(path.join(ROOT, "api/_games", g.slug + ".js"), "utf8"), toModule(src), g.slug + " generated köhnəlib: node scripts/build-games.mjs");
    if (USER_GAMES.includes(g.slug)) {
      assert.ok(!/<script[^>]+src=/i.test(src), g.slug + ": kənar skript olmamalıdır");
      const urls = (src.match(/https?:\/\/[^\s"'<>)]+/g) || []).filter((u) => !/^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(u) && !/^https:\/\/bolt\.new\/static\/og_default\.png$/.test(u));
      assert.deepEqual(urls, [], g.slug + ": gözlənilməz kənar resurs");
      assert.ok(src.length > 3000 && src.length < 100000, g.slug + " ölçü " + src.length);
      assert.ok(/^<!doctype html>/i.test(src.replace(/^\uFEFF/, "").trimStart()) && src.trimEnd().endsWith("</html>"));
    } else {
      assert.ok(src.startsWith("<!doctype html>") && src.trimEnd().endsWith("</html>"));
      assert.ok(!/<script[^>]+src=|https?:\/\//i.test(src), g.slug + ": kənar resurs olmamalıdır");
      assert.ok(src.length > 3000 && src.length < 30000, g.slug + " ölçü " + src.length);
      assert.ok(src.split("\n").length >= 80 && src.split("\n").length <= 250, g.slug + " sətir sayı");
    }
    assert.ok(!src.includes("```") && !/yarat/i.test(src));
    assert.match(src, /touch-action|pointerdown|click/);
  }
});

test("chat: «oyun kodu yaz» (AZ/TR/EN/RU/AR) — AI-siz tam kod, ```html bloku, ad giriş cümləsində", async () => {
  for (const q of ["oyun kodu yaz", "oyun yaz", "oyun ver", "bir oyun kodu ver", "Oyun kodu yapar mısın", "write a game code", "give me a game", "напиши код игры", "дай игру", "اكتب كود لعبة", "اعطني لعبة"]) {
    const r = await chat({ message: q, lang: "az", messages: [] });
    assert.equal(r.success, true, q);
    assert.equal(r.usedAI, false, q);
    const slug = slugOf(r.reply);
    assert.ok(slug && SLUGS.includes(slug), q + " → " + r.reply.slice(0, 80));
    const src = fs.readFileSync(path.join(ROOT, "content/games", slug + ".html"), "utf8");
    assert.equal(codeOf(r.reply), src, q + ": kod orijinalla eyni olmalıdır");
    const title = GAMES.find((g) => g.slug === slug).title;
    assert.ok(r.reply.split("\n")[0].includes(title), "giriş cümləsi oyunun adını deməlidir");
    assert.ok(!r.notice && !r.religious, q);
  }
});

test("rotasiya: hər sorğu fərqli oyun (history böyüyür), 16-dan sonra təsadüfi amma sonuncu təkrarlanmır; «history»/«content» sahələri də qəbul olunur", async () => {
  let messages = [];
  const seen = [];
  for (let i = 0; i < 16; i++) {
    const r = await chat({ message: "oyun kodu yaz", lang: "az", messages });
    const slug = slugOf(r.reply);
    assert.ok(!seen.includes(slug), `təkrar: ${slug} (${i}. sorğu)`);
    seen.push(slug);
    messages = [...messages, { role: "user", text: "oyun kodu yaz" }, { role: "assistant", text: r.reply }];
  }
  assert.deepEqual(seen.slice().sort(), SLUGS);
  for (let i = 0; i < 25; i++) {
    const r = await chat({ message: "oyun kodu yaz", history: messages.map((m) => ({ role: m.role, content: m.text })) });
    const slug = slugOf(r.reply);
    assert.notEqual(slug, seen[seen.length - 1], "sonuncu ilə eyni oyun");
    seen.push(slug);
    messages = [...messages, { role: "user", text: "oyun kodu yaz" }, { role: "assistant", text: r.reply }];
  }
  assert.ok(new Set(seen.slice(16)).size > 3, "təsadüfilik");
});

test("konkret növ: açar söz uyğun oyunu verir (5 dildə)", async () => {
  const cases = [
    ["ilan oyun kodu yaz", "ilan"], ["snake game code", "ilan"], ["write a snake game", "ilan"], ["напиши код игры змейка", "ilan"], ["اكتب كود لعبة الثعبان", "ilan"],
    ["xox oyunu kodu yaz", "xox"], ["tic tac toe game code", "xox"], ["крестики нолики игра код", "xox"],
    ["2048 oyun kodu ver", "2048"], ["write a 2048 game", "2048"],
    ["flappy bird oyun kodu", "qus-ucusu"], ["quş oyunu yaz", "qus-ucusu"], ["flappy bird game code", "qus-ucusu"],
    ["pong oyun kodu yaz", "pinq-ponq"], ["ping pong game code", "pinq-ponq"],
    ["breakout game code", "kerpic-qirma"], ["kərpic qırma oyunu yaz", "kerpic-qirma"],
    ["minesweeper oyun kodu yaz", "mina-axtaran"], ["напиши код игры сапер", "mina-axtaran"],
    ["memory game code", "yaddas-kartlari"], ["yaddaş oyunu kodu yaz", "yaddas-kartlari"],
    ["köstəbək oyun kodu yaz", "kostebek-vur"], ["whack a mole game code", "kostebek-vur"],
    ["dino runner game code", "sonsuz-qacis"], ["sonsuz qaçış oyunu yaz", "sonsuz-qacis"],
    ["dan yerinə qədər oyun kodu yaz", "dan-yerine-qeder"], ["Dan yerinə qədər kodu yaz", "dan-yerine-qeder"], ["survivors game code", "dan-yerine-qeder"],
    ["bakı gecəsi oyun kodu yaz", "baki-gecesi"], ["Bakı gecəsi oyunu yaz", "baki-gecesi"],
    ["qala keşikçisi oyun kodu yaz", "qala-kesikcisi"], ["tower defense game code", "qala-kesikcisi"], ["qala keşikçisi kodu ver", "qala-kesikcisi"],
    ["neon drive oyun kodu yaz", "neon-drive"], ["neon void oyun kodu yaz", "neon-void"], ["neon breakout oyun kodu yaz", "neon-breakout"], ["write neon breakout game code", "neon-breakout"],
  ];
  for (const [q, want] of cases) assert.equal(pickGame(q, [])?.slug, want, q);
  // konkret istək təkrar olsa da verilir
  const first = await chat({ message: "ilan oyun kodu yaz", messages: [] });
  const again = await chat({ message: "ilan oyun kodu yaz", messages: [{ role: "user", text: "x" }, { role: "assistant", text: first.reply }] });
  assert.equal(slugOf(again.reply), "ilan");
  assert.deepEqual(shownGames([{ role: "assistant", text: first.reply }]), ["ilan"]);
  // «neon» və «yarış» bir neçə oyuna aiddir — onlardan biri
  assert.ok(["neon-drive", "neon-void", "neon-breakout"].includes(pickGame("neon oyun kodu yaz", [])?.slug));
  assert.ok(["baki-gecesi", "neon-drive"].includes(pickGame("yarış oyunu kodu yaz", [])?.slug));
  // kateqoriya
  assert.ok(["xox", "2048", "mina-axtaran", "yaddas-kartlari"].includes(pickGame("puzzle oyun kodu yaz", [])?.slug));
});

test("hijack yoxdur: əlaqəsiz və ya bizdə olmayan sorğular oyun kodu qaytarmır", () => {
  for (const q of ["salam", "namaz necə qılınır", "oyun haqqında məlumat ver", "snake nədir", "oyun oynayaq", "python ilə oyun kodu yaz", "unity oyun kodu yaz", "tetris oyun kodu yaz",
    "kodumu düzəlt", "mənim oyun kodum işləmir", "Bəqərə 255", "bir kod yaz", "write python code", "game of thrones haqqında yaz", "напиши код калькулятора", "اكتب كود موقع", "tetris game code"]) {
    assert.equal(pickGame(q, []), null, q);
  }
});

test("body.games (client bütün söhbətdəki oyunları göndərir): tarixçə 8 mesajla kəsilsə də təkrar olmur", async () => {
  const seen = [];
  for (let i = 0; i < 16; i++) {
    const r = await chat({ message: "oyun kodu yaz", messages: [], games: seen.slice() });
    const slug = slugOf(r.reply);
    assert.ok(!seen.includes(slug), "təkrar " + slug);
    seen.push(slug);
  }
  const r = await chat({ message: "oyun kodu yaz", messages: [], games: seen });
  assert.notEqual(slugOf(r.reply), seen[15]);
  const bad = await chat({ message: "oyun kodu yaz", games: [1, "../x", "A B", "ilan"] });
  assert.ok(slugOf(bad.reply));
});
