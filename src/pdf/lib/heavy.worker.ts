/// <reference lib="webworker" />
/** Off-main-thread heavy steps: grayscale page pixels + JPEG encode, DOCX zip build. */
import { createDocxFromText } from "./docx";

type Msg =
  | { id: number; op: "gray-jpeg"; bmp: ImageBitmap; q: number }
  | { id: number; op: "docx"; text: string };

self.onmessage = async (e: MessageEvent<Msg>) => {
  const m = e.data;
  try {
    if (m.op === "gray-jpeg") {
      const c = new OffscreenCanvas(m.bmp.width, m.bmp.height);
      const x = c.getContext("2d", { willReadFrequently: true })!;
      x.drawImage(m.bmp, 0, 0);
      m.bmp.close();
      const d = x.getImageData(0, 0, c.width, c.height);
      const a = d.data;
      for (let i = 0; i < a.length; i += 4) {
        const g = Math.round(a[i] * 0.299 + a[i + 1] * 0.587 + a[i + 2] * 0.114);
        a[i] = a[i + 1] = a[i + 2] = g;
      }
      x.putImageData(d, 0, 0);
      const buf = await (await c.convertToBlob({ type: "image/jpeg", quality: m.q })).arrayBuffer();
      (self as unknown as Worker).postMessage({ id: m.id, ok: true, buf }, [buf]);
    } else if (m.op === "docx") {
      const u = createDocxFromText(m.text);
      (self as unknown as Worker).postMessage({ id: m.id, ok: true, buf: u.buffer }, [u.buffer]);
    }
  } catch (err) {
    (self as unknown as Worker).postMessage({ id: m.id, ok: false, error: String(err) });
  }
};
