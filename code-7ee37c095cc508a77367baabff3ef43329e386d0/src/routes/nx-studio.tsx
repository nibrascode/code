import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Bell,
  Calendar,
  ChevronRight,
  FileText,
  Home,
  Info,
  Code2,
  LayoutGrid,
  Library,
  LogOut,
  Mail,
  Moon,
  ScrollText,
  Search,
} from "lucide-react";
import { ARABIC_PRIVACY } from "@/lib/arabic-privacy";
import { PDF_PRIVACY } from "@/lib/pdf-privacy";
import { LANGS, type Lang } from "@/lib/i18n";
import {
  aboutBody,
  aboutFromRow,
  defaultAbout,
  defaultUnutma,
  lines,
  unutmaBody,
  unutmaFromRow,
  type AboutCopy,
  type UnutmaCopy,
} from "@/lib/pages";
import {
  STUDIO_EMAIL,
  STUDIO_SQL,
  deleteApp,
  deletePrivacy,
  fetchHits,
  fetchPage,
  fetchPrivacyAll,
  fetchStudioApps,
  saveApp,
  savePrivacy,
  signIn,
  validSession,
  writeSession,
  type StudioAppRow,
  type StudioHit,
  type StudioPrivacyRow,
  type StudioSession,
} from "@/lib/studio";
import { loadStudioBundle, syncStudioToGithub } from "@/lib/studio.functions";
import { PYTHON_LESSONS, lessonSlug, pythonSections, slugifyLesson } from "@/lib/lessons";
import { LIB_GROUPS, libDefaults, libItems, libSlug, savedLib, type LibGroup } from "@/lib/library-admin";

export const Route = createFileRoute("/nx-studio")({
  component: StudioPage,
});

const CATALOG = [
  { slug: "nibras-arabic", name: "Nibras Arabic" },
  { slug: "nibras-pdf", name: "Nibras PDF" },
  { slug: "nibras-docs", name: "Nibras Docs" },
  { slug: "nibras-plans", name: "Nibras Plans" },
] as const;

type DeskTab = "home" | "apps" | "privacy" | "about" | "unutma" | "contact" | "lessons" | "library" | "guides";

const NAV: { id: DeskTab; label: string; icon: typeof Home }[] = [
  { id: "home", label: "Ana səhifə", icon: Home },
  { id: "apps", label: "Tətbiqlər", icon: LayoutGrid },
  { id: "lessons", label: "Proqramlaşdırma", icon: Code2 },
  { id: "library", label: "Resurslar", icon: Library },
  { id: "guides", label: "Bələdçilər", icon: ScrollText },
  { id: "privacy", label: "Məxfilik", icon: FileText },
  { id: "contact", label: "Əlaqə", icon: Mail },
  { id: "unutma", label: "Unutma", icon: ScrollText },
  { id: "about", label: "Haqqımızda", icon: Info },
];

const MONTHS = [
  "yanvar",
  "fevral",
  "mart",
  "aprel",
  "may",
  "iyun",
  "iyul",
  "avqust",
  "sentyabr",
  "oktyabr",
  "noyabr",
  "dekabr",
];

function todayLabel() {
  const now = new Date();
  return `${now.getDate()} ${MONTHS[now.getMonth()]} ${now.getFullYear()}`;
}

type SaveTarget = "supabase" | "github" | "both";

function readTarget(): SaveTarget {
  if (typeof localStorage === "undefined") return "both";
  const value = localStorage.getItem("nibras_studio_target");
  return value === "github" || value === "supabase" ? value : "both";
}

let pendingPrivacy: StudioPrivacyRow | null = null;
let pendingDrop = "";
let pendingApp: StudioAppRow | null = null;
let pendingDropApp = "";

function writePrivacy(row: StudioPrivacyRow) {
  pendingPrivacy = row;
  pendingDrop = "";
  if (readTarget() === "github") return Promise.resolve();
  return savePrivacy(row);
}

function removePrivacy(slug: string) {
  pendingDrop = slug;
  pendingPrivacy = null;
  if (readTarget() === "github") return Promise.resolve();
  return deletePrivacy(slug);
}

function writeApp(row: StudioAppRow) {
  pendingApp = row;
  pendingDropApp = "";
  if (readTarget() === "github") return Promise.resolve();
  return saveApp(row);
}

function removeApp(slug: string) {
  pendingDropApp = slug;
  pendingApp = null;
  if (readTarget() === "github") return Promise.resolve();
  return deleteApp(slug);
}

function savedNote(base: string) {
  const target = readTarget();
  const privacy = pendingPrivacy;
  const dropSlug = pendingDrop;
  const app = pendingApp;
  const dropApp = pendingDropApp;
  pendingPrivacy = null;
  pendingDrop = "";
  pendingApp = null;
  pendingDropApp = "";
  if (target === "supabase") return Promise.resolve(`${base} Yalnız Supabase-ə yazıldı.`);
  const where = target === "both" ? "Supabase və GitHub-a yazıldı." : "Yalnız GitHub-a yazıldı.";
  return validSession()
    .then((session) => {
      if (!session) return { ok: false as const, reason: "Sessiya bitib" };
      return syncStudioToGithub({ data: { accessToken: session.access_token, privacy, dropSlug, app, dropApp } });
    })
    .then((git) => (git.ok ? `${base} ${where}` : `${base} GitHub: ${git.reason}`))
    .catch(() => `${base} GitHub yazılmadı.`);
}

