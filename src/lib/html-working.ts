import type { Lang } from "@/lib/i18n";
import type { ProgrammingSection } from "@/lib/programming";

function section(title: string, intro: string, blocks: ProgrammingSection["blocks"]): ProgrammingSection {
  return { id: "islek", title, blocks: [{ paragraphs: [intro] }, ...(blocks ?? [])] };
}

const CARD = `<article class="kart">
  <h2>Python</h2>
  <p>Oxunaqlı dildir. Kiçik proqram üçün uyğundur.</p>
</article>

<style>
  .kart {
    max-width: 280px;
    background: #f8fafc;
    border: 1px solid #e2e8f0;
    border-radius: 12px;
    padding: 16px;
  }
</style>`;

const MENU = `<nav>
  <a href="/programming/python">Python</a>
  <a href="/programming/javascript">JavaScript</a>
</nav>

<style>
  nav { display: flex; gap: 16px; }
  nav a { color: #1d4ed8; text-decoration: none; }
</style>`;

const FORM = `<form>
  <label>
    Ad
    <input name="ad" type="text">
  </label>
  <button type="submit">Göndər</button>
</form>

<style>
  form {
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 240px;
  }
  input, button { padding: 8px; }
</style>`;

const PAGE = `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="utf-8">
  <title>Qeyd</title>
  <style>
    body { margin: 0; font-family: sans-serif; }
    header { background: #111827; color: white; padding: 16px; }
    main { padding: 16px; }
  </style>
</head>
<body>
  <header>Nibras Code</header>
  <main>
    <h1>Birinci qeyd</h1>
    <p>Bu sətir əsas hissədə durur.</p>
  </main>
</body>
</html>`;

