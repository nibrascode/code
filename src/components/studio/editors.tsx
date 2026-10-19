import { useEffect, useMemo, useState } from "react";
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
import type { StudioAppRow, StudioPrivacyRow } from "@/lib/studio";
import { PYTHON_LESSONS, lessonSlug, pythonSections, slugifyLesson } from "@/lib/lessons";
import type { ProgrammingSection } from "@/lib/programming";
import { LIB_GROUPS, libDefaults, libItems, libSlug, savedLib, type LibGroup } from "@/lib/library-admin";
import {
  Card,
  ConfirmDelete,
  Empty,
  Field,
  LangTabs,
  PageHead,
  SaveBar,
  Seg,
  Skeleton,
  dirFor,
  useCopied,
  useDirty,
  useSaver,
  useStudio,
} from "./core";
import {
  IconApps,
  IconBack,
  IconChevron,
  IconCode,
  IconCopy,
  IconExternal,
  IconLibrary,
  IconMail,
  IconPages,
  IconPlus,
} from "./icons";

export const CATALOG = [
  { slug: "nibras-arabic", name: "Nibras Arabic" },
  { slug: "nibras-pdf", name: "Nibras PDF" },
  { slug: "nibras-docs", name: "Nibras Docs" },
  { slug: "nibras-plans", name: "Nibras Plans" },
] as const;

export const ICONS: Record<string, string> = {
  "nibras-arabic": "/apps/nibras-arabic.jpg",
  "nibras-pdf": "/apps/nibras-pdf.jpg",
  "nibras-docs": "/apps/nibras-docs.jpg",
  "nibras-plans": "/apps/nibras-plans.jpg",
};

export const STORE_FIELDS = [
  ["play_url", "Play Market"],
  ["huawei_url", "Huawei Store"],
  ["appstore_url", "App Store"],
  ["galaxy_url", "Galaxy Store"],
  ["xiaomi_url", "Xiaomi Store"],
] as const;

