// Tövhid 1 (Əqidə 3001) hazır cavabları: məlumat bütövlüyü, mənbə ilə uyğunluq, uyğunlaşdırma, chat.js bağlantısı.
import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import { ENTRIES, TOPICS } from "../api/_tawhid/entries.js";
import { tawhidReply, tawhidMatch, formatEntry } from "../api/_tawhid.js";
import { cannedReply } from "../api/_canned.js";
import { quranReply } from "../api/_quran.js";
import handler from "../api/chat.js";
import { build } from "./build-tawhid.mjs";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const AR_TXT = fs.readFileSync(path.join(ROOT, "content/tawhid/ar.txt"), "utf8");
const AZ_TXT = fs.readFileSync(path.join(ROOT, "content/tawhid/az.txt"), "utf8");
const FOOT_AZ = "Mənbə: Tövhid 1 (Əqidə 3001) dərs xülasəsi (hazır cavab)";
const NO_AZ = "Bu sualın Azərbaycanca tərcüməsi hələ əlavə olunmayıb. Ərəbcə mətn:";

const ids = (q) => {
  const m = tawhidMatch(q);
  return m && m.ids ? m.ids : m ? [m.kind + (m.n || "")] : null;
};

test("entries.js mənbə fayllardan avtomatik yaradılıb və aktualdır", () => {
  const cur = fs.readFileSync(path.join(ROOT, "api/_tawhid/entries.js"), "utf8");
  assert.equal(cur, build(), "node scripts/build-tawhid.mjs işlədin");
});

test("məlumat: hər girişdə id, sual, ərəbcə cavab, triggerlər var; id-lər unikaldır", () => {
  assert.ok(ENTRIES.length >= 60, "giriş sayı " + ENTRIES.length);
  assert.equal(new Set(ENTRIES.map((e) => e.id)).size, ENTRIES.length);
  assert.equal(TOPICS.length, 11);
  for (const t of TOPICS) assert.ok(t.title_az && t.title_ar, "mövzu başlığı " + t.n);
  for (const e of ENTRIES) {
    assert.ok(e.id && e.q_ar && e.a_ar && e.label, e.id);
    assert.ok(e.topic >= 1 && e.topic <= 11, e.id);
    assert.ok(e.core.length >= 1, e.id + " core");
    assert.ok(e.triggers.az.length >= 2 && e.triggers.ar.length >= 1, e.id + " triggers");
    assert.ok(/[\u0600-\u06FF]/.test(e.a_ar) && /[\u0600-\u06FF]/.test(e.q_ar), e.id);
    assert.ok(!(e.a_az && e.a_az_partial), e.id);
    assert.ok(AR_TXT.includes(e.a_ar), e.id + ": a_ar ar.txt-də tapılmadı");
  }
  const withAz = ENTRIES.filter((e) => e.a_az);
  const partial = ENTRIES.filter((e) => e.a_az_partial);
  assert.ok(withAz.length >= 70, "tərcüməsi olan: " + withAz.length);
  assert.equal(partial.length, 0, "qismən tərcümə qalmayıb");
});

