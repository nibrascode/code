import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { VerbHub } from "@/components/arabic-verbs";
import { loadVerbs, verbHub } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const HUB = verbHub("ru");

export const Route = createFileRoute("/ru/ereb-dili/feil")({
  loader: async () => ({ verbs: await loadVerbs("ru") }),
  head: () => ({
    meta: [
      { title: "704 арабских глагола: прошедшее, настоящее, повелительное — Nibras Arabic" },
      { name: "description", content: "Список арабских глаголов: 704 глагола в прошедшем, настоящем и повелительном с переводом, примерами и озвучкой. Бесплатно." },
      { property: "og:title", content: "704 арабских глагола: прошедшее, настоящее, повелительное — Nibras Arabic" },
      { property: "og:url", content: `${SITE}${HUB}` },
    ],
  }),
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
  const { verbs } = Route.useLoaderData();
  if (here !== HUB) return <Outlet />;
  return <VerbHub verbs={verbs} lang="ru" />;
}
