import { useEffect, useMemo, useRef, useState } from "react";
import { LANGS, type Lang } from "@/lib/i18n";
import { LESSON_PREFIX } from "@/lib/lessons";
import {
  STUDIO_SQL,
  fetchPrivacyAll,
  fetchStudioApps,
  deletePrivacyRow,
  saveAppsMany,
  savePrivacyMany,
  signOut,
  type AdminOverview,
  type StudioAppRow,
  type StudioHit,
  type StudioPrivacyRow,
} from "@/lib/studio";
import { Card, ConfirmDelete, Empty, ErrorBox, PageHead, Seg, Skeleton, runCommit, useCopied, useStudio, type SaveTarget } from "./core";
import { CATALOG, ICONS, LangDots, STORE_FIELDS, appList } from "./editors";
import { nxGet } from "./nx-api";
import { PANEL_LANGS, errorText, type SKey, type T } from "./i18n";
import {
  IconAlert,
  IconApps,
  IconCalendar,
  IconChat,
  IconCheck,
  IconChevron,
  IconClick,
  IconCopy,
  IconDatabase,
  IconDownload,
  IconExternal,
  IconGlobe,
  IconLock,
  IconMap,
  IconMoon,
  IconPages,
  IconPlus,
  IconRefresh,
  IconSettings,
  IconShield,
  IconSpark,
  IconSun,
  IconTrendDown,
  IconTrendUp,
  IconUpload,
} from "./icons";

export type OverviewState = {
  data: AdminOverview | null;
  hits: StudioHit[] | null;
  hitsChecked: boolean;
  error: boolean;
  loading: boolean;
  reload: () => void;
};

const LOCALE: Record<Lang, string> = { az: "az", en: "en-GB", tr: "tr-TR", ar: "ar-u-nu-latn", ru: "ru-RU" };

export function fmtNum(lang: Lang, n: number) {
  return new Intl.NumberFormat(LOCALE[lang]).format(n);
}

const AZ_MONTHS = ["yanvar", "fevral", "mart", "aprel", "may", "iyun", "iyul", "avqust", "sentyabr", "oktyabr", "noyabr", "dekabr"];
const AZ_SHORT = ["yan", "fev", "mar", "apr", "may", "iyn", "iyl", "avq", "sen", "okt", "noy", "dek"];
const AZ_DAYS = ["bazar", "bazar ertəsi", "çərşənbə axşamı", "çərşənbə", "cümə axşamı", "cümə", "şənbə"];
const AZ_DAYS_SHORT = ["B.", "B.e.", "Ç.a.", "Ç.", "C.a.", "C.", "Ş."];

// Bəzi brauzerlərdə az lokal məlumatı yoxdur ("M10" kimi çıxır), ona görə azərbaycanca tarix əllə qurulur.
function azDate(value: string | number | Date, opts: Intl.DateTimeFormatOptions) {
  const parts = Object.fromEntries(
    new Intl.DateTimeFormat("en-US", { timeZone: "Asia/Baku", year: "numeric", month: "numeric", day: "numeric", weekday: "short", hour: "2-digit", minute: "2-digit", hourCycle: "h23" })
      .formatToParts(new Date(value))
      .map((p) => [p.type, p.value]),
  );
  const m = Number(parts.month) - 1;
  const wd = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].indexOf(parts.weekday);
  const out: string[] = [];
  if (opts.weekday) out.push(opts.weekday === "long" ? AZ_DAYS[wd] + "," : AZ_DAYS_SHORT[wd]);
  if (opts.day) out.push(String(Number(parts.day)));
  if (opts.month) out.push(opts.month === "short" ? AZ_SHORT[m] : AZ_MONTHS[m]);
  if (opts.year) out.push(parts.year);
  if (opts.hour) out.push(`${parts.hour}:${parts.minute}`);
  const text = out.join(" ");
  return opts.weekday === "long" ? text.charAt(0).toLocaleUpperCase("az") + text.slice(1) : text;
}

export function fmtDate(lang: Lang, value: string | number | Date, opts: Intl.DateTimeFormatOptions = { day: "numeric", month: "long", year: "numeric" }) {
  try {
    if (lang === "az") return azDate(value, opts);
    return new Intl.DateTimeFormat(LOCALE[lang], { timeZone: "Asia/Baku", ...opts }).format(new Date(value));
  } catch {
    return String(value);
  }
}

function utcDays(n: number) {
  return Array.from({ length: n }, (_, i) => {
    const d = new Date();
    d.setUTCDate(d.getUTCDate() - (n - 1 - i));
    return d.toISOString().slice(0, 10);
  });
}

function monthSum(rows: StudioHit[], kind: string, month: string, slug?: string) {
  return rows.reduce((sum, row) => (row.kind === kind && row.day.slice(0, 7) === month && (slug === undefined || row.slug === slug) ? sum + row.total : sum), 0);
}

function Trend({ t, now, prev }: { t: T; now: number; prev: number }) {
  if (prev <= 0) return <em className="nxa-trend">{now === 0 ? "—" : t("last_zero")}</em>;
  const p = Math.round(((now - prev) / prev) * 100);
  const up = p >= 0;
  return (
    <em className={`nxa-trend ${up ? "is-up" : "is-down"}`}>
      {up ? <IconTrendUp size={14} /> : <IconTrendDown size={14} />}
      {t("vs_last", { p: `${up ? "+" : ""}${p}%` })}
    </em>
  );
}

export function Kpi({ icon, tone, label, value, foot }: { icon: React.ReactNode; tone: string; label: string; value: string; foot?: React.ReactNode }) {
  return (
    <div className={`nxa-kpi is-${tone}`}>
      <span className="nxa-kpi-icon">{icon}</span>
      <small>{label}</small>
      <strong>{value}</strong>
      {foot ?? <em className="nxa-trend">&nbsp;</em>}
    </div>
  );
}