test("a_az az.txt-dəki blokla eynidir (dəyişdirilməyib)", () => {
  for (const e of ENTRIES) {
    if (e.a_az) assert.ok(AZ_TXT.includes(e.a_az), e.id + ": a_az az.txt-də tam blok kimi yoxdur");
    if (e.a_az_partial) {
      for (const line of e.a_az_partial.split("\n")) assert.ok(AZ_TXT.includes(line), e.id + ": " + line);
      assert.ok(!e.a_az_partial.includes("[...]"));
    }
  }
  // 11-ci mövzu tam və sözbəsöz: ayə mətnləri dəyişməyib
  const t11 = ENTRIES.find((e) => e.id === "t11-sifet-menfi");
  assert.ok(t11.a_az.includes("««Ona nə mürgü, nə də yuxu gəlməz».\n(Bəqərə, 255)»"));
  const ik = ENTRIES.find((e) => e.id === "t5-tetil-sirki");
  assert.ok(ik.a_az.includes("«Firon dedi: \"Aləmlərin Rəbbi nədir?\"» (Şüəra, 23)"));
  assert.ok(ik.a_ar.includes("قَالَ فِرْعَوْنُ وَمَا رَبُّ الْعَالَمِينَ"));
  // 11-ci mövzunun bütün cavabları tərcümə olunub
  for (const e of ENTRIES.filter((x) => x.topic === 11)) assert.ok(e.a_az, e.id);
  // 8, 9, 10-cu mövzular tam tərcümə olunub (qismən yox)
  for (const e of ENTRIES.filter((x) => [8, 9, 10].includes(x.topic))) {
    assert.ok(e.a_az, e.id);
    assert.ok(!e.a_az_partial, e.id);
  }
  assert.ok(AZ_TXT.includes("Dördüncü qayda: Allahın adları həm keçişli") && AZ_TXT.includes("Beşinci qayda: Allahın adları Onun zatına"));
  assert.ok(ENTRIES.filter((x) => x.topic === 9).length >= 7 && ENTRIES.filter((x) => x.topic === 10).length >= 5);
  // 1–4-cü mövzular istifadəçinin son tərcüməsi ilə tamdır; yalnız ərəbcə mənbədə ayrıca olan, Azərbaycan mətnində ayrıca sualı olmayan 3 giriş tərcümə gözləyir
  const noAz = ENTRIES.filter((x) => !x.a_az && !x.a_az_partial).map((x) => x.id).sort();
  assert.deepEqual(noAz, ["t1-ihkam-itqan", "t1-xalq-icad", "t3-niye-bir-ad"]);
  for (const e of ENTRIES.filter((x) => x.topic <= 4 && !noAz.includes(x.id))) assert.ok(e.a_az, e.id);
  // mövzu başlıqları (Azərbaycanca, tərcümədən)
  assert.equal(TOPICS[0].title_az, "Rübubiyyət tövhidi və onun dəlilləri");
  assert.equal(TOPICS[1].title_az, "Allahın varlığını inkar edənlərin iddialarına cavab");
  assert.equal(TOPICS[2].title_az, "Mə‘rifət və isbat tövhidinin mənası və növləri");
  assert.equal(TOPICS[3].title_az, "Rübubiyyət tövhidinin tərifi, dəlilləri və Qurani-Kərimdə izah üsulları");
  for (const t of TOPICS) assert.ok(t.title_az_translated, "mövzu " + t.n);
  // 1–4-cü mövzu mətnləri sözbəsöz: «» formatı və (Surə, N) sətirləri dəyişməyib
  const byId = (id) => ENTRIES.find((x) => x.id === id);
  assert.ok(byId("t1-sheri-delil").a_az.includes("««Həqiqətən, Rəbbiniz göyləri və yeri altı gündə yaradan, sonra Ərşə istiva edən Allahdır."));
  assert.ok(byId("t1-sheri-delil").a_az.includes("Aləmlərin Rəbbi olan Allah nə qədər ucadır!»\n(Əraf, 54)»"));
  assert.ok(byId("t1-sheri-delil").a_az.includes("(Yunus, 3)»"));
  assert.ok(byId("t1-fitri-delil").a_az.includes("(Loğman, 32)»") && byId("t1-fitri-delil").a_az.includes("(İsra, 67 mənasına uyğun)»"));
  assert.ok(byId("t2-insan-yaradici").a_az.includes("««Yoxsa onlar heç nədən yaradılıblar? Yaxud özləri yaradandırlar?»\n(Tur, 35)»"));
  assert.ok(byId("t2-bedevi-sozu").a_az.includes("««Peyin dəvəyə, iz isə yolçunun keçməsinə dəlalət edir."));
  assert.ok(byId("t3-uc-tovhid-bir-ayede").a_az.includes("(Məryəm, 65)»"));
  assert.ok(byId("t4-quran-delil").a_az.includes("(Bəqərə, 164)»"));
  assert.ok(byId("t4-sunne-delil").a_az.includes("««Sənin adınla ölür və dirilirəm».»"));
  assert.ok(byId("t4-usul-2").a_az.includes("(Muminun, 12–14)»"));
  assert.ok(byId("t4-usul-3").a_az.includes("(İbrahim, 19–20)»"));
  assert.ok(byId("t4-usul-4").a_az.includes("(Mülk, 3–4)»"));
  assert.ok(byId("t4-usul-5").a_az.includes("(Muminun, 91)»"));
  assert.ok(byId("t4-usul-5").a_az.includes("Yaradan yalnız Allahdır → Rəbb yalnız Allahdır → ibadətə layiq olan da yalnız Allahdır."));
  // "---" ayırıcıları və böyük hərfli başlıqlar az.txt-də qalmayıb
  assert.ok(!/^---$/m.test(AZ_TXT) && !/MÖVZU:/.test(AZ_TXT));
  // sual→giriş uyğunluğu (məna üzrə)
  assert.equal(byId("t1-iman-umur").q_az, "Rübubiyyət tövhidini həyata keçirmək üçün neçə məsələni bilmək lazımdır?");
  assert.equal(byId("t4-rububiyyet-delil").a_az.split("\n").filter((l) => l.startsWith("Sual 3: ")).length, 1);
  assert.equal(byId("t4-quran-metodlari").q_az, "Qurani-Kərimdə Rübubiyyət tövhidini izah etmə üsulları");
  assert.equal(byId("t3-adlanma-sebebi").q_az, "Nə üçün buna “Mə‘rifət və isbat tövhidi” deyilir?");
  // üsul alt-girişləri öz ərəbcə bəndi ilə
  assert.ok(byId("t4-usul-1").a_ar.startsWith("(1) الاستدلال باستحالة") && byId("t4-usul-1").a_az.startsWith("Birinci üsul:"));
  assert.ok(byId("t4-usul-5").a_ar.startsWith("(٥) الاستدلال بانفراد") && byId("t4-usul-5").a_az.startsWith("Beşinci üsul:"));
  assert.ok(!byId("t4-usul-2").a_az.includes("Üçüncü üsul"));
});

