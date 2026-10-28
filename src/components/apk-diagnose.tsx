import { useEffect, useState } from "react";
import { Stethoscope } from "lucide-react";
import type { Lang } from "@/lib/i18n";
import { searchTopicPath } from "@/lib/search-pages";

type L5 = Record<Lang, string>;
const L = (az: string, en: string, tr: string, ar: string, ru: string): L5 => ({ az, en, tr, ar, ru });

type Err = "notinst" | "parse" | "protect" | "sign" | "invalid" | "corrupt" | "old" | "device";
type Ver = "lt7" | "7" | "8to13" | "14";
type Ext = "apk" | "xapk" | "aab";

const ERRS: [Err, L5, string][] = [
  ["notinst", L("«Tətbiq quraşdırılmadı»", "«App not installed»", "«Uygulama yüklenmedi»", "«لم يتم تثبيت التطبيق»", "«Приложение не установлено»"), "apk-qurulmur"],
  ["parse", L("«Paket təhlil edilərkən xəta»", "«There was a problem parsing the package»", "«Paket ayrıştırılırken sorun»", "«حدثت مشكلة أثناء تحليل الحزمة»", "«Ошибка при синтаксическом анализе пакета»"), "parse-error"],
  ["protect", L("Play Protect bloklayır", "Play Protect blocks it", "Play Protect engelliyor", "Play Protect يحظره", "Play Protect блокирует"), "play-protect-bloklayir"],
  ["sign", L("İmza uyğun deyil / mövcud tətbiqlə toqquşur", "Signature mismatch / conflicts with installed app", "İmza uyuşmuyor / yüklü uygulamayla çakışıyor", "التوقيع لا يطابق / يتعارض مع تطبيق مثبت", "Подпись не совпадает / конфликт с установленным"), "imza-uygun-deyil"],
  ["invalid", L("«Paket etibarsızdır»", "«Package appears to be invalid»", "«Paket geçersiz görünüyor»", "«يبدو أن الحزمة غير صالحة»", "«Пакет недействителен»"), "paket-etibarsizdir"],
  ["corrupt", L("Fayl zədələnib / tam yüklənməyib", "File is corrupt / incomplete download", "Dosya bozuk / tam inmemiş", "الملف تالف / التنزيل ناقص", "Файл повреждён / скачан не полностью"), "apk-fayli-zedelenib"],
  ["old", L("Köhnə versiya qurulmur", "An older version won't install", "Eski sürüm kurulmuyor", "لا يُثبَّت إصدار أقدم", "Старая версия не ставится"), "kohne-versiya-qurulmur"],
  ["device", L("«Telefonunuz bu versiyaya uyğun deyil»", "«Your device isn't compatible»", "«Cihazınız uyumlu değil»", "«جهازك غير متوافق»", "«Устройство несовместимо»"), "telefon-uygun-deyil"],
];

