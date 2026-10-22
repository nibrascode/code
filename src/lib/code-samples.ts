import type { Lang, TKey } from "@/lib/i18n";

export const CODE_SAMPLE_HUB = "numune-kod";

export const CODE_SAMPLES: readonly { slug: string; label: TKey }[] = [
  { slug: "oyun-kodu", label: "code_game" },
  { slug: "tetbiq-kodu", label: "code_app" },
];

export const SITE_CODE = { slug: "sayt-kodu", label: "code_site" } as const;

export function isCodeSampleSlug(slug: string) {
  return slug === CODE_SAMPLE_HUB || slug === SITE_CODE.slug || CODE_SAMPLES.some((item) => item.slug === slug);
}

export function isCodeSampleChild(slug: string) {
  return slug === SITE_CODE.slug || CODE_SAMPLES.some((item) => item.slug === slug);
}

type Seo = { title: string; description: string; keywords: string };

function row(title: string, description: string, keywords: string): Seo {
  return { title: `${title} — Nibras Code`, description, keywords };
}

export const CODE_SAMPLE_SEO: Record<string, Record<Lang, Seo>> = {
  "numune-kod": {
    az: row("Nümunə kod", "Oyun kodu və tətbiq kodu üçün nümunə səhifələr.", "nümunə kod, oyun kodu, tətbiq kodu"),
    en: row("Sample code", "Sample pages for game code and app code.", "sample code, game code, app code"),
    tr: row("Örnek kod", "Oyun kodu ve uygulama kodu için örnek sayfalar.", "örnek kod, oyun kodu, uygulama kodu"),
    ar: row("كود نموذجي", "صفحات نموذجية لكود اللعبة وكود التطبيق.", "كود نموذجي, كود اللعبة, كود التطبيق"),
    ru: row("Примеры кода", "Страницы с примерами кода игры и приложения.", "примеры кода, код игры, код приложения"),
  },
  "oyun-kodu": {
    az: row("Oyun kodu", "Xal, üç rəqəmdən birini tapmaq və geriyə sayan taymer. Hər nümunə bir HTML səhifədə işləyir.", "oyun kodu, html, taymer"),
    en: row("Game code", "A score, a guess between three numbers, and a countdown timer. Each example runs in one HTML page.", "game code, html, timer"),
    tr: row("Oyun kodu", "Puan, üç sayıdan birini bulma ve geri sayan sayaç. Her örnek bir HTML sayfada çalışır.", "oyun kodu, html, sayaç"),
    ar: row("كود اللعبة", "نقاط وتخمين بين ثلاثة أرقام ومؤقت تنازلي. كل مثال يعمل في صفحة HTML.", "كود اللعبة, html, مؤقت"),
    ru: row("Код игры", "Счёт, угадывание одного из трёх чисел и таймер. Каждый пример работает на одной HTML-странице.", "код игры, html, таймер"),
  },
  "tetbiq-kodu": {
    az: row("Tətbiq kodu", "Qeyd siyahısı, açıq və tünd rejim, iki ədədin cəmi. Oyun nümunələrindən ayrıdır.", "tətbiq kodu, html, qeyd"),
    en: row("App code", "A note list, a light and dark mode, and the sum of two numbers. Separate from the game examples.", "app code, html, note"),
    tr: row("Uygulama kodu", "Not listesi, açık ve koyu mod, iki sayının toplamı. Oyun örneklerinden ayrıdır.", "uygulama kodu, html, not"),
    ar: row("كود التطبيق", "قائمة ملاحظات ووضع فاتح وداكن ومجموع رقمين. منفصل عن أمثلة اللعبة.", "كود التطبيق, html, ملاحظة"),
    ru: row("Код приложения", "Список заметок, светлый и тёмный режим, сумма двух чисел. Отдельно от примеров игры.", "код приложения, html, заметка"),
  },
  "sayt-kodu": {
    az: row("Sayt kodu", "Sadə, orta və böyük səhifə üçün HTML nümunələri. Kodu kopyalayıb brauzerdə yoxlamaq olur.", "sayt kodu, html nümunə"),
    en: row("Website code", "HTML examples for a simple, a medium and a large page. Copy the code and try it in the browser.", "website code, html example"),
    tr: row("Site kodu", "Sade, orta ve büyük sayfa için HTML örnekleri. Kodu kopyalayıp tarayıcıda denersin.", "site kodu, html örnek"),
    ar: row("كود الموقع", "أمثلة HTML لصفحة بسيطة ومتوسطة وكبيرة. انسخ الكود وجرّبه في المتصفح.", "كود الموقع, مثال html"),
    ru: row("Код сайта", "Примеры HTML для простой, средней и большой страницы. Код можно скопировать и открыть в браузере.", "код сайта, пример html"),
  },
};
