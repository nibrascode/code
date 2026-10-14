import { useEffect } from "react";
import { useI18n } from "@/lib/i18n-context";
import { ImageTool } from "@/image/image-tool";

const TITLE = {
  az: "Şəkil sıx və çevir",
  en: "Compress and convert a photo",
  tr: "Fotoğraf sıkıştır ve çevir",
  ar: "اضغط الصورة وحوّلها",
  ru: "Сжать и конвертировать фото",
} as const;

const LEAD = {
  az: "Şəkli sıx, JPG, PNG və WebP arasında çevir, uzun tərəfi qısalt. Pulsuz, brauzerdə, yükləmə yoxdur.",
  en: "Compress a photo, convert JPG, PNG and WebP, and shorten the long side. Free, in your browser, no upload.",
  tr: "Fotoğrafı sıkıştır, JPG, PNG ve WebP arasında çevir, uzun kenarı kısalt. Ücretsiz, tarayıcıda, yükleme yok.",
  ar: "اضغط الصورة، حوّل بين JPG وPNG وWebP، وقصّر الضلع الطويل. مجاناً في المتصفح، بلا رفع.",
  ru: "Сожмите фото, переведите JPG, PNG и WebP и укоротите длинную сторону. Бесплатно, в браузере, без загрузки на сервер.",
} as const;

export function ImagePage() {
  const { lang } = useI18n();
  useEffect(() => {
    document.title = `${TITLE[lang]} — Nibras Code`;
  }, [lang]);
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{TITLE[lang]}</h1>
        <p className="mt-1 text-sm text-muted">{LEAD[lang]}</p>
      </header>
      <ImageTool />
    </main>
  );
}
