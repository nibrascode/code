// Təfsir: ayə-ayə növbələşmə (ayə → təfsiri → ayə → təfsiri) və ayə/surə cavabından sonra təfsir seçimləri (Müyəssər · Sədi · İbn Kəsir).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";
import { tafsirReply, parseTafsirQuery, resolveRef, withTafsirSuggest, suggestQuery, BOOKS, PAGE_CHARS, SUG_MAX } from "../api/_tafsir.js";
import { LOADERS } from "../api/_tafsir/loaders.js";
import { ayahReply, ayahLookup, AYAH_COUNT, compactHistory, stripAyahMarkup } from "../api/_ayah.js";
import { hasNotice } from "../api/_notice.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const head = (r) => [...r.matchAll(/^::(ayah [\d:-]+|tafsir \w+)::$/gm)].map((m) => m[1]);
const sugOf = (r) => {
  const m = r.match(/\n::sug::\n([\s\S]*?)\n::\/sug::$/);
  if (!m) return null;
  const lines = m[1].split("\n");
  return { lead: lines[0].replace(/^::sl:: /, ""), chips: lines.slice(1).map((l) => l.replace(/^::sb:: /, "").split(" | ")) };
};

async function chat(body) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}

/** Bütün səhifələri ardıcıl alır (davam qeydi bitənə qədər). */
async function allPages(q, hint) {
  const pages = [await tafsirReply(q)];
  while (/::note:: (Davamı üçün yaz|للمتابعة اكتب)/.test(pages.at(-1))) {
    const m = pages.at(-1).match(/::note:: (?:Davamı üçün yaz|للمتابعة اكتب): «([^»]+)»/);
    pages.push(await tafsirReply(m[1]));
    assert.ok(pages.length < 60, "sonsuz davam");
  }
  return pages;
}

// ------------------------------------------------------------------ növbələşmə
test("növbələşmə: «Bəqərə 255-257 təfsiri» — ayə, təfsiri, ayə, təfsiri (hər ayə ayrı blokda, ayə-ayə)", async () => {
  const r = await tafsirReply("Bəqərə 255-257 təfsiri");
  assert.deepEqual(head(r), ["ayah 2:255", "tafsir muyassar", "ayah 2:256", "tafsir muyassar", "ayah 2:257", "tafsir muyassar"]);
  // hər ayə blokunda ərəbcə + az mənası var
  const ayahBlocks = r.match(/::ayah 2:25\d::[\s\S]*?::\/ayah::/g);
  assert.equal(ayahBlocks.length, 3);
  for (const b of ayahBlocks) assert.match(b, /::tr:: Mənaca tərcümə \(Azərbaycan dili\):/);
  // yalnız bir ədəd mənbə sətri tafsir bloku sonunda; ad hər blokda
  assert.equal((r.match(/^::tl:: /gm) || []).length, 3);
  assert.match(r, /::src:: Mənbə: QuranEnc\.com · التفسير الميسر\n::\/tafsir::\n\n::note:: Digər təfsirlər/);
  assert.equal((r.match(/^::src:: Mənbə: QuranEnc\.com · التفسير الميسر$/gm) || []).length, 1);
  assert.doesNotMatch(r, /::sug::/);
});

test("növbələşmə: «تفسير الملك 1-10» — bir səhifədə 8 ayə, davamı «الجزء ٢»; hər ayə bir dəfə, sıra pozulmur", async () => {
  const p1 = await tafsirReply("تفسير الملك 1-10");
  const h1 = head(p1);
  assert.equal(h1.length, 16);
  for (let i = 0; i < 8; i++) {
    assert.equal(h1[2 * i], `ayah 67:${i + 1}`);
    assert.equal(h1[2 * i + 1], "tafsir muyassar");
  }
  assert.match(p1, /^::tl:: التفسير الميسر — الجزء ١\/٢$/m);
  assert.match(p1, /::note:: للمتابعة اكتب: «التفسير الميسر 67:1-10 الجزء ٢»/);
  const pages = await allPages("تفسير الملك 1-10");
  assert.equal(pages.length, 2);
  assert.deepEqual(head(pages[1]), ["ayah 67:9", "tafsir muyassar", "ayah 67:10", "tafsir muyassar"]);
  assert.doesNotMatch(pages[1], /للمتابعة اكتب/);
  // tafsir mətni itmir: hər ayənin Müyəssər şərhi cavabda tam var
  const data = (await LOADERS.muyassar[66]()).default;
  const all = pages.join("\n");
  for (let a = 1; a <= 10; a++) assert.ok(all.includes(data[a - 1]), "ayə " + a);
});

