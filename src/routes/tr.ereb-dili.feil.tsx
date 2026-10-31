import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { VerbHub } from "@/components/arabic-verbs";
import { loadVerbs, verbHub } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const HUB = verbHub("tr");

export const Route = createFileRoute("/tr/ereb-dili/feil")({
  loader: async () => ({ verbs: await loadVerbs("tr") }),
  head: () => ({
    meta: [
      { title: "Arapçada 704 fiil: mazi, muzari, emir — Nibras Arabic" },
      { name: "description", content: "Arapça fiil listesi: 704 fiilin geçmiş, şimdiki ve emir kipleri, Türkçe anlam, örnekler ve seslendirme. Ücretsiz." },
      { property: "og:title", content: "Arapçada 704 fiil: mazi, muzari, emir — Nibras Arabic" },
      { property: "og:url", content: `${SITE}${HUB}` },
    ],
  }),
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
  const { verbs } = Route.useLoaderData();
  if (here !== HUB) return <Outlet />;
  return <VerbHub verbs={verbs} lang="tr" />;
}
