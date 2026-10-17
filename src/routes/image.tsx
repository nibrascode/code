import { useEffect, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";

export const Route = createFileRoute("/image")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/image"), replace: true });
  },
  component: ImagePage,
});

const COPY: Record<Lang, { h1: string; lead: string; pick: string; quality: string; download: string; before: string; after: string }> = {
  az: { h1: "Şəkil sıx", lead: "Şəkilin ölçüsünü kiçilt. Pulsuz, hesabsız, şəkil brauzerdən çıxmır.", pick: "Şəkil seç", quality: "Keyfiyyət", download: "Yüklə", before: "Əvvəl", after: "Sonra" },
  en: { h1: "Compress photo", lead: "Make a photo smaller. Free, no account, the photo stays in your browser.", pick: "Choose a photo", quality: "Quality", download: "Download", before: "Before", after: "After" },
  tr: { h1: "Fotoğraf sıkıştır", lead: "Fotoğrafın boyutunu küçült. Ücretsiz, hesapsız, fotoğraf tarayıcıdan çıkmaz.", pick: "Fotoğraf seç", quality: "Kalite", download: "İndir", before: "Önce", after: "Sonra" },
  ar: { h1: "ضغط الصورة", lead: "صغّر حجم الصورة. مجاناً وبلا حساب، والصورة تبقى في المتصفح.", pick: "اختر صورة", quality: "الجودة", download: "تنزيل", before: "قبل", after: "بعد" },
  ru: { h1: "Сжать фото", lead: "Уменьшите размер фото. Бесплатно, без аккаунта, фото остаётся в браузере.", pick: "Выбрать фото", quality: "Качество", download: "Скачать", before: "До", after: "После" },
};

function kb(size: number) {
  if (size < 1024) return `${size} B`;
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

export function ImagePage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/image"];
  const [quality, setQuality] = useState(0.7);
  const [file, setFile] = useState<File | null>(null);
  const [before, setBefore] = useState(0);
  const [after, setAfter] = useState(0);
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!file) return;
    const img = new Image();
    const local = URL.createObjectURL(file);
    img.onload = () => {
      const max = 2400;
      const scale = Math.min(1, max / Math.max(img.width, img.height));
      const w = Math.round(img.width * scale);
      const h = Math.round(img.height * scale);
      const canvas = document.createElement("canvas");
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, w, h);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(local);
          if (!blob) return;
          setAfter(blob.size);
          setUrl((prev) => {
            if (prev) URL.revokeObjectURL(prev);
            return URL.createObjectURL(blob);
          });
        },
        "image/jpeg",
        quality,
      );
    };
    img.src = local;
    return () => URL.revokeObjectURL(local);
  }, [file, quality]);

  const onFile = (next: File | undefined) => {
    if (!next) return;
    setBefore(next.size);
    setFile(next);
  };

  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6 flex items-center gap-4">
        <img src="/apps/nibras-image.png" alt="" width={64} height={64} className="size-14 shrink-0 rounded-2xl" />
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
          <p className="mt-1 text-sm text-muted">{copy.lead}</p>
        </div>
      </header>
      <label className="mb-4 grid cursor-pointer place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-10 text-sm">
        {copy.pick}
        <input
          className="sr-only"
          type="file"
          accept="image/jpeg,image/png,image/webp"
          onChange={(event) => onFile(event.target.files?.[0])}
        />
      </label>
      <label className="mb-4 flex items-center gap-3 text-sm">
        <span className="w-24 shrink-0">{copy.quality}</span>
        <input
          type="range"
          min={0.4}
          max={0.9}
          step={0.05}
          value={quality}
          onChange={(event) => setQuality(Number(event.target.value))}
        />
        <span>{Math.round(quality * 100)}%</span>
      </label>
      {url ? (
        <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
          <span>{copy.before}: {kb(before)}</span>
          <span>{copy.after}: {kb(after)}</span>
          <a className="rounded-xl bg-[#2f6bff] px-4 py-2 font-semibold text-white" href={url} download="nibras-six.jpg">
            {copy.download}
          </a>
        </div>
      ) : null}
      <section className="mt-8 space-y-3" aria-labelledby="image-faq">
        <h2 id="image-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
        {faq.items[lang].map((item) => (
          <div key={item.q}>
            <h3 className="text-sm font-semibold">{item.q}</h3>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
