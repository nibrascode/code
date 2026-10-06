import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LIBRARY, type LibrarySection, type LibraryTopic } from "@/lib/library";
import { CODE_SAMPLE_HUB, CODE_SAMPLES } from "@/lib/code-samples";
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
      <ul className="lib-list">
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
        {section === "programming" ? (
          <li className="is-section">
            <a href={programmingLocalePath(lang, CODE_SAMPLE_HUB)}>
              {t("code_samples")}
              <ArrowUpRight className="rtl-flip size-4" />
            </a>
          </li>
        ) : null}
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
};

export function CodeSamplePage({ slug }: { slug: string }) {
  const { t, lang } = useI18n();
  const item = CODE_SAMPLES.find((entry) => entry.slug === slug);

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {item ? (
          <a href={programmingLocalePath(lang, CODE_SAMPLE_HUB)}>{t("code_samples")}</a>
        ) : (
          <Link to="/programming">{t("nav_programming")}</Link>
        )}
      </p>
      <h1>{item ? t(item.label) : t("code_samples")}</h1>
      {item ? (
        <p>{t("code_sample_wait")}</p>
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
  const { t } = useI18n();
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
