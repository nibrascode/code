import type { Lang } from "@/lib/i18n";
import { APK_ERROR_INDEX } from "@/lib/apk-errors-index";

export type SearchKind = "soz" | "xeta" | "movzu" | "nece";

export type SearchPiece = {
  title: string;
  lead: string;
  points: readonly string[];
  note?: string;
};

type SearchItem = {
  slug: string;
  /** Body is loaded from a lazy chunk (see loadApkBody). */
  lazy?: boolean;
  /** Same source block on every language page. */
  code?: string;
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

const BASE_ERRORS: readonly SearchItem[] = [
  {
    slug: "emr-taninmir",
    piece: piece(
      L(
        "python daxili və ya xarici əmr deyil",
        "python is not recognized",
        "python iç veya dış komut değil",
        "python ليس أمرًا داخليًا أو خارجيًا",
        "python не является внутренней или внешней командой",
      ),
      L(
        "Windows bu cümləni `python`, `node`, `npm`, `java`, `dotnet` və ya `psql` tapmayanda yazır. İngilis ekranda belədir: `'python' is not recognized as an internal or external command, operable program or batch file.` Azərbaycan dilində Windows bunu belə göstərir: `daxili və ya xarici əmr, icra edilə bilən proqram və ya toplu fayl kimi tanınmır.`\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.",
        "Windows writes this when it cannot find `python`, `node`, `npm`, `java`, `dotnet`, or `psql`. The English line is: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nDo not change everything at once. Check the cause in order.",
        "Windows bu cümleyi `python`, `node`, `npm`, `java`, `dotnet` veya `psql` bulamayınca yazar. İngilizce ekranda şöyle durur: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.",
        "يكتب Windows هذه الجملة حين لا يجد `python` أو `node` أو `npm` أو `java` أو `dotnet` أو `psql`. في الشاشة الإنجليزية: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.",
        "Windows пишет это, когда не находит `python`, `node`, `npm`, `java`, `dotnet` или `psql`. Английская строка такая: `'python' is not recognized as an internal or external command, operable program or batch file.`\n\nНе меняй всё сразу. Проверяй причину по порядку.",
      ),
      {
        az: [
          "Əvvəl `py --version` yaz. Cavab gəlirsə Python durur, `python` sözü tapılmır. İşə `py` ilə davam et.",
          "`python` yazanda Microsoft Store açılırsa, Başlatda `Manage app execution aliases` axtar. `python.exe` və `python3.exe` söndür. Terminalı bağla, yenisini aç. Proqramı silmə.",
          "`where.exe python` yaz. Birinci sətir `WindowsApps` olmamalıdır.",
          "Qovluq adında ə, ö, ü, ı, ş, ğ, ç varsa, məsələn `C:\\Users\\Əli`, pip və npm yolu qəbul etməyə bilər. Layihəni `C:\\dev` kimi latın hərfli qovluğa qoy. Windows istifadəçi adını dəyişmə.",
          "Eyni cümlə `node`, `npm`, `java`, `dotnet` və `psql` üçündür. Əmr dəyişir, dayanma eynidir.",
        ],
        en: [
          "First type `py --version`. If an answer comes, Python is there and the word `python` is not found. Continue with `py`.",
          "If `python` opens the Microsoft Store, search Start for `Manage app execution aliases`. Turn off `python.exe` and `python3.exe`. Close the terminal and open a new one. Do not uninstall the program.",
          "Type `where.exe python`. The first line should not be `WindowsApps`.",
          "If a folder name has ə, ö, ü, ı, ş, ğ, or ç, such as `C:\\Users\\Əli`, pip and npm may refuse the path. Put the project in a Latin-letter folder such as `C:\\dev`. Do not rename the Windows user.",
          "The same sentence is for `node`, `npm`, `java`, `dotnet`, and `psql`. The command changes. The stop is the same.",
        ],
        tr: [
          "Önce `py --version` yaz. Cevap geliyorsa Python duruyor, `python` sözü bulunmuyor. İşe `py` ile devam et.",
          "`python` yazınca Microsoft Store açılıyorsa Başlat’ta `Manage app execution aliases` ara. `python.exe` ve `python3.exe` kapat. Terminali kapat, yenisini aç. Programı silme.",
          "`where.exe python` yaz. İlk satır `WindowsApps` olmamalı.",
          "Klasör adında ə, ö, ü, ı, ş, ğ, ç varsa, örneğin `C:\\Users\\Əli`, pip ve npm yolu kabul etmeyebilir. Projeyi `C:\\dev` gibi Latin harfli klasöre koy. Windows kullanıcı adını değiştirme.",
          "Aynı cümle `node`, `npm`, `java`, `dotnet` ve `psql` içindir. Komut değişir, durma aynıdır.",
        ],
        ar: [
          "اكتب أولًا `py --version`. إذا جاء جواب فـ Python موجود والكلمة `python` غير موجودة. أكمل بـ `py`.",
          "إذا فتح `python` متجر Microsoft فابحث في ابدأ عن `Manage app execution aliases`. أوقف `python.exe` و`python3.exe`. أغلق الطرفية وافتح واحدة جديدة. لا تحذف البرنامج.",
          "اكتب `where.exe python`. السطر الأول يجب ألا يكون `WindowsApps`.",
          "إذا كان في اسم المجلد ə أو ö أو ü أو ı أو ş أو ğ أو ç، مثل `C:\\Users\\Əli`، فقد يرفض pip وnpm المسار. ضع المشروع في مجلد بحروف لاتينية مثل `C:\\dev`. لا تغيّر اسم مستخدم Windows.",
          "الجملة نفسها لـ `node` و`npm` و`java` و`dotnet` و`psql`. الأمر يتغير والتوقف نفسه.",
        ],
        ru: [
          "Сначала напиши `py --version`. Если ответ есть, Python стоит, а слово `python` не находится. Продолжай через `py`.",
          "Если `python` открывает Microsoft Store, в Пуске найди `Manage app execution aliases`. Выключи `python.exe` и `python3.exe`. Закрой терминал и открой новый. Программу не удаляй.",
          "Напиши `where.exe python`. Первая строка не должна быть `WindowsApps`.",
          "Если в имени папки есть ə, ö, ü, ı, ş, ğ или ç, например `C:\\Users\\Əli`, pip и npm могут не принять путь. Положи проект в папку латиницей, например `C:\\dev`. Имя пользователя Windows не переименовывай.",
          "Та же фраза для `node`, `npm`, `java`, `dotnet` и `psql`. Команда другая, остановка та же.",
        ],
      },
      L(
        "PATH-ə bir neçə qovluğu bir anda yapışdırma. Əvvəl `py --version`.",
        "Do not paste several folders into PATH at once. First run `py --version`.",
        "PATH’e birkaç klasörü bir anda yapıştırma. Önce `py --version`.",
        "لا تلصق عدة مجلدات في PATH دفعة واحدة. أولًا `py --version`.",
        "Не вставляй в PATH несколько папок сразу. Сначала `py --version`.",
      ),
    ),
  },
  {
    slug: "e-herfi",
    code: `import sys
sys.stdout.reconfigure(encoding="utf-8")

print("Azərbaycan")

with open("metn.txt", "w", encoding="utf-8") as fayl:
    fayl.write("Azərbaycan\\n")
`,
    piece: piece(
      L(
        "Konsolda ə hərfi kvadrat olur",
        "The letter ə shows as a square",
        "Konsolda ə harfi kare olur",
        "حرف ə يظهر مربعًا في الطرفية",
        "Буква ə в консоли становится квадратом",
      ),
      L(
        "Python dayanırsa ekranda bu sətir olur: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` hərfi `ə`-dir. Böyük `Ə` də eyni yerdədir. Proqram işləyib ekranda kvadrat və ya `?` qalırsa, hərf gedib, şrift onu çəkmir. Bu, iki ayrı dayanmadır.\n\nTürk səhifələri `cp1254` yazır. Python-un bu cədvəlində ü, ö, ş, ğ, ç, ı var. ə yoxdur. Ona görə həmin təlimat bu hərfi düzəltmir.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.",
        "If Python stops, the screen says: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` is the letter `ə`. Capital `Ə` is in the same place. If the program runs and the screen shows a square or `?`, the letter went out and the font cannot draw it. Those are two different stops.\n\nTurkish pages say `cp1254`. Python's table has ü, ö, ş, ğ, ç, and ı. It does not have ə. That guide does not fix this letter.\n\nDo not change everything at once. Check the cause in order.",
        "Python duruyorsa ekranda bu satır olur: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` harfi `ə`-dir. Büyük `Ə` de aynı yerdedir. Program çalışıp ekranda kare ya da `?` kalıyorsa harf gitmiş, yazı tipi onu çizmiyordur. Bu, iki ayrı durmadır.\n\nTürkçe sayfalar `cp1254` yazar. Python'un bu tablosunda ü, ö, ş, ğ, ç, ı vardır. ə yoktur. O yüzden o anlatım bu harfi düzeltmez.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.",
        "إذا توقف Python فالشاشة تكتب: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` هو الحرف `ə`. الحرف الكبير `Ə` في الموضع نفسه. إذا عمل البرنامج وبقي على الشاشة مربع أو `?` فالحرف خرج والخط لا يرسمه. هذان توقفان مختلفان.\n\nصفحات التركية تكتب `cp1254`. جدول Python فيه ü وö وş وğ وç وı. ليس فيه ə. لذلك ذلك الشرح لا يصلح هذا الحرف.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.",
        "Если Python останавливается, на экране строка: `UnicodeEncodeError: 'charmap' codec can't encode character '\\u0259'`. `\\u0259` — это буква `ə`. Заглавная `Ə` там же. Если программа работает, а на экране квадрат или `?`, буква ушла, а шрифт её не рисует. Это две разные остановки.\n\nТурецкие страницы пишут `cp1254`. В таблице Python есть ü, ö, ş, ğ, ç и ı. Буквы ə там нет. Поэтому то руководство эту букву не чинит.\n\nНе меняй всё сразу. Проверяй причину по порядку.",
      ),
      {
        az: [
          "Faylı UTF-8 saxla. VS Code-un aşağı küncündə UTF-8 yazılmalıdır. Notepad-də «Unicode» UTF-16-dır, onu seçmə.",
          "Fayla yazırsansa sətir belə olsun: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. `encoding` yazmasan Windows türk cədvəlini götürür və ə düşür.",
          "Xəta proqramı dayandırırsa `errors=\"ignore\"` və `cp1254` yazma. Birincisi ə-ni silir. Ikincisində ə yoxdur. Proqramın əvvəlində `sys.stdout.reconfigure(encoding=\"utf-8\")` yaz, sonra `print(\"Azərbaycan\")`.",
          "Proqram işləyir, hərf kvadratdırsa kodu dəyişmə. Terminalın şriftini Cascadia Mono və ya Consolas et.",
          "`chcp 65001` yalnız açıq pəncərəni UTF-8 edir. Pəncərə bağlananda köhnə səhifə qayıdır.",
        ],
        en: [
          "Save the file as UTF-8. The bottom corner of VS Code should say UTF-8. In Notepad, Unicode means UTF-16. Do not pick that.",
          "If you write to a file, the line should be `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. Without `encoding`, Windows takes the Turkish table and ə is dropped.",
          "If the error stops the program, do not write `errors=\"ignore\"` or `cp1254`. The first deletes ə. The second has no ə. At the start of the program write `sys.stdout.reconfigure(encoding=\"utf-8\")`, then `print(\"Azərbaycan\")`.",
          "If the program runs and the letter is a square, do not change the code. Set the terminal font to Cascadia Mono or Consolas.",
          "`chcp 65001` makes only the open window UTF-8. When the window closes, the old page comes back.",
        ],
        tr: [
          "Dosyayı UTF-8 kaydet. VS Code'un alt köşesinde UTF-8 yazmalı. Notepad'de «Unicode» UTF-16'dır, onu seçme.",
          "Dosyaya yazıyorsan satır şöyle olsun: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. `encoding` yazmazsan Windows Türkçe tabloyu alır ve ə düşer.",
          "Hata programı durduruyorsa `errors=\"ignore\"` ve `cp1254` yazma. Birincisi ə'yi siler. Ikincisinde ə yoktur. Programın başında `sys.stdout.reconfigure(encoding=\"utf-8\")` yaz, sonra `print(\"Azərbaycan\")`.",
          "Program çalışıyor, harf kareyse kodu değiştirme. Terminalin yazı tipini Cascadia Mono ya da Consolas yap.",
          "`chcp 65001` yalnız açık pencereyi UTF-8 yapar. Pencere kapanınca eski sayfa geri gelir.",
        ],
        ar: [
          "احفظ الملف UTF-8. يجب أن تكتب زاوية VS Code السفلى UTF-8. في Notepad كلمة Unicode تعني UTF-16. لا تخترها.",
          "إذا كنت تكتب إلى ملف فالسطر يكون `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. بلا `encoding` يأخذ Windows الجدول التركي ويسقط ə.",
          "إذا أوقف الخطأ البرنامج فلا تكتب `errors=\"ignore\"` ولا `cp1254`. الأول يحذف ə. والثاني لا يحتوي ə. في أول البرنامج اكتب `sys.stdout.reconfigure(encoding=\"utf-8\")` ثم `print(\"Azərbaycan\")`.",
          "إذا عمل البرنامج والحرف مربع فلا تغيّر الكود. اجعل خط الطرفية Cascadia Mono أو Consolas.",
          "`chcp 65001` يجعل النافذة المفتوحة فقط UTF-8. حين تُغلق النافذة تعود الصفحة القديمة.",
        ],
        ru: [
          "Сохрани файл как UTF-8. В нижнем углу VS Code должно быть написано UTF-8. В Блокноте «Unicode» — это UTF-16, его не выбирай.",
          "Если пишешь в файл, строка такая: `open(\"metn.txt\", \"w\", encoding=\"utf-8\")`. Без `encoding` Windows берёт турецкую таблицу и ə пропадает.",
          "Если ошибка останавливает программу, не пиши `errors=\"ignore\"` и `cp1254`. Первое удаляет ə. Во втором ə нет. В начале программы напиши `sys.stdout.reconfigure(encoding=\"utf-8\")`, потом `print(\"Azərbaycan\")`.",
          "Если программа работает, а буква квадрат, код не меняй. Поставь в терминале шрифт Cascadia Mono или Consolas.",
          "`chcp 65001` делает UTF-8 только открытое окно. Когда окно закроется, старая страница вернётся.",
        ],
      },
      L(
        "æ hərfi ə deyil. Türk cədvəlindəki işarəni ə-nin yerinə qoyma.",
        "The letter æ is not ə. Do not put the mark from the Turkish table in its place.",
        "æ harfi ə değildir. Türkçe tablodaki işareti onun yerine koyma.",
        "حرف æ ليس ə. لا تضع علامة الجدول التركي مكانه.",
        "Буква æ — это не ə. Не ставь знак из турецкой таблицы на её место.",
      ),
    ),
  },
  {
    slug: "excel-e",
    code: `with open("metn.csv", "w", newline="", encoding="utf-8-sig") as fayl:
    fayl.write("ad\\nAzərbaycan\\n")
`,
    piece: piece(
      L(
        "Excel-də ə hərfi pozulur",
        "Excel breaks the letter ə",
        "Excel'de ə harfi bozulur",
        "Excel يُفسد حرف ə",
        "Excel портит букву ə",
      ),
      L(
        "Excel BOM-suz UTF-8 faylı sistem cədvəli ilə aça bilər. Azərbaycan Windows-unda bu, türk cədvəlidir: `cp1254`. Orada ü, ö, ş, ğ, ç, ı var. ə yoxdur. Ona görə hərf `?` və ya başqa işarə olur.\n\n`utf-8` başqa proqram üçün düzgündür. Excel üçün yetmir. `utf-8-sig` əvvələ üç bayt qoyur və Excel faylı UTF-8 oxuyur.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.",
        "Excel can open a UTF-8 file that has no BOM with the system table. On Azerbaijani Windows that table is the Turkish one, `cp1254`. It has ü, ö, ş, ğ, ç, and ı. It does not have ə. The letter becomes `?` or another mark.\n\n`utf-8` is right for other programs. It is not enough for Excel. `utf-8-sig` puts three bytes at the start, and Excel reads the file as UTF-8.\n\nDo not change everything at once. Check the cause in order.",
        "Excel, BOM'suz UTF-8 dosyayı sistem tablosuyla açabilir. Azerbaycan Windows'unda bu tablo Türkçe tablodur: `cp1254`. Orada ü, ö, ş, ğ, ç, ı vardır. ə yoktur. Harf `?` ya da başka bir işaret olur.\n\n`utf-8` başka program için doğrudur. Excel için yetmez. `utf-8-sig` başa üç bayt koyar ve Excel dosyayı UTF-8 okur.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.",
        "قد يفتح Excel ملف UTF-8 بلا BOM بجدول النظام. في Windows الأذربيجاني هذا الجدول تركي: `cp1254`. فيه ü وö وş وğ وç وı. ليس فيه ə. فيصير الحرف `?` أو علامة أخرى.\n\n`utf-8` صحيح لبرنامج آخر. لا يكفي Excel. `utf-8-sig` يضع ثلاث بايتات في الأول ويقرأ Excel الملف UTF-8.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.",
        "Excel может открыть UTF-8 без BOM системной таблицей. На азербайджанском Windows это турецкая таблица, `cp1254`. В ней есть ü, ö, ş, ğ, ç и ı. Буквы ə нет. Буква становится `?` или другим знаком.\n\n`utf-8` верен для другой программы. Для Excel его мало. `utf-8-sig` ставит три байта в начало, и Excel читает файл как UTF-8.\n\nНе меняй всё сразу. Проверяй причину по порядку.",
      ),
      {
        az: [
          "Faylı belə yaz: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
          "`encoding=\"utf-8\"` Notepad və brauzer üçün kifayətdir. Excel onu başqa cədvəllə aça bilər.",
          "`cp1254` yazma. Bu cədvəldə ə yoxdur.",
          "Köhnə faylda ə artıq `?` olubsa, kod hərfi qaytarmır. Mətni yenidən yaz.",
          "`newline=\"\"` boş sətir üçündür. Ə hərfinə təsir etmir.",
        ],
        en: [
          "Write the file like this: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
          "`encoding=\"utf-8\"` is enough for Notepad and a browser. Excel may open it with another table.",
          "Do not write `cp1254`. That table has no ə.",
          "If ə is already `?` in the old file, code cannot bring the letter back. Write the text again.",
          "`newline=\"\"` is for the blank row. It does not change the letter ə.",
        ],
        tr: [
          "Dosyayı şöyle yaz: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
          "`encoding=\"utf-8\"` Notepad ve tarayıcı için yeter. Excel onu başka tabloyla açabilir.",
          "`cp1254` yazma. Bu tabloda ə yoktur.",
          "Eski dosyada ə çoktan `?` olduysa kod harfi geri getirmez. Metni yeniden yaz.",
          "`newline=\"\"` boş satır içindir. ə harfine etkisi yoktur.",
        ],
        ar: [
          "اكتب الملف هكذا: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
          "`encoding=\"utf-8\"` يكفي لـ Notepad والمتصفح. قد يفتحه Excel بجدول آخر.",
          "لا تكتب `cp1254`. هذا الجدول لا يحتوي ə.",
          "إذا صار ə في الملف القديم `?` فالكود لا يُرجع الحرف. اكتب النص من جديد.",
          "`newline=\"\"` للسطر الفارغ. لا يغيّر حرف ə.",
        ],
        ru: [
          "Пиши файл так: `open(\"metn.csv\", \"w\", newline=\"\", encoding=\"utf-8-sig\")`.",
          "`encoding=\"utf-8\"` хватает для Блокнота и браузера. Excel может открыть его другой таблицей.",
          "Не пиши `cp1254`. В этой таблице нет ə.",
          "Если в старом файле ə уже стало `?`, код букву не вернёт. Напиши текст заново.",
          "`newline=\"\"` нужен из-за пустой строки. На букву ə он не влияет.",
        ],
      },
      L(
        "Bu, konsoldakı kvadrat deyil. Konsolda hərf kvadratdırsa, kodu dəyişmə. Şrifti dəyiş.",
        "This is not the square in the console. If the letter is a square there, do not change the code. Change the font.",
        "Bu, konsoldaki kare değildir. Konsolda harf kareyse kodu değiştirme. Yazı tipini değiştir.",
        "هذا ليس المربع في الطرفية. إذا كان الحرف مربعًا هناك فلا تغيّر الكود. غيّر الخط.",
        "Это не квадрат в консоли. Если там буква квадрат, код не меняй. Меняй шрифт.",
      ),
    ),
  },
  {
    slug: "html-e",
    code: `<!DOCTYPE html>
<html lang="az">
<head>
  <meta charset="UTF-8">
  <title>Səhifə</title>
</head>
<body>
  <p>Azərbaycan</p>
</body>
</html>
`,
    piece: piece(
      L(
        "Səhifədə ə hərfi sual işarəsi olur",
        "The letter ə becomes a question mark on the page",
        "Sayfada ə harfi soru işareti olur",
        "حرف ə يصير علامة استفهام في الصفحة",
        "Буква ə на странице становится вопросом",
      ),
      L(
        "Brauzer faylın kodunu bilmirsə, `ə` hərfi `?` və ya qəribə işarə olur. `lang=\"az\"` hərfi düzəltmir. Düzəldən sətir `<meta charset=\"UTF-8\">`-dir. Faylın özü də UTF-8 saxlanmalıdır.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla.",
        "If the browser does not know the file's encoding, the letter `ə` becomes `?` or a strange mark. `lang=\"az\"` does not fix the letter. The line that does is `<meta charset=\"UTF-8\">`. The file itself must be saved as UTF-8.\n\nDo not change everything at once. Check the cause in order.",
        "Tarayıcı dosyanın kodunu bilmiyorsa `ə` harfi `?` ya da garip bir işaret olur. `lang=\"az\"` harfi düzeltmez. Düzelten satır `<meta charset=\"UTF-8\">` satırıdır. Dosyanın kendisi de UTF-8 kaydedilmelidir.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.",
        "إذا لم يعرف المتصفح ترميز الملف فحرف `ə` يصير `?` أو علامة غريبة. `lang=\"az\"` لا يصلح الحرف. السطر الذي يصلحه هو `<meta charset=\"UTF-8\">`. الملف نفسه يجب أن يُحفظ UTF-8.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.",
        "Если браузер не знает кодировку файла, буква `ə` становится `?` или странным знаком. `lang=\"az\"` букву не чинит. Чинющая строка — `<meta charset=\"UTF-8\">`. Сам файл тоже надо сохранить как UTF-8.\n\nНе меняй всё сразу. Проверяй причину по порядку.",
      ),
      {
        az: [
          "`<head>` içində ilk sətirlərdən biri bu olsun: `<meta charset=\"UTF-8\">`.",
          "VS Code-un aşağı küncündə UTF-8 yazılmalıdır. Notepad-də «Unicode» UTF-16-dır, onu seçmə.",
          "`lang=\"az\"` səhifənin dilini adlandırır. Hərfi saxlamır.",
          "Fayl ANSI və ya `cp1254` ilə saxlanıbsa, ə artıq içində yoxdur. UTF-8-ə keç və hərfi yenidən yaz.",
          "Server `Content-Type` içində başqa kod göndərirsə, o, meta sətirindən öndə durur. Statik səhifədə meta kifayətdir.",
        ],
        en: [
          "One of the first lines inside `<head>` should be `<meta charset=\"UTF-8\">`.",
          "The bottom corner of VS Code should say UTF-8. In Notepad, Unicode means UTF-16. Do not pick that.",
          "`lang=\"az\"` names the language of the page. It does not store the letter.",
          "If the file was saved as ANSI or `cp1254`, ə is already gone. Switch to UTF-8 and type the letter again.",
          "If the server sends another encoding in `Content-Type`, that comes before the meta line. On a static page, meta is enough.",
        ],
        tr: [
          "`<head>` içinde ilk satırlardan biri bu olsun: `<meta charset=\"UTF-8\">`.",
          "VS Code'un alt köşesinde UTF-8 yazmalı. Notepad'de «Unicode» UTF-16'dır, onu seçme.",
          "`lang=\"az\"` sayfanın dilini adlandırır. Harfi saklamaz.",
          "Dosya ANSI ya da `cp1254` ile kaydedildiyse ə çoktan içinde yoktur. UTF-8'e geç ve harfi yeniden yaz.",
          "Sunucu `Content-Type` içinde başka kod gönderiyorsa o, meta satırından önce gelir. Statik sayfada meta yeter.",
        ],
        ar: [
          "أحد أول الأسطر داخل `<head>` يكون `<meta charset=\"UTF-8\">`.",
          "يجب أن تكتب زاوية VS Code السفلى UTF-8. في Notepad كلمة Unicode تعني UTF-16. لا تخترها.",
          "`lang=\"az\"` يسمّي لغة الصفحة. لا يحفظ الحرف.",
          "إذا حُفظ الملف ANSI أو `cp1254` فـ ə لم يعد داخله. انتقل إلى UTF-8 واكتب الحرف من جديد.",
          "إذا أرسل الخادم ترميزًا آخر في `Content-Type` فهو يسبق سطر meta. في صفحة ثابتة يكفي meta.",
        ],
        ru: [
          "Одной из первых строк внутри `<head>` должна быть `<meta charset=\"UTF-8\">`.",
          "В нижнем углу VS Code должно быть написано UTF-8. В Блокноте «Unicode» — это UTF-16, его не выбирай.",
          "`lang=\"az\"` называет язык страницы. Букву он не хранит.",
          "Если файл сохранён как ANSI или `cp1254`, ə внутри уже нет. Перейди на UTF-8 и напиши букву заново.",
          "Если сервер шлёт другую кодировку в `Content-Type`, она стоит раньше строки meta. На статической странице хватает meta.",
        ],
      },
      L(
        "Excel CSV başqa fayldır. Orada `utf-8` yetmir, `utf-8-sig` lazımdır. HTML-də `sig` yazılmır.",
        "An Excel CSV is a different file. There `utf-8` is not enough, and `utf-8-sig` is needed. HTML does not use `sig`.",
        "Excel CSV başka bir dosyadır. Orada `utf-8` yetmez, `utf-8-sig` gerekir. HTML'de `sig` yazılmaz.",
        "ملف CSV في Excel ملف آخر. هناك `utf-8` لا يكفي ويلزم `utf-8-sig`. في HTML لا يُكتب `sig`.",
        "CSV для Excel — другой файл. Там `utf-8` мало, нужен `utf-8-sig`. В HTML `sig` не пишется.",
      ),
    ),
  },
  {
    slug: "apk-qurulmur",
    piece: piece(
      L("APK qurulmur", "APK will not install", "APK kurulmuyor", "APK لا يُثبَّت", "APK не устанавливается"),
      L(
        "Telefon `App not installed` və ya `There was a problem parsing the package` yazırsa, APK qurulmur. Bu iki cümlə eyni dayanmanın iki adıdır: fayl ya açılmır, ya da telefon onu qəbul etmir.\n\nHamısını bir anda dəyişmə. Səbəbi sıra ilə yoxla. Birincisi düzələndə növbətiyə keçmə.",
        "If the phone says `App not installed` or `There was a problem parsing the package`, the APK will not install. Those two sentences are two names for the same stop: the file does not open, or the phone will not take it.\n\nDo not change everything at once. Check the cause in order.",
        "Telefon `App not installed` ya da `There was a problem parsing the package` yazıyorsa APK kurulmuyor. Bu iki cümle aynı durmanın iki adıdır: dosya ya açılmaz, ya da telefon onu kabul etmez.\n\nHepsini bir anda değiştirme. Nedeni sırayla yokla.",
        "إذا كتب الهاتف `App not installed` أو `There was a problem parsing the package` فـ APK لا يُثبَّت. الجملتان اسمان للتوقف نفسه: الملف لا يُفتح أو الهاتف لا يقبله.\n\nلا تغيّر كل شيء دفعة واحدة. افحص السبب بالترتيب.",
        "Если телефон пишет `App not installed` или `There was a problem parsing the package`, APK не устанавливается. Это два имени одной остановки: файл не открывается или телефон его не принимает.\n\nНе меняй всё сразу. Проверяй причину по порядку.",
      ),
      {
        az: ["Fayl yarım enibsə, quruluş başlamır. Köhnə nüsxəni sil, linki yenidən aç, endirmə bitəndən sonra qur.", "Ad `.apk.apk` və ya `.zip` qalıbsa, telefon paketi oxumur. Sonluq tək `.apk` olmalıdır.", "Naməlum mənbə bağlı ola bilər. Samsung: Parametrlər → Təhlükəsizlik və məxfilik → Naməlum tətbiqləri qur → faylı açan proqrama icazə. Xiaomi: Parametrlər → Tətbiqlər → Naməlum mənbələr → həmin proqram.", "Eyni tətbiq artıq durursa və imza fərqlidirsə, yenisi üstünə keçmir. Əvvəl köhnəni sil. İçindəki məlumat gedir.", "Play-dən gələn tətbiqin üstünə başqa açarla imzalanmış APK qurulmur. Bu, faylın yolda kəsilməsi deyil."],
        en: ["If the file stopped halfway, installation does not start. Delete that copy, open the link again, and install only after the download finishes.", "If the name is `.apk.apk` or still `.zip`, the phone cannot read the package. The ending should be a single `.apk`.", "Unknown sources may be off. Samsung: Settings, Security and privacy, Install unknown apps, then allow the app that opens the file. Xiaomi: Settings, Apps, Unknown sources, then that same app.", "If the same app is already installed with a different signature, the new one will not go on top. Remove the old one first. The data inside goes away.", "An APK signed with another key will not install over an app from Play. That is not a file cut off on the way."],
        tr: ["Dosya yarım indiyse kurulum başlamaz. Eski kopyayı sil, bağlantıyı yeniden aç, indirme bitince kur.", "Ad `.apk.apk` ya da `.zip` kaldıysa telefon paketi okumaz. Son tek `.apk` olmalıdır.", "Bilinmeyen kaynak kapalı olabilir. Samsung: Ayarlar → Güvenlik ve gizlilik → Bilinmeyen uygulamaları yükle → dosyayı açan programa izin. Xiaomi: Ayarlar → Uygulamalar → Bilinmeyen kaynaklar → o program.", "Aynı uygulama duruyorsa ve imza farklıysa yenisi üstüne geçmez. Önce eskiyi sil. İçindeki veri gider.", "Play'den gelen uygulamanın üstüne başka anahtarla imzalanmış APK kurulmaz. Bu, dosyanın yolda kesilmesi değildir."],
        ar: ["إذا انقطع الملف فلا يبدأ التثبيت. احذف النسخة القديمة وافتح الرابط من جديد وثبّت بعد اكتمال التنزيل.", "إذا بقي الاسم `.apk.apk` أو `.zip` فالهاتف لا يقرأ الحزمة. اللاحقة يجب أن تكون `.apk` واحدة.", "قد يكون المصدر المجهول مغلقًا. Samsung: الإعدادات، الأمان والخصوصية، تثبيت تطبيقات مجهولة، ثم اسمح للبرنامج الذي يفتح الملف. Xiaomi: الإعدادات، التطبيقات، مصادر مجهولة، ثم ذلك البرنامج.", "إذا كان التطبيق نفسه مثبتًا بتوقيع مختلف فالجديد لا يركب فوقه. احذف القديم أولًا. بيانات الداخل تذهب.", "لا يُثبَّت APK موقَّع بمفتاح آخر فوق تطبيق من Play. هذا ليس قطع الملف في الطريق."],
        ru: ["Если файл скачался не до конца, установка не начинается. Удали ту копию, открой ссылку снова и ставь только после конца загрузки.", "Если имя `.apk.apk` или всё ещё `.zip`, телефон не читает пакет. Окончание должно быть одним `.apk`.", "Неизвестный источник может быть закрыт. Samsung: Настройки, Безопасность и конфиденциальность, Установка неизвестных приложений, разреши программе, которая открывает файл. Xiaomi: Настройки, Приложения, Неизвестные источники, та же программа.", "Если то же приложение уже стоит с другой подписью, новое поверх не ляжет. Сначала удали старое. Данные внутри уйдут.", "APK с другим ключом не ставится поверх приложения из Play. Это не обрыв файла по дороге."],
      },
      L(
        "`parsing the package` ekranda qalırsa, fayl APK deyil və ya yolda kəsilib. Adını dəyişib saxlama. Yenidən endir.",
        "If `parsing the package` stays on the screen, the file is not an APK or it was cut off. Do not save it under a new name. Download it again.",
        "`parsing the package` ekranda kalıyorsa dosya APK değildir ya da yolda kesilmiştir. Adını değiştirip saklama. Yeniden indir.",
        "إذا بقيت `parsing the package` على الشاشة فالملف ليس APK أو انقطع. لا تحفظه باسم جديد. أعد التنزيل.",
        "Если на экране остаётся `parsing the package`, файл не APK или оборвался. Не сохраняй его под новым именем. Скачай снова.",
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
  {
    slug: "play-protect-bloklayir",
    piece: piece(
      L("Play Protect bloklayır", "Blocked by Play Protect", "Play Protect engelliyor", "Play Protect يحظر التطبيق", "Play Protect блокирует"),
      L(
        "Ekranda `Blocked by Play Protect` və ya `Harmful app blocked` durursa, Play Protect quruluşu saxlayır. Azərbaycan dilində bu, «Play Protect bloklayır» kimi görünür. Naməlum imza da bura düşə bilər. Bu, faylın həmişə virus olduğu demək deyil.\n\nTanımadığın saytdan gələn faylı qurma. Mesaj bəzən düz çıxır. Tanıdığın fayldırsa, əvvəl «hər halda qur» yolunu yoxla. Skanı bağlamaq son addımdır və iş bitəndə geri açılır.",
        "If the screen says `Blocked by Play Protect` or `Harmful app blocked`, Play Protect is holding the install. An unknown signature can land there too. That does not always mean the file is a virus.\n\nDo not install a file from a site you do not know. The warning is sometimes right. If you know the file, try Install anyway first. Turning the scan off is the last step, and you turn it back on when you are done.",
        "Ekranda `Blocked by Play Protect` ya da `Harmful app blocked` duruyorsa Play Protect kurulumu tutuyor. Bilinmeyen imza da buraya düşebilir. Bu, dosyanın her zaman virüs olduğu anlamına gelmez.\n\nTanımadığın siteden gelen dosyayı kurma. Uyarı bazen doğrudur. Dosyayı tanıyorsan önce «yine de kur» yolunu yokla. Taramayı kapatmak son adımdır ve iş bitince geri açılır.",
        "إذا ظهر `Blocked by Play Protect` أو `Harmful app blocked` فـ Play Protect يمسك التثبيت. التوقيع المجهول قد يقع هناك أيضًا. وهذا لا يعني دائمًا أن الملف فيروس.\n\nلا تثبّت ملفًا من موقع لا تعرفه. التحذير يكون صحيحًا أحيانًا. إذا كنت تعرف الملف فجرّب «ثبّت على أي حال» أولًا. إيقاف الفحص هو الخطوة الأخيرة، وتُعيد تشغيله حين تنتهي.",
        "Если на экране `Blocked by Play Protect` или `Harmful app blocked`, Play Protect держит установку. Неизвестная подпись тоже может туда попасть. Это не всегда значит, что файл — вирус.\n\nФайл с незнакомого сайта не ставь. Предупреждение иногда верное. Если файл знакомый, сначала попробуй «всё равно установить». Выключать проверку — последний шаг, и когда закончишь, включи её обратно.",
      ),
      {
        az: ["Quruluş pəncərəsində «Ətraflı» və ya `Install anyway` açılır. Oradan davam etmək olur. Düymə yoxdursa, bu, sərt blokdur.", "Play Store-u aç, yuxarıdakı hesab şəklindən Play Protect-ə keç, dişli işarədən quraşdırma skanını bağla. Faylı qur, sonra skanı geri aç.", "Samsung-da eyni yol Play Store-un içindədir. Təhlükəsizlik menyusu Play Protect-i əvəz etmir.", "Xiaomi-də Təhlükəsizlik proqramı öz skanını da saxlaya bilər. Play Protect-i bağlamaq o skanı açmır. Faylı orada da yoxla.", "Skanı həmişəlik söndürmək telefonu açıq qoyur. Bir fayl üçün bağla, iş bitəndə aç."],
        en: ["The install window may show More details, or `Install anyway`. You can continue from there. If the button is missing, the block is hard.", "Open Play Store, go to Play Protect from the account picture at the top, and turn off the install scan from the gear. Install the file, then turn the scan back on.", "On a Samsung the same path is inside Play Store. The security menu does not replace Play Protect.", "On a Xiaomi the Security app can keep its own scan. Turning Play Protect off does not open that scan. Check the file there too.", "Leaving the scan off for good leaves the phone open. Turn it off for one file, then turn it on again."],
        tr: ["Kurulum penceresinde «Ayrıntılar» ya da `Install anyway` açılır. Oradan devam edilebilir. Düğme yoksa bu sert bir bloktur.", "Play Store'u aç, üstteki hesap resminden Play Protect'e geç, dişli işaretten kurulum taramasını kapat. Dosyayı kur, sonra taramayı geri aç.", "Samsung'da aynı yol Play Store'un içindedir. Güvenlik menüsü Play Protect'in yerini tutmaz.", "Xiaomi'de Güvenlik programı kendi taramasını da tutabilir. Play Protect'i kapatmak o taramayı açmaz. Dosyayı orada da yokla.", "Taramayı sürekli kapalı bırakmak telefonu açıkta bırakır. Bir dosya için kapat, iş bitince aç."],
        ar: ["قد تظهر في نافذة التثبيت «مزيد من التفاصيل» أو `Install anyway`. يمكن المتابعة من هناك. إذا غاب الزر فالحظر صارم.", "افتح Play Store، ادخل Play Protect من صورة الحساب في الأعلى، وأوقف فحص التثبيت من الترس. ثبّت الملف ثم أعد الفحص.", "في Samsung الطريق نفسه داخل Play Store. قائمة الأمان لا تغني عن Play Protect.", "في Xiaomi قد يُبقي تطبيق الأمان فحصه. إيقاف Play Protect لا يفتح ذلك الفحص. افحص الملف هناك أيضًا.", "ترك الفحص مغلقًا دائمًا يُبقي الهاتف مكشوفًا. أغلقه لملف واحد ثم أعد تشغيله."],
        ru: ["В окне установки может быть «подробнее» или `Install anyway`. Оттуда можно продолжить. Если кнопки нет, блок жёсткий.", "Открой Play Store, зайди в Play Protect с картинки аккаунта сверху и выключи проверку установки через шестерёнку. Поставь файл и включи проверку обратно.", "На Samsung тот же путь внутри Play Store. Меню безопасности не заменяет Play Protect.", "На Xiaomi приложение «Безопасность» может держать свою проверку. Выключение Play Protect её не открывает. Проверь файл и там.", "Держать проверку выключенной постоянно оставляет телефон открытым. Выключи на один файл и включи снова."],
      },
      L(
        "Faylı kim göndərib, onu tanımırsansa, skanı bağlama.",
        "If you do not know who sent the file, do not turn the scan off.",
        "Dosyayı kimin gönderdiğini tanımıyorsan taramayı kapatma.",
        "إذا كنت لا تعرف من أرسل الملف فلا توقف الفحص.",
        "Если не знаешь, кто прислал файл, проверку не выключай.",
      ),
    ),
  },
  {
    slug: "paket-etibarsizdir",
    piece: piece(
      L("Paket etibarsızdır", "Package appears to be invalid", "Paket geçersiz", "الحزمة غير صالحة", "Пакет недействителен"),
      L(
        "Ekranda `App not installed as package appears to be invalid` durursa, telefon faylı APK kimi qəbul etmir. Azərbaycan dilində bu, «paket etibarsızdır» kimi çıxır. Quruluş başlamır, çünki paket açılmır.\n\nEyni cümlə bir neçə səbəbdən çıxır. Sıra belədir: yarım fayl, səhv sonluq, köhnə imza, Android 14 və 15-in köhnə paketi rədd etməsi.",
        "If the screen says `App not installed as package appears to be invalid`, the phone will not take the file as an APK. Installation does not start, because the package does not open.\n\nThe same sentence comes from more than one cause. The order is: a half file, a wrong ending, an old signature, and Android 14 or 15 rejecting an old package.",
        "Ekranda `App not installed as package appears to be invalid` duruyorsa telefon dosyayı APK olarak kabul etmez. Kurulum başlamaz, çünkü paket açılmaz.\n\nAynı cümle birden çok nedenden çıkar. Sıra şöyledir: yarım dosya, yanlış son, eski imza ve Android 14 ile 15'in eski paketi reddetmesi.",
        "إذا ظهر `App not installed as package appears to be invalid` فالهاتف لا يقبل الملف كـ APK. لا يبدأ التثبيت لأن الحزمة لا تُفتح.\n\nالجملة نفسها تخرج من أكثر من سبب. الترتيب: ملف ناقص، لاحقة خاطئة، توقيع قديم، ورفض Android 14 و15 لحزمة قديمة.",
        "Если на экране `App not installed as package appears to be invalid`, телефон не принимает файл как APK. Установка не начинается, потому что пакет не открывается.\n\nТа же фраза выходит из нескольких причин. Порядок такой: неполный файл, неверное окончание, старая подпись и отказ Android 14 и 15 от старого пакета.",
      ),
      {
        az: ["Fayl yarım enib və ya WhatsApp-dan göndəriləndə sıxılıb. Köhnə nüsxəni sil, yenidən endir, bitməmiş faylı qurma.", "Ad `.apk.apk`, `.zip` və ya `.xapk` qalıbsa, bu səhifənin sözü çıxır. Tək APK-nın sonluğu `.apk` olmalıdır. XAPK-nı adını dəyişməklə APK etmək olmaz.", "Telefonda eyni tətbiqin başqa imzası durursa, paket etibarsız sayılır. Samsung və Xiaomi-də köhnəni silmədən yenisi keçmir. Siləndə məlumat gedir.", "Android 14 və 15 bəzi köhnə paketləri etibarsız sayır. Paketi indiki alətlə yenidən yığmaq lazımdır. Telefonu köhnəltmək bunu düzəltmir.", "Xiaomi-də fayl «Yükləmələr»də başqa adla durursa, quraşdırıcı onu açmır. Fayl menecerindən orijinal ada toxun."],
        en: ["The file stopped halfway, or it was compressed when sent from WhatsApp. Delete the old copy and download it again. Do not install a file that has not finished.", "If the name is still `.apk.apk`, `.zip`, or `.xapk`, this sentence appears. A single APK must end in `.apk`. Renaming an XAPK does not make it an APK.", "If another signature of the same app is already on the phone, the package is treated as invalid. On Samsung and Xiaomi the new one does not replace the old until you remove it. The data goes away.", "Android 14 and 15 treat some old packages as invalid. The package has to be built again with a current tool. Making the phone older does not fix it.", "On a Xiaomi, if the file sits in Downloads under another name, the installer will not open it. Tap the original name from the file manager."],
        tr: ["Dosya yarım inmiş ya da WhatsApp'tan gönderilirken sıkışmıştır. Eski kopyayı sil, yeniden indir, bitmemiş dosyayı kurma.", "Ad `.apk.apk`, `.zip` ya da `.xapk` kaldıysa bu sayfanın sözü çıkar. Tek APK'nın sonu `.apk` olmalıdır. XAPK'nın adını değiştirmek onu APK yapmaz.", "Telefonda aynı uygulamanın başka imzası duruyorsa paket geçersiz sayılır. Samsung ve Xiaomi'de eskiyi silmeden yenisi geçmez. Silince veri gider.", "Android 14 ve 15 bazı eski paketleri geçersiz sayar. Paketi güncel araçla yeniden derlemek gerekir. Telefonu eskitmek bunu düzeltmez.", "Xiaomi'de dosya İndirilenler'de başka adla duruyorsa kurucu onu açmaz. Dosya yöneticisinden orijinal ada dokun."],
        ar: ["الملف انقطع أو ضُغط حين أُرسل من WhatsApp. احذف النسخة القديمة وأعد التنزيل ولا تثبّت ملفًا لم يكتمل.", "إذا بقي الاسم `.apk.apk` أو `.zip` أو `.xapk` ظهرت جملة هذه الصفحة. APK الواحد يجب أن ينتهي بـ `.apk`. تغيير اسم XAPK لا يجعله APK.", "إذا كان توقيع آخر للتطبيق نفسه على الهاتف تُعد الحزمة غير صالحة. في Samsung وXiaomi لا يمر الجديد قبل حذف القديم. البيانات تذهب.", "يعدّ Android 14 و15 بعض الحزم القديمة غير صالحة. يجب إعادة بناء الحزمة بأداة حالية. جعل الهاتف أقدم لا يصلح ذلك.", "في Xiaomi إذا وقف الملف في التنزيلات باسم آخر فالمثبّت لا يفتحه. المس الاسم الأصلي من مدير الملفات."],
        ru: ["Файл скачался не до конца или сжался, когда его слали из WhatsApp. Удали старую копию и скачай снова. Не ставь файл, который не докачался.", "Если имя всё ещё `.apk.apk`, `.zip` или `.xapk`, выходит фраза этой страницы. Один APK должен кончаться на `.apk`. Переименовать XAPK в APK нельзя.", "Если на телефоне уже стоит другая подпись того же приложения, пакет считается недействительным. На Samsung и Xiaomi новое не встанет, пока не удалишь старое. Данные уйдут.", "Android 14 и 15 считают некоторые старые пакеты недействительными. Пакет надо собрать заново текущим инструментом. Сделать телефон старее это не чинит.", "На Xiaomi, если файл лежит в «Загрузках» под другим именем, установщик его не откроет. Нажми исходное имя из диспетчера файлов."],
      },
      L(
        "Eyni söz faylın içindəki siyahı pozulanda da çıxır. İçini əl ilə dəyişmisənsə, faylı yenidən yığ.",
        "The same words also appear when the list inside the file is broken. If you edited the inside by hand, build the file again.",
        "Aynı söz, dosyanın içindeki liste bozulunca da çıkar. İçini elle değiştirdiysen dosyayı yeniden derle.",
        "الكلام نفسه يظهر أيضًا حين تفسد القائمة داخل الملف. إذا غيّرت الداخل بيدك فأعد بناء الملف.",
        "Те же слова выходят и когда список внутри файла сломан. Если правил внутри руками, собери файл заново.",
      ),
    ),
  },
  {
    slug: "yaddas-catmir",
    piece: piece(
      L("Yaddaş çatmır", "Not enough storage", "Depolama yetmiyor", "لا توجد مساحة كافية", "Не хватает памяти"),
      L(
        "Ekranda `Not enough storage space` və ya `Insufficient storage` durursa, APK kiçik olsa da qurulmur. Azərbaycan dilində telefon «yaddaş çatmır» və ya «kifayət qədər yer yoxdur» deyir. Quruluş üçün boş yer fayldan böyük olmalıdır.\n\nTəmizləyici proqramın göstərdiyi rəqəm quraşdırıcının gördüyü yer deyil. Samsung və Xiaomi-də yeri Parametrlərdən yoxla.",
        "If the screen says `Not enough storage space` or `Insufficient storage`, the APK will not install even when the file is small. The free space has to be larger than the file.\n\nThe number in a cleaner app is not the space the installer sees. On Samsung and Xiaomi, check the space from Settings.",
        "Ekranda `Not enough storage space` ya da `Insufficient storage` duruyorsa APK küçük olsa da kurulmaz. Kurulum için boş alan dosyadan büyük olmalıdır.\n\nTemizleyici programın gösterdiği sayı kurucunun gördüğü yer değildir. Samsung ve Xiaomi'de yeri Ayarlardan yokla.",
        "إذا ظهر `Not enough storage space` أو `Insufficient storage` فـ APK لا يُثبَّت ولو كان الملف صغيرًا. المساحة الفارغة يجب أن تكون أكبر من الملف.\n\nالرقم في تطبيق التنظيف ليس المساحة التي يراها المثبّت. في Samsung وXiaomi افحص المساحة من الإعدادات.",
        "Если на экране `Not enough storage space` или `Insufficient storage`, APK не ставится, даже если файл маленький. Свободного места должно быть больше, чем файл.\n\nЧисло в программе очистки — не то место, которое видит установщик. На Samsung и Xiaomi смотри место в Настройках.",
      ),
      {
        az: ["Samsung: Parametrlər → Cihaza qulluq → Yaddaş. Keşi təmizlə, lazımsız video və köhnə APK-nı sil.", "Xiaomi: Parametrlər → Yaddaş. Təmizləyicinin «boşaldıla bilər» rəqəmi quruluş üçün sayılmır. Daxili yaddaşda boş yer qalmalıdır.", "Fayl yaddaş kartındadırsa, onu daxili yaddaşa köçür, oradan qur. Kartın özündən quruluş tez-tez dayanır.", "100 meqabaytlıq tətbiq üçün bir neçə yüz meqabayt boş yer saxla. Quruluş faylı açır və müvəqqəti nüsxə saxlayır.", "«Yaddaş doludur» bəzən yanlış çıxır. Telefonu söndürüb yandır, Parametrlərdəki rəqəmə bir də bax."],
        en: ["Samsung: Settings, Device care, Storage. Clear the cache and remove spare video and old APK files.", "Xiaomi: Settings, Storage. The cleaner's «can be freed» number does not count for installation. Free space has to remain on internal storage.", "If the file is on a memory card, move it to internal storage and install it from there. Installing from the card often stops.", "Keep a few hundred megabytes free for a 100 megabyte app. Installation opens the file and keeps a temporary copy.", "\"Storage full\" is sometimes wrong. Turn the phone off and on, then look at the number in Settings again."],
        tr: ["Samsung: Ayarlar → Cihaz bakımı → Depolama. Önbelleği temizle, gereksiz video ve eski APK'yı sil.", "Xiaomi: Ayarlar → Depolama. Temizleyicinin «boşaltılabilir» sayısı kurulum için sayılmaz. Dahili depoda boş alan kalmalıdır.", "Dosya hafıza kartındaysa onu dahili depoya taşı, oradan kur. Kartın kendisinden kurulum sık durur.", "100 megabaytlık uygulama için birkaç yüz megabayt boş alan bırak. Kurulum dosyayı açar ve geçici kopya tutar.", "«Depolama dolu» bazen yanlış çıkar. Telefonu kapatıp aç, Ayarlardaki sayıya bir daha bak."],
        ar: ["Samsung: الإعدادات، العناية بالجهاز، التخزين. امسح الذاكرة المؤقتة واحذف الفيديو الزائد وملفات APK القديمة.", "Xiaomi: الإعدادات، التخزين. رقم «يمكن تفريغه» في المنظف لا يُحسب للتثبيت. يجب أن تبقى مساحة فارغة في التخزين الداخلي.", "إذا كان الملف على بطاقة الذاكرة فانقله إلى التخزين الداخلي وثبّته من هناك. التثبيت من البطاقة يتوقف كثيرًا.", "اترك بضع مئات من الميغابايت فارغة لتطبيق حجمه 100 ميغابايت. التثبيت يفتح الملف ويبقي نسخة مؤقتة.", "«التخزين ممتلئ» يخرج خطأ أحيانًا. أطفئ الهاتف ثم شغّله وانظر إلى الرقم في الإعدادات مرة أخرى."],
        ru: ["Samsung: Настройки, Обслуживание устройства, Память. Очисти кэш и удали лишнее видео и старые APK.", "Xiaomi: Настройки, Память. Число «можно освободить» в очистке для установки не считается. Свободное место должно остаться во внутренней памяти.", "Если файл на карте памяти, перенеси его во внутреннюю память и ставь оттуда. Установка с карты часто останавливается.", "Для приложения в 100 мегабайт оставь свободными несколько сотен. Установка открывает файл и держит временную копию.", "«Память заполнена» иногда врёт. Выключи телефон и включи, потом ещё раз посмотри число в Настройках."],
      },
    ),
  },
  {
    slug: "telefon-uygun-deyil",
    piece: piece(
      L("Telefon uyğun deyil", "App not compatible with your device", "Uygulama cihazla uyumlu değil", "التطبيق غير متوافق مع جهازك", "Приложение не совместимо с устройством"),
      L(
        "Ekranda `This app isn't compatible with your device` və ya `App not compatible with your device` durursa, paket bu telefon üçün yığılmayıb. Azərbaycan dilində bu, «telefon uyğun deyil» və ya «bu tətbiq cihazınızla uyğun deyil» kimi çıxır.\n\nXiaomi-də HyperOS, Samsung-da One UI bu qaydanı dəyişmir. Sayılan, altındakı Android rəqəmi və prosessorun 32 ya da 64 bit olmasıdır.",
        "If the screen says `This app isn't compatible with your device` or `App not compatible with your device`, the package was not built for this phone.\n\nHyperOS on a Xiaomi and One UI on a Samsung do not change the rule. What counts is the Android number under that name, and whether the processor is 32 or 64 bit.",
        "Ekranda `This app isn't compatible with your device` ya da `App not compatible with your device` duruyorsa paket bu telefon için derlenmemiştir.\n\nXiaomi'de HyperOS, Samsung'da One UI bu kuralı değiştirmez. Sayılan, altındaki Android sayısı ve işlemcinin 32 ya da 64 bit olmasıdır.",
        "إذا ظهر `This app isn't compatible with your device` أو `App not compatible with your device` فالحزمة لم تُبنَ لهذا الهاتف.\n\nHyperOS في Xiaomi وOne UI في Samsung لا يغيّران القاعدة. ما يُحسب هو رقم Android تحت ذلك الاسم، وهل المعالج 32 بت أم 64.",
        "Если на экране `This app isn't compatible with your device` или `App not compatible with your device`, пакет собран не для этого телефона.\n\nHyperOS на Xiaomi и One UI на Samsung правило не меняют. Считается число Android под этим именем и то, 32 или 64 бита у процессора.",
      ),
      {
        az: ["Android rəqəmi Parametrlər → Telefon haqqında bölməsindədir. Samsung-da «Proqram məlumatı», Xiaomi-də «Telefon haqqında» və ya «Cihazım».", "Paket Android 8 istəyirsə, Android 7 olan telefon onu qurmur. Qabığın adı köhnə rəqəmi yeni etmir.", "32 bitlik telefon 64 bitlik paketi açmır. Əksinə də olur. Faylın adı `arm64` və ya `armeabi` daşıyırsa, bu, prosesoru göstərir.", "Planşet üçün yığılmış paket bəzi telefonlarda uyğun sayılmır. Telefon üçün ayrıca paket lazımdır.", "Play-də «cihazınız uyğun deyil» durursa, kənar APK də eyni səbəbdən dayanır. Başqa fayl axtarmaq versiyanı dəyişmir."],
        en: ["The Android number is under Settings, About phone. On Samsung that is Software information. On Xiaomi it is About phone, or My device.", "If the package wants Android 8, a phone on Android 7 will not install it. The skin's name does not make an old number new.", "A 32-bit phone will not open a 64-bit package. The other way happens too. If the file name carries `arm64` or `armeabi`, that names the processor.", "A package built for a tablet is not treated as compatible on some phones. A phone needs its own package.", "If Play says your device is not compatible, a side-loaded APK stops for the same reason. Looking for another file does not change the version."],
        tr: ["Android sayısı Ayarlar → Telefon hakkında bölümündedir. Samsung'da «Yazılım bilgisi», Xiaomi'de «Telefon hakkında» ya da «Cihazım».", "Paket Android 8 istiyorsa Android 7 olan telefon onu kurmaz. Kabuğun adı eski sayıyı yeni yapmaz.", "32 bitlik telefon 64 bitlik paketi açmaz. Tersi de olur. Dosya adı `arm64` ya da `armeabi` taşıyorsa bu, işlemciyi gösterir.", "Tablet için derlenmiş paket bazı telefonlarda uyumlu sayılmaz. Telefon için ayrı paket gerekir.", "Play'de «cihazınız uyumlu değil» duruyorsa dış APK da aynı nedenle durur. Başka dosya aramak sürümü değiştirmez."],
        ar: ["رقم Android في الإعدادات، حول الهاتف. في Samsung «معلومات البرنامج»، وفي Xiaomi «حول الهاتف» أو «جهازي».", "إذا طلبت الحزمة Android 8 فهاتف على Android 7 لن يثبّتها. اسم الواجهة لا يجعل الرقم القديم جديدًا.", "هاتف 32 بت لا يفتح حزمة 64 بت. والعكس يقع أيضًا. إذا حمل اسم الملف `arm64` أو `armeabi` فهذا يسمي المعالج.", "الحزمة المبنية للوحة لا تُعد متوافقة على بعض الهواتف. الهاتف يحتاج حزمته.", "إذا قال Play إن جهازك غير متوافق فـ APK من الخارج يتوقف للسبب نفسه. البحث عن ملف آخر لا يغيّر الإصدار."],
        ru: ["Число Android лежит в Настройках, в разделе о телефоне. На Samsung это «О программе», на Xiaomi «О телефоне» или «Моё устройство».", "Если пакет хочет Android 8, телефон на Android 7 его не поставит. Имя оболочки не делает старое число новым.", "32-битный телефон не откроет 64-битный пакет. Бывает и наоборот. Если в имени файла есть `arm64` или `armeabi`, это называет процессор.", "Пакет, собранный для планшета, на некоторых телефонах не считается подходящим. Телефону нужен свой пакет.", "Если Play пишет, что устройство не подходит, чужой APK останавливается по той же причине. Искать другой файл версию не меняет."],
      },
    ),
  },
  {
    slug: "kohne-versiya-qurulmur",
    piece: piece(
      L("Köhnə versiya qurulmur", "An older version will not install", "Eski sürüm kurulmuyor", "النسخة الأقدم لا تُثبَّت", "Старая версия не устанавливается"),
      L(
        "Telefonda daha yeni versiya durursa, Android köhnə APK-nı onun üstünə qoymur. Buna versiyanın geri düşməsi deyirlər.",
        "If a newer version is already on the phone, Android will not put an older APK over it. People call that a version downgrade.",
        "Telefonda daha yeni sürüm duruyorsa Android eski APK'yı onun üstüne koymaz. Buna sürümün geri düşmesi denir.",
        "إذا كانت نسخة أحدث على الهاتف، لا يضع Android ملف APK أقدم فوقها. يُسمّى ذلك خفض الإصدار.",
        "Если на телефоне уже стоит более новая версия, Android не кладёт старый APK поверх неё. Это называют откатом версии.",
      ),
      {
        az: ["Yeni versiyanı saxlamaq istəyirsənsə, köhnə faylı qurma.", "Köhnəyə qayıtmaq lazımdırsa, əvvəl tətbiqi sil. İçindəki məlumat gedir.", "Sayılan rəqəm ekrandakı 1.2 adı deyil. Paketin içindəki versiya kodudur."],
        en: ["If you want to keep the newer version, do not install the old file.", "If you need to go back, remove the app first. The data inside goes away.", "The number that counts is not the 1.2 name on the screen. It is the version code inside the package."],
        tr: ["Yeni sürümü tutmak istiyorsan eski dosyayı kurma.", "Eskiye dönmek gerekiyorsa önce uygulamayı sil. İçindeki veri gider.", "Sayılan sayı ekrandaki 1.2 adı değildir. Paketin içindeki sürüm kodudur."],
        ar: ["إذا أردت إبقاء النسخة الأحدث فلا تثبّت الملف القديم.", "إذا لزم الرجوع فاحذف التطبيق أولًا. بيانات الداخل تذهب.", "الرقم الذي يُحسب ليس اسم 1.2 على الشاشة. هو رمز الإصدار داخل الحزمة."],
        ru: ["Если хочешь оставить новую версию, старый файл не ставь.", "Если нужно вернуться назад, сначала удали приложение. Данные внутри уйдут.", "Считается не имя 1.2 на экране, а код версии внутри пакета."],
      },
      L(
        "Play-dən gələn tətbiqi silib kənar APK qoyanda alış və hesab içəridə qalmaya bilər.",
        "If you remove an app that came from Play and put a side-loaded APK in its place, purchases and the account may not stay inside.",
        "Play'den gelen uygulamayı silip yerine dış APK koyunca satın alma ve hesap içeride kalmayabilir.",
        "إذا حذفت تطبيقًا جاء من Play ووضعت APK من الخارج فقد لا تبقى المشتريات والحساب في الداخل.",
        "Если удалить приложение из Play и поставить чужой APK, покупки и аккаунт внутри могут не остаться.",
      ),
    ),
  },
  {
    slug: "xapk-qurulmur",
    piece: piece(
      L("XAPK qurulmur", "XAPK will not install", "XAPK kurulmuyor", "XAPK لا يُثبَّت", "XAPK не устанавливается"),
      L(
        "XAPK, APKS və split APK bir neçə parçalı paketdir. Telefonun adi quraşdırıcısı onu tək APK kimi açmır, ona görə XAPK qurulmur.\n\nAdını `.apk` etmək işləmir. İçində əsas paket və əlavə parçalar var. Samsung-un Fayllarım proqramı və Xiaomi-nin fayl meneceri arxivi açıb bir parçanı qura bilər. Tətbiq açılır və dərhal bağlanır.",
        "XAPK, APKS, and a split APK are a package in several pieces. The phone's ordinary installer will not open that as one APK, so the XAPK will not install.\n\nRenaming it to `.apk` does not work. Inside are the main package and extra pieces. Samsung My Files and the Xiaomi file manager can open the archive and install one piece. The app opens and closes at once.",
        "XAPK, APKS ve split APK birkaç parçalı pakettir. Telefonun sıradan kurucusu onu tek APK gibi açmaz, onun için XAPK kurulmuyor.\n\nAdını `.apk` yapmak işe yaramaz. İçinde ana paket ve ek parçalar vardır. Samsung'un Dosyalarım programı ve Xiaomi'nin dosya yöneticisi arşivi açıp bir parçayı kurabilir. Uygulama açılır ve hemen kapanır.",
        "XAPK وAPKS وsplit APK حزمة من عدة قطع. مثبّت الهاتف العادي لا يفتحها كـ APK واحد، لذلك XAPK لا يُثبَّت.\n\nتغيير الاسم إلى `.apk` لا ينفع. في الداخل الحزمة الأساسية وقطع إضافية. ملفات Samsung ومدير ملفات Xiaomi قد يفتحان الأرشيف ويثبّتان قطعة واحدة. التطبيق يُفتح ويُغلق فورًا.",
        "XAPK, APKS и split APK — это пакет из нескольких частей. Обычный установщик телефона не откроет его как один APK, поэтому XAPK не устанавливается.\n\nПереименовать его в `.apk` не помогает. Внутри основной пакет и дополнительные части. «Мои файлы» на Samsung и диспетчер файлов Xiaomi могут открыть архив и поставить одну часть. Приложение откроется и сразу закроется.",
      ),
      {
        az: ["`.xapk` və ya `.apks` sonluğunu `.apk` etmək paketi düzəltmir. Telefon yenə də bir parça görür.", "Parçaları birləşdirən quraşdırıcı ilə bütün hissələri bir yerdə qur. Bir parçanı tək qursan, tətbiq açılıb bağlanır.", "Samsung Fayllarım və Xiaomi fayl meneceri arxivi özü quraşdırmır. Onlar faylı açır. Quruluş ayrıca proqramın işidir.", "OBB və ya data qovluğu oyunun içindədirsə, tək APK oyunu açmır. Həmin qovluq da öz yerinə keçməlidir.", "Play özü də parçalı paket göndərir. Kənardan gələn XAPK həmin parçaların bir faylda yığımıdır."],
        en: ["Changing `.xapk` or `.apks` to `.apk` does not fix the package. The phone still sees one piece.", "Install every part together with an installer that joins the pieces. If you install only one piece, the app opens and closes.", "Samsung My Files and the Xiaomi file manager do not install the archive themselves. They open the file. Installation is another app's job.", "If an OBB or data folder sits inside a game, the APK alone will not open the game. That folder has to go to its own place too.", "Play itself sends split packages. An XAPK from outside is those pieces gathered into one file."],
        tr: ["`.xapk` ya da `.apks` sonunu `.apk` yapmak paketi düzeltmez. Telefon yine bir parça görür.", "Parçaları birleştiren kurucu ile bütün parçaları birlikte kur. Bir parçayı tek kurarsan uygulama açılır ve kapanır.", "Samsung Dosyalarım ve Xiaomi dosya yöneticisi arşivi kendisi kurmaz. Onlar dosyayı açar. Kurulum ayrı programın işidir.", "OBB ya da data klasörü oyunun içindeyse tek APK oyunu açmaz. O klasör de kendi yerine geçmelidir.", "Play da parçalı paket gönderir. Dışarıdan gelen XAPK o parçaların bir dosyada toplanmış halıdır."],
        ar: ["تغيير لاحقة `.xapk` أو `.apks` إلى `.apk` لا يصلح الحزمة. الهاتف ما زال يرى قطعة واحدة.", "ثبّت كل الأجزاء معًا بمثبّت يجمعها. إذا ثبّتت قطعة واحدة فالتطبيق يُفتح ويُغلق.", "ملفات Samsung ومدير ملفات Xiaomi لا يثبّتان الأرشيف بنفسيهما. هما يفتحان الملف. التثبيت عمل برنامج آخر.", "إذا كان مجلد OBB أو data داخل اللعبة فـ APK وحده لا يفتح اللعبة. ذلك المجلد يجب أن يذهب إلى مكانه أيضًا.", "Play نفسه يرسل حزمًا مقسومة. XAPK الآتي من الخارج هو تلك القطع مجموعة في ملف واحد."],
        ru: ["Сменить окончание `.xapk` или `.apks` на `.apk` пакет не чинит. Телефон всё равно видит одну часть.", "Ставь все части вместе установщиком, который их склеивает. Если поставить одну часть, приложение откроется и закроется.", "«Мои файлы» на Samsung и диспетчер файлов Xiaomi сами архив не ставят. Они открывают файл. Установка — дело другой программы.", "Если внутри игры лежит папка OBB или data, один APK игру не откроет. Эта папка тоже должна лечь на своё место.", "Play сам шлёт пакеты по частям. XAPK со стороны — это те части, собранные в один файл."],
      },
    ),
  },
];

const LANGS: readonly Lang[] = ["az", "en", "tr", "ar", "ru"];
const APK_ITEMS: readonly SearchItem[] = APK_ERROR_INDEX.map(([slug, t]) => ({
  slug,
  lazy: true,
  piece: (Object.fromEntries(LANGS.map((l) => [l, { title: t[l][0], lead: t[l][1], points: [] }])) as unknown) as Record<Lang, SearchPiece>,
}));
const ERRORS: readonly SearchItem[] = [...BASE_ERRORS, ...APK_ITEMS];

/** Lazy chunk with the full text of the Android/Expo/Play error pages. */
export async function loadApkBody(slug: string) {
  const { APK_ERRORS } = await import("@/lib/apk-errors-data");
  return APK_ERRORS.find((e) => e.slug === slug) ?? null;
}

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

];

const HOWS: readonly SearchItem[] = [
  {
    slug: "ilk-html",
    piece: piece(
      L("İlk HTML səhifə", "The first HTML page", "İlk HTML sayfası", "أول صفحة HTML", "Первая страница HTML"),
      L(
        "İlk səhifə bir fayldır. Adı `index.html` olsun. Brauzer onu özü açır. Əvvəl çərçivə, kitabxana və sayt qurucusu lazım deyil.\n\nFaylın içində üç yer durur. `html` hamısını tutur. `head` səhifənin adını saxlayır. `body` adamın gördüyüdür. Görünən yazını `body` içinə qoy.\n\nFaylı saxla və üzərinə iki dəfə bas. Brauzer açılır. Yazı görünürsə, səhifə hazırdır. Rəng və düzülüş sonra gəlir. O, CSS-dir.",
        "The first page is one file. Name it `index.html`. The browser opens it by itself. You do not need a framework, a library, or a site builder first.\n\nThree places stand inside the file. `html` holds all of it. `head` keeps the name of the page. `body` is what the person sees. Put the visible text inside `body`.\n\nSave the file and press it twice. The browser opens. If the text shows, the page is ready. Color and layout come later. That is CSS.",
        "İlk sayfa bir dosyadır. Adı `index.html` olsun. Tarayıcı onu kendi açar. Önce çerçeve, kitaplık ve site kurucu gerekmez.\n\nDosyanın içinde üç yer durur. `html` hepsini tutar. `head` sayfanın adını saklar. `body` insanın gördüğüdür. Görünen yazıyı `body` içine koy.\n\nDosyayı kaydet ve üzerine iki kez bas. Tarayıcı açılır. Yazı görünüyorsa sayfa hazırdır. Renk ve diziliş sonra gelir. O, CSS'tir.",
        "الصفحة الأولى ملف واحد. سمّه `index.html`. المتصفح يفتحه بنفسه. لا تحتاج إطارًا ولا مكتبة ولا بانٍ مواقع أولًا.\n\nفي داخل الملف ثلاثة مواضع. `html` يمسك الكل. `head` يحفظ اسم الصفحة. `body` هو ما يراه الشخص. ضع النص الظاهر داخل `body`.\n\nاحفظ الملف واضغطه مرتين. يفتح المتصفح. إذا ظهر النص فالصفحة جاهزة. اللون والترتيب يأتيان بعد ذلك. ذلك CSS.",
        "Первая страница — это один файл. Назови его `index.html`. Браузер открывает его сам. Сначала не нужны каркас, библиотека и конструктор сайтов.\n\nВнутри файла три места. `html` держит всё. `head` хранит имя страницы. `body` — это то, что видит человек. Видимый текст клади внутрь `body`.\n\nСохрани файл и нажми на него дважды. Откроется браузер. Если текст виден, страница готова. Цвет и раскладка приходят потом. Это CSS.",
      ),
      {
        az: ["Faylı masaüstündə saxla ki, tapa biləsən.", "`<h1>Salam</h1>` başlıqdır. `<p>Bu ilk səhifədir.</p>` abzasdır.", "Faylın sonu `.html` olmalıdır. `.txt` brauzerdə kod kimi açılır.", "Şəkil eyni qovluqda durursa, `img` onun adını göstərir.", "Düymə qoymaq olar. İş görməsi üçün JavaScript lazımdır.", "Hazır şablonu kopyalama. Əvvəl bu üç sətri özün yaz."],
        en: ["Save the file on the desktop so you can find it.", "`<h1>Hello</h1>` is a heading. `<p>This is the first page.</p>` is a paragraph.", "The file must end in `.html`. A `.txt` file opens as code in the browser.", "If a picture sits in the same folder, `img` points at its name.", "You can put a button. It needs JavaScript before it does work.", "Do not copy a ready template. Write these three lines yourself first."],
        tr: ["Dosyayı masaüstüne kaydet ki bulabilesin.", "`<h1>Merhaba</h1>` başlıktır. `<p>Bu ilk sayfadır.</p>` paragraftır.", "Dosyanın sonu `.html` olmalıdır. `.txt` tarayıcıda kod gibi açılır.", "Resim aynı klasörde duruyorsa `img` onun adını gösterir.", "Düğme koymak olur. İş görmesi için JavaScript gerekir.", "Hazır şablonu kopyalama. Önce bu üç satırı kendin yaz."],
        ar: ["احفظ الملف على سطح المكتب كي تجده.", "`<h1>مرحبا</h1>` عنوان. `<p>هذه أول صفحة.</p>` فقرة.", "يجب أن ينتهي الملف بـ `.html`. ملف `.txt` يُفتح كرمز في المتصفح.", "إذا وقفت الصورة في المجلد نفسه فإن `img` يشير إلى اسمها.", "تستطيع وضع زر. يحتاج JavaScript قبل أن يعمل.", "لا تنسخ قالبًا جاهزًا. اكتب هذه الأسطر الثلاثة بنفسك أولًا."],
        ru: ["Сохрани файл на рабочем столе, чтобы найти его.", "`<h1>Салам</h1>` — это заголовок. `<p>Это первая страница.</p>` — абзац.", "Файл должен кончаться на `.html`. `.txt` открывается в браузере как код.", "Если картинка лежит в той же папке, `img` показывает её имя.", "Кнопку поставить можно. Чтобы она работала, нужен JavaScript.", "Не копируй готовый шаблон. Сначала напиши эти три строки сам."],
      },
      L(
        "Səhifə açılmırsa, faylın adının sonuna bax. `.html` deyilsə, brauzer onu səhifə saymır.",
        "If the page does not open, look at the end of the file name. If it is not `.html`, the browser does not treat it as a page.",
        "Sayfa açılmıyorsa dosya adının sonuna bak. `.html` değilse tarayıcı onu sayfa saymaz.",
        "إذا لم تُفتح الصفحة فانظر إلى آخر اسم الملف. إذا لم يكن `.html` فالمتصفح لا يعدّه صفحة.",
        "Если страница не открывается, посмотри на конец имени файла. Если это не `.html`, браузер не считает его страницей.",
      ),
    ),
  },
  {
    slug: "python-ilk-proqram",
    piece: piece(
      L("Python-da ilk proqram", "The first Python program", "Python'da ilk program", "أول برنامج Python", "Первая программа на Python"),
      L(
        "İlk proqram bir sətirdir. Faylın adı `salam.py` olsun. İçində `print(\"Salam\")` yaz. Bu, ekrana Salam çıxarır.\n\nPython kompüterdə quraşdırılmalıdır. python.org-dan götür. Qurandan sonra terminalı aç. Faylın durduğu qovluğa keç və `python salam.py` yaz.\n\n`python` tapılmırsa, quraşdırma yolu əlavə etməyib. Qurucunu yenidən aç və yolu əlavə etməyi seç. Başqa redaktor lazım deyil. Bir mətn faylı kifayətdir.",
        "The first program is one line. Name the file `salam.py`. Inside it write `print(\"Hello\")`. That prints Hello on the screen.\n\nPython has to be installed on the computer. Take it from python.org. After it is installed, open the terminal. Go to the folder where the file sits and write `python salam.py`.\n\nIf `python` is not found, the install did not add the path. Open the installer again and choose to add the path. You do not need another editor. One text file is enough.",
        "İlk program bir satırdır. Dosyanın adı `salam.py` olsun. İçine `print(\"Merhaba\")` yaz. Bu, ekrana Merhaba basar.\n\nPython bilgisayara kurulmalıdır. python.org'dan al. Kurulunca terminali aç. Dosyanın durduğu klasöre geç ve `python salam.py` yaz.\n\n`python` bulunmazsa kurulum yolu eklememiştir. Kurucuyu yeniden aç ve yolu eklemeyi seç. Başka düzenleyici gerekmez. Bir metin dosyası yeter.",
        "البرنامج الأول سطر واحد. سمّ الملف `salam.py`. اكتب داخله `print(\"مرحبا\")`. هذا يطبع مرحبا على الشاشة.\n\nيجب تثبيت Python على الحاسوب. خذه من python.org. بعد التثبيت افتح الطرفية. اذهب إلى المجلد الذي فيه الملف واكتب `python salam.py`.\n\nإذا لم يُوجد `python` فالتثبيت لم يُضف المسار. افتح المثبّت من جديد واختر إضافة المسار. لا تحتاج محررًا آخر. ملف نص واحد يكفي.",
        "Первая программа — одна строка. Назови файл `salam.py`. Внутри напиши `print(\"Салам\")`. Это выводит Салам на экран.\n\nPython надо установить на компьютер. Возьми его с python.org. После установки открой терминал. Перейди в папку, где лежит файл, и напиши `python salam.py`.\n\nЕсли `python` не находится, установка не добавила путь. Открой установщик снова и выбери добавить путь. Другой редактор не нужен. Хватает одного текстового файла.",
      ),
      {
        az: ["Windows-da əmr `py salam.py` da ola bilər.", "Faylın sonu `.py` olmalıdır. `.txt` işləməz.", "Dırnaq düz olmalıdır: `\"Salam\"`. Əyri dırnaq səhv sayılır.", "İkinci sətir `ad = \"Nibras\"` ola bilər. Sonra `print(ad)`.", "Səhv çıxsa, son sətri oxu. Orada sətrin nömrəsi yazılır.", "Böyük layihə açma. Bir fayl işləyənə qədər orada qal."],
        en: ["On Windows the command can also be `py salam.py`.", "The file must end in `.py`. A `.txt` file will not run.", "The quote must be straight: `\"Hello\"`. A curved quote counts as a mistake.", "The second line can be `name = \"Nibras\"`. Then `print(name)`.", "If an error comes out, read the last line. The line number is written there.", "Do not open a big project. Stay with one file until it runs."],
        tr: ["Windows'ta komut `py salam.py` da olabilir.", "Dosyanın sonu `.py` olmalıdır. `.txt` çalışmaz.", "Tırnak düz olmalıdır: `\"Merhaba\"`. Eğri tırnak hata sayılır.", "İkinci satır `ad = \"Nibras\"` olabilir. Sonra `print(ad)`.", "Hata çıkarsa son satırı oku. Orada satırın numarası yazar.", "Büyük proje açma. Bir dosya çalışana kadar orada kal."],
        ar: ["في Windows قد يكون الأمر `py salam.py` أيضًا.", "يجب أن ينتهي الملف بـ `.py`. ملف `.txt` لا يعمل.", "علامة التنصيص يجب أن تكون مستقيمة: `\"مرحبا\"`. العلامة المنحنية تُعد خطأ.", "السطر الثاني يمكن أن يكون `ad = \"Nibras\"`. ثم `print(ad)`.", "إذا خرج خطأ فاقرأ السطر الأخير. رقم السطر مكتوب هناك.", "لا تفتح مشروعًا كبيرًا. ابقَ في ملف واحد حتى يعمل."],
        ru: ["В Windows команда может быть и `py salam.py`.", "Файл должен кончаться на `.py`. `.txt` не запустится.", "Кавычка должна быть прямой: `\"Салам\"`. Кривая кавычка считается ошибкой.", "Вторая строка может быть `ad = \"Nibras\"`. Потом `print(ad)`.", "Если вышла ошибка, прочитай последнюю строку. Там написан номер строки.", "Не открывай большой проект. Останься на одном файле, пока он не заработает."],
      },
      L(
        "Proqram heç nə yazmırsa, `print` yoxdur. Python faylı özü pəncərə açmır.",
        "If the program writes nothing, there is no `print`. A Python file does not open a window by itself.",
        "Program hiçbir şey yazmıyorsa `print` yoktur. Python dosyası kendi pencere açmaz.",
        "إذا لم يكتب البرنامج شيئًا فلا يوجد `print`. ملف Python لا يفتح نافذة بنفسه.",
        "Если программа ничего не пишет, нет `print`. Файл Python сам окно не открывает.",
      ),
    ),
  },
  {
    slug: "play-console",
    piece: piece(
      L("Play Console hesabı necə açılır", "How to open a Play Console account", "Play Console hesabı nasıl açılır", "كيف يُفتح حساب Play Console", "Как открыть аккаунт Play Console"),
      L(
        "Play Console tətbiqi mağazaya göndərdiyin saytdır. Ünvanı `play.google.com/console` olmalıdır. Başqa saytdakı oxşar forma pul istəməməlidir.\n\nGoogle hesabın olmalıdır. Console açılınca sayt bir dəfəlik ödəniş göstərir. Məbləğ səhifənin özündə yazılır. Ödəniş tətbiqi dərc etmir. Yalnız hesabı açır.\n\nÖdənişdən sonra ad, ünvan və əlaqə soruşulur. Bəzən kimlik də istənir. Hesab açılan kimi tətbiq çıxmır. İmzalı APK, məxfilik ünvanı, ikon və telefon şəkilləri hələ səndədir.",
        "Play Console is the site where you send an app to the store. The address must be `play.google.com/console`. A similar form on another site should not ask you for money.\n\nYou need a Google account. When Console opens, the site shows a one-time payment. The amount is written on that page. The payment does not publish the app. It only opens the account.\n\nAfter the payment it asks for a name, an address, and a contact. Sometimes it also asks for an identity. The app does not come out the moment the account opens. A signed APK, a privacy address, an icon, and phone pictures are still yours to add.",
        "Play Console, uygulamayı mağazaya gönderdiğin sitedir. Adresi `play.google.com/console` olmalıdır. Başka sitedeki benzer form para istememelidir.\n\nGoogle hesabın olmalıdır. Console açılınca site bir kerelik ödeme gösterir. Tutar sayfanın kendisinde yazar. Ödeme uygulamayı yayınlamaz. Yalnızca hesabı açar.\n\nÖdemeden sonra ad, adres ve iletişim sorulur. Bazen kimlik de istenir. Hesap açılır açılmaz uygulama çıkmaz. İmzalı APK, gizlilik adresi, simge ve telefon resimleri hâlâ sendedir.",
        "Play Console هو الموقع الذي ترسل منه التطبيق إلى المتجر. يجب أن يكون العنوان `play.google.com/console`. نموذج شبيه على موقع آخر لا ينبغي أن يطلب منك مالًا.\n\nتحتاج حساب Google. حين يُفتح Console يُظهر الموقع دفعة واحدة. المبلغ مكتوب في تلك الصفحة. الدفعة لا تنشر التطبيق. تفتح الحساب فقط.\n\nبعد الدفعة يسأل عن اسم وعنوان واتصال. أحيانًا يطلب هوية أيضًا. التطبيق لا يخرج لحظة فتح الحساب. APK الموقَّع وعنوان الخصوصية والأيقونة وصور الهاتف ما زالت عليك.",
        "Play Console — это сайт, с которого ты отправляешь приложение в магазин. Адрес должен быть `play.google.com/console`. Похожая форма на другом сайте не должна просить у тебя деньги.\n\nНужен аккаунт Google. Когда Console открывается, сайт показывает разовую оплату. Сумма написана на той странице. Оплата не публикует приложение. Она только открывает аккаунт.\n\nПосле оплаты спрашивают имя, адрес и связь. Иногда просят и удостоверение. Приложение не выходит в миг открытия аккаунта. Подписанный APK, адрес конфиденциальности, значок и снимки телефона всё ещё на тебе.",
      ),
      {
        az: ["Ünvan `play.google.com` deyilsə, kartı yazma.", "Bir dəfəlik ödəniş hər tətbiq üçün təkrarlanmır. Hesab üçündür.", "Ödənişi başqasının hesabı ilə etsən, tətbiq onun adına düşür.", "Hazır APK-n yoxdursa, hesabı açmaq tələsmə.", "Məxfilik səhifəsinin ünvanı açılmalıdır. Boş səhifə tətbiqi saxlaya bilər.", "Şəkilləri tətbiqin öz ekranından çək. Başqa tətbiqin şəklini qoyma."],
        en: ["If the address is not `play.google.com`, do not type the card.", "The one-time payment is not repeated for every app. It is for the account.", "If you pay with someone else's account, the app lands in that name.", "If you do not have a finished APK yet, do not rush to open the account.", "The privacy page address has to open. An empty page can hold the app back.", "Take the pictures from the app's own screen. Do not put another app's picture."],
        tr: ["Adres `play.google.com` değilse kartı yazma.", "Bir kerelik ödeme her uygulama için tekrarlanmaz. Hesap içindir.", "Ödemeyi başkasının hesabıyla yaparsan uygulama onun adına düşer.", "Hazır APK'n yoksa hesabı açmaya acele etme.", "Gizlilik sayfasının adresi açılmalıdır. Boş sayfa uygulamayı tutabilir.", "Resimleri uygulamanın kendi ekranından çek. Başka uygulamanın resmini koyma."],
        ar: ["إذا لم يكن العنوان `play.google.com` فلا تكتب البطاقة.", "الدفعة الواحدة لا تتكرر لكل تطبيق. هي للحساب.", "إذا دفعت بحساب غيرك وقع التطبيق باسمه.", "إذا لم يكن عندك APK جاهز فلا تستعجل فتح الحساب.", "يجب أن يُفتح عنوان صفحة الخصوصية. الصفحة الفارغة قد تُبقي التطبيق.", "صوّر من شاشة التطبيق نفسه. لا تضع صورة تطبيق آخر."],
        ru: ["Если адрес не `play.google.com`, карту не пиши.", "Разовая оплата не повторяется для каждого приложения. Она для аккаунта.", "Если платишь чужим аккаунтом, приложение падает на его имя.", "Если готового APK ещё нет, не спеши открывать аккаунт.", "Адрес страницы конфиденциальности должен открываться. Пустая страница может задержать приложение.", "Снимки снимай с экрана самого приложения. Чужой снимок не ставь."],
      },
      L(
        "Hesab açılması tətbiqin qəbul olması demək deyil. İmzalı fayl və səhifə hələ yoxlanılır.",
        "An open account does not mean the app is accepted. The signed file and the page are still checked.",
        "Hesabın açılması uygulamanın kabul edilmesi demek değildir. İmzalı dosya ve sayfa hâlâ kontrol edilir.",
        "فتح الحساب لا يعني قبول التطبيق. الملف الموقَّع والصفحة ما زالا يُفحصان.",
        "Открытый аккаунт не значит, что приложение принято. Подписанный файл и страница ещё проверяются.",
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
      "Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console və iş vaxtı xətaları: səbəb, addım-addım həll, əmrlər və qarşısının alınması. Quruluş dayananda telefonun göstərdiyi xətalar. Son vaxtlar axtarılanlar da buradadır: Play Protect, etibarsız paket, yaddaş, uyğunsuz telefon, köhnə versiya və XAPK.",
      "Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console and runtime errors: cause, step-by-step fix, commands and prevention. The errors a phone shows when installation stops. What people have been searching for lately is here too: Play Protect, an invalid package, storage, an incompatible phone, an older version, and XAPK.",
      "Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console ve çalışma anı hataları: neden, adım adım çözüm, komutlar ve önlem. Kurulum durunca telefonun gösterdiği hatalar. Son zamanlar arananlar da burada: Play Protect, geçersiz paket, depolama, uyumsuz telefon, eski sürüm ve XAPK.",
      "أخطاء Android وGradle وExpo وReact Native وEAS وCapacitor وkeystore وadb وPlay Console ووقت التشغيل: السبب والحل خطوة بخطوة والأوامر والوقاية. الأخطاء التي يظهرها الهاتف حين يتوقف التثبيت. ما يُبحث عنه مؤخرًا هنا أيضًا: Play Protect والحزمة غير الصالحة والمساحة والهاتف غير المتوافق والنسخة الأقدم وXAPK.",
      "Ошибки Android, Gradle, Expo, React Native, EAS, Capacitor, keystore, adb, Play Console и времени выполнения: причина, решение по шагам, команды и профилактика. Ошибки, которые телефон показывает, когда установка останавливается. То, что ищут в последнее время, тоже здесь: Play Protect, недействительный пакет, память, неподходящий телефон, старая версия и XAPK.",
    ),
    title: L(
      "APK xətaları — qurulmur, Play Protect, XAPK",
      "APK errors — will not install, Play Protect, XAPK",
      "APK hataları — kurulmuyor, Play Protect, XAPK",
      "أخطاء APK — لا يُثبَّت، Play Protect، XAPK",
      "Ошибки APK — не устанавливается, Play Protect, XAPK",
    ),
    description: L(
      "APK qurulmur, Play Protect bloklayır, paket etibarsızdır, yaddaş çatmır, telefon uyğun deyil, köhnə versiya və XAPK qurulmur. Nə etmək lazımdır.",
      "APK will not install, Play Protect blocks it, the package is invalid, storage is full, the phone is not compatible, an older version and XAPK will not install. What to do.",
      "APK kurulmuyor, Play Protect engelliyor, paket geçersiz, depolama yetmiyor, telefon uyumsuz, eski sürüm ve XAPK kurulmuyor. Ne yapmalı.",
      "APK لا يُثبَّت، وPlay Protect يحظره، والحزمة غير صالحة، والمساحة لا تكفي، والهاتف غير متوافق، والنسخة الأقدم وXAPK لا يُثبَّتان. ماذا يُفعل.",
      "APK не устанавливается, Play Protect блокирует, пакет недействителен, не хватает памяти, телефон не подходит, старая версия и XAPK не ставятся. Что делать.",
    ),
    items: ERRORS,
  },
  movzu: {
    kind: "movzu",
    heading: L("Süni intellekt", "Artificial intelligence", "Yapay zeka", "الذكاء الاصطناعي", "Искусственный интеллект"),
    intro: L(
      "ChatGPT, Gemini və Claude eyni işi görür: sən yazırsan, cavab gəlir. Prompt və tətbiq də buradadır.",
      "ChatGPT, Gemini, and Claude do the same job: you write, and an answer comes back. A prompt and an app are here too.",
      "ChatGPT, Gemini ve Claude aynı işi görür: sen yazarsın, cevap gelir. Prompt ve uygulama da burada.",
      "ChatGPT وGemini وClaude تؤدي العمل نفسه: تكتب فيأتي الجواب. الـ prompt والتطبيق هنا أيضًا.",
      "ChatGPT, Gemini и Claude делают одну работу: ты пишешь, приходит ответ. Prompt и приложение тоже здесь.",
    ),
    title: L(
      "Süni intellekt — ChatGPT, Gemini, Claude, prompt",
      "Artificial intelligence — ChatGPT, Gemini, Claude, prompt",
      "Yapay zeka — ChatGPT, Gemini, Claude, prompt",
      "الذكاء الاصطناعي — ChatGPT وGemini وClaude وprompt",
      "Искусственный интеллект — ChatGPT, Gemini, Claude, prompt",
    ),
    description: L(
      "ChatGPT nədir, Gemini nədir, Claude nədir, prompt nədir və süni intellektlə tətbiq hazırlamaq.",
      "What is ChatGPT, Gemini, and Claude, what is a prompt, and making an app with AI.",
      "ChatGPT nedir, Gemini nedir, Claude nedir, prompt nedir ve yapay zeka ile uygulama yapmak.",
      "ما هو ChatGPT وGemini وClaude، وما هو prompt، وصنع تطبيق بالذكاء الاصطناعي.",
      "Что такое ChatGPT, Gemini и Claude, что такое prompt и как сделать приложение с ИИ.",
    ),
    items: TOPICS,
  },
  nece: {
    kind: "nece",
    heading: L("Necə", "How to start", "Nasıl", "كيف", "Как начать"),
    intro: L(
      "İlk səhifə, ilk Python proqramı və Play Console hesabı. Hər biri öz addımları ilə.",
      "The first page, the first Python program, and a Play Console account. Each one with its own steps.",
      "İlk sayfa, ilk Python programı ve Play Console hesabı. Her biri kendi adımlarıyla.",
      "الصفحة الأولى وبرنامج Python الأول وحساب Play Console. كل واحد بخطواته.",
      "Первая страница, первая программа Python и аккаунт Play Console. У каждого свои шаги.",
    ),
    title: L(
      "Necə — ilk HTML, ilk Python, Play Console",
      "How to start — first HTML, first Python, Play Console",
      "Nasıl — ilk HTML, ilk Python, Play Console",
      "كيف — أول HTML وأول Python وPlay Console",
      "Как начать — первый HTML, первый Python, Play Console",
    ),
    description: L(
      "İlk HTML səhifəni necə yazmaq, Python-da ilk proqramı necə işə salmaq və Play Console hesabını necə açmaq olar.",
      "How to write a first HTML page, run a first Python program, and open a Play Console account.",
      "İlk HTML sayfası nasıl yazılır, Python'da ilk program nasıl çalıştırılır ve Play Console hesabı nasıl açılır.",
      "كيف تُكتب أول صفحة HTML، وكيف يُشغَّل أول برنامج Python، وكيف يُفتح حساب Play Console.",
      "Как написать первую страницу HTML, запустить первую программу Python и открыть аккаунт Play Console.",
    ),
    items: HOWS,
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
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu|nece)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  return { lang, kind, section: SEARCH[kind] };
}

export function searchTopicFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?(soz|xeta|movzu|nece)\/([^/]+)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const kind = match[2] as SearchKind;
  const section = SEARCH[kind];
  const item = section.items.find((entry) => entry.slug === match[3]);
  if (!item) return null;
  return { lang, kind, section, item, piece: item.piece[lang] };
}
