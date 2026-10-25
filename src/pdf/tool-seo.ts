import type { Lang } from "@/lib/i18n";
import { TOOL_IDS, TOOL_TEXT, type ToolId } from "./tool-text";

export const isToolId = (v: string): v is ToolId => (TOOL_IDS as readonly string[]).includes(v);

type Frame = { suffix: string; trust: string; how: string; steps: [string, string, string]; related: string };

const FRAME: Record<Lang, Frame> = {
  az: {
    suffix: "Nibras PDF — pulsuz, brauzerdə",
    trust: "Pulsuz, hesabsız; fayllar cihazınızdan çıxmır.",
    how: "Necə işləyir",
    steps: ["Faylı seçin və ya bura sürüşdürün.", "Seçimləri tənzimləyin və düyməni basın.", "Nəticəni birbaşa cihazınıza yükləyin."],
    related: "Digər PDF alətləri",
  },
  en: {
    suffix: "Nibras PDF — free, in your browser",
    trust: "Free, no account; your files never leave your device.",
    how: "How it works",
    steps: ["Choose a file or drop it here.", "Adjust the options and press the button.", "Download the result straight to your device."],
    related: "More PDF tools",
  },
  tr: {
    suffix: "Nibras PDF — ücretsiz, tarayıcıda",
    trust: "Ücretsiz, hesapsız; dosyalarınız cihazınızdan çıkmaz.",
    how: "Nasıl çalışır",
    steps: ["Dosyayı seçin veya buraya sürükleyin.", "Seçenekleri ayarlayın ve düğmeye basın.", "Sonucu doğrudan cihazınıza indirin."],
    related: "Diğer PDF araçları",
  },
  ar: {
    suffix: "Nibras PDF — مجاناً في المتصفح",
    trust: "مجاناً وبلا حساب؛ ملفاتك لا تغادر جهازك.",
    how: "كيف يعمل",
    steps: ["اختر الملف أو اسحبه إلى هنا.", "اضبط الخيارات واضغط الزر.", "نزّل النتيجة مباشرة إلى جهازك."],
    related: "المزيد من أدوات PDF",
  },
  ru: {
    suffix: "Nibras PDF — бесплатно, в браузере",
    trust: "Бесплатно, без аккаунта; файлы не покидают ваше устройство.",
    how: "Как это работает",
    steps: ["Выберите файл или перетащите его сюда.", "Настройте параметры и нажмите кнопку.", "Скачайте результат прямо на устройство."],
    related: "Другие инструменты PDF",
  },
};

const FAQ_TITLE: Record<Lang, string> = {
  az: "Suallar",
  en: "Questions",
  tr: "Sorular",
  ar: "أسئلة",
  ru: "Вопросы",
};

