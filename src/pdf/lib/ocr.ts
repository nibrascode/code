import type { Lang } from "@/lib/i18n";
import { cleanExtractedText } from "./arabicText";

export type OcrLang = "eng" | "rus" | "ara" | "tur" | "aze";
export const OCR_LANGS: { id: OcrLang; label: string }[] = [
  { id: "eng", label: "English" },
  { id: "aze", label: "Azərbaycan" },
  { id: "tur", label: "Türkçe" },
  { id: "rus", label: "Русский" },
  { id: "ara", label: "العربية" },
];
export const ocrLangForSite = (lang: Lang): OcrLang => ({ az: "aze", en: "eng", tr: "tur", ar: "ara", ru: "rus" } as const)[lang];

const BASE = "/pdf-assets/ocr";

/** OCR runs fully in the browser. Worker, wasm core and language data are served from this site. */
export async function ocrImages(
  sources: (HTMLCanvasElement | Blob | string)[],
  langs: OcrLang[],
  opts: { onProgress?: (done: number, total: number, fraction: number) => void; shouldCancel?: () => boolean } = {},
): Promise<string[]> {
  const { createWorker } = await import("tesseract.js");
  let current = 0;
  const worker = await createWorker(langs, 1, {
    workerPath: `${location.origin}${BASE}/worker.min.js`,
    corePath: `${location.origin}${BASE}/core.wasm.js`,
    langPath: `${location.origin}${BASE}/lang`,
    workerBlobURL: false,
    gzip: true,
    logger: (m: { status: string; progress: number }) => {
      if (m.status === "recognizing text") opts.onProgress?.(current, sources.length, m.progress);
    },
  } as never);
  const out: string[] = [];
  try {
    for (let i = 0; i < sources.length; i++) {
      if (opts.shouldCancel?.()) break;
      current = i;
      opts.onProgress?.(i, sources.length, 0);
      const res = await worker.recognize(sources[i] as never);
      out.push(cleanExtractedText(res.data.text));
    }
  } finally {
    await worker.terminate();
  }
  return out;
}
