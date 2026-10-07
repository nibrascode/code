import type { Lang } from "@/lib/i18n";

export type SearchKind = "soz" | "xeta" | "movzu";

export type SearchPiece = {
  title: string;
  lead: string;
  points: readonly string[];
  note?: string;
};

type SearchItem = {
  slug: string;
  piece: Record<Lang, SearchPiece>;
};

type SearchSection = {
  kind: SearchKind;
  heading: Record<Lang, string>;
  intro: Record<Lang, string>;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  items: readonly SearchItem[];
};

const L = (az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> => ({ az, en, tr, ar, ru });

function piece(
  title: Record<Lang, string>,
  lead: Record<Lang, string>,
  points: Record<Lang, readonly string[]>,
  note?: Record<Lang, string>,
): Record<Lang, SearchPiece> {
  return {
    az: { title: title.az, lead: lead.az, points: points.az, note: note?.az },
    en: { title: title.en, lead: lead.en, points: points.en, note: note?.en },
    tr: { title: title.tr, lead: lead.tr, points: points.tr, note: note?.tr },
    ar: { title: title.ar, lead: lead.ar, points: points.ar, note: note?.ar },
    ru: { title: title.ru, lead: lead.ru, points: points.ru, note: note?.ru },
  };
}

const WORDS: readonly SearchItem[] = [
  {
    slug: "api-nedir",
    piece: piece(
      L("API nədir?", "What is an API?", "API nedir?", "ما هي API؟", "Что такое API?"),
      L(
        "API bir proqramın başqa proqrama hazır qapıdan cavab verməsidir. O proqramın içini yazmırsan. Ünvana sorğu göndərirsən, cavab alırsan.",
        "An API is a ready door where one program answers another. You do not write the inside of that program. You send a request to an address and get an answer.",
        "API, bir programın başka bir programa hazır kapıdan cevap vermesidir. O programın içini yazmazsın. Adrese istek gönderir, cevap alırsın.",
        "API باب جاهز يجيب فيه برنامج على برنامج آخر. لا تكتب داخل ذلك البرنامج. ترسل طلبًا إلى عنوان وتأخذ الجواب.",
        "API — это готовая дверь, через которую одна программа отвечает другой. Внутрь той программы ты не пишешь. Отправляешь запрос по адресу и получаешь ответ.",
      ),
      {
        az: ["Sorğu gedir, cavab gəlir. Cavab çox vaxt JSON olur.", "Hava, məzənnə və tərcümə belə qapılardan oxunur.", "Açar istəyən qapı qeydiyyat tələb edir. Açarsız qapı birbaşa açılır."],
        en: ["A request goes out and an answer comes back. The answer is often JSON.", "Weather, exchange rates, and translation are read through doors like this.", "A door that asks for a key needs registration. A door without a key opens directly."],
        tr: ["İstek gider, cevap gelir. Cevap çoğu zaman JSON olur.", "Hava, kur ve çeviri böyle kapılardan okunur.", "Anahtar isteyen kapı kayıt ister. Anahtarsız kapı doğrudan açılır."],
        ar: ["يذهب الطلب ويأتي الجواب. والجواب غالبًا JSON.", "الطقس وسعر الصرف والترجمة تُقرأ من أبواب كهذه.", "الباب الذي يطلب مفتاحًا يحتاج تسجيلًا. الباب بلا مفتاح يُفتح مباشرة."],
        ru: ["Уходит запрос, приходит ответ. Ответ часто бывает JSON.", "Погода, курс и перевод читаются через такие двери.", "Дверь с ключом просит регистрацию. Дверь без ключа открывается сразу."],
      },
    ),
  },
  {
    slug: "deyisen-nedir",
    piece: piece(
      L("Dəyişən nədir?", "What is a variable?", "Değişken nedir?", "ما هو المتغير؟", "Что такое переменная?"),
      L(
        "Dəyişən məlumatın adıdır. Ad qalır, içindəki qiymət dəyişə bilər.",
        "A variable is the name of a piece of data. The name stays, and the value inside can change.",
        "Değişken, bir bilginin adıdır. Ad kalır, içindeki değer değişebilir.",
        "المتغير اسم لمعلومة. الاسم يبقى، والقيمة التي بداخله يمكن أن تتغير.",
        "Переменная — это имя данных. Имя остаётся, а значение внутри может меняться.",
      ),
      {
        az: ['`seher = "Bakı"` yazanda adın içində Bakı durur.', 'Sonra `seher = "Gəncə"` desən, köhnə qiymət gedir.', "Adı bir dəfə qoyursan, sonra həmin adla oxuyursan."],
        en: ['`city = "Baku"` stores Baku under that name.', 'Later `city = "Ganja"` replaces the old value.', "You choose the name once, then read it by that name."],
        tr: ['`sehir = "Bakü"` yazınca adın içinde Bakü durur.', 'Sonra `sehir = "Gence"` dersen eski değer gider.', "Adı bir kez koyarsın, sonra o adla okursun."],
        ar: ['`seher = "Bakı"` يضع باكو داخل الاسم.', "ثم `seher = \"Ganja\"` يذهب بالقيمة القديمة.", "تضع الاسم مرة، ثم تقرأ به."],
        ru: ["`seher = \"Bakı\"` хранит Баку под этим именем.", "Потом `seher = \"Ganja\"` убирает старое значение.", "Имя задаёшь один раз и дальше читаешь по нему."],
      },
    ),
  },
  {
    slug: "funksiya-nedir",
    piece: piece(
      L("Funksiya nədir?", "What is a function?", "Fonksiyon nedir?", "ما هي الدالة؟", "Что такое функция?"),
      L(
        "Funksiya bir işin adıdır. Adı çağıranda həmin iş yenidən görülür. Eyni kodu hər yerdə təkrar yazmırsan.",
        "A function is the name of a job. When you call the name, that job runs again. You do not copy the same code everywhere.",
        "Fonksiyon bir işin adıdır. Adı çağırınca o iş yeniden yapılır. Aynı kodu her yere kopyalamazsın.",
        "الدالة اسم لعمل. حين تنادي الاسم يُعاد ذلك العمل. لا تنسخ الرمز نفسه في كل مكان.",
        "Функция — это имя одного дела. Когда зовёшь имя, дело выполняется снова. Один и тот же код не копируешь везде.",
      ),
      {
        az: ["İçinə məlumat verə bilərsən. Məsələn şəhərin adı.", "İş bitəndə nəticə qaytara bilər. Məsələn saat.", "Adı aydın olanda kod da oxunur."],
        en: ["You can pass data in, such as a city name.", "When the job ends it can return a result, such as the time.", "A clear name makes the code readable."],
        tr: ["İçine bilgi verebilirsin. Örneğin şehrin adı.", "İş bitince sonuç döndürebilir. Örneğin saat.", "Adı açık olunca kod da okunur."],
        ar: ["يمكن أن تدخل معلومة، مثل اسم المدينة.", "حين ينتهي العمل يمكن أن يُرجع نتيجة، مثل الساعة.", "إذا كان الاسم واضحًا صار الرمز مقروءًا."],
        ru: ["Внутрь можно передать данные, например имя города.", "В конце дело может вернуть результат, например время.", "Понятное имя делает код читаемым."],
      },
    ),
  },
  {
    slug: "dongu-nedir",
    piece: piece(
      L("Döngü nədir?", "What is a loop?", "Döngü nedir?", "ما هي الحلقة؟", "Что такое цикл?"),
      L(
        "Döngü eyni işi siyahı bitənə qədər, ya da şərt düz olanda, təkrar edir.",
        "A loop repeats the same job until a list ends, or while a condition stays true.",
        "Döngü aynı işi liste bitene kadar ya da koşul doğru olduğu sürece tekrarlar.",
        "الحلقة تكرر العمل نفسه حتى تنتهي القائمة، أو ما دام الشرط صحيحًا.",
        "Цикл повторяет одно дело, пока список не кончится или пока условие верно.",
      ),
      {
        az: ["On şəhərin havasını əl ilə tək-tək yazmırsan. Siyahını gəzirsən.", "Şərt heç bitməsə, döngü də bitmir. Buna sonsuz döngü deyirlər.", "`for` siyahını gəzir. `while` şərtə baxır."],
        en: ["You do not type the weather of ten cities by hand. You walk the list.", "If the condition never ends, the loop never ends. That is an infinite loop.", "`for` walks a list. `while` watches a condition."],
        tr: ["On şehrin havasını elle tek tek yazmazsın. Listeyi gezersin.", "Koşul hiç bitmezse döngü de bitmez. Buna sonsuz döngü denir.", "`for` listeyi gezer. `while` koşula bakar."],
        ar: ["لا تكتب طقس عشر مدن بيدك واحدة واحدة. تمشي على القائمة.", "إذا لم ينتهِ الشرط لم تنتهِ الحلقة. وهذا يُسمى حلقة لا نهائية.", "`for` يمشي على القائمة. `while` ينظر إلى الشرط."],
        ru: ["Погоду десяти городов не пишешь руками по одной. Проходишь список.", "Если условие не кончается, не кончается и цикл. Это бесконечный цикл.", "`for` идёт по списку. `while` смотрит на условие."],
      },
    ),
  },
  {
    slug: "html-nedir",
    piece: piece(
      L("HTML nədir?", "What is HTML?", "HTML nedir?", "ما هو HTML؟", "Что такое HTML?"),
      L(
        "HTML səhifənin quruluşudur. Başlıq, abzas və düymə harada durur, onu HTML deyir. Rəngi CSS, hərəkəti JavaScript verir.",
        "HTML is the structure of a page. It says where the heading, paragraph, and button sit. CSS gives the color, and JavaScript gives the motion.",
        "HTML sayfanın kuruluşudur. Başlık, paragraf ve düğme nerede durur, onu HTML söyler. Rengi CSS, hareketi JavaScript verir.",
        "HTML هو بنية الصفحة. هو الذي يقول أين يقف العنوان والفقرة والزر. اللون من CSS، والحركة من JavaScript.",
        "HTML — это устройство страницы. Он говорит, где стоят заголовок, абзац и кнопка. Цвет даёт CSS, движение даёт JavaScript.",
      ),
      {
        az: ["Hər açılan teq bağlanır. `<p>` abzası `</p>` ilə bitir.", "Səhifə `<html>` ilə başlayır. Görünən hissə `<body>` içindədir.", "Brauzer HTML-i oxuyur və səhifəni qurur."],
        en: ["An opened tag is closed. A `<p>` paragraph ends with `</p>`.", "The page starts with `<html>`. The visible part is inside `<body>`.", "The browser reads the HTML and builds the page."],
        tr: ["Açılan etiket kapanır. `<p>` paragrafı `</p>` ile biter.", "Sayfa `<html>` ile başlar. Görünen kısım `<body>` içindedir.", "Tarayıcı HTML'i okur ve sayfayı kurar."],
        ar: ["الوسم الذي يُفتح يُغلق. فقرة `<p>` تنتهي بـ `</p>`.", "الصفحة تبدأ بـ `<html>`. الجزء الظاهر داخل `<body>`.", "المتصفح يقرأ HTML ويبني الصفحة."],
        ru: ["Открытый тег закрывается. Абзац `<p>` кончается `</p>`.", "Страница начинается с `<html>`. Видимая часть внутри `<body>`.", "Браузер читает HTML и собирает страницу."],
      },
    ),
  },
  {
    slug: "css-nedir",
    piece: piece(
      L("CSS nədir?", "What is CSS?", "CSS nedir?", "ما هو CSS؟", "Что такое CSS?"),
      L(
        "CSS səhifənin görünüşüdür. Rəng, ölçü, ara və düzülüş buradadır. Yazının özü HTML-də qalır.",
        "CSS is how the page looks. Color, size, space, and layout live here. The words themselves stay in HTML.",
        "CSS sayfanın görünüşüdür. Renk, boyut, boşluk ve diziliş buradadır. Yazının kendisi HTML'de kalır.",
        "CSS هو شكل الصفحة. اللون والحجم والمسافة والترتيب هنا. الكلام نفسه يبقى في HTML.",
        "CSS — это вид страницы. Цвет, размер, промежуток и раскладка живут здесь. Сами слова остаются в HTML.",
      ),
      {
        az: ["`p { color: #111 }` abzasın rəngini dəyişir.", "Eyni qayda bir çox yerə tətbiq olunur.", "Telefonda və geniş ekranda ayrı düzülüş vermək olar."],
        en: ["`p { color: #111 }` changes the paragraph color.", "The same rule can apply in many places.", "A phone and a wide screen can have different layouts."],
        tr: ["`p { color: #111 }` paragrafın rengini değiştirir.", "Aynı kural birçok yere uygulanır.", "Telefonda ve geniş ekranda ayrı diziliş verilebilir."],
        ar: ["`p { color: #111 }` يغيّر لون الفقرة.", "القاعدة نفسها تُطبق في مواضع كثيرة.", "يمكن أن يختلف الترتيب بين الهاتف والشاشة الواسعة."],
        ru: ["`p { color: #111 }` меняет цвет абзаца.", "Одно правило применяется во многих местах.", "На телефоне и на широком экране раскладка может быть разной."],
      },
    ),
  },
  {
    slug: "javascript-nedir",
    piece: piece(
      L("JavaScript nədir?", "What is JavaScript?", "JavaScript nedir?", "ما هو JavaScript؟", "Что такое JavaScript?"),
      L(
        "JavaScript səhifəyə hərəkət verir. Düyməyə basılanda, siyahı dəyişəndə və məlumat gələndə işləyən kod budur.",
        "JavaScript gives a page its motion. It is the code that runs when a button is pressed, a list changes, or data arrives.",
        "JavaScript sayfaya hareket verir. Düğmeye basılınca, liste değişince ve veri gelince çalışan kod budur.",
        "JavaScript يعطي الصفحة حركتها. هو الرمز الذي يعمل حين يُضغط الزر أو تتغير القائمة أو تصل البيانات.",
        "JavaScript даёт странице движение. Это код, который работает, когда нажата кнопка, меняется список или приходят данные.",
      ),
      {
        az: ["Brauzerdə işləyir. Ayrıca proqram quraşdırmaq şərt deyil.", "Serverdə də işləyə bilər. Buna Node deyirlər.", "HTML quruluşdur, CSS görünüşdür, JavaScript hərəkətdir."],
        en: ["It runs in the browser. You do not have to install a separate program.", "It can also run on a server. That is called Node.", "HTML is structure, CSS is appearance, JavaScript is motion."],
        tr: ["Tarayıcıda çalışır. Ayrı program kurmak şart değildir.", "Sunucuda da çalışabilir. Buna Node denir.", "HTML kuruluş, CSS görünüş, JavaScript harekettir."],
        ar: ["يعمل في المتصفح. لا يلزم تثبيت برنامج منفصل.", "يمكن أن يعمل على الخادم أيضًا. وهذا يُسمى Node.", "HTML بنية، وCSS شكل، وJavaScript حركة."],
        ru: ["Работает в браузере. Отдельную программу ставить не обязательно.", "Может работать и на сервере. Это называют Node.", "HTML — устройство, CSS — вид, JavaScript — движение."],
      },
    ),
  },
  {
    slug: "python-nedir",
    piece: piece(
      L("Python nədir?", "What is Python?", "Python nedir?", "ما هو Python؟", "Что такое Python?"),
      L(
        "Python oxunaqlı yazılan proqramlaşdırma dilidir. Kiçik proqram, hesab və məlumat işi buradan başlaya bilər.",
        "Python is a programming language written to be readable. A small program, a calculation, and data work can start here.",
        "Python okunaklı yazılan bir programlama dilidir. Küçük program, hesap ve veri işi buradan başlayabilir.",
        "Python لغة برمجة تُكتب لتُقرأ. البرنامج الصغير والحساب وعمل البيانات يمكن أن يبدأ من هنا.",
        "Python — язык программирования, который пишут так, чтобы его было легко читать. Маленькая программа, расчёт и работа с данными могут начаться отсюда.",
      ),
      {
        az: ["Sətirin sonuna nöqtəli vergül qoymursan. Blok boşluqla ayrılır.", '`print("Salam")` mətni ekrana yazır.', "Telefon tətbiqi üçün adətən Java və ya Kotlin seçilir. Python öyrənməyə və serverə uyğundur."],
        en: ["You do not put a semicolon at the end of a line. A block is set apart by spaces.", '`print("Hello")` writes the text on the screen.', "A phone app is usually written in Java or Kotlin. Python fits learning and the server."],
        tr: ["Satır sonuna noktalı virgül koymazsın. Blok boşlukla ayrılır.", '`print("Merhaba")` metni ekrana yazar.', "Telefon uygulaması için genellikle Java veya Kotlin seçilir. Python öğrenmeye ve sunucuya uyar."],
        ar: ["لا تضع فاصلة منقوطة في آخر السطر. الكتلة تُفصل بالمسافة.", '`print("Salam")` يكتب النص على الشاشة.', "تطبيق الهاتف يُكتب غالبًا بـ Java أو Kotlin. Python يصلح للتعلم وللخادم."],
        ru: ["В конце строки точку с запятой не ставишь. Блок отделяется пробелами.", '`print("Salam")` пишет текст на экран.', "Приложение для телефона обычно пишут на Java или Kotlin. Python подходит для учёбы и для сервера."],
      },
    ),
  },
  {
    slug: "alqoritm-nedir",
    piece: piece(
      L("Alqoritm nədir?", "What is an algorithm?", "Algoritma nedir?", "ما هي الخوارزمية؟", "Что такое алгоритм?"),
      L(
        "Alqoritm işin ardıcıllığıdır. Əvvəl nə, sonra nə olacağı yazılır. Dil dəyişsə də, ardıcıllıq eyni qala bilər.",
        "An algorithm is the order of a job. It says what happens first and what happens next. The language can change, and the order can stay the same.",
        "Algoritma işin sırasıdır. Önce ne, sonra ne olacağı yazılır. Dil değişse de sıra aynı kalabilir.",
        "الخوارزمية ترتيب العمل. يُكتب ما يحدث أولًا وما يحدث بعده. اللغة قد تتغير والترتيب يبقى.",
        "Алгоритм — это порядок дела. Пишется, что сначала и что потом. Язык может смениться, а порядок остаться тем же.",
      ),
      {
        az: ['Aydın addımdır. "Bir az bax" alqoritm deyil.', "Eyni giriş eyni nəticə verməlidir.", "Kod alqoritmin bir dildə yazılmış halıdır."],
        en: ['It is a clear step. "Look a bit" is not an algorithm.', "The same input should give the same result.", "Code is an algorithm written in one language."],
        tr: ['Açık bir adımdır. "Biraz bak" algoritma değildir.', "Aynı giriş aynı sonucu vermelidir.", "Kod, algoritmanın bir dilde yazılmış halıdır."],
        ar: ['هي خطوة واضحة. «انظر قليلًا» ليست خوارزمية.', "المدخل نفسه ينبغي أن يعطي النتيجة نفسها.", "الرمز هو الخوارزمية مكتوبة بلغة واحدة."],
        ru: ["Это ясный шаг. «Посмотри немного» — не алгоритм.", "Один и тот же вход должен дать один и тот же результат.", "Код — это алгоритм, записанный на одном языке."],
      },
    ),
  },
  {
    slug: "json-nedir",
    piece: piece(
      L("JSON nədir?", "What is JSON?", "JSON nedir?", "ما هو JSON؟", "Что такое JSON?"),
      L(
        "JSON proqramların bir-birinə məlumat ötürdüyü sadə mətndir. Açarı və qiyməti olur.",
        "JSON is simple text that programs use to pass data to each other. It has a key and a value.",
        "JSON, programların birbirine veri ilettiği sade metindir. Anahtarı ve değeri olur.",
        "JSON نص بسيط تتبادل به البرامج البيانات. فيه مفتاح وقيمة.",
        "JSON — это простой текст, которым программы передают друг другу данные. У него есть ключ и значение.",
      ),
      {
        az: ["Mətn dırnaq içindədir. Rəqəm dırnaqsızdır.", "Siyahı `[ ]` ilə, cütlük `{ }` ilə yazılır.", "Hava və məzənnə cavabı çox vaxt JSON olur."],
        en: ["Text is inside quotes. A number has no quotes.", "A list is written with `[ ]`, and a pair with `{ }`.", "A weather or exchange-rate answer is often JSON."],
        tr: ["Metin tırnak içindedir. Sayı tırnaksızdır.", "Liste `[ ]` ile, çift `{ }` ile yazılır.", "Hava ve kur cevabı çoğu zaman JSON olur."],
        ar: ["النص داخل علامات اقتباس. الرقم بلا اقتباس.", "القائمة تُكتب بـ `[ ]`، والزوج بـ `{ }`.", "جواب الطقس أو سعر الصرف غالبًا JSON."],
        ru: ["Текст стоит в кавычках. Число без кавычек.", "Список пишется через `[ ]`, пара через `{ }`.", "Ответ о погоде или курсе часто бывает JSON."],
      },
    ),
  },
];

const ERRORS: readonly SearchItem[] = [
  {
    slug: "apk-qurulmur",
    piece: piece(
      L("APK qurulmur", "APK will not install", "APK kurulmuyor", "APK لا يُثبَّت", "APK не устанавливается"),
      L(
        "Telefon «tətbiq qurulmadı» deyirsə, fayl ya tam gəlməyib, ya da telefon onu qəbul etmir.",
        "If the phone says the app was not installed, the file did not arrive whole, or the phone will not accept it.",
        "Telefon «uygulama kurulmadı» diyorsa dosya tam gelmemiştir ya da telefon onu kabul etmiyordur.",
        "إذا قال الهاتف إن التطبيق لم يُثبَّت، فالملف لم يصل كاملًا أو الهاتف لا يقبله.",
        "Если телефон говорит, что приложение не установлено, файл пришёл не целиком или телефон его не принимает.",
      ),
      {
        az: ["Naməlum mənbədən quraşdırma bağlı ola bilər. Ayarlardan həmin proqrama icazə ver.", "Fayl yarımçıq enibsə, yenidən endir.", "Eyni tətbiq köhnə imza ilə durursa, əvvəl onu sil, sonra yenisini qur. İçindəki məlumat silinir."],
        en: ["Install from unknown sources may be off. Allow it for that installer in settings.", "If the download stopped halfway, download it again.", "If the same app is already there with an old signature, remove it first, then install the new one. Its data is deleted."],
        tr: ["Bilinmeyen kaynaktan kurma kapalı olabilir. Ayarlardan o programa izin ver.", "Dosya yarım indi ise yeniden indir.", "Aynı uygulama eski imzayla duruyorsa önce onu sil, sonra yenisini kur. İçindeki veri silinir."],
        ar: ["قد يكون التثبيت من مصدر غير معروف مغلقًا. اسمح به لذلك البرنامج من الإعدادات.", "إذا نزل الملف ناقصًا فأعد تنزيله.", "إذا كان التطبيق نفسه واقفًا بتوقيع قديم فاحذفه أولًا ثم ثبّت الجديد. بيانات الداخل تُحذف."],
        ru: ["Установка из неизвестного источника может быть закрыта. Разреши её этому установщику в настройках.", "Если файл скачался не до конца, скачай снова.", "Если то же приложение уже стоит со старой подписью, сначала удали его, потом ставь новое. Данные внутри удалятся."],
      },
      L(
        "Play Marketdən gələn tətbiqin üstünə başqa açarla imzalanmış APK qurulmur.",
        "An APK signed with another key will not install over an app that came from Play.",
        "Play'den gelen uygulamanın üstüne başka anahtarla imzalanmış APK kurulmaz.",
        "لا يُثبَّت APK موقَّع بمفتاح آخر فوق تطبيق جاء من Play.",
        "APK с другим ключом не ставится поверх приложения из Play.",
      ),
    ),
  },
  {
    slug: "parse-error",
    piece: piece(
      L("Parse error nədir?", "What is a parse error?", "Parse error nedir?", "ما هو parse error؟", "Что такое parse error?"),
      L(
        "Parse error telefonun APK-nı oxuya bilməməsidir. Paket açılmayıb, ona görə quruluş da başlamır.",
        "A parse error means the phone cannot read the APK. The package did not open, so installation does not start.",
        "Parse error, telefonun APK'yı okuyamamasıdır. Paket açılmamış, onun için kurulum da başlamaz.",
        "parse error يعني أن الهاتف لا يستطيع قراءة APK. الحزمة لم تُفتح، لذلك لا يبدأ التثبيت.",
        "Parse error значит, что телефон не может прочитать APK. Пакет не открылся, поэтому установка не начинается.",
      ),
      {
        az: ["Fayl tam enməyib və ya adı dəyişəndə korlanıb.", "APK deyil, ZIP və ya başqa fayl ola bilər. Sonluq `.apk` olmalıdır.", "Android versiyası paketin tələbindən köhnədirsə, bəzi telefonlar bunu da belə göstərir."],
        en: ["The file did not download fully, or it broke when the name was changed.", "It may be a ZIP or another file, not an APK. The ending should be `.apk`.", "If Android is older than the package requires, some phones show that as a parse error too."],
        tr: ["Dosya tam inmemiş ya da adı değişirken bozulmuştur.", "APK değil, ZIP veya başka dosya olabilir. Sonu `.apk` olmalıdır.", "Android sürümü paketin istediğinden eskiyse bazı telefonlar bunu da böyle gösterir."],
        ar: ["الملف لم ينزل كاملًا أو تلف حين تغيّر اسمه.", "قد يكون ZIP أو ملفًا آخر، لا APK. اللاحقة يجب أن تكون `.apk`.", "إذا كان إصدار Android أقدم مما تطلبه الحزمة، بعض الهواتف تُظهر ذلك كـ parse error أيضًا."],
        ru: ["Файл скачался не целиком или сломался, когда меняли имя.", "Это может быть ZIP или другой файл, не APK. Окончание должно быть `.apk`.", "Если Android старее, чем требует пакет, некоторые телефоны показывают и это как parse error."],
      },
      L(
        "İçini əl ilə dəyişmisənsə, quruluş pozula bilər. Faylı yenidən yığ.",
        "If the inside was edited by hand, the package can break. Build the file again.",
        "İçini elle değiştirdiysen kuruluş bozulabilir. Dosyayı yeniden derle.",
        "إذا غيّرت الداخل بيدك فقد تفسد الحزمة. أعد بناء الملف.",
        "Если внутри правили руками, пакет может сломаться. Собери файл заново.",
      ),
    ),
  },
  {
    slug: "keystore-itdi",
    piece: piece(
      L("Keystore itdi", "The keystore is lost", "Keystore kayboldu", "ضاع ملف keystore", "Потерян keystore"),
      L(
        "Keystore tətbiqin imza açarıdır. O itəndə eyni tətbiqin yeni versiyasını köhnəsinin üstünə qura bilmirsən.",
        "A keystore is the app's signing key. When it is lost, you cannot install a new version over the old one of the same app.",
        "Keystore uygulamanın imza anahtarıdır. O kaybolunca aynı uygulamanın yeni sürümünü eskisinin üstüne kuramazsın.",
        "keystore هو مفتاح توقيع التطبيق. إذا ضاع لا تستطيع تثبيت نسخة جديدة فوق القديمة للتطبيق نفسه.",
        "Keystore — это ключ подписи приложения. Если он потерян, новую версию того же приложения поверх старой не поставить.",
      ),
      {
        az: ["Yeni keystore ilə yeni paket adı açmaq olar. Bu, köhnə tətbiqin davamı sayılmır.", "Play-də açar itibsə, Google-un açar bərpası var. Qəbul olunacağı qəti deyil.", "Açar faylını və parolu paketdən ayrı yerdə saxla."],
        en: ["You can open a new package name with a new keystore. That is not a continuation of the old app.", "If the key is lost on Play, Google has a key reset. Acceptance is not guaranteed.", "Keep the key file and the password apart from the package."],
        tr: ["Yeni keystore ile yeni paket adı açılabilir. Bu, eski uygulamanın devamı sayılmaz.", "Play'de anahtar kaybolduysa Google'un anahtar kurtarması vardır. Kabul edileceği kesin değildir.", "Anahtar dosyasını ve parolayı paketten ayrı yerde sakla."],
        ar: ["يمكن فتح اسم حزمة جديد بـ keystore جديد. وهذا لا يُعد استمرارًا للتطبيق القديم.", "إذا ضاع المفتاح على Play ف لدى Google استعادة للمفتاح. القبول ليس مضمونًا.", "احفظ ملف المفتاح وكلمة السر في مكان منفصل عن الحزمة."],
        ru: ["С новым keystore можно открыть новое имя пакета. Это не продолжение старого приложения.", "Если ключ потерян в Play, у Google есть сброс ключа. Что его примут, не обещано.", "Файл ключа и пароль храни отдельно от пакета."],
      },
      L(
        "Parol yaddadır, fayl yoxdursa, parol faylı qaytarmır.",
        "If you remember the password but the file is gone, the password does not bring the file back.",
        "Parola akılda olsa da dosya yoksa parola dosyayı geri getirmez.",
        "إذا كانت كلمة السر في الذاكرة والملف غير موجود، فالكلمة لا تُرجع الملف.",
        "Пароль в памяти не возвращает файл, если самого файла нет.",
      ),
    ),
  },
  {
    slug: "imza-uygun-deyil",
    piece: piece(
      L("İmzalar uyğun gəlmir", "The signatures do not match", "İmzalar uyuşmuyor", "التواقيع غير متطابقة", "Подписи не совпадают"),
      L(
        "Telefonda duran tətbiqlə yeni APK ayrı açarla imzalanıb. Android bunu eyni tətbiqin davamı saymır.",
        "The app on the phone and the new APK were signed with different keys. Android does not treat that as the next version of the same app.",
        "Telefonda duran uygulama ile yeni APK ayrı anahtarla imzalanmıştır. Android bunu aynı uygulamanın devamı saymaz.",
        "التطبيق الذي على الهاتف وAPK الجديد وُقّعا بمفتاحين مختلفين. Android لا يعدّ ذلك استمرارًا للتطبيق نفسه.",
        "Приложение на телефоне и новый APK подписаны разными ключами. Android не считает это продолжением того же приложения.",
      ),
      {
        az: ["Köhnə tətbiqi silib yenisini qurmaq olar. İçindəki məlumat gedir.", "Yeniləmə istəyirsənsə, ilk açarın faylı və parolu lazımdır.", "Sınaq imzası ilə qurulmuş tətbiqin üstünə yayın imzası keçmir."],
        en: ["You can remove the old app and install the new one. The data inside goes away.", "If you want an update, you need the first key file and its password.", "A release signature does not replace a test signature on the installed app."],
        tr: ["Eski uygulamayı silip yenisini kurabilirsin. İçindeki veri gider.", "Güncelleme istiyorsan ilk anahtarın dosyası ve parolası gerekir.", "Deneme imzasıyla kurulmuş uygulamanın üstüne yayın imzası geçmez."],
        ar: ["يمكن حذف التطبيق القديم وتثبيت الجديد. بيانات الداخل تذهب.", "إذا أردت تحديثًا فأنت تحتاج ملف المفتاح الأول وكلمة سره.", "توقيع النشر لا يركب فوق تطبيق ثُبّت بتوقيع التجربة."],
        ru: ["Можно удалить старое приложение и поставить новое. Данные внутри уйдут.", "Если нужно обновление, нужен файл первого ключа и его пароль.", "Подпись выпуска не ложится поверх приложения, поставленного пробной подписью."],
      },
    ),
  },
  {
    slug: "paket-adi-xetasi",
    piece: piece(
      L("Paket adı xətası", "Package name error", "Paket adı hatası", "خطأ في اسم الحزمة", "Ошибка имени пакета"),
      L(
        "Paket adı tətbiqin daimi adıdır. Böyük hərf, boşluq və Azərbaycan hərfi olmaz.",
        "The package name is the app's permanent name. It cannot contain a capital letter, a space, or an Azerbaijani letter.",
        "Paket adı uygulamanın kalıcı adıdır. Büyük harf, boşluk ve Azerbaycan harfi olmaz.",
        "اسم الحزمة هو الاسم الدائم للتطبيق. لا يقبل حرفًا كبيرًا ولا مسافة ولا حرفًا أذريًا.",
        "Имя пакета — постоянное имя приложения. Большая буква, пробел и азербайджанская буква не подходят.",
      ),
      {
        az: ["Düz forması `com.ad.soz` kimidir. Hər hissə hərf ilə başlayır.", "Play-ə çıxandan sonra bu ad dəyişmir.", "Eyni ad başqa imza ilə artıq durursa, telefon «artıq mövcuddur» deyir."],
        en: ["A correct form looks like `com.ad.soz`. Each part starts with a letter.", "After the app is on Play, this name does not change.", "If the same name is already installed with another signature, the phone says it already exists."],
        tr: ["Doğru biçim `com.ad.soz` gibidir. Her parça harfle başlar.", "Play'e çıktıktan sonra bu ad değişmez.", "Aynı ad başka imzayla zaten duruyorsa telefon «zaten var» der."],
        ar: ["الشكل الصحيح مثل `com.ad.soz`. كل جزء يبدأ بحرف.", "بعد الخروج على Play لا يتغير هذا الاسم.", "إذا كان الاسم نفسه مثبتًا بتوقيع آخر يقول الهاتف إنه موجود من قبل."],
        ru: ["Верный вид такой: `com.ad.soz`. Каждая часть начинается с буквы.", "После выхода в Play это имя не меняется.", "Если то же имя уже стоит с другой подписью, телефон говорит, что оно уже есть."],
      },
    ),
  },
  {
    slug: "apk-fayli-zedelenib",
    piece: piece(
      L("APK faylı zədələnib", "The APK file is damaged", "APK dosyası bozuldu", "ملف APK تالف", "Файл APK повреждён"),
      L(
        "Fayl yolda kəsilib və ya içindən bir hissə silinib. Telefon paketi aça bilmir.",
        "The file was cut off on the way, or a part inside it was removed. The phone cannot open the package.",
        "Dosya yolda kesilmiş ya da içinden bir parça silinmiştir. Telefon paketi açamaz.",
        "الملف انقطع في الطريق أو حُذف جزء من داخله. الهاتف لا يستطيع فتح الحزمة.",
        "Файл оборвался по дороге или внутри удалили часть. Телефон не может открыть пакет.",
      ),
      {
        az: ["Endirməni yenidən et. Köhnə linkdən gələn fayl yarımçıq ola bilər.", "ZIP-in adını `.apk` etmək kifayət etmir. İç quruluş düz olmalıdır.", "`META-INF` silinibsə, imza da gedib. Faylı yenidən imzala."],
        en: ["Download it again. A file from an old link can be incomplete.", "Renaming a ZIP to `.apk` is not enough. The inside structure has to be right.", "If `META-INF` was deleted, the signature went with it. Sign the file again."],
        tr: ["İndirmeyi yeniden yap. Eski bağlantıdan gelen dosya yarım olabilir.", "ZIP'in adını `.apk` yapmak yetmez. İç kuruluş doğru olmalıdır.", "`META-INF` silindiyse imza da gitmiştir. Dosyayı yeniden imzala."],
        ar: ["أعد التنزيل. الملف الذي يأتي من رابط قديم قد يكون ناقصًا.", "تغيير اسم ZIP إلى `.apk` لا يكفي. بنية الداخل يجب أن تكون صحيحة.", "إذا حُذف `META-INF` فقد ذهب التوقيع معه. وقّع الملف من جديد."],
        ru: ["Скачай ещё раз. Файл со старой ссылки может быть неполным.", "Переименовать ZIP в `.apk` недостаточно. Внутреннее устройство должно быть верным.", "Если удалён `META-INF`, подпись ушла вместе с ним. Подпиши файл снова."],
      },
    ),
  },
];

const TOPICS: readonly SearchItem[] = [
  {
    slug: "chatgpt-nedir",
    piece: piece(
      L("ChatGPT nədir?", "What is ChatGPT?", "ChatGPT nedir?", "ما هو ChatGPT؟", "Что такое ChatGPT?"),
      L(
        "ChatGPT söhbət proqramıdır. Sən yazırsan, o cavab yazır. Mətn, kod, tərcümə və sadə izah üçün işlədilir. Adamlar bu il onun adını çox axtarır, çünki həm saytda, həm telefonda ayrıca durur.\n\nOnu OpenAI hazırlayır. Pulsuz tərəfi var, ödənişli tərəfi də. Hansı modelin açıq olduğu və gündə neçə sual verə bildiyin vaxtaşırı dəyişir. Düymənin adı sabah eyni olmaya bilər.\n\nSənin kompüterindəki faylı özü açmır. Yapışdırdığın və ya özün yüklədiyin mətni görür. Şifrə, kart nömrəsi və gizli açar ora getməməlidir.\n\nCavab həmişə düz olmur. Rəqəm, tarix, qanun və kod səhv çıxa bilər. Əmin səslənəndə də yanılır. Vacib şeyi başqa yerdən yoxla. Kodu işə salmadan qəbul etmə.",
        "ChatGPT is a chat program. You write, and it writes back. People use it for text, code, translation, and a plain explanation. They search its name a lot this year because it stands on its own, both on the web and on the phone.\n\nOpenAI makes it. There is a free side and a paid side. Which model is open, and how many questions you can ask in a day, changes from time to time. The name on a button may not be the same tomorrow.\n\nIt does not open a file on your computer by itself. It sees the text you paste or upload yourself. A password, a card number, and a private key should not go there.\n\nThe answer is not always right. A number, a date, a law, and a piece of code can come out wrong. It can sound sure and still be wrong. Check an important fact somewhere else. Do not accept code before you run it.",
        "ChatGPT bir sohbet programıdır. Sen yazarsın, o cevap yazar. Metin, kod, çeviri ve sade açıklama için kullanılır. İnsanlar bu yıl adını çok arar, çünkü hem sitede hem telefonda ayrı durur.\n\nOnu OpenAI hazırlar. Ücretsiz tarafı vardır, ücretli tarafı da. Hangi modelin açık olduğu ve günde kaç soru sorabildiğin zaman zaman değişir. Düğmenin adı yarın aynı olmayabilir.\n\nBilgisayarındaki dosyayı kendisi açmaz. Yapıştırdığın veya kendin yüklediğin metni görür. Şifre, kart numarası ve gizli anahtar oraya gitmemelidir.\n\nCevap her zaman doğru değildir. Sayı, tarih, yasa ve kod yanlış çıkabilir. Emin seslendiğinde de yanılır. Önemli bir şeyi başka yerden kontrol et. Kodu çalıştırmadan kabul etme.",
        "ChatGPT برنامج محادثة. تكتب فيكتب الجواب. يُستخدم للنص والرمز والترجمة والشرح البسيط. يبحث الناس عن اسمه كثيرًا هذا العام لأنه يقف وحده، على الويب وعلى الهاتف.\n\nتصنعه OpenAI. له جانب مجاني وجانب مدفوع. أي نموذج مفتوح، وكم سؤالًا تستطيع أن تسأل في اليوم، يتغير من وقت إلى وقت. اسم الزر قد لا يبقى نفسه غدًا.\n\nلا يفتح ملفًا على حاسوبك بنفسه. يرى النص الذي تلصقه أو ترفعه أنت. كلمة السر ورقم البطاقة والمفتاح السري لا ينبغي أن تذهب إلى هناك.\n\nالجواب ليس صحيحًا دائمًا. قد يخرج الرقم أو التاريخ أو القانون أو الرمز خطأ. قد يبدو واثقًا ويخطئ مع ذلك. افحص الأمر المهم من مكان آخر. لا تقبل الرمز قبل أن تشغّله.",
        "ChatGPT — это программа для разговора. Ты пишешь, она отвечает. Ею пользуются для текста, кода, перевода и простого объяснения. В этом году имя ищут часто, потому что она стоит отдельно и на сайте, и на телефоне.\n\nЕё делает OpenAI. Есть бесплатная сторона и платная. Какая модель открыта и сколько вопросов можно задать за день, время от времени меняется. Надпись на кнопке завтра может быть другой.\n\nФайл на твоём компьютере она сама не открывает. Она видит текст, который ты вставил или сам загрузил. Пароль, номер карты и секретный ключ туда уходить не должны.\n\nОтвет не всегда верный. Число, дата, закон и код могут выйти неправильно. Она может звучать уверенно и всё равно ошибиться. Важное проверь в другом месте. Не принимай код, пока не запустишь его.",
      ),
      {
        az: ["Açıq «bunu izah et» əvəzinə dili, uzunluğu və əlindəki mətni yaz.", "Kodu sətir-sətir izah etdir, sonra özün oxu.", "Şəkil də göndərmək olur. Yenə də yazdığın söz cavabı yönəldir.", "Tarixçə sənin hesabındadır. Başqasının hesabı sənin söhbətini görmür.", "Tərcümə üçün işləyir, amma ad, rəqəm və atalar sözü səhv düşə bilər.", "Hazır kodu layihəyə yapışdırmazdan əvvəl bir dəfə işlət."],
        en: ["Instead of a bare \"explain this\", write the language, the length, and the text you already have.", "Ask it to explain the code line by line, then read it yourself.", "You can send a picture too. The words you write still steer the answer.", "The history sits in your account. Someone else's account does not see your chat.", "It works for translation, but a name, a number, and a saying can land wrong.", "Run generated code once before you paste it into a project."],
        tr: ["Boş «bunu açıkla» yerine dili, uzunluğu ve elindeki metni yaz.", "Kodu satır satır açıklat, sonra kendin oku.", "Resim de göndermek olur. Yine de yazdığın söz cevabı yönlendirir.", "Geçmiş senin hesabındadır. Başkasının hesabı senin sohbetini görmez.", "Çeviri için çalışır, ama ad, sayı ve deyim yanlış düşebilir.", "Üretilen kodu projeye yapıştırmadan önce bir kez çalıştır."],
        ar: ["بدل «اشرح هذا» العاري اكتب اللغة والطول والنص الذي تحت يدك.", "اطلب شرح الرمز سطرًا سطرًا، ثم اقرأه أنت.", "تستطيع إرسال صورة أيضًا. والكلمات التي تكتبها ما زالت توجّه الجواب.", "السجل في حسابك. حساب غيرك لا يرى محادثتك.", "يصلح للترجمة، لكن الاسم والرقم والمثل قد يقع خطأ.", "شغّل الرمز المولَّد مرة قبل أن تلصقه في مشروع."],
        ru: ["Вместо голого «объясни это» напиши язык, длину и текст, который уже есть.", "Попроси объяснить код по строкам, потом прочитай сам.", "Картинку тоже можно отправить. Слова, которые ты пишешь, всё равно ведут ответ.", "История лежит в твоём аккаунте. Чужой аккаунт твой разговор не видит.", "Для перевода годится, но имя, число и поговорка могут лечь неверно.", "Запусти готовый код один раз, прежде чем вставлять его в проект."],
      },
      L(
        "Nibras AI bu saytın öz söhbətidir. ChatGPT deyil. Sual eyni cür verilir, model və limit ayrıdır.",
        "Nibras AI is this site's own chat. It is not ChatGPT. You can ask in the same way, but the model and the limit are separate.",
        "Nibras AI bu sitenin kendi sohbetidir. ChatGPT değildir. Soru aynı biçimde verilir, model ve limit ayrıdır.",
        "Nibras AI محادثة هذا الموقع. ليست ChatGPT. السؤال يُعطى بالطريقة نفسها، لكن النموذج والحد منفصلان.",
        "Nibras AI — это разговор этого сайта. Это не ChatGPT. Спрашивать можно так же, но модель и лимит другие.",
      ),
    ),
  },
  {
    slug: "gemini-nedir",
    piece: piece(
      L("Gemini nədir?", "What is Gemini?", "Gemini nedir?", "ما هو Gemini؟", "Что такое Gemini?"),
      L(
        "Gemini Google-un söhbət proqramıdır. ChatGPT ilə eyni işi görür: sual yazırsan, cavab gəlir. Mətn, şəkil və səs qəbul edə bilir.\n\nAxtarışın, Gmail-in və Android-in yanında durur. Buna görə adamlar proqramın adını yox, «Gemini» sözünün özünü axtarır. Ad bir çox dildə yazılır, mənası dəyişmir.\n\nGoogle hesabınla açılır. Pulsuz tərəfi və ödənişli tərəfi var. Limit və içindəki model dəyişə bilər. Bir həftə gördüyün düymə o biri həftə olmayabilir.\n\nCavabı axtarış nəticəsi kimi qəbul etmə. Mənbə göstərməyə bilər və ya göstərdiyi səhifə sualına uymaya bilər. Rəqəm, tarix və kod üçün yenə yoxlama lazımdır.",
        "Gemini is Google's chat program. It does the same job as ChatGPT: you write a question and an answer comes back. It can take text, a picture, and a voice.\n\nIt sits beside Search, Gmail, and Android. That is why people search the word Gemini itself, not only the idea of the program. The name is written in many languages. The meaning does not change.\n\nIt opens with your Google account. There is a free side and a paid side. The limit and the model inside can change. A button you saw one week may be gone the next.\n\nDo not take the answer as a search result. It may show no source, or the page it shows may not match the question. A number, a date, and code still need a check.",
        "Gemini, Google'ın sohbet programıdır. ChatGPT ile aynı işi görür: soru yazarsın, cevap gelir. Metin, resim ve ses alabilir.\n\nAramanın, Gmail'in ve Android'in yanında durur. Bu yüzden insanlar programın fikrini değil, Gemini sözünün kendisini arar. Ad birçok dilde yazılır, anlamı değişmez.\n\nGoogle hesabınla açılır. Ücretsiz tarafı ve ücretli tarafı vardır. Limit ve içindeki model değişebilir. Bir hafta gördüğün düğme öteki hafta olmayabilir.\n\nCevabı arama sonucu gibi kabul etme. Kaynak göstermeyebilir ya da gösterdiği sayfa soruya uymayabilir. Sayı, tarih ve kod için yine kontrol gerekir.",
        "Gemini برنامج محادثة Google. يؤدي عمل ChatGPT نفسه: تكتب سؤالًا فيأتي الجواب. يستطيع أن يأخذ نصًا وصورة وصوتًا.\n\nيقف بجانب البحث وGmail وAndroid. لذلك يبحث الناس عن كلمة Gemini نفسها، لا عن فكرة البرنامج فقط. يُكتب الاسم بلغات كثيرة، والمعنى لا يتغير.\n\nيُفتح بحساب Google. له جانب مجاني وجانب مدفوع. الحد والنموذج في الداخل يمكن أن يتغيرا. الزر الذي رأيته في أسبوع قد لا يكون في الأسبوع التالي.\n\nلا تأخذ الجواب كنتيجة بحث. قد لا يُظهر مصدرًا، أو الصفحة التي يُظهرها قد لا توافق السؤال. الرقم والتاريخ والرمز ما زالت تحتاج فحصًا.",
        "Gemini — это программа Google для разговора. Она делает ту же работу, что ChatGPT: пишешь вопрос, приходит ответ. Умеет принять текст, картинку и голос.\n\nОна стоит рядом с Поиском, Gmail и Android. Поэтому люди ищут само слово Gemini, а не только идею программы. Имя пишут на многих языках, смысл не меняется.\n\nОткрывается аккаунтом Google. Есть бесплатная сторона и платная. Лимит и модель внутри могут меняться. Кнопка, которую ты видел на одной неделе, на следующей может пропасть.\n\nНе принимай ответ за результат поиска. Источника может не быть, или показанная страница может не подходить к вопросу. Число, дата и код всё равно надо проверять.",
      ),
      {
        az: ["Android telefonda və brauzerdə eyni hesabla açılır.", "Gmail və Diskdəki faylı yalnız sən icazə verəndə görür. İcazəni bağlamaq olar.", "Şəkil göndərib «bunun içində nə var» deyə bilərsən. Yenə də yoxla.", "Tərcümə və qısa izah üçün rahatdır. Qanun və tibb cavabını son söz sayma.", "ChatGPT-nin hesabı Gemini-də açılmır. Hər birinin öz girişi var.", "Kod nümunəsi versə, onu öz layihəndə işlət və səhvi özün gör."],
        en: ["On an Android phone and in the browser it opens with the same account.", "It sees a file in Gmail or Drive only when you allow it. You can close that permission.", "You can send a picture and ask what is in it. Check the answer anyway.", "It is comfortable for translation and a short explanation. Do not treat a law or a medical answer as the last word.", "A ChatGPT account does not open Gemini. Each one has its own sign-in.", "If it gives a code sample, run it in your own project and see the mistake yourself."],
        tr: ["Android telefonda ve tarayıcıda aynı hesapla açılır.", "Gmail ve Drive'daki dosyayı yalnız sen izin verince görür. İzni kapatmak olur.", "Resim gönderip «bunun içinde ne var» diyebilirsin. Yine de kontrol et.", "Çeviri ve kısa açıklama için rahattır. Yasa ve tıp cevabını son söz sayma.", "ChatGPT hesabı Gemini'de açılmaz. Her birinin kendi girişi vardır.", "Kod örneği verirse onu kendi projende çalıştır ve hatayı kendin gör."],
        ar: ["على هاتف Android وفي المتصفح يُفتح بالحساب نفسه.", "يرى ملفًا في Gmail أو Drive فقط حين تسمح. تستطيع إغلاق الإذن.", "تستطيع إرسال صورة وتسأل ماذا فيها. افحص الجواب مع ذلك.", "مريح للترجمة والشرح القصير. لا تجعل جواب القانون أو الطب الكلمة الأخيرة.", "حساب ChatGPT لا يفتح Gemini. لكل واحد دخوله.", "إذا أعطى مثال رمز فشغّله في مشروعك ورَ الخطأ بنفسك."],
        ru: ["На телефоне Android и в браузере открывается тем же аккаунтом.", "Файл в Gmail или на Диске видит только когда ты разрешишь. Разрешение можно закрыть.", "Можно отправить картинку и спросить, что внутри. Ответ всё равно проверь.", "Для перевода и короткого объяснения удобен. Ответ про закон или медицину не считай последним словом.", "Аккаунт ChatGPT в Gemini не открывается. У каждого свой вход.", "Если даст пример кода, запусти его в своём проекте и увидь ошибку сам."],
      },
    ),
  },
  {
    slug: "claude-nedir",
    piece: piece(
      L("Claude nədir?", "What is Claude?", "Claude nedir?", "ما هو Claude؟", "Что такое Claude?"),
      L(
        "Claude Anthropic-in söhbət proqramıdır. Adamlar onu ChatGPT və Gemini-nin yanında axtarır. Üçünün işi eynidir: sən yazırsan, model cavab yazır.\n\nUzun mətni bir yerdə oxutmaq və kodu izah etdirmək üçün seçirlər. Qısa sual üçün də işləyir. Fərq adın arxasındakı şirkətdə və həmin həftə açıq olan modeldədir.\n\nHesabı ayrıdır. ChatGPT-yə və ya Google-a girdiyin üçün Claude açılmır. Pulsuz tərəfi və ödənişli tərəfi var. Limit dolanda cavab dayanır və ya qısalır.\n\nBu da yanılır. Uzun cavab düz səslənə bilər və ortasında bir fakt səhv ola bilər. Müqavilə, qanun və tibb mətnini olduğu kimi qəbul etmə. Kodu oxu.",
        "Claude is Anthropic's chat program. People search for it next to ChatGPT and Gemini. The job of all three is the same: you write, and a model writes back.\n\nPeople pick it to have a long text read in one place and to have code explained. It works for a short question too. The difference is the company behind the name and the model that is open that week.\n\nThe account is separate. Signing in to ChatGPT or Google does not open Claude. There is a free side and a paid side. When the limit is full, the answer stops or gets shorter.\n\nThis one is wrong too. A long answer can sound right and still hold one false fact in the middle. Do not take a contract, a law, or a medical text as it stands. Read the code.",
        "Claude, Anthropic'in sohbet programıdır. İnsanlar onu ChatGPT ve Gemini'nin yanında arar. Üçünün işi aynıdır: sen yazarsın, model cevap yazar.\n\nUzun metni bir yerde okutmak ve kodu açıklatmak için seçerler. Kısa soru için de çalışır. Fark, adın arkasındaki şirkette ve o hafta açık olan modeldedir.\n\nHesabı ayrıdır. ChatGPT'ye veya Google'a girdiğin için Claude açılmaz. Ücretsiz tarafı ve ücretli tarafı vardır. Limit dolunca cevap durur ya da kısalır.\n\nBu da yanılır. Uzun cevap doğru gelebilir ve ortasında bir olgu yanlış olabilir. Sözleşme, yasa ve tıp metnini olduğu gibi kabul etme. Kodu oku.",
        "Claude برنامج محادثة Anthropic. يبحث الناس عنه بجانب ChatGPT وGemini. عمل الثلاثة واحد: تكتب فيكتب النموذج الجواب.\n\nيختارونه ليُقرأ نص طويل في مكان واحد وليُشرح الرمز. يعمل للسؤال القصير أيضًا. الفرق في الشركة خلف الاسم وفي النموذج المفتوح ذلك الأسبوع.\n\nالحساب منفصل. الدخول إلى ChatGPT أو Google لا يفتح Claude. له جانب مجاني وجانب مدفوع. حين يمتلئ الحد يتوقف الجواب أو يقصر.\n\nهذا أيضًا يخطئ. قد يبدو الجواب الطويل صحيحًا وفي وسطه حقيقة خاطئة. لا تأخذ عقدًا أو قانونًا أو نصًا طبيًا كما هو. اقرأ الرمز.",
        "Claude — это программа Anthropic для разговора. Её ищут рядом с ChatGPT и Gemini. Работа у всех трёх одна: ты пишешь, модель отвечает.\n\nЕё выбирают, чтобы длинный текст прочитали в одном месте и чтобы объяснили код. Для короткого вопроса тоже годится. Разница в компании за именем и в модели, которая открыта на этой неделе.\n\nАккаунт отдельный. Вход в ChatGPT или Google не открывает Claude. Есть бесплатная сторона и платная. Когда лимит полон, ответ останавливается или становится короче.\n\nЭта тоже ошибается. Длинный ответ может звучать верно, а в середине один факт будет неверным. Договор, закон и медицинский текст не принимай как есть. Читай код.",
      ),
      {
        az: ["Üç addan birini seçmək üçün əvvəl birini öyrəş. Hamısını bir gündə qarışdırma.", "Uzun mətni hissə-hissə ver. Bir dəfəyə yapışdırılan çox böyük mətn kəsilə bilər.", "«Üç cümlə» və ya «bir siyahı» desən, cavab o ölçüdə gəlir.", "Kod üçün faylın adını və nəyin sınmadığını yaz. Tək «düzəlt» azdır.", "Şirkət sənədlərini və müştəri adlarını yapışdırma.", "Cavabın altını yoxlamaq sənin işindir. Model öz səhvini həmişə demir."],
        en: ["To pick one of the three names, get used to one first. Do not mix all of them on the same day.", "Give a long text in parts. A very large paste in one go can be cut off.", "If you say \"three sentences\" or \"one list\", the answer comes in that size.", "For code, write the file name and what failed. A bare \"fix it\" is too little.", "Do not paste company documents or customer names.", "Checking the bottom of the answer is your job. The model does not always say its own mistake."],
        tr: ["Üç addan birini seçmek için önce birine alış. Hepsini bir günde karıştırma.", "Uzun metni parça parça ver. Bir kerede yapıştırılan çok büyük metin kesilebilir.", "«Üç cümle» ya da «bir liste» dersen cevap o ölçüde gelir.", "Kod için dosyanın adını ve neyin bozulduğunu yaz. Tek «düzelt» azdır.", "Şirket belgelerini ve müşteri adlarını yapıştırma.", "Cevabın altını kontrol etmek senin işindir. Model kendi hatasını her zaman söylemez."],
        ar: ["لكي تختار واحدًا من الأسماء الثلاثة تعوّد على واحد أولًا. لا تخلطها كلها في يوم واحد.", "أعطِ النص الطويل أجزاء. النص الكبير جدًا الذي يُلصق دفعة واحدة قد يُقطع.", "إذا قلت «ثلاث جمل» أو «قائمة واحدة» جاء الجواب بذلك القياس.", "للرمز اكتب اسم الملف وما الذي فشل. «أصلح» وحدها قليلة.", "لا تلصق وثائق الشركة ولا أسماء الزبائن.", "فحص أسفل الجواب عملك. النموذج لا يقول خطأه دائمًا."],
        ru: ["Чтобы выбрать одно из трёх имён, сначала привыкни к одному. Не мешай все три в один день.", "Длинный текст давай частями. Очень большая вставка за один раз может обрезаться.", "Если скажешь «три предложения» или «один список», ответ придёт в этом размере.", "Для кода напиши имя файла и что сломалось. Одного «исправь» мало.", "Не вставляй документы компании и имена клиентов.", "Проверить низ ответа — твоя работа. Модель не всегда говорит о своей ошибке."],
      },
    ),
  },
  {
    slug: "prompt-nedir",
    piece: piece(
      L("Prompt nədir?", "What is a prompt?", "Prompt nedir?", "ما هو prompt؟", "Что такое prompt?"),
      L(
        "Prompt modelə göndərdiyin yazıdır. Sual da odu, tapşırıq da, yapışdırdığın kod da. Model sənin baxdığın səhifəni görmür. Yalnız bu yazını görür.\n\nQısa və boş sətir qeyri-müəyyən cavab gətirir. «Bunu izah et» desən, model nəyi, kimə və nə qədər izah edəcəyini özü seçir. Sən deməsən, uzun və ya sənin dilində olmayan cavab gələ bilər.\n\nDüz prompt üç şeyi deyir: nə istəyirsən, hansı dildə, nə qədər. Əlində nümunə varsa, onu da yaz. Nümunəyə yaxın cavab gəlir.\n\nBir dəfəyə hər şeyi yığma. Əvvəl qısa cavab al, sonra «bunu qısalt» və ya «ikinci addımı aç» de. Söhbət belə düzəlir.",
        "A prompt is the text you send to a model. It can be a question, a task, or code you paste. The model does not see the page you are looking at. It sees only this text.\n\nA short, empty line brings a vague answer. If you say \"explain this\", the model chooses what to explain, to whom, and how long. If you do not say, the answer may be long or not in your language.\n\nA straight prompt says three things: what you want, in which language, and how long. If you have an example, write that too. The answer comes closer to the example.\n\nDo not pile everything into one go. Get a short answer first, then say \"make this shorter\" or \"open the second step\". A chat is built that way.",
        "Prompt, modele gönderdiğin yazıdır. Soru da odur, görev de, yapıştırdığın kod da. Model baktığın sayfayı görmez. Yalnız bu yazıyı görür.\n\nKısa ve boş satır belirsiz cevap getirir. «Bunu açıkla» dersen model neyi, kime ve ne kadar açıklayacağını kendi seçer. Sen söylemezsen cevap uzun ya da senin dilinde olmayabilir.\n\nDüz prompt üç şeyi söyler: ne istiyorsun, hangi dilde, ne kadar. Elinde örnek varsa onu da yaz. Cevap örneğe yakın gelir.\n\nBir kerede her şeyi yığma. Önce kısa cevap al, sonra «bunu kısalt» ya da «ikinci adımı aç» de. Sohbet böyle kurulur.",
        "Prompt هو النص الذي ترسله إلى النموذج. قد يكون سؤالًا أو مهمة أو رمزًا تلصقه. النموذج لا يرى الصفحة التي تنظر إليها. يرى هذا النص فقط.\n\nالسطر القصير الفارغ يأتي بجواب غامض. إذا قلت «اشرح هذا» يختار النموذج ماذا يشرح ولمن وكم. إذا لم تقل قد يأتي الجواب طويلًا أو بغير لغتك.\n\nالـ prompt المستقيم يقول ثلاثة أشياء: ماذا تريد، وبأي لغة، وكم. إذا كان عندك مثال فاكتبه أيضًا. يقترب الجواب من المثال.\n\nلا تكدّس كل شيء دفعة واحدة. خذ جوابًا قصيرًا أولًا، ثم قل «قصّر هذا» أو «افتح الخطوة الثانية». هكذا تُبنى المحادثة.",
        "Prompt — это текст, который ты отправляешь модели. Это и вопрос, и задание, и код, который ты вставил. Модель не видит страницу, на которую ты смотришь. Она видит только этот текст.\n\nКороткая пустая строка приносит расплывчатый ответ. Если сказать «объясни это», модель сама выберет, что объяснять, кому и как долго. Если не скажешь, ответ может быть длинным или не на твоём языке.\n\nПрямой prompt говорит три вещи: чего ты хочешь, на каком языке и какой длины. Если есть пример, напиши и его. Ответ придёт ближе к примеру.\n\nНе складывай всё за один раз. Сначала получи короткий ответ, потом скажи «сделай короче» или «открой второй шаг». Разговор строится так.",
      ),
      {
        az: ["«Bu Python kodunu üç cümlə ilə izah et» — «bunu izah et»dən düz işləyir.", "Cavabın içində nə olmasın, onu da yaz. Məsələn: giriş sözü yazma.", "Kod səhvini göstər: səhv mətni, gözlədiyin nəticə, olan nəticə.", "Şifrəni, açarı və başqasının şəxsi mətnini qoyma.", "Birinci cavab səhvdirsə, hamısını silib yenidən başlama. Səhv yeri göstər.", "Eyni promptu başqa modelə versən, cavab eyni olmaya bilər. Yoxlama yenə səndədir."],
        en: ["\"Explain this Python code in three sentences\" works better than \"explain this\".", "Also write what should not be in the answer. For example: do not write an introduction.", "Show a code mistake as the error text, the result you expected, and the result you got.", "Do not put in a password, a key, or someone else's private text.", "If the first answer is wrong, do not delete everything and start over. Point at the wrong place.", "If you give the same prompt to another model, the answer may not be the same. The check is still yours."],
        tr: ["«Bu Python kodunu üç cümleyle açıkla», «bunu açıkla»dan düzgün çalışır.", "Cevabın içinde ne olmasın, onu da yaz. Örneğin: giriş yazma.", "Kod hatasını göster: hata metni, beklediğin sonuç, olan sonuç.", "Şifreyi, anahtarı ve başkasının özel metnini koyma.", "İlk cevap yanlışsa her şeyi silip yeniden başlama. Yanlış yeri göster.", "Aynı promptu başka modele verirsen cevap aynı olmayabilir. Kontrol yine sendedir."],
        ar: ["«اشرح رمز Python هذا في ثلاث جمل» يعمل أفضل من «اشرح هذا».", "اكتب أيضًا ما لا ينبغي أن يكون في الجواب. مثلًا: لا تكتب مقدمة.", "أظهر خطأ الرمز: نص الخطأ، والنتيجة التي توقعتها، والنتيجة التي حصلت عليها.", "لا تضع كلمة السر ولا المفتاح ولا نصًا خاصًا لغيرك.", "إذا كان الجواب الأول خطأ فلا تحذف كل شيء وتبدأ من جديد. أشر إلى مكان الخطأ.", "إذا أعطيت الـ prompt نفسه لنموذج آخر فقد لا يكون الجواب نفسه. الفحص ما زال عليك."],
        ru: ["«Объясни этот код Python тремя предложениями» работает точнее, чем «объясни это».", "Напиши и чего в ответе быть не должно. Например: не пиши вступление.", "Ошибку кода покажи так: текст ошибки, результат, которого ждал, и результат, который вышел.", "Не клади пароль, ключ и чужой личный текст.", "Если первый ответ неверный, не стирай всё и не начинай заново. Покажи место ошибки.", "Если тот же prompt дать другой модели, ответ может быть другим. Проверка всё равно на тебе."],
      },
      L(
        "Model sənin ekranını görmür. Görməsini istəyirsənsə, mətnin özünü yaz.",
        "The model does not see your screen. If you want it to see the text, write the text itself.",
        "Model ekranını görmez. Görmesini istiyorsan metnin kendisini yaz.",
        "النموذج لا يرى شاشتك. إذا أردت أن يرى النص فاكتب النص نفسه.",
        "Модель не видит твой экран. Если хочешь, чтобы она увидела текст, напиши сам текст.",
      ),
    ),
  },
  {
    slug: "ai-ile-tetbiq",
    piece: piece(
      L("Süni intellektlə tətbiq hazırlamaq", "Making an app with AI", "Yapay zeka ile uygulama yapmak", "صنع تطبيق بالذكاء الاصطناعي", "Сделать приложение с ИИ"),
      L(
        "2026-da bir cümlə Android tətbiqinin başlanğıcı ola bilir. Alətə nə istədiyini yazırsan, o sənə layihə qaytarır. Bu, mağazaya hazır tətbiq deyil. Bu, başlanğıcdır.\n\nİçində yenə kod durur. Kod Kotlin ola bilər. Səhifəni APK-ya yığmaq da ola bilər. İkisi eyni şey deyil. Səhifəni paketləmək dil öyrənmək demək deyil. Öz ekranını və düyməni yazanda Java və ya Kotlin gəlir.\n\nModel düyməni yarımçıq, icazəni artıq və ya mətni sənin dilində olmayan qoya bilər. Real telefonda açmadan «hazırdır» demə. Boş ekran, sınan düymə və əskik icazə burada görünür.\n\nMağazaya çıxarmaq ayrı işdir. Ad, ikon, paket adı və imza səndə qalır. Paket adı sonradan dəyişmir. İmza itəndə yeniləmə də itir. Süni intellekt bu qaydaları ləğv etmir.",
        "In 2026 one sentence can start an Android app. You write what you want, and the tool returns a project. That is not an app ready for the store. It is a start.\n\nThere is still code inside. The code may be Kotlin. It may also be a page packed into an APK. Those are not the same thing. Packing a page is not learning a language. When you write your own screen and button, Java or Kotlin comes in.\n\nA model can leave a button half done, a permission too wide, or text that is not in your language. Do not say it is ready before you open it on a real phone. An empty screen, a broken button, and a missing permission show up there.\n\nPutting it in the store is a separate job. The name, the icon, the package name, and the signature stay with you. The package name does not change later. If the signature is lost, the update is lost too. AI does not cancel these rules.",
        "2026'da bir cümle bir Android uygulamasının başlangıcı olabilir. Araca ne istediğini yazarsın, o sana bir proje verir. Bu, mağazaya hazır uygulama değildir. Bu, başlangıçtır.\n\nİçinde yine kod durur. Kod Kotlin olabilir. Sayfayı APK'ya paketlemek de olabilir. İkisi aynı şey değildir. Sayfayı paketlemek dil öğrenmek demek değildir. Kendi ekranını ve düğmeni yazınca Java veya Kotlin gelir.\n\nModel düğmeyi yarım, izni fazla ya da metni senin dilinde olmayan koyabilir. Gerçek telefonda açmadan «hazır» deme. Boş ekran, kırık düğme ve eksik izin burada görünür.\n\nMağazaya çıkarmak ayrı iştir. Ad, simge, paket adı ve imza sende kalır. Paket adı sonradan değişmez. İmza kaybolunca güncelleme de kaybolur. Yapay zeka bu kuralları kaldırmaz.",
        "في 2026 يمكن لجملة واحدة أن تبدأ تطبيق Android. تكتب للأداة ماذا تريد فترد عليك بمشروع. هذا ليس تطبيقًا جاهزًا للمتجر. هذه بداية.\n\nفي الداخل ما زال هناك رمز. قد يكون الرمز Kotlin. وقد يكون صفحة تُجمع في APK. ليسا الشيء نفسه. جمع الصفحة ليس تعلم لغة. حين تكتب شاشتك وزرّك يأتي Java أو Kotlin.\n\nقد يترك النموذج الزر نصف تام، أو الإذن أوسع من اللازم، أو النص بغير لغتك. لا تقل إنه جاهز قبل أن تفتحه على هاتف حقيقي. الشاشة الفارغة والزر المكسور والإذن الناقص تظهر هناك.\n\nإخراجه إلى المتجر عمل منفصل. الاسم والأيقونة واسم الحزمة والتوقيع تبقى عندك. اسم الحزمة لا يتغير بعد ذلك. إذا ضاع التوقيع ضاع التحديث أيضًا. الذكاء الاصطناعي لا يلغي هذه القواعد.",
        "В 2026 одно предложение может начать приложение Android. Пишешь инструменту, чего хочешь, и он возвращает проект. Это не приложение, готовое для магазина. Это начало.\n\nВнутри всё ещё код. Код может быть на Kotlin. Это может быть и страница, собранная в APK. Это не одно и то же. Собрать страницу — не выучить язык. Когда пишешь свой экран и кнопку, приходят Java или Kotlin.\n\nМодель может оставить кнопку недоделанной, разрешение слишком широким или текст не на твоём языке. Не говори «готово», пока не откроешь на настоящем телефоне. Пустой экран, сломанная кнопка и недостающее разрешение видны там.\n\nВыход в магазин — отдельная работа. Имя, значок, имя пакета и подпись остаются на тебе. Имя пакета потом не меняется. Если подпись потеряна, обновление тоже потеряно. ИИ эти правила не отменяет.",
      ),
      {
        az: ["Əvvəl bir ekran istə. «Hər şeyi olan tətbiq» boş və qarışıq layihə gətirir.", "Layihəni aç, düyməni bas, geri qayıt. Bunu telefonda et, yalnız şəkildə yox.", "İcazə siyahısını oxu. Lazım olmayan kameranı və kontaktı sil.", "Paket adı `com.ad.soz` kimi olsun. Hissə hərf ilə başlasın.", "İmzanı saxla. Başqa kompüterdə yeniləmə üçün həmin fayl lazımdır.", "Quruluş dayananda səbəb çox vaxt eynidir: parse error, imza və ya paket adı.", "Mağaza tətbiqi rədd edə bilər. Yarım ekran və başqasının adı buna kifayət edir."],
        en: ["Ask for one screen first. \"An app that has everything\" brings an empty, mixed project.", "Open the project, press the button, go back. Do this on a phone, not only in a picture.", "Read the permission list. Remove the camera and the contacts if you do not need them.", "Let the package name look like `com.ad.soz`. Each part should start with a letter.", "Keep the signature. The same file is needed for an update on another computer.", "When installation stops, the cause is often the same: parse error, signature, or package name.", "The store can reject the app. A half screen and someone else's name are enough for that."],
        tr: ["Önce bir ekran iste. «Her şeyi olan uygulama» boş ve karışık proje getirir.", "Projeyi aç, düğmeye bas, geri dön. Bunu telefonda yap, yalnız resimde değil.", "İzin listesini oku. Gerekmeyen kamerayı ve kişileri sil.", "Paket adı `com.ad.soz` gibi olsun. Parça harfle başlasın.", "İmzayı sakla. Başka bilgisayarda güncelleme için aynı dosya gerekir.", "Kurulum durunca sebep çoğu zaman aynıdır: parse error, imza ya da paket adı.", "Mağaza uygulamayı reddedebilir. Yarım ekran ve başkasının adı buna yeter."],
        ar: ["اطلب شاشة واحدة أولًا. «تطبيق فيه كل شيء» يأتي بمشروع فارغ ومختلط.", "افتح المشروع واضغط الزر وارجع. افعل هذا على الهاتف، لا في الصورة فقط.", "اقرأ قائمة الأذونات. احذف الكاميرا وجهات الاتصال إذا لم تحتجها.", "ليكن اسم الحزمة مثل `com.ad.soz`. كل جزء يبدأ بحرف.", "احفظ التوقيع. الملف نفسه يلزم للتحديث على حاسوب آخر.", "حين يتوقف التثبيت يكون السبب غالبًا نفسه: parse error أو التوقيع أو اسم الحزمة.", "قد يرفض المتجر التطبيق. شاشة نصف تامة واسم غيرك يكفيان لذلك."],
        ru: ["Сначала попроси один экран. «Приложение, в котором всё» приносит пустой и смешанный проект.", "Открой проект, нажми кнопку, вернись назад. Сделай это на телефоне, а не только на картинке.", "Прочитай список разрешений. Убери камеру и контакты, если они не нужны.", "Пусть имя пакета будет как `com.ad.soz`. Каждая часть начинается с буквы.", "Храни подпись. Тот же файл нужен для обновления на другом компьютере.", "Когда установка останавливается, причина часто одна: parse error, подпись или имя пакета.", "Магазин может отклонить приложение. Недоделанного экрана и чужого имени для этого хватает."],
      },
      L(
        "APK xətaları bu yolda da eynidir: qurulmur, parse error, imza və paket adı.",
        "The APK errors are the same on this road: it will not install, parse error, signature, and package name.",
        "APK hataları bu yolda da aynıdır: kurulmuyor, parse error, imza ve paket adı.",
        "أخطاء APK هي نفسها في هذا الطريق: لا يُثبَّت، وparse error، والتوقيع، واسم الحزمة.",
        "Ошибки APK на этой дороге те же: не устанавливается, parse error, подпись и имя пакета.",
      ),
    ),
  },
  {
    slug: "python-2026",
    piece: piece(
      L("2026-da Python öyrənməyə dəyərmi?", "Is Python still worth learning in 2026?", "2026'da Python öğrenmeye değer mi?", "هل يستحق Python التعلم في 2026؟", "Стоит ли учить Python в 2026?"),
      L(
        "Dəyər. Model kod yaza bilir deyə Python bitməyib. İlk dil üçün və süni intellekti öz proqramından çağırmaq üçün hələ düz başlanğıcdır.\n\nSəbəb budur: bir çox alətin nümunəsi Python-dadır. Sən nümunəni oxuya bilmirsənsə, modeli köməkçi yox, müəllif kimi işlədirsən. Səhv sətir o zaman sənin layihəndə qalır.\n\nÖyrənməyin özü dəyişib. Əvvəl kitabı səhifə-səhifə oxuyub sonra kod yazırdın. İndi qısa proqram yazıb modeldən həmin sətiri izah etdirmək olar. İzahı yoxlamadan növbəti sətirə keçmə.\n\nHər iş üçün Python lazım deyil. Səhifə düzəltmək istəyirsənsə, JavaScript daha yaxındır. Telefon tətbiqinin öz kodu üçün Java və ya Kotlin gəlir. Python o yolu bağlamır. Sadəcə o yolun dili deyil.",
        "Yes. Python is not finished because a model can write code. For a first language, and for calling an AI from your own program, it is still a straight start.\n\nThe reason is this: the examples of many tools are in Python. If you cannot read the example, you are using the model as the author, not as a helper. A wrong line then stays in your project.\n\nThe learning itself has changed. You used to read a book page by page and then write code. Now you can write a short program and ask a model to explain that line. Do not go to the next line before you check the explanation.\n\nPython is not needed for every job. If you want to make a page, JavaScript is closer. For a phone app's own code, Java or Kotlin comes in. Python does not close that road. It is just not the language of that road.",
        "Değer. Model kod yazabiliyor diye Python bitmedi. İlk dil için ve yapay zekayı kendi programından çağırmak için hâlâ düz bir başlangıçtır.\n\nSebep şudur: birçok aracın örneği Python'dadır. Örneği okuyamıyorsan modeli yardımcı değil, yazar gibi kullanıyorsun. Yanlış satır o zaman senin projende kalır.\n\nÖğrenmenin kendisi değişti. Eskiden kitabı sayfa sayfa okuyup sonra kod yazardın. Şimdi kısa program yazıp modelden o satırı açıklatabilirsin. Açıklamayı kontrol etmeden sonraki satıra geçme.\n\nHer iş için Python gerekmez. Sayfa yapmak istiyorsan JavaScript daha yakındır. Telefon uygulamasının kendi kodu için Java veya Kotlin gelir. Python o yolu kapatmaz. Sadece o yolun dili değildir.",
        "نعم. Python لم تنتهِ لأن النموذج يستطيع أن يكتب رمزًا. للغة الأولى ولنداء الذكاء الاصطناعي من برنامجك ما زالت بداية مستقيمة.\n\nالسبب هذا: أمثلة كثير من الأدوات بـ Python. إذا لم تستطع قراءة المثال فأنت تستخدم النموذج مؤلفًا لا مساعدًا. السطر الخطأ يبقى حينها في مشروعك.\n\nالتعلم نفسه تغيّر. كنت تقرأ الكتاب صفحة صفحة ثم تكتب الرمز. الآن تستطيع أن تكتب برنامجًا قصيرًا وتطلب من النموذج شرح ذلك السطر. لا تنتقل إلى السطر التالي قبل أن تفحص الشرح.\n\nPython ليست لازمة لكل عمل. إذا أردت صنع صفحة فـ JavaScript أقرب. لرمز تطبيق الهاتف نفسه يأتي Java أو Kotlin. Python لا تغلق ذلك الطريق. هي ليست لغة ذلك الطريق فقط.",
        "Да. Python не кончился оттого, что модель умеет писать код. Для первого языка и чтобы вызвать ИИ из своей программы это всё ещё прямой старт.\n\nПричина такая: примеры многих инструментов на Python. Если пример прочитать не можешь, ты держишь модель автором, а не помощником. Неверная строка тогда остаётся в твоём проекте.\n\nСамо учение изменилось. Раньше книгу читали страница за страницей и потом писали код. Теперь можно написать короткую программу и попросить модель объяснить эту строку. Не переходи к следующей, пока не проверишь объяснение.\n\nPython нужен не для всякой работы. Если хочешь делать страницу, ближе JavaScript. Для собственного кода приложения телефона приходят Java или Kotlin. Python эту дорогу не закрывает. Просто это не язык той дороги.",
      ),
      {
        az: ["Əvvəl dəyişən, şərt və döngünü özün yaz. Bunu modelsiz yaza bilməlisən.", "Sonra kiçik bir proqramı sındır və səhvi özün tap. Modelə yalnız ilişdiyin sətri göstər.", "Süni intellektə sorğu göndərmək adətən bir ünvana mətn yollamaqdır. Bu, API-dir.", "Hazır kodu başa düşmürsənsə, layihəyə yapışdırma.", "Python sətirin sonuna nöqtəli vergül qoymur. Boşluq blokun özüdür.", "Bir dili kiçik proqramı düzəldəcək qədər apar. Sonra ikinci dilə keç."],
        en: ["First write a variable, a condition, and a loop yourself. You should be able to write that without a model.", "Then break a small program and find the mistake yourself. Show the model only the line where you got stuck.", "Sending a request to an AI is usually sending text to an address. That is an API.", "If you do not understand generated code, do not paste it into the project.", "Python does not put a semicolon at the end of a line. The space is the block itself.", "Take one language far enough to fix a small program. Then move to a second language."],
        tr: ["Önce değişkeni, koşulu ve döngüyü kendin yaz. Bunu modelsiz yazabilmelisin.", "Sonra küçük bir programı boz ve hatayı kendin bul. Modele yalnız takıldığın satırı göster.", "Yapay zekaya istek göndermek genellikle bir adrese metin yollamaktır. Bu, API'dir.", "Üretilen kodu anlamıyorsan projeye yapıştırma.", "Python satır sonuna noktalı virgül koymaz. Boşluk bloğun kendisidir.", "Bir dili küçük programı düzeltecek kadar götür. Sonra ikinci dile geç."],
        ar: ["اكتب أولًا المتغير والشرط والحلقة بنفسك. ينبغي أن تستطيع كتابة ذلك بلا نموذج.", "ثم اكسر برنامجًا صغيرًا وجِد الخطأ بنفسك. أظهر للنموذج السطر الذي علقت فيه فقط.", "إرسال طلب إلى الذكاء الاصطناعي عادة إرسال نص إلى عنوان. هذه API.", "إذا لم تفهم الرمز المولَّد فلا تلصقه في المشروع.", "Python لا تضع فاصلة منقوطة في آخر السطر. الفراغ هو الكتلة نفسها.", "أوصل لغة واحدة بما يكفي لإصلاح برنامج صغير. ثم انتقل إلى لغة ثانية."],
        ru: ["Сначала напиши переменную, условие и цикл сам. Это ты должен уметь писать без модели.", "Потом сломай маленькую программу и найди ошибку сам. Модели показывай только строку, на которой застрял.", "Отправить запрос к ИИ — обычно отправить текст по адресу. Это API.", "Если готовый код не понимаешь, не вставляй его в проект.", "Python не ставит точку с запятой в конце строки. Пробел и есть блок.", "Доведи один язык до того, чтобы чинить маленькую программу. Потом переходи ко второму."],
      },
      L(
        "Modeli köməkçi tut. Oxumadığın müəllif yox.",
        "Keep the model as a helper, not as an author you never read.",
        "Modeli yardımcı tut. Okumadığın yazar değil.",
        "اجعل النموذج مساعدًا، لا مؤلفًا لا تقرأه.",
        "Держи модель помощником, а не автором, которого ты не читаешь.",
      ),
    ),
  },
];

export const SEARCH: Record<SearchKind, SearchSection> = {
  soz: {
    kind: "soz",
    heading: L("Proqramlaşdırma sözləri", "Programming words", "Programlama sözleri", "كلمات البرمجة", "Слова программирования"),
    intro: L(
      "Axtarışda ən çox soruşulan sözlərin qısa izahı. Hər sözün öz səhifəsi var.",
      "Short explanations of the words people search for most. Each word has its own page.",
      "Aramada en çok sorulan sözlerin kısa açıklaması. Her sözün kendi sayfası var.",
      "شرح قصير للكلمات التي تُبحث أكثر. لكل كلمة صفحتها.",
      "Короткое объяснение слов, которые ищут чаще всего. У каждого слова своя страница.",
    ),
    title: L(
      "Proqramlaşdırma sözləri — API, dəyişən, funksiya",
      "Programming words — API, variable, function",
      "Programlama sözleri — API, değişken, fonksiyon",
      "كلمات البرمجة — API والمتغير والدالة",
      "Слова программирования — API, переменная, функция",
    ),
    description: L(
      "API nədir, dəyişən nədir, funksiya nədir, döngü, HTML, CSS, JavaScript, Python, alqoritm və JSON. Qısa izah.",
      "What is an API, a variable, a function, a loop, HTML, CSS, JavaScript, Python, an algorithm, and JSON. Short explanations.",
      "API nedir, değişken nedir, fonksiyon nedir, döngü, HTML, CSS, JavaScript, Python, algoritma ve JSON. Kısa açıklama.",
      "ما هي API والمتغير والدالة والحلقة وHTML وCSS وJavaScript وPython والخوارزمية وJSON. شرح قصير.",
      "Что такое API, переменная, функция, цикл, HTML, CSS, JavaScript, Python, алгоритм и JSON. Коротко.",
    ),
    items: WORDS,
  },
  xeta: {
    kind: "xeta",
    heading: L("APK xətaları", "APK errors", "APK hataları", "أخطاء APK", "Ошибки APK"),
    intro: L(
      "Quruluş dayananda telefonun göstərdiyi xətalar və nə etmək lazım olduğu.",
      "The errors a phone shows when installation stops, and what to do.",
      "Kurulum durunca telefonun gösterdiği hatalar ve ne yapmak gerektiği.",
      "الأخطاء التي يظهرها الهاتف حين يتوقف التثبيت، وماذا يُفعل.",
      "Ошибки, которые телефон показывает, когда установка останавливается, и что делать.",
    ),
    title: L(
      "APK xətaları — qurulmur, parse error, keystore",
      "APK errors — will not install, parse error, keystore",
      "APK hataları — kurulmuyor, parse error, keystore",
      "أخطاء APK — لا يُثبَّت، parse error، keystore",
      "Ошибки APK — не устанавливается, parse error, keystore",
    ),
    description: L(
      "APK qurulmur, parse error, keystore itdi, imzalar uyğun gəlmir, paket adı xətası və zədələnmiş APK. Nə etmək lazımdır.",
      "APK will not install, parse error, lost keystore, signatures do not match, package name error, and a damaged APK. What to do.",
      "APK kurulmuyor, parse error, keystore kayboldu, imzalar uyuşmuyor, paket adı hatası ve bozuk APK. Ne yapmalı.",
      "APK لا يُثبَّت، وparse error، وضياع keystore، والتواقيع غير متطابقة، وخطأ اسم الحزمة، وAPK تالف. ماذا يُفعل.",
      "APK не устанавливается, parse error, потерян keystore, подписи не совпадают, ошибка имени пакета и повреждённый APK. Что делать.",
    ),
    items: ERRORS,
  },
  movzu: {
    kind: "movzu",
    heading: L("Süni intellekt", "Artificial intelligence", "Yapay zeka", "الذكاء الاصطناعي", "Искусственный интеллект"),
    intro: L(
      "ChatGPT, Gemini və Claude eyni işi görür: sən yazırsan, cavab gəlir. Prompt, tətbiq və Python da buradadır.",
      "ChatGPT, Gemini, and Claude do the same job: you write, and an answer comes back. A prompt, an app, and Python are here too.",
      "ChatGPT, Gemini ve Claude aynı işi görür: sen yazarsın, cevap gelir. Prompt, uygulama ve Python da burada.",
      "ChatGPT وGemini وClaude تؤدي العمل نفسه: تكتب فيأتي الجواب. الـ prompt والتطبيق وPython هنا أيضًا.",
      "ChatGPT, Gemini и Claude делают одну работу: ты пишешь, приходит ответ. Prompt, приложение и Python тоже здесь.",
    ),
    title: L(
      "Süni intellekt — ChatGPT, Gemini, Claude, prompt",
      "Artificial intelligence — ChatGPT, Gemini, Claude, prompt",
      "Yapay zeka — ChatGPT, Gemini, Claude, prompt",
      "الذكاء الاصطناعي — ChatGPT وGemini وClaude وprompt",
      "Искусственный интеллект — ChatGPT, Gemini, Claude, prompt",
    ),
    description: L(
      "ChatGPT nədir, Gemini nədir, Claude nədir, prompt nədir, süni intellektlə tətbiq hazırlamaq və 2026-da Python öyrənməyə dəyərmi.",
      "What is ChatGPT, Gemini, and Claude, what is a prompt, making an app with AI, and whether Python is still worth learning in 2026.",
      "ChatGPT nedir, Gemini nedir, Claude nedir, prompt nedir, yapay zeka ile uygulama yapmak ve 2026'da Python öğrenmeye değer mi.",
      "ما هو ChatGPT وGemini وClaude، وما هو prompt، وصنع تطبيق بالذكاء الاصطناعي، وهل يستحق Python التعلم في 2026.",
      "Что такое ChatGPT, Gemini и Claude, что такое prompt, как сделать приложение с ИИ и стоит ли учить Python в 2026.",
    ),
    items: TOPICS,
  },
};

const LANG_PREFIX: Record<Lang, string> = { az: "", en: "/en", tr: "/tr", ar: "/ar", ru: "/ru" };

export function searchPath(lang: Lang, kind: SearchKind) {
  return `${LANG_PREFIX[lang]}/${kind}`;
}

export function searchTopicPath(lang: Lang, kind: SearchKind, slug: string) {
  return `${searchPath(lang, kind)}/${slug}`;
}

export function searchFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  return { lang, kind, section: SEARCH[kind] };
}

export function searchTopicFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu)\/([^/]+)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  const section = SEARCH[kind];
  const item = section.items.find((entry) => entry.slug === match[3]);
  if (!item) return null;
  return { lang, kind, section, item, piece: item.piece[lang] };
}
