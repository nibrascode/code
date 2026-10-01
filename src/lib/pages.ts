import { translations, type Lang, type TKey } from "@/lib/i18n";
import type { StudioPrivacyRow } from "@/lib/studio";

export type AboutCopy = {
  eyebrow: string;
  title: string;
  intro: string[];
  approachTitle: string;
  approach: string[];
  success: string;
  verse: string;
  verseTr: string;
};

export type UnutmaCopy = {
  eyebrow: string;
  title: string;
  verse: string;
  notes: string[];
};

function lines(text: string) {
  return text
    .split(/\n+/)
    .map((line) => line.trim())
    .filter(Boolean);
}

export function defaultAbout(lang: Lang): AboutCopy {
  const text = translations[lang];
  return {
    eyebrow: text.who_btn,
    title: text.who_h,
    intro: [text.who_p1, text.who_p2, text.who_p3, text.who_p4, text.who_p5],
    approachTitle: text.who_approach,
    approach: [text.who_a1, text.who_a2, text.who_a3, text.who_a4],
    success: text.who_success,
    verse: text.who_verse,
    verseTr: text.who_verse_tr,
  };
}

export function defaultUnutma(lang: Lang): UnutmaCopy {
  const text = translations[lang];
  const notes = Array.from({ length: 12 }, (_, index) => text[`remind_${index + 1}` as TKey]);
  return {
    eyebrow: text.remind_btn,
    title: text.remind_h,
    verse: text.remind_verse,
    notes,
  };
}

export function aboutFromRow(row: StudioPrivacyRow | undefined, lang: Lang): AboutCopy {
  if (!row) return defaultAbout(lang);
  try {
    const data = JSON.parse(row.body) as Partial<AboutCopy>;
    const base = defaultAbout(lang);
    return {
      ...base,
      ...data,
      title: data.title || row.title || base.title,
      intro: Array.isArray(data.intro) ? data.intro.map((item) => item.trim()).filter(Boolean) : base.intro,
      approach: Array.isArray(data.approach)
        ? data.approach.map((item) => item.trim()).filter(Boolean)
        : base.approach,
    };
  } catch {
    return defaultAbout(lang);
  }
}

export function unutmaFromRow(row: StudioPrivacyRow | undefined, lang: Lang): UnutmaCopy {
  if (!row) return defaultUnutma(lang);
  try {
    const data = JSON.parse(row.body) as Partial<UnutmaCopy>;
    const base = defaultUnutma(lang);
    return {
      ...base,
      ...data,
      title: data.title || row.title || base.title,
      notes: Array.isArray(data.notes) ? data.notes.map((item) => item.trim()).filter(Boolean) : base.notes,
    };
  } catch {
    return defaultUnutma(lang);
  }
}

export function aboutBody(copy: AboutCopy) {
  return JSON.stringify(copy);
}

export function unutmaBody(copy: UnutmaCopy) {
  return JSON.stringify({ ...copy, notes: copy.notes.map((item) => item.trim()).filter(Boolean) });
}

export { lines };
