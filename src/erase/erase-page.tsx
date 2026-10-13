import { useI18n } from "@/lib/i18n-context";
import { EraseTool } from "@/erase/erase-tool";

const TITLE = {
  az: "Nibras Erase",
  en: "Nibras Erase",
  tr: "Nibras Erase",
  ar: "Nibras Erase",
  ru: "Nibras Erase",
} as const;

const LEAD = {
  az: "Fon sil, rəng və ya bulanıq fon qoy, kölgə əlavə et, PNG, JPG və ya WebP yüklə. Pulsuz, brauzerdə.",
  en: "Remove the background, add a color or blur, a shadow, then download PNG, JPG or WebP. Free, in your browser.",
  tr: "Arka planı sil, renk veya bulanık fon koy, gölge ekle, PNG, JPG veya WebP indir. Ücretsiz, tarayıcıda.",
  ar: "أزل الخلفية، أضف لوناً أو ضباباً وظلاً، ثم نزّل PNG أو JPG أو WebP. مجاناً في المتصفح.",
  ru: "Уберите фон, поставьте цвет или размытие, тень, скачайте PNG, JPG или WebP. Бесплатно, в браузере.",
} as const;

export function ErasePage() {
  const { lang } = useI18n();
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{TITLE[lang]}</h1>
        <p className="mt-2 text-sm text-muted">{LEAD[lang]}</p>
      </header>
      <EraseTool />
    </main>
  );
}
