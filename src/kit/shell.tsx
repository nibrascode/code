import type { ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { NextLinks } from "@/components/next-links";
import { FAQ_TITLE, KIT, type KitPath } from "./meta";

type L5 = Record<Lang, string>;
export const LINKS: Record<string, L5> = {
  "/image": { az: "Şəkil sıx", en: "Compress photo", tr: "Fotoğraf sıkıştır", ar: "ضغط الصورة", ru: "Сжать фото" },
  "/image/resize": { az: "Ölçünü dəyiş", en: "Resize", tr: "Boyut değiştir", ar: "تغيير الحجم", ru: "Размер" },
  "/image/convert": { az: "Formatı çevir", en: "Convert format", tr: "Biçim dönüştür", ar: "تحويل الصيغة", ru: "Формат" },
  "/image/edit": { az: "Kəs və döndər", en: "Crop & rotate", tr: "Kırp ve döndür", ar: "قص وتدوير", ru: "Обрезка и поворот" },
  "/erase": { az: "Fon sil", en: "Remove background", tr: "Arka plan sil", ar: "حذف الخلفية", ru: "Удалить фон" },
  "/pdf/image-pdf": { az: "Şəkildən PDF", en: "Image to PDF", tr: "Görselden PDF", ar: "من صورة إلى PDF", ru: "Фото в PDF" },
  "/qr": { az: "QR kod", en: "QR code", tr: "QR kod", ar: "رمز QR", ru: "QR-код" },
  "/wifi": { az: "Wi-Fi QR", en: "Wi-Fi QR", tr: "Wi-Fi QR", ar: "Wi-Fi QR", ru: "Wi-Fi QR" },
  "/vcard": { az: "Vizit kartı QR", en: "Contact QR", tr: "Kartvizit QR", ar: "QR جهة الاتصال", ru: "QR-визитка" },
  "/zip": { az: "ZIP sıx və aç", en: "Zip & unzip", tr: "ZIP", ar: "ZIP", ru: "ZIP" },
  "/pdf/merge": { az: "PDF birləşdir", en: "Merge PDF", tr: "PDF birleştir", ar: "دمج PDF", ru: "Объединить PDF" },
  "/video": { az: "Video alətləri", en: "Video tools", tr: "Video araçları", ar: "أدوات الفيديو", ru: "Видео" },
  "/video/trim": { az: "Video kəs", en: "Trim video", tr: "Video kes", ar: "قص الفيديو", ru: "Обрезать видео" },
  "/video/convert": { az: "Video çevir / GIF", en: "Convert / GIF", tr: "Dönüştür / GIF", ar: "تحويل / GIF", ru: "Конвертер / GIF" },
  "/video/merge": { az: "Video birləşdir", en: "Merge videos", tr: "Video birleştir", ar: "دمج الفيديو", ru: "Склеить видео" },
  "/video/audio": { az: "Videodan səs", en: "Extract audio", tr: "Videodan ses", ar: "استخراج الصوت", ru: "Звук из видео" },
  "/voice": { az: "Səs", en: "Voice", tr: "Ses", ar: "الصوت", ru: "Голос" },
  "/pdf/compress": { az: "PDF sıx", en: "Compress PDF", tr: "PDF sıkıştır", ar: "ضغط PDF", ru: "Сжать PDF" },
};
export const IMAGE_FAMILY = ["/image", "/image/resize", "/image/convert", "/image/edit", "/erase"];

export const ui = {
  field: "w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm",
  btn: "inline-flex items-center gap-2 rounded-xl border border-white/15 px-3 py-2 text-sm hover:bg-white/10 disabled:opacity-40",
  primary: "inline-flex items-center gap-2 rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white disabled:opacity-50",
  drop: "mb-4 grid cursor-pointer place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-10 text-center text-sm",
};

export function kb(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}
export function save(name: string, blob: Blob) {
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 4000);
}

export function KitShell({ path, lang, icon, next, children }: { path: KitPath; lang: Lang; icon?: string; next: string[]; children: ReactNode }) {
  const m = KIT[path][lang] ?? KIT[path].en;
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6" dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="mb-6 flex items-center gap-4">
        {icon ? <img src={icon} alt="" width={64} height={64} className="size-12 shrink-0 rounded-2xl md:size-14" /> : null}
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{m.h1}</h1>
          <p className="mt-1 text-sm text-muted">{m.lead}</p>
        </div>
      </header>
      {children}
      <div className="mt-8">
        <NextLinks links={next.filter((h) => h !== path && LINKS[h]).map((href) => ({ href, label: LINKS[href] }))} />
      </div>
      <section className="space-y-3" aria-labelledby="kit-faq">
        <h2 id="kit-faq" className="text-base font-semibold">{FAQ_TITLE[lang]}</h2>
        {m.faq.map((item) => (
          <div key={item.q}>
            <h3 className="text-sm font-semibold">{item.q}</h3>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
