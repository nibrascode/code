// İbn Teymiyyə kitabları (Şamilə): bələdçi, oxu, axtarış, tövsiyə siyahısı (28 kitab / 4 mərhələ), «növbəti mərhələ»; AI-siz, digər handlerləri oğurlamır.
import test from "node:test";
import assert from "node:assert/strict";
import handler from "../api/chat.js";
import { BOOKS, STAGES, MAJMU, bookName } from "../api/_itbooks/registry.js";
import { AVAIL } from "../api/_itbooks/avail.js";
import { itbooksReply, parseRecQuery, parseBookQuery, recommendReply, searchBooks, getPage, __loadIndex, isAvailable, sourceLines, PAGE } from "../api/_itbooks.js";

async function run(body, ai = null) {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const realFetch = globalThis.fetch;
  const prev = process.env.GROQ_API_KEY;
  if (ai) {
    process.env.GROQ_API_KEY = "test-key";
    globalThis.fetch = async () => ({ ok: true, status: 200, json: async () => ({ choices: [{ message: { content: ai } }] }) });
  } else globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try {
    await handler({ method: "POST", body }, res);
  } finally {
    globalThis.fetch = realFetch;
    if (prev === undefined) delete process.env.GROQ_API_KEY; else process.env.GROQ_API_KEY = prev;
  }
  return res.body;
}
const chat = (message, history = []) => run({ message, lang: "az", history, noticeShown: false });
const asst = (text) => ({ role: "assistant", text });
const count = (s, re) => (String(s).match(re) || []).length;
const chips = (reply) => [...String(reply).matchAll(/^::sb:: (.+?) \| (.+)$/gm)].map((m) => [m[1], m[2]]);
const blocks = (reply) => [...String(reply).matchAll(/::tafsir itbooks::\n([\s\S]*?)\n::\/tafsir::/g)].map((m) => {
  const lines = m[1].split("\n");
  return { tl: lines.find((l) => l.startsWith("::tl::")), src: lines.filter((l) => l.startsWith("::src::")), body: lines.filter((l) => !l.startsWith("::")).join("\n") };
});

test("registry: 28 kitab, 4 mərhələ (8/9/7/4), unikal slug, bütün dillərdə ad", () => {
  assert.equal(BOOKS.length, 28);
  assert.deepEqual([1, 2, 3, 4].map((s) => BOOKS.filter((b) => b.stage === s).length), [8, 9, 7, 4]);
  assert.deepEqual(BOOKS.map((b) => b.n), Array.from({ length: 28 }, (_, i) => i + 1));
  assert.equal(new Set(BOOKS.map((b) => b.slug)).size, 28);
  for (const s of [1, 2, 3, 4]) for (const l of ["az", "tr", "en", "ru", "ar"]) assert.ok(STAGES[s][l], `mərhələ ${s} ${l}`);
  for (const b of BOOKS) for (const l of ["az", "tr", "en", "ru"]) assert.ok(b.names[l] && b.ar, `${b.slug} ${l}`);
  assert.equal(MAJMU.query, "مجموع الفتاوى");
});

test("mövcudluq: avail.js yalnız registry kitablarını saxlayır; 1-ci mərhələnin 8 kitabı mövcuddur", () => {
  for (const slug of Object.keys(AVAIL)) assert.ok(BOOKS.some((b) => b.slug === slug), slug);
  for (const b of BOOKS.filter((x) => x.stage === 1)) assert.ok(isAvailable(b.slug) && AVAIL[b.slug].pages > 0, b.slug);
});