test("sual və ərəbcə cavab sayları mənbə ilə uyğundur", () => {
  const arQ = AR_TXT.split("\n").filter((l) => /^س(?=[\s:：0-9۰-۹٠-٩])/.test(l.trim())).length;
  const mains = ENTRIES.filter((e) => e.main);
  assert.equal(mains.length, arQ, "hər ərəbcə sual üçün bir əsas giriş");
});

const POSITIVE = [
  // [sorğu, gözlənən id (massiv: hər biri uyğun sayılır)]
  ["Rübubiyyət tövhidi nədir", ["t4-rububiyyet-terif"]],
  ["rübubiyyət tövhidinin tərifi", ["t4-rububiyyet-terif"]],
  ["Rububiyet tevhidi nedir", ["t4-rububiyyet-terif"]],
  ["ما هو توحيد الربوبية", ["t4-rububiyyet-terif"]],
  ["Şirk neçə qismə bölünür", ["t5-sirk-qismleri-tovhid", "t5-sirk-qismleri-hokm"]],
  ["Tövhidin növlərinə nisbətdə şirk neçə qismə bölünür", ["t5-sirk-qismleri-tovhid"]],
  ["Hökmünə görə şirk neçə qismə bölünür", ["t5-sirk-qismleri-hokm"]],
  ["şirk kaça ayrılır", ["t5-sirk-qismleri-tovhid", "t5-sirk-qismleri-hokm"]],
  ["كم أقسام الشرك", ["t5-sirk-qismleri-tovhid", "t5-sirk-qismleri-hokm"]],
  ["Şirk nədir", ["t5-sirk-terif"]],
  ["Şirkin lüğəvi və şəri mənası nədir", ["t5-sirk-terif"]],
  ["Böyük şirk nədir", ["t5-boyuk-sirk-terif"]],
  ["Büyük şirk nedir", ["t5-boyuk-sirk-terif"]],
  ["ما هو الشرك الأكبر", ["t5-boyuk-sirk-terif"]],
  ["Böyük şirkin hökmləri nələrdir", ["t5-boyuk-sirk-hokm"]],
  ["عدد أحكام الشرك الأكبر", ["t5-boyuk-sirk-hokm"]],
  ["Rübubiyyətdə şirk nədir", ["t5-rububiyyetde-sirk"]],
  ["Rübubiyyət şirkinin növləri", ["t5-rububiyyet-sirk-novleri"]],
  ["Rübubiyyətin xüsusiyyətləri nələrdir", ["t5-rububiyyet-xususiyyetleri"]],
  ["Allahın haqqı nədir", ["t5-allah-haqqi"]],
  ["Tətil şirki nədir", ["t5-tetil-sirki"]],
  ["tətil şirki", ["t5-tetil-sirki"]],
  ["ما هو شرك التعطيل", ["t5-tetil-sirki"]],
  ["Təmsil şirki nə deməkdir", ["t5-temsil-sirki"]],
  ["təmsil şirki", ["t5-temsil-sirki"]],
  ["Allahın ad və sifətləri tövhidi nədir", ["t6-ad-sifet-tovhidi"]],
  ["Esma ve sıfat tevhidi nedir", ["t6-ad-sifet-tovhidi"]],
  ["ما هو توحيد الأسماء والصفات", ["t6-ad-sifet-tovhidi"]],
  ["Əhli-sünnənin ad və sifətlər tövhidində əsaslandığı prinsiplər", ["t6-usullar"]],
  ["tövhidin növləri", ["t3-tovhid-qismleri"]],
  ["Tövhid neçə qismə bölünür", ["t3-tovhid-qismleri"]],
  ["kaç çeşit tevhid vardır", ["t3-tovhid-qismleri"]],
  ["أقسام التوحيد", ["t3-tovhid-qismleri"]],
  ["Mərifət və isbat tövhidi nədir", ["t3-merife-isbat-terif"]],
  ["elmi-xəbəri tövhid nədir", ["t3-elmi-xeberi"]],
  ["Quran rübubiyyət tövhidini necə bəyan edir", ["t4-quran-metodlari"]],
  ["Allahın varlığına dəlillər neçə növdür", ["t1-delil-novleri"]],
  ["fitri dəlil", ["t1-fitri-delil", "t7-fitri-delil"]],
  ["Ad və sifətlərə fitri dəlil nədir", ["t7-fitri-delil"]],
  ["الدليل الفطري", ["t1-fitri-delil", "t7-fitri-delil"]],
  ["nəqli dəlil nədir", ["t7-naqli-delil"]],
  ["Kainatı kim yaradıb?", ["t2-kainat-kim"]],
  ["əhli sünnənin Allahın adları ilə bağlı qaydaları", ["t8-adlar-qaydalar"]],
  ["Allahın adları təvqifidir nə deməkdir", ["t8-q3-tevqifi"]],
  ["ما معنى أن أسماء الله توقيفية", ["t8-q3-tevqifi"]],
  ["Allahın bütün adları gözəldir", ["t8-q1-hamisi-gozel"]],
  ["Allahın adları niyə gözəldir", ["t8-q1-niye-gozel"]],
  ["Allahın adları 99 ilə məhduddurmu", ["t8-q2-mehdud-deyil"]],
  ["Allahın sifətləri ilə bağlı qaydalar", ["t9-sifetler-qaydalar"]],
  ["Allahın sifətləri təvqifidir nə deməkdir", ["t9-q1-tevqifi"]],
  ["leysə kəmislihi şey nə deməkdir", ["t9-q2-leyse"]],
  ["Allahın sifətləri təvqifidir", ["t9-q1-tevqifi"]],
  ["Allahın adları keçişli sifətlərə necə dəlalət edir", ["t8-q4-muteaddi"]],
  ["mutabəqə təzəmmün iltizam dəlalət", ["t8-q5-delalet"]],
  ["ihsa nə deməkdir", ["t10-ihsa-hedis"]],
  ["dua neçə növdür", ["t10-dua-mertebeleri"]],
  ["Ümumi inkar təfsilatlı təsdiq qaydası nədir", ["t9-q3-nefy-isbat"]],
  ["Adların eyni olması bənzətməni tələb edirmi", ["t9-q4-ittifaq"]],
  ["Sifətlər haqqında danışmaq zat haqqında danışmaq kimidir", ["t9-q5-zat-kimi"]],
  ["Allahın adlarını ihsa etmənin neçə mərtəbəsi var", ["t10-ihsa-mertebeleri"]],
  ["Allahın adlarını ihsa etmək niyə səadət əsasıdır", ["t10-ihsa-seadet"]],
  ["Allahın adlarını ihsa etmənin mərtəbələri", ["t10-ihsa-mertebeleri"]],
  ["Duanın növləri", ["t10-dua-mertebeleri"]],
  ["Sifət sözünün lüğəvi mənası nədir", ["t11-sifet-lugevi"]],
  ["Əhli-sünnəyə görə sifətin terminoloji tərifi nədir", ["t11-sifet-terif"]],
  ["Allahın sifətləri neçə qismə bölünür", ["t11-sifet-tesnif"]],
  ["Zati sifətlər nədir", ["t11-zati-sifetler"]],
  ["Feili sifətlər nədir", ["t11-feili-sifetler"]],
  ["Zati-feili sifətlər nədir", ["t11-zati-feili-sifetler"]],
  ["Mənfi sifətlər nədir", ["t11-sifet-menfi"]],
  ["Sübuti sifətlər nədir", ["t11-sifet-subuti"]],
  ["Allahın felləri keçişli və keçişsiz", ["t11-felleri-novleri"]],
  ["Allahın sifətlərinə iman etməyin təsirləri", ["t11-sifet-tesirleri"]],
  ["ما هي الصفات الذاتية", ["t11-zati-sifetler"]],
  ["Rübubiyyət tövhidini həyata keçirmək üçün neçə məsələni bilmək lazımdır", ["t1-iman-umur"]],
  ["Allahın mövcudluğuna neçə dəlil var", ["t1-delil-novleri"]],
  ["Allahın mövcudluğuna neçə dəlil vardır", ["t1-delil-novleri"]],
  ["şəri dəlil nədir", ["t1-sheri-delil"]],
  ["Fitri dəlil nədir", ["t1-fitri-delil", "t7-fitri-delil"]],
  ["Allahın varlığına əqli dəlillər", ["t1-aqli-delil"]],
  ["Kainatı kim yaradıb", ["t2-kainat-kim"]],
  ["Kainat sonradan yaranıbsa onu kim yaradıb", ["t2-kainat-kim"]],
  ["bədəvi sözü", ["t2-bedevi-sozu"]],
  ["Allahın kainatın yaradıcısı olduğuna əqli dəlillər", ["t2-aqli-yaradici"]],
  ["tövhidin neçə növü var", ["t3-tovhid-qismleri"]],
  ["mə'rifət və isbat tövhidi nədir", ["t3-merife-isbat-terif"]],
  ["Mərifət və isbat tövhidi niyə bu adla adlanır", ["t3-adlanma-sebebi"]],
  ["Mərifət və isbat sözlərinin mənası nədir", ["t3-merife-isbat-menasi"]],
  ["elmi-xəbəri tövhid", ["t3-elmi-xeberi"]],
  ["Rübubiyyət tövhidini tərif edin", ["t4-rububiyyet-terif"]],
  ["Quranda Rübubiyyət tövhidini izah üsulları", ["t4-quran-metodlari"]],
  ["Rübubiyyət tövhidinə Quran və sünnədən dəlil", ["t4-rububiyyet-delil"]],
  ["Sünnədə Rübubiyyət tövhidinə dair dəlil varmı", ["t4-sunne-delil"]],
  ["Rübubiyyət tövhidinə Quran dəlili", ["t4-quran-delil"]],
  ["Birinci üsul rübubiyyət", ["t4-usul-1"]],
  ["tövhid", ["intro"]],
  ["tövhid mövzuları", ["topics"]],
  ["tövhid siyahısı", ["topics"]],
  ["tövhid 5-ci mövzu", ["topic5"]],
  ["tövhid səkkizinci mövzu", ["topic8"]],
  ["tövhid 10-cu mövzu", ["topic10"]],
  ["tövhid 9-cu mövzu", ["topic9"]],
  ["التوحيد", ["intro"]],
];