function TargetSwitch() {
  const [target, setTarget] = useState<SaveTarget>(() => readTarget());
  const options: { id: SaveTarget; label: string }[] = [
    { id: "supabase", label: "Supabase" },
    { id: "github", label: "GitHub" },
    { id: "both", label: "Hər ikisi" },
  ];
  return (
    <div className="studio-langs dash-target" role="group" aria-label="Saxlama yeri">
      {options.map((item) => (
        <button
          key={item.id}
          type="button"
          className={target === item.id ? "is-on" : ""}
          onClick={() => {
            localStorage.setItem("nibras_studio_target", item.id);
            setTarget(item.id);
          }}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}

const EMPTY_APP: StudioAppRow = {
  slug: "",
  name: "",
  status: "soon",
  summary: "",
  play_url: "",
  huawei_url: "",
  appstore_url: "",
  galaxy_url: "",
  xiaomi_url: "",
  icon_url: "",
  sort: 200,
  visible: true,
};

function StudioPage() {
  const [ready, setReady] = useState<boolean | null>(null);
  const [session, setSession] = useState<StudioSession | null>(null);
  const [tab, setTab] = useState<DeskTab>("home");
  const [query, setQuery] = useState("");
  const [bell, setBell] = useState(false);

  useEffect(() => {
    loadStudioBundle().then((bundle) => setReady(bundle.ready));
    validSession().then(setSession);
  }, []);

  const found = NAV.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));

  return (
    <main className="dash">
      <aside className="dash-side">
        <div className="dash-logo">
          <img src="/nibras-icon.png" alt="" />
          <b>
            Nibras <em>Code</em>
          </b>
        </div>
        <p className="dash-kicker">İdarə paneli</p>
        {session ? (
          <nav>
            {NAV.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  type="button"
                  className={tab === item.id ? "is-on" : ""}
                  onClick={() => setTab(item.id)}
                >
                  <Icon size={18} />
                  {item.label}
                </button>
              );
            })}
            <button
              type="button"
              className="dash-logout"
              onClick={() => {
                writeSession(null);
                setSession(null);
                setTab("home");
              }}
            >
              <LogOut size={18} />
              Çıxış
            </button>
          </nav>
        ) : null}
        <div className="dash-legal">
          <img src="/nibras-icon.png" alt="" />
          <span>
            <b>Nibras Code</b>
            <small>Gizlilik · Etibar · Azadlıq</small>
          </span>
        </div>
      </aside>
      <div className="dash-body">
        <header className="dash-top">
          <label className="dash-search">
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Axtar..."
              onKeyDown={(event) => {
                if (event.key === "Enter" && found[0]) setTab(found[0].id);
              }}
            />
          </label>
          <div className="dash-tools">
            <TargetSwitch />
            <button type="button" className="dash-icon" aria-label="Tünd görünüş" title="Tünd görünüş">
              <Moon size={16} />
            </button>
            <button type="button" className="dash-icon" aria-label="Bildirişlər" onClick={() => setBell((open) => !open)}>
              <Bell size={16} />
            </button>
            {bell ? <div className="dash-pop">Yeni bildiriş yoxdur.</div> : null}
            <div className="dash-user">
              <i>A</i>
              <span>
                <b>Admin</b>
                <small>Super Admin</small>
              </span>
            </div>
          </div>
        </header>
        <section className="dash-content">
          {ready === false ? <Setup /> : null}
          {ready && !session ? <Login onIn={setSession} /> : null}
          {ready && session && tab === "home" ? (
            <DeskHome open={setTab} query={query} token={session.access_token} />
          ) : null}
          {ready && session && tab === "privacy" ? <PrivacyEditor /> : null}
          {ready && session && tab === "apps" ? <AppsEditor /> : null}
          {ready && session && tab === "about" ? <AboutEditor /> : null}
          {ready && session && tab === "unutma" ? <UnutmaEditor /> : null}
          {ready && session && tab === "lessons" ? <LessonsEditor /> : null}
          {ready && session && tab === "library" ? <LibraryEditor start="resurs" /> : null}
          {ready && session && tab === "guides" ? <LibraryEditor start="guide" /> : null}
          {ready && session && tab === "contact" ? <ContactPanel /> : null}
        </section>
      </div>
    </main>
  );
}

function monthOf(day: string) {
  return day.slice(0, 7);
}

function sumHits(rows: StudioHit[], kind: string, month: string, slug?: string) {
  return rows.reduce((total, row) => {
    if (row.kind !== kind || monthOf(row.day) !== month) return total;
    if (slug !== undefined && row.slug !== slug) return total;
    return total + row.total;
  }, 0);
}

function changeText(current: number, previous: number) {
  if (previous <= 0) return current === 0 ? "Bu ay hələ 0" : "Keçən ay 0 idi";
  const percent = Math.round(((current - previous) / previous) * 100);
  const sign = percent > 0 ? "+" : "";
  return `${sign}${percent}% keçən aya nisbətən`;
}

