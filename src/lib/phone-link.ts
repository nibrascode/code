/** «Telefona göndər»: packs a small note/file into a URL fragment (#get=…). The fragment is never sent to the server. */
import { deflateSync, inflateSync, strFromU8, strToU8 } from "fflate";

export const QR_MAX_LINK = 2300; // keeps the QR scannable on phone cameras

const b64u = (u: Uint8Array) => { let s = ""; for (let i = 0; i < u.length; i += 0x8000) s += String.fromCharCode(...u.subarray(i, i + 0x8000)); return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, ""); };
const unb64u = (s: string) => Uint8Array.from(atob(s.replace(/-/g, "+").replace(/_/g, "/")), (c) => c.charCodeAt(0));

export type Packet = { n: string; t: string; d: Uint8Array };

export function packLink(origin: string, qrPath: string, p: Packet): string {
  const name = strToU8(p.n.slice(0, 80));
  const type = strToU8(p.t.slice(0, 80));
  const head = new Uint8Array([name.length, type.length]);
  const body = new Uint8Array(head.length + name.length + type.length + p.d.length);
  body.set(head, 0); body.set(name, 2); body.set(type, 2 + name.length); body.set(p.d, 2 + name.length + type.length);
  return `${origin}${qrPath}#get=${b64u(deflateSync(body, { level: 9 }))}`;
}

export function unpackHash(hash: string): Packet | null {
  const m = /^#get=([A-Za-z0-9_-]+)$/.exec(hash);
  if (!m) return null;
  try {
    const u = inflateSync(unb64u(m[1]));
    const nl = u[0], tl = u[1];
    return { n: strFromU8(u.subarray(2, 2 + nl)), t: strFromU8(u.subarray(2 + nl, 2 + nl + tl)), d: u.subarray(2 + nl + tl) };
  } catch { return null; }
}
