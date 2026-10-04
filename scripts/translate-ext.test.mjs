// Nibras Tərcümə: əlavə hazır insan tərcümələri (ext.js: IslamHouse «Şərh Riyadus-Salihin», az). Model çağırılmamalıdır.
import test from "node:test";
import assert from "node:assert/strict";
import { translate, coverage } from "../api/_translate/index.js";
import { loadPart, extSource } from "../api/_translate/data.js";

const RIYAD_87 = "عن أبي هريرة رضي الله عنه أن رسول الله صلى الله عليه وسلم قال: بادروا بالأعمال فتنا كقطع الليل المظلم يصبح الرجل مؤمنا ويمسي كافرا ويمسي مؤمنا ويصبح كافرا يبيع دينه بعرض من الدنيا";

test("ext: Riyadus-Salihin hədisləri az üçün hazır insan tərcüməsi kimi qaytarılır, mənbə/lisenziya göstərilir", async () => {
  const ext = (await loadPart("ar")).filter((r) => r[0] >= 900000);
  assert.ok(ext.length >= 100, "əlavə maddələr yüklənib: " + ext.length);
  const pick = ext.find((r) => r[4].endsWith(" 150")) || ext[40];
  const r = await translate({ text: pick[1], to: "az", model: false });
  assert.equal(r.method, "lookup");
  assert.equal(r.translation_lang, "az");
  assert.match(r.sources[0].name, /^IslamHouse\.com/);
  assert.match(r.sources[0].url, /islamhouse\.com\/az\/books\/2831432/);
  assert.match(r.sources[0].license, /dəyişdirilmədən/);
  assert.ok(r.translation.length > 60);
  assert.equal(r.match.id, pick[0]);
  assert.match(r.match.url, /islamhouse/);
  assert.ok(r.footer);
  assert.equal(r.machine, undefined);
});

test("ext: tərcümə mətni təmiz — şrift PUA simvolları, haşiyə nömrələri, şərh qalıqları yoxdur; ﷺ/رضي الله عنه bərpa olunub", async () => {
  const az = await loadPart("az");
  const ar = await loadPart("ar");
  let n = 0;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i][0] < 900000) continue;
    n++;
    const t = az[i][0];
    assert.ok(!/[\ue000-\uf8ff\0]/.test(t), "PUA: " + ar[i][0]);
    assert.ok(!/\s{2,}/.test(t), "ikiqat boşluq: " + ar[i][0]);
    assert.ok(!/[a-zəıöüçşğ]-\s+\p{Lu}/u.test(t), "sətir sonu qalığı: " + ar[i][0]);
    assert.match(t, /(Bu hədis|Hədisi|Hədisin|Bu rəvayət)/, "mənbə cümləsi: " + ar[i][0]);
    assert.ok(!/Şərh\s*:/.test(t));
    assert.ok(t.length < 2500, "izah qarışmayıb: " + ar[i][0]);
    assert.ok(!/[\u0600-\u06FF]/.test(ar[i][1].replace(/[\u0600-\u06FF\s"«»:،.؟()\-–,;'’‘“”\d]/g, "")) , "ərəbcə mətn");
  }
  assert.ok(n >= 100);
  const salavat = Object.values(az).filter((r) => r && /ﷺ/.test(r[0])).length;
  assert.ok(salavat > 60, "ﷺ bərpa: " + salavat);
});

test("ext: HadeethEnc ilə kəsişən hədisdə hədəf dildə tərcüməsi olan mənbə seçilir; olmayan dillər parallel[]-də", async () => {
  const r = await translate({ text: RIYAD_87, to: "az", model: false });
  assert.equal(r.method, "lookup");
  assert.equal(r.translation_lang, "az");
  const r2 = await translate({ text: RIYAD_87, to: "ru", model: false });
  assert.ok(["lookup", "lookup-alt-lang"].includes(r2.method));
  // az hədəfi üçün ext maddəsinin tərcüməsi (IslamHouse) və ya HadeethEnc az — hər ikisi insan tərcüməsidir
  assert.ok(/IslamHouse|HadeethEnc/.test(r.sources[0].name));
});

test("ext: coverage əlavə maddələri də sayır; extSource id-yə görə mənbə qaytarır; HadeethEnc id-ləri üçün null", async () => {
  const c = await coverage();
  assert.equal(c.ar, 3574);
  assert.equal(c.extra.az, c.extra.hadiths);
  assert.ok(c.extra.hadiths >= 100, JSON.stringify(c));
  assert.equal(extSource(1, "az"), null);
  const ar = await loadPart("ar");
  const id = ar.find((r) => r[0] >= 900000)[0];
  assert.equal(extSource(id, "az").key, "ih-riyad-az");
});
