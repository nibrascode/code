import type { Lang } from "@/lib/i18n";
import type { ProgrammingBlock, ProgrammingSection } from "@/lib/programming";
import { htmlWorking } from "@/lib/html-working";

const TITLES: Record<string, Record<Lang, string>> = {
  "what-are-html-css": {
    az: "HTML və CSS nədir?",
    en: "What Are HTML and CSS?",
    tr: "HTML ve CSS Nedir?",
    ar: "ما هما HTML وCSS؟",
    ru: "Что такое HTML и CSS?",
  },
  "what-are-html-css-used-for": {
    az: "HTML və CSS nə üçün istifadə olunur?",
    en: "What Are HTML and CSS Used For?",
    tr: "HTML ve CSS Ne İçin Kullanılır?",
    ar: "فيمَ يُستخدم HTML وCSS؟",
    ru: "Для чего используются HTML и CSS?",
  },
  "what-can-you-do": {
    az: "HTML və CSS ilə nələr etmək olar?",
    en: "What Can You Do with HTML and CSS?",
    tr: "HTML ve CSS ile Neler Yapılabilir?",
    ar: "ماذا يمكن أن تفعل باستخدام HTML وCSS؟",
    ru: "Что можно делать с HTML и CSS?",
  },
  "is-it-hard": {
    az: "HTML və CSS öyrənmək çətindirmi?",
    en: "Are HTML and CSS Difficult to Learn?",
    tr: "HTML ve CSS Öğrenmek Zor mu?",
    ar: "هل تعلم HTML وCSS صعب؟",
    ru: "Сложно ли изучать HTML и CSS?",
  },
  "advantages-and-disadvantages": {
    az: "Üstünlükləri və çatışmazlıqları",
    en: "Advantages and Disadvantages",
    tr: "Avantajları ve Dezavantajları",
    ar: "المميزات والعيوب",
    ru: "Преимущества и недостатки",
  },
  "syntax-and-basic-concepts": {
    az: "Sintaksis və əsas anlayışlar",
    en: "Syntax and Basic Concepts",
    tr: "Sözdizimi ve Temel Kavramlar",
    ar: "البناء والمفاهيم الأساسية",
    ru: "Синтаксис и основные понятия",
  },
  "code-examples": {
    az: "Kod nümunələri",
    en: "Code Examples",
    tr: "Kod Örnekleri",
    ar: "أمثلة على الأكواد",
    ru: "Примеры кода",
  },
  faq: {
    az: "Tez-tez verilən suallar",
    en: "Frequently Asked Questions",
    tr: "Sık Sorulan Sorular",
    ar: "الأسئلة الشائعة",
    ru: "Часто задаваемые вопросы",
  },
};

const ORDER = [
  "what-are-html-css",
  "what-are-html-css-used-for",
  "what-can-you-do",
  "is-it-hard",
  "advantages-and-disadvantages",
  "syntax-and-basic-concepts",
  "code-examples",
  "faq",
] as const;