test("növbələşmə: Sədi qruplu blok bir dəfə, ilk əhatə etdiyi ayədə, aralıq etiketi ilə; təkrarlanmır", async () => {
  const pages = await allPages("Sədi təfsiri 2:8-12");
  const all = pages.join("\n");
  const sd = (await LOADERS.saadi[1]()).default.b;
  const blocks = sd.filter(([f, t]) => t >= 8 && f <= 12);
  assert.ok(blocks.some(([f, t]) => t > f), "sınaq üçün qruplu blok lazımdır");
  for (const [f, t, text] of blocks) {
    assert.equal(all.split(text.slice(0, 24)).length - 1, 1, `blok ${f}-${t} bir dəfə`);
    if (t > f) assert.equal((all.match(new RegExp(`^::tv:: \\(${f}–${t}\\)$`, "gm")) || []).length >= 1, true, `aralıq etiketi ${f}–${t}`);
  }
  // ayə başlıqları yalnız bir dəfə və sıra ilə: hər ayə bir dəfə
  const ayahs = [...all.matchAll(/^::ayah 2:(\d+)(?:-(\d+))?::$/gm)].flatMap((m) => {
    const a = Number(m[1]), b = Number(m[2] || m[1]);
    return Array.from({ length: b - a + 1 }, (_, i) => a + i);
  });
  assert.deepEqual(ayahs, [8, 9, 10, 11, 12]);
  // qrup bloku ilk ayədə gəlir: «ayah 2:8-9» sonra onun təfsiri, sonra 10
  assert.deepEqual(head(pages[0]).slice(0, 4), ["ayah 2:8-9", "tafsir saadi", "ayah 2:10", "tafsir saadi"]);
});

test("növbələşmə: qrup blokunun ortasından başlayan sorğu — blok öz aralıq etiketi ilə bir dəfə", async () => {
  const r = await tafsirReply("Sədi təfsiri 2:9-10");
  assert.match(r, /::tv:: \(8–9\)/);
  assert.equal((r.match(/\(8–9\)/g) || []).length, 1);
  assert.deepEqual(head(r).slice(0, 2), ["ayah 2:9", "tafsir saadi"]);
});

test("növbələşmə: İbn Kəsir limiti — uzun ayə hissələrə bölünür, davam hissədə ayə təkrarlanmır, hər ayə bir dəfə", async () => {
  const pages = await allPages("İbn Kəsir təfsiri 2:255-257");
  assert.ok(pages.length > 6, "səhifə sayı " + pages.length);
  const body = (r) => (r.match(/::tafsir ibnkathir::[\s\S]*?::\/tafsir::/g) || []).join("\n").split("\n").filter((l) => !/^::/.test(l)).join("\n");
  for (const p of pages) assert.ok(body(p).length <= PAGE_CHARS.ibnkathir + 400, "səhifə limiti " + body(p).length);
  assert.deepEqual(head(pages[0]).slice(0, 2), ["ayah 2:255", "tafsir ibnkathir"]);
  assert.match(pages[0], /::note:: Davamı üçün yaz: «İbn Kəsir təfsiri 2:255-257 hissə 2»/);
  // 2-ci hissə ayə ilə başlamır (255-in davamı), davam etiketi var
  assert.equal(head(pages[1])[0], "tafsir ibnkathir");
  assert.match(pages[1], /^::tv:: \(255\)$/m);
  const all = pages.map((p) => head(p).filter((h) => h.startsWith("ayah"))).flat();
  assert.deepEqual(all, ["ayah 2:255", "ayah 2:256", "ayah 2:257"]);
  // hər hissənin başlığı «hissə N/M»
  pages.forEach((p, i) => assert.match(p.match(/^::tl:: (.*)$/m)[1], new RegExp(`hissə ${i + 1}/${pages.length}$`)));
});

