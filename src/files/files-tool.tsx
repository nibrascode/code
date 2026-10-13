import { useMemo, useState } from "react";
import { PDFDocument } from "pdf-lib";
import JSZip from "jszip";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

type Tab = "pdf" | "bg";
type PdfJob = "merge" | "split" | "img";

const COPY: Record<Lang, {
  title: string;
  lead: string;
  pdf: string;
  bg: string;
  merge: string;
  split: string;
  img: string;
  drop: string;
  run: string;
  working: string;
  ready: string;
  empty: string;
  private: string;
  bgLead: string;
  bgWait: string;
}> = {
  az: {
    title: "Nibras Files",
    lead: "PDF birləşdir, ayır, şəkilləri PDF et. Fon sil. Hamısı brauzerdə, fayl serverə getmir.",
    pdf: "PDF",
    bg: "Fon sil",
    merge: "Birləşdir",
    split: "Ayır",
    img: "Şəkildən PDF",
    drop: "Faylları seç",
    run: "Hazırla",
    working: "İşlənir…",
    ready: "Hazırdır",
    empty: "Əvvəl fayl seç",
    private: "Fayl cihazda qalır. Hesab lazım deyil.",
    bgLead: "Şəkil yüklə, fon getsin, şəffaf PNG yüklə. İlk dəfə model yüklənir.",
    bgWait: "Model yüklənir, bir az çəkə bilər…",
  },
  en: {
    title: "Nibras Files",
    lead: "Merge PDFs, split pages, turn images into a PDF, remove a background. All in your browser.",
    pdf: "PDF",
    bg: "Remove background",
    merge: "Merge",
    split: "Split",
    img: "Images to PDF",
    drop: "Choose files",
    run: "Make it",
    working: "Working…",
    ready: "Ready",
    empty: "Choose a file first",
    private: "Files stay on your device. No account.",
    bgLead: "Upload a photo, remove the background, download a transparent PNG. The model loads once.",
    bgWait: "Loading the model, this can take a moment…",
  },
  tr: {
    title: "Nibras Files",
    lead: "PDF birleştir, ayır, resimleri PDF yap, arka planı sil. Hepsi tarayıcıda.",
    pdf: "PDF",
    bg: "Arka plan sil",
    merge: "Birleştir",
    split: "Ayır",
    img: "Resimden PDF",
    drop: "Dosya seç",
    run: "Hazırla",
    working: "İşleniyor…",
    ready: "Hazır",
    empty: "Önce dosya seç",
    private: "Dosya cihazda kalır. Hesap gerekmez.",
    bgLead: "Fotoğraf yükle, arka plan gitsin, şeffaf PNG indir. Model ilk seferde iner.",
    bgWait: "Model yükleniyor, biraz sürebilir…",
  },
  ar: {
    title: "Nibras Files",
    lead: "ادمج ملفات PDF، افصل الصفحات، حوّل الصور إلى PDF، وأزل الخلفية. كل ذلك في المتصفح.",
    pdf: "PDF",
    bg: "إزالة الخلفية",
    merge: "دمج",
    split: "فصل",
    img: "صور إلى PDF",
    drop: "اختر الملفات",
    run: "جهّز",
    working: "جارٍ العمل…",
    ready: "جاهز",
    empty: "اختر ملفاً أولاً",
    private: "الملف يبقى على جهازك. بلا حساب.",
    bgLead: "ارفع صورة، تُزال الخلفية، نزّل PNG شفافاً. النموذج يُحمَّل مرة واحدة.",
    bgWait: "يتم تحميل النموذج، قد يستغرق لحظة…",
  },
  ru: {
    title: "Nibras Files",
    lead: "Объединяйте PDF, разделяйте страницы, делайте PDF из фото, удаляйте фон. Всё в браузере.",
    pdf: "PDF",
    bg: "Удалить фон",
    merge: "Объединить",
    split: "Разделить",
    img: "Фото в PDF",
    drop: "Выберите файлы",
    run: "Сделать",
    working: "Обработка…",
    ready: "Готово",
    empty: "Сначала выберите файл",
    private: "Файл остаётся на устройстве. Аккаунт не нужен.",
    bgLead: "Загрузите фото, фон уйдёт, скачайте прозрачный PNG. Модель грузится один раз.",
    bgWait: "Загрузка модели, это может занять время…",
  },
};

async function imageToPng(file: File) {
  const bitmap = await createImageBitmap(file);
  const canvas = document.createElement("canvas");
  canvas.width = bitmap.width;
  canvas.height = bitmap.height;
  canvas.getContext("2d")!.drawImage(bitmap, 0, 0);
  const blob = await new Promise<Blob>((resolve) => canvas.toBlob((b) => resolve(b!), "image/png"));
  return { bytes: await blob.arrayBuffer(), width: bitmap.width, height: bitmap.height };
}

