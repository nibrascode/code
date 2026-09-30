import { Link } from "@tanstack/react-router";
import { STUDIO_APPS } from "@/lib/apps";

export function AppsShelf() {
  return (
    <div className="home-icons">
      {STUDIO_APPS.map((app) => (
        <Link
          key={app.slug}
          to="/apps/$slug"
          params={{ slug: app.slug }}
          className="app-tile"
          aria-label={app.name}
        >
          <span className="app-tile-icon">
            <img src={app.icon} alt="" />
          </span>
        </Link>
      ))}
    </div>
  );
}
