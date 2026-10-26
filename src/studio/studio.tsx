/** Nibras Studio: the full-screen IDE. Projects are the same as Workspace (same localStorage key). */
import { useCallback, useEffect, useState } from "react";
import { Code2, FolderOpen, Plus, Trash2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { WS } from "@/workspace/i18n";
import { StudioIDE } from "./studio-ide";
import { ConfirmDialog } from "./confirm";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { ago, blank, dropProjectData, loadProjects, persistProjects, type Project } from "@/workspace/workspace";

const S = {
  az: { h1: "Nibras Studio", dTitle: "Layihə silinsin?", dBody: "«{n}» və onun bütün nüsxələri bu brauzerdən həmişəlik silinəcək. Bunu geri qaytarmaq olmur.", cancel: "Ləğv et", delP: "Layihəni sil", lead: "Brauzerdə kod redaktoru — fayllar, canlı önizləmə, ZIP/APK.", name: "Layihənin adı", create: "Yeni layihə", recent: "Layihələr", empty: "Hələ layihə yoxdur — adını yazıb başlayın.", open: "Aç", del: "Sil", confirm: "Bu layihə silinsin?", back: "Layihələr", ws: "Workspace-də aç", local: "Yalnız bu brauzerdə · Workspace ilə ortaq.", files: "fayl", untitled: "Saytım" },
  en: { h1: "Nibras Studio", dTitle: "Delete project?", dBody: "“{n}” and all its snapshots will be permanently removed from this browser. This cannot be undone.", cancel: "Cancel", delP: "Delete project", lead: "In-browser code editor — files, live preview, ZIP/APK.", name: "Project name", create: "New project", recent: "Projects", empty: "No projects yet — type a name to start.", open: "Open", del: "Delete", confirm: "Delete this project?", back: "Projects", ws: "Open in Workspace", local: "This browser only · shared with Workspace.", files: "files", untitled: "My site" },
  tr: { h1: "Nibras Studio", dTitle: "Proje silinsin mi?", dBody: "“{n}” ve tüm kopyaları bu tarayıcıdan kalıcı olarak silinecek. Geri alınamaz.", cancel: "İptal", delP: "Projeyi sil", lead: "Tarayıcıda kod editörü — dosyalar, canlı önizleme, ZIP/APK.", name: "Proje adı", create: "Yeni proje", recent: "Projeler", empty: "Henüz proje yok — bir ad yazıp başlayın.", open: "Aç", del: "Sil", confirm: "Bu proje silinsin mi?", back: "Projeler", ws: "Workspace'te aç", local: "Yalnızca bu tarayıcıda · Workspace ile ortak.", files: "dosya", untitled: "Sitem" },
  ar: { h1: "Nibras Studio", dTitle: "حذف المشروع؟", dBody: "سيُحذف «{n}» وجميع نسخه نهائياً من هذا المتصفح. لا يمكن التراجع.", cancel: "إلغاء", delP: "حذف المشروع", lead: "محرر كود في المتصفح — ملفات ومعاينة حيّة وZIP/APK.", name: "اسم المشروع", create: "مشروع جديد", recent: "المشاريع", empty: "لا مشاريع بعد — اكتب اسماً وابدأ.", open: "فتح", del: "حذف", confirm: "حذف هذا المشروع؟", back: "المشاريع", ws: "افتح في Workspace", local: "في هذا المتصفح فقط · مشتركة مع Workspace.", files: "ملفات", untitled: "موقعي" },
  ru: { h1: "Nibras Studio", dTitle: "Удалить проект?", dBody: "«{n}» и все его снимки будут навсегда удалены из этого браузера. Отменить нельзя.", cancel: "Отмена", delP: "Удалить проект", lead: "Редактор кода в браузере — файлы, превью, ZIP/APK.", name: "Название проекта", create: "Новый проект", recent: "Проекты", empty: "Проектов пока нет — введите название.", open: "Открыть", del: "Удалить", confirm: "Удалить проект?", back: "Проекты", ws: "Открыть в Workspace", local: "Только в браузере · общее с Workspace.", files: "файлов", untitled: "Мой сайт" },
};

export function StudioPage() {
  const { lang } = useI18n();
  const t = S[lang as keyof typeof S] ?? S.en;
  const c = WS[lang] ?? WS.en;
  const [list, setList] = useState<Project[] | null>(null);
  const [openId, setOpenId] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [ask, setAsk] = useState<Project | null>(null);
  useEffect(() => {
    setList(loadProjects());
    setOpenId(new URLSearchParams(location.search).get("p"));
    // Another tab (Workspace) may edit the same projects.
    const on = (e: StorageEvent) => { if (e.key === "nibras-workspace-v1") setList(loadProjects()); };
    addEventListener("storage", on);
    return () => removeEventListener("storage", on);
  }, []);
  const go = (id: string | null) => {
    setOpenId(id);
    const u = new URL(location.href);
    if (id) u.searchParams.set("p", id); else u.searchParams.delete("p");
    history.replaceState(history.state, "", u.toString());
    scrollTo({ top: 0 });
  };
  const update = useCallback((id: string, patch: Partial<Project>, act?: string) => {
    setList((prev) => {
      if (!prev) return prev;
      const next = prev.map((p) => (p.id === id ? { ...p, ...patch, updatedAt: Date.now(), last: (act && act !== "act_edit" ? act : p.last) as Project["last"] } : p));
      persistProjects(next);
      return next;
    });
  }, []);
  const create = () => {
    const p = blank(name.trim() || t.untitled);
    p.tab = "code";
    const next = [p, ...(list ?? [])];
    setList(next); persistProjects(next); setName(""); go(p.id);
  };
  const remove = (p: Project) => setAsk(p);
  const doRemove = (p: Project) => {
    const next = loadProjects().filter((x) => x.id !== p.id);
    dropProjectData(p.id);
    setList(next); persistProjects(next); setAsk(null);
    if (openId === p.id) go(null);
  };
  const dialog = ask ? <ConfirmDialog title={t.dTitle} body={t.dBody.replace("{n}", ask.name)} ok={t.delP} cancel={t.cancel} onOk={() => doRemove(ask)} onCancel={() => setAsk(null)} /> : null;
  const current = list?.find((p) => p.id === openId) ?? null;
  const sorted = [...(list ?? [])].sort((a, b) => b.updatedAt - a.updatedAt);

  if (current) return <>{dialog}<StudioIDE key={current.id} p={current} update={(patch, act) => update(current.id, patch, act)} onHome={() => go(null)} onDelete={() => remove(current)} /></>;

  return (
    <main className="studio-page mx-auto w-full max-w-3xl px-3 pt-20 pb-8 md:px-6 md:pt-24" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="studio">
      {dialog}
      <header className="mb-3">
        <h1 className="flex items-center gap-2 font-display text-2xl font-bold tracking-tight md:text-3xl"><Code2 className="size-6 text-[#2f6bff]" /> {t.h1}</h1>
        <p className="mt-1 text-sm text-muted">{t.lead}</p>
      </header>
      <form className="flex flex-col gap-2 rounded-xl border border-white/10 bg-white/[0.04] p-2.5 sm:flex-row sm:items-center" onSubmit={(e) => { e.preventDefault(); create(); }}>
        <input className="min-h-10 flex-1 rounded-lg border border-white/15 bg-black/30 px-3 text-sm outline-none focus:border-[#2f6bff]" placeholder={t.name} value={name} onChange={(e) => setName(e.target.value)} maxLength={80} data-testid="studio-name" aria-label={t.name} />
        <button className="inline-flex min-h-10 shrink-0 items-center justify-center gap-1.5 rounded-lg bg-[#2f6bff] px-3.5 text-sm font-semibold text-white hover:bg-[#3d77ff]" type="submit" data-testid="studio-create"><Plus className="size-4" /> {t.create}</button>
      </form>
      <p className="mt-1.5 text-[11px] text-[#7d89a8]">{t.local}</p>
      <h2 className="mb-1.5 mt-4 text-sm font-semibold text-[#c8d1ea]">{t.recent}</h2>
      {list === null ? null : sorted.length ? (
        <ul className="grid gap-2" data-testid="studio-list">
          {sorted.map((p) => (
            <li key={p.id} className="group relative flex items-center gap-3 rounded-xl border border-white/10 bg-[#0c1120] px-3 py-2.5 hover:border-[#2f6bff]/60">
              <button className="min-w-0 flex-1 text-start" onClick={() => go(p.id)} data-testid="studio-open">
                <div className="flex items-center gap-2 font-semibold"><FolderOpen className="size-4 shrink-0 text-[#7aa2ff]" /><span className="truncate">{p.name}</span></div>
                <div className="mt-0.5 text-xs text-[#7d89a8]">{p.files.length} {t.files} · {ago(p.updatedAt, c)}</div>
              </button>
              <button className="rounded-lg p-1.5 text-[#7d89a8] hover:bg-white/10 hover:text-red-300" onClick={() => remove(p)} aria-label={t.del} title={t.del} data-testid="studio-del"><Trash2 className="size-4" /></button>
            </li>
          ))}
        </ul>
      ) : <p className="rounded-xl border border-dashed border-white/15 px-3 py-4 text-center text-sm text-[#7d89a8]">{t.empty}</p>}
      <footer className="mt-5 border-t border-white/10 pt-3"><ToolsLegalLinks version /></footer>
    </main>
  );
}
