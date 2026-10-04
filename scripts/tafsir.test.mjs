// Təfsirlər (Müyəssər, Sədi — QuranEnc.com; İbn Kəsir — spa5k/tafsir_api): daxili məlumat, AI-siz, ərəbcə mətn dəyişdirilmədən.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";
import handler from "../api/chat.js";
import { tafsirReply, parseTafsirQuery, segments, paginate, chunkText, BOOKS, PAGE_CHARS } from "../api/_tafsir.js";
import { LOADERS } from "../api/_tafsir/loaders.js";
import { AYAH_COUNT, compactHistory, stripAyahMarkup, ayahReply } from "../api/_ayah.js";
import { hasNotice } from "../api/_notice.js";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const head = (r) => [...r.matchAll(/^::(ayah [\d:-]+|tafsir \w+)::$/gm)].map((m) => m[1]);
const noMarks = (t) => t.replace(/[\u064B-\u065F\u0670\u0640]/g, "").replace(/[أإآ]/g, "ا");
const label = (r) => (r.match(/^::tl:: (.*)$/m) || [])[1];

async function chat(body) {
  const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const real = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await handler({ method: "POST", body }, res); } finally { globalThis.fetch = real; }
  return res.body;
}

test("məlumat: hər kitab üçün 114 surə modulu, loaders.js statik import yolları mövcuddur (Vercel izləyir)", async () => {
  const src = fs.readFileSync(path.join(ROOT, "api/_tafsir/loaders.js"), "utf8");
  for (const b of BOOKS) {
    assert.equal(LOADERS[b].length, 114);
    for (let n = 1; n <= 114; n++) {
      assert.ok(src.includes(`() => import("./${b}/${n}.js")`), `${b}/${n} statik import yoxdur`);
      assert.ok(fs.existsSync(path.join(ROOT, `api/_tafsir/${b}/${n}.js`)), `${b}/${n}.js yoxdur`);
    }
  }
});

test("məlumat: Müyəssər 6236 ayənin hamısı, Sədi və İbn Kəsir bütün surələr; tanınmış mətnlər olduğu kimi", async () => {
  let muy = 0;
  let ik = 0;
  let saadiCovered = 0;
  for (let n = 1; n <= 114; n++) {
    const m = (await LOADERS.muyassar[n - 1]()).default;
    assert.equal(m.length, AYAH_COUNT[n - 1], "muyassar " + n);
    muy += m.filter((x) => x && x.trim()).length;
    const k = (await LOADERS.ibnkathir[n - 1]()).default;
    assert.equal(k.length, AYAH_COUNT[n - 1], "ibnkathir " + n);
    ik += k.filter((x) => x && x.trim()).length;
    const s = (await LOADERS.saadi[n - 1]()).default;
    assert.ok(s.b.length > 0, "saadi " + n);
    const cov = new Set();
    for (const [f, t, text] of s.b) {
      assert.ok(f >= 1 && t >= f && t <= AYAH_COUNT[n - 1] && text.trim(), `saadi ${n}:${f}-${t}`);
      for (let a = f; a <= t; a++) cov.add(a);
    }
    saadiCovered += cov.size;
  }
  assert.equal(muy, 6236, "Müyəssər boş ayə var");
  assert.ok(ik >= 6200, "İbn Kəsir ayə sayı: " + ik);
  assert.ok(saadiCovered >= 6000, "Sədi əhatə: " + saadiCovered);
  assert.match((await LOADERS.muyassar[1]()).default[254], /^الله الذي لا يستحق الألوهية والعبودية إلا هو،/);
  assert.ok(noMarks((await LOADERS.ibnkathir[1]()).default[254]).startsWith("هذه اية الكرسي ولها شان عظيم"));
  const sd = (await LOADERS.saadi[1]()).default.b.find(([f, t]) => f <= 255 && t >= 255);
  assert.match(sd[2], /^\{255\} أخبر - صلى الله عليه وسلم - أن هذه الآية أعظم آيات القرآن/);
});

