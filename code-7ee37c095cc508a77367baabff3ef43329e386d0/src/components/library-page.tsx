import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { LanguageSwitch } from "@/components/language-switch";
import { LIBRARY, type LibrarySection, type LibraryTopic } from "@/lib/library";
import { findProgramming, type ProgrammingSection } from "@/lib/programming";
import { pythonSections } from "@/lib/lessons";
import { libItems, libParagraphs, savedLib, type LibGroup } from "@/lib/library-admin";
import type { StudioPrivacyRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";

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

export function ProgrammingArticle({ title, sections }: { title: string; sections?: readonly ProgrammingSection[] }) {
  const { t } = useI18n();

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <div className="prog-top">
        <p className="eyebrow">
          <i />
          <Link to="/programming">{t("nav_programming")}</Link>
        </p>
        <LanguageSwitch />
      </div>
      <h1>{title}</h1>
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
  return <ProgrammingArticle title={title} sections={pythonSections(lang, privacy)} />;
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
  if (page) return <ProgrammingArticle title={page.title} sections={page.sections} />;
  const group: LibGroup | null = section === "resources" ? "resurs" : section === "guides" ? "guide" : null;
  const saved = group ? savedLib(group, topic.slug, lang, rows) : null;
  const heading = saved?.title || t(topic.label);
  const paragraphs = saved ? libParagraphs(saved.body) : [];

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
    </main>
  );
}