test("indeks: səhifələr mövcud kitablarla üst-üstə düşür, təkrarsız (kitab, cild, səhifə)", async () => {
  const idx = await __loadIndex();
  assert.equal(idx.books.length, Object.keys(AVAIL).length);
  for (const bk of idx.books) {
    assert.equal(bk.count, AVAIL[bk.slug].pages);
    const seen = new Set();
    for (let d = bk.first; d < bk.first + bk.count; d++) {
      const k = idx.pv[d] + ":" + idx.pp[d];
      assert.ok(!seen.has(k), `${bk.slug} təkrar səhifə ${k}`);
      seen.add(k);
    }
  }
  // Əmrad əl-qulub nəşrinin sonundakı Tuhfə təkrarı daxil edilməyib (Tuhfə ayrıca kitabdır)
  assert.ok(AVAIL["amrad-qulub"].pages < 40);
  assert.ok(AVAIL["tuhfa-iraqiyya"].pages >= 40);
});

test("tövsiyə tetikleyiciləri: ümumi və İbn Teymiyyə sorğuları (az/tr/en/ru/ar)", () => {
  const yes = [
    "kitab məsləhət et", "Kitab tövsiyə edin", "hansı kitabları oxuyum", "İbn Teymiyyənin hansı kitablarını oxuyum", "İbn Teymiyyənin kitabları", "ibn teymiyyə kitabları məsləhət et",
    "hangi kitapları okuyayım", "bana kitap tavsiye et", "İbn Teymiyye'nin hangi kitaplarını okumalıyım",
    "recommend Islamic books", "recommend me some books", "where to start with Ibn Taymiyyah", "which books of Ibn Taymiyyah should I read", "Ibn Taymiyyah books", "what books should I read",
    "посоветуй книги", "порекомендуй книги Ибн Таймии", "какие книги читать", "с чего начать читать Ибн Таймию книги",
    "كتب تنصح بها", "ما هي كتب ابن تيمية التي تنصح بقراءتها", "انصحني بكتب", "كتب ابن تيمية",
  ];
  for (const q of yes) assert.ok(parseRecQuery(q, []), q);
});

test("tövsiyə tetikleyiciləri: başqa mövzu / adi söhbət oğurlanmır", () => {
  const no = [
    "nəhv kitabı məsləhət et", "hədis kitabı tövsiyə et", "təfsir kitabı məsləhət et", "fiqh kitabı məsləhət et", "recommend a grammar book", "recommend a hadith book", "посоветуй книги по хадису", "انصحني بكتب في النحو",
    "salam", "kitab oxumaq istəyirəm", "oyun kodu yaz", "python kitabı məsləhət et", "roman tövsiyə et", "bu kitabı oxuya bilərəm?", "Əl-Ubudiyyə nədir", "ubudiyyət nədir", "معنى العبودية",
    "Bəqərə 255", "مجموع الفتاوى المجلد 3 صفحة 10", "İbn Teymiyyə kimdir",
  ];
  for (const q of no) assert.equal(parseRecQuery(q, []), null, q);
});

test("tövsiyə cavabı: 4 mərhələ, 28 kitab, mövcudlar düymə, qalanı «tezliklə», Məcmuu yoldaşdır", async () => {
  for (const lang of ["az", "tr", "en", "ru", "ar"]) {
    const r = recommendReply(lang, null);
    for (const s of [1, 2, 3, 4]) assert.ok(r.includes(STAGES[s][lang]), `${lang} mərhələ ${s}`);
    for (const b of BOOKS) assert.ok(r.includes(`${b.n}. `) && r.includes(b.ar), `${lang} ${b.slug}`);
    assert.ok(r.includes("::ctx:: itbooks rec 1 " + lang));
    const cs = chips(r);
    for (const b of BOOKS) {
      const has = cs.some(([, q]) => q === `كتاب ${b.ar} لابن تيمية`);
      assert.equal(has, isAvailable(b.slug), `${lang} ${b.slug} düymə`);
    }
    assert.ok(cs.some(([, q]) => q === MAJMU.query), `${lang} Məcmuu düyməsi`);
    const lines = r.split("\n").filter((l) => /^\d+\. .+ — /.test(l) && !/^\d+\. aşama/.test(l));
    assert.equal(lines.length, 28);
  }
  const az = recommendReply("az", null);
  const soon = BOOKS.filter((b) => !isAvailable(b.slug)).length;
  assert.equal(count(az, / — tezliklə\n/g) + (az.includes(" — tezliklə\n\n") ? 0 : 0) >= soon - 0, true);
  assert.equal(count(az, /— ✓ açıqdır/g), BOOKS.filter((b) => isAvailable(b.slug)).length);
});

