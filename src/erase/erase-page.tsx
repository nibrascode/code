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
  az: "Şəkil yüklə, fon getsin, şəffaf PNG yüklə. Pulsuz, hesab olmadan, brauzerdə.",
  en: "Upload a photo, remove the background, download a transparent PNG. Free, no account, in your browser.",
  tr: "Fotoğraf yükle, arka plan gitsin, şeffaf PNG indir. Ücretsiz, hesap yok, tarayıcıda.",
  ar: "ارفع صورة، تُزال الخلفية، نزّل PNG شفافاً. مجاناً، بلا حساب، في المتصفح.",
  ru: "Загрузите фото, уберите фон, скачайте прозрачный PNG. Бесплатно, без аккаунта, в браузере.",
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
