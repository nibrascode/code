import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppDownload } from "@/components/app-download";
import { SimpleAppPage } from "@/components/simple-app-page";
import { getAppBySlug, type StudioApp } from "@/lib/apps";
import { fetchStudioApp, statusText, type StudioAppRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/apps/$slug")({
  loader: async ({ params }) => {
    const app = getAppBySlug(params.slug);
    const row = await fetchStudioApp(params.slug);
    if (app) return { kind: "built" as const, app, row };
    if (!row || row.visible === false) throw notFound();
    return { kind: "extra" as const, row };
  },
  component: StudioAppPage,
});

function StudioAppPage() {
  const data = Route.useLoaderData();
  if (data.kind === "built") return <SimpleAppPage app={data.app} live={data.row} />;
  return <ExtraApp row={data.row} />;
}

function ExtraApp({ row }: { row: StudioAppRow }) {
  const { t } = useI18n();
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
        <Link to="/apps" className="simple-more">
          {t("app_other")}
          <ArrowUpRight className="rtl-flip size-3.5" />
        </Link>
        <AppDownload app={app} live={row} />
        <Link to="/privacy/$slug" params={{ slug: row.slug }} className="privacy-btn">
          {t("privacy_btn")}
        </Link>
      </div>
    </main>
  );
}