test("niyyət: təfsir sözü, kitab adı (az/tr/en/ru/ar), hissə nömrəsi ayə nömrəsi sayılmır", () => {
  const cases = [
    ["Bəqərə 255 təfsiri", null, "Bəqərə 255", 1],
    ["İbn Kəsir təfsiri 2:255", "ibnkathir", "2:255", 1],
    ["Sədi təfsiri Fatihə", "saadi", "Fatihə", 1],
    ["Müyəssər təfsiri 112:1", "muyassar", "112:1", 1],
    ["tafsir ibn kathir 2:255 part 3", "ibnkathir", "2:255", 3],
    ["İbn Kəsir təfsiri 2:255 hissə 4", "ibnkathir", "2:255", 4],
    ["تفسير ابن كثير 2:255", "ibnkathir", "2:255", 1],
    ["تفسير السعدي سورة الفاتحة", "saadi", "سورة الفاتحة", 1],
    ["تفسير الآية 255 البقرة", null, "الآية 255 البقرة", 1],
    ["тафсир Ибн Касир 2:255", "ibnkathir", "2:255", 1],
    ["Tafsir as-Sa'di Al-Fatiha", "saadi", "Al-Fatiha", 1],
    ["Kur'an Bakara 255 tefsiri", null, "Kur'an Bakara 255", 1],
  ];
  for (const [q, book, stripped, part] of cases) {
    const p = parseTafsirQuery(q);
    assert.ok(p, q);
    assert.equal(p.book, book, q + " kitab");
    assert.equal(p.stripped, stripped, q + " qalan");
    assert.equal(p.part, part, q + " hissə");
  }
  for (const q of ["Bəqərə 255", "İbn Kəsir kimdir", "salam", "Allahın adları", "2:255"]) assert.equal(parseTafsirQuery(q), null, q);
});

test("cavab: «Bəqərə 255 təfsiri» — ayə (ərəbcə + az mənası), sonra Müyəssər ərəbcə, boz ad, mənbə, digər kitablar", async () => {
  const r = await tafsirReply("Bəqərə 255 təfsiri");
  assert.deepEqual(head(r), ["ayah 2:255", "tafsir muyassar"]);
  assert.ok(r.indexOf("::ayah 2:255::") < r.indexOf("::tafsir muyassar::"));
  assert.doesNotMatch(r, /::sug::/, "təfsir cavabında təklif bloku olmur");
  assert.match(r, /::tr:: Mənaca tərcümə \(Azərbaycan dili\):/);
  assert.equal(label(r), "Təfsir əl-Müyəssər (ərəbcə)");
  assert.match(r, /\nالله الذي لا يستحق الألوهية والعبودية إلا هو/);
  assert.match(r, /::src:: Mənbə: QuranEnc\.com · التفسير الميسر\n::\/tafsir::/);
  assert.match(r, /::note:: Digər təfsirlər: «Təfsir əs-Sədi \(ərəbcə\)», «Təfsir İbn Kəsir \(ərəbcə\)»\. Təfsir ərəbcə orijinalda verilir; Azərbaycancaya tərcümə edilməyib\./);
  // tərcümə uydurulmur: tafsir blokunda Azərbaycan mətni yoxdur
  const taf = r.split("::tafsir muyassar::")[1].split("::/tafsir::")[0];
  assert.doesNotMatch(taf.replace(/::(tl|src)::[^\n]*/g, ""), /[a-zA-ZəıöüçşğƏİÖÜÇŞĞ]{3}/);
});

