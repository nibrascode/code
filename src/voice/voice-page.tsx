import { useCallback, useEffect, useRef, useState } from "react";
import { Copy, Mic, Square, Trash2 } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { localeHref } from "@/lib/locale-path";
import { ExternalLink } from "lucide-react";

type L = Record<Lang, string>;
const T = (az: string, en: string, tr: string, ar: string, ru: string): L => ({ az, en, tr, ar, ru });

const S = {
  title: T("Səsdən mətnə", "Speech to text", "Sesten metne", "تحويل الصوت إلى نص", "Голос в текст"),
  lead: T(
    "Danış, mətn yazılsın. Pulsuz, qeydiyyatsız.",
    "Speak and the text is typed. Free, no sign-up.",
    "Konuş, metin yazılsın. Ücretsiz, kayıtsız, tarayıcıda.",
    "تحدّث ويُكتب النص. مجاناً، بلا تسجيل، في المتصفح.",
    "Говорите — текст печатается. Бесплатно, без регистрации, в браузере.",
  ),
  speechLang: T("Danışıq dili", "Spoken language", "Konuşma dili", "لغة الكلام", "Язык речи"),
  ready: T("Hazırdır", "Ready", "Hazır", "جاهز", "Готово"),
  listening: T("Dinləyirəm…", "Listening…", "Dinliyorum…", "أستمع…", "Слушаю…"),
  start: T("Başla", "Start", "Başla", "ابدأ", "Начать"),
  stop: T("Dayandır", "Stop", "Durdur", "إيقاف", "Остановить"),
  placeholder: T("Mətn burada görünəcək. Redaktə edə bilərsən.", "Text appears here. You can edit it.", "Metin burada görünecek. Düzenleyebilirsin.", "سيظهر النص هنا ويمكنك تعديله.", "Текст появится здесь. Его можно править."),
  copy: T("Kopyala", "Copy", "Kopyala", "نسخ", "Копировать"),
  clear: T("Təmizlə", "Clear", "Temizle", "مسح", "Очистить"),
  again: T("Yenə bas", "Tap again", "Tekrar bas", "اضغط مجدداً", "Ещё раз"),
  copied: T("Kopyalandı", "Copied", "Kopyalandı", "تم النسخ", "Скопировано"),
  copyFail: T("Kopyalanmadı: mətni seçib özün kopyala", "Copy failed: select the text and copy it", "Kopyalanamadı: metni seçip kendin kopyala", "تعذّر النسخ: حدّد النص وانسخه", "Не скопировано: выделите текст и скопируйте"),
  words: T("söz", "words", "kelime", "كلمة", "слов"),
  chars: T("simvol", "characters", "karakter", "حرف", "символов"),
  deny: T(
    "Mikrofona və ya səs tanımaya icazə verilməyib. Brauzer ayarlarından icazə ver və ya linki birbaşa brauzerdə aç.",
    "Microphone or speech recognition is blocked. Allow it in browser settings or open the link directly in the browser.",
    "Mikrofon veya ses tanıma izni yok. Tarayıcı ayarlarından izin ver veya bağlantıyı doğrudan tarayıcıda aç.",
    "الميكروفون أو التعرف على الصوت محظور. اسمح به من إعدادات المتصفح أو افتح الرابط في المتصفح مباشرة.",
    "Микрофон или распознавание речи запрещены. Разрешите в настройках браузера или откройте ссылку прямо в браузере.",
  ),
  steps: T(
    "Android Chrome: ünvan sətrindəki kilid → Sayt ayarları → Mikrofon → İcazə ver, sonra səhifəni yenilə. iPhone Safari: ünvan sətrində «AA» → Veb sayt ayarları → Mikrofon → İcazə ver (və ya Ayarlar → Safari → Mikrofon). Telegram, Instagram kimi tətbiqlərin içində yox, Chrome və ya Safari-də aç.",
    "Android Chrome: tap the lock in the address bar → Site settings → Microphone → Allow, then reload. iPhone Safari: tap «AA» in the address bar → Website Settings → Microphone → Allow (or Settings → Safari → Microphone). Open it in Chrome or Safari, not inside Telegram or Instagram.",
    "Android Chrome: adres çubuğundaki kilit → Site ayarları → Mikrofon → İzin ver, sonra sayfayı yenile. iPhone Safari: adres çubuğunda «AA» → Web Sitesi Ayarları → Mikrofon → İzin ver (veya Ayarlar → Safari → Mikrofon). Telegram, Instagram içinde değil, Chrome veya Safari'de aç.",
    "أندرويد Chrome: اضغط القفل في شريط العنوان ← إعدادات الموقع ← الميكروفون ← السماح، ثم أعد التحميل. آيفون Safari: اضغط «AA» ← إعدادات موقع الويب ← الميكروفون ← السماح (أو الإعدادات ← Safari ← الميكروفون). افتحه في Chrome أو Safari وليس داخل Telegram أو Instagram.",
    "Android Chrome: замок в адресной строке → Настройки сайта → Микрофон → Разрешить, затем обновите. iPhone Safari: «AA» в адресной строке → Настройки веб-сайта → Микрофон → Разрешить (или Настройки → Safari → Микрофон). Открывайте в Chrome или Safari, а не внутри Telegram или Instagram.",
  ),
  embedded: T(
    "Bu səhifə tətbiq içində və ya çərçivədə açılıb — mikrofon burada çox vaxt bağlı olur. Brauzerdə aç.",
    "This page is open inside an app or a frame, where the microphone is often blocked. Open it in your browser.",
    "Bu sayfa bir uygulama veya çerçeve içinde açık; mikrofon burada çoğu zaman kapalıdır. Tarayıcıda aç.",
    "هذه الصفحة مفتوحة داخل تطبيق أو إطار، وغالباً ما يكون الميكروفون محظوراً هنا. افتحها في المتصفح.",
    "Страница открыта внутри приложения или фрейма — там микрофон часто заблокирован. Откройте в браузере.",
  ),
  openBrowser: T("Brauzerdə aç", "Open in browser", "Tarayıcıda aç", "افتح في المتصفح", "Открыть в браузере"),
  copyLink: T("Linki kopyala", "Copy link", "Bağlantıyı kopyala", "نسخ الرابط", "Копировать ссылку"),
  audio: T("Mikrofon tapılmadı və ya başqa tətbiq onu istifadə edir.", "No microphone found, or another app is using it.", "Mikrofon bulunamadı veya başka uygulama kullanıyor.", "لم يُعثر على ميكروفون أو أن تطبيقاً آخر يستخدمه.", "Микрофон не найден или занят другим приложением."),
  network: T("İnternet lazımdır: səs tanıma onlayn işləyir.", "Internet needed: recognition works online.", "İnternet gerekli: ses tanıma çevrim içi çalışır.", "يلزم اتصال بالإنترنت: التعرف يعمل عبر الشبكة.", "Нужен интернет: распознавание работает онлайн."),
  langNo: T("Bu dil bu cihazda dəstəklənmir. Başqa dil seç.", "This language is not supported on this device. Pick another.", "Bu dil bu cihazda desteklenmiyor. Başka dil seç.", "هذه اللغة غير مدعومة على هذا الجهاز. اختر لغة أخرى.", "Этот язык не поддерживается на устройстве. Выберите другой."),
  err: T("Xəta baş verdi: ", "Error: ", "Hata: ", "حدث خطأ: ", "Ошибка: "),
  unsupported: T(
    "Bu pəncərə səs tanımanı dəstəkləmir. Linki brauzerdə aç: Chrome (Android, kompüter), Edge və ya Safari (iPhone).",
    "This window does not support speech recognition. Open the link in Chrome (Android, desktop), Edge or Safari (iPhone).",
    "Bu pencere ses tanımayı desteklemiyor. Bağlantıyı Chrome (Android, bilgisayar), Edge veya Safari (iPhone) ile aç.",
    "هذه النافذة لا تدعم التعرف على الصوت. افتح الرابط في Chrome (أندرويد، الحاسوب) أو Edge أو Safari (آيفون).",
    "Это окно не поддерживает распознавание речи. Откройте ссылку в Chrome (Android, ПК), Edge или Safari (iPhone).",
  ),
  privacy: T(
    "Danışarkən səsin brauzerin səs tanıma xidmətinə yüklənir (Chrome-da Google, Safari-də Apple). Səs yalnız cihazda qalmır. Alınan mətn bu cihazda saxlanır; Nibras Code serverinə heç nə göndərilmir. Firefox dəstəkləmir.",
    "While you speak, the audio is uploaded to the browser's speech-recognition service (Google in Chrome, Apple in Safari). The audio does not stay only on your device. The resulting text is stored on this device; nothing is sent to Nibras Code servers. Firefox is not supported.",
    "Konuşurken ses tarayıcının ses tanıma hizmetine yüklenir (Chrome'da Google, Safari'de Apple). Ses yalnız cihazda kalmaz. Çıkan metin bu cihazda saklanır; Nibras Code sunucularına hiçbir şey gönderilmez. Firefox desteklenmez.",
    "أثناء الكلام يُرفع الصوت إلى خدمة التعرف على الكلام في المتصفح (Google في Chrome وApple في Safari)، فلا يبقى الصوت على جهازك فقط. يُحفظ النص الناتج على هذا الجهاز، ولا يُرسل شيء إلى خوادم Nibras Code. Firefox غير مدعوم.",
    "Пока вы говорите, звук загружается в сервис распознавания браузера (Google в Chrome, Apple в Safari) — он не остаётся только на устройстве. Полученный текст хранится на этом устройстве; на серверы Nibras Code ничего не отправляется. Firefox не поддерживается.",
  ),
  upHint: T("Danışarkən səs tanıma xidmətinə yüklənir", "Audio is uploaded to the recognition service while you speak", "Konuşurken ses tanıma hizmetine yüklenir", "يُرفع الصوت إلى خدمة التعرف أثناء الكلام", "Во время речи звук загружается в сервис распознавания"),
};

