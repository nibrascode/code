import type { Lang } from "@/lib/i18n";

type QA = { q: string; a: string };
type Meta = { title: string; description: string; h1: string; lead: string; faq: QA[] };
export const VIDEO_PATHS = ["/video", "/video/trim", "/video/convert", "/video/merge", "/video/audio"] as const;
type VP = (typeof VIDEO_PATHS)[number];

const PRIV: Record<Lang, QA> = {
  az: { q: "Video serverə gedir?", a: "Xeyr. Video bu brauzerdə ffmpeg ilə işlənir və cihazdan çıxmır." },
  en: { q: "Does the video go to a server?", a: "No. The video is processed with ffmpeg in this browser and never leaves the device." },
  tr: { q: "Video sunucuya gider mi?", a: "Hayır. Video bu tarayıcıda ffmpeg ile işlenir, cihazdan çıkmaz." },
  ar: { q: "هل يذهب الفيديو إلى خادم؟", a: "لا. يُعالج الفيديو بـ ffmpeg في هذا المتصفح ولا يغادر الجهاز." },
  ru: { q: "Видео уходит на сервер?", a: "Нет. Видео обрабатывается ffmpeg в этом браузере и не покидает устройство." },
};
const SIZE: Record<Lang, QA> = {
  az: { q: "Böyük video olar?", a: "İlk açılışda ~30 MB mühərrik yüklənir. Telefonda 200 MB-a qədər video rahat işləyir, daha böyüyü yavaş ola bilər." },
  en: { q: "Are big videos OK?", a: "The first run loads a ~30 MB engine. Up to about 200 MB works well on a phone; bigger files can be slow." },
  tr: { q: "Büyük video olur mu?", a: "İlk açılışta ~30 MB motor yüklenir. Telefonda 200 MB'a kadar rahat çalışır, daha büyüğü yavaş olabilir." },
  ar: { q: "هل تعمل الفيديوهات الكبيرة؟", a: "يُحمَّل محرك بحجم ~30 ميغابايت أول مرة. حتى نحو 200 ميغابايت يعمل جيداً على الهاتف، والأكبر قد يكون بطيئاً." },
  ru: { q: "Большие видео подойдут?", a: "При первом запуске грузится движок ~30 МБ. До ~200 МБ хорошо работает на телефоне, больше может быть медленно." },
};
const m = (title: string, description: string, h1: string, lead: string, q: QA, lang: Lang): Meta => ({ title, description, h1, lead, faq: [q, SIZE[lang], PRIV[lang]] });

