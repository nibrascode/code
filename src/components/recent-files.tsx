import { useEffect, useState } from "react";
import { Clock, Trash2 } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";
import { getRecent, listRecent, removeRecent, RECENT_EVENT, type RecentMeta } from "@/lib/recent-files";

const T: Record<Lang, { title: string; hint: string; open: string; del: string; clear: string }> = {
  az: { title: "Son fayllarım", hint: "Hesabsız, yalnız bu brauzerdə saxlanır. Yenidən yükləmədən açın.", open: "Aç", del: "Sil", clear: "Hamısını sil" },
  en: { title: "My recent files", hint: "No account, kept only in this browser. Open again without re-uploading.", open: "Open", del: "Delete", clear: "Clear all" },
  tr: { title: "Son dosyalarım", hint: "Hesapsız, yalnızca bu tarayıcıda saklanır. Yeniden yüklemeden açın.", open: "Aç", del: "Sil", clear: "Tümünü sil" },
  ar: { title: "ملفاتي الأخيرة", hint: "بلا حساب، تُحفظ في هذا المتصفح فقط. افتحها دون رفع من جديد.", open: "فتح", del: "حذف", clear: "حذف الكل" },
  ru: { title: "Мои недавние файлы", hint: "Без аккаунта, хранятся только в этом браузере. Открывайте без повторной загрузки.", open: "Открыть", del: "Удалить", clear: "Очистить" },
};

const kb = (n: number) => (n < 1024 * 1024 ? `${Math.max(1, Math.round(n / 1024))} KB` : `${(n / 1048576).toFixed(1)} MB`);

/** Lists recent files; `accept` filters by MIME prefix or extension (e.g. "application/pdf,.pdf"). */
export function RecentFiles({ accept, onPick, limit = 6 }: { accept?: string; onPick: (f: File) => void; limit?: number }) {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [list, setList] = useState<RecentMeta[]>([]);
  useEffect(() => {
    const load = () => void listRecent().then(setList);
    load();
    window.addEventListener(RECENT_EVENT, load);
    return () => window.removeEventListener(RECENT_EVENT, load);
  }, []);
  const rules = (accept ?? "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
  const ok = (m: RecentMeta) => !rules.length || rules.some((r) => (r.startsWith(".") ? m.name.toLowerCase().endsWith(r) : r.endsWith("/*") ? m.type.startsWith(r.slice(0, -1)) : m.type === r));
  const shown = list.filter(ok).slice(0, limit);
  if (!shown.length) return null;
  return (
    <section className="my-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3" data-testid="recent-files" data-nosnippet>
      <div className="mb-2 flex items-center gap-2 text-sm font-semibold"><Clock className="size-4" />{t.title}
        <button type="button" className="ms-auto text-xs font-normal text-muted hover:text-fg" onClick={() => void removeRecent()}>{t.clear}</button>
      </div>
      <p className="mb-2 text-xs text-muted">{t.hint}</p>
      <ul className="space-y-1">
        {shown.map((m) => (
          <li key={m.id} className="flex items-center gap-2 text-sm">
            <button type="button" className="min-w-0 flex-1 truncate rounded-lg px-2 py-1 text-start hover:bg-white/10" title={m.name} onClick={async () => { const f = await getRecent(m.id); if (f) onPick(f); }} data-testid="recent-open">
              {m.name} <span className="text-xs text-muted">· {kb(m.size)} · {new Date(m.at).toLocaleDateString(lang)}</span>
            </button>
            <button type="button" aria-label={t.del} className="rounded p-1 text-muted hover:text-red-300" onClick={() => void removeRecent(m.id)}><Trash2 className="size-3.5" /></button>
          </li>
        ))}
      </ul>
    </section>
  );
}
