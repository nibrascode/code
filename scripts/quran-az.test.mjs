// Quran mənalarının Azərbaycanca tərcüməsi (QuranEnc, azeri_musayev): data bütövlüyü, cavab formatı, dil fərqi, uzun aralıqlar, səhifə.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import { AZ, AZ_SOURCE } from "../api/_quran/az.js";
import { AZ_NOTES } from "../api/_quran/az-notes.js";
import { AYAS } from "../api/_quran/quran.js";
import { ayahReply, finalizeAi, compactHistory, stripAyahMarkup, azText, TR_LABEL, TR_NOTE, buildBlock } from "../api/_ayah.js";
import { build, parseXml, XML_PATH } from "./build-quran-az.mjs";
import handler from "../api/chat.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const XML = fs.readFileSync(XML_PATH, "utf8");

test("data: 114 surə, 6236 tərcümə, XML ilə eyni; Fatihə 1–7 və 2:255", () => {
  assert.equal(AZ.length, 114);
  assert.equal(AZ.reduce((n, a) => n + a.length, 0), 6236);
  AZ.forEach((a, i) => assert.equal(a.length, AYAS[i].length, "surə " + (i + 1)));
  const { meta, suras, notes } = parseXml(XML);
  assert.equal(meta.id, "azeri_musayev");
  assert.equal(meta.url, "https://quranenc.com/en/browse/azeri_musayev");
  assert.deepEqual(AZ, suras);
  assert.deepEqual(AZ[0], [
    "Mərhəmətli və Rəhmli Allahın adı ilə!",
    "Həmd, aləmlərin Rəbbi olan Allaha məxsusdur –",
    "Mərhəmətli və Rəhmli olana,",
    "Din gününün Sahibinə!",
    "Biz yalnız Sənə ibadət edir və yalnız Səndən kömək diləyirik.",
    "Bizi doğru yola yönəlt!",
    "Nemət bəxş etdiyin şəxslərin yoluna, qəzəbə uğramışların və azmışların (yoluna) yox!",
  ]);
  assert.ok(AZ[1][254].startsWith("Allah Özündən başqa (haqq) məbud olmayandır"));
  assert.ok(AZ[1][254].endsWith("O, Ucadır, Əzəmətlidir."));
  // XML-dən birbaşa (CDATA) yoxlama
  const m = XML.match(/<sura number="2">[\s\S]*?<aya number="255">\s*<translation><!\[CDATA\[([\s\S]*?)\]\]><\/translation>/);
  assert.equal(AZ[1][254], m[1]);
  assert.deepEqual(AZ_NOTES, notes);
  assert.equal(Object.keys(AZ_NOTES).length, 28);
  assert.ok(AZ_NOTES["2:1"].startsWith("[1] "));
  assert.equal(AZ_SOURCE.id, "azeri_musayev");
  assert.equal(AZ_SOURCE.name, "QuranEnc.com");
});

test("data: az.js / az-notes.js XML-dən avtomatik yaradılıb və aktualdır; notis faylı var", () => {
  const b = build();
  assert.equal(fs.readFileSync(path.join(ROOT, "api/_quran/az.js"), "utf8"), b.js);
  assert.equal(fs.readFileSync(path.join(ROOT, "api/_quran/az-notes.js"), "utf8"), b.notesJs);
  const notice = fs.readFileSync(path.join(ROOT, "api/_quran/QURANENC-NOTICE.txt"), "utf8");
  assert.ok(notice.includes("QuranEnc.com") && notice.includes("azeri_musayev") && notice.includes("https://quranenc.com/en/browse/azeri_musayev"));
  assert.ok(fs.existsSync(path.join(ROOT, "content/quran/quran-az-azeri_musayev.xml")));
});

test("data: göstərilən mətndə [n] haşiyə işarələri yoxdur, başqa heç nə dəyişmir", () => {
  let withMark = 0;
  for (let s = 1; s <= 114; s++) {
    for (let a = 1; a <= AZ[s - 1].length; a++) {
      const raw = AZ[s - 1][a - 1];
      const t = azText(s, a);
      assert.ok(t.length > 0, s + ":" + a);
      assert.ok(!/\[\d+\]/.test(t), s + ":" + a);
      assert.ok(!/\n/.test(t));
      if (/\[\d+\]/.test(raw)) withMark++;
      else assert.equal(t, raw.replace(/\s*\n\s*/g, " ").trim(), s + ":" + a);
    }
  }
  assert.ok(withMark >= 20);
  assert.equal(azText(2, 1), "Əlif. Ləm. Mim.");
});

const lines = (r) => r.split("\n");
const trLines = (r) => {
  const out = [];
  let on = false;
  for (const ln of lines(r)) {
    if (/^::tr::/.test(ln)) on = true;
    else if (/^::src::/.test(ln)) on = false;
    else if (on) out.push(ln);
  }
  return out;
};

