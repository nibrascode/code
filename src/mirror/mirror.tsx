/** Nibras Site Mirror: sitemap → interactive site tree. Runs only in the browser; nothing is stored. */
import { useEffect, useMemo, useRef, useState } from "react";
import { Download, FileUp, Layers, Maximize, Minus, Network, Plus, Search, Stethoscope } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { ML } from "./i18n";
import { SAMPLE, TYPE_COLORS, analyze, linksFromHtml, parseSitemap, type Node, type PageType } from "./analyze";

const W = 176, H = 44, GX = 236, GY = 56;
type Placed = { n: Node; x: number; y: number; parent?: Placed };

export function MirrorPage() {
  const { lang } = useI18n();
  const t = ML[lang] ?? ML.en;
  const [text, setText] = useState("");
  const [sources, setSources] = useState<{ name: string; urls: number; kind: string }[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const [pendingKids, setPendingKids] = useState<string[]>([]);
  const [err, setErr] = useState("");
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const [q, setQ] = useState("");
  const [sel, setSel] = useState<Node | null>(null);
  const [view, setView] = useState({ x: -30, y: -30, k: 0.9 });
  const [rel, setRel] = useState<[string, string][]>([]);
  const [legend, setLegend] = useState(true);
  useEffect(() => { setLegend(matchMedia("(min-width: 640px)").matches); }, []);
  const [page, setPage] = useState(""); const [html, setHtml] = useState("");
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<null | { sx: number; sy: number; ox: number; oy: number; moved: boolean; node: string | null }>(null);

  const data = useMemo(() => (urls.length ? analyze(urls) : null), [urls]);

  const ingest = (srcs: { name: string; text: string }[], replace: boolean) => {
    let all = replace ? [] : [...urls];
    const info = replace ? [] : [...sources];
    let kids = replace ? [] : [...pendingKids];
    let bad = "";
    for (const s of srcs) {
      const r = parseSitemap(s.text);
      if (r.error) bad = t.xmlErr;
      if (r.kind === "index") kids = [...new Set([...kids, ...r.children])];
      all = all.concat(r.urls);
      info.push({ name: s.name, urls: r.urls.length, kind: r.kind });
    }
    if (!all.length && !kids.length) { setErr(t.noUrls); return; }
    setErr(bad); setUrls(all.slice(0, 50000)); setSources(info); setPendingKids(kids); setSel(null); setRel([]);
    const a = all.length ? analyze(all.slice(0, 50000)) : null;
    if (a) {
      const c = new Set<string>(); let vis = 0;
      const walk = (n: Node) => { vis++; if (n.depth >= 2 && n.children.length && (vis > 250 || n.depth >= 3)) c.add(n.id); else n.children.forEach(walk); };
      a.roots.forEach(walk); setClosed(c);
    }
    setTimeout(fit, 60);
  };
  const files = async (fl: FileList | null) => { if (!fl?.length) return; const arr = await Promise.all([...fl].slice(0, 50).map(async (f) => ({ name: f.name, text: f.size > 60e6 ? "" : await f.text() }))); ingest(arr, false); };

  // Layout: tidy left-to-right tree, leaves stacked vertically.
  const placed = useMemo(() => {
    const out: Placed[] = [];
    if (!data) return out;
    let row = 0;
    const ql = q.trim().toLowerCase();
    const hit = (n: Node): boolean => !ql || n.name.toLowerCase().includes(ql) || n.path.includes(ql) || n.children.some(hit);
    const place = (n: Node, depth: number, parent?: Placed): Placed | null => {
      if (!hit(n)) return null;
      const open = !closed.has(n.id) || (ql && n.children.some(hit));
      const me: Placed = { n, x: depth * GX, y: 0, parent };
      out.push(me);
      const kids = open ? n.children.map((c) => place(c, depth + 1, me)).filter(Boolean) as Placed[] : [];
      if (!kids.length) me.y = row++ * GY; else me.y = (kids[0].y + kids[kids.length - 1].y) / 2;
      return me;
    };
    for (const r of data.roots) { place(r, 0); row += 1; }
    return out;
  }, [data, closed, q]);
  const pos = useMemo(() => new Map(placed.map((p) => [p.n.id, p])), [placed]);
  const flagged = useMemo(() => {
    const m = new Map<string, string[]>();
    if (!data) return m;
    const add = (u: string, f: string) => { try { const x = new URL(u); const id = x.hostname.toLowerCase().replace(/^www\./, "") + (x.pathname.split("/").filter(Boolean).map((s) => { try { return decodeURIComponent(s).toLowerCase(); } catch { return s.toLowerCase(); } }).join("/").replace(/^/, "/").replace(/^\/$/, "/")); m.set(id, [...new Set([...(m.get(id) ?? []), f])]); } catch { /* skip */ } };
    data.issues.deep.forEach((u) => add(u, "deep")); data.issues.long.forEach((u) => add(u, "long")); data.issues.dups.forEach((d) => d.urls.forEach((u) => add(u, "dup")));
    return m;
  }, [data]);

  const fit = () => {
    const r = svgRef.current?.getBoundingClientRect(); if (!r) return;
    const el = svgRef.current!.querySelectorAll("[data-node]");
    if (!el.length) return;
    let x1 = 0, y1 = 0; el.forEach((e) => { x1 = Math.max(x1, Number(e.getAttribute("data-x")) + W); y1 = Math.max(y1, Number(e.getAttribute("data-y")) + H); });
    const k = Math.min(1.2, Math.max(0.15, Math.min(r.width / (x1 + 60), r.height / (y1 + 60))));
    setView({ k, x: -30, y: -30 - Math.max(0, (r.height / k - y1 - 60) / 2) });
  };
  const zoom = (f: number, px?: number, py?: number) => setView((v) => { const r = svgRef.current!.getBoundingClientRect(); const k = Math.min(3, Math.max(0.1, v.k * f)); const cx = px ?? r.width / 2, cy = py ?? r.height / 2; const wx = cx / v.k + v.x, wy = cy / v.k + v.y; return { k, x: wx - cx / k, y: wy - cy / k }; });
  useEffect(() => { const el = svgRef.current; if (!el) return; const w = (e: WheelEvent) => { e.preventDefault(); const r = el.getBoundingClientRect(); zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - r.left, e.clientY - r.top); }; el.addEventListener("wheel", w, { passive: false }); return () => el.removeEventListener("wheel", w); });
  useEffect(() => { if (q) { const id = setTimeout(fit, 30); return () => clearTimeout(id); } }, [q]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (n: Node) => { setSel(n); if (!n.children.length) return; setClosed((s) => { const x = new Set(s); if (x.has(n.id)) x.delete(n.id); else x.add(n.id); return x; }); };
  const addRelations = () => {
    if (!data) return;
    const links = linksFromHtml(html, page);
    const idOf = (u: string) => { try { const x = new URL(u); return x.hostname.toLowerCase().replace(/^www\./, "") + ("/" + x.pathname.split("/").filter(Boolean).map((s) => { try { return decodeURIComponent(s).toLowerCase(); } catch { return s.toLowerCase(); } }).join("/")).replace(/^\/$/, "/"); } catch { return ""; } };
    const from = idOf(page);
    const pairs = links.map((l) => [from, idOf(l)] as [string, string]).filter(([a, b]) => a && b && a !== b && data.index.has(a) && data.index.has(b));
    setRel((r) => [...r, ...pairs]);
  };
  const svgText = () => {
    const el = svgRef.current!.cloneNode(true) as SVGSVGElement;
    let x1 = 0, y1 = 0; placed.forEach((p) => { x1 = Math.max(x1, p.x + W); y1 = Math.max(y1, p.y + H); });
    el.setAttribute("viewBox", `-30 -30 ${x1 + 60} ${y1 + 60}`); el.setAttribute("width", String(x1 + 60)); el.setAttribute("height", String(y1 + 60)); el.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    el.querySelectorAll("[data-noexport]").forEach((n) => n.remove());
    const bg = document.createElementNS("http://www.w3.org/2000/svg", "rect"); bg.setAttribute("x", "-30"); bg.setAttribute("y", "-30"); bg.setAttribute("width", String(x1 + 60)); bg.setAttribute("height", String(y1 + 60)); bg.setAttribute("fill", "#141a29"); el.insertBefore(bg, el.firstChild);
    return new XMLSerializer().serializeToString(el);
  };
  const dl = (blob: Blob, name: string) => { const u = URL.createObjectURL(blob); const a = document.createElement("a"); a.href = u; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); };
  const strip = (n: Node): unknown => ({ name: n.name, path: n.path, url: n.url, type: n.type, inSitemap: !n.missing, pages: n.count, children: n.children.map(strip) });
  const exportJson = () => data && dl(new Blob([JSON.stringify({ tool: "Nibras Site Mirror", generated: new Date().toISOString(), urls: data.total, issues: data.issues, relations: rel, tree: data.roots.map(strip) }, null, 2)], { type: "application/json" }), "site-mirror.json");

  const types = Object.keys(TYPE_COLORS) as PageType[];
  const iss = data?.issues;
  const card = "rounded-2xl border border-white/10 bg-[#121828] p-3";
  const btn = "inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 text-[12.5px] hover:border-[#ff3d7f]/60 disabled:opacity-40";
  const Section = ({ title, list, test }: { title: string; list: string[]; test: string }) => (
    <details className="rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-1.5" data-testid={test}>
      <summary className="cursor-pointer text-[12.5px] font-semibold">{title} <span className={list.length ? "text-amber-300" : "text-emerald-300"}>({list.length})</span></summary>
      <ul className="mt-1 max-h-40 space-y-0.5 overflow-auto break-all font-mono text-[11px] text-[#aab4d0]" dir="ltr">{list.length ? list.slice(0, 300).map((u) => <li key={u}>{u}</li>) : <li>{t.none}</li>}</ul>
    </details>
  );

  return (
    <main className="mx-auto w-full max-w-[1600px] px-2 pt-20 pb-10 md:px-4 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="mirror">
      <header className="mb-3 px-1">
        <h1 className="flex items-center gap-2 font-display text-2xl font-bold md:text-3xl"><Network className="size-7 text-[#ff3d7f]" /> {t.title}</h1>
        <p className="text-sm text-[#9aa6c4]">{t.lead}</p>
      </header>
      <div className="flex flex-col gap-3 lg:flex-row">
        <aside className="space-y-3 lg:w-[340px] lg:shrink-0">
          <section className={card}>
            <h2 className="mb-2 text-sm font-semibold">{t.input}</h2>
            <textarea className="h-36 w-full resize-y rounded-lg border border-white/10 bg-black/30 p-2 font-mono text-[11.5px] outline-none focus:border-[#ff3d7f]" placeholder={t.paste} value={text} onChange={(e) => setText(e.target.value)} dir="ltr" data-testid="mr-text" spellCheck={false} />
            <div className="mt-2 flex flex-wrap gap-1.5">
              <button className="inline-flex h-9 items-center rounded-lg bg-[#ff3d7f] px-3 text-[13px] font-semibold text-white hover:bg-[#ff5a92]" onClick={() => ingest([{ name: "paste", text }], !pendingKids.length)} data-testid="mr-build">{t.analyze}</button>
              <label className={btn + " cursor-pointer"}><FileUp className="size-4" /> {t.files}<input type="file" multiple accept=".xml,.txt,text/xml,application/xml" className="sr-only" onChange={(e) => { void files(e.target.files); e.target.value = ""; }} data-testid="mr-file" /></label>
              <button className={btn} onClick={() => { setText(SAMPLE); ingest([{ name: "example.xml", text: SAMPLE }], true); }} data-testid="mr-sample">{t.sample}</button>
              <button className={btn} onClick={() => { setText(""); setUrls([]); setSources([]); setPendingKids([]); setErr(""); setRel([]); }}>{t.reset}</button>
            </div>
            {err ? <p className="mt-2 rounded-lg bg-amber-500/10 p-2 text-[12px] text-amber-200" data-testid="mr-err">{err}</p> : null}
            {pendingKids.length ? <div className="mt-2 rounded-lg border border-sky-400/30 bg-sky-500/10 p-2 text-[12px] text-sky-100" data-testid="mr-index"><p>{t.indexFound.replace("{n}", String(pendingKids.length))}</p><ul className="mt-1 max-h-24 overflow-auto break-all font-mono text-[11px]" dir="ltr">{pendingKids.map((k) => <li key={k}><a className="underline" href={k} target="_blank" rel="noreferrer noopener">{k}</a></li>)}</ul></div> : null}
            {sources.length ? <p className="mt-2 text-[11px] text-[#7d89a8]">{t.added}: {sources.map((s) => `${s.name} (${s.urls})`).join(", ")}</p> : null}
            <p className="mt-2 text-[11px] text-[#7d89a8]">{t.local}</p>
          </section>
          {data && iss ? (
            <section className={card} data-testid="mr-stats">
              <h2 className="mb-2 text-sm font-semibold">{t.stats}</h2>
              <dl className="grid grid-cols-2 gap-1.5 text-[12px]">
                {[[t.urls, data.total], [t.hosts, iss.hosts.length], [t.deepN, iss.deep.length], [t.dupN, iss.dups.length], [t.gapN, iss.gaps.length], [t.longN, iss.long.length], [t.invalid, iss.invalid.length], [t.exact, data.exactDup]].map(([k, v]) => (
                  <div key={String(k)} className="rounded-lg bg-black/25 px-2 py-1.5"><dt className="text-[10.5px] text-[#7d89a8]">{k}</dt><dd className={"text-lg font-bold " + (Number(v) && k !== t.urls && k !== t.hosts ? "text-amber-300" : "")}>{v}</dd></div>
                ))}
              </dl>
              <h2 className="mb-1.5 mt-3 text-sm font-semibold">{t.issues}</h2>
              <div className="space-y-1.5">
                <Section title={t.deep} list={iss.deep} test="mr-deep" />
                <details className="rounded-lg border border-white/[0.07] bg-black/20 px-2.5 py-1.5" data-testid="mr-dups">
                  <summary className="cursor-pointer text-[12.5px] font-semibold">{t.dups} <span className={iss.dups.length ? "text-amber-300" : "text-emerald-300"}>({iss.dups.length})</span></summary>
                  <ul className="mt-1 max-h-48 space-y-1.5 overflow-auto text-[11px]">{iss.dups.length ? iss.dups.slice(0, 200).map((d) => <li key={d.key} className="rounded bg-black/30 p-1.5"><span className="text-amber-200">{d.why.map((w) => (t as Record<string, string>)["why_" + w]).join(" · ")}</span><ul className="break-all font-mono text-[#aab4d0]" dir="ltr">{d.urls.map((u) => <li key={u}>{u}</li>)}</ul></li>) : <li>{t.none}</li>}</ul>
                </details>
                <Section title={t.gaps} list={iss.gaps} test="mr-gaps" />
                <Section title={t.long} list={iss.long} test="mr-long" />
                <Section title={t.mixed} list={iss.hosts.length > 1 || iss.protocols.length > 1 ? [...iss.hosts, ...iss.protocols.map((p) => p + "://")] : []} test="mr-mixed" />
              </div>
            </section>
          ) : null}
          {data ? (
            <section className={card}>
              <h2 className="text-sm font-semibold">{t.html}</h2>
              <p className="mb-2 text-[11px] text-[#7d89a8]">{t.htmlHint}</p>
              <input className="mb-1.5 h-9 w-full rounded-lg border border-white/10 bg-black/30 px-2 text-[12px] outline-none" placeholder={t.pageUrl} value={page} onChange={(e) => setPage(e.target.value)} dir="ltr" data-testid="mr-page" />
              <textarea className="h-20 w-full rounded-lg border border-white/10 bg-black/30 p-2 font-mono text-[11px] outline-none" placeholder={t.htmlPh} value={html} onChange={(e) => setHtml(e.target.value)} dir="ltr" data-testid="mr-html" />
              <button className={btn + " mt-1.5"} onClick={addRelations} data-testid="mr-addlinks">{t.addLinks}</button> <span className="text-[11px] text-[#7d89a8]" data-testid="mr-relcount">{rel.length} {t.links}</span>
            </section>
          ) : null}
        </aside>

        <section className="relative min-w-0 flex-1 overflow-hidden rounded-2xl border border-white/10 bg-[#141a29] lg:sticky lg:top-20 lg:self-start">
          <div className="flex flex-wrap items-center gap-1.5 border-b border-white/[0.07] bg-[#171e30] p-2">
            <label className="flex h-9 w-full min-w-0 items-center gap-1.5 rounded-lg border border-white/10 bg-black/25 px-2 sm:w-auto sm:flex-1"><Search className="size-4 text-[#7d89a8]" /><input className="min-w-0 flex-1 bg-transparent text-[13px] outline-none" placeholder={t.search} value={q} onChange={(e) => setQ(e.target.value)} data-testid="mr-search" /></label>
            <button className={btn} onClick={() => { setClosed(new Set()); setTimeout(fit, 30); }} disabled={!data} data-testid="mr-expand">{t.expand}</button>
            <button className={btn} onClick={() => { const c = new Set<string>(); data?.roots.forEach((r) => r.children.forEach((n) => n.children.length && c.add(n.id))); setClosed(c); setTimeout(fit, 30); }} disabled={!data}>{t.collapse}</button>
            <button className={btn} onClick={exportJson} disabled={!data} data-testid="mr-json"><Download className="size-4" /> JSON</button>
            <button className={btn} onClick={() => dl(new Blob([svgText()], { type: "image/svg+xml" }), "site-mirror.svg")} disabled={!data} data-testid="mr-svg"><Download className="size-4" /> SVG</button>
          </div>
          <div className="relative">
          <svg ref={svgRef} className="block h-[62vh] min-h-[380px] w-full touch-none select-none lg:h-[calc(100vh-230px)]" viewBox={`${view.x} ${view.y} ${(svgRef.current?.clientWidth ?? 900) / view.k} ${(svgRef.current?.clientHeight ?? 600) / view.k}`}
            onPointerDown={(e) => { const node = (e.target as Element).closest("[data-node]")?.getAttribute("data-node") ?? null; (e.currentTarget as Element).setPointerCapture(e.pointerId); drag.current = { sx: e.clientX, sy: e.clientY, ox: view.x, oy: view.y, moved: false, node }; }}
            onPointerMove={(e) => { const d = drag.current; if (!d) return; const dx = e.clientX - d.sx, dy = e.clientY - d.sy; if (!d.moved && Math.hypot(dx, dy) < 5) return; d.moved = true; setView((v) => ({ ...v, x: d.ox - dx / v.k, y: d.oy - dy / v.k })); }}
            onPointerUp={() => { const d = drag.current; drag.current = null; if (d && !d.moved) { const p = d.node ? pos.get(d.node) : null; if (p) toggle(p.n); else setSel(null); } }}
            data-testid="mr-canvas">
            <defs><pattern id="mrdots" width="24" height="24" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="#232b40" /></pattern></defs>
            <rect data-noexport x={view.x - 20000} y={view.y - 20000} width={60000} height={60000} fill="url(#mrdots)" />
            {placed.map((p) => p.parent ? <path key={"l" + p.n.id} d={`M${p.parent.x + W},${p.parent.y + H / 2} C${p.parent.x + W + 40},${p.parent.y + H / 2} ${p.x - 40},${p.y + H / 2} ${p.x},${p.y + H / 2}`} fill="none" stroke={p.n.missing ? "#566080" : TYPE_COLORS[p.n.type]} strokeWidth="1.6" strokeDasharray={p.n.missing ? "5 4" : undefined} opacity="0.85" /> : null)}
            {rel.map(([a, b], i) => { const p = pos.get(a), q2 = pos.get(b); if (!p || !q2) return null; return <path key={"r" + i} d={`M${p.x + W / 2},${p.y + H} C${p.x + W / 2},${p.y + H + 80} ${q2.x + W / 2},${q2.y - 80} ${q2.x + W / 2},${q2.y}`} fill="none" stroke="#22d3ee" strokeWidth="1.2" strokeDasharray="3 4" opacity="0.7" data-testid="mr-rel" />; })}
            {placed.map((p) => {
              const col = p.n.missing && p.n.depth > 0 ? "#566080" : TYPE_COLORS[p.n.type], hasKids = p.n.children.length > 0, isClosed = closed.has(p.n.id), f = flagged.get(p.n.id), on = sel?.id === p.n.id;
              const ql = q.trim().toLowerCase(), m = ql && (p.n.name.toLowerCase().includes(ql) || p.n.path.includes(ql));
              return (
                <g key={p.n.id} transform={`translate(${p.x},${p.y})`} data-node={p.n.id} data-x={p.x} data-y={p.y} className="cursor-pointer" data-testid="mr-node">
                  <rect width={W} height={H} rx="5" fill={m ? "#2a2040" : "#1a2133"} stroke={on ? "#fff" : col} strokeWidth={on ? 2 : 1.4} strokeDasharray={p.n.missing && p.n.depth > 0 ? "4 3" : undefined} />
                  <circle cx="0" cy={H / 2} r="3.5" fill={col} /><circle cx={W} cy={H / 2} r="3.5" fill={hasKids ? col : "#2a3350"} />
                  <text x="10" y="18" fontSize="12" fontWeight="600" fill="#eef2ff" fontFamily="system-ui">{p.n.name.length > 24 ? p.n.name.slice(0, 23) + "…" : p.n.name}</text>
                  <text x="10" y="33" fontSize="10" fill={col} fontFamily="system-ui">{p.n.missing && p.n.depth > 0 ? t.t_gap : (t as Record<string, string>)["t_" + p.n.type]}{hasKids ? ` · ${p.n.count} ${t.pages}` : ""}</text>
                  {f ? <circle cx={W - 10} cy="10" r="4" fill="#f59e0b"><title>{f.join(", ")}</title></circle> : null}
                  {hasKids ? <text x={W - 14} y={H - 9} fontSize="13" fill="#9aa6c4" fontFamily="monospace">{isClosed ? "+" : "−"}</text> : null}
                </g>
              );
            })}
            {!data ? <text x="20" y="40" fill="#7d89a8" fontSize="15" fontFamily="system-ui">{t.empty}</text> : null}
          </svg>
          <div className="absolute start-2 top-2 max-w-[190px] rounded-xl border border-white/10 bg-[#1a2133]/95 p-2 text-[11px] shadow-xl" data-testid="mr-legend">
            <button className="flex items-center gap-1 font-semibold" onClick={() => setLegend((v) => !v)} aria-expanded={legend} data-testid="mr-legend-toggle"><Layers className="size-3.5" /> {t.legend}</button>
            <ul className={(legend ? "" : "hidden ") + "mt-1 space-y-0.5"}>{types.map((ty) => <li key={ty} className="flex items-center gap-1.5"><span className="size-2.5 rounded-full" style={{ background: TYPE_COLORS[ty] }} />{(t as Record<string, string>)["t_" + ty]}</li>)}<li className="flex items-center gap-1.5"><span className="size-2.5 rounded-full border border-dashed border-[#8a94b8]" />{t.t_gap}</li></ul>
          </div>
          <div className="absolute bottom-2 start-2 flex flex-col gap-1">
            <button className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#1a2133]" onClick={() => zoom(1.2)} aria-label="+" data-testid="mr-zin"><Plus className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#1a2133]" onClick={() => zoom(1 / 1.2)} aria-label="-"><Minus className="size-4" /></button>
            <button className="grid size-9 place-items-center rounded-full border border-white/10 bg-[#1a2133]" onClick={fit} aria-label={t.fit} title={t.fit}><Maximize className="size-4" /></button>
          </div>
          {sel ? (
            <div className="absolute bottom-2 end-2 max-w-[min(360px,80%)] rounded-xl border border-white/10 bg-[#1a2133]/95 p-2.5 text-[12px] shadow-xl" data-testid="mr-detail">
              <b className="block break-all">{sel.host}{sel.path}</b>
              <span style={{ color: TYPE_COLORS[sel.type] }}>{sel.missing && sel.depth > 0 ? t.t_gap : (t as Record<string, string>)["t_" + sel.type]}</span> · {sel.children.length} {t.children} · {sel.count} {t.pages}
              {flagged.get(sel.id) ? <span className="ms-1 text-amber-300">⚠ {flagged.get(sel.id)!.join(", ")}</span> : null}
              {sel.url ? <div className="mt-1.5 flex flex-wrap gap-2"><a className="text-[#8aa2ff] underline" href={sel.url} target="_blank" rel="noreferrer noopener">{t.open}</a><a className="inline-flex items-center gap-1 text-[#8aa2ff] underline" href={localeHref(lang, "/doctor") + "?url=" + encodeURIComponent(sel.url)}><Stethoscope className="size-3.5" />{t.doctor}</a></div> : null}
            </div>
          ) : null}
          {q && data ? <div className="absolute end-2 top-2 rounded-lg bg-black/60 px-2 py-1 text-[11px]">{placed.filter((p) => p.n.name.toLowerCase().includes(q.toLowerCase()) || p.n.path.includes(q.toLowerCase())).length} {t.matches}</div> : null}
        </div>
        </section>
      </div>
      <footer className="mt-6 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
