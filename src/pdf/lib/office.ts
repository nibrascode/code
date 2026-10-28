// PDF → XLSX (table rebuilt from text positions) and PPTX → PDF (text, shapes, pictures). All in the browser.
import { openPdf, closePdf } from "./pdfjs";
import { docWithFonts } from "./engine";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, "");
const dec = (s: string) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n)).replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16))).replace(/&amp;/g, "&");

type Cell = { x: number; x2: number; text: string };
/** Groups the text on each page into rows (same baseline) and columns (shared left edges). */
export async function pdfToTables(bytes: Uint8Array, progress?: (d: number, n: number) => void, shouldStop?: () => boolean): Promise<{ name: string; rows: string[][] }[]> {
  const doc = await openPdf(bytes);
  const out: { name: string; rows: string[][] }[] = [];
  try {
    for (let p = 1; p <= doc.numPages; p++) {
      if (shouldStop?.()) break;
      progress?.(p - 1, doc.numPages);
      const page = await doc.getPage(p);
      const tc = await page.getTextContent();
      const items = (tc.items as { str?: string; transform?: number[]; width?: number; height?: number }[])
        .filter((i) => i.str && i.str.trim() && i.transform)
        .map((i) => ({ x: i.transform![4], y: i.transform![5], w: i.width ?? 0, h: Math.abs(i.height || i.transform![3]) || 10, s: i.str! }));
      items.sort((a, b) => b.y - a.y || a.x - b.x);
      const lines: { y: number; h: number; it: typeof items }[] = [];
      for (const it of items) {
        const l = lines.find((L) => Math.abs(L.y - it.y) < Math.max(2, Math.min(L.h, it.h) * 0.45));
        if (l) l.it.push(it); else lines.push({ y: it.y, h: it.h, it: [it] });
      }
      lines.sort((a, b) => b.y - a.y);
      const rowsCells: Cell[][] = lines.map((L) => {
        const s = L.it.sort((a, b) => a.x - b.x);
        const cells: Cell[] = [];
        for (const it of s) {
          const last = cells[cells.length - 1];
          const gap = last ? it.x - last.x2 : Infinity;
          if (last && gap < it.h * 0.9) { last.text += (gap > it.h * 0.15 ? " " : "") + it.s; last.x2 = it.x + it.w; }
          else cells.push({ x: it.x, x2: it.x + it.w, text: it.s });
        }
        return cells;
      });
      // Column anchors: cluster the left edges of cells.
      const xs = rowsCells.flat().map((c) => c.x).sort((a, b) => a - b);
      const anchors: number[] = [];
      for (const x of xs) { if (!anchors.length || x - anchors[anchors.length - 1] > 12) anchors.push(x); }
      const rows = rowsCells.map((cells) => {
        const r: string[] = [];
        for (const c of cells) {
          let k = 0;
          for (let i = 0; i < anchors.length; i++) if (anchors[i] <= c.x + 6) k = i;
          while (r[k]) k++;
          while (r.length < k) r.push("");
          r[k] = c.text.trim();
        }
        return r;
      });
      // Drop columns that are empty everywhere.
      const width = Math.max(0, ...rows.map((r) => r.length));
      const keep = Array.from({ length: width }, (_, i) => rows.some((r) => (r[i] ?? "").trim()));
      out.push({ name: `Page ${p}`, rows: rows.map((r) => keep.map((k, i) => (k ? r[i] ?? "" : null)).filter((v): v is string => v !== null)) });
    }
  } finally { await closePdf(doc); }
  progress?.(1, 1);
  return out;
}

