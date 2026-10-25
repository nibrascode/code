import { useState } from "react";
import { Activity, AlertTriangle, CheckCircle2, Copy, Search } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { ui } from "@/kit/shell";
import { ISSUES, UI } from "./issues";

type Issue = { code: string; severity: "high" | "medium" | "low"; data: Record<string, unknown> & { items?: Record<string, unknown>[] } };
type Report = {
  ok: true; url: string; status: number; score: number; took: number; issues: Issue[];
  summary: { title: string; description: string; ttfb: number; htmlKb: number; compression: string; images: number; scripts: number; styles: number; links: number; checkedLinks: number; headings: { level: number; text: string }[]; robots: boolean; sitemap: { found: boolean; count?: number } };
};

const fill = (s: string, d: Record<string, unknown>) => s.replace(/\{(\w+)\}/g, (_, k) => String(d[k] ?? ""));
const COLOR = { high: "border-red-400/40 bg-red-500/10", medium: "border-amber-400/40 bg-amber-500/10", low: "border-sky-400/30 bg-sky-500/10" };
const DOT = { high: "bg-red-400", medium: "bg-amber-400", low: "bg-sky-400" };

export function DoctorPage() {
  const { lang } = useI18n();
  const t = UI[lang] ?? UI.en;
  const [url, setUrl] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [rep, setRep] = useState<Report | null>(null);
  const [copied, setCopied] = useState(false);
  const run = async () => {
    if (!url.trim() || busy) return;
    setBusy(true); setErr(""); setRep(null);
    try {
      const r = await fetch("/api/site-doctor", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ url: url.trim() }) });
      const j = await r.json().catch(() => ({ ok: false, error: "other" }));
      if (j.ok) setRep(j); else setErr(t[`e_${j.error}`] ?? t.e_other);
    } catch { setErr(t.e_other); } finally { setBusy(false); }
  };
  const text = (i: Issue) => { const row = ISSUES[i.code]; return row ? row[lang] ?? row.en : null; };
  const order = { high: 0, medium: 1, low: 2 };
  const issues = rep ? [...rep.issues].sort((a, b) => order[a.severity] - order[b.severity]) : [];
  const copy = async () => {
    if (!rep) return;
    const lines = [`${t.h1}: ${rep.url}`, `${t.score}: ${rep.score}/100`, ""];
    issues.forEach((i, n) => { const x = text(i); if (!x) return; lines.push(`${n + 1}. [${t[i.severity]}] ${fill(x.t, i.data)}`, ...x.fix.map((f) => `   - ${fill(f, i.data)}`), ...(i.data.items ?? []).map((it) => `   • ${it.url} ${it.status ?? it.kb ?? it.cache ?? ""}`), ""); });
    await navigator.clipboard.writeText(lines.join("\n")).catch(() => {});
    setCopied(true); setTimeout(() => setCopied(false), 1500);
  };
  const s = rep?.summary;
  const ring = rep ? (rep.score >= 85 ? "#34d399" : rep.score >= 60 ? "#fbbf24" : "#f87171") : "#fff";
  return (
    <main className="files-page mx-auto w-full max-w-3xl px-3 pt-24 pb-16 md:px-6 md:pt-28" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="doctor">
      <header className="mb-5">
        <h1 className="flex items-center gap-2 font-display text-3xl font-bold tracking-tight md:text-5xl"><Activity className="size-8 text-[#2f6bff]" /> {t.h1}</h1>
        <p className="mt-2 text-sm text-muted md:text-base">{t.lead}</p>
      </header>
      <form className="flex flex-col gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-3 sm:flex-row" onSubmit={(e) => { e.preventDefault(); void run(); }}>
        <input className={ui.field + " min-h-12 text-base"} inputMode="url" autoCapitalize="off" autoCorrect="off" spellCheck={false} placeholder={t.ph} value={url} onChange={(e) => setUrl(e.target.value)} dir="ltr" data-testid="doc-url" aria-label={t.ph} />
        <button className={ui.primary + " min-h-12 justify-center"} disabled={busy || !url.trim()} data-testid="doc-go"><Search className="size-4" /> {busy ? t.busy : t.go}</button>
      </form>
      <p className="mt-2 text-xs text-muted">{t.note}</p>
      {busy ? <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10"><div className="h-full w-1/3 animate-pulse rounded-full bg-[#2f6bff]" /></div> : null}
      {err ? <p className="mt-4 rounded-xl border border-red-400/30 bg-red-500/10 p-3 text-sm text-red-200" data-testid="doc-err">{err}</p> : null}
      {rep && s ? (
        <section className="mt-6" data-testid="doc-report">
          <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
            <div className="grid size-20 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(${ring} ${rep.score * 3.6}deg, rgba(255,255,255,.08) 0)` }}>
              <div className="grid size-16 place-items-center rounded-full bg-[#0b1020] text-xl font-bold" data-testid="doc-score">{rep.score}</div>
            </div>
            <div className="min-w-0">
              <div className="text-xs text-muted">{t.score}</div>
              <a className="block truncate font-semibold hover:underline" href={rep.url} target="_blank" rel="noopener noreferrer nofollow" dir="ltr">{rep.url}</a>
              <div className="mt-1 flex flex-wrap gap-2 text-xs">
                {(["high", "medium", "low"] as const).map((k) => <span key={k} className="inline-flex items-center gap-1"><i className={"size-2 rounded-full " + DOT[k]} />{t[k]}: {issues.filter((i) => i.severity === k).length}</span>)}
              </div>
            </div>
          </div>
          <h2 className="mt-6 mb-3 text-base font-semibold">{t.issues}</h2>
          {issues.length === 0 ? <p className="flex items-center gap-2 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4 text-sm"><CheckCircle2 className="size-5 text-emerald-300" />{t.none}</p> : null}
          <ol className="space-y-3" data-testid="doc-issues">
            {issues.map((i, n) => { const x = text(i); if (!x) return null; return (
              <li key={i.code + n} className={"rounded-2xl border p-4 " + COLOR[i.severity]} data-code={i.code}>
                <div className="flex items-start gap-2"><AlertTriangle className="mt-0.5 size-4 shrink-0 opacity-80" /><b className="text-sm leading-snug">{fill(x.t, i.data)}</b><span className="ms-auto shrink-0 rounded-full bg-black/30 px-2 py-0.5 text-[11px]">{t[i.severity]}</span></div>
                <p className="mt-1 text-xs text-muted"><b>{t.why}:</b> {x.why}</p>
                <div className="mt-2 text-xs font-semibold">{t.fix}:</div>
                <ol className="mt-1 list-decimal space-y-1 ps-5 text-sm">{x.fix.map((f, k) => <li key={k} className="whitespace-pre-wrap break-words">{fill(f, i.data)}</li>)}</ol>
                {i.data.items?.length ? <ul className="mt-2 space-y-1 rounded-xl bg-black/30 p-2 font-mono text-[11px]" dir="ltr">{i.data.items.map((it, k) => <li key={k} className="break-all">{String(it.url)} <span className="text-amber-200">{it.status !== undefined ? (it.status ? String(it.status) : "no response") : it.kb !== undefined ? `${it.kb} KB` : String(it.cache ?? "")}</span></li>)}</ul> : null}
              </li>); })}
          </ol>
          <h2 className="mt-6 mb-3 text-base font-semibold">{t.sum}</h2>
          <dl className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3">
            {[[t.status, rep.status], [t.ttfb, `${s.ttfb} ms`], [t.html, `${s.htmlKb} KB`], [t.comp, s.compression || t.no], [t.imgs, s.images], [t.scripts, s.scripts], [t.styles, s.styles], [t.links, `${s.links} (${s.checkedLinks})`], [t.robots, s.robots ? t.yes : t.no], [t.sitemap, s.sitemap.found ? `${t.yes} · ${s.sitemap.count}` : t.no], [t.took, `${(rep.took / 1000).toFixed(1)} s`]].map(([k, v]) => (
              <div key={String(k)} className="rounded-xl border border-white/10 bg-white/[0.04] p-3"><dt className="text-xs text-muted">{k}</dt><dd className="font-semibold">{String(v)}</dd></div>
            ))}
          </dl>
          <div className="mt-3 space-y-2 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm">
            <div><span className="text-xs text-muted">{t.title}:</span> <span dir="auto">{s.title || "—"}</span></div>
            <div><span className="text-xs text-muted">{t.desc}:</span> <span dir="auto">{s.description || "—"}</span></div>
          </div>
          {s.headings.length ? <details className="mt-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm"><summary className="cursor-pointer font-semibold">{t.heads} ({s.headings.length})</summary><ul className="mt-2 space-y-0.5">{s.headings.map((h, k) => <li key={k} style={{ paddingInlineStart: (h.level - 1) * 12 }} dir="auto"><span className="text-muted">H{h.level}</span> {h.text || "—"}</li>)}</ul></details> : null}
          <button className={ui.btn + " mt-4 min-h-11"} onClick={() => void copy()}><Copy className="size-4" /> {copied ? t.copied : t.copy}</button>
        </section>
      ) : null}
    </main>
  );
}
