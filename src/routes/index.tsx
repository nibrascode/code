import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, RefreshCw, Shield, Zap } from "lucide-react";
import { AppSuggest } from "@/components/app-suggest";
import { TechMark } from "@/components/tech-marquee";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { SiteLegal } from "@/components/site-header";
import { HeroMark } from "@/components/hero-mark";
import { BAR, BarGroupView } from "@/components/home-bars";
import { faqPath } from "@/lib/faq";
import { homePath, localeHref } from "@/lib/locale-path";
import { SEARCH, searchPath, searchTopicPath } from "@/lib/search-pages";
import { gamePath, GAME_COPY, GAME_VERSION, GAMES } from "@/lib/games";
import { GameIcon } from "@/components/game-icons";
import { toolsPath, TOOLS_PAGE } from "@/lib/tools";
import { useI18n } from "@/lib/i18n-context";
import { statusText, type StudioAppRow } from "@/lib/studio";
import { appStoreLinks, STUDIO_APPS, syncedPlayUrl } from "@/lib/apps";
import { loadHomeApps } from "@/lib/studio.functions";
import type { Lang, TKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loader: () => loadHomeApps(),
  component: Home,
});


const APK_HELP: Record<Lang, string> = { az: "APK qurulmur? Həll yolları", en: "APK won't install? Fixes", tr: "APK kurulmuyor mu? Çözümler", ar: "لا يُثبَّت APK؟ الحلول", ru: "APK не ставится? Решения" };

const SOON_SLUGS = new Set(["nibras-qr", "nibras-docs", "nibras-plans"]);

const STATUS: Partial<Record<"nibras-arabic" | "nibras-pdf" | "nibras-qr" | "nibras-plans" | "nibras-docs" | "nibras-office", TKey>> = {
  "nibras-qr": "soon",
  "nibras-plans": "soon",
  "nibras-docs": "soon",
};

const CARDS: {
  slug: "nibras-arabic" | "nibras-pdf" | "nibras-qr" | "nibras-docs" | "nibras-plans" | "nibras-office";
  name: string;
  icon: string;
  desc: TKey;
  chips: readonly [TKey, TKey, TKey];
}[] = [
  {
    slug: "nibras-arabic",
    name: "Nibras Arabic",
    icon: "/apps/nibras-arabic-v2.webp",
    desc: "nx_ar_d",
    chips: ["nx_ar_1", "nx_ar_2", "nx_ar_3"],
  },
  {
    slug: "nibras-pdf",
    name: "Nibras PDF",
    icon: "/apps/nibras-pdf.webp",
    desc: "nx_pdf_d",
    chips: ["nx_pdf_1", "nx_pdf_2", "nx_pdf_3"],
  },
  {
    slug: "nibras-office",
    name: "Nibras Office",
    icon: "/apps/nibras-office.webp",
    desc: "office_lead",
    chips: ["office_f1", "office_f2", "office_f3"],
  },
  {
    slug: "nibras-qr",
    name: "Nibras QR",
    icon: "/apps/nibras-qr-v2.webp",
    desc: "nx_qr_d",
    chips: ["nx_qr_1", "nx_qr_2", "nx_qr_3"],
  },
  {
    slug: "nibras-docs",
    name: "Nibras Docs",
    icon: "/apps/nibras-docs.webp",
    desc: "nx_docs_d",
    chips: ["nx_docs_1", "nx_docs_2", "nx_docs_3"],
  },
  {
    slug: "nibras-plans",
    name: "Nibras Plans",
    icon: "/apps/nibras-plans.webp",
    desc: "nx_plans_d",
    chips: ["nx_plans_1", "nx_plans_2", "nx_plans_3"],
  },
];

function Logo({ className }: { className?: string }) {
  return <img src="/nibras-icon.webp" alt="" width={54} height={28} decoding="async" className={className} />;
}

const DRIFT_KINDS = ["python", "js", "ts", "java", "kotlin", "swift", "cpp", "dart", "apk", "ios"] as const;