test("cavab: kitab seçimi və adlı ayələr — Sədi, İbn Kəsir, Müyəssər; ayə axtarışı ilə ziddiyyət yoxdur", async () => {
  const cases = [
    ["Ayətül-Kürsi təfsiri", ["ayah 2:255", "tafsir muyassar"]],
    ["İbn Kəsir təfsiri 2:255", ["ayah 2:255", "tafsir ibnkathir"]],
    ["Sədi təfsiri Fatihə", ["tafsir saadi", "ayah 1:1", "tafsir saadi", "ayah 1:2"]], // əvvəl surənin girişi (ayəsiz), sonra növbələşmə
    ["Müyəssər təfsiri 112:1", ["ayah 112:1", "tafsir muyassar"]],
    ["İxlas surəsi təfsiri", ["ayah 112:1", "tafsir muyassar", "ayah 112:2", "tafsir muyassar", "ayah 112:3", "tafsir muyassar", "ayah 112:4", "tafsir muyassar"]],
    ["Nur 35 təfsiri izah et", ["ayah 24:35", "tafsir muyassar"]],
    ["Bəqərə 5 təfsiri", ["ayah 2:5", "tafsir muyassar"]],
    ["Bəqərə 255-257 təfsiri", ["ayah 2:255", "tafsir muyassar", "ayah 2:256", "tafsir muyassar", "ayah 2:257", "tafsir muyassar"]],
  ];
  for (const [q, exp] of cases) {
    const r = await tafsirReply(q);
    assert.ok(r, q);
    assert.deepEqual(head(r).slice(0, exp.length), exp, q);
  }
  // təfsir sözü olmayan sorğu yenə yalnız ayədir
  assert.equal(await tafsirReply("Bəqərə 255"), null);
  assert.match(ayahReply("Bəqərə 255"), /^::ayah 2:255::/);
  // ümumi suallar başqa idarəçiyə qalır
  for (const q of ["təfsir elmi nədir", "Quran təfsiri nədir", "İbn Kəsir kimdir", "salam"]) assert.equal(await tafsirReply(q), null, q);
});

test("cavab: tr/en/ru/ar üçün ad və mənbə; ərəb UI ərəbcə ad; az mənası yalnız az dilində", async () => {
  const tr = await tafsirReply("Kur'an Bakara 255 tefsiri");
  assert.equal(label(tr), "Tefsîr el-Müyesser (Arapça)");
  assert.doesNotMatch(tr, /::tr::/);
  assert.match(tr, /::note:: Diğer tefsirler:/);
  const en = await tafsirReply("Tafsir of Ayat al-Kursi");
  assert.equal(label(en), "Tafsir al-Muyassar (Arabic)");
  assert.match(en, /::src:: Source: QuranEnc\.com/);
  assert.match(en, /Other tafsirs:/);
  const ru = await tafsirReply("тафсир Ибн Касир 2:255");
  assert.match(label(ru), /^Тафсир Ибн Касир \(на арабском\) — часть 1\/\d+$/);
  const ar = await tafsirReply("تفسير الآية 255 البقرة");
  assert.equal(label(ar), "التفسير الميسر");
  assert.match(ar, /::src:: المصدر: QuranEnc\.com/);
  const ar2 = await tafsirReply("تفسير السعدي سورة الفاتحة");
  assert.match(label(ar2), /^تفسير السعدي — الجزء ١\/٢$/);
  assert.match(ar2, /::note:: للمتابعة اكتب: «تفسير السعدي 1:1-7 الجزء ٢»/);
  const ik = await tafsirReply("تفسير ابن كثير 2:255");
  assert.equal(head(ik)[1], "tafsir ibnkathir");
});

