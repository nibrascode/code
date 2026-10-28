import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { VerbHub } from "@/components/arabic-verbs";
import { loadVerbs, VERB_HUB } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";

export const Route = createFileRoute("/ereb-dili/feil")({
  loader: async () => ({ verbs: await loadVerbs() }),
  head: () => ({
    meta: [
      { title: "Ərəb dilində 704 feil: mazi, muzari, əmr formaları — Nibras Arabic" },
      { name: "description", content: "Ərəb feilləri siyahısı: 704 feilin keçmiş, indiki zaman və əmr forması, Azərbaycan dilində tərcümə, misallar və səsləndirmə. Pulsuz." },
      { property: "og:title", content: "Ərəb dilində 704 feil — Nibras Arabic" },
      { property: "og:url", content: `${SITE}${VERB_HUB}` },
    ],
  }),
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
  const { verbs } = Route.useLoaderData();
  if (here !== VERB_HUB) return <Outlet />;
  return <VerbHub verbs={verbs} />;
}
