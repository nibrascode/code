// Two-level text diff for /pdf/compare: paragraphs are aligned first, then changed paragraphs are
// diffed word by word. Word normalisation and PDF hyphen joining are adapted from docdiff
// (https://github.com/tschnorpfeil/docdiff, MIT © 2026 Tobias Schnorpfeil). Runs in the browser only.

export type Seg = { t: string; op: 0 | -1 | 1; c?: number }; // 0 equal, -1 removed (left), 1 added (right); c = change index
export type Row = { a: Seg[]; b: Seg[]; changed: boolean };
export type DiffResult = { rows: Row[]; changes: number; removed: number; added: number };

type Op = { op: 0 | -1 | 1; i: number; j: number };

/** Myers O(ND) diff; returns null when the edit distance exceeds maxD. */
function myers<T>(a: T[], b: T[], eq: (x: T, y: T) => boolean, maxD = 4000): Op[] | null {
  const n = a.length, m = b.length, max = Math.min(n + m, maxD), off = max + 1;
  const v = new Int32Array(2 * max + 3);
  const trace: Int32Array[] = [];
  let found = -1;
  for (let d = 0; d <= max; d++) {
    trace.push(v.slice());
    for (let k = -d; k <= d; k += 2) {
      let x = k === -d || (k !== d && v[off + k - 1] < v[off + k + 1]) ? v[off + k + 1] : v[off + k - 1] + 1;
      let y = x - k;
      while (x < n && y < m && eq(a[x], b[y])) { x++; y++; }
      v[off + k] = x;
      if (x >= n && y >= m) { found = d; break; }
    }
    if (found >= 0) { trace.push(v.slice()); break; }
  }
  if (found < 0) return null;
  const ops: Op[] = [];
  let x = n, y = m;
  for (let d = found; d > 0; d--) {
    const pv = trace[d];
    const k = x - y;
    const pk = k === -d || (k !== d && pv[off + k - 1] < pv[off + k + 1]) ? k + 1 : k - 1;
    const px = pv[off + pk], py = px - pk;
    while (x > px && y > py) { x--; y--; ops.push({ op: 0, i: x, j: y }); }
    if (x === px) { y--; ops.push({ op: 1, i: x, j: y }); } else { x--; ops.push({ op: -1, i: x, j: y }); }
  }
  while (x > 0 && y > 0) { x--; y--; ops.push({ op: 0, i: x, j: y }); }
  return ops.reverse();
}

// docdiff tokenizeWords(): lower case, trim leading/trailing punctuation so "Services." == "Services".
const wordKey = (w: string) => w.toLowerCase().replace(/^[^\p{L}\p{N}§€$%₼]+|[^\p{L}\p{N}§€$%₼]+$/gu, "") || w.toLowerCase();
const paraKey = (p: string) => p.replace(/\s+/g, " ").trim().toLowerCase();

/** docdiff joinWrappedLine(), simplified: undo end-of-line hyphenation when the next line starts lower case. */
function joinWrapped(prev: string, next: string) {
  if (!prev) return next;
  if (/\p{L}-$/u.test(prev) && /^\p{Ll}/u.test(next)) return prev.slice(0, -1) + next;
  return `${prev} ${next}`;
}

/** Text → paragraphs. PDF lines inside one block are joined; blank lines split paragraphs. */
export function toParagraphs(text: string, pdf = false): string[] {
  const out: string[] = [];
  for (const block of text.replace(/\r/g, "").split(/\n\s*\n/)) {
    const lines = block.split("\n").map((s) => s.replace(/\s+/g, " ").trim()).filter(Boolean);
    if (!lines.length) continue;
    if (!pdf) { out.push(...lines); continue; }
    let cur = "";
    for (const l of lines) {
      // a new bullet / numbered item or a short heading-like line starts its own paragraph
      if (cur && /^([•\-–*]|\d+[.)]|\p{L}[.)])\s/u.test(l)) { out.push(cur); cur = l; } else cur = joinWrapped(cur, l);
    }
    if (cur) out.push(cur);
  }
  return out;
}

