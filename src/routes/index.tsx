import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, BadgeCheck, Mail, RefreshCw, Shield, Zap } from "lucide-react";
import { AppSuggest } from "@/components/app-suggest";
import { TechMark } from "@/components/tech-marquee";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { useI18n } from "@/lib/i18n-context";
import { statusText } from "@/lib/studio";
import { loadStudioBundle } from "@/lib/studio.functions";
import type { TKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loader: () => loadStudioBundle(),
  component: Home,
});

const STATUS: Partial<Record<"nibras-arabic" | "nibras-pdf" | "nibras-plans" | "nibras-docs", TKey>> = {
  "nibras-pdf": "soon",
  "nibras-plans": "soon",
  "nibras-docs": "nx_docs_stage",
};

const CARDS: {
  slug: "nibras-arabic" | "nibras-pdf" | "nibras-docs" | "nibras-plans";
  name: string;
  icon: string;
  desc: TKey;
  chips: readonly [TKey, TKey, TKey];
}[] = [
  {
    slug: "nibras-arabic",
    name: "Nibras Arabic",
    icon: "/apps/nibras-arabic.jpg",
    desc: "nx_ar_d",
    chips: ["nx_ar_1", "nx_ar_2", "nx_ar_3"],
  },
  {
    slug: "nibras-pdf",
    name: "Nibras PDF",
    icon: "/apps/nibras-pdf.jpg",
    desc: "nx_pdf_d",
    chips: ["nx_pdf_1", "nx_pdf_2", "nx_pdf_3"],
  },
  {
    slug: "nibras-docs",
    name: "Nibras Docs",
    icon: "/apps/nibras-docs.jpg",
    desc: "nx_docs_d",
    chips: ["nx_docs_1", "nx_docs_2", "nx_docs_3"],
  },
  {
    slug: "nibras-plans",
    name: "Nibras Plans",
    icon: "/apps/nibras-plans.jpg",
    desc: "nx_plans_d",
    chips: ["nx_plans_1", "nx_plans_2", "nx_plans_3"],
  },
];

function Logo({ className }: { className?: string }) {
  return <img src="/nibras-icon.png" alt="" className={className} />;
}

const DRIFT_KINDS = ["python", "js", "ts", "java", "kotlin", "swift", "cpp", "dart", "apk", "ios"] as const;

const DRIFT = DRIFT_KINDS.flatMap((id, kind) =>
  [0, 1, 2, 3].map((copy) => ({
    id,
    top: `${6 + ((kind * 13 + copy * 21) % 86)}%`,
    left: `${3 + ((kind * 31 + copy * 17) % 90)}%`,
    delay: `${((kind * 3 + copy * 2) % 7) * 0.45}s`,
  })),
);

function IosMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16.2 12.6c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3-1.6-1.3-.1-2.5.8-3.1.8-.7 0-1.7-.7-2.8-.7-1.4 0-2.7.8-3.4 2.1-1.5 2.6-.4 6.4 1 8.4.7 1 1.5 2.1 2.6 2.1 1 0 1.4-.7 2.7-.7s1.6.7 2.7.7 1.8-1 2.5-2c.8-1.1 1.1-2.2 1.1-2.3-.1 0-2.1-.8-2.1-3.6ZM14.6 6.7c.6-.7.9-1.6.8-2.6-.9.1-2 .6-2.6 1.4-.6.7-1.1 1.6-.9 2.6 1 .1 1.9-.5 2.7-1.4Z"
      />
    </svg>
  );
}

function HomeDrift() {
  return (
    <div className="nx-drift" aria-hidden="true">
      {DRIFT.map((item, index) => (
        <span
          key={`${item.id}-${index}`}
          className={`is-${item.id}`}
          style={{ top: item.top, left: item.left, animationDelay: item.delay }}
        >
          {item.id === "ios" ? <IosMark /> : <TechMark id={item.id} />}
        </span>
      ))}
    </div>
  );
}

