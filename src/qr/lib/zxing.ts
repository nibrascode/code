/**
 * Lazy multi-format decoder (zxing-wasm, MIT). Self-hosted wasm via Vite ?url,
 * so nothing is fetched from a CDN. Used as a fallback after jsQR so the
 * scanner also reads EAN/UPC/Code 128/Data Matrix/PDF417/Aztec.
 */
type Reader = typeof import("zxing-wasm/reader");
let ready: Promise<Reader> | null = null;

function load(): Promise<Reader> {
  if (!ready) {
    ready = Promise.all([
      import("zxing-wasm/reader"),
      import("zxing-wasm/reader/zxing_reader.wasm?url"),
    ]).then(([mod, wasm]) => {
      mod.prepareZXingModule({
        overrides: { locateFile: (p: string, prefix: string) => (p.endsWith(".wasm") ? wasm.default : prefix + p) },
      });
      return mod;
    });
    ready.catch(() => {
      ready = null;
    });
  }
  return ready;
}

/** Returns decoded text or null. Never throws. */
export async function zxingDecode(img: ImageData): Promise<string | null> {
  try {
    const { readBarcodes } = await load();
    const res = await readBarcodes(img, { tryHarder: true, maxNumberOfSymbols: 1 });
    const hit = res.find((r) => r.isValid && r.text);
    return hit?.text ?? null;
  } catch {
    return null;
  }
}
