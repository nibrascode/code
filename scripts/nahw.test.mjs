// Ərəb qrammatikası kitabları (api/_nahw.js): AI-siz, sözbəsöz çıxarış + mənbə sətri; əqidə süzgəci («لن» əbədi inkar bildirmir).
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import { brotliDecompressSync } from "node:zlib";
import handler from "../api/chat.js";
import { parseNahwQuery, searchNahw, nahwReply, formatNahw, bestWindow, __loadIndex } from "../api/_nahw.js";
import { checkExcerpt, isLanQuery } from "../api/_nahw/guard.js";
import { LOADERS } from "../api/_nahw/loaders.js";
import { AUTHOR_BOOST, MAX_RESULTS } from "../api/_nahw/config.js";
import { lughaReply, parseLughaQuery } from "../api/_lugha.js";
import { ayahReply } from "../api/_ayah.js";
import { tafsirReply } from "../api/_tafsir.js";
import { tawhidReply } from "../api/_tawhid.js";
import { cannedReply } from "../api/_canned.js";
import { quranReply } from "../api/_quran.js";

const unpackBook = async (id) => JSON.parse(brotliDecompressSync(Buffer.from((await LOADERS[id]()).default, "base64")).toString("utf8"));
const TA_BID = /(?:للتأبيد|تفيد التأبيد|نفي مؤبد|نفيا مؤبدا|مؤبدا|مؤبد)/;

test("məlumat: 74 kitab, 20263 səhifə, indeks bütövlüyü", async () => {
  assert.equal(Object.keys(LOADERS).length, 74);
  const idx = await __loadIndex();
  assert.equal(idx.N, 20263);
  assert.equal(idx.books.length, 74);
  let n = 0;
  for (const id of Object.keys(LOADERS)) {
    const d = await unpackBook(id);
    assert.ok(d.p.length > 0);
    for (const row of d.p) {
      assert.equal(row.length, 4);
      assert.ok(Number.isInteger(row[0]) && typeof row[3] === "string");
    }
    n += d.p.length;
  }
  assert.equal(n, 20263);
  for (const id of Object.keys(AUTHOR_BOOST)) assert.ok(LOADERS[id], "boost config: kitab " + id);
});

test("mənbə fayl varsa: səhifə mətni sözbəsöz eynidir", async () => {
  const dir = "/workspace/sham/c31/books";
  if (!fs.existsSync(dir)) return;
  for (const id of ["6970", "356", "9904"]) {
    const src = JSON.parse(fs.readFileSync(`${dir}/${id}.json`, "utf8"));
    const pages = src.pages || src;
    const d = await unpackBook(id);
    const byPage = new Map(pages.map((p) => [Number(p.page), p.text]));
    const raw = d.p.find((r) => byPage.has(r[0]));
    assert.ok(raw);
    const orig = String(byPage.get(raw[0])).replace(/\s+/g, " ").trim();
    assert.equal(raw[3].replace(/\s+/g, " ").trim(), orig);
  }
});

test("aşkarlama: qrammatika sualları", () => {
  const yes = [
    "ما إعراب الفاعل", "ما هو الفاعل", "كان وأخواتها", "حروف الجر", "لن ماذا تفيد", "ما معنى لن في النحو", "ما معنى لم في النحو",
    "الممنوع من الصرف", "المبتدأ والخبر", "إن وأخواتها", "ما إعراب كلمة محمد في جاء محمد", "علم النحو", "نائب الفاعل",
    "Mübtəda və xəbər nədir ərəbcə", "ərəb qrammatikası", "nəhv nədir", "kana və qardaşları nədir ərəbcə", "arapça nahiv fail nedir",
    "что такое фаиль в арабской грамматике", "what is mubtada in Arabic grammar",
  ];
  for (const q of yes) assert.ok(parseNahwQuery(q), "qrammatika olmalıdır: " + q);
  const no = [
    "", "salam necəsən", "Python nədir", "fail nədir", "كيف الحال", "ما هو الحال", "لن أنساك", "إن شاء الله", "كان", "ما الفاعل في هذه الجريمة",
    "معنى آية الكرسي", "تفسير سورة الفاتحة", "Bəqərə 255", "ما معنى كلمة صبر", "معنى كلمة علم", "Şirk neçə qismə bölünür", "Sələfilik nədir",
    "namaz necə qılınır", "ما حكم الصلاة", "hava necədir", "Nibras AI nədir", "ما معنى كلمة التوحيد", "ما هي الأسماء",
  ];
  for (const q of no) assert.equal(parseNahwQuery(q), null, "qrammatika olmamalıdır: " + q);
});

