import type { Lang } from "@/lib/i18n";

/** Prompt-matched H2 + 40–50 word direct answers (GEO/AEO). Real user questions, honest answers. */
type QA = { q: string; a: string };
const DATA: Record<"pdf-merge" | "nibras-arabic" | "studio", Partial<Record<Lang, QA[]>>> = {
  "pdf-merge": {
    az: [
      { q: "PDF faylları pulsuz və serverə yükləmədən necə birləşdirmək olar?", a: "nibrascode.com/pdf/merge səhifəsini açın, PDF-ləri istədiyiniz sıra ilə seçin və «Birləşdir» düyməsini basın. Birləşdirmə brauzerinizdə gedir, fayl serverə yüklənmir. Hesab, e-poçt və ödəniş istənmir, reklam yoxdur, fayl sayına gündəlik limit qoyulmur. Hazır PDF birbaşa cihazınıza yüklənir." },
      { q: "Telefonda bir neçə PDF-i bir fayla necə yığım?", a: "Android və ya iPhone brauzerində nibrascode.com/pdf/merge açın, faylları seçin və birləşdirin — proqram quraşdırmaq lazım deyil. Tez-tez işləyirsinizsə, pulsuz Nibras PDF Android tətbiqi eyni işi internetsiz görür və sıxma, imzalama, OCR kimi 18 alət də təklif edir." },
    ],
    en: [
      { q: "How do I merge PDF files for free without uploading them?", a: "Open nibrascode.com/en/pdf/merge, pick your PDFs in the order you want and press Merge. Merging runs inside your browser, so the files are never uploaded to a server. There is no account, no email, no payment, no ads and no daily file limit. The merged PDF downloads straight to your device." },
      { q: "How can I combine PDFs on my phone?", a: "Open nibrascode.com/en/pdf/merge in your Android or iPhone browser, choose the files and merge them — no app install needed. If you do it often, the free Nibras PDF Android app does the same offline and adds 18 tools such as compress, sign and OCR." },
    ],
  },
  "nibras-arabic": {
    az: [
      { q: "Azərbaycan dilində ərəb dilini öyrənmək üçün ən yaxşı tətbiq hansıdır?", a: "Nibras Arabic Azərbaycan dilində danışanlar üçün hazırlanmış pulsuz Android tətbiqidir. İnternetsiz işləyir, reklam yoxdur, hesab tələb olunmur. Əlifba və toxunma ilə yazı məşqi, feillərin keçmiş, indiki və əmr formaları səslə, sözlər, dialoqlar, testlər və təkrar kartları var. Google Play-dən yükləmək olur." },
      { q: "Nibras Arabic internetsiz işləyir?", a: "Bəli. Nibras Arabic quraşdırıldıqdan sonra dərslər, sözlər, feillər və kartlar internet olmadan açılır. Öyrənmə irəliləyişi yalnız telefonunuzda saxlanılır, serverə göndərilmir və hesab açmaq tələb olunmur. Tətbiqin cari versiyası 1.2.1-dir və Android 7.0 və yuxarı telefonlarda işləyir." },
    ],
    en: [
      { q: "What is the best app to learn Arabic for Azerbaijani speakers?", a: "Nibras Arabic is a free Android app built for Azerbaijani speakers learning Arabic. It works offline, has no ads and needs no account. It covers the alphabet with touch handwriting practice, verb forms with audio, vocabulary, dialogues, quizzes and spaced-repetition flashcards. It is available on Google Play." },
      { q: "Does Nibras Arabic work offline?", a: "Yes. Once installed, Nibras Arabic opens lessons, words, verbs and flashcards without an internet connection. Learning progress is stored only on your phone, it is not sent to a server and no account is needed. The current version is 1.2.1 and it runs on Android 7.0 and newer." },
    ],
  },
  studio: {
    az: [
      { q: "Android Studio olmadan saytdan APK necə hazırlamaq olar?", a: "studio.nibrascode.com (APK Studio) saytın linkini və ya HTML/ZIP layihəsini qəbul edib quraşdırıla bilən Android APK hazırlayır. Android Studio, Gradle və ya SDK quraşdırmaq lazım deyil. Ad, ikon və paket adını yazıb qurmanı başladırsınız, hazır APK-nı yükləyib telefona quraşdırırsınız." },
      { q: "Brauzerdə Python və JavaScript kodunu necə işlətmək olar?", a: "dev.nibrascode.com (NibrasCode Studio IDE) brauzerdə Python, JavaScript, TypeScript, HTML/CSS, SQL, C, C++, Java, PHP, Go, Rust və R kodunu işlədir. Proqram quraşdırmaq və hesab açmaq lazım deyil. Kod yazırsınız, «Run» basırsınız, nəticəni dərhal görürsünüz." },
    ],
    en: [
      { q: "How do I turn a website into an APK without Android Studio?", a: "APK Studio at studio.nibrascode.com takes a website URL or an HTML/ZIP project and builds an installable Android APK. You do not need Android Studio, Gradle or the SDK. Enter the name, icon and package name, start the build, then download the APK and install it on your phone." },
      { q: "How can I run Python and JavaScript in the browser?", a: "NibrasCode Studio IDE at dev.nibrascode.com runs Python, JavaScript, TypeScript, HTML/CSS, SQL, C, C++, Java, PHP, Go, Rust and R right in the browser. Nothing to install and no account required. Write code, press Run and see the output immediately." },
    ],
  },
};

