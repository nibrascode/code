import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, BadgeCheck, RefreshCw, Shield, Zap } from "lucide-react";
import { AppSuggest } from "@/components/app-suggest";
import { TechMark } from "@/components/tech-marquee";
import { LanguageSwitch } from "@/components/language-switch";
import { NavMenu } from "@/components/nav-menu";
import { SiteLegal } from "@/components/site-header";
import { HeroMark } from "@/components/hero-mark";
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

const BAR_GROUPS: Record<"g1" | "g2" | "g3", Record<Lang, string>> = {
  g1: { az: "Alətlər", en: "Tools", tr: "Araçlar", ru: "Инструменты", ar: "أدوات" },
  g2: { az: "Studio", en: "Studio", tr: "Studio", ru: "Студия", ar: "الاستوديو" },
  g3: { az: "Öyrənmə", en: "Learn", tr: "Öğrenme", ru: "Обучение", ar: "التعلّم" },
};

const BAR: Record<"dev" | "apk" | "pdf" | "qr" | "erase" | "image" | "calc" | "seo" | "flow" | "logic" | "unknown", Record<Lang, string>> = {
  dev: { az: "Kod yaz", en: "Write code", tr: "Kod yaz", ar: "اكتب كوداً", ru: "Пиши код" },
  apk: { az: "Apk hazırla", en: "Make an APK", tr: "Apk hazırla", ar: "اصنع APK", ru: "Собрать APK" },
  pdf: { az: "Pdf hazırla", en: "Make a PDF", tr: "Pdf hazırla", ar: "جهّز PDF", ru: "Сделать PDF" },
  qr: { az: "Qr hazırla", en: "Make a QR", tr: "Qr hazırla", ar: "جهّز QR", ru: "Сделать QR" },
  erase: { az: "Fon sil", en: "Remove background", tr: "Arka plan sil", ar: "احذف الخلفية", ru: "Удалить фон" },
  image: { az: "Şəkil sıx", en: "Compress photo", tr: "Foto sıkıştır", ar: "ضغط الصورة", ru: "Сжать фото" },
  calc: { az: "Hesabla", en: "Calculate", tr: "Hesapla", ar: "احسب", ru: "Посчитай" },
  seo: { az: "SEO yoxla", en: "Check SEO", tr: "SEO bak", ar: "فحص SEO", ru: "Проверить SEO" },
  flow: { az: "Plan hazırla", en: "Make a plan", tr: "Plan hazırla", ar: "جهّز خطة", ru: "Собрать план" },
  logic: { az: "Sual qur", en: "Build questions", tr: "Soru kur", ar: "ابنِ أسئلة", ru: "Собрать вопросы" },
  unknown: { az: "Sirr", en: "Secret", tr: "Sır", ar: "سر", ru: "Тайна" },
};

