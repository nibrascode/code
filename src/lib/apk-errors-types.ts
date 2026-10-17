import type { Lang } from "@/lib/i18n";

export type ApkErrorText = {
  title: string;
  cause: string;
  steps: readonly string[];
  prevent: string;
};

/** One error page: the error text and commands are the same in every language, the rest is written per language. */
export type ApkError = {
  slug: string;
  err: string;
  cmd: string;
  l: Record<Lang, ApkErrorText>;
};

type Tuple = readonly [title: string, cause: string, steps: readonly string[], prevent: string];

export function E(slug: string, err: string, cmd: string, az: Tuple, en: Tuple, tr: Tuple, ar: Tuple, ru: Tuple): ApkError {
  const t = (x: Tuple): ApkErrorText => ({ title: x[0], cause: x[1], steps: x[2], prevent: x[3] });
  return { slug, err, cmd, l: { az: t(az), en: t(en), tr: t(tr), ar: t(ar), ru: t(ru) } };
}

export const APK_LABELS: Record<Lang, { symptom: string; cause: string; steps: string; commands: string; prevent: string; author: string }> = {
  az: { symptom: "Xəta mətni", cause: "Səbəb", steps: "Addım-addım həll", commands: "Nümunə əmrlər", prevent: "Təkrarlanmasın deyə", author: "Müəllif və lisenziya: Nibras Code" },
  en: { symptom: "Error text", cause: "Cause", steps: "Step-by-step fix", commands: "Example commands", prevent: "How to prevent it", author: "Author and license: Nibras Code" },
  tr: { symptom: "Hata metni", cause: "Neden", steps: "Adım adım çözüm", commands: "Örnek komutlar", prevent: "Tekrarlanmasın diye", author: "Yazar ve lisans: Nibras Code" },
  ar: { symptom: "نص الخطأ", cause: "السبب", steps: "الحل خطوة بخطوة", commands: "أوامر للمثال", prevent: "كيف لا يتكرر", author: "المؤلف والترخيص: Nibras Code" },
  ru: { symptom: "Текст ошибки", cause: "Причина", steps: "Решение по шагам", commands: "Примеры команд", prevent: "Как не повторить", author: "Автор и лицензия: Nibras Code" },
};