const T = {
  title: L("APK xəta diaqnostikası — 3 sual", "APK error diagnosis — 3 questions", "APK hata teşhisi — 3 soru", "تشخيص أخطاء APK — 3 أسئلة", "Диагностика ошибки APK — 3 вопроса"),
  q1: L("Hansı xəta çıxır?", "What error appears?", "Hangi hata çıkıyor?", "ما الخطأ الذي يظهر؟", "Какая ошибка появляется?"),
  q2: L("Android versiyanız nədir?", "What is your Android version?", "Android sürümünüz nedir?", "ما إصدار Android لديك؟", "Какая у вас версия Android?"),
  q3: L("Fayl .apk, .xapk yoxsa .aab-dir?", "Is the file .apk, .xapk or .aab?", "Dosya .apk mı, .xapk mı, .aab mi?", "هل الملف ‎.apk أم ‎.xapk أم ‎.aab؟", "Файл .apk, .xapk или .aab?"),
  det: L("Brauzer göstərir: Android {v}", "Your browser says: Android {v}", "Tarayıcı diyor: Android {v}", "يقول المتصفح: Android {v}", "Браузер сообщает: Android {v}"),
  ans: L("Həll", "Solution", "Çözüm", "الحل", "Решение"),
  open: L("Addım-addım bələdçini aç", "Open the step-by-step guide", "Adım adım rehberi aç", "افتح الدليل خطوة بخطوة", "Открыть пошаговую инструкцию"),
  again: L("Yenidən başla", "Start over", "Baştan başla", "ابدأ من جديد", "Начать сначала"),
  back: L("Geri", "Back", "Geri", "رجوع", "Назад"),
  v_lt7: L("7.0-dan köhnə", "Older than 7.0", "7.0'dan eski", "أقدم من 7.0", "Старше 7.0"),
  v_7: L("7.x", "7.x", "7.x", "7.x", "7.x"),
  v_8to13: L("8 – 13", "8 – 13", "8 – 13", "8 – 13", "8 – 13"),
  v_14: L("14 və yuxarı", "14 or newer", "14 ve üstü", "14 أو أحدث", "14 и новее"),
  e_apk: L(".apk (tək fayl)", ".apk (single file)", ".apk (tek dosya)", "‎.apk (ملف واحد)", ".apk (один файл)"),
  e_xapk: L(".xapk / .apks / .apkm", ".xapk / .apks / .apkm", ".xapk / .apks / .apkm", "‎.xapk / .apks / .apkm", ".xapk / .apks / .apkm"),
  e_aab: L(".aab", ".aab", ".aab", "‎.aab", ".aab"),
  tooOld: L("Android 7.0-dan köhnə cihazda Nibras tətbiqləri qurulmur (minSdk 24). Veb alətləri brauzerdə istifadə edin.", "Nibras apps don't install below Android 7.0 (minSdk 24). Use the web tools in the browser instead.", "Nibras uygulamaları Android 7.0 altında kurulmaz (minSdk 24). Web araçlarını tarayıcıda kullanın.", "لا تُثبَّت تطبيقات نبراس تحت Android 7.0 (minSdk 24). استخدم أدوات الويب في المتصفح.", "Приложения Nibras не ставятся ниже Android 7.0 (minSdk 24). Используйте веб-инструменты в браузере."),
  aab: L(".aab faylı telefona birbaşa qurulmur — bu Google Play üçün paketdir. Tətbiqi Google Play-dən yükləyin və ya .apk versiyasını tapın.", ".aab files can't be installed on a phone directly — they're for Google Play. Install from Google Play or get the .apk.", ".aab dosyası telefona doğrudan kurulmaz — Google Play içindir. Google Play'den yükleyin ya da .apk sürümünü bulun.", "ملفات ‎.aab لا تُثبَّت مباشرة على الهاتف، فهي مخصصة لـ Google Play. ثبّت من Google Play أو احصل على ‎.apk.", ".aab нельзя установить на телефон напрямую — это пакет для Google Play. Установите из Google Play или найдите .apk."),
  xapk: L(".xapk bir neçə APK-dan ibarət arxivdir; sistem quraşdırıcısı onu açmır. SAI (Split APKs Installer) və ya APKMirror Installer kimi split-quraşdırıcıdan istifadə edin.", ".xapk is an archive of several APKs; the system installer can't open it. Use a split installer such as SAI or APKMirror Installer.", ".xapk birkaç APK içeren bir arşivdir; sistem yükleyicisi açamaz. SAI ya da APKMirror Installer gibi bir split yükleyici kullanın.", "‎.xapk أرشيف يضم عدة ملفات APK ولا يفتحه مثبّت النظام. استخدم مثبّتاً مثل SAI أو APKMirror Installer.", ".xapk — архив из нескольких APK; системный установщик его не открывает. Используйте SAI или APKMirror Installer."),
  unk7: L("Android 7-də: Parametrlər → Təhlükəsizlik → «Naməlum mənbələr»i açın.", "On Android 7: Settings → Security → turn on «Unknown sources».", "Android 7'de: Ayarlar → Güvenlik → «Bilinmeyen kaynaklar»ı açın.", "في Android 7: الإعدادات ← الأمان ← فعّل «مصادر غير معروفة».", "На Android 7: Настройки → Безопасность → включите «Неизвестные источники»."),
  unk8: L("Android 8+: faylı açdığınız tətbiqə (brauzer və ya Fayllar) «Naməlum tətbiqləri quraşdır» icazəsi verin.", "Android 8+: give the app you open the file from (browser or Files) the «Install unknown apps» permission.", "Android 8+: dosyayı açtığınız uygulamaya (tarayıcı ya da Dosyalar) «Bilinmeyen uygulamaları yükle» izni verin.", "Android 8+: امنح التطبيق الذي تفتح منه الملف (المتصفح أو الملفات) إذن «تثبيت تطبيقات غير معروفة».", "Android 8+: дайте приложению, из которого открываете файл (браузер или «Файлы»), разрешение «Установка неизвестных приложений»."),
  a14: L("Android 14+ çox köhnə hədəfli (targetSdk < 23) APK-ları bloklayır; tətbiqin yeni versiyasını götürün.", "Android 14+ blocks APKs with a very old target (targetSdk < 23); get a newer version of the app.", "Android 14+ çok eski hedefli (targetSdk < 23) APK'ları engeller; uygulamanın yeni sürümünü alın.", "يحظر Android 14+ ملفات APK ذات الهدف القديم جداً (targetSdk < 23)؛ احصل على إصدار أحدث.", "Android 14+ блокирует APK со старым target (targetSdk < 23); возьмите новую версию."),
};

