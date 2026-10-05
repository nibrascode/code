import type { Lang } from "@/lib/i18n";

export type ResourceArticle = {
  topic: string;
  slug: string;
  title: Record<Lang, string>;
  description: Record<Lang, string>;
  keywords: Record<Lang, string>;
  paragraphs: Record<Lang, readonly string[]>;
  steps?: Record<Lang, readonly string[]>;
};

export type ResourceTopicCopy = {
  slug: string;
  intro: Record<Lang, string>;
  description: Record<Lang, string>;
  keywords: Record<Lang, string>;
};

function t(az: string, en: string, tr: string, ar: string, ru: string): Record<Lang, string> {
  return { az, en, tr, ar, ru };
}

function b(
  az: readonly string[],
  en: readonly string[],
  tr: readonly string[],
  ar: readonly string[],
  ru: readonly string[],
): Record<Lang, readonly string[]> {
  return { az, en, tr, ar, ru };
}

export const RESOURCE_TOPICS: readonly ResourceTopicCopy[] = [
  {
    slug: "ereb-dili",
    intro: t(
      "Ərəb dilinə başlamaq üçün əvvəl hərflərin şəklini, hərəkələrin oxunuşa təsirini və qısa təkrarı bilmək lazımdır. Uzun mətnə tələsmək ilk həftədə yazını qarışdırır.",
      "Starting Arabic is clearer when you first know the letter shapes, how the vowel marks change a word, and why short review matters. A long text in the first week usually mixes everything together.",
      "Arapçaya başlarken önce harflerin şeklini, harekelerin okunuşu nasıl değiştirdiğini ve kısa tekrarın neden gerektiğini bilmek işi netleştirir. İlk hafta uzun metin her şeyi karıştırır.",
      "البداية في العربية أوضح إذا عرفت أشكال الحروف، وأثر الحركات في القراءة، ولماذا تفيد المراجعة القصيرة. النص الطويل في الأسبوع الأول يخلط الأمور.",
      "Начинать арабский понятнее, когда сначала ясны формы букв, влияние огласовок и короткие повторы. Длинный текст в первую неделю обычно всё смешивает.",
    ),
    description: t(
      "Ərəb əlifbası, hərflərin öyrənilməsi, hərəkələr və söz ehtiyatı haqqında qısa səhifələr.",
      "Short pages on the Arabic alphabet, learning the letters, vowel marks, and building a small vocabulary.",
      "Arap alfabesi, harfleri öğrenme, harekeler ve kelime hazinesi hakkında kısa sayfalar.",
      "صفحات قصيرة عن الأبجدية العربية وتعلم الحروف والحركات وبناء حصيلة صغيرة من الكلمات.",
      "Короткие страницы об арабском алфавите, буквах, огласовках и небольшом запасе слов.",
    ),
    keywords: t(
      "ərəb dili, ərəb əlifbası, hərəkə, ərəb hərfləri",
      "Arabic language, Arabic alphabet, harakat, Arabic letters",
      "Arapça, Arap alfabesi, hareke, Arap harfleri",
      "اللغة العربية, الأبجدية العربية, الحركات, الحروف العربية",
      "арабский язык, арабский алфавит, огласовки, арабские буквы",
    ),
  },
  {
    slug: "android",
    intro: t(
      "Android bir çox telefonda işləyən əməliyyat sistemidir. Tətbiqi haradan qurmaq, APK-nın nə olduğu və icazənin nə açdığı burada qısa yazılıb.",
      "Android is the operating system on many phones. These pages explain where to install an app, what an APK is, and what a permission opens.",
      "Android birçok telefonda çalışan işletim sistemidir. Bu sayfalar uygulamanın nereden kurulacağını, APK'nın ne olduğunu ve iznin ne açtığını kısaca yazar.",
      "Android نظام تشغيل يعمل على كثير من الهواتف. هذه الصفحات تشرح من أين يُثبَّت التطبيق، وما هو APK، وما الذي تفتحه الصلاحية.",
      "Android — система, которая стоит на многих телефонах. Здесь коротко: откуда ставить приложение, что такое APK и что открывает разрешение.",
    ),
    description: t(
      "Android, APK, tətbiq quraşdırmaq və icazələr haqqında qısa izahlar.",
      "Short explanations of Android, APK files, installing an app, and app permissions.",
      "Android, APK, uygulama kurma ve izinler hakkında kısa açıklamalar.",
      "شروح قصيرة عن Android وملفات APK وتثبيت التطبيق وصلاحيات التطبيقات.",
      "Короткие объяснения: Android, файл APK, установка приложения и разрешения.",
    ),
    keywords: t(
      "Android nədir, APK nədir, tətbiq quraşdırmaq, tətbiq icazəsi",
      "what is Android, what is an APK, install an app, app permission",
      "Android nedir, APK nedir, uygulama kurmak, uygulama izni",
      "ما هو Android, ما هو APK, تثبيت تطبيق, صلاحية التطبيق",
      "что такое Android, что такое APK, установить приложение, разрешение приложения",
    ),
  },
  {
    slug: "fayl-aletleri",
    intro: t(
      "Faylın sonu onun növünü göstərir, amma adı dəyişmək faylı çevirmir. Bu səhifələr formatı, növləri, həcmi azaltmağı və adı səliqəli saxlamağı izah edir.",
      "A file ending hints at its type, but renaming it does not convert it. These pages explain formats, file kinds, making a file smaller, and keeping a clear name.",
      "Dosya uzantısı türünü gösterir, ama adını değiştirmek dosyayı dönüştürmez. Bu sayfalar biçimi, türleri, boyutu küçültmeyi ve adı düzenli tutmayı anlatır.",
      "امتداد الملف يشير إلى نوعه، لكن تغيير الاسم لا يحوّله. هذه الصفحات تشرح الصيغة والأنواع وتصغير الحجم وحفظ اسم واضح.",
      "Окончание файла подсказывает тип, но смена имени его не конвертирует. Здесь о форматах, видах файлов, уменьшении размера и понятном имени.",
    ),
    description: t(
      "Fayl formatı, fayl növləri, həcmi azaltmaq və fayl adını saxlamaq.",
      "File formats, file types, making a file smaller, and keeping a clear file name.",
      "Dosya biçimi, dosya türleri, boyutu küçültmek ve dosya adını korumak.",
      "صيغة الملف وأنواع الملفات وتصغير الحجم وحفظ اسم واضح.",
      "Формат файла, виды файлов, уменьшение размера и понятное имя.",
    ),
    keywords: t(
      "fayl formatı, fayl növləri, faylı kiçiltmək, fayl adı",
      "file format, file types, shrink a file, file name",
      "dosya biçimi, dosya türleri, dosyayı küçültmek, dosya adı",
      "صيغة الملف, أنواع الملفات, تصغير الملف, اسم الملف",
      "формат файла, виды файлов, уменьшить файл, имя файла",
    ),
  },
  {
    slug: "tehsil",
    intro: t(
      "Öyrənməkdə uzun bir gün yox, təkrar olunan qısa məşq daha çox qalır. Bu səhifələr qısa məşqi, gündəlik təkrarı, yoxlamanı və kartları izah edir.",
      "In study, a repeated short session stays longer than one rare long day. These pages explain short practice, daily review, checking yourself, and cards.",
      "Öğrenmede ara sıra yapılan uzun günden çok, tekrarlanan kısa çalışma akılda kalır. Bu sayfalar kısa çalışmayı, günlük tekrarı, kendini yoklamayı ve kartları anlatır.",
      "في التعلم تبقى الجلسة القصيرة المتكررة أكثر من يوم طويل نادر. هذه الصفحات تشرح التمرين القصير والمراجعة اليومية والاختبار والبطاقات.",
      "В учёбе чаще остаётся короткий повтор, а не редкий длинный день. Здесь о короткой практике, ежедневном повторе, проверке и карточках.",
    ),
    description: t(
      "Qısa məşq, gündəlik təkrar, öyrəniləni yoxlamaq və kartlarla təkrar.",
      "Short practice, daily review, checking what you learned, and review cards.",
      "Kısa çalışma, günlük tekrar, öğrenileni yoklamak ve kartlarla tekrar.",
      "التمرين القصير والمراجعة اليومية واختبار ما تعلمته والتكرار بالبطاقات.",
      "Короткая практика, ежедневный повтор, проверка выученного и карточки.",
    ),
    keywords: t(
      "qısa məşq, gündəlik təkrar, kartlarla öyrənmək, öyrənməyi yoxlamaq",
      "short practice, daily review, flashcards, check what you learned",
      "kısa çalışma, günlük tekrar, kartlarla öğrenmek, öğrenmeyi yoklamak",
      "تمرين قصير, مراجعة يومية, بطاقات تعليمية, اختبار التعلم",
      "короткая практика, ежедневный повтор, карточки, проверка знаний",
    ),
  },
  {
    slug: "senedler",
    intro: t(
      "Sənəd saxlamaq və göndərmək üçündür. Skan ilə mətnli səhifə eyni deyil. İmza və ikinci nüsxə isə səhv bir əməldən sonra geri qayıtmağı asanlaşdırır.",
      "A document is meant to be kept and sent. A scan is not the same as a page of real text. A signature and a second copy make it easier to recover after a mistake.",
      "Belge saklamak ve göndermek içindir. Tarama ile metin sayfası aynı değildir. İmza ve ikinci kopya yanlış bir işlemden sonra geri dönmeyi kolaylaştırır.",
      "المستند للحفظ والإرسال. المسح ليس كصفحة فيها نص حقيقي. التوقيع والنسخة الثانية يسهّلان الرجوع بعد خطأ.",
      "Документ хранят и отправляют. Скан — не то же самое, что страница с настоящим текстом. Подпись и вторая копия помогают вернуться после ошибки.",
    ),
    description: t(
      "Sənəd, skan ilə mətn fərqi, imza və sənədin ikinci nüsxəsi.",
      "What a document is, scan versus text, signing, and keeping a second copy.",
      "Belge, tarama ile metin farkı, imza ve belgenin ikinci kopyası.",
      "ما هو المستند، والفرق بين المسح والنص، والتوقيع، والاحتفاظ بنسخة ثانية.",
      "Что такое документ, скан и текст, подпись и вторая копия.",
    ),
    keywords: t(
      "sənəd nədir, skan, sənəd imzalamaq, sənəd nüsxəsi",
      "what is a document, scan, sign a document, document copy",
      "belge nedir, tarama, belge imzalamak, belge kopyası",
      "ما هو المستند, مسح, توقيع مستند, نسخة المستند",
      "что такое документ, скан, подписать документ, копия документа",
    ),
  },
];

