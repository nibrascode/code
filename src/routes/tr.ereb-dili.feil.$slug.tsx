import { createFileRoute, notFound } from "@tanstack/react-router";
import { VerbPage } from "@/components/arabic-verbs";
import { loadVerbs, verbPath } from "@/lib/arabic-verbs";

const SITE = "https://nibrascode.com";
const key = (m: string) => m.split(/[,/]/)[0].trim().toLowerCase();

export const Route = createFileRoute("/tr/ereb-dili/feil/$slug")({
  loader: async ({ params }) => {
    const all = await loadVerbs("tr");
    const i = all.findIndex((v) => v.s === params.slug);
    if (i < 0) throw notFound();
    const v = all[i];
    const related = all.filter((x) => x !== v && key(x.m) === key(v.m)).slice(0, 8);
    return { v, prev: all[i - 1], next: all[i + 1], related };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.v;
    if (!v) return {};
    const title = `Arapça «${v.m}»: ${v.a}`;
    const desc = `Arapçada «${v.m}» ${v.a}. Şimdiki: ${v.r?.[0] ?? "—"}, emir: ${v.i?.[0] ?? "—"}. Örnekler ve seslendirme.`;
    const url = `${SITE}${verbPath(v.s, "tr")}`;
    return { meta: [{ title }, { name: "description", content: desc }, { property: "og:title", content: title }, { property: "og:description", content: desc }, { property: "og:url", content: url }] };
  },
  component: Page,
});

function Page() {
  const d = Route.useLoaderData();
  return <VerbPage {...d} lang="tr" />;
}
