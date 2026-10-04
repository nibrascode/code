// «Fetava 19» «Fatihə surəsində 19-cu ayə yoxdur» kimi cavab verməməlidir: fətva/kitab/hədis və s. sözlər surə adına bənzədilməsin.
import test from "node:test";
import assert from "node:assert/strict";
import chat from "../api/chat.js";
import { ayahReply } from "../api/_ayah.js";
import { namesFatawaBook } from "../api/_fatawa-name.js";

const ask = async (message) => {
  const res = { setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
  const rf = globalThis.fetch;
  globalThis.fetch = async () => { throw new Error("AI çağırışı olmamalıdır"); };
  try { await chat({ method: "POST", headers: {}, body: { message, history: [] } }, res); } finally { globalThis.fetch = rf; }
  return String(res.body?.reply ?? "");
};

const FATWA_PLURALS = ["Fetava", "Fətava", "fatawa", "fatava", "fatawah", "fetawa", "fetavalar", "FETAVA", "فتاوى", "الفتاوى", "фатава", "фетава"];

test("fətava söz formaları (+ nömrə) kitab adı sayılır, surə/ayə deyil", () => {
  for (const w of FATWA_PLURALS) for (const q of [w, `${w} 19`, `${w} 5`, `${w} 1`, `${w} 114`]) {
    assert.equal(namesFatawaBook(q), true, q);
    assert.equal(ayahReply(q), null, q);
  }
});

test("söhbət: «Fetava 19», «Fətava 19», «fatawa 19», «fetava 5», «فتاوى 19» — «Məcmuu əl-Fətava» bələdçisi, Fatihə yox", async () => {
  for (const q of ["Fetava 19", "Fətava 19", "fatawa 19", "fetava 5", "fatava 7", "فتاوى 19", "фатава 19", "Macmuuk fetava 19"]) {
    const r = await ask(q);
    assert.ok(!/Fatih|Фатих|الفاتحة|::ayah/.test(r), q + " => " + r.slice(0, 80));
    assert.match(r, /Fətava|Fatawa|الفتاوى|фатава|Majmu/i, q + " => " + r.slice(0, 80));
  }
});

test("cild/səhifə istinadı işləməyə davam edir", async () => {
  assert.match(await ask("Macmuuk fetava cild 19"), /::tafsir fatawa::/);
  assert.match(await ask("Macmuuk fetava 3/10"), /::tafsir fatawa::/);
});

// Surə adına bənzəyən, amma surə olmayan gündəlik/sayt sözləri fuzzy ilə surəyə çevrilməməlidir (ən çox 1 hərf fərqi olanlar)
const NOT_SURAH = `fetva fətva fatwa fatwas fetvalar hadis hədis hadith hadiths hadits namaz namaza namazi zakat zəkat zekat salat salavat angel angels melek buxari bukhari muslim müslim tirmizi
kitab kitablar kitap book books tefsir təfsir tafsir tafseer nahv nəhv nahw sarf lugha lugat fiqh fikih akida əqidə aqida tevhid tövhid tawhid sunnet sünnə sunnah bidət
sual cavab question answer volume page cild islam iman imam elm ilm dua zikr rəhmət tövbə macmu majmu mecmu ibni
фатва фетва фатвы хадис хадисы тафсир намаз закят книга вопрос ответ сунна ислам иман дуа зикр
حديث كتاب تفسير فتوى فتاوى نحو صلاة زكاة سنة عقيدة فقه`.split(/\s+/);

test("surə olmayan ~100 gündəlik söz (tək, + nömrə): ayə cavabı verilmir", () => {
  for (const w of NOT_SURAH) for (const q of [w, `${w} 5`, `${w} 19`, `${w} 1`]) assert.equal(ayahReply(q), null, q + " => " + String(ayahReply(q)).slice(0, 60));
});

test("həqiqi surə adları/yazılış səhvləri dəyişməyib", () => {
  assert.match(ayahReply("Fatihə 5"), /::ayah 1:5::/);
  assert.match(ayahReply("fatiha 3"), /::ayah 1:3::/);
  assert.match(ayahReply("fatiya 5"), /::ayah 1:5::/);
  assert.match(ayahReply("Fatir 5"), /::ayah 35:5::/);
  assert.match(ayahReply("Ahzab 5"), /::ayah 33:5::/);
  assert.match(ayahReply("Nahl 5"), /::ayah 16:5::/);
  assert.match(ayahReply("Hədid 5"), /::ayah 57:5::/);
  assert.match(ayahReply("Zariyat 5"), /::ayah 51:5::/);
  assert.match(ayahReply("Humaza 5"), /::ayah 104:5::/);
  assert.match(ayahReply("surə 19"), /::ayah 19:1-15::/);
  assert.match(ayahReply("Fatihə 19"), /yalnız 7 ayə var/); // həqiqi surə, olmayan ayə
});