export const VIDEO_KIT: Record<VP, Record<Lang, Meta>> = {
  "/video": {
    az: m("Video alətləri — pulsuz, brauzerdə", "Videonu kəs, MP4/WebM/GIF-ə çevir, birləşdir, səsini MP3 kimi çıxar. Hesabsız, video cihazdan çıxmır.", "Video alətləri", "Kəs, çevir, birləşdir, səsini çıxar. Pulsuz, hesabsız, video brauzerdən çıxmır.", { q: "Hansı formatlar açılır?", a: "MP4, MOV, WebM, MKV, AVI və brauzerin oxuya bildiyi əksər videolar." }, "az"),
    en: m("Video tools — free, in your browser", "Trim video, convert to MP4/WebM/GIF, merge clips, extract audio as MP3. No account, the video stays on your device.", "Video tools", "Trim, convert, merge, extract audio. Free, no account, the video stays in your browser.", { q: "Which formats open?", a: "MP4, MOV, WebM, MKV, AVI and most videos your browser can read." }, "en"),
    tr: m("Video araçları — ücretsiz, tarayıcıda", "Video kes, MP4/WebM/GIF'e dönüştür, birleştir, sesi MP3 olarak çıkar. Hesapsız, video cihazdan çıkmaz.", "Video araçları", "Kes, dönüştür, birleştir, sesi çıkar. Ücretsiz, hesapsız, video tarayıcıdan çıkmaz.", { q: "Hangi biçimler açılır?", a: "MP4, MOV, WebM, MKV, AVI ve tarayıcının okuyabildiği çoğu video." }, "tr"),
    ar: m("أدوات الفيديو — مجاناً في المتصفح", "قصّ الفيديو، حوّله إلى MP4/WebM/GIF، ادمج المقاطع، واستخرج الصوت MP3. بلا حساب، والفيديو يبقى على جهازك.", "أدوات الفيديو", "قصّ وحوّل وادمج واستخرج الصوت. مجاناً وبلا حساب، والفيديو يبقى في المتصفح.", { q: "ما الصيغ المدعومة؟", a: "MP4 وMOV وWebM وMKV وAVI ومعظم الفيديوهات التي يقرؤها المتصفح." }, "ar"),
    ru: m("Видео-инструменты — бесплатно, в браузере", "Обрезать видео, конвертировать в MP4/WebM/GIF, склеить клипы, извлечь звук в MP3. Без аккаунта, видео остаётся на устройстве.", "Видео-инструменты", "Обрезка, конвертация, склейка, извлечение звука. Бесплатно, без аккаунта, видео остаётся в браузере.", { q: "Какие форматы открываются?", a: "MP4, MOV, WebM, MKV, AVI и большинство видео, которые читает браузер." }, "ru"),
  },
  "/video/trim": {
    az: m("Video kəs — onlayn, pulsuz", "Videonun lazım olan hissəsini başlanğıc və son vaxtla kəs. Yenidən kodlaşdırmadan sürətli rejim var. Video brauzerdən çıxmır.", "Video kəs", "Başlanğıc və sonu seçin, lazım olan hissəni saxlayın. Pulsuz, hesabsız.", { q: "«Sürətli» rejim nədir?", a: "Video yenidən kodlaşdırılmır, ona görə saniyələr çəkir; amma kəsik ən yaxın açar kadra düşə bilər. Dəqiq kəsik üçün onu söndürün." }, "az"),
    en: m("Trim video online — free", "Cut the part of a video you need by start and end time. A fast mode skips re-encoding. The video stays in your browser.", "Trim video", "Pick a start and end and keep just that part. Free, no account.", { q: "What is «Fast» mode?", a: "The video is not re-encoded, so it takes seconds, but the cut may snap to the nearest keyframe. Turn it off for an exact cut." }, "en"),
    tr: m("Video kes — çevrim içi, ücretsiz", "Videonun gereken kısmını başlangıç ve bitiş zamanıyla kesin. Yeniden kodlamasız hızlı mod var. Video tarayıcıdan çıkmaz.", "Video kes", "Başlangıç ve bitişi seçin, gereken kısmı saklayın. Ücretsiz, hesapsız.", { q: "«Hızlı» mod nedir?", a: "Video yeniden kodlanmaz, saniyeler sürer; ama kesim en yakın anahtar kareye kayabilir. Tam kesim için kapatın." }, "tr"),
    ar: m("قص الفيديو أونلاين — مجاناً", "اقطع الجزء الذي تحتاجه من الفيديو بوقت البداية والنهاية. وضع سريع بلا إعادة ترميز. الفيديو يبقى في المتصفح.", "قص الفيديو", "اختر البداية والنهاية واحتفظ بهذا الجزء فقط. مجاناً وبلا حساب.", { q: "ما الوضع «السريع»؟", a: "لا يُعاد ترميز الفيديو فيستغرق ثوانٍ، لكن القص قد ينتقل إلى أقرب إطار مفتاحي. أطفئه لقص دقيق." }, "ar"),
    ru: m("Обрезать видео онлайн — бесплатно", "Вырежьте нужную часть видео по времени начала и конца. Быстрый режим без перекодирования. Видео остаётся в браузере.", "Обрезать видео", "Выберите начало и конец и оставьте только эту часть. Бесплатно, без аккаунта.", { q: "Что такое «Быстро»?", a: "Видео не перекодируется, поэтому занимает секунды, но рез может сместиться к ближайшему ключевому кадру. Отключите для точного реза." }, "ru"),
  },
  "/video/convert": {
    az: m("Video çevir: MP4, WebM, GIF — pulsuz", "MOV, MKV, AVI, WebM videonu MP4, WebM və ya GIF-ə çevir. Ölçü və kadr sürətini seç. Video brauzerdən çıxmır.", "Video çevir və GIF", "Videonu MP4, WebM və ya GIF-ə çevirin. Pulsuz, hesabsız, video brauzerdən çıxmır.", { q: "GIF niyə böyük olur?", a: "GIF köhnə formatdır. Eni 480 px və 10–12 kadr/san seçin, uzun videonu əvvəl kəsin." }, "az"),
    en: m("Convert video: MP4, WebM, GIF — free", "Convert MOV, MKV, AVI or WebM to MP4, WebM or an animated GIF. Choose size and frame rate. The video stays in your browser.", "Convert video & GIF", "Turn a video into MP4, WebM or GIF. Free, no account, the video stays in your browser.", { q: "Why is the GIF so big?", a: "GIF is an old format. Pick 480 px width and 10–12 fps, and trim long videos first." }, "en"),
    tr: m("Video dönüştür: MP4, WebM, GIF — ücretsiz", "MOV, MKV, AVI, WebM videoyu MP4, WebM veya GIF'e dönüştürün. Boyut ve kare hızı seçin. Video tarayıcıdan çıkmaz.", "Video dönüştür ve GIF", "Videoyu MP4, WebM veya GIF'e çevirin. Ücretsiz, hesapsız, video tarayıcıdan çıkmaz.", { q: "GIF neden büyük?", a: "GIF eski bir biçim. 480 px genişlik ve 10–12 kare/sn seçin, uzun videoyu önce kesin." }, "tr"),
    ar: m("تحويل الفيديو: MP4 وWebM وGIF — مجاناً", "حوّل فيديو MOV أو MKV أو AVI أو WebM إلى MP4 أو WebM أو GIF متحرك. اختر الحجم وعدد الإطارات. الفيديو يبقى في المتصفح.", "تحويل الفيديو وGIF", "حوّل الفيديو إلى MP4 أو WebM أو GIF. مجاناً وبلا حساب، والفيديو يبقى في المتصفح.", { q: "لماذا GIF كبير؟", a: "GIF صيغة قديمة. اختر عرض 480 بكسل و10–12 إطاراً في الثانية، وقصّ الفيديو الطويل أولاً." }, "ar"),
    ru: m("Конвертировать видео: MP4, WebM, GIF — бесплатно", "Переведите MOV, MKV, AVI или WebM в MP4, WebM или GIF-анимацию. Выберите размер и частоту кадров. Видео остаётся в браузере.", "Конвертер видео и GIF", "Сделайте из видео MP4, WebM или GIF. Бесплатно, без аккаунта, видео остаётся в браузере.", { q: "Почему GIF такой большой?", a: "GIF — старый формат. Выберите ширину 480 px и 10–12 кадров/с, длинное видео сначала обрежьте." }, "ru"),
  },
  "/video/merge": {
    az: m("Videoları birləşdir — onlayn, pulsuz", "Bir neçə videonu ardıcıl bir MP4 faylında birləşdir. Sıranı dəyiş. Videolar brauzerdən çıxmır.", "Videoları birləşdir", "Klipləri seçin, sıralayın, bir video kimi yükləyin. Pulsuz, hesabsız.", { q: "Fərqli ölçülü videolar birləşir?", a: "Bəli. Hamısı eyni ölçüyə (məs. 720p) gətirilir, kənarlarda qara zolaq ola bilər." }, "az"),
    en: m("Merge videos online — free", "Join several videos one after another into a single MP4. Reorder clips. Videos stay in your browser.", "Merge videos", "Pick clips, put them in order, download one video. Free, no account.", { q: "Can different sizes be merged?", a: "Yes. All clips are scaled to one size (e.g. 720p); black bars may appear at the sides." }, "en"),
    tr: m("Videoları birleştir — çevrim içi, ücretsiz", "Birkaç videoyu art arda tek MP4 dosyasında birleştirin. Sırayı değiştirin. Videolar tarayıcıdan çıkmaz.", "Videoları birleştir", "Klipleri seçin, sıralayın, tek video olarak indirin. Ücretsiz, hesapsız.", { q: "Farklı boyutlu videolar birleşir mi?", a: "Evet. Hepsi aynı boyuta (ör. 720p) getirilir, kenarlarda siyah şerit olabilir." }, "tr"),
    ar: m("دمج الفيديوهات أونلاين — مجاناً", "ادمج عدة فيديوهات واحداً تلو الآخر في ملف MP4 واحد. غيّر الترتيب. الفيديوهات تبقى في المتصفح.", "دمج الفيديوهات", "اختر المقاطع ورتّبها ونزّلها فيديو واحداً. مجاناً وبلا حساب.", { q: "هل تُدمج فيديوهات بأحجام مختلفة؟", a: "نعم. تُضبط كلها على حجم واحد (مثل 720p) وقد تظهر حواف سوداء." }, "ar"),
    ru: m("Склеить видео онлайн — бесплатно", "Соедините несколько видео подряд в один MP4. Меняйте порядок. Видео остаются в браузере.", "Склеить видео", "Выберите клипы, расставьте по порядку, скачайте одно видео. Бесплатно, без аккаунта.", { q: "Можно склеить разные размеры?", a: "Да. Все клипы приводятся к одному размеру (например 720p), по краям могут быть чёрные полосы." }, "ru"),
  },
  "/video/audio": {
    az: m("Videodan səs çıxar: MP3, M4A, WAV — pulsuz", "Videonun səsini MP3, M4A və ya WAV faylı kimi çıxar. Video brauzerdən çıxmır.", "Videodan səs çıxar", "Videonun səsini MP3, M4A və ya WAV kimi yükləyin. Pulsuz, hesabsız.", { q: "Hansı format seçim?", a: "MP3 hər yerdə açılır. M4A çox vaxt itkisiz kopyalanır və sürətlidir. WAV montaj üçündür, böyük olur." }, "az"),
    en: m("Extract audio from video: MP3, M4A, WAV — free", "Pull the sound out of a video as MP3, M4A or WAV. The video stays in your browser.", "Extract audio from video", "Save a video's sound as MP3, M4A or WAV. Free, no account.", { q: "Which format should I pick?", a: "MP3 plays everywhere. M4A is often copied without loss and is fast. WAV is for editing and is large." }, "en"),
    tr: m("Videodan ses çıkar: MP3, M4A, WAV — ücretsiz", "Videonun sesini MP3, M4A veya WAV dosyası olarak çıkarın. Video tarayıcıdan çıkmaz.", "Videodan ses çıkar", "Videonun sesini MP3, M4A veya WAV olarak indirin. Ücretsiz, hesapsız.", { q: "Hangi biçimi seçeyim?", a: "MP3 her yerde açılır. M4A çoğu zaman kayıpsız kopyalanır ve hızlıdır. WAV düzenleme içindir, büyüktür." }, "tr"),
    ar: m("استخراج الصوت من الفيديو: MP3 وM4A وWAV — مجاناً", "استخرج صوت الفيديو كملف MP3 أو M4A أو WAV. الفيديو يبقى في المتصفح.", "استخراج الصوت من الفيديو", "احفظ صوت الفيديو بصيغة MP3 أو M4A أو WAV. مجاناً وبلا حساب.", { q: "أي صيغة أختار؟", a: "MP3 يعمل في كل مكان. M4A يُنسخ غالباً بلا فقد وهو سريع. WAV للمونتاج وحجمه كبير." }, "ar"),
    ru: m("Извлечь звук из видео: MP3, M4A, WAV — бесплатно", "Сохраните звук из видео как MP3, M4A или WAV. Видео остаётся в браузере.", "Извлечь звук из видео", "Скачайте звук видео в MP3, M4A или WAV. Бесплатно, без аккаунта.", { q: "Какой формат выбрать?", a: "MP3 открывается везде. M4A часто копируется без потерь и быстро. WAV — для монтажа, файл большой." }, "ru"),
  },
};