export const EMPTY_APP: StudioAppRow = {
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

export function appList(rows: StudioAppRow[]) {
  const extras = rows.filter((row) => !CATALOG.some((item) => item.slug === row.slug));
  return [
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
    ...extras.sort((a, b) => a.sort - b.sort),
  ];
}

function policyFallback(slug: string, name: string, lang: Lang) {
  const fb = slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-arabic" && lang === "az" ? ARABIC_PRIVACY : null;
  return {
    title: fb?.title ?? (name ? `${name} — Privacy` : ""),
    updated: fb?.updated ?? "",
    body: fb?.paragraphs.join("\n\n") ?? "",
  };
}

function hasRow(rows: StudioPrivacyRow[] | null, slug: string) {
  const out: Partial<Record<Lang, boolean>> = {};
  for (const row of rows ?? []) if (row.slug === slug && row.body.trim()) out[row.lang as Lang] = true;
  return out;
}

export function statusLabel(t: ReturnType<typeof useStudio>["t"], status: string) {
  return status === "ready" ? t("st_ready") : status === "building" ? t("st_building") : t("st_soon");
}

/* ───────────────────────────── Tətbiqlər ───────────────────────────── */

export function AppsSection({ startNew }: { startNew?: boolean }) {
  const { t, apps, rows } = useStudio();
  const [open, setOpen] = useState<StudioAppRow | null>(startNew ? { ...EMPTY_APP } : null);

  useEffect(() => {
    if (startNew) setOpen({ ...EMPTY_APP });
  }, [startNew]);

  if (open) return <AppForm key={open.slug || "new"} initial={open} onBack={() => setOpen(null)} />;

  const list = apps ? appList(apps) : null;
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconApps size={22} />} title={t("nav_apps")} sub={t("apps_sub")}>
        <button type="button" className="nxa-btn is-primary" onClick={() => setOpen({ ...EMPTY_APP })}>
          <IconPlus size={17} />
          {t("q_new_app")}
        </button>
      </PageHead>
      {!list ? (
        <Card>
          <Skeleton lines={4} />
        </Card>
      ) : (
        <div className="nxa-app-grid">
          {list.map((row) => {
            const policy = hasRow(rows, row.slug);
            const stores = STORE_FIELDS.filter(([key]) => row[key]?.trim()).length;
            return (
              <button key={row.slug} type="button" className="nxa-app" onClick={() => setOpen(row)}>
                <img src={row.icon_url || ICONS[row.slug] || "/nibras-icon.png"} alt="" loading="lazy" />
                <span className="nxa-app-main">
                  <b>{row.name}</b>
                  <small>/apps/{row.slug}</small>
                  <span className="nxa-chips">
                    <em className={`nxa-pill is-${row.status || "soon"}`}>{statusLabel(t, row.status)}</em>
                    {!row.visible ? <em className="nxa-pill is-muted">{t("hidden")}</em> : null}
                    <em className="nxa-pill is-muted">
                      {stores}/5 store
                    </em>
                    <em className="nxa-pill is-muted">
                      {t("p_privacy")} {Object.keys(policy).length}/5
                    </em>
                  </span>
                </span>
                <IconChevron size={18} className="nxa-ic nxa-flip" />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

function AppForm({ initial, onBack }: { initial: StudioAppRow; onBack: () => void }) {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [draft, setDraft] = useState<StudioAppRow>(initial);
  const [lang, setLang] = useState<Lang>("az");
  const [policy, setPolicy] = useState(() => policyFallback(initial.slug, initial.name, "az"));
  const [error, setError] = useState("");
  const known = CATALOG.some((item) => item.slug === initial.slug);
  const isNew = !initial.slug;
  const watch = useDirty({ draft, policy });

  useEffect(() => {
    const row = rows?.find((item) => item.slug === draft.slug && item.lang === lang);
    const next = row ? { title: row.title, updated: row.updated_label, body: row.body } : policyFallback(draft.slug, draft.name, lang);
    setPolicy(next);
    watch.reset({ draft, policy: next });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, rows]);

  function set<K extends keyof StudioAppRow>(key: K, value: StudioAppRow[K]) {
    setDraft((current) => ({ ...current, [key]: value }));
  }

  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        const slug = draft.slug.trim().toLowerCase();
        if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return setError(t("slug_bad"));
        const bad = [...STORE_FIELDS.map(([k]) => draft[k]), draft.icon_url].some((v) => v.trim() && !/^(https:\/\/|\/)/.test(v.trim()));
        if (bad) return setError(t("url_bad"));
        setError("");
        const app: StudioAppRow = {
          ...draft,
          slug,
          name: draft.name.trim() || slug,
          summary: draft.summary.trim(),
          icon_url: draft.icon_url.trim(),
          sort: Number(draft.sort) || 200,
          ...Object.fromEntries(STORE_FIELDS.map(([k]) => [k, draft[k].trim()])),
        };
        const privacy =
          policy.title.trim() || policy.body.trim()
            ? [{ slug, lang, title: policy.title.trim(), updated_label: policy.updated.trim(), body: policy.body.trim() }]
            : [];
        run({ app, privacy }, async () => {
          setDraft(app);
          watch.reset({ draft: app, policy });
          await reload();
        });
      }}
    >
      <PageHead icon={<IconApps size={22} />} title={draft.name || t("new_app_title")} sub={draft.slug ? `/apps/${draft.slug}` : t("apps_sub")}>
        <button type="button" className="nxa-btn is-ghost" onClick={onBack}>
          <IconBack size={17} className="nxa-ic nxa-flip" />
          {t("all_apps")}
        </button>
        {draft.slug && !isNew ? (
          <a className="nxa-btn is-ghost" href={`/apps/${draft.slug}`} target="_blank" rel="noreferrer">
            <IconExternal size={16} />
            {t("open_live")}
          </a>
        ) : null}
      </PageHead>
      <div className="nxa-split">
        <Card title={t("app_info")}>
          <div className="nxa-form">
            <Field label={t("name")}>
              <input value={draft.name} onChange={(e) => set("name", e.target.value)} maxLength={120} required />
            </Field>
            <Field label={t("slug")} hint={known ? `/privacy/${draft.slug}` : "nibras-notes"}>
              <input
                value={draft.slug}
                disabled={known || !isNew}
                dir="ltr"
                onChange={(e) => set("slug", e.target.value.toLowerCase())}
                placeholder="nibras-notes"
                maxLength={80}
              />
            </Field>
            <Field label={t("status")}>
              <Seg
                value={(draft.status || "soon") as "ready" | "soon" | "building"}
                onChange={(v) => set("status", v)}
                options={[
                  { id: "ready", label: t("st_ready") },
                  { id: "building", label: t("st_building") },
                  { id: "soon", label: t("st_soon") },
                ]}
              />
            </Field>
            <Field label={t("summary")} wide>
              <textarea value={draft.summary} rows={3} maxLength={600} onChange={(e) => set("summary", e.target.value)} />
            </Field>
            <Field label={t("icon_url")}>
              <input value={draft.icon_url} dir="ltr" onChange={(e) => set("icon_url", e.target.value)} placeholder="/apps/…jpg" />
            </Field>
            <Field label={t("sort")}>
              <input type="number" value={draft.sort} min={0} max={9999} onChange={(e) => set("sort", Number(e.target.value))} />
            </Field>
            <label className="nxa-switch is-wide">
              <input type="checkbox" checked={draft.visible} onChange={(e) => set("visible", e.target.checked)} />
              <i aria-hidden="true" />
              <span>{t("visible")}</span>
            </label>
          </div>
        </Card>
        <Card title={t("stores_title")} sub={t("stores")}>
          <div className="nxa-form is-one">
            {STORE_FIELDS.map(([key, label]) => (
              <Field key={key} label={label}>
                <input value={draft[key]} dir="ltr" placeholder="https://" onChange={(e) => set(key, e.target.value)} />
              </Field>
            ))}
          </div>
        </Card>
      </div>
      <Card title={t("privacy_box")} sub={t("privacy_box_sub")} actions={<LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, draft.slug)} />}>
        <div className="nxa-form">
          <Field label={t("title")}>
            <input value={policy.title} dir={dirFor(lang)} onChange={(e) => setPolicy({ ...policy, title: e.target.value })} />
          </Field>
          <Field label={t("date_line")}>
            <input value={policy.updated} dir={dirFor(lang)} onChange={(e) => setPolicy({ ...policy, updated: e.target.value })} />
          </Field>
          <Field label={t("body")} wide hint={`${policy.body.length} ${t("chars")}`}>
            <textarea rows={10} value={policy.body} dir={dirFor(lang)} onChange={(e) => setPolicy({ ...policy, body: e.target.value })} />
          </Field>
        </div>
      </Card>
      {error ? <p className="nxa-inline-error" role="alert">{error}</p> : null}
      <SaveBar busy={busy} dirty={watch.dirty}>
        {draft.slug && !known && !isNew ? (
          <ConfirmDelete
            busy={busy}
            onConfirm={() => {
              run({ dropApp: draft.slug, dropSlug: draft.slug }, async () => {
                await reload();
                onBack();
              });
            }}
          />
        ) : null}
      </SaveBar>
    </form>
  );
}

/* ───────────────────────────── Səhifələr ───────────────────────────── */

type PageTab = "about" | "unutma" | "privacy" | "contact";

export function PagesSection({ start }: { start?: string }) {
  const { t } = useStudio();
  const [tab, setTab] = useState<PageTab>((["about", "unutma", "privacy", "contact"].includes(start ?? "") ? start : "about") as PageTab);
  useEffect(() => {
    if (start && ["about", "unutma", "privacy", "contact"].includes(start)) setTab(start as PageTab);
  }, [start]);
  return (
    <div className="nxa-stack">
      <PageHead icon={<IconPages size={22} />} title={t("nav_pages")} sub={t("pages_sub")} />
      <Seg
        value={tab}
        onChange={setTab}
        options={[
          { id: "about", label: t("p_about") },
          { id: "unutma", label: t("p_unutma") },
          { id: "privacy", label: t("p_privacy") },
          { id: "contact", label: t("p_contact") },
        ]}
      />
      {tab === "about" ? <AboutForm /> : null}
      {tab === "unutma" ? <UnutmaForm /> : null}
      {tab === "privacy" ? <PrivacyPicker /> : null}
      {tab === "contact" ? <ContactCard /> : null}
    </div>
  );
}

function AboutForm() {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [lang, setLang] = useState<Lang>("az");
  const [copy, setCopy] = useState<AboutCopy>(() => defaultAbout("az"));
  const watch = useDirty(copy);

  useEffect(() => {
    const row = rows?.find((item) => item.slug === "about" && item.lang === lang);
    const next = row ? aboutFromRow(row, lang) : defaultAbout(lang);
    setCopy(next);
    watch.reset(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, rows]);

  const patch = (part: Partial<AboutCopy>) => setCopy((c) => ({ ...c, ...part }));
  if (!rows) return <Card><Skeleton lines={6} /></Card>;
  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        const next = { ...copy, intro: lines(copy.intro.join("\n")), approach: lines(copy.approach.join("\n")) };
        run({ privacy: [{ slug: "about", lang, title: next.title, updated_label: next.eyebrow, body: aboutBody(next) }] }, reload);
      }}
    >
      <Card
        title={t("p_about")}
        actions={
          <>
            <LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, "about")} />
            <a className="nxa-btn is-ghost is-sm" href={lang === "az" ? "/about" : `/${lang}/about`} target="_blank" rel="noreferrer">
              <IconExternal size={15} />
              {t("open_live")}
            </a>
          </>
        }
      >
        <div className="nxa-form">
          <Field label={t("eyebrow")}>
            <input value={copy.eyebrow} dir={dirFor(lang)} onChange={(e) => patch({ eyebrow: e.target.value })} />
          </Field>
          <Field label={t("title")}>
            <input value={copy.title} dir={dirFor(lang)} onChange={(e) => patch({ title: e.target.value })} />
          </Field>
          <Field label={t("intro")} wide>
            <textarea rows={9} dir={dirFor(lang)} value={copy.intro.join("\n\n")} onChange={(e) => patch({ intro: e.target.value.split(/\n\s*\n/) })} />
          </Field>
          <Field label={t("approach_title")} wide>
            <input value={copy.approachTitle} dir={dirFor(lang)} onChange={(e) => patch({ approachTitle: e.target.value })} />
          </Field>
          <Field label={t("approach")} wide>
            <textarea rows={6} dir={dirFor(lang)} value={copy.approach.join("\n\n")} onChange={(e) => patch({ approach: e.target.value.split(/\n\s*\n/) })} />
          </Field>
          <Field label={t("success")} wide>
            <input value={copy.success} dir={dirFor(lang)} onChange={(e) => patch({ success: e.target.value })} />
          </Field>
          <Field label={t("verse")}>
            <input value={copy.verse} dir="rtl" className="nxa-arabic" onChange={(e) => patch({ verse: e.target.value })} />
          </Field>
          <Field label={t("verse_tr")}>
            <input value={copy.verseTr} dir={dirFor(lang)} onChange={(e) => patch({ verseTr: e.target.value })} />
          </Field>
        </div>
      </Card>
      <SaveBar busy={busy} dirty={watch.dirty} />
    </form>
  );
}

