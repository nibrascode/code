import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { VerbHub } from "@/components/arabic-verbs";
import { loadVerbs, verbHub } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const HUB = verbHub("en");

export const Route = createFileRoute("/en/ereb-dili/feil")({
  loader: async () => ({ verbs: await loadVerbs("en") }),
  head: () => ({
    meta: [
      { title: "704 Arabic verbs: past, present and imperative forms — Nibras Arabic" },
      { name: "description", content: "List of Arabic verbs: past, present and imperative forms of 704 verbs with English meaning, examples and audio. Free." },
      { property: "og:title", content: "704 Arabic verbs: past, present and imperative forms — Nibras Arabic" },
      { property: "og:url", content: `${SITE}${HUB}` },
    ],
  }),
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
  const { verbs } = Route.useLoaderData();
  if (here !== HUB) return <Outlet />;
  return <VerbHub verbs={verbs} lang="en" />;
}
