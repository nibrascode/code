import { useCallback, useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import type { Dict } from "./copy";
import { closePdf, openPdf, renderPageToCanvas } from "./lib/pdfjs";

export type Out = { name: string; blob: Blob; kind: "pdf" | "image" | "zip" | "docx" | "text"; text?: string; note?: string; extra?: { label: string; name: string; blob: Blob }[] };

export const btn =
  "inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--pdf-edge,var(--color-border))] bg-[var(--pdf-glass,transparent)] px-4 py-2 text-sm font-medium text-fg transition duration-200 hover:-translate-y-px hover:bg-[var(--pdf-glass-hi,transparent)] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";
export const btnPrimary =
  "inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-primary to-[var(--color-brand-2)] px-5 py-2.5 text-sm font-semibold text-primary-fg shadow-[0_10px_24px_-12px_var(--pdf-glow,transparent)] transition duration-200 hover:-translate-y-px hover:brightness-110 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";
export const field = "w-full rounded-xl border border-[var(--pdf-edge,var(--color-border))] bg-bg/60 px-3 py-2 text-sm text-fg outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/25";
export const card = "pdf-surface p-4 md:p-5";

export function fmtSize(n: number) {
  if (n < 1024) return `${n} B`;
  if (n < 1048576) return `${(n / 1024).toFixed(n < 10240 ? 1 : 0)} KB`;
  return `${(n / 1048576).toFixed(1)} MB`;
}

export function saveBlob(name: string, blob: Blob) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

export function Label({ children }: { children: ReactNode }) {
  return <div className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">{children}</div>;
}

export function Seg<T extends string>({ value, onChange, options, name }: { value: T; onChange: (v: T) => void; options: { id: T; label: string }[]; name: string }) {
  return (
    <div className="flex flex-wrap gap-2" role="radiogroup" aria-label={name}>
      {options.map((o) => (
        <button
          key={o.id}
          type="button"
          role="radio"
          aria-checked={value === o.id}
          data-opt={o.id}
          onClick={() => onChange(o.id)}
          className={`rounded-xl border px-3 py-1.5 text-sm transition duration-200 ${value === o.id ? "border-primary bg-primary/20 text-fg shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-primary)_18%,transparent)]" : "border-[var(--pdf-edge,var(--color-border))] bg-[var(--pdf-glass,transparent)] text-muted hover:text-fg"}`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}

/** Page thumbnails of a PDF (rendered lazily, small). */
export function usePageThumbs(bytes: Uint8Array | null, scale = 0.35, limit = 200) {
  const [thumbs, setThumbs] = useState<string[]>([]);
  useEffect(() => {
    let dead = false;
    setThumbs([]);
    if (!bytes) return;
    (async () => {
      const doc = await openPdf(bytes);
      try {
        const n = Math.min(doc.numPages, limit);
        for (let i = 1; i <= n && !dead; i++) {
          const c = await renderPageToCanvas(doc, i, scale);
          const url = c.toDataURL("image/jpeg", 0.7);
          if (dead) return;
          setThumbs((t) => [...t, url]);
        }
      } finally {
        await closePdf(doc);
      }
    })().catch(() => undefined);
    return () => {
      dead = true;
    };
  }, [bytes, scale, limit]);
  return thumbs;
}

export function FileDrop({ accept, multiple, label, hint, onFiles, compact, testId }: { accept: string; multiple: boolean; label: string; hint: string; onFiles: (f: File[]) => void; compact?: boolean; testId?: string }) {
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setDrag(true); }}
      onDragLeave={() => setDrag(false)}
      onDrop={(e) => { e.preventDefault(); setDrag(false); onFiles([...e.dataTransfer.files]); }}
      data-over={drag}
      className={`pdf-drop flex flex-col items-center justify-center gap-2 text-center ${compact ? "p-4" : "p-8 md:p-12"}`}
    >
      <button type="button" className={btnPrimary} onClick={() => input.current?.click()} data-testid={testId}>
        {label}
      </button>
      <span className="text-xs text-muted">{hint}</span>
      <input
        ref={input}
        type="file"
        hidden
        accept={accept}
        multiple={multiple}
        data-testid={testId ? `${testId}-input` : "file-input"}
        onChange={(e) => {
          const f = [...(e.target.files ?? [])];
          e.target.value = "";
          if (f.length) onFiles(f);
        }}
      />
    </div>
  );
}

export function PdfCanvas({ canvasSource, className }: { canvasSource: HTMLCanvasElement | null; className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const c = ref.current;
    if (!c || !canvasSource) return;
    c.width = canvasSource.width;
    c.height = canvasSource.height;
    c.getContext("2d")!.drawImage(canvasSource, 0, 0);
  }, [canvasSource]);
  return <canvas ref={ref} className={className} />;
}

/** Scrollable viewer. Pages render when they come into view. */
export function PdfViewer({ bytes, zoom, label }: { bytes: Uint8Array; zoom: number; label: string }) {
  const [doc, setDoc] = useState<Awaited<ReturnType<typeof openPdf>> | null>(null);
  const [sizes, setSizes] = useState<{ w: number; h: number }[]>([]);
  useEffect(() => {
    let dead = false;
    let current: Awaited<ReturnType<typeof openPdf>> | null = null;
    (async () => {
      const d = await openPdf(bytes);
      current = d;
      const s: { w: number; h: number }[] = [];
      for (let i = 1; i <= d.numPages; i++) {
        const p = await d.getPage(i);
        const v = p.getViewport({ scale: 1 });
        s.push({ w: v.width, h: v.height });
      }
      if (dead) return;
      setSizes(s);
      setDoc(d);
    })().catch(() => undefined);
    return () => {
      dead = true;
      if (current) void closePdf(current);
    };
  }, [bytes]);
  if (!doc) return <div className="h-64 animate-pulse rounded-xl bg-white/5" />;
  return (
    <div className="max-h-[75vh] space-y-3 overflow-auto rounded-xl bg-black/30 p-3" data-testid="viewer">
      {sizes.map((s, i) => (
        <ViewerPage key={i} doc={doc} n={i + 1} w={s.w} h={s.h} zoom={zoom} label={`${label} ${i + 1}`} />
      ))}
    </div>
  );
}

function ViewerPage({ doc, n, w, h, zoom, label }: { doc: Awaited<ReturnType<typeof openPdf>>; n: number; w: number; h: number; zoom: number; label: string }) {
  const holder = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [src, setSrc] = useState<HTMLCanvasElement | null>(null);
  useEffect(() => {
    const el = holder.current;
    if (!el) return;
    const io = new IntersectionObserver((e) => e.some((x) => x.isIntersecting) && setVisible(true), { rootMargin: "400px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const scale = zoom * (typeof window !== "undefined" ? Math.min(window.devicePixelRatio || 1, 2) : 1);
  useEffect(() => {
    if (!visible) return;
    let dead = false;
    renderPageToCanvas(doc, n, scale).then((c) => !dead && setSrc(c)).catch(() => undefined);
    return () => {
      dead = true;
    };
  }, [visible, doc, n, scale]);
  return (
    <div ref={holder} className="mx-auto bg-white shadow-lg" style={{ width: w * zoom, height: h * zoom, maxWidth: "none" }} aria-label={label}>
      {src ? <PdfCanvas canvasSource={src} className="block h-full w-full" /> : null}
    </div>
  );
}

export function ResultCard({ out, t, onOpen }: { out: Out; t: Dict; onOpen?: () => void }) {
  const [copied, setCopied] = useState(false);
  const [thumb, setThumb] = useState<string>("");
  useEffect(() => {
    let dead = false;
    let url = "";
    if (out.kind === "image") {
      url = URL.createObjectURL(out.blob);
      setThumb(url);
    } else if (out.kind === "pdf") {
      (async () => {
        const bytes = new Uint8Array(await out.blob.arrayBuffer());
        const d = await openPdf(bytes);
        try {
          const c = await renderPageToCanvas(d, 1, 0.45);
          if (!dead) setThumb(c.toDataURL("image/jpeg", 0.75));
        } finally {
          await closePdf(d);
        }
      })().catch(() => undefined);
    }
    return () => {
      dead = true;
      if (url) URL.revokeObjectURL(url);
    };
  }, [out]);
  const share = useCallback(async () => {
    const file = new File([out.blob], out.name, { type: out.blob.type });
    try {
      await navigator.share({ files: [file], title: out.name });
    } catch {
      /* cancelled */
    }
  }, [out]);
  const canShare = typeof navigator !== "undefined" && typeof navigator.canShare === "function" && navigator.canShare({ files: [new File([""], "a.txt", { type: "text/plain" })] });
  return (
    <div className="pdf-surface flex flex-col gap-3 p-3 sm:flex-row" data-testid="result" data-kind={out.kind}>
      {thumb ? <img src={thumb} alt="" className="h-28 w-20 shrink-0 rounded-md bg-white object-contain" /> : null}
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold" title={out.name}>{out.name}</div>
        <div className="text-xs text-muted">{fmtSize(out.blob.size)}</div>
        {out.note ? <div className="mt-1 text-xs text-amber-200/90">{out.note}</div> : null}
        {out.kind === "text" ? (
          <textarea readOnly value={out.text} dir="auto" className={`${field} mt-2 h-40 font-mono`} data-testid="result-text" />
        ) : null}
        <div className="mt-2 flex flex-wrap gap-2">
          <button type="button" className={btnPrimary} onClick={() => saveBlob(out.name, out.blob)} data-testid="download">{t.download}</button>
          {out.kind === "pdf" && onOpen ? <button type="button" className={btn} onClick={onOpen}>{t.open}</button> : null}
          {out.extra?.map((x) => <button key={x.label} type="button" className={btn} onClick={() => saveBlob(x.name, x.blob)} data-testid={`download-${x.label.toLowerCase()}`}>{x.label}</button>)}
          {out.kind === "text" ? (
            <button
              type="button"
              className={btn}
              onClick={async () => {
                await navigator.clipboard.writeText(out.text ?? "").catch(() => undefined);
                setCopied(true);
                setTimeout(() => setCopied(false), 1500);
              }}
            >
              {copied ? t.copied : t.copy}
            </button>
          ) : null}
          {canShare ? <button type="button" className={btn} onClick={share}>{t.share}</button> : null}
        </div>
      </div>
    </div>
  );
}