function UnutmaForm() {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [lang, setLang] = useState<Lang>("az");
  const [copy, setCopy] = useState<UnutmaCopy>(() => defaultUnutma("az"));
  const watch = useDirty(copy);

  useEffect(() => {
    const row = rows?.find((item) => item.slug === "unutma" && item.lang === lang);
    const next = row ? unutmaFromRow(row, lang) : defaultUnutma(lang);
    setCopy(next);
    watch.reset(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, rows]);

  const patch = (part: Partial<UnutmaCopy>) => setCopy((c) => ({ ...c, ...part }));
  if (!rows) return <Card><Skeleton lines={6} /></Card>;
  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        const next = { ...copy, notes: lines(copy.notes.join("\n")) };
        run({ privacy: [{ slug: "unutma", lang, title: next.title, updated_label: next.eyebrow, body: unutmaBody(next) }] }, reload);
      }}
    >
      <Card
        title={t("p_unutma")}
        actions={
          <>
            <LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, "unutma")} />
            <a className="nxa-btn is-ghost is-sm" href={lang === "az" ? "/unutma" : `/unutma?lang=${lang}`} target="_blank" rel="noreferrer">
              <IconExternal size={15} />
              {t("open_live")}
            </a>
          </>
        }
      >
        <div className="nxa-form">
          <Field label={t("eyebrow")}>
            <input value={copy.eyebrow} dir={dirFor(lang)} onChange={(e) => patch({ eyebrow: e.target.value })} />
          </Field>
          <Field label={t("title")}>
            <input value={copy.title} dir={dirFor(lang)} onChange={(e) => patch({ title: e.target.value })} />
          </Field>
          <Field label={t("verse")} wide>
            <input value={copy.verse} dir="rtl" className="nxa-arabic" onChange={(e) => patch({ verse: e.target.value })} />
          </Field>
          <Field label={t("notes")} wide hint={`${lines(copy.notes.join("\n")).length}`}>
            <textarea rows={14} dir={dirFor(lang)} value={copy.notes.join("\n")} onChange={(e) => patch({ notes: e.target.value.split("\n") })} />
          </Field>
        </div>
      </Card>
      <SaveBar busy={busy} dirty={watch.dirty} />
    </form>
  );
}

