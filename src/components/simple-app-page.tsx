import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { AppDownload } from "@/components/app-download";
import type { TKey } from "@/lib/i18n";
import type { AppSlug, StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import { statusText, type StudioAppRow } from "@/lib/studio";

const STATUS: Partial<Record<AppSlug, TKey>> = {
  "nibras-pdf": "soon",
  "nibras-plans": "soon",
  "nibras-docs": "soon",
};

export function SimpleAppPage({ app, live }: { app: StudioApp; live?: StudioAppRow | null }) {
  const { t } = useI18n();
  const badge = statusText(
    app.slug === "nibras-docs" && live?.status !== "ready" ? "soon" : live?.status,
    STATUS[app.slug] ? t(STATUS[app.slug]!) : null,
    { soon: t("soon"), building: t("nx_docs_stage") },
  );

  return (
    <main className="simple-app">
      <div className="simple-app-head">
        <div className="simple-app-icon-wrap">
          <img src={live?.icon_url || app.icon} alt="" />
        </div>
        <div>
          {badge ? <p className="nx-status">{badge}</p> : null}
          <h1>{app.name}</h1>
        </div>
      </div>
      <div className="simple-app-copy">
        <div className="eyebrow">
          <i />
          {t("app_family_kicker")}
        </div>
        <p className="simple-lead">{t(app.leadKey)}</p>
        <p className="simple-body">{t(app.bodyKey)}</p>
        <ul className="simple-feats">
          {app.features.map((key) => (
            <li key={key}>
              <i />
              {t(key)}
            </li>
          ))}
        </ul>
        <Link to="/apps" className="simple-more">
          {t("app_other")}
          <ArrowUpRight className="rtl-flip size-3.5" />
        </Link>
        <AppDownload app={app} live={live} />
        <Link
          to="/privacy/$slug"
          params={{ slug: app.slug }}
          className="privacy-btn"
        >
          {t("privacy_btn")}
        </Link>
      </div>
    </main>
  );
}