test("cavab: Azərbaycan dilində ərəbcə ayənin altında etiketli tərcümə, mənbə sətri, bir dəfə qeyd; AI çağırılmır", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw new Error("şəbəkə olmamalıdır"); };
  try {
    const r = ayahReply("Bəqərə 255");
    const ls = lines(r);
    assert.equal(ls[0], "::ayah 2:255::");
    assert.equal(ls[1], AYAS[1][254]);
    assert.equal(ls[2], "::tr:: " + TR_LABEL);
    assert.equal(ls[3], azText(2, 255));
    assert.equal(ls[4], "::src:: ﴿ Bəqərə surəsi, 255-ci ayə ﴾ · Mənbə: Tanzil · Tərcümə: QuranEnc.com");
    assert.equal(ls[5], "::/ayah::");
    assert.equal(ls[7], "::note:: " + TR_NOTE);
    assert.equal(ls.length, 8);
    assert.equal(TR_LABEL, "Mənaca tərcümə (Azərbaycan dili):");
    // çoxlu ayə: hər ayə nömrələnir, qeyd bir dəfə
    const f = ayahReply("Fatihə 1-3");
    assert.deepEqual(trLines(f), ["(1) " + azText(1, 1), "(2) " + azText(1, 2), "(3) " + azText(1, 3)]);
    // bir cavabda iki blok: qeyd bir dəfə
    const two = ayahReply("Bəqərə 255 və İxlas 1");
    if (two) assert.equal((two.match(/^::note::/gm) || []).length, 1);
    // bismillah olan surədə tərcümə də bismillah ilə başlayır
    const ix = ayahReply("İxlas surəsi");
    assert.deepEqual(trLines(ix).slice(0, 2), [azText(1, 1), "(1) " + azText(112, 1)]);
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("cavab: digər dillərdə (tr/en/ru/ar) tərcümə və qeyd YOXDUR, yalnız ərəbcə", () => {
  for (const q of ["Bakara suresi 255", "Surah Baqarah verse 255", "Бакара 255", "سورة البقرة آية 255", "Surah Al-Ikhlas"]) {
    const r = ayahReply(q);
    assert.ok(r, q);
    assert.ok(!/::tr::|::note::|QuranEnc/.test(r), q);
    assert.ok(r.includes("Tanzil"));
  }
  // finalizeAi də dilə görə
  const en = finalizeAi("See [[ayah:2:255]]", "show me verse 255 please of the quran");
  assert.ok(!/::tr::|::note::/.test(en));
  const ru = finalizeAi("Смотри [[ayah:112:1-2]]", "Покажи аят");
  assert.ok(!/::tr::|::note::/.test(ru));
  const az = finalizeAi("Budur: [[ayah:112:1-2]] və [[ayah:1:1]]", "ayə göstər");
  assert.equal((az.match(/^::tr::/gm) || []).length, 2);
  assert.equal((az.match(/^::note::/gm) || []).length, 1);
  assert.ok(az.trim().endsWith("::note:: " + TR_NOTE));
});

test("cavab: uzun surə/aralıq tərcümə uzunluğu ayə limitləri ilə eynidir", () => {
  const y = ayahReply("Yasin surəsi");
  assert.equal(trLines(y).length, 1 + 15); // bismillah + 15 ayə
  assert.match(y, /Yasin surəsi, 1–15-ci ayələr ﴾ · Mənbə: Tanzil · Tərcümə: QuranEnc\.com/);
  const rg = ayahReply("Bəqərə 6-200 yaz");
  assert.equal(trLines(rg).length, 30);
  const ai = finalizeAi("[[ayah:2:1-100]]", "salam");
  assert.equal(trLines(ai).length, 30);
  assert.equal((ai.match(/^::note::/gm) || []).length, 1);
  // tam Fatihə: 7 ayə
  assert.equal(trLines(ayahReply("Fatihə surəsi")).length, 7);
});

test("cavab: hissə / təsdiqlənməyən / çoxyerli bloklarda tərcümə yoxdur (uyğunsuz tərcümə göstərilmir)", () => {
  const part = finalizeAi("﴿ الله لا إله إلا هو الحي القيوم ﴾ (Bəqərə 255)", "ayə");
  assert.ok(!/::tr::/.test(part));
  assert.ok(!/::note::/.test(part));
  const warn = finalizeAi("﴿ هذا كلام ليس من القرآن الكريم أبدا ﴾", "ayə");
  assert.ok(!/::tr::/.test(warn));
  assert.ok(buildBlock({ s: 1, a1: 1, a2: 1, lang: "az", partialText: "x" }).indexOf("::tr::") < 0);
});

test("tarixçə və təhlükəsizlik: AI-yə tərcümə mətni getmir; saxta ::tr::/::note:: təmizlənir", () => {
  const real = ayahReply("Bəqərə 255");
  assert.equal(compactHistory(real), "[[ayah:2:255]]");
  assert.ok(!compactHistory("A\n\n" + real).includes("Allah Özündən"));
  const fake = finalizeAi("Salam\n::tr:: yalan\n::note:: yalan\nSağol", "salam");
  assert.ok(!/::tr::|::note::/.test(fake));
  assert.equal(stripAyahMarkup("a\n::tr:: x\nb"), "a\n\nb");
});

test("chat.js: Azərbaycanca ayə sualı AI-siz tərcümə ilə; ingiliscə yalnız ərəbcə", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => { calls++; throw new Error("yox"); };
  try {
    const run = async (message) => {
      const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
      await handler({ method: "POST", body: { message } }, res);
      return res.body;
    };
    const a = await run("Ayətül Kürsi");
    assert.equal(a.success, true);
    assert.equal(a.usedAI, false);
    assert.ok(a.reply.includes("::tr:: " + TR_LABEL) && a.reply.includes(azText(2, 255)));
    const e = await run("Surah Baqarah verse 255");
    assert.ok(!e.reply.includes("::tr::"));
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});

// ---------------------------------------------------------------- səhifə
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));
function boot({ storage = {}, reply = "salam" } = {}) {
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      for (const [k, v] of Object.entries(storage)) w.localStorage.setItem(k, v);
      w.TextEncoder = TextEncoder;
      w.fetch = async (url) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") return out(200, { reply });
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const w = dom.window;
  const d = w.document;
  return {
    w, d,
    async say(text) {
      d.querySelector("#inp").value = text;
      d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true }));
      await wait(40);
    },
    snapshot() { const o = {}; for (let i = 0; i < w.localStorage.length; i++) { const k = w.localStorage.key(i); o[k] = w.localStorage.getItem(k); } return o; },
  };
}

