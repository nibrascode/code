import { useCallback, useEffect, useMemo, useState } from "react";
import { ArrowLeft, Code2, Download, FileText, FileUp, FolderPlus, ListChecks, Pencil, Trash2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { save, ui } from "@/kit/shell";
import { WS, type WsCopy } from "./i18n";
import { makeQuestions, questionsToText, type Question } from "./questions";
import { textToDocx } from "./files";
import { CodeTool } from "./ide";
import { localeHref } from "@/lib/locale-path";
import { BookOpen } from "lucide-react";

type CodeFile = { name: string; content: string };
type Act = "act_created" | "act_pdf" | "act_q" | "act_doc" | "act_run" | "act_zip" | "act_edit";
type Tab = "pdf" | "q" | "doc" | "code";
export type Project = {
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  last: Act;
  tab: Tab;
  pdfName: string;
  pdfPages: number;
  pageTexts?: string[];
  text: string;
  qCount: number;
  questions: Question[];
  docTitle: string;
  docBody: string;
  files: CodeFile[];
  activeFile: string;
};

const KEY = "nibras-workspace-v1";
const DEFAULT_FILES: CodeFile[] = [
  { name: "index.html", content: "<!doctype html>\n<html lang=\"az\">\n<head>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <title>Layihə</title>\n  <link rel=\"stylesheet\" href=\"style.css\">\n</head>\n<body>\n  <h1>Salam, dünya!</h1>\n  <button id=\"btn\">Bas</button>\n  <p id=\"out\"></p>\n  <script src=\"script.js\"></script>\n</body>\n</html>\n" },
  { name: "style.css", content: "body {\n  font-family: system-ui, sans-serif;\n  padding: 24px;\n  background: #0b1020;\n  color: #f1f4ff;\n}\nbutton {\n  padding: 10px 18px;\n  border: 0;\n  border-radius: 12px;\n  background: #2f6bff;\n  color: #fff;\n  font-size: 16px;\n}\n" },
  { name: "script.js", content: "let n = 0;\ndocument.getElementById(\"btn\").addEventListener(\"click\", () => {\n  n++;\n  document.getElementById(\"out\").textContent = \"Basıldı: \" + n;\n  console.log(\"click\", n);\n});\n" },
];
const SAMPLE_TEXT =
  "Fotosintez yaşıl bitkilərin günəş işığından istifadə edərək qida hazırladığı prosesdir. Bu proses əsasən yarpaqlarda, xloroplast adlanan hissəciklərdə gedir. Xloroplastların içində olan xlorofil piqmenti işığı udur və bitkiyə yaşıl rəng verir. Fotosintez zamanı bitki havadan karbon qazını, torpaqdan isə suyu götürür. Nəticədə qlükoza əmələ gəlir və atmosferə oksigen buraxılır. Qlükoza bitkinin böyüməsi üçün enerji mənbəyidir. Yer kürəsində oksigenin böyük hissəsi okeanlardakı yosunlar tərəfindən istehsal olunur. İşıq az olanda fotosintezin sürəti azalır.";

function uid() {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
function blank(name: string): Project {
  const now = Date.now();
  return { id: uid(), name, createdAt: now, updatedAt: now, last: "act_created", tab: "pdf", pdfName: "", pdfPages: 0, text: "", qCount: 5, questions: [], docTitle: name, docBody: "", files: DEFAULT_FILES.map((f) => ({ ...f })), activeFile: "index.html" };
}
function load(): Project[] {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || "[]");
    return Array.isArray(raw) ? raw.filter((p) => p && p.id) : [];
  } catch {
    return [];
  }
}
function persist(list: Project[]) {
  try {
    localStorage.setItem(KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}
function ago(t: number, c: WsCopy) {
  const m = Math.floor((Date.now() - t) / 60000);
  if (m < 1) return c.justNow;
  if (m < 60) return `${m} ${c.minAgo}`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h} ${c.hrAgo}`;
  return `${Math.floor(h / 24)} ${c.dayAgo}`;
}
const safeName = (s: string) => (s.trim() || "nibras").replace(/[\\/:*?"<>|]+/g, "-").slice(0, 80);

export function WorkspacePage() {
  const { lang } = useI18n();
  const c = WS[lang] ?? WS.en;
  const [list, setList] = useState<Project[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);

  useEffect(() => {
    setList(load());
    const id = new URLSearchParams(location.search).get("p");
    if (id) setOpenId(id);
  }, []);
  const commit = useCallback((next: Project[]) => {
    setList(next);
    persist(next);
  }, []);
  const go = (id: string | null) => {
    setOpenId(id);
    const u = new URL(location.href);
    if (id) u.searchParams.set("p", id);
    else u.searchParams.delete("p");
    history.replaceState(history.state, "", u.toString());
    window.scrollTo({ top: 0 });
  };

  const current = list?.find((p) => p.id === openId) ?? null;
  const update = useCallback(
    (id: string, patch: Partial<Project>, act: Act = "act_edit") => {
      setList((prev) => {
        if (!prev) return prev;
        const next = prev.map((p) => (p.id === id ? { ...p, ...patch, updatedAt: Date.now(), last: act === "act_edit" && p.last !== "act_created" ? p.last : act } : p));
        persist(next);
        return next;
      });
    },
    [],
  );

  return (
    <main className={"files-page ws-page mx-auto w-full px-3 " + (current?.tab === "code" ? "max-w-[1680px]" : "max-w-5xl") + " pt-24 pb-16 md:px-6 md:pt-28"} dir={lang === "ar" ? "rtl" : "ltr"} data-testid="workspace">
      {current ? (
        <ProjectView key={current.id} p={current} c={c} update={update} onBack={() => go(null)} />
      ) : (
        <Home c={c} list={list} commit={commit} open={go} />
      )}
    </main>
  );
}

function Home({ c, list, commit, open }: { c: WsCopy; list: Project[] | null; commit: (l: Project[]) => void; open: (id: string) => void }) {
  const [name, setName] = useState("");
  const sorted = useMemo(() => [...(list ?? [])].sort((a, b) => b.updatedAt - a.updatedAt), [list]);
  const create = (p: Project) => {
    commit([p, ...(list ?? [])]);
    open(p.id);
  };
  const sample = () => {
    const p = blank(c.sample);
    p.text = SAMPLE_TEXT;
    p.tab = "q";
    create(p);
  };
  return (
    <>
      <header className="mb-5">
        <h1 className="font-display text-3xl font-bold tracking-tight md:text-5xl">{c.h1}</h1>
        <p className="mt-2 max-w-2xl text-sm text-muted md:text-base">{c.lead}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs">
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{c.flow1}</span>
          <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1">{c.flow2}</span>
        </div>
      </header>
      <form
        className="mb-6 flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:flex-row"
        onSubmit={(e) => {
          e.preventDefault();
          create(blank(name.trim() || c.untitled));
          setName("");
        }}
      >
        <input className={ui.field + " min-h-11"} placeholder={c.projectName} value={name} onChange={(e) => setName(e.target.value)} maxLength={80} data-testid="ws-name" aria-label={c.projectName} />
        <button className={ui.primary + " min-h-11 justify-center whitespace-nowrap"} type="submit" data-testid="ws-create">
          <FolderPlus className="size-4" /> {c.newProject}
        </button>
        <button className={ui.btn + " min-h-11 justify-center whitespace-nowrap"} type="button" onClick={sample} data-testid="ws-sample">
          {c.sample}
        </button>
      </form>
      <p className="mb-6 text-xs text-muted">{c.local}</p>

      {list === null ? null : sorted.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-muted">{c.empty}</p>
      ) : (
        <>
          <h2 className="mb-3 text-base font-semibold">{c.recent}</h2>
          <div className="mb-8 flex snap-x gap-3 overflow-x-auto pb-2" data-testid="ws-recent">
            {sorted.slice(0, 5).map((p) => (
              <button key={p.id} onClick={() => open(p.id)} className="min-w-[200px] snap-start rounded-2xl border border-white/10 bg-gradient-to-br from-[#2f6bff]/20 to-transparent p-4 text-start hover:border-white/30">
                <b className="block truncate">{p.name}</b>
                <span className="mt-1 block text-xs text-muted">
                  {c[p.last]} · {ago(p.updatedAt, c)}
                </span>
              </button>
            ))}
          </div>
          <h2 className="mb-3 text-base font-semibold">{c.projects}</h2>
          <ul className="grid gap-2 sm:grid-cols-2" data-testid="ws-list">
            {sorted.map((p) => (
              <li key={p.id} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                <button className="min-w-0 flex-1 text-start" onClick={() => open(p.id)}>
                  <b className="block truncate">{p.name}</b>
                  <span className="text-xs text-muted">
                    {[p.pdfName && "PDF", p.questions.length ? `${p.questions.length} ${c.tabQ.toLowerCase()}` : "", `${p.files.length} ${c.files.toLowerCase()}`].filter(Boolean).join(" · ")} · {ago(p.updatedAt, c)}
                  </span>
                </button>
                <button
                  className={ui.btn + " size-10 justify-center p-0"}
                  aria-label={c.rename}
                  title={c.rename}
                  onClick={() => {
                    const n = prompt(c.projectName, p.name);
                    if (n && n.trim()) commit((list ?? []).map((x) => (x.id === p.id ? { ...x, name: n.trim().slice(0, 80), updatedAt: Date.now() } : x)));
                  }}
                >
                  <Pencil className="size-4" />
                </button>
                <button
                  className={ui.btn + " size-10 justify-center p-0 text-red-300"}
                  aria-label={c.del}
                  title={c.del}
                  data-testid="ws-del"
                  onClick={() => {
                    if (confirm(c.confirmDel)) commit((list ?? []).filter((x) => x.id !== p.id));
                  }}
                >
                  <Trash2 className="size-4" />
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function ProjectView({ p, c, update, onBack }: { p: Project; c: WsCopy; update: (id: string, patch: Partial<Project>, act?: Act) => void; onBack: () => void }) {
  const set = (patch: Partial<Project>, act?: Act) => update(p.id, patch, act);
  const tabs: { id: Tab; label: string; icon: typeof FileText }[] = [
    { id: "pdf", label: c.tabPdf, icon: FileUp },
    { id: "q", label: c.tabQ, icon: ListChecks },
    { id: "doc", label: c.tabDoc, icon: FileText },
    { id: "code", label: c.tabCode, icon: Code2 },
  ];
  return (
    <>
      <div className="mb-3 flex items-center gap-2">
        <button className={ui.btn + " min-h-10"} onClick={onBack} data-testid="ws-back">
          <ArrowLeft className="rtl-flip size-4" /> {c.back}
        </button>
        <input
          className="min-w-0 flex-1 rounded-xl border border-transparent bg-transparent px-2 py-1 font-display text-xl font-bold hover:border-white/15 focus:border-white/25 md:text-2xl"
          value={p.name}
          aria-label={c.projectName}
          maxLength={80}
          onChange={(e) => set({ name: e.target.value })}
          data-testid="ws-title"
        />
      </div>
      <nav className="sticky top-16 z-10 -mx-3 mb-4 flex gap-1 overflow-x-auto border-b border-white/10 bg-[var(--background,#0b1020)]/90 px-3 py-2 backdrop-blur md:static md:mx-0 md:rounded-2xl md:border md:px-2" role="tablist">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={p.tab === t.id}
            data-testid={`ws-tab-${t.id}`}
            onClick={() => set({ tab: t.id })}
            className={"inline-flex min-h-10 flex-1 items-center justify-center gap-1.5 whitespace-nowrap rounded-xl px-3 text-sm font-medium " + (p.tab === t.id ? "bg-[#2f6bff] text-white" : "text-muted hover:bg-white/10")}
          >
            <t.icon className="size-4" /> {t.label}
          </button>
        ))}
      </nav>
      {p.tab === "pdf" ? <PdfTool p={p} c={c} set={set} /> : null}
      {p.tab === "q" ? <QTool p={p} c={c} set={set} /> : null}
      {p.tab === "doc" ? <DocTool p={p} c={c} set={set} /> : null}
      {p.tab === "code" ? <CodeTool p={p} c={c} set={set} /> : null}
    </>
  );
}

type ToolProps = { p: Project; c: WsCopy; set: (patch: Partial<Project>, act?: Act) => void };

function appendDoc(p: Project, text: string) {
  return p.docBody.trim() ? `${p.docBody.replace(/\s+$/, "")}\n\n${text}` : text;
}

function PdfTool({ p, c, set }: ToolProps) {
  const { lang } = useI18n();
  const [busy, setBusy] = useState("");
  const [err, setErr] = useState("");
  const read = async (f?: File) => {
    if (!f) return;
    setErr("");
    setBusy(c.reading);
    try {
      const { pdfToText } = await import("@/pdf/lib/engine");
      const pages = await pdfToText(new Uint8Array(await f.arrayBuffer()), (n, total) => setBusy(`${c.reading} ${n}/${total}`));
      const text = pages.join("\n\n").trim();
      const { textQuality } = await import("@/pdf/lib/textLines");
      const { qualityMessage } = await import("@/pdf/lib/qualityMsg");
      const q = textQuality(pages);
      if (q !== "ok") setErr(qualityMessage(lang, q));
      set({ pdfName: f.name, pdfPages: pages.length, pageTexts: pages, text }, "act_pdf");
    } catch {
      setErr(c.pdfBad);
    } finally {
      setBusy("");
    }
  };
  return (
    <section>
      <label className={ui.drop} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); void read(e.dataTransfer.files[0]); }}>
        <span>
          <FileUp className="mx-auto mb-2 size-7 opacity-80" />
          <b>{c.pickPdf}</b>
          <br />
          <span className="text-muted">{busy || (p.pdfName ? `${p.pdfName} · ${p.pdfPages} ${c.page}` : c.drop)}</span>
        </span>
        <input className="sr-only" type="file" accept="application/pdf,.pdf" data-testid="ws-pdf" onChange={(e) => { void read(e.target.files?.[0]); e.target.value = ""; }} />
      </label>
      {err ? <p className="mb-3 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{err}</p> : null}
      <label className="mb-1 block text-sm text-muted">{c.extracted}</label>
      <textarea className={ui.field + " min-h-[40vh] font-mono text-[13px] leading-relaxed"} value={p.text} onChange={(e) => set({ text: e.target.value })} data-testid="ws-text" dir="auto" />
      <div className="mt-3 grid grid-cols-1 gap-2 sm:flex">
        <button className={ui.primary + " min-h-11 justify-center"} disabled={!p.text.trim()} onClick={() => set({ tab: "q" })} data-testid="ws-to-q">
          <ListChecks className="size-4" /> {c.toQ}
        </button>
        <button className={ui.btn + " min-h-11 justify-center"} disabled={!p.text.trim()} onClick={() => set({ docBody: appendDoc(p, p.text), tab: "doc" })} data-testid="ws-text-to-doc">
          <FileText className="size-4" /> {c.toDoc}
        </button>
        <button
          className={ui.btn + " min-h-11 justify-center"}
          disabled={!p.text.trim()}
          data-testid="ws-to-learn"
          onClick={() => {
            const same = p.pageTexts && p.pageTexts.join("\n\n").trim() === p.text.trim();
            localStorage.setItem("nibras-learn-handoff", JSON.stringify({ name: p.name, file: p.pdfName, pages: same ? p.pageTexts : [p.text] }));
            location.href = localeHref(lang, "/learn");
          }}
        >
          <BookOpen className="size-4" /> {c.learn}
        </button>
        <span className="self-center text-xs text-muted">{(p.text.match(/\S+/g) ?? []).length} {c.words}</span>
      </div>
    </section>
  );
}

function QTool({ p, c, set }: ToolProps) {
  const [show, setShow] = useState(false);
  const [msg, setMsg] = useState("");
  const L = ["A", "B", "C", "D"];
  const make = () => {
    const qs = makeQuestions(p.text, p.qCount, (Date.now() % 100000) + 1);
    setMsg(qs.length ? "" : c.few);
    set({ questions: qs }, "act_q");
  };
  return (
    <section>
      <label className="mb-1 block text-sm text-muted">{c.sourceText}</label>
      <textarea className={ui.field + " min-h-[22vh] leading-relaxed"} placeholder={c.sourceHint} value={p.text} onChange={(e) => set({ text: e.target.value })} dir="auto" data-testid="ws-qsource" />
      <div className="mt-3 flex flex-wrap items-center gap-2">
        <label className="flex items-center gap-2 text-sm">
          {c.count}
          <select className={ui.field + " w-20"} value={p.qCount} onChange={(e) => set({ qCount: Number(e.target.value) })}>
            {[3, 5, 10, 15, 20].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </label>
        <button className={ui.primary + " min-h-11"} disabled={!p.text.trim()} onClick={make} data-testid="ws-make-q">
          <ListChecks className="size-4" /> {c.make}
        </button>
      </div>
      <p className="mt-2 text-xs text-muted">{c.qNote}</p>
      {msg ? <p className="mt-3 text-sm text-amber-200">{msg}</p> : null}
      {p.questions.length ? (
        <>
          <ol className="mt-4 space-y-3" data-testid="ws-qlist">
            {p.questions.map((q, i) => (
              <li key={i} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-sm font-medium leading-relaxed" dir="auto">{i + 1}. {q.q}</p>
                <ul className="mt-2 grid gap-1.5 sm:grid-cols-2">
                  {q.options.map((o, j) => (
                    <li key={j} className={"rounded-xl border px-3 py-2 text-sm " + (show && j === q.answer ? "border-emerald-400/60 bg-emerald-500/15" : "border-white/10")} dir="auto">
                      <b className="me-1">{L[j]})</b> {o}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
          <div className="mt-3 grid grid-cols-1 gap-2 sm:flex">
            <button className={ui.btn + " min-h-11 justify-center"} onClick={() => setShow(!show)}>{show ? c.hideAns : c.showAns}</button>
            <button className={ui.primary + " min-h-11 justify-center"} onClick={() => set({ docBody: appendDoc(p, questionsToText(p.questions, c)), tab: "doc" })} data-testid="ws-q-to-doc">
              <FileText className="size-4" /> {c.toDoc}
            </button>
          </div>
        </>
      ) : null}
    </section>
  );
}

function DocTool({ p, c, set }: ToolProps) {
  const [busy, setBusy] = useState(false);
  const base = safeName(p.docTitle || p.name);
  const full = () => (p.docTitle.trim() ? `${p.docTitle.trim()}\n\n${p.docBody}` : p.docBody);
  const dl = async (kind: "docx" | "pdf" | "txt") => {
    setBusy(true);
    try {
      if (kind === "txt") save(`${base}.txt`, new Blob(["\ufeff" + full()], { type: "text/plain;charset=utf-8" }));
      if (kind === "docx") save(`${base}.docx`, await textToDocx(p.docBody, p.docTitle.trim() || undefined));
      if (kind === "pdf") {
        const { textToPdf } = await import("@/pdf/lib/engine");
        const bytes = await textToPdf(p.docBody || " ", { size: "a4", fontSize: 12, align: "left", bold: false, margin: 56, pageNumbers: true, title: p.docTitle.trim() || undefined });
        save(`${base}.pdf`, new Blob([bytes as BlobPart], { type: "application/pdf" }));
      }
      set({}, "act_doc");
    } finally {
      setBusy(false);
    }
  };
  return (
    <section>
      <input className={ui.field + " mb-2 min-h-11 text-base font-semibold"} placeholder={c.docTitle} aria-label={c.docTitle} value={p.docTitle} onChange={(e) => set({ docTitle: e.target.value })} dir="auto" data-testid="ws-doctitle" />
      <textarea className={ui.field + " min-h-[50vh] text-[15px] leading-relaxed"} placeholder={c.docBody} aria-label={c.docBody} value={p.docBody} onChange={(e) => set({ docBody: e.target.value })} dir="auto" data-testid="ws-docbody" />
      <p className="mt-1 text-xs text-muted">{(p.docBody.match(/\S+/g) ?? []).length} {c.words}</p>
      <div className="mt-3 grid grid-cols-3 gap-2 sm:flex">
        <button className={ui.primary + " min-h-11 justify-center"} disabled={busy || !p.docBody.trim()} onClick={() => void dl("docx")} data-testid="ws-dl-docx"><Download className="size-4" /> {c.dlDocx}</button>
        <button className={ui.btn + " min-h-11 justify-center"} disabled={busy || !p.docBody.trim()} onClick={() => void dl("pdf")} data-testid="ws-dl-pdf"><Download className="size-4" /> {c.dlPdf}</button>
        <button className={ui.btn + " min-h-11 justify-center"} disabled={busy || !p.docBody.trim()} onClick={() => void dl("txt")} data-testid="ws-dl-txt"><Download className="size-4" /> {c.dlTxt}</button>
      </div>
    </section>
  );
}
