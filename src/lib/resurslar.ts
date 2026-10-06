import type { Lang } from "@/lib/i18n";
import { NIBRAS_PDF_GUIDE } from "@/lib/nibras-pdf-guide";

export type LocaleSeo = {
  title: string;
  description: string;
  keywords: string;
};

export type ResursPage = {
  slug: string;
  title: string;
  keyword: string;
  paragraphs: readonly string[];
  steps?: readonly string[];
  seo: Record<Lang, LocaleSeo>;
};

function seo(
  az: LocaleSeo,
  en: LocaleSeo,
  tr: LocaleSeo,
  ar: LocaleSeo,
  ru: LocaleSeo,
): Record<Lang, LocaleSeo> {
  return { az, en, tr, ar, ru };
}

export const RESURSLAR: readonly ResursPage[] = [
  {
    slug: "pdf",
    title: "PDF nədir və PDF ilə nə etmək olar?",
    keyword: "PDF",
    paragraphs: [
      "PDF elə sənəd formatıdır ki, səhifə telefonda, kompüterdə və çapda eyni görünsün. Mətn, şəkil, cədvəl və imza bir faylda qalır. Word faylından fərqi budur: PDF-i açan adam adətən düzəliş üçün yox, oxumaq və göndərmək üçün açır.",
      "PDF ilə praktiki işlər bunlardır: bir neçə faylı birləşdirmək, böyük faylı sıxışdırmaq, səhifəni ayırmaq, şəkli çıxarmaq, şəkildən PDF düzəltmək, Word-ə və geriyə çevirmək, telefonda yaratmaq, redaktə etmək, imzalamaq, şifrə qoymaq, mətni çıxarmaq və kağızı skan etmək.",
      "Skan olunmuş PDF ilə mətnli PDF eyni deyil. Mətni barmaqla seçə bilirsinizsə, sənəddə həqiqi yazı var. Seçilmirsə, səhifə şəkildir və mətn çıxarmaq üçün tanıma lazımdır.",
    ],
    seo: seo(
      {
        title: "PDF nədir və PDF ilə nə etmək olar? — Nibras Code",
        description: "PDF sənəd formatıdır. Birləşdirmək, sıxışdırmaq, bölmək, imzalamaq, skan etmək və Word-ə çevirmək bu faylla görülən işlərdir.",
        keywords: "PDF, PDF nədir, PDF ilə işləmək, PDF sənəd",
      },
      {
        title: "What a PDF is and what you can do with it — Nibras Code",
        description: "A PDF keeps a page looking the same on a phone or a computer. Merge, compress, split, sign, scan, and convert it.",
        keywords: "what is a PDF, PDF file, work with PDF, PDF document",
      },
      {
        title: "PDF nedir ve PDF ile ne yapılır? — Nibras Code",
        description: "PDF, sayfanın telefonda ve bilgisayarda aynı görünmesini sağlar. Birleştirme, sıkıştırma, bölme, imza ve tarama bu dosyayla yapılır.",
        keywords: "PDF nedir, PDF dosyası, PDF ile çalışmak, PDF belge",
      },
      {
        title: "ما هو PDF وما الذي يمكن فعله به؟ — Nibras Code",
        description: "PDF يُبقي الصفحة كما هي على الهاتف والحاسوب. يمكن دمجه وضغطه وتقسيمه وتوقيعه ومسحه وتحويله.",
        keywords: "ما هو PDF, ملف PDF, العمل مع PDF, مستند PDF",
      },
      {
        title: "Что такое PDF и что с ним можно делать — Nibras Code",
        description: "PDF сохраняет вид страницы на телефоне и компьютере. Файл можно объединить, сжать, разделить, подписать, сканировать и конвертировать.",
        keywords: "что такое PDF, файл PDF, работа с PDF, документ PDF",
      },
    ),
  },
  {
    slug: "pdf-birlesdirmek",
    title: "PDF fayllarını necə birləşdirmək olar?",
    keyword: "PDF birləşdirmək",
    paragraphs: [
      "PDF birləşdirmək bir neçə sənədi və ya şəkli tək faylda toplamaqdır. Məktəb tapşırığı, müqavilə əlavəsi və skan olunmuş səhifələr ayrı-ayrı olanda bu, ən qısa yoldur.",
    ],
    steps: [
      "Faylları istədiyiniz sıra ilə seçin. Birinci seçilən adətən birinci səhifə olur.",
      "Sıranı yoxlayın. Səhv sıra sənədi qarışdırır.",
      "Birləşdirin və nəticəni yeni adla saxlayın. Əsli silməyin.",
    ],
    seo: seo(
      {
        title: "PDF fayllarını necə birləşdirmək olar? — Nibras Code",
        description: "PDF birləşdirmək üçün faylları sıra ilə seçin, sıranı yoxlayın və yeni sənədi ayrıca saxlayın.",
        keywords: "PDF birləşdirmək, PDF-ləri birləşdir, bir neçə PDF bir fayl",
      },
      {
        title: "How to merge PDF files — Nibras Code",
        description: "Choose the files in page order, check that order, and save the merged PDF as a new copy.",
        keywords: "merge PDF, combine PDF files, join PDFs into one",
      },
      {
        title: "PDF dosyaları nasıl birleştirilir? — Nibras Code",
        description: "Dosyaları sayfa sırasıyla seçin, sırayı kontrol edin ve birleşen PDF’i yeni kopya olarak kaydedin.",
        keywords: "PDF birleştirmek, PDF dosyalarını birleştir, tek PDF yapmak",
      },
      {
        title: "كيف دمج ملفات PDF؟ — Nibras Code",
        description: "اختر الملفات بترتيب الصفحات، راجع الترتيب، ثم احفظ الملف المدموج كنسخة جديدة.",
        keywords: "دمج PDF, دمج ملفات PDF, جمع PDF في ملف واحد",
      },
      {
        title: "Как объединить файлы PDF — Nibras Code",
        description: "Выберите файлы в порядке страниц, проверьте порядок и сохраните общий PDF новой копией.",
        keywords: "объединить PDF, соединить файлы PDF, несколько PDF в один",
      },
    ),
  },
  {
    slug: "pdf-sixisdirmak",
    title: "PDF faylını necə sıxışdırmaq olar?",
    keyword: "PDF sıxışdırmaq",
    paragraphs: [
      "PDF sıxışdırmaq faylın həcmini azaltmaqdır ki, onu mesaj və ya poçtla göndərmək asan olsun. Ən çox yer tutan hissə adətən içindəki şəkillərdir. Artıq kiçik olan mətn sənədi sıxışdırılandan sonra az dəyişir.",
    ],
    steps: [
      "Əvvəl həcmə baxın. Çox kiçik faylda sıxışdırma az iş görür.",
      "Yazı oxunmalıdırsa, daha yüksək keyfiyyət seçin. Həddindən artıq sıxılmış şəkil bulanıq olur.",
      "Nəticəni açın. İmza, cədvəl və kiçik yazı durursa, həmin nüsxəni göndərin.",
    ],
    seo: seo(
      {
        title: "PDF faylını necə sıxışdırmaq olar? — Nibras Code",
        description: "PDF sıxışdırmaq həcmi azaldır. Yazının oxunaqlı qaldığını yoxlayın. Kiçik mətn faylı az kiçilir.",
        keywords: "PDF sıxışdırmaq, PDF həcmini azaltmaq, böyük PDF göndərmək",
      },
      {
        title: "How to compress a PDF file — Nibras Code",
        description: "Compressing a PDF makes it smaller to send. Check that the text is still readable. A small text file shrinks very little.",
        keywords: "compress PDF, reduce PDF size, shrink a PDF file",
      },
      {
        title: "PDF dosyası nasıl sıkıştırılır? — Nibras Code",
        description: "PDF sıkıştırmak boyutu küçültür. Yazının okunur kaldığını kontrol edin. Küçük metin dosyası pek küçülmez.",
        keywords: "PDF sıkıştırmak, PDF boyutunu küçültmek, büyük PDF göndermek",
      },
      {
        title: "كيف ضغط ملف PDF؟ — Nibras Code",
        description: "ضغط PDF يصغّر الحجم قبل الإرسال. تأكد أن النص ما زال واضحًا. الملف النصي الصغير لا يصغر كثيرًا.",
        keywords: "ضغط PDF, تصغير حجم PDF, إرسال ملف PDF كبير",
      },
      {
        title: "Как сжать файл PDF — Nibras Code",
        description: "Сжатие PDF уменьшает размер для отправки. Проверьте, что текст читается. Маленький текстовый файл почти не сожмётся.",
        keywords: "сжать PDF, уменьшить размер PDF, отправить большой PDF",
      },
    ),
  },
  {
    slug: "pdf-bolmek",
    title: "PDF necə bölünür?",
    keyword: "PDF bölmək",
    paragraphs: [
      "PDF bölmək bir sənədi iki və ya daha çox hissəyə ayırmaqdır. Məsələn, müqavilənin yalnız əlavəsini, yaxud dərsin bir fəslini ayrıca göndərmək lazım olanda bütün faylı yollamaq məcburi deyil.",
    ],
    steps: [
      "Haradan haraya bölünəcəyini səhifə nömrəsi ilə seçin.",
      "Hissələri ayrı fayl kimi saxlayın. Adları qarışdırmayın.",
      "Hər hissəni açın. Lazımlı səhifə kəsilməyib və artıq səhifə keçməyib.",
    ],
    seo: seo(
      {
        title: "PDF necə bölünür? — Nibras Code",
        description: "PDF bölmək bir sənədi səhifə aralığına görə ayrı fayllara ayırmaqdır. Hər hissəni saxlayıb yoxlayın.",
        keywords: "PDF bölmək, PDF-i hissələrə ayırmaq, PDF səhifələrini bölmək",
      },
      {
        title: "How to split a PDF — Nibras Code",
        description: "Splitting a PDF saves a page range as its own file. Open each part and check that nothing important was cut.",
        keywords: "split a PDF, divide PDF pages, separate a PDF into files",
      },
      {
        title: "PDF nasıl bölünür? — Nibras Code",
        description: "PDF bölmek, bir belgeyi sayfa aralığına göre ayrı dosyalara ayırmaktır. Her parçayı açıp kontrol edin.",
        keywords: "PDF bölmek, PDF sayfalarını ayırmak, PDF'i parçalamak",
      },
      {
        title: "كيف تقسيم PDF؟ — Nibras Code",
        description: "تقسيم PDF يحفظ نطاق صفحات في ملف مستقل. افتح كل جزء وتأكد أن المهم لم يُقص.",
        keywords: "تقسيم PDF, فصل صفحات PDF, تجزئة ملف PDF",
      },
      {
        title: "Как разделить PDF — Nibras Code",
        description: "Разделить PDF — значит сохранить диапазон страниц отдельным файлом. Откройте каждую часть и проверьте, что нужное не обрезано.",
        keywords: "разделить PDF, разбить PDF на части, отделить страницы PDF",
      },
    ),
  },
  {
    slug: "pdf-den-sehife-cixarmaq",
    title: "PDF-dən səhifə necə çıxarılır?",
    keyword: "PDF-dən səhifə çıxarmaq",
    paragraphs: [
      "PDF-dən səhifə çıxarmaq seçilmiş səhifələri yeni, qısa sənədə götürməkdir. Bölməkdən fərqi budur: məqsəd bütün faylı parçalamaq yox, bir və ya bir neçə səhifəni ayrıca saxlamaqdır. Əsli yerində qalır.",
    ],
    steps: [
      "Lazım olan səhifə nömrələrini seçin. Ardıcıl olmaya da bilər.",
      "Onları yeni PDF kimi saxlayın.",
      "Yeni faylı açın. Səhifə sırası və kənarlar düzdürsə, onu göndərin.",
    ],
    seo: seo(
      {
        title: "PDF-dən səhifə necə çıxarılır? — Nibras Code",
        description: "PDF-dən səhifə çıxarmaq seçilmiş səhifələri yeni sənədə götürür. Əsas fayl silinmir.",
        keywords: "PDF-dən səhifə çıxarmaq, PDF səhifəsini ayırmaq, PDF-dən səhifə götürmək",
      },
      {
        title: "How to extract pages from a PDF — Nibras Code",
        description: "Pick the pages you need and save them as a new PDF. The original file stays where it is.",
        keywords: "extract pages from PDF, save selected PDF pages, pull a page out of a PDF",
      },
      {
        title: "PDF'den sayfa nasıl çıkarılır? — Nibras Code",
        description: "İstediğiniz sayfaları seçip yeni bir PDF olarak kaydedin. Asıl dosya yerinde kalır.",
        keywords: "PDF'den sayfa çıkarmak, PDF sayfasını ayırmak, seçili sayfaları kaydetmek",
      },
      {
        title: "كيف استخراج صفحة من PDF؟ — Nibras Code",
        description: "اختر الصفحات المطلوبة واحفظها في PDF جديد. الملف الأصلي يبقى كما هو.",
        keywords: "استخراج صفحة من PDF, حفظ صفحات محددة, أخذ صفحة من PDF",
      },
      {
        title: "Как извлечь страницу из PDF — Nibras Code",
        description: "Выберите нужные страницы и сохраните их новым PDF. Исходный файл не удаляется.",
        keywords: "извлечь страницу из PDF, сохранить выбранные страницы PDF, вытащить страницу из PDF",
      },
    ),
  },
  {
    slug: "pdf-den-sekil-cixarmaq",
    title: "PDF-dən şəkil necə çıxarılır?",
    keyword: "PDF-dən şəkil çıxarmaq",
    paragraphs: [
      "PDF-dən şəkil çıxarmaq iki işdən biri ola bilər. Birincisi, bütün səhifəni şəkil kimi saxlamaqdır. İkincisi, səhifənin içindəki ayrıca şəkli götürməkdir. Ekran şəkli də olur, amma kənarları əyri və keyfiyyəti zəif qala bilər.",
    ],
    steps: [
      "Bütün səhifə lazımdırsa, səhifəni şəklə çevirin.",
      "Yalnız içindəki şəkil lazımdırsa, həmin şəkli çıxarın, səhifənin qalan hissəsini yox.",
      "Yazı kiçikdirsə, daha böyük ölçü seçib yenidən çıxarın.",
    ],
    seo: seo(
      {
        title: "PDF-dən şəkil necə çıxarılır? — Nibras Code",
        description: "PDF-dən şəkil çıxarmaq səhifəni və ya içindəki şəkli ayrıca fayl edir. Səhifə ixracı ekran şəklindən düz olur.",
        keywords: "PDF-dən şəkil çıxarmaq, PDF səhifəsini şəkil etmək, PDF-dən foto götürmək",
      },
      {
        title: "How to extract an image from a PDF — Nibras Code",
        description: "Save a whole page as a picture, or pull out one image inside it. A page export is usually cleaner than a screenshot.",
        keywords: "extract image from PDF, PDF page to picture, save a PDF page as an image",
      },
      {
        title: "PDF'den resim nasıl çıkarılır? — Nibras Code",
        description: "Sayfanın tamamını resim yapın veya içindeki tek resmi alın. Sayfa aktarımı ekran görüntüsünden daha düzgün olur.",
        keywords: "PDF'den resim çıkarmak, PDF sayfasını resme çevirmek, PDF'den foto almak",
      },
      {
        title: "كيف استخراج صورة من PDF؟ — Nibras Code",
        description: "احفظ الصفحة كاملة كصورة، أو أخرج صورة واحدة من داخلها. تصدير الصفحة أوضح من لقطة الشاشة.",
        keywords: "استخراج صورة من PDF, تحويل صفحة PDF إلى صورة, حفظ PDF كصورة",
      },
      {
        title: "Как извлечь изображение из PDF — Nibras Code",
        description: "Сохраните всю страницу картинкой или выньте одно изображение из неё. Экспорт страницы обычно чище скриншота.",
        keywords: "извлечь изображение из PDF, страница PDF в картинку, сохранить PDF как фото",
      },
    ),
  },
  {
    slug: "sekilleri-pdf-e-cevirmek",
    title: "Şəkilləri PDF-ə necə çevirmək olar?",
    keyword: "şəkli PDF etmək",
    paragraphs: [
      "Şəkli PDF etmək telefon kamerasından və ya qalereyadan seçilmiş şəkilləri səhifə sırası ilə bir sənədə yığmaqdır. Kağız yoxdursa və ya artıq çəkilmiş şəkillər varsa, skan etmədən də PDF alınır.",
    ],
    steps: [
      "Şəkilləri səhifə sırası ilə seçin.",
      "Əyri və ya çevrilmiş şəkli düzəldin. PDF-ə keçəndən sonra əyrilik qalır.",
      "Bir PDF kimi saxlayın və hər səhifənin kəsilmədiyinə baxın.",
    ],
    seo: seo(
      {
        title: "Şəkilləri PDF-ə necə çevirmək olar? — Nibras Code",
        description: "Şəkli PDF etmək seçilmiş fotoları səhifə sırası ilə bir sənədə yığır. Əvvəl əyri şəkli düzəldin.",
        keywords: "şəkli PDF etmək, şəkilləri PDF-ə çevirmək, fotodan PDF",
      },
      {
        title: "How to turn pictures into a PDF — Nibras Code",
        description: "Select photos in page order and save them as one PDF. Straighten a tilted picture before you convert it.",
        keywords: "pictures to PDF, photo to PDF, convert images to a PDF",
      },
      {
        title: "Resimler PDF'e nasıl çevrilir? — Nibras Code",
        description: "Fotoğrafları sayfa sırasıyla seçip tek PDF yapın. Dönüştürmeden önce eğik resmi düzeltin.",
        keywords: "resmi PDF yapmak, fotoğrafları PDF'e çevirmek, resimden PDF",
      },
      {
        title: "كيف تحويل الصور إلى PDF؟ — Nibras Code",
        description: "اختر الصور بترتيب الصفحات واحفظها في PDF واحد. قوّم الصورة المائلة قبل التحويل.",
        keywords: "تحويل الصور إلى PDF, صورة إلى PDF, جعل الصورة PDF",
      },
      {
        title: "Как превратить изображения в PDF — Nibras Code",
        description: "Выберите фото в порядке страниц и сохраните одним PDF. Кривой снимок выровняйте до конвертации.",
        keywords: "картинки в PDF, фото в PDF, преобразовать изображения в PDF",
      },
    ),
  },
  {
    slug: "pdf-i-worde-cevirmek",
    title: "PDF-i Word-ə necə çevirmək olar?",
    keyword: "PDF Word çevirmək",
    paragraphs: [
      "PDF Word çevirmək mətni redaktə olunan sənədə keçirməkdir. Sadə, seçilə bilən mətn adətən yaxşı gedir. Mətni seçə bilmirsinizsə, səhifə skandır və əvvəl mətn tanıma lazımdır. Yoxsa Word-də boş və ya qarışıq sətirlər alınır.",
    ],
    steps: [
      "Mətn seçilirsə, birbaşa çevirin.",
      "Seçilmirsə, əvvəl tanıma işlədin, sonra çevirin.",
      "Cədvəl, başlıq və ərəb sətirlərini yoxlayın. Avtomatik çevirmə hərf və sıra səhvi edə bilər.",
    ],
    seo: seo(
      {
        title: "PDF-i Word-ə necə çevirmək olar? — Nibras Code",
        description: "PDF Word çevirmək seçilən mətni redaktə olunan sənədə keçirir. Skan olunmuş səhifədə əvvəl mətn tanıma lazımdır.",
        keywords: "PDF Word çevirmək, PDF-i Word-ə çevirmək, PDF-dən Word",
      },
      {
        title: "How to convert a PDF to Word — Nibras Code",
        description: "Selectable text can move into a Word file. A scanned page needs text recognition first, then a check for broken lines.",
        keywords: "PDF to Word, convert PDF to Word, turn a PDF into an editable document",
      },
      {
        title: "PDF Word'e nasıl çevrilir? — Nibras Code",
        description: "Seçilebilen metin Word dosyasına geçer. Taranmış sayfada önce metin tanıma, sonra satır kontrolü gerekir.",
        keywords: "PDF Word çevirmek, PDF'i Word'e çevirmek, PDF'den Word",
      },
      {
        title: "كيف تحويل PDF إلى Word؟ — Nibras Code",
        description: "النص القابل للتحديد ينتقل إلى Word. الصفحة الممسوحة تحتاج تعرّف النص أولًا، ثم مراجعة الأسطر.",
        keywords: "تحويل PDF إلى Word, من PDF إلى وورد, PDF Word",
      },
      {
        title: "Как перевести PDF в Word — Nibras Code",
        description: "Выделяемый текст переносится в Word. Скану сначала нужно распознавание, потом проверка строк.",
        keywords: "PDF в Word, конвертировать PDF в Word, перевести PDF в документ",
      },
    ),
  },
  {
    slug: "wordu-pdf-e-cevirmek",
    title: "Word-u PDF-ə necə çevirmək olar?",
    keyword: "Word PDF çevirmək",
    paragraphs: [
      "Word PDF çevirmək yazını elə saxlayır ki, başqa telefonda sətir və şəkillər sürüşməsin. Word faylını birbaşa göndərəndə şrift və səhifə fərqli açılıb düzən pozula bilər. PDF bu sürüşməni azaldır.",
    ],
    steps: [
      "Word-də paylaşım və ya ixracdan PDF seçin. Faylın adını dəyişin, amma məzmunu itirməyin.",
      "Nəticəni açın. Şəkil, cədvəl və səhifə sonu Word-dəki kimi dururmu, baxın.",
      "Ərəb və başqa sağdan-sola mətn varsa, sətir istiqamətini ayrıca yoxlayın.",
    ],
    seo: seo(
      {
        title: "Word-u PDF-ə necə çevirmək olar? — Nibras Code",
        description: "Word PDF çevirmək yazının başqa telefonda sürüşməməsi üçündür. Çevirəndən sonra şəkil və cədvəli yoxlayın.",
        keywords: "Word PDF çevirmək, Word-u PDF-ə çevirmək, Word-dən PDF",
      },
      {
        title: "How to convert Word to PDF — Nibras Code",
        description: "Export the document as a PDF so lines and pictures stay put on another phone. Open the result and check tables.",
        keywords: "Word to PDF, convert a Word document to PDF, save Word as PDF",
      },
      {
        title: "Word PDF'e nasıl çevrilir? — Nibras Code",
        description: "Belgeyi PDF olarak verin ki satırlar başka telefonda kaymasın. Sonucu açıp tablo ve resme bakın.",
        keywords: "Word PDF çevirmek, Word'ü PDF'e çevirmek, Word'den PDF",
      },
      {
        title: "كيف تحويل Word إلى PDF؟ — Nibras Code",
        description: "صدّر المستند كـ PDF حتى لا تتحرك الأسطر على هاتف آخر. افتح الناتج وراجع الجداول.",
        keywords: "تحويل Word إلى PDF, من وورد إلى PDF, حفظ Word كـ PDF",
      },
      {
        title: "Как перевести Word в PDF — Nibras Code",
        description: "Экспортируйте документ в PDF, чтобы строки не поехали на другом телефоне. Откройте результат и проверьте таблицы.",
        keywords: "Word в PDF, конвертировать Word в PDF, сохранить Word как PDF",
      },
    ),
  },
  {
    slug: "telefonda-pdf-redakte-etmek",
    title: "Telefonda PDF necə redaktə edilir?",
    keyword: "telefonda PDF redaktə etmək",
    paragraphs: [
      "Telefonda PDF redaktə etmək adətən qeyd, qısa mətn, şəkil, səhifə sırası və fırlatma deməkdir. Uzun hesabatın bütün mətnini telefonda yenidən yazmaq çətindir. Qısa düzəliş üçünsə telefon kifayətdir.",
    ],
    steps: [
      "Əsli saxlayın. Dəyişikliyi yeni nüsxədə edin.",
      "Əlavə etdiyiniz mətn səhifədən kənara çıxmasın.",
      "Səhifə silməzdən əvvəl orada imza və ya lazımlı qeyd olmadığına baxın.",
      "Göndərməzdən əvvəl faylı bir dəfə sürüşdürüb yoxlayın.",
    ],
    seo: seo(
      {
        title: "Telefonda PDF necə redaktə edilir? — Nibras Code",
        description: "Telefonda PDF redaktə etmək qeyd, mətn və səhifə sırasını dəyişməkdir. Əsli saxlayın, düzəlişi yeni nüsxədə edin.",
        keywords: "telefonda PDF redaktə etmək, PDF-ə qeyd əlavə etmək, telefonda PDF düzəltmək",
      },
      {
        title: "How to edit a PDF on a phone — Nibras Code",
        description: "On a phone you can add a note, a short text box, or change page order. Keep the original and edit a copy.",
        keywords: "edit PDF on a phone, annotate a PDF on Android, change PDF pages on mobile",
      },
      {
        title: "Telefonda PDF nasıl düzenlenir? — Nibras Code",
        description: "Telefonda nota, kısa metne veya sayfa sırasına dokunulur. Aslı dururken düzenlemeyi yeni kopyada yapın.",
        keywords: "telefonda PDF düzenlemek, PDF'e not eklemek, telefonda PDF düzeltmek",
      },
      {
        title: "كيف تعديل PDF على الهاتف؟ — Nibras Code",
        description: "على الهاتف تُضاف ملاحظة أو نص قصير أو يُغيَّر ترتيب الصفحات. أبقِ الأصل وعدّل نسخة.",
        keywords: "تعديل PDF على الهاتف, ملاحظات على PDF, تحرير PDF من الجوال",
      },
      {
        title: "Как редактировать PDF на телефоне — Nibras Code",
        description: "На телефоне добавляют заметку, короткое поле текста или меняют порядок страниц. Оригинал оставьте, правьте копию.",
        keywords: "редактировать PDF на телефоне, заметка в PDF, править PDF с телефона",
      },
    ),
  },
  {
    slug: "telefonda-pdf-yaratmaq",
    title: "Telefonda PDF necə yaradılır?",
    keyword: "telefonda PDF yaratmaq",
    paragraphs: [
      "Telefonda PDF yaratmaq yeni sənədi üç yolla almaqdır: qalereyadakı şəkillərdən, kamerayla çəkilmiş səhifədən və ya başqa proqramdan paylaşım və ya çap əmri ilə. Məqsəd boş fayl açmaq yox, göndərilə bilən səliqəli sənəd çıxarmaqdır.",
    ],
    steps: [
      "Hazır şəkillər varsa, onları sıra ilə seçib PDF edin.",
      "Kağız varsa, skan edin. Kənar və işıq düz olsun.",
      "Başqa proqramdakı mətni PDF etmək istəyirsinizsə, paylaşım və ya çap menyusundan PDF seçin.",
    ],
    seo: seo(
      {
        title: "Telefonda PDF necə yaradılır? — Nibras Code",
        description: "Telefonda PDF yaratmaq şəkil, skan və ya paylaşım menyusu ilə yeni sənəd çıxarmaqdır.",
        keywords: "telefonda PDF yaratmaq, telefonda PDF düzəltmək, şəkildən PDF yaratmaq",
      },
      {
        title: "How to create a PDF on a phone — Nibras Code",
        description: "Make a new PDF from gallery photos, a camera scan, or the share and print menu of another app.",
        keywords: "create a PDF on a phone, make a PDF on Android, new PDF from photos",
      },
      {
        title: "Telefonda PDF nasıl oluşturulur? — Nibras Code",
        description: "Yeni PDF'i galeri fotoğraflarından, kamera taramasından veya başka uygulamanın paylaş menüsünden çıkarın.",
        keywords: "telefonda PDF oluşturmak, telefonda PDF yapmak, fotoğraftan PDF",
      },
      {
        title: "كيف إنشاء PDF على الهاتف؟ — Nibras Code",
        description: "أنشئ PDF من صور المعرض أو مسح الكاميرا أو قائمة المشاركة في تطبيق آخر.",
        keywords: "إنشاء PDF على الهاتف, عمل PDF من الجوال, PDF من الصور",
      },
      {
        title: "Как создать PDF на телефоне — Nibras Code",
        description: "Новый PDF получают из фото галереи, скана камерой или меню «Поделиться» другого приложения.",
        keywords: "создать PDF на телефоне, сделать PDF на Android, PDF из фото",
      },
    ),
  },
  {
    slug: "pdf-imzalamaq",
    title: "PDF necə imzalanır?",
    keyword: "PDF imzalamaq",
    paragraphs: [
      "PDF imzalamaq sənədin üzərinə görünən imza qoymaqdır. Bu, barmaq və ya stilusla çəkilən imza, yaxud əvvəldən saxlanmış imza şəkli ola bilər. Rəsmi qurumun öz qaydası varsa, yalnız görünən imza kifayət etməyə bilər.",
    ],
    steps: [
      "İmza gedəcək səhifəni və boş yeri seçin.",
      "İmzanı çəkin və ya saxlanmış imzanı qoyun. Sətirin üstünə çıxmasın.",
      "İmzalı nüsxəni yeni fayl kimi saxlayın. İmzası olmayan əsli ayrıca qalsın.",
    ],
    seo: seo(
      {
        title: "PDF necə imzalanır? — Nibras Code",
        description: "PDF imzalamaq görünən imzanı düzgün səhifəyə qoyur. İmzalı nüsxəni əsildən ayrı saxlayın.",
        keywords: "PDF imzalamaq, PDF-ə imza qoymaq, telefonda PDF imzası",
      },
      {
        title: "How to sign a PDF — Nibras Code",
        description: "Place a drawn or saved signature on the right page and keep the signed copy separate from the original.",
        keywords: "sign a PDF, add a signature to a PDF, sign a PDF on a phone",
      },
      {
        title: "PDF nasıl imzalanır? — Nibras Code",
        description: "Görünen imzayı doğru sayfaya koyun ve imzalı kopyayı asıldan ayrı saklayın.",
        keywords: "PDF imzalamak, PDF'e imza eklemek, telefonda PDF imzası",
      },
      {
        title: "كيف توقيع PDF؟ — Nibras Code",
        description: "ضع التوقيع الظاهر في الصفحة الصحيحة واحفظ النسخة الموقّعة بعيدًا عن الأصل.",
        keywords: "توقيع PDF, إضافة توقيع إلى PDF, توقيع PDF على الهاتف",
      },
      {
        title: "Как подписать PDF — Nibras Code",
        description: "Поставьте видимую подпись на нужную страницу и храните подписанную копию отдельно от оригинала.",
        keywords: "подписать PDF, поставить подпись в PDF, подпись PDF на телефоне",
      },
    ),
  },
  {
    slug: "pdf-e-sifre-qoymaq",
    title: "PDF-ə şifrə necə qoyulur?",
    keyword: "PDF şifrə qoymaq",
    paragraphs: [
      "PDF şifrə qoymaq faylı açmazdan əvvəl parol istəməkdir. Bu, faylın adını gizlətmir. Parolu bilən adam sənədi açır. Parolu unutsanız, içindəki mətn çox vaxt geri qayıtmır. Ona görə parolu etibarlı yerdə saxlayın və əsli şifrəsiz nüsxəsini özünüzdə ayrıca qoyun.",
    ],
    steps: [
      "Açılış parolu qoyun. Bəzi alətlər həm də çap və ya köçürməni ayrıca bağlayır.",
      "Parolu iki dəfə yoxlayın. Boşluq və böyük hərf fərq edir.",
      "Şifrəli faylı bağlayıb yenidən açın. Açılırsa, onu göndərin.",
    ],
    seo: seo(
      {
        title: "PDF-ə şifrə necə qoyulur? — Nibras Code",
        description: "PDF şifrə qoymaq açılışdan əvvəl parol istəyir. Parolu unutmayın və şifrəsiz əsli özünüzdə saxlayın.",
        keywords: "PDF şifrə qoymaq, PDF-ə parol qoymaq, PDF-i şifrələmək",
      },
      {
        title: "How to password-protect a PDF — Nibras Code",
        description: "A password asks for a code before the file opens. Keep the password, and keep an unlocked original for yourself.",
        keywords: "password protect a PDF, lock a PDF, add a password to a PDF",
      },
      {
        title: "PDF'e şifre nasıl konur? — Nibras Code",
        description: "Şifre, dosya açılmadan önce parola sorar. Parolayı unutmayın ve şifresiz aslı kendinizde tutun.",
        keywords: "PDF şifre koymak, PDF'e parola eklemek, PDF kilitlemek",
      },
      {
        title: "كيف وضع كلمة مرور على PDF؟ — Nibras Code",
        description: "كلمة المرور تُطلب قبل فتح الملف. لا تنسَها، وأبقِ نسخة بلا قفل عندك.",
        keywords: "وضع كلمة مرور على PDF, قفل PDF, حماية PDF بكلمة سر",
      },
      {
        title: "Как поставить пароль на PDF — Nibras Code",
        description: "Пароль спрашивается до открытия файла. Не потеряйте его и оставьте себе копию без пароля.",
        keywords: "поставить пароль на PDF, защитить PDF паролем, закрыть PDF паролем",
      },
    ),
  },
  {
    slug: "pdf-den-metn-cixarmaq",
    title: "PDF-dən mətn necə çıxarılır?",
    keyword: "PDF-dən mətn çıxarmaq",
    paragraphs: [
      "PDF-dən mətn çıxarmaq yazını seçib başqa yerə köçürməkdir. Mətn seçilirsə, sənəddə həqiqi yazı var və onu birbaşa götürmək olar. Seçilmirsə, səhifə şəkildir. Onda mətn tanıma lazımdır. Tanıma kiçik şriftdə, kölgədə və ərəb sətrində səhv edə bilər, ona görə nəticəni oxuyub yoxlayın.",
    ],
    steps: [
      "Bir abzası seçib köçürün. Alınırsa, qalanını da belə götürün.",
      "Seçilmirsə, tanıma işlədin.",
      "Ad, tarix və rəqəmləri əsli ilə tutuşdurun.",
    ],
    seo: seo(
      {
        title: "PDF-dən mətn necə çıxarılır? — Nibras Code",
        description: "PDF-dən mətn çıxarmaq seçilən yazını köçürür. Skan olunmuş səhifədə əvvəl mətn tanıma, sonra yoxlama lazımdır.",
        keywords: "PDF-dən mətn çıxarmaq, PDF mətnini köçürmək, PDF-dən yazı götürmək",
      },
      {
        title: "How to extract text from a PDF — Nibras Code",
        description: "Copy the text if you can select it. A scanned page needs recognition first, then a check of names and numbers.",
        keywords: "extract text from PDF, copy text from a PDF, OCR a PDF",
      },
      {
        title: "PDF'den metin nasıl çıkarılır? — Nibras Code",
        description: "Yazı seçiliyorsa kopyalayın. Taranmış sayfada önce tanıma, sonra ad ve rakam kontrolü gerekir.",
        keywords: "PDF'den metin çıkarmak, PDF metnini kopyalamak, PDF OCR",
      },
      {
        title: "كيف استخراج النص من PDF؟ — Nibras Code",
        description: "انسخ النص إذا كان قابلًا للتحديد. الصفحة الممسوحة تحتاج تعرّف النص ثم مراجعة الأسماء والأرقام.",
        keywords: "استخراج النص من PDF, نسخ نص PDF, تعرّف النص في PDF",
      },
      {
        title: "Как извлечь текст из PDF — Nibras Code",
        description: "Если текст выделяется, его копируют. Скану нужно распознавание, затем проверка имён и чисел.",
        keywords: "извлечь текст из PDF, скопировать текст PDF, распознать текст PDF",
      },
    ),
  },
  {
    slug: "pdf-scanner",
    title: "PDF Scanner nədir və necə işləyir?",
    keyword: "PDF scanner",
    paragraphs: [
      "PDF scanner kağız vərəqi telefonun kamerası ilə çəkib PDF edən alətdir. Məqsəd sadəcə şəkil saxlamaq deyil. Səhifəni düz çərçivəyə salıb bir və ya bir neçə vərəqi tək sənəddə toplamaqdır. Skan olunmuş səhifə əvvəl şəkildir. Üstündəki yazını seçmək üçün mətn tanıma ayrıca addımdır.",
    ],
    steps: [
      "Vərəqi düz qoyun. Əyri kağız sətri əyri göstərir.",
      "Kölgə və barmaq kadrda qalmasın. İşıq bərabər düşsün.",
      "Kənarlar çərçivəyə düşsün. Kəsilmiş sətir sonradan oxunmur.",
      "Bir neçə səhifə varsa, sıranı qarışdırmayın və sonunda bir PDF saxlayın.",
    ],
    seo: seo(
      {
        title: "PDF Scanner nədir və necə işləyir? — Nibras Code",
        description: "PDF scanner kağızı kamera ilə PDF edir. İşıq, kənar və səhifə sırası yazının oxunmasını müəyyən edir.",
        keywords: "PDF scanner, PDF skaner nədir, kağızı PDF skan etmək",
      },
      {
        title: "What a PDF scanner is and how it works — Nibras Code",
        description: "A PDF scanner turns paper into a PDF with the camera. Light, edges, and page order decide if the text stays readable.",
        keywords: "PDF scanner, how a PDF scanner works, scan paper to PDF",
      },
      {
        title: "PDF tarayıcı nedir ve nasıl çalışır? — Nibras Code",
        description: "PDF tarayıcı kâğıdı kamerayla PDF yapar. Işık, kenarlar ve sayfa sırası yazının okunmasını belirler.",
        keywords: "PDF scanner, PDF tarayıcı nedir, kâğıdı PDF tarama",
      },
      {
        title: "ما هو ماسح PDF وكيف يعمل؟ — Nibras Code",
        description: "ماسح PDF يحوّل الورق إلى PDF بالكاميرا. الضوء والحواف وترتيب الصفحات تحدد وضوح النص.",
        keywords: "PDF scanner, ما هو ماسح PDF, مسح الورق إلى PDF",
      },
      {
        title: "Что такое PDF-сканер и как он работает — Nibras Code",
        description: "PDF-сканер делает из бумаги PDF через камеру. Свет, края и порядок страниц решают, будет ли текст читаться.",
        keywords: "PDF scanner, что такое PDF сканер, сканировать бумагу в PDF",
      },
    ),
  },
  {
    slug: "nibras-pdf",
    title: NIBRAS_PDF_GUIDE.az.title,
    keyword: "Nibras PDF",
    paragraphs: NIBRAS_PDF_GUIDE.az.lead,
    seo: seo(
      {
        title: `${NIBRAS_PDF_GUIDE.az.title} — Nibras Code`,
        description: NIBRAS_PDF_GUIDE.az.description,
        keywords: NIBRAS_PDF_GUIDE.az.keywords,
      },
      {
        title: `${NIBRAS_PDF_GUIDE.en.title} — Nibras Code`,
        description: NIBRAS_PDF_GUIDE.en.description,
        keywords: NIBRAS_PDF_GUIDE.en.keywords,
      },
      {
        title: `${NIBRAS_PDF_GUIDE.tr.title} — Nibras Code`,
        description: NIBRAS_PDF_GUIDE.tr.description,
        keywords: NIBRAS_PDF_GUIDE.tr.keywords,
      },
      {
        title: `${NIBRAS_PDF_GUIDE.ar.title} — Nibras Code`,
        description: NIBRAS_PDF_GUIDE.ar.description,
        keywords: NIBRAS_PDF_GUIDE.ar.keywords,
      },
      {
        title: `${NIBRAS_PDF_GUIDE.ru.title} — Nibras Code`,
        description: NIBRAS_PDF_GUIDE.ru.description,
        keywords: NIBRAS_PDF_GUIDE.ru.keywords,
      },
    ),
  },
];

export function findResurs(slug: string) {
  return RESURSLAR.find((page) => page.slug === slug) ?? null;
}

export const OLD_PDF_SLUGS: Record<string, string> = {
  birlesdirme: "pdf-birlesdirmek",
  sixistirma: "pdf-sixisdirmak",
  sekil: "pdf-den-sekil-cixarmaq",
  word: "pdf-i-worde-cevirmek",
  redakte: "telefonda-pdf-redakte-etmek",
  imza: "pdf-imzalamaq",
  scanner: "pdf-scanner",
};
