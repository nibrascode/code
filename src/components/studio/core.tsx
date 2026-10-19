import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { LANGS, type Lang } from "@/lib/i18n";
import {
  deletePrivacy,
  deleteApp,
  saveApp,
  savePrivacy,
  validSession,
  type StudioAppRow,
  type StudioPrivacyRow,
  type StudioSession,
} from "@/lib/studio";
import { syncStudioToGithub } from "@/lib/studio.functions";
import { errorText, type T } from "./i18n";
import { IconAlert, IconCheck, IconClose, IconTrash } from "./icons";

export type SaveTarget = "supabase" | "github" | "both";
export type Toast = { id: number; text: string; kind: "ok" | "err" };

export type Studio = {
  t: T;
  lang: Lang;
  session: StudioSession;
  target: SaveTarget;
  apps: StudioAppRow[] | null;
  rows: StudioPrivacyRow[] | null;
  dataError: boolean;
  reload: () => Promise<void>;
  toast: (text: string, kind?: Toast["kind"]) => void;
  commit: (change: Change) => Promise<CommitResult>;
  go: (tab: string, sub?: string) => void;
};

export type Change = {
  privacy?: StudioPrivacyRow[];
  dropSlug?: string;
  app?: StudioAppRow;
  dropApp?: string;
  skipSupabase?: boolean;
};

export type CommitResult = { text: string; ok: boolean };

export const StudioContext = createContext<Studio | null>(null);

export function useStudio() {
  const ctx = useContext(StudioContext);
  if (!ctx) throw new Error("StudioContext");
  return ctx;
}

// Dəyişikliyi seçilmiş yerə yazır (Supabase, GitHub və ya hər ikisi) və nəticə cümləsini qaytarır.
export async function runCommit(t: T, target: SaveTarget, change: Change): Promise<CommitResult> {
  if (target !== "github" && !change.skipSupabase) {
    if (change.dropSlug) await deletePrivacy(change.dropSlug);
    if (change.dropApp) await deleteApp(change.dropApp);
    if (change.app) await saveApp(change.app);
    for (const row of change.privacy ?? []) await savePrivacy(row);
  }
  const base = change.dropSlug || change.dropApp ? t("deleted") : t("saved");
  if (target === "supabase") return { text: `${base} ${t("where_supabase")}`, ok: true };
  const session = await validSession();
  if (!session) throw new Error("auth");
  const privacy = change.privacy ?? [];
  // GitHub nüsxəsi hər dəfə bir sətir qəbul edir; çox sətir olanda sonuncunu göndəririk, qalanı artıq Supabase-dədir.
  const git = await syncStudioToGithub({
    data: {
      accessToken: session.access_token,
      privacy: privacy.length ? privacy[privacy.length - 1] : null,
      dropSlug: change.dropSlug ?? "",
      app: change.app ?? null,
      dropApp: change.dropApp ?? "",
    },
  }).catch(() => ({ ok: false as const, reason: "network" }));
  if (!git.ok) return { text: `${base} ${t("github_fail", { r: git.reason })}`, ok: false };
  return { text: `${base} ${target === "both" ? t("where_both") : t("where_github")}`, ok: true };
}

export function useSaver() {
  const { commit, toast, t } = useStudio();
  const [busy, setBusy] = useState(false);
  async function run(change: Change, after?: () => void | Promise<void>) {
    setBusy(true);
    try {
      const result = await commit(change);
      await after?.();
      toast(result.text, result.ok ? "ok" : "err");
      return true;
    } catch (reason) {
      toast(errorText(t, reason), "err");
      return false;
    } finally {
      setBusy(false);
    }
  }
  return { busy, run };
}

export function PageHead({ icon, title, sub, children }: { icon?: ReactNode; title: string; sub?: string; children?: ReactNode }) {
  return (
    <header className="nxa-head">
      <div className="nxa-head-text">
        {icon ? <span className="nxa-head-icon">{icon}</span> : null}
        <div>
          <h1>{title}</h1>
          {sub ? <p>{sub}</p> : null}
        </div>
      </div>
      {children ? <div className="nxa-head-actions">{children}</div> : null}
    </header>
  );
}

