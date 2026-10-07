import type { Lang } from "@/lib/i18n";

const L = (az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> => ({ az, en, tr, ar, ru });

const DIR: Record<Lang, readonly string[]> = {
  az: ["şimal", "şimal-şərq", "şərq", "cənub-şərq", "cənub", "cənub-qərb", "qərb", "şimal-qərb"],
  en: ["north", "northeast", "east", "southeast", "south", "southwest", "west", "northwest"],
  ru: ["север", "северо-восток", "восток", "юго-восток", "юг", "юго-запад", "запад", "северо-запад"],
  tr: ["kuzey", "kuzeydoğu", "doğu", "güneydoğu", "güney", "güneybatı", "batı", "kuzeybatı"],
  ar: ["شمال", "شمال شرق", "شرق", "جنوب شرق", "جنوب", "جنوب غرب", "غرب", "شمال غرب"],
};

export const QIBLA_CITIES: readonly { name: Record<Lang, string>; deg: number; dir: number }[] = [
  { name: L("Bakı", "Baku", "Bakü", "باكو", "Баку"), deg: 207, dir: 5 },
  { name: L("Gəncə", "Ganja", "Gence", "كنجه", "Гянджа"), deg: 198, dir: 4 },
  { name: L("İstanbul", "Istanbul", "İstanbul", "إسطنبول", "Стамбул"), deg: 152, dir: 3 },
  { name: L("Moskva", "Moscow", "Moskova", "موسكو", "Москва"), deg: 176, dir: 4 },
  { name: L("Qahirə", "Cairo", "Kahire", "القاهرة", "Каир"), deg: 136, dir: 3 },
];

export function qiblaSide(lang: Lang, dir: number) {
  return (DIR[lang] || DIR.az)[dir] || "";
}

export const QIBLA = {
  heading: L("Qiblə nədir?", "What is the qibla?", "Kıble nedir?", "ما هي القبلة؟", "Что такое кибла?"),
  intro: L(
    "Qiblə üzünü Məkkəyə tutan tərəfdir. Namaz vaxtı deyil. Bir dərəcədir və şəhər dəyişəndə dəyişir.",
    "The qibla is the direction that faces Makkah. It is not a prayer time. It is a degree, and it changes when the city changes.",
    "Kıble, yüzünü Mekke'ye tutan yöndür. Namaz vakti değildir. Bir derecedir ve şehir değişince değişir.",
    "القبلة هي الجهة التي تستقبل بها مكة. ليست وقت صلاة. هي درجة، وتتغير إذا تغيرت المدينة.",
    "Кибла — это сторона, которой встают лицом к Мекке. Это не время намаза. Это градус, и он меняется вместе с городом.",
  ),
  title: L(
    "Qiblə nədir? Bakının qibləsi",
    "What is the qibla? The qibla of Baku",
    "Kıble nedir? Bakü'nün kıblesi",
    "ما هي القبلة؟ قبلة باكو",
    "Что такое кибла? Кибла Баку",
  ),
  description: L(
    "Qiblə Məkkəyə baxan tərəfdir. Bakı üçün 207 dərəcə, cənub-qərb. Gəncə, İstanbul, Moskva və Qahirə də buradadır.",
    "The qibla faces Makkah. For Baku it is 207 degrees, southwest. Ganja, Istanbul, Moscow, and Cairo are here too.",
    "Kıble Mekke'ye bakan yöndür. Bakü için 207 derece, güneybatı. Gence, İstanbul, Moskova ve Kahire de burada.",
    "القبلة جهة مكة. لباكو 207 درجات، جنوب غرب. كنجه وإسطنبول وموسكو والقاهرة هنا أيضًا.",
    "Кибла смотрит на Мекку. Для Баку это 207 градусов, юго-запад. Гянджа, Стамбул, Москва и Каир тоже здесь.",
  ),
  points: {
    az: [
      "Bakının qibləsi 207°-dir. Bu, cənub-qərbə yaxındır.",
      "Rəqəm həqiqi şimaldan saat əqrəbi istiqamətində sayılır.",
      "Telefon kompası metalın və maşının yanında səhv edə bilər. Açıq yerdə sakitləşənə qədər gözlə.",
      "Otağın içinə görə yox, küçənin tərəfinə görə tut. Divar özü tərəf demir.",
    ],
    en: [
      "The qibla of Baku is 207°. That is close to southwest.",
      "The number is counted clockwise from true north.",
      "A phone compass can be wrong next to metal or a car. Wait until it settles in an open place.",
      "Face the street's direction, not a guess from inside the room. A wall does not name a direction.",
    ],
    tr: [
      "Bakü'nün kıblesi 207°'dir. Bu, güneybatıya yakındır.",
      "Sayı gerçek kuzeyden saat yönünde sayılır.",
      "Telefon pusulası metalın ve arabanın yanında yanılabilir. Açık yerde durulana kadar bekle.",
      "Odanın içine göre değil, sokağın yönüne göre dur. Duvarın kendisi yön söylemez.",
    ],
    ar: [
      "قبلة باكو 207°. وهذا قريب من الجنوب الغربي.",
      "الرقم يُحسب من الشمال الحقيقي مع عقارب الساعة.",
      "بوصلة الهاتف قد تخطئ بجانب المعدن أو السيارة. انتظر في مكان مفتوح حتى تهدأ.",
      "قف حسب جهة الشارع، لا حسب تخمين من داخل الغرفة. الجدار نفسه لا يسمي جهة.",
    ],
    ru: [
      "Кибла Баку — 207°. Это близко к юго-западу.",
      "Число считают по часовой стрелке от истинного севера.",
      "Компас телефона может врать рядом с металлом или машиной. Подожди на открытом месте, пока он успокоится.",
      "Вставай по стороне улицы, а не по догадке из комнаты. Стена сама сторону не называет.",
    ],
  } as Record<Lang, readonly string[]>,
  note: L(
    "Şəhərin adını söhbətdə yazsan, həmin şəhərin dərəcəsi gəlir. Buradakı rəqəmlər şəhərin ortasına görədir.",
    "If you write a city name in the chat, that city's degree comes back. The numbers here are for the middle of the city.",
    "Sohbette şehrin adını yazarsan o şehrin derecesi gelir. Buradaki sayılar şehrin ortasına göredir.",
    "إذا كتبت اسم مدينة في المحادثة يأتي درج تلك المدينة. الأرقام هنا لوسط المدينة.",
    "Если напишешь название города в разговоре, придёт градус того города. Числа здесь — для середины города.",
  ),
};

export type CompareItem = {
  slug: string;
  title: Record<Lang, string>;
  lead: Record<Lang, string>;
  points: Record<Lang, readonly string[]>;
  note: Record<Lang, string>;
};

export const COMPARE_ITEMS: readonly CompareItem[] = [
  {
    slug: "python-yoxsa-javascript",
    title: L("Python, yoxsa JavaScript?", "Python or JavaScript?", "Python mu, JavaScript mi?", "Python أم JavaScript؟", "Python или JavaScript?"),
    lead: L(
      "Python ilk dil kimi sakit oxunur. JavaScript səhifənin içində işləyir. Telefon tətbiqinin özü adətən bu ikisi ilə yazılmır.",
      "Python is the calmer first language to read. JavaScript runs inside the page. A phone app itself is usually not written in either of these.",
      "Python ilk dil olarak sakin okunur. JavaScript sayfanın içinde çalışır. Telefon uygulamasının kendisi genellikle bu ikisiyle yazılmaz.",
      "Python تُقرأ بهدوء كأول لغة. JavaScript يعمل داخل الصفحة. تطبيق الهاتف نفسه لا يُكتب عادة بإحداهما.",
      "Python спокойнее читается как первый язык. JavaScript работает внутри страницы. Само приложение для телефона обычно пишут не на них.",
    ),
    points: {
      az: [
        "Python kiçik proqram, hesab və məlumat üçündür. Sətirin sonuna nöqtəli vergül qoymursan.",
        "JavaScript düymə, siyahı və səhifə hərəkəti üçündür. Brauzer onu özü işlədir.",
        "Serverdə ikisi də ola bilər. JavaScript-in server adı Node-dur.",
        "Telefon tətbiqi yazmaq istəyəndə Java və ya Kotlin gəlir. Səhifəni tətbiqə yığmaq isə bu dil seçimi deyil.",
        "Birinci gün ikisini qarışdırma. Birini bitir, sonra digərinə keç.",
      ],
      en: [
        "Python is for a small program, a calculation, and data. You do not put a semicolon at the end of a line.",
        "JavaScript is for a button, a list, and motion on the page. The browser runs it itself.",
        "Both can sit on a server. The server name of JavaScript is Node.",
        "When you want to write a phone app, Java or Kotlin comes in. Packing a page into an app is not this language choice.",
        "Do not mix the two on the first day. Finish one, then move to the other.",
      ],
      tr: [
        "Python küçük program, hesap ve veri içindir. Satır sonuna noktalı virgül koymazsın.",
        "JavaScript düğme, liste ve sayfa hareketi içindir. Tarayıcı onu kendisi çalıştırır.",
        "Sunucuda ikisi de olabilir. JavaScript'in sunucu adı Node'dur.",
        "Telefon uygulaması yazmak istediğinde Java veya Kotlin gelir. Sayfayı uygulamaya paketlemek bu dil seçimi değildir.",
        "İlk gün ikisini karıştırma. Birini bitir, sonra diğerine geç.",
      ],
      ar: [
        "Python للبرنامج الصغير والحساب والبيانات. لا تضع فاصلة منقوطة في آخر السطر.",
        "JavaScript للزر والقائمة وحركة الصفحة. المتصفح يشغّله بنفسه.",
        "كلاهما يمكن أن يجلس على الخادم. اسم JavaScript على الخادم هو Node.",
        "حين تريد كتابة تطبيق هاتف يأتي Java أو Kotlin. جمع الصفحة في تطبيق ليس اختيار اللغة هذا.",
        "لا تخلط الاثنين في اليوم الأول. أنهِ واحدة ثم انتقل إلى الأخرى.",
      ],
      ru: [
        "Python — для маленькой программы, расчёта и данных. Точку с запятой в конце строки не ставишь.",
        "JavaScript — для кнопки, списка и движения на странице. Браузер запускает его сам.",
        "На сервере могут быть оба. Серверное имя JavaScript — Node.",
        "Когда хочешь писать приложение для телефона, приходят Java или Kotlin. Собрать страницу в приложение — не этот выбор языка.",
        "В первый день их не мешай. Закончь один, потом переходи к другому.",
      ],
    },
    note: L(
      "Səhifə düzəltmək istəyirsənsə JavaScript. İlk proqramı yazmaq istəyirsənsə Python.",
      "If you want to make a page, choose JavaScript. If you want to write a first program, choose Python.",
      "Sayfa yapmak istiyorsan JavaScript. İlk programı yazmak istiyorsan Python.",
      "إذا أردت صنع صفحة فـ JavaScript. إذا أردت كتابة أول برنامج فـ Python.",
      "Если хочешь делать страницу — JavaScript. Если хочешь написать первую программу — Python.",
    ),
  },
  {
    slug: "java-yoxsa-kotlin",
    title: L("Java, yoxsa Kotlin?", "Java or Kotlin?", "Java mı, Kotlin mi?", "Java أم Kotlin؟", "Java или Kotlin?"),
    lead: L(
      "Android tətbiqinin dili adətən bu ikisindən biridir. Kotlin daha qısadır. Java köhnə nümunələrdə daha çox durur.",
      "A language for an Android app is usually one of these two. Kotlin is shorter. Java still stands in older examples.",
      "Android uygulamasının dili genellikle bu ikisinden biridir. Kotlin daha kısadır. Java eski örneklerde daha çok durur.",
      "لغة تطبيق Android عادة إحدى هاتين. Kotlin أقصر. Java تبقى أكثر في الأمثلة القديمة.",
      "Язык приложения Android обычно один из этих двух. Kotlin короче. Java чаще стоит в старых примерах.",
    ),
    points: {
      az: [
        "Yeni tətbiqə Kotlin ilə başlamaq adətdir.",
        "Java bilirsənsə, köhnə layihəni oxuya bilərsən. Kotlin onu silmir.",
        "İkisi də eyni telefonda işləyir. Biri digərinin yerini qovmur.",
        "HTML səhifəni APK etmək bu dili öyrənmək deyil. İçində öz kodunu yazanda Java və ya Kotlin lazım olur.",
        "Oyun üçün çox vaxt başqa yol seçilir. Adi tətbiq bu sualın cavabıdır.",
      ],
      en: [
        "A new app usually starts with Kotlin.",
        "If you know Java, you can read an old project. Kotlin does not erase it.",
        "Both run on the same phone. One does not throw the other out.",
        "Turning an HTML page into an APK is not learning this language. Java or Kotlin is needed when you write your own code inside.",
        "A game often takes another road. An ordinary app is the answer to this question.",
      ],
      tr: [
        "Yeni uygulamaya Kotlin ile başlamak adettir.",
        "Java biliyorsan eski projeyi okuyabilirsin. Kotlin onu silmez.",
        "İkisi de aynı telefonda çalışır. Biri diğerini kovmaz.",
        "HTML sayfayı APK yapmak bu dili öğrenmek değildir. İçine kendi kodunu yazınca Java veya Kotlin gerekir.",
        "Oyun için çoğu zaman başka yol seçilir. Sıradan uygulama bu sorunun cevabıdır.",
      ],
      ar: [
        "التطبيق الجديد يبدأ عادة بـ Kotlin.",
        "إذا كنت تعرف Java تستطيع قراءة المشروع القديم. Kotlin لا يمحوه.",
        "كلاهما يعمل على الهاتف نفسه. أحدهما لا يطرد الآخر.",
        "تحويل صفحة HTML إلى APK ليس تعلم هذه اللغة. Java أو Kotlin يلزم حين تكتب رمزك في الداخل.",
        "اللعبة كثيرًا ما تأخذ طريقًا آخر. التطبيق العادي هو جواب هذا السؤال.",
      ],
      ru: [
        "Новое приложение обычно начинают на Kotlin.",
        "Если знаешь Java, старый проект прочитать можно. Kotlin его не стирает.",
        "Оба работают на одном телефоне. Один другого не выгоняет.",
        "Собрать HTML-страницу в APK — не изучение этого языка. Java или Kotlin нужны, когда внутри пишешь свой код.",
        "Для игры часто выбирают другую дорогу. Обычное приложение — ответ на этот вопрос.",
      ],
    },
    note: L(
      "Bilmirsənsə, Kotlin ilə başla. Köhnə kod Java-dırsa, onu da oxu.",
      "If you do not know either, start with Kotlin. If the old code is Java, read that too.",
      "Bilmiyorsan Kotlin ile başla. Eski kod Java ise onu da oku.",
      "إذا لم تعرف فابدأ بـ Kotlin. إذا كان الرمز القديم Java فاقرأه أيضًا.",
      "Если не знаешь ни того ни другого, начни с Kotlin. Если старый код на Java, прочитай и его.",
    ),
  },
];

export const COMPARE = {
  heading: L("Hansı dil?", "Which language?", "Hangi dil?", "أي لغة؟", "Какой язык?"),
  intro: L(
    "İki seçim ayrıca yazılıb. Birincisi ilk dil üçündür. İkincisi telefon tətbiqi üçündür.",
    "Two choices are written separately. The first is for a first language. The second is for a phone app.",
    "İki seçim ayrı yazıldı. Birincisi ilk dil içindir. İkincisi telefon uygulaması içindir.",
    "خياران مكتوبان على حدة. الأول للغة الأولى. الثاني لتطبيق الهاتف.",
    "Два выбора написаны отдельно. Первый — для первого языка. Второй — для приложения телефона.",
  ),
  title: L(
    "Hansı dil? Python, JavaScript, Java, Kotlin",
    "Which language? Python, JavaScript, Java, Kotlin",
    "Hangi dil? Python, JavaScript, Java, Kotlin",
    "أي لغة؟ Python وJavaScript وJava وKotlin",
    "Какой язык? Python, JavaScript, Java, Kotlin",
  ),
  description: L(
    "Python, yoxsa JavaScript? Java, yoxsa Kotlin? İlk dil və telefon tətbiqi üçün qısa seçim.",
    "Python or JavaScript? Java or Kotlin? A short choice for a first language and for a phone app.",
    "Python mu, JavaScript mi? Java mı, Kotlin mi? İlk dil ve telefon uygulaması için kısa seçim.",
    "Python أم JavaScript؟ Java أم Kotlin؟ اختيار قصير للغة الأولى ولتطبيق الهاتف.",
    "Python или JavaScript? Java или Kotlin? Короткий выбор для первого языка и для приложения телефона.",
  ),
};

const PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export function qiblaPath(lang: Lang) {
  return `${PREFIX[lang]}/qible`;
}

export function comparePath(lang: Lang) {
  return `${PREFIX[lang]}/muqayise`;
}

export function compareTopicPath(lang: Lang, slug: string) {
  return `${comparePath(lang)}/${slug}`;
}

export function qiblaFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?qible$/);
  if (!match) return null;
  return { lang: (match[1] ?? "az") as Lang };
}

export function compareFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?muqayise$/);
  if (!match) return null;
  return { lang: (match[1] ?? "az") as Lang };
}

export function compareTopicFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?muqayise\/([^/]+)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const item = COMPARE_ITEMS.find((entry) => entry.slug === match[2]);
  if (!item) return null;
  return { lang, item };
}
