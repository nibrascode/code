// Nibras AI: ərəbcə mənbə mətni olan cavablarda «Tərcümə et» ikonu (jsdom + saxta /api/chat və /api/translate).
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
const HTML = (f) => readFileSync(join(ROOT, f), "utf8");
const AR = "حَدَّثَنَا إِسْحَاق بْنُ مَنْصُورٍ عَنْ أَبِي مَالِكٍ الأَشْعَرِيِّ قَالَ قَالَ رَسُولُ اللَّهِ الصَّلَاةُ نُورٌ وَالصَّدَقَةُ بُرْهَانٌ";
const BLOCKS = `Nəticə:\n\n::tafsir hadith::\n::tl:: 1/2 · مسلم · رقم 223\n${AR}\n::src:: مسلم، صحيح مسلم\n::src:: الحكم: صحيح\n::/tafsir::\n\n::tafsir hadith::\n::tl:: 2/2 · الترمذي · رقم 3826\n${AR} وَالصَّبْرُ ضِيَاءٌ\n::src:: الترمذي\n::/tafsir::`;
const AYAH = "::ayah 1:1::\nبِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ\n::tr:: Tərcümə\nMərhəmətli Allahın adı ilə\n::src:: Tanzil\n::/ayah::";

test("ai.html və ai/index.html eynidir", () => {
  assert.equal(HTML("public/ai.html"), HTML("public/ai/index.html"));
});

