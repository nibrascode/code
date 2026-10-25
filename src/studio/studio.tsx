/** Nibras Studio: the full-screen IDE. Projects are the same as Workspace (same localStorage key). */
import { useCallback, useEffect, useState } from "react";
import { Code2, FolderOpen, Plus, Smartphone, Sparkles, Trash2, Zap } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { WS } from "@/workspace/i18n";
import { StudioIDE } from "./studio-ide";
import { ConfirmDialog } from "./confirm";
import { ToolsLegalLinks } from "@/legal/tools-legal";
import { ago, blank, dropProjectData, loadProjects, persistProjects, type Project } from "@/workspace/workspace";

const S = {
  az: { h1: "Nibras Studio", dTitle: "Layihə silinsin?", dBody: "«{n}» və onun bütün nüsxələri bu brauzerdən həmişəlik silinəcək. Bunu geri qaytarmaq olmur.", cancel: "Ləğv et", delP: "Layihəni sil", lead: "Brauzerdə tam kod redaktoru: fayllar və qovluqlar, rəngli kod, telefon çərçivəsində canlı önizləmə. Bir kliklə ZIP, Nibras Dev linki və ya Android APK.", name: "Layihənin adı", create: "Yeni layihə", recent: "Layihələr", empty: "Hələ layihə yoxdur — adını yazıb başlayın.", open: "Aç", del: "Sil", confirm: "Bu layihə silinsin?", back: "Layihələr", ws: "Workspace-də aç", local: "Layihələr yalnız bu brauzerdə saxlanır və Workspace ilə ortaqdır. Serverə heç nə yüklənmir.", f1: "CodeMirror redaktoru", f2: "Canlı telefon önizləməsi", f3: "ZIP · Nibras Dev · APK", files: "fayl", untitled: "Saytım" },
  en: { h1: "Nibras Studio", dTitle: "Delete project?", dBody: "“{n}” and all its snapshots will be permanently removed from this browser. This cannot be undone.", cancel: "Cancel", delP: "Delete project", lead: "A full code editor in your browser: files and folders, syntax highlighting, live preview in a phone frame. One click to a ZIP, a Nibras Dev link or an Android APK.", name: "Project name", create: "New project", recent: "Projects", empty: "No projects yet — type a name to start.", open: "Open", del: "Delete", confirm: "Delete this project?", back: "Projects", ws: "Open in Workspace", local: "Projects are stored only in this browser and shared with Workspace. Nothing is uploaded.", f1: "CodeMirror editor", f2: "Live phone preview", f3: "ZIP · Nibras Dev · APK", files: "files", untitled: "My site" },
  tr: { h1: "Nibras Studio", dTitle: "Proje silinsin mi?", dBody: "“{n}” ve tüm kopyaları bu tarayıcıdan kalıcı olarak silinecek. Geri alınamaz.", cancel: "İptal", delP: "Projeyi sil", lead: "Tarayıcıda tam kod editörü: dosyalar ve klasörler, renkli kod, telefon çerçevesinde canlı önizleme. Tek tıkla ZIP, Nibras Dev bağlantısı ya da Android APK.", name: "Proje adı", create: "Yeni proje", recent: "Projeler", empty: "Henüz proje yok — bir ad yazıp başlayın.", open: "Aç", del: "Sil", confirm: "Bu proje silinsin mi?", back: "Projeler", ws: "Workspace'te aç", local: "Projeler yalnızca bu tarayıcıda saklanır ve Workspace ile ortaktır. Hiçbir şey yüklenmez.", f1: "CodeMirror editörü", f2: "Canlı telefon önizlemesi", f3: "ZIP · Nibras Dev · APK", files: "dosya", untitled: "Sitem" },
  ar: { h1: "Nibras Studio", dTitle: "حذف المشروع؟", dBody: "سيُحذف «{n}» وجميع نسخه نهائياً من هذا المتصفح. لا يمكن التراجع.", cancel: "إلغاء", delP: "حذف المشروع", lead: "محرر كود كامل في المتصفح: ملفات ومجلدات وتلوين للكود ومعاينة حيّة داخل إطار هاتف. بنقرة واحدة: ZIP أو رابط Nibras Dev أو APK لأندرويد.", name: "اسم المشروع", create: "مشروع جديد", recent: "المشاريع", empty: "لا مشاريع بعد — اكتب اسماً وابدأ.", open: "فتح", del: "حذف", confirm: "حذف هذا المشروع؟", back: "المشاريع", ws: "افتح في Workspace", local: "تُحفظ المشاريع في هذا المتصفح فقط وهي مشتركة مع Workspace. لا يُرفع أي شيء.", f1: "محرر CodeMirror", f2: "معاينة حيّة على الهاتف", f3: "ZIP · Nibras Dev · APK", files: "ملفات", untitled: "موقعي" },
  ru: { h1: "Nibras Studio", dTitle: "Удалить проект?", dBody: "«{n}» и все его снимки будут навсегда удалены из этого браузера. Отменить нельзя.", cancel: "Отмена", delP: "Удалить проект", lead: "Полноценный редактор кода в браузере: файлы и папки, подсветка, живой просмотр в рамке телефона. Один клик — ZIP, ссылка Nibras Dev или Android APK.", name: "Название проекта", create: "Новый проект", recent: "Проекты", empty: "Проектов пока нет — введите название.", open: "Открыть", del: "Удалить", confirm: "Удалить проект?", back: "Проекты", ws: "Открыть в Workspace", local: "Проекты хранятся только в этом браузере и общие с Workspace. Ничего не загружается.", f1: "Редактор CodeMirror", f2: "Живой просмотр на телефоне", f3: "ZIP · Nibras Dev · APK", files: "файлов", untitled: "Мой сайт" },
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
    <main className="studio-page mx-auto w-full max-w-6xl px-3 pt-24 pb-16 md:px-6 md:pt-28" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="studio">
      {dialog}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-[radial-gradient(ellipse_at_top_left,#1d2f6b_0%,#0b1020_55%)] p-6 md:p-10">
        <div className="pointer-events-none absolute -end-24 -top-24 size-80 rounded-full bg-[#7a5cff]/25 blur-3xl" />
        <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-[#c8d1ea]"><Sparkles className="size-3.5 text-[#7aa2ff]" /> HTML · CSS · JavaScript</span>
        <h1 className="mt-4 flex items-center gap-3 font-display text-4xl font-bold tracking-tight md:text-6xl"><Code2 className="size-10 text-[#2f6bff] md:size-14" /> {t.h1}</h1>
        <p className="mt-3 max-w-2xl text-[15px] text-[#c8d1ea] md:text-lg">{t.lead}</p>
        <ul className="mt-4 flex flex-wrap gap-2 text-[13px] text-[#dfe6ff]">
          <li className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1"><Code2 className="size-3.5 text-[#ffd479]" /> {t.f1}</li>
          <li className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1"><Smartphone className="size-3.5 text-emerald-300" /> {t.f2}</li>
          <li className="inline-flex items-center gap-1.5 rounded-lg bg-white/5 px-2.5 py-1"><Zap className="size-3.5 text-[#7aa2ff]" /> {t.f3}</li>
        </ul>
        <form className="mt-6 flex max-w-xl flex-col gap-2 sm:flex-row" onSubmit={(e) => { e.preventDefault(); create(); }}>
          <input className="min-h-12 flex-1 rounded-xl border border-white/15 bg-black/30 px-4 text-[15px] outline-none focus:border-[#2f6bff]" placeholder={t.name} value={name} onChange={(e) => setName(e.target.value)} maxLength={80} data-testid="studio-name" aria-label={t.name} />
          <button className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#2f6bff] px-5 font-semibold text-white shadow-[0_10px_30px_-10px_#2f6bff] hover:bg-[#3d77ff]" type="submit" data-testid="studio-create"><Plus className="size-5" /> {t.create}</button>
        </form>
        <p className="mt-3 text-xs text-[#7d89a8]">{t.local}</p>
      </section>
      <h2 className="mb-3 mt-8 text-lg font-semibold">{t.recent}</h2>
      {list === null ? null : sorted.length ? (
        <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" data-testid="studio-list">
          {sorted.map((p) => (
            <li key={p.id} className="group relative rounded-2xl border border-white/10 bg-[#0c1120] p-4 hover:border-[#2f6bff]/60">
              <button className="block w-full text-start" onClick={() => go(p.id)} data-testid="studio-open">
                <div className="mb-3 flex h-20 items-end gap-1 overflow-hidden rounded-xl bg-[#070b16] p-2 font-mono text-[10px] leading-tight text-[#5d6b8a]" dir="ltr">
                  <pre className="truncate">{(p.files.find((f) => f.name === p.activeFile) ?? p.files[0])?.content.split("\n").slice(0, 5).join("\n")}</pre>
                </div>
                <div className="flex items-center gap-2 font-semibold"><FolderOpen className="size-4 text-[#7aa2ff]" /><span className="truncate">{p.name}</span></div>
                <div className="mt-1 text-xs text-[#7d89a8]">{p.files.length} {t.files} · {ago(p.updatedAt, c)}</div>
              </button>
              <button className="absolute end-3 top-3 rounded-lg p-1.5 text-[#7d89a8] opacity-100 hover:bg-white/10 hover:text-red-300 md:opacity-0 md:group-hover:opacity-100" onClick={() => remove(p)} aria-label={t.del} title={t.del} data-testid="studio-del"><Trash2 className="size-4" /></button>
            </li>
          ))}
        </ul>
      ) : <p className="rounded-2xl border border-dashed border-white/15 p-6 text-center text-sm text-[#7d89a8]">{t.empty}</p>}
      <footer className="mt-12 border-t border-white/10 pt-4"><ToolsLegalLinks version /></footer>
    </main>
  );
}