test("növbələşmə: təfsiri olmayan ayə üçün qeyd (uydurma yox); ayə bloku yenə də göstərilir", async () => {
  // Sədidə heç bir blokun əhatə etmədiyi ayəni tap
  let found = null;
  for (let s = 1; s <= 114 && !found; s++) {
    const b = (await LOADERS.saadi[s - 1]()).default.b;
    for (let a = 1; a <= AYAH_COUNT[s - 1]; a++) if (!b.some(([f, t]) => f <= a && a <= t)) { found = [s, a]; break; }
  }
  if (!found) return; // məlumatda belə ayə yoxdur — sınaq tələb olunmur
  const r = await tafsirReply(`Sədi təfsiri ${found[0]}:${found[1]}`);
  assert.deepEqual(head(r), [`ayah ${found[0]}:${found[1]}`]);
  assert.match(r, /::note:: Bu təfsirdə .* üçün ayrıca şərh yoxdur\./);
});

// ------------------------------------------------------------------ təklif
const SHOWN = ["Bəqərə 255", "Ayətül-Kürsi", "Mülk surəsi", "سورة الملك", "سورة ملك", "Fatihə surəsi", "Kur'an Bakara 255", "Ayat al-Kursi", "сура Аль-Мульк", "Bəqərə 255-257"];

test("təklif: ayə/surə cavabının sonunda 3 seçim (Müyəssər · Sədi · İbn Kəsir), hazır sorğularla", () => {
  for (const q of SHOWN) {
    const r = withTafsirSuggest(ayahReply(q), q);
    const sg = sugOf(r);
    assert.ok(sg, q);
    assert.equal(sg.chips.length, 3, q);
    assert.ok(r.indexOf("::sug::") > r.lastIndexOf("::/ayah::"), q);
    assert.ok(r.startsWith(ayahReply(q).trimEnd()), "ayə cavabı dəyişmir: " + q);
  }
  const az = sugOf(withTafsirSuggest(ayahReply("Mülk surəsi"), "Mülk surəsi"));
  assert.deepEqual(az.chips.map((c) => c[0]), ["Müyəssər", "Sədi", "İbn Kəsir"]);
  assert.deepEqual(az.chips.map((c) => c[1]), ["Müyəssər təfsiri Mülk 1-8", "Sədi təfsiri Mülk 1-8", "İbn Kəsir təfsiri Mülk 1-8"]);
  const one = sugOf(withTafsirSuggest(ayahReply("Bəqərə 255"), "Bəqərə 255"));
  assert.equal(one.chips[0][1], "Müyəssər təfsiri Bəqərə 255");
  assert.deepEqual(sugOf(withTafsirSuggest(ayahReply("Ayətül-Kürsi"), "Ayətül-Kürsi")).chips.map((c) => c[1]), one.chips.map((c) => c[1]));
  const tr = sugOf(withTafsirSuggest(ayahReply("Kur'an Bakara 255"), "Kur'an Bakara 255"));
  assert.deepEqual(tr.chips.map((c) => c[0]), ["Müyesser", "Sa‘dî", "İbn Kesîr"]);
  const en = sugOf(withTafsirSuggest(ayahReply("Ayat al-Kursi"), "Ayat al-Kursi"));
  assert.ok(en);
  const ru = sugOf(withTafsirSuggest(ayahReply("сура Аль-Мульк"), "сура Аль-Мульк"));
  assert.deepEqual(ru.chips.map((c) => c[0]), ["Муяссар", "Ас-Саади", "Ибн Касир"]);
  const ar = sugOf(withTafsirSuggest(ayahReply("سورة ملك"), "سورة ملك"));
  assert.deepEqual(ar.chips.map((c) => c[0]), ["الميسر", "السعدي", "ابن كثير"]);
  assert.match(ar.lead, /تفسير/);
});

test("«سورة ملك» (ال-siz) Mülk surəsinə (67) çevrilir", () => {
  const a = ayahLookup("سورة ملك");
  const b = ayahLookup("سورة الملك");
  assert.equal(a.reps[0].s, 67);
  assert.equal(b.reps[0].s, 67);
  assert.match(ayahReply("سورة ملك"), /^::ayah 67:1-\d+::/m);
  return tafsirReply("تفسير سورة ملك 1-3").then((r) => assert.deepEqual(head(r).slice(0, 2), ["ayah 67:1", "tafsir muyassar"]));
});

