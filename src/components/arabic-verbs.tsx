import { Volume2 } from "lucide-react";
import { getAppBySlug } from "@/lib/apps";
import { verbPath, VERB_HUB, type Verb, type VerbForm } from "@/lib/arabic-verbs";

const app = getAppBySlug("nibras-arabic");
const PLAY = app?.playStoreUrl ?? "https://play.google.com/store/apps/details?id=com.nibrasarabic.app";
const HUAWEI = app?.huaweiStoreUrl ?? "";

function say(text: string) {
  if (typeof speechSynthesis === "undefined") return;
  const u = new SpeechSynthesisUtterance(text.replace(/[.!؟]/g, ""));
  u.lang = "ar-SA";
  u.rate = 0.8;
  speechSynthesis.cancel();
  speechSynthesis.speak(u);
}

export function AppBanner() {
  return (
    <aside className="my-8 flex flex-wrap items-center gap-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4" data-testid="arabic-app-banner">
      <img src="/apps/nibras-arabic-v2.webp" alt="" width={56} height={56} className="size-14 rounded-2xl" />
      <div className="min-w-0 flex-1 basis-56">
        <b className="block">Nibras Arabic — 704 feil telefonda</b>
        <span className="text-sm text-muted">Pulsuz Android tətbiqi: feillər, isimlər, dialoqlar, kartlar və hərf yazısı. İnternetsiz işləyir.</span>
      </div>
      <div className="flex flex-wrap gap-2">
        <a href={PLAY} target="_blank" rel="noopener" className="rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">Google Play</a>
        {HUAWEI ? <a href={HUAWEI} target="_blank" rel="noopener" className="rounded-xl border border-white/20 px-4 py-2 text-sm">Huawei AppGallery</a> : null}
      </div>
    </aside>
  );
}

function FormRow({ label, f }: { label: string; f: VerbForm | null }) {
  if (!f) return null;
  return (
    <tr className="border-t border-white/10">
      <th className="py-3 pe-3 text-start text-sm font-medium text-muted">{label}</th>
      <td className="py-3 pe-3"><span lang="ar" dir="rtl" className="font-arabic text-2xl">{f[0]}</span></td>
      <td className="py-3 pe-3 text-sm">{f[1]}</td>
      <td className="py-3 text-sm">
        {f[2] && f[2] !== `${f[0]}.` ? <><span lang="ar" dir="rtl" className="block text-lg">{f[2]}</span><span className="text-muted">{f[3]}</span></> : null}
      </td>
      <td className="py-3"><button type="button" aria-label="Səsləndir" className="rounded-lg p-2 hover:bg-white/10" onClick={() => say(f[0])}><Volume2 className="size-4" /></button></td>
    </tr>
  );
}

export function VerbPage({ v, prev, next, related }: { v: Verb; prev?: Verb; next?: Verb; related: Verb[] }) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 pt-28 pb-16 md:px-6">
      <nav className="mb-4 text-sm text-muted"><a href="/" className="hover:text-fg">Nibras Code</a> / <a href={VERB_HUB} className="hover:text-fg">Ərəb feilləri</a></nav>
      <h1 className="font-display text-3xl font-bold md:text-4xl"><span lang="ar" dir="rtl">{v.a}</span> — {v.m}</h1>
      <p className="mt-3 text-muted">Ərəb dilində «{v.m}» feili: keçmiş zaman (mazi), indiki zaman (muzari) və əmr forması, Azərbaycan dilində tərcümə, misallar və səsləndirmə.</p>
      <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10 bg-white/[0.03] p-4">
        <table className="w-full">
          <thead><tr className="text-start text-xs uppercase text-muted"><th className="pb-2 text-start">Forma</th><th className="pb-2 text-start">Ərəbcə</th><th className="pb-2 text-start">Tərcümə</th><th className="pb-2 text-start">Misal</th><th /></tr></thead>
          <tbody>
            <FormRow label="Keçmiş (mazi)" f={v.p} />
            <FormRow label="İndiki (muzari)" f={v.r} />
            <FormRow label="Əmr (əmr)" f={v.i} />
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-muted" data-nosnippet>Səsləndirmə brauzerin ərəb səsi ilə oxunur; cihazda ərəb səsi yoxdursa eşidilməyə bilər.</p>
      <AppBanner />
      {related.length ? (
        <section>
          <h2 className="mb-3 text-lg font-semibold">Oxşar mənalı feillər</h2>
          <ul className="flex flex-wrap gap-2">{related.map((r) => <li key={r.s}><a href={verbPath(r.s)} className="inline-block rounded-full border border-white/15 px-3 py-1 text-sm hover:bg-white/10"><span lang="ar">{r.a}</span> · {r.m}</a></li>)}</ul>
        </section>
      ) : null}
      <nav className="mt-8 flex justify-between gap-3 text-sm">
        {prev ? <a href={verbPath(prev.s)} className="hover:underline">← <span lang="ar">{prev.a}</span> {prev.m}</a> : <span />}
        {next ? <a href={verbPath(next.s)} className="hover:underline"><span lang="ar">{next.a}</span> {next.m} →</a> : <span />}
      </nav>
    </main>
  );
}

export function VerbHub({ verbs }: { verbs: Verb[] }) {
  return (
    <main className="mx-auto w-full max-w-5xl px-4 pt-28 pb-16 md:px-6">
      <h1 className="font-display text-3xl font-bold md:text-4xl">Ərəb dilində {verbs.length} feil — mazi, muzari, əmr</h1>
      <p className="mt-3 text-muted">Nibras Arabic tətbiqindəki bütün feillər: hər birinin keçmiş, indiki zaman və əmr forması, Azərbaycan dilində tərcümə və misallar. Feilə toxunun.</p>
      <AppBanner />
      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {verbs.map((v) => (
          <li key={v.s}><a href={verbPath(v.s)} className="flex items-baseline justify-between gap-3 rounded-xl border border-white/10 px-3 py-2 hover:bg-white/10"><span className="truncate text-sm">{v.m}</span><span lang="ar" dir="rtl" className="text-lg">{v.a}</span></a></li>
        ))}
      </ul>
    </main>
  );
}