function PrivacyPicker() {
  const { t, apps, rows } = useStudio();
  const [slug, setSlug] = useState("");
  const list = apps ? appList(apps) : null;
  if (!list) return <Card><Skeleton lines={4} /></Card>;
  const current = list.find((row) => row.slug === slug);
  if (current) return <PrivacyForm key={slug} app={current} onBack={() => setSlug("")} />;
  return (
    <Card title={t("p_privacy")} sub={t("pick_app")}>
      <div className="nxa-list">
        {list.map((row) => {
          const filled = hasRow(rows, row.slug);
          return (
            <button key={row.slug} type="button" className="nxa-list-row" onClick={() => setSlug(row.slug)}>
              <img src={row.icon_url || ICONS[row.slug] || "/nibras-icon.png"} alt="" loading="lazy" />
              <span>
                <b>{row.name}</b>
                <small>/privacy/{row.slug}</small>
              </span>
              <LangDots filled={filled} />
              <IconChevron size={17} className="nxa-ic nxa-flip" />
            </button>
          );
        })}
      </div>
    </Card>
  );
}

export function LangDots({ filled }: { filled: Partial<Record<Lang, boolean>> }) {
  return (
    <span className="nxa-dots" aria-label={LANGS.filter((l) => filled[l]).join(", ")}>
      {LANGS.map((l) => (
        <i key={l} className={filled[l] ? "is-on" : ""} title={l.toUpperCase()}>
          {l.toUpperCase()}
        </i>
      ))}
    </span>
  );
}