test("təklif olunan sorğu işləyir: 114 surə × 5 dil × 3 kitab — tanınır, eyni surə/ayələr, düzgün kitab və ilk ayə", async () => {
  const langs = { az: (n) => `${n.az} surəsi`, tr: (n) => `${n.tr} suresi`, en: (n) => `Surah ${n.en}`, ru: (n) => `сура ${n.ru}`, ar: (n, ar) => `سورة ${ar}` };
  const { SURAS } = await import("../api/_quran/suras.js");
  const { SURA_NAMES_AR } = await import("../api/_quran/quran.js");
  let checked = 0;
  for (let s = 1; s <= 114; s++) {
    for (const [lang, mk] of Object.entries(langs)) {
      const q = mk(SURAS[s - 1], SURA_NAMES_AR[s - 1]);
      const rep = ayahReply(q);
      if (!/^::ayah /m.test(rep) || !rep.includes(`::ayah ${s}:`)) continue; // ad tanınmırsa (başqa dil forması) keç
      const sg = sugOf(withTafsirSuggest(rep, q));
      assert.ok(sg && sg.chips.length === 3, q);
      const hdr = rep.match(/^::ayah (\d+):(\d+)(?:-(\d+))?::$/m);
      const lo = Number(hdr[2]);
      const hi = Math.min(Number(hdr[3] || hdr[2]), lo + SUG_MAX - 1);
      sg.chips.forEach(([label, query], i) => {
        const p = parseTafsirQuery(query);
        assert.ok(p, `${lang} ${s}: ${query}`);
        assert.equal(p.book, BOOKS[i], query);
        const r = resolveRef(p.stripped);
        assert.deepEqual([r.reps[0].s, r.reps[0].a1, r.reps[0].a2], [s, lo, hi], `${lang} ${s}: ${query}`);
      });
      // real sorğu yoxlanışı (hər surə üçün az və ar, bütün kitablar)
      if (lang === "az" || lang === "ar") {
        for (const [i, [, query]] of sg.chips.entries()) {
          const t = await tafsirReply(query);
          assert.ok(t, query);
          assert.ok(head(t).includes(`ayah ${s}:${lo}`) || head(t).some((h) => h.startsWith(`ayah ${s}:${lo}-`)), query);
          assert.ok(head(t).includes("tafsir " + BOOKS[i]), query);
          assert.doesNotMatch(t, /::sug::/);
        }
      }
      checked++;
    }
  }
  assert.ok(checked >= 114 * 4, "yoxlanan: " + checked);
});

test("təklif: tafsir cavabında, məlumat qeydində və ayəsiz cavabda yoxdur; təkrar əlavə olunmur", async () => {
  for (const q of ["Bəqərə 255 təfsiri", "Sədi təfsiri Fatihə", "تفسير الملك 1-10", "Müyəssər təfsiri"]) {
    const t = await tafsirReply(q);
    assert.equal(withTafsirSuggest(t, q), t, q);
    const c = (await chat({ message: q })).reply;
    assert.doesNotMatch(c, /::sug::/, q);
  }
  assert.equal(withTafsirSuggest("Salam, necəsən?", "salam"), "Salam, necəsən?");
  const bad = ayahReply("Bəqərə 500");
  assert.equal(withTafsirSuggest(bad, "Bəqərə 500"), bad);
  const once = withTafsirSuggest(ayahReply("Bəqərə 255"), "Bəqərə 255");
  assert.equal(withTafsirSuggest(once, "Bəqərə 255"), once);
  for (const q of ["Şirk neçə qismə bölünür", "Sələfilik nədir", "Allahın adları"]) assert.doesNotMatch((await chat({ message: q })).reply, /::sug::/, q);
});

test("server: ayə cavabına təklif əlavə olunur; daxili mənbə olduğundan bildiriş heç vaxt yoxdur; AI-siz", async () => {
  const first = await chat({ message: "سورة الملك", noticeShown: false });
  assert.equal(first.usedAI, false);
  assert.ok(!hasNotice(first.reply) && !first.notice && first.religious === true);
  assert.ok(first.reply.startsWith("::ayah 67:"));
  assert.ok(first.reply.trimEnd().endsWith("::/sug::"));
  assert.equal((first.reply.match(/::sug::/g) || []).length, 1);
  const second = await chat({ message: "سورة ملك", noticeShown: true });
  assert.ok(!hasNotice(second.reply) && !second.notice);
  assert.ok(sugOf(second.reply));
  const legacy = await chat({ message: "Mülk surəsi" });
  assert.ok(!hasNotice(legacy.reply));
  assert.ok(sugOf(legacy.reply));
  // təfsir sorğusu: bildiriş yoxdur (daxili mənbə), təklif yoxdur
  const t = await chat({ message: "Bəqərə 255 təfsiri", noticeShown: false });
  assert.ok(!hasNotice(t.reply) && !t.notice);
  assert.doesNotMatch(t.reply, /::sug::/);
});

