import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/i18n";
import { STUDIO_APPS } from "@/lib/apps";
import { effectiveApp } from "@/lib/app-store";
import { Card, ConfirmDelete, Empty, ErrorBox, Field, PageHead, Skeleton, useStudio } from "@/components/studio/core";
import { Kpi, fmtDate, fmtNum } from "@/components/studio/sections";
import type { SKey, T } from "@/components/studio/i18n";
import {
  IconAlert,
  IconApps,
  IconCalendar,
  IconChat,
  IconCheck,
  IconDownload,
  IconExternal,
  IconLibrary,
  IconRefresh,
  IconSearch,
  IconShield,
  IconSpark,
  IconTrendUp,
  IconUpload,
} from "@/components/studio/icons";
import { nxCover, nxGet, nxPost, type AppsData, type ChatFull, type ChatList, type Cover, type Covers, type Deploys, type Library, type Providers } from "@/components/studio/nx-api";

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

export function ChatsSection() {
  const { t, lang, toast } = useStudio();
  const [q, setQ] = useState("");
  const [term, setTerm] = useState("");
  const [list, setList] = useState<ChatList | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState<ChatFull | null>(null);
  const [openBusy, setOpenBusy] = useState("");
  const [deleting, setDeleting] = useState(false);

  const load = useCallback((query: string, offset = 0) => {
    setBusy(true);
    setError("");
    nxGet<ChatList>("chats", { q: query, offset, limit: 30 })
      .then((d) => setList((prev) => (offset && prev ? { ...d, chats: [...prev.chats, ...d.chats] } : d)))
      .catch((e: unknown) => setError(e instanceof Error ? e.message : "error"))
      .finally(() => setBusy(false));
  }, []);

  useEffect(() => load(""), [load]);
  useEffect(() => {
    const id = setTimeout(() => {
      if (q !== term) {
        setTerm(q);
        load(q);
      }
    }, 350);
    return () => clearTimeout(id);
  }, [q, term, load]);

  const read = (id: string) => {
    setOpenBusy(id);
    nxGet<{ chat: ChatFull }>("chat", { id })
      .then((d) => setOpen(d.chat))
      .catch(() => toast(t("err_load"), "err"))
      .finally(() => setOpenBusy(""));
  };

  const remove = (id: string) => {
    setDeleting(true);
    nxPost("chatdel", { id })
      .then(() => {
        toast(t("chats_deleted"));
        setOpen(null);
        setList((l) => (l ? { ...l, total: Math.max(0, l.total - 1), chats: l.chats.filter((c) => c.id !== id) } : l));
      })
      .catch((e: unknown) => toast(e instanceof Error && e.message === "auth" ? t("err_auth") : t("err_load"), "err"))
      .finally(() => setDeleting(false));
  };

  const days = useMemo(() => {
    const map = new Map<string, number>();
    for (const c of list?.chats ?? []) map.set(dayKey(c.updated_at), (map.get(dayKey(c.updated_at)) || 0) + 1);
    return [...map.entries()].sort(([a], [b]) => a.localeCompare(b)).slice(-14);
  }, [list]);

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconChat size={22} />} title={t("nav_chats")} sub={t("chats_sub")}>
        <RefreshBtn t={t} busy={busy} onClick={() => load(term)} />
      </PageHead>
      {error ? <ErrorBox onRetry={() => load(term)} /> : null}
      {!list && !error ? (
        <Card>
          <Skeleton lines={5} />
        </Card>
      ) : list && !list.storage ? (
        <Card>
          <Empty icon={<IconShield size={26} />} text={t("chats_off")} />
        </Card>
      ) : list ? (
        <>
          <div className="nxa-kpis is-three">
            <Kpi icon={<IconChat size={20} />} tone="teal" label={t("chats_total")} value={fmtNum(lang, list.total)} />
            <Kpi icon={<IconCalendar size={20} />} tone="blue" label={t("last_30")} value={fmtNum(lang, list.chats.filter((c) => Date.now() - new Date(c.updated_at).getTime() < 30 * 864e5).length)} />
            <Kpi icon={<IconTrendUp size={20} />} tone="violet" label={t("chats_daily")} value={fmtNum(lang, days.length ? days[days.length - 1][1] : 0)} />
          </div>
          {days.length > 1 ? (
            <Card title={t("chats_daily")}>
              <Bars lang={lang} items={days.map(([d, v]) => ({ label: fmtDate(lang, `${d}T12:00:00Z`, { day: "numeric", month: "short" }), value: v }))} />
            </Card>
          ) : null}
          <div className="nxx-split">
            <Card
              title={t("nav_chats")}
              actions={
                <label className="nxx-search">
                  <IconSearch size={16} />
                  <input value={q} onChange={(e) => setQ(e.target.value)} placeholder={t("chats_search")} aria-label={t("chats_search")} />
                </label>
              }
            >
              {list.chats.length === 0 ? (
                <Empty icon={<IconChat size={26} />} text={t("chats_none")} />
              ) : (
                <ul className="nxx-list">
                  {list.chats.map((c) => (
                    <li key={c.id}>
                      <button type="button" className={open?.id === c.id ? "is-on" : ""} onClick={() => read(c.id)} disabled={openBusy === c.id}>
                        <b>{c.title || "—"}</b>
                        <small>
                          {when(lang, c.updated_at)} · {t("device")} {c.device}…
                        </small>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
              {list.chats.length < list.total ? (
                <button type="button" className="nxa-btn is-ghost nxx-more" disabled={busy} onClick={() => load(term, list.chats.length)}>
                  {t("more")}
                </button>
              ) : null}
            </Card>
            <Card
              title={open ? open.title || "—" : t("chats_pick")}
              sub={open ? `${when(lang, open.updated_at)} · ${open.messages.length}` : undefined}
              actions={open ? <ConfirmDelete busy={deleting} onConfirm={() => remove(open.id)} /> : null}
            >
              {open ? (
                <div className="nxx-thread">
                  {open.messages.map((m, i) => (
                    <div key={i} className={`nxx-msg ${m.k === "u" ? "is-user" : m.k === "b err" ? "is-err" : "is-bot"}`}>
                      <small>{m.k === "u" ? t("you") : t("bot")}</small>
                      <p dir="auto">{m.t}</p>
                      {m.i ? (
                        <a href={m.i} target="_blank" rel="noreferrer noopener">
                          {m.i.slice(0, 60)}
                        </a>
                      ) : null}
                    </div>
                  ))}
                </div>
              ) : (
                <Empty icon={<IconChat size={26} />} text={t("chats_pick")} />
              )}
            </Card>
          </div>
        </>
      ) : null}
    </div>
  );
}

/* ───────────── AI provayderləri ───────────── */

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
                        <td>{play?.listed ? <Pill tone="ok">{t("rel_play")}</Pill> : <Pill tone="off">{t("rel_notlisted")}</Pill>}</td>
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

function CoverThumb({ cover, onOpen }: { cover: Cover; onOpen: (url: string) => void }) {
  const ref = useRef<HTMLButtonElement>(null);
  const [src, setSrc] = useState("");
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          io.disconnect();
          nxCover(cover.file).then(setSrc).catch(() => setFailed(true));
        }
      },
      { rootMargin: "200px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [cover.file]);
  return (
    <button type="button" ref={ref} className="nxx-cover" onClick={() => src && onOpen(src)} style={{ aspectRatio: cover.w && cover.h ? `${cover.w} / ${cover.h}` : "7 / 10" }}>
      {src ? <img src={src} alt="" loading="lazy" decoding="async" /> : <span className={failed ? "is-failed" : "nxa-skel-box"} />}
      <small>
        {cover.premium ? `★ ${cover.premium}` : ""} {cover.model}
      </small>
    </button>
  );
}

export function CoversSection() {
  const { t, lang } = useStudio();
  const { data, error, busy, run } = useLoad((fresh) => nxGet<Covers>("covers", { fresh: fresh ? 1 : undefined }));
  const [big, setBig] = useState("");
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
          <div className="nxa-kpis is-three">
            <Kpi icon={<IconCheck size={20} />} tone="teal" label={t("cov_total")} value={fmtNum(lang, data.covers.length)} />
            <Kpi icon={<IconSpark size={20} />} tone="violet" label={t("cov_score")} value={avg ? avg.toFixed(1) : "—"} />
            <Kpi icon={<IconCalendar size={20} />} tone="blue" label={t("cov_runs")} value={data.runs[0] ? when(lang, data.runs[0].at) : "—"} />
          </div>
          {days.length ? (
            <Card title={t("cov_daily")}>
              <Bars lang={lang} items={days.map(([d, v]) => ({ label: fmtDate(lang, `${d}T12:00:00Z`, { day: "numeric", month: "short" }), value: v }))} />
            </Card>
          ) : null}
          <Card title={t("nav_covers")}>
            {data.covers.length ? (
              <div className="nxx-covers">
                {data.covers.map((c) => (
                  <CoverThumb key={c.file} cover={c} onOpen={setBig} />
                ))}
              </div>
            ) : (
              <Empty text={t("cov_none")} />
            )}
          </Card>
          {data.runs.length ? (
            <Card title={t("cov_runs")}>
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
          {big ? (
            <button type="button" className="nxx-lightbox" onClick={() => setBig("")} aria-label={t("close")}>
              <img src={big} alt="" />
            </button>
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
  useEffect(() => {
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
  return (
    <Card title={t("pulse")}>
      <div className="nxx-pulses">
        {tile("deploys", "dep_last", last ? (last.state === "success" ? t("dep_success") : last.state === "failure" ? t("dep_failure") : t("dep_pending")) : "…", last ? depTone(last.state) : "off")}
        {tile("providers", "prov_working", prov ? `${conf.filter((p) => p.ok).length} / ${conf.length}` : "…", prov ? (conf.every((p) => p.ok) ? "ok" : "warn") : "off")}
        {tile("libstats", "lib_books", lib?.catalog ? fmtNum(lang, lib.catalog.books) : "…", lib ? (lib.up ? "ok" : "bad") : "off")}
      </div>
    </Card>
  );
}
