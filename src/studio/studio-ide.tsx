/** Nibras Studio full-screen IDE. Same project data as Workspace; everything runs in the browser. */
import { STUDIO_VERSION } from "./version";
import { LEGAL_LABEL } from "@/legal/tools-legal";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bell, BookOpen, ChevronDown, ChevronRight, Code2, Compass, Download, ExternalLink, Eye, FilePlus, FileText, Files, Folder, FolderOpen, GitBranch, Home,
  Lightbulb, Maximize2, Moon, Paperclip, PanelLeft, Pencil, Play, Plus, Rocket, Search, SearchCode, Send, Settings, Smartphone, Sparkles, SquareSplitHorizontal,
  Sun, Terminal, Trash2, Wand2, Wrench, X, LayoutGrid, Bot,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { toolsPath } from "@/lib/tools";
import { save } from "@/kit/shell";
import { WS } from "@/workspace/i18n";
import { buildPreview, devLink, filesToZip } from "@/workspace/files";
import { CodeEditor, langOf, type EditorApi } from "@/workspace/editor";
import { DEVICES, FileIcon, PAGE_TEMPLATE, cleanPath, safeName, tree, type Node } from "@/workspace/ide";
import type { Project } from "@/workspace/workspace";
import { SC, type StudioCopy } from "./studio-i18n";
import { SNIPPETS, analyze, explain, fixAll, ideas, insertSnippet, readme, type Finding } from "./assist";

type CodeFile = { name: string; content: string };
type Side = "files" | "search" | "git" | "settings";
type Pane = "files" | "code" | "preview" | "ai";
type Out =
  | { kind: "msg"; text: string }
  | { kind: "findings"; list: Finding[] }
  | { kind: "snippets" }
  | { kind: "explain"; title: string; items: { k: string; v: string }[] }
  | { kind: "ideas"; list: { text: string; snippet?: string }[] }
  | { kind: "hits"; text: string; hits: { file: string; line: number; text: string }[] };
type Snap = { id: string; at: number; msg: string; files: CodeFile[] };

const snapKey = (id: string) => `nibras-studio-snap-${id}`;
const loadSnaps = (id: string): Snap[] => { try { return JSON.parse(localStorage.getItem(snapKey(id)) || "[]"); } catch { return []; } };

