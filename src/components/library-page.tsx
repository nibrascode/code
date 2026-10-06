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

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        Nibras Code
      </p>
      <h1>{t(page.title)}</h1>
      <ul className={section === "programming" ? "lib-list lib-list-2" : "lib-list"}>
        {page.topics.map((topic) => {
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
