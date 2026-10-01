import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { STUDIO_APPS, type AppSlug } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import { statusText } from "@/lib/studio";
import { loadStudioBundle } from "@/lib/studio.functions";
import type { TKey } from "@/lib/i18n";

export const Route = createFileRoute("/apps/")({
  loader: () => loadStudioBundle(),
  component: AppsPage,
});

const ORDER: AppSlug[] = ["nibras-arabic", "nibras-pdf", "nibras-docs", "nibras-plans"];

const STATUS: Partial<Record<AppSlug, TKey>> = {
  "nibras-pdf": "soon",
  "nibras-plans": "soon",
  "nibras-docs": "nx_docs_stage",
};

function AppsPage() {
  const { t } = useI18n();
  const rows = Route.useLoaderData().apps;
  const labels = { soon: t("soon"), building: t("nx_docs_stage") };
  const extras = (rows ?? []).filter(
    (row) => row.visible !== false && !ORDER.includes(row.slug as AppSlug),
  );

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {t("nx_apps_k")}
      </p>
      <h1>{t("nx_apps_h")}</h1>
      <div className="app-stack">
        {ORDER.map((slug) => {
          const app = STUDIO_APPS.find((item) => item.slug === slug);
          if (!app) return null;
          const live = rows?.find((row) => row.slug === slug);
          if (live?.visible === false) return null;
          const badge = statusText(live?.status, STATUS[slug] ? t(STATUS[slug]!) : null, labels);
          return (
            <Link key={slug} to="/apps/$slug" params={{ slug }} className="app-row">
              <img src={live?.icon_url || app.icon} alt="" />
              <span>
                {badge ? <em>{badge}</em> : null}
                <b>{(live?.name || app.name).replace(" Tools", "")}</b>
                <p>{live?.summary || t(app.leadKey)}</p>
              </span>
              <ArrowUpRight className="rtl-flip size-4" />
            </Link>
          );
        })}
        {extras.map((row) => {
          const badge = statusText(row.status, null, labels);
          return (
            <Link key={row.slug} to="/apps/$slug" params={{ slug: row.slug }} className="app-row">
              <img src={row.icon_url || "/nibras-icon.png"} alt="" />
              <span>
                {badge ? <em>{badge}</em> : null}
                <b>{row.name}</b>
                <p>{row.summary}</p>
              </span>
              <ArrowUpRight className="rtl-flip size-4" />
            </Link>
          );
        })}
      </div>
    </main>
  );
}
