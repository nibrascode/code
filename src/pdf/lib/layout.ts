// Reading-order text reconstruction from pdf.js text items. Pure functions (no DOM): usable in tests.
export type RawItem = { str: string; transform: number[]; width: number; height: number; hasEOL?: boolean };
export type Box = { str: string; x: number; y: number; w: number; h: number; size: number };
export type LayoutOptions = { rtl?: boolean | "auto" };

const AR = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
const AR_G = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]/g;
const PRES = /[\uFB50-\uFDFF\uFE70-\uFEFF]/;

const median = (a: number[]) => {
  if (!a.length) return 0;
  const s = [...a].sort((x, y) => x - y);
  return s[Math.floor(s.length / 2)];
};

export function toBoxes(items: RawItem[]): Box[] {
  const out: Box[] = [];
  for (const it of items) {
    if (typeof it.str !== "string" || !it.str.trim()) continue;
    const [a, b, , , e, f] = it.transform;
    const size = Math.hypot(a, b) || it.height || 10;
    // Rotated text (pages scanned sideways, vertical labels) is skipped from the main flow.
    if (Math.abs(b) > Math.abs(a) * 0.5) continue;
    out.push({ str: it.str, x: e, y: f, w: it.width, h: it.height || size, size });
  }
  return out;
}

type Line = { y: number; size: number; boxes: Box[]; x0: number; x1: number; rtl: boolean; text: string };

/** Fix text stored in visual order (legacy Arabic fonts): reverse the line, keep Latin/digit runs. */
export function fixVisualArabic(s: string): string {
  const rev = [...s].reverse().join("");
  return rev.replace(/[A-Za-z0-9][A-Za-z0-9.,:/%+\-_]*/g, (m) => [...m].reverse().join(""));
}

function lineText(boxes: Box[], rtl: boolean, size: number): string {
  const ord = [...boxes].sort((a, b) => (rtl ? b.x + b.w - (a.x + a.w) : a.x - b.x));
  let out = "";
  let prevEdge: number | null = null;
  for (const b of ord) {
    const gap = prevEdge === null ? 0 : rtl ? prevEdge - (b.x + b.w) : b.x - prevEdge;
    const s = b.str;
    if (out && gap > size * 0.22 && !/\s$/.test(out) && !/^\s/.test(s)) out += " ";
    out += s;
    prevEdge = rtl ? b.x : b.x + b.w;
  }
  return out;
}

/** Line stored glyph by glyph in visual (left-to-right) order: read it right to left. Items holding plain letters are already logical. */
function visualLine(boxes: Box[], size: number): string {
  const ord = [...boxes].sort((a, b) => a.x - b.x);
  const tokens: string[] = [];
  let prevEdge: number | null = null;
  for (const b of ord) {
    if (prevEdge !== null && b.x - prevEdge > size * 0.22 && !/\s$/.test(tokens[tokens.length - 1] ?? "") && !/^\s/.test(b.str)) tokens.push(" ");
    tokens.push(PRES.test(b.str) ? [...b.str].reverse().join("") : b.str);
    prevEdge = b.x + b.w;
  }
  return tokens.reverse().join("");
}

