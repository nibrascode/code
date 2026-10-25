import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { Lang } from "@/lib/i18n";
import {
  StudioLoginError,
  fetchHits,
  fetchOverview,
  fetchPrivacyAll,
  fetchStudioApps,
  onSessionChange,
  signIn,
  signOut,
  validSession,
  type AdminOverview,
  type StudioAppRow,
  type StudioHit,
  type StudioPrivacyRow,
  type StudioSession,
} from "@/lib/studio";
import { StudioContext, Toasts, runCommit, type SaveTarget, type Studio, type Toast } from "@/components/studio/core";
import { AppsSection, LessonsSection, LibrarySection, PagesSection, appList } from "@/components/studio/editors";
import { AiSection, ContentSection, OverviewSection, SettingsSection, SitemapSection, computeAlerts, type OverviewState } from "@/components/studio/sections";
import { PANEL_LANGS, makeT, type SKey, type T } from "@/components/studio/i18n";
import {
  IconAlert,
  IconApps,
  IconBell,
  IconChevron,
  IconClose,
  IconCode,
  IconDatabase,
  IconExternal,
  IconEye,
  IconEyeOff,
  IconLibrary,
  IconLock,
  IconLogout,
  IconMap,
  IconMenu,
  IconMoon,
  IconOverview,
  IconPages,
  IconSearch,
  IconSettings,
  IconShield,
  IconSpark,
  IconSun,
  IconUpload,
  IconRefresh,
} from "@/components/studio/icons";
import { CoversSection, DeploysSection, LibraryStatsSection, ProvidersSection, PulseCard, LiveCard, ReleasesSection } from "@/components/studio/nx-sections";

export const Route = createFileRoute("/nx-studio")({
  component: StudioPage,
});

type Tab = "overview" | "apps" | "releases" | "pages" | "lessons" | "library" | "ai" | "providers" | "libstats" | "covers" | "deploys" | "content" | "sitemap" | "settings";

const NAV: { group: SKey; items: { id: Tab; key: SKey; icon: (p: { size?: number }) => ReactNode }[] }[] = [
  {
    group: "group_main",
    items: [
      { id: "overview", key: "nav_overview", icon: IconOverview },
      { id: "apps", key: "nav_apps", icon: IconApps },
      { id: "releases", key: "nav_releases", icon: IconUpload },
      { id: "ai", key: "nav_ai", icon: IconSpark },
      { id: "providers", key: "nav_providers", icon: IconShield },
    ],
  },
  {
    group: "group_content",
    items: [
      { id: "pages", key: "nav_pages", icon: IconPages },
      { id: "lessons", key: "nav_lessons", icon: IconCode },
      { id: "library", key: "nav_library", icon: IconLibrary },
      { id: "libstats", key: "nav_libstats", icon: IconLibrary },
      { id: "covers", key: "nav_covers", icon: IconEye },
      { id: "content", key: "nav_content", icon: IconDatabase },
    ],
  },
  {
    group: "group_system",
    items: [
      { id: "deploys", key: "nav_deploys", icon: IconRefresh },
      { id: "sitemap", key: "nav_sitemap", icon: IconMap },
      { id: "settings", key: "nav_settings", icon: IconSettings },
    ],
  },
];

const TABS = NAV.flatMap((g) => g.items.map((i) => i.id));

function stored<V extends string>(key: string, allowed: readonly V[], fallback: V): V {
  if (typeof localStorage === "undefined") return fallback;
  const v = localStorage.getItem(key) as V | null;
  return v && allowed.includes(v) ? v : fallback;
}