const INTENT: Partial<Record<ToolId, Record<Lang, { title: string; h1: string; description: string }>>> = {
  merge: {
    az: { title: "PDF birləşdir — pulsuz", h1: "PDF birləşdir", description: "Bir neçə PDF-i bir faylda birləşdir" },
    en: { title: "Merge PDF — free", h1: "Merge PDF", description: "Join several PDFs into one file" },
    tr: { title: "PDF birleştir — ücretsiz", h1: "PDF birleştir", description: "Birkaç PDF dosyasını tek dosyada birleştir" },
    ar: { title: "دمج PDF — مجاناً", h1: "دمج PDF", description: "اجمع عدة ملفات PDF في ملف واحد" },
    ru: { title: "Объединить PDF — бесплатно", h1: "Объединить PDF", description: "Соберите несколько PDF в один файл" },
  },
  compress: {
    az: { title: "PDF sıx — pulsuz", h1: "PDF sıx", description: "PDF faylın ölçüsünü kiçilt" },
    en: { title: "Compress PDF — free", h1: "Compress PDF", description: "Make a PDF file smaller" },
    tr: { title: "PDF sıkıştır — ücretsiz", h1: "PDF sıkıştır", description: "PDF dosyasının boyutunu küçült" },
    ar: { title: "ضغط PDF — مجاناً", h1: "ضغط PDF", description: "صغّر حجم ملف PDF" },
    ru: { title: "Сжать PDF — бесплатно", h1: "Сжать PDF", description: "Уменьшите размер PDF-файла" },
  },
  split: {
    az: { title: "PDF böl — pulsuz", h1: "PDF böl", description: "PDF səhifələrini ayrı fayllara böl" },
    en: { title: "Split PDF — free", h1: "Split PDF", description: "Split PDF pages into separate files" },
    tr: { title: "PDF böl — ücretsiz", h1: "PDF böl", description: "PDF sayfalarını ayrı dosyalara böl" },
    ar: { title: "تقسيم PDF — مجاناً", h1: "تقسيم PDF", description: "قسّم صفحات PDF إلى ملفات منفصلة" },
    ru: { title: "Разделить PDF — бесплатно", h1: "Разделить PDF", description: "Разделите страницы PDF на отдельные файлы" },
  },
  "image-pdf": {
    az: { title: "JPG-dən PDF — pulsuz", h1: "JPG-dən PDF", description: "JPG və PNG şəkilləri bir PDF-ə çevir" },
    en: { title: "JPG to PDF — free", h1: "JPG to PDF", description: "Turn JPG and PNG pictures into one PDF" },
    tr: { title: "JPG'den PDF — ücretsiz", h1: "JPG'den PDF", description: "JPG ve PNG resimleri tek PDF yap" },
    ar: { title: "من JPG إلى PDF — مجاناً", h1: "من JPG إلى PDF", description: "حوّل صور JPG وPNG إلى ملف PDF واحد" },
    ru: { title: "JPG в PDF — бесплатно", h1: "JPG в PDF", description: "Соберите JPG и PNG в один PDF" },
  },
  "pdf-image": {
    az: { title: "PDF-dən şəkil — pulsuz", h1: "PDF-dən şəkil", description: "PDF səhifələrini JPG şəkil kimi saxla" },
    en: { title: "PDF to image — free", h1: "PDF to image", description: "Save PDF pages as JPG pictures" },
    tr: { title: "PDF'den resim — ücretsiz", h1: "PDF'den resim", description: "PDF sayfalarını JPG resim olarak kaydet" },
    ar: { title: "من PDF إلى صورة — مجاناً", h1: "من PDF إلى صورة", description: "احفظ صفحات PDF كصور JPG" },
    ru: { title: "PDF в картинку — бесплатно", h1: "PDF в картинку", description: "Сохраните страницы PDF как JPG" },
  },
  sign: {
    az: { title: "PDF imzala — pulsuz", h1: "PDF imzala", description: "PDF-ə elektron imza qoy" },
    en: { title: "Sign PDF — free", h1: "Sign PDF", description: "Place an electronic signature on a PDF" },
    tr: { title: "PDF imzala — ücretsiz", h1: "PDF imzala", description: "PDF'e elektronik imza koy" },
    ar: { title: "توقيع PDF — مجاناً", h1: "توقيع PDF", description: "ضع توقيعاً إلكترونياً على PDF" },
    ru: { title: "Подписать PDF — бесплатно", h1: "Подписать PDF", description: "Поставьте электронную подпись на PDF" },
  },
  "word-pdf": {
    az: { title: "Word-dan PDF — pulsuz", h1: "Word-dan PDF", description: "DOCX faylını PDF sənədinə çevir" },
    en: { title: "Word to PDF — free", h1: "Word to PDF", description: "Turn a DOCX file into a PDF" },
    tr: { title: "Word'den PDF — ücretsiz", h1: "Word'den PDF", description: "DOCX dosyasını PDF belgesine çevir" },
    ar: { title: "من Word إلى PDF — مجاناً", h1: "من Word إلى PDF", description: "حوّل ملف DOCX إلى PDF" },
    ru: { title: "Word в PDF — бесплатно", h1: "Word в PDF", description: "Превратите файл DOCX в PDF" },
  },
  "page-numbers": {
    az: { title: "PDF-ə səhifə nömrəsi qoy — pulsuz", h1: "PDF-ə səhifə nömrəsi qoy", description: "Hazır PDF-ə nömrə əlavə et: başlanğıc səhifə, ilk rəqəm və yer seçilir" },
    en: { title: "Add page numbers to PDF — free", h1: "Add page numbers to a PDF", description: "Number an existing PDF: choose the first page, the start number and the position" },
    tr: { title: "PDF'e sayfa numarası ekle — ücretsiz", h1: "PDF'e sayfa numarası ekle", description: "Hazır PDF'e numara ekle: başlangıç sayfası, ilk sayı ve konum seçilir" },
    ar: { title: "ترقيم صفحات PDF — مجاناً", h1: "ترقيم صفحات PDF", description: "رقّم ملف PDF جاهزاً: اختر صفحة البداية والرقم الأول والموضع" },
    ru: { title: "Пронумеровать страницы PDF — бесплатно", h1: "Номера страниц в PDF", description: "Пронумеруйте готовый PDF: выберите первую страницу, начальное число и место" },
  },
  rotate: {
    az: { title: "PDF döndər — pulsuz", h1: "PDF döndər", description: "PDF səhifəsini sola və ya sağa döndər" },
    en: { title: "Rotate PDF — free", h1: "Rotate PDF", description: "Turn a PDF page left or right" },
    tr: { title: "PDF döndür — ücretsiz", h1: "PDF döndür", description: "PDF sayfasını sola veya sağa döndür" },
    ar: { title: "تدوير PDF — مجاناً", h1: "تدوير PDF", description: "أدر صفحة PDF يميناً أو يساراً" },
    ru: { title: "Повернуть PDF — бесплатно", h1: "Повернуть PDF", description: "Поверните страницу PDF влево или вправо" },
  },
  protect: {
    az: { title: "PDF parol — pulsuz", h1: "PDF parol", description: "PDF-ə parol qoy" },
    en: { title: "Password protect PDF — free", h1: "Password protect a PDF", description: "Put a password on a PDF" },
    tr: { title: "PDF şifre — ücretsiz", h1: "PDF şifre", description: "PDF'e şifre koy" },
    ar: { title: "كلمة مرور PDF — مجاناً", h1: "كلمة مرور PDF", description: "ضع كلمة مرور على PDF" },
    ru: { title: "Пароль на PDF — бесплатно", h1: "Пароль на PDF", description: "Поставьте пароль на PDF" },
  },
  watermark: {
    az: { title: "PDF su nişanı — pulsuz", h1: "PDF su nişanı", description: "PDF səhifəsinə yazı əlavə et" },
    en: { title: "PDF watermark — free", h1: "PDF watermark", description: "Add text on a PDF page" },
    tr: { title: "PDF filigran — ücretsiz", h1: "PDF filigran", description: "PDF sayfasına yazı ekle" },
    ar: { title: "علامة مائية لـ PDF — مجاناً", h1: "علامة مائية لـ PDF", description: "أضف كتابة على صفحة PDF" },
    ru: { title: "Водяной знак PDF — бесплатно", h1: "Водяной знак PDF", description: "Добавьте текст на страницу PDF" },
  },
  "pdf-word": {
    az: { title: "PDF-dən Word — pulsuz", h1: "PDF-dən Word", description: "PDF-i redaktə olunan Word faylına çevir" },
    en: { title: "PDF to Word — free", h1: "PDF to Word", description: "Turn a PDF into an editable Word file" },
    tr: { title: "PDF'den Word — ücretsiz", h1: "PDF'den Word", description: "PDF'i düzenlenebilir Word dosyasına çevir" },
    ar: { title: "من PDF إلى Word — مجاناً", h1: "من PDF إلى Word", description: "حوّل PDF إلى ملف Word قابل للتعديل" },
    ru: { title: "PDF в Word — бесплатно", h1: "PDF в Word", description: "Превратите PDF в редактируемый файл Word" },
  },
  "pdf-ocr": {
    az: { title: "PDF-dən mətn — pulsuz", h1: "PDF-dən mətn", description: "PDF səhifəsindəki yazını mətn kimi çıxar" },
    en: { title: "PDF to text — free", h1: "PDF to text", description: "Pull the writing on a PDF page out as text" },
    tr: { title: "PDF'den metin — ücretsiz", h1: "PDF'den metin", description: "PDF sayfasındaki yazıyı metin olarak çıkar" },
    ar: { title: "من PDF إلى نص — مجاناً", h1: "من PDF إلى نص", description: "أخرج الكتابة في صفحة PDF كنص" },
    ru: { title: "PDF в текст — бесплатно", h1: "PDF в текст", description: "Достаньте текст со страницы PDF" },
  },
};