test("lüğət (İbn Faris) ilə toqquşma yoxdur: «لن/لم» qrammatikaya, «علم/صبر» lüğətə", () => {
  assert.equal(parseLughaQuery("ما معنى لن في النحو"), null);
  assert.equal(parseLughaQuery("ما معنى لم"), null);
  assert.ok(parseLughaQuery("معنى كلمة صبر"));
  assert.equal(parseNahwQuery("معنى كلمة صبر"), null);
});

test("«لن» süzgəci: əbədi inkar iddiası yalnız rədd ilə birlikdə", () => {
  const ibnMalik = "ومن رأى النفي بلن مؤبدا فقوله اردد وسواه فاعضدا";
  assert.equal(checkExcerpt(ibnMalik).ok, true);
  assert.equal(checkExcerpt(ibnMalik).refutation, true);
  const muradi = "[لن] حرف نفي، ينصب الفعل المضارع، ويخلصه للاستقبال. ولا يلزم أن يكون نفيها مؤبدا، خلافا للزمخشري.";
  assert.equal(checkExcerpt(muradi).ok, true);
  assert.equal(checkExcerpt(muradi).refutation, true);
  // Zəməxşəri iddiası rədd olmadan: bloklanır
  const zam = "ولن لتأكيد ما تعطيه لا من نفي المستقبل، وتفيد التأبيد، قال تعالى لن تراني، فنفي الرؤية على التأبيد";
  assert.equal(checkExcerpt(zam).ok, false);
  assert.equal(checkExcerpt("لن حرف نفي ونصب واستقبال، تفيد التأبيد في النفي").ok, false);
  assert.equal(checkExcerpt("نفي مؤبد بلن").ok, false);
  // «خلافا للزمخشري» tək başına rədd sayılmır
  assert.equal(checkExcerpt("لن تفيد التأبيد خلافا للزمخشري").ok, false);
  // mənbədəki səhv: «ويلزم أن يكون مؤبدا» həmişə bloklanır
  assert.equal(checkExcerpt("لن حرف نفي ونصب ويلزم أن يكون نفيها مؤبدا").ok, false);
  assert.equal(checkExcerpt("لن حرف نفي ونصب ولا يلزم أن يكون نفيها مؤبدا").ok, true);
  // sıradan mətn toxunulmaz
  assert.equal(checkExcerpt("الفاعل اسم مرفوع يأتي بعد الفعل").ok, true);
  // digər əqidə məsələləri
  assert.equal(checkExcerpt("استوى بمعنى استولى").ok, false);
  assert.equal(checkExcerpt("القرآن مخلوق").ok, false);
  assert.equal(checkExcerpt("يد الله بمعنى قدرته").ok, false);
  assert.equal(checkExcerpt("وجاء ربك أي جاء أمر ربك").ok, false);
  assert.equal(isLanQuery("ما معنى لن في النحو"), true);
  assert.equal(isLanQuery("ما إعراب الفاعل"), false);
});

test("corpus: heç bir kitab səhifəsində «لن»-təbid iddiası rədd olmadan qalmır (2 səhifə bloklanır)", async () => {
  let blocked = 0;
  for (const id of Object.keys(LOADERS)) {
    const d = await unpackBook(id);
    for (const row of d.p) if (!checkExcerpt(row[3]).ok) blocked++;
  }
  assert.equal(blocked, 2);
});