const DRIFT = DRIFT_KINDS.map((id, kind) => ({
  id,
  size: kind % 3 === 0 ? 22 : 28,
}));

function HomeDrift() {
  const root = useRef<HTMLDivElement>(null);
  const nodes = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const box = root.current;
    if (!box) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const width = () => box.clientWidth || window.innerWidth;
    const height = () => box.clientHeight || window.innerHeight;
    const parts = DRIFT.map((item, index) => {
      const w = width();
      const h = height();
      const r = item.size / 2;
      const speed = 46 + ((index * 19) % 70);
      const angle = (index * 2.399) % (Math.PI * 2);
      return {
        x: r + ((index * 97) % Math.max(1, w - r * 2)),
        y: r + ((index * 53) % Math.max(1, h - r * 2)),
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r,
      };
    });
    const keepOffCopy = () => {
      const copy = box.parentElement?.querySelector(".nx-hero-copy");
      if (!copy) return;
      const host = box.getBoundingClientRect();
      const area = copy.getBoundingClientRect();
      const pad = 18;
      const left = area.left - host.left - pad;
      const top = area.top - host.top - pad;
      const right = area.right - host.left + pad;
      const bottom = area.bottom - host.top + pad;
      if (right - left < 40 || bottom - top < 40) return;
      for (const part of parts) {
        if (part.x <= left || part.x >= right || part.y <= top || part.y >= bottom) continue;
        const toLeft = part.x - left;
        const toRight = right - part.x;
        const toTop = part.y - top;
        const toBottom = bottom - part.y;
        const near = Math.min(toLeft, toRight, toTop, toBottom);
        if (near === toLeft) {
          part.x = left;
          part.vx = -Math.abs(part.vx);
        } else if (near === toRight) {
          part.x = right;
          part.vx = Math.abs(part.vx);
        } else if (near === toTop) {
          part.y = top;
          part.vy = -Math.abs(part.vy);
        } else {
          part.y = bottom;
          part.vy = Math.abs(part.vy);
        }
      }
    };
    const paint = () => {
      parts.forEach((part, index) => {
        const node = nodes.current[index];
        if (node) node.style.transform = `translate3d(${part.x - part.r}px, ${part.y - part.r}px, 0)`;
      });
    };
    if (reduce) {
      keepOffCopy();
      paint();
      return;
    }
    let frame = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(0.032, (now - last) / 1000);
      last = now;
      const w = width();
      const h = height();
      for (const part of parts) {
        part.x += part.vx * dt;
        part.y += part.vy * dt;
        if (part.x < part.r) {
          part.x = part.r;
          part.vx = Math.abs(part.vx);
        } else if (part.x > w - part.r) {
          part.x = w - part.r;
          part.vx = -Math.abs(part.vx);
        }
        if (part.y < part.r) {
          part.y = part.r;
          part.vy = Math.abs(part.vy);
        } else if (part.y > h - part.r) {
          part.y = h - part.r;
          part.vy = -Math.abs(part.vy);
        }
      }
      for (let i = 0; i < parts.length; i++) {
        const a = parts[i];
        for (let j = i + 1; j < parts.length; j++) {
          const b = parts[j];
          const dx = b.x - a.x;
          const dy = b.y - a.y;
          const min = a.r + b.r;
          const dist2 = dx * dx + dy * dy;
          if (dist2 === 0 || dist2 >= min * min) continue;
          const dist = Math.sqrt(dist2);
          const nx = dx / dist;
          const ny = dy / dist;
          const overlap = (min - dist) / 2;
          a.x -= nx * overlap;
          a.y -= ny * overlap;
          b.x += nx * overlap;
          b.y += ny * overlap;
          const rel = (a.vx - b.vx) * nx + (a.vy - b.vy) * ny;
          if (rel > 0) continue;
          a.vx -= rel * nx;
          a.vy -= rel * ny;
          b.vx += rel * nx;
          b.vy += rel * ny;
        }
      }
      keepOffCopy();
      paint();
      frame = requestAnimationFrame(tick);
    };
    keepOffCopy();
    paint();
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="nx-drift" aria-hidden="true" ref={root}>
      {DRIFT.map((item, index) => (
        <span
          key={`${item.id}-${index}`}
          ref={(node) => {
            nodes.current[index] = node;
          }}
          className={`is-${item.id}${item.size < 28 ? " is-small" : ""}`}
          style={{ width: item.size, height: item.size }}
        >
          {item.id === "ios" ? <IosMark /> : <TechMark id={item.id} />}
        </span>
      ))}
    </div>
  );
}

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


