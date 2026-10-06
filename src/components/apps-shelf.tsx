import { STUDIO_APPS } from "@/lib/apps";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";

export function AppsShelf() {
  const { lang } = useI18n();
  return (
    <div className="home-icons">
      {STUDIO_APPS.map((app) => (
        <a
          key={app.slug}
          href={localeHref(lang, `/apps/${app.slug}`)}
          className="app-tile"
          aria-label={app.name}
        >
          <span className="app-tile-icon">
            <img src={app.icon} alt="" />
          </span>
        </a>
      ))}
    </div>
  );
}
