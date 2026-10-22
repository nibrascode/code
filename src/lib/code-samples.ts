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
    az: row("Oyun kodu", "Kiçik HTML nümunələri: başlıq, düymə və siyahı. Kodu kopyalayıb brauzerdə yoxlamaq olur.", "oyun kodu, html nümunə"),
    en: row("Game code", "Small HTML examples: a heading, a button and a list. Copy the code and try it in the browser.", "game code, html example"),
    tr: row("Oyun kodu", "Küçük HTML örnekleri: başlık, düğme ve liste. Kodu kopyalayıp tarayıcıda denersin.", "oyun kodu, html örnek"),
    ar: row("كود اللعبة", "أمثلة HTML صغيرة: عنوان وزر وقائمة. انسخ الكود وجرّبه في المتصفح.", "كود اللعبة, مثال html"),
    ru: row("Код игры", "Короткие примеры HTML: заголовок, кнопка и список. Код можно скопировать и открыть в браузере.", "код игры, пример html"),
  },
  "tetbiq-kodu": {
    az: row("Tətbiq kodu", "Tətbiq səhifəsi üçün kiçik HTML nümunələri. Kodu kopyalayıb brauzerdə yoxlamaq olur.", "tətbiq kodu, html nümunə"),
    en: row("App code", "Small HTML examples for an app page. Copy the code and try it in the browser.", "app code, html example"),
    tr: row("Uygulama kodu", "Uygulama sayfası için küçük HTML örnekleri. Kodu kopyalayıp tarayıcıda denersin.", "uygulama kodu, html örnek"),
    ar: row("كود التطبيق", "أمثلة HTML صغيرة لصفحة تطبيق. انسخ الكود وجرّبه في المتصفح.", "كود التطبيق, مثال html"),
    ru: row("Код приложения", "Короткие примеры HTML для страницы приложения. Код можно скопировать и открыть в браузере.", "код приложения, пример html"),
  },
  "sayt-kodu": {
    az: row("Sayt kodu", "Sadə, orta və böyük səhifə üçün HTML nümunələri. Kodu kopyalayıb brauzerdə yoxlamaq olur.", "sayt kodu, html nümunə"),
    en: row("Website code", "HTML examples for a simple, a medium and a large page. Copy the code and try it in the browser.", "website code, html example"),
    tr: row("Site kodu", "Sade, orta ve büyük sayfa için HTML örnekleri. Kodu kopyalayıp tarayıcıda denersin.", "site kodu, html örnek"),
    ar: row("كود الموقع", "أمثلة HTML لصفحة بسيطة ومتوسطة وكبيرة. انسخ الكود وجرّبه في المتصفح.", "كود الموقع, مثال html"),
    ru: row("Код сайта", "Примеры HTML для простой, средней и большой страницы. Код можно скопировать и открыть в браузере.", "код сайта, пример html"),
  },
};