const TIP: Record<Err, L5> = {
  notinst: L("Ən çox səbəb: köhnə versiya fərqli imza ilə qurulub və ya yaddaş azdır. Köhnəni silib yenidən cəhd edin, 200 MB+ boş yer saxlayın.", "Most often: an old copy signed with a different key is installed, or storage is low. Uninstall the old one, keep 200 MB+ free, retry.", "En sık neden: farklı imzalı eski sürüm yüklü ya da depolama az. Eskisini kaldırın, 200 MB+ boş yer bırakın, tekrar deneyin.", "السبب الأكثر شيوعاً: نسخة قديمة بتوقيع مختلف مثبّتة أو المساحة قليلة. احذف القديمة واترك 200 ميغابايت وأعد المحاولة.", "Чаще всего: установлена старая копия с другой подписью или мало места. Удалите старую, освободите 200 МБ+, повторите."),
  parse: L("Fayl ya tam yüklənməyib, ya da Android versiyanız üçün yeni deyil. Faylı yenidən yükləyin (ölçüsünü yoxlayın).", "The file is incomplete or built for a newer Android than yours. Download it again and check the size.", "Dosya eksik inmiş ya da sizin Android'iniz için fazla yeni. Yeniden indirip boyutu kontrol edin.", "الملف ناقص أو مبني لإصدار Android أحدث. نزّله مجدداً وتحقق من الحجم.", "Файл скачан не полностью или собран для более нового Android. Скачайте заново и проверьте размер."),
  protect: L("Play Protect tanımadığı APK-nı xəbərdar edir. «Daha ətraflı → Yenə də quraşdır» seçin; yalnız rəsmi mənbədən yüklədiyiniz fayla edin.", "Play Protect warns about APKs it doesn't know. Tap «More details → Install anyway» — only for files from the official source.", "Play Protect tanımadığı APK için uyarır. «Daha fazla ayrıntı → Yine de yükle» seçin; yalnızca resmi kaynaktan indirdiğiniz dosyada.", "يحذّر Play Protect من ملفات لا يعرفها. اختر «مزيد من التفاصيل ← التثبيت على أي حال»، فقط لملف من المصدر الرسمي.", "Play Protect предупреждает о незнакомых APK. Нажмите «Подробнее → Всё равно установить» — только для файлов из официального источника."),
  sign: L("Telefondakı versiya başqa açarla imzalanıb (məs. Play versiyası). Məlumatı saxlayın, köhnə tətbiqi silin, sonra quraşdırın.", "The installed copy is signed with another key (e.g. the Play version). Back up, uninstall it, then install.", "Yüklü sürüm başka anahtarla imzalanmış (ör. Play sürümü). Yedekleyin, kaldırın, sonra yükleyin.", "النسخة المثبّتة موقّعة بمفتاح آخر (مثل نسخة Play). احفظ بياناتك واحذفها ثم ثبّت.", "Установленная копия подписана другим ключом (например, версия из Play). Сделайте копию, удалите, затем установите."),
  invalid: L("Fayl adı/uzantısı dəyişib və ya yükləmə qırılıb. Faylı brauzerlə yenidən yükləyin, adının sonu .apk olsun.", "The file name/extension changed or the download broke. Re-download in the browser and make sure it ends with .apk.", "Dosya adı/uzantısı değişmiş ya da indirme kesilmiş. Tarayıcıyla yeniden indirin, sonu .apk olsun.", "تغيّر اسم الملف أو امتداده أو انقطع التنزيل. أعد التنزيل وتأكد أنه ينتهي بـ ‎.apk.", "Изменилось имя/расширение или прервалась загрузка. Скачайте заново, файл должен заканчиваться на .apk."),
  corrupt: L("Yükləməni Wi‑Fi ilə təkrarlayın; messencerlər faylı sıxa və ya korlaya bilər — birbaşa linkdən yükləyin.", "Re-download over Wi‑Fi; messengers can compress or break files — use the direct link.", "Wi‑Fi ile yeniden indirin; mesajlaşma uygulamaları dosyayı bozabilir — doğrudan bağlantıyı kullanın.", "أعد التنزيل عبر Wi‑Fi؛ قد تُتلف تطبيقات المراسلة الملف — استخدم الرابط المباشر.", "Скачайте заново по Wi‑Fi; мессенджеры могут испортить файл — используйте прямую ссылку."),
  old: L("Android daha yeni versiyanın üstünə köhnəni qoymur. Yeni versiyanı silin (məlumat gedə bilər) və ya ən son versiyanı qurun.", "Android won't put an older version over a newer one. Uninstall the newer one (data may be lost) or install the latest.", "Android eski sürümü yeninin üstüne kurmaz. Yeniyi kaldırın (veriler gidebilir) ya da en son sürümü kurun.", "لا يثبّت Android إصداراً أقدم فوق أحدث. احذف الأحدث (قد تضيع البيانات) أو ثبّت الأخير.", "Android не ставит старую версию поверх новой. Удалите новую (данные могут пропасть) или поставьте последнюю."),
  device: L("Prosessor arxitekturası (arm64/armeabi) və ya Android versiyası uyğun deyil. Cihazınıza uyğun APK variantını götürün.", "CPU architecture (arm64/armeabi) or Android version doesn't match. Get the APK variant for your device.", "İşlemci mimarisi (arm64/armeabi) ya da Android sürümü uymuyor. Cihazınıza uygun APK varyantını alın.", "معمارية المعالج (arm64/armeabi) أو إصدار Android غير متوافق. احصل على نسخة APK المناسبة لجهازك.", "Не совпадает архитектура (arm64/armeabi) или версия Android. Возьмите APK под ваше устройство."),
};