function DeskHome({ open, query, token }: { open: (tab: DeskTab) => void; query: string; token: string }) {
  const q = query.trim().toLowerCase();
  const apps = CATALOG.filter((item) => item.name.toLowerCase().includes(q));
  const [hits, setHits] = useState<StudioHit[] | null>(null);
  const [checked, setChecked] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetchHits(token).then((rows) => {
      setHits(rows);
      setChecked(true);
    });
  }, [token]);

  const now = new Date();
  const thisMonth = now.toISOString().slice(0, 7);
  const prev = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth() - 1, 1));
  const lastMonth = prev.toISOString().slice(0, 7);
  const rows = hits ?? [];
  const views = sumHits(rows, "view", thisMonth);
  const prevViews = sumHits(rows, "view", lastMonth);
  const downloads = sumHits(rows, "download", thisMonth);
  const prevDownloads = sumHits(rows, "download", lastMonth);
  const days = Array.from({ length: 30 }, (_, index) => {
    const date = new Date();
    date.setUTCDate(date.getUTCDate() - (29 - index));
    return date.toISOString().slice(0, 10);
  });
  const series = days.map((day) => rows.filter((row) => row.kind === "view" && row.day === day).reduce((sum, row) => sum + row.total, 0));

  return (
    <div className="dash-home">
      <div className="dash-welcome">
        <div>
          <h1>Xoş gəlmisiniz, Admin!</h1>
          <p>Ziyarət saytda gündə bir dəfə sayılır. Yükləmə isə mağaza düyməsinə hər basılanda artır.</p>
        </div>
        <div className="dash-date">
          <Calendar size={16} />
          <span>
            <small>Bu gün</small>
            {todayLabel()}
          </span>
        </div>
      </div>
      <div className="dash-stats">
        <button type="button" onClick={() => open("apps")}>
          <span className="dash-stat-icon is-blue">
            <LayoutGrid size={18} />
          </span>
          <small>Bu ay sayt ziyarətləri</small>
          <strong>{checked && hits ? views.toLocaleString("en") : "—"}</strong>
          <em>{hits ? changeText(views, prevViews) : "Sayğac gözlənilir"}</em>
        </button>
        <button type="button" onClick={() => open("apps")}>
          <span className="dash-stat-icon is-violet">
            <FileText size={18} />
          </span>
          <small>Bu ay yükləmə düyməsi</small>
          <strong>{checked && hits ? downloads.toLocaleString("en") : "—"}</strong>
          <em>{hits ? changeText(downloads, prevDownloads) : "Mağaza düyməsinə basılma"}</em>
        </button>
      </div>
      {checked && !hits ? (
        <div className="dash-panel">
          <header>
            <b>Sayğac hələ açılmayıb</b>
          </header>
          <p className="dash-hint">
            Supabase-də SQL Editor açın, admin paneldəki SQL mətnini yenidən yapışdırıb Run edin. Köhnə cədvəllər
            silinmir, yalnız sayğac əlavə olunur.
          </p>
          <button
            type="button"
            className="nx-cta"
            onClick={() => {
              navigator.clipboard.writeText(STUDIO_SQL).then(() => setCopied(true));
            }}
          >
            {copied ? "Kopyalandı" : "SQL-i kopyala"}
          </button>
        </div>
      ) : (
        <div className="dash-panel">
          <header>
            <b>Sayt ziyarətləri</b>
            <small>Son 30 gün</small>
          </header>
          <RealChart values={series} />
        </div>
      )}
      <div className="dash-panel">
        <header>
          <b>Tətbiqlər</b>
          <button type="button" onClick={() => open("apps")}>
            Hamısı
          </button>
        </header>
        <div className="dash-rows">
          {apps.map((app) => (
            <button key={app.slug} type="button" onClick={() => open("apps")}>
              <img src={ICONS[app.slug]} alt="" />
              <b>{app.name}</b>
              <small>{hits ? `${sumHits(rows, "download", thisMonth, app.slug)} basılma` : app.slug}</small>
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
      <div className="dash-panel">
        <header>
          <b>Məzmun bölmələri</b>
        </header>
        <div className="dash-jumps">
          {(
            [
              ["lessons", "Proqramlaşdırma"],
              ["library", "Resurslar"],
              ["guides", "Bələdçilər"],
              ["about", "Haqqımızda"],
              ["unutma", "Unutma"],
              ["privacy", "Məxfilik"],
              ["contact", "Əlaqə"],
            ] as const
          ).map(([id, label]) => (
            <button key={id} type="button" onClick={() => open(id)}>
              {label}
              <ChevronRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function RealChart({ values }: { values: number[] }) {
  const max = Math.max(1, ...values);
  const width = 640;
  const points = values
    .map((value, index) => {
      const x = values.length === 1 ? width / 2 : 16 + (index * (width - 32)) / (values.length - 1);
      const y = 156 - (value / max) * 130;
      return `${x},${y}`;
    })
    .join(" ");
  return (
    <svg className="dash-chart" viewBox={`0 0 ${width} 180`} role="img" aria-label="Son 30 günün ziyarətləri">
      <polyline points={points} fill="none" stroke="#4c8dff" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function ContactPanel() {
  return (
    <section className="studio-card">
      <h2>Əlaqə</h2>
      <p className="studio-note">Saytdakı əlaqə səhifəsində bu ünvan görünür.</p>
      <a className="dash-mail" href="mailto:nibrascode@gmail.com">
        nibrascode@gmail.com
      </a>
    </section>
  );
}

function Setup() {
  const [copied, setCopied] = useState(false);
  return (
    <section className="studio-card">
      <h2>Bir dəfəlik quraşdırma</h2>
      <p>Supabase-də SQL Editor açın, bu mətni yapışdırın və Run düyməsinə basın.</p>
      <textarea className="studio-sql" readOnly value={STUDIO_SQL} />
      <button
        type="button"
        className="nx-cta"
        onClick={() => {
          navigator.clipboard.writeText(STUDIO_SQL).then(() => setCopied(true));
        }}
      >
        {copied ? "Kopyalandı" : "SQL-i kopyala"}
      </button>
    </section>
  );
}

function Login({ onIn }: { onIn: (session: StudioSession) => void }) {
  const [email, setEmail] = useState(STUDIO_EMAIL);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        setBusy(true);
        setError("");
        signIn(email.trim(), password)
          .then(onIn)
          .catch((reason: Error) => setError(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <h2>Giriş</h2>
      <label>
        E-poçt
        <input value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="username" />
      </label>
      <label>
        Şifrə
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          autoComplete="current-password"
        />
      </label>
      {error ? <p className="studio-error">{error}</p> : null}
      <p className="studio-note">
        İstifadəçi yoxdursa Supabase-də Authentication, Users, Add user. E-poçt {STUDIO_EMAIL}. Auto Confirm
        açıq olsun. Şifrəni burada yox, orada özünüz qoyun.
      </p>
      <button className="nx-cta" type="submit" disabled={busy}>
        {busy ? "Gözləyin" : "Daxil ol"}
      </button>
    </form>
  );
}

function PrivacyEditor() {
  const [apps, setApps] = useState<StudioAppRow[]>([]);
  const [slug, setSlug] = useState("");
  const [lang, setLang] = useState<Lang>("az");
  const [title, setTitle] = useState("");
  const [updated, setUpdated] = useState("");
  const [body, setBody] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    fetchStudioApps().then(setApps);
  }, []);

  const choices = [
    ...CATALOG.map((item) => item),
    ...apps
      .filter((row) => !CATALOG.some((item) => item.slug === row.slug))
      .map((row) => ({ slug: row.slug, name: row.name })),
  ];
  const current = choices.find((item) => item.slug === slug);

  useEffect(() => {
    if (!slug) return;
    const fallback =
      slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-arabic" && lang === "az" ? ARABIC_PRIVACY : null;
    const name = choices.find((item) => item.slug === slug)?.name ?? slug;
    setTitle(fallback?.title ?? `${name} məxfilik siyasəti`);
    setUpdated(fallback?.updated ?? "");
    setBody(fallback?.paragraphs.join("\n\n") ?? "");
    setNote("");
    fetchPage(slug, lang).then((row) => {
      if (!row) return;
      setTitle(row.title);
      setUpdated(row.updated_label);
      setBody(row.body);
    });
  }, [slug, lang]);

  if (!current) {
    return (
      <div className="desk-home">
        <h1>Məxfilik</h1>
        <p>Siyasətini yazmaq istədiyiniz tətbiqi seçin.</p>
        <div className="desk-grid">
          {choices.map((item) => (
            <button key={item.slug} type="button" onClick={() => setSlug(item.slug)}>
              <b>{item.name}</b>
              <span>Məxfilik siyasəti</span>
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        setBusy(true);
        setNote("");
        writePrivacy({ slug, lang, title, updated_label: updated, body })
          .then(() => savedNote("Saxlanıldı.").then(setNote))
          .catch((reason: Error) => setNote(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <button type="button" className="desk-back" onClick={() => setSlug("")}>
        Bütün tətbiqlər
      </button>
      <h2>{current.name}</h2>
      <LangPick lang={lang} setLang={setLang} />
      <label>
        Başlıq
        <input value={title} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Tarix sətri
        <input value={updated} onChange={(event) => setUpdated(event.target.value)} />
      </label>
      <label>
        Mətn
        <textarea value={body} onChange={(event) => setBody(event.target.value)} rows={14} />
      </label>
      {note ? <p className="studio-note">{note}</p> : null}
      <button className="nx-cta" type="submit" disabled={busy}>
        {busy ? "Saxlanır" : "Saxla"}
      </button>
    </form>
  );
}

const ICONS: Record<string, string> = {
  "nibras-arabic": "/apps/nibras-arabic.jpg",
  "nibras-pdf": "/apps/nibras-pdf.jpg",
  "nibras-docs": "/apps/nibras-docs.jpg",
  "nibras-plans": "/apps/nibras-plans.jpg",
};

function AppsEditor() {
  const [rows, setRows] = useState<StudioAppRow[]>([]);
  const [draft, setDraft] = useState<StudioAppRow | null>(null);
  const [lang, setLang] = useState<Lang>("az");
  const [policy, setPolicy] = useState({ title: "", updated: "", body: "" });
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  function load() {
    fetchStudioApps().then(setRows);
  }

  useEffect(load, []);

  const extras = rows.filter((row) => !CATALOG.some((item) => item.slug === row.slug));
  const list = [
    ...CATALOG.map((item) => {
      const live = rows.find((row) => row.slug === item.slug);
      return (
        live ?? {
          ...EMPTY_APP,
          slug: item.slug,
          name: item.name,
          icon_url: ICONS[item.slug],
          status: item.slug === "nibras-arabic" ? "ready" : item.slug === "nibras-docs" ? "building" : "soon",
        }
      );
    }),
    ...extras,
  ];

  function fillPolicy(slug: string, name: string, nextLang: Lang) {
    const fallback =
      slug === "nibras-pdf"
        ? PDF_PRIVACY[nextLang]
        : slug === "nibras-arabic" && nextLang === "az"
          ? ARABIC_PRIVACY
          : null;
    setPolicy({
      title: fallback?.title ?? (name ? `${name} məxfilik siyasəti` : ""),
      updated: fallback?.updated ?? "",
      body: fallback?.paragraphs.join("\n\n") ?? "",
    });
    if (!slug) return;
    fetchPage(slug, nextLang).then((row) => {
      if (!row) return;
      setPolicy({ title: row.title, updated: row.updated_label, body: row.body });
    });
  }

  function openApp(row: StudioAppRow) {
    setDraft(row);
    setLang("az");
    setNote("");
    fillPolicy(row.slug, row.name, "az");
  }

  if (!draft) {
    return (
      <div className="desk-home">
        <h1>Tətbiqlər</h1>
        <p>Tətbiqi seçin. Məxfilik siyasəti onun səhifəsinin içində yazılır.</p>
        <div className="app-pick">
          {list.map((row) => (
            <button key={row.slug} type="button" onClick={() => openApp(row)}>
              <img src={row.icon_url || ICONS[row.slug] || "/nibras-icon.png"} alt="" />
              <span>
                <b>{row.name}</b>
                <small>/privacy/{row.slug}</small>
              </span>
            </button>
          ))}
        </div>
        <button
          type="button"
          className="desk-new"
          onClick={() => openApp({ ...EMPTY_APP, name: "" })}
        >
          Yeni tətbiq
        </button>
      </div>
    );
  }

  const known = CATALOG.some((item) => item.slug === draft.slug);

  return (
    <div className="studio-card">
      <button type="button" className="desk-back" onClick={() => setDraft(null)}>
        Bütün tətbiqlər
      </button>
      <h2>{draft.name || "Yeni tətbiq"}</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          const slug = draft.slug.trim().toLowerCase();
          if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
            setNote("Ünvan yalnız kiçik hərf, rəqəm və tire ola bilər. Məsələn nibras-notes.");
            return;
          }
          setBusy(true);
          setNote("");
          const saving = writeApp({ ...draft, slug, name: draft.name.trim(), summary: draft.summary.trim() });
          const policySave =
            policy.title.trim() || policy.body.trim()
              ? writePrivacy({
                  slug,
                  lang,
                  title: policy.title.trim(),
                  updated_label: policy.updated.trim(),
                  body: policy.body.trim(),
                })
              : Promise.resolve();
          Promise.all([saving, policySave])
            .then(() => {
              setDraft({ ...draft, slug });
              load();
              return savedNote("Saxlanıldı.").then(setNote);
            })
            .catch((reason: Error) => setNote(reason.message))
            .finally(() => setBusy(false));
        }}
      >
        <label>
          Ad
          <input value={draft.name} onChange={(event) => setDraft({ ...draft, name: event.target.value })} />
        </label>
        {known ? (
          <p className="studio-note">Səhifə ünvanı: /privacy/{draft.slug}</p>
        ) : (
          <label>
            Səhifə ünvanı
            <input
              value={draft.slug}
              onChange={(event) => setDraft({ ...draft, slug: event.target.value })}
              placeholder="nibras-notes"
            />
          </label>
        )}
        <label>
          Vəziyyət
          <select
            value={draft.status}
            onChange={(event) => setDraft({ ...draft, status: event.target.value })}
          >
            <option value="ready">Hazır</option>
            <option value="soon">Tezliklə</option>
            <option value="building">Hazırlanır</option>
          </select>
        </label>
        <label>
          Qısa məlumat
          <textarea
            value={draft.summary}
            onChange={(event) => setDraft({ ...draft, summary: event.target.value })}
            rows={3}
          />
        </label>
        <div className="studio-stores">
          <p>Mağaza keçidləri. Boş qalan görünməz.</p>
          {(
            [
              ["play_url", "Play Market"],
              ["huawei_url", "Huawei Store"],
              ["appstore_url", "App Store"],
              ["galaxy_url", "Galaxy Store"],
              ["xiaomi_url", "Xiaomi Store"],
            ] as const
          ).map(([key, label]) => (
            <label key={key}>
              {label}
              <input
                value={draft[key]}
                onChange={(event) => setDraft({ ...draft, [key]: event.target.value })}
              />
            </label>
          ))}
        </div>
        <div className="policy-box">
          <h3>Məxfilik əlavə et</h3>
          <p className="studio-note">Bu mətn həmin tətbiqin məxfilik səhifəsinə yazılır.</p>
          <LangPick
            lang={lang}
            setLang={(next) => {
              setLang(next);
              fillPolicy(draft.slug, draft.name, next);
            }}
          />
          <label>
            Başlıq
            <input
              value={policy.title}
              onChange={(event) => setPolicy({ ...policy, title: event.target.value })}
            />
          </label>
          <label>
            Tarix
            <input
              value={policy.updated}
              onChange={(event) => setPolicy({ ...policy, updated: event.target.value })}
            />
          </label>
          <label>
            Məxfilik mətni
            <textarea
              value={policy.body}
              onChange={(event) => setPolicy({ ...policy, body: event.target.value })}
              rows={8}
            />
          </label>
        </div>
        <label className="studio-check">
          <input
            type="checkbox"
            checked={draft.visible}
            onChange={(event) => setDraft({ ...draft, visible: event.target.checked })}
          />
          Saytda görünsün
        </label>
        {note ? <p className="studio-note">{note}</p> : null}
        <div className="studio-actions">
          <button className="nx-cta" type="submit" disabled={busy}>
            {busy ? "Saxlanır" : "Saxla"}
          </button>
          {draft.slug && !known ? (
            <button
              type="button"
              onClick={() => {
                removeApp(draft.slug)
                  .then(() => savedNote("Tətbiq silindi."))
                  .then(() => {
                    setDraft(null);
                    load();
                  })
                  .catch((reason: Error) => setNote(reason.message));
              }}
            >
              Sil
            </button>
          ) : null}
        </div>
      </form>
    </div>
  );
}

function LangPick({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="studio-langs">
      {LANGS.map((code) => (
        <button key={code} type="button" className={code === lang ? "is-on" : ""} onClick={() => setLang(code)}>
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

function AboutEditor() {
  const [lang, setLang] = useState<Lang>("az");
  const [copy, setCopy] = useState<AboutCopy>(defaultAbout("az"));
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const fallback = defaultAbout(lang);
    setCopy(fallback);
    fetchPage("about", lang).then((row) => {
      if (row) setCopy(aboutFromRow(row, lang));
    });
  }, [lang]);

  function patch(part: Partial<AboutCopy>) {
    setCopy((current) => ({ ...current, ...part }));
  }

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        const next = {
          ...copy,
          intro: lines(copy.intro.join("\n")),
          approach: lines(copy.approach.join("\n")),
        };
        setBusy(true);
        setNote("");
        writePrivacy({
          slug: "about",
          lang,
          title: next.title,
          updated_label: next.eyebrow,
          body: aboutBody(next),
        })
          .then(() => savedNote("Saxlanıldı. Haqqımızda səhifəsi bu mətni göstərəcək.").then(setNote))
          .catch((reason: Error) => setNote(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <h2>Haqqımızda</h2>
      <LangPick lang={lang} setLang={setLang} />
      <label>
        Kiçik başlıq
        <input value={copy.eyebrow} onChange={(event) => patch({ eyebrow: event.target.value })} />
      </label>
      <label>
        Başlıq
        <input value={copy.title} onChange={(event) => patch({ title: event.target.value })} />
      </label>
      <label>
        Əsas mətn
        <textarea
          rows={8}
          value={copy.intro.join("\n\n")}
          onChange={(event) => patch({ intro: event.target.value.split(/\n\s*\n/) })}
        />
      </label>
      <label>
        Bölmə başlığı
        <input value={copy.approachTitle} onChange={(event) => patch({ approachTitle: event.target.value })} />
      </label>
      <label>
        Bölmə mətni
        <textarea
          rows={6}
          value={copy.approach.join("\n\n")}
          onChange={(event) => patch({ approach: event.target.value.split(/\n\s*\n/) })}
        />
      </label>
      <label>
        Yekun sətir
        <input value={copy.success} onChange={(event) => patch({ success: event.target.value })} />
      </label>
      <label>
        Ərəbcə ayə
        <input value={copy.verse} onChange={(event) => patch({ verse: event.target.value })} dir="rtl" />
      </label>
      <label>
        Tərcümə
        <input value={copy.verseTr} onChange={(event) => patch({ verseTr: event.target.value })} />
      </label>
      {note ? <p className="studio-note">{note}</p> : null}
      <button className="nx-cta" type="submit" disabled={busy}>
        {busy ? "Saxlanır" : "Saxla"}
      </button>
    </form>
  );
}

function UnutmaEditor() {
  const [lang, setLang] = useState<Lang>("az");
  const [copy, setCopy] = useState<UnutmaCopy>(defaultUnutma("az"));
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    setCopy(defaultUnutma(lang));
    fetchPage("unutma", lang).then((row) => {
      if (row) setCopy(unutmaFromRow(row, lang));
    });
  }, [lang]);

  function patch(part: Partial<UnutmaCopy>) {
    setCopy((current) => ({ ...current, ...part }));
  }

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        const next = { ...copy, notes: lines(copy.notes.join("\n")) };
        setBusy(true);
        setNote("");
        writePrivacy({
          slug: "unutma",
          lang,
          title: next.title,
          updated_label: next.eyebrow,
          body: unutmaBody(next),
        })
          .then(() => savedNote("Saxlanıldı. Unutma səhifəsi bu mətni göstərəcək.").then(setNote))
          .catch((reason: Error) => setNote(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <h2>Unutma</h2>
      <p className="studio-note">Hər xatırlatmanı ayrı sətirdə yazın. Boş sətir sayılmır.</p>
      <LangPick lang={lang} setLang={setLang} />
      <label>
        Kiçik başlıq
        <input value={copy.eyebrow} onChange={(event) => patch({ eyebrow: event.target.value })} />
      </label>
      <label>
        Başlıq
        <input value={copy.title} onChange={(event) => patch({ title: event.target.value })} />
      </label>
      <label>
        Ərəbcə ayə
        <input value={copy.verse} onChange={(event) => patch({ verse: event.target.value })} dir="rtl" />
      </label>
      <label>
        Xatırlatmalar
        <textarea
          rows={14}
          value={copy.notes.join("\n")}
          onChange={(event) => patch({ notes: event.target.value.split("\n") })}
        />
      </label>
      {note ? <p className="studio-note">{note}</p> : null}
      <button className="nx-cta" type="submit" disabled={busy}>
        {busy ? "Saxlanır" : "Saxla"}
      </button>
    </form>
  );
}

function LessonsEditor() {
  const [rows, setRows] = useState<StudioPrivacyRow[]>([]);
  const [id, setId] = useState("");
  const [lang, setLang] = useState<Lang>("az");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fresh, setFresh] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  function load() {
    fetchPrivacyAll().then(setRows);
  }

  useEffect(load, []);

  const sections = pythonSections("az", rows);

  useEffect(() => {
    if (!id) return;
    const known = PYTHON_LESSONS.find((item) => item.id === id);
    const row = rows.find((item) => item.slug === lessonSlug(id) && item.lang === lang);
    setTitle(row?.title || known?.titles[lang] || "");
    setBody(row?.body ?? "");
  }, [id, lang, rows]);

  function openNew() {
    const name = fresh.trim();
    if (!name) return;
    let next = slugifyLesson(name);
    const taken = new Set(sections.map((item) => item.id));
    if (taken.has(next)) next = `${next}-2`.slice(0, 48);
    setBusy(true);
    setNote("");
    writePrivacy({
      slug: lessonSlug(next),
      lang: "az",
      title: name,
      updated_label: "200",
      body: "",
    })
      .then(() => {
        setFresh("");
        setId(next);
        setLang("az");
        return fetchPrivacyAll()
          .then(setRows)
          .then(() => savedNote("Səhifə əlavə olundu.").then(setNote));
      })
      .catch((reason: Error) => setNote(reason.message))
      .finally(() => setBusy(false));
  }

  if (!id) {
    return (
      <div className="desk-home">
        <h1>Python</h1>
        <p>Bölməni seçin və mətnini 5 dildə ayrı-ayrı yazın. Boş mətn saytda görünmür.</p>
        <div className="desk-grid">
          {sections.map((item) => (
            <button key={item.id} type="button" onClick={() => setId(item.id)}>
              <b>{item.title}</b>
              <span>/programming/python#{item.id}</span>
            </button>
          ))}
        </div>
        <form
          className="studio-card"
          onSubmit={(event) => {
            event.preventDefault();
            openNew();
          }}
        >
          <h2>Yeni səhifə</h2>
          <label>
            Səhifə adı
            <input
              value={fresh}
              placeholder="Python nədir? Nə işə yarayır"
              onChange={(event) => setFresh(event.target.value)}
            />
          </label>
          {note ? <p className="studio-note">{note}</p> : null}
          <button className="nx-cta" type="submit" disabled={busy || !fresh.trim()}>
            {busy ? "Əlavə olunur" : "Səhifə əlavə et"}
          </button>
        </form>
      </div>
    );
  }

  const custom = !PYTHON_LESSONS.some((item) => item.id === id);

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        setBusy(true);
        setNote("");
        const knownIndex = PYTHON_LESSONS.findIndex((item) => item.id === id);
        writePrivacy({
          slug: lessonSlug(id),
          lang,
          title: title.trim(),
          updated_label: knownIndex >= 0 ? String(knownIndex) : "200",
          body,
        })
          .then(() => {
            return fetchPrivacyAll().then((next) => {
              setRows(next);
              return savedNote("Saxlanıldı. Bu dilin səhifəsində mətn görünəcək.").then(setNote);
            });
          })
          .catch((reason: Error) => setNote(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <button type="button" className="desk-back" onClick={() => setId("")}>
        Bütün bölmələr
      </button>
      <h2>{title || id}</h2>
      <p className="studio-note">Ünvan: /programming/python#{id}</p>
      <LangPick lang={lang} setLang={setLang} />
      <label>
        Başlıq
        <input value={title} onChange={(event) => setTitle(event.target.value)} dir={lang === "ar" ? "rtl" : undefined} />
      </label>
      <label>
        Mətn
        <textarea
          rows={14}
          value={body}
          placeholder="Bu dildə mətn hələ yoxdur."
          dir={lang === "ar" ? "rtl" : undefined}
          onChange={(event) => setBody(event.target.value)}
        />
      </label>
      {note ? <p className="studio-note">{note}</p> : null}
      <button className="nx-cta" type="submit" disabled={busy || !title.trim()}>
        {busy ? "Saxlanır" : "Saxla"}
      </button>
      {custom ? (
        <button
          type="button"
          className="desk-back"
          disabled={busy}
          onClick={() => {
            setBusy(true);
            removePrivacy(lessonSlug(id))
              .then(() => savedNote("Səhifə silindi."))
              .then(() => {
                setId("");
                return fetchPrivacyAll().then(setRows);
              })
              .catch((reason: Error) => setNote(reason.message))
              .finally(() => setBusy(false));
          }}
        >
          Səhifəni sil
        </button>
      ) : null}
    </form>
  );
}

function LibraryEditor({ start }: { start: LibGroup }) {
  const [rows, setRows] = useState<StudioPrivacyRow[]>([]);
  const [group, setGroup] = useState<LibGroup>(start);
  const [id, setId] = useState("");
  const [lang, setLang] = useState<Lang>("az");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [fresh, setFresh] = useState("");
  const [note, setNote] = useState("");
  const [busy, setBusy] = useState(false);

  function load() {
    fetchPrivacyAll().then(setRows);
  }

  useEffect(load, []);

  useEffect(() => {
    setGroup(start);
    setId("");
  }, [start]);

  const items = libItems(group, rows);
  const custom = id ? !LIB_GROUPS[group].pages.some((item) => item.id === id) : false;

  useEffect(() => {
    if (!id) return;
    const saved = savedLib(group, id, lang, rows);
    const fallback = libDefaults(group, id, lang);
    setTitle(saved?.title || fallback.title);
    setBody(saved?.body ?? fallback.body);
  }, [id, lang, group, rows]);

  function openNew() {
    const name = fresh.trim();
    if (!name) return;
    let next = slugifyLesson(name);
    const taken = new Set(items.map((item) => item.id));
    if (taken.has(next)) next = `${next}-2`.slice(0, 48);
    setBusy(true);
    setNote("");
    writePrivacy({ slug: libSlug(group, next), lang: "az", title: name, updated_label: "200", body: "" })
      .then(() => savedNote("Səhifə əlavə olundu.").then(setNote))
      .then(() => {
        setFresh("");
        setId(next);
        setLang("az");
        return fetchPrivacyAll().then(setRows);
      })
      .catch((reason: Error) => setNote(reason.message))
      .finally(() => setBusy(false));
  }

  if (!id) {
    return (
      <div className="desk-home">
        <h1>{LIB_GROUPS[group].label}</h1>
        <p>Səhifəni seçin və mətnini 5 dildə ayrı-ayrı yazın. Boş saxlanmayan dil öz köhnə mətnini göstərir.</p>
        <div className="studio-langs">
          {(Object.keys(LIB_GROUPS) as LibGroup[]).map((code) => (
            <button key={code} type="button" className={code === group ? "is-on" : ""} onClick={() => setGroup(code)}>
              {LIB_GROUPS[code].label}
            </button>
          ))}
        </div>
        <div className="desk-grid">
          {items.map((item) => (
            <button key={item.id} type="button" onClick={() => setId(item.id)}>
              <b>{item.title}</b>
              <span>{group === "resurs" ? `/resurslar/${item.id}` : `/guides/${item.id}`}</span>
            </button>
          ))}
        </div>
        <form
          className="studio-card"
          onSubmit={(event) => {
            event.preventDefault();
            openNew();
          }}
        >
          <h2>Yeni səhifə</h2>
          <label>
            Səhifə adı
            <input value={fresh} onChange={(event) => setFresh(event.target.value)} />
          </label>
          {note ? <p className="studio-note">{note}</p> : null}
          <button className="nx-cta" type="submit" disabled={busy || !fresh.trim()}>
            {busy ? "Əlavə olunur" : "Səhifə əlavə et"}
          </button>
        </form>
      </div>
    );
  }

  return (
    <form
      className="studio-card"
      onSubmit={(event) => {
        event.preventDefault();
        setBusy(true);
        setNote("");
        writePrivacy({
          slug: libSlug(group, id),
          lang,
          title: title.trim(),
          updated_label: "0",
          body,
        })
          .then(() => savedNote("Saxlanıldı. Bu dilin səhifəsi bu mətni göstərəcək.").then(setNote))
          .then(() => fetchPrivacyAll().then(setRows))
          .catch((reason: Error) => setNote(reason.message))
          .finally(() => setBusy(false));
      }}
    >
      <button type="button" className="desk-back" onClick={() => setId("")}>
        Bütün səhifələr
      </button>
      <h2>{title || id}</h2>
      <LangPick lang={lang} setLang={setLang} />
      <label>
        Başlıq
        <input value={title} dir={lang === "ar" ? "rtl" : undefined} onChange={(event) => setTitle(event.target.value)} />
      </label>
      <label>
        Mətn
        <textarea rows={14} value={body} dir={lang === "ar" ? "rtl" : undefined} onChange={(event) => setBody(event.target.value)} />
      </label>
      {note ? <p className="studio-note">{note}</p> : null}
      <button className="nx-cta" type="submit" disabled={busy || !title.trim()}>
        {busy ? "Saxlanır" : "Saxla"}
      </button>
      {custom ? (
        <button
          type="button"
          className="desk-back"
          disabled={busy}
          onClick={() => {
            setBusy(true);
            removePrivacy(libSlug(group, id))
              .then(() => {
                setId("");
                return fetchPrivacyAll().then(setRows);
              })
              .catch((reason: Error) => setNote(reason.message))
              .finally(() => setBusy(false));
          }}
        >
          Səhifəni sil
        </button>
      ) : null}
    </form>
  );
}