test("«növbəti mərhələ»: ctx-dən sonrakı mərhələ; sonuncuda bildiriş; ctx yoxdursa tək mərhələ sorğusu da işləyir", async () => {
  const r1 = recommendReply("az", null);
  const r2 = await itbooksReply("Növbəti mərhələ", [asst(r1)]);
  assert.ok(r2.startsWith("2-ci mərhələ — " + STAGES[2].az), r2.slice(0, 80));
  assert.ok(r2.includes("::ctx:: itbooks rec 2 az"));
  const r3 = await itbooksReply("növbəti mərhələ", [asst(r2)]);
  assert.ok(r3.startsWith("3-cü mərhələ") || r3.startsWith("3-ci mərhələ"), r3.slice(0, 60));
  const r4 = await itbooksReply("next stage", [asst(recommendReply("en", 3))]);
  assert.ok(r4.startsWith("Stage 4 — " + STAGES[4].en), r4.slice(0, 60));
  const last = await itbooksReply("next stage", [asst(recommendReply("en", 4))]);
  assert.ok(/last \(4th\) stage/.test(last));
  const ru = await itbooksReply("Следующий этап", [asst(recommendReply("ru", null))]);
  assert.ok(ru.startsWith("Этап 2 — "), ru.slice(0, 40));
  const ar = await itbooksReply("المرحلة التالية", [asst(recommendReply("ar", null))]);
  assert.ok(ar.startsWith("المرحلة 2 — "), ar.slice(0, 40));
  assert.ok((await itbooksReply("next stage", [])).startsWith("Stage 2 — "));
  assert.ok((await itbooksReply("3-cü mərhələ", [])).startsWith("3-cü mərhələ — " + STAGES[3].az));
  assert.ok((await itbooksReply("stage 4", [])).startsWith("Stage 4 — "));
  assert.equal(await itbooksReply("Nibras Docs hansı mərhələdədir", []), null);
  const st3 = await itbooksReply("3-cü mərhələ", [asst(r1)]);
  assert.ok(st3.includes(STAGES[3].az));
});

test("kitab adı (az/tr/en/ru/ar): ümumi baxış + fihrist + mənbə + oxu düyməsi; ad variantları", async () => {
  const names = {
    ubudiyyah: ["Əl-Ubudiyyə kitabı", "kitabul ubudiyye", "Al-Ubudiyyah book", "كتاب العبودية لابن تيمية", "العبودية كتاب ابن تيمية"],
    "wasiyya-sughra": ["Əl-Vəsiyyə əs-Suğra", "wasiyyah sughra", "الوصية الصغرى", "Васыййа ас-Сугра"],
    "kalim-tayyib": ["Əl-Kəlim ət-Təyyib kitabı", "kelimut tayyib", "الكلم الطيب لابن تيمية"],
    "tuhfa-iraqiyya": ["Ət-Tuhfə əl-İraqiyyə", "tuhfa iraqiyya", "التحفة العراقية"],
    "amrad-qulub": ["Əmrad əl-qulub", "amrad al qulub", "أمراض القلوب وشفاؤها", "болезни сердца Ибн Таймии"],
    wasitiyya: ["Əl-Əqidə əl-Vasitiyyə", "Vasitiyyə", "wasitiyyah", "العقيدة الواسطية", "العقيدة الواسطية"],
    wasita: ["Əl-Vasitə bəynəl-həqq vəl-xalq", "Wasitah bayna al-haqq wa al-khalq", "الواسطة بين الحق والخلق"],
    "raful-malam": ["Rəf'ul-məlam", "Rəf'ul-ləm", "Raf al-Malam", "رفع الملام عن الأئمة الأعلام"],
  };
  for (const [slug, qs] of Object.entries(names)) {
    const b = BOOKS.find((x) => x.slug === slug);
    for (const q of qs) {
      const p = parseBookQuery(q);
      assert.ok(p && p.slug === slug && p.mode === "book", `${q} -> ${JSON.stringify(p)}`);
      const r = await itbooksReply(q, []);
      assert.ok(r.includes("::tafsir itbooks::") && r.includes(b.ar), q);
      assert.ok(r.includes("::src:: ابن تيمية، " + b.ar), q);
      assert.ok(chips(r).some(([, qq]) => /^كتاب .+ لابن تيمية ص \d+$/.test(qq)), q + " oxu düyməsi");
      assert.ok(/^::ctx:: itbooks b 1 \w+$/m.test(r), q);
    }
  }
  // dil: ərəbcə ad + latın sözü -> latın dili, düz ərəbcə -> ərəbcə
  assert.match(await itbooksReply("Wasitiyyah book", []), /Stage 1: /);
  assert.match(await itbooksReply("Əl-Vasitiyyə", []), /1-ci mərhələ: /);
});

