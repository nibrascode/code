import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight, BadgeCheck, RefreshCw, Shield, Zap } from "lucide-react";
import { AppSuggest } from "@/components/app-suggest";
import { TechMark } from "@/components/tech-marquee";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { faqPath } from "@/lib/faq";
import { localeHref } from "@/lib/locale-path";
import { SEARCH, searchPath } from "@/lib/search-pages";
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
  "nibras-docs": "soon",
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
    const paint = () => {
      parts.forEach((part, index) => {
        const node = nodes.current[index];
        if (node) node.style.transform = `translate3d(${part.x - part.r}px, ${part.y - part.r}px, 0)`;
      });
    };
    if (reduce) {
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
      paint();
      frame = requestAnimationFrame(tick);
    };
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

function Home() {
  const { t, lang } = useI18n();
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
      <header className="nx-nav">
        <Link to="/" className="nx-brand" aria-label="Nibras Code">
          <Logo />
          <span>
            Nibras <em>Code</em>
          </span>
        </Link>
        <nav className="nx-links">
          <a href={localeHref(lang, "/about")}>{t("nav_about")}</a>
          <Link to="/unutma">{t("remind_btn")}</Link>
          <a href={localeHref(lang, "/contact")}>{t("nx_nav_contact")}</a>
          <LanguageSwitch />
        </nav>
      </header>

      <section className="nx-hero">
        <HomeDrift />
        <div className="nx-hero-copy">
          <p className="nx-kicker">{t("nx_kicker")}</p>
          <h1>
            {t("b_hero_a")} <span>{t("b_hero_b")}</span>
          </h1>
          <p>{t("nx_lead")}</p>
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
          <a className="nx-ai-bar" href="/ai">
            <img src="/nibras-ai.png" alt="" />
            <span>Nibras AI</span>
          </a>
          <a
            className="nx-studio-bar"
            href="https://dev.nibrascode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="nx-term" viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="4" width="18" height="16" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
              <path
                d="M7 9.2 10.2 12 7 14.8M12.2 15h5"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Nibras Dev</span>
          </a>
          <a
            className="nx-apk-bar"
            href="https://studio.nibrascode.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M7 3.5h7.2L19 8.2V20a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 6 20V5a1.5 1.5 0 0 1 1-1.5Z"
              />
              <path fill="#05060c" d="M14 3.8V8h4.1" />
              <path
                fill="#05060c"
                d="M12 11.2a.8.8 0 0 1 .8.8v2.1h2.1a.8.8 0 0 1 0 1.6h-2.1V18a.8.8 0 0 1-1.6 0v-2.3H8.9a.8.8 0 0 1 0-1.6h2.3V12a.8.8 0 0 1 .8-.8Z"
              />
            </svg>
            <span>Nibras Apk</span>
          </a>
        </div>
        <div className="nx-stage">
          <img src="/home/hero-desk.jpg" alt="" />
        </div>
      </section>

      <section className="nx-apps" id="apps">
        <p className="nx-kicker">{t("nx_apps_k")}</p>
        <div className="nx-grid">
          {cards.map(({ card, live }) => {
            const badge = statusText(
              card.slug === "nibras-docs" && live?.status !== "ready" ? "soon" : live?.status,
              STATUS[card.slug] ? t(STATUS[card.slug]!) : null,
              labels,
            );
            return (
              <a key={card.slug} href={localeHref(lang, `/apps/${card.slug}`)} className="nx-card">
                <span className="nx-card-top">
                  <span className="nx-ico">
                    <img src={live?.icon_url || card.icon} alt="" />
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
            );
          })}
          {extras.map((row) => (
            <a key={row.slug} href={localeHref(lang, `/apps/${row.slug}`)} className="nx-card">
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
            </a>
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
          <NavMenu section="programming" />
          <a className="footer-faq" href={searchPath(lang, "movzu")}>
            {SEARCH.movzu.heading[lang]}
          </a>
          <a className="footer-faq" href={faqPath(lang)}>
            FAQ
          </a>
        </nav>
        <AppSuggest />
        <p className="nx-copy">© 2026 Nibras Code. {t("nx_rights")}</p>
      </footer>
    </main>
  );
}