export function AreaChart({ values, labels, lang, label }: { values: number[]; labels: string[]; lang: Lang; label: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const w = 720;
  const h = 220;
  const pad = { l: 34, r: 12, t: 16, b: 28 };
  const max = Math.max(4, ...values);
  const step = Math.pow(10, Math.floor(Math.log10(max)));
  const top = Math.ceil(max / step) * step;
  const x = (i: number) => pad.l + (values.length <= 1 ? 0 : (i * (w - pad.l - pad.r)) / (values.length - 1));
  const y = (v: number) => pad.t + (1 - v / top) * (h - pad.t - pad.b);
  const line = values.map((v, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${line} L${x(values.length - 1)},${h - pad.b} L${x(0)},${h - pad.b} Z`;
  const ticks = [0, 0.5, 1].map((f) => Math.round(top * f));
  return (
    <div className="nxa-chart" dir="ltr">
      <svg viewBox={`0 0 ${w} ${h}`} role="img" aria-label={label} onMouseLeave={() => setHover(null)}>
        <defs>
          <linearGradient id="nxaArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--nxa-accent)" stopOpacity="0.34" />
            <stop offset="100%" stopColor="var(--nxa-accent)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="nxaLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--nxa-accent-2)" />
            <stop offset="100%" stopColor="var(--nxa-accent)" />
          </linearGradient>
        </defs>
        {ticks.map((tick) => (
          <g key={tick}>
            <line x1={pad.l} x2={w - pad.r} y1={y(tick)} y2={y(tick)} className="nxa-grid" />
            <text x={pad.l - 8} y={y(tick) + 4} textAnchor="end" className="nxa-axis">
              {fmtNum(lang, tick)}
            </text>
          </g>
        ))}
        <path d={area} fill="url(#nxaArea)" />
        <path d={line} fill="none" stroke="url(#nxaLine)" strokeWidth="2.6" strokeLinejoin="round" strokeLinecap="round" />
        {values.map((v, i) => (
          <rect key={i} x={x(i) - (w / values.length) / 2} y={pad.t} width={w / values.length} height={h - pad.t - pad.b} fill="transparent" onMouseEnter={() => setHover(i)} onFocus={() => setHover(i)} tabIndex={-1} />
        ))}
        {[0, Math.floor((values.length - 1) / 2), values.length - 1].map((i) => (
          <text key={i} x={x(i)} y={h - 8} textAnchor={i === 0 ? "start" : i === values.length - 1 ? "end" : "middle"} className="nxa-axis">
            {labels[i]}
          </text>
        ))}
        {hover !== null ? (
          <g>
            <line x1={x(hover)} x2={x(hover)} y1={pad.t} y2={h - pad.b} className="nxa-cursor" />
            <circle cx={x(hover)} cy={y(values[hover])} r="5" className="nxa-dot" />
          </g>
        ) : null}
      </svg>
      {hover !== null ? (
        <div className="nxa-tip" style={{ left: `${(x(hover) / w) * 100}%` }}>
          <b>{fmtNum(lang, values[hover])}</b>
          <small>{labels[hover]}</small>
        </div>
      ) : null}
    </div>
  );
}

/* ───────────────────────────── İcmal ───────────────────────────── */

type SecData = { fails: number; lastFail: number | null; failAlert: boolean; live: number | null; base: number | null; spike: boolean; vercel: { active: boolean; count: number } | null; at: number };

function SecurityAlert() {
  const { t, lang } = useStudio();
  const [d, setD] = useState<SecData | null>(null);
  useEffect(() => {
    let alive = true;
    const load = () => {
      if (document.visibilityState === "hidden") return;
      nxGet<SecData>("security").then((x) => alive && setD(x)).catch(() => undefined);
    };
    load();
    const id = setInterval(load, 45_000);
    document.addEventListener("visibilitychange", load);
    return () => {
      alive = false;
      clearInterval(id);
      document.removeEventListener("visibilitychange", load);
    };
  }, []);
  const msgs: string[] = [];
  if (d?.vercel?.active) msgs.push(t("sec_vercel").replace("{n}", String(d.vercel.count)));
  if (d?.spike) msgs.push(t("sec_spike").replace("{n}", String(d.live)).replace("{b}", String(Math.round(d.base ?? 0))));
  if (d?.failAlert) msgs.push(t("sec_fail").replace("{n}", String(d.fails)));
  const bad = msgs.length > 0;
  const when = d ? fmtDate(lang, d.at, { hour: "2-digit", minute: "2-digit" }) : "";
  return (
    <details className="nxa-card nxa-sec" open={bad || undefined} style={{ padding: "10px 14px", ...(bad ? { borderColor: "#ef4444", background: "rgba(239,68,68,.08)" } : {}) }} role={bad ? "alert" : undefined}>
      <summary style={{ cursor: "pointer", display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
        <span aria-hidden style={{ width: 9, height: 9, borderRadius: 99, background: !d ? "#9ca3af" : bad ? "#ef4444" : "#22c55e" }} />
        <strong>🛡️ {bad ? t("sec_alert") : t("sec_title")}</strong>
        <span style={{ opacity: 0.8, fontSize: 13 }}>{d ? (bad ? "" : t("sec_ok")) : "…"}</span>
        {d && <small style={{ opacity: 0.6 }}>{t("sec_checked")} {when}</small>}
        <span style={{ fontSize: 13, textDecoration: "underline" }}>{t("sec_more")}</span>
      </summary>
      {bad && (
        <ul style={{ margin: "8px 0 4px", paddingInlineStart: 20, fontSize: 13, lineHeight: 1.5, color: "#b91c1c", fontWeight: 600 }}>
          {msgs.map((m) => <li key={m}>{m}</li>)}
        </ul>
      )}
      <p style={{ margin: "6px 0", fontSize: 13, opacity: 0.8 }}>{t("sec_warn")}</p>
      <ol style={{ margin: "4px 0", paddingInlineStart: 20, fontSize: 13, lineHeight: 1.5 }}>
        <li>{t("sec_s1")}</li>
        <li>{t("sec_s2")}</li>
        <li>{t("sec_s3")}</li>
      </ol>
      <a href="https://vercel.com/docs/vercel-firewall/attack-challenge-mode" target="_blank" rel="noreferrer" style={{ fontSize: 13 }}>{t("sec_open")} ↗</a>
    </details>
  );
}

export function OverviewSection({ ov }: { ov: OverviewState }) {
  const { t, lang, apps, rows, go } = useStudio();
  const thisMonth = new Date().toISOString().slice(0, 7);
  const p = new Date();
  const lastMonth = new Date(Date.UTC(p.getUTCFullYear(), p.getUTCMonth() - 1, 1)).toISOString().slice(0, 7);
  const hits = ov.hits ?? [];
  const days = utcDays(30);
  const series = days.map((d) => hits.filter((r) => r.kind === "view" && r.day === d).reduce((s, r) => s + r.total, 0));
  const totalViews = series.reduce((a, b) => a + b, 0);
  const peakIndex = series.indexOf(Math.max(...series));
  const aiOpens = (ov.data?.stats ?? []).reduce((s, d) => s + (d.counts["visit:ai"] || 0), 0);
  const list = apps ? appList(apps) : [];
  const clicksBy = list
    .map((app) => ({ app, n: monthSum(hits, "download", thisMonth, app.slug) }))
    .sort((a, b) => b.n - a.n);
  const maxClicks = Math.max(1, ...clicksBy.map((c) => c.n));
  const h = ov.data?.health;

  return (
    <div className="nxa-stack">
      <div className="nxa-hero">
        <div>
          <h1>{t("hello")}</h1>
          <p>{t("hello_sub")}</p>
        </div>
        <div className="nxa-hero-side">
          <span className="nxa-date">
            <IconCalendar size={16} />
            <span>
              <small>{t("today")}</small>
              {fmtDate(lang, Date.now(), { weekday: "long", day: "numeric", month: "long" })}
            </span>
          </span>
          <button type="button" className="nxa-btn is-ghost" onClick={ov.reload} disabled={ov.loading} aria-label={t("refresh")}>
            <IconRefresh size={16} className={`nxa-ic${ov.loading ? " is-spinning" : ""}`} />
            {t("refresh")}
          </button>
        </div>
      </div>

      <SecurityAlert />

      <div className="nxa-kpis">
        <Kpi
          icon={<IconGlobe size={20} />}
          tone="blue"
          label={t("kpi_visits")}
          value={ov.hits ? fmtNum(lang, monthSum(hits, "view", thisMonth)) : ov.hitsChecked ? "—" : "…"}
          foot={ov.hits ? <Trend t={t} now={monthSum(hits, "view", thisMonth)} prev={monthSum(hits, "view", lastMonth)} /> : ov.hitsChecked ? <em className="nxa-trend">{t("not_connected")}</em> : undefined}
        />
        <Kpi
          icon={<IconClick size={20} />}
          tone="violet"
          label={t("kpi_clicks")}
          value={ov.hits ? fmtNum(lang, monthSum(hits, "download", thisMonth)) : ov.hitsChecked ? "—" : "…"}
          foot={ov.hits ? <Trend t={t} now={monthSum(hits, "download", thisMonth)} prev={monthSum(hits, "download", lastMonth)} /> : undefined}
        />
        <Kpi
          icon={<IconSpark size={20} />}
          tone="teal"
          label={t("kpi_ai")}
          value={ov.data ? (ov.data.stats ? fmtNum(lang, aiOpens) : "—") : "…"}
          foot={ov.data && !ov.data.stats ? <em className="nxa-trend">{t("not_connected")}</em> : undefined}
        />
        <Kpi
          icon={<IconChat size={20} />}
          tone="amber"
          label={t("kpi_chats")}
          value={ov.data ? (ov.data.chats === null ? "—" : fmtNum(lang, ov.data.chats)) : "…"}
          foot={ov.data && ov.data.chats === null ? <em className="nxa-trend">{t("not_connected")}</em> : undefined}
        />
      </div>

      {ov.error ? <ErrorBox onRetry={ov.reload} /> : null}

      <div className="nxa-split is-wide-left">
        <Card title={t("visits_30")} sub={t("last_30")}>
          {!ov.hitsChecked ? (
            <Skeleton tall />
          ) : !ov.hits ? (
            <Empty icon={<IconAlert size={24} />} text={t("hits_setup")}>
              <button type="button" className="nxa-btn is-ghost" onClick={() => go("settings")}>
                <IconSettings size={16} />
                {t("setup")}
              </button>
            </Empty>
          ) : (
            <>
              <AreaChart values={series} labels={days.map((d) => fmtDate(lang, `${d}T12:00:00Z`, { day: "numeric", month: "short" }))} lang={lang} label={t("visits_30")} />
              <div className="nxa-mini-stats">
                <span>
                  <small>{t("total")}</small>
                  <b>{fmtNum(lang, totalViews)}</b>
                </span>
                <span>
                  <small>{t("daily_avg")}</small>
                  <b>{fmtNum(lang, Math.round((totalViews / 30) * 10) / 10)}</b>
                </span>
                <span>
                  <small>{t("peak")}</small>
                  <b>{totalViews ? `${fmtNum(lang, series[peakIndex])} · ${fmtDate(lang, `${days[peakIndex]}T12:00:00Z`, { day: "numeric", month: "short" })}` : "—"}</b>
                </span>
              </div>
            </>
          )}
        </Card>
        <Card title={t("health")}>
          {!h ? (
            ov.error ? <Empty icon={<IconAlert size={24} />} text={t("load_error")} /> : <Skeleton lines={6} />
          ) : (
            <ul className="nxa-health">
              <HealthRow t={t} ok={h.supabase} k="h_supabase" />
              <HealthRow t={t} ok={h.chatsStorage} k="h_chats" />
              <HealthRow t={t} ok={h.github} k="h_github" />
              <HealthRow t={t} ok={h.ai} k="h_ai" />
            </ul>
          )}
        </Card>
      </div>

      <div className="nxa-split">
        <Card title={t("top_apps")} sub={fmtDate(lang, Date.now(), { month: "long", year: "numeric" })} actions={<button type="button" className="nxa-btn is-ghost is-sm" onClick={() => go("apps")}>{t("all_apps")}</button>}>
          {!apps ? (
            <Skeleton lines={4} />
          ) : (
            <div className="nxa-bars">
              {clicksBy.map(({ app, n }) => (
                <button type="button" key={app.slug} onClick={() => go("apps")}>
                  <img src={app.icon_url || ICONS[app.slug] || "/nibras-icon.png"} alt="" loading="lazy" />
                  <span className="nxa-bar-main">
                    <b>{app.name}</b>
                    <span className="nxa-bar-track">
                      <i style={{ width: `${(n / maxClicks) * 100}%` }} />
                    </span>
                  </span>
                  <em>
                    {ov.hits ? fmtNum(lang, n) : "—"} <small>{t("clicks")}</small>
                  </em>
                </button>
              ))}
            </div>
          )}
        </Card>
        <Card title={t("quick")}>
          <div className="nxa-quick">
            <button type="button" onClick={() => go("apps", "new")}>
              <IconPlus size={20} />
              {t("q_new_app")}
            </button>
            <button type="button" onClick={() => go("content", "backup")}>
              <IconDownload size={20} />
              {t("q_backup")}
            </button>
            <button type="button" onClick={() => go("pages", "about")}>
              <IconPages size={20} />
              {t("q_about")}
            </button>
            <a href="/ai" target="_blank" rel="noreferrer">
              <IconSpark size={20} />
              {t("q_ai")}
            </a>
          </div>
          <div className="nxa-summary">
            <span>
              <b>{apps ? appList(apps).length : "…"}</b>
              <small>{t("apps_count")}</small>
            </span>
            <span>
              <b>{rows ? new Set(rows.map((r) => r.slug)).size : "…"}</b>
              <small>{t("rows_count")}</small>
            </span>
            <span>
              <b>5</b>
              <small>{t("langs_filled")}</small>
            </span>
          </div>
        </Card>
      </div>
    </div>
  );
}

function HealthRow({ t, ok, k }: { t: T; ok: boolean; k: SKey }) {
  return (
    <li className={ok ? "is-ok" : "is-off"}>
      {ok ? <IconCheck size={18} /> : <IconAlert size={18} />}
      <span>{t(k)}</span>
      <em>{ok ? t("ok") : t("missing")}</em>
    </li>
  );
}

/* ───────────────────────────── Nibras AI ───────────────────────────── */

const MODES = ["ask", "chat", "code", "image", "create"] as const;
const SNIPS = ["hit", "local", "ai"] as const;

export function AiSection({ ov }: { ov: OverviewState }) {
  const { t, lang } = useStudio();
  const stats = ov.data?.stats ?? null;
  const ordered = useMemo(() => (stats ? [...stats].reverse() : []), [stats]);
  const sum = (key: string) => ordered.reduce((s, d) => s + (d.counts[key] || 0), 0);
  const modeTotal = MODES.reduce((s, m) => s + sum(`mode:${m}`), 0);
  const errors = ordered.reduce((s, d) => s + Object.entries(d.counts).filter(([k]) => k.startsWith("error:")).reduce((a, [, v]) => a + v, 0), 0);

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconSpark size={22} />} title={t("nav_ai")} sub={t("ai_sub")}>
        <button type="button" className="nxa-btn is-ghost" onClick={ov.reload} disabled={ov.loading}>
          <IconRefresh size={16} className={`nxa-ic${ov.loading ? " is-spinning" : ""}`} />
          {t("refresh")}
        </button>
        <a className="nxa-btn is-ghost" href="/ai" target="_blank" rel="noreferrer">
          <IconExternal size={16} />
          {t("q_ai")}
        </a>
      </PageHead>
      {ov.error ? <ErrorBox onRetry={ov.reload} /> : null}
      {!ov.data && !ov.error ? (
        <Card>
          <Skeleton tall />
        </Card>
      ) : ov.data && !stats ? (
        <Card>
          <Empty icon={<IconDatabase size={26} />} text={t("ai_storage_off")} />
        </Card>
      ) : stats ? (
        <>
          <div className="nxa-kpis">
            <Kpi icon={<IconSpark size={20} />} tone="teal" label={`${t("ai_opens")} · ${t("last_30")}`} value={fmtNum(lang, sum("visit:ai"))} />
            <Kpi icon={<IconChat size={20} />} tone="blue" label={`${t("ai_modes")} · ${t("last_30")}`} value={fmtNum(lang, modeTotal)} />
            <Kpi icon={<IconDatabase size={20} />} tone="violet" label={t("ai_snippets")} value={fmtNum(lang, SNIPS.reduce((s, k) => s + sum(`snippet:${k}`), 0))} />
            <Kpi icon={<IconAlert size={20} />} tone="rose" label={t("ai_errors")} value={fmtNum(lang, errors)} />
          </div>
          <div className="nxa-split is-wide-left">
            <Card title={t("ai_opens")} sub={t("last_30")}>
              <AreaChart
                values={ordered.map((d) => d.counts["visit:ai"] || 0)}
                labels={ordered.map((d) => fmtDate(lang, `${d.date}T12:00:00Z`, { day: "numeric", month: "short" }))}
                lang={lang}
                label={t("ai_opens")}
              />
            </Card>
            <Card title={t("ai_modes")}>
              <div className="nxa-bars is-plain">
                {MODES.map((m) => {
                  const n = sum(`mode:${m}`);
                  return (
                    <div key={m}>
                      <span className="nxa-bar-main">
                        <b>{t(`m_${m}` as SKey)}</b>
                        <span className="nxa-bar-track">
                          <i style={{ width: `${modeTotal ? (n / modeTotal) * 100 : 0}%` }} />
                        </span>
                      </span>
                      <em>{fmtNum(lang, n)}</em>
                    </div>
                  );
                })}
              </div>
              <h3 className="nxa-subhead">{t("ai_snippets")}</h3>
              <div className="nxa-summary">
                {SNIPS.map((k) => (
                  <span key={k}>
                    <b>{fmtNum(lang, sum(`snippet:${k}`))}</b>
                    <small>{t(`s_${k}` as SKey)}</small>
                  </span>
                ))}
              </div>
            </Card>
          </div>
          <Card title={t("ai_daily")}>
            <div className="nxa-table-wrap">
              <table className="nxa-table">
                <thead>
                  <tr>
                    <th>{t("date")}</th>
                    <th>{t("ai_opens")}</th>
                    {MODES.map((m) => (
                      <th key={m}>{t(`m_${m}` as SKey)}</th>
                    ))}
                    <th>{t("ai_errors")}</th>
                  </tr>
                </thead>
                <tbody>
                  {[...ordered].reverse().map((d) => (
                    <tr key={d.date}>
                      <td>{fmtDate(lang, `${d.date}T12:00:00Z`, { day: "numeric", month: "short", weekday: "short" })}</td>
                      <td>{fmtNum(lang, d.counts["visit:ai"] || 0)}</td>
                      {MODES.map((m) => (
                        <td key={m}>{fmtNum(lang, d.counts[`mode:${m}`] || 0)}</td>
                      ))}
                      <td>{fmtNum(lang, Object.entries(d.counts).filter(([k]) => k.startsWith("error:")).reduce((a, [, v]) => a + v, 0))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </>
      ) : null}
    </div>
  );
}

/* ───────────────────────────── Məzmun bazası ───────────────────────────── */

type Kind = "privacy" | "page" | "lesson" | "resource" | "guide";

function classify(slug: string): { kind: Kind; href: string } {
  if (slug.startsWith(LESSON_PREFIX)) return { kind: "lesson", href: `/programming/python#${slug.slice(LESSON_PREFIX.length)}` };
  if (slug.startsWith("lib-resurs-")) return { kind: "resource", href: `/resurslar/${slug.slice(11)}` };
  if (slug.startsWith("lib-guide-")) return { kind: "guide", href: `/guides/${slug.slice(10)}` };
  if (slug === "about" || slug === "unutma") return { kind: "page", href: `/${slug}` };
  return { kind: "privacy", href: `/privacy/${slug}` };
}

const KIND_KEY: Record<Kind, SKey> = { privacy: "k_privacy", page: "k_page", lesson: "k_lesson", resource: "k_resource", guide: "k_guide" };

type Backup = { format: "nx-studio-backup"; version: 1; savedAt: string; apps: StudioAppRow[]; privacy: StudioPrivacyRow[] };

function readBackup(text: string): Backup | null {
  try {
    const data = JSON.parse(text) as Partial<Backup> & { apps?: unknown; privacy?: unknown };
    const privacy = Array.isArray(data.privacy) ? data.privacy : null;
    const apps = Array.isArray(data.apps) ? data.apps : [];
    if (!privacy) return null;
    const okRow = (r: StudioPrivacyRow) =>
      r && typeof r.slug === "string" && /^[a-z0-9-]{1,140}$/.test(r.slug) && (LANGS as readonly string[]).includes(r.lang) && typeof r.title === "string" && typeof r.body === "string";
    const okApp = (a: StudioAppRow) => a && typeof a.slug === "string" && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(a.slug) && typeof a.name === "string";
    const cleanPrivacy = (privacy as StudioPrivacyRow[]).filter(okRow).map((r) => ({ slug: r.slug, lang: r.lang, title: r.title.slice(0, 400), updated_label: String(r.updated_label ?? "").slice(0, 80), body: r.body.slice(0, 200000) }));
    const cleanApps = (apps as StudioAppRow[]).filter(okApp).map((a) => ({
      slug: a.slug,
      name: a.name.slice(0, 120),
      status: String(a.status ?? "soon"),
      summary: String(a.summary ?? ""),
      play_url: String(a.play_url ?? ""),
      huawei_url: String(a.huawei_url ?? ""),
      appstore_url: String(a.appstore_url ?? ""),
      galaxy_url: String(a.galaxy_url ?? ""),
      xiaomi_url: String(a.xiaomi_url ?? ""),
      icon_url: String(a.icon_url ?? ""),
      sort: Number(a.sort) || 200,
      visible: a.visible !== false,
    }));
    if (!cleanPrivacy.length && !cleanApps.length) return null;
    return { format: "nx-studio-backup", version: 1, savedAt: String(data.savedAt ?? ""), apps: cleanApps, privacy: cleanPrivacy };
  } catch {
    return null;
  }
}

export function ContentSection({ focus }: { focus?: string }) {
  const { t, lang, rows, apps, reload, toast, target } = useStudio();
  const [kind, setKind] = useState<Kind | "all">("all");
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("");
  const [pending, setPending] = useState<Backup | null>(null);
  const [busy, setBusy] = useState(false);
  const file = useRef<HTMLInputElement>(null);
  const backupBtn = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (focus === "backup") backupBtn.current?.focus();
  }, [focus]);

  const groups = useMemo(() => {
    const map = new Map<string, StudioPrivacyRow[]>();
    for (const row of rows ?? []) map.set(row.slug, [...(map.get(row.slug) ?? []), row]);
    return [...map.entries()]
      .map(([slug, list]) => {
        const info = classify(slug);
        const main = list.find((r) => r.lang === "az") ?? list[0];
        return { slug, list, ...info, title: main.title || slug, size: list.reduce((s, r) => s + r.body.length, 0) };
      })
      .sort((a, b) => a.kind.localeCompare(b.kind) || a.title.localeCompare(b.title));
  }, [rows]);

  const shown = groups.filter((g) => (kind === "all" || g.kind === kind) && `${g.title} ${g.slug}`.toLowerCase().includes(query.trim().toLowerCase()));

  async function download() {
    setBusy(true);
    try {
      const [freshApps, freshRows] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
      const data: Backup = { format: "nx-studio-backup", version: 1, savedAt: new Date().toISOString(), apps: freshApps, privacy: freshRows };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `nx-studio-backup-${new Date().toISOString().slice(0, 10)}.json`;
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
      toast(`${t("backup")} · ${freshRows.length + freshApps.length} ${t("rows")}`);
    } catch (reason) {
      toast(errorText(t, reason), "err");
    } finally {
      setBusy(false);
    }
  }

  async function restore(data: Backup) {
    setBusy(true);
    try {
      await saveAppsMany(data.apps);
      await savePrivacyMany(data.privacy);
      if (target !== "supabase") await runCommit(t, target, { skipSupabase: true });
      await reload();
      toast(t("restore_ok", { n: data.apps.length + data.privacy.length }));
      setPending(null);
    } catch (reason) {
      toast(errorText(t, reason), "err");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconDatabase size={22} />} title={t("nav_content")} sub={t("content_sub")}>
        <button ref={backupBtn} type="button" className="nxa-btn is-primary" onClick={download} disabled={busy}>
          <IconDownload size={17} />
          {t("backup")}
        </button>
        <button type="button" className="nxa-btn is-ghost" onClick={() => file.current?.click()} disabled={busy}>
          <IconUpload size={17} />
          {t("restore")}
        </button>
        <input
          ref={file}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={(event) => {
            const f = event.target.files?.[0];
            event.target.value = "";
            if (!f) return;
            if (f.size > 8 * 1024 * 1024) return toast(t("restore_bad"), "err");
            f.text().then((text) => {
              const data = readBackup(text);
              if (!data) toast(t("restore_bad"), "err");
              else setPending(data);
            });
          }}
        />
      </PageHead>
      {pending ? (
        <div className="nxa-banner" role="alertdialog">
          <IconUpload size={20} />
          <span>{t("restore_confirm", { n: pending.apps.length + pending.privacy.length })}</span>
          <button type="button" className="nxa-btn is-primary is-sm" disabled={busy} onClick={() => restore(pending)}>
            {t("restore_go")}
          </button>
          <button type="button" className="nxa-btn is-ghost is-sm" onClick={() => setPending(null)}>
            {t("cancel")}
          </button>
        </div>
      ) : null}
      <div className="nxa-toolbar">
        <Seg
          value={kind}
          onChange={setKind}
          options={[
            { id: "all", label: `${t("all")} · ${groups.length}` },
            ...(Object.keys(KIND_KEY) as Kind[]).map((k) => ({ id: k, label: `${t(KIND_KEY[k])} · ${groups.filter((g) => g.kind === k).length}` })),
          ]}
        />
        <input className="nxa-filter" value={query} placeholder={t("filter")} aria-label={t("filter")} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <Card>
        {!rows ? (
          <Skeleton lines={6} />
        ) : shown.length === 0 ? (
          <Empty icon={<IconDatabase size={26} />} text={groups.length ? t("no_results") : t("no_data")} />
        ) : (
          <div className="nxa-list">
            {shown.map((g) => {
              const filled = Object.fromEntries(g.list.filter((r) => r.body.trim() || r.title.trim()).map((r) => [r.lang, true]));
              const isOpen = open === g.slug;
              return (
                <div key={g.slug} className={`nxa-db-row${isOpen ? " is-open" : ""}`}>
                  <button type="button" className="nxa-list-row" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? "" : g.slug)}>
                    <em className={`nxa-pill is-k-${g.kind}`}>{t(KIND_KEY[g.kind])}</em>
                    <span>
                      <b>{g.title}</b>
                      <small dir="ltr">{g.slug}</small>
                    </span>
                    <LangDots filled={filled} />
                    <small className="nxa-size">{fmtNum(lang, g.size)} {t("chars")}</small>
                    <IconChevron size={17} className={`nxa-ic nxa-flip nxa-rot${isOpen ? " is-open" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div className="nxa-db-detail">
                      {g.list
                        .sort((a, b) => LANGS.indexOf(a.lang as Lang) - LANGS.indexOf(b.lang as Lang))
                        .map((r) => (
                          <div key={r.lang} className="nxa-db-lang">
                            <b>{r.lang.toUpperCase()}</b>
                            <span dir={r.lang === "ar" ? "rtl" : undefined}>{r.title || "—"}</span>
                            <small>
                              {fmtNum(lang, r.body.length)} {t("chars")}
                            </small>
                            <a className="nxa-btn is-ghost is-sm" href={r.lang === "az" || g.kind === "privacy" ? g.href : `/${r.lang}${g.href}`} target="_blank" rel="noreferrer">
                              <IconExternal size={15} />
                              {t("open_live")}
                            </a>
                            <ConfirmDelete
                              busy={busy}
                              onConfirm={async () => {
                                setBusy(true);
                                try {
                                  await deletePrivacyRow(r.slug, r.lang);
                                  if (target !== "supabase") await runCommit(t, target, { skipSupabase: true });
                                  await reload();
                                  toast(t("deleted"));
                                } catch (reason) {
                                  toast(errorText(t, reason), "err");
                                } finally {
                                  setBusy(false);
                                }
                              }}
                            />
                          </div>
                        ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </Card>
      <p className="nxa-foot-note">
        <IconApps size={15} /> {apps ? apps.length : "…"} · studio_apps &nbsp; <IconDatabase size={15} /> {rows ? rows.length : "…"} · studio_privacy
      </p>
    </div>
  );
}

/* ───────────────────────────── Sayt xəritəsi ───────────────────────────── */

type MapEntry = { url: string; path: string; lang: Lang; section: string };

export function SitemapSection() {
  const { t, lang } = useStudio();
  const [entries, setEntries] = useState<MapEntry[] | null>(null);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState("");
  const [limit, setLimit] = useState(60);

  function load() {
    setError(false);
    setEntries(null);
    fetch("/sitemap.xml", { cache: "no-store" })
      .then((r) => (r.ok ? r.text() : Promise.reject(new Error(String(r.status)))))
      .then((xml) => {
        const doc = new DOMParser().parseFromString(xml, "application/xml");
        const locs = [...doc.getElementsByTagName("loc")].map((n) => n.textContent?.trim() ?? "").filter(Boolean);
        setEntries(
          locs.map((url) => {
            let path = "/";
            try {
              path = new URL(url).pathname || "/";
            } catch {
              // keç
            }
            const parts = path.split("/").filter(Boolean);
            const first = parts[0] as Lang;
            const l: Lang = ["en", "tr", "ar", "ru"].includes(first) ? first : "az";
            const rest = l === "az" ? parts : parts.slice(1);
            return { url, path, lang: l, section: rest[0] ?? "" };
          }),
        );
      })
      .catch(() => setError(true));
  }

  useEffect(load, []);

  const q = query.trim().toLowerCase();
  const sections = useMemo(() => {
    const map = new Map<string, MapEntry[]>();
    for (const e of entries ?? []) if (!q || e.path.toLowerCase().includes(q)) map.set(e.section, [...(map.get(e.section) ?? []), e]);
    return [...map.entries()].sort((a, b) => b[1].length - a[1].length);
  }, [entries, q]);
  const max = Math.max(1, ...sections.map(([, list]) => list.length));

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconMap size={22} />} title={t("nav_sitemap")} sub={t("sitemap_sub")}>
        <button type="button" className="nxa-btn is-ghost" onClick={load}>
          <IconRefresh size={16} />
          {t("refresh")}
        </button>
        <a className="nxa-btn is-ghost" href="/sitemap.xml" target="_blank" rel="noreferrer">
          <IconExternal size={16} />
          sitemap.xml
        </a>
      </PageHead>
      {error ? <ErrorBox onRetry={load} /> : null}
      {entries ? (
        <div className="nxa-kpis is-three">
          <Kpi icon={<IconGlobe size={20} />} tone="blue" label={t("pages_total")} value={fmtNum(lang, entries.length)} />
          <Kpi icon={<IconMap size={20} />} tone="violet" label={t("sections")} value={fmtNum(lang, new Set(entries.map((e) => e.section)).size)} />
          <div className="nxa-kpi is-teal">
            <span className="nxa-kpi-icon">
              <IconPages size={20} />
            </span>
            <small>{t("langs_filled")}</small>
            <span className="nxa-lang-counts">
              {LANGS.map((l) => (
                <span key={l}>
                  <b>{fmtNum(lang, entries.filter((e) => e.lang === l).length)}</b>
                  <small>{l.toUpperCase()}</small>
                </span>
              ))}
            </span>
          </div>
        </div>
      ) : null}
      <div className="nxa-toolbar">
        <input className="nxa-filter is-grow" value={query} placeholder={t("filter")} aria-label={t("filter")} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <Card>
        {!entries && !error ? (
          <Skeleton lines={8} />
        ) : sections.length === 0 ? (
          <Empty icon={<IconMap size={26} />} text={t("no_results")} />
        ) : (
          <div className="nxa-list">
            {sections.map(([section, list]) => {
              const isOpen = open === section || (q !== "" && sections.length === 1);
              return (
                <div key={section || "home"} className={`nxa-db-row${isOpen ? " is-open" : ""}`}>
                  <button type="button" className="nxa-list-row" aria-expanded={isOpen} onClick={() => { setOpen(isOpen ? "" : section); setLimit(60); }}>
                    <span>
                      <b dir="ltr">{section ? `/${section}` : t("home")}</b>
                      <span className="nxa-bar-track">
                        <i style={{ width: `${(list.length / max) * 100}%` }} />
                      </span>
                    </span>
                    <span className="nxa-lang-mini">
                      {LANGS.map((l) => (
                        <small key={l}>
                          {l.toUpperCase()} {list.filter((e) => e.lang === l).length}
                        </small>
                      ))}
                    </span>
                    <b className="nxa-count">{fmtNum(lang, list.length)}</b>
                    <IconChevron size={17} className={`nxa-ic nxa-flip nxa-rot${isOpen ? " is-open" : ""}`} />
                  </button>
                  {isOpen ? (
                    <div className="nxa-db-detail">
                      {list.slice(0, limit).map((e) => (
                        <a key={e.url} className="nxa-link-row" href={e.path} target="_blank" rel="noreferrer">
                          <em>{e.lang.toUpperCase()}</em>
                          <span dir="ltr">{decodeURIComponent(e.path)}</span>
                          <IconExternal size={14} />
                        </a>
                      ))}
                      {list.length > limit ? (
                        <button type="button" className="nxa-btn is-ghost is-sm" onClick={() => setLimit((n) => n + 120)}>
                          {t("show_more")} ({list.length - limit})
                        </button>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        )}
      </Card>
    </div>
  );
}

/* ───────────────────────────── Ayarlar ───────────────────────────── */

export function SettingsSection({
  ov,
  theme,
  setTheme,
  setPanelLang,
  setTarget,
}: {
  ov: OverviewState;
  theme: "dark" | "light";
  setTheme: (v: "dark" | "light") => void;
  setPanelLang: (v: Lang) => void;
  setTarget: (v: SaveTarget) => void;
}) {
  const { t, lang, session, target } = useStudio();
  const { copied, copy } = useCopied();
  const h = ov.data?.health;
  const envs: [string, boolean | undefined][] = [
    ["SUPABASE_URL · SUPABASE_SERVICE_ROLE_KEY", h?.chatsStorage],
    ["GITHUB_TOKEN", h?.github],
    ["GEMINI_API_KEY", h?.ai],
    ["STATS_KEY", h?.statsKey],
  ];
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconSettings size={22} />} title={t("nav_settings")} sub={t("settings_sub")} />
      <div className="nxa-split">
        <Card title={t("panel_lang")}>
          <div className="nxa-lang-grid">
            {PANEL_LANGS.map((l) => (
              <button key={l.code} type="button" className={l.code === lang ? "is-on" : ""} aria-pressed={l.code === lang} onClick={() => setPanelLang(l.code)}>
                <b>{l.code.toUpperCase()}</b>
                <span dir={l.code === "ar" ? "rtl" : "ltr"}>{l.name}</span>
              </button>
            ))}
          </div>
        </Card>
        <Card title={t("appearance")}>
          <div className="nxa-theme-grid">
            <button type="button" className={theme === "dark" ? "is-on" : ""} aria-pressed={theme === "dark"} onClick={() => setTheme("dark")}>
              <span className="nxa-theme-swatch is-dark" />
              <IconMoon size={18} />
              {t("dark")}
            </button>
            <button type="button" className={theme === "light" ? "is-on" : ""} aria-pressed={theme === "light"} onClick={() => setTheme("light")}>
              <span className="nxa-theme-swatch is-light" />
              <IconSun size={18} />
              {t("light")}
            </button>
          </div>
        </Card>
      </div>
      <Card title={t("target")} sub={t("target_sub")}>
        <Seg
          value={target}
          onChange={setTarget}
          options={[
            { id: "supabase", label: "Supabase" },
            { id: "github", label: "GitHub" },
            { id: "both", label: t("both") },
          ]}
        />
      </Card>
      <div className="nxa-split">
        <Card title={t("session")}>
          <dl className="nxa-dl">
            <div>
              <dt>{t("signed_as")}</dt>
              <dd dir="ltr">{session.email}</dd>
            </div>
            <div>
              <dt>{t("token_until")}</dt>
              <dd>{fmtDate(lang, session.expires_at, { hour: "2-digit", minute: "2-digit", day: "numeric", month: "short" })}</dd>
            </div>
          </dl>
          <p className="nxa-muted">
            <IconShield size={15} /> {t("token_auto")}
          </p>
          <button type="button" className="nxa-btn is-danger-ghost" onClick={() => void signOut()}>
            <IconLock size={16} />
            {t("logout_all")}
          </button>
        </Card>
        <Card title={t("env_title")}>
          <ul className="nxa-health">
            {envs.map(([name, ok]) => (
              <li key={name} className={ok ? "is-ok" : ok === false ? "is-off" : ""}>
                {ok ? <IconCheck size={18} /> : <IconAlert size={18} />}
                <code dir="ltr">{name}</code>
                <em>{ok === undefined ? "…" : ok ? t("ok") : t("missing")}</em>
              </li>
            ))}
          </ul>
        </Card>
      </div>
      <Card title={t("setup")} sub={t("setup_sub")} actions={<button type="button" className="nxa-btn is-ghost is-sm" onClick={() => copy(STUDIO_SQL)}><IconCopy size={15} />{copied ? t("copied") : t("copy_sql")}</button>}>
        <pre className="nxa-code" dir="ltr">{STUDIO_SQL}</pre>
      </Card>
    </div>
  );
}

/* ───────────────────────────── Bildirişlər ───────────────────────────── */

export function computeAlerts(t: T, ov: OverviewState, apps: StudioAppRow[] | null, rows: StudioPrivacyRow[] | null) {
  const out: { key: string; text: string; go: string; sub?: string }[] = [];
  const h = ov.data?.health;
  if (h && !h.supabase) out.push({ key: "sb", text: t("a_supabase"), go: "settings" });
  if (ov.hitsChecked && !ov.hits) out.push({ key: "hits", text: t("a_hits"), go: "settings" });
  if (h && !h.github) out.push({ key: "gh", text: t("a_github"), go: "settings" });
  if (apps && rows) {
    for (const app of appList(apps)) {
      if (app.status === "ready" && app.visible && !rows.some((r) => r.slug === app.slug && r.body.trim()) && !["nibras-pdf", "nibras-arabic"].includes(app.slug))
        out.push({ key: `p-${app.slug}`, text: t("a_noprivacy", { name: app.name }), go: "pages", sub: "privacy" });
      if (app.status === "ready" && app.visible && !STORE_FIELDS.some(([k]) => app[k]?.trim()))
        out.push({ key: `s-${app.slug}`, text: t("a_nostore", { name: app.name }), go: "apps" });
    }
  }
  return out;
}

export { CATALOG };