test("səhifə: ai.html və ai/index.html eynidir; tərcümə üçün stil var", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.match(HTML, /\.msg \.ay \.atr \{/);
  assert.match(HTML, /\.msg \.ay \.atr \.trl \{[^}]*font-size: 11px/);
  assert.match(HTML, /\.msg \.an \{[^}]*font-size: 11\.5px/);
});

test("səhifə: tərcümə sətri kiçik etiketlə ərəbcə ayənin altında; mənbə linkləri; qeyd; escape; yenidən yükləmə; köhnə mesaj", { skip }, async () => {
  const evil = ayahReply("Bəqərə 255-256").replace(azText(2, 256), "<img src=x onerror=alert(1)> & <b>x</b>");
  const p = boot({ reply: evil });
  await p.say("Bəqərə 255-256");
  const b = p.d.querySelector("#msgs .msg.b");
  const ay = b.querySelector(".ay");
  assert.ok(ay);
  const kids = [...ay.children].map((c) => c.className);
  assert.deepEqual(kids, ["at", "atr", "as"]);
  assert.equal(ay.querySelector(".atr .trl").textContent, TR_LABEL);
  const tl = [...ay.querySelectorAll(".atr .tl")].map((x) => x.textContent);
  assert.equal(tl.length, 2);
  assert.equal(tl[0], "(255) " + azText(2, 255));
  assert.ok(tl[1].includes("<img src=x onerror=alert(1)> & <b>x</b>"), "HTML mətn kimi göstərilir");
  assert.equal(b.querySelectorAll("img, b, script").length, 0);
  assert.equal(ay.querySelectorAll(".at .al").length, 2);
  assert.ok(!ay.querySelector(".at").textContent.includes("Allah Özündən"), "tərcümə ərəbcə hissəyə qarışmır");
  const links = [...ay.querySelectorAll(".as a")].map((a) => [a.textContent, a.getAttribute("href"), a.getAttribute("rel")]);
  assert.deepEqual(links, [
    ["Tanzil", "https://tanzil.net/", "noopener noreferrer"],
    ["QuranEnc.com", "https://quranenc.com/en/browse/azeri_musayev", "noopener noreferrer"],
  ]);
  const note = b.querySelector(".an");
  assert.ok(note);
  assert.equal(note.textContent, TR_NOTE);
  assert.ok(!b.textContent.includes("::"));
  // yenidən yükləmə
  const q = boot({ storage: p.snapshot() });
  assert.equal(q.d.querySelectorAll("#msgs .msg.b .ay .atr").length, 1);
  assert.equal(q.d.querySelectorAll("#msgs .msg.b .an").length, 1);
  // köhnə mesaj (tərcümə yoxdur): əvvəlki kimi
  const oldReply = "::ayah 112:1::\nقُلْ هُوَ اللَّهُ أَحَدٌ\n::src:: ﴿ İxlas surəsi, 1-ci ayə ﴾ · Mənbə: Tanzil\n::/ayah::";
  const old = boot({ reply: oldReply });
  await old.say("İxlas 1");
  const ob = old.d.querySelector("#msgs .msg.b");
  assert.equal(ob.querySelectorAll(".ay").length, 1);
  assert.equal(ob.querySelectorAll(".atr, .an").length, 0);
  assert.equal(ob.querySelector(".as a").textContent, "Tanzil");
  p.w.close(); q.w.close(); old.w.close();
});