test("uzun təfsir hissələrə bölünür; «hissə N» davamı verir; mətn itmir və dəyişmir", async () => {
  const r1 = await tafsirReply("İbn Kəsir təfsiri 2:255");
  const m = label(r1).match(/hissə 1\/(\d+)$/);
  assert.ok(m && Number(m[1]) > 3, label(r1));
  const N = Number(m[1]);
  assert.match(r1, new RegExp(`::note:: Davamı üçün yaz: «İbn Kəsir təfsiri 2:255 hissə 2»`));
  const body = (r) => r.split("::tafsir ibnkathir::")[1].split("::/tafsir::")[0].split("\n").filter((l) => !/^::(tl|src|tv)::/.test(l)).join("\n");
  let all = [body(r1)];
  for (let p = 2; p <= N; p++) {
    const r = await tafsirReply(`İbn Kəsir təfsiri 2:255 hissə ${p}`);
    assert.match(label(r), new RegExp(`hissə ${p}/${N}$`));
    assert.doesNotMatch(r, /^::ayah /m, "davam hissədə ayə təkrar göstərilmir");
    assert.ok(body(r).length <= PAGE_CHARS.ibnkathir + 200);
    all.push(body(r));
    if (p === N) assert.doesNotMatch(r, /Davamı üçün yaz/);
  }
  // bütün hissələr birləşdikdə orijinal ayə təfsirinin bütün sözləri qalır
  const orig = (await LOADERS.ibnkathir[1]()).default[254];
  const norm = (x) => x.replace(/\s+/g, " ").trim();
  assert.equal(norm(all.join(" ")), norm(orig));
  // həddən böyük hissə nömrəsi son hissəyə düşür
  assert.match(label(await tafsirReply("İbn Kəsir təfsiri 2:255 hissə 999")), new RegExp(`hissə ${N}/${N}$`));
});

test("səhifələmə köməkçiləri: cümlə sərhədi, çox seqment, sərhəd", () => {
  const chunks = chunkText(("Bu bir cümlədir. ").repeat(300), 500);
  assert.ok(chunks.length > 5 && chunks.every((c) => c.length <= 500));
  assert.equal(chunks.join(" ").replace(/\s+/g, " ").trim(), ("Bu bir cümlədir. ").repeat(300).trim());
  const segs = Array.from({ length: 20 }, (_, i) => ({ from: i + 1, to: i + 1, text: "نص " + i }));
  const pages = paginate(segs, 3500);
  assert.ok(pages.length >= 3 && pages.every((p) => new Set(p.map((x) => x.seg)).size <= 8));
});

test("Sədi: qruplaşdırılmış ayələr və surənin girişi; boş şərhi olmayan ayə üçün aydın qeyd", async () => {
  const segs = await segments("saadi", 1, 1, 7, true);
  assert.equal(segs[0].intro, true);
  assert.match(segs[0].text, /مكية/);
  const g = await segments("saadi", 2, 8, 9, false);
  assert.equal(g.length, 1);
  assert.deepEqual([g[0].from, g[0].to], [8, 9]);
  const r = await tafsirReply("Sədi təfsiri 2:9");
  assert.match(r, /::tv:: \(8–9\)/);
  assert.match(r, /::ayah 2:9::/);
});

test("yanlış istinad və məlumat olmayan ayə: qeyd, uydurma yox", async () => {
  const bad = await tafsirReply("Bəqərə 500 təfsiri");
  assert.match(bad, /yalnız 286 ayə var/);
  assert.doesNotMatch(bad, /::tafsir/);
});

test("kitab adı yazılıb ayə yoxdur: kitabların siyahısı və nümunə (AI-siz)", async () => {
  const a = await tafsirReply("Müyəssər təfsiri");
  assert.match(a, /^Nibras AI-də 3 ərəb təfsiri/);
  assert.match(a, /• Təfsir əl-Müyəssər \(ərəbcə\) — qısa və aydın/);
  const b = await tafsirReply("تفسير ابن كثير");
  assert.match(b, /تفسير ابن كثير/);
  assert.match(b, /^يعرض Nibras AI ثلاثة تفاسير عربية/);
  const c = await tafsirReply("təfsir");
  assert.match(c, /• Təfsir İbn Kəsir/);
});