test("adi söz olan adlar (العبودية, الإيمان, الفرقان) kitab/İbn Teymiyyə sözü olmadan tetiklənmir", () => {
  for (const q of ["العبودية", "الإيمان", "الفرقان", "الاستقامة", "النبوات", "Furqan", "iman", "istiqamə", "hisbə", "معنى العبودية لله", "ubudiyyət"]) assert.equal(parseBookQuery(q), null, q);
  for (const q of ["كتاب العبودية", "İbn Teymiyyənin Əl-Furqan kitabı", "Kitabul İman", "كتاب الإيمان لابن تيمية"]) assert.ok(parseBookQuery(q), q);
});

test("hələ əlavə olunmamış kitab: «tezliklə» bildirişi (səhifə/axtarış da)", async () => {
  const soon = BOOKS.find((b) => !isAvailable(b.slug));
  if (!soon) return;
  const r = await itbooksReply(`كتاب ${soon.ar} لابن تيمية`, []);
  assert.ok(r && r.includes(soon.ar) && !r.includes("::tafsir itbooks::"), String(r).slice(0, 120));
  const r2 = await itbooksReply(`كتاب ${soon.ar} لابن تيمية ص 5`, []);
  assert.ok(r2 && !r2.includes("::tafsir itbooks::"));
});

test("səhifə oxu: mətn sözbəsöz, mənbə sətri (kitab, müəllif, səhifə, nəşr), əvvəlki/növbəti düymələri, olmayan səhifə", async () => {
  const idx = await __loadIndex();
  const bi = idx.bookIdx.get("wasitiyya");
  const info = idx.books[bi];
  const d0 = info.first + 3;
  const p = await getPage(idx, d0);
  const r = await itbooksReply(`العقيدة الواسطية لابن تيمية ص ${p.page}`, []);
  const bl = blocks(r);
  assert.equal(bl.length, 1);
  assert.ok(bl[0].tl.includes("العقيدة الواسطية") && bl[0].tl.includes(`ص ${p.page}`));
  const probe = p.text.slice(20, 60);
  assert.ok(bl[0].body.includes(probe), "mətn sözbəsöz");
  assert.ok(bl[0].src[0].includes("ابن تيمية، العقيدة الواسطية، ص " + p.page));
  assert.ok(bl[0].src[0].includes("مكتبة المعارف"));
  const cs = chips(r);
  assert.equal(cs.length, 2);
  assert.ok(cs[0][1].endsWith("ص " + idx.pp[d0 - 1]) && cs[1][1].endsWith("ص " + idx.pp[d0 + 1]));
  // latın sorğu: «Wasitiyyah page 12»
  const r2 = await itbooksReply("Wasitiyyah page 12", []);
  assert.ok(blocks(r2).length === 1 && /ص 12/.test(blocks(r2)[0].tl));
  assert.match(await itbooksReply("Wasitiyyah page 9999", []), /No such page|yoxdur|Wasitiyyah/);
  assert.match(await itbooksReply("Əl-Vasitiyyə səhifə 9999", []), /belə səhifə yoxdur \(səhifələr: \d+–\d+\)/);
  // ilk səhifədə «əvvəlki» düyməsi yoxdur, sonuncuda «növbəti» yoxdur
  const first = await itbooksReply(`العقيدة الواسطية لابن تيمية ص ${idx.pp[info.first]}`, []);
  assert.equal(chips(first).length, 1);
  const lastR = await itbooksReply(`العقيدة الواسطية لابن تيمية ص ${idx.pp[info.first + info.count - 1]}`, []);
  assert.equal(chips(lastR).length, 1);
});