const colName = (i: number) => { let s = ""; i++; while (i) { const m = (i - 1) % 26; s = String.fromCharCode(65 + m) + s; i = Math.floor((i - 1) / 26); } return s; };
const NUMRE = /^-?\d{1,15}(\.\d+)?$/;
/** Writes a minimal valid .xlsx (inline strings, numbers as numbers, bold first row optional). */
export async function sheetsToXlsx(sheets: { name: string; rows: string[][] }[], o: { boldFirst?: boolean } = {}): Promise<Uint8Array> {
  const { zipSync, strToU8 } = await import("fflate");
  const used = new Set<string>();
  const names = sheets.map((s, i) => {
    let n = (s.name || `Sheet${i + 1}`).replace(/[\\/?*[\]:]/g, " ").slice(0, 31).trim() || `Sheet${i + 1}`;
    let k = 2; const b = n; while (used.has(n.toLowerCase())) n = `${b.slice(0, 28)} ${k++}`;
    used.add(n.toLowerCase()); return n;
  });
  const files: Record<string, Uint8Array> = {};
  files["[Content_Types].xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/>${names.map((_, i) => `<Override PartName="/xl/worksheets/sheet${i + 1}.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/>`).join("")}</Types>`);
  files["_rels/.rels"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>`);
  files["xl/workbook.xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets>${names.map((n, i) => `<sheet name="${esc(n)}" sheetId="${i + 1}" r:id="rId${i + 1}"/>`).join("")}</sheets></workbook>`);
  files["xl/_rels/workbook.xml.rels"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">${names.map((_, i) => `<Relationship Id="rId${i + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet${i + 1}.xml"/>`).join("")}<Relationship Id="rId${names.length + 1}" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>`);
  files["xl/styles.xml"] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Calibri"/></font><font><b/><sz val="11"/><name val="Calibri"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf/></cellStyleXfs><cellXfs count="2"><xf fontId="0"/><xf fontId="1" applyFont="1"/></cellXfs></styleSheet>`);
  sheets.forEach((s, i) => {
    const width = Math.max(1, ...s.rows.map((r) => r.length));
    const cw = Array.from({ length: width }, (_, c) => Math.min(60, Math.max(8, ...s.rows.map((r) => (r[c] ?? "").length + 2))));
    const rows = s.rows.map((r, ri) => `<row r="${ri + 1}">${r.map((v, ci) => {
      if (!v) return "";
      const ref = `${colName(ci)}${ri + 1}`; const st = o.boldFirst && ri === 0 ? ' s="1"' : "";
      return NUMRE.test(v.trim()) ? `<c r="${ref}"${st}><v>${v.trim()}</v></c>` : `<c r="${ref}" t="inlineStr"${st}><is><t xml:space="preserve">${esc(v)}</t></is></c>`;
    }).join("")}</row>`).join("");
    files[`xl/worksheets/sheet${i + 1}.xml`] = strToU8(`<?xml version="1.0" encoding="UTF-8" standalone="yes"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><cols>${cw.map((w, c) => `<col min="${c + 1}" max="${c + 1}" width="${w}" customWidth="1"/>`).join("")}</cols><sheetData>${rows}</sheetData></worksheet>`);
  });
  return zipSync(files);
}

// ---------- PPTX → PDF ----------
const EMU = 12700;
type Box = { x: number; y: number; w: number; h: number };
const xfrm = (xml: string): Box | null => {
  const off = xml.match(/<a:off x="(-?\d+)" y="(-?\d+)"/); const ext = xml.match(/<a:ext cx="(\d+)" cy="(\d+)"/);
  return off && ext ? { x: +off[1] / EMU, y: +off[2] / EMU, w: +ext[1] / EMU, h: +ext[2] / EMU } : null;
};
const ph = (xml: string) => { const m = xml.match(/<p:ph\b([^>]*)\/?>/); if (!m) return null; return { type: m[1].match(/type="([^"]+)"/)?.[1] ?? "body", idx: m[1].match(/idx="([^"]+)"/)?.[1] ?? "" }; };
const hex = (s?: string | null) => { if (!s) return null; const n = parseInt(s, 16); return [(n >> 16 & 255) / 255, (n >> 8 & 255) / 255, (n & 255) / 255] as const; };
const resolve = (base: string, target: string) => { if (target.startsWith("/")) return target.slice(1); const parts = base.split("/").slice(0, -1); for (const seg of target.split("/")) { if (seg === "..") parts.pop(); else if (seg !== ".") parts.push(seg); } return parts.join("/"); };

export async function pptxToPdf(bytes: Uint8Array, progress?: (d: number, n: number) => void): Promise<{ bytes: Uint8Array; slides: number; skipped: number }> {
  const { unzipSync, strFromU8 } = await import("fflate");
  const z = unzipSync(bytes);
  const get = (p: string) => (z[p] ? strFromU8(z[p]) : "");
  const pres = get("ppt/presentation.xml");
  if (!pres) throw new Error("not-pptx");
  const sz = pres.match(/<p:sldSz cx="(\d+)" cy="(\d+)"/);
  const PW = sz ? +sz[1] / EMU : 720, PH = sz ? +sz[2] / EMU : 405;
  const rels = (path: string) => { const dir = path.split("/").slice(0, -1).join("/"); const f = `${dir}/_rels/${path.split("/").pop()}.rels`; const m = new Map<string, string>(); for (const r of get(f).matchAll(/<Relationship\b([^>]*)\/?>/g)) { const id = r[1].match(/Id="([^"]+)"/)?.[1]; const t = r[1].match(/Target="([^"]+)"/)?.[1]; if (id && t && !/TargetMode="External"/.test(r[1])) m.set(id, resolve(path, t)); } return m; };
  const presRels = rels("ppt/presentation.xml");
  const slidePaths = [...pres.matchAll(/<p:sldId\b[^>]*r:id="([^"]+)"/g)].map((m) => presRels.get(m[1])).filter((p): p is string => !!p && !!z[p]);
  const { lib, doc, vis } = await docWithFonts();
  const imgCache = new Map<string, import("pdf-lib").PDFImage | null>();
  const image = async (p: string) => {
    if (imgCache.has(p)) return imgCache.get(p)!;
    let im: import("pdf-lib").PDFImage | null = null;
    try { if (/\.png$/i.test(p)) im = await doc.embedPng(z[p]); else if (/\.jpe?g$/i.test(p)) im = await doc.embedJpg(z[p]); } catch { im = null; }
    imgCache.set(p, im); return im;
  };
  let skipped = 0;
  for (let si = 0; si < slidePaths.length; si++) {
    progress?.(si, slidePaths.length);
    const sp = slidePaths[si]; const xml = get(sp); const sr = rels(sp);
    const layoutPath = [...sr.values()].find((v) => /slideLayouts\//.test(v));
    const layout = layoutPath ? get(layoutPath) : "";
    const masterPath = layoutPath ? [...rels(layoutPath).values()].find((v) => /slideMasters\//.test(v)) : undefined;
    const master = masterPath ? get(masterPath) : "";
    const phBox = (p: { type: string; idx: string }) => {
      for (const src of [layout, master]) for (const m of src.matchAll(/<p:sp\b[\s\S]*?<\/p:sp>/g)) { const q = ph(m[0]); if (q && ((p.idx && q.idx === p.idx) || q.type === p.type || (p.type === "ctrTitle" && q.type === "title"))) { const b = xfrm(m[0]); if (b) return b; } }
      return null;
    };
    const page = doc.addPage([PW, PH]);
    const bgSrc = [xml, layout, master].map((s) => s.match(/<p:bg>[\s\S]*?<\/p:bg>/)?.[0]).find(Boolean) ?? "";
    const bg = hex(bgSrc.match(/<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]);
    page.drawRectangle({ x: 0, y: 0, width: PW, height: PH, color: bg ? lib.rgb(...bg) : lib.rgb(1, 1, 1) });
    const tree = xml.match(/<p:spTree>([\s\S]*)<\/p:spTree>/)?.[1] ?? "";
    for (const m of tree.matchAll(/<p:(sp|pic|graphicFrame)\b[\s\S]*?<\/p:\1>/g)) {
      const el = m[0]; const kind = m[1];
      const p = ph(el);
      const box = xfrm(el.match(/<(?:p:spPr|p:xfrm)[\s\S]*?<\/(?:p:spPr|p:xfrm)>/)?.[0] ?? "") ?? (p ? phBox(p) : null);
      if (!box) continue;
      const top = PH - box.y;
      if (kind === "graphicFrame") { skipped++; continue; }
      if (kind === "pic") {
        const id = el.match(/<a:blip\b[^>]*r:embed="([^"]+)"/)?.[1]; const path = id ? sr.get(id) : undefined;
        const im = path ? await image(path) : null;
        if (im) page.drawImage(im, { x: box.x, y: top - box.h, width: box.w, height: box.h }); else skipped++;
        continue;
      }
      const spPr = el.match(/<p:spPr[\s\S]*?<\/p:spPr>/)?.[0] ?? "";
      const fill = hex(spPr.replace(/<a:ln\b[\s\S]*?<\/a:ln>/, "").match(/<a:solidFill><a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]);
      const blip = spPr.match(/<a:blip\b[^>]*r:embed="([^"]+)"/)?.[1];
      if (blip) { const ip = sr.get(blip); const im = ip ? await image(ip) : null; if (im) page.drawImage(im, { x: box.x, y: top - box.h, width: box.w, height: box.h }); }
      else if (fill) {
        if (/prst="ellipse"/.test(spPr)) page.drawEllipse({ x: box.x + box.w / 2, y: top - box.h / 2, xScale: box.w / 2, yScale: box.h / 2, color: lib.rgb(...fill) });
        else page.drawRectangle({ x: box.x, y: top - box.h, width: box.w, height: box.h, color: lib.rgb(...fill) });
      }
      const body = el.match(/<p:txBody>[\s\S]*?<\/p:txBody>/)?.[0];
      if (!body) continue;
      const isTitle = !!p && /title|ctrTitle/i.test(p.type);
      const anchor = body.match(/<a:bodyPr\b[^>]*anchor="(\w+)"/)?.[1] ?? (isTitle ? "ctr" : "t");
      const pad = 7.2, maxW = Math.max(10, box.w - 2 * pad);
      const lines: { text: string; size: number; bold: boolean; color: readonly [number, number, number]; algn: string; bullet: boolean }[] = [];
      const defColor = hex(body.match(/<a:defRPr\b[\s\S]*?<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]) ?? [0.1, 0.1, 0.12] as const;
      for (const pm of body.matchAll(/<a:p>([\s\S]*?)<\/a:p>|<a:p\/>/g)) {
        const px = pm[1] ?? "";
        const runs = [...px.matchAll(/<a:r>([\s\S]*?)<\/a:r>|<a:fld\b[\s\S]*?<\/a:fld>|<a:br\/>/g)];
        const text = runs.map((r) => (r[0] === "<a:br/>" ? "\n" : [...r[0].matchAll(/<a:t(?:\s[^>]*)?>([\s\S]*?)<\/a:t>/g)].map((t) => dec(t[1])).join(""))).join("");
        const rPr = px.match(/<a:rPr\b[^>]*\/?>(?:[\s\S]*?<\/a:rPr>)?/)?.[0] ?? px.match(/<a:endParaRPr\b[^>]*>/)?.[0] ?? "";
        const size = (+(rPr.match(/sz="(\d+)"/)?.[1] ?? 0) / 100) || (isTitle ? 32 : 18);
        const bold = /\bb="1"/.test(rPr) || isTitle;
        const color = hex(rPr.match(/<a:srgbClr val="([0-9A-Fa-f]{6})"/)?.[1]) ?? defColor;
        const algn = px.match(/<a:pPr\b[^>]*algn="(\w+)"/)?.[1] ?? (isTitle && p?.type === "ctrTitle" ? "ctr" : "l");
        const bullet = !isTitle && !!p && p.type === "body" && !/<a:buNone\/>/.test(px) && !!text.trim();
        for (const part of text.split("\n")) {
          // word wrap
          const words = part.split(/(\s+)/); let cur = "";
          const wOf = (s: string) => { const v = vis(s, bold); return v.font.widthOfTextAtSize(v.text, size); };
          const indent = bullet ? size * 0.9 : 0;
          let first = true;
          for (const w of words) { const t = cur + w; if (cur.trim() && wOf(t) > maxW - indent) { lines.push({ text: cur.trimEnd(), size, bold, color, algn, bullet: bullet && first }); first = false; cur = w.trimStart(); } else cur = t; }
          lines.push({ text: cur.trimEnd(), size, bold, color, algn, bullet: bullet && first && !!cur.trim() });
        }
      }
      // shrink to fit if needed
      let scale = 1; const total = () => lines.reduce((a, l) => a + l.size * 1.2 * scale, 0);
      while (total() > box.h - 2 * pad && scale > 0.5) scale -= 0.05;
      let y = anchor === "ctr" ? top - (box.h - total()) / 2 : anchor === "b" ? top - box.h + pad + total() : top - pad;
      for (const l of lines) {
        const s = l.size * scale; y -= s * 1.2;
        if (!l.text) continue;
        const v = vis(l.text, l.bold); const w = v.font.widthOfTextAtSize(v.text, s);
        const ind = l.bullet ? s * 0.9 : 0;
        const x = l.algn === "ctr" ? box.x + (box.w - w) / 2 : l.algn === "r" || v.isAr ? box.x + box.w - pad - w : box.x + pad + ind;
        if (l.bullet) page.drawCircle({ x: box.x + pad + s * 0.3, y: y + s * 0.35, size: s * 0.13, color: lib.rgb(...l.color) });
        page.drawText(v.text, { x, y: y + s * 0.2, size: s, font: v.font, color: lib.rgb(...l.color) });
      }
    }
  }
  progress?.(1, 1);
  if (!slidePaths.length) throw new Error("not-pptx");
  return { bytes: await doc.save({ useObjectStreams: true }), slides: slidePaths.length, skipped };
}
