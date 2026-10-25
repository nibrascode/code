/** Nibras Logic Lab: drag-and-drop logic gate simulator (SVG, runs fully in the browser). */
import { useEffect, useMemo, useRef, useState } from "react";
import { Cpu, Download, FilePlus2, FolderOpen, Link2, Maximize, Minus, Pause, Play, Plus, Save, SkipForward, Trash2, Trophy, Undo2, Eraser } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { LL } from "./i18n";
import { CHALLENGES, TYPES, check, decode, encode, evaluate, expr, names, pins, sample, size, tick, truth, type Circuit, type Gate, type GateType } from "./sim";

const CUR = "nibras-logic-current";
const SAVED = "nibras-logic-saved";
type Saved = { id: string; name: string; at: number; c: Circuit };
const COLORS: Record<GateType, string> = { AND: "#3fae5a", OR: "#2aa6b8", NOT: "#8b5cf6", NAND: "#e0a028", XOR: "#3b6bff", NOR: "#e0566b", XNOR: "#d0569f", INPUT: "#1f8f55", OUTPUT: "#1f8f55" };
const HI = "#39ff9c", LO = "#3d6bff", PEND = "#c084fc";
const rid = () => Math.random().toString(36).slice(2, 9);
const loadSaved = (): Saved[] => { try { return JSON.parse(localStorage.getItem(SAVED) || "[]"); } catch { return []; } };

function portIn(g: Gate, k: number) { const s = size(g.type), n = pins(g.type); return { x: g.x, y: g.y + (n === 1 ? s.h / 2 : k === 0 ? s.h * 0.28 : s.h * 0.72) }; }
function portOut(g: Gate) { const s = size(g.type); return { x: g.x + s.w, y: g.y + s.h / 2 }; }
function curve(a: { x: number; y: number }, b: { x: number; y: number }) { const dx = Math.max(40, Math.abs(b.x - a.x) / 2); return `M${a.x},${a.y} C${a.x + dx},${a.y} ${b.x - dx},${b.y} ${b.x},${b.y}`; }