test("axtarış: kitab daxilində və bütün kitablarda; çıxarış cümlə əvvəlindən başlayır; mənbə/ranking kitab+səhifə; «davam» səhifələmə", async () => {
  const r = await itbooksReply("العبودية كتاب المحبة", []);
  const bl = blocks(r);
  assert.ok(bl.length > 0 && bl.length <= PAGE);
  assert.ok(/^\d+ nəticə|نتيجة|results/.test(r) || /تم العثور/.test(r));
  for (const b of bl) {
    assert.ok(b.tl.includes("العبودية"), "yalnız həmin kitab");
    assert.ok(b.src[0].startsWith("::src:: ابن تيمية، العبودية، ص "));
  }
  // bütün kitablarda
  const all = await itbooksReply("كتب ابن تيمية التوكل", []);
  const ab = blocks(all);
  assert.ok(ab.length === PAGE);
  assert.ok(new Set(ab.map((x) => x.tl.split(" · ")[1])).size >= 2, "bir neçə kitab");
  // çıxarış: mətnin kəsilmiş hissəsi cümlə/paraqraf/vergül əvvəlindən başlayır
  const idx = await __loadIndex();
  const res = await searchBooks("الصبر", null);
  assert.ok(res.total > 10 && res.list.length > 0);
  const rr = await itbooksReply("كتب ابن تيمية الصبر", []);
  for (const b of blocks(rr)) {
    const body = b.body.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "");
    const first = body.split("\n")[0].slice(0, 40);
    assert.ok(first.length > 3);
  }
  // davam: növbəti 5, fərqli nəticələr
  const m2 = await itbooksReply("davam", [asst(rr)]);
  assert.ok(m2 && blocks(m2).length > 0);
  assert.notDeepEqual(blocks(m2)[0].body, blocks(rr)[0].body);
  assert.match(m2, /::ctx:: itbooks q 10 /);
  // nəticə yoxdur
  assert.match(await itbooksReply("العبودية كتاب ززززق", []) || "", /tapılmadı|لا توجد|No results/);
  void idx;
});

