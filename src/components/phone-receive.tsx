import { useEffect, useState } from "react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";
import { unpackHash, type Packet } from "@/lib/phone-link";
import { addRecent } from "@/lib/recent-files";

const T: Record<Lang, { got: string; dl: string; saved: string }> = {
  az: { got: "Kompüterdən gələn fayl", dl: "Yüklə", saved: "«Son fayllarım»-a da yazıldı." },
  en: { got: "File sent from your computer", dl: "Download", saved: "Also saved to «My recent files»." },
  tr: { got: "Bilgisayardan gelen dosya", dl: "İndir", saved: "«Son dosyalarım»a da kaydedildi." },
  ar: { got: "ملف مُرسل من حاسوبك", dl: "تنزيل", saved: "حُفظ أيضاً في «ملفاتي الأخيرة»." },
  ru: { got: "Файл с вашего компьютера", dl: "Скачать", saved: "Также сохранён в «Мои недавние файлы»." },
};

/** Shows a note/file packed into /qr#get=… by «Telefona göndər». */
export function PhoneReceive() {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [p, setP] = useState<Packet | null>(null);
  useEffect(() => {
    const read = () => { const x = unpackHash(location.hash); setP(x); if (x) void addRecent(new Blob([x.d as BlobPart], { type: x.t }), x.n, "phone"); };
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, []);
  if (!p) return null;
  const blob = new Blob([p.d as BlobPart], { type: p.t || "application/octet-stream" });
  const isText = p.t.startsWith("text/") || /\.(txt|md)$/i.test(p.n);
  const dl = () => { const u = URL.createObjectURL(blob); const a = Object.assign(document.createElement("a"), { href: u, download: p.n }); a.click(); setTimeout(() => URL.revokeObjectURL(u), 2000); };
  return (
    <section className="mb-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 p-4" data-testid="phone-receive" data-nosnippet>
      <div className="text-sm font-semibold">{t.got}: {p.n}</div>
      {isText ? <textarea readOnly dir="auto" className="mt-2 h-40 w-full rounded-xl bg-black/30 p-2 font-mono text-sm" value={new TextDecoder().decode(p.d)} /> : null}
      <div className="mt-2 flex items-center gap-3"><button type="button" className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white" onClick={dl}>{t.dl}</button><span className="text-xs text-muted">{t.saved}</span></div>
    </section>
  );
}
