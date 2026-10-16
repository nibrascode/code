import { useEffect, useRef, useState, type DragEvent, type FormEvent } from "react";
import { Paperclip, X } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";
import { QrCard } from "@/components/qr-card";

type Topic = "qr" | "erase" | "pdf";
type PdfAction = { tool: string; params?: Record<string, unknown>; targets: string[]; lang?: string };
type Attached = { id: string; file: File; kind: "pdf" | "image" | "docx"; name: string };
type Msg = { role: "user" | "bot"; text: string; url?: string; card?: { kind: string; lang: string }; pdf?: { action: PdfAction; files: File[]; lang: string; done?: string } };

const kindOf = (f: File): Attached["kind"] | "" => {
  const n = f.name.toLowerCase();
  if (f.type === "application/pdf" || n.endsWith(".pdf")) return "pdf";
  if (n.endsWith(".docx")) return "docx";
  if (/^image\/(png|jpeg|webp)$/.test(f.type) || /\.(png|jpe?g|webp)$/.test(n)) return "image";
  return "";
};

/** Runs one PDF action in the browser (lazy runner bundle) and renders the result cards. */
function PdfRun({ run }: { run: NonNullable<Msg["pdf"]> }) {
  const box = useRef<HTMLDivElement>(null);
  const started = useRef(false);
  const [done, setDone] = useState(false);
  useEffect(() => {
    if (started.current || !box.current) return;
    started.current = true;
    const url = "/pdf-assets/runner/runner.js";
    import(/* @vite-ignore */ url)
      .then((m) => m.default.handle({ action: run.action, files: run.files, lang: run.lang, container: box.current! }))
      .then(() => setDone(true))
      .catch(() => {});
  }, [run]);
  return (
    <div>
      <div ref={box} />
      {done && run.done ? <div className="mt-2 text-xs text-muted">{run.done}</div> : null}
    </div>
  );
}

const T = {
  az: {
    title: "Nibras AI köməkçi",
    hint: { qr: "QR haqqında soruş: «Wi-Fi üçün QR necə düzəldim?»", erase: "Fon silmə haqqında soruş: «Şəklin fonunu necə silim?»", pdf: "" },
    ph: "Sualını yaz...",
    send: "Göndər",
    thinking: "Düşünür...",
    err: "Cavab alınmadı. Bir az sonra yenidən yoxla.",
    net: "Şəbəkə xətası. Bir az sonra yenidən yoxla.",
    attach: "PDF və ya şəkil əlavə et",
    drop: "Faylı bura burax",
    bad: "Yalnız PDF, DOCX və şəkil qəbul olunur.",
    pdfHint: "PDF yüklə və yaz: «şəkillərə çevir», «mətni çıxar», «birləşdir», «parol qoy»",
  },
  en: {
    title: "Nibras AI assistant",
    hint: { qr: "Ask about QR: “How do I make a QR code for Wi-Fi?”", erase: "Ask about background removal: “How do I remove a photo background?”", pdf: "" },
    ph: "Type your question...",
    send: "Send",
    thinking: "Thinking...",
    err: "No answer received. Please try again in a moment.",
    net: "Network error. Please try again in a moment.",
    attach: "Attach a PDF or image",
    drop: "Drop the file here",
    bad: "Only PDF, DOCX and images are accepted.",
    pdfHint: "Attach a PDF and write: “convert to images”, “extract text”, “merge”, “add password”",
  },
  tr: {
    title: "Nibras AI yardımcı",
    hint: { qr: "QR hakkında sor: «Wi-Fi için QR nasıl yapılır?»", erase: "Arka plan silme hakkında sor: «Fotoğrafın arka planını nasıl silerim?»", pdf: "" },
    ph: "Sorunu yaz...",
    send: "Gönder",
    thinking: "Düşünüyor...",
    err: "Cevap alınamadı. Biraz sonra tekrar dene.",
    net: "Ağ hatası. Biraz sonra tekrar dene.",
    attach: "PDF veya görsel ekle",
    drop: "Dosyayı buraya bırak",
    bad: "Yalnızca PDF, DOCX ve görseller kabul edilir.",
    pdfHint: "PDF ekle ve yaz: «görsellere çevir», «metni çıkar», «birleştir», «parola ekle»",
  },
  ar: {
    title: "مساعد Nibras AI",
    hint: { qr: "اسأل عن QR: «كيف أنشئ رمز QR للـ Wi-Fi؟»", erase: "اسأل عن إزالة الخلفية: «كيف أزيل خلفية الصورة؟»", pdf: "" },
    ph: "اكتب سؤالك...",
    send: "إرسال",
    thinking: "يفكّر...",
    err: "لم تصل إجابة. حاول مرة أخرى بعد قليل.",
    net: "خطأ في الشبكة. حاول مرة أخرى بعد قليل.",
    attach: "أرفق PDF أو صورة",
    drop: "أفلت الملف هنا",
    bad: "يُقبل فقط PDF وDOCX والصور.",
    pdfHint: "أرفق PDF واكتب: «حوّل إلى صور»، «استخرج النص»، «ادمج»، «أضف كلمة مرور»",
  },
  ru: {
    title: "Помощник Nibras AI",
    hint: { qr: "Спросите про QR: «Как сделать QR-код для Wi-Fi?»", erase: "Спросите про удаление фона: «Как убрать фон с фото?»", pdf: "" },
    ph: "Напишите вопрос...",
    send: "Отправить",
    thinking: "Думает...",
    err: "Ответ не получен. Попробуйте ещё раз чуть позже.",
    net: "Ошибка сети. Попробуйте ещё раз чуть позже.",
    attach: "Прикрепить PDF или изображение",
    drop: "Отпустите файл здесь",
    bad: "Принимаются только PDF, DOCX и изображения.",
    pdfHint: "Прикрепите PDF и напишите: «в изображения», «извлеки текст», «объедини», «поставь пароль»",
  },
} as const;

