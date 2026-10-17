import { shapeArabicForPdf } from './arabicShape';

export type PdfTransform = 'rotate' | 'watermark' | 'compress';
export type WatermarkPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';
export type WatermarkPlacement = { x: number; y: number };

export type PdfImageSource = {
  bytes: Uint8Array;
  format: 'png' | 'jpg';
};

export type PdfPageSize = {
  width: number;
  height: number;
};

export type PdfPageSource = {
  bytes: Uint8Array;
  pageIndex: number;
};

export type PdfPageSourceReference = {
  sourceKey: string;
  pageIndex: number;
};

type PdfLib = {
  PDFDocument: any;
  StandardFonts: { HelveticaBold: string };
  degrees: (angle: number) => any;
  rgb: (red: number, green: number, blue: number) => any;
  fontkit?: any;
  // optional: lets copied pages carry only the resources their content actually uses
  PDFName?: any;
  PDFDict?: any;
  PDFArray?: any;
  decodePDFRawStream?: any;
};

// pdf-lib's own awaits resolve as microtasks, which never let React Native
// paint. Yield a macrotask every few pages so progress and the Cancel button
// stay responsive on long documents.
const PAGES_PER_YIELD = 8;
const yieldToEventLoop = () => new Promise<void>((resolve) => setTimeout(resolve, 0));
const maybeYield = async (index: number) => {
  if (index % PAGES_PER_YIELD === PAGES_PER_YIELD - 1) await yieldToEventLoop();
};