for (const q of ["ما معنى لن في النحو", "لن ماذا تفيد", "ما إعراب لن", "لن في النحو", "عمل لن", "Ərəb dilində لن nə bildirir nəhv", "что означает لن в арабской грамматике"]) {
  test("«لن» sorğusu təbid iddiası göstərmir: " + q, async () => {
    const parsed = parseNahwQuery(q);
    assert.ok(parsed, "aşkarlanmalıdır");
    assert.equal(parsed.lan, true);
    const res = await searchNahw(parsed);
    assert.ok(res.length >= 1 && res.length <= MAX_RESULTS);
    for (const r of res) {
      const c = checkExcerpt(r.text);
      assert.equal(c.ok, true, `${r.book.title} p${r.page}`);
    }
    // ilk nəticə aydın rəddiyyədir
    assert.ok(checkExcerpt(res[0].text).refutation || !TA_BID.test(res[0].text), "ilk nəticə rədd və ya təbidsiz");
    const reply = await nahwReply(q);
    assert.ok(reply.includes("::tafsir nahw::") && reply.includes("::src::"));
    // cavab mətnində təbid ifadəsi yalnız rəddlə (iddia yox)
    for (const blk of reply.split("::tafsir nahw::").slice(1)) {
      if (TA_BID.test(blk)) assert.equal(checkExcerpt(blk).refutation, true, "təbid ifadəsi rədd olmadan: " + blk.slice(0, 200));
    }
  });
}

test("«ما معنى لن في النحو»: Muradi/İbn Malik rədd çıxarışı ilk sırada", async () => {
  const res = await searchNahw(parseNahwQuery("ما معنى لن في النحو"));
  const first = res[0];
  assert.ok(checkExcerpt(first.text).refutation);
  assert.ok(/(?:لا يلزم|ولا يلزم|اردد)/.test(first.text.replace(/[\u064B-\u0652]/g, "")));
});

test("sıralama: məşhur sələfə yaxın kitablar, çıxarış kitabdan sözbəsöz", async () => {
  const q = parseNahwQuery("كان وأخواتها");
  const res = await searchNahw(q);
  assert.equal(res.length, 3);
  const ids = res.map((r) => String(r.book.id));
  assert.ok(ids.some((i) => ["6970", "356", "9904", "11825"].includes(i)), "Qatr/Əlfiyyə/İbn Əqil/Əvdəh: " + ids);
  const seen = new Set(ids);
  assert.equal(seen.size, ids.length, "hər kitabdan bir nəticə");
  for (const r of res) {
    const d = await unpackBook(r.book.id);
    const row = d.p.find((x) => x[0] === r.page);
    const flat = (s) => s.replace(/\s+|\.\.\./g, "");
    for (const line of r.text.split("\n").filter((l) => l.trim())) {
      for (const seg of line.split(" ... ").map((s) => s.replace(/^\.\.\.\s*|\s*\.\.\.$/g, "").trim()).filter(Boolean)) {
        assert.ok(flat(row[3]).includes(flat(seg)), `${r.book.title} p${r.page}: parça mənbədə yoxdur`);
      }
    }
    assert.ok(r.text.length <= 1400, "uzunluq " + r.text.length);
  }
  for (const q2 of ["ما إعراب الفاعل", "حروف الجر", "Mübtəda və xəbər nədir ərəbcə"]) {
    const rr = await searchNahw(parseNahwQuery(q2));
    assert.ok(rr.length >= 1, q2);
  }
});