const STATUS: Partial<Record<"nibras-arabic" | "nibras-pdf" | "nibras-qr" | "nibras-plans" | "nibras-docs" | "nibras-office", TKey>> = {
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
    icon: "/apps/nibras-arabic.webp",
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
            <div className="nx-bar-group nx-bar-group--tools">
              <h2 className="nx-bar-group-title">{BAR_GROUPS.g1[lang]}</h2>
              <div className="nx-bar-group-grid">
                <a className="nx-ai-bar" href={localeHref(lang, "/ai")}>
                  <img src="/nibras-ai.webp" alt="" width={40} height={36} decoding="async" />
                  <span>Nibras AI</span>
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
                </a>
                <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/qr")}>
                  <svg className="nx-job nx-job-qr" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 4h6.2v6.2H4zM13.8 4H20v6.2h-6.2zM4 13.8h6.2V20H4z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M6.1 6.1h1.9v1.9H6.1zM15.9 6.1h1.9v1.9h-1.9zM6.1 16h1.9v1.9H6.1zM14.2 14.2h1.7v1.7h-1.7zM17.6 14.2H20v1.7h-2.4zM14.2 17.6h1.7V20h-1.7zM17.6 17.6H20V20h-2.4z" fill="currentColor" />
                  </svg>
                  <span className="nx-qr-text">
                    <b>{BAR.qr[lang]}</b>
                  </span>
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
                </a>
                <a className="nx-ai-bar nx-qr-bar" href={localeHref(lang, "/calc")}>
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="4" y="2.5" width="16" height="19" rx="2.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path fill="currentColor" d="M7 5.5h10v3.2H7zM7.2 11h2.3v2.2H7.2zm3.6 0h2.3v2.2h-2.3zm3.7 0H17v2.2h-2.5zM7.2 14.6h2.3V16.8H7.2zm3.6 0h2.3V16.8h-2.3zm3.7 0H17V16.8h-2.5z" />
                  </svg>
                  <span className="nx-qr-text">
                    <b>{BAR.calc[lang]}</b>
                  </span>
                </a>
              </div>
            </div>
            <div className="nx-bar-group nx-bar-group--studio">
              <h2 className="nx-bar-group-title">{BAR_GROUPS.g2[lang]}</h2>
              <div className="nx-bar-group-grid">
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
                <a className="nx-apk-bar nx-studio-bar" href={localeHref(lang, "/studio")} data-testid="home-studio">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.5 7 3.5 12l5 5M15.5 7l5 5-5 5M13.5 4.5l-3 15" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Nibras Studio</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/workspace")} data-testid="home-workspace">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                    <rect x="3" y="3.5" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="13.5" y="3.5" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <rect x="3" y="13" width="7.5" height="7.5" rx="2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                    <path d="M17.25 13.5v6.5M14 16.75h6.5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                  <span>Workspace</span>
                </a>
              </div>
            </div>
            <div className="nx-bar-group nx-bar-group--learn">
              <h2 className="nx-bar-group-title">{BAR_GROUPS.g3[lang]}</h2>
              <div className="nx-bar-group-grid">
                <a className="nx-apk-bar" href={localeHref(lang, "/learn")} data-testid="home-learn">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5zM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5z" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                  </svg>
                  <span>Learn</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/doctor")} data-testid="home-doctor">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 12h4l2-5 4 10 2-5h6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>Site Doctor</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/error-help")} data-testid="home-error-help">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3 2 20h20zM12 10v4M12 17h.01" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Error Help</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/learn/logic")} data-testid="home-learn-logic">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h5a5 5 0 0 1 0 10H4zM14 12h6M2 9.5h2M2 14.5h2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Logic Lab</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/mirror")} data-testid="home-mirror">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 12h4M8 12c3 0 3-6 6-6h3M8 12c3 0 3 6 6 6h3M8 12h9" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Site Mirror</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/shortcuts")} data-testid="home-shortcuts">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 7h18v10H3zM6 10h1M9 10h1M12 10h1M15 10h1M18 10h0M7 14h10" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Shortcuts</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/schema")} data-testid="home-schema">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3zM4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>Schema</span>
                </a>
                <a className="nx-apk-bar" href={localeHref(lang, "/filecheck")} data-testid="home-filecheck">
                  <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h8l4 4v14H6zM14 3v4h4M9 13l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>File Check</span>
                </a>
              </div>
            </div>
          </div>
          <div className="nx-mini">
            <a href={localeHref(lang, "/seo")}>
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="10.5" cy="10.5" r="5.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M14.4 14.4 19 19" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>{BAR.seo[lang]}</span>
            </a>
            <a href={localeHref(lang, "/flow")}>
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M5 7h6M5 12h10M5 17h14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <span>{BAR.flow[lang]}</span>
            </a>
            <a href={localeHref(lang, "/logic")}>
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M6 7h8M14 7v4H8M8 11v4h8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>{BAR.logic[lang]}</span>
            </a>
            <a href={localeHref(lang, "/unknown")}>
              <svg className="nx-apk" viewBox="0 0 24 24" aria-hidden="true">
                <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
                <path d="M9.2 9.2a2.8 2.8 0 1 1 3.6 2.7c-.7.3-1 .8-1 1.6V14.2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M12 17.2h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
              </svg>
              <span>{BAR.unknown[lang]}</span>
            </a>
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
                : card.slug === "nibras-docs" && live?.status !== "ready"
                  ? "soon"
                  : live?.status,
              STATUS[card.slug] ? t(STATUS[card.slug]!) : null,
              labels,
            );
            const built = STUDIO_APPS.find((item) => item.slug === card.slug);
            const stores = built ? appStoreLinks(built, live) : [];
            return (
              <div key={card.slug} className="nx-card-slot">
                <a href={localeHref(lang, `/apps/${card.slug}`)} className="nx-card">
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
        <p className="nx-kicker">APK</p>
        <nav className="faq-links" aria-label="APK">
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