function buildLines(boxes: Box[], rtlMode: boolean | "auto"): Line[] {
  const sorted = [...boxes].sort((a, b) => b.y - a.y || a.x - b.x);
  const lines: { y: number; size: number; boxes: Box[] }[] = [];
  for (const b of sorted) {
    const l = lines.find((ln) => Math.abs(ln.y - b.y) < Math.min(ln.size, b.size) * 0.45);
    if (l) {
      l.boxes.push(b);
      l.size = Math.max(l.size, b.size);
    } else lines.push({ y: b.y, size: b.size, boxes: [b] });
  }
  return lines.map((l) => {
    const text0 = l.boxes.map((b) => b.str).join("");
    const arN = (text0.match(AR_G) || []).length;
    const letters = (text0.match(/\p{L}/gu) || []).length || 1;
    const rtl = rtlMode === "auto" || rtlMode === undefined ? arN / letters > 0.4 : !!rtlMode;
    let text = lineText(l.boxes, rtl, l.size);
    // Presentation-form glyphs mean the producer stored the line in visual order: re-read it left to right and reverse.
    const presN = (text.match(/[\uFB50-\uFDFF\uFE70-\uFEFF]/g) || []).length;
    if (rtl && presN > arN * 0.5) text = visualLine(l.boxes, l.size).normalize("NFKC");
    return { y: l.y, size: l.size, boxes: l.boxes, x0: Math.min(...l.boxes.map((b) => b.x)), x1: Math.max(...l.boxes.map((b) => b.x + b.w)), rtl, text };
  });
}

/** Cells of a line: runs of boxes separated by large horizontal gaps. */
function segments(line: Line): { x0: number; x1: number; text: string }[] {
  const ord = [...line.boxes].sort((a, b) => a.x - b.x);
  const segs: { x0: number; x1: number; boxes: Box[] }[] = [];
  for (const b of ord) {
    const last = segs[segs.length - 1];
    if (last && b.x - last.x1 < line.size * 1.6) {
      last.boxes.push(b);
      last.x1 = Math.max(last.x1, b.x + b.w);
    } else segs.push({ x0: b.x, x1: b.x + b.w, boxes: [b] });
  }
  return segs.map((s) => ({ x0: s.x0, x1: s.x1, text: lineText(s.boxes, line.rtl, line.size) }));
}

type Block = { lines: Line[] };

function mkLine(boxes: Box[], rtl: boolean): Line {
  const size = Math.max(...boxes.map((b) => b.size));
  return { y: boxes[0].y, size, boxes, x0: Math.min(...boxes.map((b) => b.x)), x1: Math.max(...boxes.map((b) => b.x + b.w)), rtl, text: lineText(boxes, rtl, size) };
}

type Group = { lines: Line[]; table: boolean };

/** Rows of consistent short cells -> table (text columns have long cells and are not tables). */
function tableRows(lines: Line[]): { x0: number; x1: number; text: string }[][] | null {
  if (lines.length < 3) return null;
  const rows = lines.map(segments);
  if (rows.some((r) => r.length < 2)) return null;
  const lens = rows.flatMap((r) => r.map((c) => c.text.length));
  if (median(lens) > 28) return null;
  const counts = new Map<number, number>();
  for (const r of rows) for (const k of new Set(r.map((c) => Math.round(c.x0 / 8)))) counts.set(k, (counts.get(k) ?? 0) + 1);
  const repeated = [...counts.values()].filter((c) => c >= Math.ceil(rows.length * 0.6)).length;
  return repeated >= 2 ? rows : null;
}

/** Separate runs of table rows from the surrounding text. */
function splitTables(sorted: Line[]): Group[] | null {
  const multi = sorted.map((l) => segments(l).length >= 2);
  if (!multi.some(Boolean)) return null;
  const groups: Group[] = [];
  let i = 0;
  let found = false;
  let plain: Line[] = [];
  while (i < sorted.length) {
    if (!multi[i]) { plain.push(sorted[i]); i++; continue; }
    let j = i;
    while (j < sorted.length && multi[j]) j++;
    const run = sorted.slice(i, j);
    if (tableRows(run)) {
      if (plain.length) groups.push({ lines: plain, table: false });
      plain = [];
      groups.push({ lines: run, table: true });
      found = true;
    } else plain.push(...run);
    i = j;
  }
  if (plain.length) groups.push({ lines: plain, table: false });
  return found ? groups : null;
}

