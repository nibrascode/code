/** Nibras Schema: two-way text/diagram database designer. Data stays in localStorage. */
import { useEffect, useMemo, useRef, useState } from "react";
import { Copy, Database, Download, FileCode2, FilePlus2, LayoutGrid, Maximize, Minus, Pencil, Plus, Trash2, Upload, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { SCL } from "./i18n";
import { SAMPLE, fromSql, parse, serialize, toSql, type Column, type Dialect, type Model, type Ref, type RefKind } from "./model";

const STORE = "nibras-schema-v1";
type Pos = Record<string, { x: number; y: number }>;
type Doc = { id: string; name: string; text: string; pos: Pos; at: number };
const W = 236, HEAD = 34, ROW = 26;
const rid = () => Math.random().toString(36).slice(2, 9);
const hOf = (n: number) => HEAD + Math.max(1, n) * ROW + 8;
const fkOf = (r: Ref) => (r.kind === "<" ? { child: r.b, parent: r.a } : { child: r.a, parent: r.b });
const COLORS = ["#7c83ff", "#22d3ee", "#f472b6", "#a3e635", "#fbbf24", "#fb7185", "#34d399", "#c084fc"];

function layout(m: Model): Pos {
  const level = new Map<string, number>();
  const get = (t: string, seen = new Set<string>()): number => {
    if (level.has(t)) return level.get(t)!;
    if (seen.has(t)) return 0; seen.add(t);
    const parents = m.refs.filter((r) => fkOf(r).child.t === t && fkOf(r).parent.t !== t).map((r) => fkOf(r).parent.t);
    const v = parents.length ? 1 + Math.max(...parents.map((p) => get(p, seen))) : 0;
    level.set(t, v); return v;
  };
  m.tables.forEach((t) => get(t.name));
  const cols = new Map<number, number>(); const pos: Pos = {};
  for (const t of [...m.tables].sort((a, b) => (level.get(a.name)! - level.get(b.name)!))) {
    const l = level.get(t.name)!; const y = cols.get(l) ?? 40;
    pos[t.name] = { x: 40 + l * (W + 90), y }; cols.set(l, y + hOf(t.columns.length) + 36);
  }
  return pos;
}

export function SchemaPage() {
  const { lang } = useI18n();
  const t = SCL[lang] ?? SCL.en;
  const [docs, setDocs] = useState<Doc[]>([]);
  const [cur, setCur] = useState("");
  const [pane, setPane] = useState<"text" | "diagram">("diagram");
  const [sel, setSel] = useState<null | { kind: "table"; name: string } | { kind: "ref"; i: number }>(null);
  const [view, setView] = useState({ x: 0, y: 0, k: 0.9 });
  const [link, setLink] = useState<null | { from: { t: string; c: string }; x: number; y: number }>(null);
  const [modal, setModal] = useState<null | "sql" | "import">(null);
  const [dialect, setDialect] = useState<Dialect>("postgres");
  const [importText, setImportText] = useState("");
  const [msg, setMsg] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<null | { kind: "table"; name: string; sx: number; sy: number; ox: number; oy: number; moved: boolean } | { kind: "pan"; sx: number; sy: number; ox: number; oy: number; moved: boolean } | { kind: "link" }>(null);
  const lastGood = useRef<Model>({ tables: [], refs: [] });

  useEffect(() => {
    let list: Doc[] = [];
    try { list = JSON.parse(localStorage.getItem(STORE) || "[]"); } catch { /* bad */ }
    if (!list.length) { const m = parse(SAMPLE).model; list = [{ id: rid(), name: "Shop", text: SAMPLE, pos: layout(m), at: Date.now() }]; }
    setDocs(list); setCur(list[0].id);
    setPane(matchMedia("(min-width: 1024px)").matches ? "diagram" : "diagram");
  }, []);
  useEffect(() => { if (docs.length) try { localStorage.setItem(STORE, JSON.stringify(docs)); } catch { /* full */ } }, [docs]);
  useEffect(() => { if (!msg) return; const id = setTimeout(() => setMsg(""), 2500); return () => clearTimeout(id); }, [msg]);

  const doc = docs.find((d) => d.id === cur);
  const parsed = useMemo(() => parse(doc?.text ?? ""), [doc?.text]);
  if (!parsed.errors.length || parsed.model.tables.length) lastGood.current = parsed.model;
  const model = parsed.errors.length ? lastGood.current : parsed.model;
  const pos: Pos = useMemo(() => {
    const p = { ...(doc?.pos ?? {}) }; let i = 0;
    for (const tb of model.tables) if (!p[tb.name]) { p[tb.name] = { x: 40 + (i % 3) * (W + 60), y: 40 + Math.floor(i / 3) * 260 }; i++; }
    return p;
  }, [doc?.pos, model]);

  const patch = (d: Partial<Doc>) => setDocs((l) => l.map((x) => (x.id === cur ? { ...x, ...d, at: Date.now() } : x)));
  const setModel = (m: Model, p?: Pos) => patch({ text: serialize(m), ...(p ? { pos: p } : {}) });
  const errText = parsed.errors.map((e) => { const [k, x] = e.msg.split(/:(.*)/); return ((t as Record<string, string>)["err_" + k] ?? e.msg).replace("{l}", String(e.line)).replace("{x}", x ?? ""); });

  const newDoc = () => { const name = prompt(t.name, `${t.schemas} ${docs.length + 1}`); if (!name) return; const d: Doc = { id: rid(), name: name.slice(0, 60), text: "Table users {\n  id integer [pk, increment]\n  name varchar\n}\n", pos: {}, at: Date.now() }; setDocs((l) => [d, ...l]); setCur(d.id); setSel(null); };
  const renameDoc = () => { const name = doc && prompt(t.name, doc.name); if (name) patch({ name: name.slice(0, 60) }); };
  const delDoc = () => {
    if (!doc || !confirm(t.confirmDel)) return;
    const rest = docs.filter((d) => d.id !== doc.id);
    if (!rest.length) { const d: Doc = { id: rid(), name: "Schema", text: "", pos: {}, at: Date.now() }; setDocs([d]); setCur(d.id); } else { setDocs(rest); setCur(rest[0].id); }
    setSel(null);
  };
  const addTable = () => {
    let n = t.newTable, i = 1; while (model.tables.some((x) => x.name === n)) n = `${t.newTable}_${++i}`;
    const r = svgRef.current?.getBoundingClientRect();
    const p = { ...pos, [n]: { x: Math.round(view.x + (r ? r.width / view.k / 2 - W / 2 : 200)), y: Math.round(view.y + (r ? r.height / view.k / 2 - 60 : 100)) } };
    setModel({ ...model, tables: [...model.tables, { name: n, columns: [{ name: "id", type: "integer", pk: true, increment: true }] }] }, p); setSel({ kind: "table", name: n });
  };
  const updTable = (name: string, f: (cols: Column[]) => Column[], newName?: string) => {
    const nn = newName !== undefined ? newName.replace(/[^\w$]/g, "_").slice(0, 60) || name : name;
    if (nn !== name && model.tables.some((x) => x.name === nn)) return;
    const tables = model.tables.map((x) => (x.name === name ? { name: nn, columns: f(x.columns) } : x));
    const tb = tables.find((x) => x.name === nn)!;
    const refs = model.refs.map((r) => ({ ...r, a: r.a.t === name ? { ...r.a, t: nn } : r.a, b: r.b.t === name ? { ...r.b, t: nn } : r.b })).filter((r) => [r.a, r.b].every((e) => e.t !== nn || tb.columns.some((c) => c.name === e.c)));
    const p = { ...pos }; if (nn !== name) { p[nn] = p[name]; delete p[name]; setSel({ kind: "table", name: nn }); }
    setModel({ tables, refs }, p);
  };
  const renameCol = (tn: string, i: number, v: string) => {
    const tb = model.tables.find((x) => x.name === tn)!; const old = tb.columns[i].name; const nv = v.replace(/[^\w$]/g, "_").slice(0, 60);
    if (!nv || tb.columns.some((c, j) => j !== i && c.name === nv)) return;
    const tables = model.tables.map((x) => (x.name === tn ? { ...x, columns: x.columns.map((c, j) => (j === i ? { ...c, name: nv } : c)) } : x));
    const fix = (e: { t: string; c: string }) => (e.t === tn && e.c === old ? { t: tn, c: nv } : e);
    setModel({ tables, refs: model.refs.map((r) => ({ ...r, a: fix(r.a), b: fix(r.b) })) });
  };
  const delTable = (name: string) => { const p = { ...pos }; delete p[name]; setModel({ tables: model.tables.filter((x) => x.name !== name), refs: model.refs.filter((r) => r.a.t !== name && r.b.t !== name) }, p); setSel(null); };
  const auto = () => { patch({ pos: layout(model) }); setTimeout(fit, 30); };
  const fit = () => {
    const r = svgRef.current?.getBoundingClientRect(); if (!r || !model.tables.length) return;
    const xs = model.tables.map((x) => pos[x.name]), x0 = Math.min(...xs.map((p) => p.x)) - 30, y0 = Math.min(...xs.map((p) => p.y)) - 30;
    const x1 = Math.max(...model.tables.map((x) => pos[x.name].x + W)) + 30, y1 = Math.max(...model.tables.map((x) => pos[x.name].y + hOf(x.columns.length))) + 30;
    const k = Math.min(1.3, Math.max(0.2, Math.min(r.width / (x1 - x0), r.height / (y1 - y0))));
    setView({ k, x: x0 - (r.width / k - (x1 - x0)) / 2, y: y0 - (r.height / k - (y1 - y0)) / 2 });
  };
  useEffect(() => { const id = setTimeout(fit, 80); return () => clearTimeout(id); }, [cur, pane]); // eslint-disable-line react-hooks/exhaustive-deps
  const zoom = (f: number, px?: number, py?: number) => setView((v) => { const r = svgRef.current!.getBoundingClientRect(); const k = Math.min(3, Math.max(0.15, v.k * f)); const cx = px ?? r.width / 2, cy = py ?? r.height / 2; const wx = cx / v.k + v.x, wy = cy / v.k + v.y; return { k, x: wx - cx / k, y: wy - cy / k }; });
  useEffect(() => { const el = svgRef.current; if (!el) return; const w = (e: WheelEvent) => { e.preventDefault(); const r = el.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1, e.clientX - r.left, e.clientY - r.top); }; el.addEventListener("wheel", w, { passive: false }); return () => el.removeEventListener("wheel", w); });
  const world = (e: { clientX: number; clientY: number }) => { const r = svgRef.current!.getBoundingClientRect(); return { x: (e.clientX - r.left) / view.k + view.x, y: (e.clientY - r.top) / view.k + view.y }; };

  const onDown = (e: React.PointerEvent) => {
    const el = e.target as Element;
    (e.currentTarget as Element).setPointerCapture(e.pointerId);
    const dot = el.closest("[data-dot]"); if (dot) { const [tt, c] = dot.getAttribute("data-dot")!.split("."); const w = world(e); drag.current = { kind: "link" }; setLink({ from: { t: tt, c }, ...w }); return; }
    const head = el.closest("[data-head]"); if (head) { const n = head.getAttribute("data-head")!; drag.current = { kind: "table", name: n, sx: e.clientX, sy: e.clientY, ox: pos[n].x, oy: pos[n].y, moved: false }; return; }
    const ref = el.closest("[data-ref]"); if (ref) { setSel({ kind: "ref", i: Number(ref.getAttribute("data-ref")) }); drag.current = null; return; }
    const tb = el.closest("[data-table]"); if (tb) { setSel({ kind: "table", name: tb.getAttribute("data-table")! }); drag.current = null; return; }
    drag.current = { kind: "pan", sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y, moved: false };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current; if (!d) return;
    if (d.kind === "link") { const w = world(e); setLink((l) => (l ? { ...l, ...w } : l)); return; }
    const dx = (e.clientX - d.sx) / view.k, dy = (e.clientY - d.sy) / view.k;
    if (!d.moved && Math.hypot(dx, dy) < 3) return; d.moved = true;
    if (d.kind === "pan") setView((v) => ({ ...v, x: d.ox - dx, y: d.oy - dy }));
    else setDocs((l) => l.map((x) => (x.id === cur ? { ...x, pos: { ...pos, [d.name]: { x: Math.round(d.ox + dx), y: Math.round(d.oy + dy) } } } : x)));
  };
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current; drag.current = null;
    if (d?.kind === "link" && link) {
      const hit = document.elementFromPoint(e.clientX, e.clientY)?.closest("[data-col]")?.getAttribute("data-col");
      if (hit) { const [tt, c] = hit.split("."); if (!(tt === link.from.t && c === link.from.c) && !model.refs.some((r) => r.a.t === link.from.t && r.a.c === link.from.c && r.b.t === tt && r.b.c === c)) { setModel({ ...model, refs: [...model.refs, { a: link.from, b: { t: tt, c }, kind: ">" }] }); setSel({ kind: "ref", i: model.refs.length }); } }
      setLink(null); return;
    }
    if (d?.kind === "table" && !d.moved) setSel({ kind: "table", name: d.name });
    if (d?.kind === "pan" && !d.moved) setSel(null);
  };

  const svgText = () => {
    const el = svgRef.current!.cloneNode(true) as SVGSVGElement;
    const x0 = Math.min(...model.tables.map((x) => pos[x.name].x)) - 30, y0 = Math.min(...model.tables.map((x) => pos[x.name].y)) - 30;
    const x1 = Math.max(...model.tables.map((x) => pos[x.name].x + W)) + 30, y1 = Math.max(...model.tables.map((x) => pos[x.name].y + hOf(x.columns.length))) + 30;
    el.setAttribute("viewBox", `${x0} ${y0} ${x1 - x0} ${y1 - y0}`); el.setAttribute("width", String(x1 - x0)); el.setAttribute("height", String(y1 - y0)); el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    el.querySelectorAll("[data-noexport]").forEach((n) => n.remove());
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect"); bg.setAttribute("x", String(x0)); bg.setAttribute("y", String(y0)); bg.setAttribute("width", String(x1 - x0)); bg.setAttribute("height", String(y1 - y0)); bg.setAttribute("fill", "#16171d"); el.insertBefore(bg, el.firstChild);
    return { s: new XMLSerializer().serializeToString(el), w: x1 - x0, h: y1 - y0 };
  };
  const dlBlob = (b: Blob, name: string) => { const u = URL.createObjectURL(b); const a = document.createElement("a"); a.href = u; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); };
  const fname = (doc?.name || "schema").replace(/[^\w-]+/g, "-");
  const exportPng = () => { const { s, w, h } = svgText(); const img = new Image(); img.onload = () => { const c = document.createElement("canvas"); c.width = w * 2; c.height = h * 2; const x = c.getContext("2d")!; x.scale(2, 2); x.drawImage(img, 0, 0, w, h); c.toBlob((b) => b && dlBlob(b, fname + ".png")); }; img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s); };
  const doImport = (replace: boolean) => {
    const m = fromSql(importText, replace ? [] : model.tables); if (!m.tables.length) { setMsg(t.err_syntax.replace("{l}", "1")); return; }
    const merged: Model = replace ? m : { tables: [...model.tables.filter((x) => !m.tables.some((y) => y.name === x.name)), ...m.tables], refs: [...model.refs.filter((r) => !m.tables.some((y) => y.name === r.a.t || y.name === r.b.t)), ...m.refs] };
    setModel(merged, layout(merged)); setModal(null); setImportText(""); setMsg(t.imported.replace("{n}", String(m.tables.length))); setTimeout(fit, 50);
  };
  const sql = modal === "sql" ? toSql(model, dialect) : "";
  const selTable = sel?.kind === "table" ? model.tables.find((x) => x.name === sel.name) : undefined;
  const selRef = sel?.kind === "ref" ? model.refs[sel.i] : undefined;
  const btn = "inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 text-[12.5px] hover:border-[#7c83ff]/60 disabled:opacity-40";
  const colorOf = (name: string) => COLORS[Math.abs([...name].reduce((h, ch) => (h * 31 + ch.charCodeAt(0)) | 0, 7)) % COLORS.length];

  const anchor = (e: { t: string; c: string }, side: "l" | "r") => { const tb = model.tables.find((x) => x.name === e.t)!; const p = pos[e.t]; const i = tb.columns.findIndex((c) => c.name === e.c); return { x: p.x + (side === "r" ? W : 0), y: p.y + HEAD + i * ROW + ROW / 2 }; };
  const card = (r: Ref): [string, string] => (r.kind === ">" ? ["*", "1"] : r.kind === "<" ? ["1", "*"] : r.kind === "-" ? ["1", "1"] : ["*", "*"]);

  return (
    <main className="mx-auto w-full max-w-[1680px] px-2 pt-20 pb-10 md:px-4 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="schema">
      <header className="mb-3 flex flex-wrap items-end justify-between gap-3 px-1">
        <div>
          <h1 className="flex items-center gap-2 font-display text-2xl font-bold md:text-3xl"><Database className="size-7 text-[#7c83ff]" /> {t.title}</h1>
          <p className="max-w-3xl text-sm text-[#9aa6c4]">{t.lead}</p>
        </div>
        <div className="flex flex-wrap items-center gap-1.5">
          <select className="h-9 max-w-52 rounded-lg border border-white/10 bg-[#16171d] px-2 text-[13px]" value={cur} onChange={(e) => { setCur(e.target.value); setSel(null); }} aria-label={t.schemas} data-testid="sch-select">
            {docs.map((d) => <option key={d.id} value={d.id}>{d.name}</option>)}
          </select>
          <button className={btn} onClick={newDoc} data-testid="sch-new"><FilePlus2 className="size-4" /> {t.newS}</button>
          <button className={btn} onClick={renameDoc} aria-label={t.rename} title={t.rename}><Pencil className="size-4" /></button>
          <button className={btn + " text-red-300"} onClick={delDoc} aria-label={t.del} title={t.del} data-testid="sch-del"><Trash2 className="size-4" /></button>
        </div>
      </header>
      <div className="mb-2 flex rounded-xl border border-white/10 p-1 lg:hidden">
        {(["text", "diagram"] as const).map((x) => <button key={x} className={"h-9 flex-1 rounded-lg text-sm " + (pane === x ? "bg-[#7c83ff] text-white" : "")} onClick={() => setPane(x)} data-testid={`sch-pane-${x}`}>{x === "text" ? t.text : t.diagram}</button>)}
      </div>
      <div className="flex flex-col gap-3 lg:flex-row">
        <section className={(pane === "text" ? "flex" : "hidden") + " flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-[#1b1530] to-[#121218] lg:flex lg:w-[380px] lg:shrink-0"}>
          <div className="flex items-center gap-2 border-b border-white/[0.07] px-3 py-2 text-[12px] text-[#9aa6c4]"><FileCode2 className="size-4" /> {doc?.name} <span className="ms-auto">{model.tables.length} {t.tables} · {model.refs.length} {t.relations}</span></div>
          <textarea className="h-[60vh] min-h-[320px] w-full resize-none bg-transparent p-3 font-mono text-[12.5px] leading-relaxed text-[#dfe3ff] outline-none lg:h-[calc(100vh-290px)]" value={doc?.text ?? ""} onChange={(e) => patch({ text: e.target.value })} spellCheck={false} dir="ltr" data-testid="sch-text" aria-label={t.text} />
          <div className={"border-t border-white/[0.07] px-3 py-2 text-[12px] " + (errText.length ? "text-amber-300" : "text-emerald-300")} data-testid="sch-errors">{errText.length ? errText.slice(0, 4).map((x) => <div key={x}>⚠ {x}</div>) : "✓ " + t.ok}</div>
          <details className="border-t border-white/[0.07] px-3 py-2 text-[11.5px] text-[#9aa6c4]"><summary className="cursor-pointer">{t.help}</summary><pre className="mt-1 whitespace-pre-wrap font-mono text-[11px]" dir="ltr">{"Table name {\n  col type [pk, increment, unique, not null, default: 0]\n}\nRef: a.col > b.col   // n : 1\nRef: a.col < b.col   // 1 : n\nRef: a.col - b.col   // 1 : 1\nRef: a.col <> b.col  // n : n"}</pre></details>
        </section>

        <section className={(pane === "diagram" ? "flex" : "hidden") + " relative min-w-0 flex-1 flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#16171d] lg:flex"}>
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.07] p-2">
            <button className={btn} onClick={addTable} data-testid="sch-addtable"><Plus className="size-4" /> {t.addTable}</button>
            <button className={btn} onClick={auto} data-testid="sch-auto"><LayoutGrid className="size-4" /> {t.autoLayout}</button>
            <button className={btn} onClick={() => setModal("import")} data-testid="sch-import"><Upload className="size-4" /> {t.importSql}</button>
            <span className="flex-1" />
            <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#5b5bff] px-3 text-[12.5px] font-semibold text-white hover:bg-[#6d6dff]" onClick={() => setModal("sql")} data-testid="sch-sql"><Download className="size-4" /> SQL</button>
            <button className={btn} onClick={exportPng} disabled={!model.tables.length} data-testid="sch-png">PNG</button>
            <button className={btn} onClick={() => dlBlob(new Blob([svgText().s], { type: "image/svg+xml" }), fname + ".svg")} disabled={!model.tables.length} data-testid="sch-svg">SVG</button>
            <button className={btn} onClick={() => dlBlob(new Blob([JSON.stringify({ tool: "Nibras Schema", name: doc?.name, ...model, positions: pos }, null, 2)], { type: "application/json" }), fname + ".json")} data-testid="sch-json">JSON</button>
          </div>
          <svg ref={svgRef} className="block h-[64vh] min-h-[380px] w-full touch-none select-none lg:h-[calc(100vh-250px)]" viewBox={`${view.x} ${view.y} ${(svgRef.current?.clientWidth ?? 900) / view.k} ${(svgRef.current?.clientHeight ?? 600) / view.k}`} onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} data-testid="sch-canvas">
            <defs><pattern id="schdots" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#2a2c36" /></pattern></defs>
            <rect data-noexport x={view.x - 20000} y={view.y - 20000} width={60000} height={60000} fill="url(#schdots)" />
            {model.refs.map((r, i) => {
              const pa = pos[r.a.t], pb = pos[r.b.t]; if (!pa || !pb) return null;
              const aRight = pa.x + W / 2 < pb.x + W / 2;
              const A = anchor(r.a, aRight ? "r" : "l"), B = anchor(r.b, aRight ? "l" : "r");
              const dx = Math.max(40, Math.abs(B.x - A.x) / 2) * (aRight ? 1 : -1);
              const on = sel?.kind === "ref" && sel.i === i, [ca, cb] = card(r);
              const d = `M${A.x},${A.y} C${A.x + dx},${A.y} ${B.x - dx},${B.y} ${B.x},${B.y}`;
              return (
                <g key={i} data-ref={i} className="cursor-pointer" data-testid="sch-ref">
                  <path d={d} stroke="transparent" strokeWidth="12" fill="none" />
                  <path d={d} stroke={on ? "#fff" : "#7c83ff"} strokeWidth={on ? 2.4 : 1.5} fill="none" strokeDasharray={r.kind === "<>" ? "6 4" : undefined} />
                  <circle cx={A.x} cy={A.y} r="3.5" fill="#7c83ff" /><circle cx={B.x} cy={B.y} r="3.5" fill="#7c83ff" />
                  <text x={A.x + (aRight ? 8 : -14)} y={A.y - 6} fontSize="11" fill="#c7cbff" fontFamily="monospace">{ca}</text>
                  <text x={B.x + (aRight ? -14 : 8)} y={B.y - 6} fontSize="11" fill="#c7cbff" fontFamily="monospace">{cb}</text>
                </g>
              );
            })}
            {model.tables.map((tb) => {
              const p = pos[tb.name], h = hOf(tb.columns.length), on = sel?.kind === "table" && sel.name === tb.name, col = colorOf(tb.name);
              return (
                <g key={tb.name} transform={`translate(${p.x},${p.y})`} data-table={tb.name} data-testid="sch-table">
                  <rect width={W} height={h} rx="10" fill="#22232c" stroke={on ? "#fff" : "#383a48"} strokeWidth={on ? 2 : 1} />
                  <g data-head={tb.name} className="cursor-move"><rect width={W} height={HEAD} rx="10" fill="#2a2b36" /><rect y={HEAD - 10} width={W} height="10" fill="#2a2b36" /><rect width="4" height={HEAD} rx="2" fill={col} /><text x="14" y="22" fontSize="13" fontWeight="700" fill="#f1f2ff" fontFamily="system-ui">{tb.name}</text><text x={W - 12} y="22" fontSize="11" fill="#7d7f96" textAnchor="end" fontFamily="system-ui">{tb.columns.length}</text></g>
                  {tb.columns.map((c, i) => (
                    <g key={c.name} transform={`translate(0,${HEAD + i * ROW})`} data-col={`${tb.name}.${c.name}`}>
                      <rect width={W} height={ROW} fill="transparent" />
                      <text x="14" y="17" fontSize="12" fill={c.pk ? "#ffd479" : "#dfe1f0"} fontWeight={c.pk ? 700 : 400} fontFamily="ui-monospace,monospace">{c.pk ? "🔑 " : ""}{c.name.length > 18 ? c.name.slice(0, 17) + "…" : c.name}</text>
                      <text x={W - 14} y="17" fontSize="10.5" fill="#8a8ca3" textAnchor="end" fontFamily="ui-monospace,monospace">{c.type.length > 14 ? c.type.slice(0, 13) + "…" : c.type}{c.notNull ? " !" : ""}{c.unique ? " U" : ""}</text>
                      <circle data-dot={`${tb.name}.${c.name}`} data-noexport cx={W} cy={ROW / 2} r="5" fill="#16171d" stroke="#5b5bff" strokeWidth="1.5" className="cursor-crosshair" data-testid="sch-dot" />
                    </g>
                  ))}
                </g>
              );
            })}
            {link ? (() => { const A = anchor(link.from, "r"); return <path data-noexport d={`M${A.x},${A.y} C${A.x + 60},${A.y} ${link.x - 60},${link.y} ${link.x},${link.y}`} stroke="#22d3ee" strokeWidth="2" fill="none" strokeDasharray="5 4" pointerEvents="none" />; })() : null}
          </svg>
          <p className="pointer-events-none absolute start-3 top-14 max-w-xs text-[11px] text-[#6f7186]">{t.dragHint}</p>
          <div className="absolute bottom-2 start-2 flex gap-1">
            <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#22232c]" onClick={() => zoom(1.2)} aria-label="+"><Plus className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#22232c]" onClick={() => zoom(1 / 1.2)} aria-label="-"><Minus className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#22232c]" onClick={fit} aria-label={t.fit} title={t.fit}><Maximize className="size-4" /></button>
          </div>
          {msg ? <div className="absolute start-1/2 top-14 -translate-x-1/2 rounded-lg bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-black" role="status">{msg}</div> : null}

          {selTable ? (
            <div className="absolute inset-x-2 bottom-2 max-h-[70%] overflow-auto rounded-xl border border-white/10 bg-[#1c1d26]/97 p-3 text-[12px] shadow-2xl sm:inset-x-auto sm:end-2 sm:top-14 sm:bottom-auto sm:w-[400px]" data-testid="sch-inspector">
              <div className="mb-2 flex items-center gap-2"><b>{t.inspector}</b><input className="h-8 min-w-0 flex-1 rounded-md border border-white/10 bg-black/30 px-2 font-mono" defaultValue={selTable.name} key={selTable.name} onBlur={(e) => updTable(selTable.name, (c) => c, e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); }} dir="ltr" data-testid="sch-tname" /><button className="rounded p-1 hover:bg-white/10" onClick={() => setSel(null)} aria-label={t.close}><X className="size-4" /></button></div>
              <div className="grid grid-cols-[1fr_88px_repeat(4,26px)_22px] items-center gap-1 text-[10px] text-[#8a8ca3]" dir="ltr"><span>{t.column}</span><span>{t.type}</span><span title={t.pk}>PK</span><span title={t.unique}>U</span><span title={t.notNull}>NN</span><span title={t.inc}>AI</span><span /></div>
              {selTable.columns.map((c, i) => (
                <div key={selTable.name + i + c.name} className="mt-1 grid grid-cols-[1fr_88px_repeat(4,26px)_22px] items-center gap-1" dir="ltr">
                  <input className="h-7 min-w-0 rounded border border-white/10 bg-black/30 px-1.5 font-mono" defaultValue={c.name} onBlur={(e) => renameCol(selTable.name, i, e.target.value)} data-testid="sch-cname" />
                  <input className="h-7 min-w-0 rounded border border-white/10 bg-black/30 px-1.5 font-mono" defaultValue={c.type} onBlur={(e) => updTable(selTable.name, (cs) => cs.map((x, j) => (j === i ? { ...x, type: e.target.value.replace(/\s+/g, "") || "varchar" } : x)))} data-testid="sch-ctype" />
                  {(["pk", "unique", "notNull", "increment"] as const).map((f) => <input key={f} type="checkbox" className="mx-auto accent-[#7c83ff]" checked={!!c[f]} onChange={(e) => updTable(selTable.name, (cs) => cs.map((x, j) => (j === i ? { ...x, [f]: e.target.checked || undefined } : x)))} data-testid={`sch-c-${f}`} aria-label={f} />)}
                  <button className="text-red-300" onClick={() => updTable(selTable.name, (cs) => cs.filter((_, j) => j !== i))} aria-label={t.delCol} title={t.delCol}><X className="size-3.5" /></button>
                  <label className="col-span-7 -mt-0.5 flex items-center gap-1 text-[10.5px] text-[#8a8ca3]">{t.def}: <input className="h-6 min-w-0 flex-1 rounded border border-white/10 bg-black/20 px-1.5 font-mono text-[11px]" defaultValue={c.default ?? ""} onBlur={(e) => updTable(selTable.name, (cs) => cs.map((x, j) => (j === i ? { ...x, default: e.target.value.trim() || undefined } : x)))} /></label>
                </div>
              ))}
              <div className="mt-2 flex gap-2">
                <button className={btn} onClick={() => updTable(selTable.name, (cs) => { let n = "column", k = 1; while (cs.some((x) => x.name === n)) n = `column_${++k}`; return [...cs, { name: n, type: "varchar" }]; })} data-testid="sch-addcol"><Plus className="size-4" /> {t.addCol}</button>
                <button className={btn + " text-red-300"} onClick={() => delTable(selTable.name)} data-testid="sch-deltable"><Trash2 className="size-4" /> {t.delTable}</button>
              </div>
            </div>
          ) : null}
          {selRef ? (
            <div className="absolute inset-x-2 bottom-2 rounded-xl border border-white/10 bg-[#1c1d26]/97 p-3 text-[12px] shadow-2xl sm:inset-x-auto sm:end-2 sm:top-14 sm:bottom-auto sm:w-80" data-testid="sch-refpanel">
              <div className="mb-2 flex items-center gap-2"><b>{t.relation}</b><span className="truncate font-mono text-[11px] text-[#9aa6c4]" dir="ltr">{selRef.a.t}.{selRef.a.c} → {selRef.b.t}.{selRef.b.c}</span><button className="ms-auto rounded p-1 hover:bg-white/10" onClick={() => setSel(null)} aria-label={t.close}><X className="size-4" /></button></div>
              <div className="grid grid-cols-4 gap-1">{([["-", t.one], [">", t.many], ["<", t.rev], ["<>", t.mm]] as [RefKind, string][]).map(([k, l]) => <button key={k} className={"h-8 rounded-lg border text-[12px] " + (selRef.kind === k ? "border-[#7c83ff] bg-[#7c83ff]/25" : "border-white/10")} onClick={() => setModel({ ...model, refs: model.refs.map((r, j) => (j === (sel as { i: number }).i ? { ...r, kind: k } : r)) })} data-testid={`sch-kind-${k}`}>{l}</button>)}</div>
              <button className={btn + " mt-2 text-red-300"} onClick={() => { setModel({ ...model, refs: model.refs.filter((_, j) => j !== (sel as { i: number }).i) }); setSel(null); }} data-testid="sch-delref"><Trash2 className="size-4" /> {t.delRel}</button>
            </div>
          ) : null}
        </section>
      </div>
      <p className="mt-2 px-1 text-xs text-[#7d89a8]">{t.local}</p>

      {modal ? (
        <div className="fixed inset-0 z-[200] grid grid-cols-[minmax(0,1fr)] place-items-center bg-black/60 p-3 backdrop-blur-sm" onClick={() => setModal(null)}>
          <div className="flex max-h-[90dvh] w-full min-w-0 max-w-2xl flex-col rounded-2xl border border-white/10 bg-[#1c1d26] p-4" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" data-testid="sch-modal">
            {modal === "sql" ? (
              <>
                <div className="mb-2 flex flex-wrap items-center gap-2"><b>SQL</b><span className="text-xs text-[#9aa6c4]">{t.dialect}:</span>{(["postgres", "mysql", "sqlite"] as Dialect[]).map((d) => <button key={d} className={"h-8 rounded-lg border px-3 text-[12px] " + (dialect === d ? "border-[#7c83ff] bg-[#7c83ff]/25" : "border-white/10")} onClick={() => setDialect(d)} data-testid={`sch-d-${d}`}>{d === "postgres" ? "PostgreSQL" : d === "mysql" ? "MySQL" : "SQLite"}</button>)}<button className="ms-auto rounded p-1 hover:bg-white/10" onClick={() => setModal(null)} aria-label={t.close}><X className="size-4" /></button></div>
                <pre className="min-h-0 flex-1 overflow-auto rounded-lg bg-black/40 p-3 font-mono text-[11.5px] text-[#dfe3ff]" dir="ltr" data-testid="sch-sqlout">{sql}</pre>
                <div className="mt-2 flex gap-2"><button className={btn} onClick={() => { void navigator.clipboard?.writeText(sql); setMsg(t.copied); }}><Copy className="size-4" /> {t.copy}</button><button className={btn} onClick={() => dlBlob(new Blob([sql], { type: "text/sql" }), `${fname}-${dialect}.sql`)} data-testid="sch-sqldl"><Download className="size-4" /> {t.download}</button></div>
              </>
            ) : (
              <>
                <div className="mb-1 flex items-center"><b>{t.importTitle}</b><button className="ms-auto rounded p-1 hover:bg-white/10" onClick={() => setModal(null)} aria-label={t.close}><X className="size-4" /></button></div>
                <p className="mb-2 text-xs text-[#9aa6c4]">{t.importHint}</p>
                <textarea className="h-64 w-full rounded-lg border border-white/10 bg-black/40 p-2 font-mono text-[11.5px] outline-none" value={importText} onChange={(e) => setImportText(e.target.value)} dir="ltr" spellCheck={false} data-testid="sch-importtext" />
                <div className="mt-2 flex flex-wrap gap-2"><button className="h-9 rounded-lg bg-[#5b5bff] px-4 text-[13px] font-semibold text-white" onClick={() => doImport(false)} data-testid="sch-doimport">{t.importBtn}</button><button className={btn} onClick={() => doImport(true)}>{t.replace}</button><button className={btn} onClick={() => setModal(null)}>{t.cancel}</button></div>
              </>
            )}
          </div>
        </div>
      ) : null}
      <footer className="mt-6 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
