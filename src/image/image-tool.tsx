import { useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

type Job = "compress" | "convert" | "resize";
type Format = "jpeg" | "png" | "webp";

const COPY: Record<Lang, Record<string, string>> = {
  az: {
    drop: "Şəkil seç", private: "Şəkil cihazda qalır.", run: "Hazırla", working: "Hazırlanır…",
    ready: "Hazırdır.", empty: "Əvvəl şəkil seç", fail: "Bu şəkil açılmadı. JPG, PNG və ya WebP yoxla.",
    again: "Başqa şəkil", download: "Yüklə", job: "İş", compress: "Sıx", convert: "Çevir", resize: "Ölçü",
    quality: "Keyfiyyət", format: "Format", side: "Uzun tərəf", original: "Orijinal",
  },
  en: {
    drop: "Choose a photo", private: "The photo stays on your device.", run: "Make it", working: "Working…",
    ready: "Done.", empty: "Choose a photo first", fail: "This photo did not open. Try JPG, PNG or WebP.",
    again: "Another photo", download: "Download", job: "Job", compress: "Compress", convert: "Convert", resize: "Resize",
    quality: "Quality", format: "Format", side: "Long side", original: "Original",
  },
  tr: {
    drop: "Fotoğraf seç", private: "Fotoğraf cihazda kalır.", run: "Hazırla", working: "Hazırlanıyor…",
    ready: "Hazır.", empty: "Önce fotoğraf seç", fail: "Bu fotoğraf açılmadı. JPG, PNG veya WebP dene.",
    again: "Başka fotoğraf", download: "İndir", job: "İş", compress: "Sıkıştır", convert: "Çevir", resize: "Boyut",
    quality: "Kalite", format: "Biçim", side: "Uzun kenar", original: "Orijinal",
  },
  ar: {
    drop: "اختر صورة", private: "تبقى الصورة على جهازك.", run: "جهّز", working: "جارٍ التجهيز…",
    ready: "تم.", empty: "اختر صورة أولاً", fail: "لم تُفتح هذه الصورة. جرّب JPG أو PNG أو WebP.",
    again: "صورة أخرى", download: "تنزيل", job: "العمل", compress: "اضغط", convert: "حوّل", resize: "الحجم",
    quality: "الجودة", format: "الصيغة", side: "الضلع الطويل", original: "الأصل",
  },
  ru: {
    drop: "Выберите фото", private: "Фото остаётся на устройстве.", run: "Сделать", working: "Готовится…",
    ready: "Готово.", empty: "Сначала выберите фото", fail: "Это фото не открылось. Попробуйте JPG, PNG или WebP.",
    again: "Другое фото", download: "Скачать", job: "Задача", compress: "Сжать", convert: "Конвертировать", resize: "Размер",
    quality: "Качество", format: "Формат", side: "Длинная сторона", original: "Оригинал",
  },
};

const SIDES = [0, 640, 1280, 1920];

function kb(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function loadImage(file: File) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();
    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("image"));
    };
    image.src = url;
  });
}

function canvasBlob(canvas: HTMLCanvasElement, type: string, quality: number) {
  return new Promise<Blob>((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error("blob"))), type, quality);
  });
}

export function ImageTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [file, setFile] = useState<File | null>(null);
  const [job, setJob] = useState<Job>("compress");
  const [quality, setQuality] = useState(72);
  const [format, setFormat] = useState<Format>("webp");
  const [side, setSide] = useState(1280);
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);
  const [preview, setPreview] = useState("");
  const [outName, setOutName] = useState("");
  const [outBlob, setOutBlob] = useState<Blob | null>(null);

  function pick(next: File | null) {
    if (preview) URL.revokeObjectURL(preview);
    setFile(next);
    setPreview("");
    setOutBlob(null);
    setNote("");
  }

  async function run() {
    if (!file) {
      setNote(t.empty);
      return;
    }
    setBusy(true);
    setNote("");
    try {
      const image = await loadImage(file);
      const limit = job === "resize" ? side : job === "compress" ? 2560 : 0;
      const scale = limit > 0 ? Math.min(1, limit / Math.max(image.width, image.height)) : 1;
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));
      canvas.getContext("2d")!.drawImage(image, 0, 0, canvas.width, canvas.height);
      const outFormat: Format = job === "compress" ? (format === "png" ? "webp" : format) : format;
      const mime = outFormat === "png" ? "image/png" : outFormat === "webp" ? "image/webp" : "image/jpeg";
      const blob = await canvasBlob(canvas, mime, job === "convert" && outFormat === "png" ? 1 : quality / 100);
      if (preview) URL.revokeObjectURL(preview);
      setPreview(URL.createObjectURL(blob));
      setOutBlob(blob);
      setOutName(`nibras-image.${outFormat === "jpeg" ? "jpg" : outFormat}`);
      setNote(`${t.ready} ${kb(file.size)} → ${kb(blob.size)}`);
    } catch {
      setNote(t.fail);
    } finally {
      setBusy(false);
    }
  }

  function download() {
    if (!outBlob) return;
    const url = URL.createObjectURL(outBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = outName;
    a.click();
    setTimeout(() => URL.revokeObjectURL(url), 1500);
  }

  return (
    <div className="files-tool">
      <section className="files-card">
        <label className="files-drop">
          <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => pick(e.target.files?.[0] ?? null)} />
          <b>{t.drop}</b>
          <span>{file ? `${file.name} · ${kb(file.size)}` : t.private}</span>
        </label>
        <div className="erase-row">
          <span>{t.job}</span>
          {(["compress", "convert", "resize"] as Job[]).map((id) => (
            <button key={id} type="button" className={job === id ? "is-on" : ""} onClick={() => setJob(id)}>{t[id]}</button>
          ))}
        </div>
        {job !== "resize" ? (
          <label className="erase-slider">
            <span>{t.quality} {quality}</span>
            <input type="range" min={40} max={95} value={quality} onChange={(e) => setQuality(Number(e.target.value))} />
          </label>
        ) : null}
        <div className="erase-row">
          <span>{t.format}</span>
          {(["webp", "jpeg", "png"] as Format[]).map((id) => (
            <button key={id} type="button" className={format === id ? "is-on" : ""} onClick={() => setFormat(id)}>
              {id === "jpeg" ? "JPG" : id.toUpperCase()}
            </button>
          ))}
        </div>
        {job === "resize" ? (
          <label className="erase-slider">
            <span>{t.side}</span>
            <select value={side} onChange={(e) => setSide(Number(e.target.value))}>
              {SIDES.map((px) => (
                <option key={px} value={px}>{px === 0 ? t.original : `${px}px`}</option>
              ))}
            </select>
          </label>
        ) : null}
        {preview ? <img className="mt-3 w-full rounded-xl" src={preview} alt="" /> : null}
        <div className="files-actions">
          <button type="button" className="files-run" disabled={busy || !file} onClick={run}>{busy ? t.working : t.run}</button>
          {outBlob ? <button type="button" className="files-ghost" onClick={download}>{t.download}</button> : null}
          {file ? <button type="button" className="files-ghost" onClick={() => pick(null)}>{t.again}</button> : null}
        </div>
      </section>
      {note ? <p className="files-note">{note}</p> : null}
    </div>
  );
}
