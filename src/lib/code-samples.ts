import type { Lang, TKey } from "@/lib/i18n";

export const CODE_SAMPLE_HUB = "numune-kod";

export const CODE_SAMPLES: readonly { slug: string; label: TKey }[] = [
  { slug: "oyun-kodu", label: "code_game" },
  { slug: "tetbiq-kodu", label: "code_app" },
  { slug: "klaviatura", label: "code_keyboard" },
];

export function isCodeSampleSlug(slug: string) {
  return slug === CODE_SAMPLE_HUB || CODE_SAMPLES.some((item) => item.slug === slug);
}

export function isCodeSampleChild(slug: string) {
  return CODE_SAMPLES.some((item) => item.slug === slug);
}

type Seo = { title: string; description: string; keywords: string };

function row(title: string, description: string, keywords: string): Seo {
  return { title: `${title} — Nibras Code`, description, keywords };
}

export const CODE_SAMPLE_SEO: Record<string, Record<Lang, Seo>> = {
  "numune-kod": {
    az: row("Nümunə kod", "Oyun kodu, tətbiq kodu və klaviatura üçün nümunə səhifələr.", "nümunə kod, oyun kodu, tətbiq kodu, klaviatura"),
    en: row("Sample code", "Sample pages for game code, app code, and the keyboard.", "sample code, game code, app code, keyboard"),
    tr: row("Örnek kod", "Oyun kodu, uygulama kodu ve klavye için örnek sayfalar.", "örnek kod, oyun kodu, uygulama kodu, klavye"),
    ar: row("كود نموذجي", "صفحات نموذجية لكود اللعبة وكود التطبيق ولوحة المفاتيح.", "كود نموذجي, كود اللعبة, كود التطبيق, لوحة المفاتيح"),
    ru: row("Примеры кода", "Страницы с примерами кода игры, приложения и клавиатуры.", "примеры кода, код игры, код приложения, клавиатура"),
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
  klaviatura: {
    az: row("Klaviatura", "Klaviatura üçün nümunə. İzah bu səhifəyə əlavə olunacaq.", "klaviatura, nümunə kod"),
    en: row("Keyboard", "A sample for the keyboard. The explanation will be added on this page.", "keyboard, sample code"),
    tr: row("Klavye", "Klavye için örnek. Açıklama bu sayfaya eklenecek.", "klavye, örnek kod"),
    ar: row("لوحة المفاتيح", "مثال للوحة المفاتيح. سيُضاف الشرح في هذه الصفحة.", "لوحة المفاتيح, كود نموذجي"),
    ru: row("Клавиатура", "Пример для клавиатуры. Пояснение будет добавлено на эту страницу.", "клавиатура, пример кода"),
  },
};
