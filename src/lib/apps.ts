import type { TKey } from "@/lib/i18n";

export type AppSlug =
  | "nibras-arabic"
  | "nibras-docs"
  | "nibras-plans"
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
    icon: "/apps/nibras-arabic.webp",
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

export function getAppBySlug(slug: string): StudioApp | undefined {
  return STUDIO_APPS.find((app) => app.slug === slug);
}

export function appStoreLinks(
  app: Pick<StudioApp, "playStoreUrl" | "huaweiStoreUrl">,
  live?: { play_url?: string; huawei_url?: string } | null,
) {
  const play = (live?.play_url || app.playStoreUrl || "").trim();
  const huawei = (live?.huawei_url || app.huaweiStoreUrl || "").trim();
  return [
    play ? { id: "play", label: "Google Play", href: play } : null,
    huawei ? { id: "huawei", label: "Huawei", href: huawei } : null,
  ].filter((item): item is { id: string; label: string; href: string } => Boolean(item));
}
