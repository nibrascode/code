/** Client for heavy.worker: returns null when workers / OffscreenCanvas are unavailable (caller falls back). */
let w: Worker | null = null;
let seq = 0;
const waits = new Map<number, (r: { ok: boolean; buf?: ArrayBuffer; error?: string }) => void>();

function get(): Worker | null {
  if (typeof Worker === "undefined" || typeof OffscreenCanvas === "undefined") return null;
  if (!w) {
    try {
      w = new Worker(new URL("./heavy.worker.ts", import.meta.url), { type: "module" });
      w.onmessage = (e) => { const f = waits.get(e.data.id); waits.delete(e.data.id); f?.(e.data); };
      w.onerror = () => { for (const f of waits.values()) f({ ok: false, error: "worker" }); waits.clear(); w = null; };
    } catch { return null; }
  }
  return w;
}

function call(msg: Record<string, unknown>, transfer: Transferable[]): Promise<ArrayBuffer | null> {
  const wk = get();
  if (!wk) return Promise.resolve(null);
  const id = ++seq;
  return new Promise((res) => {
    waits.set(id, (r) => res(r.ok && r.buf ? r.buf : null));
    wk.postMessage({ ...msg, id }, transfer);
  });
}

export async function grayJpegOff(canvas: HTMLCanvasElement, q: number): Promise<Uint8Array | null> {
  if (!get() || typeof createImageBitmap === "undefined") return null;
  const bmp = await createImageBitmap(canvas);
  const b = await call({ op: "gray-jpeg", bmp, q }, [bmp]);
  return b ? new Uint8Array(b) : null;
}

export async function docxOff(text: string): Promise<Uint8Array | null> {
  const b = await call({ op: "docx", text }, []);
  return b ? new Uint8Array(b) : null;
}
