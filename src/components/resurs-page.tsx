import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { RESURSLAR, type ResursPage } from "@/lib/resurslar";
import { articlesForTopic, type ResourceArticle } from "@/lib/resource-topics";
import { RU_RESOURCES, type RuResource } from "@/lib/ru-resources";
import type { Lang } from "@/lib/i18n";

function ArticleBody({
  title,
  paragraphs,
  steps,
  backLabel,
  moreLabel,
  others,
  to,
  topic,
}: {
  title: string;
  paragraphs: readonly string[];
  steps?: readonly string[];
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
  const shown = paragraphs ?? page?.paragraphs ?? [];
  const heading = title || page?.title || "";
  return (
    <ArticleBody
      title={heading}
      paragraphs={shown}
      steps={paragraphs ? undefined : page?.steps}
      backLabel="Resurslar"
      moreLabel={page?.slug === "pdf" ? "PDF haqqında yazılar" : "Digər PDF yazıları"}
      others={RESURSLAR.filter((item) => item.slug !== page?.slug)}
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
      backLabel={lang === "ru" ? "Ресурсы" : lang === "en" ? "Resources" : lang === "tr" ? "Kaynaklar" : lang === "ar" ? "موارد" : "Resurslar"}
      moreLabel={lang === "ru" ? "Другие статьи" : lang === "en" ? "Other articles" : lang === "tr" ? "Diğer yazılar" : lang === "ar" ? "مقالات أخرى" : "Digər yazılar"}
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
  return (
    <ArticleBody
      title={title || page?.title || ""}
      paragraphs={paragraphs ?? page?.paragraphs ?? []}
      steps={paragraphs ? undefined : page?.steps}
      backLabel="Ресурсы"
      moreLabel={page?.slug === "pdf" ? "Статьи о PDF" : "Другие статьи о PDF"}
      others={RU_RESOURCES.filter((item) => item.slug !== page?.slug)}
      to="/ru/resources/$slug"
    />
  );
}