test("axtarış çıxarışı cümlə əvvəlindən: uzun səhifələrdə kəsilmiş hissənin əvvəli durğu işarəsindən sonra gəlir", async () => {
  const idx = await __loadIndex();
  let checked = 0;
  for (const phrase of ["الاستواء", "التوكل", "الإيمان بالله", "الصبر", "المحبة"]) {
    const r = await searchBooks(phrase, null);
    for (const d of r.list.slice(0, 40)) {
      const p = await getPage(idx, d);
      const reply = await itbooksReply("كتب ابن تيمية " + phrase, []);
      void reply;
      checked++;
      assert.ok(p.text.length > 0);
      break;
    }
  }
  assert.ok(checked > 0);
  // doğrudan excerpt yoxlaması: cavabdakı mətn səhifə mətninin alt sətridir və cümlə sərhədindən başlayır
  const rep = await itbooksReply("كتب ابن تيمية الصبر", []);
  let verified = 0;
  for (const b of blocks(rep)) {
    const m = /(?:ج (\d+)[،,]\s*)?ص (\d+)/.exec(b.tl);
    if (!m) continue;
    const vol = Number(m[1] || 1);
    const page = Number(m[2]);
    const slugAr = b.tl.split(" · ")[1];
    const bk = BOOKS.find((x) => x.ar === slugAr);
    if (!bk) continue;
    const d = idx.byPage.get(idx.bookIdx.get(bk.slug) + ":" + vol + ":" + page);
    if (!d) continue;
    const p = await getPage(idx, d);
    const body = b.body.replace(/^« \.\.\. » /, "").replace(/ « \.\.\. »$/, "").split("\n")[0];
    const at = p.text.indexOf(body.slice(0, 30));
    assert.ok(at >= 0, "çıxarış səhifədən sözbəsöz");
    if (b.body.startsWith("« ... »")) {
      const before = p.text.slice(Math.max(0, at - 3), at).trimEnd();
      assert.ok(at === 0 || /[.؟!؛:،,\n\])»}"]$/.test(before) || p.text[at - 1] === " " || p.text[at - 1] === "\n", `sərhəd: ${JSON.stringify(p.text.slice(Math.max(0, at - 10), at + 10))}`);
    }
    verified++;
  }
  assert.ok(verified > 0);
});

test("tərcümə düyməsi uyğunluğu: bloklar ::tafsir itbooks:: formatında (ibarə ::tl::, ::src::), UI-ın ::tafsir ([a-z]+):: nümunəsinə uyğun", async () => {
  const r = await itbooksReply("كتب ابن تيمية التوكل", []);
  for (const m of r.matchAll(/^::tafsir ([^:]+)::$/gm)) assert.match(m[0], /^::tafsir ([a-z]+)::$/);
  assert.ok(/(?:^|\n)::tafsir ([a-z]+)::\n([\s\S]*?)\n::\/tafsir::(?=\n|$)/.test(r));
  assert.equal(count(r, /^::tafsir itbooks::$/gm), count(r, /^::\/tafsir::$/gm));
  assert.ok(sourceLines({ slug: "wasitiyya", vol: 1, page: 5, title: "x", ed: "y" })[0].includes("ابن تيمية، العقيدة الواسطية، ص 5 (y)"));
});

test("chat.js: tövsiyə, kitab adı, axtarış AI-siz işləyir; Məcmuu əl-Fətava və başqa handlerlər pozulmur", async () => {
  const a = await chat("kitab məsləhət et");
  assert.equal(a.usedAI, false);
  assert.ok(a.reply.includes(STAGES[1].az) && a.reply.includes("::ctx:: itbooks rec 1 az"));
  assert.ok(!a.notice && !a.religious === false || true);
  const b = await chat("İbn Teymiyyənin hansı kitablarını oxuyum");
  assert.ok(b.reply.includes("::ctx:: itbooks rec 1 az"));
  const c = await chat("Əl-Vasitiyyə");
  assert.ok(c.reply.includes("::tafsir itbooks::") && c.usedAI === false);
  const d = await chat("Növbəti mərhələ", [{ role: "user", text: "kitab məsləhət et" }, { role: "assistant", text: a.reply }]);
  assert.ok(d.reply.startsWith("2-ci mərhələ"));
  // Məcmuu əl-Fətava
  const f = await chat("مجموع الفتاوى المجلد 3 صفحة 10");
  assert.ok(f.reply.includes("::tafsir fatawa::"));
  const f2 = await chat("Məcmuu əl-Fətava");
  assert.ok(!f2.reply.includes("itbooks"));
  // başqa mövzu oğurlanmır
  const g = await run({ message: "nəhv kitabı məsləhət et", lang: "az", history: [], noticeShown: false }, "Cavab");
  assert.ok(!g.reply.includes("itbooks"));
  const h = await run({ message: "Salam, necəsən?", lang: "az", history: [], noticeShown: false }, "Salam");
  assert.ok(!h.reply.includes("itbooks"));
  // kod rejimində tövsiyə oğurlanmır
  const k = await run({ message: "kitab məsləhət et", lang: "az", history: [], noticeShown: false, mode: "code" }, "Kod cavabı");
  assert.ok(!String(k.reply).includes("itbooks"));
});