test(`uyğunlaşdırma: ${POSITIVE.length} müsbət sorğu`, () => {
  assert.ok(POSITIVE.length >= 60);
  const bad = [];
  for (const [q, want] of POSITIVE) {
    const got = ids(q);
    if (!got || !got.every((g) => want.includes(g)) ) bad.push(`${q} -> ${JSON.stringify(got)} (gözlənən ${want})`);
  }
  assert.deepEqual(bad, []);
});

const NEGATIVE = [
  "salam", "necəsən", "təşəkkür edirəm", "2+2 nə edər", "bu gün hava necədir", "python kod nümunəsi", "html form nümunəsi yaz",
  "javascript massiv nümunə", "sql join nümunə", "Bu şirkət çox yaxşıdır", "şirkətin adı nədir", "yay tətili nədir", "tətil günləri nə vaxtdır",
  "qismət nədir", "mən şirk etmirəm", "neçə qismə bölünür", "kainat çox böyükdür", "Allah böyükdür", "Allah rəhmlidir", "Sələfilik nədir",
  "İslamda firqələr", "bidət nədir", "namaz vaxtları", "nəsihət ver", "Allahın sifətləri nədir", "Allahın adları", "Allahın ad və sifətləri",
  "əsmaül hüsna", "Allahın 99 adı", "Bəqərə 3-cü ayə", "muflihun mənası", "رغدا", "ما هو الإسلام", "sifət nədir", "dua et mənim üçün",
  "mövzu nədir", "5-ci mövzu", "fitri nə vaxt gələcək", "tövhid kodu yaz", "Allah bizi yaradıb", "məhkəmə hökm verdi", "böyük şirkət nədir",
  "ad və soyad nədir", "bu dəlil məhkəmədə keçərlidir", "firqələr neçə qismə bölünür", "bidət neçə qismə bölünür", "namaz neçə rəkətdir", "şirk", "ما هو الدعاء", "Allahın sifətləri haqqında məlumat ver", "tövhid və ya şirk haqqında kitab tövsiyə et",
];

