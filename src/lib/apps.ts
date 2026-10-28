import type { TKey } from "@/lib/i18n";
import PLAY_FACTS from "@/data/play-facts.json";

type PlayFact = { listed?: boolean; playUrl?: string };
const PLAY_MAP = ((PLAY_FACTS as { apps?: Record<string, PlayFact> }).apps ??
  (PLAY_FACTS as unknown as Record<string, PlayFact>));

/** Play URL from the synced public Play data: listed → Play URL, unlisted (404) → null, unknown → fallback. */
export function syncedPlayUrl(slug: string, fallback?: string | null): string | null {
  const f = PLAY_MAP[slug];
  if (f?.listed === true && f.playUrl) return f.playUrl;
  if (f?.listed === false) return null;
  return (fallback || "").trim() || null;
}

export type AppSlug =
  | "nibras-arabic"
  | "nibras-docs"
  | "nibras-plans"
  | "nibras-note"
  | "nibras-scan"
  | "nibras-pdf"
  | "nibras-qr"
  | "nibras-office"
  | "majmu-al-fatawa";

export type StudioApp = {
  slug: AppSlug;
  name: string;
  icon: string;
  /** Paste the Play Store listing URL here when it is ready. */
  playStoreUrl: string | null;
  huaweiStoreUrl?: string | null;
  leadKey: TKey;
  bodyKey: TKey;
  features: readonly TKey[];
  /** Up to 4 screenshot paths, e.g. "/shots/nibras-arabic-1.jpg". Empty until photos are added. */
  shots: readonly string[];
};

export const STUDIO_APPS: StudioApp[] = [
  {
    slug: "nibras-arabic",
    name: "Nibras Arabic",
    icon: "/apps/nibras-arabic-v2.webp",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibrasarabic.app",
    huaweiStoreUrl: "https://urldra.cloud.huawei.com/CkyddvOyXK",
    leadKey: "arabic_lead",
    bodyKey: "arabic_body",
    features: ["arabic_f1", "arabic_f2", "arabic_f3", "arabic_f4", "arabic_f5", "arabic_f6"],
    shots: [
      "/shots/nibras-arabic-1.jpg",
      "/shots/nibras-arabic-2.jpg",
      "/shots/nibras-arabic-3.jpg",
      "/shots/nibras-arabic-4.jpg",
      "/shots/nibras-arabic-5.jpg",
    ],
  },
  {
    slug: "nibras-docs",
    name: "Nibras Docs",
    icon: "/apps/nibras-docs.jpg",
    playStoreUrl: null,
    leadKey: "docs_lead",
    bodyKey: "docs_body",
    features: ["docs_f1", "docs_f2", "docs_f3"],
    shots: [],
  },
  {
    slug: "nibras-plans",
    name: "Nibras Plans",
    icon: "/apps/nibras-plans.jpg",
    playStoreUrl: null,
    leadKey: "plans_lead",
    bodyKey: "plans_body",
    features: ["plans_f1", "plans_f2", "plans_f3"],
    shots: [],
  },
  {
    slug: "nibras-note",
    name: "Nibras Note",
    icon: "/apps/nibras-note.webp",
    playStoreUrl: null,
    leadKey: "note_lead",
    bodyKey: "note_body",
    features: ["note_f1", "note_f2", "note_f3"],
    shots: [],
  },
  {
    slug: "nibras-scan",
    name: "Nibras Scan",
    icon: "/apps/nibras-scan.webp",
    playStoreUrl: null,
    leadKey: "scan_lead",
    bodyKey: "scan_body",
    features: ["scan_f1", "scan_f2", "scan_f3"],
    shots: [],
  },
  {
    slug: "nibras-pdf",
    name: "Nibras PDF",
    icon: "/apps/nibras-pdf.jpg",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibras.pdf",
    leadKey: "pdf_lead",
    bodyKey: "pdf_body",
    features: ["pdf_f1", "pdf_f2", "pdf_f3"],
    shots: [],
  },
  {
    slug: "nibras-qr",
    name: "Nibras QR",
    icon: "/apps/nibras-qr-v2.jpg",
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.nibras.qr",
    leadKey: "qr_lead",
    bodyKey: "qr_body",
    features: ["qr_f1", "qr_f2", "qr_f3"],
    shots: [],
  },
  {
    slug: "nibras-office",
    name: "Nibras Office",
    icon: "/apps/nibras-office.jpg",
    playStoreUrl: null,
    huaweiStoreUrl: "https://appgallery.huawei.com/app/C119512365",
    leadKey: "office_lead",
    bodyKey: "office_body",
    features: ["office_f1", "office_f2", "office_f3"],
    shots: [],
  },
  {
    slug: "majmu-al-fatawa",
    name: "مجموع الفتاوى",
    icon: "/apps/majmu-al-fatawa.jpg",
    playStoreUrl: null,
    leadKey: "fatawa_lead",
    bodyKey: "fatawa_body",
    features: ["fatawa_f1", "fatawa_f2", "fatawa_f3"],
    shots: [],
  },
];