function xyCut(lines: Line[], pageW: number, depth = 0): Group[] {
  if (lines.length < 2 || depth > 6) return [{ lines, table: false }];
  const medSize = median(lines.map((l) => l.size)) || 10;
  const sorted = [...lines].sort((a, b) => b.y - a.y);
  const tables = depth < 6 ? splitTables(sorted) : null;
  if (tables) return tables.flatMap((g) => (g.table ? [g] : xyCut(g.lines, pageW, depth + 1)));
  // 1) horizontal cut: large vertical whitespace between line groups
  let bestGap = 0;
  let cutAt = -1;
  const gaps = sorted.slice(1).map((l, i) => sorted[i].y - l.y);
  const typical = median(gaps) || medSize * 1.3;
  for (let i = 1; i < sorted.length; i++) {
    const g = sorted[i - 1].y - sorted[i].y;
    if (g > bestGap && g > Math.max(typical * 2.2, medSize * 2.6)) {
      bestGap = g;
      cutAt = i;
    }
  }
  if (cutAt > 0) return [...xyCut(sorted.slice(0, cutAt), pageW, depth + 1), ...xyCut(sorted.slice(cutAt), pageW, depth + 1)];
  // 2) vertical cut (columns): a gutter that no text crosses
  const all = sorted.flatMap((l) => l.boxes);
  const minX = Math.min(...all.map((b) => b.x));
  const maxX = Math.max(...all.map((b) => b.x + b.w));
  const bins = 240;
  const bw = Math.max(0.5, (maxX - minX) / bins);
  const cov = new Array(bins).fill(0);
  for (const b of all) for (let k = Math.max(0, Math.floor((b.x - minX) / bw)); k <= Math.min(bins - 1, Math.floor((b.x + b.w - minX) / bw)); k++) cov[k]++;
  const minGutter = Math.max(medSize * 1.2, (maxX - minX) * 0.025);
  let gutter: [number, number] | null = null;
  for (let k = 0; k < bins; ) {
    if (cov[k] === 0) {
      let j = k;
      while (j < bins && cov[j] === 0) j++;
      const width = (j - k) * bw;
      if (k > 0 && j < bins && width >= minGutter && (!gutter || width > gutter[1] - gutter[0])) gutter = [minX + k * bw, minX + j * bw];
      k = j;
    } else k++;
  }
  if (gutter) {
    const mid = (gutter[0] + gutter[1]) / 2;
    const rtl = sorted.filter((l) => l.rtl).length > sorted.length / 2;
    const mk = (side: Box[][]) => side.filter((bs) => bs.length).map((bs) => mkLine(bs, rtl && bs.filter((b) => AR.test(b.str)).length > bs.length / 2));
    const L: Box[][] = [];
    const R: Box[][] = [];
    for (const l of sorted) {
      L.push(l.boxes.filter((b) => b.x + b.w <= mid));
      R.push(l.boxes.filter((b) => b.x + b.w > mid));
    }
    const left = mk(L);
    const right = mk(R);
    if (left.length && right.length) {
      const [first, second] = rtl ? [right, left] : [left, right];
      return [...xyCut(first, pageW, depth + 1), ...xyCut(second, pageW, depth + 1)];
    }
  }
  return [{ lines: sorted, table: false }];
}