test("cavab formatı: bir sətirlik giriş, ::tafsir nahw:: bloku, ::src:: sətri, AI yoxdur", async () => {
  const r = await nahwReply("Mübtəda və xəbər nədir ərəbcə");
  assert.ok(r.startsWith("Ərəb nəhv/sərf kitablarından sözbəsöz çıxarışlar"));
  assert.ok(r.includes("::tafsir nahw::") && r.includes("::tl::") && r.includes("::/tafsir::"));
  assert.ok(/::src:: [^\n]+، [^\n]+، (?:ج [^\n]+، )?ص \d+/.test(r));
  for (const bad of ["yarat", "yaradıcı"]) assert.ok(!r.split("\n")[0].includes(bad));
  const ar = await nahwReply("ما إعراب الفاعل");
  assert.ok(ar.startsWith("مقتطفات حرفية"));
  assert.equal(formatNahw([], { lang: "az" }).startsWith("Ərəb"), true);
});

test("bestWindow: ~1200 simvol, mətn dəyişdirilmir", () => {
  const long = ("هذه جملة عن الفاعل في النحو العربي. ").repeat(100);
  const w = bestWindow(long, new Set(["فاعل"]));
  assert.ok(w.text.length <= 1400 && w.text.length > 300, "uzunluq " + w.text.length);
});

test("chat.js: AI-siz, bildirişsiz, mənbə sətri; digər idarəçilər dəyişməyib", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    return { ok: true, status: 200, json: async () => ({ choices: [{ message: { content: "Cavab." } }] }) };
  };
  const run = async (message, extra = {}) => {
    const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
    await handler({ method: "POST", body: { message, ...extra } }, res);
    return res;
  };
  try {
    for (const q of ["ما إعراب الفاعل", "كان وأخواتها", "حروف الجر", "لن ماذا تفيد", "ما معنى لن في النحو", "Mübtəda və xəbər nədir ərəbcə"]) {
      const res = await run(q, { noticeShown: false, lang: "az", history: [] });
      assert.equal(res.code, 200, q);
      assert.equal(res.body.success, true, q);
      assert.equal(res.body.usedAI, false, q);
      assert.ok(!res.body.notice, q + " bildiriş olmamalıdır");
      assert.ok(!res.body.reply.includes("::notice::"), q);
      assert.ok(res.body.reply.includes("::src::"), q);
      assert.equal(res.body.reply, await nahwReply(q));
    }
    // lüğət, ayə, təfsir, Quran, tövhid, hazır cavablar yerindədir
    assert.ok((await run("معنى كلمة علم")).body.reply.includes("::tafsir lugha::"));
    for (const q of ["معنى آية الكرسي", "تفسير الفاتحة", "Bəqərə 255", "معنى كلمة ريب", "ما معنى كلمة التوحيد", "Şirk neçə qismə bölünür", "Sələfilik nədir"]) {
      const res = await run(q);
      assert.ok(!res.body.reply.includes("::tafsir nahw::"), q);
      assert.ok(!res.body.reply.includes("::notice::") && !/sirin/i.test(res.body.reply || ""), q);
      const want = (await tafsirReply(q)) || ayahReply(q) || tawhidReply(q) || cannedReply(q) || quranReply(q);
      if (want) assert.ok(res.body.reply.endsWith(want.slice(-40)) || res.body.reply.includes(want.slice(0, 40)), q);
      else assert.equal(res.body.reply, "Cavab.", q);
    }
    assert.ok(calls <= 2);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("chat.js sistem təlimatı: «لن» xəbərdarlığını və İbn Sirin sitatını cavaba yazdırmır", () => {
  const src = fs.readFileSync(new URL("../api/chat.js", import.meta.url), "utf8");
  assert.ok(/İbn Sirin sitatı/.test(src));
  assert.ok(!/əbədi inkar bildirmir/.test(src));
  assert.ok(!/Yalnız bunu yaz: İlk olaraq/.test(src));
});

test("funksiya ölçüsü: _nahw məlumatı ~15 MB-dan çox deyil", () => {
  let total = 0;
  const walk = (d) => { for (const f of fs.readdirSync(d, { withFileTypes: true })) { const p = d + "/" + f.name; if (f.isDirectory()) walk(p); else total += fs.statSync(p).size; } };
  walk(new URL("../api/_nahw/", import.meta.url).pathname);
  assert.ok(total < 16 * 1024 * 1024, "bayt: " + total);
});
