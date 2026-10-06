import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppDownload } from "@/components/app-download";
import { SimpleAppPage } from "@/components/simple-app-page";
import { getAppBySlug, type StudioApp } from "@/lib/apps";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import { fetchStudioApp, statusText, type StudioAppRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";

export type AppPageData =
  | { kind: "built"; app: NonNullable<ReturnType<typeof getAppBySlug>>; row: StudioAppRow | null }
  | { kind: "extra"; row: StudioAppRow };

export async function loadAppPage(slug: string): Promise<AppPageData | null> {
  const app = getAppBySlug(slug);
  const row = await fetchStudioApp(slug);
  if (app) return { kind: "built", app, row };
  if (!row || row.visible === false) return null;
  return { kind: "extra", row };
}

export const Route = createFileRoute("/apps/$slug")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  loader: async ({ params }) => {
    const data = await loadAppPage(params.slug);
    if (!data) throw notFound();
    return data;
  },
  component: function StudioAppPage() {
    return <AppSlugView data={Route.useLoaderData()} />;
  },
});

export function AppSlugView({ data }: { data: AppPageData }) {
  if (data.kind === "built") return <SimpleAppPage app={data.app} live={data.row} />;
  return <ExtraApp row={data.row} />;
}

function ExtraApp({ row }: { row: StudioAppRow }) {
  const { t, lang } = useI18n();
  const badge = statusText(row.status, null, { soon: t("soon"), building: t("nx_docs_stage") });
  const app: StudioApp = {
    slug: "nibras-docs",
    name: row.name,
    icon: row.icon_url || "/nibras-icon.png",
    playStoreUrl: row.play_url || null,
    leadKey: "docs_lead",
    bodyKey: "docs_body",
    features: [],
    shots: [],
  };

  return (
    <main className="simple-app">
      <div className="simple-app-head">
        <div className="simple-app-icon-wrap">
          <img src={app.icon} alt="" />
        </div>
        <div>
          {badge ? <p className="nx-status">{badge}</p> : null}
          <h1>{row.name}</h1>
        </div>
      </div>
      <div className="simple-app-copy">
        <p className="simple-lead">{row.summary}</p>
        <a href={localeHref(lang, "/apps")} className="simple-more">
          {t("app_other")}
          <ArrowUpRight className="rtl-flip size-3.5" />
        </a>
        <AppDownload app={app} live={row} />
        <a href={`/privacy/${row.slug}`} className="privacy-btn">
          {t("privacy_btn")}
        </a>
      </div>
    </main>
  );
}