const BULLET = /^\s*([•\-–—*·▪◦]|\d{1,3}[.)]|[a-zA-Z][.)]|[\u0661-\u0669][.)])\s+/;
const SENT_END = /[.!?:;…؟۔»"”)]\s*$/;

function blockToText(lines: Line[], pageW: number, table = false): string {
  if (table) {
    const tab = tableRows(lines);
    if (tab) return tab.map((row) => row.map((c) => c.text).join("\t")).join("\n");
  }
  const rtl = lines.filter((l) => l.rtl).length > lines.length / 2;
  const medSize = median(lines.map((l) => l.size)) || 10;
  const gaps = lines.slice(1).map((l, i) => lines[i].y - l.y).filter((g) => g > 0);
  const lead = median(gaps) || medSize * 1.3;
  const widths = lines.map((l) => l.x1 - l.x0);
  const maxW = Math.max(...widths, 1);
  const out: string[] = [];
  let cur = "";
  const flush = () => {
    if (cur.trim()) out.push(cur.trim());
    cur = "";
  };
  lines.forEach((l, i) => {
    const prev = lines[i - 1];
    let newPara = false;
    if (prev) {
      const gap = prev.y - l.y;
      const prevShort = prev.x1 - prev.x0 < maxW * 0.72;
      const indent = rtl ? prev.x1 - l.x1 : l.x0 - prev.x0;
      newPara =
        gap > lead * 1.45 ||
        BULLET.test(l.text) ||
        (prevShort && SENT_END.test(prev.text)) ||
        (indent > medSize * 1.2 && SENT_END.test(prev.text)) ||
        Math.abs(l.size - prev.size) > 1.5;
    }
    if (newPara) flush();
    const t = l.text.trim();
    if (!cur) cur = t;
    else if (/[\u00AD]$/.test(cur) || (/[A-Za-zÀ-ɏЀ-ӿƏəğıİöüşç]-$/.test(cur) && /^[a-zà-ɏа-яəğıöüşç]/.test(t) && !rtl)) cur = cur.replace(/[\u00AD-]$/, "") + t;
    else cur += " " + t;
  });
  flush();
  return out.join("\n\n");
}

export function layoutPage(items: RawItem[], pageW: number, _opts: LayoutOptions = {}): string {
  const boxes = toBoxes(items);
  if (!boxes.length) return "";
  const lines = buildLines(boxes, _opts.rtl ?? "auto");
  const blocks = xyCut(lines, pageW);
  const texts: { t: string; table: boolean }[] = [];
  for (const g of blocks) {
    const t = blockToText(g.lines.sort((x, y) => y.y - x.y), pageW, g.table);
    if (!t) continue;
    const prev = texts[texts.length - 1];
    // a paragraph that runs from the bottom of one column to the top of the next
    if (prev && !prev.table && !g.table && !SENT_END.test(prev.t) && /^[a-zà-ɏа-яəğıöüşç]/.test(t) && !/\n\n$/.test(prev.t)) prev.t = prev.t.replace(/[\u00AD-]$/, "") + (/[\u00AD-]$/.test(prev.t) ? "" : " ") + t;
    else texts.push({ t, table: g.table });
  }
  return texts.map((x) => x.t).join("\n\n");
}

/** Remove running headers/footers and bare page numbers repeated across pages. */
export function stripRunning(pages: string[]): string[] {
  if (pages.length < 3) return pages;
  const norm = (s: string) => s.replace(/\d+/g, "#").trim();
  const edge = (p: string) => {
    const ps = p.split(/\n\n/);
    return { top: ps[0] ?? "", bottom: ps[ps.length - 1] ?? "" };
  };
  const tops = new Map<string, number>();
  const bots = new Map<string, number>();
  for (const p of pages) {
    const e = edge(p);
    if (e.top && e.top.length < 90) tops.set(norm(e.top), (tops.get(norm(e.top)) ?? 0) + 1);
    if (e.bottom && e.bottom.length < 90) bots.set(norm(e.bottom), (bots.get(norm(e.bottom)) ?? 0) + 1);
  }
  const need = Math.ceil(pages.length * 0.6);
  return pages.map((p) => {
    const ps = p.split(/\n\n/);
    if (ps.length > 1 && (tops.get(norm(ps[0])) ?? 0) >= need && ps[0].length < 90) ps.shift();
    if (ps.length > 1 && (bots.get(norm(ps[ps.length - 1])) ?? 0) >= need && ps[ps.length - 1].length < 90) ps.pop();
    return ps.join("\n\n");
  });
}

export function cleanText(s: string): string {
  return s
    .replace(AR_G, (m) => m.normalize("NFKC"))
    .replace(/[\u200E\u200F\u202A-\u202E\u2066-\u2069\uFEFF]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}
export { AR };
