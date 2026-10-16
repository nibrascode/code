import { useRef, useState, type FormEvent } from "react";
import { useI18n } from "@/lib/i18n-context";
import { QrCard } from "@/components/qr-card";

type Topic = "qr" | "erase";
type Msg = { role: "user" | "bot"; text: string; url?: string; card?: { kind: string; lang: string } };

const T = {
  az: {
    title: "Nibras AI köməkçi",
    hint: { qr: "QR haqqında soruş: «Wi-Fi üçün QR necə düzəldim?»", erase: "Fon silmə haqqında soruş: «Şəklin fonunu necə silim?»" },
    ph: "Sualını yaz...",
    send: "Göndər",
    thinking: "Düşünür...",
    err: "Cavab alınmadı. Bir az sonra yenidən yoxla.",
    net: "Şəbəkə xətası. Bir az sonra yenidən yoxla.",
  },
  en: {
    title: "Nibras AI assistant",
    hint: { qr: "Ask about QR: “How do I make a QR code for Wi-Fi?”", erase: "Ask about background removal: “How do I remove a photo background?”" },
    ph: "Type your question...",
    send: "Send",
    thinking: "Thinking...",
    err: "No answer received. Please try again in a moment.",
    net: "Network error. Please try again in a moment.",
  },
  tr: {
    title: "Nibras AI yardımcı",
    hint: { qr: "QR hakkında sor: «Wi-Fi için QR nasıl yapılır?»", erase: "Arka plan silme hakkında sor: «Fotoğrafın arka planını nasıl silerim?»" },
    ph: "Sorunu yaz...",
    send: "Gönder",
    thinking: "Düşünüyor...",
    err: "Cevap alınamadı. Biraz sonra tekrar dene.",
    net: "Ağ hatası. Biraz sonra tekrar dene.",
  },
  ar: {
    title: "مساعد Nibras AI",
    hint: { qr: "اسأل عن QR: «كيف أنشئ رمز QR للـ Wi-Fi؟»", erase: "اسأل عن إزالة الخلفية: «كيف أزيل خلفية الصورة؟»" },
    ph: "اكتب سؤالك...",
    send: "إرسال",
    thinking: "يفكّر...",
    err: "لم تصل إجابة. حاول مرة أخرى بعد قليل.",
    net: "خطأ في الشبكة. حاول مرة أخرى بعد قليل.",
  },
  ru: {
    title: "Помощник Nibras AI",
    hint: { qr: "Спросите про QR: «Как сделать QR-код для Wi-Fi?»", erase: "Спросите про удаление фона: «Как убрать фон с фото?»" },
    ph: "Напишите вопрос...",
    send: "Отправить",
    thinking: "Думает...",
    err: "Ответ не получен. Попробуйте ещё раз чуть позже.",
    net: "Ошибка сети. Попробуйте ещё раз чуть позже.",
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

  async function ask(e: FormEvent) {
    e.preventDefault();
    const q = input.trim();
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
          messages: next.slice(-8).map((m) => ({ role: m.role === "bot" ? "assistant" : "user", text: m.text })),
        }),
      });
      const data = (await res.json()) as { reply?: string; url?: string };
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
    <section className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-4" aria-label={c.title} dir={lang === "ar" ? "rtl" : "ltr"}>
      <h2 className="font-display text-base font-bold">{c.title}</h2>
      <p className="mt-1 text-xs text-muted">{c.hint[topic]}</p>
      {msgs.length ? (
        <div className="mt-3 flex max-h-[34rem] flex-col gap-2 overflow-auto text-sm" aria-live="polite">
          {msgs.map((m, i) => (
            <div key={i} className={m.role === "user" ? "self-end rounded-xl bg-white/10 px-3 py-2" : "self-start whitespace-pre-line rounded-xl bg-black/20 px-3 py-2"} dir="auto">
              {m.text}
              {m.card ? <QrCard lang={m.card.lang} preset={m.card.kind} /> : null}
              {m.url ? <img src={m.url} alt="QR" width={160} height={160} className="mt-2 rounded-lg bg-white p-2" /> : null}
            </div>
          ))}
          {busy ? <div className="text-xs text-muted">{c.thinking}</div> : null}
          <div ref={endRef} />
        </div>
      ) : null}
      <form onSubmit={ask} className="mt-3 flex gap-2">
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