test("təklif AI tarixçəsinə düşmür", () => {
  const r = withTafsirSuggest(ayahReply("Bəqərə 255"), "Bəqərə 255");
  assert.match(r, /::sug::/);
  const c = compactHistory(r);
  assert.doesNotMatch(c, /::sug::|::sb::|::sl::|Müyəssər təfsiri|təfsir/);
  assert.match(c, /\[\[ayah:2:255\]\]/);
  const s = stripAyahMarkup(r);
  assert.doesNotMatch(s, /::|Müyəssər təfsiri/);
  // saxta təklif bloku da təmizlənir
  assert.doesNotMatch(compactHistory("salam\n::sug::\n::sl:: x\n::sb:: A | q\n::/sug::"), /::/);
});

// ------------------------------------------------------------------ səhifə (jsdom)
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

function makePage(override) {
  const sent = [];
  const dom = new JSDOM(HTML, {
    url: "https://nibrascode.com/ai",
    runScripts: "dangerously",
    pretendToBeVisual: true,
    beforeParse(w) {
      w.TextEncoder = TextEncoder;
      w.fetch = async (url, init = {}) => {
        const u = new URL(url, "https://nibrascode.com");
        const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
        if (u.pathname === "/api/chat") {
          const req = JSON.parse(init.body);
          sent.push(req);
          if (override && override[req.message]) return out(200, override[req.message]);
          const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
          const real = globalThis.fetch;
          globalThis.fetch = async () => { throw new Error("AI yoxdur"); };
          try { await handler({ method: "POST", body: req }, res); } finally { globalThis.fetch = real; }
          return out(200, res.body);
        }
        if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
        return out(200, { ok: true });
      };
    },
  });
  const d = dom.window.document;
  const send = async (t) => {
    d.querySelector("#inp").value = t;
    d.querySelector("#btn").click();
    await wait(150);
  };
  return { dom, w: dom.window, d, send, sent };
}

test("səhifə: ai.html və ai/index.html eynidir; təklif düymələri üçün stil var", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.match(HTML, /\.msg \.sg \.chip \{/);
});

test("səhifə: növbələşmiş təfsir — ayə və təfsir bloku növbə ilə çəkilir", { skip }, async () => {
  const { d, send } = makePage();
  await send("Bəqərə 255-257 təfsiri");
  const bubble = d.querySelector("#msgs .msg.b");
  const kids = [...bubble.children].filter((e) => e.classList.contains("ay") || e.classList.contains("tf")).map((e) => (e.classList.contains("ay") ? "ay" : "tf"));
  assert.deepEqual(kids, ["ay", "tf", "ay", "tf", "ay", "tf"]);
  assert.equal(bubble.querySelectorAll(".tf .tfl").length, 3);
  assert.equal(bubble.querySelectorAll(".sg").length, 0, "təfsir cavabında təklif yoxdur");
  assert.equal(d.querySelector("#btn").disabled, false);
});

