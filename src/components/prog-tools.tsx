import type React from "react";
import { useMemo, useState } from "react";
import { Copy, Wrench } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

type L5 = Record<Lang, string>;
const L = (az: string, en: string, tr: string, ar: string, ru: string): L5 => ({ az, en, tr, ar, ru });

const C = {
  tool: L("Canlı alət", "Live tool", "Canlı araç", "أداة مباشرة", "Живой инструмент"),
  copy: L("Kopyala", "Copy", "Kopyala", "نسخ", "Копировать"),
  copied: L("Kopyalandı", "Copied", "Kopyalandı", "تم النسخ", "Скопировано"),
  local: L("Brauzerdə işləyir, heç nə serverə getmir.", "Runs in your browser; nothing is sent to a server.", "Tarayıcıda çalışır; hiçbir şey sunucuya gitmez.", "يعمل في المتصفح ولا يُرسل شيء إلى خادم.", "Работает в браузере, ничего не уходит на сервер."),
  rsyncT: L("rsync əmr generatoru", "rsync command generator", "rsync komut üreteci", "مولّد أوامر rsync", "Генератор команд rsync"),
  src: L("Mənbə", "Source", "Kaynak", "المصدر", "Источник"),
  dst: L("Hədəf", "Destination", "Hedef", "الوجهة", "Назначение"),
  remote: L("Uzaq server (user@host, boş = lokal)", "Remote server (user@host, empty = local)", "Uzak sunucu (user@host, boş = yerel)", "خادم بعيد (user@host، فارغ = محلي)", "Удалённый сервер (user@host, пусто = локально)"),
  dir: L("İstiqamət", "Direction", "Yön", "الاتجاه", "Направление"),
  push: L("Lokal → server", "Local → server", "Yerel → sunucu", "محلي ← خادم", "Локально → сервер"),
  pull: L("Server → lokal", "Server → local", "Sunucu → yerel", "خادم → محلي", "Сервер → локально"),
  del: L("Hədəfdə artıq faylları sil (--delete)", "Delete extra files at destination (--delete)", "Hedefteki fazla dosyaları sil (--delete)", "احذف الملفات الزائدة في الوجهة (--delete)", "Удалять лишние файлы в назначении (--delete)"),
  dry: L("Sınaq (--dry-run, heç nə dəyişmir)", "Dry run (--dry-run, changes nothing)", "Deneme (--dry-run, hiçbir şey değişmez)", "تجربة (--dry-run، لا يغيّر شيئاً)", "Пробный прогон (--dry-run)"),
  zip: L("Sıxaraq ötür (-z)", "Compress in transit (-z)", "Sıkıştırarak aktar (-z)", "ضغط أثناء النقل (-z)", "Сжимать при передаче (-z)"),
  prog: L("İrəliləyişi göstər (--progress)", "Show progress (--progress)", "İlerlemeyi göster (--progress)", "إظهار التقدم (--progress)", "Показывать прогресс (--progress)"),
  excl: L("İstisna (vergüllə: node_modules,.git)", "Exclude (comma: node_modules,.git)", "Hariç tut (virgülle: node_modules,.git)", "استثناء (بفواصل: node_modules,.git)", "Исключить (через запятую: node_modules,.git)"),
  port: L("SSH portu", "SSH port", "SSH portu", "منفذ SSH", "SSH-порт"),
  slash: L("Qeyd: mənbənin sonundakı «/» qovluğun içini köçürür, «/» olmasa qovluğun özünü.", "Note: a trailing «/» on the source copies the folder's contents; without it, the folder itself.", "Not: kaynağın sonundaki «/» klasörün içini kopyalar, yoksa klasörün kendisini.", "ملاحظة: «/» في نهاية المصدر ينسخ محتوى المجلد، وبدونها المجلد نفسه.", "Примечание: «/» в конце источника копирует содержимое папки, без него — саму папку."),
  chmodT: L("chmod kalkulyatoru", "chmod calculator", "chmod hesaplayıcı", "حاسبة chmod", "Калькулятор chmod"),
  owner: L("Sahib", "Owner", "Sahip", "المالك", "Владелец"),
  group: L("Qrup", "Group", "Grup", "المجموعة", "Группа"),
  other: L("Digərləri", "Others", "Diğerleri", "الآخرون", "Остальные"),
  r: L("oxu", "read", "oku", "قراءة", "чтение"),
  w: L("yaz", "write", "yaz", "كتابة", "запись"),
  x: L("icra", "execute", "çalıştır", "تنفيذ", "выполнение"),
  file: L("Fayl", "File", "Dosya", "الملف", "Файл"),
  mdT: L("Canlı Markdown → PDF", "Live Markdown → PDF", "Canlı Markdown → PDF", "Markdown مباشر → PDF", "Живой Markdown → PDF"),
  pdf: L("PDF kimi saxla", "Save as PDF", "PDF olarak kaydet", "حفظ كـ PDF", "Сохранить как PDF"),
  pdfHint: L("Çap pəncərəsində «PDF kimi saxla» seçin.", "In the print dialog choose «Save as PDF».", "Yazdır penceresinde «PDF olarak kaydet»i seçin.", "اختر «حفظ كـ PDF» في نافذة الطباعة.", "В окне печати выберите «Сохранить как PDF»."),
  cronT: L("Cron ifadəsi qurucusu", "Cron expression builder", "Cron ifadesi oluşturucu", "منشئ تعبير cron", "Конструктор cron-выражения"),
  min: L("Dəqiqə", "Minute", "Dakika", "الدقيقة", "Минута"),
  hour: L("Saat", "Hour", "Saat", "الساعة", "Час"),
  dom: L("Ayın günü", "Day of month", "Ayın günü", "يوم الشهر", "День месяца"),
  mon: L("Ay", "Month", "Ay", "الشهر", "Месяц"),
  dow: L("Həftənin günü (0=bazar)", "Day of week (0=Sun)", "Haftanın günü (0=Pazar)", "يوم الأسبوع (0=الأحد)", "День недели (0=вс)"),
  every: L("hər", "every", "her", "كل", "каждый"),
  bad: L("Səhv", "Invalid", "Hatalı", "غير صالح", "Ошибка"),
  jsonT: L("JSON formatlayıcı və yoxlayıcı", "JSON formatter & validator", "JSON biçimlendirici ve doğrulayıcı", "منسّق ومدقق JSON", "Форматирование и проверка JSON"),
  pretty: L("Formatla", "Format", "Biçimlendir", "تنسيق", "Форматировать"),
  mini: L("Sıx", "Minify", "Küçült", "تصغير", "Сжать"),
  ok: L("JSON düzgündür", "Valid JSON", "Geçerli JSON", "JSON صالح", "JSON корректен"),
  sshT: L("SSH əmri və ~/.ssh/config generatoru", "SSH command & ~/.ssh/config generator", "SSH komutu ve ~/.ssh/config üreteci", "مولّد أمر SSH و ~/.ssh/config", "Генератор SSH-команды и ~/.ssh/config"),
  alias: L("Qısa ad (Host)", "Alias (Host)", "Kısa ad (Host)", "اسم مختصر (Host)", "Псевдоним (Host)"),
  key: L("Açar faylı", "Key file", "Anahtar dosyası", "ملف المفتاح", "Файл ключа"),
  user: L("İstifadəçi", "User", "Kullanıcı", "المستخدم", "Пользователь"),
};