function readHash(): { tab: Tab; sub: string } {
  if (typeof location === "undefined") return { tab: "overview", sub: "" };
  const [tab, sub = ""] = location.hash.replace(/^#/, "").split("/");
  return { tab: (TABS as string[]).includes(tab) ? (tab as Tab) : "overview", sub };
}

function StudioPage() {
  const [lang, setLangState] = useState<Lang>("az");
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  const [target, setTargetState] = useState<SaveTarget>("both");
  const [session, setSession] = useState<StudioSession | null>(null);
  const [checking, setChecking] = useState(true);
  const t = useMemo(() => makeT(lang), [lang]);

  useEffect(() => {
    setLangState(stored("nxs_lang", ["az", "en", "tr", "ar", "ru"] as const, "az"));
    setThemeState(stored("nxs_theme", ["dark", "light"] as const, "dark"));
    setTargetState(stored("nibras_studio_target", ["supabase", "github", "both"] as const, "both"));
    const off = onSessionChange(setSession);
    validSession()
      .then(setSession)
      .finally(() => setChecking(false));
    return off;
  }, []);

  const setLang = (v: Lang) => {
    localStorage.setItem("nxs_lang", v);
    setLangState(v);
  };
  const setTheme = (v: "dark" | "light") => {
    localStorage.setItem("nxs_theme", v);
    setThemeState(v);
  };
  const setTarget = (v: SaveTarget) => {
    localStorage.setItem("nibras_studio_target", v);
    setTargetState(v);
  };

  return (
    <div className="nxa" data-theme={theme} dir={lang === "ar" ? "rtl" : "ltr"} lang={lang}>
      {checking ? (
        <div className="nxa-boot" aria-busy="true">
          <span className="nxa-orb" />
          <p>{t("checking_session")}</p>
        </div>
      ) : session ? (
        <Desk
          t={t}
          lang={lang}
          session={session}
          theme={theme}
          target={target}
          setTheme={setTheme}
          setLang={setLang}
          setTarget={setTarget}
        />
      ) : (
        <Login t={t} lang={lang} theme={theme} setTheme={setTheme} setLang={setLang} onIn={setSession} />
      )}
    </div>
  );
}

function LangPicker({ lang, setLang, t }: { lang: Lang; setLang: (l: Lang) => void; t: T }) {
  return (
    <label className="nxa-langpick">
      <span className="sr-only">{t("panel_lang")}</span>
      <select value={lang} onChange={(e) => setLang(e.target.value as Lang)} aria-label={t("panel_lang")}>
        {PANEL_LANGS.map((l) => (
          <option key={l.code} value={l.code}>
            {l.code.toUpperCase()} · {l.name}
          </option>
        ))}
      </select>
    </label>
  );
}

function ThemeButton({ theme, setTheme, t }: { theme: "dark" | "light"; setTheme: (v: "dark" | "light") => void; t: T }) {
  const next = theme === "dark" ? "light" : "dark";
  return (
    <button type="button" className="nxa-icon-btn" onClick={() => setTheme(next)} aria-label={next === "light" ? t("theme_light") : t("theme_dark")} title={next === "light" ? t("theme_light") : t("theme_dark")}>
      {theme === "dark" ? <IconSun size={18} /> : <IconMoon size={18} />}
    </button>
  );
}

function Brand() {
  return (
    <div className="nxa-brand">
      <span className="nxa-logo">
        <img src="/nibras-icon.png" alt="" />
      </span>
      <span>
        <b>
          NX <em>Studio</em>
        </b>
        <small>Nibras Code</small>
      </span>
    </div>
  );
}

/* ───────────────────────────── Giriş ───────────────────────────── */

function Login({
  t,
  lang,
  theme,
  setTheme,
  setLang,
  onIn,
}: {
  t: T;
  lang: Lang;
  theme: "dark" | "light";
  setTheme: (v: "dark" | "light") => void;
  setLang: (l: Lang) => void;
  onIn: (s: StudioSession) => void;
}) {
  const [email, setEmail] = useState("nibrascode@gmail.com");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");
  const [lockedUntil, setLockedUntil] = useState(0);
  const [, tick] = useState(0);

  useEffect(() => {
    if (!lockedUntil) return;
    const id = setInterval(() => {
      tick((n) => n + 1);
      if (Date.now() >= lockedUntil) {
        setLockedUntil(0);
        setError("");
      }
    }, 1000);
    return () => clearInterval(id);
  }, [lockedUntil]);

  const locked = lockedUntil > Date.now();
  const minutes = Math.max(1, Math.ceil((lockedUntil - Date.now()) / 60000));

  return (
    <main className="nxa-login">
      <div className="nxa-login-glow" aria-hidden="true" />
      <div className="nxa-login-top">
        <Brand />
        <div className="nxa-login-tools">
          <LangPicker lang={lang} setLang={setLang} t={t} />
          <ThemeButton theme={theme} setTheme={setTheme} t={t} />
        </div>
      </div>
      <form
        className="nxa-login-card"
        onSubmit={(event) => {
          event.preventDefault();
          if (locked || busy) return;
          setBusy(true);
          setError("");
          signIn(email.trim(), password)
            .then((s) => {
              setPassword("");
              onIn(s);
            })
            .catch((reason: unknown) => {
              const f = reason instanceof StudioLoginError ? reason.failure : ({ kind: "network" } as const);
              if (f.kind === "locked") {
                setLockedUntil(Date.now() + f.retryAfter * 1000);
                setError(t("login_locked", { n: Math.ceil(f.retryAfter / 60) }));
              } else if (f.kind === "wrong") {
                setError(f.left > 0 ? t("login_wrong", { n: f.left }) : t("login_locked", { n: 15 }));
                if (f.left <= 0) setLockedUntil(Date.now() + 15 * 60 * 1000);
              } else setError(t("login_network"));
            })
            .finally(() => setBusy(false));
        }}
      >
        <span className="nxa-login-badge">
          <IconLock size={26} />
        </span>
        <h1>{t("login_title")}</h1>
        <p className="nxa-login-sub">{t("login_sub")}</p>
        <label className="nxa-field">
          <span className="nxa-label">{t("email")}</span>
          <input type="email" dir="ltr" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="username" required />
        </label>
        <label className="nxa-field">
          <span className="nxa-label">{t("password")}</span>
          <span className="nxa-pass">
            <input
              type={show ? "text" : "password"}
              dir="ltr"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              required
              autoFocus
            />
            <button type="button" onClick={() => setShow((v) => !v)} aria-label={t("show_password")} aria-pressed={show}>
              {show ? <IconEyeOff size={18} /> : <IconEye size={18} />}
            </button>
          </span>
        </label>
        {error ? (
          <p className="nxa-inline-error" role="alert">
            <IconAlert size={16} />
            {locked ? t("login_locked", { n: minutes }) : error}
          </p>
        ) : null}
        <button className="nxa-btn is-primary is-block" type="submit" disabled={busy || locked}>
          {busy ? <span className="nxa-spin" aria-hidden="true" /> : null}
          {busy ? t("signing_in") : t("sign_in")}
        </button>
        <p className="nxa-login-foot">
          <IconShield size={15} />
          {t("login_secure")}
        </p>
      </form>
    </main>
  );
}

/* ───────────────────────────── Panel ───────────────────────────── */

function Desk({
  t,
  lang,
  session,
  theme,
  target,
  setTheme,
  setLang,
  setTarget,
}: {
  t: T;
  lang: Lang;
  session: StudioSession;
  theme: "dark" | "light";
  target: SaveTarget;
  setTheme: (v: "dark" | "light") => void;
  setLang: (l: Lang) => void;
  setTarget: (v: SaveTarget) => void;
}) {
  const [{ tab, sub }, setRoute] = useState(readHash);
  const [drawer, setDrawer] = useState(false);
  const [apps, setApps] = useState<StudioAppRow[] | null>(null);
  const [rows, setRows] = useState<StudioPrivacyRow[] | null>(null);
  const [dataError, setDataError] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [overview, setOverview] = useState<AdminOverview | null>(null);
  const [ovError, setOvError] = useState(false);
  const [ovLoading, setOvLoading] = useState(false);
  const [hits, setHits] = useState<StudioHit[] | null>(null);
  const [hitsChecked, setHitsChecked] = useState(false);
  const [nonce, setNonce] = useState(0);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onHash = () => setRoute(readHash());
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  const go = useCallback((next: string, nextSub = "") => {
    const tabNext = ((TABS as string[]).includes(next) ? next : "overview") as Tab;
    history.replaceState(null, "", `#${tabNext}${nextSub ? `/${nextSub}` : ""}`);
    setRoute({ tab: tabNext, sub: nextSub });
    setNonce((n) => n + 1);
    setDrawer(false);
    mainRef.current?.scrollTo({ top: 0 });
    window.scrollTo({ top: 0 });
  }, []);

  const reload = useCallback(async () => {
    try {
      const [a, r] = await Promise.all([fetchStudioApps(), fetchPrivacyAll()]);
      setApps(a);
      setRows(r);
      setDataError(false);
    } catch {
      setDataError(true);
    }
  }, []);

  const loadOverview = useCallback(() => {
    setOvLoading(true);
    setOvError(false);
    fetchOverview(30)
      .then(setOverview)
      .catch(() => setOvError(true))
      .finally(() => setOvLoading(false));
    validSession().then((s) => {
      if (!s) return;
      fetchHits(s.access_token)
        .then(setHits)
        .catch(() => setHits(null))
        .finally(() => setHitsChecked(true));
    });
  }, []);

  useEffect(() => {
    void reload();
    loadOverview();
  }, [reload, loadOverview]);

  const toast = useCallback((text: string, kind: Toast["kind"] = "ok") => {
    const id = Date.now() + Math.random();
    setToasts((list) => [...list.slice(-3), { id, text, kind }]);
    setTimeout(() => setToasts((list) => list.filter((x) => x.id !== id)), kind === "err" ? 9000 : 4500);
  }, []);

  const ctx: Studio = {
    t,
    lang,
    session,
    target,
    apps,
    rows,
    dataError,
    reload,
    toast,
    commit: (change) => runCommit(t, target, change),
    go,
  };

  const ov: OverviewState = { data: overview, hits, hitsChecked, error: ovError, loading: ovLoading, reload: loadOverview };
  const alerts = computeAlerts(t, ov, apps, rows);
  const current = NAV.flatMap((g) => g.items).find((i) => i.id === tab);

  return (
    <StudioContext.Provider value={ctx}>
      <div className={`nxa-desk${drawer ? " is-drawer" : ""}`}>
        <aside className="nxa-side" aria-label={t("panel")}>
          <div className="nxa-side-top">
            <Brand />
            <button type="button" className="nxa-icon-btn nxa-only-mobile" onClick={() => setDrawer(false)} aria-label={t("close")}>
              <IconClose size={18} />
            </button>
          </div>
          <nav>
            {NAV.map((group) => (
              <div key={group.group} className="nxa-nav-group">
                <p>{t(group.group)}</p>
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={tab === item.id ? "is-on" : ""}
                      aria-current={tab === item.id ? "page" : undefined}
                      onClick={(e) => {
                        e.preventDefault();
                        go(item.id);
                      }}
                    >
                      <Icon size={19} />
                      <span>{t(item.key)}</span>
                      {item.id === "settings" && alerts.some((a) => a.go === "settings") ? <i className="nxa-dot-badge" /> : null}
                    </a>
                  );
                })}
              </div>
            ))}
          </nav>
          <div className="nxa-side-foot">
            <a className="nxa-side-link" href="/" target="_blank" rel="noreferrer">
              <IconExternal size={17} />
              {t("open_site")}
            </a>
            <button type="button" className="nxa-side-link is-danger" onClick={() => void signOut()}>
              <IconLogout size={17} />
              {t("logout")}
            </button>
          </div>
        </aside>
        <button type="button" className="nxa-scrim" aria-label={t("close")} onClick={() => setDrawer(false)} tabIndex={drawer ? 0 : -1} />
        <div className="nxa-body">
          <header className="nxa-top">
            <button type="button" className="nxa-icon-btn nxa-only-mobile" onClick={() => setDrawer(true)} aria-label={t("menu")}>
              <IconMenu size={20} />
            </button>
            <span className="nxa-top-title nxa-only-mobile">{current ? t(current.key) : ""}</span>
            <GlobalSearch t={t} apps={apps} rows={rows} go={go} />
            <div className="nxa-top-tools">
              <ThemeButton theme={theme} setTheme={setTheme} t={t} />
              <Alerts t={t} alerts={alerts} go={go} />
              <UserMenu t={t} session={session} lang={lang} setLang={setLang} go={go} />
            </div>
          </header>
          <main className="nxa-main" ref={mainRef} key={`${tab}-${nonce}`}>
            {tab === "overview" ? (
              <>
                <LiveCard />
                <OverviewSection ov={ov} />
                <PulseCard go={go} />
              </>
            ) : null}
            {tab === "releases" ? <ReleasesSection /> : null}
            {tab === "providers" ? <ProvidersSection /> : null}
            {tab === "libstats" ? <LibraryStatsSection /> : null}
            {tab === "covers" ? <CoversSection /> : null}
            {tab === "deploys" ? <DeploysSection /> : null}
            {tab === "apps" ? <AppsSection startNew={sub === "new"} /> : null}
            {tab === "pages" ? <PagesSection start={sub} /> : null}
            {tab === "lessons" ? <LessonsSection /> : null}
            {tab === "library" ? <LibrarySection /> : null}
            {tab === "ai" ? <AiSection ov={ov} /> : null}
            {tab === "content" ? <ContentSection focus={sub} /> : null}
            {tab === "sitemap" ? <SitemapSection /> : null}
            {tab === "settings" ? <SettingsSection ov={ov} theme={theme} setTheme={setTheme} setPanelLang={setLang} setTarget={setTarget} /> : null}
          </main>
        </div>
        <Toasts items={toasts} drop={(id) => setToasts((list) => list.filter((x) => x.id !== id))} />
      </div>
    </StudioContext.Provider>
  );
}