export function htmlWorking(lang: Lang): ProgrammingSection {
  if (lang === "en") {
    return section(
      "Working examples",
      "The short samples above show one piece. These ones are small pages you can save as an .html file and open in the browser. Change a color or a word, save again, and refresh. HTML says what is there. CSS says how it looks.",
      [
        {
          heading: "A card",
          paragraphs: [
            "article is the box. h2 is the title inside it, p is the sentence. The class name kart is the hook. CSS finds every element with that class and gives it a width, a light background, a thin border, and space inside. Without the class, the words still show, but they have no box.",
          ],
          code: CARD,
          after: ["The card stays under 280 pixels wide. On a wide screen it does not stretch across the whole page."],
        },
        {
          heading: "Two links in a row",
          paragraphs: [
            "nav holds the links. Without CSS they sit one under the other, or as plain blue underlined words. display: flex puts them side by side. gap is the empty space between them. text-decoration: none removes the underline. The address in href is where the link goes.",
          ],
          code: MENU,
          after: ["The words stay blue. The underline is gone. If flex is removed, the row falls back to the browser's normal line."],
        },
        {
          heading: "A short form",
          paragraphs: [
            "label is the name next to the field. input is the empty line where a person types. button is what they press. The form itself is only a column: the field, then the button, with a small gap. This example does not send the name anywhere. Sending needs a server, or JavaScript. Here you only see the shape.",
          ],
          code: FORM,
          after: ["The field and the button share the same width, 240 pixels. The typed name is not saved by this page alone."],
        },
        {
          heading: "A page with a dark bar",
          paragraphs: [
            "This is a whole file, not a piece. header is the dark strip at the top. main is the white part under it. body { margin: 0 } removes the white frame the browser adds by itself. The color and the padding are CSS. The words Nibras Code and Birinci qeyd are HTML. Save it as note.html and open that file.",
          ],
          code: PAGE,
          after: ["The top bar is dark and the text on it is white. The heading sits below the bar, not inside it."],
        },
      ],
    );
  }
  if (lang === "tr") {
    return section(
      "Çalışan örnekler",
      "Yukarıdaki kısa örnekler bir parçayı gösterir. Bunlar tarayıcıda açabileceğin küçük sayfalardır. Dosyayı .html diye kaydet. Bir rengi veya sözü değiştir, yeniden kaydet ve sayfayı yenile. HTML ne olduğunu söyler. CSS nasıl göründüğünü söyler.",
      [
        {
          heading: "Bir kart",
          paragraphs: [
            "article kutudur. h2 içindeki başlıktır, p cümledir. kart sınıfı kancadır. CSS o sınıftaki her öğeye genişlik, açık zemin, ince çizgi ve iç boşluk verir. Sınıf olmazsa sözler yine görünür, ama kutu olmaz.",
          ],
          code: CARD,
          after: ["Kart 280 pikselden geniş olmaz. Geniş ekranda sayfanın tamamına yayılmaz."],
        },
        {
          heading: "Yan yana iki bağlantı",
          paragraphs: [
            "nav bağlantıları tutar. CSS olmazsa alt alta dururlar ya da altı çizili mavi söz kalırlar. display: flex onları yan yana koyar. gap aralarındaki boşluktur. text-decoration: none alt çizgiyi kaldırır. href içindeki adres bağlantının gittiği yerdir.",
          ],
          code: MENU,
          after: ["Sözler mavi kalır. Alt çizgi gider. flex kalkınca satır tarayıcının olağan düzenine döner."],
        },
        {
          heading: "Kısa bir form",
          paragraphs: [
            "label alanın adıdır. input kişinin yazdığı boş satırdır. button basılan yerdir. Formun kendisi bir sütundur: önce alan, sonra düğme, arada küçük boşluk. Bu örnek adı bir yere göndermez. Göndermek sunucu ya da JavaScript ister. Burada yalnız biçimi görürsün.",
          ],
          code: FORM,
          after: ["Alan ve düğme aynı genişliktedir, 240 piksel. Yazılan ad bu sayfa ile tek başına saklanmaz."],
        },
        {
          heading: "Koyu şeritli sayfa",
          paragraphs: [
            "Bu bir parça değil, bütün dosyadır. header üstteki koyu şerittir. main onun altındaki beyaz yerdir. body { margin: 0 } tarayıcının kendi eklediği beyaz çerçeveyi kaldırır. Renk ve boşluk CSS'tir. Nibras Code ve Birinci qeyd sözleri HTML'dir. Dosyayı note.html diye kaydet ve aç.",
          ],
          code: PAGE,
          after: ["Üst şerit koyudur, üstündeki yazı beyazdır. Başlık şeridin içinde değil, altında durur."],
        },
      ],
    );
  }
  if (lang === "ar") {
    return section(
      "أمثلة تعمل",
      "الأمثلة القصيرة أعلاه تُظهر قطعة واحدة. هذه صفحات صغيرة تحفظها بامتداد html وتفتحها في المتصفح. غيّر لوناً أو كلمة، احفظ مرة أخرى، ثم حدّث الصفحة. HTML يقول ماذا يوجد. CSS يقول كيف يبدو.",
      [
        {
          heading: "بطاقة",
          paragraphs: [
            "article هو الصندوق. h2 العنوان داخله وp الجملة. اسم الصنف kart هو الخطاف. CSS يجد كل عنصر بهذا الصنف ويعطيه عرضاً وخلفية فاتحة وحداً رقيقاً وفراغاً من الداخل. بلا الصنف تبقى الكلمات ظاهرة لكن بلا صندوق.",
          ],
          code: CARD,
          after: ["البطاقة لا تزيد على 280 بكسل. في الشاشة العريضة لا تمتد على الصفحة كلها."],
        },
        {
          heading: "رابطان في صف واحد",
          paragraphs: [
            "nav يمسك الروابط. بلا CSS يقفان تحت بعضهما أو يبقيان كلاماً أزرق تحته خط. display: flex يضعهما جنباً إلى جنب. gap هو الفراغ بينهما. text-decoration: none يزيل الخط. العنوان داخل href هو المكان الذي يذهب إليه الرابط.",
          ],
          code: MENU,
          after: ["الكلمات تبقى زرقاء. الخط يختفي. إذا أزلت flex يرجع الصف إلى ترتيب المتصفح العادي."],
        },
        {
          heading: "نموذج قصير",
          paragraphs: [
            "label هو اسم الحقل. input هو السطر الفارغ الذي يكتب فيه الإنسان. button هو ما يُضغط. النموذج نفسه عمود: الحقل ثم الزر وبينهما فراغ صغير. هذا المثال لا يرسل الاسم إلى مكان. الإرسال يحتاج خادماً أو جافاسكريبت. هنا ترى الشكل فقط.",
          ],
          code: FORM,
          after: ["الحقل والزر بعرض واحد، 240 بكسل. الاسم المكتوب لا يُحفظ بهذه الصفحة وحدها."],
        },
        {
          heading: "صفحة بشريط غامق",
          paragraphs: [
            "هذا ملف كامل لا قطعة. header هو الشريط الغامق في الأعلى. main هو المكان الأبيض تحته. body { margin: 0 } يزيل الإطار الأبيض الذي يضيفه المتصفح بنفسه. اللون والفراغ CSS. كلمتا Nibras Code وBirinci qeyd هما HTML. احفظه باسم note.html وافتحه.",
          ],
          code: PAGE,
          after: ["الشريط الأعلى غامق والكتابة عليه بيضاء. العنوان يقف تحت الشريط لا داخله."],
        },
      ],
    );
  }
  if (lang === "ru") {
    return section(
      "Рабочие примеры",
      "Короткие примеры выше показывают один кусок. Эти можно сохранить как файл .html и открыть в браузере. Поменяй цвет или слово, сохрани снова и обнови страницу. HTML говорит, что там есть. CSS говорит, как это выглядит.",
      [
        {
          heading: "Карточка",
          paragraphs: [
            "article — это коробка. h2 — заголовок внутри, p — предложение. Имя класса kart — крючок. CSS находит каждый элемент с этим классом и даёт ему ширину, светлый фон, тонкую рамку и место внутри. Без класса слова всё равно видны, но коробки нет.",
          ],
          code: CARD,
          after: ["Карточка не шире 280 пикселей. На широком экране она не растягивается на всю страницу."],
        },
        {
          heading: "Две ссылки в ряд",
          paragraphs: [
            "nav держит ссылки. Без CSS они стоят одна под другой или остаются синими словами с подчёркиванием. display: flex ставит их рядом. gap — пустое место между ними. text-decoration: none убирает подчёркивание. Адрес в href — куда ведёт ссылка.",
          ],
          code: MENU,
          after: ["Слова остаются синими. Подчёркивание уходит. Если убрать flex, ряд возвращается к обычному порядку браузера."],
        },
        {
          heading: "Короткая форма",
          paragraphs: [
            "label — имя поля. input — пустая строка, куда человек пишет. button — то, что нажимают. Сама форма — столбец: поле, потом кнопка, между ними небольшой зазор. Этот пример никуда не отправляет имя. Отправка нужна серверу или JavaScript. Здесь видна только форма.",
          ],
          code: FORM,
          after: ["Поле и кнопка одной ширины, 240 пикселей. Написанное имя эта страница сама не хранит."],
        },
        {
          heading: "Страница с тёмной полосой",
          paragraphs: [
            "Это целый файл, не кусок. header — тёмная полоса сверху. main — белое место под ней. body { margin: 0 } убирает белую рамку, которую браузер добавляет сам. Цвет и отступ — это CSS. Слова Nibras Code и Birinci qeyd — это HTML. Сохрани как note.html и открой.",
          ],
          code: PAGE,
          after: ["Верхняя полоса тёмная, текст на ней белый. Заголовок стоит под полосой, не внутри неё."],
        },
      ],
    );
  }
  return section(
    "İşlək nümunələr",
    "Yuxarıdakı qısa nümunələr bir parçanı göstərir. Bunlar isə brauzerdə aça biləcəyin kiçik səhifələrdir. Faylı .html adı ilə saxla. Rəngi və ya sözü dəyiş, yenidən saxla və səhifəni yenilə. HTML nə olduğunu deyir. CSS necə göründüyünü deyir.",
    [
      {
        heading: "Kart",
        paragraphs: [
          "article qutudur. h2 onun içindəki başlıqdır, p isə cümlədir. kart sinfi qarmaqdır. CSS həmin sinifdə olan hər elementə en, açıq fon, nazik xətt və iç boşluq verir. Sinif olmasa, sözlər yenə görünər, amma qutu olmaz.",
        ],
        code: CARD,
        after: ["Kart 280 pikseldən enli olmur. Geniş ekranda səhifənin bütün eninə yayılmır."],
      },
      {
        heading: "Yan-yana iki keçid",
        paragraphs: [
          "nav keçidləri tutur. CSS olmasa, onlar alt-alta durur və ya altı xətli mavi söz qalır. display: flex onları yan-yana qoyur. gap aralarındakı boşluqdur. text-decoration: none alt xətti götürür. href içindəki ünvan keçidin getdiyi yerdir.",
        ],
        code: MENU,
        after: ["Sözlər mavi qalır. Alt xətt gedir. flex silinəndə sıra brauzerin adi düzülüşünə qayıdır."],
      },
      {
        heading: "Qısa forma",
        paragraphs: [
          "label sahənin adıdır. input adamın yazdığı boş sətirdir. button basılan yerdir. Formanın özü bir sütundur: əvvəl sahə, sonra düymə, arada kiçik boşluq. Bu nümunə adı heç yerə göndərmir. Göndərmək server və ya JavaScript istəyir. Burada yalnız görünüşü görürsən.",
        ],
        code: FORM,
        after: ["Sahə və düymə eyni endədir, 240 piksel. Yazılan ad bu səhifə ilə tək saxlanmır."],
      },
      {
        heading: "Tünd zolaqlı səhifə",
        paragraphs: [
          "Bu parça deyil, bütöv fayldır. header yuxarıdakı tünd zolaqdır. main onun altındakı ağ yerdir. body { margin: 0 } brauzerin özünün qoyduğu ağ çərçivəni götürür. Rəng və boşluq CSS-dir. Nibras Code və Birinci qeyd sözləri HTML-dir. Faylı note.html adı ilə saxla və aç.",
        ],
        code: PAGE,
        after: ["Üst zolaq tünddür, üstündəki yazı ağdır. Başlıq zolağın içində yox, altında durur."],
      },
    ],
  );
}