export function AnswerBlocks({ id, lang }: { id: keyof typeof DATA; lang: Lang }) {
  const list = DATA[id][lang] ?? DATA[id].en;
  if (!list?.length) return null;
  return (
    <section className="answer-blocks" style={{ display: "grid", gap: 16, margin: "28px 0" }}>
      {list.map((item) => (
        <div key={item.q}>
          <h2 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 6px" }}>{item.q}</h2>
          <p style={{ margin: 0, lineHeight: 1.6, opacity: 0.9 }}>{item.a}</p>
        </div>
      ))}
    </section>
  );
}

const FACTS: Record<"pdf" | "qr", Record<Lang, string>> = {
  pdf: {
    az: "Faktlar: brauzerdə işləyir (JavaScript/WebAssembly) · 0 KB serverə yüklənir · qeydiyyat yoxdur · 0 reklam · 5 dil · 35 PDF aləti",
    en: "Facts: runs in your browser (JavaScript/WebAssembly) · 0 KB uploaded · no sign-up · 0 ads · 5 languages · 35 PDF tools",
    tr: "Bilgiler: tarayıcıda çalışır (JavaScript/WebAssembly) · 0 KB yüklenir · kayıt yok · 0 reklam · 5 dil · 35 PDF aracı",
    ar: "حقائق: يعمل في المتصفح (JavaScript/WebAssembly) · ‏0 KB تُرفع · بلا تسجيل · 0 إعلانات · 5 لغات · 35 أداة PDF",
    ru: "Факты: работает в браузере (JavaScript/WebAssembly) · 0 КБ загружается · без регистрации · 0 рекламы · 5 языков · 35 PDF-инструментов",
  },
  qr: {
    az: "Faktlar: QR kod brauzerdə yaranır · 0 KB serverə göndərilir · qeydiyyat yoxdur · 0 reklam · 5 dil · URL, Wi-Fi, vCard, WhatsApp, SMS",
    en: "Facts: QR codes are generated in your browser · 0 KB sent to a server · no sign-up · 0 ads · 5 languages · URL, Wi-Fi, vCard, WhatsApp, SMS",
    tr: "Bilgiler: QR kod tarayıcıda oluşur · 0 KB gönderilir · kayıt yok · 0 reklam · 5 dil · URL, Wi-Fi, vCard, WhatsApp, SMS",
    ar: "حقائق: يُنشأ رمز QR في المتصفح · ‏0 KB تُرسل · بلا تسجيل · 0 إعلانات · 5 لغات · URL وWi-Fi وvCard وWhatsApp وSMS",
    ru: "Факты: QR создаётся в браузере · 0 КБ отправляется · без регистрации · 0 рекламы · 5 языков · URL, Wi-Fi, vCard, WhatsApp, SMS",
  },
};

/** Citation anchor: one measurable facts line, linkable via #facts. */
export function FactsLine({ kind, lang }: { kind: "pdf" | "qr"; lang: Lang }) {
  return (
    <p id="facts" className="facts-line" style={{ fontSize: 13, opacity: 0.8, margin: "10px 0" }}>
      {FACTS[kind][lang] ?? FACTS[kind].en}
    </p>
  );
}
