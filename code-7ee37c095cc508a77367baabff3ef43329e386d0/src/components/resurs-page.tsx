import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { RESURSLAR, type ResursPage } from "@/lib/resurslar";
import { RU_RESOURCES, type RuResource } from "@/lib/ru-resources";

function ArticleBody({
  title,
  paragraphs,
  steps,
  backLabel,
  moreLabel,
  others,
  to,
}: {
  title: string;
  paragraphs: readonly string[];
  steps?: readonly string[];
  backLabel: string;
  moreLabel: string;
  others: readonly { slug: string; title: string }[];
  to: "/resurslar/$slug" | "/ru/resources/$slug";
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
              <Link to={to} params={{ slug: item.slug }}>
                {item.title}
                <ArrowUpRight className="rtl-flip size-4" />
              </Link>
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
