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
  "unlock": {
    az: { title: "PDF parolunu aç — pulsuz", h1: "PDF parolunu aç", description: "Parolu bilirsinizsə, PDF-in parolsuz nüsxəsini yükləyin" },
    en: { title: "Unlock PDF — free", h1: "Unlock a PDF", description: "If you know the password, download a copy without it" },
    tr: { title: "PDF parolasını kaldır — ücretsiz", h1: "PDF parolasını kaldır", description: "Parolayı biliyorsanız parolasız kopyayı indirin" },
    ar: { title: "إزالة كلمة مرور PDF — مجاناً", h1: "إزالة كلمة مرور PDF", description: "إن كنت تعرف كلمة المرور فنزّل نسخة بدونها" },
    ru: { title: "Снять пароль с PDF — бесплатно", h1: "Снять пароль с PDF", description: "Если вы знаете пароль, скачайте копию без него" },
  },
  "crop": {
    az: { title: "PDF kəs — pulsuz", h1: "PDF-i kəs", description: "Səhifənin yuxarı, aşağı, sol və sağ kənarını mm ilə kəs" },
    en: { title: "Crop PDF — free", h1: "Crop PDF pages", description: "Trim the top, bottom, left and right edges in mm" },
    tr: { title: "PDF kırp — ücretsiz", h1: "PDF kırp", description: "Üst, alt, sol ve sağ kenarı mm ile kırpın" },
    ar: { title: "قص PDF — مجاناً", h1: "قص صفحات PDF", description: "قصّ الحافة العلوية والسفلية واليسرى واليمنى بالمليمتر" },
    ru: { title: "Обрезать PDF — бесплатно", h1: "Обрезать страницы PDF", description: "Обрежьте верх, низ, левый и правый край в мм" },
  },
  "grayscale": {
    az: { title: "PDF-i ağ-qara et — pulsuz", h1: "PDF-i boz et", description: "Rəngli PDF-i boz çalarlara çevir, çap üçün" },
    en: { title: "Grayscale PDF — free", h1: "Make a PDF grayscale", description: "Turn a color PDF into shades of gray for printing" },
    tr: { title: "PDF'i siyah beyaz yap — ücretsiz", h1: "PDF'i gri yap", description: "Renkli PDF'i baskı için gri tonlara çevirin" },
    ar: { title: "تحويل PDF إلى أبيض وأسود — مجاناً", h1: "PDF بالرمادي", description: "حوّل PDF الملوّن إلى درجات الرمادي للطباعة" },
    ru: { title: "PDF в чёрно-белый — бесплатно", h1: "PDF в оттенки серого", description: "Переведите цветной PDF в оттенки серого для печати" },
  },
  "pdf-ppt": {
    az: { title: "PDF-dən PowerPoint — pulsuz", h1: "PDF-i PPTX-ə çevir", description: "Hər PDF səhifəsi ayrıca PowerPoint slaydı olur; fayl serverə getmir" },
    en: { title: "PDF to PowerPoint — free", h1: "Convert PDF to PPTX", description: "Each PDF page becomes a PowerPoint slide; the file never leaves your browser" },
    tr: { title: "PDF'ten PowerPoint — ücretsiz", h1: "PDF'yi PPTX'e dönüştür", description: "Her PDF sayfası ayrı bir PowerPoint slaytı olur; dosya sunucuya gitmez" },
    ar: { title: "من PDF إلى PowerPoint — مجاناً", h1: "تحويل PDF إلى PPTX", description: "كل صفحة PDF تصبح شريحة PowerPoint؛ لا يغادر الملف متصفحك" },
    ru: { title: "PDF в PowerPoint — бесплатно", h1: "Конвертировать PDF в PPTX", description: "Каждая страница PDF становится слайдом PowerPoint; файл не уходит на сервер" },
  },
  "pdf-excel": {
    az: { title: "PDF-dən Excel — pulsuz", h1: "PDF-dən Excel-ə çevir", description: "PDF-dəki cədvəl və mətni XLSX vərəqinə köçür, brauzerdə" },
    en: { title: "PDF to Excel — free", h1: "Convert PDF to Excel", description: "Move tables and text from a PDF into an XLSX sheet, in your browser" },
    tr: { title: "PDF'ten Excel — ücretsiz", h1: "PDF'i Excel'e dönüştür", description: "PDF'teki tablo ve metni XLSX sayfasına aktarın, tarayıcıda" },
    ar: { title: "من PDF إلى Excel — مجاناً", h1: "تحويل PDF إلى Excel", description: "انقل الجداول والنص من PDF إلى ورقة XLSX داخل المتصفح" },
    ru: { title: "PDF в Excel — бесплатно", h1: "Конвертировать PDF в Excel", description: "Перенесите таблицы и текст из PDF в лист XLSX прямо в браузере" },
  },
  "ppt-pdf": {
    az: { title: "PowerPoint-dən PDF — pulsuz", h1: "PPTX-i PDF-ə çevir", description: "Slaydları PDF səhifələrinə çevir, fayl serverə getmir" },
    en: { title: "PowerPoint to PDF — free", h1: "Convert PPTX to PDF", description: "Turn slides into PDF pages; the file never leaves your browser" },
    tr: { title: "PowerPoint'ten PDF — ücretsiz", h1: "PPTX'i PDF'ye dönüştür", description: "Slaytları PDF sayfalarına çevirin; dosya sunucuya gitmez" },
    ar: { title: "من PowerPoint إلى PDF — مجاناً", h1: "تحويل PPTX إلى PDF", description: "حوّل الشرائح إلى صفحات PDF؛ لا يغادر الملف متصفحك" },
    ru: { title: "PowerPoint в PDF — бесплатно", h1: "Конвертировать PPTX в PDF", description: "Превратите слайды в страницы PDF; файл не уходит на сервер" },
  },
  "excel-pdf": {
    az: { title: "Excel-dən PDF — pulsuz", h1: "Excel və CSV-dən PDF", description: "XLSX və ya CSV cədvəlini səliqəli PDF cədvəlinə çevir" },
    en: { title: "Excel to PDF — free", h1: "Excel and CSV to PDF", description: "Turn an XLSX or CSV sheet into a neat PDF table" },
    tr: { title: "Excel'den PDF — ücretsiz", h1: "Excel ve CSV'den PDF", description: "XLSX veya CSV tablosunu düzenli PDF tablosuna çevirin" },
    ar: { title: "من Excel إلى PDF — مجاناً", h1: "من Excel وCSV إلى PDF", description: "حوّل جدول XLSX أو CSV إلى جدول PDF مرتب" },
    ru: { title: "Excel в PDF — бесплатно", h1: "Excel и CSV в PDF", description: "Превратите таблицу XLSX или CSV в аккуратную таблицу PDF" },
  },
  "redact": {
    az: { title: "PDF-də məlumatı gizlət — pulsuz", h1: "PDF-də məlumatı gizlət", description: "Ad, nömrə və ya imzanın üstünü qara qutu ilə ört" },
    en: { title: "Redact PDF — free", h1: "Redact a PDF", description: "Cover names, numbers or signatures with black boxes" },
    tr: { title: "PDF'te bilgi gizle — ücretsiz", h1: "PDF'te bilgiyi gizle", description: "Ad, numara veya imzanın üstünü siyah kutuyla örtün" },
    ar: { title: "إخفاء معلومات PDF — مجاناً", h1: "إخفاء معلومات في PDF", description: "غطِّ الأسماء أو الأرقام أو التوقيع بمربعات سوداء" },
    ru: { title: "Скрыть данные в PDF — бесплатно", h1: "Скрыть данные в PDF", description: "Закройте имена, номера или подпись чёрными блоками" },
  },
  "invoice": {
    az: { title: "Hesab-faktura PDF — pulsuz", h1: "Hesab-faktura hazırla", description: "Satıcı, alıcı və malları yazın, PDF fakturanı yükləyin" },
    en: { title: "Invoice PDF maker — free", h1: "Make an invoice PDF", description: "Enter seller, buyer and items, then download the PDF invoice" },
    tr: { title: "Fatura PDF — ücretsiz", h1: "Fatura hazırla", description: "Satıcı, alıcı ve kalemleri yazın, PDF faturayı indirin" },
    ar: { title: "فاتورة PDF — مجاناً", h1: "إعداد فاتورة PDF", description: "اكتب البائع والمشتري والبنود ونزّل الفاتورة PDF" },
    ru: { title: "Счёт в PDF — бесплатно", h1: "Сделать счёт в PDF", description: "Укажите продавца, покупателя и позиции и скачайте счёт" },
  },
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
  "unlock": {
    az: [
      { q: "Parolu bilmədən açmaq olar?", a: "Xeyr. Bu alət parolu sındırmır. Açılış parolunu bilməlisiniz." },
      { q: "Yalnız «icazə» parolu olan PDF?", a: "Belə PDF parolsuz açılır. Alət onu yenidən yazır və çap/kopya məhdudiyyətləri götürülür." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Parol və fayl bu brauzerdə qalır." },
    ],
    en: [
      { q: "Can it open a PDF without the password?", a: "No. This tool does not crack passwords. You need the open password." },
      { q: "What about a PDF with only a permissions password?", a: "Such a PDF opens without a password. The tool rewrites it, and print or copy limits are dropped." },
      { q: "Does the file go to a server?", a: "No. The password and the file stay in this browser." },
    ],
    tr: [
      { q: "Parolasız açılabilir mi?", a: "Hayır. Bu araç parola kırmaz. Açılış parolasını bilmelisiniz." },
      { q: "Sadece izin parolası olan PDF?", a: "Böyle PDF parolasız açılır. Araç onu yeniden yazar, yazdırma/kopya sınırları kalkar." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Parola ve dosya bu tarayıcıda kalır." },
    ],
    ar: [
      { q: "هل يفتح PDF بلا كلمة مرور؟", a: "لا. الأداة لا تكسر كلمات المرور. يجب أن تعرف كلمة الفتح." },
      { q: "وماذا عن PDF بكلمة أذونات فقط؟", a: "يُفتح بلا كلمة مرور. تعيد الأداة كتابته فتُزال قيود الطباعة والنسخ." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. كلمة المرور والملف يبقيان في هذا المتصفح." },
    ],
    ru: [
      { q: "Можно открыть без пароля?", a: "Нет. Инструмент не взламывает пароли. Нужен пароль на открытие." },
      { q: "А PDF только с паролем прав?", a: "Такой PDF открывается без пароля. Инструмент пересохраняет его, ограничения печати и копирования снимаются." },
      { q: "Файл уходит на сервер?", a: "Нет. Пароль и файл остаются в этом браузере." },
    ],
  },
  "crop": {
    az: [
      { q: "Kəsilən hissə silinir?", a: "Xeyr. Kənar görünmür, amma fayl içində qala bilər. Tam silmək üçün «Məlumatı gizlət» alətindən istifadə edin." },
      { q: "Ölçü nə ilədir?", a: "Millimetr ilə. 10 mm təxminən 1 sm-dir." },
      { q: "Yalnız bəzi səhifələri kəsmək olar?", a: "Bəli. Səhifə aralığı yazın, məsələn 1-3." },
    ],
    en: [
      { q: "Is the cut part deleted?", a: "No. The edge is hidden but may stay inside the file. To remove content, use Redact PDF." },
      { q: "What unit is used?", a: "Millimetres. 10 mm is about 1 cm." },
      { q: "Can I crop only some pages?", a: "Yes. Enter a page range, for example 1-3." },
    ],
    tr: [
      { q: "Kırpılan kısım silinir mi?", a: "Hayır. Kenar görünmez ama dosyada kalabilir. İçeriği kaldırmak için «Bilgiyi gizle» aracını kullanın." },
      { q: "Birim nedir?", a: "Milimetre. 10 mm yaklaşık 1 cm'dir." },
      { q: "Sadece bazı sayfalar kırpılabilir mi?", a: "Evet. Sayfa aralığı yazın, örneğin 1-3." },
    ],
    ar: [
      { q: "هل يُحذف الجزء المقصوص؟", a: "لا. تُخفى الحافة لكنها قد تبقى في الملف. لإزالة المحتوى استخدم أداة الإخفاء." },
      { q: "ما وحدة القياس؟", a: "المليمتر. 10 مم تقريباً 1 سم." },
      { q: "هل يمكن قص بعض الصفحات فقط؟", a: "نعم. اكتب نطاق الصفحات مثل 1-3." },
    ],
    ru: [
      { q: "Обрезанная часть удаляется?", a: "Нет. Край скрыт, но может остаться в файле. Чтобы убрать содержимое, используйте «Скрыть данные»." },
      { q: "В чём измеряется?", a: "В миллиметрах. 10 мм — около 1 см." },
      { q: "Можно обрезать только часть страниц?", a: "Да. Укажите диапазон, например 1-3." },
    ],
  },
  "grayscale": {
    az: [
      { q: "Keyfiyyət dəyişir?", a: "Səhifələr şəkil kimi yenidən qurulur. Mətn artıq seçilmir və axtarılmır. Yaxşı keyfiyyət seçimi daha aydın, amma daha böyük fayl verir." },
      { q: "Niyə boz etmək?", a: "Ağ-qara çapda rəngli toner sərf olunmur və nəticə əvvəlcədən görünür." },
      { q: "Fayl serverə gedir?", a: "Xeyr. Hər şey bu brauzerdə edilir." },
    ],
    en: [
      { q: "Does quality change?", a: "Pages are rebuilt as images. Text can no longer be selected or searched. Higher quality is sharper but makes a bigger file." },
      { q: "Why make it gray?", a: "Black and white printing uses no color toner, and you see the result first." },
      { q: "Does the file go to a server?", a: "No. Everything runs in this browser." },
    ],
    tr: [
      { q: "Kalite değişir mi?", a: "Sayfalar görsel olarak yeniden kurulur. Metin artık seçilmez ve aranmaz. Yüksek kalite daha net ama daha büyük dosya verir." },
      { q: "Neden gri?", a: "Siyah beyaz baskıda renkli toner harcanmaz, sonucu önceden görürsünüz." },
      { q: "Dosya sunucuya gider mi?", a: "Hayır. Her şey bu tarayıcıda yapılır." },
    ],
    ar: [
      { q: "هل تتغير الجودة؟", a: "تُعاد الصفحات كصور. لا يمكن تحديد النص أو البحث فيه بعد ذلك. الجودة الأعلى أوضح لكن الملف أكبر." },
      { q: "لماذا الرمادي؟", a: "الطباعة بالأبيض والأسود لا تستهلك حبراً ملوناً وترى النتيجة مسبقاً." },
      { q: "هل يذهب الملف إلى خادم؟", a: "لا. كل شيء في هذا المتصفح." },
    ],
    ru: [
      { q: "Меняется ли качество?", a: "Страницы пересобираются как изображения. Текст больше нельзя выделить или найти. Высокое качество чётче, но файл больше." },
      { q: "Зачем серый?", a: "При чёрно-белой печати не тратится цветной тонер, и результат виден заранее." },
      { q: "Файл уходит на сервер?", a: "Нет. Всё делается в этом браузере." },
    ],
  },
  "pdf-ppt": {
    az: [{ q: "Slaydları redaktə etmək olar?", a: "Hər səhifə slayda yüksək keyfiyyətli şəkil kimi qoyulur: görünüş eynilə qalır, üstünə yeni mətn və forma əlavə edə bilərsiniz. Mətni dəyişmək lazımdırsa, əvvəlcə PDF-dən Word alətini işlədin." }, { q: "Fayl serverə gedir?", a: "Xeyr. Çevirmə brauzerdə, cihazınızda gedir." }],
    en: [{ q: "Can I edit the slides?", a: "Each page is placed on a slide as a high-quality picture, so the look stays the same and you can add new text and shapes on top. To change the original text, use PDF to Word first." }, { q: "Is the file uploaded?", a: "No. The conversion runs in your browser, on your device." }],
    tr: [{ q: "Slaytlar düzenlenebilir mi?", a: "Her sayfa slayta yüksek kaliteli resim olarak konur: görünüm aynı kalır, üstüne yeni metin ve şekil ekleyebilirsiniz. Asıl metni değiştirmek için önce PDF'ten Word aracını kullanın." }, { q: "Dosya sunucuya gider mi?", a: "Hayır. Dönüştürme tarayıcıda, cihazınızda yapılır." }],
    ar: [{ q: "هل يمكن تعديل الشرائح؟", a: "توضع كل صفحة على شريحة كصورة عالية الجودة، فيبقى الشكل كما هو ويمكنك إضافة نص وأشكال فوقها. لتعديل النص الأصلي استخدم أداة PDF إلى Word أولاً." }, { q: "هل يُرفع الملف؟", a: "لا. يتم التحويل في متصفحك على جهازك." }],
    ru: [{ q: "Можно редактировать слайды?", a: "Каждая страница ставится на слайд как качественная картинка: вид не меняется, сверху можно добавить текст и фигуры. Чтобы менять исходный текст, сначала используйте PDF в Word." }, { q: "Файл загружается на сервер?", a: "Нет. Конвертация идёт в браузере, на вашем устройстве." }],
  },
  "pdf-excel": {
    az: [{ q: "Cədvəl dəqiq köçür?", a: "Sütunlar mətnin səhifədəki yerinə görə qurulur. Sadə cədvəllər yaxşı çıxır; birləşmiş xana, çox sətirli xana və çərçivəsiz mürəkkəb cədvəli yoxlayın." }, { q: "Skan PDF olar?", a: "Skanda mətn qatı yoxdur. Əvvəl «PDF-dən mətn (OCR)» alətini işlədin." }, { q: "Fayl serverə gedir?", a: "Xeyr. Hər şey bu brauzerdə olur." }],
    en: [{ q: "Is the table copied exactly?", a: "Columns are rebuilt from where text sits on the page. Simple tables work well; check merged cells, multi-line cells and complex tables without borders." }, { q: "Does it work with scans?", a: "Scans have no text layer. Run «PDF to text (OCR)» first." }, { q: "Is the file uploaded?", a: "No. Everything happens in this browser." }],
    tr: [{ q: "Tablo birebir aktarılır mı?", a: "Sütunlar metnin sayfadaki konumuna göre kurulur. Basit tablolar iyi çıkar; birleşik ve çok satırlı hücreleri kontrol edin." }, { q: "Taranmış PDF olur mu?", a: "Taramada metin katmanı yoktur. Önce OCR aracını kullanın." }, { q: "Dosya sunucuya gider mi?", a: "Hayır. Her şey bu tarayıcıda olur." }],
    ar: [{ q: "هل يُنقل الجدول بدقة؟", a: "تُبنى الأعمدة من موضع النص في الصفحة. الجداول البسيطة تخرج جيداً؛ افحص الخلايا المدمجة والمتعددة الأسطر." }, { q: "هل يعمل مع الممسوح ضوئياً؟", a: "لا توجد طبقة نص في المسح. استخدم أداة OCR أولاً." }, { q: "هل يُرفع الملف؟", a: "لا. كل شيء في هذا المتصفح." }],
    ru: [{ q: "Таблица переносится точно?", a: "Столбцы восстанавливаются по положению текста. Простые таблицы выходят хорошо; проверьте объединённые и многострочные ячейки." }, { q: "Сканы подходят?", a: "У скана нет текстового слоя. Сначала запустите OCR." }, { q: "Файл уходит на сервер?", a: "Нет. Всё делается в этом браузере." }],
  },
  "ppt-pdf": {
    az: [{ q: "Hansı fayllar?", a: "PPTX. Köhnə .ppt-ni PowerPoint-də PPTX kimi saxlayın." }, { q: "Dizayn tam qalır?", a: "Mətn qutuları və PNG/JPG şəkillər yerində çəkilir. Tema fonu, qrafik, SmartArt, animasiya və xüsusi şriftlər köçmür." }, { q: "Fayl serverə gedir?", a: "Xeyr. Hər şey bu brauzerdə olur." }],
    en: [{ q: "Which files?", a: "PPTX. Save an old .ppt as PPTX in PowerPoint." }, { q: "Is the design kept?", a: "Text boxes and PNG/JPG pictures are drawn in place. Theme backgrounds, charts, SmartArt, animations and custom fonts are not copied." }, { q: "Is the file uploaded?", a: "No. Everything happens in this browser." }],
    tr: [{ q: "Hangi dosyalar?", a: "PPTX. Eski .ppt'yi PowerPoint'te PPTX olarak kaydedin." }, { q: "Tasarım korunur mu?", a: "Metin kutuları ve PNG/JPG görseller yerinde çizilir. Tema arka planı, grafik, SmartArt ve özel yazı tipleri aktarılmaz." }, { q: "Dosya sunucuya gider mi?", a: "Hayır. Her şey bu tarayıcıda olur." }],
    ar: [{ q: "ما الملفات؟", a: "PPTX. احفظ ملف ppt القديم بصيغة PPTX." }, { q: "هل يبقى التصميم؟", a: "تُرسم مربعات النص وصور PNG/JPG في مكانها. لا تُنقل خلفيات السمة والرسوم وSmartArt والخطوط الخاصة." }, { q: "هل يُرفع الملف؟", a: "لا. كل شيء في هذا المتصفح." }],
    ru: [{ q: "Какие файлы?", a: "PPTX. Старый .ppt сохраните как PPTX." }, { q: "Дизайн сохраняется?", a: "Текстовые блоки и картинки PNG/JPG рисуются на местах. Фон темы, диаграммы, SmartArt и свои шрифты не переносятся." }, { q: "Файл уходит на сервер?", a: "Нет. Всё делается в этом браузере." }],
  },
  "excel-pdf": {
    az: [
      { q: "Hansı fayllar?", a: "XLSX və CSV. Köhnə XLS dəstəklənmir: onu Excel-də XLSX və ya CSV kimi saxlayın." },
      { q: "Formul və rəng qalır?", a: "Xeyr. Yalnız xanadakı son dəyər yazılır. Rəng, birləşmiş xana və qrafik köçmür." },
      { q: "Çox sütun sığır?", a: "10-dan çox sütunda şrift kiçilir, uzun mətn «…» ilə qısalır. Sütun çoxdursa səhifə yan çevrilir." },
    ],
    en: [
      { q: "Which files?", a: "XLSX and CSV. Old XLS is not supported: save it as XLSX or CSV in Excel." },
      { q: "Are formulas and colors kept?", a: "No. Only the last value of each cell is written. Colors, merged cells and charts are not copied." },
      { q: "Do many columns fit?", a: "With more than 10 columns the font gets smaller and long text is cut with «…». Wide sheets use landscape pages." },
    ],
    tr: [
      { q: "Hangi dosyalar?", a: "XLSX ve CSV. Eski XLS desteklenmez: Excel'de XLSX veya CSV olarak kaydedin." },
      { q: "Formül ve renk kalır mı?", a: "Hayır. Hücredeki son değer yazılır. Renk, birleşik hücre ve grafik taşınmaz." },
      { q: "Çok sütun sığar mı?", a: "10'dan fazla sütunda yazı küçülür, uzun metin «…» ile kısalır. Geniş tablolar yatay sayfada olur." },
    ],
    ar: [
      { q: "ما الملفات المدعومة؟", a: "XLSX وCSV. صيغة XLS القديمة غير مدعومة: احفظها في Excel بصيغة XLSX أو CSV." },
      { q: "هل تبقى الصيغ والألوان؟", a: "لا. تُكتب القيمة الأخيرة لكل خلية فقط. لا تُنقل الألوان والخلايا المدمجة والرسوم." },
      { q: "هل تتسع أعمدة كثيرة؟", a: "مع أكثر من 10 أعمدة يصغر الخط ويُقصّ النص الطويل بـ«…». الجداول العريضة تكون أفقية." },
    ],
    ru: [
      { q: "Какие файлы?", a: "XLSX и CSV. Старый XLS не поддерживается: сохраните его в Excel как XLSX или CSV." },
      { q: "Формулы и цвета сохранятся?", a: "Нет. Пишется только итоговое значение ячейки. Цвета, объединённые ячейки и диаграммы не переносятся." },
      { q: "Поместится много столбцов?", a: "При более 10 столбцах шрифт мельче, длинный текст обрезается «…». Широкие таблицы — альбомные страницы." },
    ],
  },
  "redact": {
    az: [
      { q: "Altdakı mətn həqiqətən silinir?", a: "«Səhifəni şəkil et» açıq olanda qutu olan səhifələr şəkil kimi yenidən qurulur və altdakı mətn o səhifələrdən silinir. Bağlı olanda yalnız üstü örtülür və mətn kopyalana bilər." },
      { q: "Hüquqi sənəd üçün bəs edir?", a: "Bu sadə alətdir. Rəsmi sənəddə nəticəni yoxlayın: mətni seçib kopyalamağa çalışın. Metadata və əlavələr yoxlanmır." },
      { q: "Qutunu necə qoyum?", a: "Səhifə şəklində siçan və ya barmaqla dartın. Səhv qutunu siyahıdan silin." },
    ],
    en: [
      { q: "Is the text under the box really removed?", a: "With «Flatten pages» on, pages with boxes are rebuilt as images and the text under the box is gone from those pages. With it off, the box only covers the text and it can still be copied." },
      { q: "Is it enough for legal documents?", a: "This is a simple tool. For official papers, check the result: try to select and copy the text. Metadata and attachments are not checked." },
      { q: "How do I place a box?", a: "Drag on the page image with a mouse or finger. Remove a wrong box from the list." },
    ],
    tr: [
      { q: "Altındaki metin gerçekten silinir mi?", a: "«Sayfayı görsele çevir» açıkken kutulu sayfalar görsel olarak yeniden kurulur ve metin o sayfalardan silinir. Kapalıyken yalnız üstü örtülür, metin kopyalanabilir." },
      { q: "Hukuki belge için yeterli mi?", a: "Bu basit bir araçtır. Resmi belgede sonucu kontrol edin: metni seçip kopyalamayı deneyin. Metadata ve ekler kontrol edilmez." },
      { q: "Kutuyu nasıl koyarım?", a: "Sayfa görselinde fare veya parmakla sürükleyin. Yanlış kutuyu listeden silin." },
    ],
    ar: [
      { q: "هل يُحذف النص تحت المربع فعلاً؟", a: "مع تشغيل «تحويل الصفحة إلى صورة» تُعاد الصفحات التي فيها مربعات كصور ويُحذف النص منها. عند الإيقاف يُغطى النص فقط ويمكن نسخه." },
      { q: "هل يكفي للوثائق القانونية؟", a: "هذه أداة بسيطة. في الوثائق الرسمية افحص النتيجة: جرّب تحديد النص ونسخه. لا تُفحص البيانات الوصفية والمرفقات." },
      { q: "كيف أضع المربع؟", a: "اسحب على صورة الصفحة بالفأرة أو الإصبع. احذف المربع الخطأ من القائمة." },
    ],
    ru: [
      { q: "Текст под блоком правда удаляется?", a: "С «Сделать страницу картинкой» страницы с блоками пересобираются как изображения, и текст под блоком исчезает с них. Без неё блок только закрывает текст, его можно скопировать." },
      { q: "Достаточно ли для юридических документов?", a: "Это простой инструмент. Для официальных бумаг проверьте результат: попробуйте выделить и скопировать текст. Метаданные и вложения не проверяются." },
      { q: "Как поставить блок?", a: "Протяните мышью или пальцем по картинке страницы. Ошибочный блок удалите из списка." },
    ],
  },
  "invoice": {
    az: [
      { q: "Rəsmi e-qaimə əvəz edir?", a: "Xeyr. Bu sadə PDF fakturadır. Vergi orqanına göndərilən e-qaimə deyil." },
      { q: "Məlumat saxlanır?", a: "Forma yalnız bu brauzerdə saxlanır ki, növbəti dəfə yenidən yazmayasınız. Serverə getmir." },
      { q: "Vergi əlavə etmək olar?", a: "Bəli. Vergi faizini yazın, məbləğ özü hesablanır." },
    ],
    en: [
      { q: "Does it replace an official e-invoice?", a: "No. This is a simple PDF invoice, not a tax-system e-invoice." },
      { q: "Is my data saved?", a: "The form is kept only in this browser so you don't retype it next time. It is not sent to a server." },
      { q: "Can I add tax?", a: "Yes. Enter a tax percent and the total is counted for you." },
    ],
    tr: [
      { q: "Resmi e-faturanın yerini tutar mı?", a: "Hayır. Bu basit bir PDF faturadır, vergi sistemine giden e-fatura değildir." },
      { q: "Veriler saklanır mı?", a: "Form sadece bu tarayıcıda saklanır, sonraki sefer tekrar yazmazsınız. Sunucuya gitmez." },
      { q: "Vergi eklenir mi?", a: "Evet. Vergi yüzdesini yazın, toplam kendisi hesaplanır." },
    ],
    ar: [
      { q: "هل تغني عن الفاتورة الإلكترونية الرسمية؟", a: "لا. هذه فاتورة PDF بسيطة وليست فاتورة نظام الضرائب." },
      { q: "هل تُحفظ البيانات؟", a: "يُحفظ النموذج في هذا المتصفح فقط كي لا تعيد كتابته. لا يُرسل إلى خادم." },
      { q: "هل يمكن إضافة ضريبة؟", a: "نعم. اكتب نسبة الضريبة ويُحسب المجموع تلقائياً." },
    ],
    ru: [
      { q: "Заменяет официальный электронный счёт?", a: "Нет. Это простой PDF-счёт, а не счёт налоговой системы." },
      { q: "Данные сохраняются?", a: "Форма хранится только в этом браузере, чтобы не вводить заново. На сервер не отправляется." },
      { q: "Можно добавить налог?", a: "Да. Укажите процент налога, итог посчитается сам." },
    ],
  },
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
