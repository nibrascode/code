import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LIBRARY, type LibrarySection, type LibraryTopic } from "@/lib/library";
import { CODE_SAMPLE_HUB, CODE_SAMPLES, SITE_CODE } from "@/lib/code-samples";
import { findProgramming, type ProgrammingSection } from "@/lib/programming";
import { findProgrammingLocale, programmingLocalePath } from "@/lib/programming-locales";
import { pythonSections } from "@/lib/lessons";
import { libItems, libParagraphs, savedLib, type LibGroup } from "@/lib/library-admin";
import { articlesForTopic, findResourceTopic } from "@/lib/resource-topics";
import type { StudioPrivacyRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

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

const FIND_UI: Record<Lang, { search: string; empty: string; start: string; diff: string; tryNote: string }> = {
  az: {
    search: "Alət axtar",
    empty: "Bu adla səhifə yoxdur.",
    start: "Haradan başlayım",
    diff: "Fərqi nədir",
    tryNote: "Bu səhifəni oxuduqdan sonra kodu Nibras Dev-də yoxlaya bilərsən.",
  },
  en: {
    search: "Search a tool",
    empty: "No page with that name.",
    start: "Where to start",
    diff: "What is the difference",
    tryNote: "After this page, you can try the code in Nibras Dev.",
  },
  tr: {
    search: "Araç ara",
    empty: "Bu adda sayfa yok.",
    start: "Nereden başlamalı",
    diff: "Farkı ne",
    tryNote: "Bu sayfadan sonra kodu Nibras Dev içinde deneyebilirsin.",
  },
  ar: {
    search: "ابحث عن أداة",
    empty: "لا صفحة بهذا الاسم.",
    start: "من أين تبدأ",
    diff: "ما الفرق",
    tryNote: "بعد هذه الصفحة يمكنك تجربة الكود في Nibras Dev.",
  },
  ru: {
    search: "Найти инструмент",
    empty: "Такой страницы нет.",
    start: "С чего начать",
    diff: "В чём разница",
    tryNote: "После этой страницы код можно проверить в Nibras Dev.",
  },
};

const START_STEPS: readonly { slug: "html-css" | "python" | "ai"; text: Record<Lang, { title: string; note: string }> }[] = [
  {
    slug: "html-css",
    text: {
      az: { title: "HTML/CSS", note: "Səhifənin üzü. Əvvəl bunu oxu." },
      en: { title: "HTML/CSS", note: "The face of a page. Read this first." },
      tr: { title: "HTML/CSS", note: "Sayfanın yüzü. Önce bunu oku." },
      ar: { title: "HTML/CSS", note: "وجه الصفحة. اقرأ هذا أولاً." },
      ru: { title: "HTML/CSS", note: "Лицо страницы. Сначала прочитай это." },
    },
  },
  {
    slug: "python",
    text: {
      az: { title: "Python", note: "İlk dil. Qısa proqram buradan başlayır." },
      en: { title: "Python", note: "A first language. A short program starts here." },
      tr: { title: "Python", note: "İlk dil. Kısa program buradan başlar." },
      ar: { title: "Python", note: "اللغة الأولى. البرنامج القصير يبدأ من هنا." },
      ru: { title: "Python", note: "Первый язык. Короткая программа начинается здесь." },
    },
  },
  {
    slug: "ai",
    text: {
      az: { title: "Nibras AI", note: "İlişəndə sual ver." },
      en: { title: "Nibras AI", note: "Ask when you get stuck." },
      tr: { title: "Nibras AI", note: "Takılınca soru sor." },
      ar: { title: "Nibras AI", note: "اسأل حين تقف." },
      ru: { title: "Nibras AI", note: "Спроси, когда застрянешь." },
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

function topicLink(section: LibrarySection, slug: string, lang: string) {
  if (section === "resources" && slug === "pdf") {
    return {
      to: (lang === "ru" ? "/ru/resources/$slug" : "/resurslar/$slug") as "/ru/resources/$slug" | "/resurslar/$slug",
      params: { slug: "pdf" },
    };
  }
  return { to: `/${section}/$topic` as const, params: { topic: slug } };
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

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{t(page.title)}</h1>
      {section === "programming" ? (
        <section className="prog-start">
          <h2>{copy.start}</h2>
          <ol>
            {START_STEPS.map((step, index) => (
              <li key={step.slug}>
                <a
                  className={step.slug === "html-css" ? "step-html" : step.slug === "python" ? "step-py" : "step-ai"}
                  href={step.slug === "ai" ? "/ai" : programmingLocalePath(lang, step.slug)}
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
      {section === "programming" && needle && topics.length === 0 ? <p className="lib-empty">{copy.empty}</p> : null}
      <ul className={section === "programming" ? "lib-list lib-list-2" : "lib-list"}>
        {topics.map((topic) => {
          if (section === "programming") {
            return (
              <li key={topic.slug}>
                <a href={programmingLocalePath(lang, topic.slug)}>
                  {t(topic.label)}
                  <ArrowUpRight className="rtl-flip size-4" />
                </a>
              </li>
            );
          }
          const link = topicLink(section, topic.slug, lang);
          return (
            <li key={topic.slug}>
              <Link to={link.to} params={link.params}>
                {t(topic.label)}
                <ArrowUpRight className="rtl-flip size-4" />
              </Link>
            </li>
          );
        })}
        {extras.map((item) => (
          <li key={item.id}>
            {section === "resources" ? (
              <Link to="/resurslar/$slug" params={{ slug: item.id }}>
                {item.title}
                <ArrowUpRight className="rtl-flip size-4" />
              </Link>
            ) : (
              <Link to="/guides/$topic" params={{ topic: item.id }}>
                {item.title}
                <ArrowUpRight className="rtl-flip size-4" />
              </Link>
            )}
          </li>
        ))}
      </ul>
      {section === "programming" ? (
        <section className="prog-compare">
          <h2>{copy.diff}</h2>
          {COMPARES.map((item) => (
            <details key={item.title.en}>
              <summary>{item.title[lang]}</summary>
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
};

function toolName(slug: string) {
  return PROGRAM_NAMES[slug] || "";
}

const HTML_TRIES = [
  `<h1>Hello</h1>\n<p>HTML test</p>`,
  `<button type="button">Button</button>`,
  `<ul>\n  <li>One</li>\n  <li>Two</li>\n  <li>Three</li>\n</ul>`,
] as const;

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

const SITE_TRIES = [
  { level: "code_level_simple" as const, code: SITE_SIMPLE },
  { level: "code_level_medium" as const, code: SITE_MEDIUM },
  { level: "code_level_large" as const, code: SITE_LARGE },
];

const HTML_TEST_URL = "https://dev.nibrascode.com/html";

function HtmlTry({ code, label }: { code: string; label?: string }) {
  const { t } = useI18n();
  const [copied, setCopied] = useState(false);

  return (
    <div className="code-try">
      {label ? <p className="code-try-level">{label}</p> : null}
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
          <Link to="/programming">{t("nav_programming")}</Link>
        )}
      </p>
      <h1>{item ? t(item.label) : t("code_samples")}</h1>
      {item ? (
        <div className="code-tries">
          {item.slug === SITE_CODE.slug
            ? SITE_TRIES.map((entry) => <HtmlTry key={entry.level} code={entry.code} label={t(entry.level)} />)
            : HTML_TRIES.map((code) => <HtmlTry key={code} code={code} />)}
        </div>
      ) : (
        <>
          <p>{t("code_samples_note")}</p>
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

export function ProgrammingArticle({
  slug,
  title,
  sections,
}: {
  slug?: string;
  title: string;
  sections?: readonly ProgrammingSection[];
}) {
  const { t, lang } = useI18n();
  const heading = (slug && PROGRAM_NAMES[slug]) || title;

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <Link to="/programming">{t("nav_programming")}</Link>
      </p>
      <h1>{heading}</h1>
      {slug && DEV_TRY[slug] ? (
        <p className="prog-try">
          <a href={DEV_TRY[slug]} target="_blank" rel="noopener noreferrer">
            {t("code_test")} · Nibras Dev
          </a>
          <span>{FIND_UI[lang].tryNote}</span>
        </p>
      ) : null}
      <div className="prog-sections">
        {sections?.map((item) => (
          <details key={item.id} id={item.id} className="prog-fold">
            <summary>
              <h2>{item.title}</h2>
            </summary>
            <div className="prog-fold-body">
              {item.blocks?.map((block) => (
                <div key={block.heading ?? block.paragraphs?.[0] ?? block.code}>
                  {block.heading ? <h3>{block.heading}</h3> : null}
                  {block.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {block.list ? (
                    block.ordered ? (
                      <ol>
                        {block.list.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ol>
                    ) : (
                      <ul>
                        {block.list.map((line) => (
                          <li key={line}>{line}</li>
                        ))}
                      </ul>
                    )
                  ) : null}
                  {block.code ? <pre dir="ltr">{block.code}</pre> : null}
                  {block.after?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              ))}
            </div>
          </details>
        ))}
      </div>
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
    </main>
  );
}

export function PythonArticle({ privacy }: { privacy: readonly StudioPrivacyRow[] }) {
  const { lang } = useI18n();
  const page = findProgramming("python");
  const title = page?.seo[lang]?.title.replace(/ — Nibras Code$/, "") ?? page?.title ?? "Python";
  return <ProgrammingArticle slug="python" title={title} sections={pythonSections(lang, privacy)} />;
}

export function LibraryTopicPage({
  section,
  topic,
  rows = [],
}: {
  section: LibrarySection;
  topic: LibraryTopic;
  rows?: readonly StudioPrivacyRow[];
}) {
  const { t, lang } = useI18n();
  const page = section === "programming" && topic.slug !== "python" ? findProgramming(topic.slug) : null;
  if (page) {
    const locale = lang === "az" ? null : findProgrammingLocale(lang, topic.slug);
    const title = locale?.title ?? page.seo[lang]?.title.replace(/ — Nibras Code$/, "") ?? page.title;
    return <ProgrammingArticle slug={topic.slug} title={title} sections={locale?.sections ?? page.sections} />;
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
        <Link to={`/${section}`}>{t(LIBRARY[section].title)}</Link>
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
                <Link to="/resources/$topic/$article" params={{ topic: topic.slug, article: article.slug }}>
                  {article.title[lang]}
                  <ArrowUpRight className="rtl-flip size-4" />
                </Link>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </main>
  );
}
