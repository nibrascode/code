import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, BookOpen, Boxes, Braces, Briefcase, Bug, CircleHelp, Code, Database, FileCode, GitCompare, GraduationCap, ListChecks, MessageCircleQuestion, Package, Server, Shield, Sparkles, Terminal, Wrench } from "lucide-react";
import { ApkLab } from "@/components/apk-lab";
import { LIBRARY, type LibrarySection, type LibraryTopic } from "@/lib/library";
import { CODE_SAMPLE_HUB, CODE_SAMPLES, SITE_CODE } from "@/lib/code-samples";
import type { ProgrammingSection } from "@/lib/programming";
import { HUBS, pagesOf } from "@/lib/course/meta";
import { hasProgrammingLocale, programmingLocalePath } from "@/lib/programming-path";
import { PROGRAMMING_SEO } from "@/lib/programming-seo";
import { SEARCH, searchPath, searchTopicPath } from "@/lib/search-pages";
import { COMPARE, comparePath } from "@/lib/learn-pages";
import { PAKET, paketPath } from "@/lib/paket";
import { TOOLS, TOOLS_PAGE, pageTools, toolPath } from "@/lib/tools";
import { libItems, libParagraphs, savedLib, type LibGroup } from "@/lib/library-admin";
import { articlesForTopic, findResourceTopic } from "@/lib/resource-topics";
import type { StudioPrivacyRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import type { Lang, TKey } from "@/lib/i18n";

const APK_LESSON_FILES = ["capacitor", "termux", "revenuecat"] as const;

const APK_PATH: Record<Lang, string> = {
  az: "APK dərsləri",
  en: "APK lessons",
  tr: "APK dersleri",
  ar: "دروس APK",
  ru: "Уроки APK",
};

const APK_PATH_NOTE: Record<Lang, string> = {
  az: "Eyni dərslər JavaScript siyahısında da durur. Qapalı test Capacitor dərsinin içindədir. Sıra belədir: qabıq, telefonda yoxlama, sonra abunə.",
  en: "The same lessons also sit in the JavaScript list. Closed testing is inside the Capacitor lesson. The order is: the shell, a test on the phone, then a subscription.",
  tr: "Aynı dersler JavaScript listesinde de durur. Kapalı test Capacitor dersinin içindedir. Sıra şöyledir: kabuk, telefonda deneme, sonra abonelik.",
  ar: "الدروس نفسها تقف أيضاً في قائمة جافاسكريبت. الاختبار المغلق داخل درس Capacitor. الترتيب: الغلاف، ثم التجربة على الهاتف، ثم الاشتراك.",
  ru: "Те же уроки стоят и в списке JavaScript. Закрытый тест внутри урока Capacitor. Порядок такой: оболочка, проверка на телефоне, потом подписка.",
};

const GUIDE_INTRO: Record<string, Record<Lang, string>> = {
  pdf: {
    az: "PDF faylını birləşdirmək, bölmək və sıxışdırmaq üçün qısa bələdçi. Ətraflı addımlar Nibras PDF çıxanda bu səhifədə olacaq.",
    en: "A short guide to merging, splitting, and compressing a PDF. Detailed steps will be added here when Nibras PDF is released.",
    tr: "PDF birleştirme, bölme ve sıkıştırma için kısa rehber. Ayrıntılı adımlar Nibras PDF çıkınca bu sayfada olacak.",
    ar: "دليل قصير لدمج PDF وتقسيمه وضغطه. الخطوات المفصّلة تُضاف هنا عند إصدار Nibras PDF.",
    ru: "Короткое руководство: объединить, разделить и сжать PDF. Подробные шаги появятся здесь, когда выйдет Nibras PDF.",
  },
  android: {
    az: "Nibras Code tətbiqlərini Android telefonda rəsmi səhifədən tapıb quraşdırmaq olar. Mağaza linki hazır olanda bu səhifədə göstəriləcək.",
    en: "Nibras Code apps can be found and installed on an Android phone from the official page. The store link will be shown here when it is ready.",
    tr: "Nibras Code uygulamaları Android telefonda resmi sayfadan bulunup kurulabilir. Mağaza bağlantısı hazır olunca bu sayfada gösterilecek.",
    ar: "يمكن العثور على تطبيقات Nibras Code وتثبيتها على هاتف أندرويد من الصفحة الرسمية. يظهر رابط المتجر هنا عندما يجهز.",
    ru: "Приложения Nibras Code можно найти и установить на телефон Android с официальной страницы. Ссылка на магазин появится здесь, когда будет готова.",
  },
  "ereb-dili": {
    az: "Ərəb dilinə Azərbaycan dilindən başlamaq üçün əsas tətbiq Nibras Arabic-dir. Feil, isim, dialoq, test, kart və yazı məşqi bir yerdədir.",
    en: "The main app for starting Arabic from Azerbaijani is Nibras Arabic. Verbs, nouns, dialogues, tests, cards, and writing practice are in one place.",
    tr: "Azerbaycan Türkçesinden Arapçaya başlamak için ana uygulama Nibras Arabic'tir. Fiil, isim, diyalog, test, kart ve yazı alıştırması bir aradadır.",
    ar: "التطبيق الأساسي لبدء العربية من الأذربيجانية هو Nibras Arabic. فيه الفعل والاسم والحوار والاختبار والبطاقات وتدريب الكتابة.",
    ru: "Основное приложение, чтобы начать арабский с азербайджанского, — Nibras Arabic. Глаголы, имена, диалоги, тесты, карточки и письмо в одном месте.",
  },
};

const FIND_UI: Record<Lang, { search: string; empty: string; start: string; lessons: string; diff: string; tryNote: string; intro: string }> = {
  az: {
    search: "Alət axtar",
    empty: "Bu adla səhifə yoxdur.",
    start: "Haradan başlayım",
    lessons: "Dərslər",
    diff: "Fərqi nədir",
    tryNote: "Bu səhifəni oxuduqdan sonra kodu Nibras Dev-də yoxlaya bilərsən.",
    intro:
      "Hər səhifə bir mövzunu ayrıca açır. Əvvəl HTML və CSS ilə səhifənin üzünü oxu. Sonra Python ilə qısa proqram yaz. Dil, əmr və alət qarışmasın deyə aşağıda hər kartın nə olduğu yazılır. İlişəndə Nibras AI-yə sual ver.",
  },
  en: {
    search: "Search a tool",
    empty: "No page with that name.",
    start: "Where to start",
    lessons: "Lessons",
    diff: "What is the difference",
    tryNote: "After this page, you can try the code in Nibras Dev.",
    intro:
      "Each page opens one topic on its own. First read the face of a page with HTML and CSS. Then write a short program in Python. So a language, a command, and a tool do not get mixed, each card below says what it is. When you get stuck, ask Nibras AI.",
  },
  tr: {
    search: "Araç ara",
    empty: "Bu adda sayfa yok.",
    start: "Nereden başlamalı",
    lessons: "Dersler",
    diff: "Farkı ne",
    tryNote: "Bu sayfadan sonra kodu Nibras Dev içinde deneyebilirsin.",
    intro:
      "Her sayfa bir konuyu ayrı açar. Önce HTML ve CSS ile sayfanın yüzünü oku. Sonra Python ile kısa bir program yaz. Dil, komut ve araç karışmasın diye aşağıda her kartın ne olduğu yazılır. Takılınca Nibras AI'ye soru sor.",
  },
  ar: {
    search: "ابحث عن أداة",
    empty: "لا صفحة بهذا الاسم.",
    start: "من أين تبدأ",
    diff: "ما الفرق",
    lessons: "دروس",
    tryNote: "بعد هذه الصفحة يمكنك تجربة الكود في Nibras Dev.",
    intro:
      "كل صفحة تفتح موضوعاً واحداً وحده. اقرأ أولاً وجه الصفحة مع HTML وCSS. ثم اكتب برنامجاً قصيراً بـ Python. كي لا تختلط اللغة والأمر والأداة، يُكتب تحت كل بطاقة ما هي. حين تقف اسأل Nibras AI.",
  },
  ru: {
    search: "Найти инструмент",
    empty: "Такой страницы нет.",
    start: "С чего начать",
    lessons: "Уроки",
    diff: "В чём разница",
    tryNote: "После этой страницы код можно проверить в Nibras Dev.",
    intro:
      "Каждая страница открывает одну тему отдельно. Сначала прочитай лицо страницы через HTML и CSS. Потом напиши короткую программу на Python. Чтобы язык, команда и инструмент не смешались, под каждой карточкой написано, что это. Если застрял, спроси Nibras AI.",
  },
};

function topicNote(slug: string, lang: Lang) {
  const text = PROGRAMMING_SEO[slug]?.[lang]?.description ?? "";
  const parts = text.split(/(?<=[.!?])\s+/).filter(Boolean);
  return parts.slice(0, 2).join(" ");
}

const START_STEPS: readonly { slug: "html-css" | "python" | "ai"; text: Record<Lang, { title: string; note: string }> }[] = [
  {
    slug: "html-css",
    text: {
      az: { title: "HTML/CSS", note: "Səhifənin üzü buradan başlayır. HTML quruluşu yazır, CSS rəngi və yeri deyir. Proqram dilindən əvvəl bunu oxu." },
      en: { title: "HTML/CSS", note: "The face of a page starts here. HTML writes the structure. CSS says the color and the place. Read this before a programming language." },
      tr: { title: "HTML/CSS", note: "Sayfanın yüzü buradan başlar. HTML yapıyı yazar, CSS rengi ve yeri söyler. Programlama dilinden önce bunu oku." },
      ar: { title: "HTML/CSS", note: "وجه الصفحة يبدأ من هنا. HTML يكتب البنية، وCSS يقول اللون والمكان. اقرأ هذا قبل لغة البرمجة." },
      ru: { title: "HTML/CSS", note: "Лицо страницы начинается здесь. HTML пишет структуру, CSS говорит цвет и место. Прочитай это до языка программирования." },
    },
  },
  {
    slug: "python",
    text: {
      az: { title: "Python", note: "İlk dil kimi buradan başla. print ilə mətn çıxır, şərt və döngə qısa proqramı idarə edir. Dərs fəsilləri ayrıca siyahıdadır." },
      en: { title: "Python", note: "Start here as a first language. print shows text. A condition and a loop run a short program. The lesson chapters are in their own list." },
      tr: { title: "Python", note: "İlk dil olarak buradan başla. print metni çıkarır, koşul ve döngü kısa programı yönetir. Ders bölümleri ayrı listededir." },
      ar: { title: "Python", note: "ابدأ من هنا كلغة أولى. print يُظهر النص، والشرط والحلقة يديران برنامجاً قصيراً. فصول الدرس في قائمة خاصة." },
      ru: { title: "Python", note: "Начни здесь как с первого языка. print выводит текст, условие и цикл ведут короткую программу. Главы урока в отдельном списке." },
    },
  },
  {
    slug: "ai",
    text: {
      az: { title: "Nibras AI", note: "Dərsdə bir sətir ilişəndə bura sual ver. AI dili əvəz etmir. Əvvəl səhifəni oxu, sonra anlamadığın sətri soruş." },
      en: { title: "Nibras AI", note: "Ask here when one line in a lesson gets stuck. AI does not replace the language. Read the page first, then ask about the line you did not understand." },
      tr: { title: "Nibras AI", note: "Derste bir satır takılınca buraya soru sor. AI dilin yerini tutmaz. Önce sayfayı oku, sonra anlamadığın satırı sor." },
      ar: { title: "Nibras AI", note: "حين يقف سطر في الدرس اسأل هنا. الذكاء الاصطناعي لا يحل محل اللغة. اقرأ الصفحة أولاً، ثم اسأل عن السطر الذي لم تفهمه." },
      ru: { title: "Nibras AI", note: "Когда одна строка в уроке не идёт, спроси здесь. ИИ не заменяет язык. Сначала прочитай страницу, потом спроси строку, которую не понял." },
    },
  },
];

const LESSONS: readonly { kind: "html" | "css" | "javascript" | "python" | "sql"; note: Record<Lang, string> }[] = [
  {
    kind: "html",
    note: {
      az: "Səhifənin quruluşu, başlıq, abzas, siyahı, şəkil və form. Teq mətn deyil, yerin adıdır.",
      en: "The structure of a page, a heading, a paragraph, a list, an image, and a form. A tag is the name of a place, not the text.",
      tr: "Sayfanın yapısı, başlık, paragraf, liste, görsel ve form. Etiket metin değil, yerin adıdır.",
      ar: "بنية الصفحة والعنوان والفقرة والقائمة والصورة والنموذج. الوسم اسم المكان، لا النص.",
      ru: "Структура страницы, заголовок, абзац, список, картинка и форма. Тег — имя места, не текст.",
    },
  },
  {
    kind: "css",
    note: {
      az: "Rəng, qutu, boşluq və hover. CSS səhifənin nə olduğunu yox, necə göründüyünü deyir.",
      en: "Color, the box, space, and hover. CSS does not say what the page is. It says how it looks.",
      tr: "Renk, kutu, boşluk ve hover. CSS sayfanın ne olduğunu değil, nasıl göründüğünü söyler.",
      ar: "اللون والصندوق والفراغ وhover. CSS لا يقول ما هي الصفحة، بل كيف تظهر.",
      ru: "Цвет, коробка, отступ и hover. CSS не говорит, чем страница является. Он говорит, как она выглядит.",
    },
  },
  {
    kind: "javascript",
    note: {
      az: "İlk sətir, şərt, döngə və düymə. JavaScript səhifəni dəyişir. HTML-in yerini tutmur.",
      en: "The first line, a condition, a loop, and a button. JavaScript changes the page. It does not take HTML's place.",
      tr: "İlk satır, koşul, döngü ve düğme. JavaScript sayfayı değiştirir. HTML'in yerini tutmaz.",
      ar: "السطر الأول والشرط والحلقة والزر. JavaScript يغيّر الصفحة. لا يأخذ مكان HTML.",
      ru: "Первая строка, условие, цикл и кнопка. JavaScript меняет страницу. Он не занимает место HTML.",
    },
  },
  {
    kind: "python",
    note: {
      az: "Sıfırdan dərs fəsilləri: ilk addım, şərt, funksiya, siyahı və xəta. Hər fəsil bir işi ayrıca deyir.",
      en: "Lesson chapters from scratch: the first step, a condition, a function, a list, and an error. Each chapter says one job on its own.",
      tr: "Sıfırdan ders bölümleri: ilk adım, koşul, fonksiyon, liste ve hata. Her bölüm bir işi ayrı söyler.",
      ar: "فصول دروس من الصفر: الخطوة الأولى والشرط والدالة والقائمة والخطأ. كل فصل يقول عملاً واحداً وحده.",
      ru: "Главы уроков с нуля: первый шаг, условие, функция, список и ошибка. Каждая глава говорит об одном деле отдельно.",
    },
  },
  {
    kind: "sql",
    note: {
      az: "Cədvəldən oxu, sırala və say. SQL proqramlaşdırma dili deyil. Verilənlərə sual yazır.",
      en: "Read from a table, sort, and count. SQL is not a programming language in the same sense. It writes a question to the data.",
      tr: "Tablodan oku, sırala ve say. SQL aynı anlamda bir programlama dili değildir. Veriye soru yazar.",
      ar: "اقرأ من الجدول ورتّب وعدّ. SQL ليست لغة برمجة بالمعنى نفسه. تكتب سؤالاً للبيانات.",
      ru: "Читай из таблицы, сортируй и считай. SQL не язык программирования в том же смысле. Он пишет вопрос к данным.",
    },
  },
];

const COMPARES: readonly { title: Record<Lang, string>; body: Record<Lang, readonly string[]> }[] = [
  {
    title: {
      az: "pip və npm",
      en: "pip and npm",
      tr: "pip ve npm",
      ar: "pip و npm",
      ru: "pip и npm",
    },
    body: {
      az: [
        "Pip Python üçün paket gətirən alətdir. npm isə Node.js üçün paket gətirən alətdir. İkisi də hazır kodu layihəyə qoyur, amma eyni yerdə işləmir.",
        "Python bir dildir. Onunla proqram yazılır. Pip həmin dilə hazır kitabxana quraşdırır. Məsələn hesab, şəkil və ya sayt üçün hazır kod gəlir.",
        "Node.js JavaScript-i kompüterdə işlədən mühitdir. npm həmin mühitə hazır paketi gətirir. Pip-i Node layihəsində işlətmək olmur. npm-i də Python layihəsində işlətmək olmur.",
        "Python quraşdırılanda pip çox vaxt onunla birlikdə gəlir. Node quraşdırılanda npm də gəlir. Alət dildən ayrıdır: dil kodu işlədir, alət paketi gətirir.",
      ],
      en: [
        "pip brings a package for Python. npm brings a package for Node.js. Both put ready code into a project, but they do not work in the same place.",
        "Python is a language. A program is written with it. pip installs a ready library for that language. A library for numbers, an image, or a site can come that way.",
        "Node.js is the place that runs JavaScript on a computer. npm brings a ready package into that place. pip does not belong in a Node project. npm does not belong in a Python project.",
        "When Python is installed, pip often comes with it. When Node is installed, npm comes too. The tool is separate from the language: the language runs the code, the tool brings the package.",
      ],
      tr: [
        "pip Python için paket getiren araçtır. npm ise Node.js için paket getiren araçtır. İkisi de hazır kodu projeye koyar, ama aynı yerde çalışmaz.",
        "Python bir dildir. Onunla program yazılır. pip o dile hazır kitaplık kurar. Hesap, görsel veya site için hazır kod gelebilir.",
        "Node.js, JavaScript’i bilgisayarda çalıştıran yerdir. npm o yere hazır paketi getirir. pip bir Node projesinde kullanılmaz. npm de bir Python projesinde kullanılmaz.",
        "Python kurulunca pip çoğu zaman onunla gelir. Node kurulunca npm de gelir. Araç dilden ayrıdır: dil kodu çalıştırır, araç paketi getirir.",
      ],
      ar: [
        "pip يجلب حزمة لبايثون. npm يجلب حزمة لـ Node.js. كلاهما يضع كوداً جاهزاً في المشروع، لكنهما لا يعملان في المكان نفسه.",
        "بايثون لغة. يُكتب بها البرنامج. pip يثبّت مكتبة جاهزة لتلك اللغة. قد تأتي مكتبة للحساب أو الصورة أو الموقع.",
        "Node.js هو المكان الذي يشغّل جافاسكريبت على الحاسوب. npm يجلب الحزمة الجاهزة إلى ذلك المكان. pip لا يُستخدم في مشروع Node. وnpm لا يُستخدم في مشروع بايثون.",
        "حين يُثبَّت بايثون يأتي pip معه غالباً. وحين يُثبَّت Node يأتي npm معه. الأداة منفصلة عن اللغة: اللغة تشغّل الكود، والأداة تجلب الحزمة.",
      ],
      ru: [
        "pip приносит пакет для Python. npm приносит пакет для Node.js. Оба кладут готовый код в проект, но работают не в одном месте.",
        "Python — это язык. На нём пишут программу. pip ставит готовую библиотеку для этого языка. Так может прийти код для счёта, картинки или сайта.",
        "Node.js — это место, где JavaScript работает на компьютере. npm приносит туда готовый пакет. pip не ставят в проект Node. npm не ставят в проект Python.",
        "Когда ставят Python, pip часто приходит с ним. Когда ставят Node, приходит и npm. Инструмент отдельно от языка: язык выполняет код, инструмент приносит пакет.",
      ],
    },
  },
  {
    title: {
      az: "Composer və PHP",
      en: "Composer and PHP",
      tr: "Composer ve PHP",
      ar: "Composer و PHP",
      ru: "Composer и PHP",
    },
    body: {
      az: [
        "PHP saytın server tərəfində işləyən dildir. Composer dil deyil. O, PHP kitabxanasını layihəyə yığan alətdir.",
        "PHP kodu oxuyur və işlədir. Composer isə lazım olan hazır kodu internetdən endirib layihənin qovluğuna qoyur. Düyməni PHP işlədir. Composer yalnız paketi gətirir.",
        "Composer olmasa da PHP işləyir. Kiçik bir səhifə üçün o lazım olmaya bilər. Böyük layihədə hər kitabxananı əl ilə yığmaq çətin olur. Composer bunu bir əmrlə edir.",
        "Qısa desək: PHP dildir. Composer həmin dilin paket alətidir. npm Node üçündür, pip Python üçündür, Composer PHP üçündür.",
      ],
      en: [
        "PHP is a language that runs on the server side of a site. Composer is not a language. It is the tool that brings a PHP library into a project.",
        "PHP reads the code and runs it. Composer downloads the ready code you need and puts it in the project folder. PHP runs the button. Composer only brings the package.",
        "PHP still runs without Composer. A small page may not need it. In a large project it is hard to collect every library by hand. Composer does that with one command.",
        "In short: PHP is the language. Composer is the package tool for that language. npm is for Node, pip is for Python, and Composer is for PHP.",
      ],
      tr: [
        "PHP, sitenin sunucu tarafında çalışan dildir. Composer dil değildir. PHP kitaplığını projeye getiren araçtır.",
        "PHP kodu okur ve çalıştırır. Composer ise gereken hazır kodu indirip projenin klasörüne koyar. Düğmeyi PHP çalıştırır. Composer yalnız paketi getirir.",
        "Composer olmasa da PHP çalışır. Küçük bir sayfa için gerekmez. Büyük projede her kitaplığı elle toplamak zordur. Composer bunu bir komutla yapar.",
        "Kısaca: PHP dildir. Composer o dilin paket aracıdır. npm Node içindir, pip Python içindir, Composer PHP içindir.",
      ],
      ar: [
        "PHP لغة تعمل في جهة الخادم من الموقع. Composer ليس لغة. هو الأداة التي تجمع مكتبة PHP في المشروع.",
        "PHP يقرأ الكود ويشغّله. Composer ينزّل الكود الجاهز الذي تحتاجه ويضعه في مجلد المشروع. PHP يشغّل الزر. Composer يجلب الحزمة فقط.",
        "PHP يعمل حتى من غير Composer. صفحة صغيرة قد لا تحتاجه. في مشروع كبير يصعب جمع كل مكتبة باليد. Composer يفعل ذلك بأمر واحد.",
        "باختصار: PHP هو اللغة. Composer أداة الحزم لتلك اللغة. npm لـ Node، وpip لبايثون، وComposer لـ PHP.",
      ],
      ru: [
        "PHP — язык, который работает на серверной стороне сайта. Composer — не язык. Это инструмент, который приносит библиотеку PHP в проект.",
        "PHP читает код и выполняет его. Composer скачивает нужный готовый код и кладёт его в папку проекта. Кнопку выполняет PHP. Composer только приносит пакет.",
        "PHP работает и без Composer. Маленькой странице он может не понадобиться. В большом проекте трудно собрать каждую библиотеку руками. Composer делает это одной командой.",
        "Коротко: PHP — это язык. Composer — инструмент пакетов для этого языка. npm для Node, pip для Python, Composer для PHP.",
      ],
    },
  },
];

const DEV_TRY: Record<string, string> = {
  python: "https://dev.nibrascode.com/python",
  javascript: "https://dev.nibrascode.com/javascript",
};

function programmingHref(lang: Lang, slug: string) {
  if (lang !== "az" && hasProgrammingLocale(lang, slug)) return programmingLocalePath(lang, slug);
  return localeHref(lang, `/programming/${slug}`);
}

function topicHref(section: LibrarySection, slug: string, lang: Lang) {
  if (section === "resources" && slug === "pdf") {
    return lang === "ru" ? "/ru/resources/pdf" : localeHref(lang, "/resurslar/pdf");
  }
  return localeHref(lang, `/${section}/${slug}`);
}

export function LibraryIndex({
  section,
  rows = [],
}: {
  section: LibrarySection;
  rows?: readonly StudioPrivacyRow[];
}) {
  const { t, lang } = useI18n();
  const page = LIBRARY[section];
  const group: LibGroup | null = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
  const extras = group ? libItems(group, rows).filter((item) => item.custom) : [];
  const [query, setQuery] = useState("");
  const needle = query.trim().toLowerCase();
  const topics = page.topics.filter((topic) => {
    if (section !== "programming" || !needle) return true;
    const label = t(topic.label).toLowerCase();
    const slug = topic.slug.toLowerCase();
    const name = toolName(topic.slug).toLowerCase();
    const flat = (slug + name).replace(/[^a-z0-9]+/g, "");
    const qflat = needle.replace(/[^a-z0-9]+/g, "");
    return label.includes(needle) || slug.includes(needle) || name.includes(needle) || (qflat.length > 1 && flat.includes(qflat));
  });
  const copy = FIND_UI[lang];
  const programLinks =
    section === "programming"
      ? [
          { href: searchPath(lang, "soz"), label: SEARCH.soz.heading[lang] },
          { href: searchPath(lang, "xeta"), label: SEARCH.xeta.heading[lang] },
          { href: searchPath(lang, "movzu"), label: SEARCH.movzu.heading[lang] },
          { href: searchPath(lang, "nece"), label: SEARCH.nece.heading[lang] },
          { href: paketPath(lang), label: PAKET.heading[lang] },
          { href: comparePath(lang), label: COMPARE.heading[lang] },
        ].filter((item) => !needle || item.label.toLowerCase().includes(needle))
      : [];
  const lessons =
    section === "programming"
      ? LESSONS.filter((lesson) => {
          if (!needle) return true;
          const title = HUBS[lesson.kind].title[lang].toLowerCase();
          return title.includes(needle) || lesson.note[lang].toLowerCase().includes(needle) || lesson.kind.includes(needle);
        })
      : [];

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{t(page.title)}</h1>
      {section === "programming" ? <p>{copy.intro}</p> : null}
      {section === "programming" ? (
        <section className="prog-start">
          <h2>{copy.start}</h2>
          <ol>
            {START_STEPS.map((step, index) => (
              <li key={step.slug}>
                <a
                  className={step.slug === "html-css" ? "step-html" : step.slug === "python" ? "step-py" : "step-ai"}
                  href={step.slug === "ai" ? localeHref(lang, "/ai") : programmingHref(lang, step.slug)}
                >
                  <i>{index + 1}</i>
                  <span className="step-copy">
                    <b>{step.text[lang].title}</b>
                    <span>{step.text[lang].note}</span>
                  </span>
                </a>
              </li>
            ))}
          </ol>
        </section>
      ) : null}
      {section === "programming" && lessons.length ? (
        <section className="prog-start">
          <h2>{copy.lessons}</h2>
          <ul className="lib-list">
            {lessons.map((lesson) => (
              <li key={lesson.kind}>
                <a href={programmingLocalePath(lang, HUBS[lesson.kind].slug)}>
                  <span className="topic-name">
                    <GraduationCap aria-hidden="true" />
                    {HUBS[lesson.kind].title[lang]}
                  </span>
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
                <small className="lib-desc">{lesson.note[lang]}</small>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
      {section === "programming" ? (
        <input
          className="lib-search"
          type="search"
          value={query}
          placeholder={copy.search}
          aria-label={copy.search}
          onChange={(event) => setQuery(event.target.value)}
        />
      ) : null}
      {section === "programming" && needle && topics.length === 0 && programLinks.length === 0 ? <p className="lib-empty">{copy.empty}</p> : null}
      <ul className={section === "programming" ? "lib-list lib-list-2" : "lib-list"}>
        {programLinks
          .filter((item) => item.label.length <= 16)
          .map((item) => (
            <li key={item.href}>
              <a href={item.href}>
                <span className="topic-name">
                  {(() => {
                    const Icon = linkIcon(item.href);
                    return <Icon aria-hidden="true" />;
                  })()}
                  {item.label}
                </span>
                <ArrowUpRight className="rtl-flip size-4" />
              </a>
            </li>
          ))}
        {(section === "programming" ? topics.filter((topic) => t(topic.label).length <= 16) : topics).map((topic) => {
          if (section === "programming") {
            const label = t(topic.label);
            const note = topicNote(topic.slug, lang);
            return (
              <li key={topic.slug}>
                <a href={programmingHref(lang, topic.slug)}>
                  <span className="topic-name">
                    {(() => {
                      const Icon = topicIcon(topic.slug);
                      return <Icon aria-hidden="true" />;
                    })()}
                    {label}
                  </span>
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
                {note ? <small className="lib-desc">{note}</small> : null}
              </li>
            );
          }
          const href = topicHref(section, topic.slug, lang);
          return (
            <li key={topic.slug}>
              <a href={href}>
                {t(topic.label)}
                <ArrowUpRight className="rtl-flip size-4" />
              </a>
            </li>
          );
        })}
        {section === "programming"
          ? programLinks
              .filter((item) => item.label.length > 16)
              .map((item) => (
                <li key={item.href} className="is-wide">
                  <a href={item.href}>
                    <span className="topic-name">
                      {(() => {
                        const Icon = linkIcon(item.href);
                        return <Icon aria-hidden="true" />;
                      })()}
                      {item.label}
                    </span>
                    <ArrowUpRight className="rtl-flip size-4" />
                  </a>
                </li>
              ))
          : null}
        {section === "programming"
          ? topics
              .filter((topic) => t(topic.label).length > 16)
              .map((topic) => {
                const note = topicNote(topic.slug, lang);
                return (
                <li key={topic.slug} className="is-wide">
                  <a href={programmingHref(lang, topic.slug)}>
                    <span className="topic-name">
                      {(() => {
                        const Icon = topicIcon(topic.slug);
                        return <Icon aria-hidden="true" />;
                      })()}
                      {t(topic.label)}
                    </span>
                    <ArrowUpRight className="rtl-flip size-4" />
                  </a>
                  {note ? <small className="lib-desc">{note}</small> : null}
                </li>
                );
              })
          : null}
        {extras.map((item) => (
          <li key={item.id}>
            {section === "resources" ? (
              <a href={localeHref(lang, `/resurslar/${item.id}`)}>
                {item.title}
                <ArrowUpRight className="rtl-flip size-4" />
              </a>
            ) : (
              <a href={localeHref(lang, `/guides/${item.id}`)}>
                {item.title}
                <ArrowUpRight className="rtl-flip size-4" />
              </a>
            )}
          </li>
        ))}
      </ul>
      {section === "programming" ? (
        <section className="prog-compare">
          <h2>{copy.diff}</h2>
          {COMPARES.map((item) => (
            <details key={item.title.en}>
              <summary>
                <span className="topic-name">
                  <GitCompare aria-hidden="true" />
                  {item.title[lang]}
                </span>
              </summary>
              {item.body[lang].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </details>
          ))}
        </section>
      ) : null}
    </main>
  );
}

const SECTION_ICONS: Record<string, typeof Code> = {
  nedir: CircleHelp,
  istifade: Boxes,
  "ne-etmek": Wrench,
  oyrenmek: GraduationCap,
  ustunluk: Sparkles,
  sintaksis: Braces,
  numuneler: Code,
  islek: Briefcase,
  suallar: MessageCircleQuestion,
};

const TOPIC_ICONS: Record<string, typeof Code> = {
  python: Code,
  javascript: FileCode,
  java: Code,
  csharp: Code,
  typescript: FileCode,
  "html-css": Braces,
  "apk-hazirla": Package,
  sql: Database,
  go: Code,
  php: Code,
  kotlin: Code,
  cpp: Code,
  rust: Code,
  ubuntu: Server,
  "java-17": Code,
  nodejs: Server,
  "android-sdk": Package,
  gradle: Wrench,
  capacitor: Package,
  docker: Boxes,
  nginx: Server,
  ssl: Shield,
  firewall: Shield,
  git: GitCompare,
  bash: Terminal,
  json: Braces,
  react: Code,
  c: Code,
  mysql: Database,
  http: Server,
  linux: Terminal,
  ssh: Terminal,
  dns: Server,
  npm: Package,
  redis: Database,
  cron: ListChecks,
  pip: Package,
  sqlite: Database,
  curl: Terminal,
  composer: Package,
  cargo: Package,
  make: Wrench,
  maven: Package,
  yaml: FileCode,
  systemd: Server,
  postgresql: Database,
  markdown: BookOpen,
  rsync: Server,
  "git-github": GitCompare,
  api: Server,
};

const LINK_ICONS: Record<string, typeof Code> = {
  soz: BookOpen,
  xeta: Bug,
  movzu: Sparkles,
  nece: ListChecks,
  paket: Package,
  muqayise: GitCompare,
};

function topicIcon(slug: string) {
  return TOPIC_ICONS[slug] ?? Code;
}

function linkIcon(href: string) {
  const key = href.split("/").filter(Boolean).pop() ?? "";
  return LINK_ICONS[key] ?? BookOpen;
}

const PROGRAM_NAMES: Record<string, string> = {
  python: "Python",
  javascript: "JavaScript",
  java: "Java",
  csharp: "C#",
  typescript: "TypeScript",
  "html-css": "HTML/CSS",
  sql: "SQL",
  go: "Go",
  php: "PHP",
  kotlin: "Kotlin",
  cpp: "C++",
  rust: "Rust",
  ubuntu: "Ubuntu",
  "java-17": "Java 17",
  nodejs: "Node.js",
  "android-sdk": "Android SDK",
  gradle: "Gradle",
  capacitor: "Capacitor",
  docker: "Docker",
  nginx: "Nginx",
  ssl: "SSL / HTTPS",
  firewall: "Firewall",
  git: "Git",
  bash: "Bash",
  json: "JSON",
  react: "React",
  c: "C",
  mysql: "MySQL",
  http: "HTTP",
  linux: "Linux",
  ssh: "SSH",
  dns: "DNS",
  npm: "npm",
  redis: "Redis",
  cron: "cron",
  pip: "pip",
  sqlite: "SQLite",
  curl: "curl",
  composer: "Composer",
  cargo: "Cargo",
  make: "Make",
  maven: "Maven",
  yaml: "YAML",
  systemd: "systemd",
  postgresql: "PostgreSQL",
  markdown: "Markdown",
  rsync: "rsync",
  "git-github": "Git və GitHub",
  api: "API",
  "python-javascript": "Python və JavaScript",
  localhost: "Localhost",
  "frontend-backend": "Frontend və backend",
  framework: "Framework",
  terminal: "Terminal",
  deploy: "Deploy",
  "apk-hazirla": "APK hazırla",
};

function toolName(slug: string) {
  return PROGRAM_NAMES[slug] || "";
}

type SampleTry = {
  title: Record<Lang, string>;
  note: Record<Lang, string>;
  code: string;
};

const GAME_TRIES: readonly SampleTry[] = [
  {
    title: { az: "Xal", en: "Score", tr: "Puan", ar: "النقاط", ru: "Счёт" },
    note: {
      az: "Düyməyə hər basanda xal bir artır. Oyun üçün bu, ən kiçik haldır: bir ədəd saxlanır və bir hadisə onu dəyişir.",
      en: "Each click adds one point. This is the smallest game: one number is kept, and one event changes it.",
      tr: "Her tıklamada puan bir artar. Oyun için en küçük hal budur: bir sayı tutulur ve bir olay onu değiştirir.",
      ar: "كل ضغطة تزيد نقطة. هذه أصغر لعبة: يُحفظ رقم واحد وحدث واحد يغيّره.",
      ru: "Каждое нажатие добавляет одно очко. Это самая маленькая игра: хранится одно число, и одно событие его меняет.",
    },
    code: `<p>Xal: <b id="score">0</b></p>
<button type="button" id="hit">Vur</button>
<script>
  let score = 0;
  const scoreNode = document.getElementById("score");
  document.getElementById("hit").addEventListener("click", () => {
    score += 1;
    scoreNode.textContent = String(score);
  });
</script>`,
  },
  {
    title: { az: "Tap", en: "Guess", tr: "Bul", ar: "خمّن", ru: "Угадай" },
    note: {
      az: "Gizli rəqəm 2-dir. Üç düymədən biri düz cavabı yazır, qalanı yenidən cəhd etməyi deyir. Şərt burada başlayır.",
      en: "The hidden number is 2. One of the three buttons writes the right answer. The others say to try again. This is where a condition starts.",
      tr: "Gizli sayı 2'dir. Üç düğmeden biri doğru cevabı yazar, diğerleri yeniden denemeyi söyler. Koşul burada başlar.",
      ar: "الرقم المخفي هو 2. أحد الأزرار الثلاثة يكتب الجواب الصحيح، والباقي يطلب المحاولة مرة أخرى. الشرط يبدأ هنا.",
      ru: "Скрытое число — 2. Одна из трёх кнопок пишет верный ответ, остальные просят попробовать снова. Условие начинается здесь.",
    },
    code: `<p>1, 2 və ya 3 seç.</p>
<button type="button" data-n="1">1</button>
<button type="button" data-n="2">2</button>
<button type="button" data-n="3">3</button>
<p id="out"></p>
<script>
  const secret = 2;
  const out = document.getElementById("out");
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      const pick = Number(button.getAttribute("data-n"));
      out.textContent = pick === secret ? "Düzdür" : "Yenə cəhd et";
    });
  });
</script>`,
  },
  {
    title: { az: "Taymer", en: "Timer", tr: "Sayaç", ar: "المؤقت", ru: "Таймер" },
    note: {
      az: "Başla düyməsi 10-dan geri sayır və bitəndə dayanır. Eyni düymə ikinci dəfə işə düşmür, çünki sayım açıq olanda bağlı olur.",
      en: "Start counts down from 10 and stops at zero. The same button does not start twice, because it is disabled while the count is running.",
      tr: "Başla düğmesi 10'dan geri sayar ve sıfırda durur. Sayım açıkken düğme kapanır, ikinci kez başlamaz.",
      ar: "زر ابدأ يعدّ من 10 إلى الصفر ويتوقف. الزر نفسه لا يبدأ مرتين لأنه يُغلق أثناء العد.",
      ru: "Кнопка «Başla» считает от 10 до нуля и останавливается. Второй раз она не стартует, потому что во время счёта она выключена.",
    },
    code: `<p>Vaxt: <b id="time">10</b></p>
<button type="button" id="start">Başla</button>
<script>
  const start = document.getElementById("start");
  const time = document.getElementById("time");
  start.addEventListener("click", () => {
    let left = 10;
    start.disabled = true;
    const timer = setInterval(() => {
      left -= 1;
      time.textContent = String(left);
      if (left === 0) clearInterval(timer);
    }, 1000);
  });
</script>`,
  },
];

const APP_TRIES: readonly SampleTry[] = [
  {
    title: { az: "Qeyd", en: "Note", tr: "Not", ar: "ملاحظة", ru: "Заметка" },
    note: {
      az: "Yazılan mətn siyahıya əlavə olunur və xana təmizlənir. Boş mətn əlavə olunmur. Bu, kiçik bir qeyd dəftəridir.",
      en: "The written text is added to the list and the field is cleared. Empty text is not added. This is a small notebook.",
      tr: "Yazılan metin listeye eklenir ve kutu temizlenir. Boş metin eklenmez. Bu, küçük bir not defteridir.",
      ar: "النص المكتوب يُضاف إلى القائمة ويُفرَّغ الحقل. النص الفارغ لا يُضاف. هذه مفكرة صغيرة.",
      ru: "Написанный текст добавляется в список, и поле очищается. Пустой текст не добавляется. Это маленький блокнот.",
    },
    code: `<form id="note">
  <input id="text" type="text" placeholder="Qeyd">
  <button type="submit">Əlavə et</button>
</form>
<ul id="list"></ul>
<script>
  const form = document.getElementById("note");
  const text = document.getElementById("text");
  const list = document.getElementById("list");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const value = text.value.trim();
    if (!value) return;
    const item = document.createElement("li");
    item.textContent = value;
    list.append(item);
    text.value = "";
  });
</script>`,
  },
  {
    title: { az: "Rejim", en: "Mode", tr: "Mod", ar: "الوضع", ru: "Режим" },
    note: {
      az: "Bir düymə səhifəni tünd və açıq rejim arasında dəyişir. Vəziyyət sinifdə saxlanır, ayrı bir səhifə açılmır.",
      en: "One button switches the page between dark and light. The state stays in a class. No second page is opened.",
      tr: "Bir düğme sayfayı koyu ve açık mod arasında değiştirir. Durum sınıfta durur, ikinci sayfa açılmaz.",
      ar: "زر واحد يبدّل الصفحة بين الوضع الداكن والفاتح. الحالة تبقى في صنف ولا تُفتح صفحة ثانية.",
      ru: "Одна кнопка переключает страницу между тёмным и светлым режимом. Состояние лежит в классе, вторая страница не открывается.",
    },
    code: `<button type="button" id="mode">Tünd</button>
<p id="label">Rejim: açıq</p>
<script>
  const mode = document.getElementById("mode");
  const label = document.getElementById("label");
  mode.addEventListener("click", () => {
    const dark = document.body.classList.toggle("dark");
    document.body.style.background = dark ? "#0f172a" : "#f8fafc";
    document.body.style.color = dark ? "#e2e8f0" : "#0f172a";
    label.textContent = dark ? "Rejim: tünd" : "Rejim: açıq";
  });
</script>`,
  },
  {
    title: { az: "Cəm", en: "Sum", tr: "Toplam", ar: "المجموع", ru: "Сумма" },
    note: {
      az: "İki xanadakı ədəd toplanır. Ədəd olmayan yazı sıfır sayılır. Nəticə düymədən sonra görünür.",
      en: "The two fields are added. A value that is not a number counts as zero. The result shows after the button.",
      tr: "İki kutudaki sayı toplanır. Sayı olmayan yazı sıfır sayılır. Sonuç düğmeden sonra görünür.",
      ar: "يُجمع الرقمان في الحقلين. الكتابة التي ليست رقماً تُحسب صفراً. النتيجة تظهر بعد الزر.",
      ru: "Складываются числа из двух полей. Текст, который не число, считается нулём. Результат виден после кнопки.",
    },
    code: `<input id="a" type="number" value="2">
<input id="b" type="number" value="3">
<button type="button" id="add">Cəm</button>
<p id="sum"></p>
<script>
  document.getElementById("add").addEventListener("click", () => {
    const a = Number(document.getElementById("a").value) || 0;
    const b = Number(document.getElementById("b").value) || 0;
    document.getElementById("sum").textContent = String(a + b);
  });
</script>`,
  },
];

const SAMPLE_INTRO: Record<string, Record<Lang, string>> = {
  "oyun-kodu": {
    az: "Üç kiçik oyun hissəsi var: xal, tapmaq və taymer. Hər biri bir HTML səhifədə işləyir. Kodu kopyalayıb test səhifəsində aç.",
    en: "There are three small game pieces: a score, a guess, and a timer. Each one runs in one HTML page. Copy the code and open it on the test page.",
    tr: "Üç küçük oyun parçası var: puan, bulma ve sayaç. Her biri bir HTML sayfada çalışır. Kodu kopyalayıp test sayfasında aç.",
    ar: "هناك ثلاث قطع لعب صغيرة: نقاط وتخمين ومؤقت. كل واحدة تعمل في صفحة HTML. انسخ الكود وافتحه في صفحة الاختبار.",
    ru: "Три маленьких куска игры: счёт, угадывание и таймер. Каждый работает на одной HTML-странице. Скопируй код и открой его на тестовой странице.",
  },
  "tetbiq-kodu": {
    az: "Üç kiçik tətbiq hissəsi var: qeyd, rejim və cəm. Oyun səhifəsindən ayrıdır. Hər kodu kopyalayıb test səhifəsində aç.",
    en: "There are three small app pieces: a note, a mode, and a sum. They are separate from the game page. Copy each one and open it on the test page.",
    tr: "Üç küçük uygulama parçası var: not, mod ve toplam. Oyun sayfasından ayrıdır. Her kodu kopyalayıp test sayfasında aç.",
    ar: "هناك ثلاث قطع تطبيق صغيرة: ملاحظة ووضع ومجموع. هي منفصلة عن صفحة اللعبة. انسخ كل كود وافتحه في صفحة الاختبار.",
    ru: "Три маленьких куска приложения: заметка, режим и сумма. Они отдельно от страницы игры. Скопируй каждый и открой на тестовой странице.",
  },
  "sayt-kodu": {
    az: "Eyni sayt üç ölçüdədir. Sadə ölçüdə bir başlıq var. Orta ölçüdə menyu və iki qeyd var. Böyük ölçüdə kartlar və forma var.",
    en: "The same kind of site is shown in three sizes. The simple one has a heading. The medium one has a menu and two notes. The large one has cards and a form.",
    tr: "Aynı tür site üç boydadır. Basit boyda bir başlık var. Orta boyda menü ve iki not var. Büyük boyda kartlar ve form var.",
    ar: "الموقع نفسه بثلاثة أحجام. البسيط فيه عنوان. المتوسط فيه قائمة وملاحظتان. الكبير فيه بطاقات ونموذج.",
    ru: "Один и тот же вид сайта в трёх размерах. В простом есть заголовок. В среднем — меню и две заметки. В большом — карточки и форма.",
  },
};

const HUB_NOTE: Record<Lang, string> = {
  az: "Oyun kodunda xal, tapmaq və taymer var. Tətbiq kodunda qeyd, rejim və cəm var. İkisi eyni sətirləri təkrarlamır.",
  en: "Game code has a score, a guess, and a timer. App code has a note, a mode, and a sum. The two pages do not repeat the same lines.",
  tr: "Oyun kodunda puan, bulma ve sayaç var. Uygulama kodunda not, mod ve toplam var. İki sayfa aynı satırları tekrarlamaz.",
  ar: "كود اللعبة فيه نقاط وتخمين ومؤقت. كود التطبيق فيه ملاحظة ووضع ومجموع. الصفحتان لا تكرران الأسطر نفسها.",
  ru: "В коде игры есть счёт, угадывание и таймер. В коде приложения есть заметка, режим и сумма. Две страницы не повторяют одни и те же строки.",
};

const SITE_SIMPLE = `<style>
  body { margin: 0; font-family: Georgia, serif; background: #f6f3ec; color: #1c1917; }
  main { max-width: 36rem; margin: 48px auto; padding: 0 20px; }
  h1 { margin: 0 0 12px; font-size: 2rem; }
  p { line-height: 1.6; }
</style>
<main>
  <h1>Sadə səhifə</h1>
  <p>Bir başlıq və bir abzas. Başqa heç nə yoxdur.</p>
</main>`;

const SITE_MEDIUM = `<style>
  body { margin: 0; font-family: sans-serif; background: #0f172a; color: #e2e8f0; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 16px 24px; border-bottom: 1px solid #334155; }
  nav a { color: #94a3b8; margin-left: 16px; text-decoration: none; }
  main { max-width: 640px; margin: 0 auto; padding: 24px; display: grid; gap: 12px; }
  article { background: #1e293b; border-radius: 12px; padding: 16px; }
  h2 { margin: 0 0 8px; font-size: 1.1rem; }
  button { border: 0; border-radius: 8px; padding: 8px 12px; background: #38bdf8; color: #082f49; font-weight: 700; }
</style>
<header>
  <strong>Qeydlər</strong>
  <nav>
    <a href="#yeni">Yeni</a>
    <a href="#kohne">Köhnə</a>
  </nav>
</header>
<main>
  <article id="yeni">
    <h2>Birinci qeyd</h2>
    <p>Qısa mətn. Düymə ilə növbəti addım açılır.</p>
    <button type="button">Aç</button>
  </article>
  <article id="kohne">
    <h2>İkinci qeyd</h2>
    <p>Bir az daha çox məzmun: siyahı və ikinci düymə.</p>
    <ul>
      <li>Oxu</li>
      <li>Yaz</li>
      <li>Yadda saxla</li>
    </ul>
    <button type="button">Saxla</button>
  </article>
</main>`;

const SITE_LARGE = `<style>
  body { margin: 0; font-family: sans-serif; background: #f8fafc; color: #0f172a; }
  header { display: flex; justify-content: space-between; align-items: center; padding: 16px 28px; background: #0f172a; color: #fff; }
  header a { color: #cbd5e1; margin-left: 16px; text-decoration: none; }
  .hero { padding: 56px 28px; background: #e0f2fe; }
  .hero h1 { margin: 0 0 8px; font-size: 2.4rem; }
  .wrap { max-width: 960px; margin: 0 auto; padding: 28px; }
  .grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 14px; }
  .card { background: #fff; border: 1px solid #e2e8f0; border-radius: 14px; padding: 16px; }
  .card h2 { margin: 0 0 8px; font-size: 1.05rem; }
  form { display: grid; gap: 10px; margin-top: 22px; max-width: 420px; }
  input, textarea { border: 1px solid #cbd5e1; border-radius: 8px; padding: 10px; font: inherit; }
  button { border: 0; border-radius: 8px; padding: 10px 14px; background: #0284c7; color: #fff; font-weight: 700; }
  footer { padding: 18px 28px; color: #64748b; border-top: 1px solid #e2e8f0; }
  @media (max-width: 700px) { .grid { grid-template-columns: 1fr; } }
</style>
<header>
  <strong>Nümunə sayt</strong>
  <nav>
    <a href="#haqqinda">Haqqında</a>
    <a href="#isler">İşlər</a>
    <a href="#yazi">Yaz</a>
  </nav>
</header>
<section class="hero">
  <h1>Böyük nümunə</h1>
  <p>Başlıq, üç kart, forma və alt hissə bir səhifədədir.</p>
</section>
<div class="wrap" id="haqqinda">
  <div class="grid" id="isler">
    <article class="card">
      <h2>Birinci iş</h2>
      <p>Qısa təsvir. Kart öz qutusundadır.</p>
    </article>
    <article class="card">
      <h2>İkinci iş</h2>
      <p>Eyni ölçü, fərqli mətn. Şəbəkə üç sütundur.</p>
    </article>
    <article class="card">
      <h2>Üçüncü iş</h2>
      <p>Telefonda kartlar alt-alta düşür.</p>
    </article>
  </div>
  <form id="yazi">
    <h2>Qısa məktub</h2>
    <input type="text" name="ad" placeholder="Ad">
    <input type="email" name="poct" placeholder="E-poçt">
    <textarea name="metn" rows="4" placeholder="Mətn"></textarea>
    <button type="button">Göndər</button>
  </form>
</div>
<footer>Nümunə saytın alt hissəsi.</footer>`;

const SITE_TRIES: readonly SampleTry[] = [
  {
    title: { az: "Sadə", en: "Simple", tr: "Basit", ar: "بسيط", ru: "Простой" },
    note: {
      az: "Bir başlıq və bir abzas. Menyü, kart və forma yoxdur. Səhifənin ən kiçik halıdır.",
      en: "One heading and one paragraph. There is no menu, card, or form. This is the smallest page.",
      tr: "Bir başlık ve bir paragraf. Menü, kart ve form yok. Sayfanın en küçük halidir.",
      ar: "عنوان وفقرة. لا قائمة ولا بطاقة ولا نموذج. هذه أصغر صفحة.",
      ru: "Один заголовок и один абзац. Нет меню, карточки и формы. Это самая маленькая страница.",
    },
    code: SITE_SIMPLE,
  },
  {
    title: { az: "Orta", en: "Medium", tr: "Orta", ar: "متوسط", ru: "Средний" },
    note: {
      az: "Üst hissədə ad və iki keçid var. Altda iki qeyd, siyahı və düymə var.",
      en: "The top has a name and two links. Below that are two notes, a list, and a button.",
      tr: "Üstte ad ve iki bağlantı var. Altta iki not, liste ve düğme var.",
      ar: "في الأعلى اسم ورابطان. في الأسفل ملاحظتان وقائمة وزر.",
      ru: "Сверху имя и две ссылки. Ниже две заметки, список и кнопка.",
    },
    code: SITE_MEDIUM,
  },
  {
    title: { az: "Böyük", en: "Large", tr: "Büyük", ar: "كبير", ru: "Большой" },
    note: {
      az: "Başlıq zolağı, üç kart və qısa form bir səhifədədir. Telefonda kartlar alt-alta düşür.",
      en: "A heading bar, three cards, and a short form sit on one page. On a phone the cards stack.",
      tr: "Başlık şeridi, üç kart ve kısa form bir sayfadadır. Telefonda kartlar alt alta iner.",
      ar: "شريط عنوان وثلاث بطاقات ونموذج قصير في صفحة واحدة. على الهاتف تنزل البطاقات تحت بعضها.",
      ru: "Полоса заголовка, три карточки и короткая форма на одной странице. На телефоне карточки встают друг под другом.",
    },
    code: SITE_LARGE,
  },
];

const HTML_TEST_URL = "https://dev.nibrascode.com/html";

function HtmlTry({ code, title, note }: { code: string; title: string; note: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  return (
    <div className="code-try">
      <p className="code-try-level">{title}</p>
      <p className="code-try-note">{note}</p>
      <div className="code-try-bar">
        <button
          type="button"
          onClick={() => {
            void navigator.clipboard.writeText(code).then(() => {
              setCopied(true);
              window.setTimeout(() => setCopied(false), 1600);
            });
          }}
        >
          {copied ? t("code_copied") : t("code_copy")}
        </button>
        <a href={HTML_TEST_URL} target="_blank" rel="noopener noreferrer">
          {t("code_test")}
        </a>
      </div>
      <pre dir="ltr">{code}</pre>
    </div>
  );
}

export function CodeSamplePage({ slug }: { slug: string }) {
  const { t, lang } = useI18n();
  const item = CODE_SAMPLES.find((entry) => entry.slug === slug) ?? (slug === SITE_CODE.slug ? SITE_CODE : undefined);
  const parentHref = slug === SITE_CODE.slug ? programmingLocalePath(lang, "html-css") : programmingLocalePath(lang, CODE_SAMPLE_HUB);
  const parentLabel = slug === SITE_CODE.slug ? "HTML/CSS" : t("code_samples");

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {item ? (
          <a href={parentHref}>{parentLabel}</a>
        ) : (
          <a href={localeHref(lang, "/programming")}>{t("nav_programming")}</a>
        )}
      </p>
      <h1>{item ? t(item.label) : t("code_samples")}</h1>
      {item ? (
        <>
          <p className="code-lead">{SAMPLE_INTRO[item.slug][lang]}</p>
          <div className="code-tries">
            {(item.slug === SITE_CODE.slug ? SITE_TRIES : item.slug === "oyun-kodu" ? GAME_TRIES : APP_TRIES).map((entry) => (
              <HtmlTry key={entry.title.az} code={entry.code} title={entry.title[lang]} note={entry.note[lang]} />
            ))}
          </div>
        </>
      ) : (
        <>
          <p>{t("code_samples_note")}</p>
          <p>{HUB_NOTE[lang]}</p>
          <ul className="lib-list">
            {CODE_SAMPLES.map((entry) => (
              <li key={entry.slug}>
                <a href={programmingLocalePath(lang, entry.slug)}>
                  {t(entry.label)}
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
              </li>
            ))}
          </ul>
        </>
      )}
    </main>
  );
}

const INSTALL_LINK: Record<string, { slug: string; label: TKey }> = {
  python: { slug: "python-qurasdir", label: "prog_python_setup" },
  javascript: { slug: "node-qurasdir", label: "prog_node_setup" },
  typescript: { slug: "node-qurasdir", label: "prog_node_setup" },
  nodejs: { slug: "node-qurasdir", label: "prog_node_setup" },
  java: { slug: "java-qurasdir", label: "prog_java_setup" },
  csharp: { slug: "csharp-qurasdir", label: "prog_csharp_setup" },
  sql: { slug: "sql-qurasdir", label: "prog_sql_setup" },
};

const INSTALL_BACK: Record<string, { slug: string; label: TKey }> = {
  "python-qurasdir": { slug: "python", label: "prog_python" },
  "node-qurasdir": { slug: "nodejs", label: "prog_node" },
  "java-qurasdir": { slug: "java", label: "prog_java" },
  "csharp-qurasdir": { slug: "csharp", label: "prog_csharp" },
  "sql-qurasdir": { slug: "sql", label: "prog_sql" },
};

const CMD_MISSING: Record<Lang, string> = {
  az: "Əmr tanınmırsa",
  en: "If the command is not recognized",
  tr: "Komut tanınmıyorsa",
  ar: "إذا لم يُعرف الأمر",
  ru: "Если команда не находится",
};

const SCHWA: Record<Lang, string> = {
  az: "ə hərfi kvadratdırsa",
  en: "If the letter ə is a square",
  tr: "ə harfi kareyse",
  ar: "إذا كان حرف ə مربعًا",
  ru: "Если буква ə квадрат",
};

const EXCEL_SCHWA: Record<Lang, string> = {
  az: "Excel-də ə pozulursa",
  en: "If Excel breaks ə",
  tr: "Excel ə'yi bozuyorsa",
  ar: "إذا أفسد Excel حرف ə",
  ru: "Если Excel портит ə",
};

const HTML_SCHWA: Record<Lang, string> = {
  az: "Səhifədə ə sual işarəsidirsə",
  en: "If ə is a question mark on the page",
  tr: "Sayfada ə soru işaretiyse",
  ar: "إذا صار ə علامة استفهام في الصفحة",
  ru: "Если ə на странице стало вопросом",
};

const EXCEL_COL: Record<Lang, string> = {
  az: "Excel bir sütun açırsa",
  en: "If Excel opens one column",
  tr: "Excel tek sütun açıyorsa",
  ar: "إذا فتح Excel عمودًا واحدًا",
  ru: "Если Excel открывает один столбец",
};

const PS_SCRIPT: Record<Lang, string> = {
  az: "PowerShell skripti saxlayırsa",
  en: "If PowerShell stops the script",
  tr: "PowerShell betiği durduruyorsa",
  ar: "إذا أوقف PowerShell السكربت",
  ru: "Если PowerShell останавливает скрипт",
};

const JSON_SCHWA: Record<Lang, string> = {
  az: "JSON-da ə \\u0259 olursa",
  en: "If ə is \\u0259 in JSON",
  tr: "JSON'da ə \\u0259 oluyorsa",
  ar: "إذا صار ə في JSON‏ \\u0259",
  ru: "Если ə в JSON стало \\u0259",
};

const ETME: Record<Lang, string> = {
  az: "ödəyici sözü ödÉ™yici olursa",
  en: "If ödəyici turns into ödÉ™yici",
  tr: "ödəyici sözcüğü ödÉ™yici oluyorsa",
  ar: "إذا صارت ödəyici هي ödÉ™yici",
  ru: "Если ödəyici стало ödÉ™yici",
};

const CS_SCHWA: Record<Lang, string> = {
  az: "C#-də ə sual işarəsi olursa",
  en: "If ə becomes a question mark in C#",
  tr: "C#'ta ə soru işareti oluyorsa",
  ar: "إذا صار ə علامة سؤال في C#",
  ru: "Если ə в C# стало вопросом",
};

const WA_EXCEL: Record<Lang, string> = {
  az: "WhatsApp söhbəti Excel-də pozulursa",
  en: "If a WhatsApp chat breaks in Excel",
  tr: "WhatsApp sohbeti Excel'de bozuluyorsa",
  ar: "إذا فسدت دردشة WhatsApp في Excel",
  ru: "Если переписка WhatsApp ломается в Excel",
};

const PDF_SCHWA: Record<Lang, string> = {
  az: "PDF-də ə kvadrat olursa",
  en: "If ə is a square in a PDF",
  tr: "PDF'de ə kare oluyorsa",
  ar: "إذا صار ə مربعًا في PDF",
  ru: "Если ə в PDF стало квадратом",
};

const MYSQL_SCHWA: Record<Lang, string> = {
  az: "MySQL-də ə sual işarəsi olursa",
  en: "If ə becomes a question mark in MySQL",
  tr: "MySQL'de ə soru işareti oluyorsa",
  ar: "إذا صار ə علامة سؤال في MySQL",
  ru: "Если ə в MySQL стало вопросом",
};

const SMS_SCHWA: Record<Lang, string> = {
  az: "SMS-də ə mesajı 70-ə endirirsə",
  en: "If ə cuts an SMS to 70",
  tr: "SMS'te ə mesajı 70'e indiriyorsa",
  ar: "إذا أنزل ə الرسالة إلى 70",
  ru: "Если ə укорачивает SMS до 70",
};

const JAVA_SCHWA: Record<Lang, string> = {
  az: "Java-da Excel üçün ə pozulursa",
  en: "If ə breaks for Excel in Java",
  tr: "Java'da Excel için ə bozuluyorsa",
  ar: "إذا فسد ə من أجل Excel في Java",
  ru: "Если ə в Java портится для Excel",
};

const QR_SCHWA: Record<Lang, string> = {
  az: "QR kod ə hərfinı qəbul etmirsə",
  en: "If a QR code will not take ə",
  tr: "QR kod ə harfini kabul etmiyorsa",
  ar: "إذا لم يقبل رمز QR حرف ə",
  ru: "Если QR-код не принимает ə",
};

const IBAN_SAMPLE: Record<Lang, string> = {
  az: "IBAN nümunəsini yoxlamaq",
  en: "Check the IBAN sample",
  tr: "IBAN örneğini yoklamak",
  ar: "فحص نموذج IBAN",
  ru: "Проверить образец IBAN",
};

const VOEN_FORM: Record<Lang, string> = {
  az: "VÖEN-in doqquzuncu rəqəmi hesablanmır",
  en: "The ninth digit of a VÖEN cannot be calculated",
  tr: "VÖEN'in dokuzuncu rakamı hesaplanmaz",
  ar: "الرقم التاسع في VÖEN لا يُحسب",
  ru: "Девятую цифру VÖEN посчитать нельзя",
};

export function ProgrammingArticle({
  slug,
  title,
  sections,
  intro,
  footer,
  openAll,
}: {
  slug?: string;
  title: string;
  sections?: readonly ProgrammingSection[];
  intro?: ReactNode;
  footer?: ReactNode;
  openAll?: boolean;
}) {
  const { t, lang } = useI18n();
  const heading = (slug && PROGRAM_NAMES[slug]) || title;
  const related = slug ? INSTALL_LINK[slug] || INSTALL_BACK[slug] : undefined;

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={localeHref(lang, "/programming")}>{t("nav_programming")}</a>
      </p>
      <h1>
        {slug ? (
          <span className="topic-name">
            {(() => {
              const Icon = topicIcon(slug);
              return <Icon aria-hidden="true" />;
            })()}
            {heading}
          </span>
        ) : (
          heading
        )}
      </h1>
      {related ? (
        <p className="prog-try">
          <a href={programmingLocalePath(lang, related.slug)}>{t(related.label)}</a>
        </p>
      ) : null}
      {slug && INSTALL_BACK[slug] ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "emr-taninmir")}>{CMD_MISSING[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "e-herfi")}>{SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "excel-e")}>{EXCEL_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "excel-sutun")}>{EXCEL_COL[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "json-e")}>{JSON_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "etme")}>{ETME[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "whatsapp-excel")}>{WA_EXCEL[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "pdf-e")}>{PDF_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "sms-e")}>{SMS_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "qr-e")}>{QR_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "iban")}>{IBAN_SAMPLE[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "voen")}>{VOEN_FORM[lang]}</a>
        </p>
      ) : null}
      {slug === "java" || slug === "java-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "java-e")}>{JAVA_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "csharp" || slug === "csharp-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "csharp-e")}>{CS_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "sql" || slug === "sql-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "mysql-e")}>{MYSQL_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug === "python" || slug === "python-qurasdir" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "ps-skript")}>{PS_SCRIPT[lang]}</a>
        </p>
      ) : null}
      {slug === "html-css" ? (
        <p className="prog-try">
          <a href={searchTopicPath(lang, "xeta", "html-e")}>{HTML_SCHWA[lang]}</a>
        </p>
      ) : null}
      {slug && DEV_TRY[slug] ? (
        <p className="prog-try">
          <a href={DEV_TRY[slug]} target="_blank" rel="noopener noreferrer">
            {t("code_test")} · Nibras Dev
          </a>
          <span>{FIND_UI[lang].tryNote}</span>
        </p>
      ) : null}
      {intro}
      <div className="prog-sections">
        {sections?.map((item, itemIndex) => (
          <details key={`${item.id}-${itemIndex}`} id={item.id} className="prog-fold" open={openAll || undefined}>
            <summary>
              <h2>
                {(() => {
                  const Icon = SECTION_ICONS[item.id] ?? BookOpen;
                  return <Icon aria-hidden="true" />;
                })()}
                {item.title}
              </h2>
            </summary>
            <div className="prog-fold-body">
              {item.blocks?.map((block, blockIndex) => (
                <div key={blockIndex}>
                  {block.heading ? <h3>{block.heading}</h3> : null}
                  {block.paragraphs?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                  {block.list ? (
                    block.ordered ? (
                      <ol>
                        {block.list.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul>
                        {block.list.map((line, i) => (
                          <li key={i}>{line}</li>
                        ))}
                      </ul>
                    )
                  ) : null}
                  {block.code ? <pre dir="ltr">{block.code}</pre> : null}
                  {block.after?.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
      {slug && pageTools(slug).length ? (
        <div className="prog-fold-body">
          <h2>{TOOLS_PAGE.toolsFor[lang]}</h2>
          <ul className="lib-list">
            {pageTools(slug).map((id) => (
              <li key={id}>
                <a href={toolPath(lang, id)}>{TOOLS.find((tool) => tool.id === id)!.label[lang]}</a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {slug === "python" || slug === "javascript" || slug === "sql" || slug === "html-css" ? (
        <ul className="lib-list">
          {slug === "html-css" ? (
            <>
              <li className="is-section">
                <a href={programmingLocalePath(lang, HUBS.html.slug)}>
                  {HUBS.html.title[lang]}
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
              </li>
              <li className="is-section">
                <a href={programmingLocalePath(lang, HUBS.css.slug)}>
                  {HUBS.css.title[lang]}
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
              </li>
            </>
          ) : (
            <li className="is-section">
              <a href={programmingLocalePath(lang, HUBS[slug === "python" ? "python" : slug === "javascript" ? "javascript" : "sql"].slug)}>
                {HUBS[slug === "python" ? "python" : slug === "javascript" ? "javascript" : "sql"].title[lang]}
                <ArrowUpRight className="rtl-flip size-4" />
              </a>
            </li>
          )}
        </ul>
      ) : null}
      {slug === "html-css" ? (
        <ul className="lib-list">
          <li className="is-section">
            <a href={programmingLocalePath(lang, SITE_CODE.slug)}>
              {t(SITE_CODE.label)}
              <ArrowUpRight className="rtl-flip size-4" />
            </a>
          </li>
        </ul>
      ) : null}
      {slug === "apk-hazirla" ? (
        <>
          <div className="prog-fold-body">
            <h2>{APK_PATH[lang]}</h2>
            <p>{APK_PATH_NOTE[lang]}</p>
            <ul className="lib-list">
              {APK_LESSON_FILES.map((file) => {
                const lesson = pagesOf("javascript").find((page) => page.file === file);
                if (!lesson) return null;
                return (
                  <li key={lesson.slug}>
                    <a href={programmingLocalePath(lang, lesson.slug)}>
                      {lesson.title[lang]}
                      <ArrowUpRight className="rtl-flip size-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <ApkLab />
        </>
      ) : null}
      {footer}
    </main>
  );
}

export function PythonArticle({
  privacy,
  title,
  sections,
  bakedLang,
}: {
  privacy: readonly StudioPrivacyRow[];
  title: string;
  sections: readonly ProgrammingSection[];
  bakedLang: Lang;
}) {
  const { lang } = useI18n();
  const [view, setView] = useState({ title, sections });
  useEffect(() => {
    if (lang === bakedLang) {
      setView((current) => (current.title === title && current.sections === sections ? current : { title, sections }));
      return;
    }
    let live = true;
    import("@/lib/article-load")
      .then((mod) => mod.loadProgrammingView(lang, "python", privacy))
      .then((next) => {
        if (live && next) setView({ title: next.title, sections: next.sections });
      });
    return () => {
      live = false;
    };
  }, [lang, bakedLang, privacy, title, sections]);
  return <ProgrammingArticle slug="python" title={view.title} sections={view.sections} />;
}

export function LibraryTopicPage({
  section,
  topic,
  rows = [],
  article = null,
}: {
  section: LibrarySection;
  topic: LibraryTopic;
  rows?: readonly StudioPrivacyRow[];
  article?: { title: string; sections: readonly ProgrammingSection[] } | null;
}) {
  const { t, lang } = useI18n();
  const [shown, setShown] = useState(article);
  useEffect(() => {
    if (section !== "programming" || topic.slug === "python") return;
    if (!article || lang === "az") {
      setShown(article);
      return;
    }
    let live = true;
    import("@/lib/article-load")
      .then((mod) => mod.loadProgrammingView(lang, topic.slug, rows))
      .then((view) => {
        if (live && view) setShown(view);
      });
    return () => {
      live = false;
    };
  }, [section, topic.slug, lang, rows, article]);
  if (section === "programming" && topic.slug !== "python" && shown) {
    return <ProgrammingArticle slug={topic.slug} title={shown.title} sections={shown.sections} />;
  }
  const group: LibGroup | null = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
  const saved = group ? savedLib(group, topic.slug, lang, rows) : null;
  const topicCopy = section === "resources" ? findResourceTopic(topic.slug) : null;
  const articles = topicCopy ? articlesForTopic(topic.slug) : [];
  const heading = saved?.title || t(topic.label);
  const paragraphs = saved
    ? libParagraphs(saved.body)
    : topicCopy
      ? [topicCopy.intro[lang]]
      : section === "guides" && GUIDE_INTRO[topic.slug]
        ? [GUIDE_INTRO[topic.slug][lang]]
        : [];
  const moreLabel = { az: "Yazılar", en: "Articles", tr: "Yazılar", ar: "مقالات", ru: "Статьи" }[lang];

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={localeHref(lang, `/${section}`)}>{t(LIBRARY[section].title)}</a>
      </p>
      <h1>{heading}</h1>
      {paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {articles.length ? (
        <section>
          <h2>{moreLabel}</h2>
          <ul className="lib-list">
            {articles.map((article) => (
              <li key={article.slug}>
                <a href={localeHref(lang, `/resources/${topic.slug}/${article.slug}`)}>
                  {article.title[lang]}
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
