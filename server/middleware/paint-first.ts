/**
 * Drop modulepreload hints and deprioritize the hydration bundle so the
 * render-blocking stylesheet can paint the server HTML first.
 */
import { acceptsHtml, isDocumentPath } from "../../scripts/grok-pwa-shared.mjs";

interface PaintEvent {
  url: URL;
  req: { method: string; headers: Headers };
}

export function rewritePaintHtml(html: string): string {
  const withoutPreload = html.replace(/<link\b[^>]*\brel=(["'])modulepreload\1[^>]*>/gi, "");
  return withoutPreload.replace(/<script\b([^>]*)>/gi, (full, attrs: string) => {
    if (!/\btype=(["'])module\1/i.test(attrs)) return full;
    if (!/\bsrc=(["'])\/assets\//i.test(attrs)) return full;
    if (/\bfetchpriority=/i.test(attrs)) return full;
    return `<script fetchpriority="low"${attrs}>`;
  });
}

function paintStream(response: Response): Response {
  const decoder = new TextDecoder();
  const encoder = new TextEncoder();
  let pending = "";
  const emit = (end: boolean) => {
    if (!end) {
      const cut = pending.lastIndexOf("<");
      if (cut === -1 || pending.indexOf(">", cut) !== -1) {
        const out = encoder.encode(rewritePaintHtml(pending));
        pending = "";
        return out;
      }
      if (cut === 0) return new Uint8Array();
      const ready = pending.slice(0, cut);
      pending = pending.slice(cut);
      return encoder.encode(rewritePaintHtml(ready));
    }
    const out = encoder.encode(rewritePaintHtml(pending));
    pending = "";
    return out;
  };
  const transformed = response.body!.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        pending += decoder.decode(chunk, { stream: true });
        const out = emit(false);
        if (out.byteLength) controller.enqueue(out);
      },
      flush(controller) {
        pending += decoder.decode();
        const out = emit(true);
        if (out.byteLength) controller.enqueue(out);
      },
    }),
  );
  const headers = new Headers(response.headers);
  headers.delete("content-length");
  return new Response(transformed, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

export default async function paintFirstMiddleware(
  event: PaintEvent,
  next: () => unknown | Promise<unknown>,
): Promise<unknown> {
  if ((event.req.method ?? "GET").toUpperCase() !== "GET") return next();
  if (!isDocumentPath(event.url.pathname)) return next();
  if (!acceptsHtml(event.req.headers.get("accept"))) return next();

  const result = await next();
  if (
    result instanceof Response &&
    result.body &&
    String(result.headers.get("content-type") ?? "").includes("text/html") &&
    !result.headers.get("content-encoding")
  ) {
    return paintStream(result);
  }
  return result;
}
