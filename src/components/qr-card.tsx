import { useState } from "react";
import { QR_CARD_I18N } from "@/lib/qr-card-i18n";

type L = keyof typeof QR_CARD_I18N;
type Field = { k: string; f: string; ph?: string; phk?: string; req?: boolean; area?: boolean };
const KINDS: { id: string; icon: string; fields: Field[] }[] = [
  { id: "url", icon: "🔗", fields: [{ k: "url", f: "url", ph: "https://", req: true }] },
  { id: "text", icon: "✎", fields: [{ k: "text", f: "text", phk: "text", req: true, area: true }] },
  { id: "phone", icon: "☎", fields: [{ k: "phone", f: "phone", ph: "+994", req: true }] },
  { id: "email", icon: "✉", fields: [{ k: "email", f: "email", ph: "ad@mail.com", req: true }, { k: "subject", f: "subject" }, { k: "body", f: "body", area: true }] },
  { id: "whatsapp", icon: "💬", fields: [{ k: "phone", f: "phone", ph: "994501112233", req: true }, { k: "text", f: "message", area: true }] },
  { id: "wifi", icon: "📶", fields: [{ k: "ssid", f: "ssid", req: true }, { k: "password", f: "password" }] },
  { id: "vcard", icon: "👤", fields: [{ k: "firstName", f: "first", req: true }, { k: "lastName", f: "last" }, { k: "phone", f: "phone" }, { k: "email", f: "email" }, { k: "org", f: "org" }] },
  { id: "sms", icon: "💬", fields: [{ k: "phone", f: "phone", ph: "+994", req: true }, { k: "text", f: "message", area: true }] },
  { id: "location", icon: "📍", fields: [{ k: "lat", f: "lat", req: true }, { k: "lng", f: "lng", req: true }] },
  { id: "event", icon: "📅", fields: [{ k: "title", f: "evTitle", req: true }, { k: "start", f: "start", req: true }, { k: "location", f: "place" }] },
  { id: "app", icon: "▣", fields: [{ k: "url", f: "url", ph: "https://", req: true }] },
];

type D = Record<string, string>;
export function buildQrValue(kind: string, d: D): string {
  const digits = (s: string) => s.replace(/\D/g, "");
  if (kind === "url" || kind === "app") return /^https?:\/\//i.test(d.url) ? d.url : "https://" + d.url;
  if (kind === "text") return d.text;
  if (kind === "phone") return "tel:" + d.phone.replace(/[^\d+]/g, "");
  if (kind === "sms") return "sms:" + d.phone.replace(/[^\d+]/g, "") + (d.text ? "?body=" + encodeURIComponent(d.text) : "");
  if (kind === "email") return "mailto:" + d.email + (d.subject ? "?subject=" + encodeURIComponent(d.subject) : "") + (d.body ? (d.subject ? "&" : "?") + "body=" + encodeURIComponent(d.body) : "");
  if (kind === "whatsapp") return "https://wa.me/" + digits(d.phone) + (d.text ? "?text=" + encodeURIComponent(d.text) : "");
  if (kind === "wifi") return "WIFI:T:WPA;S:" + d.ssid + ";P:" + (d.password || "") + ";;";
  if (kind === "location") return "https://maps.google.com/?q=" + encodeURIComponent(d.lat + "," + d.lng);
  if (kind === "event") return ["BEGIN:VCALENDAR", "VERSION:2.0", "BEGIN:VEVENT", "SUMMARY:" + d.title, d.start ? "DTSTART:" + d.start : "", d.location ? "LOCATION:" + d.location : "", "END:VEVENT", "END:VCALENDAR"].filter(Boolean).join("\n");
  if (kind === "vcard") return ["BEGIN:VCARD", "VERSION:3.0", "N:" + (d.lastName || "") + ";" + (d.firstName || ""), "FN:" + ((d.firstName || "") + " " + (d.lastName || "")).trim(), d.phone ? "TEL:" + d.phone : "", d.email ? "EMAIL:" + d.email : "", d.org ? "ORG:" + d.org : "", "END:VCARD"].filter(Boolean).join("\n");
  return "";
}