test("server: tövhid/ayə qaydası dəyişmir, təfsir sorğusu AI-siz cavablanır; daxili mənbə olduğundan heç vaxt bildiriş yoxdur (noticeShown:false də)", async () => {
  const first = await chat({ message: "Bəqərə 255 təfsiri", noticeShown: false });
  assert.equal(first.usedAI, false);
  assert.equal(first.religious, true);
  assert.ok(!hasNotice(first.reply) && !first.notice && first.reply.startsWith("::ayah 2:255::"));
  assert.ok(first.reply.indexOf("::ayah 2:255::") < first.reply.indexOf("::tafsir muyassar::"));
  const second = await chat({ message: "Sədi təfsiri 2:255", noticeShown: true });
  assert.ok(!hasNotice(second.reply) && !second.notice);
  assert.equal(head(second.reply)[1], "tafsir saadi");
  const legacy = await chat({ message: "Bəqərə 255 təfsiri" });
  assert.ok(!hasNotice(legacy.reply));
  const again = await chat({ message: "İbn Kəsir təfsiri 2:255", noticeShown: false });
  assert.ok(!hasNotice(again.reply) && !again.notice);
  // əvvəlki davranış: ayə və tövhid dəyişmir
  assert.match((await chat({ message: "Bəqərə 255" })).reply, /^::ayah 2:255::/);
  assert.match((await chat({ message: "Şirk neçə qismə bölünür" })).reply, /şirk/i);
});

test("tarixçə AI-yə göndərilərkən təfsir bloku qısa işarəyə çevrilir; saxta işarələr təmizlənir", async () => {
  const r = await tafsirReply("Bəqərə 255 təfsiri");
  const c = compactHistory(r);
  assert.match(c, /\[\[ayah:2:255\]\]/);
  assert.match(c, /\[\[tafsir\]\]/);
  assert.ok(c.length < 700, "uzunluq " + c.length);
  assert.doesNotMatch(stripAyahMarkup("::tafsir saadi::\n::tl:: x\n::tv:: (1)\nmətn\n::/tafsir::"), /::/);
});

// ---------------------------------------------------------------- səhifə
let JSDOM = null;
for (const where of [ROOT, "/workspace/snip", "/workspace/terminal"]) {
  try { ({ JSDOM } = createRequire(path.join(where, "x.js"))("jsdom")); break; } catch {}
}
const skip = JSDOM ? false : "jsdom yoxdur";
const HTML = fs.readFileSync(path.join(ROOT, "public/ai/index.html"), "utf8");
const wait = (ms = 20) => new Promise((r) => setTimeout(r, ms));

test("səhifə: ai.html və ai/index.html eynidir; təfsir bloku stili var", () => {
  assert.equal(fs.readFileSync(path.join(ROOT, "public/ai.html"), "utf8"), HTML);
  assert.match(HTML, /\.msg \.tf \.tft \{[^}]*direction: rtl/);
  assert.match(HTML, /\.msg \.tf \.tfl \{[^}]*color: #8d96ad/);
});

test("səhifə: təfsir bloku render (kiçik boz ad, RTL ərəbcə, escape, mənbə linki), sonrakı mesaj göndərilə bilir", { skip }, async () => {
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
  const w = dom.window;
  const d = w.document;
  const send = async (t) => {
    d.querySelector("#inp").value = t;
    d.querySelector("#btn").click();
    await wait(120);
  };
  await send("Bəqərə 255 təfsiri");
  await send("Sədi təfsiri 1:1");
  await send("<img src=x onerror=alert(1)> təfsiri 2:255");
  assert.equal(d.querySelectorAll("#msgs .msg.b .tf").length >= 2, true);
  const tf = d.querySelector("#msgs .msg.b .tf");
  assert.match(tf.querySelector(".tfl").textContent, /^Təfsir əl-Müyəssər \(ərəbcə\)$/);
  assert.equal(tf.querySelector(".tft").getAttribute("dir"), "rtl");
  assert.match(tf.querySelector(".tft").textContent, /الله الذي لا يستحق الألوهية/);
  assert.ok(tf.querySelector(".as a[href^='https://quranenc.com/']"));
  assert.equal(d.querySelectorAll("#msgs .nt").length, 0, "təfsir daxili mənbədir: bildiriş yoxdur");
  assert.equal(d.querySelectorAll("#msgs img").length, 0, "HTML escape olunmalıdır");
  assert.equal(d.querySelector("#btn").disabled, false);
  assert.ok(d.querySelector("#msgs .msg.b .ay .at"), "ayə bloku də var");
});