/** Small Nibras AI box shared by /qr and /erase. Sends the selected UI language; the server
 *  also detects the language of the question and answers in that language. */
export function PageAssistant({ topic }: { topic: Topic }) {
  const { lang } = useI18n();
  const c = T[lang] ?? T.az;
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);
  const [files, setFiles] = useState<Attached[]>([]);
  const [pending, setPending] = useState<string[]>([]);
  const [over, setOver] = useState(false);
  const [note, setNote] = useState("");
  const pick = useRef<HTMLInputElement>(null);

  function addFiles(list: FileList | File[]) {
    const add: Attached[] = [];
    for (const f of Array.from(list)) {
      const kind = kindOf(f);
      if (!kind) { setNote(c.bad); continue; }
      add.push({ id: `f${Date.now().toString(36)}${Math.floor(Math.random() * 1e6).toString(36)}`, file: f, kind, name: f.name });
    }
    if (!add.length) return;
    setNote("");
    setFiles((cur) => [...cur, ...add].slice(-12));
    setPending((cur) => [...cur, ...add.map((a) => a.id)]);
  }
  const onDrop = (e: DragEvent) => {
    if (!e.dataTransfer?.types?.includes("Files")) return;
    e.preventDefault();
    setOver(false);
    addFiles(e.dataTransfer.files);
  };

  async function ask(e: FormEvent) {
    e.preventDefault();
    const attachedNow = files.filter((f) => pending.includes(f.id));
    const q = input.trim() || (attachedNow.length ? `📎 ${attachedNow.map((f) => f.name).join(", ").slice(0, 200)}` : "");
    if (!q || busy) return;
    setInput("");
    const next: Msg[] = [...msgs, { role: "user", text: q }];
    setMsgs(next);
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: q,
          lang,
          mode: "ask",
          files: files.length ? files.map((f) => ({ id: f.id, name: f.name, kind: f.kind, attached: pending.includes(f.id) })) : undefined,
          messages: next.slice(-8).map((m) => ({ role: m.role === "bot" ? "assistant" : "user", text: m.text })),
        }),
      });
      const data = (await res.json()) as { reply?: string; url?: string; pdfAction?: PdfAction; done?: string; lang?: string };
      setPending([]);
      if (data.pdfAction) {
        const byId = new Map(files.map((f) => [f.id, f.file]));
        const run = { action: data.pdfAction, files: data.pdfAction.targets.map((id) => byId.get(id)).filter((f): f is File => !!f), lang: data.lang || lang, done: data.done };
        setMsgs((m) => [...m, { role: "bot", text: data.reply || "", pdf: run }]);
        return;
      }
      // internal markers (::qrform::, ::qrimg::) are not shown as text
      const raw = String(data.reply || c.err);
      const hit = raw.match(/::qrform::([a-z]*)(?:@([a-z]{2}))?/);
      const text = raw.replace(/^::\w+::.*$/gm, "").trim() || (hit ? "" : c.err);
      setMsgs((m) => [...m, { role: "bot", text, url: data.url, card: hit ? { kind: hit[1] || "", lang: hit[2] || lang } : undefined }]);
    } catch {
      setMsgs((m) => [...m, { role: "bot", text: c.net }]);
    } finally {
      setBusy(false);
      setTimeout(() => endRef.current?.scrollIntoView({ block: "nearest" }), 0);
    }
  }

  return (
    <section
      className={`relative mt-8 rounded-2xl border bg-white/5 p-4 transition ${over ? "border-primary bg-primary/10" : "border-white/10"}`}
      aria-label={c.title}
      dir={lang === "ar" ? "rtl" : "ltr"}
      onDragOver={(e) => { if (e.dataTransfer?.types?.includes("Files")) { e.preventDefault(); setOver(true); } }}
      onDragLeave={(e) => { if (e.currentTarget === e.target) setOver(false); }}
      onDrop={onDrop}
    >
      <h2 className="font-display text-base font-bold">{c.title}</h2>
      <p className="mt-1 text-xs text-muted">{topic === "pdf" ? c.pdfHint : c.hint[topic]}</p>
      {over ? <p className="mt-2 text-sm font-semibold text-primary">{c.drop}</p> : null}
      {msgs.length ? (
        <div className="mt-3 flex max-h-[34rem] flex-col gap-2 overflow-auto text-sm" aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "self-end rounded-xl bg-white/10 px-3 py-2" : "self-start whitespace-pre-line rounded-xl bg-black/20 px-3 py-2"} dir="auto">
              {m.text}
              {m.pdf ? <PdfRun run={m.pdf} /> : null}
              {m.card ? <QrCard lang={m.card.lang} preset={m.card.kind} /> : null}
              {m.url ? <img src={m.url} alt="QR" width={160} height={160} className="mt-2 rounded-lg bg-white p-2" /> : null}
            </div>
          ))}
          {busy ? <div className="text-xs text-muted">{c.thinking}</div> : null}
          <div ref={endRef} />
        </div>
      ) : null}
      {files.some((f) => pending.includes(f.id)) ? (
        <div className="mt-3 flex flex-wrap gap-2" data-testid="assistant-chips">
          {files.filter((f) => pending.includes(f.id)).map((f) => (
            <span key={f.id} className="inline-flex max-w-full items-center gap-1.5 rounded-full border border-primary/40 bg-primary/10 py-1 ps-3 pe-1 text-xs font-semibold">
              <span className="truncate" style={{ maxWidth: "14rem" }}>{f.name}</span>
              <button type="button" aria-label="×" className="grid size-5 place-items-center rounded-full hover:bg-white/15" onClick={() => { setPending((p) => p.filter((x) => x !== f.id)); setFiles((p) => p.filter((x) => x.id !== f.id)); }}><X className="size-3" /></button>
            </span>
          ))}
        </div>
      ) : null}
      {note ? <p className="mt-2 text-xs text-red-300">{note}</p> : null}
      <form onSubmit={ask} className="mt-3 flex gap-2">
        <input ref={pick} type="file" hidden multiple accept="application/pdf,.pdf,.docx,image/png,image/jpeg,image/webp" data-testid="assistant-file" onChange={(e) => { if (e.target.files) addFiles(e.target.files); e.target.value = ""; }} />
        <button type="button" aria-label={c.attach} title={c.attach} onClick={() => pick.current?.click()} className="grid size-10 shrink-0 place-items-center rounded-lg border border-white/15 bg-black/20 transition hover:bg-white/10">
          <Paperclip className="size-4" />
        </button>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={c.ph}
          maxLength={800}
          className="min-w-0 flex-1 rounded-lg border border-white/15 bg-black/20 px-3 py-2 text-sm"
          dir="auto"
        />
        <button type="submit" disabled={busy || !input.trim()} className="rounded-lg bg-white/15 px-4 py-2 text-sm font-semibold disabled:opacity-50">
          {c.send}
        </button>
      </form>
    </section>
  );
}
