import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { STUDIO_APPS } from "@/lib/apps";
import { effectiveApp } from "@/lib/app-store";
import { Card, Empty, ErrorBox, Field, PageHead, Skeleton, useStudio } from "@/components/studio/core";
import { Kpi, fmtDate, fmtNum } from "@/components/studio/sections";
import type { SKey, T } from "@/components/studio/i18n";
import {
  IconAlert,
  IconApps,
  IconCalendar,
  IconCheck,
  IconDownload,
  IconExternal,
  IconLibrary,
  IconRefresh,
  IconShield,
  IconSpark,
  IconTrendUp,
  IconUpload,
} from "@/components/studio/icons";
import { nxGet, nxPost, type AppsData, type Covers, type Deploys, type Library, type Providers } from "@/components/studio/nx-api";

/* ───────────── shared ───────────── */

function useLoad<V>(load: (fresh: boolean) => Promise<V>) {
  const [data, setData] = useState<V | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const ref = useRef(load);
  ref.current = load;
  const run = useCallback((fresh = false) => {
    setBusy(true);
    setError("");
    ref
      .current(fresh)
      .then(setData)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "error"))
      .finally(() => setBusy(false));
  }, []);
  useEffect(() => run(false), [run]);
  return { data, error, busy, run, setData };
}

function RefreshBtn({ t, busy, onClick, label }: { t: T; busy: boolean; onClick: () => void; label?: SKey }) {
  return (
    <button type="button" className="nxa-btn is-ghost" onClick={onClick} disabled={busy}>
      <IconRefresh size={16} className={`nxa-ic${busy ? " is-spinning" : ""}`} />
      {t(label ?? "refresh")}
    </button>
  );
}

