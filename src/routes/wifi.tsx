import { useEffect, useState } from "react";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";
import { SEARCH_FAQ } from "@/lib/search-faq";

export const Route = createFileRoute("/wifi")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/wifi"), replace: true });
  },
  component: WifiPage,
});

const COPY: Record<Lang, { h1: string; lead: string; ssid: string; password: string; security: string; wpa: string; wep: string; open: string; download: string }> = {
  az: { h1: "Wi-Fi QR", lead: "Şəbəkə adını və şifrəni QR koda çevir. Qonaq skan edib qoşulsun. Pulsuz, şifrə brauzerdən çıxmır.", ssid: "Şəbəkə adı", password: "Şifrə", security: "Qoruma", wpa: "WPA", wep: "WEP", open: "Şifrəsiz", download: "Yüklə" },
  en: { h1: "Wi-Fi QR", lead: "Turn a network name and password into a QR code. A guest scans it and joins. Free, the password stays in your browser.", ssid: "Network name", password: "Password", security: "Security", wpa: "WPA", wep: "WEP", open: "No password", download: "Download" },
  tr: { h1: "Wi-Fi QR", lead: "Ağ adını ve şifreyi QR koda çevir. Konuk tarayıp bağlansın. Ücretsiz, şifre tarayıcıdan çıkmaz.", ssid: "Ağ adı", password: "Şifre", security: "Koruma", wpa: "WPA", wep: "WEP", open: "Şifresiz", download: "İndir" },
  ar: { h1: "رمز QR لـ Wi-Fi", lead: "حوّل اسم الشبكة وكلمة المرور إلى رمز QR. يمسحه الضيف ويتصل. مجاناً، وكلمة المرور تبقى في المتصفح.", ssid: "اسم الشبكة", password: "كلمة المرور", security: "الحماية", wpa: "WPA", wep: "WEP", open: "بلا كلمة مرور", download: "تنزيل" },
  ru: { h1: "Wi-Fi QR", lead: "Превратите имя сети и пароль в QR-код. Гость сканирует и подключается. Бесплатно, пароль остаётся в браузере.", ssid: "Имя сети", password: "Пароль", security: "Защита", wpa: "WPA", wep: "WEP", open: "Без пароля", download: "Скачать" },
};

function payload(ssid: string, password: string, security: string) {
  const esc = (value: string) => value.replace(/([\\;,:"])/g, "\\$1");
  const auth = security === "nopass" ? "nopass" : security;
  const pass = auth === "nopass" ? "" : `P:${esc(password)};`;
  return `WIFI:T:${auth};S:${esc(ssid)};${pass}H:false;;`;
}

export function WifiPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  const faq = SEARCH_FAQ["/wifi"];
  const [ssid, setSsid] = useState("");
  const [password, setPassword] = useState("");
  const [security, setSecurity] = useState("WPA");
  const [url, setUrl] = useState("");

  useEffect(() => {
    if (!ssid.trim()) {
      setUrl("");
      return;
    }
    let stop = false;
    void import("qrcode").then((mod) => {
      const QR = mod.default as { toDataURL: (text: string, opts: { margin: number; width: number }) => Promise<string> };
      return QR.toDataURL(payload(ssid.trim(), password, security), { margin: 1, width: 320 });
    }).then((next) => {
      if (!stop) setUrl(next);
    }).catch(() => {
      if (!stop) setUrl("");
    });
    return () => {
      stop = true;
    };
  }, [ssid, password, security]);

  return (
    <main className="files-page mx-auto w-full max-w-3xl px-4 pt-28 pb-16 md:px-6">
      <header className="mb-6">
        <h1 className="font-display text-2xl font-bold tracking-tight md:text-4xl">{copy.h1}</h1>
        <p className="mt-1 text-sm text-muted">{copy.lead}</p>
      </header>
      <div className="mb-4 grid gap-3">
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.ssid}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" value={ssid} onChange={(event) => setSsid(event.target.value)} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.password}</span>
          <input className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" value={password} onChange={(event) => setPassword(event.target.value)} disabled={security === "nopass"} />
        </label>
        <label className="text-sm">
          <span className="mb-1 block text-muted">{copy.security}</span>
          <select className="w-full rounded-xl border border-white/15 bg-white/5 px-3 py-2" value={security} onChange={(event) => setSecurity(event.target.value)}>
            <option value="WPA">{copy.wpa}</option>
            <option value="WEP">{copy.wep}</option>
            <option value="nopass">{copy.open}</option>
          </select>
        </label>
      </div>
      {url ? (
        <div className="mb-8 flex flex-col items-start gap-3">
          <img src={url} alt="" width={220} height={220} className="rounded-2xl bg-white p-3" />
          <a className="rounded-xl bg-[#2f6bff] px-4 py-2 text-sm font-semibold text-white" href={url} download="wifi-qr.png">{copy.download}</a>
        </div>
      ) : null}
      <section className="space-y-3" aria-labelledby="wifi-faq">
        <h2 id="wifi-faq" className="text-base font-semibold">{faq.title[lang]}</h2>
        {faq.items[lang].map((item) => (
          <div key={item.q}>
            <h3 className="text-sm font-semibold">{item.q}</h3>
            <p className="mt-1 text-sm text-muted">{item.a}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