export const RESOURCE_ARTICLES: readonly ResourceArticle[] = [
  {
    topic: "ereb-dili",
    slug: "ereb-elifbasi",
    title: t("Ərəb əlifbası nədir?", "What is the Arabic alphabet?", "Arap alfabesi nedir?", "ما هي الأبجدية العربية؟", "Что такое арабский алфавит?"),
    description: t(
      "Ərəb əlifbası sağdan sola yazılır. Hərfin şəkli yerdən asılı olaraq dəyişir.",
      "The Arabic alphabet is written from right to left. A letter's shape changes with its place in the word.",
      "Arap alfabesi sağdan sola yazılır. Harfin şekli kelimedeki yerine göre değişir.",
      "تُكتب الأبجدية العربية من اليمين إلى اليسار، ويتغير شكل الحرف حسب موضعه.",
      "Арабский алфавит пишут справа налево. Форма буквы меняется от её места в слове.",
    ),
    keywords: t("ərəb əlifbası, ərəb hərfləri", "Arabic alphabet, Arabic letters", "Arap alfabesi, Arap harfleri", "الأبجدية العربية, الحروف العربية", "арабский алфавит, арабские буквы"),
    paragraphs: b(
      [
        "Ərəb əlifbası adətən 28 hərf sayılır və sağdan sola yazılır. Hərf sözün əvvəlində, ortasında və sonunda eyni görünməyə bilər. Bəzi hərflər özündən sonrakı hərflə birləşmir.",
        "Əlifbanı öyrənmək bütün dili öyrənmək demək deyil. Əvvəl hərfin adını və şəklini tanımaq, sonra qısa söz oxumaq kifayətdir. Uzun mətn bu mərhələdə tələskənlikdir.",
      ],
      [
        "The Arabic alphabet is usually counted as 28 letters and is written from right to left. A letter may not look the same at the start, middle, and end of a word. Some letters do not join to the letter that follows.",
        "Learning the alphabet is not the same as learning the whole language. First recognize the name and the shape, then read a short word. A long text at this stage is rushing.",
      ],
      [
        "Arap alfabesi genellikle 28 harf sayılır ve sağdan sola yazılır. Harf kelimenin başında, ortasında ve sonunda aynı görünmeyebilir. Bazı harfler kendinden sonraki harfe bağlanmaz.",
        "Alfabeyi öğrenmek bütün dili öğrenmek değildir. Önce harfin adını ve şeklini tanımak, sonra kısa kelime okumak yeter. Bu aşamada uzun metin aceleciliktir.",
      ],
      [
        "تُعد الأبجدية العربية عادة 28 حرفًا وتُكتب من اليمين إلى اليسار. قد لا يبدو الحرف واحدًا في أول الكلمة ووسطها وآخرها. بعض الحروف لا يتصل بما بعده.",
        "تعلم الأبجدية ليس تعلم اللغة كلها. يكفي أولًا أن تعرف اسم الحرف وشكله، ثم تقرأ كلمة قصيرة. النص الطويل في هذه المرحلة استعجال.",
      ],
      [
        "В арабском алфавите обычно считают 28 букв, и пишут его справа налево. Буква может выглядеть по-разному в начале, середине и конце слова. Некоторые буквы не соединяются со следующей.",
        "Выучить алфавит — не значит выучить весь язык. Сначала узнайте имя и форму буквы, потом прочитайте короткое слово. Длинный текст на этом шаге — спешка.",
      ],
    ),
    steps: b(
      ["Hərfin adını və tək duran şəklini öyrənin.", "Əvvəl, orta və son şəklini yan-yana görün.", "Həmin hərflə bir və ya iki qısa söz oxuyun.", "Bütün əlifbanı bir gündə bitirməyə çalışmayın."],
      ["Learn the letter's name and its standalone shape.", "Look at the initial, medial, and final shapes side by side.", "Read one or two short words with that letter.", "Do not try to finish the whole alphabet in one day."],
      ["Harfin adını ve tek başına duran şeklini öğrenin.", "Baş, orta ve son şeklini yan yana görün.", "O harfle bir veya iki kısa kelime okuyun.", "Bütün alfabeyi bir günde bitirmeye çalışmayın."],
      ["تعلم اسم الحرف وشكله وهو منفرد.", "انظر إلى شكل الأول والوسط والآخر جنبًا إلى جنب.", "اقرأ كلمة قصيرة أو كلمتين بذلك الحرف.", "لا تحاول إنهاء الأبجدية كلها في يوم واحد."],
      ["Выучите имя буквы и её отдельную форму.", "Посмотрите начальную, среднюю и конечную формы рядом.", "Прочитайте одно или два коротких слова с этой буквой.", "Не пытайтесь пройти весь алфавит за один день."],
    ),
  },
  {
    topic: "ereb-dili",
    slug: "ereb-herflerini-oyrenmek",
    title: t("Ərəb hərflərini necə öyrənmək olar?", "How do you learn the Arabic letters?", "Arap harfleri nasıl öğrenilir?", "كيف تتعلم الحروف العربية؟", "Как учить арабские буквы?"),
    description: t(
      "Hərfləri az-az, yazaraq və oxşar formaları qarışdırmadan öyrənmək daha səliqəlidir.",
      "It is cleaner to learn a few letters at a time, write them, and keep similar shapes apart.",
      "Harfleri azar azar, yazarak ve benzeyen şekilleri karıştırmadan öğrenmek daha düzenlidir.",
      "تعلم الحروف قليلًا قليلًا، مع الكتابة، ومن دون خلط الأشكال المتشابهة، أوضح.",
      "Буквы спокойнее учить понемногу, писать их и не смешивать похожие формы.",
    ),
    keywords: t("ərəb hərflərini öyrənmək", "learn Arabic letters", "Arap harflerini öğrenmek", "تعلم الحروف العربية", "учить арабские буквы"),
    paragraphs: b(
      [
        "Bir dəfədə çox hərf götürmək onları bir-birinə qarışdırır. Nöqtəli və nöqtəsiz oxşar formalar xüsusilə tez səhv salınır. Hər dəfə bir neçə hərf seçib həm görmək, həm yazmaq daha saxlayır.",
        "Oxşar hərfləri eyni gündə yan-yana qoymaq fərqi göstərir. Onları ayrı-ayrı günlərdə öyrənib heç vaxt müqayisə etməmək isə səhvi gizlədir.",
      ],
      [
        "Taking too many letters at once mixes them together. Similar shapes with and without dots are especially easy to swap. Choosing a few letters and both seeing and writing them keeps them longer.",
        "Putting similar letters side by side on the same day shows the difference. Learning them on separate days and never comparing them hides the mistake.",
      ],
      [
        "Bir seferde çok harf almak onları birbirine karıştırır. Noktalı ve noktasız benzer şekiller özellikle çabuk karışır. Her seferde birkaç harf seçip hem görmek hem yazmak daha kalıcıdır.",
        "Benzer harfleri aynı gün yan yana koymak farkı gösterir. Onları ayrı günlerde öğrenip hiç karşılaştırmamak ise hatayı gizler.",
      ],
      [
        "أخذ حروف كثيرة دفعة واحدة يخلطها. الأشكال المتشابهة بنقاط ومن دون نقاط تُبدَّل بسهولة. اختيار بضعة حروف ورؤيتها وكتابتها يثبّتها أكثر.",
        "وضع الحروف المتشابهة جنبًا إلى جنب في اليوم نفسه يُظهر الفرق. وتعلمها في أيام متفرقة من دون مقارنة يخفي الخطأ.",
      ],
      [
        "Слишком много букв за один раз смешивает их. Похожие формы с точками и без точек путаются быстрее всего. Несколько букв, которые вы и видите, и пишете, держатся дольше.",
        "Похожие буквы в один день рядом показывают разницу. Если учить их в разные дни и никогда не сравнивать, ошибка прячется.",
      ],
    ),
    steps: b(
      ["Bir dəfəyə üç və ya dörd hərf götürün.", "Hər hərfi bir neçə dəfə yazın.", "Oxşar cütü yan-yana qoyub fərqi deyin.", "Ertəsi gün yenilərini əlavə etməzdən əvvəl dünənkiləri oxuyun."],
      ["Take three or four letters at a time.", "Write each letter several times.", "Place a similar pair side by side and name the difference.", "Read yesterday's letters before adding new ones."],
      ["Bir seferde üç veya dört harf alın.", "Her harfi birkaç kez yazın.", "Benzer çifti yan yana koyup farkı söyleyin.", "Yenilerini eklemeden önce dünküleri okuyun."],
      ["خذ ثلاثة أو أربعة حروف في المرة.", "اكتب كل حرف عدة مرات.", "ضع الزوج المتشابه جنبًا إلى جنب وسمِّ الفرق.", "اقرأ حروف الأمس قبل إضافة الجديدة."],
      ["Берите три или четыре буквы за раз.", "Напишите каждую несколько раз.", "Положите похожую пару рядом и назовите разницу.", "Прочитайте вчерашние буквы до новых."],
    ),
  },
  {
    topic: "ereb-dili",
    slug: "herekeler-nedir",
    title: t("Hərəkələr nədir?", "What are vowel marks?", "Harekeler nedir?", "ما هي الحركات؟", "Что такое огласовки?"),
    description: t(
      "Hərəkə hərf deyil. O, hərfin necə oxunacağını göstərən kiçik işarədir.",
      "A vowel mark is not a letter. It is a small sign that shows how to read the letter.",
      "Hareke bir harf değildir. Harfin nasıl okunacağını gösteren küçük bir işarettir.",
      "الحركة ليست حرفًا. هي علامة صغيرة تدل على كيفية قراءة الحرف.",
      "Огласовка — не буква. Это маленький знак, который показывает, как читать букву.",
    ),
    keywords: t("hərəkə nədir, ərəb hərəkələri", "Arabic vowel marks, harakat", "hareke nedir, Arap harekeleri", "الحركات في العربية", "арабские огласовки"),
    paragraphs: b(
      [
        "Hərəkə hərfin üstündə və ya altında duran kiçik işarədir. O, həmin hərfdən sonra gələn qısa səsi göstərir. Hərəkəni görməmək sözü başqa cür oxumağa aparır.",
        "Başlanğıcda hərəkəli mətn oxumaq daha təhlükəsizdir. Hərəkəsiz mətn təcrübə istəyir, çünki oxuyan səsi özü tamamlayır. Əvvəl hərəkəli qısa söz, sonra hərəkəsiz mətn sırası qarışıqlığı azaldır.",
      ],
      [
        "A vowel mark is a small sign above or below a letter. It shows the short sound that follows that letter. Missing it leads you to read the word another way.",
        "At the start, a text with vowel marks is safer to read. A text without them needs experience, because the reader supplies the sound. Vowel-marked short words first, then unmarked text, reduces the mix-up.",
      ],
      [
        "Hareke harfin üstünde veya altında duran küçük işarettir. O harften sonra gelen kısa sesi gösterir. Harekeyi görmemek kelimeyi başka türlü okutur.",
        "Başlangıçta harekeli metin okumak daha güvenlidir. Harekesiz metin deneyim ister, çünkü okuyan sesi kendisi tamamlar. Önce harekeli kısa kelime, sonra harekesiz metin karışıklığı azaltır.",
      ],
      [
        "الحركة علامة صغيرة فوق الحرف أو تحته. تدل على الصوت القصير الذي يلي ذلك الحرف. إغفالها يؤدي إلى قراءة الكلمة بشكل آخر.",
        "في البداية يكون النص المشكول أأمن في القراءة. النص من دون حركات يحتاج إلى خبرة لأن القارئ يكمّل الصوت. الكلمات القصيرة المشكولة أولًا، ثم النص غير المشكول، تقلل الخلط.",
      ],
      [
        "Огласовка — маленький знак над буквой или под ней. Он показывает короткий звук после этой буквы. Пропуск знака заставляет прочитать слово иначе.",
        "В начале безопаснее читать текст с огласовками. Текст без них требует опыта: читающий сам достраивает звук. Сначала короткие слова со знаками, потом текст без них — так меньше путаницы.",
      ],
    ),
    steps: b(
      ["Hərfin özü ilə üstündəki işarəni ayrı şey kimi görün.", "Eyni hərfi fərqli hərəkə ilə oxuyun.", "Əvvəl hərəkəli qısa söz seçin.", "Hərəkəsiz mətnə keçməzdən əvvəl hərəkəli oxunuşu yoxlayın."],
      ["See the letter and the mark above it as two things.", "Read the same letter with a different vowel mark.", "Start with a short word that has marks.", "Check the marked reading before you move to unmarked text."],
      ["Harfin kendisi ile üstündeki işareti ayrı görün.", "Aynı harfi farklı hareke ile okuyun.", "Önce harekeli kısa kelime seçin.", "Harekesiz metne geçmeden harekeli okunuşu kontrol edin."],
      ["انظر إلى الحرف والعلامة فوقه كشيئين.", "اقرأ الحرف نفسه بحركة مختلفة.", "ابدأ بكلمة قصيرة مشكولة.", "راجع القراءة المشكولة قبل الانتقال إلى نص غير مشكول."],
      ["Смотрите на букву и знак над ней как на две вещи.", "Прочитайте одну букву с другой огласовкой.", "Сначала возьмите короткое слово со знаками.", "Проверьте чтение со знаками до текста без них."],
    ),
  },
  {
    topic: "ereb-dili",
    slug: "ereb-soz-ehtiyati",
    title: t("Ərəb dilində söz ehtiyatı necə artırılır?", "How do you grow an Arabic vocabulary?", "Arapçada kelime hazinesi nasıl artar?", "كيف تنمّي حصيلة الكلمات العربية؟", "Как увеличивать запас арабских слов?"),
    description: t(
      "Uzun siyahı yox, az sözü təkrar etmək və qısa cümlədə işlətmək daha çox qalır.",
      "A few words reviewed and used in a short sentence stay longer than a long unused list.",
      "Uzun liste değil, az kelimeyi tekrar edip kısa cümlede kullanmak daha çok kalır.",
      "كلمات قليلة تُراجَع وتُستخدم في جملة قصيرة تبقى أكثر من قائمة طويلة لا تُراجع.",
      "Несколько повторённых слов в коротком предложении держатся дольше длинного списка.",
    ),
    keywords: t("ərəb söz ehtiyatı, ərəb sözləri", "Arabic vocabulary", "Arapça kelime hazinesi", "حصيلة الكلمات العربية", "запас арабских слов"),
    paragraphs: b(
      [
        "Söz ehtiyatı çox sözü bir dəfə görməklə artmır. Az sözü bir neçə gün təkrar etmək, mənasını və yazılışını bir yerdə saxlayır. İşlədilməyən uzun siyahı tez itir.",
        "Yeni sözü qısa cümlədə görmək tək tərcümədən faydalıdır. Cümlə sözün harada durduğunu göstərir. Tərcümə isə yalnız mənanın bir hissəsidir.",
      ],
      [
        "Vocabulary does not grow by seeing many words once. Repeating a few words over several days keeps the meaning and the spelling together. A long list you never use disappears quickly.",
        "Seeing a new word in a short sentence is more useful than a translation alone. The sentence shows where the word sits. The translation is only part of the meaning.",
      ],
      [
        "Kelime hazinesi çok kelimeyi bir kez görmekle artmaz. Az kelimeyi birkaç gün tekrar etmek anlamı ve yazılışı birlikte tutar. Kullanılmayan uzun liste çabuk gider.",
        "Yeni kelimeyi kısa cümlede görmek tek çeviriden daha faydalıdır. Cümle kelimenin nerede durduğunu gösterir. Çeviri ise anlamın yalnız bir parçasıdır.",
      ],
      [
        "لا تنمو الحصيلة برؤية كلمات كثيرة مرة واحدة. تكرار كلمات قليلة عدة أيام يُبقي المعنى والرسم معًا. القائمة الطويلة التي لا تُستخدم تذهب سريعًا.",
        "رؤية الكلمة الجديدة في جملة قصيرة أنفع من الترجمة وحدها. الجملة تُظهر موضع الكلمة. والترجمة جزء من المعنى فقط.",
      ],
      [
        "Запас слов не растёт от одного взгляда на много слов. Повтор нескольких слов несколько дней держит смысл и написание вместе. Длинный список, которым не пользуются, быстро уходит.",
        "Новое слово в коротком предложении полезнее одного перевода. Предложение показывает, где слово стоит. Перевод — только часть смысла.",
      ],
    ),
    steps: b(
      ["Bir gündə az söz seçin.", "Mənasını və yazılışını birlikdə təkrar edin.", "Hər sözü qısa cümlədə görün.", "Yeni siyahıya keçməzdən əvvəl köhnə sözləri yoxlayın."],
      ["Choose few words for one day.", "Review the meaning and the spelling together.", "See each word in a short sentence.", "Check the old words before a new list."],
      ["Bir güne az kelime seçin.", "Anlamını ve yazılışını birlikte tekrar edin.", "Her kelimeyi kısa cümlede görün.", "Yeni listeye geçmeden eski kelimeleri yoklayın."],
      ["اختر كلمات قليلة ليوم واحد.", "راجع المعنى والرسم معًا.", "انظر كل كلمة في جملة قصيرة.", "اختبر الكلمات القديمة قبل قائمة جديدة."],
      ["На день берите мало слов.", "Повторяйте смысл и написание вместе.", "Увидьте каждое слово в коротком предложении.", "Проверьте старые слова до нового списка."],
    ),
  },
  {
    topic: "android",
    slug: "android-nedir",
    title: t("Android nədir?", "What is Android?", "Android nedir?", "ما هو Android؟", "Что такое Android?"),
    description: t(
      "Android telefonun əməliyyat sistemidir. Tətbiqlər onun üzərində işləyir.",
      "Android is a phone's operating system. Apps run on top of it.",
      "Android telefonun işletim sistemidir. Uygulamalar onun üzerinde çalışır.",
      "Android نظام تشغيل الهاتف. التطبيقات تعمل فوقه.",
      "Android — операционная система телефона. Приложения работают на ней.",
    ),
    keywords: t("Android nədir", "what is Android", "Android nedir", "ما هو Android", "что такое Android"),
    paragraphs: b(
      [
        "Android telefonda tətbiqlərin açıldığı əsas sistemdir. O, bir markanın adı deyil. Fərqli telefon istehsalçıları eyni sistemin üzərinə öz görünüşlərini əlavə edə bilər.",
        "Buna görə eyni tətbiq iki telefonda oxşar işləyə bilər, amma ayarların yeri fərqli ola bilər. Yeniləmə də hər telefonda eyni gündə gəlməyə bilər.",
      ],
      [
        "Android is the main system on a phone where apps open. It is not the name of one brand. Different phone makers can add their own look on top of the same system.",
        "That is why the same app can work similarly on two phones, while the place of a setting differs. An update may also not arrive on every phone on the same day.",
      ],
      [
        "Android telefonda uygulamaların açıldığı ana sistemdir. O, bir markanın adı değildir. Farklı telefon üreticileri aynı sistemin üzerine kendi görünüşlerini ekleyebilir.",
        "Bu yüzden aynı uygulama iki telefonda benzer çalışabilir, ama ayarın yeri farklı olabilir. Güncelleme de her telefona aynı gün gelmeyebilir.",
      ],
      [
        "Android هو النظام الأساسي في الهاتف حيث تُفتح التطبيقات. هو ليس اسم علامة واحدة. قد يضيف صنّاع الهواتف مظهرهم فوق النظام نفسه.",
        "لذلك قد يعمل التطبيق نفسه بشكل متشابه في هاتفين، بينما مكان الإعداد يختلف. وقد لا يصل التحديث إلى كل هاتف في اليوم نفسه.",
      ],
      [
        "Android — основная система телефона, в которой открываются приложения. Это не название одной марки. Разные производители могут добавить свой вид поверх одной системы.",
        "Поэтому одно приложение может работать похоже на двух телефонах, а место настройки отличаться. Обновление тоже может прийти не в один день.",
      ],
    ),
  },
  {
    topic: "android",
    slug: "apk-nedir",
    title: t("APK nədir?", "What is an APK?", "APK nedir?", "ما هو APK؟", "Что такое APK?"),
    description: t(
      "APK Android tətbiqini quraşdırmaq üçün istifadə olunan fayldır. Naməlum səhifədən gələn fayla ehtiyatlı olmaq lazımdır.",
      "An APK is a file used to install an Android app. Be careful with a file from an unknown page.",
      "APK, bir Android uygulamasını kurmak için kullanılan dosyadır. Bilinmeyen sayfadan gelen dosyada dikkat gerekir.",
      "APK ملف يُستخدم لتثبيت تطبيق Android. يلزم الحذر من ملف جاء من صفحة غير معروفة.",
      "APK — файл, которым устанавливают приложение Android. С файлом с неизвестной страницы нужна осторожность.",
    ),
    keywords: t("APK nədir, APK faylı", "what is an APK, APK file", "APK nedir, APK dosyası", "ما هو APK, ملف APK", "что такое APK, файл APK"),
    paragraphs: b(
      [
        "APK Android tətbiqinin quraşdırma faylıdır. Mağaza adətən bu faylı sizin yerinizə açır və quraşdırır. Faylı özünüz saxlayıb açanda telefon əlavə icazə istəyə bilər.",
        "Tanımadığınız səhifədən gələn APK tətbiqin əsl nüsxəsi olmaya bilər. Mümkünsə, tətbiqi tanınan mağazadan və gördüyünüz geliştirici adıyla qurun. Faylın adı tək başına onun təhlükəsiz olduğunu göstərmir.",
      ],
      [
        "An APK is the install file of an Android app. A store usually opens and installs that file for you. If you save and open the file yourself, the phone may ask for an extra permission.",
        "An APK from a page you do not know may not be the real copy of the app. When you can, install from a known store and check the developer name you see. The file name alone does not show that it is safe.",
      ],
      [
        "APK bir Android uygulamasının kurulum dosyasıdır. Mağaza bu dosyayı genellikle sizin yerinize açar ve kurar. Dosyayı kendiniz kaydedip açınca telefon ek izin isteyebilir.",
        "Tanımadığınız bir sayfadan gelen APK uygulamanın gerçek kopyası olmayabilir. Mümkünse uygulamayı bilinen mağazadan ve gördüğünüz geliştirici adıyla kurun. Dosya adı tek başına güvenli olduğunu göstermez.",
      ],
      [
        "APK هو ملف تثبيت تطبيق Android. المتجر عادة يفتح هذا الملف ويثبّته عنك. إذا حفظت الملف وفتحته بنفسك فقد يطلب الهاتف صلاحية إضافية.",
        "قد لا يكون APK القادم من صفحة لا تعرفها النسخة الحقيقية للتطبيق. إن أمكن، ثبّت من متجر معروف وتحقق من اسم المطوّر الذي تراه. اسم الملف وحده لا يدل على أنه آمن.",
      ],
      [
        "APK — файл установки приложения Android. Магазин обычно открывает и ставит его за вас. Если сохранить и открыть файл самому, телефон может спросить дополнительное разрешение.",
        "APK с незнакомой страницы может не быть настоящей копией приложения. Если можно, ставьте из известного магазина и проверьте имя разработчика. Одно имя файла не показывает, что он безопасен.",
      ],
    ),
  },
  {
    topic: "android",
    slug: "telefonda-tetbiq-qurasdirmaq",
    title: t("Telefonda tətbiq necə quraşdırılır?", "How do you install an app on a phone?", "Telefonda uygulama nasıl kurulur?", "كيف تثبّت تطبيقًا على الهاتف؟", "Как установить приложение на телефон?"),
    description: t(
      "Tətbiqi mağazada adıyla axtarın, geliştirici adını yoxlayın, sonra qurun.",
      "Search the store for the app name, check the developer, then install.",
      "Uygulamayı mağazada adıyla arayın, geliştirici adını kontrol edin, sonra kurun.",
      "ابحث في المتجر عن اسم التطبيق، راجع اسم المطوّر، ثم ثبّت.",
      "Найдите приложение в магазине по имени, проверьте разработчика и установите.",
    ),
    keywords: t("tətbiq quraşdırmaq, Android tətbiq", "install an Android app", "uygulama kurmak, Android uygulama", "تثبيت تطبيق Android", "установить приложение Android"),
    paragraphs: b(
      [
        "Ən sadə yol telefonun öz mağazasını açmaq və tətbiqin adını axtarmaqdır. Eyni ada oxşayan başqa tətbiqlər də çıxa bilər. Quraşdırmadan əvvəl geliştirici adını və şəkli yoxlayın.",
        "Mağaza yoxdursa və faylı özünüz açmalısınızsa, yalnız güvəndiyiniz ünvandan gələn faylı açın. Telefon həmin mənbəyə icazə istəyəndə bunun nə açdığını oxuyun.",
      ],
      [
        "The simplest way is to open the phone's own store and search for the app name. Other apps with a similar name can appear. Check the developer name and the icon before you install.",
        "If there is no store and you must open a file yourself, open only a file that came from a place you trust. When the phone asks permission for that source, read what it opens.",
      ],
      [
        "En sade yol telefonun kendi mağazasını açıp uygulamanın adını aramaktır. Benzer adla başka uygulamalar da çıkabilir. Kurmadan önce geliştirici adını ve simgeyi kontrol edin.",
        "Mağaza yoksa ve dosyayı kendiniz açmanız gerekiyorsa yalnızca güvendiğiniz adresten gelen dosyayı açın. Telefon o kaynağa izin isteyince ne açtığını okuyun.",
      ],
      [
        "أبسط طريق هو فتح متجر الهاتف نفسه والبحث عن اسم التطبيق. قد تظهر تطبيقات أخرى باسم قريب. راجع اسم المطوّر والأيقونة قبل التثبيت.",
        "إذا لم يوجد متجر وكان عليك فتح الملف بنفسك، فافتح فقط ملفًا جاء من جهة تثق بها. حين يطلب الهاتف الإذن لذلك المصدر اقرأ ما الذي يفتحه.",
      ],
      [
        "Самый простой путь — открыть магазин самого телефона и найти имя приложения. Могут выйти другие приложения с похожим именем. До установки проверьте имя разработчика и значок.",
        "Если магазина нет и файл нужно открыть самому, открывайте только файл с адреса, которому доверяете. Когда телефон просит разрешение для этого источника, прочитайте, что оно открывает.",
      ],
    ),
    steps: b(
      ["Telefonun mağazasını açın.", "Tətbiqin dəqiq adını axtarın.", "Geliştirici adını yoxlayın.", "Sonra quraşdırın və açılıb-açılmadığını görün."],
      ["Open the phone's store.", "Search for the exact app name.", "Check the developer name.", "Then install and see that it opens."],
      ["Telefonun mağazasını açın.", "Uygulamanın tam adını arayın.", "Geliştirici adını kontrol edin.", "Sonra kurun ve açılıp açılmadığına bakın."],
      ["افتح متجر الهاتف.", "ابحث عن اسم التطبيق الدقيق.", "راجع اسم المطوّر.", "ثم ثبّت وانظر هل يفتح."],
      ["Откройте магазин телефона.", "Найдите точное имя приложения.", "Проверьте имя разработчика.", "Потом установите и посмотрите, открывается ли оно."],
    ),
  },
  {
    topic: "android",
    slug: "tetbiq-icazeleri",
    title: t("Tətbiq icazələri nə deməkdir?", "What do app permissions mean?", "Uygulama izinleri ne demektir?", "ماذا تعني صلاحيات التطبيق؟", "Что значат разрешения приложения?"),
    description: t(
      "İcazə tətbiqin kameraya, fayla və ya bildirişə girib-girmədiyini müəyyən edir.",
      "A permission decides whether an app can reach the camera, files, or notifications.",
      "İzin, uygulamanın kameraya, dosyaya veya bildirime girip girmediğini belirler.",
      "الصلاحية تحدد هل يصل التطبيق إلى الكاميرا أو الملفات أو التنبيهات.",
      "Разрешение решает, получает ли приложение камеру, файлы или уведомления.",
    ),
    keywords: t("tətbiq icazəsi, Android icazə", "app permission, Android permission", "uygulama izni, Android izin", "صلاحية التطبيق", "разрешение приложения"),
    paragraphs: b(
      [
        "İcazə tətbiqin telefonun bir hissəsinə girməsinə verilən razılıqdır. Kamera, şəkillər, mikrofon və bildiriş ayrı-ayrı icazələrdir. Tətbiqin gördüyü iş üçün lazım olmayan icazəni vermək məcburi deyil.",
        "İcazəni sonra ayarlardan bağlamaq olar. Bağlanan icazə həmin işi dayandıra bilər. Məsələn, kameranı bağlasanız, skan başlaya bilməz. Bu, tətbiqin qalan hissəsinin hamısını silmir.",
      ],
      [
        "A permission is consent for an app to enter one part of the phone. Camera, photos, microphone, and notifications are separate permissions. You do not have to allow one the app does not need for the job you see.",
        "You can turn a permission off later in settings. Closing it can stop that job. For example, if you turn the camera off, a scan cannot start. That does not delete the rest of the app.",
      ],
      [
        "İzin, uygulamanın telefonun bir bölümüne girmesine verilen onayıdır. Kamera, fotoğraflar, mikrofon ve bildirim ayrı izinlerdir. Gördüğünüz iş için gerekmeyen izni vermek zorunlu değildir.",
        "İzni sonra ayarlardan kapatabilirsiniz. Kapatmak o işi durdurabilir. Örneğin kamerayı kapatırsanız tarama başlayamaz. Bu, uygulamanın kalanını silmez.",
      ],
      [
        "الصلاحية إذن للتطبيق بدخول جزء من الهاتف. الكاميرا والصور والميكروفون والتنبيهات صلاحيات منفصلة. لست ملزمًا بإعطاء صلاحية لا يحتاجها العمل الذي تراه.",
        "يمكن إغلاق الصلاحية لاحقًا من الإعدادات. إغلاقها قد يوقف ذلك العمل. مثلًا إذا أغلقت الكاميرا فلن يبدأ المسح. هذا لا يحذف بقية التطبيق.",
      ],
      [
        "Разрешение — согласие приложению войти в одну часть телефона. Камера, фото, микрофон и уведомления — отдельные разрешения. Необязательно давать то, без чего видимая работа не делается.",
        "Разрешение потом можно закрыть в настройках. Закрытие может остановить эту работу. Например, без камеры скан не начнётся. Это не удаляет остальное приложение.",
      ],
    ),
  },
  {
    topic: "fayl-aletleri",
    slug: "fayl-formati-nedir",
    title: t("Fayl formatı nədir?", "What is a file format?", "Dosya biçimi nedir?", "ما هي صيغة الملف؟", "Что такое формат файла?"),
    description: t(
      "Format proqrama faylı necə oxuyacağını deyir. Adı dəyişmək formatı dəyişmir.",
      "A format tells a program how to read the file. Renaming it does not change the format.",
      "Biçim, programa dosyayı nasıl okuyacağını söyler. Adını değiştirmek biçimi değiştirmez.",
      "الصيغة تخبر البرنامج كيف يقرأ الملف. تغيير الاسم لا يغيّر الصيغة.",
      "Формат говорит программе, как читать файл. Смена имени формат не меняет.",
    ),
    keywords: t("fayl formatı nədir", "what is a file format", "dosya biçimi nedir", "صيغة الملف", "формат файла"),
    paragraphs: b(
      [
        "Fayl formatı onun içinin necə düzüldüyünü göstərir. Şəkil, mətn və PDF eyni sözləri daşıya bilər, amma proqram onları eyni üsulla oxumur. Sonluq, məsələn .pdf və ya .jpg, buna işarədir.",
        "Sonluğu əl ilə dəyişmək faylı çevirmir. .jpg adını .pdf etmək şəkli sənəd etmir. Çevirmək üçün faylı həmin işi görən alətdə açmaq lazımdır.",
      ],
      [
        "A file format shows how its inside is arranged. A picture, a text file, and a PDF can carry the same words, but a program does not read them the same way. An ending such as .pdf or .jpg is a hint.",
        "Changing the ending by hand does not convert the file. Naming a .jpg as .pdf does not turn the picture into a document. To convert it, open the file in a tool that does that job.",
      ],
      [
        "Dosya biçimi içinin nasıl dizildiğini gösterir. Fotoğraf, metin ve PDF aynı sözleri taşıyabilir, ama program onları aynı yolla okumaz. .pdf veya .jpg gibi uzantı buna işarettir.",
        "Uzantıyı elle değiştirmek dosyayı dönüştürmez. .jpg adını .pdf yapmak fotoğrafı belge yapmaz. Dönüştürmek için dosyayı o işi yapan araçta açmak gerekir.",
      ],
      [
        "صيغة الملف تُظهر كيف رُتّب داخله. قد تحمل الصورة وملف النص وPDF الكلمات نفسها، لكن البرنامج لا يقرأها بالطريقة نفسها. الامتداد مثل pdf أو jpg إشارة إلى ذلك.",
        "تغيير الامتداد يدويًا لا يحوّل الملف. جعل اسم jpg يصبح pdf لا يجعل الصورة مستندًا. للتحويل افتح الملف في أداة تقوم بذلك العمل.",
      ],
      [
        "Формат файла показывает, как устроена его внутренность. Картинка, текст и PDF могут нести одни слова, но программа читает их не одинаково. Окончание вроде .pdf или .jpg — подсказка.",
        "Ручная смена окончания файл не конвертирует. Назвать .jpg как .pdf не делает картинку документом. Для перевода откройте файл в инструменте, который это умеет.",
      ],
    ),
  },
  {
    topic: "fayl-aletleri",
    slug: "fayl-novleri",
    title: t("Fayl növləri nə ilə fərqlənir?", "How do file types differ?", "Dosya türleri neyle ayrılır?", "كيف تختلف أنواع الملفات؟", "Чем отличаются виды файлов?"),
    description: t(
      "Mətn, şəkil, PDF və arxiv eyni iş üçün deyil. Hər biri başqa proqramda açılır.",
      "Text, an image, a PDF, and an archive are not for the same job. Each opens in a different program.",
      "Metin, görsel, PDF ve arşiv aynı iş için değildir. Her biri başka programda açılır.",
      "النص والصورة وPDF والأرشيف ليست لعمل واحد. كل واحد يُفتح في برنامج مختلف.",
      "Текст, картинка, PDF и архив не для одной работы. Каждый открывается другой программой.",
    ),
    keywords: t("fayl növləri, şəkil, PDF, mətn faylı", "file types, image, PDF, text file", "dosya türleri, görsel, PDF, metin dosyası", "أنواع الملفات, صورة, PDF, ملف نص", "виды файлов, изображение, PDF, текстовый файл"),
    paragraphs: b(
      [
        "Mətn faylı yazını saxlayır və adətən sadə açılır. Şəkil görüntünü saxlayır. PDF isə səhifənin görünüşünü bir yerdə tutmaq üçündür. Arxiv bir neçə faylı bir bağlamada toplayır.",
        "Bir növü başqa növün işinə məcbur etmək nəticəni pozur. Şəklin içindəki yazını seçmək olmaya bilər. PDF-dəki yazı isə həqiqi mətn olanda seçilir. Fərqi açılışda yoxlamaq olar.",
      ],
      [
        "A text file stores writing and usually opens simply. An image stores a picture. A PDF is for keeping the look of a page together. An archive packs several files into one bundle.",
        "Forcing one type to do another type's job breaks the result. You may not be able to select writing inside a picture. Writing in a PDF can be selected when it is real text. You can check the difference by opening it.",
      ],
      [
        "Metin dosyası yazıyı saklar ve genellikle sade açılır. Görsel, görüntüyü saklar. PDF ise sayfanın görünüşünü bir arada tutmak içindir. Arşiv birkaç dosyayı bir pakette toplar.",
        "Bir türü başka türün işine zorlamak sonucu bozar. Görselin içindeki yazı seçilemeyebilir. PDF'deki yazı gerçek metinse seçilir. Farkı açınca kontrol etmek olur.",
      ],
      [
        "ملف النص يحفظ الكتابة ويُفتح عادة ببساطة. الصورة تحفظ الشكل. وPDF لإبقاء مظهر الصفحة معًا. والأرشيف يجمع عدة ملفات في حزمة.",
        "إجبار نوع على عمل نوع آخر يفسد النتيجة. قد لا يمكن تحديد الكتابة داخل صورة. أما الكتابة في PDF فتُحدَّد إذا كانت نصًا حقيقيًا. يمكن فحص الفرق عند الفتح.",
      ],
      [
        "Текстовый файл хранит письмо и обычно открывается просто. Картинка хранит изображение. PDF нужен, чтобы держать вид страницы вместе. Архив собирает несколько файлов в одну пачку.",
        "Заставлять один вид делать работу другого портит результат. Текст внутри картинки может не выделяться. Текст в PDF выделяется, когда это настоящий текст. Разницу видно при открытии.",
      ],
    ),
  },
  {
    topic: "fayl-aletleri",
    slug: "fayli-kiciltmek",
    title: t("Faylı nə vaxt kiçiltmək lazımdır?", "When should you make a file smaller?", "Dosyayı ne zaman küçültmek gerekir?", "متى يُصغَّر الملف؟", "Когда уменьшать файл?"),
    description: t(
      "Fayl mesaja sığmayanda kiçildilir. Artıq kiçik mətn faylı az dəyişir.",
      "Make a file smaller when it does not fit in a message. An already small text file changes little.",
      "Dosya mesaja sığmayınca küçültülür. Zaten küçük metin dosyası az değişir.",
      "يُصغَّر الملف حين لا يسعه الرسالة. ملف النص الصغير أصلًا لا يتغير كثيرًا.",
      "Файл уменьшают, когда он не входит в сообщение. И без того маленький текст почти не меняется.",
    ),
    keywords: t("faylı kiçiltmək, fayl həcmi", "make a file smaller, file size", "dosyayı küçültmek, dosya boyutu", "تصغير الملف, حجم الملف", "уменьшить файл, размер файла"),
    paragraphs: b(
      [
        "Faylı kiçiltmək onu göndərmək və ya saxlamaq çətin olanda lazımdır. Ən çox yer tutanlar şəkil və içində şəkil olan PDF-dir. Qısa mətn faylı kiçildikdən sonra az dəyişir.",
        "Həddindən artıq kiçiltmək yazını və xətləri bulandırır. Nəticəni göndərməzdən əvvəl açın. Oxunmursa, daha az sıxılmış nüsxəni saxlayın.",
      ],
      [
        "Making a file smaller is useful when sending or keeping it is hard. Pictures, and PDFs that contain pictures, take the most room. A short text file changes little after it is reduced.",
        "Reducing it too far blurs writing and lines. Open the result before you send it. If it is not readable, keep a less compressed copy.",
      ],
      [
        "Dosyayı küçültmek göndermek veya saklamak zor olduğunda gerekir. En çok yer tutanlar görsel ve içinde görsel olan PDF'dir. Kısa metin dosyası küçülünce az değişir.",
        "Aşırı küçültmek yazıyı ve çizgileri bulanıklaştırır. Sonucu göndermeden önce açın. Okunmuyorsa daha az sıkıştırılmış kopyayı saklayın.",
      ],
      [
        "تصغير الملف يلزم حين يصعب إرساله أو حفظه. الصور وPDF الذي فيه صور تأخذ أكبر مساحة. ملف النص القصير لا يتغير كثيرًا بعد التصغير.",
        "التصغير الزائد يغبّش الكتابة والخطوط. افتح الناتج قبل الإرسال. إذا لم يُقرأ فاحفظ نسخة أقل ضغطًا.",
      ],
      [
        "Уменьшать файл нужно, когда его трудно отправить или хранить. Больше всего места занимают картинки и PDF с картинками внутри. Короткий текст после уменьшения почти не меняется.",
        "Слишком сильное уменьшение размывает буквы и линии. Откройте результат до отправки. Если не читается, оставьте менее сжатую копию.",
      ],
    ),
  },
  {
    topic: "fayl-aletleri",
    slug: "fayl-adini-saxlamaq",
    title: t("Fayl adını necə saxlamaq olar?", "How should you name a file?", "Dosya adı nasıl konur?", "كيف تسمي الملف؟", "Как называть файл?"),
    description: t(
      "Aydın ad faylı sonra tapmağı asanlaşdırır. Əsli, yeni nüsxə yoxlanana qədər silməyin.",
      "A clear name makes the file easier to find later. Do not delete the original until the new copy is checked.",
      "Açık ad dosyayı sonra bulmayı kolaylaştırır. Aslını, yeni kopya kontrol edilene kadar silmeyin.",
      "الاسم الواضح يسهّل إيجاد الملف لاحقًا. لا تحذف الأصل حتى تُفحص النسخة الجديدة.",
      "Понятное имя помогает найти файл позже. Не удаляйте оригинал, пока новая копия не проверена.",
    ),
    keywords: t("fayl adı, faylı adlandırmaq", "file name, name a file", "dosya adı, dosyayı adlandırmak", "اسم الملف", "имя файла"),
    paragraphs: b(
      [
        "Faylın adı onun nə olduğunu qısa deməlidir. Tarix və ya sənədin işi adın içinə düşə bilər. «yeni», «son» və təsadüfi rəqəm bir həftə sonra heç nə demir.",
        "Yeni nüsxəni yoxlamadan əsli silmək riskdir. Birləşdirilmiş və ya kiçildilmiş fayl açılır və səhifə sayı durursa, köhnəni saxlamaq və ya silmək sizin seçiminizdir.",
      ],
      [
        "A file name should say shortly what it is. A date or the job of the document can sit in the name. Words like new, final, and a random number say nothing a week later.",
        "Deleting the original before you check the new copy is a risk. If the merged or reduced file opens and the page count is there, keeping or deleting the old one is your choice.",
      ],
      [
        "Dosya adı ne olduğunu kısa söylemeli. Tarih veya belgenin işi adın içine girebilir. «yeni», «son» ve rastgele sayı bir hafta sonra hiçbir şey demez.",
        "Yeni kopyayı kontrol etmeden aslı silmek risktir. Birleşen veya küçülen dosya açılıyor ve sayfa sayısı duruyorsa eskisini saklamak veya silmek sizin seçiminizdir.",
      ],
      [
        "يجب أن يقول اسم الملف باختصار ما هو. يمكن أن يدخل التاريخ أو عمل المستند في الاسم. كلمات مثل جديد ونهائي ورقم عشوائي لا تقول شيئًا بعد أسبوع.",
        "حذف الأصل قبل فحص النسخة الجديدة مخاطرة. إذا فُتح الملف المدموج أو المصغّر وبقي عدد الصفحات، فإبقاء القديم أو حذفه اختيارك.",
      ],
      [
        "Имя файла должно коротко говорить, что это. Дата или дело документа могут стоять в имени. Слова «новый», «финал» и случайное число через неделю ничего не значат.",
        "Удалять оригинал до проверки новой копии рискованно. Если объединённый или уменьшенный файл открывается и число страниц на месте, старый можно оставить или удалить — это ваш выбор.",
      ],
    ),
  },
  {
    topic: "tehsil",
    slug: "qisa-mesq",
    title: t("Qısa məşq nə üçün faydalıdır?", "Why is a short practice useful?", "Kısa çalışma neden faydalıdır?", "لماذا يفيد التمرين القصير؟", "Зачем нужна короткая практика?"),
    description: t(
      "Tez-tez edilən qısa məşq, ara-sıra edilən uzun məşqdən daha çox qalır.",
      "A short practice done often stays longer than a long one done rarely.",
      "Sık yapılan kısa çalışma, ara sıra yapılan uzun çalışmadan daha çok kalır.",
      "التمرين القصير المتكرر يبقى أكثر من تمرين طويل نادر.",
      "Короткая частая практика остаётся дольше редкой длинной.",
    ),
    keywords: t("qısa məşq, öyrənmək", "short practice, learning", "kısa çalışma, öğrenmek", "تمرين قصير, تعلم", "короткая практика, учёба"),
    paragraphs: b(
      [
        "Qısa məşq bir oturuşda az şeyi təkrar etməkdir. Diqqət tez dağılmır və ertəsi gün yenidən başlamaq asan olur. Uzun və nadir məşq isə aradakı günləri boş saxlayır.",
        "Məqsəd bir gündə hər şeyi bitirmək deyil. Bir neçə hərf, bir neçə söz və ya bir neçə səhifə kifayətdir. Bitməyən böyük plan çox vaxt heç başlamır.",
      ],
      [
        "A short practice repeats a little in one sitting. Attention does not scatter as fast, and it is easier to start again the next day. A long rare session leaves the days between empty.",
        "The aim is not to finish everything in one day. A few letters, a few words, or a few pages are enough. A large plan that never ends often never starts.",
      ],
      [
        "Kısa çalışma bir oturuşta az şeyi tekrar etmektir. Dikkat çabuk dağılmaz ve ertesi gün yeniden başlamak kolay olur. Uzun ve seyrek çalışma ise aradaki günleri boş bırakır.",
        "Amaç bir günde her şeyi bitirmek değildir. Birkaç harf, birkaç kelime veya birkaç sayfa yeter. Bitmeyen büyük plan çoğu zaman hiç başlamaz.",
      ],
      [
        "التمرين القصير هو تكرار شيء قليل في جلسة واحدة. لا يتشتت الانتباه بسرعة، ويسهل البدء من جديد في اليوم التالي. أما الجلسة الطويلة النادرة فتترك الأيام بينها فارغة.",
        "الهدف ليس إنهاء كل شيء في يوم. تكفي حروف قليلة أو كلمات قليلة أو صفحات قليلة. الخطة الكبيرة التي لا تنتهي غالبًا لا تبدأ.",
      ],
      [
        "Короткая практика — повторить немного за один раз. Внимание не рассыпается так быстро, и назавтра легче начать снова. Редкое долгое занятие оставляет дни между ним пустыми.",
        "Цель не закончить всё за день. Хватает нескольких букв, слов или страниц. Большой план, который не кончается, часто и не начинается.",
      ],
    ),
  },
  {
    topic: "tehsil",
    slug: "gundelik-tekrar",
    title: t("Gündəlik təkrar nə üçündür?", "What is daily review for?", "Günlük tekrar ne işe yarar?", "لماذا المراجعة اليومية؟", "Зачем ежедневный повтор?"),
    description: t(
      "Dünən öyrəniləni bu gün qısa yoxlamaq, yeni materialın üstünü boş qoymur.",
      "A short check of yesterday's material keeps today's new material from covering an empty gap.",
      "Dün öğrenileni bugün kısa yoklamak, yeni malzemenin altını boş bırakmaz.",
      "فحص قصير لما تعلمته أمس يمنع أن يغطي الجديد فراغًا.",
      "Короткая проверка вчерашнего не даёт новому лечь на пустое место.",
    ),
    keywords: t("gündəlik təkrar, təkrar etmək", "daily review", "günlük tekrar", "مراجعة يومية", "ежедневный повтор"),
    paragraphs: b(
      [
        "Yeni material köhnənin üstünə gələndə köhnə yoxlanmayıbsa, hər ikisi qarışır. Gündəlik təkrar dünənki az şeyi bu gün yenidən görməkdir. Bu, uzun dərs deyil.",
        "Təkrar səhv olan yeri göstərir. Hamısını düz xatırlayırsınızsa, yeni hissəyə keçmək ağlabatandır. Xatırlamırsınızsa, yeni siyahı əlavə etmək boşluğu böyüdür.",
      ],
      [
        "When new material lands on old material that was not checked, both get mixed. Daily review means seeing yesterday's small part again today. It is not a long lesson.",
        "Review shows the place that is wrong. If you remember it, moving to a new part is reasonable. If you do not, adding a new list makes the gap larger.",
      ],
      [
        "Yeni malzeme kontrol edilmemiş eskinin üstüne gelince ikisi karışır. Günlük tekrar, dünkü az şeyi bugün yeniden görmektir. Bu, uzun ders değildir.",
        "Tekrar yanlış yeri gösterir. Hepsini doğru hatırlıyorsanız yeni kısma geçmek mantıklıdır. Hatırlamıyorsanız yeni liste eklemek boşluğu büyütür.",
      ],
      [
        "حين يأتي الجديد فوق قديم لم يُفحص يختلط الاثنان. المراجعة اليومية أن ترى الجزء الصغير من الأمس مرة أخرى اليوم. ليست درسًا طويلًا.",
        "المراجعة تُظهر الموضع الخطأ. إذا تذكرته فالانتقال إلى جزء جديد معقول. إذا لم تتذكره فإضافة قائمة جديدة توسّع الفراغ.",
      ],
      [
        "Когда новое ложится на непроверенное старое, смешивается и то и другое. Ежедневный повтор — снова увидеть вчерашнюю малую часть. Это не длинный урок.",
        "Повтор показывает место ошибки. Если помните, переход к новой части разумен. Если нет, новый список увеличивает пустоту.",
      ],
    ),
  },
  {
    topic: "tehsil",
    slug: "oyreneni-yoxlamaq",
    title: t("Öyrəniləni necə yoxlamaq olar?", "How do you check what you learned?", "Öğrenilen nasıl yoklanır?", "كيف تختبر ما تعلمته؟", "Как проверить выученное?"),
    description: t(
      "Cavabı görməzdən əvvəl özünüz demək, baxıb tanımaqdan fərqlidir.",
      "Saying the answer before you see it is different from recognizing it while looking.",
      "Cevabı görmeden kendiniz söylemek, bakıp tanımakla aynı değildir.",
      "قول الجواب قبل رؤيته يختلف عن التعرف عليه وأنت تنظر.",
      "Сказать ответ до того, как его увидишь, не то же самое, что узнать его глазами.",
    ),
    keywords: t("öyrənməyi yoxlamaq, təkrar yoxlama", "check what you learned", "öğrenmeyi yoklamak", "اختبار التعلم", "проверить выученное"),
    paragraphs: b(
      [
        "Mətnə baxıb tanımaq hələ xatırlamaq deyil. Yoxlama cavabı bağlamazdan əvvəl özünüz deməkdir. Səhv çıxan yer öyrənilməmiş yerdir.",
        "Yoxlama uzun imtahan olmamalıdır. Bir neçə sual kifayətdir. Səhvi dərhal gizlətmək əvəzinə həmin sualı təkrara qaytarın.",
      ],
      [
        "Recognizing a text while you look at it is not yet remembering it. A check means saying the answer before it is uncovered. The place you miss is the place not learned.",
        "The check does not need to be a long exam. A few questions are enough. Instead of hiding a mistake at once, send that question back to review.",
      ],
      [
        "Metne bakıp tanımak henüz hatırlamak değildir. Yoklama, cevabı açmadan önce kendiniz söylemektir. Yanlış çıkan yer öğrenilmemiş yerdir.",
        "Yoklama uzun sınav olmak zorunda değildir. Birkaç soru yeter. Hatayı hemen gizlemek yerine o soruyu tekrara geri koyun.",
      ],
      [
        "التعرف على النص وأنت تنظر إليه ليس تذكرًا بعد. الاختبار أن تقول الجواب قبل كشفه. الموضع الذي تخطئ فيه هو ما لم يُتعلم.",
        "لا يلزم أن يكون الاختبار امتحانًا طويلًا. تكفي أسئلة قليلة. بدل إخفاء الخطأ فورًا أعد ذلك السؤال إلى المراجعة.",
      ],
      [
        "Узнать текст, глядя на него, ещё не значит помнить. Проверка — сказать ответ до того, как он открыт. Место ошибки — то, что не выучено.",
        "Проверка не должна быть длинным экзаменом. Хватает нескольких вопросов. Не прячьте ошибку сразу: верните этот вопрос в повтор.",
      ],
    ),
  },
  {
    topic: "tehsil",
    slug: "kartlarla-tekrar",
    title: t("Kartlarla təkrar necə işləyir?", "How does review with cards work?", "Kartlarla tekrar nasıl işler?", "كيف يعمل التكرار بالبطاقات؟", "Как работает повтор карточками?"),
    description: t(
      "Kartın bir üzündə sual, o biri üzündə cavab durur. Əvvəl cavabı özünüz deyin.",
      "One side of a card holds the question, the other the answer. Say the answer first.",
      "Kartın bir yüzünde soru, ötekinde cevap durur. Önce cevabı kendiniz söyleyin.",
      "وجه البطاقة فيه السؤال والآخر فيه الجواب. قل الجواب أولًا.",
      "На одной стороне карточки вопрос, на другой ответ. Сначала скажите ответ сами.",
    ),
    keywords: t("kartlarla təkrar, öyrənmə kartı", "review cards, flashcards", "kartlarla tekrar", "بطاقات المراجعة", "карточки для повтора"),
    paragraphs: b(
      [
        "Kart bir sualı bir cavabdan ayırır. Üzünü görəndə cavabı deməyə çalışın, sonra çevirin. Bir kartın üstündə çox məlumat olsa, o, kart yox, kiçik səhifə olur.",
        "Düz bildiyiniz kartı kənara qoyun. Səhv və ya gec cavab verdiyinizi təkrarda saxlayın. Belə bölmə vaxtı hamını eyni sayda çevirməyə sərf etmir.",
      ],
      [
        "A card separates one question from one answer. When you see the front, try to say the answer, then turn it. If a card holds too much, it is a small page, not a card.",
        "Set aside the card you know. Keep the one you miss or answer slowly in the review pile. That split does not spend the time turning every card the same number of times.",
      ],
      [
        "Kart bir soruyu bir cevaptan ayırır. Yüzünü görünce cevabı söylemeye çalışın, sonra çevirin. Bir kartta çok bilgi varsa o, kart değil küçük sayfadır.",
        "Doğru bildiğiniz kartı kenara koyun. Yanlış veya geç cevapladığınızı tekrarda tutun. Bu ayrım zamanı hepsini aynı sayıda çevirmeye harcamaz.",
      ],
      [
        "البطاقة تفصل سؤالًا واحدًا عن جواب واحد. حين ترى الوجه حاول أن تقول الجواب ثم اقلب. إذا حملت البطاقة معلومات كثيرة صارت صفحة صغيرة لا بطاقة.",
        "نحِّ البطاقة التي عرفتها. وأبقِ التي أخطأتها أو أجبتها ببطء في المراجعة. هذا الفصل لا يصرف الوقت في قلب كل البطاقات بالعدد نفسه.",
      ],
      [
        "Карточка отделяет один вопрос от одного ответа. Увидев лицо, попробуйте сказать ответ, потом переверните. Если на карточке слишком много, это маленькая страница, а не карточка.",
        "Отложите ту, которую знаете. Ошибочную или медленную оставьте в повторе. Так время не уходит на одинаковое число переворотов каждой карточки.",
      ],
    ),
  },
  {
    topic: "senedler",
    slug: "sened-nedir",
    title: t("Sənəd nədir?", "What is a document?", "Belge nedir?", "ما هو المستند؟", "Что такое документ?"),
    description: t(
      "Sənəd oxumaq, saxlamaq və başqasına göndərmək üçün tutulan fayldır.",
      "A document is a file kept so it can be read, stored, and sent.",
      "Belge okumak, saklamak ve başkasına göndermek için tutulan dosyadır.",
      "المستند ملف يُحفظ ليُقرأ ويُخزَّن ويُرسل.",
      "Документ — файл, который хранят, чтобы читать, держать и отправлять.",
    ),
    keywords: t("sənəd nədir", "what is a document", "belge nedir", "ما هو المستند", "что такое документ"),
    paragraphs: b(
      [
        "Sənəd bir işi və ya məlumatı sonradan oxumaq üçün saxlanan fayldır. Məktub, forma, müqavilə səhifəsi və skan olunmuş vərəq bu mənada sənəddir. Şəkil albomu və ya musiqi faylı adətən bu iş üçün tutulmur.",
        "Sənədin dəyəri onun açılıb oxuna bilməsindədir. Adı aydın, səhifə sırası düz və ikinci nüsxəsi olan sənəd göndəriləndə az problem çıxarır.",
      ],
      [
        "A document is a file kept so a task or a piece of information can be read later. A letter, a form, a contract page, and a scanned sheet are documents in this sense. A photo album or a music file is usually not kept for that job.",
        "A document is useful when it can be opened and read. One with a clear name, a straight page order, and a second copy causes fewer problems when it is sent.",
      ],
      [
        "Belge bir işi veya bilgiyi sonra okumak için saklanan dosyadır. Mektup, form, sözleşme sayfası ve taranmış kâğıt bu anlamda belgedir. Fotoğraf albümü veya müzik dosyası genellikle bu iş için tutulmaz.",
        "Belgenin değeri açılıp okunabilmesindedir. Adı açık, sayfa sırası düz ve ikinci kopyası olan belge gönderilince az sorun çıkarır.",
      ],
      [
        "المستند ملف يُحفظ ليُقرأ لاحقًا عمل أو معلومة. الرسالة والنموذج وصفحة العقد والورقة الممسوحة مستندات بهذا المعنى. ألبوم الصور أو ملف الموسيقى لا يُحفظ عادة لهذا العمل.",
        "قيمة المستند في إمكان فتحه وقراءته. المستند ذو الاسم الواضح وترتيب الصفحات السليم والنسخة الثانية يسبب مشاكل أقل عند الإرسال.",
      ],
      [
        "Документ — файл, который хранят, чтобы позже прочитать дело или сведения. Письмо, бланк, страница договора и отсканированный лист в этом смысле документы. Альбом фото или музыкальный файл обычно для этого не держат.",
        "Польза документа в том, что его можно открыть и прочитать. Понятное имя, прямой порядок страниц и вторая копия дают меньше проблем при отправке.",
      ],
    ),
  },
  {
    topic: "senedler",
    slug: "skan-ve-metn",
    title: t("Skan ilə mətnli sənəd nə ilə fərqlənir?", "How does a scan differ from a text document?", "Tarama ile metin belgesi neyle ayrılır?", "ما الفرق بين المسح والمستند النصي؟", "Чем скан отличается от текстового документа?"),
    description: t(
      "Skan əvvəl şəkildir. Yazını seçə bilirsinizsə, sənəddə həqiqi mətn var.",
      "A scan starts as a picture. If you can select the writing, the document has real text.",
      "Tarama önce görüntüdür. Yazıyı seçebiliyorsanız belgede gerçek metin vardır.",
      "المسح يبدأ صورة. إذا أمكن تحديد الكتابة ففي المستند نص حقيقي.",
      "Скан сначала картинка. Если текст выделяется, в документе настоящий текст.",
    ),
    keywords: t("skan, mətnli sənəd, mətn tanıma", "scan, text document, text recognition", "tarama, metin belgesi, metin tanıma", "مسح, مستند نصي, التعرف على النص", "скан, текстовый документ, распознавание текста"),
    paragraphs: b(
      [
        "Skan kameranın və ya skanerin çəkdiyi səhifədir. Əvvəl o, şəkildir. İçindəki hərflər görünür, amma proqram onları yazı kimi tanıya bilməz. Mətn tanıma bu şəkildən yazı çıxarmağa çalışır.",
        "Mətnli sənəddə hərfləri barmaqla və ya siçanla seçmək olur. Seçilmirsə, səhifə hələ şəkildir. Tanıma adları və rəqəmləri səhv oxuya bilər, ona görə nəticəni gözlə yoxlamaq lazımdır.",
      ],
      [
        "A scan is a page taken by a camera or a scanner. At first it is a picture. The letters are visible, but a program may not know them as writing. Text recognition tries to pull writing out of that picture.",
        "In a text document you can select the letters with a finger or a mouse. If you cannot, the page is still a picture. Recognition can misread names and numbers, so the result needs a look.",
      ],
      [
        "Tarama kameranın veya tarayıcının çektiği sayfadır. Önce o, görüntüdür. İçindeki harfler görünür, ama program onları yazı olarak tanımayabilir. Metin tanıma bu görüntüden yazı çıkarmaya çalışır.",
        "Metin belgesinde harfleri parmakla veya fareyle seçmek olur. Seçilmiyorsa sayfa hâlâ görüntüdür. Tanıma adları ve rakamları yanlış okuyabilir, bu yüzden sonucu gözle kontrol etmek gerekir.",
      ],
      [
        "المسح صفحة التقطتها الكاميرا أو الماسح. هو في أوله صورة. الحروف ظاهرة لكن البرنامج قد لا يعرفها كتابة. التعرف على النص يحاول استخراج الكتابة من تلك الصورة.",
        "في المستند النصي يمكن تحديد الحروف بالإصبع أو الفأرة. إذا لم تُحدَّد فالصفحة ما زالت صورة. قد يخطئ التعرف في الأسماء والأرقام، لذلك يلزم نظر إلى النتيجة.",
      ],
      [
        "Скан — страница, снятая камерой или сканером. Сначала это картинка. Буквы видны, но программа может не знать их как текст. Распознавание пытается достать письмо из этой картинки.",
        "В текстовом документе буквы можно выделить пальцем или мышью. Если нет, страница всё ещё картинка. Распознавание может ошибиться в именах и числах, поэтому результат нужно посмотреть.",
      ],
    ),
  },
  {
    topic: "senedler",
    slug: "senedi-imzalamaq",
    title: t("Sənəd necə imzalanır?", "How do you sign a document?", "Belge nasıl imzalanır?", "كيف يُوقَّع المستند؟", "Как подписать документ?"),
    description: t(
      "İmza bu nüsxəni qəbul etdiyinizi göstərir. İmzalamazdan əvvəl səhifəni oxuyun.",
      "A signature shows that you accept this copy. Read the page before you sign.",
      "İmza bu kopyayı kabul ettiğinizi gösterir. İmzalamadan önce sayfayı okuyun.",
      "التوقيع يدل على أنك تقبل هذه النسخة. اقرأ الصفحة قبل التوقيع.",
      "Подпись показывает, что вы принимаете эту копию. Прочитайте страницу до подписи.",
    ),
    keywords: t("sənəd imzalamaq, PDF imza", "sign a document, PDF signature", "belge imzalamak, PDF imza", "توقيع مستند, توقيع PDF", "подписать документ, подпись PDF"),
    paragraphs: b(
      [
        "İmza sənədin bu nüsxəsinə razı olduğunuzu göstərən işarədir. Kağızda qələmlə, telefonda isə barmaq və ya qələm ilə çəkilə bilər. İmza şəkli sənədə əlavə olunanda həmin nüsxəni ayrıca saxlayın.",
        "İmzalamazdan əvvəl səhifə sayını və yazını yoxlayın. Boş və ya başqa səhifəyə düşmüş imza sənədi qarışdırır. İmzalanmış nüsxəni göndərdikdən sonra əsli də qalmalıdır.",
      ],
      [
        "A signature is a mark that you accept this copy of the document. On paper it is drawn with a pen. On a phone it can be drawn with a finger or a stylus. When the signature image is added, keep that copy separately.",
        "Before you sign, check the page count and the writing. A signature on a blank page or the wrong page mixes the document. After you send the signed copy, the original should still remain.",
      ],
      [
        "İmza belgenin bu kopyasını kabul ettiğinizi gösteren işarettir. Kâğıtta kalemle, telefonda parmak veya kalemle çizilebilir. İmza görseli belgeye eklenince o kopyayı ayrıca saklayın.",
        "İmzalamadan önce sayfa sayısını ve yazıyı kontrol edin. Boş veya yanlış sayfaya düşen imza belgeyi karıştırır. İmzalı kopyayı gönderdikten sonra asıl da kalmalıdır.",
      ],
      [
        "التوقيع علامة على أنك تقبل هذه النسخة من المستند. على الورق يُرسم بالقلم، وعلى الهاتف بالإصبع أو القلم. حين تُضاف صورة التوقيع احفظ تلك النسخة على حدة.",
        "قبل التوقيع راجع عدد الصفحات والكتابة. التوقيع على صفحة فارغة أو صفحة خاطئة يخلط المستند. بعد إرسال النسخة الموقّعة يجب أن يبقى الأصل أيضًا.",
      ],
      [
        "Подпись — знак, что вы принимаете эту копию документа. На бумаге её рисуют ручкой, на телефоне пальцем или пером. Когда изображение подписи добавлено, храните эту копию отдельно.",
        "До подписи проверьте число страниц и текст. Подпись на пустой или не той странице путает документ. После отправки подписанной копии оригинал тоже должен остаться.",
      ],
    ),
  },
  {
    topic: "senedler",
    slug: "senedin-nusxesi",
    title: t("Sənədin nüsxəsini nə üçün saxlamalı?", "Why keep a copy of a document?", "Belgenin kopyası neden saklanır?", "لماذا تحتفظ بنسخة من المستند؟", "Зачем хранить копию документа?"),
    description: t(
      "Göndərilən və ya dəyişdirilən sənədin ikinci nüsxəsi səhv əməldən sonra geri dönüşdür.",
      "A second copy of a sent or changed document is the way back after a mistake.",
      "Gönderilen veya değiştirilen belgenin ikinci kopyası yanlış işlemden sonra geri dönüştür.",
      "النسخة الثانية من مستند أُرسل أو غُيّر هي طريق الرجوع بعد خطأ.",
      "Вторая копия отправленного или изменённого документа — путь назад после ошибки.",
    ),
    keywords: t("sənəd nüsxəsi, ehtiyat nüsxə", "document copy, backup copy", "belge kopyası, yedek", "نسخة المستند, نسخة احتياطية", "копия документа, запасная копия"),
    paragraphs: b(
      [
        "Sənədi birləşdirmək, kiçiltmək və ya göndərmək əsli dəyişə bilər. İkinci nüsxə bu əməldən əvvəl saxlanılan fayldır. Əməliyyat səhv çıxanda həmin nüsxəyə qayıtmaq olur.",
        "Yalnız göndərilmiş faylı saxlamaq kifayət deyil. Mesajdan silinən və ya başqasının dəyişdirdiyi nüsxə sizdə qalmaya bilər. Öz nüsxəniz ayrı yerdə durmalıdır.",
      ],
      [
        "Merging, reducing, or sending a document can change the original. A second copy is the file kept before that action. If the action goes wrong, you can return to that copy.",
        "Keeping only the file you sent is not enough. A copy deleted from a message, or changed by someone else, may not remain with you. Your own copy should sit in a separate place.",
      ],
      [
        "Belgeyi birleştirmek, küçültmek veya göndermek aslı değiştirebilir. İkinci kopya bu işlemden önce saklanan dosyadır. İşlem yanlış çıkınca o kopyaya dönmek olur.",
        "Yalnızca gönderilmiş dosyayı saklamak yetmez. Mesajdan silinen veya başkasının değiştirdiği kopya sizde kalmayabilir. Kendi kopyanız ayrı yerde durmalıdır.",
      ],
      [
        "دمج المستند أو تصغيره أو إرساله قد يغيّر الأصل. النسخة الثانية هي الملف المحفوظ قبل ذلك العمل. إذا خرج العمل خطأ أمكن الرجوع إلى تلك النسخة.",
        "لا يكفي حفظ الملف المرسَل وحده. النسخة المحذوفة من الرسالة أو التي غيّرها غيرك قد لا تبقى عندك. نسختك يجب أن تقف في مكان منفصل.",
      ],
      [
        "Объединение, уменьшение или отправка документа могут изменить оригинал. Вторая копия — файл, сохранённый до этого действия. Если действие вышло неверным, к той копии можно вернуться.",
        "Хранить только отправленный файл недостаточно. Копия, удалённая из сообщения или изменённая другим человеком, может у вас не остаться. Своя копия должна лежать отдельно.",
      ],
    ),
  },
];

export function findResourceTopic(slug: string) {
  return RESOURCE_TOPICS.find((topic) => topic.slug === slug) ?? null;
}

export function articlesForTopic(slug: string) {
  return RESOURCE_ARTICLES.filter((article) => article.topic === slug);
}

export function findResourceArticle(topic: string, slug: string) {
  return RESOURCE_ARTICLES.find((article) => article.topic === topic && article.slug === slug) ?? null;
}

export function resourceArticleFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/resources\/([^/]+)\/([^/]+)$/);
  if (!match) return null;
  return findResourceArticle(match[1], match[2]);
}
