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
    az: row("Oyun kodu", "Oyun üçün nümunə kod. İzah bu səhifəyə əlavə olunacaq.", "oyun kodu, nümunə kod"),
    en: row("Game code", "Sample code for a game. The explanation will be added on this page.", "game code, sample code"),
    tr: row("Oyun kodu", "Oyun için örnek kod. Açıklama bu sayfaya eklenecek.", "oyun kodu, örnek kod"),
    ar: row("كود اللعبة", "كود نموذجي للعبة. سيُضاف الشرح في هذه الصفحة.", "كود اللعبة, كود نموذجي"),
    ru: row("Код игры", "Пример кода для игры. Пояснение будет добавлено на эту страницу.", "код игры, пример кода"),
  },
  "tetbiq-kodu": {
    az: row("Tətbiq kodu", "Tətbiq üçün nümunə kod. İzah bu səhifəyə əlavə olunacaq.", "tətbiq kodu, nümunə kod"),
    en: row("App code", "Sample code for an app. The explanation will be added on this page.", "app code, sample code"),
    tr: row("Uygulama kodu", "Uygulama için örnek kod. Açıklama bu sayfaya eklenecek.", "uygulama kodu, örnek kod"),
    ar: row("كود التطبيق", "كود نموذجي للتطبيق. سيُضاف الشرح في هذه الصفحة.", "كود التطبيق, كود نموذجي"),
    ru: row("Код приложения", "Пример кода для приложения. Пояснение будет добавлено на эту страницу.", "код приложения, пример кода"),
  },
  "sayt-kodu": {
    az: row("Sayt kodu", "Sayt üçün nümunə kod. İzah bu səhifəyə əlavə olunacaq.", "sayt kodu, nümunə kod"),
    en: row("Website code", "Sample code for a website. The explanation will be added on this page.", "website code, sample code"),
    tr: row("Site kodu", "Site için örnek kod. Açıklama bu sayfaya eklenecek.", "site kodu, örnek kod"),
    ar: row("كود الموقع", "كود نموذجي للموقع. سيُضاف الشرح في هذه الصفحة.", "كود الموقع, كود نموذجي"),
    ru: row("Код сайта", "Пример кода для сайта. Пояснение будет добавлено на эту страницу.", "код сайта, пример кода"),
  },
};
