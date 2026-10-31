import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { VerbHub } from "@/components/arabic-verbs";
import { loadVerbs, verbHub } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const HUB = verbHub("ar");

export const Route = createFileRoute("/ar/ereb-dili/feil")({
  loader: async () => ({ verbs: await loadVerbs("ar") }),
  head: () => ({
    meta: [
      { title: "704 أفعال عربية: الماضي والمضارع والأمر — Nibras Arabic" },
      { name: "description", content: "قائمة الأفعال العربية: الماضي والمضارع والأمر لـ 704 أفعال مع أمثلة ونطق. مجاناً." },
      { property: "og:title", content: "704 أفعال عربية: الماضي والمضارع والأمر — Nibras Arabic" },
      { property: "og:url", content: `${SITE}${HUB}` },
    ],
  }),
  component: Page,
});

function Page() {
  const here = useRouterState({ select: (s) => s.location.pathname }).replace(/\/$/, "");
  const { verbs } = Route.useLoaderData();
  if (here !== HUB) return <Outlet />;
  return <VerbHub verbs={verbs} lang="ar" />;
}