function detect(): { ver: Ver; label: string } | null {
  if (typeof navigator === "undefined") return null;
  const m = navigator.userAgent.match(/Android\s+(\d+)(?:\.(\d+))?/i);
  if (!m) return null;
  const n = Number(m[1]);
  return { ver: n < 7 ? "lt7" : n === 7 ? "7" : n >= 14 ? "14" : "8to13", label: m[2] ? `${m[1]}.${m[2]}` : m[1] };
}

const chip = "rounded-xl border border-white/15 px-3 py-2 text-start text-sm hover:border-primary hover:bg-white/10";

/** Nibras Logic for APK install errors: 3 questions → exact guide + tailored tips. */
export function ApkDiagnose({ lang }: { lang: Lang }) {
  const [err, setErr] = useState<Err | null>(null);
  const [ver, setVer] = useState<Ver | null>(null);
  const [ext, setExt] = useState<Ext | null>(null);
  const [auto, setAuto] = useState<{ ver: Ver; label: string } | null>(null);
  useEffect(() => setAuto(detect()), []);
  const step = !err ? 1 : !ver ? 2 : !ext ? 3 : 4;
  const reset = () => { setErr(null); setVer(null); setExt(null); };
  const back = () => (ext ? setExt(null) : ver ? setVer(null) : setErr(null));

  let guide = "", lines: string[] = [];
  if (step === 4 && err && ver && ext) {
    if (ext === "aab") { guide = "apk-qurulmur"; lines = [T.aab[lang]]; }
    else if (ext === "xapk") { guide = "xapk-qurulmur"; lines = [T.xapk[lang]]; }
    else if (ver === "lt7") { guide = "telefon-uygun-deyil"; lines = [T.tooOld[lang]]; }
    else {
      guide = ERRS.find((e) => e[0] === err)![2];
      lines = [TIP[err][lang], ver === "7" ? T.unk7[lang] : T.unk8[lang]];
      if (ver === "14") lines.push(T.a14[lang]);
    }
  }
  return (
    <section className="my-6 rounded-2xl border border-emerald-400/30 bg-emerald-500/[0.06] p-4" data-testid="apk-diagnose" data-nosnippet>
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold"><Stethoscope className="size-5" />{T.title[lang]}</h2>
      <ol className="mb-3 flex gap-2 text-xs text-muted">{[1, 2, 3].map((n) => <li key={n} className={`rounded-full px-2 py-0.5 ${step >= n ? "bg-primary/30 text-fg" : "bg-white/5"}`}>{n}</li>)}</ol>
      {step === 1 ? (<><p className="mb-2 font-medium">{T.q1[lang]}</p><div className="grid gap-2 sm:grid-cols-2">{ERRS.map(([id, l]) => <button key={id} type="button" className={chip} onClick={() => setErr(id)} data-testid={`dx-err-${id}`}>{l[lang]}</button>)}</div></>) : null}
      {step === 2 ? (<><p className="mb-2 font-medium">{T.q2[lang]}</p>{auto ? <p className="mb-2 text-xs text-emerald-300">{T.det[lang].replace("{v}", auto.label)}</p> : null}<div className="grid gap-2 sm:grid-cols-4">{(["lt7", "7", "8to13", "14"] as Ver[]).map((v) => <button key={v} type="button" className={`${chip} ${auto?.ver === v ? "border-emerald-400" : ""}`} onClick={() => setVer(v)} data-testid={`dx-ver-${v}`}>{T[`v_${v}` as const][lang]}</button>)}</div></>) : null}
      {step === 3 ? (<><p className="mb-2 font-medium">{T.q3[lang]}</p><div className="grid gap-2 sm:grid-cols-3">{(["apk", "xapk", "aab"] as Ext[]).map((e) => <button key={e} type="button" className={chip} onClick={() => setExt(e)} data-testid={`dx-ext-${e}`}>{T[`e_${e}` as const][lang]}</button>)}</div></>) : null}
      {step === 4 ? (
        <div data-testid="dx-result">
          <p className="mb-2 font-semibold text-emerald-300">{T.ans[lang]}</p>
          <ul className="list-disc space-y-1 ps-5 text-sm">{lines.map((l) => <li key={l}>{l}</li>)}</ul>
          <a href={searchTopicPath(lang, "xeta", guide)} className="mt-3 inline-block rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-white">{T.open[lang]} →</a>
        </div>
      ) : null}
      {step > 1 ? <div className="mt-3 flex gap-3 text-sm"><button type="button" className="text-muted hover:text-fg" onClick={back}>← {T.back[lang]}</button><button type="button" className="text-muted hover:text-fg" onClick={reset}>{T.again[lang]}</button></div> : null}
    </section>
  );
}
