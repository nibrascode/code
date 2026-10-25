/** Nibras Shortcuts: learn and practise keyboard shortcuts. Everything stays in localStorage. */
import { useEffect, useMemo, useRef, useState } from "react";
import { BookOpen, Check, Download, Keyboard, Play, Plus, Square, Trash2, Upload, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { SL } from "./i18n";
import { APPS, RESERVED, SHORTCUTS, type App, type Shortcut } from "./data";
import { LAYOUT, isModCode, label, normStep, stepFromEvent, steps, type Platform } from "./keys";

const STORE = "nibras-shortcuts-v1";
const DAY = 864e5;
const INTERVALS = [0, 0.02 * DAY, DAY, 3 * DAY, 7 * DAY, 21 * DAY];
type SR = { box: number; due: number; ok: number; n: number; ms: number };
type Col = { id: string; name: string; ids: string[]; custom: Shortcut[] };
type Store = { sr: Record<string, SR>; cols: Col[]; platform?: Platform };
const load = (): Store => { try { return { sr: {}, cols: [], ...JSON.parse(localStorage.getItem(STORE) || "{}") }; } catch { return { sr: {}, cols: [] }; } };
const rid = () => Math.random().toString(36).slice(2, 9);
const keysFor = (s: Shortcut, p: Platform) => (p === "mac" ? s.mac ?? s.win : s.win ?? s.mac) ?? "";
const only = (s: Shortcut) => (!s.mac ? "win" : !s.win ? "mac" : null);

function Combo({ combo, p }: { combo: string; p: Platform }) {
  return <span className="inline-flex flex-wrap items-center gap-1" dir="ltr">{steps(combo).map((st, i) => (
    <span key={i} className="inline-flex items-center gap-0.5">{i ? <span className="mx-0.5 text-[10px] text-[#7d89a8]">then</span> : null}{st.split("+").map((k, j) => <kbd key={j} className="rounded-md border border-white/15 border-b-2 bg-[#1b2140] px-1.5 py-0.5 font-mono text-[11px] text-[#e3e8ff]">{label(k, p)}</kbd>)}</span>
  ))}</span>;
}

export function ShortcutsPage() {
  const { lang } = useI18n();
  const t = SL[lang] ?? SL.en;
  const [store, setStore] = useState<Store>({ sr: {}, cols: [] });
  const [ready, setReady] = useState(false);
  const [p, setP] = useState<Platform>("win");
  const [app, setApp] = useState<App | "all" | `col:${string}`>("vscode");
  const [cats, setCats] = useState<Set<string>>(new Set());
  const [q, setQ] = useState("");
  const [keyF, setKeyF] = useState<string | null>(null);
  const [run, setRun] = useState<null | { queue: string[]; i: number; step: number; start: number; fb: null | { ok: boolean; pressed: string }; ok: number; n: number; ms: number }>(null);
  const [osk, setOsk] = useState(false);
  const [mods, setMods] = useState<Set<string>>(new Set());
  const [colMenu, setColMenu] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const lone = useRef<string | null>(null);

  useEffect(() => {
    const s = load(); setStore(s);
    setP(s.platform ?? (/Mac|iPhone|iPad/.test(navigator.platform || navigator.userAgent) ? "mac" : "win"));
    setOsk(matchMedia("(pointer: coarse)").matches);
    setReady(true);
  }, []);
  useEffect(() => { if (ready) try { localStorage.setItem(STORE, JSON.stringify({ ...store, platform: p })); } catch { /* full */ } }, [store, p, ready]);
  useEffect(() => { if (!note) return; const id = setTimeout(() => setNote(""), 2500); return () => clearTimeout(id); }, [note]);

  const allItems = useMemo(() => [...SHORTCUTS, ...store.cols.flatMap((c) => c.custom)], [store.cols]);
  const byId = useMemo(() => new Map(allItems.map((s) => [s.id, s])), [allItems]);
  const base = useMemo(() => {
    if (app === "all") return SHORTCUTS;
    if (app.startsWith("col:")) { const c = store.cols.find((x) => "col:" + x.id === app); return c ? [...c.ids.map((id) => byId.get(id)).filter(Boolean) as Shortcut[], ...c.custom] : []; }
    return SHORTCUTS.filter((s) => s.app === app);
  }, [app, store.cols, byId]);
  const catCounts = useMemo(() => { const m = new Map<string, number>(); base.forEach((s) => m.set(s.cat, (m.get(s.cat) ?? 0) + 1)); return [...m].sort((a, b) => a[0].localeCompare(b[0])); }, [base]);
  const list = useMemo(() => base.filter((s) => (!cats.size || cats.has(s.cat)) && (!q || (s.desc + " " + s.cat + " " + keysFor(s, p)).toLowerCase().includes(q.toLowerCase())) && (!keyF || steps(keysFor(s, p)).some((st) => st.split("+").includes(keyF)))), [base, cats, q, keyF, p]);
  const heat = useMemo(() => { const m = new Map<string, number>(); base.filter((s) => (!cats.size || cats.has(s.cat))).forEach((s) => new Set(steps(keysFor(s, p)).flatMap((st) => st.split("+"))).forEach((k) => m.set(k, (m.get(k) ?? 0) + 1))); return m; }, [base, cats, p]);
  const maxHeat = Math.max(1, ...heat.values());
  const sr = (id: string): SR => store.sr[id] ?? { box: 0, due: 0, ok: 0, n: 0, ms: 0 };
  const masteredN = base.filter((s) => sr(s.id).box >= 3).length;
  const dueN = list.filter((s) => sr(s.id).due <= Date.now()).length;

  const start = (ids: string[]) => { if (!ids.length) return; setRun({ queue: ids, i: 0, step: 0, start: performance.now(), fb: null, ok: 0, n: 0, ms: 0 }); setMods(new Set()); scrollTo({ top: 0, behavior: "smooth" }); };
  const practiceAll = () => start([...list].sort(() => Math.random() - 0.5).sort((a, b) => sr(a.id).due - sr(b.id).due).map((s) => s.id));
  const practiceDue = () => start(list.filter((s) => sr(s.id).due <= Date.now()).sort((a, b) => sr(a.id).box - sr(b.id).box).map((s) => s.id));
  const cur = run ? byId.get(run.queue[run.i]) : undefined;
  const expected = cur ? steps(keysFor(cur, p)) : [];

  const grade = (ok: boolean, pressed: string) => setRun((r) => {
    if (!r || r.fb) return r;
    const ms = performance.now() - r.start, id = r.queue[r.i];
    setStore((s) => { const o = s.sr[id] ?? { box: 0, due: 0, ok: 0, n: 0, ms: 0 }; const box = ok ? Math.min(5, o.box + 1) : 0; return { ...s, sr: { ...s.sr, [id]: { box, due: Date.now() + INTERVALS[box], ok: o.ok + (ok ? 1 : 0), n: o.n + 1, ms: Math.round(o.n ? (o.ms * o.n + ms) / (o.n + 1) : ms) } } }; });
    return { ...r, fb: { ok, pressed }, ok: r.ok + (ok ? 1 : 0), n: r.n + 1, ms: r.ms + ms };
  });
  const next = () => setRun((r) => (r ? { ...r, i: r.i + 1, step: 0, fb: null, start: performance.now() } : r));
  const submit = (st: string) => {
    if (!run || run.fb || !cur) return;
    const want = expected[run.step];
    if (normStep(st) === want) { if (run.step + 1 >= expected.length) grade(true, keysFor(cur, p)); else setRun({ ...run, step: run.step + 1 }); }
    else grade(false, [...expected.slice(0, run.step), normStep(st)].join(" "));
  };
  useEffect(() => { if (run?.fb?.ok) { const id = setTimeout(next, 850); return () => clearTimeout(id); } }, [run?.fb]); // eslint-disable-line react-hooks/exhaustive-deps

  // Physical keyboard capture while practising.
  useEffect(() => {
    if (!run || run.i >= run.queue.length) return;
    const down = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).closest("input,textarea,select")) return;
      if (run.fb) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); next(); } return; }
      e.preventDefault(); e.stopPropagation();
      if (isModCode(e.code)) { lone.current = e.code.startsWith("Shift") && !e.ctrlKey && !e.metaKey && !e.altKey ? "Shift" : null; return; }
      lone.current = null;
      const st = stepFromEvent(e); if (st) submit(st);
    };
    const up = (e: KeyboardEvent) => { if (lone.current && isModCode(e.code)) { const s = lone.current; lone.current = null; submit(s); } };
    addEventListener("keydown", down, true); addEventListener("keyup", up, true);
    return () => { removeEventListener("keydown", down, true); removeEventListener("keyup", up, true); };
  });
  const tapKey = (id: string) => {
    if (!run) { setKeyF(keyF === id ? null : id); return; }
    if (id === "Caps") return;
    if (["Ctrl", "Meta", "Alt", "Shift"].includes(id)) {
      if (id === "Shift" && mods.size === 1 && mods.has("Shift") && expected[run.step] === "Shift") { setMods(new Set()); submit("Shift"); return; }
      setMods((m) => { const x = new Set(m); if (x.has(id)) x.delete(id); else x.add(id); return x; }); return;
    }
    submit([...mods, id].join("+")); setMods(new Set());
  };

  const saveCols = (cols: Col[]) => setStore((s) => ({ ...s, cols }));
  const newCol = (withId?: string) => { const name = prompt(t.colName, `${t.collections} ${store.cols.length + 1}`); if (!name) return; const c: Col = { id: rid(), name: name.slice(0, 60), ids: withId ? [withId] : [], custom: [] }; saveCols([...store.cols, c]); setColMenu(null); if (!withId) setApp(`col:${c.id}`); };
  const addTo = (cid: string, sid: string) => { saveCols(store.cols.map((c) => (c.id === cid && !c.ids.includes(sid) ? { ...c, ids: [...c.ids, sid] } : c))); setColMenu(null); setNote("✓"); };
  const curCol = app.startsWith("col:") ? store.cols.find((c) => "col:" + c.id === app) : undefined;
  const removeFrom = (sid: string) => curCol && saveCols(store.cols.map((c) => (c.id === curCol.id ? { ...c, ids: c.ids.filter((x) => x !== sid), custom: c.custom.filter((x) => x.id !== sid) } : c)));
  const exportCol = () => {
    const items = curCol ? base : list;
    const data = { format: "nibras-shortcuts", version: 1, name: curCol?.name ?? (APPS.find((a) => a.id === app)?.name ?? "Shortcuts"), shortcuts: items.map((s) => ({ app: s.app, cat: s.cat, desc: s.desc, ...(s.win ? { win: s.win } : {}), ...(s.mac ? { mac: s.mac } : {}) })) };
    const u = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: "application/json" })); const a = document.createElement("a"); a.href = u; a.download = (data.name || "shortcuts").replace(/[^\w-]+/g, "-") + ".json"; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000);
  };
  const importCol = async (f?: File) => {
    if (!f) return;
    try {
      const j = JSON.parse(await f.text());
      if (j.format !== "nibras-shortcuts" || !Array.isArray(j.shortcuts)) throw 0;
      const ids: string[] = [], custom: Shortcut[] = [];
      for (const x of j.shortcuts.slice(0, 1000)) {
        if (typeof x?.desc !== "string" || (typeof x.win !== "string" && typeof x.mac !== "string")) continue;
        const known = SHORTCUTS.find((s) => s.app === x.app && s.desc === x.desc && (s.win ?? "") === (x.win ?? "") && (s.mac ?? "") === (x.mac ?? ""));
        if (known) ids.push(known.id);
        else custom.push({ id: "c-" + rid(), app: APPS.some((a) => a.id === x.app) ? x.app : "vscode", cat: String(x.cat ?? "Custom").slice(0, 40), desc: x.desc.slice(0, 120), ...(typeof x.win === "string" ? { win: x.win.slice(0, 60) } : {}), ...(typeof x.mac === "string" ? { mac: x.mac.slice(0, 60) } : {}) });
      }
      if (!ids.length && !custom.length) throw 0;
      const c: Col = { id: rid(), name: String(j.name ?? "Imported").slice(0, 60), ids, custom };
      saveCols([...store.cols, c]); setApp(`col:${c.id}`); setNote(`${t.imported}: ${ids.length + custom.length}`);
    } catch { setNote(t.importErr); }
  };

  const done = run && run.i >= run.queue.length;
  const reserved = cur ? RESERVED.has(keysFor(cur, p).replace(/\bMeta\b/, p === "mac" ? "Cmd" : "Win")) || RESERVED.has(keysFor(cur, p)) : false;
  const chip = (on: boolean) => "inline-flex h-8 items-center gap-1 rounded-lg border px-2.5 text-[12.5px] " + (on ? "border-[#8b5cf6] bg-[#8b5cf6]/25 text-white" : "border-white/10 bg-white/[0.03] text-[#c8d1ea] hover:border-white/30");

  const keyboard = (
    <div className="overflow-x-auto pb-1" dir="ltr">
      <div className="mx-auto flex w-max flex-col gap-1">
        {LAYOUT.map((r, i) => (
          <div key={i} className="flex gap-1">
            {r.map((k, j) => {
              const h = heat.get(k.id) ?? 0, a = h / maxHeat, active = run ? mods.has(k.id) : keyF === k.id;
              const want = run && osk && run.fb && !run.fb.ok && expected.some((st) => st.split("+").includes(k.id));
              return (
                <button key={j} onClick={() => tapKey(k.id)} style={{ width: (k.w ?? 1) * 38 + ((k.w ?? 1) - 1) * 4, background: run ? undefined : h ? `rgba(139,92,246,${0.18 + a * 0.75})` : undefined }}
                  className={"h-9 shrink-0 rounded-md border text-[10.5px] font-medium leading-tight " + (active ? "border-white bg-[#8b5cf6] text-white" : want ? "border-emerald-300 bg-emerald-500/30" : "border-white/10 bg-[#1a1f36] text-[#cfd6f5] hover:border-white/40")}
                  title={h ? `${h}` : undefined} data-key={k.id} data-testid="sc-key">
                  {k.id === "Meta" ? (p === "mac" ? "⌘" : "⊞") : k.id === "Alt" && p === "mac" ? "⌥" : label(k.id, p).replace(/^[⌘⌥⇧⌃⌫↩] /, "")}
                  {!run && h ? <span className="block text-[9px] opacity-70">{h}</span> : null}
                </button>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <main className="mx-auto w-full max-w-[1400px] px-3 pt-20 pb-12 md:px-5 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="shortcuts">
      <a className="text-xs text-[#8aa2ff] hover:underline" href={localeHref(lang, "/learn")}>← {t.back}</a>
      <header className="mb-3 flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="flex items-center gap-2 font-display text-2xl font-bold md:text-3xl"><Keyboard className="size-7 text-[#a78bfa]" /> {t.title}</h1>
          <p className="max-w-3xl text-sm text-[#9aa6c4]">{t.lead}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-lg bg-emerald-500/15 px-2.5 py-1.5 text-[13px]" data-testid="sc-mastered">{t.mastered}: <b className="text-emerald-300">{masteredN}</b> / {base.length}</span>
          <span className="text-[12px] text-[#9aa6c4]">{t.platform}</span>
          <div className="inline-flex rounded-lg border border-white/10 p-0.5" role="group">
            <button className={"h-8 rounded-md px-3 text-[12.5px] " + (p === "win" ? "bg-[#2f6bff] text-white" : "")} onClick={() => setP("win")} data-testid="sc-win">Ctrl · Windows</button>
            <button className={"h-8 rounded-md px-3 text-[12.5px] " + (p === "mac" ? "bg-[#2f6bff] text-white" : "")} onClick={() => setP("mac")} data-testid="sc-mac">⌘ Cmd · macOS</button>
          </div>
        </div>
      </header>

      <div className="mb-3 flex flex-wrap gap-1.5" data-testid="sc-apps">
        {APPS.map((a) => <button key={a.id} className={chip(app === a.id)} onClick={() => { setApp(a.id); setCats(new Set()); setKeyF(null); }} data-testid={`sc-app-${a.id}`}>{a.name}</button>)}
        <button className={chip(app === "all")} onClick={() => { setApp("all"); setCats(new Set()); }}>{t.all}</button>
        {store.cols.map((c) => <button key={c.id} className={chip(app === "col:" + c.id)} onClick={() => { setApp(`col:${c.id}`); setCats(new Set()); }} data-testid="sc-col"><BookOpen className="size-3.5" />{c.name} <span className="opacity-60">{c.ids.length + c.custom.length}</span></button>)}
        <button className={chip(false)} onClick={() => newCol()} data-testid="sc-newcol"><Plus className="size-3.5" />{t.newCol}</button>
      </div>

      <section className="mb-3 rounded-2xl border border-white/10 bg-[#11142a] p-3" data-testid="sc-board">
        {run ? (
          <div className="mb-3" data-testid="sc-practice" aria-live="polite">
            {done ? (
              <div className="text-center">
                <p className="text-lg font-semibold">{t.finish}</p>
                <p className="mt-1 text-sm text-[#c8d1ea]" data-testid="sc-summary">{t.acc}: <b>{run.n ? Math.round((run.ok / run.n) * 100) : 0}%</b> · {t.avg}: <b>{run.n ? (run.ms / run.n / 1000).toFixed(1) : 0}s</b> · {run.ok}/{run.n}</p>
                <button className="mt-3 h-9 rounded-lg bg-[#2f6bff] px-4 font-semibold text-white" onClick={() => setRun(null)}>{t.done}</button>
              </div>
            ) : cur ? (
              <>
                <div className="flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#9aa6c4]">
                  <span>{t.practice} {run.i + 1} / {run.queue.length} · {APPS.find((a) => a.id === cur.app)?.name} · {cur.cat}</span>
                  <span>{t.acc}: {run.n ? Math.round((run.ok / run.n) * 100) : 100}% · {t.avg}: {run.n ? (run.ms / run.n / 1000).toFixed(1) : "–"}s</span>
                  <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 px-2 py-1" onClick={() => setRun(null)} data-testid="sc-stop"><Square className="size-3.5" /> {t.stop}</button>
                </div>
                <p className="mt-2 text-[13px] text-[#a78bfa]">{t.scenario}: {t.press}</p>
                <p className="text-2xl font-bold" data-testid="sc-question">{cur.desc}</p>
                {expected.length > 1 ? <p className="text-xs text-[#9aa6c4]">{t.step.replace("{i}", String(run.step + 1)).replace("{n}", String(expected.length))}</p> : null}
                {reserved && !osk ? <p className="mt-1 text-xs text-amber-300">{t.reserved}</p> : null}
                {run.fb ? (
                  <div className={"mt-2 flex flex-wrap items-center gap-2 rounded-xl px-3 py-2 text-sm " + (run.fb.ok ? "bg-emerald-500/15 text-emerald-200" : "bg-red-500/10 text-red-200")} data-testid="sc-feedback">
                    {run.fb.ok ? <><Check className="size-4" /> {t.correct} <Combo combo={keysFor(cur, p)} p={p} /></> : <><X className="size-4" /> {t.wrong} <Combo combo={keysFor(cur, p)} p={p} /> <span className="opacity-70">· {t.pressed}: {run.fb.pressed.replace(/Meta/g, p === "mac" ? "Cmd" : "Win")}</span><button className="ms-auto h-8 rounded-lg bg-[#2f6bff] px-3 text-white" onClick={next} data-testid="sc-next">{t.next}</button></>}
                  </div>
                ) : <div className="mt-2 flex items-center gap-2"><span className="text-xs text-[#7d89a8]">{mods.size ? [...mods].map((m) => label(m, p)).join(" + ") + " + …" : ""}</span><button className="ms-auto text-xs text-[#8aa2ff] underline" onClick={() => grade(false, "—")} data-testid="sc-skip">{t.skip}</button></div>}
              </>
            ) : null}
          </div>
        ) : (
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h2 className="text-sm font-semibold">{t.heat}</h2>
            <p className="text-[11.5px] text-[#7d89a8]">{t.heatHint}</p>
          </div>
        )}
        {!run || osk ? keyboard : <p className="text-center text-xs text-[#7d89a8]">⌨ <button className="underline" onClick={() => setOsk(true)} data-testid="sc-osk">{t.onscreen}</button></p>}
        {run && osk ? <p className="mt-1 text-center text-[11px] text-[#7d89a8]"><button className="underline" onClick={() => setMods(new Set())}>{t.reset}</button> · <button className="underline" onClick={() => setOsk(false)}>⌨ ✕</button></p> : null}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#8b5cf6] px-3 text-[13px] font-semibold text-white hover:bg-[#9b6dff] disabled:opacity-40" onClick={practiceAll} disabled={!list.length} data-testid="sc-practice-all"><Play className="size-4" /> {t.practiceAll} ({list.length})</button>
          <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-white/15 px-3 text-[13px] disabled:opacity-40" onClick={practiceDue} disabled={!dueN} data-testid="sc-practice-due">{t.practiceDue} ({dueN})</button>
          {keyF ? <button className={chip(true)} onClick={() => setKeyF(null)}>{t.keyFilter}: {label(keyF, p)} ✕</button> : null}
          <span className="text-[11px] text-[#7d89a8]">{t.levels}</span>
          {note ? <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-xs" role="status">{note}</span> : null}
        </div>
      </section>

      <div className="flex flex-col gap-3 lg:flex-row-reverse">
        <aside className="rounded-2xl border border-white/10 bg-[#11142a] p-3 lg:w-64 lg:shrink-0">
          <div className="mb-2 flex items-center justify-between"><h2 className="text-sm font-semibold">{t.category}</h2>{cats.size ? <button className="text-xs text-[#8aa2ff]" onClick={() => setCats(new Set())}>{t.clear}</button> : null}</div>
          <ul className="flex flex-wrap gap-1 lg:block lg:space-y-0.5" data-testid="sc-cats">
            {catCounts.map(([c, n]) => <li key={c}><button className={"flex w-full items-center justify-between gap-2 rounded-lg px-2 py-1 text-start text-[12.5px] " + (cats.has(c) ? "bg-[#8b5cf6]/25 text-white" : "hover:bg-white/5")} onClick={() => setCats((s) => { const x = new Set(s); if (x.has(c)) x.delete(c); else x.add(c); return x; })}>{c}<span className="rounded bg-white/10 px-1.5 text-[11px]">{n}</span></button></li>)}
          </ul>
          <h2 className="mb-1 mt-4 text-sm font-semibold">{t.collections}</h2>
          <div className="flex flex-wrap gap-1.5">
            <button className={chip(false)} onClick={exportCol} data-testid="sc-export"><Download className="size-3.5" />{t.exportJ}</button>
            <label className={chip(false) + " cursor-pointer"}><Upload className="size-3.5" />{t.importJ}<input type="file" accept="application/json,.json" className="sr-only" onChange={(e) => { void importCol(e.target.files?.[0]); e.target.value = ""; }} data-testid="sc-import" /></label>
            {curCol ? <button className={chip(false) + " text-red-300"} onClick={() => { if (confirm(t.confirmDel)) { saveCols(store.cols.filter((c) => c.id !== curCol.id)); setApp("vscode"); } }} data-testid="sc-delcol"><Trash2 className="size-3.5" />{t.delCol}</button> : null}
          </div>
          <p className="mt-3 text-[11px] text-[#7d89a8]">{t.local}</p>
        </aside>
        <section className="min-w-0 flex-1 rounded-2xl border border-white/10 bg-[#11142a] p-3">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <input className="h-9 min-w-0 flex-1 rounded-lg border border-white/10 bg-black/25 px-3 text-[13px] outline-none focus:border-[#8b5cf6]" placeholder={t.search} value={q} onChange={(e) => setQ(e.target.value)} data-testid="sc-search" />
            <span className="text-xs text-[#9aa6c4]" data-testid="sc-count">{t.shown.replace("{n}", String(list.length))}</span>
          </div>
          {list.length ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-[12.5px]" data-testid="sc-table">
                <thead><tr className="border-b border-white/10 text-start text-[11px] uppercase tracking-wider text-[#7d89a8]"><th className="py-1.5 text-start">{t.desc}</th><th className="text-start">{t.keys}</th><th className="text-start">{t.app}</th><th className="text-start">{t.category}</th><th className="text-start">{t.count}</th><th className="text-end">{t.actions}</th></tr></thead>
                <tbody>
                  {list.map((s) => { const r = sr(s.id), o = only(s); return (
                    <tr key={s.id} className="border-b border-white/[0.05] hover:bg-white/[0.02]" data-testid="sc-row">
                      <td className="py-1.5 pe-2">{s.desc}{o && o !== p ? <span className="ms-1 rounded bg-amber-500/15 px-1 text-[10px] text-amber-300">{o === "win" ? t.winOnly : t.macOnly}</span> : null}</td>
                      <td className="pe-2"><Combo combo={keysFor(s, p)} p={o ?? p} /></td>
                      <td className="pe-2 text-[#9aa6c4]">{APPS.find((a) => a.id === s.app)?.name}</td>
                      <td className="pe-2 text-[#9aa6c4]">{s.cat}</td>
                      <td><span className={"inline-block min-w-7 rounded px-1.5 text-center font-semibold " + (r.box >= 3 ? "bg-emerald-500/80 text-black" : r.box ? "bg-amber-400/70 text-black" : "bg-white/10")} title={r.n ? `${r.ok}/${r.n} · ${(r.ms / 1000).toFixed(1)}s` : ""}>{r.box}</span></td>
                      <td className="relative text-end whitespace-nowrap">
                        <button className="rounded p-1.5 text-[#a78bfa] hover:bg-white/10" onClick={() => start([s.id])} title={t.practice} aria-label={t.practice} data-testid="sc-one"><Play className="size-3.5" /></button>
                        {curCol ? <button className="rounded p-1.5 text-red-300 hover:bg-white/10" onClick={() => removeFrom(s.id)} title={t.remove} aria-label={t.remove}><X className="size-3.5" /></button>
                          : <button className="rounded p-1.5 text-[#8aa2ff] hover:bg-white/10" onClick={() => (store.cols.length ? setColMenu(colMenu === s.id ? null : s.id) : newCol(s.id))} title={t.add} aria-label={t.add} data-testid="sc-add"><Plus className="size-3.5" /></button>}
                        {colMenu === s.id ? <div className="absolute end-0 top-full z-20 w-48 rounded-xl border border-white/10 bg-[#1a1f36] p-1 text-start shadow-xl">{store.cols.map((c) => <button key={c.id} className="block w-full truncate rounded px-2 py-1.5 text-start hover:bg-white/5" onClick={() => addTo(c.id, s.id)} data-testid="sc-addto">{c.name}</button>)}<button className="block w-full rounded px-2 py-1.5 text-start text-[#8aa2ff] hover:bg-white/5" onClick={() => newCol(s.id)}>+ {t.newCol}</button></div> : null}
                      </td>
                    </tr>
                  ); })}
                </tbody>
              </table>
            </div>
          ) : <p className="p-4 text-center text-sm text-[#7d89a8]">{t.none}</p>}
        </section>
      </div>
      <footer className="mt-6 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
