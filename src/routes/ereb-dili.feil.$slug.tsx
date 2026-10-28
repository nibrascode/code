import { createFileRoute, notFound } from "@tanstack/react-router";
import { VerbPage } from "@/components/arabic-verbs";
import { loadVerbs, verbPath } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const key = (m: string) => m.split(/[,/]/)[0].trim().toLowerCase();

export const Route = createFileRoute("/ereb-dili/feil/$slug")({
  loader: async ({ params }) => {
    const all = await loadVerbs();
    const i = all.findIndex((v) => v.s === params.slug);
    if (i < 0) throw notFound();
    const v = all[i];
    const related = all.filter((x) => x !== v && key(x.m) === key(v.m)).slice(0, 8);
    return { v, prev: all[i - 1], next: all[i + 1], related };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.v;
    if (!v) return {};
    const title = `${v.a} — «${v.m}» ərəbcə: ${v.r?.[0] ?? ""} ${v.i?.[0] ?? ""} | Ərəb feilləri`;
    const desc = `«${v.m}» ərəb dilində ${v.a}. İndiki zaman: ${v.r?.[0] ?? "—"} (${v.r?.[1] ?? ""}), əmr: ${v.i?.[0] ?? "—"} (${v.i?.[1] ?? ""}). Misallar və səsləndirmə.`;
    const url = `${SITE}${verbPath(v.s)}`;
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
      ],
    };
  },
  component: Page,
});

function Page() {
  const d = Route.useLoaderData();
  return <VerbPage {...d} />;
}
