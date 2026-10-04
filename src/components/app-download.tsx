import type { StudioApp } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import { countDownload } from "@/components/visit-meter";
import { storeLinks, type StudioAppRow } from "@/lib/studio";

function Mark({ id }: { id: string }) {
  if (id === "huawei_url") {
    return (
      <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
        <path fill="currentColor" d="M12 2.2 13.6 8l5.8-2.2-2.2 5.8 5.8 1.6-5.8 1.6 2.2 5.8L13.6 16 12 21.8 10.4 16l-5.8 2.4 2.2-5.8L1 11.2l5.8-1.6L4.6 3.8 10.4 8 12 2.2Z" />
      </svg>
    );
  }
  if (id === "appstore_url") {
    return (
      <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
        <path fill="currentColor" d="M16.4 12.7c0-2.2 1.8-3.3 1.9-3.4-1-1.5-2.6-1.7-3.2-1.7-1.3-.1-2.6.8-3.3.8s-1.7-.8-2.9-.7c-1.5 0-2.8.9-3.6 2.2-1.5 2.7-.4 6.6 1.1 8.8.7 1.1 1.6 2.3 2.7 2.2 1.1 0 1.5-.7 2.8-.7s1.7.7 2.9.7 1.9-1.1 2.6-2.2c.8-1.2 1.1-2.3 1.2-2.4-.1 0-2.2-.8-2.2-3.6Zm-2-6.6c.6-.7 1-1.7.9-2.7-1 .1-2.1.6-2.8 1.4-.6.7-1.1 1.7-.9 2.6 1 .1 2.1-.5 2.8-1.3Z" />
      </svg>
    );
  }
  if (id === "galaxy_url") {
    return (
      <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
        <path fill="currentColor" d="M7 7.5h10a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9.5a2 2 0 0 1 2-2Z" />
        <path fill="currentColor" d="M9 7.5V6.2A3 3 0 0 1 12 3a3 3 0 0 1 3 3.2v1.3h-1.6V6.2a1.4 1.4 0 0 0-2.8 0v1.3H9Z" />
      </svg>
    );
  }
  if (id === "xiaomi_url") {
    return (
      <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
        <path fill="currentColor" d="M4 16.5V8.2c0-.5.6-.8 1-.4l3.2 3.1 3.3-4.4c.3-.4.9-.4 1.2 0l3.3 4.4 3.2-3.1c.4-.4 1-.1 1 .4v8.3c0 .4-.4.8-.8.8H4.8c-.4 0-.8-.4-.8-.8Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" className="play-btn-mark" aria-hidden="true">
      <path fill="#34A853" d="m4.2 20.6 8.1-8.2-2.4-2.5L3 16.2c-.4.7 0 2.4 1.2 4.4Z" />
      <path fill="#FBBC04" d="M20.3 10.2 17 8.4l-2.7 2.6 2.6 2.6 3.4-1.9c1-.6 1-2.1 0-2.5Z" />
      <path fill="#EA4335" d="m4.2 3.4.1 13.2 5.6-5.7L4.3 3.4c-.3-.5-.1-1.1 0 0Z" />
      <path fill="#4285F4" d="M12.3 12.4 9.9 14.8 17 18.7c.8.4 1.7 0 2.2-.7l-6.9-5.6Z" />
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
            className={`play-btn store-${store.id}`}
            href={store.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => countDownload(app.slug)}
          >
            <Mark id={store.id} />
            <span>
              <small>{t("download_kicker")}</small>
              <b>{store.name}</b>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