function usePopover() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);
  return { open, setOpen, ref };
}

function GlobalSearch({ t, apps, rows, go }: { t: T; apps: StudioAppRow[] | null; rows: StudioPrivacyRow[] | null; go: (tab: string, sub?: string) => void }) {
  const [q, setQ] = useState("");
  const { open, setOpen, ref } = usePopover();
  const [active, setActive] = useState(0);
  const query = q.trim().toLowerCase();
  const results = useMemo(() => {
    if (!query) return [];
    const out: { label: string; hint: string; tab: string; sub?: string }[] = [];
    for (const item of NAV.flatMap((g) => g.items)) if (t(item.key).toLowerCase().includes(query)) out.push({ label: t(item.key), hint: t("panel"), tab: item.id });
    for (const app of apps ? appList(apps) : []) if (`${app.name} ${app.slug}`.toLowerCase().includes(query)) out.push({ label: app.name, hint: t("nav_apps"), tab: "apps" });
    const seen = new Set<string>();
    for (const row of rows ?? []) {
      if (seen.has(row.slug)) continue;
      if (`${row.title} ${row.slug}`.toLowerCase().includes(query)) {
        seen.add(row.slug);
        out.push({ label: row.title || row.slug, hint: `${t("nav_content")} · ${row.slug}`, tab: "content" });
      }
    }
    return out.slice(0, 8);
  }, [query, apps, rows, t]);

  const pick = (r: (typeof results)[number]) => {
    go(r.tab, r.sub);
    setQ("");
    setOpen(false);
  };

  return (
    <div className="nxa-search" ref={ref}>
      <IconSearch size={17} />
      <input
        value={q}
        placeholder={t("search")}
        aria-label={t("search")}
        onFocus={() => setOpen(true)}
        onChange={(e) => {
          setQ(e.target.value);
          setActive(0);
          setOpen(true);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setActive((a) => Math.min(results.length - 1, a + 1));
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setActive((a) => Math.max(0, a - 1));
          } else if (e.key === "Enter" && results[active]) pick(results[active]);
        }}
      />
      {open && query ? (
        <div className="nxa-pop nxa-search-pop" role="listbox">
          {results.length ? (
            results.map((r, i) => (
              <button key={`${r.tab}-${r.label}-${i}`} type="button" role="option" aria-selected={i === active} className={i === active ? "is-active" : ""} onMouseEnter={() => setActive(i)} onClick={() => pick(r)}>
                <b>{r.label}</b>
                <small>{r.hint}</small>
                <IconChevron size={15} className="nxa-ic nxa-flip" />
              </button>
            ))
          ) : (
            <p className="nxa-pop-empty">{t("no_results")}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function Alerts({ t, alerts, go }: { t: T; alerts: ReturnType<typeof computeAlerts>; go: (tab: string, sub?: string) => void }) {
  const { open, setOpen, ref } = usePopover();
  return (
    <div className="nxa-pop-wrap" ref={ref}>
      <button type="button" className="nxa-icon-btn" aria-label={t("alerts")} aria-expanded={open} onClick={() => setOpen(!open)}>
        <IconBell size={18} />
        {alerts.length ? <span className="nxa-badge">{alerts.length}</span> : null}
      </button>
      {open ? (
        <div className="nxa-pop nxa-alerts">
          <header>{t("alerts")}</header>
          {alerts.length ? (
            alerts.map((a) => (
              <button
                key={a.key}
                type="button"
                onClick={() => {
                  go(a.go, a.sub);
                  setOpen(false);
                }}
              >
                <IconAlert size={17} />
                <span>{a.text}</span>
                <IconChevron size={15} className="nxa-ic nxa-flip" />
              </button>
            ))
          ) : (
            <p className="nxa-pop-empty">{t("alerts_none")}</p>
          )}
        </div>
      ) : null}
    </div>
  );
}

function UserMenu({ t, session, lang, setLang, go }: { t: T; session: StudioSession; lang: Lang; setLang: (l: Lang) => void; go: (tab: string) => void }) {
  const { open, setOpen, ref } = usePopover();
  return (
    <div className="nxa-pop-wrap" ref={ref}>
      <button type="button" className="nxa-user" aria-expanded={open} onClick={() => setOpen(!open)}>
        <i>M</i>
        <span>
          <b>Mahir</b>
          <small>{t("owner")}</small>
        </span>
      </button>
      {open ? (
        <div className="nxa-pop nxa-user-pop">
          <p className="nxa-user-mail" dir="ltr">
            {session.email}
          </p>
          <div className="nxa-user-langs">
            {PANEL_LANGS.map((l) => (
              <button key={l.code} type="button" className={l.code === lang ? "is-on" : ""} onClick={() => setLang(l.code)} title={l.name}>
                {l.code.toUpperCase()}
              </button>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              go("settings");
              setOpen(false);
            }}
          >
            <IconSettings size={17} />
            {t("nav_settings")}
          </button>
          <button type="button" className="is-danger" onClick={() => void signOut()}>
            <IconLogout size={17} />
            {t("logout")}
          </button>
        </div>
      ) : null}
    </div>
  );
}
