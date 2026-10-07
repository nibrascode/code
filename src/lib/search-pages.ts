import type { Lang } from "@/lib/i18n";

export type SearchKind = "soz" | "xeta";

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
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  return { lang, kind, section: SEARCH[kind] };
}

export function searchTopicFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta)\/([^/]+)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  const section = SEARCH[kind];
  const item = section.items.find((entry) => entry.slug === match[3]);
  if (!item) return null;
  return { lang, kind, section, item, piece: item.piece[lang] };
}