export const createPdfOperations = ({ PDFDocument, StandardFonts, degrees, rgb, fontkit, PDFName, PDFDict, PDFArray, decodePDFRawStream }: PdfLib) => {
  const RES_KEYS = ['XObject', 'Font', 'ExtGState', 'ColorSpace', 'Pattern', 'Shading', 'Properties'];

  /** Names (/Name tokens) the page content refers to; null when the content cannot be read. */
  const usedNames = (page: any): Set<string> | null => {
    try {
      const contents = page.node.lookup(PDFName.of('Contents'));
      const streams = contents instanceof PDFArray ? contents.asArray().map((r: any) => page.node.context.lookup(r)) : [contents];
      const names = new Set<string>();
      for (const st of streams) {
        if (!st) continue;
        const raw = typeof st.getContents === 'function' && !st.dict?.has?.(PDFName.of('Filter')) ? st.getContents() : decodePDFRawStream(st).decode();
        const text = new TextDecoder('latin1').decode(raw);
        for (const m of text.matchAll(/\/([^\s/\[\]()<>{}%]+)/g)) names.add(m[1].replace(/#([0-9A-Fa-f]{2})/g, (_x, h) => String.fromCharCode(parseInt(h, 16))));
      }
      return names;
    } catch {
      return null;
    }
  };

  /** Replace the page's (possibly shared, possibly inherited) Resources by a private dict with only the used entries, so copyPages does not drag the whole file along. */
  const pruneResources = (page: any) => {
    if (!PDFName || !PDFDict || !PDFArray || !decodePDFRawStream) return;
    const names = usedNames(page);
    if (!names) return;
    const ctx = page.node.context;
    let res: any = null;
    for (let node: any = page.node; node && !res; node = node.lookupMaybe(PDFName.of('Parent'), PDFDict)) res = node.lookupMaybe(PDFName.of('Resources'), PDFDict);
    if (!res) return;
    const fresh = ctx.obj({});
    for (const key of res.keys()) {
      const k = key.decodeText();
      const val = res.lookup(key);
      if (RES_KEYS.includes(k) && val instanceof PDFDict) {
        const sub = ctx.obj({});
        for (const name of val.keys()) if (names.has(name.decodeText())) sub.set(name, val.get(name));
        fresh.set(key, sub);
      } else {
        fresh.set(key, res.get(key));
      }
    }
    page.node.set(PDFName.of('Resources'), fresh);
  };

  /** copyPages that keeps outputs small (prunes unused shared resources first). */
  const copyLean = async (output: any, source: any, indices: number[]) => {
    for (const i of indices) pruneResources(source.getPage(i));
    return output.copyPages(source, indices);
  };

  const createImagePdfBytes = async (
    images: PdfImageSource[],
    pageSize: PdfPageSize,
    shouldCancel?: () => boolean,
  ) => {
    const output = await PDFDocument.create();
    for (const source of images) {
      await yieldToEventLoop();
      if (shouldCancel?.()) return null;
      const image = source.format === 'png'
        ? await output.embedPng(source.bytes)
        : await output.embedJpg(source.bytes);
      if (shouldCancel?.()) return null;
      const scale = Math.min(pageSize.width / image.width, pageSize.height / image.height);
      const width = image.width * scale;
      const height = image.height * scale;
      const page = output.addPage([pageSize.width, pageSize.height]);
      page.drawImage(image, {
        x: (pageSize.width - width) / 2,
        y: (pageSize.height - height) / 2,
        width,
        height,
      });
    }
    if (shouldCancel?.()) return null;
    return output.save({ useObjectStreams: true });
  };

  const protectPdfBytes = async (
    bytes: Uint8Array,
    password: string,
  ) => {
    const document = await PDFDocument.load(bytes);
    document.encrypt({
      userPassword: password,
      ownerPassword: password,
      algorithm: 'AES-128',
      permissions: { printing: 'highResolution' },
    });
    return document.save({ useObjectStreams: true });
  };

  const mergePdfBytes = async (sources: Uint8Array[]) => {
    const output = await PDFDocument.create();
    for (const bytes of sources) {
      await yieldToEventLoop();
      const source = await PDFDocument.load(bytes);
      const pages = await output.copyPages(source, source.getPageIndices());
      pages.forEach((page: any) => output.addPage(page));
    }
    return output.save({ useObjectStreams: true });
  };

  const mergePdfSources = async (
    sourceCount: number,
    readSource: (index: number) => Promise<Uint8Array>,
  ) => {
    const output = await PDFDocument.create();
    for (let index = 0; index < sourceCount; index += 1) {
      await yieldToEventLoop();
      const source = await PDFDocument.load(await readSource(index));
      const pages = await output.copyPages(source, source.getPageIndices());
      pages.forEach((page: any) => output.addPage(page));
    }
    return output.save({ useObjectStreams: true });
  };

  const transformPdfBytes = async (
    bytes: Uint8Array,
    operation: PdfTransform,
    watermarkText = 'NIBRAS PDF',
    watermarkPosition: WatermarkPosition = 'center',
    selectedPageIndices?: number[],
    watermarkPlacement?: WatermarkPlacement,
    shouldCancel?: () => boolean,
    watermarkFontBytes?: Uint8Array,
    rotationDegrees = 90,
  ) => {
    const document = await PDFDocument.load(bytes);
    if (operation === 'rotate') {
      const delta = rotationDegrees >= 0 ? rotationDegrees : 360 + (rotationDegrees % 360);
      for (const [index, page] of document.getPages().entries()) {
        await maybeYield(index);
        if (shouldCancel?.()) return null;
        page.setRotation(degrees((page.getRotation().angle + delta) % 360));
      }
    }
    if (operation === 'watermark') {
      if (watermarkFontBytes && fontkit && typeof document.registerFontkit === 'function') {
        document.registerFontkit(fontkit);
      }
      const visualWatermark = /[\u0600-\u06FF]/.test(watermarkText)
        ? shapeArabicForPdf(watermarkText)
        : watermarkText;
      const font = watermarkFontBytes
        ? await document.embedFont(watermarkFontBytes, { subset: true })
        : await document.embedFont(StandardFonts.HelveticaBold);
      const selectedPages = selectedPageIndices ? new Set(selectedPageIndices) : null;
      for (const [pageIndex, page] of (document.getPages() as any[]).entries()) {
        await maybeYield(pageIndex);
        if (shouldCancel?.()) return null;
        if (selectedPages && !selectedPages.has(pageIndex)) continue;
        const size = 34;
        const textWidth = font.widthOfTextAtSize(visualWatermark, size);
        const horizontal = watermarkPlacement
          ? Math.max(0.05, Math.min(0.95, watermarkPlacement.x))
          : watermarkPosition.endsWith('left')
            ? 0.12
            : watermarkPosition.endsWith('right')
              ? 0.88
              : 0.5;
        const vertical = watermarkPlacement
          ? Math.max(0.05, Math.min(0.95, watermarkPlacement.y))
          : watermarkPosition.startsWith('top')
            ? 0.84
            : watermarkPosition.startsWith('bottom')
              ? 0.18
              : 0.5;
        page.drawText(visualWatermark, {
          x: Math.max(18, Math.min(page.getWidth() - textWidth - 18, page.getWidth() * horizontal - textWidth / 2)),
          y: Math.max(18, Math.min(page.getHeight() - size - 18, page.getHeight() * vertical - size / 2)),
          size,
          font,
          color: rgb(0.15, 0.28, 0.43),
          opacity: 0.16,
        });
      }
    }
    if (shouldCancel?.()) return null;
    const optimized = await document.save({ useObjectStreams: true, addDefaultPage: false });
    // pdf-lib rewrites the whole document. If that rewrite is larger than the
    // input, keep the original for the explicit compression action instead of
    // making the user's file bigger.
    return operation === 'compress' && optimized.byteLength >= bytes.byteLength
      ? bytes
      : optimized;
  };

  const splitPdfBytes = async (
    bytes: Uint8Array,
    onPage?: (pageBytes: Uint8Array, pageIndex: number) => Promise<void>,
    shouldCancel?: () => boolean,
  ) => {
    const source = await PDFDocument.load(bytes);
    const results: Uint8Array[] = [];
    for (const pageIndex of source.getPageIndices()) {
      await yieldToEventLoop();
      if (shouldCancel?.()) break;
      const output = await PDFDocument.create();
      const [page] = await copyLean(output, source, [pageIndex]);
      output.addPage(page);
      const pageBytes = await output.save({ useObjectStreams: true });
      if (onPage) {
        await onPage(pageBytes, pageIndex);
      } else {
        results.push(pageBytes);
      }
    }
    return results;
  };

  const composePdfPages = async (
    entries: PdfPageSource[],
    shouldCancel?: () => boolean,
  ) => {
    const output = await PDFDocument.create();
    const sources = new Map<Uint8Array, any>();
    for (const [index, entry] of entries.entries()) {
      await maybeYield(index);
      if (shouldCancel?.()) return null;
      let source = sources.get(entry.bytes);
      if (!source) {
        source = await PDFDocument.load(entry.bytes);
        sources.set(entry.bytes, source);
      }
      const [page] = await copyLean(output, source, [entry.pageIndex]);
      output.addPage(page);
    }
    if (shouldCancel?.()) return null;
    return output.save({ useObjectStreams: true });
  };

  const composePdfPageSources = async (
    entries: PdfPageSourceReference[],
    readSource: (sourceKey: string) => Promise<Uint8Array>,
    shouldCancel?: () => boolean,
  ) => {
    const output = await PDFDocument.create();
    let loadedSourceKey: string | undefined;
    let source: any;
    for (const [index, entry] of entries.entries()) {
      await maybeYield(index);
      if (shouldCancel?.()) return null;
      if (entry.sourceKey !== loadedSourceKey) {
        source = await PDFDocument.load(await readSource(entry.sourceKey));
        loadedSourceKey = entry.sourceKey;
      }
      const [page] = await copyLean(output, source, [entry.pageIndex]);
      output.addPage(page);
    }
    if (shouldCancel?.()) return null;
    return output.save({ useObjectStreams: true });
  };

  /** One output PDF per group of zero-based page indices; the source is loaded once. */
  const splitGroups = async (
    bytes: Uint8Array,
    groups: number[][],
    onProgress?: (done: number, total: number) => void,
    shouldCancel?: () => boolean,
  ) => {
    const source = await PDFDocument.load(bytes);
    const results: Uint8Array[] = [];
    for (const [gi, group] of groups.entries()) {
      await yieldToEventLoop();
      if (shouldCancel?.()) break;
      const output = await PDFDocument.create();
      const pages = await copyLean(output, source, group);
      pages.forEach((page: any) => output.addPage(page));
      results.push(await output.save({ useObjectStreams: true }));
      onProgress?.(gi + 1, groups.length);
    }
    return results;
  };

  return {
    splitGroups,
    composePdfPages,
    composePdfPageSources,
    createImagePdfBytes,
    mergePdfBytes,
    mergePdfSources,
    protectPdfBytes,
    splitPdfBytes,
    transformPdfBytes,
  };
};