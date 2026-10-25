import type { Lang } from "@/lib/i18n";
import { closePdf, openPdf, renderPageToCanvas } from "./pdfjs";
import { cleanText, layoutPage, stripRunning, type RawItem } from "./layout";
import { fixArabicDoc, itemsToLines, textQuality } from "./textLines";
import { detectOcrLangs, ocrDetailed, ocrLangForSite, preprocessForOcr, type OcrLang } from "./ocr";

export type ExtractPage = { n: number; text: string; method: "text" | "ocr"; confidence?: number };
export type ExtractResult = { pages: ExtractPage[]; text: string; usedOcr: boolean; avgConfidence?: number; langs: OcrLang[]; lowConfidencePages: number[] };
export type ExtractOptions = {
  uiLang: Lang;
  ocr?: "auto" | "force" | "never";
  langs?: OcrLang[] | "auto";
  dpi?: number;
  onProgress?: (p: { page: number; total: number; phase: "text" | "render" | "ocr"; fraction: number }) => void;
  shouldCancel?: () => boolean;
};

const MIN_LETTERS = 25;
const MAX_SIDE = 4200;

export async function extractTextSmart(bytes: Uint8Array, o: ExtractOptions): Promise<ExtractResult> {
  const doc = await openPdf(bytes);
  const total = doc.numPages;
  const pages: ExtractPage[] = [];
  const needOcr: number[] = [];
  try {
    for (let n = 1; n <= total; n++) {
      if (o.shouldCancel?.()) break;
      o.onProgress?.({ page: n, total, phase: "text", fraction: (n - 1) / total });
      let text = "";
      let rtl = false;
      if (o.ocr !== "force") {
        const page = await doc.getPage(n);
        const tc = await page.getTextContent({ includeMarkedContent: true });
        const glyphs = (tc.items as { str?: string }[]).filter((i) => typeof i.str === "string");
        // Arabic/RTL pages need ActualText, right-to-left ordering and ligature repair.
        rtl = glyphs.some((i) => /[\u0590-\u08FF\uFB1D-\uFDFF\uFE70-\uFEFF]/.test(i.str!));
        text = rtl ? fixArabicDoc([itemsToLines(tc.items as never).join("\n")])[0] : layoutPage(glyphs as unknown as RawItem[], page.view[2] - page.view[0]);
      }
      const letters = (text.match(/\p{L}/gu) || []).length;
      pages.push({ n, text, method: "text" });
      const garbage = letters >= MIN_LETTERS && textQuality([text]) === "garbage";
      if (o.ocr !== "never" && (o.ocr === "force" || letters < MIN_LETTERS || garbage)) needOcr.push(n);
    }
    let langs: OcrLang[] = [];
    let conf: number[] = [];
    const low: number[] = [];
    if (needOcr.length && !o.shouldCancel?.()) {
      const dpi = o.dpi ?? 300;
      const render = async (n: number) => {
        const page = await doc.getPage(n);
        const vp = page.getViewport({ scale: 1 });
        const scale = Math.min(dpi / 72, MAX_SIDE / Math.max(vp.width, vp.height));
        const c = await renderPageToCanvas(doc, n, scale);
        return preprocessForOcr(c);
      };
      const fallback = ocrLangForSite(o.uiLang);
      if (!o.langs || o.langs === "auto") {
        o.onProgress?.({ page: needOcr[0], total, phase: "render", fraction: 0 });
        langs = await detectOcrLangs(await render(needOcr[0]), fallback);
      } else langs = o.langs;
      const results = await ocrDetailed(
        needOcr.map((n) => async () => render(n)),
        langs,
        {
          onProgress: (i, _t, fr) => o.onProgress?.({ page: needOcr[Math.min(i, needOcr.length - 1)], total, phase: "ocr", fraction: (i + fr) / needOcr.length }),
          shouldCancel: o.shouldCancel,
        },
      );
      results.forEach((res, i) => {
        const p = pages[needOcr[i] - 1];
        p.text = res.text;
        p.method = "ocr";
        p.confidence = res.confidence;
        conf.push(res.confidence);
        if (res.confidence < 60) low.push(p.n);
      });
    }
    const texts = stripRunning(pages.map((p) => (p.method === "text" ? p.text : p.text)));
    pages.forEach((p, i) => { if (p.method === "text") p.text = cleanText(texts[i]); });
    const joined = pages.map((p, i) => (pages.length > 1 ? `${p.text}` : p.text)).join("\n\n").trim();
    return {
      pages,
      text: joined,
      usedOcr: pages.some((p) => p.method === "ocr"),
      avgConfidence: conf.length ? Math.round(conf.reduce((a, b) => a + b, 0) / conf.length) : undefined,
      langs,
      lowConfidencePages: low,
    };
  } finally {
    await closePdf(doc);
  }
}