export const VOICE_TITLE = S.title;
export function voiceMeta(lang: Lang) {
  const title = `${S.title[lang]} — Nibras Code`;
  return [
    { title },
    { property: "og:title", content: title },
    { name: "description", content: S.lead[lang] },
    { property: "og:description", content: S.lead[lang] },
  ];
}

const LOCALES = [
  ["az-AZ", "Azərbaycanca"],
  ["tr-TR", "Türkçe"],
  ["ru-RU", "Русский"],
  ["en-US", "English"],
  ["ar-SA", "العربية"],
] as const;
const DEFAULT_LOC: Record<Lang, string> = { az: "az-AZ", tr: "tr-TR", ru: "ru-RU", en: "en-US", ar: "ar-SA" };

const store = {
  get(k: string) { try { return localStorage.getItem(k); } catch { return null; } },
  set(k: string, v: string) { try { localStorage.setItem(k, v); } catch { /* ignore */ } },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Rec = any;

export function VoicePage({ lang }: { lang: Lang }) {
  const t = (k: keyof typeof S) => S[k][lang] ?? S[k].az;
  const [text, setText] = useState("");
  const [loc, setLoc] = useState(DEFAULT_LOC[lang]);
  const [on, setOn] = useState(false);
  const [interim, setInterim] = useState("");
  const [note, setNote] = useState<{ t: string; err: boolean } | null>(null);
  const [armed, setArmed] = useState(false);
  const [supported, setSupported] = useState(true);
  const [embedded, setEmbedded] = useState(false);
  const [denied, setDenied] = useState(false);
  const recRef = useRef<Rec>(null);
  const want = useRef(false);
  const locRef = useRef(loc);
  const outRef = useRef<HTMLTextAreaElement>(null);
  const noteTm = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const armTm = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const tRef = useRef(t);
  tRef.current = t;

  useEffect(() => {
    const SR = (window as Rec).SpeechRecognition || (window as Rec).webkitSpeechRecognition;
    setSupported(!!SR);
    let framed = false;
    try { framed = window.top !== window.self; } catch { framed = true; }
    setEmbedded(framed || /FBAN|FBAV|Instagram|\bLine\/|Twitter|MicroMessenger|Telegram|; wv\)|\bWV\b/i.test(navigator.userAgent));
    const saved = store.get("stt-lang");
    if (saved && LOCALES.some(([v]) => v === saved)) { setLoc(saved); locRef.current = saved; }
    setText(store.get("stt-text") || "");
    return () => { want.current = false; try { recRef.current?.abort(); } catch { /* */ } };
  }, []);

  useEffect(() => { store.set("stt-text", text); }, [text]);

  const say = useCallback((msg: string, ms?: number) => {
    clearTimeout(noteTm.current);
    setNote(msg ? { t: msg, err: !ms } : null);
    if (ms) noteTm.current = setTimeout(() => setNote(null), ms);
  }, []);

  const add = useCallback((raw: string) => {
    let s = raw.trim();
    if (!s) return;
    setText((v) => {
      if (/(^|[.!?]\s*)$/.test(v)) s = s.charAt(0).toLocaleUpperCase(locRef.current) + s.slice(1);
      return v + (v && !/\s$/.test(v) ? " " : "") + s;
    });
    requestAnimationFrame(() => { const o = outRef.current; if (o) o.scrollTop = o.scrollHeight; });
  }, []);

  const begin = useCallback(() => {
    const SR = (window as Rec).SpeechRecognition || (window as Rec).webkitSpeechRecognition;
    if (!SR) return;
    const old = recRef.current;
    if (old) { old.onresult = old.onerror = old.onend = null; try { old.abort(); } catch { /* */ } }
    const r = new SR();
    recRef.current = r;
    r.lang = locRef.current;
    r.interimResults = true;
    r.continuous = !/Android/i.test(navigator.userAgent);
    r.onstart = () => setOn(true);
    r.onresult = (e: Rec) => {
      let im = "";
      for (let i = e.resultIndex; i < e.results.length; i++) {
        const x = e.results[i];
        if (x.isFinal) add(x[0].transcript); else im += x[0].transcript;
      }
      setInterim(im);
    };
    r.onerror = (e: Rec) => {
      const tt = tRef.current;
      const map: Record<string, string> = {
        "not-allowed": tt("deny"), "service-not-allowed": tt("deny"),
        "audio-capture": tt("audio"), network: tt("network"), "language-not-supported": tt("langNo"),
      };
      if (e.error === "not-allowed" || e.error === "service-not-allowed") setDenied(true);
      if (map[e.error]) { want.current = false; say(map[e.error]); }
      else if (e.error !== "no-speech" && e.error !== "aborted") say(tt("err") + e.error);
    };
    r.onend = () => {
      setInterim("");
      if (want.current) setTimeout(() => { if (want.current) begin(); }, 250);
      else setOn(false);
    };
    try { r.start(); } catch { want.current = false; setOn(false); }
  }, [add, say]);

  const toggle = async () => {
    if (want.current) {
      want.current = false;
      try { recRef.current?.stop(); } catch { /* */ }
      setOn(false); setInterim("");
      return;
    }
    say(""); setDenied(false); want.current = true;
    const md = navigator.mediaDevices;
    if (!md?.getUserMedia) { begin(); return; }
    try {
      const st = await md.getUserMedia({ audio: true });
      st.getTracks().forEach((tr) => tr.stop());
    } catch (e) {
      want.current = false;
      const n = (e as { name?: string })?.name;
      if (n === "NotAllowedError" || n === "SecurityError") { setDenied(true); say(t("deny")); }
      else if (n === "NotFoundError" || n === "NotReadableError") say(t("audio"));
      else say(t("err") + (n || "mic"));
      return;
    }
    if (want.current) begin();
  };

  const changeLoc = (v: string) => {
    setLoc(v); locRef.current = v; store.set("stt-lang", v);
    if (want.current && recRef.current) try { recRef.current.stop(); } catch { /* restarts via onend */ }
  };

  const copy = async () => {
    if (!text) return;
    try { await navigator.clipboard.writeText(text); say(t("copied"), 1800); }
    catch {
      const o = outRef.current;
      o?.focus(); o?.select(); o?.setSelectionRange(0, text.length);
      say(document.execCommand("copy") ? t("copied") : t("copyFail"), 1800);
    }
  };

  const clear = () => {
    if (!text) return;
    if (!armed) { setArmed(true); armTm.current = setTimeout(() => setArmed(false), 2500); return; }
    clearTimeout(armTm.current); setArmed(false); setText("");
  };

  const absUrl = "https://nibrascode.com" + localeHref(lang, "/voice");
  const words = (text.trim().match(/\S+/g) || []).length;
  const shownNote = !supported ? { t: t("unsupported"), err: true } : note;

  return (
    <main className="voice-page mx-auto w-full max-w-2xl px-4 pt-28 pb-16 md:px-6" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <header className="mb-6 flex items-center gap-4">
        <span className="grid size-12 shrink-0 place-items-center rounded-2xl border border-white/15 bg-white/5 text-amber-200 md:size-14"><Mic size={24} /></span>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight md:text-3xl">{t("title")}</h1>
          <p className="mt-1 text-sm text-muted">{t("lead")}</p>
        </div>
      </header>

      <label className="mb-5 flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
        <span className="text-muted">{t("speechLang")}</span>
        <select value={loc} onChange={(e) => changeLoc(e.target.value)} className="rounded-lg border border-white/15 bg-[#0c1220] px-3 py-1.5 text-white">
          {LOCALES.map(([v, n]) => <option key={v} value={v}>{n}</option>)}
        </select>
      </label>

      <div className="mb-5 flex flex-col items-center gap-3">
        <button
          type="button"
          onClick={toggle}
          disabled={!supported}
          aria-pressed={on}
          aria-label={on ? t("stop") : t("start")}
          className={`voice-mic${on ? " on" : ""}`}
        >
          {on ? <Square size={30} fill="currentColor" /> : <Mic size={36} />}
        </button>
        <p className={`min-h-[1.5em] text-center text-sm ${interim ? "italic text-white/80" : "text-muted"}`} aria-live="polite">
          {interim || (on ? t("listening") : t("ready"))}
        </p>
        <p className="-mt-2 text-center text-[11px] text-white/45">{t("upHint")}</p>
      </div>

      <div className={`voice-sheet${on ? " on-air" : ""}`}>
        <textarea
          ref={outRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={t("placeholder")}
          dir="auto"
          className="block h-64 w-full resize-y bg-transparent p-4 text-base leading-relaxed text-white outline-none placeholder:text-white/35"
        />
        <div className="flex items-center justify-between gap-2 border-t border-white/10 px-3 py-2">
          <span className="text-xs text-muted">{words} {t("words")} · {text.length} {t("chars")}</span>
          <div className="flex gap-2">
            <button type="button" onClick={copy} disabled={!text} className="voice-btn"><Copy size={15} />{t("copy")}</button>
            <button type="button" onClick={clear} disabled={!text} className={`voice-btn${armed ? " warn" : ""}`}><Trash2 size={15} />{armed ? t("again") : t("clear")}</button>
          </div>
        </div>
      </div>

      {shownNote ? (
        <p role="status" className={`mt-3 rounded-xl px-4 py-2 text-sm ${shownNote.err ? "border border-red-400/30 bg-red-500/10 text-red-200" : "border border-emerald-400/30 bg-emerald-500/10 text-emerald-200"}`}>{shownNote.t}</p>
      ) : null}

      {embedded || denied ? (
        <div className="mt-3 rounded-xl border border-amber-200/30 bg-amber-200/[0.06] p-4 text-sm text-[#e8eeff]">
          {embedded ? <p className="mb-2">{t("embedded")}</p> : null}
          {denied ? <p className="mb-3 text-[#d5def0]">{t("steps")}</p> : null}
          <div className="flex flex-wrap gap-2">
            <a href={absUrl} target="_blank" rel="noopener" className="inline-flex items-center gap-1.5 rounded-full bg-amber-200 px-4 py-1.5 font-semibold text-[#0c1220]"><ExternalLink size={15} />{t("openBrowser")}</a>
            <button type="button" className="voice-btn" onClick={async () => { try { await navigator.clipboard.writeText(absUrl); say(t("copied"), 1800); } catch { say(absUrl); } }}><Copy size={15} />{t("copyLink")}</button>
          </div>
          <p className="mt-2 break-all text-xs text-muted" dir="ltr">{absUrl}</p>
        </div>
      ) : null}

      <p className="mt-6 text-xs leading-relaxed text-muted">{t("privacy")}</p>
    </main>
  );
}