function when(lang: Lang, iso: string) {
  if (!iso) return "—";
  return fmtDate(lang, iso, { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}

function dayKey(iso: string) {
  // gün Asia/Riyadh (UTC+3) üzrə
  const d = new Date(new Date(iso).getTime() + 3 * 3600_000);
  return d.toISOString().slice(0, 10);
}

/** Real saylardan sadə sütun qrafiki: dəyər yoxdursa heç nə çəkilmir. */
export function Bars({ items, lang, unit }: { items: { label: string; value: number; tone?: string }[]; lang: Lang; unit?: string }) {
  const max = Math.max(1, ...items.map((i) => i.value));
  return (
    <div className="nxx-bars" role="img" aria-label={items.map((i) => `${i.label}: ${i.value}${unit ?? ""}`).join(", ")}>
      {items.map((i, n) => (
        <div key={`${i.label}-${n}`} className="nxx-bar" style={{ ["--d" as string]: `${n * 30}ms` }}>
          <em>{fmtNum(lang, i.value)}{unit ?? ""}</em>
          <span>
            <i className={i.tone ? `is-${i.tone}` : ""} style={{ height: `${Math.max(3, (i.value / max) * 100)}%` }} />
          </span>
          <small>{i.label}</small>
        </div>
      ))}
    </div>
  );
}

function Pill({ tone, children }: { tone: "ok" | "bad" | "warn" | "off"; children: ReactNode }) {
  return <span className={`nxx-pill is-${tone}`}>{children}</span>;
}

/* ───────────── Nibras AI söhbətləri ───────────── */

export function ProvidersSection() {
  const { t, lang } = useStudio();
  const { data, error, busy, run } = useLoad((fresh) => nxGet<Providers>("providers", { fresh: fresh ? 1 : undefined }));
  const conf = data?.providers.filter((p) => p.configured) ?? [];
  const working = conf.filter((p) => p.ok);
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconSpark size={22} />} title={t("nav_providers")} sub={t("prov_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => run(true)} label="check_now" />
      </PageHead>
      {error ? <ErrorBox onRetry={() => run(true)} /> : null}
      {!data && !error ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : data ? (
        <>
          <div className="nxa-kpis is-three">
            <Kpi icon={<IconCheck size={20} />} tone="teal" label={t("prov_working")} value={`${working.length} / ${conf.length}`} />
            <Kpi icon={<IconShield size={20} />} tone="blue" label={t("prov_conf")} value={`${conf.length} / ${data.providers.length}`} />
            <Kpi
              icon={<IconTrendUp size={20} />}
              tone="violet"
              label={t("latency")}
              value={working.length ? `${fmtNum(lang, Math.round(working.reduce((a, p) => a + p.ms, 0) / working.length))} ms` : "—"}
            />
          </div>
          {working.length ? (
            <Card title={t("latency")} sub={t("checked_at", { d: when(lang, data.checkedAt) })}>
              <Bars lang={lang} unit=" ms" items={working.map((p) => ({ label: p.name, value: p.ms, tone: p.ms > 1500 ? "warn" : "ok" }))} />
            </Card>
          ) : null}
          <Card title={t("nav_providers")}>
            <ul className="nxx-rows">
              {data.providers.map((p) => (
                <li key={p.id}>
                  <b>{p.name}</b>
                  <span className="nxa-muted">{p.configured ? `HTTP ${p.status || "—"} · ${fmtNum(lang, p.ms)} ms` : ""}</span>
                  {!p.configured ? <Pill tone="off">{t("prov_none")}</Pill> : p.ok ? <Pill tone="ok">{t("prov_ok")}</Pill> : <Pill tone="bad">{t("prov_fail")}</Pill>}
                </li>
              ))}
            </ul>
          </Card>
        </>
      ) : null}
    </div>
  );
}

/* ───────────── Kitabxana ───────────── */

export function LibraryStatsSection() {
  const { t, lang } = useStudio();
  const { data, error, busy, run } = useLoad((fresh) => nxGet<Library>("library", { fresh: fresh ? 1 : undefined }));
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconLibrary size={22} />} title={t("nav_libstats")} sub={t("lib_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => run(true)} />
        <a className="nxa-btn is-ghost" href="https://library.nibrascode.com" target="_blank" rel="noreferrer">
          <IconExternal size={16} />
          {t("open")}
        </a>
      </PageHead>
      {error ? <ErrorBox onRetry={() => run(true)} /> : null}
      {!data && !error ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : data ? (
        <>
          <div className="nxa-kpis">
            <Kpi icon={<IconLibrary size={20} />} tone="teal" label={t("lib_books")} value={data.catalog ? fmtNum(lang, data.catalog.books) : "—"} />
            <Kpi icon={<IconApps size={20} />} tone="blue" label={t("lib_pages")} value={data.catalog ? fmtNum(lang, data.catalog.pages) : "—"} />
            <Kpi icon={<IconCalendar size={20} />} tone="violet" label={t("lib_sections")} value={data.catalog ? fmtNum(lang, data.catalog.sections.length) : "—"} />
            <Kpi
              icon={data.up ? <IconCheck size={20} /> : <IconAlert size={20} />}
              tone={data.up ? "teal" : "rose"}
              label={t("lib_state")}
              value={data.up ? t("lib_up") : t("lib_down")}
              foot={<em className="nxa-trend">{fmtNum(lang, data.ms)} ms</em>}
            />
          </div>
          {data.catalog?.sections.length ? (
            <Card title={t("lib_by_section")}>
              <Bars lang={lang} items={data.catalog.sections.map((s) => ({ label: s.title[lang] || s.title.az || s.id, value: s.books }))} />
            </Card>
          ) : null}
          <Card title={t("lib_commits")} sub={data.repo ? when(lang, data.repo.pushed_at) : undefined}>
            {data.commits.length ? (
              <ul className="nxx-rows">
                {data.commits.map((c) => (
                  <li key={c.sha}>
                    <code>{c.sha}</code>
                    <span className="nxx-grow" dir="auto">{c.msg}</span>
                    <a className="nxa-muted" href={c.url} target="_blank" rel="noreferrer">
                      {when(lang, c.date)}
                    </a>
                  </li>
                ))}
              </ul>
            ) : (
              <Empty text={t("rel_none")} />
            )}
          </Card>
        </>
      ) : null}
    </div>
  );
}

/* ───────────── Tətbiqlər və buraxılışlar ───────────── */

function mb(bytes: number) {
  return `${(bytes / 1048576).toFixed(1)} MB`;
}

export function ReleasesSection() {
  const { t, lang, toast } = useStudio();
  const { data, error, busy, run, setData } = useLoad((fresh) => nxGet<AppsData>("apps", { fresh: fresh ? 1 : undefined }));
  const [edit, setEdit] = useState<{ slug: string; size: string; ver: string } | null>(null);
  const [saving, setSaving] = useState(false);
  const [syncing, setSyncing] = useState(false);

  const save = () => {
    if (!edit) return;
    setSaving(true);
    nxPost<{ sizes: AppsData["sizes"] }>("setsize", { slug: edit.slug, size: edit.size, sizeVersion: edit.ver })
      .then((r) => {
        toast(t("rel_size_saved"));
        setData((d) => (d ? { ...d, sizes: r.sizes } : d));
        setEdit(null);
      })
      .catch((e: unknown) => toast(e instanceof Error && e.message === "auth" ? t("err_auth") : `${t("err_load")} (${e instanceof Error ? e.message : ""})`, "err"))
      .finally(() => setSaving(false));
  };

  const sync = () => {
    setSyncing(true);
    nxPost("playsync", {})
      .then(() => {
        toast(t("rel_sync_started"));
        setTimeout(() => run(true), 4000);
      })
      .catch(() => toast(t("err_load"), "err"))
      .finally(() => setSyncing(false));
  };

  const downloads = data?.releases.flatMap((r) => r.items.map((i) => ({ repo: r.repo, n: i.assets.reduce((a, x) => a + x.downloads, 0) }))) ?? [];
  const perRepo = data?.releases.map((r) => ({ label: r.repo.split("/")[1], value: r.items.reduce((a, i) => a + i.assets.reduce((s, x) => s + x.downloads, 0), 0) })) ?? [];

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconApps size={22} />} title={t("nav_releases")} sub={t("rel_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => run(true)} />
        <button type="button" className="nxa-btn" onClick={sync} disabled={syncing}>
          <IconUpload size={16} />
          {t("rel_sync")}
        </button>
      </PageHead>
      {error ? <ErrorBox onRetry={() => run(true)} /> : null}
      {!data && !error ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : data ? (
        <>
          <div className="nxa-kpis">
            <Kpi icon={<IconApps size={20} />} tone="teal" label={t("rel_play")} value={`${Object.values(data.play ?? {}).filter((p) => p.listed).length} / ${STUDIO_APPS.length}`} />
            <Kpi icon={<IconDownload size={20} />} tone="blue" label={t("rel_downloads")} value={fmtNum(lang, downloads.reduce((a, d) => a + d.n, 0))} />
            <Kpi icon={<IconUpload size={20} />} tone="violet" label={t("rel_releases")} value={fmtNum(lang, data.releases.reduce((a, r) => a + r.items.length, 0))} />
            <Kpi
              icon={<IconRefresh size={20} />}
              tone={data.sync?.[0]?.conclusion === "failure" ? "rose" : "teal"}
              label={t("rel_sync_runs")}
              value={data.sync?.[0] ? when(lang, data.sync[0].at) : "—"}
            />
          </div>
          <Card title={t("nav_apps")} sub={t("checked_at", { d: when(lang, data.checkedAt) })}>
            <div className="nxa-table-wrap">
              <table className="nxa-table">
                <thead>
                  <tr>
                    <th>{t("nav_apps")}</th>
                    <th>Play</th>
                    <th>{t("rel_version")}</th>
                    <th>{t("rel_updated")}</th>
                    <th>{t("rel_size")}</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {STUDIO_APPS.map((app) => {
                    const play = data.play?.[app.slug];
                    const facts = effectiveApp(app).facts;
                    const override = data.sizes[app.slug];
                    const size = override?.size || facts.size || "";
                    return (
                      <tr key={app.slug}>
                        <td>
                          <b>{app.name}</b>
                        </td>
                        <td>{play?.listed && play.playUrl ? <a href={play.playUrl} target="_blank" rel="noreferrer"><Pill tone="ok">{t("rel_play")} ↗</Pill></a> : app.slug === "nibras-office" ? <Pill tone="warn">{t("rel_soon")}</Pill> : <Pill tone="off">{t("rel_notlisted")}</Pill>}</td>
                        <td>{play?.version || facts.version || "—"}</td>
                        <td>{play?.updated || facts.updated || "—"}</td>
                        <td>{size || "—"}</td>
                        <td>
                          <button
                            type="button"
                            className="nxa-btn is-ghost is-sm"
                            onClick={() => setEdit({ slug: app.slug, size: override?.size || facts.size || "", ver: override?.sizeVersion || play?.version || facts.version || "" })}
                          >
                            {t("rel_size")}
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            {edit ? (
              <form
                className="nxx-edit"
                onSubmit={(e) => {
                  e.preventDefault();
                  save();
                }}
              >
                <b>{STUDIO_APPS.find((a) => a.slug === edit.slug)?.name}</b>
                <Field label={t("rel_size")} hint={t("rel_size_hint")}>
                  <input value={edit.size} onChange={(e) => setEdit({ ...edit, size: e.target.value })} placeholder="50.10 MB" maxLength={12} />
                </Field>
                <Field label={t("rel_size_for")}>
                  <input value={edit.ver} onChange={(e) => setEdit({ ...edit, ver: e.target.value })} placeholder="1.0.5" maxLength={30} />
                </Field>
                <div className="nxx-edit-actions">
                  <button type="submit" className="nxa-btn" disabled={saving}>
                    {t("save")}
                  </button>
                  <button type="button" className="nxa-btn is-ghost" onClick={() => setEdit(null)}>
                    {t("cancel")}
                  </button>
                </div>
              </form>
            ) : null}
          </Card>
          {perRepo.some((r) => r.value > 0) ? (
            <Card title={t("rel_downloads")}>
              <Bars lang={lang} items={perRepo} />
            </Card>
          ) : null}
          <div className="nxx-grid">
            {data.releases.map((r) => (
              <Card key={r.repo} title={r.repo} sub={t("rel_releases")}>
                {r.items.length === 0 ? (
                  <Empty text={t("rel_none")} />
                ) : (
                  <ul className="nxx-rows">
                    {r.items.map((i) => (
                      <li key={i.tag}>
                        <a href={i.url} target="_blank" rel="noreferrer">
                          <b>{i.tag}</b>
                        </a>
                        <span className="nxx-grow nxa-muted">
                          {when(lang, i.date)} · {i.assets.length} {t("rel_assets").toLowerCase()}
                          {i.assets.length ? ` · ${mb(i.assets.reduce((a, x) => Math.max(a, x.size), 0))}` : ""}
                        </span>
                        <span title={t("rel_downloads")}>
                          <IconDownload size={14} /> {fmtNum(lang, i.assets.reduce((a, x) => a + x.downloads, 0))}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </Card>
            ))}
          </div>
          {data.sync?.length ? (
            <Card title={t("rel_sync_runs")}>
              <ul className="nxx-rows">
                {data.sync.map((s, i) => (
                  <li key={i}>
                    <span className="nxx-grow">{when(lang, s.at)}</span>
                    <span className="nxa-muted">{s.event}</span>
                    <a href={s.url} target="_blank" rel="noreferrer">
                      {s.status !== "completed" ? <Pill tone="warn">{t("dep_pending")}</Pill> : s.conclusion === "success" ? <Pill tone="ok">{t("dep_success")}</Pill> : <Pill tone="bad">{t("dep_failure")}</Pill>}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

/* ───────────── Üz qabıqları ───────────── */

export function CoversSection() {
  const { t, lang } = useStudio();
  const { data, error, busy, run } = useLoad((fresh) => nxGet<Covers>("covers", { fresh: fresh ? 1 : undefined }));
  const days = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of data?.covers ?? []) if (c.created) map.set(dayKey(c.created), (map.get(dayKey(c.created)) || 0) + 1);
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).slice(-14);
  }, [data]);
  const avg = data?.covers.length ? data.covers.reduce((a, c) => a + (c.premium || 0), 0) / data.covers.filter((c) => c.premium).length : 0;
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconLibrary size={22} />} title={t("nav_covers")} sub={t("cov_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => run(true)} />
      </PageHead>
      {error ? <ErrorBox onRetry={() => run(true)} /> : null}
      {!data && !error ? (
        <Card>
          <Skeleton tall />
        </Card>
      ) : data && !data.ok ? (
        <Card>
          <Empty icon={<IconShield size={26} />} text={t("cov_noaccess")} />
        </Card>
      ) : data ? (
        <>
          <div className="nxa-kpis">
            <Kpi icon={<IconCheck size={20} />} tone="teal" label={t("cov_gen")} value={fmtNum(lang, data.counts?.gen ?? data.covers.length)} />
            <Kpi icon={<IconLibrary size={20} />} tone="blue" label={t("cov_user")} value={fmtNum(lang, data.counts?.user ?? 0)} />
            <Kpi icon={<IconSpark size={20} />} tone="violet" label={t("cov_score")} value={avg ? avg.toFixed(1) : "—"} />
            <Kpi icon={<IconCalendar size={20} />} tone="blue" label={t("cov_runs")} value={data.runs[0] ? when(lang, data.runs[0].at) : "—"} />
          </div>
          {days.length ? (
            <Card title={t("cov_daily")}>
              <Bars lang={lang} items={days.map(([d, v]) => ({ label: fmtDate(lang, `${d}T12:00:00Z`, { day: "numeric", month: "short" }), value: v }))} />
            </Card>
          ) : null}
          {data.runs.length || data.actionsUrl ? (
            <Card title={t("cov_runs")}>
              {data.actionsUrl ? (
                <p>
                  <a href={data.actionsUrl} target="_blank" rel="noreferrer">{t("cov_actions")} ↗</a>
                </p>
              ) : null}
              <ul className="nxx-rows">
                {data.runs.map((r, i) => (
                  <li key={i}>
                    <span className="nxx-grow">{r.name}</span>
                    <span className="nxa-muted">{when(lang, r.at)}</span>
                    <a href={r.url} target="_blank" rel="noreferrer">
                      {r.status !== "completed" ? <Pill tone="warn">{t("dep_pending")}</Pill> : r.conclusion === "success" ? <Pill tone="ok">{t("dep_success")}</Pill> : <Pill tone="bad">{t("dep_failure")}</Pill>}
                    </a>
                  </li>
                ))}
              </ul>
            </Card>
          ) : null}
        </>
      ) : null}
    </div>
  );
}

/* ───────────── Yerləşdirmələr ───────────── */

function depTone(state: string): "ok" | "bad" | "warn" {
  return state === "success" ? "ok" : state === "failure" || state === "error" ? "bad" : "warn";
}

export function DeploysSection() {
  const { t, lang } = useStudio();
  const { data, error, busy, run } = useLoad((fresh) => nxGet<Deploys>("deploys", { fresh: fresh ? 1 : undefined }));
  const items = useMemo(() => data?.items ?? [], [data]);
  const done = items.filter((d) => d.state === "success" || d.state === "failure" || d.state === "error");
  const ok = items.filter((d) => d.state === "success");
  const days = useMemo(() => {
    const map = new Map<string, number>();
    for (const d of items) map.set(dayKey(d.created), (map.get(dayKey(d.created)) || 0) + 1);
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b));
  }, [items]);
  const label = (s: string) => t(s === "success" ? "dep_success" : s === "failure" || s === "error" ? "dep_failure" : "dep_pending");
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconUpload size={22} />} title={t("nav_deploys")} sub={t("dep_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => run(true)} />
      </PageHead>
      {error ? <ErrorBox onRetry={() => run(true)} /> : null}
      {!data && !error ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : data && (!data.ok || !items.length) ? (
        <Card>
          <Empty text={t("dep_none")} />
        </Card>
      ) : data ? (
        <>
          <div className="nxa-kpis is-three">
            <Kpi
              icon={items[0].state === "success" ? <IconCheck size={20} /> : <IconAlert size={20} />}
              tone={items[0].state === "success" ? "teal" : items[0].state === "pending" || items[0].state === "in_progress" || items[0].state === "queued" ? "blue" : "rose"}
              label={t("dep_last")}
              value={label(items[0].state)}
              foot={<em className="nxa-trend">{when(lang, items[0].created)}</em>}
            />
            <Kpi icon={<IconTrendUp size={20} />} tone="violet" label={t("dep_rate")} value={done.length ? `${Math.round((ok.length / done.length) * 100)}%` : "—"} />
            <Kpi icon={<IconCalendar size={20} />} tone="blue" label={t("nav_deploys")} value={fmtNum(lang, items.length)} />
          </div>
          {days.length > 1 ? (
            <Card title={t("cov_daily")}>
              <Bars lang={lang} items={days.map(([d, v]) => ({ label: fmtDate(lang, `${d}T12:00:00Z`, { day: "numeric", month: "short" }), value: v }))} />
            </Card>
          ) : null}
          <Card title={t("nav_deploys")} sub={data.checkedAt ? t("checked_at", { d: when(lang, data.checkedAt) }) : undefined}>
            <ul className="nxx-rows">
              {items.map((d) => (
                <li key={d.id}>
                  <Pill tone={depTone(d.state)}>{label(d.state)}</Pill>
                  <code>{d.sha}</code>
                  <span className="nxx-grow" dir="auto">{d.msg || d.env}</span>
                  <span className="nxa-muted">{when(lang, d.created)}</span>
                  {d.url ? (
                    <a href={d.url} target="_blank" rel="noreferrer" aria-label={t("open")}>
                      <IconExternal size={15} />
                    </a>
                  ) : null}
                </li>
              ))}
            </ul>
          </Card>
        </>
      ) : null}
    </div>
  );
}

/* ───────────── İcmal: sistemin nəbzi ───────────── */

export function PulseCard({ go }: { go: (tab: string) => void }) {
  const { t, lang } = useStudio();
  const [dep, setDep] = useState<Deploys | null>(null);
  const [prov, setProv] = useState<Providers | null>(null);
  const [lib, setLib] = useState<Library | null>(null);
  const [apps, setApps] = useState<AppsData | null>(null);
  useEffect(() => {
    nxGet<AppsData>("apps").then(setApps).catch(() => undefined);
    nxGet<Deploys>("deploys").then(setDep).catch(() => undefined);
    nxGet<Providers>("providers").then(setProv).catch(() => undefined);
    nxGet<Library>("library").then(setLib).catch(() => undefined);
  }, []);
  const conf = prov?.providers.filter((p) => p.configured) ?? [];
  const last = dep?.items[0];
  const tile = (tab: string, title: SKey, value: string, tone: "ok" | "bad" | "warn" | "off") => (
    <button type="button" className={`nxx-pulse is-${tone}`} onClick={() => go(tab)}>
      <i />
      <small>{t(title)}</small>
      <b>{value}</b>
    </button>
  );
  const down = conf.filter((p) => !p.ok);
  const lastSync = apps?.sync?.[0];
  const syncBad = apps ? !lastSync || lastSync.conclusion === "failure" || Date.now() - new Date(lastSync.at).getTime() > 12 * 3600_000 : false;
  const alerts: { tab: string; text: string }[] = [];
  if (down.length) alerts.push({ tab: "providers", text: `${t("al_prov")}: ${down.map((p) => p.name).join(", ")}` });
  if (syncBad) alerts.push({ tab: "releases", text: t("al_play") });
  if (last && (last.state === "failure" || last.state === "error")) alerts.push({ tab: "deploys", text: t("al_deploy") });
  if (lib && !lib.up) alerts.push({ tab: "libstats", text: t("al_lib") });
  const ready = prov && apps && dep && lib;
  return (
    <Card title={t("pulse")}>
      {ready ? (
        alerts.length ? (
          <ul className="nxx-rows">
            {alerts.map((a, i) => (
              <li key={i}>
                <button type="button" className="nxx-grow" onClick={() => go(a.tab)} style={{ textAlign: "start", background: "none", border: 0, color: "inherit", cursor: "pointer" }}>
                  <Pill tone="warn">{t("al_title")}</Pill> {a.text}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p><Pill tone="ok">{t("al_ok")}</Pill></p>
        )
      ) : null}
      <div className="nxx-pulses">
        {tile("deploys", "dep_last", last ? (last.state === "success" ? t("dep_success") : last.state === "failure" || last.state === "error" ? t("dep_failure") : t("dep_pending")) : "…", last ? depTone(last.state) : "off")}
        {tile("providers", "prov_working", prov ? `${conf.filter((p) => p.ok).length} / ${conf.length}` : "…", prov ? (conf.every((p) => p.ok) ? "ok" : "warn") : "off")}
        {tile("libstats", "lib_books", lib?.catalog ? fmtNum(lang, lib.catalog.books) : "…", lib ? (lib.up ? "ok" : "bad") : "off")}
      </div>
    </Card>
  );
}

/* ───────────── AI + 5xx siqnalları ───────────── */

type Ops = { storage: boolean; ai?: { calls: number; err: number; avg: number | null; spike: boolean; errAlert: boolean; errRate: number }; e5?: { total: number; top: { route: string; n: number }[]; alert: boolean } };
const OPS_TXT: Record<string, Record<string, string>> = {
  az: { t: "AI və server xətaları", ai: "AI bu gün", avg: "7 gün ortası", err: "xəta", spike: "AI çağırışları ortanın ≥3× qədərdir", erra: "AI provayder xətaları çoxdur", e5: "5xx (bu gün+dünən)", e5a: "Server xətaları artıb", none: "5xx yoxdur", na: "Saxlama qoşulmayıb — siqnal əlçatan deyil", ok: "Normal", new: "sayğac təzə başlayıb" },
  en: { t: "AI & server errors", ai: "AI today", avg: "7-day avg", err: "errors", spike: "AI calls are ≥3× the average", erra: "High AI provider errors", e5: "5xx (today+yesterday)", e5a: "Server errors increased", none: "No 5xx", na: "Storage not connected — signal unavailable", ok: "Normal", new: "counter just started" },
  tr: { t: "AI ve sunucu hataları", ai: "AI bugün", avg: "7 gün ort.", err: "hata", spike: "AI çağrıları ortalamanın ≥3 katı", erra: "AI sağlayıcı hataları yüksek", e5: "5xx (bugün+dün)", e5a: "Sunucu hataları arttı", none: "5xx yok", na: "Depolama bağlı değil — sinyal yok", ok: "Normal", new: "sayaç yeni başladı" },
  ar: { t: "الذكاء الاصطناعي وأخطاء الخادم", ai: "الذكاء اليوم", avg: "متوسط 7 أيام", err: "أخطاء", spike: "طلبات الذكاء ≥3× المتوسط", erra: "أخطاء مزودي الذكاء مرتفعة", e5: "5xx (اليوم+أمس)", e5a: "ازدادت أخطاء الخادم", none: "لا أخطاء 5xx", na: "التخزين غير متصل — الإشارة غير متاحة", ok: "طبيعي", new: "العداد بدأ للتو" },
  ru: { t: "ИИ и ошибки сервера", ai: "ИИ сегодня", avg: "сред. 7 дн.", err: "ошибок", spike: "Вызовы ИИ ≥3× среднего", erra: "Много ошибок провайдеров ИИ", e5: "5xx (сегодня+вчера)", e5a: "Рост ошибок сервера", none: "5xx нет", na: "Хранилище не подключено — сигнал недоступен", ok: "Норма", new: "счётчик только начал" },
};

export function OpsCard() {
  const { lang } = useStudio();
  const x = OPS_TXT[lang] || OPS_TXT.en;
  const [d, setD] = useState<Ops | null>(null);
  useEffect(() => {
    let alive = true;
    const load = () => {
      if (document.visibilityState === "hidden") return;
      nxGet<Ops>("ops").then((v) => alive && setD(v)).catch(() => undefined);
    };
    load();
    const id = setInterval(load, 120_000);
    return () => {
      alive = false;
      clearInterval(id);
    };
  }, []);
  if (!d) return null;
  if (!d.storage || !d.ai || !d.e5) return <Card title={x.t}><p className="nxa-muted">{x.na}</p></Card>;
  const { ai, e5 } = d;
  const warns = [ai.spike && x.spike, ai.errAlert && `${x.erra} (${ai.errRate}%)`, e5.alert && x.e5a].filter(Boolean) as string[];
  return (
    <Card title={x.t}>
      <p>
        {warns.length ? warns.map((w, i) => <span key={i}><Pill tone={i === 0 && ai.spike ? "warn" : "bad"}>!</Pill> {w} </span>) : <Pill tone="ok">{x.ok}</Pill>}
      </p>
      <p className="nxa-muted">
        {x.ai}: <b>{fmtNum(lang, ai.calls)}</b> · {x.err}: {fmtNum(lang, ai.err)} · {x.avg}: {ai.avg == null ? x.new : fmtNum(lang, ai.avg)}
      </p>
      <p className="nxa-muted">
        {x.e5}: <b>{fmtNum(lang, e5.total)}</b>
        {e5.top.length ? " — " + e5.top.map((r) => `/api/${r.route} ${r.n}`).join(" · ") : ` — ${x.none}`}
      </p>
    </Card>
  );
}

/* ───────────── live presence ───────────── */

const LIVE_TXT: Record<string, [string, string, string]> = {
  az: ["İndi saytda", "son 90 saniyədə aktiv", "Saxlama qoşulmayıb"],
  en: ["On site now", "active in the last 90 s", "Storage not connected"],
  tr: ["Şu an sitede", "son 90 saniyede aktif", "Depolama bağlı değil"],
  ar: ["في الموقع الآن", "نشط خلال آخر 90 ثانية", "التخزين غير متصل"],
  ru: ["Сейчас на сайте", "активны за последние 90 с", "Хранилище не подключено"],
};

export function LiveCard() {
  const { lang } = useStudio();
  const [count, setCount] = useState<number | null | undefined>(undefined);
  useEffect(() => {
    let alive = true;
    const load = () => {
      if (document.visibilityState === "hidden") return;
      nxGet<{ count: number | null }>("live")
        .then((d) => alive && setCount(d.count))
        .catch(() => alive && setCount((c) => (c === undefined ? null : c)));
    };
    load();
    const id = setInterval(load, 20_000);
    document.addEventListener("visibilitychange", load);
    return () => {
      alive = false;
      clearInterval(id);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);
  const [title, sub, off] = LIVE_TXT[lang] ?? LIVE_TXT.az;
  return (
    <Card title={title}>
      <div style={{ display: "flex", alignItems: "baseline", gap: 12 }}>
        <span aria-hidden style={{ width: 10, height: 10, borderRadius: 99, background: count ? "#22c55e" : "#9ca3af", boxShadow: count ? "0 0 0 4px rgba(34,197,94,.18)" : "none", alignSelf: "center" }} />
        <b style={{ fontSize: 34, lineHeight: 1, fontVariantNumeric: "tabular-nums" }}>{count === undefined ? "…" : count === null ? "—" : fmtNum(lang, count)}</b>
        <small style={{ opacity: 0.7 }}>{count === null ? off : sub}</small>
      </div>
    </Card>
  );
}