const XETA_LINKS = ["apk-qurulmur", "paket-etibarsizdir", "play-protect-bloklayir", "xapk-qurulmur", "yaddas-catmir", "telefon-uygun-deyil"] as const;

export function HomeView({ apps }: { apps: StudioAppRow[] }) {
  const { t, lang } = useI18n();
  const [gamesOpen, setGamesOpen] = useState(false);
  const rows = apps;
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
      <header className="nx-nav">
        <Link to={homePath(lang)} className="nx-brand" aria-label="Nibras Code">
          <Logo />
          <span>
            Nibras <em>Code</em>
          </span>
        </Link>
        <nav className="nx-links">
          <a href={localeHref(lang, "/about")}>{t("nav_about")}</a>
          <a href={localeHref(lang, "/unutma")}>{t("remind_btn")}</a>
          <a href={localeHref(lang, "/contact")}>{t("nx_nav_contact")}</a>
          <LanguageSwitch />
        </nav>
      </header>

      <section className="nx-hero">
        <HomeDrift />
        <div className="nx-hero-copy">
          <h1 className="nx-kicker">{t("nx_kicker")}</h1>
          <p>{t("nx_lead")}</p>
          <p>{t("nx_no_ads")}</p>
          <div className="nx-actions">
            <a className="nx-cta" href={localeHref(lang, "/apps")}>
              {t("b_hero_cta")}
              <ArrowUpRight className="size-4" />
            </a>
            <a href={localeHref(lang, "/about")} className="nx-ghost">
              {t("nav_about")}
              <ArrowUpRight className="size-4" />
            </a>
          </div>
          <div className="nx-bars">
            <BarGroupView lang={lang} group="g1" />
            <BarGroupView lang={lang} group="g2" />
            <BarGroupView lang={lang} group="g3" />
          </div>
        </div>
        <div className="nx-stage">
          <HeroMark />
        </div>
      </section>

      <section className="nx-apps nx-play" aria-label={GAME_COPY.heading[lang]}>
        <button
          type="button"
          className={`nx-card nx-play-card${gamesOpen ? " is-open" : ""}`}
          aria-expanded={gamesOpen}
          onClick={() => setGamesOpen((open) => !open)}
        >
          <span className="nx-card-top">
            <span className="nx-play-mark" aria-hidden="true">
              <i />
              <i className="is-gold" />
              <i />
              <i className="is-green" />
            </span>
            <span>
              <em className="nx-status">{GAME_VERSION}</em>
              <b>{GAME_COPY.heading[lang]}</b>
            </span>
          </span>
        </button>
        {gamesOpen ? (
          <div className="game-icon-grid">
            {GAMES.map((game) => (
              <a key={game.slug} href={gamePath(lang, game.slug)} aria-label={game.name[lang]}>
                <GameIcon slug={game.slug} />
              </a>
            ))}
          </div>
        ) : null}
      </section>

      <section className="nx-apps" id="apps">
        <p className="nx-kicker">{t("nx_apps_k")}</p>
        <div className="nx-grid">
          {cards.map(({ card, live }) => {
            const badge = statusText(
              card.slug === "nibras-pdf" || card.slug === "nibras-office"
                ? "ready"
                : card.slug === "nibras-qr" || (card.slug === "nibras-docs" && live?.status !== "ready")
                  ? "soon"
                  : live?.status,
              STATUS[card.slug] ? t(STATUS[card.slug]!) : null,
              labels,
            );
            const soon = SOON_SLUGS.has(card.slug) && !(card.slug !== "nibras-qr" && live?.status === "ready");
            const built = STUDIO_APPS.find((item) => item.slug === card.slug);
            const stores = built && !soon ? appStoreLinks(built, live) : [];
            return (
              <div key={card.slug} className={`nx-card${soon ? " is-soon" : ""}`}>
                <a href={localeHref(lang, `/apps/${card.slug}`)} className="nx-card-main">
                  <span className="nx-card-top">
                    <span className="nx-ico">
                      <img src={live?.icon_url || card.icon} alt="" width={52} height={52} loading="lazy" decoding="async" />
                    </span>
                    <span>
                      {badge ? <em className="nx-status">{badge}</em> : null}
                      <b>{card.name}</b>
                    </span>
                  </span>
                  <span className="nx-chips">
                    {card.chips.map((chip) => (
                      <em key={chip}>{t(chip)}</em>
                    ))}
                  </span>
                  <ArrowUpRight className="nx-go" />
                </a>
                {stores.length ? (
                  <span className="nx-card-stores">
                    {stores.map((store) => (
                      <a
                        key={store.id}
                        className={`nx-store-btn nx-store-${store.id}`}
                        href={store.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {store.label}
                      </a>
                    ))}
                  </span>
                ) : null}
              </div>
            );
          })}
          {extras.map((row) => (
            <a key={row.slug} href={localeHref(lang, `/apps/${row.slug}`)} className="nx-card">
              <span className="nx-card-top">
                <span className="nx-ico">
                  <img src={row.icon_url || "/nibras-icon.webp"} alt="" width={52} height={52} loading="lazy" decoding="async" />
                </span>
                <span>
                  {statusText(row.status, null, labels) ? (
                    <em className="nx-status">{statusText(row.status, null, labels)}</em>
                  ) : null}
                  <b>{row.name}</b>
                </span>
              </span>
              <ArrowUpRight className="nx-go" />
            </a>
          ))}
        </div>
      </section>

      <section className="nx-apps">
        <p className="nx-kicker">{APK_HELP[lang]}</p>
        <nav className="faq-links" aria-label={APK_HELP[lang]}>
          {XETA_LINKS.map((slug) => {
            const item = SEARCH.xeta.items.find((entry) => entry.slug === slug);
            if (!item) return null;
            return (
              <a key={slug} href={searchTopicPath(lang, "xeta", slug)}>
                {item.piece[lang].title}
              </a>
            );
          })}
        </nav>
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
            <a className="nx-cta" href={localeHref(lang, "/apps")}>
              {t("b_hero_cta")}
              <ArrowUpRight className="size-4" />
            </a>
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
        <nav className="nx-foot-extra">
          <NavMenu section="resources" />
          <NavMenu section="guides" />
          <a className="footer-faq" href={searchPath(lang, "movzu")}>
            {SEARCH.movzu.heading[lang]}
          </a>
          <a className="footer-faq" href={faqPath(lang)}>
            {t("faq_nav")}
          </a>
          <a className="footer-faq" href={gamePath(lang)}>
            {lang === "ar" ? "ألعاب" : lang === "ru" ? "Игры" : lang === "en" ? "Games" : "Oyunlar"}
          </a>
          <NavMenu section="programming" />
          <a className="footer-faq" href={localeHref(lang, "/unknown")}>
            {BAR.unknown[lang]}
          </a>
        </nav>
        <AppSuggest />
        <SiteLegal />
        <p className="nx-copy">© 2026 Nibras Code. {t("nx_rights")}</p>
      </footer>
    </main>
  );
}

function Home() {
  return <HomeView apps={Route.useLoaderData().apps} />;
}
