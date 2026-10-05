import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ResourceArticleView } from "@/components/resurs-page";
import { useI18n } from "@/lib/i18n-context";
import { findResourceArticle } from "@/lib/resource-topics";
import { OLD_PDF_SLUGS } from "@/lib/resurslar";

export const Route = createFileRoute("/resources/$topic/$article")({
  beforeLoad: ({ params }) => {
    const next = params.topic === "pdf" ? OLD_PDF_SLUGS[params.article] : undefined;
    if (next) throw redirect({ to: "/resurslar/$slug", params: { slug: next }, replace: true });
  },
  loader: ({ params }) => {
    const article = findResourceArticle(params.topic, params.article);
    if (!article) throw notFound();
    return { article };
  },
  component: ArticleRoute,
});

function ArticleRoute() {
  const { article } = Route.useLoaderData();
  const { lang } = useI18n();
  return <ResourceArticleView article={article} lang={lang} />;
}