function PrivacyForm({ app, onBack }: { app: StudioAppRow; onBack: () => void }) {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [lang, setLang] = useState<Lang>("az");
  const [form, setForm] = useState(() => policyFallback(app.slug, app.name, "az"));
  const watch = useDirty(form);

  useEffect(() => {
    const row = rows?.find((item) => item.slug === app.slug && item.lang === lang);
    const next = row ? { title: row.title, updated: row.updated_label, body: row.body } : policyFallback(app.slug, app.name, lang);
    setForm(next);
    watch.reset(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, rows]);

  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        run({ privacy: [{ slug: app.slug, lang, title: form.title.trim(), updated_label: form.updated.trim(), body: form.body.trim() }] }, reload);
      }}
    >
      <Card
        title={app.name}
        sub={`/privacy/${app.slug}`}
        actions={
          <>
            <button type="button" className="nxa-btn is-ghost is-sm" onClick={onBack}>
              <IconBack size={15} className="nxa-ic nxa-flip" />
              {t("all_apps")}
            </button>
            <a className="nxa-btn is-ghost is-sm" href={`/privacy/${app.slug}`} target="_blank" rel="noreferrer">
              <IconExternal size={15} />
              {t("open_live")}
            </a>
          </>
        }
      >
        <LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, app.slug)} />
        <div className="nxa-form">
          <Field label={t("title")}>
            <input value={form.title} dir={dirFor(lang)} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field label={t("date_line")}>
            <input value={form.updated} dir={dirFor(lang)} onChange={(e) => setForm({ ...form, updated: e.target.value })} />
          </Field>
          <Field label={t("body")} wide hint={`${form.body.length} ${t("chars")}`}>
            <textarea rows={16} value={form.body} dir={dirFor(lang)} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          </Field>
        </div>
      </Card>
      <SaveBar busy={busy} dirty={watch.dirty} />
    </form>
  );
}

