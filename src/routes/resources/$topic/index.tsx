import { FileText } from "lucide-react";
import { InfoCard, InfoCards, splitSentences } from "@/components/info-card";
import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { LibraryTopicPage } from "@/components/library-page";
import { findTopic } from "@/lib/library";
import { loadStudioBundle } from "@/lib/studio.functions";
import { useI18n } from "@/lib/i18n-context";
import { articlesForTopic } from "@/lib/resource-topics";

const MORE = {
  az: "Bu bölmədəki yazılar",
  en: "Articles in this section",
  tr: "Bu bölümdeki yazılar",
  ar: "مقالات هذا القسم",
  ru: "Статьи в этом разделе",
} as const;

export const Route = createFileRoute("/resources/$topic/")({
  beforeLoad: ({ params }) => {
    if (params.topic === "pdf") {
      throw redirect({ to: "/resurslar/$slug", params: { slug: "pdf" }, replace: true });
    }
  },
  loader: async ({ params }) => {
    const topic = findTopic("resources", params.topic);
    const studio = await loadStudioBundle();
    const custom = studio.privacy.some((row) => row.slug === `lib-resurs-${params.topic}`);
    if (!topic && !custom) throw notFound();
    return {
      topic: topic ?? { slug: params.topic, label: "res_docs" as const },
      privacy: studio.privacy,
    };
  },
  component: TopicRoute,
});

function TopicRoute() {
  const { topic, privacy } = Route.useLoaderData();
  const { lang } = useI18n();
  const articles = articlesForTopic(topic.slug);
  return (
    <>
      <LibraryTopicPage section="resources" topic={topic} rows={privacy} />
      {articles.length ? (
        <div className="page-guide-wrap">
          <section className="page-guide" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
            <h2>{MORE[lang]}</h2>
            <InfoCards>
              {articles.flatMap((article) => {
                const href = `${lang === "az" ? "" : `/${lang}`}/resources/${article.topic}/${article.slug}`;
                const text = [article.description[lang], article.paragraphs[lang][0]].filter(Boolean).join(" ");
                return splitSentences(text).map((sentence, i) => (
                  <InfoCard key={`${article.slug}-${i}`} icon={FileText} title={article.title[lang]} href={href}>
                    <p>{sentence}</p>
                  </InfoCard>
                ));
              })}
            </InfoCards>
          </section>
        </div>
      ) : null}
    </>
  );
}