const FAQS: Partial<Record<ToolId, Record<Lang, { q: string; a: string }[]>>> = {
  merge: {
    az: [
      { q: "PDF birləşdirmək pulsuzdur?", a: "Bəli. Hesab açılmır və ödəniş yoxdur." },
      { q: "Neçə PDF birləşdirmək olur?", a: "Bir neçə PDF-i seçib bir faylda toplamaq olur." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Birləşdirmə bu brauzerdə gedir, fayl yüklənmir." },
      { q: "Sıra necə olur?", a: "Fayllar seçdiyiniz sıra ilə bir sənədə düşür." },
    ],
    en: [
      { q: "Is merging a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "How many PDFs can I merge?", a: "You can pick several PDFs and join them into one file." },
      { q: "Does the file go to a server?", a: "No. Merging runs in this browser. The file is not uploaded." },
      { q: "What order are the pages?", a: "The files stay in the order you chose." },
    ],
    tr: [
      { q: "PDF birleştirmek ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Kaç PDF birleşir?", a: "Birkaç PDF seçilip tek dosyada toplanır." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Birleştirme bu tarayıcıda olur, dosya yüklenmez." },
      { q: "Sıra nasıl olur?", a: "Dosyalar seçtiğiniz sırayla tek belgeye girer." },
    ],
    ar: [
      { q: "هل دمج PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "كم ملفاً يمكن دمجه؟", a: "يمكن اختيار عدة ملفات PDF وجمعها في ملف واحد." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. الدمج يجري في هذا المتصفح ولا يُرفع الملف." },
      { q: "كيف يكون الترتيب؟", a: "تبقى الملفات بالترتيب الذي اخترته." },
    ],
    ru: [
      { q: "Объединить PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Сколько PDF можно объединить?", a: "Можно выбрать несколько PDF и собрать их в один файл." },
      { q: "Файл уходит на сервер?", a: "Нет. Объединение идёт в этом браузере, файл не загружается." },
      { q: "Какой порядок страниц?", a: "Файлы остаются в том порядке, который вы выбрали." },
    ],
  },
  compress: {
    az: [
      { q: "PDF sıxmaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Mətn pozulur?", a: "Ölçü kiçilir. Çox sıxanda şəkil bir az solğunlaşa bilər." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Sıxma bu brauzerdə gedir." },
      { q: "Nəticəni necə götürüm?", a: "Düymədən sonra kiçilmiş PDF birbaşa cihaza düşür." },
    ],
    en: [
      { q: "Is compressing a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Does the text break?", a: "The file gets smaller. A strong compress can make a picture a little softer." },
      { q: "Does the file go to a server?", a: "No. Compressing runs in this browser." },
      { q: "How do I get the result?", a: "After the button, the smaller PDF downloads to your device." },
    ],
    tr: [
      { q: "PDF sıkıştırmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Metin bozulur mu?", a: "Boyut küçülür. Çok sıkınca resim biraz yumuşayabilir." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Sıkıştırma bu tarayıcıda olur." },
      { q: "Sonucu nasıl alırım?", a: "Düğmeden sonra küçülen PDF doğrudan cihaza iner." },
    ],
    ar: [
      { q: "هل ضغط PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "هل يتلف النص؟", a: "يصغر الحجم. الضغط الشديد قد يجعل الصورة ألين قليلاً." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. الضغط يجري في هذا المتصفح." },
      { q: "كيف آخذ النتيجة؟", a: "بعد الزر ينزل ملف PDF الأصغر مباشرة إلى الجهاز." },
    ],
    ru: [
      { q: "Сжать PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Текст портится?", a: "Размер уменьшается. При сильном сжатии картинка может стать чуть мягче." },
      { q: "Файл уходит на сервер?", a: "Нет. Сжатие идёт в этом браузере." },
      { q: "Как забрать результат?", a: "После кнопки меньший PDF сразу скачивается на устройство." },
    ],
  },
  split: {
    az: [
      { q: "PDF bölmək pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Hər səhifə ayrı fayl olur?", a: "Bəli. Seçilən səhifələr ayrı PDF kimi düşür." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Bölmə bu brauzerdə gedir." },
      { q: "Əsas PDF silinir?", a: "Xeyr. Orijinal fayl cihazda qalır, yeni fayllar əlavə yüklənir." },
    ],
    en: [
      { q: "Is splitting a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Does each page become its own file?", a: "Yes. The pages you pick come out as separate PDFs." },
      { q: "Does the file go to a server?", a: "No. Splitting runs in this browser." },
      { q: "Is the original PDF deleted?", a: "No. It stays on your device. The new files are extra downloads." },
    ],
    tr: [
      { q: "PDF bölmek ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Her sayfa ayrı dosya olur mu?", a: "Evet. Seçilen sayfalar ayrı PDF olarak iner." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Bölme bu tarayıcıda olur." },
      { q: "Asıl PDF silinir mi?", a: "Hayır. Orijinal dosya cihazda kalır, yeni dosyalar ayrıca iner." },
    ],
    ar: [
      { q: "هل تقسيم PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "هل تصبح كل صفحة ملفاً؟", a: "نعم. الصفحات التي تختارها تنزل كملفات PDF منفصلة." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التقسيم يجري في هذا المتصفح." },
      { q: "هل يُحذف ملف PDF الأصلي؟", a: "لا. يبقى على الجهاز، والملفات الجديدة تنزيلات إضافية." },
    ],
    ru: [
      { q: "Разделить PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Каждая страница — отдельный файл?", a: "Да. Выбранные страницы скачиваются отдельными PDF." },
      { q: "Файл уходит на сервер?", a: "Нет. Разделение идёт в этом браузере." },
      { q: "Исходный PDF удаляется?", a: "Нет. Он остаётся на устройстве, новые файлы скачиваются отдельно." },
    ],
  },
  "image-pdf": {
    az: [
      { q: "JPG-dən PDF etmək pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "PNG də olur?", a: "Bəli. JPG və PNG şəkilləri bir PDF-ə düşür." },
      { q: "Şəkil serverə gedir?", a: "Xeyr. Çevirmə bu brauzerdə gedir." },
      { q: "Bir neçə şəkil bir PDF olur?", a: "Bəli. Seçdiyiniz sıra ilə bir sənədə yığılır." },
    ],
    en: [
      { q: "Is JPG to PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Does PNG work too?", a: "Yes. JPG and PNG pictures go into one PDF." },
      { q: "Does the picture go to a server?", a: "No. The conversion runs in this browser." },
      { q: "Can several pictures become one PDF?", a: "Yes. They are placed in the order you chose." },
    ],
    tr: [
      { q: "JPG'den PDF yapmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "PNG de olur mu?", a: "Evet. JPG ve PNG resimleri tek PDF'e girer." },
      { q: "Resim sunucuya gider mi?", a: "Hayır. Çevirme bu tarayıcıda olur." },
      { q: "Birkaç resim tek PDF olur mu?", a: "Evet. Seçtiğiniz sırayla tek belgeye girer." },
    ],
    ar: [
      { q: "هل التحويل من JPG إلى PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "هل يعمل PNG أيضاً؟", a: "نعم. صور JPG وPNG تدخل في ملف PDF واحد." },
      { q: "هل تذهب الصورة إلى خادم؟", a: "لا. التحويل يجري في هذا المتصفح." },
      { q: "هل تصبح عدة صور ملفاً واحداً؟", a: "نعم. تُرتَّب بالترتيب الذي اخترته." },
    ],
    ru: [
      { q: "JPG в PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "PNG тоже подходит?", a: "Да. JPG и PNG собираются в один PDF." },
      { q: "Картинка уходит на сервер?", a: "Нет. Преобразование идёт в этом браузере." },
      { q: "Несколько картинок — один PDF?", a: "Да. Они ложатся в выбранном вами порядке." },
    ],
  },
  "pdf-image": {
    az: [
      { q: "PDF-dən şəkil çıxarmaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Hansı formatda olur?", a: "Səhifələr JPG şəkil kimi yüklənir." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Çevirmə bu brauzerdə gedir." },
      { q: "Bütün səhifələr çıxır?", a: "Hər səhifə ayrı şəkil olur." },
    ],
    en: [
      { q: "Is PDF to image free?", a: "Yes. There is no account and no payment." },
      { q: "Which format is the result?", a: "The pages download as JPG pictures." },
      { q: "Does the file go to a server?", a: "No. The conversion runs in this browser." },
      { q: "Do all pages come out?", a: "Each page becomes its own picture." },
    ],
    tr: [
      { q: "PDF'den resim çıkarmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Sonuç hangi formatta?", a: "Sayfalar JPG resim olarak iner." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Çevirme bu tarayıcıda olur." },
      { q: "Bütün sayfalar çıkar mı?", a: "Her sayfa ayrı resim olur." },
    ],
    ar: [
      { q: "هل التحويل من PDF إلى صورة مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "ما صيغة النتيجة؟", a: "تنزل الصفحات كصور JPG." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التحويل يجري في هذا المتصفح." },
      { q: "هل تخرج كل الصفحات؟", a: "كل صفحة تصبح صورة مستقلة." },
    ],
    ru: [
      { q: "PDF в картинку бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "В каком формате результат?", a: "Страницы скачиваются как JPG." },
      { q: "Файл уходит на сервер?", a: "Нет. Преобразование идёт в этом браузере." },
      { q: "Выходят все страницы?", a: "Каждая страница становится отдельной картинкой." },
    ],
  },
  sign: {
    az: [
      { q: "PDF imzalamaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "İmza hara qoyulur?", a: "İmzanı səhifənin üstündə istədiyiniz yerə qoyursunuz." },
      { q: "Fayl serverə gedir?", a: "Xeyr. İmza bu brauzerdə əlavə olunur." },
      { q: "Bu rəsmi möhürdürmü?", a: "Xeyr. Bu, sənədin üstünə qoyulan şəkil imzadır, dövlət e-imzası deyil." },
    ],
    en: [
      { q: "Is signing a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Where does the signature go?", a: "You place it where you want on the page." },
      { q: "Does the file go to a server?", a: "No. The signature is added in this browser." },
      { q: "Is this an official seal?", a: "No. It is a signature drawn on the page, not a state e-signature." },
    ],
    tr: [
      { q: "PDF imzalamak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "İmza nereye konur?", a: "İmzayı sayfada istediğiniz yere koyarsınız." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. İmza bu tarayıcıda eklenir." },
      { q: "Bu resmi mühür mü?", a: "Hayır. Bu, sayfanın üzerine konan imzadır, devlet e-imzası değildir." },
    ],
    ar: [
      { q: "هل توقيع PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "أين يوضع التوقيع؟", a: "تضعه حيث تريد على الصفحة." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. يُضاف التوقيع في هذا المتصفح." },
      { q: "هل هذا ختم رسمي؟", a: "لا. هذا توقيع يُرسم على الصفحة، وليس توقيعاً حكومياً." },
    ],
    ru: [
      { q: "Подписать PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Куда ставится подпись?", a: "Вы ставите её в нужное место на странице." },
      { q: "Файл уходит на сервер?", a: "Нет. Подпись добавляется в этом браузере." },
      { q: "Это официальная печать?", a: "Нет. Это подпись на странице, а не государственная электронная подпись." },
    ],
  },
  "word-pdf": {
    az: [
      { q: "Word-dan PDF etmək pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Hansı fayl açılır?", a: "DOCX faylı açılır və PDF olur." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Çevirmə bu brauzerdə gedir." },
      { q: "Word-dakı şəkillər qalır?", a: "Sadə mətn və şəkillər PDF-ə keçir. Çox mürəkkəb düzüm bir az fərqli görünə bilər." },
    ],
    en: [
      { q: "Is Word to PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Which file opens?", a: "A DOCX file opens and becomes a PDF." },
      { q: "Does the file go to a server?", a: "No. The conversion runs in this browser." },
      { q: "Do the pictures stay?", a: "Plain text and pictures move into the PDF. A very complex layout can look a little different." },
    ],
    tr: [
      { q: "Word'den PDF yapmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Hangi dosya açılır?", a: "DOCX dosyası açılır ve PDF olur." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Çevirme bu tarayıcıda olur." },
      { q: "Word'deki resimler kalır mı?", a: "Düz metin ve resimler PDF'e geçer. Çok karmaşık bir düzen biraz farklı görünebilir." },
    ],
    ar: [
      { q: "هل التحويل من Word إلى PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "أي ملف يُفتح؟", a: "يُفتح ملف DOCX ويصبح PDF." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التحويل يجري في هذا المتصفح." },
      { q: "هل تبقى الصور؟", a: "النص البسيط والصور ينتقلان إلى PDF. التنسيق المعقد جداً قد يبدو مختلفاً قليلاً." },
    ],
    ru: [
      { q: "Word в PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Какой файл открывается?", a: "Открывается DOCX и становится PDF." },
      { q: "Файл уходит на сервер?", a: "Нет. Преобразование идёт в этом браузере." },
      { q: "Картинки из Word остаются?", a: "Простой текст и картинки переходят в PDF. Очень сложная вёрстка может выглядеть чуть иначе." },
    ],
  },
  rotate: {
    az: [
      { q: "PDF döndərmək pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Hansı tərəfə döndərilir?", a: "Səhifə sola və ya sağa döndərilir." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Döndərmə bu brauzerdə gedir." },
      { q: "Əsas PDF silinir?", a: "Xeyr. Yeni fayl əlavə yüklənir." },
    ],
    en: [
      { q: "Is rotating a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Which way does it turn?", a: "The page turns left or right." },
      { q: "Does the file go to a server?", a: "No. Rotating runs in this browser." },
      { q: "Is the original PDF deleted?", a: "No. The new file is an extra download." },
    ],
    tr: [
      { q: "PDF döndürmek ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Hangi yöne döner?", a: "Sayfa sola veya sağa döner." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Döndürme bu tarayıcıda olur." },
      { q: "Asıl PDF silinir mi?", a: "Hayır. Yeni dosya ayrıca iner." },
    ],
    ar: [
      { q: "هل تدوير PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "إلى أي جهة يدور؟", a: "تدور الصفحة يميناً أو يساراً." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التدوير يجري في هذا المتصفح." },
      { q: "هل يُحذف الملف الأصلي؟", a: "لا. الملف الجديد تنزيل إضافي." },
    ],
    ru: [
      { q: "Повернуть PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "В какую сторону поворот?", a: "Страница поворачивается влево или вправо." },
      { q: "Файл уходит на сервер?", a: "Нет. Поворот идёт в этом браузере." },
      { q: "Исходный PDF удаляется?", a: "Нет. Новый файл скачивается отдельно." },
    ],
  },
  protect: {
    az: [
      { q: "PDF-ə parol qoymaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Parolu kim bilir?", a: "Yalnız siz. Parol serverə getmir." },
      { q: "Fayl açılmırsa?", a: "Parol unudulsa, bu səhifə onu bərpa etmir." },
      { q: "Nəticə harada olur?", a: "Parollu PDF birbaşa cihaza düşür." },
    ],
    en: [
      { q: "Is a PDF password free?", a: "Yes. There is no account and no payment." },
      { q: "Who knows the password?", a: "Only you. The password does not go to a server." },
      { q: "What if the file will not open?", a: "If the password is forgotten, this page cannot recover it." },
      { q: "Where is the result?", a: "The locked PDF downloads straight to your device." },
    ],
    tr: [
      { q: "PDF'e şifre koymak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Şifreyi kim bilir?", a: "Yalnız siz. Şifre sunucuya gitmez." },
      { q: "Dosya açılmazsa?", a: "Şifre unutulursa bu sayfa onu geri getirmez." },
      { q: "Sonuç nerede olur?", a: "Şifreli PDF doğrudan cihaza iner." },
    ],
    ar: [
      { q: "هل وضع كلمة مرور على PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "من يعرف كلمة المرور؟", a: "أنت فقط. لا تذهب كلمة المرور إلى خادم." },
      { q: "ماذا إذا لم يُفتح الملف؟", a: "إذا نُسيت كلمة المرور فهذه الصفحة لا تستعيدها." },
      { q: "أين النتيجة؟", a: "ينزل ملف PDF المقفول مباشرة إلى الجهاز." },
    ],
    ru: [
      { q: "Поставить пароль на PDF бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Кто знает пароль?", a: "Только вы. Пароль не уходит на сервер." },
      { q: "Если файл не открывается?", a: "Если пароль забыт, эта страница его не восстановит." },
      { q: "Где результат?", a: "PDF с паролем сразу скачивается на устройство." },
    ],
  },
  "page-numbers": {
    az: [
      { q: "Hazır PDF-ə nömrə qoymaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Üz qabığını nömrəsiz saxlamaq olar?", a: "Bəli. «Hansı səhifədən» xanasına 2 yazın. Nömrə 2-ci səhifədən başlayır." },
      { q: "Nömrə 1-dən başlamalıdır?", a: "Xeyr. İlk rəqəmi özünüz seçirsiniz, məsələn 5." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Nömrələr bu brauzerdə əlavə olunur." },
    ],
    en: [
      { q: "Is numbering a PDF free?", a: "Yes. There is no account and no payment." },
      { q: "Can the cover stay unnumbered?", a: "Yes. Set «Start on page» to 2. Numbers begin on page 2." },
      { q: "Must numbers start at 1?", a: "No. You choose the first number, for example 5." },
      { q: "Does the file go to a server?", a: "No. Numbers are added in this browser." },
    ],
    tr: [
      { q: "PDF numaralandırma ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Kapak numarasız kalabilir mi?", a: "Evet. «Başlangıç sayfası»na 2 yazın." },
      { q: "Numara 1'den mi başlamalı?", a: "Hayır. İlk sayıyı siz seçersiniz, örneğin 5." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Numaralar bu tarayıcıda eklenir." },
    ],
    ar: [
      { q: "هل ترقيم PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "هل يمكن ترك الغلاف بلا رقم؟", a: "نعم. اكتب 2 في «البدء من الصفحة»." },
      { q: "هل يجب أن يبدأ الترقيم من 1؟", a: "لا. أنت تختار الرقم الأول، مثل 5." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. تُضاف الأرقام في هذا المتصفح." },
    ],
    ru: [
      { q: "Нумерация PDF бесплатна?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Можно не нумеровать обложку?", a: "Да. Укажите «Начать со страницы» 2." },
      { q: "Номера должны начинаться с 1?", a: "Нет. Первое число выбираете вы, например 5." },
      { q: "Файл уходит на сервер?", a: "Нет. Номера добавляются в этом браузере." },
    ],
  },
  watermark: {
    az: [
      { q: "Su nişanı pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Nə yazılır?", a: "Səhifənin üstünə öz yazınız qoyulur." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Nişan bu brauzerdə əlavə olunur." },
      { q: "Əsas PDF silinir?", a: "Xeyr. Nişanlı fayl ayrı yüklənir." },
    ],
    en: [
      { q: "Is a watermark free?", a: "Yes. There is no account and no payment." },
      { q: "What text is added?", a: "Your own text is placed on the page." },
      { q: "Does the file go to a server?", a: "No. The mark is added in this browser." },
      { q: "Is the original PDF deleted?", a: "No. The marked file downloads separately." },
    ],
    tr: [
      { q: "Filigran ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Ne yazılır?", a: "Sayfanın üstüne kendi yazınız konur." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. İşaret bu tarayıcıda eklenir." },
      { q: "Asıl PDF silinir mi?", a: "Hayır. İşaretli dosya ayrıca iner." },
    ],
    ar: [
      { q: "هل العلامة المائية مجانية؟", a: "نعم. لا حساب ولا دفع." },
      { q: "ماذا يُكتب؟", a: "تُوضع كتابتك على الصفحة." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. تُضاف العلامة في هذا المتصفح." },
      { q: "هل يُحذف الملف الأصلي؟", a: "لا. ينزل الملف المعلَّم على حدة." },
    ],
    ru: [
      { q: "Водяной знак бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Какой текст ставится?", a: "На страницу кладётся ваш текст." },
      { q: "Файл уходит на сервер?", a: "Нет. Знак добавляется в этом браузере." },
      { q: "Исходный PDF удаляется?", a: "Нет. Файл со знаком скачивается отдельно." },
    ],
  },
  "pdf-word": {
    az: [
      { q: "PDF-dən Word etmək pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Nəticə hansı fayldır?", a: "Redaktə olunan Word faylıdır." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Çevirmə bu brauzerdə gedir." },
      { q: "Şəkillər qalır?", a: "Sadə mətn keçir. Skan olunmuş səhifədə yazı şəkil kimi qala bilər." },
    ],
    en: [
      { q: "Is PDF to Word free?", a: "Yes. There is no account and no payment." },
      { q: "What file is the result?", a: "An editable Word file." },
      { q: "Does the file go to a server?", a: "No. The conversion runs in this browser." },
      { q: "Do pictures stay?", a: "Plain text moves over. On a scanned page the writing can stay as a picture." },
    ],
    tr: [
      { q: "PDF'den Word yapmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Sonuç hangi dosya?", a: "Düzenlenebilir bir Word dosyasıdır." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Çevirme bu tarayıcıda olur." },
      { q: "Resimler kalır mı?", a: "Düz metin geçer. Taranmış sayfada yazı resim olarak kalabilir." },
    ],
    ar: [
      { q: "هل التحويل من PDF إلى Word مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "ما ملف النتيجة؟", a: "ملف Word قابل للتعديل." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التحويل يجري في هذا المتصفح." },
      { q: "هل تبقى الصور؟", a: "النص البسيط ينتقل. في الصفحة الممسوحة قد تبقى الكتابة صورة." },
    ],
    ru: [
      { q: "PDF в Word бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Какой файл получается?", a: "Редактируемый файл Word." },
      { q: "Файл уходит на сервер?", a: "Нет. Преобразование идёт в этом браузере." },
      { q: "Картинки остаются?", a: "Простой текст переходит. На скане текст может остаться картинкой." },
    ],
  },
  "pdf-ocr": {
    az: [
      { q: "PDF-dən mətn çıxarmaq pulsuzdur?", a: "Bəli. Hesab və ödəniş yoxdur." },
      { q: "Mətn hara düşür?", a: "Səhifədəki yazı mətn kimi çıxır, kopyalamaq olur." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Tanıma bu cihazda gedir." },
      { q: "Skan olunmuş səhifə olur?", a: "Bəli. Yazı şəkil kimi olsa belə, tanınan hissə mətn olur." },
    ],
    en: [
      { q: "Is PDF to text free?", a: "Yes. There is no account and no payment." },
      { q: "Where does the text go?", a: "The writing on the page comes out as text you can copy." },
      { q: "Does the file go to a server?", a: "No. Reading runs on this device." },
      { q: "Does a scanned page work?", a: "Yes. Even when the writing is a picture, the recognized part becomes text." },
    ],
    tr: [
      { q: "PDF'den metin çıkarmak ücretsiz mi?", a: "Evet. Hesap ve ödeme yoktur." },
      { q: "Metin nereye düşer?", a: "Sayfadaki yazı kopyalanabilir metin olur." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Tanıma bu cihazda olur." },
      { q: "Taranmış sayfa olur mu?", a: "Evet. Yazı resim olsa bile tanınan kısım metin olur." },
    ],
    ar: [
      { q: "هل إخراج النص من PDF مجاني؟", a: "نعم. لا حساب ولا دفع." },
      { q: "أين يذهب النص؟", a: "تخرج الكتابة في الصفحة نصاً يمكن نسخه." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. التعرف يجري على هذا الجهاز." },
      { q: "هل تعمل الصفحة الممسوحة؟", a: "نعم. حتى إذا كانت الكتابة صورة، يصبح الجزء المعروف نصاً." },
    ],
    ru: [
      { q: "PDF в текст бесплатно?", a: "Да. Аккаунта и оплаты нет." },
      { q: "Куда попадает текст?", a: "Текст со страницы можно скопировать." },
      { q: "Файл уходит на сервер?", a: "Нет. Распознавание идёт на этом устройстве." },
      { q: "Скан страницы подходит?", a: "Да. Даже если буквы — картинка, распознанная часть становится текстом." },
    ],
  },
};

export function toolSeo(lang: Lang, id: ToolId) {
  const tt = TOOL_TEXT[lang][id];
  const f = FRAME[lang];
  const intent = INTENT[id]?.[lang];
  const desc = (intent?.description ?? tt.description).replace(/[.\s]+$/, "");
  return {
    title: intent?.title ?? `${tt.title} — ${f.suffix}`,
    description: `${desc}. ${f.trust}`,
    keywords: intent ? `${intent.h1}, ${tt.title}, PDF, Nibras PDF` : `${tt.title}, PDF, Nibras PDF`,
    h1: intent?.h1 ?? tt.title,
    lead: `${desc}. ${f.trust}`,
    how: f.how,
    steps: f.steps,
    related: f.related,
    faqTitle: FAQ_TITLE[lang],
    faqs: FAQS[id]?.[lang] ?? [],
  };
}

export const toolPagePath = (id: ToolId) => `/pdf/${id}`;
