import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ResourceArticleView } from "@/components/resurs-page";
import { useI18n } from "@/lib/i18n-context";
import { findResourceArticle } from "@/lib/resource-topics";
import { OLD_PDF_SLUGS } from "@/lib/resurslar";
import { GuideSection } from "@/components/guide-section";
import { loadGuideAll } from "@/lib/guides";

export const Route = createFileRoute("/resources/$topic/$article")({
  beforeLoad: ({ params }) => {
    const next = params.topic === "pdf" ? OLD_PDF_SLUGS[params.article] : undefined;
    if (next) throw redirect({ to: "/resurslar/$slug", params: { slug: next }, replace: true });
  },
  loader: async ({ params }) => {
    const article = findResourceArticle(params.topic, params.article);
    if (!article) throw notFound();
    return {
      article,
      guides: await loadGuideAll("articles", `a-${params.topic}-${params.article}`),
    };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { article, guides } = Route.useLoaderData();
  const { lang } = useI18n();
  return (
    <>
      <ResourceArticleView article={article} lang={lang} />
      <div className="page-guide-wrap">
        <GuideSection guide={guides?.[lang]} lang={lang} />
      </div>
    </>
  );
}
