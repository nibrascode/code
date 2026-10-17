import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { ArrowUpRight, BadgeCheck, RefreshCw, Shield, Zap } from "lucide-react";
import { AppSuggest } from "@/components/app-suggest";
import { TechMark } from "@/components/tech-marquee";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { SiteLegal } from "@/components/site-header";
import { HeroMark } from "@/components/hero-mark";
import { faqPath } from "@/lib/faq";
import { homePath, localeHref } from "@/lib/locale-path";
import { SEARCH, searchPath } from "@/lib/search-pages";
import { toolsPath, TOOLS_PAGE } from "@/lib/tools";
import { useI18n } from "@/lib/i18n-context";
import { statusText, type StudioAppRow } from "@/lib/studio";
import { loadStudioBundle } from "@/lib/studio.functions";
import type { Lang, TKey } from "@/lib/i18n";

export const Route = createFileRoute("/")({
  loader: () => loadStudioBundle(),
  component: Home,
});

const BAR: Record<"dev" | "apk" | "pdf" | "qr" | "erase" | "image" | "calc", Record<Lang, string>> = {
  dev: { az: "Kod yaz", en: "Write code", tr: "Kod yaz", ar: "اكتب كوداً", ru: "Пиши код" },
  apk: { az: "Apk hazırla", en: "Make an APK", tr: "Apk hazırla", ar: "اصنع APK", ru: "Собрать APK" },
  pdf: { az: "Pdf hazırla", en: "Make a PDF", tr: "Pdf hazırla", ar: "جهّز PDF", ru: "Сделать PDF" },
  qr: { az: "Qr hazırla", en: "Make a QR", tr: "Qr hazırla", ar: "جهّز QR", ru: "Сделать QR" },
  erase: { az: "Fon sil", en: "Remove background", tr: "Arka plan sil", ar: "احذف الخلفية", ru: "Удалить фон" },
  image: { az: "Şəkil sıx", en: "Compress photo", tr: "Foto sıkıştır", ar: "ضغط الصورة", ru: "Сжать фото" },
  calc: { az: "Hesabla", en: "Calculate", tr: "Hesapla", ar: "احسب", ru: "Посчитай" },
};

const STATUS: Partial<Record<"nibras-arabic" | "nibras-pdf" | "nibras-qr" | "nibras-plans" | "nibras-docs", TKey>> = {
  "nibras-pdf": "soon",
  "nibras-qr": "soon",
  "nibras-plans": "soon",
  "nibras-docs": "soon",
};

const CARDS: {
  slug: "nibras-arabic" | "nibras-pdf" | "nibras-qr" | "nibras-docs" | "nibras-plans";
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
    slug: "nibras-qr",
    name: "Nibras QR",
    icon: "/apps/nibras-qr-v2.jpg",
    desc: "nx_qr_d",
    chips: ["nx_qr_1", "nx_qr_2", "nx_qr_3"],
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

export function HomeView({ apps }: { apps: StudioAppRow[] }) {
  const { t, lang } = useI18n();
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
          <Link to="/unutma">{t("remind_btn")}</Link>
          <a href={localeHref(lang, "/contact")}>{t("nx_nav_contact")}</a>
          <LanguageSwitch />
        </nav>
      </header>

      <section className="nx-hero">
        <HomeDrift />
        <div className="nx-hero-copy">
          <p className="nx-kicker">{t("nx_kicker")}</p>
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
          <div className="nx-bars">
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
              <span>{BAR.dev[lang]}</span>
            </a>
            <a
              className="nx-apk-bar"
              href="https://studio.nibrascode.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="7" y="2.4" width="10" height="19.2" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M10 5.2h4M10.2 18.4h3.6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 8.2v4.2M10.2 10.4 12 12.4l1.8-2" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{BAR.apk[lang]}</span>
            </a>
            <a className="nx-apk-bar" href={toolsPath(lang)}>
              <svg className="nx-apk nx-tools" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M14.7 5.4a3.2 3.2 0 0 0-4.4 4.3L5.2 15a1.7 1.7 0 0 0 2.4 2.4l5.1-5.1a3.2 3.2 0 0 0 4.4-4.3l-2.2 2.2-1.6-1.6 2.2-2.2Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <span>{TOOLS_PAGE.heading[lang]}</span>
            </a>
            <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/pdf")}>
              <svg className="nx-job nx-job-pdf" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M7 3.2h6.6L19 8.4V20a1.4 1.4 0 0 1-1.4 1.4H7.4A1.4 1.4 0 0 1 6 20V4.6A1.4 1.4 0 0 1 7.4 3.2H7Z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M13.4 3.4V8H18" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                <path d="M8.2 12.6h1.8a1.3 1.3 0 0 1 0 2.6H8.2v2.4M12.2 17.6v-5h1.6a1.5 1.5 0 0 1 0 3h-1.6M16.1 12.6H18.4M16.1 15h1.6M16.1 17.6v-5" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="nx-qr-text">
                <b>{BAR.pdf[lang]}</b>
              </span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/qr")}>
              <svg className="nx-job nx-job-qr" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 4h6.2v6.2H4zM13.8 4H20v6.2h-6.2zM4 13.8h6.2V20H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M6.1 6.1h1.9v1.9H6.1zM15.9 6.1h1.9v1.9h-1.9zM6.1 16h1.9v1.9H6.1zM14.2 14.2h1.7v1.7h-1.7zM17.6 14.2H20v1.7h-2.4zM14.2 17.6h1.7V20h-1.7zM17.6 17.6H20V20h-2.4z" fill="currentColor" />
              </svg>
              <span className="nx-qr-text">
                <b>{BAR.qr[lang]}</b>
              </span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/erase")}>
              <svg className="nx-job nx-job-erase" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3" y="4" width="12.5" height="11" rx="1.6" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="6.6" cy="7.6" r="1.1" fill="currentColor" />
                <path d="M3.6 13.4 7.4 10l2.6 2 2-1.4 2.6 2.5" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                <path d="m14.6 12.6 4.8 4.8a1.5 1.5 0 0 1 0 2.1l-.3.3a1.5 1.5 0 0 1-2.1 0l-4.8-4.8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
              </svg>
              <span className="nx-qr-text">
                <b>{BAR.erase[lang]}</b>
              </span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/image")}>
              <svg className="nx-job nx-job-image" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="3.5" y="5" width="17" height="14" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M7.2 15.4 10.4 12l2.2 1.8 2.8-2.6" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M8.2 8.4h2.4M8.2 8.4v2.4M15.8 15.6h-2.4M15.8 15.6v-2.4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="nx-qr-text">
                <b>{BAR.image[lang]}</b>
              </span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
            <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/calc")}>
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <rect x="4" y="2.5" width="16" height="19" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path fill="currentColor" d="M7 5.5h10v3.2H7zM7.2 11h2.3v2.2H7.2zm3.6 0h2.3v2.2h-2.3zm3.7 0H17v2.2h-2.5zM7.2 14.6h2.3V16.8H7.2zm3.6 0h2.3V16.8h-2.3zm3.7 0H17V16.8h-2.5z" />
              </svg>
              <span className="nx-qr-text">
                <b>{BAR.calc[lang]}</b>
              </span>
              <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div className="nx-stage">
          <HeroMark />
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
          <a className="footer-faq" href={searchPath(lang, "movzu")}>
            {SEARCH.movzu.heading[lang]}
          </a>
          <a className="footer-faq" href={faqPath(lang)}>
            FAQ
          </a>
          <NavMenu section="programming" />
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