for (const file of ["public/ai/index.html", "public/ai.html"]) {
  function boot({ reply, translate, lang } = {}) {
    const log = { sent: [], tr: [] };
    const dom = new JSDOM(HTML(file), {
      url: "https://nibrascode.com/ai",
      runScripts: "dangerously",
      pretendToBeVisual: true,
      beforeParse(w) {
        w.TextEncoder = TextEncoder;
        w.fetch = async (url, init = {}) => {
          const u = new URL(url, "https://nibrascode.com");
          const out = (status, body) => ({ ok: status < 400, status, text: async () => JSON.stringify(body), json: async () => body });
          if (u.pathname === "/api/chat") { const req = JSON.parse(init.body); log.sent.push(req); return out(200, { reply: reply(req) }); }
          if (u.pathname === "/api/translate") {
            const req = JSON.parse(init.body);
            log.tr.push(req);
            if (translate === "FAIL") throw new Error("offline");
            return out(200, { ok: true, results: req.texts.map((t, i) => translate(t, i, req)) });
          }
          if (u.pathname === "/api/chats") return out(200, { ok: true, storage: false, chats: [], chat: null });
          return out(200, { ok: true });
        };
      },
    });
    const w = dom.window, d = w.document;
    if (lang) d.documentElement.setAttribute("lang", lang);
    return { w, d, log,
      async say(t) { d.querySelector("#inp").value = t; d.querySelector("#form").dispatchEvent(new w.Event("submit", { cancelable: true, bubbles: true })); await wait(40); },
      bubble() { const all = d.querySelectorAll("#msgs .msg.b"); return all[all.length - 1]; },
      trBtn() { return this.bubble().querySelector(".tools .trbtn"); } };
  }
  const human = (t, i) => ({ ok: true, method: "lookup", translation: "AZ-" + i, translation_lang: "az", sources: [{ name: "HadeethEnc.com", url: "https://hadeethenc.com/az/browse/hadith/" + (100 + i) }], footer: "Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər" });

  test(`${file}: ərəbcə blokları olan cavabda «Tərcümə et» düyməsi birincidir; hər blokun altında nəticə + mənbə + footer; ikinci klik gizlədir`, { skip }, async () => {
    const p = boot({ reply: () => BLOCKS, translate: human });
    await p.say("hədis axtar: الصلاة نور");
    const btns = p.bubble().querySelectorAll(".tools button");
    assert.equal(btns.length, 3);
    assert.ok(btns[0].classList.contains("trbtn"));
    assert.equal(btns[0].getAttribute("aria-label"), "Tərcümə et");
    assert.equal(btns[0].textContent, "");
    btns[0].click();
    await wait(40);
    assert.equal(p.log.tr.length, 1);
    assert.equal(p.log.tr[0].texts.length, 2);
    assert.equal(p.log.tr[0].to, "az");
    assert.equal(p.log.tr[0].from, "ar");
    assert.ok(!p.log.tr[0].texts[0].includes("::"), "işarələr və mənbə sətirləri göndərilmir");
    assert.ok(!p.log.tr[0].texts[0].includes("رقم 223"));
    const tf = p.bubble().querySelectorAll(".tf");
    assert.equal(tf.length, 2);
    tf.forEach((blk, i) => {
      const n = blk.nextElementSibling;
      assert.ok(n && n.classList.contains("trn"), "blokun dərhal altında");
      assert.match(n.textContent, new RegExp("AZ-" + i));
      assert.match(n.textContent, /Hazır insan tərcüməsi/);
      assert.match(n.textContent, /Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər/);
      assert.equal(n.querySelector(".trf").textContent, "Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər");
      assert.match(n.querySelector("a").href, /^https:\/\/hadeethenc\.com\/az\/browse\/hadith\/10\d$/);
    });
    p.trBtn().click();
    await wait(10);
    assert.equal(p.bubble().querySelectorAll(".trn").length, 0);
    p.w.close();
  });

  test(`${file}: mənbə yoxdur -> dürüst mesaj (footer yoxdur); başqa dil -> etiketli (az yoxdur); model -> «Maşın tərcüməsi»`, { skip }, async () => {
    const results = [
      { ok: true, method: "no-source", translation: null, notes: ["x"] },
      { ok: true, method: "lookup-alt-lang", translation: null, parallel: [{ lang: "ru", text: "RU-TEXT", source: { url: "https://hadeethenc.com/ru/browse/hadith/1" } }, { lang: "tr", text: "TR-TEXT", source: { url: "https://hadeethenc.com/tr/browse/hadith/1" } }, { lang: "en", text: "EN-TEXT", source: { url: "https://hadeethenc.com/en/browse/hadith/1" } }], footer: "F" },
    ];
    const p = boot({ reply: () => BLOCKS, translate: (t, i) => results[i] });
    await p.say("x");
    p.trBtn().click();
    await wait(40);
    const [a, b] = p.bubble().querySelectorAll(".trn");
    assert.ok(a.classList.contains("none"));
    assert.equal(a.textContent, "Bu mətn üçün hazır tərcümə mənbəsi tapılmadı.");
    assert.equal(a.querySelector(".trf"), null);
    assert.match(b.textContent, /azərbaycanca yoxdur/);
    assert.match(b.querySelector(".trl").textContent, /türkcə dilində hazır tərcümə/, "az yoxdur: tr birinci");
    assert.ok(!b.textContent.includes("RU-TEXT"), "ən çox 2 dil (tr, en əvvəl)");
    assert.equal(b.querySelectorAll(".trx").length, 2);
    p.w.close();
    const q = boot({ reply: () => BLOCKS, translate: () => ({ ok: true, method: "model", translation: "MT", sources: [{ name: "nllb-600m" }], footer: "F" }) });
    await q.say("x");
    q.trBtn().click();
    await wait(40);
    assert.match(q.bubble().querySelector(".trn .trl").textContent, /Maşın tərcüməsi · nllb-600m/);
    q.w.close();
  });

  test(`${file}: Quran ayəsi və adi mətn cavablarında düymə yoxdur; ərəbcə abzas cavabında var (ayə atılır); UI dili`, { skip }, async () => {
    const p = boot({ reply: (r) => (r.message === "a" ? AYAH : r.message === "b" ? "Salam, necəsən?" : "Giriş\n\n" + AR + "\n\n" + AYAH), translate: human, lang: "en" });
    await p.say("a");
    assert.equal(p.bubble().querySelectorAll(".tools button").length, 2, "ayə: Kopyala + Paylaş");
    assert.equal(p.trBtn(), null);
    await p.say("b");
    assert.equal(p.trBtn(), null);
    await p.say("c");
    const b = p.trBtn();
    assert.ok(b);
    assert.equal(b.getAttribute("aria-label"), "Translate");
    b.click();
    await wait(40);
    assert.equal(p.log.tr[0].texts.length, 1);
    assert.ok(!p.log.tr[0].texts[0].includes("بِسْمِ اللَّهِ"), "Quran ayəsi göndərilmir");
    assert.equal(p.log.tr[0].to, "en");
    assert.equal(p.log.tr[0].ui, "en");
    const n = p.bubble().querySelector(".trn");
    assert.ok(n);
    assert.match(n.querySelector(".trl").textContent, /Existing human translation/);
    assert.equal(n.querySelector(".trf").textContent, "Nibras Tərcümə ilə tərcümə olunub, xətalar ola bilər", "serverin footer-i göstərilir");
    p.w.close();
  });

  test(`${file}: şəbəkə xətası -> «Tərcümə alınmadı», düymə yenidən işləyir`, { skip }, async () => {
    const p = boot({ reply: () => BLOCKS, translate: "FAIL" });
    await p.say("x");
    p.trBtn().click();
    await wait(40);
    assert.equal(p.d.querySelector("#toast").textContent, "Tərcümə alınmadı");
    assert.equal(p.bubble().querySelectorAll(".trn").length, 0);
    assert.ok(!p.trBtn().classList.contains("busy"));
    p.w.close();
  });
}