function Home() {
  const { t } = useI18n();
  const rows = Route.useLoaderData().apps;
  const labels = { soon: t("soon"), building: t("nx_docs_stage") };
  const cards = CARDS.flatMap((card) => {
    const live = rows?.find((row) => row.slug === card.slug);
    if (live?.visible === false) return [];
    return [{ card, live }];
  });
  const extras = (rows ?? []).filter(
    (row) => row.visible !== false && !CARDS.some((card) => card.slug === row.slug),
  );

  return (
    <main className="nx">
      <HomeDrift />
      <header className="nx-nav">
        <Link to="/" className="nx-brand" aria-label="Nibras Code">
          <Logo />
          <span>
            Nibras <em>Code</em>
          </span>
        </Link>
        <nav className="nx-links">
          <Link to="/apps">{t("b_nav_apps")}</Link>
          <Link to="/about">{t("nav_about")}</Link>
          <Link to="/unutma">{t("remind_btn")}</Link>
          <Link to="/contact">{t("nx_nav_contact")}</Link>
          <LanguageSwitch />
        </nav>
      </header>

      <section className="nx-hero">
        <div className="nx-hero-copy">
          <p className="nx-kicker">{t("nx_kicker")}</p>
          <p>{t("nx_lead")}</p>
          <div className="nx-actions">
            <Link className="nx-cta" to="/apps">
              {t("b_hero_cta")}
              <ArrowUpRight className="size-4" />
            </Link>
            <Link to="/about" className="nx-ghost">
              {t("nav_about")}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
        <div className="nx-stage">
          <img src="/home/hero-desk.jpg" alt="" />
        </div>
      </section>

      <section className="nx-apps" id="apps">
        <div className="nx-grid">
          {cards.map(({ card, live }) => {
            const badge = statusText(
              live?.status,
              STATUS[card.slug] ? t(STATUS[card.slug]!) : null,
              labels,
            );
            return (
              <Link key={card.slug} to="/apps/$slug" params={{ slug: card.slug }} className="nx-card">
                <span className="nx-card-top">
                  <span className="nx-ico">
                    <img src={live?.icon_url || card.icon} alt="" />
                  </span>
                  <span>
                    {badge ? <em className="nx-status">{badge}</em> : null}
                    <b>{live?.name || card.name}</b>
                  </span>
                </span>
                <span className="nx-chips">
                  {card.chips.map((chip) => (
                    <em key={chip}>{t(chip)}</em>
                  ))}
                </span>
                <ArrowUpRight className="nx-go" />
              </Link>
            );
          })}
          {extras.map((row) => (
            <Link key={row.slug} to="/apps/$slug" params={{ slug: row.slug }} className="nx-card">
              <span className="nx-card-top">
                <span className="nx-ico">
                  <img src={row.icon_url || "/nibras-icon.png"} alt="" />
                </span>
                <span>
                  {statusText(row.status, null, labels) ? (
                    <em className="nx-status">{statusText(row.status, null, labels)}</em>
                  ) : null}
                  <b>{row.name}</b>
                </span>
              </span>
              <ArrowUpRight className="nx-go" />
            </Link>
          ))}
        </div>
      </section>

      <section className="nx-split">
        <div className="nx-why">
          <div>
            <p className="nx-kicker">{t("nx_why_k")}</p>
            <h2>
              {t("nx_why_a")}
              <span>{t("nx_why_b")}</span>
            </h2>
            <p>{t("nx_why_p")}</p>
            <Link className="nx-cta" to="/apps">
              {t("b_hero_cta")}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
          <ul>
            <li>
              <Zap />
              <b>{t("nx_w1t")}</b>
              <span>{t("nx_w1d")}</span>
            </li>
            <li>
              <Shield />
              <b>{t("nx_w2t")}</b>
              <span>{t("nx_w2d")}</span>
            </li>
            <li>
              <BadgeCheck />
              <b>{t("nx_w3t")}</b>
              <span>{t("nx_w3d")}</span>
            </li>
            <li>
              <RefreshCw />
              <b>{t("nx_w4t")}</b>
              <span>{t("nx_w4d")}</span>
            </li>
          </ul>
        </div>
        <aside className="nx-who">
          <p className="nx-kicker">{t("nx_who_k")}</p>
          <p>{t("nx_who_1")}</p>
          <p>{t("nx_who_2")}</p>
          <p>{t("nx_who_3")}</p>
          <p className="nx-verse" lang="ar" dir="rtl">
            {t("remind_verse")}
          </p>
        </aside>
      </section>

      <footer className="nx-foot">
        <div>
          <Link to="/" className="nx-brand" aria-label="Nibras Code">
            <Logo />
            <span>
              Nibras <em>Code</em>
            </span>
          </Link>
          <p>{t("nx_tag")}</p>
        </div>
        <nav>
          <Link to="/">{t("b_nav_home")}</Link>
          <Link to="/apps">{t("b_nav_apps")}</Link>
          <Link to="/about">{t("nav_about")}</Link>
          <Link to="/unutma">{t("remind_btn")}</Link>
          <Link to="/contact">{t("nx_nav_contact")}</Link>
        </nav>
        <Link to="/contact" className="nx-mail" aria-label={t("nx_nav_contact")}>
          <Mail className="size-4" />
        </Link>
        <nav className="nx-foot-extra">
          <NavMenu section="resources" />
          <NavMenu section="guides" />
          <NavMenu section="programming" />
        </nav>
        <p className="nx-verse" lang="ar" dir="rtl">
          {t("remind_verse")}
        </p>
        <AppSuggest />
        <p className="nx-copy">© 2026 Nibras Code. {t("nx_rights")}</p>
      </footer>
    </main>
  );
}