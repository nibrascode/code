import { RecentFiles } from "@/components/recent-files";
import { addRecent } from "@/lib/recent-files";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { useEffect, useMemo, useState } from "react";
import { ArrowLeft, BarChart3, BookOpen, Check, FileUp, Layers, Plus, RotateCcw, Trash2, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { ui } from "@/kit/shell";
import { LC, type LCopy } from "./i18n";
import { buildSections, generate, grade, isCorrect, isDue, mastered, pickTest, stats, uid, type Card, type Course } from "./engine";

const KEY = "nibras-learn-v1";
export const LEARN_HANDOFF = "nibras-learn-handoff";
const load = (): Course[] => { try { const r = JSON.parse(localStorage.getItem(KEY) || "[]"); return Array.isArray(r) ? r : []; } catch { return []; } };
const persist = (l: Course[]) => { try { localStorage.setItem(KEY, JSON.stringify(l)); } catch { /* quota */ } };

function newCourse(name: string, file: string, pages: string[], c: LCopy): Course | null {
  const sections = buildSections(pages, (a, b) => (a === b ? `${c.pageRange} ${a}` : `${c.pageRange} ${a}–${b}`));
  let cards: Card[] = [];
  for (const s of sections) cards = cards.concat(generate(s, cards, Math.min(12, Math.max(4, Math.round((s.text.match(/\S+/g) ?? []).length / 60)))));
  if (!cards.length) return null;
  const now = Date.now();
  return { id: uid(), name, file, createdAt: now, updatedAt: now, pages: pages.length, sections, cards, log: [] };
}

type Mode = { kind: "home" } | { kind: "test"; ids: string[]; review: boolean } | { kind: "cards"; ids: string[] } | { kind: "stats" };

const LEARN_SECTIONS: { path: string; icon: string; name: string; desc: Record<string, string> }[] = [
  { path: "/learn/logic", icon: "⚡", name: "Logic Lab", desc: { az: "Məntiq qapıları ilə sxem qur və sına", en: "Build and test logic gate circuits", tr: "Mantık kapılarıyla devre kurun", ar: "ابنِ دوائر البوابات المنطقية واختبرها", ru: "Собирайте схемы из логических вентилей" } },
  { path: "/shortcuts", icon: "⌨️", name: "Shortcuts", desc: { az: "VS Code, Chrome, Windows, macOS qısayollarını məşq et", en: "Practise VS Code, Chrome, Windows and macOS shortcuts", tr: "VS Code, Chrome, Windows, macOS kısayollarını çalışın", ar: "تدرّب على اختصارات VS Code وChrome وWindows وmacOS", ru: "Тренируйте сочетания VS Code, Chrome, Windows, macOS" } },
];

export function LearnPage() {
  const { lang } = useI18n();
  const c = LC[lang] ?? LC.en;
  const [list, setList] = useState<Course[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [busy, setBusy] = useState("");
  const [err, setErr] = useState("");
  useEffect(() => {
    const l = load();
    try {
      const h = JSON.parse(localStorage.getItem(LEARN_HANDOFF) || "null");
      localStorage.removeItem(LEARN_HANDOFF);
      if (h && Array.isArray(h.pages) && h.pages.join("").trim()) {
        const course = newCourse(String(h.name || c.fromWs), String(h.file || ""), h.pages.map(String), c);
        if (course) { l.unshift(course); persist(l); setOpenId(course.id); } else setErr(c.few);
      }
    } catch { /* ignore */ }
    setList(l);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const commit = (next: Course[]) => { setList(next); persist(next); };
  const save = (course: Course) => commit((list ?? []).map((x) => (x.id === course.id ? { ...course, updatedAt: Date.now() } : x)));
  const read = async (f?: File) => {
    if (f) void addRecent(f, f.name, "learn");
    if (!f) return;
    setErr(""); setBusy(c.reading);
    try {
      const { pdfToText } = await import("@/pdf/lib/engine");
      const pages = await pdfToText(new Uint8Array(await f.arrayBuffer()), (n, t) => setBusy(`${c.reading} ${n}/${t}`));
      const { textQuality } = await import("@/pdf/lib/textLines");
      const { qualityMessage } = await import("@/pdf/lib/qualityMsg");
      const q = textQuality(pages);
      if (q !== "ok") { setErr(qualityMessage(lang, q)); return; }
      const course = newCourse(f.name.replace(/\.pdf$/i, ""), f.name, pages, c);
      if (!course) { setErr(c.few); return; }
      commit([course, ...(list ?? [])]);
      setOpenId(course.id);
    } catch { setErr(c.bad); } finally { setBusy(""); }
  };
  const course = list?.find((x) => x.id === openId) ?? null;
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-3 pt-24 pb-16 md:px-6 md:pt-28" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="learn">
      {course ? <CourseView key={course.id} course={course} c={c} save={save} back={() => setOpenId(null)} /> : (
        <>
          <header className="mb-5">
            <h1 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight md:text-3xl"><BookOpen className="size-6 text-[#2f6bff]" /> {c.h1}</h1>
            <p className="mt-2 text-sm text-muted md:text-base">{c.lead}</p>
            <p className="mt-2 text-xs text-muted">{c.grounded}</p>
          </header>
          <nav className="mb-5 grid gap-2 sm:grid-cols-2" data-testid="learn-sections">
            {LEARN_SECTIONS.map((x) => (
              <a key={x.path} href={localeHref(lang, x.path)} className="flex items-center gap-3 rounded-2xl border border-[#2f6bff]/35 bg-gradient-to-r from-[#2f6bff]/15 to-[#39ff9c]/5 px-4 py-3 hover:border-[#2f6bff]">
                <span className="text-2xl" aria-hidden="true">{x.icon}</span>
                <span className="min-w-0"><b className="block">{x.name}</b><span className="block text-xs text-muted">{x.desc[lang] ?? x.desc.en}</span></span>
              </a>
            ))}
          </nav>
          <label className={ui.drop} onDragOver={(e) => e.preventDefault()} onDrop={(e) => { e.preventDefault(); void read(e.dataTransfer.files[0]); }}>
            <span><FileUp className="mx-auto mb-2 size-7 opacity-80" /><b>{c.pick}</b><br /><span className="text-muted">{busy || c.drop}</span></span>
            <input className="sr-only" type="file" accept="application/pdf,.pdf" data-testid="learn-pdf" onChange={(e) => { void read(e.target.files?.[0]); e.target.value = ""; }} />
          </label>
      <RecentFiles accept="application/pdf,.pdf" onPick={(f) => void read(f)} />
          {err ? <p className="mb-3 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200">{err}</p> : null}
          <p className="mb-5 text-xs text-muted">{c.local} · <a className="underline" href={localeHref(lang, "/workspace")}>{c.workspace}</a></p>
          <h2 className="mb-3 text-base font-semibold">{c.courses}</h2>
          {list && list.length ? (
            <ul className="grid gap-2" data-testid="learn-list">
              {list.map((x) => { const s = stats(x); return (
                <li key={x.id} className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
                  <button className="min-w-0 flex-1 text-start" onClick={() => setOpenId(x.id)}>
                    <b className="block truncate">{x.name}</b>
                    <span className="text-xs text-muted">{s.total} {c.questions} · {s.mastered} {c.mastered} · {s.due} {c.due}</span>
                    <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-white/10"><span className="block h-full bg-emerald-400" style={{ width: `${s.total ? (s.mastered / s.total) * 100 : 0}%` }} /></span>
                  </button>
                  <button className={ui.btn + " size-10 justify-center p-0 text-red-300"} aria-label={c.del} onClick={() => { if (confirm(c.confirmDel)) commit(list.filter((y) => y.id !== x.id)); }}><Trash2 className="size-4" /></button>
                </li>); })}
            </ul>
          ) : list ? <p className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-muted">{c.empty}</p> : null}
        </>
      )}
      <footer className="mt-10 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}

function CourseView({ course, c, save, back }: { course: Course; c: LCopy; save: (x: Course) => void; back: () => void }) {
  const [mode, setMode] = useState<Mode>({ kind: "home" });
  const [sec, setSec] = useState<string>("all");
  const st = useMemo(() => stats(course), [course]);
  const pool = sec === "all" ? course.cards : course.cards.filter((x) => x.sec === sec);
  const answer = (card: Card, ok: boolean) => save({ ...course, cards: course.cards.map((x) => (x.id === card.id ? grade(x, ok) : x)), log: [...course.log.slice(-4999), { at: Date.now(), card: card.id, ok }] });
  const more = () => {
    const targets = sec === "all" ? course.sections : course.sections.filter((s) => s.id === sec);
    let cards = course.cards;
    for (const s of targets) cards = cards.concat(generate(s, cards, 5));
    save({ ...course, cards });
  };
  const due = course.cards.filter((x) => isDue(x));
  if (mode.kind === "test") return <Quiz key={mode.ids.join()} course={course} ids={mode.ids} c={c} onAnswer={answer} done={() => setMode({ kind: "home" })} />;
  if (mode.kind === "cards") return <Flash course={course} ids={mode.ids} c={c} onAnswer={answer} done={() => setMode({ kind: "home" })} />;
  return (
    <>
      <div className="mb-4 flex items-center gap-2">
        <button className={ui.btn + " min-h-10"} onClick={mode.kind === "stats" ? () => setMode({ kind: "home" }) : back} data-testid="learn-back"><ArrowLeft className="rtl-flip size-4" /> {mode.kind === "stats" ? course.name.slice(0, 24) : c.back}</button>
        <h1 className="min-w-0 truncate font-display text-xl font-bold md:text-2xl">{mode.kind === "stats" ? c.stats : course.name}</h1>
      </div>
      {mode.kind === "stats" ? <Stats st={st} c={c} /> : (
        <>
          <div className="mb-4 grid grid-cols-3 gap-2 text-center">
            {[[st.total, c.total], [st.mastered, c.mastered], [st.due, c.due]].map(([v, k]) => <div key={String(k)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><div className="text-2xl font-bold">{v}</div><div className="text-[11px] text-muted">{k}</div></div>)}
          </div>
          <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            <button className={ui.primary + " min-h-12 justify-center"} disabled={!pool.length} onClick={() => setMode({ kind: "test", ids: pickTest(pool, 10).map((x) => x.id), review: false })} data-testid="learn-test"><Check className="size-4" /> {c.test}</button>
            <button className={ui.btn + " min-h-12 justify-center"} disabled={!pool.length} onClick={() => setMode({ kind: "cards", ids: pickTest(pool, 20).map((x) => x.id) })} data-testid="learn-cards"><Layers className="size-4" /> {c.cards}</button>
            <button className={ui.btn + " min-h-12 justify-center " + (due.length ? "border-amber-400/50" : "")} onClick={() => setMode({ kind: "test", ids: due.slice(0, 20).map((x) => x.id), review: true })} disabled={!due.length} data-testid="learn-review"><RotateCcw className="size-4" /> {c.review} ({due.length})</button>
            <button className={ui.btn + " min-h-12 justify-center"} onClick={() => setMode({ kind: "stats" })} data-testid="learn-stats"><BarChart3 className="size-4" /> {c.stats}</button>
          </div>
          {!due.length && st.seen ? <p className="mb-3 text-xs text-muted">{c.noDue}</p> : null}
          <div className="mb-2 flex items-center justify-between"><h2 className="text-base font-semibold">{c.sections}</h2><button className={ui.btn + " px-2 py-1 text-xs"} onClick={more} data-testid="learn-more"><Plus className="size-3.5" /> {c.more}</button></div>
          <ul className="grid gap-2" data-testid="learn-sections">
            <li><button onClick={() => setSec("all")} className={"w-full rounded-2xl border p-3 text-start " + (sec === "all" ? "border-[#2f6bff] bg-[#2f6bff]/15" : "border-white/10 bg-white/[0.04]")}><b>{c.all}</b> <span className="text-xs text-muted">· {course.cards.length} {c.questions}</span></button></li>
            {st.bySec.map((b) => (
              <li key={b.s.id}><button onClick={() => setSec(b.s.id)} className={"w-full rounded-2xl border p-3 text-start " + (sec === b.s.id ? "border-[#2f6bff] bg-[#2f6bff]/15" : "border-white/10 bg-white/[0.04]")}>
                <b className="block truncate" dir="auto">{b.s.title}</b>
                <span className="text-xs text-muted">{b.total} {c.questions} · {b.mastered} {c.mastered}{b.acc >= 0 ? ` · ${c.acc} ${b.acc}%` : ""}{b.due ? ` · ${b.due} ${c.due}` : ""}</span>
                <span className="mt-2 block h-1.5 overflow-hidden rounded-full bg-white/10"><span className="block h-full bg-emerald-400" style={{ width: `${b.total ? (b.mastered / b.total) * 100 : 0}%` }} /></span>
              </button></li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

function Source({ card, c }: { card: Card; c: LCopy }) {
  const i = card.source.toLocaleLowerCase().indexOf(card.word.toLocaleLowerCase());
  return (
    <div className="mt-3 rounded-xl border border-white/10 bg-black/30 p-3 text-sm" data-testid="learn-source">
      <div className="mb-1 text-xs text-muted">{c.source} · {c.page} {card.page}</div>
      <p dir="auto" className="leading-relaxed">{i >= 0 ? <>{card.source.slice(0, i)}<mark className="rounded bg-emerald-400/30 px-0.5 text-inherit">{card.source.slice(i, i + card.word.length)}</mark>{card.source.slice(i + card.word.length)}</> : card.source}</p>
    </div>
  );
}

function Quiz({ course, ids, c, onAnswer, done }: { course: Course; ids: string[]; c: LCopy; onAnswer: (card: Card, ok: boolean) => void; done: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const cards = ids.map((id) => course.cards.find((x) => x.id === id)).filter(Boolean) as Card[];
  const card = cards[i];
  const L = ["A", "B", "C", "D"];
  if (!card) return (
    <section className="text-center" data-testid="learn-result">
      <h2 className="font-display text-2xl font-bold">{c.result}</h2>
      <p className="mt-2 text-5xl font-bold">{score}<span className="text-2xl text-muted">{c.of}{cards.length}</span></p>
      <div className="mt-6 flex justify-center gap-2"><button className={ui.primary + " min-h-11"} onClick={done}>{c.back}</button></div>
    </section>
  );
  const ok = picked !== null && isCorrect(card, card.options[picked]);
  const sec = course.sections.find((s) => s.id === card.sec);
  return (
    <section data-testid="learn-quiz">
      <div className="mb-3 flex items-center gap-2 text-xs text-muted"><button className={ui.btn + " px-2 py-1"} onClick={done} aria-label={c.back}><X className="size-4" /></button><span>{i + 1}{c.of}{cards.length}</span><span className="truncate" dir="auto">· {sec?.title}</span></div>
      <div className="mb-4 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-[#2f6bff] transition-all" style={{ width: `${(i / cards.length) * 100}%` }} /></div>
      <p className="mb-4 text-base font-medium leading-relaxed md:text-lg" dir="auto" data-testid="learn-q">{card.q}</p>
      <div className="grid gap-2">
        {card.options.map((o, j) => {
          const right = picked !== null && isCorrect(card, o);
          const cls = picked === null ? "border-white/15 hover:bg-white/10" : right ? "border-emerald-400/70 bg-emerald-500/15" : j === picked ? "border-red-400/70 bg-red-500/15" : "border-white/10 opacity-60";
          return <button key={j} disabled={picked !== null} data-testid="learn-opt" onClick={() => { setPicked(j); const good = isCorrect(card, o); if (good) setScore((s) => s + 1); onAnswer(card, good); }} className={"min-h-12 rounded-xl border px-4 py-2 text-start text-sm " + cls} dir="auto"><b className="me-2">{L[j]}</b>{o}</button>;
        })}
      </div>
      {picked !== null ? (
        <>
          <p className={"mt-3 text-sm font-semibold " + (ok ? "text-emerald-300" : "text-red-300")} data-testid="learn-verdict">{ok ? c.correct : `${c.wrong} · ${c.rightAns}: ${card.word}`}</p>
          <Source card={card} c={c} />
          <button className={ui.primary + " mt-4 min-h-12 w-full justify-center"} onClick={() => { setPicked(null); setI(i + 1); }} data-testid="learn-next">{i + 1 < cards.length ? c.next : c.finish}</button>
        </>
      ) : null}
    </section>
  );
}

function Flash({ course, ids, c, onAnswer, done }: { course: Course; ids: string[]; c: LCopy; onAnswer: (card: Card, ok: boolean) => void; done: () => void }) {
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const cards = ids.map((id) => course.cards.find((x) => x.id === id)).filter(Boolean) as Card[];
  const card = cards[i];
  useEffect(() => { if (!card) done(); }, [card, done]);
  if (!card) return null;
  const go = (ok: boolean) => { onAnswer(card, ok); setFlip(false); if (i + 1 >= cards.length) done(); else setI(i + 1); };
  return (
    <section data-testid="learn-flash">
      <div className="mb-3 flex items-center gap-2 text-xs text-muted"><button className={ui.btn + " px-2 py-1"} onClick={done} aria-label={c.back}><X className="size-4" /></button>{i + 1}{c.of}{cards.length}</div>
      <button onClick={() => setFlip(true)} className="block min-h-[38vh] w-full rounded-3xl border border-white/15 bg-gradient-to-br from-[#2f6bff]/25 to-transparent p-6 text-start" data-testid="learn-card">
        <p className="text-lg leading-relaxed" dir="auto">{card.q}</p>
        {flip ? <p className="mt-4 text-2xl font-bold text-emerald-300" dir="auto">{card.word}</p> : <p className="mt-6 text-sm text-muted">{c.flip}</p>}
      </button>
      {flip ? (
        <>
          <Source card={card} c={c} />
          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className={ui.btn + " min-h-12 justify-center border-red-400/50"} onClick={() => go(false)} data-testid="learn-didnt"><X className="size-4" /> {c.didnt}</button>
            <button className={ui.primary + " min-h-12 justify-center"} onClick={() => go(true)} data-testid="learn-knew"><Check className="size-4" /> {c.knew}</button>
          </div>
        </>
      ) : null}
    </section>
  );
}

function Stats({ st, c }: { st: ReturnType<typeof stats>; c: LCopy }) {
  const max = Math.max(1, ...st.days.map((d) => d.n));
  return (
    <section data-testid="learn-statsview">
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        {[[`${st.acc}%`, c.acc], [st.answered, c.answered], [`${st.mastered}/${st.total}`, c.mastered], [st.due, c.due]].map(([v, k]) => <div key={String(k)} className="rounded-2xl border border-white/10 bg-white/[0.04] p-3"><div className="text-2xl font-bold">{v}</div><div className="text-[11px] text-muted">{k}</div></div>)}
      </div>
      <h3 className="mt-5 mb-2 text-sm font-semibold">{c.week}</h3>
      <div className="flex h-28 items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3">
        {st.days.map((d, k) => <div key={k} className="flex flex-1 flex-col items-center gap-1"><div className="flex w-full flex-col justify-end" style={{ height: 70 }}><div className="w-full rounded-t bg-red-400/60" style={{ height: `${((d.n - d.ok) / max) * 70}px` }} /><div className="w-full rounded-b bg-emerald-400" style={{ height: `${(d.ok / max) * 70}px` }} /></div><span className="text-[10px] text-muted">{d.day.getDate()}</span></div>)}
      </div>
      <h3 className="mt-5 mb-2 text-sm font-semibold">{c.bySec}</h3>
      <ul className="space-y-2">
        {st.bySec.map((b) => <li key={b.s.id} className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm"><div className="flex justify-between gap-2"><span className="truncate" dir="auto">{b.s.title}</span><b>{b.acc >= 0 ? `${b.acc}%` : "—"}</b></div><div className="mt-1 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full bg-emerald-400" style={{ width: `${Math.max(0, b.acc)}%` }} /></div><div className="mt-1 text-[11px] text-muted">{b.mastered}/{b.total} {c.mastered}{b.due ? ` · ${b.due} ${c.due}` : ""}</div></li>)}
      </ul>
    </section>
  );
}