export function StudioIDE({ p, update, onHome, onDelete }: { p: Project; update: (patch: Partial<Project>, act?: string) => void; onHome: () => void; onDelete: () => void }) {
  const { lang } = useI18n();
  const t: StudioCopy = SC[lang] ?? SC.en;
  const c = WS[lang] ?? WS.en;
  const file = p.files.find((f) => f.name === p.activeFile) ?? p.files[0];
  const [side, setSide] = useState<Side>("files");
  const [showSide, setShowSide] = useState(true);
  const [showRight, setShowRight] = useState(true);
  const [pane, setPane] = useState<Pane>("code");
  const [rtab, setRtab] = useState<"preview" | "console">("preview");
  const [open, setOpen] = useState<string[]>([file.name]);
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const [device, setDevice] = useState<string>("iphone");
  const [srcdoc, setSrcdoc] = useState(() => buildPreview(p.files));
  const [runId, setRunId] = useState(0);
  const [logs, setLogs] = useState<{ t: string; m: string }[]>([]);
  const [cursor, setCursor] = useState({ l: 1, c: 1 });
  const [out, setOut] = useState<Out | null>(null);
  const [cmd, setCmd] = useState("");
  const [query, setQuery] = useState("");
  const [light, setLight] = useState(false);
  const [menu, setMenu] = useState<null | "bell" | "user" | "publish" | "nav" | "model">(null);
  const [acts, setActs] = useState<{ at: number; text: string }[]>([]);
  const [snaps, setSnaps] = useState<Snap[]>(() => loadSnaps(p.id));
  const [snapMsg, setSnapMsg] = useState("");
  const [prefs, setPrefs] = useState(() => { try { return { size: 14, wrap: false, live: true, ...JSON.parse(localStorage.getItem("nibras-ide-prefs") || "{}") }; } catch { return { size: 14, wrap: false, live: true }; } });
  const frame = useRef<HTMLIFrameElement>(null);
  const stage = useRef<HTMLDivElement>(null);
  const shot = useRef<HTMLDivElement>(null);
  const api = useRef<EditorApi | null>(null);
  const attach = useRef<HTMLInputElement>(null);
  const [stageSize, setStageSize] = useState({ w: 360, h: 600 });
  const [widths, setWidths] = useState(() => { try { return { left: 208, right: 440, ...JSON.parse(localStorage.getItem("nibras-studio-widths") || "{}") }; } catch { return { left: 208, right: 440 }; } });
  useEffect(() => { try { localStorage.setItem("nibras-studio-widths", JSON.stringify(widths)); } catch { /* full */ } }, [widths]);
  const drag = (which: "left" | "right") => (e: React.PointerEvent) => {
    e.preventDefault();
    const x0 = e.clientX, w0 = widths[which];
    const move = (ev: PointerEvent) => {
      const dx = ev.clientX - x0;
      const max = which === "left" ? 420 : Math.min(760, innerWidth * 0.5);
      setWidths((w: { left: number; right: number }) => ({ ...w, [which]: Math.round(Math.max(which === "left" ? 160 : 320, Math.min(max, w0 + (which === "left" ? dx : -dx)))) }));
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); document.body.style.cursor = ""; };
    addEventListener("pointermove", move); addEventListener("pointerup", up); document.body.style.cursor = "col-resize";
  };
  const handle = (which: "left" | "right") => <div role="separator" aria-orientation="vertical" onPointerDown={drag(which)} onDoubleClick={() => setWidths((w: { left: number; right: number }) => ({ ...w, [which]: which === "left" ? 208 : 440 }))} className="group -mx-1.5 hidden w-3 shrink-0 cursor-col-resize items-center justify-center lg:flex" data-testid={`st-resize-${which}`}><span className="h-12 w-1 rounded-full bg-white/10 group-hover:bg-[#4f6bff]" /></div>;

  useEffect(() => { const o = document.body.style.overflow; document.body.style.overflow = "hidden"; return () => { document.body.style.overflow = o; }; }, []);
  const log = (text: string) => setActs((a) => [{ at: Date.now(), text }, ...a].slice(0, 30));
  const set = (patch: Partial<Project>, act?: string) => update(patch, act);
  useEffect(() => { try { localStorage.setItem("nibras-ide-prefs", JSON.stringify(prefs)); } catch { /* full */ } }, [prefs]);
  useEffect(() => { if (!open.includes(file.name)) setOpen((o) => [...o, file.name]); }, [file.name]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { setOpen((o) => { const n = o.filter((x) => p.files.some((f) => f.name === x)); return n.length ? n : [file.name]; }); }, [p.files]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const on = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow || !e.data?.__nw) return;
      setLogs((l) => [...l.slice(-199), { t: String(e.data.t), m: String(e.data.m) }]);
    };
    addEventListener("message", on);
    return () => removeEventListener("message", on);
  }, []);
  useEffect(() => {
    if (!prefs.live) return;
    const id = setTimeout(() => { setLogs([]); setSrcdoc(buildPreview(p.files)); setRunId((n) => n + 1); }, 700);
    return () => clearTimeout(id);
  }, [p.files, prefs.live]);
  useEffect(() => {
    const el = stage.current;
    if (!el || typeof ResizeObserver === "undefined") return;
    const ro = new ResizeObserver(([e]) => setStageSize({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(el);
    return () => ro.disconnect();
  }, [pane, showRight, rtab]);
  useEffect(() => {
    const close = (e: MouseEvent) => { if (!(e.target as HTMLElement).closest("[data-menu]")) setMenu(null); };
    addEventListener("mousedown", close);
    return () => removeEventListener("mousedown", close);
  }, []);

  const edit = (content: string) => set({ files: p.files.map((f) => (f.name === file.name ? { ...f, content } : f)) });
  const select = (name: string) => { set({ activeFile: name }); setPane("code"); };
  const run = () => { setLogs([]); setSrcdoc(buildPreview(p.files)); setRunId((n) => n + 1); setRtab("preview"); if (matchMedia("(max-width: 1023px)").matches) setPane("preview"); set({}, "act_run"); log(t.act_run); };
  const addFile = (base = "", given?: string) => {
    const n = cleanPath(given ?? prompt(c.fileName, base ? `${base}/new.js` : "page.html") ?? "");
    if (!n) return;
    if (p.files.some((f) => f.name === n)) return alert(c.exists);
    set({ files: [...p.files, { name: n, content: /\.html?$/i.test(n) ? PAGE_TEMPLATE(n.split("/").pop()!.replace(/\.html?$/i, "")) : "" }], activeFile: n });
    log(`${t.act_add}: ${n}`);
  };
  const rename = (name: string) => {
    const n = cleanPath(prompt(c.fileName, name) ?? "");
    if (!n || n === name) return;
    if (p.files.some((f) => f.name === n)) return alert(c.exists);
    setOpen((o) => o.map((x) => (x === name ? n : x)));
    set({ files: p.files.map((f) => (f.name === name ? { ...f, name: n } : f)), activeFile: p.activeFile === name ? n : p.activeFile });
  };
  const remove = (name: string) => {
    if (p.files.length < 2) return alert(c.keepOne);
    if (!confirm(`${c.del}: ${name}?`)) return;
    const rest = p.files.filter((f) => f.name !== name);
    set({ files: rest, activeFile: p.activeFile === name ? rest[0].name : p.activeFile });
  };
  const closeTab = (name: string) => { const rest = open.filter((x) => x !== name); if (!rest.length) return; setOpen(rest); if (name === file.name) set({ activeFile: rest[rest.length - 1] }); };
  const zip = async () => { setMenu(null); save(`${safeName(p.name)}.zip`, await filesToZip(p.files)); set({}, "act_zip"); log(t.act_zip); };
  const openDev = async () => { setMenu(null); const url = await devLink(p.files); if (!url) return setOut({ kind: "msg", text: c.tooBig }); window.open(url, "_blank", "noopener"); setOut({ kind: "msg", text: c.devNote }); set({}, "act_run"); };
  const toApk = async () => {
    setMenu(null);
    if (!p.files.some((f) => f.name.toLowerCase() === "index.html")) return setOut({ kind: "msg", text: c.needIndex });
    window.open("https://studio.nibrascode.com/", "_blank", "noopener");
    save(`${safeName(p.name)}-site.zip`, await filesToZip(p.files));
    setOut({ kind: "msg", text: c.apkNote }); set({}, "act_zip");
  };
  const findAll = (q: string) => {
    const hits: { file: string; line: number; text: string }[] = [];
    const needle = q.trim().toLocaleLowerCase();
    if (!needle) return hits;
    for (const f of p.files) f.content.split("\n").forEach((line, i) => { if (hits.length < 200 && line.toLocaleLowerCase().includes(needle)) hits.push({ file: f.name, line: i + 1, text: line.trim().slice(0, 120) }); });
    return hits;
  };
  const jump = (name: string, line?: number) => { select(name); if (line) setTimeout(() => api.current?.goto(line), 40); };

  // Assistant actions (offline)
  const doAnalyze = () => { const list = analyze(p.files, lang); setOut({ kind: "findings", list }); };
  const doFix = () => {
    const r = fixAll(p.files);
    if (!r.changes.length) return setOut({ kind: "msg", text: t.nothingToFix });
    setSnaps((s) => { const n = [{ id: Math.random().toString(36).slice(2), at: Date.now(), msg: "before fix", files: p.files }, ...s].slice(0, 20); try { localStorage.setItem(snapKey(p.id), JSON.stringify(n)); } catch { /* full */ } return n; });
    set({ files: r.files });
    setOut({ kind: "msg", text: `${t.fixed}: ${r.changes.join(" · ")}` });
    log(t.act_fix);
  };
  const doExplain = () => { const r = explain(file, lang); setOut({ kind: "explain", ...r }); };
  const doDocs = () => {
    const md = readme(p.name, p.files.filter((f) => f.name !== "README.md"), lang);
    const has = p.files.some((f) => f.name === "README.md");
    set({ files: has ? p.files.map((f) => (f.name === "README.md" ? { ...f, content: md } : f)) : [...p.files, { name: "README.md", content: md }], activeFile: "README.md" });
    setOut({ kind: "msg", text: t.readmeDone });
  };
  const doIdeas = () => setOut({ kind: "ideas", list: ideas(p.files, lang) });
  const applySnippet = (id: string) => {
    const s = SNIPPETS.find((x) => x.id === id);
    if (!s) return;
    const r = insertSnippet(p.files, s, file.name);
    set({ files: r.files, activeFile: r.target });
    setOut({ kind: "msg", text: `${t.inserted} ${r.target}: ${s.label[(lang in s.label ? lang : "en") as "en"]}` });
  };
  const command = (raw = cmd) => {
    const q = raw.trim();
    if (!q) return;
    setCmd("");
    const low = q.toLocaleLowerCase();
    const [head, ...rest] = low.split(/\s+/);
    const arg = q.split(/\s+/).slice(1).join(" ");
    if (/^(run|işə|çalıştır|تشغيل|запуск)/.test(low)) return run();
    if (/^zip/.test(low)) return void zip();
    if (/^dev\b/.test(low)) return void openDev();
    if (/^apk/.test(low)) return void toApk();
    if (/^(analy|təhlil|analiz|حلل|анализ|lint|check|yoxla)/.test(low)) return doAnalyze();
    if (/^(fix|düzəl|düzelt|format|tidy|أصلح|исправ)/.test(low)) return doFix();
    if (/^(explain|izah|açıkla|اشرح|объясн)/.test(low)) return doExplain();
    if (/^(docs?|readme|sənəd|belge|توثيق|документ)/.test(low)) return doDocs();
    if (/^(idea|ideya|fikir|أفكار|иде)/.test(low)) return doIdeas();
    if (head === "line" && /^\d+$/.test(rest[0] ?? "")) return api.current?.goto(Number(rest[0]));
    if ((head === "new" || head === "add" || head === "yeni") && arg) return addFile("", arg);
    if (/^(write|yaz|kod|snippet|code|اكتب|напиш)/.test(low)) {
      const s = SNIPPETS.find((x) => low.includes(x.id) || Object.values(x.label).some((v) => low.includes(v.toLocaleLowerCase())));
      if (s) return applySnippet(s.id);
      return setOut({ kind: "snippets" });
    }
    const hits = findAll(q);
    setOut({ kind: "hits", text: hits.length ? t.unknownCmd : `${t.noMatch}. ${t.cmdHelp}`, hits });
  };
  const onAttach = async (fl: FileList | null) => {
    if (!fl) return;
    let files = [...p.files];
    for (const f of Array.from(fl).slice(0, 10)) {
      if (f.size > 1_000_000 || !/\.(html?|css|m?js|json|md|txt|svg)$/i.test(f.name)) continue;
      const text = await f.text();
      const name = cleanPath(f.name);
      files = files.some((x) => x.name === name) ? files.map((x) => (x.name === name ? { ...x, content: text } : x)) : [...files, { name, content: text }];
    }
    set({ files });
    log(t.act_add);
  };
  const commit = () => {
    const s: Snap = { id: Math.random().toString(36).slice(2), at: Date.now(), msg: snapMsg.trim() || new Date().toLocaleString(), files: p.files };
    const n = [s, ...snaps].slice(0, 20);
    setSnaps(n); setSnapMsg("");
    try { localStorage.setItem(snapKey(p.id), JSON.stringify(n)); } catch { /* full */ }
    log(t.act_snap);
  };
  const restoreSnap = (s: Snap) => { if (!confirm(`${t.restore}: ${s.msg}?`)) return; set({ files: s.files, activeFile: s.files[0]?.name }); setOut({ kind: "msg", text: t.restored }); };
  const fullscreen = () => { const el = shot.current as (HTMLElement & { webkitRequestFullscreen?: () => void }) | null; if (!el) return; if (el.requestFullscreen) void el.requestFullscreen(); else el.webkitRequestFullscreen?.(); };

  const nodes = useMemo(() => tree(p.files), [p.files]);
  const hits = useMemo(() => findAll(query), [query, p.files]); // eslint-disable-line react-hooks/exhaustive-deps
  const dev = DEVICES.find((d) => d.id === device);
  const frameW = dev ? dev.w : Math.max(240, stageSize.w - 16);
  const frameH = dev ? dev.h : Math.max(240, stageSize.h - 16);
  const pad = dev?.phone ? 12 : dev ? 10 : 0;
  const scale = Math.min(1, (stageSize.w - 16) / (frameW + pad * 2), (stageSize.h - 16) / (frameH + pad * 2));
  const errors = logs.filter((l) => l.t === "error").length;
  const navItems = [
    { href: localeHref(lang, "/workspace"), label: t.workspace, icon: LayoutGrid, active: true },
    { href: localeHref(lang, "/learn"), label: t.learn, icon: BookOpen },
    { href: localeHref(lang, "/apps"), label: t.explore, icon: Compass },
    { href: toolsPath(lang), label: t.tools, icon: Wrench },
    { href: localeHref(lang, "/ai"), label: t.ai, icon: Bot },
  ];

  const Tree = ({ ns, depth }: { ns: Node[]; depth: number }) => (
    <ul>
      {ns.map((n) => (
        <li key={(n.dir ? "d:" : "f:") + n.path}>
          {n.dir ? (
            <>
              <button className="flex min-h-8 w-full items-center gap-1.5 rounded-lg px-2 text-start text-[13px] text-[#c8d1ea] hover:bg-white/5" style={{ paddingInlineStart: 8 + depth * 14 }} onClick={() => setClosed((s) => { const x = new Set(s); if (x.has(n.path)) x.delete(n.path); else x.add(n.path); return x; })}>
                {closed.has(n.path) ? <ChevronRight className="rtl-flip size-3.5 text-[#6b7aa6]" /> : <ChevronDown className="size-3.5 text-[#6b7aa6]" />}
                {closed.has(n.path) ? <Folder className="size-4 text-[#6f8cff]" /> : <FolderOpen className="size-4 text-[#6f8cff]" />}
                <span className="truncate">{n.name}</span>
              </button>
              {closed.has(n.path) ? null : <Tree ns={n.children} depth={depth + 1} />}
            </>
          ) : (
            <div className={"group flex items-center rounded-lg border " + (n.path === file.name ? "border-[#4f6bff]/70 bg-[#2f4bff]/20 text-white shadow-[0_0_20px_-8px_#4f6bff]" : "border-transparent text-[#b4bfdc] hover:bg-white/5")}>
              <button className="flex min-h-9 min-w-0 flex-1 items-center gap-2 px-2 text-start text-[13px]" style={{ paddingInlineStart: 8 + depth * 14 }} onClick={() => select(n.path)} data-testid="st-file" data-name={n.path}>
                <FileIcon name={n.name} className="size-4" /><span className="truncate">{n.name}</span>
              </button>
              {n.path === file.name ? <span className="me-2 size-1.5 rounded-full bg-[#6f8cff] group-hover:hidden" /> : null}
              <span className="hidden pe-1 group-hover:flex">
                <button className="rounded p-1 text-[#7d89a8] hover:text-white" title={t.rename} aria-label={t.rename} onClick={() => rename(n.path)}><Pencil className="size-3" /></button>
                <button className="rounded p-1 text-[#7d89a8] hover:text-red-300" title={t.del} aria-label={t.del} onClick={() => remove(n.path)}><Trash2 className="size-3" /></button>
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const card = "rounded-2xl border border-white/[0.08] bg-[#0b1230]/80 backdrop-blur";
  const sidePanel = (
    <div className={card + " flex h-full min-h-0 flex-col overflow-hidden"} data-testid="st-explorer">
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-3">
        <span className="grid size-7 place-items-center rounded-lg border border-[#4f6bff]/50 bg-[#2f4bff]/15">{side === "search" ? <Search className="size-4 text-[#8aa2ff]" /> : side === "git" ? <GitBranch className="size-4 text-[#8aa2ff]" /> : side === "settings" ? <Settings className="size-4 text-[#8aa2ff]" /> : <PanelLeft className="size-4 text-[#8aa2ff]" />}</span>
        <span className="flex-1 text-[14px] font-semibold">{side === "search" ? t.search : side === "git" ? t.git : side === "settings" ? t.settings : t.explorer}</span>
        {side === "files" ? <button className="rounded p-1 text-[#7d89a8] hover:text-white" title={t.newFile} aria-label={t.newFile} onClick={() => addFile()} data-testid="st-addfile"><FilePlus className="size-4" /></button> : null}
      </div>
      <div className="min-h-0 flex-1 overflow-auto p-2">
        {side === "files" ? (
          <>
            <div className="flex min-h-8 items-center gap-1.5 px-2 text-[13px] text-[#dfe6ff]"><ChevronDown className="size-3.5 text-[#6b7aa6]" /><Folder className="size-4 text-[#6f8cff]" /> Nibras Studio</div>
            <div className="flex min-h-8 items-center gap-1.5 px-2 text-[13px] text-[#dfe6ff]" style={{ paddingInlineStart: 22 }}><ChevronDown className="size-3.5 text-[#6b7aa6]" /><FolderOpen className="size-4 text-[#6f8cff]" /> <span className="truncate">{p.name}</span></div>
            <div style={{ paddingInlineStart: 14 }}><Tree ns={nodes} depth={1} /></div>
          </>
        ) : side === "search" ? (
          <>
            <input className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[13px] outline-none focus:border-[#4f6bff]" placeholder={t.searchPh} value={query} onChange={(e) => setQuery(e.target.value)} dir="auto" data-testid="st-search" />
            {query && !hits.length ? <p className="p-2 text-xs text-[#7d89a8]">{t.noMatch}</p> : null}
            {hits.map((h, i) => (
              <button key={i} className="mt-1 block w-full rounded-lg px-2 py-1 text-start hover:bg-white/5" onClick={() => jump(h.file, h.line)}>
                <span className="flex items-center gap-1 text-[11px] text-[#8aa2ff]"><FileIcon name={h.file} />{h.file}:{h.line}</span>
                <span className="block truncate font-mono text-[11.5px] text-[#b4bfdc]" dir="ltr">{h.text}</span>
              </button>
            ))}
          </>
        ) : side === "git" ? (
          <>
            <div className="flex gap-1.5">
              <input className="min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-[13px] outline-none focus:border-[#4f6bff]" placeholder={t.commitPh} value={snapMsg} onChange={(e) => setSnapMsg(e.target.value)} dir="auto" />
              <button className="rounded-lg bg-[#3b5bff] px-3 text-[12px] font-semibold text-white" onClick={commit} data-testid="st-commit">{t.commit}</button>
            </div>
            {snaps.length ? snaps.map((s) => (
              <div key={s.id} className="mt-2 rounded-lg border border-white/[0.06] p-2 text-[12px]">
                <div className="truncate text-[#dfe6ff]">{s.msg}</div>
                <div className="mt-0.5 flex items-center justify-between text-[11px] text-[#7d89a8]"><span>{new Date(s.at).toLocaleString()} · {s.files.length} {t.files.toLowerCase()}</span><button className="text-[#8aa2ff] hover:underline" onClick={() => restoreSnap(s)}>{t.restore}</button></div>
              </div>
            )) : <p className="mt-3 text-xs text-[#7d89a8]">{t.noSnap}</p>}
          </>
        ) : (
          <div className="space-y-4 p-1 text-[13px] text-[#c8d1ea]">
            <label className="block">{t.fontSize}: {prefs.size}px<input type="range" min={11} max={20} value={prefs.size} onChange={(e) => setPrefs({ ...prefs, size: Number(e.target.value) })} className="mt-1 w-full accent-[#4f6bff]" /></label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.wrap} onChange={(e) => setPrefs({ ...prefs, wrap: e.target.checked })} className="accent-[#4f6bff]" /> {t.wrap}</label>
            <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.live} onChange={(e) => setPrefs({ ...prefs, live: e.target.checked })} className="accent-[#4f6bff]" /> {t.live}</label>
            <p className="text-[11px] leading-relaxed text-[#7d89a8]">{t.offlineNote}</p>
            <div className="rounded-lg border border-white/10 p-2 text-[12px]" data-testid="st-version"><b>Nibras Studio v{STUDIO_VERSION}</b><div className="mt-1 flex gap-3 text-[11px]"><a className="text-[#8aa2ff] hover:underline" href={localeHref(lang, "/tools-legal") + "#privacy"}>{LEGAL_LABEL[lang].privacy}</a><a className="text-[#8aa2ff] hover:underline" href={localeHref(lang, "/tools-legal") + "#terms"}>{LEGAL_LABEL[lang].terms}</a></div></div>
          </div>
        )}
      </div>
      <div className="border-t border-white/[0.06] p-2 text-[13px]">
        <div className="flex items-center gap-2 rounded-lg px-2 py-1.5">
          <span className="relative grid size-6 place-items-center"><span className="absolute size-3 animate-ping rounded-full bg-emerald-400/40" /><span className="size-2.5 rounded-full bg-emerald-400" /></span>
          <span className="flex-1 leading-tight"><span className="block">{t.liveServer}</span><span className="flex items-center gap-1 text-[11px] text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400" />{prefs.live ? t.running : "—"}</span></span>
          <button className="rounded p-1 text-[#7d89a8] hover:text-white" onClick={run} title={t.run} aria-label={t.run}><Plus className="size-4" /></button>
        </div>
        <button className="flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-start hover:bg-white/5" onClick={() => { setSide("git"); setShowSide(true); }} data-testid="st-gitrow">
          <GitBranch className="size-4 text-[#8aa2ff]" /><span className="flex-1">{t.gitRow}</span><span className="text-[11px] text-[#7d89a8]">{snaps.length} {t.snapshots}</span>
        </button>
      </div>
    </div>
  );

  const editor = (
    <div className={card + " flex h-full min-h-0 flex-col overflow-hidden"}>
      <div className="flex items-stretch border-b border-white/[0.06]">
        <div className="flex min-w-0 flex-1 overflow-x-auto [scrollbar-width:none]" role="tablist" data-testid="st-tabs">
          {open.map((name) => (
            <div key={name} className={"group flex shrink-0 items-center gap-2 border-e border-white/[0.06] ps-3.5 pe-2 text-[13px] " + (name === file.name ? "bg-[#111a3d] text-white shadow-[inset_0_-2px_0_#4f6bff]" : "text-[#7d89a8] hover:bg-white/[0.03]")}>
              <button className="flex items-center gap-2 py-2.5" role="tab" aria-selected={name === file.name} onClick={() => select(name)}><FileIcon name={name} className="size-4" />{name.split("/").pop()}</button>
              <button className={"rounded p-0.5 hover:bg-white/10 " + (open.length < 2 ? "invisible" : "")} onClick={() => closeTab(name)} aria-label="×"><X className="size-3.5" /></button>
            </div>
          ))}
          <button className="px-3 text-[#7d89a8] hover:text-white" onClick={() => addFile()} title={t.newFile} aria-label={t.newFile}><Plus className="size-4" /></button>
        </div>
      </div>
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-1.5 text-[12px] text-[#7d89a8]">
        <span className="min-w-0 flex-1 truncate" dir="ltr">Nibras Studio <span className="mx-1 opacity-50">/</span> {p.name} {file.name.split("/").map((s, i) => <span key={i}><span className="mx-1 opacity-50">/</span><span className={i === file.name.split("/").length - 1 ? "text-[#c8d1ea]" : ""}>{s}</span></span>)}</span>
        <span className="flex overflow-hidden rounded-lg border border-white/10">
          <button className={"hidden p-1.5 hover:bg-white/10 lg:block " + (showRight ? "text-white" : "")} onClick={() => setShowRight((v) => !v)} title={t.split} aria-label={t.split}><SquareSplitHorizontal className="size-4" /></button>
          <button className="border-x border-white/10 p-1.5 text-emerald-300 hover:bg-white/10" onClick={run} title={`${t.run} (Ctrl+Enter)`} aria-label={t.run} data-testid="st-run"><Play className="size-4" /></button>
          <button className={"hidden p-1.5 hover:bg-white/10 lg:block " + (showSide ? "text-white" : "")} onClick={() => setShowSide((v) => !v)} title={t.panel} aria-label={t.panel}><PanelLeft className="size-4" /></button>
        </span>
      </div>
      <div className="min-h-0 flex-1" style={{ ["--nb-code-size" as string]: `${prefs.size}px` }}>
        <CodeEditor name={file.name} value={file.content} wrap={prefs.wrap} onChange={edit} onCursor={(l, col) => setCursor({ l, c: col })} onRun={run} apiRef={api} />
      </div>
    </div>
  );

  const previewCard = (
    <div className={card + " flex min-h-0 flex-1 flex-col overflow-hidden"} ref={shot}>
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] p-2">
        <button className={"inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] " + (rtab === "preview" ? "border border-[#4f6bff]/60 bg-[#2f4bff]/20 text-white" : "text-[#7d89a8] hover:text-white")} onClick={() => setRtab("preview")} data-testid="st-tab-preview"><Eye className="size-4" /> {t.preview}</button>
        <button className={"inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[13px] " + (rtab === "console" ? "border border-[#4f6bff]/60 bg-[#2f4bff]/20 text-white" : "text-[#7d89a8] hover:text-white")} onClick={() => setRtab("console")} data-testid="st-tab-console"><Terminal className="size-4" /> {t.console}{logs.length ? <span className={"rounded px-1 text-[10px] " + (errors ? "bg-red-500/25 text-red-200" : "bg-white/10")}>{logs.length}</span> : null}</button>
        <span className="flex-1" />
        <label className="relative inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-black/20 ps-2 text-[12px]">
          <Smartphone className="size-3.5 text-[#8aa2ff]" />
          <select className="appearance-none bg-transparent py-1.5 pe-6 text-[#dfe6ff] outline-none" value={device} onChange={(e) => setDevice(e.target.value)} aria-label="Device" data-testid="st-device">
            {DEVICES.map((d) => <option key={d.id} value={d.id} className="bg-[#0b1230]">{d.label}</option>)}
            <option value="responsive" className="bg-[#0b1230]">Responsive</option>
          </select>
          <ChevronDown className="pointer-events-none absolute end-1.5 size-3.5 text-[#7d89a8]" />
        </label>
        <button className="rounded-lg p-1.5 text-[#9aa7c7] hover:bg-white/10 hover:text-white" onClick={fullscreen} title={t.fullscreen} aria-label={t.fullscreen}><Maximize2 className="size-4" /></button>
      </div>
      <div className={(rtab === "preview" ? "" : "hidden ") + "relative min-h-0 flex-1 overflow-hidden bg-[radial-gradient(ellipse_at_center,#2a1f6b_0%,#0d1234_45%,#080b1f_80%)]"} ref={stage}>
        <div className="absolute left-1/2 top-1/2" style={{ width: frameW + pad * 2, height: frameH + pad * 2, transform: `translate(-50%,-50%) scale(${scale})` }}>
          <div className={"relative h-full w-full " + (dev?.phone ? "rounded-[56px] bg-gradient-to-b from-[#3a3f6b] to-[#14172e] shadow-[0_0_0_2px_#6f5cff55,0_0_80px_-10px_#6f5cffaa,0_40px_80px_-30px_#000]" : dev ? "rounded-[28px] bg-[#14172e] shadow-[0_0_0_2px_#6f5cff55,0_0_60px_-10px_#6f5cff88]" : "")} style={{ padding: pad }}>
            {dev?.phone ? <div className="absolute left-1/2 top-[22px] z-10 h-[30px] w-[112px] -translate-x-1/2 rounded-full bg-black" /> : null}
            <iframe key={runId} ref={frame} title={t.preview} sandbox="allow-scripts allow-modals allow-forms" srcDoc={srcdoc} className={"h-full w-full bg-white " + (dev?.phone ? "rounded-[44px]" : dev ? "rounded-[18px]" : "rounded-xl")} data-testid="st-frame" />
          </div>
        </div>
      </div>
      {rtab === "console" ? (
        <div className="min-h-0 flex-1 overflow-auto p-3 font-mono text-[12px]" dir="ltr" data-testid="st-console">
          <div className="mb-2 flex justify-end"><button className="text-[11px] text-[#7d89a8] hover:text-white" onClick={() => setLogs([])}>clear</button></div>
          {logs.length ? logs.map((l, i) => <div key={i} className={"border-b border-white/[0.04] py-1 " + (l.t === "error" ? "text-red-300" : l.t === "warn" ? "text-amber-200" : "text-[#c8d1ea]")}>› {l.m}</div>) : <div className="text-[#5d6b8a]">{c.noLogs}</div>}
        </div>
      ) : null}
    </div>
  );

  const actions = [
    { id: "write", label: t.write, icon: Code2, run: () => setOut({ kind: "snippets" }) },
    { id: "analyze", label: t.analyze, icon: SearchCode, run: doAnalyze },
    { id: "fix", label: t.fix, icon: Wand2, run: doFix },
    { id: "explain", label: t.explain, icon: BookOpen, run: doExplain },
    { id: "docs", label: t.docs, icon: FileText, run: doDocs },
    { id: "ideas", label: t.ideas, icon: Lightbulb, run: doIdeas },
  ];
  const lvl = { error: "text-red-300", warn: "text-amber-200", info: "text-[#8aa2ff]" };
  const assistant = (
    <div className={card + " flex shrink-0 flex-col p-2.5"} data-testid="st-assistant">
      <div className="mb-2 flex items-center gap-2">
        <Sparkles className="size-4 text-[#9b8cff]" />
        <span className="flex-1 text-[13px] font-semibold">{t.assistant}</span>
        <div className="relative" data-menu>
          <button className="inline-flex items-center gap-1 rounded-lg border border-white/10 bg-black/20 px-2 py-1 text-[11px]" onClick={() => setMenu(menu === "model" ? null : "model")} data-testid="st-model"><span className="text-[#9b8cff]">◖◗</span> {t.offline} <ChevronDown className="size-3.5" /></button>
          {menu === "model" ? <div className="absolute end-0 top-full z-40 mt-1 w-64 rounded-xl border border-white/10 bg-[#0e1638] p-3 text-[12px] leading-relaxed text-[#c8d1ea] shadow-2xl">{t.offlineNote}</div> : null}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        {actions.map((a) => (
          <button key={a.id} title={a.label} className="flex h-8 min-w-0 items-center gap-1.5 rounded-lg border border-white/[0.08] bg-[#0e1638]/80 px-2 text-start text-[11.5px] hover:border-[#4f6bff]/60 hover:bg-[#16205a]/60" onClick={a.run} data-testid={`st-act-${a.id}`}>
            <a.icon className="size-3.5 shrink-0 text-[#8aa2ff]" /> <span className="truncate">{a.label}</span>
          </button>
        ))}
      </div>
      {out ? (
        <div className="mt-2 max-h-28 overflow-auto rounded-xl border border-white/[0.08] bg-black/25 p-2.5 text-[12.5px]" data-testid="st-out">
          <div className="mb-1 flex justify-end"><button onClick={() => setOut(null)} aria-label="×"><X className="size-3.5 text-[#7d89a8]" /></button></div>
          {out.kind === "msg" ? <p className="text-[#dfe6ff]">{out.text}</p> : null}
          {out.kind === "findings" ? (out.list.length ? <>
            <p className="mb-1 text-[#dfe6ff]">{out.list.length} {t.issues}</p>
            {out.list.map((f, i) => <button key={i} className="block w-full rounded px-1 py-0.5 text-start hover:bg-white/5" onClick={() => jump(f.file, f.line)}><span className={lvl[f.level]}>● </span><span className="text-[#8aa2ff]" dir="ltr">{f.file}{f.line ? `:${f.line}` : ""}</span> <span className="text-[#c8d1ea]">{f.msg}</span></button>)}
            <button className="mt-1.5 inline-flex items-center gap-1 rounded-lg bg-[#3b5bff] px-2.5 py-1 text-[12px] text-white" onClick={doFix}><Wand2 className="size-3.5" /> {t.fix}</button>
          </> : <p className="text-emerald-300">✓ {t.noIssues}</p>) : null}
          {out.kind === "snippets" ? <div className="flex flex-wrap gap-1.5">{SNIPPETS.map((s) => <button key={s.id} className="rounded-lg border border-white/10 px-2 py-1 text-[12px] hover:bg-white/10" onClick={() => applySnippet(s.id)} data-testid={`st-snip-${s.id}`}><span className="text-[10px] uppercase text-[#7d89a8]">{s.kind}</span> {s.label[(lang in s.label ? lang : "en") as "en"]}</button>)}</div> : null}
          {out.kind === "explain" ? <><p className="mb-1 font-semibold text-[#dfe6ff]">{out.title}</p>{out.items.map((it) => <p key={it.k} className="py-0.5"><code className="text-[#ff9ac1]" dir="ltr">{it.k}</code> <span className="text-[#c8d1ea]">— {it.v}</span></p>)}</> : null}
          {out.kind === "ideas" ? out.list.map((it, i) => <div key={i} className="flex items-center gap-2 py-0.5"><Lightbulb className="size-3.5 shrink-0 text-amber-200" /><span className="flex-1 text-[#dfe6ff]">{it.text}</span>{it.snippet ? <button className="rounded bg-white/10 px-2 py-0.5 text-[11px] hover:bg-white/20" onClick={() => applySnippet(it.snippet!)}>{t.insert}</button> : null}</div>) : null}
          {out.kind === "hits" ? <><p className="mb-1 text-[#c8d1ea]">{out.text}</p>{out.hits.slice(0, 40).map((h, i) => <button key={i} className="block w-full truncate rounded px-1 text-start font-mono text-[11.5px] hover:bg-white/5" dir="ltr" onClick={() => jump(h.file, h.line)}><span className="text-[#8aa2ff]">{h.file}:{h.line}</span> {h.text}</button>)}</> : null}
        </div>
      ) : null}
      <form className="mt-2 flex items-center gap-1 rounded-xl border border-white/10 bg-black/25 p-1 focus-within:border-[#4f6bff]/70" onSubmit={(e) => { e.preventDefault(); command(); }}>
        <button type="button" className="rounded-lg p-1.5 text-[#9aa7c7] hover:text-white" onClick={() => attach.current?.click()} title={t.attach} aria-label={t.attach}><Paperclip className="size-4" /></button>
        <input ref={attach} type="file" multiple accept=".html,.htm,.css,.js,.mjs,.json,.md,.txt,.svg" className="hidden" onChange={(e) => { void onAttach(e.target.files); e.target.value = ""; }} />
        <button type="button" className="rounded-lg p-1.5 text-[#9b8cff] hover:text-white" onClick={() => setOut({ kind: "msg", text: t.cmdHelp })} title={t.hints} aria-label={t.hints}><Sparkles className="size-4" /></button>
        <input className="min-w-0 flex-1 bg-transparent px-1 text-[12.5px] outline-none placeholder:text-[#5d6b8a]" placeholder={t.ask} value={cmd} onChange={(e) => setCmd(e.target.value)} dir="auto" data-testid="st-cmd" />
        <button type="submit" className="grid size-7 place-items-center rounded-full bg-gradient-to-br from-[#4f6bff] to-[#7a5cff] text-white shadow-[0_6px_20px_-6px_#4f6bff] disabled:opacity-50" disabled={!cmd.trim()} aria-label={t.send} data-testid="st-send"><Send className="rtl-flip size-3.5" /></button>
      </form>
    </div>
  );

  const railItems: { id: Side | "home"; icon: typeof Home; label: string }[] = [
    { id: "home", icon: Home, label: t.home }, { id: "files", icon: Files, label: t.files }, { id: "search", icon: Search, label: t.search }, { id: "git", icon: GitBranch, label: t.git }, { id: "settings", icon: Settings, label: t.settings },
  ];
  const panes: { id: Pane; icon: typeof Home; label: string }[] = [{ id: "files", icon: Files, label: t.files }, { id: "code", icon: Code2, label: t.code }, { id: "preview", icon: Eye, label: t.preview }, { id: "ai", icon: Sparkles, label: "AI" }];

  return (
    <div className={"studio-ide fixed inset-0 z-[60] flex flex-col overflow-hidden bg-[#060a1f] text-[#e6ebff] " + (light ? "studio-light" : "")} dir={lang === "ar" ? "rtl" : "ltr"} data-testid="st-ide">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_100%,#2443ff33_0%,transparent_45%),radial-gradient(ellipse_at_90%_0%,#7a3cff2e_0%,transparent_40%)]" />
      {/* top bar */}
      <header className="relative z-30 flex items-center gap-3 px-3 py-2.5 lg:px-5">
        <button className="flex items-center gap-2.5" onClick={onHome} data-testid="st-home">
          <img src="/nibras-icon.webp" alt="" className="size-9 rounded-xl" />
          <span className="text-[17px] font-bold tracking-tight lg:text-[19px]">Nibras Studio</span>
        </button>
        <nav className="mx-auto hidden items-center gap-1 rounded-2xl border border-white/10 bg-[#0b1230]/80 p-1 backdrop-blur lg:flex" aria-label="Nibras">
          {navItems.map((n) => (
            <a key={n.label} href={n.href} className={"inline-flex items-center gap-2 rounded-xl px-4 py-1.5 text-[13px] " + (n.active ? "border border-[#4f6bff]/70 bg-[#2f4bff]/25 text-white shadow-[0_0_24px_-6px_#4f6bff]" : "text-[#9aa7c7] hover:text-white")}><n.icon className="size-4" /> {n.label}</a>
          ))}
        </nav>
        <span className="flex-1 lg:hidden" />
        <button className="grid size-10 place-items-center rounded-xl border border-white/10 bg-[#0b1230]/80 text-[#c8d1ea] hover:text-white" onClick={() => setLight((v) => !v)} title={t.theme} aria-label={t.theme} data-testid="st-theme">{light ? <Moon className="size-4" /> : <Sun className="size-4" />}</button>
        <div className="relative" data-menu>
          <button className="relative grid size-10 place-items-center rounded-xl border border-white/10 bg-[#0b1230]/80 text-[#c8d1ea] hover:text-white" onClick={() => setMenu(menu === "bell" ? null : "bell")} title={t.bell} aria-label={t.bell} data-testid="st-bell"><Bell className="size-4" />{acts.length || errors ? <span className="absolute end-2 top-2 size-2 rounded-full bg-[#9b6bff] shadow-[0_0_8px_#9b6bff]" /> : null}</button>
          {menu === "bell" ? (
            <div className="absolute end-0 top-full z-40 mt-2 w-72 rounded-2xl border border-white/10 bg-[#0e1638] p-2 shadow-2xl">
              {errors ? <button className="mb-1 block w-full rounded-lg bg-red-500/10 px-3 py-2 text-start text-[12px] text-red-200" onClick={() => { setRtab("console"); setMenu(null); }}>{errors} × error · {t.console}</button> : null}
              {acts.length ? acts.map((a, i) => <div key={i} className="flex justify-between gap-2 px-3 py-1.5 text-[12px]"><span>{a.text}</span><span className="text-[#7d89a8]">{new Date(a.at).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</span></div>) : <p className="px-3 py-2 text-[12px] text-[#7d89a8]">{t.noAct}</p>}
            </div>
          ) : null}
        </div>
        <div className="relative" data-menu>
          <button className="flex items-center gap-1 rounded-xl" onClick={() => setMenu(menu === "user" ? null : "user")} aria-label={t.profile} data-testid="st-user">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-[#4f6bff] to-[#7a5cff] text-[15px] font-bold text-white shadow-[0_0_20px_-4px_#6f5cff]">N</span><ChevronDown className="hidden size-4 text-[#9aa7c7] sm:block" />
          </button>
          {menu === "user" ? (
            <div className="absolute end-0 top-full z-40 mt-2 w-64 rounded-2xl border border-white/10 bg-[#0e1638] p-1.5 text-[13px] shadow-2xl" role="menu">
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start hover:bg-white/5" onClick={onHome}><FolderOpen className="size-4 text-[#8aa2ff]" /> {t.backProjects}</button>
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start hover:bg-white/5" onClick={() => void openDev()} data-testid="st-dev"><ExternalLink className="size-4 text-[#8aa2ff]" /> {t.dev}</button>
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start hover:bg-white/5" onClick={() => void toApk()} data-testid="st-apk"><Rocket className="size-4 text-emerald-300" /> {t.apk}</button>
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start hover:bg-white/5" onClick={() => void zip()} data-testid="st-zip"><Download className="size-4 text-amber-200" /> {t.zip}</button>
              <a role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/5" href={localeHref(lang, "/workspace") + "?p=" + p.id}><LayoutGrid className="size-4 text-[#8aa2ff]" /> {t.wsOpen}</a>
              <div className="my-1 h-px bg-white/10" />
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-red-300 hover:bg-red-500/10" onClick={() => { setMenu(null); onDelete(); }} data-testid="st-delproj"><Trash2 className="size-4" /> {t.delProject}</button>
              <div className="flex gap-3 px-3 py-1.5 text-[11px] text-[#7d89a8]"><span>v{STUDIO_VERSION}</span><a className="hover:text-white" href={localeHref(lang, "/tools-legal") + "#privacy"}>{LEGAL_LABEL[lang].privacy}</a><a className="hover:text-white" href={localeHref(lang, "/tools-legal") + "#terms"}>{LEGAL_LABEL[lang].terms}</a></div>
              <div className="my-1 border-t border-white/10 lg:hidden" />
              {navItems.map((n) => <a key={n.label} className="flex items-center gap-2 rounded-lg px-3 py-2 hover:bg-white/5 lg:hidden" href={n.href}><n.icon className="size-4 text-[#9aa7c7]" /> {n.label}</a>)}
            </div>
          ) : null}
        </div>
      </header>

      {/* phone pane switch */}
      <div className="relative z-20 mx-3 mb-2 flex gap-1 rounded-2xl border border-white/10 bg-[#0b1230]/80 p-1 lg:hidden" role="tablist" data-testid="st-panes">
        {panes.map((x) => <button key={x.id} role="tab" aria-selected={pane === x.id} onClick={() => setPane(x.id)} data-testid={`st-pane-${x.id}`} className={"inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-xl text-[13px] " + (pane === x.id ? "bg-[#2f4bff]/30 text-white" : "text-[#7d89a8]")}><x.icon className="size-4" /> {x.label}</button>)}
      </div>

      <div className="relative z-10 flex min-h-0 flex-1 gap-3 px-3 pb-2 lg:gap-1.5 lg:px-4" dir="ltr">
        <nav className="hidden w-12 shrink-0 flex-col items-center gap-2 pt-1 lg:flex" aria-label="Studio">
          {railItems.map((r) => {
            const on = r.id !== "home" && showSide && side === r.id;
            return <button key={r.id} title={r.label} aria-label={r.label} data-testid={`st-rail-${r.id}`} onClick={() => { if (r.id === "home") return onHome(); if (side === r.id && showSide) setShowSide(false); else { setSide(r.id); setShowSide(true); } }} className={"grid size-11 place-items-center rounded-xl " + (on ? "border border-[#4f6bff]/60 bg-[#2f4bff]/25 text-white shadow-[0_0_20px_-6px_#4f6bff]" : "text-[#7d89a8] hover:bg-white/5 hover:text-white")}><r.icon className="size-5" /></button>;
          })}
        </nav>
        <aside className={(pane === "files" ? "flex" : "hidden") + " min-h-0 flex-1 flex-col lg:w-[var(--st-left)] lg:flex-none " + (showSide ? "lg:flex" : "lg:hidden")} style={{ ["--st-left" as string]: `${widths.left}px` }} dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className="mb-2 flex gap-1 lg:hidden">{(["files", "search", "git", "settings"] as Side[]).map((s) => <button key={s} onClick={() => setSide(s)} className={"flex-1 rounded-lg py-1.5 text-[12px] " + (side === s ? "bg-white/10 text-white" : "text-[#7d89a8]")}>{t[s]}</button>)}</div>
          {sidePanel}
        </aside>
        {showSide ? handle("left") : null}
        <main className={(pane === "code" ? "flex" : "hidden") + " min-h-0 min-w-0 flex-1 flex-col lg:flex"}>{editor}</main>
        {showRight ? handle("right") : null}
        <section className={((pane === "preview" || pane === "ai") ? "flex" : "hidden") + " min-h-0 min-w-0 flex-1 flex-col gap-2 lg:w-[var(--st-right)] lg:flex-none " + (showRight ? "lg:flex" : "lg:hidden")} style={{ ["--st-right" as string]: `${widths.right}px` }} dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className={(pane === "ai" ? "hidden " : "flex ") + "min-h-0 flex-1 flex-col lg:flex"} dir="ltr">{previewCard}</div>
          <div className={(pane === "preview" ? "hidden " : "") + "min-h-0 overflow-auto lg:block lg:shrink-0"}>{assistant}</div>
        </section>
      </div>

      <footer className="relative z-10 flex items-center gap-4 whitespace-nowrap border-t border-white/[0.06] px-4 py-1.5 text-[11.5px] text-[#7d89a8]" dir="ltr">
        <span className="inline-flex items-center gap-1.5"><FileIcon name={file.name} /> {langOf(file.name)}</span>
        <span className="flex-1" />
        <span>Ln {cursor.l}, Col {cursor.c}</span>
        <span className="hidden sm:inline">{t.spaces}</span>
        <span className="hidden sm:inline">UTF-8</span>
        <span className="hidden md:inline" data-testid="st-ver">Nibras Studio v{STUDIO_VERSION}</span>
        <span className="inline-flex items-center gap-1.5"><span className="size-2 rounded-full bg-emerald-400" /> {t.ready}</span>
      </footer>
    </div>
  );
}