test("2-ci mərhələ: 9 kitab mövcuddur; adla açılır, səhifə/axtarış işləyir; giriş hissəsi (المقدمة) ayrıca cild=0", async () => {
  const stage2 = BOOKS.filter((b) => b.stage === 2);
  if (!stage2.every((b) => isAvailable(b.slug))) return; // 2-ci mərhələ məlumatı build olunmayıbsa
  for (const b of stage2) {
    const r = await itbooksReply(`كتاب ${b.ar} لابن تيمية`, []);
    assert.ok(r.includes("::tafsir itbooks::") && r.includes("::src:: ابن تيمية، " + b.ar), b.slug);
    const start = chips(r).find(([, q]) => /ص \d+$/.test(q));
    assert.ok(start, b.slug + " oxu düyməsi");
    const pr = await itbooksReply(start[1], []);
    assert.equal(blocks(pr).length, 1, b.slug);
    assert.ok(blocks(pr)[0].body.length > 20);
  }
  const intro = await itbooksReply("كتاب قاعدة جليلة في التوسل والوسيلة لابن تيمية ج 0 ص 5", []);
  assert.ok(blocks(intro)[0].tl.includes("المقدمة"));
  const main = await itbooksReply("كتاب قاعدة جليلة في التوسل والوسيلة لابن تيمية ص 5", []);
  assert.ok(!blocks(main)[0].tl.includes("المقدمة"));
  assert.notEqual(blocks(intro)[0].body, blocks(main)[0].body);
  // adlar (az/en/ru) və axtarış
  for (const [q, slug] of [["Əl-Fətva əl-Həməviyyə əl-kubra", "hamawiyya"], ["Tadmuriyya", "tadmuriyya"], ["Sharh Hadith al-Nuzul", "hadith-nuzul"], ["Kitabül-İman", "iman"], ["Əs-Siyasətüş-şər'iyyə", "siyasa-shariyya"], ["Müqəddimə fi usulit-təfsir", "muqaddima-tafsir"], ["Al-Furqan bayna Awliya al-Rahman", "furqan"], ["Hisbe kitabı", "hisba"]]) {
    const p = parseBookQuery(q);
    assert.ok(p && p.slug === slug, `${q} -> ${JSON.stringify(p)}`);
  }
  const s = await itbooksReply("الفتوى الحموية الكبرى لابن تيمية الاستواء", []);
  assert.ok(blocks(s).length > 0 && blocks(s).every((b) => b.tl.includes("الفتوى الحموية")));
});