const field = "w-full rounded-lg border border-white/15 bg-black/20 px-2 py-1.5 text-sm";
const q = (s: string) => (/^[\w./~@:-]+$/.test(s) ? s : `'${s.replace(/'/g, "'\\''")}'`);

function Out({ text, lang }: { text: string; lang: Lang }) {
  const [ok, setOk] = useState(false);
  return (
    <div className="mt-3 flex items-start gap-2">
      <pre className="min-w-0 flex-1 overflow-x-auto rounded-lg bg-black/40 p-3 text-sm" dir="ltr" data-testid="micro-out"><code>{text}</code></pre>
      <button type="button" className="rounded-lg border border-white/15 px-2 py-1.5 text-xs" onClick={() => { void navigator.clipboard?.writeText(text); setOk(true); setTimeout(() => setOk(false), 1200); }}><Copy className="me-1 inline size-3.5" />{ok ? C.copied[lang] : C.copy[lang]}</button>
    </div>
  );
}
const Check = ({ v, set, label }: { v: boolean; set: (b: boolean) => void; label: string }) => (
  <label className="flex items-center gap-2 text-sm"><input type="checkbox" checked={v} onChange={(e) => set(e.target.checked)} />{label}</label>
);

function Rsync({ lang }: { lang: Lang }) {
  const [src, setSrc] = useState("./site/");
  const [dst, setDst] = useState("/var/www/site/");
  const [remote, setRemote] = useState("user@example.com");
  const [pull, setPull] = useState(false);
  const [del, setDel] = useState(false);
  const [dry, setDry] = useState(true);
  const [z, setZ] = useState(true);
  const [pg, setPg] = useState(true);
  const [ex, setEx] = useState("node_modules,.git");
  const [port, setPort] = useState("22");
  const flags = `-a${z ? "z" : ""}v`;
  const parts = ["rsync", flags];
  if (pg) parts.push("--progress");
  if (del) parts.push("--delete");
  if (dry) parts.push("--dry-run");
  for (const e of ex.split(",").map((s) => s.trim()).filter(Boolean)) parts.push(`--exclude=${q(e)}`);
  if (remote && port && port !== "22") parts.push(`-e ${q(`ssh -p ${port}`)}`);
  const r = (p: string) => (remote ? `${remote}:${q(p)}` : q(p));
  parts.push(...(pull ? [r(src), q(dst)] : [q(src), r(dst)]));
  return (
    <>
      <div className="grid gap-2 sm:grid-cols-2">
        <label className="text-sm">{C.src[lang]}<input className={field} value={src} onChange={(e) => setSrc(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.dst[lang]}<input className={field} value={dst} onChange={(e) => setDst(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.remote[lang]}<input className={field} value={remote} onChange={(e) => setRemote(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.port[lang]}<input className={field} value={port} onChange={(e) => setPort(e.target.value.replace(/\D/g, ""))} dir="ltr" /></label>
        <label className="text-sm sm:col-span-2">{C.excl[lang]}<input className={field} value={ex} onChange={(e) => setEx(e.target.value)} dir="ltr" /></label>
      </div>
      {remote ? <div className="mt-2 flex gap-4 text-sm"><label><input type="radio" checked={!pull} onChange={() => setPull(false)} /> {C.push[lang]}</label><label><input type="radio" checked={pull} onChange={() => setPull(true)} /> {C.pull[lang]}</label></div> : null}
      <div className="mt-2 grid gap-1 sm:grid-cols-2"><Check v={dry} set={setDry} label={C.dry[lang]} /><Check v={del} set={setDel} label={C.del[lang]} /><Check v={z} set={setZ} label={C.zip[lang]} /><Check v={pg} set={setPg} label={C.prog[lang]} /></div>
      <Out text={parts.join(" ")} lang={lang} />
      <p className="mt-2 text-xs text-muted">{C.slash[lang]}</p>
    </>
  );
}

function Chmod({ lang }: { lang: Lang }) {
  const [bits, setBits] = useState([7, 5, 5]);
  const [file, setFile] = useState("script.sh");
  const who = [C.owner, C.group, C.other];
  const sym = bits.map((b) => `${b & 4 ? "r" : "-"}${b & 2 ? "w" : "-"}${b & 1 ? "x" : "-"}`).join("");
  return (
    <>
      <div className="grid grid-cols-3 gap-2 text-sm">
        {who.map((w, i) => (
          <fieldset key={i} className="rounded-lg border border-white/10 p-2"><legend className="px-1 font-semibold">{w[lang]}</legend>
            {([[4, C.r], [2, C.w], [1, C.x]] as const).map(([v, l]) => <Check key={v} v={!!(bits[i] & v)} set={(on) => setBits(bits.map((b, j) => (j === i ? (on ? b | v : b & ~v) : b)))} label={l[lang]} />)}
          </fieldset>
        ))}
      </div>
      <label className="mt-2 block text-sm">{C.file[lang]}<input className={field} value={file} onChange={(e) => setFile(e.target.value)} dir="ltr" /></label>
      <Out text={`chmod ${bits.join("")} ${q(file || "file")}   # ${sym}`} lang={lang} />
    </>
  );
}

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
function inline(s: string) {
  return s
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*]+)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)/g, '<a href="$2" rel="noopener nofollow">$1</a>');
}
/** Small, escape-first Markdown renderer (headings, lists, quotes, code, links). */
export function mdToHtml(md: string): string {
  const out: string[] = [];
  const lines = esc(md.replace(/\r/g, "")).split("\n");
  let list: "ul" | "ol" | null = null;
  let code = false;
  const close = () => { if (list) { out.push(`</${list}>`); list = null; } };
  for (const ln of lines) {
    if (/^```/.test(ln)) { close(); out.push(code ? "</code></pre>" : "<pre><code>"); code = !code; continue; }
    if (code) { out.push(ln + "\n"); continue; }
    let m;
    if ((m = /^(#{1,6})\s+(.*)$/.exec(ln))) { close(); out.push(`<h${m[1].length}>${inline(m[2])}</h${m[1].length}>`); }
    else if ((m = /^\s*[-*+]\s+(.*)$/.exec(ln))) { if (list !== "ul") { close(); out.push("<ul>"); list = "ul"; } out.push(`<li>${inline(m[1])}</li>`); }
    else if ((m = /^\s*\d+[.)]\s+(.*)$/.exec(ln))) { if (list !== "ol") { close(); out.push("<ol>"); list = "ol"; } out.push(`<li>${inline(m[1])}</li>`); }
    else if ((m = /^&gt;\s?(.*)$/.exec(ln))) { close(); out.push(`<blockquote>${inline(m[1])}</blockquote>`); }
    else if (/^(-{3,}|\*{3,})$/.test(ln.trim())) { close(); out.push("<hr/>"); }
    else if (!ln.trim()) close();
    else { close(); out.push(`<p>${inline(ln)}</p>`); }
  }
  close();
  if (code) out.push("</code></pre>");
  return out.join("");
}

function Markdown({ lang }: { lang: Lang }) {
  const [md, setMd] = useState("# Başlıq\n\n**Qalın**, *maili* və `kod`.\n\n- birinci\n- ikinci\n\n> Sitat\n\n```\nprint('salam')\n```");
  const html = useMemo(() => mdToHtml(md), [md]);
  const pdf = () => {
    const w = window.open("", "_blank");
    if (!w) return;
    w.document.write(`<!doctype html><html><head><meta charset="utf-8"><title>markdown</title><style>body{font:15px/1.6 system-ui,sans-serif;max-width:760px;margin:32px auto;color:#111}pre{background:#f3f3f3;padding:12px;border-radius:6px;overflow:auto}code{font-family:ui-monospace,monospace}blockquote{border-left:4px solid #ccc;margin:0;padding-left:12px;color:#555}</style></head><body dir="auto">${html}</body></html>`);
    w.document.close();
    w.focus();
    setTimeout(() => w.print(), 300);
  };
  return (
    <>
      <div className="grid gap-3 md:grid-cols-2">
        <textarea className={`${field} h-64 font-mono`} value={md} onChange={(e) => setMd(e.target.value)} dir="auto" aria-label="Markdown" />
        <div className="md-preview prose prose-invert h-64 overflow-auto rounded-lg border border-white/10 bg-white/[0.03] p-3 text-sm" dir="auto" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      <div className="mt-2 flex items-center gap-3"><button type="button" className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white" onClick={pdf}>{C.pdf[lang]}</button><span className="text-xs text-muted">{C.pdfHint[lang]}</span></div>
    </>
  );
}

const cronOk = (v: string, lo: number, hi: number) => v.split(",").every((p) => { const m = /^(\*|\d+(?:-\d+)?)(?:\/(\d+))?$/.exec(p); if (!m) return false; if (m[1] === "*") return true; return m[1].split("-").every((n) => +n >= lo && +n <= hi); });
function Cron({ lang }: { lang: Lang }) {
  const [f, setF] = useState(["0", "3", "*", "*", "1-5"]);
  const meta = [[C.min, 0, 59], [C.hour, 0, 23], [C.dom, 1, 31], [C.mon, 1, 12], [C.dow, 0, 7]] as const;
  const bad = f.some((v, i) => !cronOk(v, meta[i][1], meta[i][2]));
  const presets: [string, string][] = [["*/5 * * * *", "5 min"], ["0 * * * *", "1 h"], ["0 3 * * *", "03:00"], ["0 9 * * 1-5", "Mon–Fri 09:00"], ["0 0 1 * *", "1st"]];
  return (
    <>
      <div className="mb-2 flex flex-wrap gap-2">{presets.map(([p, l]) => <button key={p} type="button" className="rounded-full border border-white/15 px-3 py-1 text-xs" onClick={() => setF(p.split(" "))}>{l}</button>)}</div>
      <div className="grid grid-cols-5 gap-2">{meta.map(([l], i) => <label key={i} className="text-xs">{l[lang]}<input className={field} value={f[i]} onChange={(e) => setF(f.map((x, j) => (j === i ? e.target.value.replace(/\s/g, "") : x)))} dir="ltr" /></label>)}</div>
      {bad ? <p className="mt-2 text-sm text-red-300">{C.bad[lang]}</p> : <Out text={`${f.join(" ")} /path/to/command`} lang={lang} />}
    </>
  );
}

function Json({ lang }: { lang: Lang }) {
  const [s, setS] = useState('{"name":"Nibras","tools":[1,2,3]}');
  const [msg, setMsg] = useState("");
  const run = (ind: number) => { try { setS(JSON.stringify(JSON.parse(s), null, ind)); setMsg(C.ok[lang]); } catch (e) { setMsg(`${C.bad[lang]}: ${(e as Error).message}`); } };
  return (
    <>
      <textarea className={`${field} h-48 font-mono`} value={s} onChange={(e) => setS(e.target.value)} dir="ltr" aria-label="JSON" />
      <div className="mt-2 flex flex-wrap items-center gap-2"><button type="button" className="rounded-xl bg-primary px-3 py-1.5 text-sm font-semibold text-white" onClick={() => run(2)}>{C.pretty[lang]}</button><button type="button" className="rounded-xl border border-white/15 px-3 py-1.5 text-sm" onClick={() => run(0)}>{C.mini[lang]}</button><span className="text-sm" data-testid="json-msg">{msg}</span></div>
    </>
  );
}

function Ssh({ lang }: { lang: Lang }) {
  const [host, setHost] = useState("example.com");
  const [user, setUser] = useState("root");
  const [port, setPort] = useState("22");
  const [key, setKey] = useState("~/.ssh/id_ed25519");
  const [alias, setAlias] = useState("myserver");
  const cmd = ["ssh", ...(port && port !== "22" ? ["-p", port] : []), ...(key ? ["-i", key] : []), `${user ? `${user}@` : ""}${host}`].join(" ");
  const cfg = [`Host ${alias || "server"}`, `  HostName ${host}`, user ? `  User ${user}` : "", port && port !== "22" ? `  Port ${port}` : "", key ? `  IdentityFile ${key}` : ""].filter(Boolean).join("\n");
  return (
    <>
      <div className="grid gap-2 sm:grid-cols-3">
        <label className="text-sm">Host<input className={field} value={host} onChange={(e) => setHost(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.user[lang]}<input className={field} value={user} onChange={(e) => setUser(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.port[lang]}<input className={field} value={port} onChange={(e) => setPort(e.target.value.replace(/\D/g, ""))} dir="ltr" /></label>
        <label className="text-sm sm:col-span-2">{C.key[lang]}<input className={field} value={key} onChange={(e) => setKey(e.target.value)} dir="ltr" /></label>
        <label className="text-sm">{C.alias[lang]}<input className={field} value={alias} onChange={(e) => setAlias(e.target.value)} dir="ltr" /></label>
      </div>
      <Out text={cmd} lang={lang} />
      <Out text={cfg} lang={lang} />
      {alias ? <Out text={`ssh ${alias}`} lang={lang} /> : null}
    </>
  );
}

const TOOLS: Record<string, { title: keyof typeof C; C: (p: { lang: Lang }) => React.ReactElement }> = {
  rsync: { title: "rsyncT", C: Rsync },
  linux: { title: "chmodT", C: Chmod },
  bash: { title: "chmodT", C: Chmod },
  markdown: { title: "mdT", C: Markdown },
  cron: { title: "cronT", C: Cron },
  json: { title: "jsonT", C: Json },
  ssh: { title: "sshT", C: Ssh },
};

export const hasMicroTool = (slug?: string) => !!slug && slug in TOOLS;

/** Interactive micro-tool shown on matching programming articles. */
export function ProgMicroTool({ slug }: { slug?: string }) {
  const { lang } = useI18n();
  if (!slug || !TOOLS[slug]) return null;
  const t = TOOLS[slug];
  const Tool = t.C;
  return (
    <section className="prog-micro my-6 rounded-2xl border border-[#2f6bff]/35 bg-[#2f6bff]/[0.06] p-4 text-start" data-testid="prog-micro-tool" data-nosnippet>
      <div className="mb-1 text-xs uppercase tracking-wide text-muted"><Wrench className="me-1 inline size-3.5" />{C.tool[lang]}</div>
      <h2 className="mb-3 text-lg font-semibold">{C[t.title][lang]}</h2>
      <Tool lang={lang} />
      <p className="mt-3 text-xs text-muted">{C.local[lang]}</p>
    </section>
  );
}