function ContactCard() {
  const { t } = useStudio();
  const { copied, copy } = useCopied();
  const mail = "nibrascode@gmail.com";
  return (
    <Card title={t("p_contact")} sub={t("contact_sub")}>
      <div className="nxa-contact">
        <span className="nxa-contact-icon">
          <IconMail size={22} />
        </span>
        <b dir="ltr">{mail}</b>
        <div className="nxa-row-actions">
          <button type="button" className="nxa-btn is-ghost is-sm" onClick={() => copy(mail)}>
            <IconCopy size={15} />
            {copied ? t("copied") : t("copy")}
          </button>
          <a className="nxa-btn is-ghost is-sm" href={`mailto:${mail}`}>
            <IconMail size={15} />
            {t("write_mail")}
          </a>
          <a className="nxa-btn is-ghost is-sm" href="/contact" target="_blank" rel="noreferrer">
            <IconExternal size={15} />
            {t("open_live")}
          </a>
        </div>
      </div>
    </Card>
  );
}

/* ───────────────────────────── Proqramlaşdırma ───────────────────────────── */

export function LessonsSection() {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [sections, setSections] = useState<readonly ProgrammingSection[]>(() => pythonSections("az", []));
  const [id, setId] = useState("");
  const [fresh, setFresh] = useState("");

  useEffect(() => {
    if (!rows) return;
    let live = true;
    import("@/lib/article-load")
      .then((mod) => mod.loadPythonEditorSections(rows))
      .then((next) => live && setSections(next))
      .catch(() => live && setSections(pythonSections("az", rows)));
    return () => {
      live = false;
    };
  }, [rows]);

  if (id) return <LessonForm key={id} id={id} onBack={() => setId("")} />;

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconCode size={22} />} title={`${t("nav_lessons")} · Python`} sub={t("lessons_sub")}>
        <a className="nxa-btn is-ghost" href="/programming/python" target="_blank" rel="noreferrer">
          <IconExternal size={16} />
          {t("open_live")}
        </a>
      </PageHead>
      {!rows ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : (
        <Card>
          <div className="nxa-list">
            {sections.map((item, index) => (
              <button key={item.id} type="button" className="nxa-list-row" onClick={() => setId(item.id)}>
                <span className="nxa-num">{String(index + 1).padStart(2, "0")}</span>
                <span>
                  <b>{item.title}</b>
                  <small dir="ltr">/programming/python#{item.id}</small>
                </span>
                <LangDots filled={hasRow(rows, lessonSlug(item.id))} />
                <IconChevron size={17} className="nxa-ic nxa-flip" />
              </button>
            ))}
          </div>
        </Card>
      )}
      <NewPageCard
        fresh={fresh}
        setFresh={setFresh}
        busy={busy}
        onAdd={() => {
          const name = fresh.trim();
          if (!name) return;
          let next = slugifyLesson(name);
          if (sections.some((s) => s.id === next)) next = `${next}-2`.slice(0, 48);
          run({ privacy: [{ slug: lessonSlug(next), lang: "az", title: name, updated_label: "200", body: "" }] }, async () => {
            setFresh("");
            await reload();
            setId(next);
          });
        }}
      />
    </div>
  );
}

