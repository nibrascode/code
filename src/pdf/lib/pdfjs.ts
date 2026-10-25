import type { PDFDocumentProxy } from "pdfjs-dist";

type PdfjsModule = typeof import("pdfjs-dist");
let pdfjsPromise: Promise<PdfjsModule> | null = null;

/** pdf.js and its worker load only when a tool needs them. */
export function getPdfjs(): Promise<PdfjsModule> {
  pdfjsPromise ??= (async () => {
    const [lib, worker] = await Promise.all([
      import("pdfjs-dist"),
      import("pdfjs-dist/build/pdf.worker.min.mjs?url"),
    ]);
    lib.GlobalWorkerOptions.workerSrc = (globalThis as { __NIBRAS_PDF_WORKER__?: string }).__NIBRAS_PDF_WORKER__ || worker.default;
    return lib;
  })();
  return pdfjsPromise;
}

export async function openPdf(bytes: Uint8Array, password?: string): Promise<PDFDocumentProxy> {
  const lib = await getPdfjs();
  return lib.getDocument({ data: bytes.slice(), password }).promise;
}

export async function renderPageToCanvas(doc: PDFDocumentProxy, pageNumber: number, scale: number): Promise<HTMLCanvasElement> {
  const page = await doc.getPage(pageNumber);
  const viewport = page.getViewport({ scale });
  const canvas = document.createElement("canvas");
  canvas.width = Math.ceil(viewport.width);
  canvas.height = Math.ceil(viewport.height);
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  await page.render({ canvas, canvasContext: ctx, viewport }).promise;
  page.cleanup();
  return canvas;
}

export function canvasToBlob(canvas: HTMLCanvasElement, type: string, quality?: number): Promise<Blob> {
  return new Promise((resolve, reject) =>
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error("canvas"))), type, quality),
  );
}

/** Text of one page grouped into lines by baseline. */
export async function extractPageLines(doc: PDFDocumentProxy, pageNumber: number): Promise<string[]> {
  const { itemsToLines } = await import("./textLines");
  const page = await doc.getPage(pageNumber);
  // Marked content carries /ActualText, which Word, LibreOffice and Chrome use for Arabic glyphs.
  const content = await page.getTextContent({ includeMarkedContent: true });
  return itemsToLines(content.items as never);
}

export async function closePdf(doc: PDFDocumentProxy) {
  try {
    await (doc as unknown as { loadingTask?: { destroy(): Promise<void> } }).loadingTask?.destroy();
  } catch {
    /* already closed */
  }
}
