import { takeHandOff } from "@/lib/handoff";
import { useEffect, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { NextLinks } from "@/components/next-links";

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

const EXTRA: Record<Lang, Record<string, string>> = {
  az: { picks: "Şəkilləri seçin (bir neçəsi olar)", drop: "və ya bura buraxın", format: "Format", max: "Maks. tərəf", target: "Hədəf ölçü", off: "Yox", orig: "Orijinal", all: "Hamısını yüklə (ZIP)", working: "Sıxılır" },
  en: { picks: "Choose photos (several at once)", drop: "or drop here", format: "Format", max: "Max side", target: "Target size", off: "Off", orig: "Original", all: "Download all (ZIP)", working: "Compressing" },
  tr: { picks: "Fotoğrafları seçin (birden fazla)", drop: "veya buraya bırakın", format: "Biçim", max: "Maks. kenar", target: "Hedef boyut", off: "Kapalı", orig: "Orijinal", all: "Hepsini indir (ZIP)", working: "Sıkıştırılıyor" },
  ar: { picks: "اختر الصور (عدة صور معاً)", drop: "أو أفلتها هنا", format: "الصيغة", max: "أقصى ضلع", target: "الحجم المستهدف", off: "إيقاف", orig: "الأصلي", all: "تنزيل الكل (ZIP)", working: "جارٍ الضغط" },
  ru: { picks: "Выберите фото (можно несколько)", drop: "или перетащите сюда", format: "Формат", max: "Макс. сторона", target: "Целевой размер", off: "Нет", orig: "Исходный", all: "Скачать все (ZIP)", working: "Сжатие" },
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
  const x = EXTRA[lang] ?? EXTRA.en;
  const [quality, setQuality] = useState(0.75);
  const [fmt, setFmt] = useState<"image/jpeg" | "image/webp">("image/jpeg");
  const [max, setMax] = useState(2400);
  const [target, setTarget] = useState(0);
  const [files, setFiles] = useState<File[]>([]);
  useEffect(() => { const h = takeHandOff(); if (h.length) setFiles(h); }, []);
  const [outs, setOuts] = useState<{ name: string; blob: Blob; url: string; before: number }[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!files.length) return;
    let dead = false;
    setBusy(true);
    (async () => {
      const res: { name: string; blob: Blob; url: string; before: number }[] = [];
      for (const f of files) {
        try {
          const bmp = await createImageBitmap(f, { imageOrientation: "from-image" } as ImageBitmapOptions);
          const enc = async (scale: number, q: number) => {
            const c = document.createElement("canvas");
            c.width = Math.max(1, Math.round(bmp.width * scale)); c.height = Math.max(1, Math.round(bmp.height * scale));
            const ctx = c.getContext("2d")!;
            if (fmt === "image/jpeg") { ctx.fillStyle = "#fff"; ctx.fillRect(0, 0, c.width, c.height); }
            ctx.imageSmoothingQuality = "high";
            ctx.drawImage(bmp, 0, 0, c.width, c.height);
            const out = await new Promise<Blob>((ok, no) => c.toBlob((bb) => (bb ? ok(bb) : no(new Error("enc"))), fmt, q));
            c.width = c.height = 0;
            return out;
          };
          let scale = max ? Math.min(1, max / Math.max(bmp.width, bmp.height)) : 1;
          let blob: Blob;
          if (target) {
            const goal = target * 1024;
            let lo = 0.3, hi = 0.95; blob = await enc(scale, hi);
            for (let tries = 0; blob.size > goal && tries < 4; tries++) {
              let best: Blob | null = null; lo = 0.3; hi = 0.95;
              for (let i = 0; i < 7; i++) { const mid = (lo + hi) / 2; const bb = await enc(scale, mid); if (bb.size <= goal) { best = bb; lo = mid; } else hi = mid; }
              if (best) { blob = best; break; }
              scale *= 0.75; blob = await enc(scale, 0.8);
            }
          } else blob = await enc(scale, quality);
          bmp.close();
          if (blob.size >= f.size && f.type === fmt && !target) blob = f;
          const ext = fmt === "image/webp" ? "webp" : "jpg";
          let name = `${f.name.replace(/\.[^.]+$/, "") || "image"}-sixilmis.${ext}`;
          for (let n = 2; res.some((r) => r.name === name); n++) name = name.replace(/(-\d+)?\.(\w+)$/, `-${n}.$2`);
          res.push({ name, blob, url: URL.createObjectURL(blob), before: f.size });
        } catch { /* skip unreadable */ }
      }
      if (dead) { res.forEach((r) => URL.revokeObjectURL(r.url)); return; }
      setOuts((prev) => { prev.forEach((r) => URL.revokeObjectURL(r.url)); return res; });
      setBusy(false);
    })();
    return () => { dead = true; };
  }, [files, quality, fmt, max, target]);

  const zipAll = async () => {
    const { zipSync } = await import("fflate");
    const entries: Record<string, Uint8Array> = {};
    for (const o of outs) entries[o.name] = new Uint8Array(await o.blob.arrayBuffer());
    const u = URL.createObjectURL(new Blob([zipSync(entries, { level: 0 }) as BlobPart], { type: "application/zip" }));
    const el = document.createElement("a"); el.href = u; el.download = "nibras-images.zip"; el.click(); setTimeout(() => URL.revokeObjectURL(u), 4000);
  };
  const tb = outs.reduce((n, o) => n + o.before, 0), ta = outs.reduce((n, o) => n + o.blob.size, 0);
  const chip = (on: boolean) => `inline-flex items-center rounded-xl border px-3 py-2 text-sm ${on ? "border-[#2f6bff] bg-[#2f6bff]/20" : "border-white/15 hover:bg-white/10"}`;

  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6 flex items-center gap-4">
        <img src="/apps/nibras-image.png" alt="" width={64} height={64} className="size-14 shrink-0 rounded-2xl" />
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{copy.h1}</h1>
          <p className="mt-1 text-sm text-muted">{copy.lead}</p>
        </div>
      </header>
      <label className="mb-4 grid cursor-pointer place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 px-4 py-10 text-center text-sm" onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); const f = [...e.dataTransfer.files].filter((v) => v.type.startsWith("image/")); if (f.length) setFiles(f); }}>
        <span><b>{x.picks}</b><br /><span className="text-muted">{x.drop}</span></span>
        <input className="sr-only" type="file" accept="image/*" multiple data-testid="img-pick" onChange={(event) => { const f = [...(event.target.files ?? [])]; if (f.length) setFiles(f); event.target.value = ""; }} />
      </label>
      <div className="mb-4 space-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3">
        <div className="flex flex-wrap items-center gap-2 text-sm"><span className="w-24 shrink-0">{x.format}</span>
          {([["image/jpeg", "JPG"], ["image/webp", "WebP"]] as const).map(([v, l]) => <button key={v} type="button" className={chip(fmt === v)} onClick={() => setFmt(v)}>{l}</button>)}</div>
        <div className="flex flex-wrap items-center gap-2 text-sm"><span className="w-24 shrink-0">{x.max}</span>
          {([[0, x.orig], [2400, "2400"], [1920, "1920"], [1280, "1280"], [800, "800"]] as const).map(([v, l]) => <button key={v} type="button" className={chip(max === v)} onClick={() => setMax(v)}>{l}</button>)}</div>
        <div className="flex flex-wrap items-center gap-2 text-sm"><span className="w-24 shrink-0">{x.target}</span>
          {([[0, x.off], [100, "100 KB"], [200, "200 KB"], [500, "500 KB"], [1024, "1 MB"]] as const).map(([v, l]) => <button key={v} type="button" className={chip(target === v)} onClick={() => setTarget(v)}>{l}</button>)}</div>
        {!target ? (
          <label className="flex items-center gap-3 text-sm">
            <span className="w-24 shrink-0">{copy.quality}</span>
            <input type="range" min={0.3} max={0.95} step={0.05} value={quality} onChange={(event) => setQuality(Number(event.target.value))} />
            <span>{Math.round(quality * 100)}%</span>
          </label>
        ) : null}
      </div>
      {busy ? <p className="mb-3 text-sm text-muted">{x.working}…</p> : null}
      {outs.length ? (
        <div className="mb-6 space-y-2">
          <p className="text-sm">{copy.before}: {kb(tb)} → {copy.after}: <b>{kb(ta)}</b>{tb ? <span className="ms-2 text-emerald-400">−{Math.max(0, Math.round((1 - ta / tb) * 100))}%</span> : null}</p>
          <ul className="space-y-2">
            {outs.map((o) => (
              <li key={o.url} className="flex flex-wrap items-center gap-3 rounded-xl border border-white/10 p-2 text-sm">
                <img src={o.url} alt="" className="size-12 rounded-lg object-cover" />
                <span className="min-w-0 flex-1 truncate">{o.name}<br /><span className="text-muted">{kb(o.before)} → {kb(o.blob.size)}</span></span>
                <a className="rounded-xl bg-[#2f6bff] px-4 py-2 font-semibold text-white" href={o.url} download={o.name} data-testid="img-download">{copy.download}</a>
              </li>
            ))}
          </ul>
          {outs.length > 1 ? <button type="button" className="rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white" onClick={zipAll}>{x.all}</button> : null}
        </div>
      ) : null}
      <NextLinks
        links={[
          { href: "/image/resize", label: { az: "Ölçünü dəyiş", en: "Resize", tr: "Boyut değiştir", ar: "تغيير الحجم", ru: "Размер" } },
          { href: "/image/convert", label: { az: "Formatı çevir", en: "Convert format", tr: "Biçim dönüştür", ar: "تحويل الصيغة", ru: "Формат" } },
          { href: "/image/edit", label: { az: "Kəs və döndər", en: "Crop & rotate", tr: "Kırp ve döndür", ar: "قص وتدوير", ru: "Обрезка и поворот" } },
          { href: "/erase", label: { az: "Şəkil fon sil", en: "Remove background", tr: "Arka plan sil", ar: "حذف الخلفية", ru: "Удалить фон" } },
          { href: "/pdf/image-pdf", label: { az: "JPG-dən PDF", en: "JPG to PDF", tr: "JPG'den PDF", ar: "من JPG إلى PDF", ru: "JPG в PDF" } },
        ]}
      />
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