function NewPageCard({ fresh, setFresh, busy, onAdd }: { fresh: string; setFresh: (v: string) => void; busy: boolean; onAdd: () => void }) {
  const { t } = useStudio();
  return (
    <Card title={t("new_page")}>
      <form
        className="nxa-inline-form"
        onSubmit={(event) => {
          event.preventDefault();
          onAdd();
        }}
      >
        <input value={fresh} placeholder={t("page_name")} aria-label={t("page_name")} maxLength={140} onChange={(e) => setFresh(e.target.value)} />
        <button className="nxa-btn is-primary" type="submit" disabled={busy || !fresh.trim()}>
          <IconPlus size={17} />
          {busy ? t("adding") : t("add_page")}
        </button>
      </form>
    </Card>
  );
}

function LessonForm({ id, onBack }: { id: string; onBack: () => void }) {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [lang, setLang] = useState<Lang>("az");
  const [form, setForm] = useState({ title: "", body: "" });
  const watch = useDirty(form);
  const known = PYTHON_LESSONS.find((item) => item.id === id);
  const custom = !known;

  useEffect(() => {
    const row = rows?.find((item) => item.slug === lessonSlug(id) && item.lang === lang);
    const next = { title: row?.title || known?.titles[lang] || "", body: row?.body ?? "" };
    setForm(next);
    watch.reset(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, lang, rows]);

  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        const index = PYTHON_LESSONS.findIndex((item) => item.id === id);
        run({ privacy: [{ slug: lessonSlug(id), lang, title: form.title.trim(), updated_label: index >= 0 ? String(index) : "200", body: form.body }] }, reload);
      }}
    >
      <Card
        title={form.title || id}
        sub={<span dir="ltr">/programming/python#{id}</span>}
        actions={
          <>
            <button type="button" className="nxa-btn is-ghost is-sm" onClick={onBack}>
              <IconBack size={15} className="nxa-ic nxa-flip" />
              {t("back_all")}
            </button>
            <a className="nxa-btn is-ghost is-sm" href={`${lang === "az" ? "" : `/${lang}`}/programming/python#${id}`} target="_blank" rel="noreferrer">
              <IconExternal size={15} />
              {t("open_live")}
            </a>
          </>
        }
      >
        <LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, lessonSlug(id))} />
        <div className="nxa-form">
          <Field label={t("title")} wide>
            <input value={form.title} dir={dirFor(lang)} required onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field label={t("body")} wide hint={`${form.body.length} ${t("chars")}`}>
            <textarea rows={16} value={form.body} dir={dirFor(lang)} placeholder={t("empty_lang")} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          </Field>
        </div>
      </Card>
      <SaveBar busy={busy} dirty={watch.dirty} disabled={!form.title.trim()}>
        {custom ? (
          <ConfirmDelete
            busy={busy}
            label={t("delete_page")}
            onConfirm={() =>
              run({ dropSlug: lessonSlug(id) }, async () => {
                await reload();
                onBack();
              })
            }
          />
        ) : null}
      </SaveBar>
    </form>
  );
}

/* ───────────────────────────── Resurslar / Bələdçilər ───────────────────────────── */

