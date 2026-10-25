/** Workspace Code tab: a compact dark IDE (explorer, tabs, CodeMirror, live device preview). Everything runs in the browser. */
import { useEffect, useMemo, useRef, useState } from "react";
import {
  ChevronDown, ChevronRight, Code2, Download, ExternalLink, File, FileCode2, FileJson, FilePlus, FileText, Folder, FolderOpen, FolderPlus,
  Monitor, Paintbrush, Pencil, Play, RefreshCw, Rocket, Search, Settings2, Smartphone, Tablet, Terminal, Trash2, Wand2, X, Zap, Eye, Files,
} from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { save } from "@/kit/shell";
import type { WsCopy } from "./i18n";
import { IDE, type IdeCopy } from "./ide-i18n";
import { buildPreview, devLink, filesToZip } from "./files";
import { CodeEditor, langOf, type EditorApi } from "./editor";

type CodeFile = { name: string; content: string };
type P = { name: string; files: CodeFile[]; activeFile: string };
type SetFn = (patch: Partial<{ files: CodeFile[]; activeFile: string }>, act?: "act_run" | "act_zip" | "act_edit") => void;
type Mode = "design" | "code" | "preview";
type Pane = "files" | "code" | "preview";
type Side = "explorer" | "search" | "settings";

export const DEVICES = [
  { id: "iphone", label: "iPhone 15", w: 393, h: 852, icon: Smartphone, phone: true },
  { id: "pixel", label: "Pixel 8", w: 412, h: 915, icon: Smartphone, phone: true },
  { id: "ipad", label: "iPad mini", w: 744, h: 1133, icon: Tablet, phone: false },
  { id: "desktop", label: "Desktop", w: 1280, h: 800, icon: Monitor, phone: false },
] as const;
type DeviceId = (typeof DEVICES)[number]["id"] | "responsive";