for (const app of STUDIO_APPS) app.playStoreUrl = syncedPlayUrl(app.slug, app.playStoreUrl);

export function getAppBySlug(slug: string): StudioApp | undefined {
  return STUDIO_APPS.find((app) => app.slug === slug);
}

export function appStoreLinks(
  app: Pick<StudioApp, "playStoreUrl" | "huaweiStoreUrl"> & { slug?: string },
  live?: { play_url?: string; huawei_url?: string } | null,
) {
  const play = app.slug
    ? syncedPlayUrl(app.slug, live?.play_url || app.playStoreUrl) || ""
    : (live?.play_url || app.playStoreUrl || "").trim();
  const huawei = (live?.huawei_url || app.huaweiStoreUrl || "").trim();
  return [
    play ? { id: "play", label: "Google Play", href: play } : null,
    huawei ? { id: "huawei", label: "Huawei", href: huawei } : null,
  ].filter((item): item is { id: string; label: string; href: string } => Boolean(item));
}

/* ── Single source of truth for product status (all 5 languages read from here) ── */
export type AppStatus = "ready" | "beta" | "building" | "planned";

export const APP_STATUS: Record<AppSlug, AppStatus> = {
  "nibras-arabic": "ready",
  "nibras-pdf": "ready",
  "nibras-office": "ready",
  "nibras-docs": "building",
  "nibras-qr": "building",
  "nibras-scan": "building",
  "majmu-al-fatawa": "building",
  "nibras-note": "planned",
  "nibras-plans": "planned",
};

export const APP_STATUS_LABEL: Record<AppStatus, Record<"az" | "en" | "tr" | "ar" | "ru", string>> = {
  ready: { az: "Hazırdır", en: "Available", tr: "Hazır", ar: "متاح", ru: "Доступно" },
  beta: { az: "Beta", en: "Beta", tr: "Beta", ar: "تجريبي", ru: "Бета" },
  building: { az: "Hazırlanır", en: "In development", tr: "Hazırlanıyor", ar: "قيد التطوير", ru: "В разработке" },
  planned: { az: "Planlaşdırılır", en: "Planned", tr: "Planlanıyor", ar: "مخطط له", ru: "Планируется" },
};

export function appStatus(slug: string): AppStatus {
  return APP_STATUS[slug as AppSlug] ?? "planned";
}

export function appStatusLabel(slug: string, lang: string): string {
  const l = APP_STATUS_LABEL[appStatus(slug)];
  return l[lang as keyof typeof l] ?? l.en;
}

/** Store links only for released/beta apps; never a Play link that is not listed. */
export function statusStoreLinks(
  app: Pick<StudioApp, "playStoreUrl" | "huaweiStoreUrl"> & { slug: string },
  live?: { play_url?: string; huawei_url?: string } | null,
) {
  const s = appStatus(app.slug);
  if (s !== "ready" && s !== "beta") return [];
  return appStoreLinks(app, live);
}
