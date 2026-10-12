const SITE = "https://www.nibrascode.com";

function fold(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/ə/g, "e")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ş/g, "s")
    .replace(/ç/g, "c")
    .replace(/ğ/g, "g");
}

const PAGES = [
  {
    kind: "soz",
    slug: "api-nedir",
    keys: ["api nedir", "api nədir", "what is an api", "what is api", "api nedir", "ما هي api", "что такое api", "api ne"],
    title: "API nədir?",
    lead: "API bir proqramın başqa proqrama hazır qapıdan cavab verməsidir. O proqramın içini yazmırsan. Ünvana sorğu göndərirsən, cavab alırsan.",
    points: ["Sorğu gedir, cavab gəlir. Cavab çox vaxt JSON olur.", "Hava, məzənnə və tərcümə belə qapılardan oxunur.", "Açar istəyən qapı qeydiyyat tələb edir. Açarsız qapı birbaşa açılır."],
  },
  {
    kind: "soz",
    slug: "deyisen-nedir",
    keys: ["deyisen nedir", "dəyişən nədir", "variable nedir", "what is a variable", "degisken nedir", "ما هو المتغير", "что такое переменная"],
    title: "Dəyişən nədir?",
    lead: "Dəyişən məlumatın adıdır. Ad qalır, içindəki qiymət dəyişə bilər.",
    points: ["Adı bir dəfə qoyursan, sonra həmin adla oxuyursan.", "İçindəki qiymət sonra dəyişə bilər.", "Ad aydın olanda kod da oxunur."],
  },
  {
    kind: "soz",
    slug: "funksiya-nedir",
    keys: ["funksiya nedir", "funksiya nədir", "what is a function", "fonksiyon nedir", "ما هي الدالة", "что такое функция"],
    title: "Funksiya nədir?",
    lead: "Funksiya bir işin adıdır. Adı çağıranda həmin iş yenidən görülür. Eyni kodu hər yerdə təkrar yazmırsan.",
    points: ["İçinə məlumat verə bilərsən.", "İş bitəndə nəticə qaytara bilər.", "Adı aydın olanda kod da oxunur."],
  },
  {
    kind: "soz",
    slug: "dongu-nedir",
    keys: ["dongu nedir", "döngü nədir", "what is a loop", "dongu nedir", "döngü nedir", "ما هي الحلقة", "что такое цикл"],
    title: "Döngü nədir?",
    lead: "Döngü eyni işi siyahı bitənə qədər, ya da şərt düz olanda, təkrar edir.",
    points: ["Siyahını gəzir, hər elementi bir dəfə işlədir.", "Şərt heç bitməsə, döngü də bitmir.", "for siyahını gəzir. while şərtə baxır."],
  },
  {
    kind: "soz",
    slug: "html-nedir",
    keys: ["html nedir", "html nədir", "what is html", "html nedir", "ما هو html", "что такое html"],
    title: "HTML nədir?",
    lead: "HTML səhifənin quruluşudur. Başlıq, abzas və düymə harada durur, onu HTML deyir. Rəngi CSS, hərəkəti JavaScript verir.",
    points: ["Hər açılan teq bağlanır.", "Görünən hissə body içindədir.", "Brauzer HTML-i oxuyur və səhifəni qurur."],
  },
  {
    kind: "soz",
    slug: "css-nedir",
    keys: ["css nedir", "css nədir", "what is css", "css nedir", "ما هو css", "что такое css"],
    title: "CSS nədir?",
    lead: "CSS səhifənin görünüşüdür. Rəng, ölçü, ara və düzülüş buradadır. Yazının özü HTML-də qalır.",
    points: ["Rəng və ölçü CSS-də yazılır.", "HTML quruluşu saxlayır, CSS görünüşü verir.", "Eyni qayda bir neçə yerə düşə bilər."],
  },
  {
    kind: "soz",
    slug: "javascript-nedir",
    keys: ["javascript nedir", "javascript nədir", "what is javascript", "js nedir", "ما هي جافا سكريبت", "что такое javascript"],
    title: "JavaScript nədir?",
    lead: "JavaScript səhifəyə hərəkət verir. Düyməyə basılanda, siyahı dəyişəndə və məlumat gələndə işləyən kod budur.",
    points: ["Düyməyə basılanda iş başlayır.", "Səhifəni yeniləmədən mətni dəyişə bilər.", "HTML quruluş, CSS görünüş, JavaScript hərəkətdir."],
  },
  {
    kind: "soz",
    slug: "python-nedir",
    keys: ["python nedir", "python nədir", "what is python", "python nedir", "ما هي بايثون", "что такое python"],
    title: "Python nədir?",
    lead: "Python oxunaqlı yazılan proqramlaşdırma dilidir. Kiçik proqram, hesab və məlumat işi buradan başlaya bilər.",
    points: ["Sətir azdır, oxunur.", "Hesab və siyahı işi buradan başlayır.", "İlk dil kimi seçilir, çünki qısa yazılır."],
  },
  {
    kind: "soz",
    slug: "alqoritm-nedir",
    keys: ["alqoritm nedir", "alqoritm nədir", "what is an algorithm", "algoritma nedir", "ما هي الخوارزمية", "что такое алгоритм"],
    title: "Alqoritm nədir?",
    lead: "Alqoritm işin ardıcıllığıdır. Əvvəl nə, sonra nə olacağı yazılır. Dil dəyişsə də, ardıcıllıq eyni qala bilər.",
    points: ["Addımlar sıra ilə gedir.", "Eyni işi başqa dildə də yazmaq olur.", "Ardıcıllıq pozulsa, nəticə də pozulur."],
  },
  {
    kind: "soz",
    slug: "json-nedir",
    keys: ["json nedir", "json nədir", "what is json", "json nedir", "ما هو json", "что такое json"],
    title: "JSON nədir?",
    lead: "JSON proqramların bir-birinə məlumat ötürdüyü sadə mətndir. Açarı və qiyməti olur.",
    points: ["Mətn dırnaqda, rəqəm dırnaqsız olur.", "Siyahı [ ], cüt { } ilə yazılır.", "Hava və məzənnə cavabı çox vaxt JSON-dur."],
  },
  {
    kind: "xeta",
    slug: "apk-qurulmur",
    keys: ["apk qurulmur", "apk kurulmuyor", "app not installed", "apk will not install", "tetbiq qurulmadi", "uygulama kurulmadı", "apk не устанавливается", "apk لا يُثب"],
    title: "APK qurulmur",
    lead: "Telefon «tətbiq qurulmadı» deyirsə, fayl ya tam gəlməyib, ya da telefon onu qəbul etmir.",
    points: ["Naməlum mənbədən quraşdırma bağlı ola bilər. Ayarlardan həmin proqrama icazə ver.", "Fayl yarımçıq enibsə, yenidən endir.", "Eyni tətbiq köhnə imza ilə durursa, əvvəl onu sil, sonra yenisini qur. İçindəki məlumat silinir."],
    note: "Play Marketdən gələn tətbiqin üstünə başqa açarla imzalanmış APK qurulmur.",
  },
  {
    kind: "xeta",
    slug: "parse-error",
    keys: ["parse error", "parse xeta", "parse hatası", "there was a problem parsing", "paket oxunmur"],
    title: "Parse error nədir?",
    lead: "Parse error telefonun APK-nı oxuya bilməməsidir. Paket açılmayıb, ona görə quruluş da başlamır.",
    points: ["Fayl tam enməyib və ya adı dəyişəndə korlanıb.", "APK deyil, ZIP və ya başqa fayl ola bilər. Sonluq .apk olmalıdır.", "Android versiyası paketin tələbindən köhnədirsə, bəzi telefonlar bunu da belə göstərir."],
  },
  {
    kind: "xeta",
    slug: "keystore-itdi",
    keys: ["keystore", "keystore itdi", "keystore kayboldu", "lost keystore", "imza acari"],
    title: "Keystore itdi",
    lead: "Keystore tətbiqin imza açarıdır. O itəndə eyni tətbiqin yeni versiyasını köhnəsinin üstünə qura bilmirsən.",
    points: ["Köhnə açar yoxdursa, yeni APK köhnəsinin üstünə qurulmur.", "Yeni açarla imzalasan, telefon bunu başqa tətbiq sayır.", "Açarı və şifrəni itirmə. Ehtiyat nüsxəni ayrı yerdə saxla."],
  },
  {
    kind: "xeta",
    slug: "imza-uygun-deyil",
    keys: ["imza uygun deyil", "signatures do not match", "imzalar uyğun", "imza uyuşmuyor", "package conflicts", "подписи не совпадают"],
    title: "İmzalar uyğun gəlmir",
    lead: "Telefonda duran tətbiqlə yeni APK ayrı açarla imzalanıb. Android bunu eyni tətbiqin davamı saymır.",
    points: ["Köhnə tətbiqi silmədən yeni imzalı APK qurulmur.", "Siləndə içindəki məlumat da gedir.", "Play-dən gələn tətbiqin üstünə başqa açarlı APK qoyulmur."],
  },
  {
    kind: "xeta",
    slug: "paket-adi-xetasi",
    keys: ["paket adi", "package name", "paket adı xətası", "applicationid", "paket adı"],
    title: "Paket adı xətası",
    lead: "Paket adı tətbiqin daimi adıdır. Böyük hərf, boşluq və Azərbaycan hərfi olmaz.",
    points: ["Yalnız kiçik hərf, rəqəm və nöqtə işlənir.", "Boşluq və ə, ş, ç olmaz.", "Ad bir dəfə qoyulur. Sonra dəyişsən, mağaza onu yeni tətbiq sayır."],
  },
  {
    kind: "xeta",
    slug: "apk-fayli-zedelenib",
    keys: ["apk zedelendi", "apk zədələnib", "apk corrupted", "fayl zedelenib", "apk bozuk", "файл поврежд"],
    title: "APK faylı zədələnib",
    lead: "Fayl yolda kəsilib və ya içindən bir hissə silinib. Telefon paketi aça bilmir.",
    points: ["Yenidən endir. Yarımçıq faylı qurma.", "Adı dəyişəndə sonluq .apk qalsın.", "Başqa proqramla açıb saxlamısansa, orijinal faylı götür."],
  },
];

export function searchReply(message) {
  const raw = String(message || "").trim();
  if (!raw || raw.length > 400) return null;
  const text = fold(raw);
  const page = PAGES.find((item) => item.keys.some((key) => text.includes(fold(key))));
  if (!page) return null;
  const lines = [page.title, "", page.lead, "", ...page.points.map((point) => `- ${point}`)];
  if (page.note) lines.push("", page.note);
  lines.push("", `Səhifə: ${SITE}/${page.kind}/${page.slug}`);
  return lines.join("\n");
}