function download(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export function FilesTool() {
  const { lang } = useI18n();
  const t = COPY[lang] ?? COPY.az;
  const [tab, setTab] = useState<Tab>("pdf");
  const [job, setJob] = useState<PdfJob>("merge");
  const [files, setFiles] = useState<File[]>([]);
  const [busy, setBusy] = useState(false);
  const [note, setNote] = useState("");
  const [bgFile, setBgFile] = useState<File | null>(null);
  const [bgUrl, setBgUrl] = useState("");

  const accept = useMemo(() => (job === "img" ? "image/jpeg,image/png,image/webp" : "application/pdf"), [job]);

  async function runPdf() {
    if (!files.length) {
      setNote(t.empty);
      return;
    }
    setBusy(true);
    setNote(t.working);
    try {
      if (job === "merge" || job === "img") {
        const out = await PDFDocument.create();
        for (const file of files) {
          const bytes = await file.arrayBuffer();
          if (job === "merge") {
            const src = await PDFDocument.load(bytes);
            const pages = await out.copyPages(src, src.getPageIndices());
            pages.forEach((page) => out.addPage(page));
          } else {
            const image = await imageToPng(file);
            const embedded = await out.embedPng(image.bytes);
            const page = out.addPage([image.width, image.height]);
            page.drawImage(embedded, { x: 0, y: 0, width: image.width, height: image.height });
          }
        }
        download(job === "merge" ? "nibras-merged.pdf" : "nibras-images.pdf", new Blob([await out.save()], { type: "application/pdf" }));
      } else {
        const src = await PDFDocument.load(await files[0].arrayBuffer());
        const zip = new JSZip();
        for (let i = 0; i < src.getPageCount(); i++) {
          const one = await PDFDocument.create();
          const [page] = await one.copyPages(src, [i]);
          one.addPage(page);
          zip.file(`page-${i + 1}.pdf`, await one.save());
        }
        download("nibras-pages.zip", await zip.generateAsync({ type: "blob" }));
      }
      setNote(t.ready);
    } catch {
      setNote(lang === "az" ? "Bu fayl açılmadı. Başqa PDF yoxla." : "Could not open this file.");
    } finally {
      setBusy(false);
    }
  }

  async function runBg() {
    if (!bgFile) {
      setNote(t.empty);
      return;
    }
    setBusy(true);
    setNote(t.bgWait);
    try {
      const { removeBackground } = await import("@imgly/background-removal");
      const blob = await removeBackground(bgFile);
      if (bgUrl) URL.revokeObjectURL(bgUrl);
      const url = URL.createObjectURL(blob);
      setBgUrl(url);
      download("nibras-no-bg.png", blob);
      setNote(t.ready);
    } catch {
      setNote(lang === "az" ? "Fon silinmədi. Başqa şəkil yoxla." : "Could not remove the background.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="files-tool">
      <div className="files-tabs">
        <button type="button" className={tab === "pdf" ? "is-on" : ""} onClick={() => setTab("pdf")}>{t.pdf}</button>
        <button type="button" className={tab === "bg" ? "is-on" : ""} onClick={() => setTab("bg")}>{t.bg}</button>
      </div>

      {tab === "pdf" ? (
        <section className="files-card">
          <div className="files-jobs">
            {(["merge", "split", "img"] as PdfJob[]).map((id) => (
              <button key={id} type="button" className={job === id ? "is-on" : ""} onClick={() => { setJob(id); setFiles([]); setNote(""); }}>
                {t[id]}
              </button>
            ))}
          </div>
          <label className="files-drop">
            <input
              type="file"
              accept={accept}
              multiple={job !== "split"}
              onChange={(e) => setFiles(Array.from(e.target.files ?? []))}
            />
            <b>{t.drop}</b>
            <span>{files.length ? files.map((f) => f.name).join(", ") : t.private}</span>
          </label>
          <button type="button" className="files-run" disabled={busy} onClick={runPdf}>{busy ? t.working : t.run}</button>
        </section>
      ) : (
        <section className="files-card">
          <p className="files-lead">{t.bgLead}</p>
          <label className="files-drop">
            <input type="file" accept="image/jpeg,image/png,image/webp" onChange={(e) => setBgFile(e.target.files?.[0] ?? null)} />
            <b>{t.drop}</b>
            <span>{bgFile?.name || t.private}</span>
          </label>
          {bgUrl ? <img className="files-preview" src={bgUrl} alt="" /> : null}
          <button type="button" className="files-run" disabled={busy} onClick={runBg}>{busy ? t.working : t.run}</button>
        </section>
      )}
      {note ? <p className="files-note">{note}</p> : null}
    </div>
  );
}