const BODIES: Record<Lang, Record<(typeof ORDER)[number], readonly ProgrammingBlock[]>> = {
  az: {
    "what-are-html-css": [
      {
        paragraphs: [
          "HTML veb səhifənin quruluşunu yazmaq üçün istifadə olunan işarələmə dilidir. Başlıq, abzas, şəkil, keçid və forma HTML ilə səhifəyə yerləşdirilir. HTML proqramlaşdırma dili deyil. O, brauzerə «burada nə var» deyə məlumat verir.",
          "CSS həmin quruluşun görünüşünü yazır. Rəng, ölçü, şrift, boşluq və elementlərin yan-yana və ya alt-alta düzülməsi CSS-in işidir. CSS də proqramlaşdırma dili deyil. O, üslub dilidir.",
          "Brauzer əvvəl HTML-i oxuyur, sonra CSS qaydalarını uyğun elementlərə tətbiq edir. Səhifənin davranışı, məsələn düyməyə basılanda nə baş verməsi, adətən JavaScript ilə yazılır.",
        ],
      },
    ],
    "what-are-html-css-used-for": [
      {
        paragraphs: ["HTML və CSS veb səhifənin görünən hissəsində istifadə olunur:"],
        list: [
          "Məqalə və sadə saytlar",
          "Formalar və düymələr",
          "Menyu və səhifə düzülüşü",
          "Şəkil və mətnin yerləşdirilməsi",
          "Telefon və kompüter ekranına uyğun görünüş",
        ],
      },
      {
        paragraphs: [
          "Bir çox veb tətbiqin gördüyünüz qatı da HTML və CSS üzərində qurulur. Məlumatı hesablamaq və saxlamaq isə başqa hissənin işidir.",
        ],
      },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["HTML və CSS ilə səhifənin quruluşunu və görünüşünü hazırlamaq olar:"],
        list: [
          "Başlıq və mətn yazmaq",
          "Şəkil və keçid əlavə etmək",
          "Düymə və formanın görünüşünü vermək",
          "Elementləri sətir və sütun kimi düzmək",
          "Ekranın eninə görə görünüşü dəyişmək",
        ],
      },
      {
        heading: "Sadə nümunə",
        code: `<h1>Nibras Code</h1>
<p>Sadə səhifə.</p>`,
        after: ["Bu HTML bir başlıq və bir abzas yaradır. Rəng və ölçü üçün ayrıca CSS yazılır."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "İlk HTML səhifəsini yazmaq çətin deyil. Bir neçə teq və bir CSS qaydası ilə brauzerdə nəticə görünür. Çətinlik səhifə böyüdükcə, elementlər bir-birinin içində qarışanda və eyni görünüşü bir neçə ekranda saxlamaq lazım olanda başlayır.",
          "Başlanğıc üçün bu sıra faydalıdır:",
        ],
        ordered: true,
        list: [
          "Başlıq, abzas, keçid və şəkil teqləri",
          "Teqin açılışı və bağlanışı",
          "CSS selektoru: hansı elementə tətbiq olunur",
          "Rəng, şrift və kənar boşluq",
          "Elementin eni və hündürlüyü",
          "Elementləri yan-yana düzmək",
          "Kiçik bir səhifəni özün yazmaq",
        ],
      },
      {
        paragraphs: ["Hazır şablonu kopyalamaqdan çox, kiçik səhifəni özün dəyişmək daha yaxşı öyrədir."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Üstünlükləri",
        list: [
          "Sadə səhifə brauzerdə birbaşa açılır",
          "Başlanğıc nümunələr qısadır və nəticə dərhal görünür",
          "Demək olar ki, bütün veb səhifələr bu iki dilin üzərindədir",
          "HTML məzmunu, CSS isə görünüşü ayrı saxlamağa kömək edir",
          "Dilin özü üçün ayrıca ödəniş yoxdur",
        ],
      },
      {
        heading: "Çatışmazlıqları",
        list: [
          "Tək başına hesab, giriş və məlumat məntiqi yazmır",
          "Böyük saytda CSS qaydaları bir-birinə qarışa bilər",
          "Eyni səhifəni bir neçə brauzerdə yoxlamaq lazım gəlir",
          "Görünüş düzəlmirsə, səbəb çox vaxt teqin səhv bağlanması və ya selektorun uyğun gəlməməsidir",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "HTML elementi adətən açılış və bağlanış teqindən ibarətdir. CSS qaydası isə selektor və əyri mötərizə içindəki xüsusiyyətlərdən ibarətdir.",
        ],
      },
      {
        heading: "HTML",
        code: `<h1>Nibras Code</h1>
<p>Bu bir abzasdır.</p>
<a href="https://nibrascode.com">Sayta keç</a>`,
      },
      {
        heading: "CSS",
        code: `h1 {
  color: #1d4ed8;
  font-size: 32px;
}

p {
  line-height: 1.6;
}`,
      },
      {
        heading: "Harada yazılır",
        paragraphs: [
          "CSS ayrı faylda saxlanıb HTML-ə bağlana bilər. Kiçik nümunədə isə style teqinin içində də yazıla bilər. Böyük səhifədə ayrı fayl daha səliqəlidir.",
        ],
      },
    ],
    "code-examples": [
      {
        heading: "Kiçik səhifə",
        code: `<!DOCTYPE html>
<html lang="az">
  <head>
    <meta charset="utf-8">
    <title>Nibras Code</title>
    <style>
      body { font-family: sans-serif; }
      h1 { color: #1d4ed8; }
    </style>
  </head>
  <body>
    <h1>Nibras Code</h1>
    <p>HTML quruluşu, CSS isə rəngi yazır.</p>
  </body>
</html>`,
      },
      {
        heading: "Keçid və şəkil",
        code: `<a href="https://nibrascode.com">Nibras Code</a>
<img src="logo.png" alt="Nibras Code nişanı">`,
      },
      {
        heading: "Sinif ilə üslub",
        code: `<p class="qeyd">Qısa qeyd.</p>

<style>
  .qeyd {
    background: #f3f4f6;
    padding: 12px;
  }
</style>`,
      },
    ],
    faq: [
      {
        heading: "HTML nədir?",
        paragraphs: ["HTML veb səhifənin quruluşunu yazan işarələmə dilidir. Başlıq, mətn, şəkil və keçid onunla verilir."],
      },
      {
        heading: "CSS nədir?",
        paragraphs: ["CSS səhifənin görünüşünü yazan üslub dilidir. Rəng, ölçü, şrift və düzülüş onunla verilir."],
      },
      {
        heading: "HTML proqramlaşdırma dilidirmi?",
        paragraphs: ["Xeyr. HTML işarələmə dilidir. Səhifədə nəyin olduğunu bildirir, hesab və şərt yazmır."],
      },
      {
        heading: "CSS olmadan səhifə açılırmı?",
        paragraphs: ["Bəli. Brauzer HTML-i onsuz da göstərir. Görünüş isə sadə və səliqəsiz qala bilər."],
      },
      {
        heading: "HTML, CSS və JavaScript eynidirmi?",
        paragraphs: ["Xeyr. HTML quruluşu, CSS görünüşü, JavaScript isə səhifənin davranışını yazır."],
      },
      {
        heading: "Öyrənmək üçün ayrıca proqram almaq lazımdırmı?",
        paragraphs: ["Xeyr. Başlanğıc üçün mətn redaktoru və brauzer kifayətdir. Faylı .html kimi saxlayıb brauzerdə açmaq olar."],
      },
      {
        heading: "HTML və CSS pulsuzdur?",
        paragraphs: ["Bəli. Onları yazmaq və brauzerdə açmaq üçün dilin özünə görə ödəniş yoxdur."],
      },
    ],
  },
  en: {
    "what-are-html-css": [
      {
        paragraphs: [
          "HTML is a markup language used to write the structure of a web page. A heading, a paragraph, an image, a link, and a form are placed on the page with HTML. HTML is not a programming language. It tells the browser what is there.",
          "CSS writes how that structure looks. Color, size, typeface, spacing, and whether items sit side by side or one under another are the job of CSS. CSS is not a programming language either. It is a style language.",
          "The browser reads the HTML first, then applies the CSS rules to the matching elements. What happens when a button is pressed is usually written in JavaScript.",
        ],
      },
    ],
    "what-are-html-css-used-for": [
      {
        paragraphs: ["HTML and CSS are used for the visible part of a web page:"],
        list: [
          "Articles and simple sites",
          "Forms and buttons",
          "Menus and page layout",
          "Placing images and text",
          "A layout that fits a phone and a computer screen",
        ],
      },
      {
        paragraphs: [
          "The part you see in many web applications is also built on HTML and CSS. Calculating and storing data belongs to another part of the system.",
        ],
      },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["With HTML and CSS you can prepare the structure and the look of a page:"],
        list: [
          "Write headings and text",
          "Add an image and a link",
          "Style a button and a form",
          "Place elements in rows and columns",
          "Change the layout when the screen width changes",
        ],
      },
      {
        heading: "A simple example",
        code: `<h1>Nibras Code</h1>
<p>A simple page.</p>`,
        after: ["This HTML creates one heading and one paragraph. Color and size are written in separate CSS."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "Writing a first HTML page is not hard. A few tags and one CSS rule already show a result in the browser. It gets harder when the page grows, when elements sit inside one another, and when the same look must hold on more than one screen size.",
          "This order is useful at the start:",
        ],
        ordered: true,
        list: [
          "Heading, paragraph, link, and image tags",
          "Opening and closing a tag",
          "A CSS selector: which element the rule applies to",
          "Color, typeface, and margin",
          "Width and height",
          "Placing elements side by side",
          "Writing a small page yourself",
        ],
      },
      {
        paragraphs: ["Changing a small page yourself teaches more than copying a finished template."],
      },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Advantages",
        list: [
          "A simple page opens directly in the browser",
          "The first examples are short and the result is visible at once",
          "Almost every web page is built on these two languages",
          "HTML can hold the content while CSS holds the look",
          "There is no separate fee for the languages themselves",
        ],
      },
      {
        heading: "Disadvantages",
        list: [
          "By themselves they do not write accounts, sign-in, or data logic",
          "On a large site, CSS rules can start to clash",
          "The same page still needs a check in more than one browser",
          "When the look is wrong, the cause is often an unclosed tag or a selector that does not match",
        ],
      },
    ],
    "syntax-and-basic-concepts": [
      {
        paragraphs: [
          "An HTML element usually has an opening tag and a closing tag. A CSS rule has a selector and the properties inside curly braces.",
        ],
      },
      {
        heading: "HTML",
        code: `<h1>Nibras Code</h1>
<p>This is a paragraph.</p>
<a href="https://nibrascode.com">Open the site</a>`,
      },
      {
        heading: "CSS",
        code: `h1 {
  color: #1d4ed8;
  font-size: 32px;
}

p {
  line-height: 1.6;
}`,
      },
      {
        heading: "Where it is written",
        paragraphs: [
          "CSS can live in its own file and be linked from the HTML. In a small example it can also sit inside a style tag. A separate file is tidier for a larger page.",
        ],
      },
    ],
    "code-examples": [
      {
        heading: "A small page",
        code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Nibras Code</title>
    <style>
      body { font-family: sans-serif; }
      h1 { color: #1d4ed8; }
    </style>
  </head>
  <body>
    <h1>Nibras Code</h1>
    <p>HTML writes the structure. CSS writes the color.</p>
  </body>
</html>`,
      },
      {
        heading: "A link and an image",
        code: `<a href="https://nibrascode.com">Nibras Code</a>
<img src="logo.png" alt="Nibras Code mark">`,
      },
      {
        heading: "A class style",
        code: `<p class="note">A short note.</p>

<style>
  .note {
    background: #f3f4f6;
    padding: 12px;
  }
</style>`,
      },
    ],
    faq: [
      { heading: "What is HTML?", paragraphs: ["HTML is the markup language that writes the structure of a web page: headings, text, images, and links."] },
      { heading: "What is CSS?", paragraphs: ["CSS is the style language that writes how the page looks: color, size, typeface, and layout."] },
      { heading: "Is HTML a programming language?", paragraphs: ["No. HTML is a markup language. It says what is on the page. It does not write calculations or conditions."] },
      { heading: "Does a page open without CSS?", paragraphs: ["Yes. The browser still shows the HTML. The look can stay plain."] },
      { heading: "Are HTML, CSS, and JavaScript the same?", paragraphs: ["No. HTML writes structure, CSS writes appearance, and JavaScript writes behavior."] },
      { heading: "Do I need to buy a program to learn them?", paragraphs: ["No. A text editor and a browser are enough to start. Save the file as .html and open it in the browser."] },
      { heading: "Are HTML and CSS free?", paragraphs: ["Yes. There is no fee for the languages themselves when you write them and open them in a browser."] },
    ],
  },
  tr: {
    "what-are-html-css": [
      {
        paragraphs: [
          "HTML, bir web sayfasının yapısını yazmak için kullanılan işaretleme dilidir. Başlık, paragraf, görsel, bağlantı ve form HTML ile sayfaya konur. HTML bir programlama dili değildir. Tarayıcıya «burada ne var» diye söyler.",
          "CSS ise bu yapının görünüşünü yazar. Renk, boyut, yazı tipi, boşluk ve öğelerin yan yana mı alt alta mı duracağı CSS'in işidir. CSS de bir programlama dili değildir. Bir biçim dilidir.",
          "Tarayıcı önce HTML'i okur, sonra CSS kurallarını uygun öğelere uygular. Bir düğmeye basılınca ne olacağı ise genellikle JavaScript ile yazılır.",
        ],
      },
    ],
    "what-are-html-css-used-for": [
      {
        paragraphs: ["HTML ve CSS bir web sayfasının görünen kısmında kullanılır:"],
        list: ["Yazılar ve sade siteler", "Formlar ve düğmeler", "Menü ve sayfa düzeni", "Görsel ve metnin yerleştirilmesi", "Telefon ve bilgisayar ekranına uyan görünüm"],
      },
      { paragraphs: ["Birçok web uygulamasında gördüğünüz katman da HTML ve CSS üzerine kurulur. Hesaplamak ve veri saklamak başka bir kısmın işidir."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["HTML ve CSS ile sayfanın yapısını ve görünüşünü hazırlayabilirsiniz:"],
        list: ["Başlık ve metin yazmak", "Görsel ve bağlantı eklemek", "Düğme ve formun görünüşünü vermek", "Öğeleri satır ve sütun gibi dizmek", "Ekran genişliğine göre görünüşü değiştirmek"],
      },
      {
        heading: "Basit örnek",
        code: `<h1>Nibras Code</h1>
<p>Sade bir sayfa.</p>`,
        after: ["Bu HTML bir başlık ve bir paragraf oluşturur. Renk ve boyut ayrı CSS ile yazılır."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "İlk HTML sayfasını yazmak zor değildir. Birkaç etiket ve bir CSS kuralı tarayıcıda sonuç gösterir. Zorluk sayfa büyüdükçe, öğeler iç içe girdikçe ve aynı görünüşü birkaç ekranda korumak gerektiğinde başlar.",
          "Başlangıç için şu sıra faydalıdır:",
        ],
        ordered: true,
        list: ["Başlık, paragraf, bağlantı ve görsel etiketleri", "Etiketin açılışı ve kapanışı", "CSS seçicisi: kural hangi öğeye uygulanır", "Renk, yazı tipi ve boşluk", "Genişlik ve yükseklik", "Öğeleri yan yana dizmek", "Küçük bir sayfayı kendiniz yazmak"],
      },
      { paragraphs: ["Hazır şablonu kopyalamaktan çok, küçük sayfayı kendiniz değiştirmek daha iyi öğretir."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Avantajları",
        list: ["Sade bir sayfa tarayıcıda doğrudan açılır", "İlk örnekler kısadır ve sonuç hemen görünür", "Neredeyse her web sayfası bu iki dilin üzerindedir", "HTML içeriği, CSS görünüşü ayrı tutmaya yardım eder", "Dilin kendisi için ayrı bir ücret yoktur"],
      },
      {
        heading: "Dezavantajları",
        list: ["Tek başlarına hesap, giriş ve veri mantığı yazmazlar", "Büyük sitede CSS kuralları birbirine karışabilir", "Aynı sayfayı birkaç tarayıcıda kontrol etmek gerekir", "Görünüş bozulursa sebep çoğu zaman kapanmamış etiket veya uymayan seçicidir"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["Bir HTML öğesi genellikle açılış ve kapanış etiketinden oluşur. Bir CSS kuralı ise seçici ve süslü parantez içindeki özelliklerden oluşur."] },
      { heading: "HTML", code: `<h1>Nibras Code</h1>\n<p>Bu bir paragraftır.</p>\n<a href="https://nibrascode.com">Siteye git</a>` },
      { heading: "CSS", code: `h1 {\n  color: #1d4ed8;\n  font-size: 32px;\n}\n\np {\n  line-height: 1.6;\n}` },
      { heading: "Nereye yazılır", paragraphs: ["CSS ayrı bir dosyada durup HTML'e bağlanabilir. Küçük örnekte style etiketi içine de yazılabilir. Büyük sayfada ayrı dosya daha derli topludur."] },
    ],
    "code-examples": [
      {
        heading: "Küçük sayfa",
        code: `<!DOCTYPE html>
<html lang="tr">
  <head>
    <meta charset="utf-8">
    <title>Nibras Code</title>
    <style>
      body { font-family: sans-serif; }
      h1 { color: #1d4ed8; }
    </style>
  </head>
  <body>
    <h1>Nibras Code</h1>
    <p>HTML yapıyı, CSS ise rengi yazar.</p>
  </body>
</html>`,
      },
      { heading: "Bağlantı ve görsel", code: `<a href="https://nibrascode.com">Nibras Code</a>\n<img src="logo.png" alt="Nibras Code işareti">` },
      { heading: "Sınıf ile biçim", code: `<p class="not">Kısa not.</p>\n\n<style>\n  .not {\n    background: #f3f4f6;\n    padding: 12px;\n  }\n</style>` },
    ],
    faq: [
      { heading: "HTML nedir?", paragraphs: ["HTML, web sayfasının yapısını yazan işaretleme dilidir. Başlık, metin, görsel ve bağlantı onunla verilir."] },
      { heading: "CSS nedir?", paragraphs: ["CSS, sayfanın görünüşünü yazan biçim dilidir. Renk, boyut, yazı tipi ve düzen onunla verilir."] },
      { heading: "HTML bir programlama dili midir?", paragraphs: ["Hayır. HTML bir işaretleme dilidir. Sayfada ne olduğunu söyler, hesap ve koşul yazmaz."] },
      { heading: "CSS olmadan sayfa açılır mı?", paragraphs: ["Evet. Tarayıcı HTML'i yine gösterir. Görünüş sade kalabilir."] },
      { heading: "HTML, CSS ve JavaScript aynı mıdır?", paragraphs: ["Hayır. HTML yapıyı, CSS görünüşü, JavaScript ise davranışı yazar."] },
      { heading: "Öğrenmek için ayrı bir program almak gerekir mi?", paragraphs: ["Hayır. Başlangıç için bir metin düzenleyici ve tarayıcı yeter. Dosyayı .html olarak kaydedip tarayıcıda açabilirsiniz."] },
      { heading: "HTML ve CSS ücretsiz mi?", paragraphs: ["Evet. Onları yazmak ve tarayıcıda açmak için dilin kendisine ait bir ücret yoktur."] },
    ],
  },
  ar: {
    "what-are-html-css": [
      {
        paragraphs: [
          "HTML لغة ترميز تُستخدم لكتابة بنية صفحة الويب. العنوان والفقرة والصورة والرابط والنموذج توضع في الصفحة بواسطة HTML. وHTML ليست لغة برمجة. هي تخبر المتصفح بما يوجد في الصفحة.",
          "CSS تكتب مظهر هذه البنية. اللون والحجم والخط والفراغ وهل تقف العناصر جنبًا إلى جنب أو واحدًا تحت الآخر هو عمل CSS. وCSS أيضًا ليست لغة برمجة. هي لغة تنسيق.",
          "يقرأ المتصفح HTML أولًا، ثم يطبّق قواعد CSS على العناصر المناسبة. أما ما يحدث عند الضغط على زر فيُكتب عادةً بـ JavaScript.",
        ],
      },
    ],
    "what-are-html-css-used-for": [
      {
        paragraphs: ["يُستخدم HTML وCSS في الجزء الظاهر من صفحة الويب:"],
        list: ["المقالات والمواقع البسيطة", "النماذج والأزرار", "القائمة وتخطيط الصفحة", "وضع الصور والنص", "مظهر يناسب شاشة الهاتف والحاسوب"],
      },
      { paragraphs: ["الطبقة التي تراها في كثير من تطبيقات الويب مبنية أيضًا على HTML وCSS. أما الحساب وحفظ البيانات فعمل جزء آخر."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["يمكن باستخدام HTML وCSS إعداد بنية الصفحة ومظهرها:"],
        list: ["كتابة العناوين والنص", "إضافة صورة ورابط", "تنسيق الزر والنموذج", "صف العناصر في صفوف وأعمدة", "تغيير المظهر حسب عرض الشاشة"],
      },
      {
        heading: "مثال بسيط",
        code: `<h1>Nibras Code</h1>
<p>صفحة بسيطة.</p>`,
        after: ["ينشئ هذا الـ HTML عنوانًا وفقرة. أما اللون والحجم فيُكتبان في CSS منفصل."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "كتابة أول صفحة HTML ليست صعبة. بضعة وسوم وقاعدة CSS واحدة تكفي ليظهر الناتج في المتصفح. تبدأ الصعوبة حين تكبر الصفحة، وتتداخل العناصر، ويُراد حفظ المظهر نفسه على أكثر من مقاس شاشة.",
          "هذا الترتيب مفيد في البداية:",
        ],
        ordered: true,
        list: ["وسوم العنوان والفقرة والرابط والصورة", "فتح الوسم وإغلاقه", "محدد CSS: على أي عنصر تُطبَّق القاعدة", "اللون والخط والهامش", "العرض والارتفاع", "وضع العناصر جنبًا إلى جنب", "كتابة صفحة صغيرة بنفسك"],
      },
      { paragraphs: ["تغيير صفحة صغيرة بنفسك يعلّم أكثر من نسخ قالب جاهز."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "المزايا",
        list: ["الصفحة البسيطة تُفتح مباشرة في المتصفح", "الأمثلة الأولى قصيرة والنتيجة تظهر فورًا", "تقريبًا كل صفحات الويب مبنية على هاتين اللغتين", "HTML يُبقي المحتوى وCSS يُبقي المظهر منفصلين", "لا رسوم منفصلة على اللغتين نفسيهما"],
      },
      {
        heading: "العيوب",
        list: ["وحدهما لا يكتبان الحساب أو تسجيل الدخول أو منطق البيانات", "في الموقع الكبير قد تتداخل قواعد CSS", "يلزم فحص الصفحة نفسها في أكثر من متصفح", "إذا اختل المظهر فالسبب غالبًا وسم غير مغلق أو محدد لا يطابق"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["يتكوّن عنصر HTML عادة من وسم فتح ووسم إغلاق. وتتكوّن قاعدة CSS من محدد وخصائص داخل الأقواس المعقوفة."] },
      { heading: "HTML", code: `<h1>Nibras Code</h1>\n<p>هذه فقرة.</p>\n<a href="https://nibrascode.com">افتح الموقع</a>` },
      { heading: "CSS", code: `h1 {\n  color: #1d4ed8;\n  font-size: 32px;\n}\n\np {\n  line-height: 1.6;\n}` },
      { heading: "أين يُكتب", paragraphs: ["يمكن أن يبقى CSS في ملف مستقل ويُربط بـ HTML. وفي المثال الصغير يمكن كتابته داخل وسم style. والملف المستقل أرتب للصفحة الكبيرة."] },
    ],
    "code-examples": [
      {
        heading: "صفحة صغيرة",
        code: `<!DOCTYPE html>
<html lang="ar" dir="rtl">
  <head>
    <meta charset="utf-8">
    <title>Nibras Code</title>
    <style>
      body { font-family: sans-serif; }
      h1 { color: #1d4ed8; }
    </style>
  </head>
  <body>
    <h1>Nibras Code</h1>
    <p>HTML يكتب البنية، وCSS يكتب اللون.</p>
  </body>
</html>`,
      },
      { heading: "رابط وصورة", code: `<a href="https://nibrascode.com">Nibras Code</a>\n<img src="logo.png" alt="علامة Nibras Code">` },
      { heading: "تنسيق بصنف", code: `<p class="note">ملاحظة قصيرة.</p>\n\n<style>\n  .note {\n    background: #f3f4f6;\n    padding: 12px;\n  }\n</style>` },
    ],
    faq: [
      { heading: "ما هو HTML؟", paragraphs: ["HTML لغة ترميز تكتب بنية صفحة الويب: العناوين والنص والصور والروابط."] },
      { heading: "ما هو CSS؟", paragraphs: ["CSS لغة تنسيق تكتب مظهر الصفحة: اللون والحجم والخط والتخطيط."] },
      { heading: "هل HTML لغة برمجة؟", paragraphs: ["لا. HTML لغة ترميز. تقول ما يوجد في الصفحة، ولا تكتب حسابًا أو شرطًا."] },
      { heading: "هل تُفتح الصفحة من دون CSS؟", paragraphs: ["نعم. المتصفح يعرض HTML رغم ذلك. وقد يبقى المظهر بسيطًا."] },
      { heading: "هل HTML وCSS وJavaScript شيء واحد؟", paragraphs: ["لا. HTML يكتب البنية، وCSS يكتب المظهر، وJavaScript يكتب السلوك."] },
      { heading: "هل يلزم شراء برنامج للتعلم؟", paragraphs: ["لا. يكفي في البداية محرر نصوص ومتصفح. احفظ الملف بامتداد html وافتحه في المتصفح."] },
      { heading: "هل HTML وCSS مجانيان؟", paragraphs: ["نعم. لا رسوم على اللغتين نفسيهما عند كتابتهما وفتحهما في المتصفح."] },
    ],
  },
  ru: {
    "what-are-html-css": [
      {
        paragraphs: [
          "HTML — язык разметки, которым пишут структуру веб-страницы. Заголовок, абзац, изображение, ссылка и форма помещаются на страницу с помощью HTML. HTML — не язык программирования. Он говорит браузеру, что на странице есть.",
          "CSS пишет, как эта структура выглядит. Цвет, размер, шрифт, отступы и то, стоят элементы рядом или один под другим, — работа CSS. CSS тоже не язык программирования. Это язык оформления.",
          "Браузер сначала читает HTML, затем применяет правила CSS к подходящим элементам. Что происходит при нажатии кнопки, обычно пишут на JavaScript.",
        ],
      },
    ],
    "what-are-html-css-used-for": [
      {
        paragraphs: ["HTML и CSS используют для видимой части веб-страницы:"],
        list: ["Статьи и простые сайты", "Формы и кнопки", "Меню и раскладка страницы", "Размещение изображений и текста", "Вид, который подходит экрану телефона и компьютера"],
      },
      { paragraphs: ["Видимый слой многих веб-приложений тоже построен на HTML и CSS. Считать и хранить данные — работа другой части."] },
    ],
    "what-can-you-do": [
      {
        paragraphs: ["С HTML и CSS можно подготовить структуру и вид страницы:"],
        list: ["Писать заголовки и текст", "Добавлять изображение и ссылку", "Оформлять кнопку и форму", "Ставить элементы рядами и столбцами", "Менять вид в зависимости от ширины экрана"],
      },
      {
        heading: "Простой пример",
        code: `<h1>Nibras Code</h1>
<p>Простая страница.</p>`,
        after: ["Этот HTML создаёт один заголовок и один абзац. Цвет и размер пишут отдельным CSS."],
      },
    ],
    "is-it-hard": [
      {
        paragraphs: [
          "Написать первую страницу HTML нетрудно. Несколько тегов и одно правило CSS уже дают результат в браузере. Труднее становится, когда страница растёт, элементы вкладываются друг в друга и один вид нужно сохранить на нескольких размерах экрана.",
          "В начале полезен такой порядок:",
        ],
        ordered: true,
        list: ["Теги заголовка, абзаца, ссылки и изображения", "Открытие и закрытие тега", "Селектор CSS: к какому элементу относится правило", "Цвет, шрифт и отступ", "Ширина и высота", "Размещение элементов рядом", "Самому написать небольшую страницу"],
      },
      { paragraphs: ["Менять небольшую страницу самому полезнее, чем копировать готовый шаблон."] },
    ],
    "advantages-and-disadvantages": [
      {
        heading: "Преимущества",
        list: ["Простая страница открывается прямо в браузере", "Первые примеры короткие, и результат виден сразу", "Почти каждая веб-страница построена на этих двух языках", "HTML может хранить содержание, а CSS — оформление", "За сами языки отдельно платить не нужно"],
      },
      {
        heading: "Недостатки",
        list: ["Сами по себе они не пишут учёт, вход и логику данных", "На большом сайте правила CSS могут начать мешать друг другу", "Одну страницу всё равно стоит проверить в нескольких браузерах", "Если вид сломался, причина часто в незакрытом теге или селекторе, который ничему не соответствует"],
      },
    ],
    "syntax-and-basic-concepts": [
      { paragraphs: ["Элемент HTML обычно состоит из открывающего и закрывающего тега. Правило CSS состоит из селектора и свойств внутри фигурных скобок."] },
      { heading: "HTML", code: `<h1>Nibras Code</h1>\n<p>Это абзац.</p>\n<a href="https://nibrascode.com">Открыть сайт</a>` },
      { heading: "CSS", code: `h1 {\n  color: #1d4ed8;\n  font-size: 32px;\n}\n\np {\n  line-height: 1.6;\n}` },
      { heading: "Где это пишут", paragraphs: ["CSS может лежать в отдельном файле и подключаться к HTML. В маленьком примере его можно написать и внутри тега style. Для большой страницы отдельный файл аккуратнее."] },
    ],
    "code-examples": [
      {
        heading: "Небольшая страница",
        code: `<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Nibras Code</title>
    <style>
      body { font-family: sans-serif; }
      h1 { color: #1d4ed8; }
    </style>
  </head>
  <body>
    <h1>Nibras Code</h1>
    <p>HTML пишет структуру, CSS пишет цвет.</p>
  </body>
</html>`,
      },
      { heading: "Ссылка и изображение", code: `<a href="https://nibrascode.com">Nibras Code</a>\n<img src="logo.png" alt="Знак Nibras Code">` },
      { heading: "Стиль через класс", code: `<p class="note">Короткая заметка.</p>\n\n<style>\n  .note {\n    background: #f3f4f6;\n    padding: 12px;\n  }\n</style>` },
    ],
    faq: [
      { heading: "Что такое HTML?", paragraphs: ["HTML — язык разметки, которым пишут структуру веб-страницы: заголовки, текст, изображения и ссылки."] },
      { heading: "Что такое CSS?", paragraphs: ["CSS — язык оформления, которым пишут вид страницы: цвет, размер, шрифт и раскладку."] },
      { heading: "HTML — это язык программирования?", paragraphs: ["Нет. HTML — язык разметки. Он говорит, что есть на странице, и не пишет вычисления и условия."] },
      { heading: "Страница открывается без CSS?", paragraphs: ["Да. Браузер всё равно покажет HTML. Вид может остаться простым."] },
      { heading: "HTML, CSS и JavaScript — это одно и то же?", paragraphs: ["Нет. HTML пишет структуру, CSS — оформление, JavaScript — поведение."] },
      { heading: "Нужно ли покупать отдельную программу, чтобы учиться?", paragraphs: ["Нет. Для начала хватает текстового редактора и браузера. Сохраните файл как .html и откройте его в браузере."] },
      { heading: "HTML и CSS бесплатные?", paragraphs: ["Да. За сами языки отдельно платить не нужно, когда вы пишете их и открываете в браузере."] },
    ],
  },
};

export function htmlCssSections(lang: Lang): readonly ProgrammingSection[] {
  const sections: ProgrammingSection[] = ORDER.map((id) => ({
    id,
    title: TITLES[id][lang],
    blocks: BODIES[lang][id],
  }));
  const at = sections.findIndex((item) => item.id === "faq");
  sections.splice(at < 0 ? sections.length : at, 0, htmlWorking(lang));
  return sections;
}
