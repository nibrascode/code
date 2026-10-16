import { l5 as t } from "./meta";
import type { OwnPageContent } from "./own-types";

/** Original text written for Nibras Code (not copied from any book). */
export const OWN_HTML: OwnPageContent = {
  baslangic: [
    {
      id: "skeleton",
      title: t("Səhifənin skeleti", "The page skeleton", "Sayfa iskeleti", "هيكل الصفحة", "Каркас страницы"),
      blocks: [
        {
          paragraphs: [t("Hər HTML səhifə eyni skeletlə başlayır. Bunu index.html adlı fayla yaz:", "Every HTML page starts with the same skeleton. Put this into a file named index.html:", "Her HTML sayfası aynı iskeletle başlar. Bunu index.html adlı bir dosyaya yaz:", "تبدأ كل صفحة HTML بالهيكل نفسه. اكتب هذا في ملف باسم index.html:", "Любая HTML-страница начинается с одного и того же каркаса. Запишите это в файл index.html:")],
          code: '<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="utf-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1">\n    <title>My first page</title>\n  </head>\n  <body>\n    <h1>Hello!</h1>\n    <p>This is my first web page.</p>\n  </body>\n</html>',
        },
      ],
    },
    {
      id: "open",
      title: t("Necə açmaq olar", "How to open it", "Nasıl açılır", "كيف تفتحها", "Как открыть"),
      blocks: [
        {
          ordered: true,
          list: [
            t("Faylı UTF-8 kodlaşdırması ilə saxla (VS Code-da standartdır).", "Save the file as UTF-8 (the default in VS Code).", "Dosyayı UTF-8 kodlamasıyla kaydet (VS Code'da varsayılan).", "احفظ الملف بترميز UTF-8 (الافتراضي في VS Code).", "Сохраните файл в UTF-8 (по умолчанию в VS Code)."),
            t("Fayla iki dəfə klik et — brauzerdə açılacaq.", "Double-click the file — it opens in your browser.", "Dosyaya çift tıkla — tarayıcıda açılır.", "انقر على الملف مرتين فيُفتح في المتصفح.", "Дважды щёлкните по файлу — он откроется в браузере."),
            t("Dəyişiklik etdikdən sonra saxla və brauzerdə səhifəni yenilə (F5).", "After editing, save and refresh the page (F5).", "Değişiklikten sonra kaydet ve sayfayı yenile (F5).", "بعد التعديل احفظ وحدّث الصفحة (F5).", "После правок сохраните файл и обновите страницу (F5)."),
          ],
        },
        {
          paragraphs: [t("Əsas fikir: <head> səhifə haqqında məlumatdır, <body> isə ekranda görünənlərdir.", "Key idea: <head> holds information about the page, <body> holds what is shown on screen.", "Ana fikir: <head> sayfa hakkındaki bilgidir, <body> ekranda görünenlerdir.", "الفكرة: <head> معلومات عن الصفحة و<body> ما يظهر على الشاشة.", "Главное: <head> — сведения о странице, <body> — то, что видно на экране.")],
        },
      ],
    },
  ],
  teqler: [
    {
      id: "text",
      title: t("Mətn teqləri", "Text tags", "Metin etiketleri", "وسوم النص", "Текстовые теги"),
      blocks: [
        {
          list: [
            t("<h1>…<h6> — başlıqlar (h1 səhifədə bir dənə olsun)", "<h1>…<h6> — headings (use one h1 per page)", "<h1>…<h6> — başlıklar (sayfada bir tane h1)", "<h1>…<h6> — العناوين (h1 واحد في الصفحة)", "<h1>…<h6> — заголовки (один h1 на страницу)"),
            t("<p> — abzas", "<p> — paragraph", "<p> — paragraf", "<p> — فقرة", "<p> — абзац"),
            t("<strong> və <em> — vacib və vurğulanan mətn", "<strong> and <em> — important and emphasised text", "<strong> ve <em> — önemli ve vurgulu metin", "<strong> و<em> — نص مهم ونص مؤكَّد", "<strong> и <em> — важный и выделенный текст"),
            t("<br> — sətir keçidi, <hr> — ayırıcı xətt", "<br> — line break, <hr> — divider line", "<br> — satır sonu, <hr> — ayırıcı çizgi", "<br> — سطر جديد، <hr> — خط فاصل", "<br> — перенос строки, <hr> — разделитель"),
          ],
        },
      ],
    },
    {
      id: "structure",
      title: t("Siyahı, link, şəkil, qutu", "Lists, links, images, boxes", "Liste, bağlantı, görsel, kutu", "القوائم والروابط والصور والصناديق", "Списки, ссылки, картинки, блоки"),
      blocks: [
        {
          list: [
            t("<ul> / <ol> + <li> — siyahı", "<ul> / <ol> + <li> — list", "<ul> / <ol> + <li> — liste", "<ul> / <ol> + <li> — قائمة", "<ul> / <ol> + <li> — список"),
            t("<a href=\"…\"> — link", "<a href=\"…\"> — link", "<a href=\"…\"> — bağlantı", "<a href=\"…\"> — رابط", "<a href=\"…\"> — ссылка"),
            t("<img src=\"…\" alt=\"…\"> — şəkil", "<img src=\"…\" alt=\"…\"> — image", "<img src=\"…\" alt=\"…\"> — görsel", "<img src=\"…\" alt=\"…\"> — صورة", "<img src=\"…\" alt=\"…\"> — изображение"),
            t("<div> — blok qutu, <span> — sətir daxili qutu (özlüyündə mənası yoxdur, stil üçündür)", "<div> — block box, <span> — inline box (no meaning by themselves, used for styling)", "<div> — blok kutu, <span> — satır içi kutu (kendi başına anlamı yok, stil içindir)", "<div> — صندوق كتلي، <span> — صندوق ضمن السطر (بلا معنى بذاته، للتنسيق)", "<div> — блочный контейнер, <span> — строчный (сами по себе без смысла, нужны для стилей)"),
            t("<button> — düymə, <input> — daxiletmə sahəsi", "<button> — button, <input> — input field", "<button> — düğme, <input> — giriş alanı", "<button> — زر، <input> — حقل إدخال", "<button> — кнопка, <input> — поле ввода"),
          ],
        },
        {
          code: '<h2>Shopping</h2>\n<ul>\n  <li>Milk</li>\n  <li>Bread</li>\n</ul>\n<p>Read more on <a href="https://developer.mozilla.org">MDN</a>.</p>',
        },
      ],
    },
  ],
  "link-sekil": [
    {
      id: "link",
      title: t("Link: href", "Links: href", "Bağlantı: href", "الروابط: href", "Ссылки: href"),
      blocks: [
        {
          paragraphs: [t("Link ünvanı href atributundadır. Başqa sayta keçid https:// ilə başlamalıdır; öz sayt daxilində isə fayl yolu yazılır.", "The address of a link goes in href. A link to another site must start with https://; inside your own site you write a file path.", "Bağlantı adresi href niteliğindedir. Başka siteye giden bağlantı https:// ile başlamalıdır; kendi siten içinde ise dosya yolu yazılır.", "عنوان الرابط في السمة href. الرابط إلى موقع آخر يجب أن يبدأ بـ https://، وداخل موقعك تكتب مسار الملف.", "Адрес ссылки задаётся в href. Ссылка на другой сайт должна начинаться с https://; внутри своего сайта указывают путь к файлу.")],
          code: '<a href="https://example.com" target="_blank" rel="noopener">External</a>\n<a href="about.html">About</a>\n<a href="#contact">Jump to contact</a>\n<a href="mailto:me@example.com">Email me</a>',
        },
      ],
    },
    {
      id: "img",
      title: t("Şəkil: src və alt", "Images: src and alt", "Görsel: src ve alt", "الصور: src وalt", "Изображения: src и alt"),
      blocks: [
        {
          code: '<img src="images/cat.jpg" alt="A grey cat sleeping on a sofa" width="400">',
        },
        {
          list: [
            t("src — şəklin yolu. Şəkil görünmürsə, ad və qovluq düzgünmü, böyük/kiçik hərf eynidirmi yoxla.", "src — the image path. If it does not show, check the file name, folder and upper/lower case.", "src — görselin yolu. Görünmüyorsa dosya adını, klasörü ve büyük/küçük harfi kontrol et.", "src — مسار الصورة. إن لم تظهر فتحقق من اسم الملف والمجلد وحالة الأحرف.", "src — путь к картинке. Если не видна, проверьте имя, папку и регистр букв."),
            t("alt — şəkil açılmadıqda və ekran oxuyucular üçün mətn təsviri. Boş qoyma; yalnız bəzək şəkli üçün alt=\"\".", "alt — a text description for when the image fails and for screen readers. Do not skip it; use alt=\"\" only for pure decoration.", "alt — görsel açılmazsa ve ekran okuyucular için metin açıklaması. Boş bırakma; yalnızca süs görselleri için alt=\"\".", "alt — وصف نصي عند تعذّر الصورة ولقارئات الشاشة. لا تهمله؛ استخدم alt=\"\" للزخرفة فقط.", "alt — текстовое описание на случай сбоя и для экранных дикторов. Не пропускайте; alt=\"\" — только для декора."),
            t("width/height yaz ki, səhifə yüklənərkən tullanmasın.", "Set width/height so the page does not jump while loading.", "width/height yaz ki sayfa yüklenirken kaymasın.", "حدد width/height كي لا تقفز الصفحة أثناء التحميل.", "Задайте width/height, чтобы страница не прыгала при загрузке."),
          ],
        },
      ],
    },
  ],
  form: [
    {
      id: "basic",
      title: t("Sadə form", "A simple form", "Basit bir form", "نموذج بسيط", "Простая форма"),
      blocks: [
        {
          code: '<form action="/subscribe" method="post">\n  <label for="email">Email</label>\n  <input id="email" name="email" type="email" required>\n\n  <label for="pw">Password</label>\n  <input id="pw" name="pw" type="password" minlength="8" required>\n\n  <button type="submit">Sign up</button>\n</form>',
        },
        {
          list: [
            t("<label for=\"id\"> sahəyə bağlanır — üzərinə klik edəndə sahə aktiv olur və ekran oxuyucu oxuyur.", "<label for=\"id\"> is tied to a field — clicking it focuses the field and screen readers read it.", "<label for=\"id\"> alana bağlanır — tıklayınca alan aktif olur, ekran okuyucu okur.", "<label for=\"id\"> مرتبط بحقل — النقر عليه يفعّل الحقل وتقرؤه قارئات الشاشة.", "<label for=\"id\"> связан с полем — клик по нему ставит фокус, а экранный диктор его читает."),
            t("name atributu olmadan sahənin dəyəri göndərilmir.", "Without a name attribute the field value is not sent.", "name niteliği olmadan alanın değeri gönderilmez.", "بدون السمة name لا تُرسَل قيمة الحقل.", "Без атрибута name значение поля не отправляется."),
            t("required, minlength, type=\"email\" brauzerdə sadə yoxlama verir; server yoxlaması yenə də lazımdır.", "required, minlength and type=\"email\" give simple browser validation; you still need server-side checks.", "required, minlength ve type=\"email\" tarayıcıda basit doğrulama sağlar; sunucu doğrulaması yine de gerekir.", "required وminlength وtype=\"email\" يوفّر تحققاً بسيطاً في المتصفح، ويبقى التحقق في الخادم لازماً.", "required, minlength и type=\"email\" дают простую проверку в браузере; серверная проверка всё равно нужна."),
          ],
        },
      ],
    },
    {
      id: "types",
      title: t("Sahə tipləri", "Field types", "Alan tipleri", "أنواع الحقول", "Типы полей"),
      blocks: [
        {
          paragraphs: [t("Ən çox işlənənlər: text, email, password, number, date, checkbox, radio, file, tel. Uzun mətn üçün <textarea>, seçim siyahısı üçün <select>.", "The most used: text, email, password, number, date, checkbox, radio, file, tel. Use <textarea> for long text and <select> for a drop-down.", "En çok kullanılanlar: text, email, password, number, date, checkbox, radio, file, tel. Uzun metin için <textarea>, açılır liste için <select>.", "الأكثر استخداماً: text وemail وpassword وnumber وdate وcheckbox وradio وfile وtel. للنص الطويل <textarea> وللقائمة المنسدلة <select>.", "Чаще всего: text, email, password, number, date, checkbox, radio, file, tel. Для длинного текста — <textarea>, для выпадающего списка — <select>.")],
        },
      ],
    },
  ],
  semantik: [
    {
      id: "why",
      title: t("Niyə semantik teqlər?", "Why semantic tags?", "Neden anlamsal etiketler?", "لماذا الوسوم الدلالية؟", "Зачем семантические теги?"),
      blocks: [
        {
          paragraphs: [t("<div> hər şeyə yarayır, amma heç nə demir. <nav>, <main> kimi teqlər brauzerə, ekran oxuyuculara və axtarış mühərriklərinə səhifənin hansı hissənin nə olduğunu bildirir.", "<div> fits anything but says nothing. Tags like <nav> and <main> tell browsers, screen readers and search engines what each part of the page is.", "<div> her şeye uyar ama hiçbir şey söylemez. <nav>, <main> gibi etiketler tarayıcıya, ekran okuyuculara ve arama motorlarına sayfanın hangi bölümünün ne olduğunu bildirir.", "<div> يصلح لكل شيء لكنه لا يقول شيئاً. وسوم مثل <nav> و<main> تخبر المتصفح وقارئات الشاشة ومحركات البحث ما هو كل جزء من الصفحة.", "<div> подходит для всего, но ничего не сообщает. Теги вроде <nav> и <main> сообщают браузерам, экранным дикторам и поисковикам, что за часть страницы перед ними.")],
        },
      ],
    },
    {
      id: "layout",
      title: t("Tipik səhifə quruluşu", "Typical page layout", "Tipik sayfa düzeni", "بنية الصفحة المعتادة", "Типичная структура страницы"),
      blocks: [
        {
          code: '<body>\n  <header>\n    <h1>My site</h1>\n    <nav><a href="/">Home</a> <a href="/blog">Blog</a></nav>\n  </header>\n  <main>\n    <article>\n      <h2>Post title</h2>\n      <p>…</p>\n    </article>\n    <aside>Related links</aside>\n  </main>\n  <footer>© 2026</footer>\n</body>',
        },
        {
          list: [
            t("Səhifədə bir <main> olsun.", "Have only one <main> per page.", "Sayfada tek bir <main> olsun.", "اجعل <main> واحداً في الصفحة.", "На странице — один <main>."),
            t("Başlıqlar sıra ilə getsin: h1 → h2 → h3, səviyyə atlama.", "Keep headings in order: h1 → h2 → h3, do not skip levels.", "Başlıklar sırayla gitsin: h1 → h2 → h3, seviye atlama.", "رتّب العناوين: h1 ← h2 ← h3 دون تخطي مستوى.", "Заголовки по порядку: h1 → h2 → h3, не пропускайте уровни."),
            t("Düymə üçün <button>, link üçün <a> işlət; <div onclick> klaviatura ilə işləmir.", "Use <button> for buttons and <a> for links; a <div onclick> does not work with the keyboard.", "Düğme için <button>, bağlantı için <a> kullan; <div onclick> klavyeyle çalışmaz.", "استخدم <button> للأزرار و<a> للروابط؛ فـ <div onclick> لا يعمل بلوحة المفاتيح.", "Для кнопок — <button>, для ссылок — <a>; <div onclick> не работает с клавиатуры."),
          ],
        },
      ],
    },
  ],
  xeta: [
    {
      id: "list",
      title: t("8 tipik səhv", "8 typical mistakes", "8 tipik hata", "8 أخطاء شائعة", "8 типичных ошибок"),
      blocks: [
        {
          ordered: true,
          list: [
            t("Teq bağlanmayıb: <p> açılıb, </p> yoxdur — sonrakı hissə pozulur.", "Unclosed tag: <p> opened with no </p> — the rest of the page breaks.", "Etiket kapanmamış: <p> açılmış, </p> yok — sonraki kısım bozulur.", "وسم غير مغلق: فُتح <p> دون </p> فيتعطل ما بعده.", "Тег не закрыт: <p> открыт, </p> нет — ломается остальная часть."),
            t("Yanlış yerləşdirmə: <b><i>…</b></i> əvəzinə <b><i>…</i></b>.", "Wrong nesting: write <b><i>…</i></b>, not <b><i>…</b></i>.", "Yanlış iç içe yazım: <b><i>…</b></i> yerine <b><i>…</i></b>.", "تداخل خاطئ: اكتب <b><i>…</i></b> وليس <b><i>…</b></i>.", "Неверная вложенность: <b><i>…</i></b>, а не <b><i>…</b></i>."),
            t("Fayl adı: index.html.txt kimi gizli .txt (Windows-da uzantıları göstər).", "File name: a hidden .txt, like index.html.txt (show file extensions in Windows).", "Dosya adı: index.html.txt gibi gizli .txt (Windows'ta uzantıları göster).", "اسم الملف: امتداد .txt مخفي مثل index.html.txt (أظهر الامتدادات في ويندوز).", "Имя файла: скрытое .txt, как index.html.txt (включите показ расширений в Windows)."),
            t("Şəkil yolu və böyük/kiçik hərf: Cat.jpg ≠ cat.jpg.", "Image path and case: Cat.jpg ≠ cat.jpg.", "Görsel yolu ve büyük/küçük harf: Cat.jpg ≠ cat.jpg.", "مسار الصورة وحالة الأحرف: Cat.jpg ≠ cat.jpg.", "Путь к картинке и регистр: Cat.jpg ≠ cat.jpg."),
            t("Dırnaq unudulub: href=\"a.html (bağlayıcı dırnaq yoxdur).", "Missing quote: href=\"a.html (no closing quote).", "Tırnak unutulmuş: href=\"a.html (kapanış tırnağı yok).", "علامة اقتباس ناقصة: href=\"a.html (بلا إغلاق).", "Забыта кавычка: href=\"a.html (нет закрывающей)."),
            t("Kodlaşdırma: <meta charset=\"utf-8\"> yoxdur — ə, ö, ş hərfləri pozulur.", "Encoding: no <meta charset=\"utf-8\"> — letters like ə, ö, ş break.", "Kodlama: <meta charset=\"utf-8\"> yok — ə, ö, ş gibi harfler bozulur.", "الترميز: غياب <meta charset=\"utf-8\"> يفسد الأحرف الخاصة.", "Кодировка: нет <meta charset=\"utf-8\"> — ломаются буквы вроде ə, ö, ş."),
            t("Brauzer köhnə versiyanı göstərir: Ctrl+F5 ilə yenilə.", "The browser shows an old copy: hard-refresh with Ctrl+F5.", "Tarayıcı eski sürümü gösteriyor: Ctrl+F5 ile yenile.", "المتصفح يعرض نسخة قديمة: حدّث بقوة بـ Ctrl+F5.", "Браузер показывает старую копию: обновите по Ctrl+F5."),
            t("Dəyişikliyi saxlamamısan (Ctrl+S).", "You did not save the file (Ctrl+S).", "Dosyayı kaydetmedin (Ctrl+S).", "لم تحفظ الملف (Ctrl+S).", "Вы не сохранили файл (Ctrl+S)."),
          ],
        },
      ],
    },
    {
      id: "check",
      title: t("Yoxlama vasitələri", "Tools for checking", "Kontrol araçları", "أدوات الفحص", "Чем проверять"),
      blocks: [
        {
          paragraphs: [t("Brauzerdə F12 aç və Elements bölməsinə bax: brauzer HTML-i necə başa düşdüyünü göstərir. Rəsmi yoxlayıcı üçün validator.w3.org saytından istifadə et.", "Press F12 in the browser and open Elements: it shows how the browser understood your HTML. For an official check use validator.w3.org.", "Tarayıcıda F12'ye bas ve Elements bölümüne bak: tarayıcının HTML'ni nasıl anladığını gösterir. Resmî kontrol için validator.w3.org kullan.", "اضغط F12 في المتصفح وافتح Elements: يعرض كيف فهم المتصفح شيفرتك. وللفحص الرسمي استخدم validator.w3.org.", "Нажмите F12 в браузере и откройте Elements: видно, как браузер понял ваш HTML. Для официальной проверки — validator.w3.org.")],
        },
      ],
    },
  ],
};