test(`səhv uyğunlaşma yoxdur: ${NEGATIVE.length} mənfi sorğu`, () => {
  const bad = NEGATIVE.filter((q) => tawhidMatch(q)).map((q) => `${q} -> ${JSON.stringify(ids(q))}`);
  assert.deepEqual(bad, []);
});

test("mövcud hazır cavablar öz idarəçilərində qalır (cannedReply / quranReply)", () => {
  const canned = ["Sələfilik nədir", "İslamda firqələr", "bidət nədir", "namaz vaxtları", "Allahın adları", "əsmaül hüsna", "Allahın 99 adı", "Allahın ad və sifətləri", "Allahın sifətləri", "nəsihət ver"];
  for (const q of canned) {
    assert.equal(tawhidReply(q), null, q);
    assert.ok(cannedReply(q), q);
  }
  for (const q of ["Bəqərə 3-cü ayə", "Bəqərə surəsi 1-10 ayə izahı", "المفلحون", "رغدا", "muflihun mənası"]) {
    assert.equal(tawhidReply(q), null, q);
    assert.ok(quranReply(q), q);
  }
});

test("topluca: bütün mövcud hazır cavab triggerləri tövhid tərəfindən oğurlanmır", () => {
  const src = fs.readFileSync(path.join(ROOT, "api/_canned.js"), "utf8");
  const ent = eval(src.match(/const ENTRIES = (\[[\s\S]*?\n\]);/)[1]);
  let n = 0;
  for (const e of ent) for (const list of Object.values(e.triggers)) for (const ph of list) { n++; assert.equal(tawhidMatch(ph), null, ph); }
  assert.ok(n > 100);
});