export const safeName = (s: string) => (s.trim() || "nibras").replace(/[\\/:*?"<>|]+/g, "-").slice(0, 80);
export const cleanPath = (s: string) => s.trim().replace(/\\/g, "/").replace(/^\/+|\/+$/g, "").replace(/\/{2,}/g, "/").replace(/[:*?"<>|]+/g, "-");

export function FileIcon({ name, className }: { name: string; className?: string }) {
  const ext = name.toLowerCase().split(".").pop();
  const cls = "size-3.5 shrink-0 " + (className ?? "");
  if (ext === "html" || ext === "htm") return <FileCode2 className={cls + " text-[#ff7a9a]"} />;
  if (ext === "css") return <Paintbrush className={cls + " text-[#6fb6ff]"} />;
  if (ext === "js" || ext === "mjs" || ext === "jsx" || ext === "ts" || ext === "tsx") return <FileCode2 className={cls + " text-[#ffd479]"} />;
  if (ext === "json") return <FileJson className={cls + " text-[#ffb86b]"} />;
  if (ext === "md" || ext === "txt") return <FileText className={cls + " text-[#9aa7c7]"} />;
  return <File className={cls + " text-[#9aa7c7]"} />;
}

export type Node = { name: string; path: string; dir: boolean; children: Node[] };
export function tree(files: CodeFile[]): Node[] {
  const root: Node = { name: "", path: "", dir: true, children: [] };
  for (const f of files) {
    const parts = f.name.split("/");
    let at = root;
    parts.forEach((part, i) => {
      const path = parts.slice(0, i + 1).join("/");
      const dir = i < parts.length - 1;
      let n = at.children.find((x) => x.name === part && x.dir === dir);
      if (!n) at.children.push((n = { name: part, path, dir, children: [] }));
      at = n;
    });
  }
  const sort = (ns: Node[]) => { ns.sort((a, b) => Number(b.dir) - Number(a.dir) || a.name.localeCompare(b.name)); ns.forEach((n) => sort(n.children)); return ns; };
  return sort(root.children);
}

export function tidy(src: string, name: string) {
  if (!/\.(m?js|jsx|ts|tsx|css|json)$/i.test(name)) return src;
  let depth = 0;
  return src.split("\n").map((raw) => {
    const line = raw.trim();
    if (!line) return "";
    const opens = (line.match(/[{[(]/g) ?? []).length;
    const closes = (line.match(/[}\])]/g) ?? []).length;
    const lead = /^[}\])]/.test(line) ? 1 : 0;
    const out = "  ".repeat(Math.max(0, depth - lead)) + line;
    depth = Math.max(0, depth + opens - closes);
    return out;
  }).join("\n");
}

export const PAGE_TEMPLATE = (title: string) => `<!doctype html>\n<html lang="az">\n<head>\n  <meta charset="utf-8">\n  <meta name="viewport" content="width=device-width, initial-scale=1">\n  <title>${title}</title>\n  <link rel="stylesheet" href="style.css">\n</head>\n<body>\n  <h1>${title}</h1>\n  <p></p>\n</body>\n</html>\n`;

export function CodeTool({ p, c, set, tall = false }: { p: P; c: WsCopy; set: SetFn; tall?: boolean }) {
  const { lang } = useI18n();
  const t: IdeCopy = IDE[lang] ?? IDE.en;
  const file = p.files.find((f) => f.name === p.activeFile) ?? p.files[0];
  const [mode, setMode] = useState<Mode>("code");
  const [pane, setPane] = useState<Pane>("code");
  const [side, setSide] = useState<Side | null>("explorer");
  const [open, setOpen] = useState<string[]>(() => [file.name]);
  const [closed, setClosed] = useState<Set<string>>(new Set());
  const [device, setDevice] = useState<DeviceId>("iphone");
  const [srcdoc, setSrcdoc] = useState(() => buildPreview(p.files));
  const [runId, setRunId] = useState(0);
  const [logs, setLogs] = useState<{ t: string; m: string }[]>([]);
  const [showConsole, setShowConsole] = useState(false);
  const [note, setNote] = useState("");
  const [cursor, setCursor] = useState({ l: 1, c: 1 });
  const [query, setQuery] = useState("");
  const [cmd, setCmd] = useState("");
  const [cmdOut, setCmdOut] = useState<{ msg: string; hits: { file: string; line: number; text: string }[] } | null>(null);
  const [pubOpen, setPubOpen] = useState(false);
  const [prefs, setPrefs] = useState(() => {
    try { return { size: 13, wrap: false, live: true, ...JSON.parse(localStorage.getItem("nibras-ide-prefs") || "{}") }; } catch { return { size: 13, wrap: false, live: true }; }
  });
  const frame = useRef<HTMLIFrameElement>(null);
  const api = useRef<EditorApi | null>(null);
  const stage = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ w: 360, h: 640 });

  useEffect(() => { try { localStorage.setItem("nibras-ide-prefs", JSON.stringify(prefs)); } catch { /* full */ } }, [prefs]);
  useEffect(() => { if (!open.includes(file.name)) setOpen((o) => [...o, file.name]); }, [file.name]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => { setOpen((o) => { const n = o.filter((x) => p.files.some((f) => f.name === x)); return n.length ? n : [file.name]; }); }, [p.files]); // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {
    const on = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow || !e.data?.__nw) return;
      setLogs((l) => [...l.slice(-199), { t: String(e.data.t), m: String(e.data.m) }]);
      if (e.data.t === "error") setShowConsole(true);
    };
    window.addEventListener("message", on);
    return () => window.removeEventListener("message", on);
  }, []);
  // Live preview: rebuild shortly after typing stops.
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
  }, [mode, pane]);

  const edit = (content: string) => set({ files: p.files.map((f) => (f.name === file.name ? { ...f, content } : f)) });
  const select = (name: string) => { set({ activeFile: name }); setPane("code"); if (mode === "preview") setMode("code"); };
  const run = () => {
    setLogs([]);
    setSrcdoc(buildPreview(p.files));
    setRunId((n) => n + 1);
    if (window.matchMedia("(max-width: 1023px)").matches) setPane("preview");
    set({}, "act_run");
  };
  const addFile = (base = "") => {
    const n = cleanPath(prompt(c.fileName, base ? `${base}/new.js` : "page.html") ?? "");
    if (!n) return;
    if (p.files.some((f) => f.name === n)) return alert(c.exists);
    set({ files: [...p.files, { name: n, content: /\.html?$/i.test(n) ? PAGE_TEMPLATE(n.split("/").pop()!.replace(/\.html?$/i, "")) : "" }], activeFile: n });
  };
  const addFolder = () => {
    const d = cleanPath(prompt(t.folderName, "js") ?? "");
    if (!d) return;
    const n = cleanPath(prompt(c.fileName, `${d}/main.js`) ?? "");
    if (!n) return;
    if (p.files.some((f) => f.name === n)) return alert(c.exists);
    set({ files: [...p.files, { name: n, content: "" }], activeFile: n });
  };
  const rename = (name = file.name) => {
    const n = cleanPath(prompt(c.fileName, name) ?? "");
    if (!n || n === name) return;
    if (p.files.some((f) => f.name === n)) return alert(c.exists);
    setOpen((o) => o.map((x) => (x === name ? n : x)));
    set({ files: p.files.map((f) => (f.name === name ? { ...f, name: n } : f)), activeFile: p.activeFile === name ? n : p.activeFile });
  };
  const remove = (name = file.name) => {
    if (p.files.length < 2) return alert(c.keepOne);
    if (!confirm(`${c.del}: ${name}?`)) return;
    const rest = p.files.filter((f) => f.name !== name);
    set({ files: rest, activeFile: p.activeFile === name ? rest[0].name : p.activeFile });
  };
  const closeTab = (name: string) => {
    const rest = open.filter((x) => x !== name);
    if (!rest.length) return;
    setOpen(rest);
    if (name === file.name) set({ activeFile: rest[rest.length - 1] });
  };
  const openDev = async () => {
    setPubOpen(false);
    const url = await devLink(p.files);
    if (!url) return setNote(c.tooBig);
    setNote(c.devNote);
    window.open(url, "_blank", "noopener");
    set({}, "act_run");
  };
  const toApk = async () => {
    setPubOpen(false);
    if (!p.files.some((f) => f.name.toLowerCase() === "index.html")) return setNote(c.needIndex);
    window.open("https://studio.nibrascode.com/", "_blank", "noopener");
    save(`${safeName(p.name)}-site.zip`, await filesToZip(p.files));
    setNote(c.apkNote);
    set({}, "act_zip");
  };
  const zip = async () => {
    setPubOpen(false);
    save(`${safeName(p.name)}.zip`, await filesToZip(p.files));
    set({}, "act_zip");
  };
  const findAll = (q: string) => {
    const hits: { file: string; line: number; text: string }[] = [];
    if (!q.trim()) return hits;
    const needle = q.toLocaleLowerCase();
    for (const f of p.files) f.content.split("\n").forEach((line, i) => { if (hits.length < 200 && line.toLocaleLowerCase().includes(needle)) hits.push({ file: f.name, line: i + 1, text: line.trim().slice(0, 120) }); });
    return hits;
  };
  const jump = (name: string, line: number) => { select(name); setTimeout(() => api.current?.goto(line), 30); };
  // Local command box: known commands run directly, anything else becomes a project search.
  const command = () => {
    const raw = cmd.trim();
    if (!raw) return;
    const [head, ...rest] = raw.split(/\s+/);
    const arg = rest.join(" ");
    const h = head.toLowerCase();
    setCmd("");
    if (h === "run" || h === "işə" ) { run(); return setCmdOut({ msg: "▶ " + c.run, hits: [] }); }
    if (h === "zip") { void zip(); return setCmdOut({ msg: "⬇ ZIP", hits: [] }); }
    if (h === "dev") { void openDev(); return setCmdOut({ msg: "↗ Nibras Dev", hits: [] }); }
    if (h === "apk") { void toApk(); return setCmdOut({ msg: "📱 APK Studio", hits: [] }); }
    if (h === "line" && /^\d+$/.test(arg)) { setTimeout(() => api.current?.goto(Number(arg)), 10); return setCmdOut({ msg: `${t.ln} ${arg}`, hits: [] }); }
    if ((h === "new" || h === "add") && arg) {
      const n = cleanPath(arg);
      if (p.files.some((f) => f.name === n)) return setCmdOut({ msg: c.exists, hits: [] });
      set({ files: [...p.files, { name: n, content: /\.html?$/i.test(n) ? PAGE_TEMPLATE(n.split("/").pop()!.replace(/\.html?$/i, "")) : "" }], activeFile: n });
      return setCmdOut({ msg: `${t.opened}: ${n}`, hits: [] });
    }
    if (h === "open" && arg) {
      const f = p.files.find((x) => x.name.toLowerCase().includes(arg.toLowerCase()));
      if (f) { select(f.name); return setCmdOut({ msg: `${t.opened}: ${f.name}`, hits: [] }); }
    }
    const hits = findAll(raw);
    setCmdOut({ msg: hits.length ? `${t.unknown} ${hits.length} ${t.found}` : t.noMatch, hits });
  };

  const nodes = useMemo(() => tree(p.files), [p.files]);
  const searchHits = useMemo(() => findAll(query), [query, p.files]); // eslint-disable-line react-hooks/exhaustive-deps
  const dev = DEVICES.find((d) => d.id === device);
  const bytes = new Blob([file.content]).size;

  const Tree = ({ ns, depth }: { ns: Node[]; depth: number }) => (
    <ul>
      {ns.map((n) => (
        <li key={(n.dir ? "d:" : "f:") + n.path}>
          {n.dir ? (
            <>
              <div className="group flex items-center">
                <button className="flex min-h-8 flex-1 items-center gap-1.5 rounded-md px-1.5 text-start text-[13px] text-[#c8d1ea] hover:bg-white/5" style={{ paddingInlineStart: 6 + depth * 12 }} onClick={() => setClosed((s) => { const x = new Set(s); if (x.has(n.path)) x.delete(n.path); else x.add(n.path); return x; })}>
                  {closed.has(n.path) ? <ChevronRight className="rtl-flip size-3.5 text-[#5d6b8a]" /> : <ChevronDown className="size-3.5 text-[#5d6b8a]" />}
                  {closed.has(n.path) ? <Folder className="size-3.5 text-[#7aa2ff]" /> : <FolderOpen className="size-3.5 text-[#7aa2ff]" />}
                  <span className="truncate">{n.name}</span>
                </button>
                <button className="hidden rounded p-1 text-[#7d89a8] hover:bg-white/10 hover:text-white group-hover:block" title={t.newFile} aria-label={t.newFile} onClick={() => addFile(n.path)}><FilePlus className="size-3.5" /></button>
              </div>
              {closed.has(n.path) ? null : <Tree ns={n.children} depth={depth + 1} />}
            </>
          ) : (
            <div className={"group flex items-center rounded-md " + (n.path === file.name ? "bg-[#2f6bff]/20 text-white" : "text-[#aab5d3] hover:bg-white/5")}>
              <button className="flex min-h-8 min-w-0 flex-1 items-center gap-1.5 px-1.5 text-start font-mono text-[12.5px]" style={{ paddingInlineStart: 22 + depth * 12 }} onClick={() => select(n.path)} data-testid="ws-file" data-name={n.path}>
                <FileIcon name={n.name} /><span className="truncate">{n.name}</span>
              </button>
              <span className="flex opacity-100 lg:opacity-0 lg:group-hover:opacity-100">
                <button className="rounded p-1 text-[#7d89a8] hover:bg-white/10 hover:text-white" title={c.rename} aria-label={c.rename} onClick={() => rename(n.path)}><Pencil className="size-3" /></button>
                <button className="rounded p-1 text-[#7d89a8] hover:bg-white/10 hover:text-red-300" title={c.del} aria-label={c.del} onClick={() => remove(n.path)}><Trash2 className="size-3" /></button>
              </span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  const sidePanel = (
    <div className="flex h-full min-h-0 flex-col" data-testid="ws-files">
      {side === "search" ? (
        <>
          <div className="px-3 pb-2 pt-3 text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]">{t.search}</div>
          <div className="px-2"><input className="w-full rounded-lg border border-white/10 bg-black/30 px-2.5 py-1.5 text-[13px] text-white outline-none focus:border-[#2f6bff]" placeholder={t.searchPh} value={query} onChange={(e) => setQuery(e.target.value)} dir="auto" data-testid="ws-search" /></div>
          <div className="mt-2 min-h-0 flex-1 overflow-auto px-1 pb-2">
            {query && !searchHits.length ? <p className="px-2 text-xs text-[#7d89a8]">{t.noMatch}</p> : null}
            {searchHits.map((h, i) => (
              <button key={i} className="block w-full rounded-md px-2 py-1 text-start hover:bg-white/5" onClick={() => jump(h.file, h.line)}>
                <span className="flex items-center gap-1 font-mono text-[11px] text-[#7aa2ff]"><FileIcon name={h.file} />{h.file}:{h.line}</span>
                <span className="block truncate font-mono text-[11.5px] text-[#aab5d3]" dir="ltr">{h.text}</span>
              </button>
            ))}
          </div>
        </>
      ) : side === "settings" ? (
        <div className="space-y-4 p-3 text-[13px] text-[#c8d1ea]">
          <div className="text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]">{t.settings}</div>
          <label className="block">{t.fontSize}: {prefs.size}px<input type="range" min={11} max={20} value={prefs.size} onChange={(e) => setPrefs({ ...prefs, size: Number(e.target.value) })} className="mt-1 w-full accent-[#2f6bff]" /></label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.wrap} onChange={(e) => setPrefs({ ...prefs, wrap: e.target.checked })} className="accent-[#2f6bff]" /> {t.wrap}</label>
          <label className="flex items-center gap-2"><input type="checkbox" checked={prefs.live} onChange={(e) => setPrefs({ ...prefs, live: e.target.checked })} className="accent-[#2f6bff]" /> {t.autoRun}</label>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-between px-3 pb-1 pt-3">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]">{t.explorer}</span>
            <span className="flex gap-0.5">
              <button className="rounded p-1.5 text-[#7d89a8] hover:bg-white/10 hover:text-white" title={t.newFile} aria-label={t.newFile} onClick={() => addFile()} data-testid="ws-addfile"><FilePlus className="size-4" /></button>
              <button className="rounded p-1.5 text-[#7d89a8] hover:bg-white/10 hover:text-white" title={t.newFolder} aria-label={t.newFolder} onClick={addFolder} data-testid="ws-addfolder"><FolderPlus className="size-4" /></button>
            </span>
          </div>
          <div className="px-3 pb-2 text-[12px] font-semibold text-[#dfe6ff]"><span className="inline-flex items-center gap-1"><ChevronDown className="size-3.5" />{p.name || "project"}</span></div>
          <div className="min-h-0 flex-1 overflow-auto px-1 pb-3"><Tree ns={nodes} depth={0} /></div>
        </>
      )}
    </div>
  );

  // Device frame scaled to fit the preview stage.
  const frameW = dev ? dev.w : Math.max(240, stageSize.w - 24);
  const frameH = dev ? dev.h : Math.max(240, stageSize.h - 24);
  const pad = dev?.phone ? 12 : dev ? 10 : 0;
  const scale = Math.min(1, (stageSize.w - 24) / (frameW + pad * 2), (stageSize.h - 24) / (frameH + pad * 2));
  const previewPanel = (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-center gap-1.5 border-b border-white/[0.06] px-2.5 py-2">
        <span className="inline-flex items-center gap-1.5 rounded-md bg-emerald-400/10 px-2 py-0.5 text-[11px] font-medium text-emerald-300"><span className="size-1.5 rounded-full bg-emerald-400" />{t.live}</span>
        <div className="min-w-0 flex-1 truncate rounded-md bg-black/30 px-2 py-1 font-mono text-[11px] text-[#7d89a8]" dir="ltr">/{p.files.find((f) => /\.html?$/i.test(f.name))?.name ?? "index.html"}</div>
        <button className="rounded-md p-1.5 text-[#9aa7c7] hover:bg-white/10 hover:text-white" title={t.reload} aria-label={t.reload} onClick={run}><RefreshCw className="size-3.5" /></button>
        <select className="max-w-[8.5rem] rounded-md border border-white/10 bg-[#0d1323] px-1.5 py-1 text-[12px] text-[#dfe6ff]" value={device} onChange={(e) => setDevice(e.target.value as DeviceId)} aria-label={t.device} data-testid="ws-device">
          {DEVICES.map((d) => <option key={d.id} value={d.id}>{d.id === "desktop" ? t.desktop : d.label}</option>)}
          <option value="responsive">{t.responsive}</option>
        </select>
      </div>
      <div ref={stage} className="relative min-h-0 flex-1 overflow-hidden bg-[radial-gradient(ellipse_at_top,#16213d_0%,#0a0f1d_60%)]">
        <div className="absolute left-1/2 top-1/2" style={{ width: frameW + pad * 2, height: frameH + pad * 2, transform: `translate(-50%,-50%) scale(${scale})` }}>
          <div className={"relative h-full w-full " + (dev?.phone ? "rounded-[54px] bg-[#05070d] shadow-[0_0_0_2px_#2a3350,0_30px_80px_-20px_#000]" : dev ? "rounded-[28px] bg-[#05070d] shadow-[0_0_0_2px_#2a3350,0_30px_80px_-20px_#000]" : "")} style={{ padding: pad }}>
            {dev?.phone ? <div className="absolute left-1/2 top-[22px] z-10 h-[30px] w-[110px] -translate-x-1/2 rounded-full bg-black" /> : null}
            <iframe key={runId} ref={frame} title={c.preview} sandbox="allow-scripts allow-modals allow-forms" srcDoc={srcdoc} className={"h-full w-full bg-white " + (dev?.phone ? "rounded-[42px]" : dev ? "rounded-[18px]" : "rounded-lg")} data-testid="ws-frame" />
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <button className="flex w-full items-center gap-1.5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8] hover:text-white" onClick={() => setShowConsole((v) => !v)} data-testid="ws-console-toggle">
          <Terminal className="size-3.5" /> {t.console} {logs.length ? <span className={"rounded px-1 text-[10px] " + (logs.some((l) => l.t === "error") ? "bg-red-500/20 text-red-300" : "bg-white/10")}>{logs.length}</span> : null}
          <span className="flex-1" />{showConsole ? <ChevronDown className="size-3.5" /> : <ChevronRight className="rtl-flip size-3.5" />}
        </button>
        <div className={(showConsole ? "" : "hidden ") + "max-h-32 overflow-auto px-3 pb-2 font-mono text-[11.5px]"} data-testid="ws-console" dir="ltr">
          {logs.length ? logs.map((l, i) => <div key={i} className={l.t === "error" ? "text-red-300" : l.t === "warn" ? "text-amber-200" : "text-[#c8d1ea]"}>› {l.m}</div>) : <div className="text-[#5d6b8a]">{c.noLogs}</div>}
        </div>
      </div>
    </div>
  );

  const quick = (
    <div className="border-t border-white/[0.06] p-3 lg:p-2.5">
      <div className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[#7d89a8]">{t.quick}</div>
      <div className="flex flex-wrap gap-1.5">
        <button className="ide-chip" onClick={() => void zip()} data-testid="ws-zip"><Download className="size-3.5" /> {c.zip}</button>
        <button className="ide-chip" onClick={() => void openDev()} data-testid="ws-dev"><ExternalLink className="size-3.5" /> {c.dev}</button>
        <button className="ide-chip" onClick={() => void toApk()} data-testid="ws-apk"><Smartphone className="size-3.5" /> {c.apk}</button>
        <button className="ide-chip" onClick={() => addFile()}><FilePlus className="size-3.5" /> {t.template}</button>
        <button className="ide-chip" onClick={() => edit(tidy(file.content, file.name))} data-testid="ws-tidy"><Wand2 className="size-3.5" /> {t.fmt}</button>
      </div>
      <form className="mt-3 rounded-xl border border-white/10 bg-black/30 focus-within:border-[#2f6bff]/70" onSubmit={(e) => { e.preventDefault(); command(); }}>
        <textarea title={t.askHint} className="block max-h-28 min-h-[40px] w-full resize-none bg-transparent px-3 pt-2.5 text-[13px] text-white outline-none placeholder:text-[#5d6b8a]" rows={1} placeholder={t.ask} value={cmd} onChange={(e) => setCmd(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); command(); } }} dir="auto" data-testid="ws-cmd" />
        <div className="flex items-center gap-2 px-2 pb-2">
          <span className="inline-flex items-center gap-1 rounded-md bg-white/5 px-2 py-1 text-[11px] text-[#9aa7c7]"><Zap className="size-3 text-[#7aa2ff]" /> Offline</span>
          <span className="flex-1" />
          <button type="submit" className="inline-flex size-8 items-center justify-center rounded-lg bg-[#2f6bff] text-white disabled:opacity-40" disabled={!cmd.trim()} aria-label={t.go} data-testid="ws-cmd-go"><Play className="size-3.5" /></button>
        </div>
      </form>
      <p className="mt-1.5 text-[11px] leading-snug text-[#5d6b8a] lg:hidden">{t.askHint}</p>
      {cmdOut ? (
        <div className="mt-2 max-h-40 overflow-auto rounded-lg lg:max-h-28 border border-white/10 bg-black/30 p-2 text-[12px]" data-testid="ws-cmd-out">
          <div className="mb-1 flex items-start justify-between gap-2 text-[#c8d1ea]"><span>{cmdOut.msg}</span><button onClick={() => setCmdOut(null)} aria-label={t.close}><X className="size-3.5 text-[#7d89a8]" /></button></div>
          {cmdOut.hits.slice(0, 50).map((h, i) => (
            <button key={i} className="block w-full rounded px-1 py-0.5 text-start font-mono text-[11px] hover:bg-white/5" dir="ltr" onClick={() => jump(h.file, h.line)}><span className="text-[#7aa2ff]">{h.file}:{h.line}</span> <span className="text-[#aab5d3]">{h.text}</span></button>
          ))}
        </div>
      ) : null}
      {note ? <p className="mt-2 rounded-lg border border-[#2f6bff]/40 bg-[#2f6bff]/10 p-2.5 text-[12px] text-[#dfe6ff]" data-testid="ws-note">{note}</p> : null}
    </div>
  );

  const editorPanel = (
    <div className="flex h-full min-h-0 flex-col">
      <div className="flex items-stretch overflow-x-auto border-b border-white/[0.06] bg-black/20 [scrollbar-width:none]" role="tablist" data-testid="ws-tabs">
        {open.map((name) => (
          <div key={name} className={"group flex shrink-0 items-center gap-1.5 border-e border-white/[0.06] ps-3 pe-1.5 text-[12.5px] " + (name === file.name ? "bg-[#0f1527] text-white shadow-[inset_0_2px_0_#2f6bff]" : "text-[#7d89a8] hover:bg-white/[0.03]")}>
            <button className="flex items-center gap-1.5 py-2 font-mono" role="tab" aria-selected={name === file.name} onClick={() => select(name)}><FileIcon name={name} />{name.split("/").pop()}</button>
            <button className={"rounded p-0.5 hover:bg-white/10 " + (open.length < 2 ? "invisible" : name === file.name ? "" : "opacity-0 group-hover:opacity-100")} onClick={() => closeTab(name)} aria-label={t.close}><X className="size-3" /></button>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1 border-b border-white/[0.04] px-3 py-1 font-mono text-[11px] text-[#5d6b8a]" dir="ltr">
        {file.name.split("/").map((s, i, a) => <span key={i} className={i === a.length - 1 ? "text-[#9aa7c7]" : ""}>{s}{i < a.length - 1 ? " ›" : ""}</span>)}
      </div>
      <div className="min-h-0 flex-1" style={{ ["--nb-code-size" as string]: `${prefs.size}px` }}>
        <CodeEditor name={file.name} value={file.content} wrap={prefs.wrap} onChange={edit} onCursor={(l, col) => setCursor({ l, c: col })} onRun={run} apiRef={api} />
      </div>
    </div>
  );

  const modes: { id: Mode; label: string }[] = [{ id: "design", label: t.design }, { id: "code", label: t.code }, { id: "preview", label: t.previewMode }];
  const panes: { id: Pane; label: string; icon: typeof Files }[] = [{ id: "files", label: t.files, icon: Files }, { id: "code", label: t.code, icon: Code2 }, { id: "preview", label: t.previewMode, icon: Eye }];

  return (
    <section className="ide -mx-3 overflow-hidden border-y border-white/10 bg-[#0a0e1a] text-[#e6ebff] shadow-[0_40px_120px_-40px_#000] md:mx-0 md:rounded-2xl md:border" data-testid="ws-ide">
      {/* top bar */}
      <header className="flex items-center gap-2 border-b border-white/[0.07] bg-[#0c1120] px-2.5 py-2">
        <span className="hidden items-center gap-2 sm:flex">
          <span className="grid size-7 place-items-center rounded-lg bg-gradient-to-br from-[#2f6bff] to-[#7a5cff] text-[11px] font-bold text-white">N</span>
          <span className="leading-tight"><span className="block text-[12.5px] font-semibold">Nibras Studio</span><span className="block max-w-[9rem] truncate text-[10.5px] text-[#7d89a8]">{p.name}</span></span>
        </span>
        <div className="mx-auto hidden rounded-lg border border-white/10 bg-black/30 p-0.5 lg:flex" role="tablist" data-testid="ws-modes">
          {modes.map((m) => (
            <button key={m.id} role="tab" aria-selected={mode === m.id} onClick={() => setMode(m.id)} data-testid={`ws-mode-${m.id}`} className={"rounded-md px-3.5 py-1 text-[12.5px] font-medium " + (mode === m.id ? "bg-white/[0.12] text-white" : "text-[#7d89a8] hover:text-white")}>{m.label}</button>
          ))}
        </div>
        <span className="flex-1 lg:hidden" />
        <button className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-3 text-[12.5px] font-medium hover:bg-white/10" onClick={run} data-testid="ws-run" title="Ctrl+Enter"><Play className="size-3.5 text-emerald-300" /> {c.run}</button>
        <div className="relative">
          <button className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-[#2f6bff] px-3 text-[12.5px] font-semibold text-white shadow-[0_6px_20px_-6px_#2f6bff] hover:bg-[#3d77ff]" onClick={() => setPubOpen((v) => !v)} aria-expanded={pubOpen} data-testid="ws-publish"><Rocket className="size-3.5" /> {t.publish}</button>
          {pubOpen ? (
            <div className="absolute end-0 top-full z-30 mt-1.5 w-60 rounded-xl border border-white/10 bg-[#111829] p-1 shadow-2xl" role="menu">
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-[13px] hover:bg-white/5" onClick={() => void openDev()}><ExternalLink className="size-4 text-[#7aa2ff]" /> {t.publishDev}</button>
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-[13px] hover:bg-white/5" onClick={() => void toApk()}><Smartphone className="size-4 text-emerald-300" /> {t.publishApk}</button>
              <button role="menuitem" className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-start text-[13px] hover:bg-white/5" onClick={() => void zip()}><Download className="size-4 text-[#ffd479]" /> {t.publishZip}</button>
            </div>
          ) : null}
        </div>
      </header>

      {/* phone: one pane at a time */}
      <div className="flex gap-1 border-b border-white/[0.07] bg-[#0c1120] p-1.5 lg:hidden" role="tablist" data-testid="ws-panes">
        {panes.map((x) => (
          <button key={x.id} role="tab" aria-selected={pane === x.id} onClick={() => setPane(x.id)} data-testid={`ws-pane-${x.id}`} className={"inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 rounded-lg text-[13px] font-medium " + (pane === x.id ? "bg-white/[0.12] text-white" : "text-[#7d89a8]")}><x.icon className="size-4" /> {x.label}</button>
        ))}
      </div>

      <div className={"ide-body flex lg:min-h-[600px] " + (tall ? "lg:h-[calc(100vh-9.5rem)]" : "lg:h-[calc(100vh-13rem)]")} dir="ltr">
        {/* icon rail */}
        <nav className="hidden w-12 shrink-0 flex-col items-center gap-1 border-e border-white/[0.06] bg-[#080b16] py-2 lg:flex" aria-label="IDE">
          {([["explorer", Files, t.explorer], ["search", Search, t.search], ["settings", Settings2, t.settings]] as const).map(([id, Icon, label]) => (
            <button key={id} title={label} aria-label={label} onClick={() => setSide(side === id ? null : id)} data-testid={`ws-rail-${id}`} className={"relative grid size-9 place-items-center rounded-lg " + (side === id ? "bg-[#2f6bff]/20 text-white before:absolute before:-start-1.5 before:h-5 before:w-0.5 before:rounded before:bg-[#2f6bff]" : "text-[#5d6b8a] hover:bg-white/5 hover:text-white")}><Icon className="size-[18px]" /></button>
          ))}
          <span className="flex-1" />
          <button title={c.run} aria-label={c.run} onClick={run} className="grid size-9 place-items-center rounded-lg text-[#5d6b8a] hover:bg-white/5 hover:text-emerald-300"><Play className="size-[18px]" /></button>
        </nav>

        {/* side panel */}
        <aside className={(pane === "files" ? "flex" : "hidden") + " h-[68svh] min-w-0 flex-1 flex-col lg:h-auto bg-[#0b1020] lg:w-60 lg:flex-none lg:border-e lg:border-white/[0.06] " + (side && mode !== "preview" ? "lg:flex" : "lg:hidden")} dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className="flex gap-1 border-b border-white/[0.06] p-1.5 lg:hidden">
            {([["explorer", t.explorer], ["search", t.search], ["settings", t.settings]] as const).map(([id, label]) => (
              <button key={id} onClick={() => setSide(id)} className={"flex-1 rounded-md py-1.5 text-[12px] " + ((side ?? "explorer") === id ? "bg-white/10 text-white" : "text-[#7d89a8]")}>{label}</button>
            ))}
          </div>
          {sidePanel}
        </aside>

        {/* editor */}
        <div className={(pane === "code" ? "flex" : "hidden") + " h-[72svh] min-w-0 flex-1 flex-col bg-[#0f1527] lg:h-auto " + (mode === "code" ? "lg:flex" : "lg:hidden")}>{editorPanel}</div>

        {/* preview + quick actions */}
        <div className={(pane === "preview" ? "flex" : "hidden") + " min-w-0 flex-1 flex-col bg-[#0b1020] lg:flex " + (mode === "code" ? "lg:w-[380px] lg:flex-none lg:border-s lg:border-white/[0.06] xl:w-[420px]" : "")} dir={lang === "ar" ? "rtl" : "ltr"}>
          <div className="h-[70svh] min-h-0 lg:h-auto lg:flex-1" dir="ltr">{previewPanel}</div>
          <div className={"lg:max-h-[40%] lg:shrink-0 lg:overflow-auto " + (mode === "preview" ? "lg:hidden" : "")}>{quick}</div>
        </div>
      </div>

      {/* status bar */}
      <footer className="flex items-center gap-3 overflow-hidden whitespace-nowrap bg-[#2f6bff] px-3 py-1 text-[11px] text-white/90" dir="ltr">
        <span className="inline-flex items-center gap-1"><Code2 className="size-3" /> {langOf(file.name)}</span>
        <span>{t.ln} {cursor.l}, {t.col} {cursor.c}</span>
        <span className="hidden sm:inline">{bytes < 1024 ? `${bytes} B` : `${(bytes / 1024).toFixed(1)} KB`}</span>
        <span className="hidden sm:inline">{p.files.length} {t.files.toLowerCase()}</span>
        <span className="flex-1" />
        <span className="hidden md:inline">UTF-8 · LF</span>
        <span>{t.saved}</span>
      </footer>
    </section>
  );
}