function wordRow(pa: string, pb: string, next: () => number): Row {
  const A = pa.split(/\s+/).filter(Boolean), B = pb.split(/\s+/).filter(Boolean);
  const ops = myers(A.map(wordKey), B.map(wordKey), (x, y) => x === y, 1000);
  const a: Seg[] = [], b: Seg[] = [];
  const push = (arr: Seg[], t: string, op: 0 | -1 | 1, c?: number) => {
    const last = arr[arr.length - 1];
    if (last && last.op === op && last.c === c) last.t += " " + t; else { if (arr.length) arr.push({ t: " ", op: 0 }); arr.push({ t, op, c }); }
  };
  if (!ops) { const c = next(); push(a, pa, -1, c); push(b, pb, 1, c); return { a, b, changed: true }; }
  let c: number | undefined;
  for (const o of ops) {
    if (o.op === 0) { c = undefined; push(a, A[o.i], 0); push(b, B[o.j], 0); continue; }
    if (c === undefined) c = next();
    if (o.op === -1) push(a, A[o.i], -1, c); else push(b, B[o.j], 1, c);
  }
  return { a, b, changed: true };
}

export function diffTexts(ta: string, tb: string, opts: { pdfA?: boolean; pdfB?: boolean } = {}): DiffResult {
  const A = toParagraphs(ta, opts.pdfA), B = toParagraphs(tb, opts.pdfB);
  const ka = A.map(paraKey), kb = B.map(paraKey);
  const ops = myers(ka, kb, (x, y) => x === y, 1500) ?? [...A.map((_, i) => ({ op: -1 as const, i, j: 0 })), ...B.map((_, j) => ({ op: 1 as const, i: 0, j }))];
  let changes = 0;
  const next = () => changes++;
  const rows: Row[] = [];
  let dels: number[] = [], ins: number[] = [];
  const flush = () => {
    const k = Math.max(dels.length, ins.length);
    for (let x = 0; x < k; x++) {
      const i = dels[x], j = ins[x];
      if (i !== undefined && j !== undefined) rows.push(wordRow(A[i], B[j], next));
      else if (i !== undefined) rows.push({ a: [{ t: A[i], op: -1, c: next() }], b: [], changed: true });
      else rows.push({ a: [], b: [{ t: B[j], op: 1, c: next() }], changed: true });
    }
    dels = []; ins = [];
  };
  for (const o of ops) {
    if (o.op === 0) { flush(); rows.push({ a: [{ t: A[o.i], op: 0 }], b: [{ t: B[o.j], op: 0 }], changed: false }); }
    else if (o.op === -1) dels.push(o.i); else ins.push(o.j);
  }
  flush();
  let removed = 0, added = 0;
  for (const r of rows) { for (const s of r.a) if (s.op === -1) removed += s.t.split(/\s+/).length; for (const s of r.b) if (s.op === 1) added += s.t.split(/\s+/).length; }
  return { rows, changes, removed, added };
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const segHtml = (ss: Seg[]) => ss.map((s) => (s.op === 0 ? esc(s.t) : s.op === -1 ? `<del>${esc(s.t)}</del>` : `<ins>${esc(s.t)}</ins>`)).join("");

/** Standalone HTML report (no scripts, no external resources). */
export function diffReportHtml(r: DiffResult, nameA: string, nameB: string, title: string) {
  const rows = r.rows.map((x) => `<tr class="${x.changed ? "ch" : ""}"><td>${segHtml(x.a)}</td><td>${segHtml(x.b)}</td></tr>`).join("\n");
  return `<!doctype html><html><head><meta charset="utf-8"><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><title>${esc(title)}</title><style>
body{font:14px/1.5 system-ui,sans-serif;margin:24px;color:#111}table{width:100%;border-collapse:collapse;table-layout:fixed}td,th{vertical-align:top;padding:6px 10px;border-bottom:1px solid #eee;unicode-bidi:plaintext;text-align:start}th{background:#f5f5f5;text-align:left}tr.ch td{background:#fffbea}del{background:#fde2e2;color:#a40000}ins{background:#dcfce7;color:#065f2c;text-decoration:none}small{color:#666}
</style></head><body><h1>${esc(title)}</h1><p><small>${r.changes} · −${r.removed} / +${r.added} · Nibras PDF · diff adapted from docdiff (MIT)</small></p><table><tr><th>${esc(nameA)}</th><th>${esc(nameB)}</th></tr>
${rows}</table></body></html>`;
}

/** Plain-text report (unified style). */
export function diffReportText(r: DiffResult, nameA: string, nameB: string) {
  const s = (ss: Seg[], op: -1 | 1) => ss.map((x) => (x.op === op ? (op === -1 ? `[-${x.t}-]` : `{+${x.t}+}`) : x.t)).join("");
  const out = [`--- ${nameA}`, `+++ ${nameB}`, ""];
  for (const x of r.rows) if (x.changed) { if (x.a.length) out.push(`- ${s(x.a, -1)}`); if (x.b.length) out.push(`+ ${s(x.b, 1)}`); out.push(""); }
  return out.join("\n");
}
