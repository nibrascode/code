import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { NIBRAS_PDF_GUIDE, type PdfGuideSection } from "@/lib/nibras-pdf-guide";
import { RESURSLAR, type ResursPage } from "@/lib/resurslar";
import { articlesForTopic, type ResourceArticle } from "@/lib/resource-topics";
import { RU_RESOURCES, type RuResource } from "@/lib/ru-resources";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

const BACK = { az: "Resurslar", en: "Resources", tr: "Kaynaklar", ar: "موارد", ru: "Ресурсы" } as const;
const MORE = { az: "Digər yazılar", en: "Other articles", tr: "Diğer yazılar", ar: "مقالات أخرى", ru: "Другие статьи" } as const;

function plainTitle(title: string) {
  return title.replace(/ — Nibras Code$/, "");
}

function ArticleBody({
  title,
  paragraphs,
  steps,
  sections,
  backLabel,
  moreLabel,
  others,
  to,
  topic,
}: {
  title: string;
  paragraphs: readonly string[];
  steps?: readonly string[];
  sections?: readonly PdfGuideSection[];
  backLabel: string;
  moreLabel: string;
  others: readonly { slug: string; title: string }[];
  to: "/resurslar/$slug" | "/ru/resources/$slug" | "/resources/$topic/$article";
  topic?: string;
}) {
  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <Link to="/resources">{backLabel}</Link>
      </p>
      <h1>{title}</h1>
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className={paragraph === paragraphs[0] ? "why-lead" : undefined}>
          {paragraph}
        </p>
      ))}
      {steps ? (
        <ol className="lib-steps">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      ) : null}
      {sections?.map((section) => (
        <section key={section.title}>
          <h2>{section.title}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.points ? (
            <ol className="lib-steps">
              {section.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ol>
          ) : null}
        </section>
      ))}
      <section>
        <h2>{moreLabel}</h2>
        <ul className="lib-list">
          {others.map((item) => (
            <li key={item.slug}>
              {topic ? (
                <Link to="/resources/$topic/$article" params={{ topic, article: item.slug }}>
                  {item.title}
                  <ArrowUpRight className="rtl-flip size-4" />
                </Link>
              ) : to === "/ru/resources/$slug" ? (
                <Link to="/ru/resources/$slug" params={{ slug: item.slug }}>
                  {item.title}
                  <ArrowUpRight className="rtl-flip size-4" />
                </Link>
              ) : (
                <Link to="/resurslar/$slug" params={{ slug: item.slug }}>
                  {item.title}
                  <ArrowUpRight className="rtl-flip size-4" />
                </Link>
              )}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export function ResursPageView({
  page,
  title,
  paragraphs,
}: {
  page?: ResursPage;
  title?: string;
  paragraphs?: readonly string[];
}) {
  const { lang } = useI18n();
  const guide = page?.slug === "nibras-pdf" && !paragraphs ? NIBRAS_PDF_GUIDE[lang] : null;
  const seo = page?.seo[lang];
  const heading = title || guide?.title || (lang === "az" ? page?.title : seo ? plainTitle(seo.title) : page?.title) || "";
  const shown = paragraphs ?? guide?.lead ?? (lang === "az" || !seo ? page?.paragraphs : [seo.description]) ?? [];
  return (
    <ArticleBody
      title={heading}
      paragraphs={shown}
      steps={paragraphs || lang !== "az" || guide ? undefined : page?.steps}
      sections={guide?.sections}
      backLabel={BACK[lang]}
      moreLabel={lang === "az" && page?.slug === "pdf" ? "PDF haqqında yazılar" : MORE[lang]}
      others={RESURSLAR.filter((item) => item.slug !== page?.slug).map((item) => ({
        slug: item.slug,
        title: lang === "az" ? item.title : plainTitle(item.seo[lang].title),
      }))}
      to="/resurslar/$slug"
    />
  );
}

export function ResourceArticleView({ article, lang }: { article: ResourceArticle; lang: Lang }) {
  const siblings = articlesForTopic(article.topic).filter((item) => item.slug !== article.slug);
  return (
    <ArticleBody
      title={article.title[lang]}
      paragraphs={article.paragraphs[lang]}
      steps={article.steps?.[lang]}
      backLabel={BACK[lang]}
      moreLabel={MORE[lang]}
      others={siblings.map((item) => ({ slug: item.slug, title: item.title[lang] }))}
      to="/resources/$topic/$article"
      topic={article.topic}
    />
  );
}
export function RuResourcePage({
  page,
  title,
  paragraphs,
}: {
  page?: RuResource;
  title?: string;
  paragraphs?: readonly string[];
}) {
  const guide = page?.slug === "nibras-pdf" && !paragraphs ? NIBRAS_PDF_GUIDE.ru : null;
  return (
    <ArticleBody
      title={title || guide?.title || page?.title || ""}
      paragraphs={paragraphs ?? guide?.lead ?? page?.paragraphs ?? []}
      steps={paragraphs || guide ? undefined : page?.steps}
      sections={guide?.sections}
      backLabel="Ресурсы"
      moreLabel={page?.slug === "pdf" ? "Статьи о PDF" : "Другие статьи о PDF"}
      others={RU_RESOURCES.filter((item) => item.slug !== page?.slug)}
      to="/ru/resources/$slug"
    />
  );
}
