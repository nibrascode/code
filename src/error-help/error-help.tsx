import { ToolsLegalLinks } from "@/legal/tools-legal";
import { useEffect, useState } from "react";
import { Bug, Copy, Lightbulb, ListChecks, Code2, HelpCircle } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { ui } from "@/kit/shell";
import { UI, type Lang } from "./strings";

type Answer = { meaning: string; causes: string[]; checklist: string[]; example: string; stack: string };
const STACKS = ["auto", "python", "javascript", "android"] as const;
const STACK_LABEL: Record<string, string> = { python: "Python", javascript: "JavaScript", android: "Android/Gradle" };
const DAILY = 10;
const KEY = "nx-error-help-quota";

function quota(): { day: string; n: number } {
  const day = new Date().toISOString().slice(0, 10);
  try { const q = JSON.parse(localStorage.getItem(KEY) || "{}"); if (q.day === day) return { day, n: Number(q.n) || 0 }; } catch { /* boş */ }
  return { day, n: 0 };
}

export function ErrorHelpPage() {
  const { lang } = useI18n();
  const t = UI[lang as Lang] ?? UI.en;
  const [text, setText] = useState("");
  const [stack, setStack] = useState<(typeof STACKS)[number]>("auto");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [ans, setAns] = useState<Answer | null>(null);
  const [left, setLeft] = useState(DAILY);
  const [copied, setCopied] = useState(false);
  useEffect(() => { setLeft(Math.max(0, DAILY - quota().n)); }, []);

  const run = async () => {
    if (busy) return;
    if (!text.trim()) { setErr(t.e_empty); return; }
    const q = quota();
    if (q.n >= DAILY) { setErr(t.e_limit); return; }
    setBusy(true); setErr(""); setAns(null);
    try {
      const r = await fetch("/api/error-help", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ error: text.trim(), stack, lang }) });
      const j = await r.json().catch(() => ({ ok: false, error: "other" }));
      if (j.ok) {
        setAns(j);
        localStorage.setItem(KEY, JSON.stringify({ day: q.day, n: q.n + 1 }));
        setLeft(Math.max(0, DAILY - q.n - 1));
      } else setErr(t[`e_${j.error}`] ?? t.e_other);
    } catch { setErr(t.e_other); } finally { setBusy(false); }
  };
  const copy = async () => {
    if (!ans) return;
    const lines = [`${t.meaning}: ${ans.meaning}`, "", `${t.causes}:`, ...ans.causes.map((c) => `- ${c}`), "", `${t.checklist}:`, ...ans.checklist.map((c) => `- ${c}`), "", `${t.example}:`, ans.example];
    await navigator.clipboard.writeText(lines.join("\n")).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  };
  const box = "rounded-2xl border border-white/10 bg-white/[0.04] p-4";
  const h2 = "mb-2 flex items-center gap-2 text-base font-semibold";
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-3 pt-24 pb-16 md:px-6 md:pt-28" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="error-help">
      <header className="mb-5">
        <h1 className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight md:text-5xl"><Bug className="size-8 text-[#2f6bff]" /> {t.h1}</h1>
        <p className="mt-2 text-sm text-muted md:text-base">{t.lead}</p>
      </header>
      <form className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3" onSubmit={(e) => { e.preventDefault(); void run(); }}>
        <textarea className={ui.field + " min-h-48 font-mono text-sm"} dir="ltr" spellCheck={false} autoCapitalize="off" autoCorrect="off" maxLength={6000} placeholder={t.ph} aria-label={t.ph} value={text} onChange={(e) => setText(e.target.value)} data-testid="eh-input" />
        <div className="flex flex-wrap items-center gap-2">
          {STACKS.map((s) => (
            <button key={s} type="button" onClick={() => setStack(s)} aria-pressed={stack === s} data-testid={`eh-stack-${s}`}
              className={"rounded-full border px-3 py-1 text-xs " + (stack === s ? "border-[#2f6bff] bg-[#2f6bff]/20" : "border-white/15 hover:bg-white/5")}>
              {s === "auto" ? t.auto : STACK_LABEL[s]}
            </button>
          ))}
          <span className="ms-auto text-xs text-muted">{t.left.replace("{n}", String(left))}</span>
        </div>
        <button className={ui.primary + " min-h-12 justify-center"} disabled={busy || !text.trim()} data-testid="eh-go"><Lightbulb className="size-4" /> {busy ? t.busy : t.go}</button>
      </form>
      <p className="mt-2 text-xs text-muted">{t.note}</p>
      {busy ? <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/3 animate-pulse rounded-full bg-[#2f6bff]" /></div> : null}
      {err ? <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200" data-testid="eh-err">{err}</p> : null}
      {ans ? (
        <section className="mt-6 space-y-3" data-testid="eh-result">
          <div className="flex items-center justify-between gap-2">
            {STACK_LABEL[ans.stack] ? <span className="rounded-full border border-white/15 px-3 py-1 text-xs">{STACK_LABEL[ans.stack]}</span> : <span />}
            <button type="button" className="inline-flex items-center gap-1 rounded-xl border border-white/15 px-3 py-1 text-xs hover:bg-white/5" onClick={() => void copy()}><Copy className="size-4" /> {copied ? t.copied : t.copy}</button>
          </div>
          <div className={box}><h2 className={h2}><HelpCircle className="size-4 text-[#2f6bff]" />{t.meaning}</h2><p className="text-sm leading-relaxed whitespace-pre-wrap">{ans.meaning}</p></div>
          {ans.causes.length ? <div className={box}><h2 className={h2}><Bug className="size-4 text-amber-300" />{t.causes}</h2><ul className="list-disc space-y-1 ps-5 text-sm">{ans.causes.map((c, i) => <li key={i}>{c}</li>)}</ul></div> : null}
          {ans.checklist.length ? <div className={box}><h2 className={h2}><ListChecks className="size-4 text-emerald-300" />{t.checklist}</h2><ol className="list-decimal space-y-1 ps-5 text-sm">{ans.checklist.map((c, i) => <li key={i}>{c}</li>)}</ol></div> : null}
          {ans.example ? <div className={box}><h2 className={h2}><Code2 className="size-4 text-sky-300" />{t.example}</h2><pre dir="ltr" className="overflow-x-auto rounded-xl bg-black/40 p-3 text-xs"><code>{ans.example}</code></pre></div> : null}
        </section>
      ) : null}
      <footer className="mt-10 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
