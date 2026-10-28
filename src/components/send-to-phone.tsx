import { useState } from "react";
import { Smartphone, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/locale-path";
import { packLink, QR_MAX_LINK } from "@/lib/phone-link";

const T: Record<Lang, { send: string; scan: string; big: string; share: string; close: string }> = {
  az: { send: "Telefona göndər", scan: "Telefonun kamerası ilə skan edin. Məlumat linkin içindədir, serverə yüklənmir.", big: "Fayl QR üçün böyükdür (təqribən 2 KB-a qədər mətn/qeyd sığır). Paylaş düyməsi ilə göndərin.", share: "Paylaş", close: "Bağla" },
  en: { send: "Send to phone", scan: "Scan with your phone camera. The data is inside the link and is not uploaded to a server.", big: "Too big for a QR (about 2 KB of text/notes fits). Use Share instead.", share: "Share", close: "Close" },
  tr: { send: "Telefona gönder", scan: "Telefon kamerasıyla tarayın. Veri bağlantının içindedir, sunucuya yüklenmez.", big: "QR için çok büyük (yaklaşık 2 KB metin/not sığar). Paylaş ile gönderin.", share: "Paylaş", close: "Kapat" },
  ar: { send: "أرسل إلى الهاتف", scan: "امسح بكاميرا الهاتف. البيانات داخل الرابط ولا تُرفع إلى خادم.", big: "الملف كبير على رمز QR (يتسع لنحو 2 KB من النص). استخدم المشاركة.", share: "مشاركة", close: "إغلاق" },
  ru: { send: "Отправить на телефон", scan: "Отсканируйте камерой телефона. Данные внутри ссылки и не загружаются на сервер.", big: "Слишком большой для QR (помещается ~2 КБ текста). Используйте «Поделиться».", share: "Поделиться", close: "Закрыть" },
};

/** «Telefona göndər» via Nibras QR: small notes/files ride in the link fragment; larger ones fall back to Web Share. */
export function SendToPhone({ blob, name, className }: { blob: Blob; name: string; className?: string }) {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [state, setState] = useState<{ png?: string; link?: string; big?: boolean } | null>(null);
  const go = async () => {
    const d = new Uint8Array(await blob.arrayBuffer());
    const link = d.length < 64 * 1024 ? packLink(location.origin, localeHref(lang, "/qr"), { n: name, t: blob.type, d }) : "";
    if (!link || link.length > QR_MAX_LINK) return setState({ big: true });
    const QR = (await import("qrcode")).default;
    setState({ link, png: await QR.toDataURL(link, { margin: 2, width: 320 }) });
  };
  const share = async () => { try { await navigator.share({ files: [new File([blob], name, { type: blob.type })], title: name }); } catch { /* cancelled */ } };
  return (
    <>
      <button type="button" className={className} onClick={() => void go()} data-testid="send-phone"><Smartphone className="me-1 inline size-4" />{t.send}</button>
      {state ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4" onClick={() => setState(null)}>
          <div className="w-full max-w-sm rounded-2xl border border-border bg-bg-elevated p-4 text-center" onClick={(e) => e.stopPropagation()} data-nosnippet>
            <div className="mb-2 flex items-center justify-between font-semibold">{t.send}<button type="button" aria-label={t.close} onClick={() => setState(null)}><X className="size-4" /></button></div>
            {state.png ? (<><img src={state.png} alt="QR" width={320} height={320} className="mx-auto rounded-lg bg-white" data-testid="send-phone-qr" /><p className="mt-2 text-xs text-muted">{t.scan}</p></>) : (
              <><p className="text-sm text-amber-200">{t.big}</p>{typeof navigator !== "undefined" && "share" in navigator ? <button type="button" className="mt-3 rounded-xl border border-white/15 px-3 py-1.5 text-sm" onClick={() => void share()}>{t.share}</button> : null}</>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
}
