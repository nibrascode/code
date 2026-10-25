import { useEffect, useState } from "react";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import { KitShell, save, ui } from "./shell";

const T: Record<Lang, Record<string, string>> = {
  az: { first: "Ad", last: "Soyad", phone: "Telefon", phone2: "İkinci telefon", email: "Email", org: "Şirkət", job: "Vəzifə", site: "Sayt", addr: "Ünvan", note: "Qeyd", png: "PNG yüklə", svg: "SVG yüklə", vcf: ".vcf fayl yüklə", need: "Ən azı ad və ya telefon yazın.", more: "Loqo, rəng və çərçivə üçün Nibras QR", app: "Nibras QR Android tətbiqi", long: "Məlumat çoxdur: QR sıxlaşır. Qeydi qısaldın." },
  en: { first: "First name", last: "Last name", phone: "Phone", phone2: "Second phone", email: "Email", org: "Company", job: "Job title", site: "Website", addr: "Address", note: "Note", png: "Download PNG", svg: "Download SVG", vcf: "Download .vcf file", need: "Enter at least a name or a phone.", more: "Logo, colors and frames in Nibras QR", app: "Nibras QR Android app", long: "Lots of data: the QR gets dense. Shorten the note." },
  tr: { first: "Ad", last: "Soyad", phone: "Telefon", phone2: "İkinci telefon", email: "E-posta", org: "Şirket", job: "Unvan", site: "Web sitesi", addr: "Adres", note: "Not", png: "PNG indir", svg: "SVG indir", vcf: ".vcf dosyası indir", need: "En az ad veya telefon yazın.", more: "Logo, renk ve çerçeve için Nibras QR", app: "Nibras QR Android uygulaması", long: "Veri çok: QR sıklaşır. Notu kısaltın." },
  ar: { first: "الاسم", last: "اسم العائلة", phone: "الهاتف", phone2: "هاتف ثانٍ", email: "البريد", org: "الشركة", job: "المسمى الوظيفي", site: "الموقع", addr: "العنوان", note: "ملاحظة", png: "تنزيل PNG", svg: "تنزيل SVG", vcf: "تنزيل ملف .vcf", need: "اكتب الاسم أو الهاتف على الأقل.", more: "الشعار والألوان والإطار في Nibras QR", app: "تطبيق Nibras QR لأندرويد", long: "البيانات كثيرة: يصبح الرمز كثيفاً. اختصر الملاحظة." },
  ru: { first: "Имя", last: "Фамилия", phone: "Телефон", phone2: "Второй телефон", email: "Email", org: "Компания", job: "Должность", site: "Сайт", addr: "Адрес", note: "Заметка", png: "Скачать PNG", svg: "Скачать SVG", vcf: "Скачать файл .vcf", need: "Укажите хотя бы имя или телефон.", more: "Логотип, цвета и рамка — в Nibras QR", app: "Android-приложение Nibras QR", long: "Много данных: QR становится плотным. Сократите заметку." },
};
const KEYS = ["first", "last", "phone", "phone2", "email", "org", "job", "site", "addr", "note"] as const;
type Form = Record<(typeof KEYS)[number], string>;
const esc = (v: string) => v.replace(/\\/g, "\\\\").replace(/\n/g, "\\n").replace(/([,;])/g, "\\$1");
export function vcard(f: Form) {
  const L = ["BEGIN:VCARD", "VERSION:3.0", `N:${esc(f.last)};${esc(f.first)};;;`, `FN:${esc(`${f.first} ${f.last}`.trim() || f.org)}`];
  if (f.org) L.push(`ORG:${esc(f.org)}`);
  if (f.job) L.push(`TITLE:${esc(f.job)}`);
  if (f.phone) L.push(`TEL;TYPE=CELL:${f.phone.replace(/[^\d+]/g, "")}`);
  if (f.phone2) L.push(`TEL;TYPE=WORK:${f.phone2.replace(/[^\d+]/g, "")}`);
  if (f.email) L.push(`EMAIL:${f.email.trim()}`);
  if (f.site) L.push(`URL:${f.site.trim()}`);
  if (f.addr) L.push(`ADR:;;${esc(f.addr)};;;;`);
  if (f.note) L.push(`NOTE:${esc(f.note)}`);
  L.push("END:VCARD");
  return L.join("\r\n");
}

export function VcardPage() {
  const { lang } = useI18n();
  const t = T[lang] ?? T.en;
  const [f, setF] = useState<Form>(() => Object.fromEntries(KEYS.map((k) => [k, ""])) as Form);
  const [png, setPng] = useState("");
  const [svg, setSvg] = useState("");
  const ok = Boolean(f.first.trim() || f.last.trim() || f.phone.trim() || f.org.trim());
  const text = ok ? vcard(f) : "";
  useEffect(() => {
    if (!text) { setPng(""); setSvg(""); return; }
    let stop = false;
    void import("qrcode").then(async (mod) => {
      const QR = mod.default as unknown as { toDataURL: (s: string, o: object) => Promise<string>; toString: (s: string, o: object) => Promise<string> };
      const [p, s] = await Promise.all([QR.toDataURL(text, { margin: 2, width: 720, errorCorrectionLevel: "M" }), QR.toString(text, { type: "svg", margin: 2, errorCorrectionLevel: "M" })]);
      if (!stop) { setPng(p); setSvg(s); }
    }).catch(() => { if (!stop) setPng(""); });
    return () => { stop = true; };
  }, [text]);
  const name = (`${f.first}-${f.last}`.replace(/^-|-$/g, "") || "contact").replace(/[^\p{L}\p{N}-]+/gu, "_");
  return (
    <KitShell path="/vcard" lang={lang} icon="/apps/nibras-qr-v2.jpg" next={["/qr", "/wifi", "/pdf/invoice"]}>
      <div className="grid gap-6 md:grid-cols-[1fr_16rem]">
        <div className="grid gap-3 sm:grid-cols-2">
          {KEYS.map((k) => (
            <label key={k} className={`text-sm ${k === "addr" || k === "note" ? "sm:col-span-2" : ""}`}>
              <span className="mb-1 block text-muted">{t[k]}</span>
              <input className={ui.field} type={k === "email" ? "email" : k.startsWith("phone") ? "tel" : k === "site" ? "url" : "text"} value={f[k]} onChange={(e) => setF((s) => ({ ...s, [k]: e.target.value }))} data-testid={`vc-${k}`} />
            </label>
          ))}
        </div>
        <div className="flex flex-col items-start gap-3">
          {png ? <img src={png} alt="" width={240} height={240} className="rounded-2xl bg-white p-2" data-testid="vc-qr" /> : <div className="grid size-60 place-items-center rounded-2xl border border-dashed border-white/20 p-4 text-center text-xs text-muted">{t.need}</div>}
          {text.length > 600 ? <p className="text-xs text-amber-400">{t.long}</p> : null}
          {png ? (
            <>
              <a className={ui.primary} href={png} download={`${name}-qr.png`}>{t.png}</a>
              <button type="button" className={ui.btn} onClick={() => save(`${name}-qr.svg`, new Blob([svg], { type: "image/svg+xml" }))}>{t.svg}</button>
              <button type="button" className={ui.btn} onClick={() => save(`${name}.vcf`, new Blob([text], { type: "text/vcard" }))}>{t.vcf}</button>
            </>
          ) : null}
          <a className="text-sm text-muted underline" href={localeHref(lang, "/qr")}>{t.more}</a>
          <a className="text-sm text-muted underline" href={localeHref(lang, "/apps/nibras-qr")}>{t.app}</a>
        </div>
      </div>
    </KitShell>
  );
}
