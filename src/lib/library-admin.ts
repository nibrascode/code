import type { Lang } from "@/lib/i18n";
import { PDF_LOCALE_PAIRS } from "@/lib/pdf-pairs";
import { RESURSLAR } from "@/lib/resurslar";
import { findRuResource } from "@/lib/ru-resources";
import type { StudioPrivacyRow } from "@/lib/studio";

export type LibGroup = "resurs" | "guide";

type Titles = Record<Lang, string>;

export type LibPage = {
  id: string;
  titles: Titles;
  body: Partial<Record<Lang, string>>;
};

const EXTRA_RESOURCES: LibPage[] = [
  page("ereb-dili", ["Ərəb dili", "Arabic", "Arapça", "العربية", "Арабский язык"]),
  page("android", ["Android", "Android", "Android", "أندرويد", "Android"]),
  page("fayl-aletleri", ["Fayl alətləri", "File tools", "Dosya araçları", "أدوات الملفات", "Файловые инструменты"]),
  page("tehsil", ["Təhsil", "Education", "Eğitim", "تعليم", "Обучение"]),
  page("senedler", ["Sənədlər", "Documents", "Belgeler", "مستندات", "Документы"]),
];

const GUIDES: LibPage[] = [
  page("pdf", ["PDF necə...", "How to PDF...", "PDF nasıl...", "كيف PDF...", "Как PDF..."]),
  page("android", ["Android-də necə...", "How to on Android...", "Android'de nasıl...", "كيف على أندرويد...", "Как на Android..."]),
  page("ereb-dili", ["Ərəb dili necə...", "How to Arabic...", "Arapça nasıl...", "كيف العربية...", "Как арабский..."]),
];

function page(id: string, titles: [string, string, string, string, string], body: Partial<Record<Lang, string>> = {}): LibPage {
  return { id, titles: { az: titles[0], en: titles[1], tr: titles[2], ar: titles[3], ru: titles[4] }, body };
}

function textOf(paragraphs: readonly string[], steps?: readonly string[]) {
  const parts = [...paragraphs];
  if (steps?.length) parts.push(steps.map((step, index) => `${index + 1}. ${step}`).join("\n"));
  return parts.join("\n\n");
}

function ruText(azSlug: string) {
  const pair = PDF_LOCALE_PAIRS.find((item) => item.az === azSlug);
  const page = pair ? findRuResource(pair.ru) : null;
  return page ? textOf(page.paragraphs, page.steps) : "";
}

const ARTICLES: LibPage[] = RESURSLAR.map((item) =>
  page(
    item.slug,
    [
      item.title,
      item.seo.en.title.replace(/ — Nibras Code$/, ""),
      item.seo.tr.title.replace(/ — Nibras Code$/, ""),
      item.seo.ar.title.replace(/ — Nibras Code$/, ""),
      item.seo.ru.title.replace(/ — Nibras Code$/, ""),
    ],
    { az: textOf(item.paragraphs, item.steps), ru: ruText(item.slug) },
  ),
);

export const LIB_GROUPS: Record<LibGroup, { label: string; pages: readonly LibPage[] }> = {
  resurs: { label: "Resurslar", pages: [...ARTICLES, ...EXTRA_RESOURCES] },
  guide: { label: "Bələdçilər", pages: GUIDES },
};

export function libSlug(group: LibGroup, id: string) {
  return `lib-${group}-${id}`;
}

export function libId(slug: string, group: LibGroup) {
  const prefix = `lib-${group}-`;
  return slug.startsWith(prefix) ? slug.slice(prefix.length) : "";
}

export function libDefaults(group: LibGroup, id: string, lang: Lang) {
  const known = LIB_GROUPS[group].pages.find((item) => item.id === id);
  return {
    title: known?.titles[lang] ?? "",
    body: known?.body[lang] ?? "",
  };
}

export function savedLib(group: LibGroup, id: string, lang: Lang, rows: readonly StudioPrivacyRow[]) {
  return rows.find((row) => row.slug === libSlug(group, id) && row.lang === lang) ?? null;
}

export function libParagraphs(body: string) {
  return body
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function libItems(group: LibGroup, rows: readonly StudioPrivacyRow[]) {
  const ids = LIB_GROUPS[group].pages.map((item) => item.id);
  for (const row of rows) {
    const id = libId(row.slug, group);
    if (id && !ids.includes(id)) ids.push(id);
  }
  return ids.map((id) => {
    const known = LIB_GROUPS[group].pages.find((item) => item.id === id);
    const row = rows.find((item) => libId(item.slug, group) === id && item.lang === "az");
    return { id, title: row?.title.trim() || known?.titles.az || id, custom: !known };
  });
}
