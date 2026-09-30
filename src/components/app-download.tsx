import type { StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import { countDownload } from "@/components/visit-meter";
import { storeLinks, type StudioAppRow } from "@/lib/studio";

function PlayMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M4.5 3.2c-.7-.4-1.5.1-1.5.9v15.8c0 .8.8 1.3 1.5.9l14.5-7.9c.7-.4.7-1.4 0-1.8L4.5 3.2Z"
      />
    </svg>
  );
}

export function AppDownload({ app, live }: { app: StudioApp; live?: StudioAppRow | null }) {
  const { t } = useI18n();
  const stores = storeLinks({
    play_url: live?.play_url || app.playStoreUrl || "",
    huawei_url: live?.huawei_url,
    appstore_url: live?.appstore_url,
    galaxy_url: live?.galaxy_url,
    xiaomi_url: live?.xiaomi_url,
  });
  if (stores.length === 0) return null;

  return (
    <section className="download-panel" aria-label={t("download_title")}>
      <div>
        <div className="eyebrow">
          <i />
          {t("download_kicker")}
        </div>
        <h3>{t("download_title")}</h3>
        <p>{t("download_ready_d")}</p>
      </div>
      <div className="download-stores">
        {stores.map((store) => (
          <a
            key={store.id}
            className="play-btn"
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => countDownload(app.slug)}
          >
            <PlayMark className="play-btn-mark" />
            <span>
              <small>{t("download_cta")}</small>
              <b>{store.name}</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