test("cavab formatı: başlıq, sual, cavab, mənbə", () => {
  const r = tawhidReply("Şirk neçə qismə bölünür");
  assert.ok(r.startsWith("Tövhid 1 (Əqidə 3001) — Rübubiyyət tövhidində şirk və onun əsas təzahürləri"));
  assert.ok(r.includes("Sual: Tövhidin növlərinə nisbətdə şirk neçə qismə bölünür?"));
  assert.ok(r.includes("Böyük və kiçik şirk."));
  assert.ok(r.includes("Hökmünə görə şirk neçə qismə bölünür?"));
  assert.ok(r.trimEnd().endsWith(FOOT_AZ));
  assert.ok(!r.includes(NO_AZ));
});

test("ümumi «Şirk neçə qismə bölünür» hər iki bölgünü göstərir", () => {
  const r = tawhidReply("Şirk neçə qismə bölünür");
  assert.ok(r.includes("Tövhidin növlərinə nisbətdə şirk neçə qismə bölünür?"));
  assert.ok(r.includes("Hökmünə görə şirk neçə qismə bölünür?"));
});

test("tərcümə olmayan sual: ərəbcə mətn + qeyd", () => {
  const r = tawhidReply("Dəlil əl-xalq vəl-icad nədir");
  assert.ok(r.includes(NO_AZ));
  assert.ok(r.includes("مفاد هذا الدليل أن كل حادث"));
  assert.ok(r.startsWith("Tövhid 1 (Əqidə 3001) — "));
  assert.ok(r.trimEnd().endsWith(FOOT_AZ));
});

