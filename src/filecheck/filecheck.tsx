/** Nibras File Check: identify, hash, verify and compare files locally. */
import { useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Copy, FileDown, FileSearch, FolderOpen, GitCompare, ShieldCheck, Trash2, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { FL } from "./i18n";
import { algoForHash, compareFiles, extOf, extVerdict, hashFile, imageSize, parseChecksums, pdfInfo, sniff, zipInfo, type Algo, type Detected } from "./inspect";

type Item = {
  id: string; file: File; det?: Detected; verdict?: ReturnType<typeof extVerdict>; hashes: Partial<Record<Algo, string>>; progress: number; busy: boolean; error?: string;
  extra: { dims?: string; pages?: number | null; pdfVer?: string; entries?: number }; expected: string;
};
const ALGOS: Algo[] = ["SHA-256", "SHA-1", "SHA-512"];
const fmt = (n: number) => (n < 1024 ? `${n} B` : n < 1048576 ? `${(n / 1024).toFixed(1)} KB` : n < 1073741824 ? `${(n / 1048576).toFixed(2)} MB` : `${(n / 1073741824).toFixed(2)} GB`);
const rid = () => Math.random().toString(36).slice(2, 9);

export function FileCheckPage() {
  const { lang } = useI18n();
  const t = FL[lang] ?? FL.en;
  const [items, setItems] = useState<Item[]>([]);
  const [algos, setAlgos] = useState<Set<Algo>>(new Set(["SHA-256"]));
  const [sums, setSums] = useState("");
  const [ca, setCa] = useState(""); const [cb, setCb] = useState("");
  const [cmp, setCmp] = useState<null | { busy: boolean; p: number; res?: { equal: boolean; offset: number; sizeDiff: boolean } }>(null);
  const [drag, setDrag] = useState(false);
  const [note, setNote] = useState("");
  const cancelled = useRef(new Set<string>());
  useEffect(() => { if (!note) return; const id = setTimeout(() => setNote(""), 2000); return () => clearTimeout(id); }, [note]);

  const upd = (id: string, p: Partial<Item> | ((i: Item) => Partial<Item>)) => setItems((l) => l.map((x) => (x.id === id ? { ...x, ...(typeof p === "function" ? p(x) : p) } : x)));
  const analyzeOne = async (it: Item, as: Algo[]) => {
    const f = it.file;
    try {
      const head = new Uint8Array(await f.slice(0, 4096).arrayBuffer());
      let z: Awaited<ReturnType<typeof zipInfo>> = null;
      if (head[0] === 0x50 && head[1] === 0x4b) z = await zipInfo(f).catch(() => null);
      const det = sniff(head, f.size, z?.names);
      const extra: Item["extra"] = {};
      if (z) extra.entries = z.count;
      if (["png", "jpg", "gif", "webp", "bmp", "ico", "avif", "svg"].includes(det.kind)) { const d = await imageSize(f); if (d) extra.dims = `${d.w} × ${d.h}`; }
      if (det.kind === "pdf") { const p = await pdfInfo(f); extra.pages = p.pages; extra.pdfVer = p.version; }
      upd(it.id, { det, verdict: extVerdict(det, f.name), extra });
      await runHash(it.id, f, as);
    } catch (e) { upd(it.id, { busy: false, error: String((e as Error).message || e) }); }
  };
  const runHash = async (id: string, f: File, as: Algo[]) => {
    if (!as.length) { upd(id, { busy: false, progress: 1 }); return; }
    cancelled.current.delete(id);
    upd(id, { busy: true, progress: 0 });
    try {
      const h = await hashFile(f, as, (p) => upd(id, { progress: p }), () => cancelled.current.has(id));
      upd(id, (x) => ({ busy: false, hashes: { ...x.hashes, ...h }, progress: 1 }));
    } catch (e) { upd(id, { busy: false, error: (e as Error).message === "cancel" ? t.cancel : String(e) }); }
  };
  const add = (fl: FileList | File[] | null) => {
    if (!fl) return;
    const list = [...fl].slice(0, 100).map((file): Item => ({ id: rid(), file, hashes: {}, progress: 0, busy: true, extra: {}, expected: "" }));
    setItems((l) => [...l, ...list]);
    void (async () => { for (const it of list) await analyzeOne(it, [...algos]); })();
  };
  const toggleAlgo = (a: Algo) => {
    const next = new Set(algos); if (next.has(a)) next.delete(a); else next.add(a);
    if (!next.size) return; setAlgos(next);
    if (!next.has(a)) return;
    void (async () => { for (const it of items) if (!it.hashes[a] && !it.busy) await runHash(it.id, it.file, [a]); })();
  };
  const sumMap = useMemo(() => parseChecksums(sums), [sums]);
  const expectedOf = (it: Item) => (it.expected.trim().toLowerCase().replace(/\s+/g, "") || sumMap.map.get(it.file.name) || "");
  const verifyOf = (it: Item): null | { ok: boolean; algo: string; note?: string } => {
    const e = expectedOf(it);
    if (!e) { const hit = sumMap.loose.find((h) => Object.values(it.hashes).includes(h)); return hit ? { ok: true, algo: algoForHash(hit)! } : null; }
    const a = algoForHash(e);
    if (!a) return { ok: false, algo: "?", note: t.badLen };
    if (a === "MD5") return { ok: false, algo: "MD5", note: t.md5 };
    const have = it.hashes[a]; if (!have) return null;
    return { ok: have === e, algo: a };
  };
  // Make sure an algorithm needed for a pasted hash is computed.
  useEffect(() => {
    for (const it of items) { const a = algoForHash(expectedOf(it)); if (a && a !== "MD5" && !it.hashes[a] && !it.busy && it.det) void runHash(it.id, it.file, [a]); }
  }, [items, sums]); // eslint-disable-line react-hooks/exhaustive-deps

  const stats = useMemo(() => ({ n: items.length, size: items.reduce((s, i) => s + i.file.size, 0), mis: items.filter((i) => i.verdict === "mismatch").length, ok: items.filter((i) => verifyOf(i)?.ok).length, bad: items.filter((i) => { const v = verifyOf(i); return v && !v.ok; }).length }), [items, sums]); // eslint-disable-line react-hooks/exhaustive-deps

  const runCompare = async () => {
    const A = items.find((i) => i.id === ca)?.file, B = items.find((i) => i.id === cb)?.file; if (!A || !B) return;
    setCmp({ busy: true, p: 0 });
    const res = await compareFiles(A, B, (p) => setCmp((c) => (c ? { ...c, p } : c)));
    setCmp({ busy: false, p: 1, res });
  };
  const report = () => {
    const now = new Date();
    const rows = items.map((i) => ({ name: i.file.name, size: i.file.size, lastModified: new Date(i.file.lastModified).toISOString(), browserMime: i.file.type || null, realType: i.det?.label ?? null, realMime: i.det?.mime || null, extension: extOf(i.file.name) || null, extensionCheck: i.verdict ?? null, ...i.extra, hashes: i.hashes, expected: expectedOf(i) || null, verified: verifyOf(i)?.ok ?? null }));
    const A = items.find((i) => i.id === ca), B = items.find((i) => i.id === cb);
    const comparison = cmp?.res && A && B ? { a: A.file.name, b: B.file.name, identical: cmp.res.equal, firstDifferenceOffset: cmp.res.equal ? null : cmp.res.offset, sizesDiffer: cmp.res.sizeDiff } : null;
    return { tool: "Nibras File Check", generated: now.toISOString(), note: "Computed locally in the browser; files were not uploaded.", files: rows, comparison };
  };
  const reportText = () => {
    const r = report(); const L: string[] = [`${t.report} — Nibras File Check`, `${r.generated}`, r.note, ""];
    for (const f of r.files) {
      L.push(`■ ${f.name}`, `  ${t.size}: ${fmt(f.size)} (${f.size} B)`, `  ${t.modified}: ${f.lastModified}`, `  ${t.mime}: ${f.browserMime ?? "—"}`, `  ${t.real}: ${f.realType ?? "—"}${f.realMime ? ` (${f.realMime})` : ""}`, `  ${t.ext}: .${f.extension ?? ""} → ${f.extensionCheck === "ok" ? t.extOk : f.extensionCheck === "mismatch" ? t.extBad : f.extensionCheck === "none" ? t.extNone : t.extUnknown}`);
      if (f.dims) L.push(`  ${t.dims}: ${f.dims}`); if (f.pages !== undefined) L.push(`  ${t.pages}: ${f.pages ?? "?"} · ${t.pdfVer}: ${f.pdfVer}`); if (f.entries !== undefined) L.push(`  ${t.entries}: ${f.entries}`);
      for (const [a, h] of Object.entries(f.hashes)) L.push(`  ${a}: ${h}`);
      if (f.expected) L.push(`  ${t.expected}: ${f.expected} → ${f.verified ? t.match : t.noMatch}`);
      L.push("");
    }
    if (r.comparison) L.push(`${t.compare}: ${r.comparison.a} ↔ ${r.comparison.b}`, `  ${r.comparison.identical ? t.equal : t.differ.replace("{o}", String(r.comparison.firstDifferenceOffset)).replace("{h}", (r.comparison.firstDifferenceOffset ?? 0).toString(16))}`);
    return L.join("\n");
  };
  const dl = (b: Blob, name: string) => { const u = URL.createObjectURL(b); const a = document.createElement("a"); a.href = u; a.download = name; a.click(); setTimeout(() => URL.revokeObjectURL(u), 1000); };
  const stamp = new Date().toISOString().slice(0, 10);
  const exportPdf = async () => {
    const { textToPdf } = await import("@/pdf/lib/engine");
    const bytes = await textToPdf(reportText(), { size: "a4", fontSize: 9, align: lang === "ar" ? "right" : "left", bold: false, margin: 36, pageNumbers: true, title: "Nibras File Check" });
    dl(new Blob([bytes as BlobPart], { type: "application/pdf" }), `file-check-${stamp}.pdf`);
  };
  const copy = (s: string) => { void navigator.clipboard?.writeText(s); setNote(t.copied); };

  const card = "rounded-2xl border border-[#3a5ba8]/40 bg-[#0f1d3d]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]";
  const steps = [[t.s1, t.s1d], [t.s2, t.s2d], [t.s3, t.s3d], [t.s4, t.s4d]];
  const filled = [items.length > 0, items.some((i) => i.det), items.some((i) => Object.keys(i.hashes).length), stats.ok + stats.bad > 0 || !!cmp?.res];

  return (
    <main className="mx-auto w-full max-w-[1400px] px-3 pt-20 pb-12 md:px-5 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="filecheck">
      <div className="relative overflow-hidden rounded-3xl border border-[#3a5ba8]/30 bg-[#0a1630] p-4 md:p-6" style={{ backgroundImage: "linear-gradient(rgba(90,130,220,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(90,130,220,.08) 1px,transparent 1px)", backgroundSize: "24px 24px" }}>
        <p className="font-mono text-[11px] tracking-widest text-[#8fb0ff]">FILE · CHECK · BLUEPRINT</p>
        <h1 className="mt-1 flex items-center gap-2 font-display text-2xl font-bold md:text-3xl"><FileSearch className="size-7 text-[#8fb0ff]" /> {t.title}</h1>
        <p className="max-w-3xl text-sm text-[#b7c6ea]">{t.lead}</p>

        <ol className="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4" data-testid="fc-steps">
          {steps.map(([a, b], i) => (
            <li key={a} className={card + " relative p-3 " + (filled[i] ? "border-[#6b8cff]" : "")}>
              <span className="font-mono text-[11px] text-[#8fb0ff]">0{i + 1}</span>
              <b className="block text-[15px]">{a}</b><span className="font-mono text-[11px] text-[#8da3d6]">{b}</span>
              {filled[i] ? <CheckCircle2 className="absolute end-3 top-3 size-4 text-emerald-300" /> : null}
            </li>
          ))}
        </ol>

        <div className="mt-4 grid gap-3 lg:grid-cols-[1fr_300px]">
          <div className="space-y-3">
            <label className={card + " flex cursor-pointer flex-col items-center justify-center gap-1 border-dashed p-6 text-center " + (drag ? "border-[#8fb0ff] bg-[#16306a]" : "")} onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={(e) => { e.preventDefault(); setDrag(false); add(e.dataTransfer.files); }}>
              <FolderOpen className="size-7 text-[#8fb0ff]" /><b>{t.pick}</b><span className="text-xs text-[#8da3d6]">{t.drop}</span>
              <input type="file" multiple className="sr-only" onChange={(e) => { add(e.target.files); e.target.value = ""; }} data-testid="fc-input" />
            </label>
            <div className="flex flex-wrap items-center gap-2 text-[12.5px]">
              <span className="text-[#8da3d6]">{t.algos}:</span>
              {ALGOS.map((a) => <label key={a} className={"inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 font-mono " + (algos.has(a) ? "border-[#6b8cff] bg-[#2a4aa0]/40" : "border-white/10")}><input type="checkbox" className="accent-[#6b8cff]" checked={algos.has(a)} onChange={() => toggleAlgo(a)} data-testid={`fc-algo-${a}`} />{a}</label>)}
              {items.length ? <button className="ms-auto inline-flex h-8 items-center gap-1 rounded-lg border border-white/10 px-2.5 text-red-300" onClick={() => { items.forEach((i) => cancelled.current.add(i.id)); setItems([]); setCmp(null); setCa(""); setCb(""); }}><Trash2 className="size-3.5" />{t.clearAll}</button> : null}
            </div>

            {items.length ? items.map((it) => {
              const v = verifyOf(it);
              return (
                <article key={it.id} className={card + " p-3"} data-testid="fc-item">
                  <div className="flex flex-wrap items-start gap-2">
                    <div className="min-w-0 flex-1"><b className="block break-all">{it.file.name}</b><span className="text-xs text-[#8da3d6]">{fmt(it.file.size)} · {t.modified}: {new Date(it.file.lastModified).toLocaleString()}</span></div>
                    <button className="rounded p-1 text-[#8da3d6] hover:bg-white/10" onClick={() => { cancelled.current.add(it.id); setItems((l) => l.filter((x) => x.id !== it.id)); }} aria-label={t.remove} title={t.remove}><X className="size-4" /></button>
                  </div>
                  <dl className="mt-2 grid gap-x-4 gap-y-1 text-[12.5px] sm:grid-cols-2">
                    <div><dt className="inline text-[#8da3d6]">{t.real}: </dt><dd className="inline font-semibold" data-testid="fc-real">{it.det?.label ?? "…"}</dd>{it.det?.mime ? <span className="ms-1 font-mono text-[11px] text-[#8da3d6]">{it.det.mime}</span> : null}</div>
                    <div><dt className="inline text-[#8da3d6]">{t.mime}: </dt><dd className="inline font-mono text-[12px]">{it.file.type || "—"}</dd></div>
                    <div className="sm:col-span-2" data-testid="fc-ext"><dt className="inline text-[#8da3d6]">{t.ext}: </dt><dd className="inline">.{extOf(it.file.name) || "—"} {it.verdict === "mismatch" ? <span className="ms-1 inline-flex items-center gap-1 rounded bg-amber-500/20 px-1.5 text-amber-200"><AlertTriangle className="size-3.5" />{t.extBad}</span> : it.verdict === "ok" ? <span className="ms-1 text-emerald-300">✓ {t.extOk}</span> : it.verdict === "none" ? <span className="ms-1 text-[#8da3d6]">{t.extNone}</span> : it.verdict ? <span className="ms-1 text-[#8da3d6]">{t.extUnknown}</span> : null}</dd></div>
                    {it.extra.dims ? <div><dt className="inline text-[#8da3d6]">{t.dims}: </dt><dd className="inline" data-testid="fc-dims">{it.extra.dims}</dd></div> : null}
                    {it.extra.pdfVer ? <div data-testid="fc-pdf"><dt className="inline text-[#8da3d6]">{t.pages}: </dt><dd className="inline">{it.extra.pages ?? "?"}</dd> · <dt className="inline text-[#8da3d6]">{t.pdfVer}: </dt><dd className="inline">{it.extra.pdfVer}</dd></div> : null}
                    {it.extra.entries !== undefined ? <div><dt className="inline text-[#8da3d6]">{t.entries}: </dt><dd className="inline" data-testid="fc-zip">{it.extra.entries}</dd></div> : null}
                  </dl>
                  {it.busy ? <div className="mt-2"><div className="flex justify-between text-[11px] text-[#8da3d6]"><span>{t.hashing}{it.file.size > 256 * 1048576 ? ` · ${t.big}` : ""}</span><span>{Math.round(it.progress * 100)}% <button className="ms-2 underline" onClick={() => cancelled.current.add(it.id)}>{t.cancel}</button></span></div><div className="mt-1 h-1.5 overflow-hidden rounded bg-white/10"><div className="h-full bg-[#6b8cff] transition-all" style={{ width: `${it.progress * 100}%` }} data-testid="fc-progress" /></div></div> : null}
                  {it.error ? <p className="mt-2 text-xs text-red-300">{it.error}</p> : null}
                  <div className="mt-2 space-y-1">
                    {ALGOS.filter((a) => it.hashes[a]).map((a) => (
                      <div key={a} className="flex items-center gap-2 rounded-lg bg-black/25 px-2 py-1 text-[11.5px]" dir="ltr"><span className="w-16 shrink-0 font-mono text-[#8fb0ff]">{a}</span><code className="min-w-0 flex-1 break-all font-mono text-[#dfe7ff]" data-testid={`fc-hash-${a}`}>{it.hashes[a]}</code><button className="rounded p-1 hover:bg-white/10" onClick={() => copy(it.hashes[a]!)} aria-label={t.copy}><Copy className="size-3.5" /></button></div>
                    ))}
                  </div>
                  <div className="mt-2 flex flex-wrap items-center gap-2">
                    <input className="h-8 min-w-0 flex-1 rounded-lg border border-white/10 bg-black/30 px-2 font-mono text-[11.5px] outline-none focus:border-[#6b8cff]" placeholder={t.expectedPh} value={it.expected} onChange={(e) => upd(it.id, { expected: e.target.value })} dir="ltr" aria-label={t.expected} data-testid="fc-expected" />
                    {v ? <span className={"inline-flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold " + (v.ok ? "bg-emerald-500/20 text-emerald-200" : "bg-red-500/20 text-red-200")} data-testid="fc-verify">{v.ok ? <ShieldCheck className="size-4" /> : <AlertTriangle className="size-4" />}{v.note ?? `${v.algo}: ${v.ok ? t.match : t.noMatch}`}</span> : null}
                  </div>
                </article>
              );
            }) : <p className={card + " p-6 text-center text-sm text-[#8da3d6]"}>{t.empty}</p>}

            <section className={card + " p-3"}>
              <h2 className="text-sm font-semibold">{t.checksums}</h2>
              <textarea className="mt-1 h-20 w-full rounded-lg border border-white/10 bg-black/30 p-2 font-mono text-[11.5px] outline-none" placeholder={t.checksumsPh} value={sums} onChange={(e) => setSums(e.target.value)} dir="ltr" data-testid="fc-sums" />
            </section>

            <section className={card + " p-3"} data-testid="fc-compare">
              <h2 className="flex items-center gap-1.5 text-sm font-semibold"><GitCompare className="size-4 text-[#8fb0ff]" /> {t.compare}</h2>
              <div className="mt-2 grid gap-2 sm:grid-cols-[1fr_1fr_auto]">
                {[[ca, setCa, t.a], [cb, setCb, t.b]].map(([val, set, lab], k) => (
                  <select key={k} className="h-9 min-w-0 rounded-lg border border-white/10 bg-[#0a1630] px-2 text-[13px]" value={val as string} onChange={(e) => { (set as (s: string) => void)(e.target.value); setCmp(null); }} aria-label={lab as string} data-testid={`fc-cmp-${k ? "b" : "a"}`}>
                    <option value="">{lab as string}: {t.choose}</option>
                    {items.map((i) => <option key={i.id} value={i.id}>{i.file.name}</option>)}
                  </select>
                ))}
                <button className="h-9 rounded-lg bg-[#3b63ff] px-4 text-[13px] font-semibold text-white disabled:opacity-40" disabled={!ca || !cb || ca === cb || cmp?.busy} onClick={() => void runCompare()} data-testid="fc-cmp-run">{t.run}</button>
              </div>
              {cmp?.busy ? <div className="mt-2 h-1.5 overflow-hidden rounded bg-white/10"><div className="h-full bg-[#6b8cff]" style={{ width: `${cmp.p * 100}%` }} /></div> : null}
              {cmp?.res ? (() => { const A = items.find((i) => i.id === ca)!, B = items.find((i) => i.id === cb)!; const same = ALGOS.filter((a) => A.hashes[a] && B.hashes[a]); return (
                <div className={"mt-2 rounded-lg p-2 text-[12.5px] " + (cmp.res.equal ? "bg-emerald-500/15 text-emerald-100" : "bg-amber-500/15 text-amber-100")} data-testid="fc-cmp-res">
                  <p className="font-semibold">{cmp.res.equal ? t.equal : t.differ.replace("{o}", cmp.res.offset.toLocaleString()).replace("{h}", cmp.res.offset.toString(16))}{cmp.res.sizeDiff ? ` ${t.sizeDiff} (${fmt(A.file.size)} / ${fmt(B.file.size)})` : ""}</p>
                  {same.map((a) => <p key={a} className="font-mono text-[11px]" dir="ltr">{a}: {A.hashes[a] === B.hashes[a] ? "=" : "≠"}</p>)}
                </div>
              ); })() : null}
            </section>
          </div>

          <aside className="space-y-3">
            <section className={card + " p-4"} data-testid="fc-stats">
              <h2 className="text-[15px] font-semibold">{t.files}</h2>
              <p className="font-mono text-[10.5px] tracking-wider text-[#8da3d6]">LOCAL · SHA · MAGIC</p>
              <ul className="mt-3 divide-y divide-white/10 text-[13px]">
                {[["#6b8cff", t.files, String(stats.n)], ["#8fb0ff", t.total, fmt(stats.size)], ["#fbbf24", t.mismatches, String(stats.mis)], ["#34d399", t.verified, String(stats.ok)], ["#f87171", t.failed, String(stats.bad)]].map(([c, k, v]) => (
                  <li key={k} className="flex items-center gap-2 py-2"><span className="size-2 rounded-full" style={{ background: c }} /><span className="flex-1">{k}</span><b className="text-lg">{v}</b></li>
                ))}
              </ul>
            </section>
            <section className={card + " p-4"}>
              <h2 className="text-[15px] font-semibold">{t.report}</h2>
              <div className="mt-2 flex flex-wrap gap-2">
                <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40" disabled={!items.length} onClick={() => dl(new Blob([reportText()], { type: "text/plain" }), `file-check-${stamp}.txt`)} data-testid="fc-txt"><FileDown className="size-4" /> TXT</button>
                <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40" disabled={!items.length} onClick={() => dl(new Blob([JSON.stringify(report(), null, 2)], { type: "application/json" }), `file-check-${stamp}.json`)} data-testid="fc-json"><FileDown className="size-4" /> JSON</button>
                <button className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#6b8cff]/50 px-3 text-[13px] disabled:opacity-40" disabled={!items.length} onClick={() => void exportPdf()} data-testid="fc-pdfdl"><FileDown className="size-4" /> PDF</button>
              </div>
              {note ? <p className="mt-2 text-xs text-emerald-300" role="status">{note}</p> : null}
            </section>
            <p className="px-1 text-[11.5px] text-[#8da3d6]">{t.local}</p>
          </aside>
        </div>
      </div>
      <footer className="mt-6 border-t border-white/10 pt-4"><ToolsLegalLinks /></footer>
    </main>
  );
}
