import type { TKey } from "@/lib/i18n";

export type AppSlug = "nibras-arabic" | "nibras-docs" | "nibras-plans" | "nibras-pdf";

export type StudioApp = {
  slug: AppSlug;
  name: string;
  icon: string;
  /** Paste the Play Store listing URL here when it is ready. */
  playStoreUrl: string | null;
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
    icon: "/apps/nibras-arabic.jpg",
    playStoreUrl: null,
    leadKey: "arabic_lead",
    bodyKey: "arabic_body",
    features: ["arabic_f2", "arabic_f3", "arabic_f4", "arabic_f5", "arabic_f6"],
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
    name: "Nibras PDF Tools",
    icon: "/apps/nibras-pdf.jpg",
    playStoreUrl: null,
    leadKey: "pdf_lead",
    bodyKey: "pdf_body",
    features: ["pdf_f1", "pdf_f2", "pdf_f3"],
    shots: [],
  },
];

export function getAppBySlug(slug: string): StudioApp | undefined {
  return STUDIO_APPS.find((app) => app.slug === slug);
}