export function LogicLabPage() {
  const { lang } = useI18n();
  const t = LL[lang] ?? LL.en;
  const [c, setC] = useState<Circuit>({ gates: [], wires: [] });
  const [hist, setHist] = useState<Circuit[]>([]);
  const [sel, setSel] = useState<{ kind: "gate" | "wire"; id: string } | null>(null);
  const [pend, setPend] = useState<{ kind: "out"; id: string } | { kind: "in"; id: string; pin: number } | null>(null);
  const [simOn, setSimOn] = useState(true);
  const [stepVals, setStepVals] = useState<Map<string, 0 | 1>>(new Map());
  const [view, setView] = useState({ x: -20, y: -20, k: 1 });
  const [msg, setMsg] = useState("");
  const [openList, setOpenList] = useState(false);
  const [saved, setSaved] = useState<Saved[]>([]);
  const [ch, setCh] = useState<string | null>(null);
  const [result, setResult] = useState<string>("");
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<null | { kind: "gate"; id: string; sx: number; sy: number; ox: number; oy: number; moved: boolean; before: Circuit } | { kind: "pan"; sx: number; sy: number; ox: number; oy: number }>(null);

  useEffect(() => {
    const h = location.hash.match(/#c=([\w-]+)/);
    const fromHash = h ? decode(h[1]) : null;
    let cur: Circuit | null = null;
    try { cur = JSON.parse(localStorage.getItem(CUR) || "null"); } catch { /* bad */ }
    setC(fromHash ?? (cur && cur.gates ? cur : sample()));
    setSaved(loadSaved());
  }, []);
  useEffect(() => { try { localStorage.setItem(CUR, JSON.stringify(c)); } catch { /* full */ } }, [c]);
  useEffect(() => { if (!msg) return; const id = setTimeout(() => setMsg(""), 2600); return () => clearTimeout(id); }, [msg]);

  const settled = useMemo(() => evaluate(c), [c]);
  const vals = simOn ? settled : stepVals;
  const nm = useMemo(() => names(c), [c]);
  const tt = useMemo(() => truth(c), [c]);
  const byId = useMemo(() => new Map(c.gates.map((g) => [g.id, g])), [c]);

  const commit = (next: Circuit, before = c) => { setHist((h) => [...h.slice(-49), before]); setC(next); };
  const undo = () => setHist((h) => { if (!h.length) return h; setC(h[h.length - 1]); setSel(null); return h.slice(0, -1); });

  const add = (type: GateType) => {
    const r = svgRef.current?.getBoundingClientRect();
    const cx = r ? view.x + r.width / view.k / 2 - 46 : 300, cy = r ? view.y + r.height / view.k / 2 - 28 : 200;
    const n = c.gates.length % 6;
    const g: Gate = { id: rid(), type, x: Math.round(cx + n * 14), y: Math.round(cy + n * 14), ...(type === "INPUT" ? { v: 0 as const } : {}) };
    commit({ ...c, gates: [...c.gates, g] }); setSel({ kind: "gate", id: g.id });
  };
  const remove = () => {
    if (!sel) return;
    if (sel.kind === "gate") commit({ gates: c.gates.filter((g) => g.id !== sel.id), wires: c.wires.filter((w) => w.from !== sel.id && w.to !== sel.id) });
    else commit({ ...c, wires: c.wires.filter((w) => w.id !== sel.id) });
    setSel(null);
  };
  const connect = (from: string, to: string, pin: number) => {
    if (from === to) return;
    commit({ ...c, wires: [...c.wires.filter((w) => !(w.to === to && w.pin === pin)), { id: rid(), from, to, pin }] });
  };
  const clickOut = (id: string) => { if (pend?.kind === "in") { connect(id, pend.id, pend.pin); setPend(null); } else setPend(pend?.kind === "out" && pend.id === id ? null : { kind: "out", id }); };
  const clickIn = (id: string, pin: number) => { if (pend?.kind === "out") { connect(pend.id, id, pin); setPend(null); } else setPend({ kind: "in", id, pin }); };

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input,textarea")) return;
      if (e.key === "Delete" || e.key === "Backspace") { if (sel) { e.preventDefault(); remove(); } }
      else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "z") { e.preventDefault(); undo(); }
      else if (e.key === "Escape") { setPend(null); setSel(null); }
    };
    addEventListener("keydown", key); return () => removeEventListener("keydown", key);
  });

  const onDown = (e: React.PointerEvent, g?: Gate) => {
    if (e.button !== 0) return;
    (e.currentTarget as Element).setPointerCapture?.(e.pointerId);
    if (g) { e.stopPropagation(); drag.current = { kind: "gate", id: g.id, sx: e.clientX, sy: e.clientY, ox: g.x, oy: g.y, moved: false, before: c }; }
    else drag.current = { kind: "pan", sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y };
  };
  const onMove = (e: React.PointerEvent) => {
    const d = drag.current; if (!d) return;
    const dx = (e.clientX - d.sx) / view.k, dy = (e.clientY - d.sy) / view.k;
    if (d.kind === "pan") { setView((v) => ({ ...v, x: d.ox - dx, y: d.oy - dy })); return; }
    if (!d.moved && Math.hypot(dx, dy) < 4) return;
    d.moved = true;
    setC((cc) => ({ ...cc, gates: cc.gates.map((g) => (g.id === d.id ? { ...g, x: Math.round((d.ox + dx) / 10) * 10, y: Math.round((d.oy + dy) / 10) * 10 } : g)) }));
  };
  const onUp = (e: React.PointerEvent) => {
    const d = drag.current; drag.current = null;
    if (!d) return;
    if (d.kind === "pan") { if (Math.hypot(e.clientX - d.sx, e.clientY - d.sy) < 4) { setSel(null); setPend(null); } return; }
    if (d.moved) { setHist((h) => [...h.slice(-49), d.before]); return; }
    const g = byId.get(d.id);
    if (g?.type === "INPUT" && sel?.kind === "gate" && sel.id === g.id || g?.type === "INPUT" && !sel) commit({ ...c, gates: c.gates.map((x) => (x.id === g.id ? { ...x, v: x.v ? 0 : 1 } : x)) });
    setSel({ kind: "gate", id: d.id });
  };
  const zoom = (f: number, cx?: number, cy?: number) => setView((v) => {
    const r = svgRef.current!.getBoundingClientRect();
    const k = Math.min(2.5, Math.max(0.3, v.k * f));
    const px = cx ?? r.width / 2, py = cy ?? r.height / 2;
    const wx = px / v.k + v.x, wy = py / v.k + v.y;
    return { k, x: wx - px / k, y: wy - py / k };
  });
  const fit = () => {
    const r = svgRef.current?.getBoundingClientRect(); if (!r || !c.gates.length) return setView({ x: -20, y: -20, k: 1 });
    const xs = c.gates.map((g) => g.x), ys = c.gates.map((g) => g.y);
    const x0 = Math.min(...xs) - 40, y0 = Math.min(...ys) - 40, x1 = Math.max(...xs) + 140, y1 = Math.max(...ys) + 100;
    const k = Math.min(1.6, Math.max(0.3, Math.min(r.width / (x1 - x0), r.height / (y1 - y0))));
    setView({ k, x: x0 - (r.width / k - (x1 - x0)) / 2, y: y0 - (r.height / k - (y1 - y0)) / 2 });
  };
  useEffect(() => {
    const el = svgRef.current; if (!el) return;
    const w = (e: WheelEvent) => { e.preventDefault(); const r = el.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.1 : 1 / 1.1, e.clientX - r.left, e.clientY - r.top); };
    el.addEventListener("wheel", w, { passive: false }); return () => el.removeEventListener("wheel", w);
  });
  useEffect(() => { const id = setTimeout(fit, 50); return () => clearTimeout(id); /* first fit */ // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [c.gates.length === 0]);

  const save = () => {
    const name = prompt(t.nameAsk, `Circuit ${saved.length + 1}`); if (!name) return;
    const next = [{ id: rid(), name: name.slice(0, 60), at: Date.now(), c }, ...saved].slice(0, 50);
    setSaved(next); try { localStorage.setItem(SAVED, JSON.stringify(next)); setMsg(t.saved); } catch { /* full */ }
  };
  const delSaved = (id: string) => { if (!confirm(t.confirmDel)) return; const next = saved.filter((s) => s.id !== id); setSaved(next); localStorage.setItem(SAVED, JSON.stringify(next)); };
  const share = async () => { const u = location.origin + location.pathname + "#c=" + encode(c); history.replaceState(null, "", u); try { await navigator.clipboard.writeText(u); } catch { /* no clipboard */ } setMsg(t.copied); };
  const svgText = () => {
    const el = svgRef.current!.cloneNode(true) as SVGSVGElement;
    const xs = c.gates.map((g) => g.x), ys = c.gates.map((g) => g.y);
    const x0 = Math.min(0, ...xs) - 40, y0 = Math.min(0, ...ys) - 40, w = Math.max(...xs, 200) + 160 - x0, h = Math.max(...ys, 100) + 120 - y0;
    el.setAttribute("viewBox", `${x0} ${y0} ${w} ${h}`); el.setAttribute("width", String(w)); el.setAttribute("height", String(h)); el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    el.querySelectorAll("[data-noexport]").forEach((n) => n.remove());
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect"); bg.setAttribute("x", String(x0)); bg.setAttribute("y", String(y0)); bg.setAttribute("width", String(w)); bg.setAttribute("height", String(h)); bg.setAttribute("fill", "#0a0f1c");
    el.insertBefore(bg, el.firstChild);
    return { s: new XMLSerializer().serializeToString(el), w, h };
  };
  const dl = (href: string, name: string) => { const a = document.createElement("a"); a.href = href; a.download = name; a.click(); };
  const exportSvg = () => { const { s } = svgText(); const u = URL.createObjectURL(new Blob([s], { type: "image/svg+xml" })); dl(u, "logic-circuit.svg"); setTimeout(() => URL.revokeObjectURL(u), 1000); };
  const exportPng = () => {
    const { s, w, h } = svgText(); const img = new Image();
    img.onload = () => { const cv = document.createElement("canvas"); cv.width = w * 2; cv.height = h * 2; const x = cv.getContext("2d")!; x.scale(2, 2); x.drawImage(img, 0, 0, w, h); dl(cv.toDataURL("image/png"), "logic-circuit.png"); };
    img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(s);
  };
  const runCheck = () => {
    const chal = CHALLENGES.find((x) => x.id === ch); if (!chal) return;
    const r = check(c, chal);
    setResult(r.ok ? "ok:" + t.ok : t.bad + " " + (r.reason === "inputs" ? t.r_inputs.replace("{n}", String(chal.inputs)) : r.reason === "output" ? t.r_output : r.reason === "gates" ? t.r_gates.replace("{g}", chal.allowed!.join(", ")) : t.r_table.replace("{b}", (r.bad ?? []).join(""))));
    if (r.ok) try { const d = JSON.parse(localStorage.getItem("nibras-logic-done") || "[]"); if (!d.includes(chal.id)) localStorage.setItem("nibras-logic-done", JSON.stringify([...d, chal.id])); } catch { /* full */ }
  };
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => { try { setDone(JSON.parse(localStorage.getItem("nibras-logic-done") || "[]")); } catch { /* bad */ } }, [result]);
  const startCh = (id: string) => {
    const chal = CHALLENGES.find((x) => x.id === id)!;
    const gates: Gate[] = [...Array.from({ length: chal.inputs }, (_, i) => ({ id: rid(), type: "INPUT" as const, x: 40, y: 40 + i * 110, v: 0 as const })), { id: rid(), type: "OUTPUT", x: 600, y: 40 + ((chal.inputs - 1) * 110) / 2 }];
    commit({ gates, wires: [] }); setCh(id); setResult(""); setTimeout(fit, 30);
  };

  const outs = c.gates.filter((g) => g.type === "OUTPUT");
  const btn = "inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-2.5 text-[12.5px] text-[#d6def5] hover:border-[#4f6bff]/60 hover:bg-[#4f6bff]/10 disabled:opacity-40";
  const chal = CHALLENGES.find((x) => x.id === ch);

  return (
    <main className="mx-auto w-full max-w-[1600px] px-2 pt-20 pb-10 md:px-4 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="logiclab">
      <div className="mb-3 flex flex-wrap items-end justify-between gap-2 px-1">
        <div>
          <a className="text-xs text-[#8aa2ff] hover:underline" href={localeHref(lang, "/learn")}>← {t.back}</a>
          <h1 className="flex items-center gap-2 font-display text-2xl font-bold md:text-3xl"><Cpu className="size-7 text-[#39ff9c]" /> {t.title}</h1>
          <p className="text-sm text-[#9aa6c4]">{t.lead}</p>
        </div>
      </div>
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f1c] shadow-[0_30px_80px_-40px_#000]">
        <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.07] bg-[#0d1426] px-2 py-2" dir="ltr">
          <button className={btn} onClick={() => { commit({ gates: [], wires: [] }); setCh(null); history.replaceState(null, "", location.pathname); }} data-testid="ll-new"><FilePlus2 className="size-4" /> {t.newC}</button>
          <div className="relative">
            <button className={btn} onClick={() => setOpenList((o) => !o)} data-testid="ll-open"><FolderOpen className="size-4" /> {t.open}</button>
            {openList ? (
              <div className="absolute start-0 top-full z-30 mt-1 w-72 rounded-xl border border-white/10 bg-[#111a33] p-1.5 text-[13px] shadow-2xl" data-testid="ll-openlist">
                {saved.length ? saved.map((s) => (
                  <div key={s.id} className="flex items-center gap-1 rounded-lg hover:bg-white/5">
                    <button className="min-w-0 flex-1 truncate px-2 py-2 text-start" onClick={() => { commit(s.c); setOpenList(false); setTimeout(fit, 30); }}>{s.name} <span className="text-[11px] text-[#7d89a8]">· {s.c.gates.length}</span></button>
                    <button className="rounded p-1.5 text-[#7d89a8] hover:text-red-300" onClick={() => delSaved(s.id)} aria-label={t.del}><Trash2 className="size-3.5" /></button>
                  </div>
                )) : <p className="p-2 text-[#7d89a8]">{t.none}</p>}
              </div>
            ) : null}
          </div>
          <button className={btn} onClick={save} data-testid="ll-save"><Save className="size-4" /> {t.save}</button>
          <button className={btn} onClick={() => { if (confirm(t.confirmClear)) { commit({ gates: [], wires: [] }); setMsg(t.cleared); } }} data-testid="ll-clear"><Eraser className="size-4" /> {t.clear}</button>
          <span className="mx-1 h-6 w-px bg-white/10" />
          <button className={btn} onClick={undo} disabled={!hist.length} data-testid="ll-undo"><Undo2 className="size-4" /> <span className="hidden sm:inline">{t.undo}</span></button>
          <button className={btn} onClick={remove} disabled={!sel} data-testid="ll-del"><Trash2 className="size-4" /> <span className="hidden sm:inline">{t.del}</span></button>
          <span className="flex-1" />
          <label className="inline-flex h-9 items-center gap-2 rounded-lg border border-white/10 px-2.5 text-[12.5px]">
            {t.sim}
            <button role="switch" aria-checked={simOn} onClick={() => { setSimOn((s) => !s); setStepVals(new Map()); }} className={"relative h-5 w-9 rounded-full transition " + (simOn ? "bg-[#1fbf6b]" : "bg-white/15")} data-testid="ll-sim"><span className={"absolute top-0.5 size-4 rounded-full bg-white transition-all " + (simOn ? "left-[18px]" : "left-0.5")} /></button>
            {simOn ? <Play className="size-3.5 text-[#39ff9c]" /> : <Pause className="size-3.5 text-[#7d89a8]" />}
          </label>
          <button className={btn} onClick={() => setStepVals((v) => tick(c, v))} disabled={simOn} data-testid="ll-step"><SkipForward className="size-4" /> {t.step}</button>
          <button className={btn} onClick={() => void share()} data-testid="ll-share"><Link2 className="size-4" /> <span className="hidden md:inline">{t.share}</span></button>
          <button className={btn} onClick={exportPng} data-testid="ll-png"><Download className="size-4" /> PNG</button>
          <button className={btn} onClick={exportSvg} data-testid="ll-svg"><Download className="size-4" /> SVG</button>
        </div>

        <div className="flex flex-col lg:flex-row">
          <aside className="border-b border-white/[0.07] p-2 lg:w-44 lg:shrink-0 lg:border-b-0 lg:border-e" dir="ltr">
            <p className="mb-1.5 px-1 text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]">{t.palette}</p>
            <div className="flex gap-1.5 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {TYPES.map((ty) => (
                <button key={ty} onClick={() => add(ty)} className="flex h-10 shrink-0 items-center gap-2 rounded-lg border border-white/[0.08] bg-white/[0.03] px-2 text-[12px] font-semibold hover:border-white/30" data-testid={`ll-add-${ty}`}>
                  <span className="grid h-6 w-8 place-items-center rounded-md text-[9px] text-white" style={{ background: COLORS[ty] }}>{ty === "INPUT" ? "1" : ty === "OUTPUT" ? "OUT" : ty.slice(0, 4)}</span>{ty}
                </button>
              ))}
            </div>
            <p className="mt-2 hidden px-1 text-[11px] leading-snug text-[#7d89a8] lg:block">{t.paletteHint}</p>
          </aside>

          <div className="relative min-w-0 flex-1">
            <svg ref={svgRef} className="block h-[56vh] min-h-[340px] w-full touch-none select-none lg:h-[calc(100vh-260px)] lg:min-h-[520px]" viewBox={`${view.x} ${view.y} ${(svgRef.current?.clientWidth ?? 900) / view.k} ${(svgRef.current?.clientHeight ?? 560) / view.k}`} onPointerDown={(e) => onDown(e)} onPointerMove={onMove} onPointerUp={onUp} data-testid="ll-canvas">
              <defs>
                <pattern id="llgrid" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#16203a" strokeWidth="1" /></pattern>
                <pattern id="llgrid2" width="100" height="100" patternUnits="userSpaceOnUse"><rect width="100" height="100" fill="url(#llgrid)" /><path d="M100 0H0V100" fill="none" stroke="#1c2949" strokeWidth="1" /></pattern>
                <filter id="llglow" x="-50%" y="-50%" width="200%" height="200%"><feGaussianBlur stdDeviation="3" result="b" /><feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
              </defs>
              <rect data-noexport x={view.x - 5000} y={view.y - 5000} width={20000} height={20000} fill="url(#llgrid2)" />
              {c.wires.map((w) => {
                const a = byId.get(w.from), b = byId.get(w.to); if (!a || !b) return null;
                const p = portOut(a), q = portIn(b, w.pin), v = vals.get(w.from) ?? 0, on = sel?.kind === "wire" && sel.id === w.id;
                const col = on ? PEND : v ? HI : LO;
                return (
                  <g key={w.id} onPointerDown={(e) => { e.stopPropagation(); setSel({ kind: "wire", id: w.id }); }} className="cursor-pointer" data-testid="ll-wire">
                    <path d={curve(p, q)} stroke="transparent" strokeWidth="14" fill="none" />
                    <path d={curve(p, q)} stroke={col} strokeWidth={on ? 3.5 : 2.5} fill="none" filter={v || on ? "url(#llglow)" : undefined} opacity={v || on ? 1 : 0.75} />
                    <text x={(p.x + q.x) / 2} y={(p.y + q.y) / 2 - 6} fill={col} fontSize="11" fontFamily="monospace" textAnchor="middle">{v}</text>
                  </g>
                );
              })}
              {c.gates.map((g) => {
                const s = size(g.type), v = vals.get(g.id) ?? 0, isSel = sel?.kind === "gate" && sel.id === g.id, col = COLORS[g.type];
                const io = g.type === "INPUT" || g.type === "OUTPUT";
                return (
                  <g key={g.id} transform={`translate(${g.x},${g.y})`} data-testid={`ll-gate-${g.type}`} data-v={v}>
                    <g onPointerDown={(e) => onDown(e, g)} className={g.type === "INPUT" ? "cursor-pointer" : "cursor-move"}>
                      <rect width={s.w} height={s.h} rx="12" fill={io ? (v ? "#0f3b26" : "#111a2e") : col + "33"} stroke={isSel ? PEND : io && v ? HI : col} strokeWidth={isSel ? 2.5 : 1.6} filter={io && v ? "url(#llglow)" : undefined} />
                      {io ? <text x={s.w / 2} y={s.h / 2 + 8} textAnchor="middle" fontSize="24" fontWeight="700" fontFamily="monospace" fill={v ? HI : "#8aa2ff"}>{v}</text>
                        : <text x={s.w / 2} y={s.h / 2 + 5} textAnchor="middle" fontSize="14" fontWeight="700" fill="#eef2ff" fontFamily="system-ui">{g.type}</text>}
                      <text x={io ? s.w / 2 : s.w / 2} y={-6} textAnchor="middle" fontSize="12" fill="#9aa6c4" fontFamily="system-ui">{io ? nm.get(g.id) : ""}</text>
                    </g>
                    {Array.from({ length: pins(g.type) }, (_, k) => { const p = portIn(g, k); const on = pend?.kind === "in" && pend.id === g.id && pend.pin === k; return <circle key={k} cx={p.x - g.x} cy={p.y - g.y} r={on ? 8 : 6.5} fill={on ? PEND : "#0a0f1c"} stroke={on ? PEND : "#8aa2ff"} strokeWidth="2" className="cursor-crosshair" onPointerDown={(e) => { e.stopPropagation(); clickIn(g.id, k); }} data-testid="ll-in" />; })}
                    {g.type !== "OUTPUT" ? (() => { const p = portOut(g); const on = pend?.kind === "out" && pend.id === g.id; return <circle cx={p.x - g.x} cy={p.y - g.y} r={on ? 8 : 6.5} fill={on ? PEND : v ? HI : "#0a0f1c"} stroke={on ? PEND : v ? HI : "#8aa2ff"} strokeWidth="2" className="cursor-crosshair" onPointerDown={(e) => { e.stopPropagation(); clickOut(g.id); }} data-testid="ll-out" />; })() : null}
                  </g>
                );
              })}
            </svg>
            <div className="absolute bottom-2 end-2 flex gap-1" dir="ltr">
              <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90" onClick={() => zoom(1.2)} aria-label="+"><Plus className="size-4" /></button>
              <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90" onClick={() => zoom(1 / 1.2)} aria-label="-"><Minus className="size-4" /></button>
              <button className="grid size-9 place-items-center rounded-lg border border-white/10 bg-[#111a33]/90" onClick={fit} aria-label={t.fit} title={t.fit}><Maximize className="size-4" /></button>
            </div>
            {pend ? <div className="absolute start-2 top-2 rounded-lg border border-[#c084fc]/50 bg-[#1b1233]/90 px-3 py-1.5 text-xs text-[#e9d5ff]">{pend.kind === "out" ? t.tapIn : t.tapOut}</div> : null}
            {msg ? <div className="absolute start-1/2 top-2 -translate-x-1/2 rounded-lg bg-[#1fbf6b] px-3 py-1.5 text-xs font-semibold text-black" role="status">{msg}</div> : null}
          </div>

          <aside className="space-y-3 border-t border-white/[0.07] p-3 text-[13px] lg:w-72 lg:shrink-0 lg:border-s lg:border-t-0 lg:overflow-auto" style={{ maxHeight: "calc(100vh - 200px)" }}>
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5" data-testid="ll-truth">
              <h2 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]">{t.truth}</h2>
              {outs.length ? (
                <div className="max-h-64 overflow-auto" dir="ltr">
                  <table className="w-full text-center font-mono text-[12px]">
                    <thead><tr className="text-[#7d89a8]">{tt.ins.map((g) => <th key={g.id} className="px-1 py-0.5">{nm.get(g.id)}</th>)}{tt.outs.map((g) => <th key={g.id} className="px-1 text-[#39ff9c]">{nm.get(g.id)}</th>)}</tr></thead>
                    <tbody>{tt.rows.map((r, i) => <tr key={i} className="border-t border-white/5">{r.ins.map((b, k) => <td key={k} className="py-0.5">{b}</td>)}{r.outs.map((b, k) => <td key={k} className={b ? "text-[#39ff9c]" : "text-[#5d7bff]"}>{b}</td>)}</tr>)}</tbody>
                  </table>
                  {c.gates.filter((g) => g.type === "INPUT").length > 6 ? <p className="mt-1 text-[11px] text-amber-300">{t.tooMany}</p> : null}
                </div>
              ) : <p className="text-[#7d89a8]">{t.noOut}</p>}
            </section>
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5" data-testid="ll-expr">
              <h2 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]">{t.expr}</h2>
              {outs.map((o) => <p key={o.id} className="break-words rounded-lg bg-[#0f2a1d] px-2 py-1.5 font-mono text-[13px] text-[#7dffbe]" dir="ltr">{nm.get(o.id)} = {expr(c, o.id, nm)}</p>)}
            </section>
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5">
              <h2 className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]">{t.legend}</h2>
              <ul className="space-y-1 text-[12px]">
                <li className="flex items-center gap-2"><span className="h-1 w-6 rounded" style={{ background: HI, boxShadow: `0 0 6px ${HI}` }} />{t.high}</li>
                <li className="flex items-center gap-2"><span className="h-1 w-6 rounded" style={{ background: LO }} />{t.low}</li>
                <li className="flex items-center gap-2"><span className="h-1 w-6 rounded" style={{ background: PEND }} />{t.selected} / {t.pending}</li>
              </ul>
            </section>
            <section className="rounded-xl border border-white/10 bg-white/[0.02] p-2.5" data-testid="ll-challenges">
              <h2 className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#9aa6c4]"><Trophy className="size-3.5 text-amber-300" /> {t.challenges} <span className="ms-auto normal-case">{done.length}/{CHALLENGES.length}</span></h2>
              <ul className="space-y-1">
                {CHALLENGES.map((x) => (
                  <li key={x.id}><button className={"w-full rounded-lg px-2 py-1.5 text-start hover:bg-white/5 " + (ch === x.id ? "bg-[#4f6bff]/15 ring-1 ring-[#4f6bff]/50" : "")} onClick={() => startCh(x.id)} data-testid={`ll-ch-${x.id}`}>
                    <span className="font-semibold">{done.includes(x.id) ? "✓ " : ""}{(t as Record<string, string>)["ch_" + x.id]}</span>
                    <span className="block text-[11.5px] text-[#9aa6c4]">{(t as Record<string, string>)["ch_" + x.id + "_d"]}</span>
                  </button></li>
                ))}
              </ul>
              {chal ? <button className="mt-2 h-9 w-full rounded-lg bg-[#2f6bff] font-semibold text-white hover:bg-[#3d77ff]" onClick={runCheck} data-testid="ll-check">{t.checkBtn}</button> : null}
              {result ? <p className={"mt-2 rounded-lg px-2 py-1.5 text-[12px] " + (result.startsWith("ok:") ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/10 text-red-300")} data-testid="ll-result">{result.replace(/^ok:/, "")}</p> : null}
            </section>
          </aside>
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-white/[0.07] bg-[#0d1426] px-3 py-1.5 text-[11.5px] text-[#7d89a8]" data-testid="ll-status">
          <span className="inline-flex items-center gap-1.5"><span className={"size-2 rounded-full " + (simOn ? "bg-emerald-400" : "bg-amber-400")} />{simOn ? t.simOn : t.simOff}</span>
          <span>{t.gates}: {c.gates.filter((g) => g.type !== "INPUT" && g.type !== "OUTPUT").length}</span>
          <span>{t.wires}: {c.wires.length}</span>
          <span>{t.inputs}: {c.gates.filter((g) => g.type === "INPUT").length}</span>
          <span>{t.outputs}: {outs.length}</span>
          <span className="flex-1" /><span>{Math.round(view.k * 100)}%</span>
        </div>
      </div>
      <p className="mt-2 px-1 text-xs text-[#7d89a8] lg:hidden">{t.paletteHint}</p>
      <p className="mt-2 px-1 text-xs text-[#7d89a8]">{t.local}</p>
      <footer className="mt-6 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