export function Card({ title, sub, actions, children, className }: { title?: ReactNode; sub?: ReactNode; actions?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`nxa-card${className ? ` ${className}` : ""}`}>
      {title || actions ? (
        <header className="nxa-card-head">
          <div>
            {title ? <h2>{title}</h2> : null}
            {sub ? <p>{sub}</p> : null}
          </div>
          {actions ? <div className="nxa-card-actions">{actions}</div> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

export function Field({ label, hint, children, wide }: { label: string; hint?: string; children: ReactNode; wide?: boolean }) {
  return (
    <label className={`nxa-field${wide ? " is-wide" : ""}`}>
      <span className="nxa-label">{label}</span>
      {children}
      {hint ? <small className="nxa-hint">{hint}</small> : null}
    </label>
  );
}

export function LangTabs({ lang, setLang, filled }: { lang: Lang; setLang: (lang: Lang) => void; filled?: Partial<Record<Lang, boolean>> }) {
  return (
    <div className="nxa-seg" role="tablist">
      {LANGS.map((code) => (
        <button
          key={code}
          type="button"
          role="tab"
          aria-selected={code === lang}
          className={code === lang ? "is-on" : ""}
          onClick={() => setLang(code)}
        >
          {code.toUpperCase()}
          {filled ? <i className={filled[code] ? "is-filled" : ""} aria-hidden="true" /> : null}
        </button>
      ))}
    </div>
  );
}

export function Seg<V extends string>({ value, options, onChange, label }: { value: V; options: { id: V; label: string }[]; onChange: (v: V) => void; label?: string }) {
  return (
    <div className="nxa-seg" role="group" aria-label={label}>
      {options.map((o) => (
        <button key={o.id} type="button" className={o.id === value ? "is-on" : ""} aria-pressed={o.id === value} onClick={() => onChange(o.id)}>
          {o.label}
        </button>
      ))}
    </div>
  );
}

export function ConfirmDelete({ onConfirm, label, busy }: { onConfirm: () => void; label?: string; busy?: boolean }) {
  const { t } = useStudio();
  const [ask, setAsk] = useState(false);
  if (!ask) {
    return (
      <button type="button" className="nxa-btn is-danger-ghost" disabled={busy} onClick={() => setAsk(true)}>
        <IconTrash size={17} />
        {label ?? t("delete")}
      </button>
    );
  }
  return (
    <span className="nxa-confirm" role="alertdialog">
      <span>{t("confirm_delete")}</span>
      <button type="button" className="nxa-btn is-danger" disabled={busy} onClick={() => { setAsk(false); onConfirm(); }}>
        {t("yes_delete")}
      </button>
      <button type="button" className="nxa-btn is-ghost" onClick={() => setAsk(false)}>
        {t("cancel")}
      </button>
    </span>
  );
}

export function Empty({ icon, text, children }: { icon?: ReactNode; text: string; children?: ReactNode }) {
  return (
    <div className="nxa-empty">
      {icon ? <span className="nxa-empty-icon">{icon}</span> : null}
      <p>{text}</p>
      {children}
    </div>
  );
}

export function Skeleton({ lines = 3, tall }: { lines?: number; tall?: boolean }) {
  return (
    <div className={`nxa-skel${tall ? " is-tall" : ""}`} aria-busy="true">
      {Array.from({ length: lines }, (_, i) => (
        <span key={i} style={{ width: `${92 - i * 14}%` }} />
      ))}
    </div>
  );
}

export function ErrorBox({ onRetry }: { onRetry: () => void }) {
  const { t } = useStudio();
  return (
    <div className="nxa-error">
      <IconAlert size={20} />
      <span>{t("load_error")}</span>
      <button type="button" className="nxa-btn is-ghost" onClick={onRetry}>
        {t("retry")}
      </button>
    </div>
  );
}

export function Toasts({ items, drop }: { items: Toast[]; drop: (id: number) => void }) {
  return (
    <div className="nxa-toasts" aria-live="polite">
      {items.map((item) => (
        <div key={item.id} className={`nxa-toast is-${item.kind}`}>
          {item.kind === "ok" ? <IconCheck size={18} /> : <IconAlert size={18} />}
          <span>{item.text}</span>
          <button type="button" aria-label="×" onClick={() => drop(item.id)}>
            <IconClose size={15} />
          </button>
        </div>
      ))}
    </div>
  );
}

export function useDirty<V>(value: V) {
  const base = useRef(JSON.stringify(value));
  const [, force] = useState(0);
  return {
    dirty: base.current !== JSON.stringify(value),
    reset(next: V) {
      base.current = JSON.stringify(next);
      force((n) => n + 1);
    },
  };
}

export function SaveBar({ busy, dirty, disabled, children }: { busy: boolean; dirty: boolean; disabled?: boolean; children?: ReactNode }) {
  const { t } = useStudio();
  return (
    <div className={`nxa-savebar${dirty ? " is-dirty" : ""}`}>
      <span className="nxa-savebar-state">{dirty ? t("unsaved") : ""}</span>
      <div className="nxa-savebar-actions">
        {children}
        <button className="nxa-btn is-primary" type="submit" disabled={busy || disabled}>
          {busy ? <span className="nxa-spin" aria-hidden="true" /> : null}
          {busy ? t("saving") : t("save")}
        </button>
      </div>
    </div>
  );
}

export function dirFor(lang: Lang) {
  return lang === "ar" ? "rtl" : undefined;
}

export function useCopied() {
  const [copied, setCopied] = useState(false);
  useEffect(() => {
    if (!copied) return;
    const id = setTimeout(() => setCopied(false), 1600);
    return () => clearTimeout(id);
  }, [copied]);
  return {
    copied,
    copy(text: string) {
      navigator.clipboard?.writeText(text).then(() => setCopied(true)).catch(() => {});
    },
  };
}
