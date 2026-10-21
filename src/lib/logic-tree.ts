import type { Lang } from "@/lib/i18n";

export type Choice = { t: string; to: number | null };
export type Step = { q: string; a: Choice; b: Choice };

export const MAX_STEPS = 8;
export const MAX_TEXT = 80;

export function blankStep(): Step {
  return { q: "", a: { t: "", to: null }, b: { t: "", to: null } };
}

const SAMPLE: Record<Lang, Step[]> = {
  az: [
    { q: "Hansı yol olsun?", a: { t: "Qısa", to: null }, b: { t: "Ətraflı", to: 1 } },
    { q: "Davam edək?", a: { t: "Bəli", to: null }, b: { t: "Xeyr", to: null } },
  ],
  en: [
    { q: "Which way?", a: { t: "Short", to: null }, b: { t: "Longer", to: 1 } },
    { q: "Go on?", a: { t: "Yes", to: null }, b: { t: "No", to: null } },
  ],
  tr: [
    { q: "Hangi yol olsun?", a: { t: "Kısa", to: null }, b: { t: "Ayrıntılı", to: 1 } },
    { q: "Devam edelim mi?", a: { t: "Evet", to: null }, b: { t: "Hayır", to: null } },
  ],
  ar: [
    { q: "أي طريق؟", a: { t: "قصير", to: null }, b: { t: "أطول", to: 1 } },
    { q: "نكمل؟", a: { t: "نعم", to: null }, b: { t: "لا", to: null } },
  ],
  ru: [
    { q: "Какой путь?", a: { t: "Короткий", to: null }, b: { t: "Подробный", to: 1 } },
    { q: "Продолжаем?", a: { t: "Да", to: null }, b: { t: "Нет", to: null } },
  ],
};

export function sampleTree(lang: Lang): Step[] {
  return SAMPLE[lang].map((step) => ({ q: step.q, a: { ...step.a }, b: { ...step.b } }));
}

function clip(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim().slice(0, MAX_TEXT);
}

function choice(value: unknown, count: number): Choice {
  const raw = value && typeof value === "object" ? (value as { t?: unknown; to?: unknown }) : {};
  const to = raw.to;
  const next = typeof to === "number" && Number.isInteger(to) && to >= 0 && to < count ? to : null;
  return { t: clip(raw.t), to: next };
}

export function normalizeTree(value: unknown): Step[] | null {
  if (!Array.isArray(value) || value.length === 0) return null;
  const count = Math.min(value.length, MAX_STEPS);
  const steps = value.slice(0, count).map((item) => {
    const raw = item && typeof item === "object" ? (item as { q?: unknown; a?: unknown; b?: unknown }) : {};
    return { q: clip(raw.q), a: choice(raw.a, count), b: choice(raw.b, count) };
  });
  return steps.some((step) => step.q || step.a.t || step.b.t) ? steps : null;
}

export function encodeTree(steps: Step[]) {
  const json = JSON.stringify(normalizeTree(steps) ?? []);
  const bytes = new TextEncoder().encode(json);
  let bin = "";
  for (const byte of bytes) bin += String.fromCharCode(byte);
  return btoa(bin).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

export function decodeTree(token: string): Step[] | null {
  try {
    const pad = token.replace(/-/g, "+").replace(/_/g, "/");
    const bin = atob(pad + "=".repeat((4 - (pad.length % 4)) % 4));
    const bytes = Uint8Array.from(bin, (char) => char.charCodeAt(0));
    return normalizeTree(JSON.parse(new TextDecoder().decode(bytes)));
  } catch {
    return null;
  }
}

export function tokenFromHash(hash: string) {
  const match = hash.match(/(?:^#|[&#])t=([A-Za-z0-9_-]+)/);
  return match?.[1] ?? "";
}