export function LibrarySection() {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [group, setGroup] = useState<LibGroup>("resurs");
  const [id, setId] = useState("");
  const [fresh, setFresh] = useState("");
  const [query, setQuery] = useState("");
  const items = useMemo(() => libItems(group, rows ?? []), [group, rows]);
  const shown = items.filter((item) => `${item.title} ${item.id}`.toLowerCase().includes(query.trim().toLowerCase()));

  if (id) return <LibForm key={`${group}-${id}`} group={group} id={id} onBack={() => setId("")} />;

  return (
    <div className="nxa-stack">
      <PageHead icon={<IconLibrary size={22} />} title={t("nav_library")} sub={t("library_sub")} />
      <div className="nxa-toolbar">
        <Seg
          value={group}
          onChange={(g) => {
            setGroup(g);
            setQuery("");
          }}
          options={[
            { id: "resurs", label: `${t("resources")} · ${libItems("resurs", rows ?? []).length}` },
            { id: "guide", label: `${t("guides")} · ${libItems("guide", rows ?? []).length}` },
          ]}
        />
        <input className="nxa-filter" value={query} placeholder={t("filter")} aria-label={t("filter")} onChange={(e) => setQuery(e.target.value)} />
      </div>
      {!rows ? (
        <Card>
          <Skeleton lines={6} />
        </Card>
      ) : shown.length === 0 ? (
        <Card>
          <Empty icon={<IconLibrary size={26} />} text={t("no_results")} />
        </Card>
      ) : (
        <Card>
          <div className="nxa-list">
            {shown.map((item) => (
              <button key={item.id} type="button" className="nxa-list-row" onClick={() => setId(item.id)}>
                <span>
                  <b>{item.title}</b>
                  <small dir="ltr">{group === "resurs" ? `/resurslar/${item.id}` : `/guides/${item.id}`}</small>
                </span>
                {item.custom ? <em className="nxa-pill is-ready">{t("custom")}</em> : null}
                <LangDots filled={hasRow(rows, libSlug(group, item.id))} />
                <IconChevron size={17} className="nxa-ic nxa-flip" />
              </button>
            ))}
          </div>
        </Card>
      )}
      <NewPageCard
        fresh={fresh}
        setFresh={setFresh}
        busy={busy}
        onAdd={() => {
          const name = fresh.trim();
          if (!name) return;
          let next = slugifyLesson(name);
          if (items.some((item) => item.id === next)) next = `${next}-2`.slice(0, 48);
          run({ privacy: [{ slug: libSlug(group, next), lang: "az", title: name, updated_label: "200", body: "" }] }, async () => {
            setFresh("");
            await reload();
            setId(next);
          });
        }}
      />
    </div>
  );
}

function LibForm({ group, id, onBack }: { group: LibGroup; id: string; onBack: () => void }) {
  const { t, rows, reload } = useStudio();
  const { busy, run } = useSaver();
  const [lang, setLang] = useState<Lang>("az");
  const [form, setForm] = useState({ title: "", body: "" });
  const watch = useDirty(form);
  const custom = !LIB_GROUPS[group].pages.some((item) => item.id === id);
  const path = group === "resurs" ? `/resurslar/${id}` : `/guides/${id}`;

  useEffect(() => {
    const saved = savedLib(group, id, lang, rows ?? []);
    const fallback = libDefaults(group, id, lang);
    const next = { title: saved?.title || fallback.title, body: saved?.body ?? fallback.body };
    setForm(next);
    watch.reset(next);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, lang, group, rows]);

  return (
    <form
      className="nxa-stack"
      onSubmit={(event) => {
        event.preventDefault();
        run({ privacy: [{ slug: libSlug(group, id), lang, title: form.title.trim(), updated_label: "0", body: form.body }] }, reload);
      }}
    >
      <Card
        title={form.title || id}
        sub={<span dir="ltr">{path}</span>}
        actions={
          <>
            <button type="button" className="nxa-btn is-ghost is-sm" onClick={onBack}>
              <IconBack size={15} className="nxa-ic nxa-flip" />
              {t("back_all")}
            </button>
            <a className="nxa-btn is-ghost is-sm" href={path} target="_blank" rel="noreferrer">
              <IconExternal size={15} />
              {t("open_live")}
            </a>
          </>
        }
      >
        <LangTabs lang={lang} setLang={setLang} filled={hasRow(rows, libSlug(group, id))} />
        <div className="nxa-form">
          <Field label={t("title")} wide>
            <input value={form.title} dir={dirFor(lang)} required onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </Field>
          <Field label={t("body")} wide hint={`${form.body.length} ${t("chars")}`}>
            <textarea rows={16} value={form.body} dir={dirFor(lang)} placeholder={t("empty_lang")} onChange={(e) => setForm({ ...form, body: e.target.value })} />
          </Field>
        </div>
      </Card>
      <SaveBar busy={busy} dirty={watch.dirty} disabled={!form.title.trim()}>
        {custom ? (
          <ConfirmDelete
            busy={busy}
            label={t("delete_page")}
            onConfirm={() =>
              run({ dropSlug: libSlug(group, id) }, async () => {
                await reload();
                onBack();
              })
            }
          />
        ) : null}
      </SaveBar>
    </form>
  );
}