test("səhifə: təklif düymələri 3 kiçik düymə kimi çəkilir; kliklə hazır sorğu göndərilir, təfsir gəlir, təklif təkrarlanmır", { skip }, async () => {
  const { d, send, sent } = makePage();
  await send("Mülk surəsi");
  const chips = [...d.querySelectorAll("#msgs .msg.b .sg button.chip")];
  assert.deepEqual(chips.map((b) => b.textContent), ["Müyəssər", "Sədi", "İbn Kəsir"]);
  assert.ok(chips.every((b) => b.type === "button" && !b.hasAttribute("data-sq")));
  assert.ok(d.querySelector("#msgs .msg.b .sg .sgl").textContent.length > 5);
  chips[0].click();
  await wait(200);
  assert.equal(sent.at(-1).message, "Müyəssər təfsiri Mülk 1-8");
  const bots = d.querySelectorAll("#msgs .msg.b");
  const last = bots[bots.length - 1];
  assert.ok(last.querySelector(".tf"), "təfsir gəldi");
  assert.match(last.querySelector(".ay .at").textContent, /تَبَارَكَ|تبارك/);
  assert.equal(last.querySelectorAll(".sg").length, 0);
  assert.equal(d.querySelectorAll("#msgs .nt").length, 0, "daxili mənbə cavablarında bildiriş yoxdur");
  assert.equal(d.querySelector("#btn").disabled, false);
  // sonrakı klik: Sədi
  d.querySelectorAll("#msgs .msg.b")[0].querySelectorAll(".sg button.chip")[1].click();
  await wait(200);
  assert.equal(sent.at(-1).message, "Sədi təfsiri Mülk 1-8");
  // ikinci tək ayə cavabı: düymə tək ayə sorğusu göndərir
  await send("Bəqərə 255");
  const bots2 = d.querySelectorAll("#msgs .msg.b");
  bots2[bots2.length - 1].querySelectorAll(".sg button.chip")[2].click();
  await wait(200);
  assert.equal(sent.at(-1).message, "İbn Kəsir təfsiri Bəqərə 255");
});

test("səhifə: cavab gözlənilərkən təklif klikləri yeni sorğu göndərmir", { skip }, async () => {
  const { d, send, sent } = makePage();
  await send("Bəqərə 255");
  const before = sent.length;
  d.querySelector("#btn").disabled = true; // cavab gözlənilir
  d.querySelector("#msgs .msg.b .sg button.chip").click();
  await wait(50);
  assert.equal(sent.length, before, "gözləmə zamanı yeni sorğu getmir");
});

test("server: söhbət tarixçəsindəki təklif bloku AI-yə göndərilmir", async () => {
  const realFetch = globalThis.fetch;
  const prevKey = process.env.GROQ_API_KEY;
  process.env.GROQ_API_KEY = "test-key";
  const sent = [];
  globalThis.fetch = async (url, init) => {
    sent.push(JSON.parse(init.body));
    return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "Salam, buyurun." } }] }) };
  };
  try {
    const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
    const ans = withTafsirSuggest(ayahReply("Bəqərə 255"), "Bəqərə 255");
    await handler({ method: "POST", body: { message: "Mənə hikmətli söz de", messages: [{ role: "user", text: "Bəqərə 255" }, { role: "assistant", text: ans }, { role: "user", text: "Mənə hikmətli söz de" }], noticeShown: true } }, res);
    assert.ok(sent.length >= 1);
    const blob = JSON.stringify(sent);
    assert.doesNotMatch(blob, /::sug::|::sb::|::sl::|Müyəssər təfsiri|Sədi təfsiri/);
  } finally {
    globalThis.fetch = realFetch;
    if (prevKey === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prevKey;
  }
});

test("səhifə: təklif bloku tam escape olunur (HTML/attribut inyeksiyası işləmir)", { skip }, async () => {
  const evil = "Cavab\n\n::sug::\n::sl:: <img src=x onerror=alert(1)> \"lead\"\n::sb:: <img src=x onerror=alert(2)> | <b>q</b> \" onclick=\"alert(3)\n::sb:: A\" onmouseover=\"alert(4) | sorğu 2\n::sb:: boş\n::/sug::";
  const { d, send, sent } = makePage({ "xss": { success: true, reply: evil, usedAI: false } });
  await send("xss");
  assert.equal(d.querySelectorAll("#msgs img").length, 0);
  assert.equal(d.querySelectorAll("#msgs b").length, 0);
  const chips = [...d.querySelectorAll("#msgs .sg button.chip")];
  assert.equal(chips.length, 2, "sorğusu olmayan sətir atlanır");
  assert.equal(chips[0].textContent, "<img src=x onerror=alert(2)>");
  assert.ok(chips.every((c) => c.getAttributeNames().sort().join() === "class,type"), "əlavə atributlar yoxdur");
  assert.equal(d.querySelector("#msgs .sgl").textContent, "<img src=x onerror=alert(1)> \"lead\"");
  chips[1].click();
  await wait(100);
  assert.equal(sent.at(-1).message, "sorğu 2");
});