/** QR form card shown inside the assistant. `lang` = reply language (from the ::qrform::kind@lang marker). */
export function QrCard({ lang, preset }: { lang: string; preset: string }) {
  const C = QR_CARD_I18N[(lang in QR_CARD_I18N ? lang : "az") as L];
  const dir = lang === "ar" ? "rtl" : "ltr";
  const [kind, setKind] = useState(KINDS.some((k) => k.id === preset) ? preset : "");
  const [vals, setVals] = useState<D>({});
  const [err, setErr] = useState("");
  const [shot, setShot] = useState<{ url: string; page: string } | null>(null);
  const cur = KINDS.find((k) => k.id === kind);
  const field = "w-full rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm";

  function go() {
    if (!cur) return;
    const d: D = {};
    for (const f of cur.fields) {
      d[f.k] = (vals[f.k] || "").trim();
      if (f.req && !d[f.k]) return setErr(C.missing.replace("{f}", C.f[f.f]));
    }
    const value = buildQrValue(cur.id, d);
    if (!value) return setErr(C.bad);
    const u = new URL(`https://nibrascode.com${lang === "az" ? "" : "/" + lang}/qr`);
    u.searchParams.set("type", cur.id);
    for (const [k, v] of Object.entries(d)) if (v) u.searchParams.set(k, v);
    setErr("");
    setShot({ url: "/api/qr?text=" + encodeURIComponent(value), page: u.toString() });
  }

  return (
    <div dir={dir} className="mt-2 rounded-xl border border-white/10 bg-black/20 p-3 text-sm" data-qr-card={lang}>
      <div className="flex items-center gap-2">
        <span className="grid size-8 place-items-center rounded-lg bg-white/15 text-xs font-bold">QR</span>
        <div>
          <div className="font-semibold">{C.title}</div>
          <div className="text-xs text-muted">{C.sub}</div>
        </div>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {KINDS.map((k) => (
          <button key={k.id} type="button" onClick={() => { setKind(k.id); setErr(""); setShot(null); }} className={"rounded-full border px-3 py-1 text-xs " + (k.id === kind ? "border-white bg-white text-black" : "border-white/20")}>
            {k.icon} {C.kind[k.id]}
          </button>
        ))}
      </div>
      {cur ? (
        <div className="mt-3 grid gap-2">
          {cur.fields.map((f) => {
            const label = C.f[f.f] + (f.req ? " *" : "");
            const common = { value: vals[f.k] || "", placeholder: f.ph || (f.phk && C.ph[f.phk]) || C.f[f.f], className: field, dir: "auto" as const, onChange: (e: { target: { value: string } }) => setVals((v) => ({ ...v, [f.k]: e.target.value })) };
            return (
              <label key={f.k} className="grid gap-1 text-xs text-muted">
                {label}
                {f.area ? <textarea {...common} rows={3} /> : <input {...common} />}
              </label>
            );
          })}
          <button type="button" onClick={go} className="rounded-lg bg-white/15 px-4 py-2 font-semibold">{C.go}</button>
        </div>
      ) : null}
      {err ? <div className="mt-2 text-xs text-red-300" role="alert">{err}</div> : null}
      {shot ? (
        <div className="mt-3 flex flex-col items-center gap-2">
          <img src={shot.url} alt={C.alt} width={180} height={180} className="rounded-xl bg-white p-2" />
          <div className="flex flex-wrap justify-center gap-2">
            <a href={shot.url} download="nibras-qr.png" target="_blank" rel="noopener" className="rounded-lg bg-white/15 px-3 py-1.5 text-xs font-semibold">{C.dl}</a>
            <a href={shot.page} target="_blank" rel="noopener" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs">{C.open}</a>
          </div>
        </div>
      ) : null}
    </div>
  );
}