test("1–4-cü mövzu: tam Azərbaycanca cavab, ərəbcə qeyd yoxdur, ayə formatı dəyişməyib", () => {
  const r = tawhidReply("Kainatı kim yaradıb?");
  assert.ok(!r.includes(NO_AZ) && !r.includes("hələ tam deyil"));
  assert.ok(r.includes("Birinci ehtimal: Kainat özünü özü yaradıb."));
  assert.ok(!r.includes("[...]"));
  const a = tawhidReply("Rübubiyyət tövhidini həyata keçirmək üçün neçə məsələni bilmək lazımdır");
  assert.ok(a.includes("Rübubiyyət tövhidini həyata keçirmək üçün beş məsələni bilmək lazımdır:"));
  assert.ok(a.includes("5. Allahın uluhiyyətinə iman etmək"));
  const d = tawhidReply("Rübubiyyət tövhidinə hansı dəlillər vardır");
  assert.ok(d.includes("««Həqiqətən, göylərin və yerin yaradılmasında"));
  assert.ok(d.includes("Sual 3: Sünnədə Rübubiyyət tövhidinə dair dəlil varmı?"));
  assert.ok(!d.includes(NO_AZ));
});

test("ərəbcə sual: ərəbcə cavab (a_ar), ərəbcə başlıq və mənbə", () => {
  const r = tawhidReply("ما هو شرك التعطيل");
  assert.ok(r.startsWith("التوحيد 1 (عقد 3001) — "));
  assert.ok(r.includes("تعريفه هو تعطيل المصنوع عن صانعه"));
  assert.ok(r.includes("المصدر:"));
  assert.ok(!r.includes("Mənbə:"));
});

test("11-ci mövzu: Azərbaycanca cavab az.txt-dəki kimi, ayələr dəyişməyib", () => {
  const r = tawhidReply("Zati-feili sifətlər nədir");
  assert.ok(r.includes("Allah əzəldən danışandır."));
  assert.ok(r.includes("««Allah Musa ilə həqiqətən danışdı».\n(Nisa, 164)»"));
  const t = tawhidReply("Allahın sifətlərinə iman etməyin təsirləri");
  assert.ok(t.includes("8. Dua və təvəkkül güclənir"));
  assert.ok(!t.includes("Sual: Allahın sifətlərinə iman etməyin təsirləri\n\nAllahın sifətlərinə iman etməyin təsirləri\n"));
});

test("mövzu siyahısı və mövzunun suallar siyahısı", () => {
  const list = tawhidReply("tövhid mövzuları");
  for (let n = 1; n <= 11; n++) assert.ok(list.includes(`${n}. `), "mövzu " + n);
  assert.ok(list.includes("Allahın bəzi sifətlərinin öyrənilməsi"));
  assert.ok(list.includes("Azərbaycanca tam"));
  assert.ok(list.includes("1. Rübubiyyət tövhidi və onun dəlilləri (Azərbaycanca tam)"));
  assert.ok(list.includes("(Azərbaycanca qismən)"), "3-cü mövzuda bir sual hələ ərəbcədir");
  assert.ok(!list.includes("hələ ərəbcə"));
  const q5 = tawhidReply("tövhid 5-ci mövzu");
  assert.ok(q5.includes("5-ci mövzu: Rübubiyyət tövhidində şirk"));
  assert.ok(q5.includes("Allahın haqqı nədir?"));
  assert.ok(q5.includes("Tətil şirki"));
  const q3 = tawhidReply("tövhid 3-cü mövzu");
  assert.ok(q3.includes("3-cü mövzu: Mə‘rifət və isbat tövhidinin mənası və növləri"));
  assert.ok(q3.includes("Tövhidin neçə növü vardır?"));
  assert.ok(q3.includes("(ərəbcə)"), "yalnız tərcüməsi olmayan 1 sual ərəbcə qalır");
  const q4 = tawhidReply("tövhid 4-cü mövzu");
  assert.ok(q4.includes("Rübubiyyət tövhidini tərif edin?") || q4.includes("Rübubiyyət tövhidini tərif edin."));
  assert.ok(!q4.includes("(ərəbcə)") && !q4.includes("(tərcümə qismən)"));
  const intro = tawhidReply("tövhid");
  assert.ok(intro.includes("Mövzular:"));
  assert.ok(tawhidReply("التوحيد").includes("المواضيع:"));
});