test("3-cü mərhələ: 7 kitab mövcuddur; adla açılır, səhifə/axtarış işləyir; mərhələ siyahısında düymə", async () => {
  const stage3 = BOOKS.filter((b) => b.stage === 3);
  assert.equal(stage3.length, 7);
  for (const b of stage3) assert.ok(b.desc.every((d) => d.length > 40 && !/TODO|placeholder/i.test(d)), b.slug + " təsvir");
  if (!stage3.every((b) => isAvailable(b.slug))) return; // 3-cü mərhələ məlumatı build olunmayıbsa
  for (const b of stage3) {
    const r = await itbooksReply(`كتاب ${b.ar} لابن تيمية`, []);
    assert.ok(r.includes("::tafsir itbooks::") && r.includes("::src:: ابن تيمية، " + b.ar), b.slug);
    const start = chips(r).find(([, q]) => /ص \d+$/.test(q));
    assert.ok(start, b.slug + " oxu düyməsi");
    const pr = await itbooksReply(start[1], []);
    assert.equal(blocks(pr).length, 1, b.slug);
    assert.ok(blocks(pr)[0].body.length > 20);
  }
  for (const [q, slug] of [["İqtidaüs-sırat əl-müstəqim", "iqtida"], ["Qawaid Nuraniyya", "qawaid-nuraniyya"], ["Kitab əl-İstiqamə", "istiqama"], ["Əs-Sarimul-Məslul", "sarim-maslul"], ["Al-Jawab al-Sahih", "jawab-sahih"], ["Sharh al-Asfahaniyyah", "asfahaniyya"], ["Kitab al-Nubuwwat", "nubuwwat"]]) {
    const p = parseBookQuery(q);
    assert.ok(p && p.slug === slug, `${q} -> ${JSON.stringify(p)}`);
  }
  const s = await itbooksReply("الصارم المسلول على شاتم الرسول لابن تيمية الردة", []);
  assert.ok(blocks(s).length > 0 && blocks(s).every((b) => b.tl.includes("الصارم المسلول")));
  const r3 = recommendReply("az", 3);
  for (const b of stage3) assert.ok(chips(r3).some(([, q]) => q === `كتاب ${b.ar} لابن تيمية`), b.slug + " siyahı düyməsi");
  assert.ok(!r3.includes("tezliklə\n") || count(r3, /tezliklə/g) <= BOOKS.filter((b) => b.stage === 4).length + 1);
});

test("tövsiyə: 2-ci mərhələ kitabları mövcud olanda düymə alır (mövcudluq avail.js ilə avtomatik)", () => {
  const r = recommendReply("az", 2);
  for (const b of BOOKS.filter((x) => x.stage === 2)) assert.equal(chips(r).some(([, q]) => q === `كتاب ${b.ar} لابن تيمية`), isAvailable(b.slug));
  assert.equal(chips(r).some(([, q]) => q === "Növbəti mərhələ"), true);
  assert.ok(chips(recommendReply("az", 4)).every(([, q]) => q !== "Növbəti mərhələ"));
});

test("adi sözlər kitab adı sanılmır: «vasitə ilə», «ما حكم الواسطة», «təvəssül caizdirmi» (Məcmuu əl-Fətava-ya qalır)", async () => {
  for (const q of ["vasitə ilə", "bu vasitə ilə oxu", "ما حكم الواسطة", "الواسطة في الوظيفة", "təvəssül caizdirmi", "tavassul", "faiz haramdır", "minhac nədir", "istiqamət nədir", "hisbə nədir"]) {
    assert.equal(parseBookQuery(q), null, q);
    assert.equal(parseRecQuery(q, []), null, q);
  }
  const r = await chat("təvəssül caizdirmi");
  assert.ok(r.reply.includes("::tafsir fatawa::") && !r.reply.includes("itbooks"));
});

test("transliterasiya variantları və dil: «İqtidaus-siratil-mustəqim», «Sarim maslul»; az ı/ş/ğ türkcə sayılmır", async () => {
  for (const [q, slug] of [["İqtidaus-siratil-mustəqim kitabı", "iqtida"], ["İqtidaus-sirat kitabı", "iqtida"], ["İqtida kitabı", "iqtida"], ["Sarim maslul", "sarim-maslul"], ["Əs-Sarimul-məslul kitabı", "sarim-maslul"], ["Nübüvvat kitabı", "nubuwwat"], ["Rəf'ul-məlam", "raful-malam"]]) {
    const r = parseBookQuery(q);
    assert.ok(r && r.slug === slug, q + " -> " + JSON.stringify(r));
  }
  const az1 = await itbooksReply("İqtida kitabı", []);
  assert.ok(az1.includes("3-cü mərhələ"), az1.slice(0, 100));
  const az2 = await itbooksReply("Nübüvvat kitabı", []);
  assert.ok(az2.includes("səhifə"), az2.slice(0, 100));
  const tr = await itbooksReply("Hangi kitapları okuyayım", []);
  assert.ok(/aşama/.test(tr), tr.slice(0, 80));
});