test("formatEntry: bütün girişlər xətasız formatlanır, mənbə sətri var", () => {
  for (const e of ENTRIES) {
    for (const lang of ["az", "ar"]) {
      const r = formatEntry(e, lang);
      assert.ok(r.length > 50);
      assert.ok(r.includes(lang === "az" ? "Mənbə:" : "المصدر:"), e.id);
      assert.ok(!r.includes("undefined") && !r.includes("null"), e.id);
    }
  }
});

test("hər girişin öz trigger ifadəsi onu (və ya eyni amb qrupunu) tapır", () => {
  const bad = [];
  for (const e of ENTRIES) {
    for (const list of [e.triggers.az, e.triggers.tr, e.triggers.ar]) {
      for (const q of list) {
        const m = tawhidMatch(q);
        const okIds = m && m.ids ? m.ids : [];
        if (!okIds.includes(e.id)) bad.push(`${e.id}: «${q}» -> ${m ? JSON.stringify(okIds.length ? okIds : m.kind) : null}`);
      }
    }
  }
  assert.deepEqual(bad, []);
});

test("chat.js: tövhid sualları AI-yə getmir (fetch çağırılsa test uğursuz olur)", async () => {
  const realFetch = globalThis.fetch;
  let calls = 0;
  globalThis.fetch = async () => {
    calls++;
    throw new Error("şəbəkə çağırışı olmamalıdır");
  };
  const run = async (message) => {
    const res = { headers: {}, setHeader() {}, status(c) { this.code = c; return this; }, json(b) { this.body = b; return this; }, end() {} };
    await handler({ method: "POST", body: { message } }, res);
    return res;
  };
  try {
    for (const message of ["Şirk neçə qismə bölünür", "Allahın adları təvqifidir nə deməkdir", "tövhidin növləri", "ما هو توحيد الربوبية", "tövhid", "tövhid 5-ci mövzu", "Zati sifətlər nədir", "əhli sünnənin Allahın adları ilə bağlı qaydaları"]) {
      const res = await run(message);
      assert.equal(res.code, 200, message);
      assert.equal(res.body.success, true);
      assert.ok(res.body.reply.includes("Mənbə:") || res.body.reply.includes("المصدر:"), message);
      assert.equal(res.body.reply, tawhidReply(message), message);
    }
    // köhnə hazır cavablar dəyişməyib
    for (const message of ["Sələfilik nədir", "bidət nədir", "Allahın adları", "əsmaül hüsna"]) {
      const res = await run(message);
      assert.equal(res.body.reply, cannedReply(message), message);
    }
    for (const message of ["Bəqərə 3-cü ayə", "المفلحون"]) {
      const res = await run(message);
      assert.equal(res.body.reply, quranReply(message), message);
    }
    assert.equal(calls, 0);
  } finally {
    globalThis.fetch = realFetch;
  }
});

test("node --check", () => {
  for (const f of ["api/_tawhid.js", "api/_tawhid/entries.js", "api/chat.js", "scripts/build-tawhid.mjs", "content/tawhid/meta.mjs", "scripts/tawhid.test.mjs"]) {
    const r = spawnSync(process.execPath, ["--check", f], { encoding: "utf-8", cwd: ROOT });
    assert.equal(r.status, 0, f + "\n" + r.stderr);
  }
});
