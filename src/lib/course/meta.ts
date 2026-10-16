import type { Lang } from "@/lib/i18n";

/** Sync metadata for the Python and HTML courses. Lesson bodies are lazy-loaded (see load.ts). */
export type L5 = Record<Lang, string>;
export const l5 = (az: string, en: string, tr: string, ar: string, ru: string): L5 => ({ az, en, tr, ar, ru });

export type CourseKind = "python" | "html";
export type SourceId = "own" | "book";

export type CoursePage = {
  slug: string;
  kind: CourseKind;
  source: SourceId;
  /** key of the lazy content file (data/<source>-<file>.json) or own content id */
  file: string;
  title: L5;
  description: L5;
  keywords: L5;
};

export const HUBS: Record<CourseKind, { slug: string; title: L5; description: L5; keywords: L5; intro: L5 }> = {
  python: {
    slug: "python-kurs",
    title: l5("Python dərsləri: sıfırdan öyrən", "Python lessons: learn from scratch", "Python dersleri: sıfırdan öğren", "دروس بايثون: تعلّم من الصفر", "Уроки Python: учимся с нуля"),
    description: l5(
      "Python-u addım-addım öyrən: Nibras Code-un yazdığı dərs fəsilləri və yeni başlayanların ən çox verdiyi suallara qısa cavablar.",
      "Learn Python step by step: lesson chapters written by Nibras Code and short answers to the questions beginners ask most.",
      "Python'u adım adım öğren: Nibras Code'un yazdığı ders bölümleri ve yeni başlayanların en çok sorduğu sorulara kısa cevaplar.",
      "تعلّم بايثون خطوة بخطوة: فصول دروس كتبها Nibras Code وإجابات قصيرة عن أكثر أسئلة المبتدئين.",
      "Изучайте Python шаг за шагом: главы уроков, написанные Nibras Code, и короткие ответы на частые вопросы новичков.",
    ),
    keywords: l5("Python dərsləri, Python öyrən, Python başlanğıc", "Python lessons, learn Python, Python for beginners", "Python dersleri, Python öğren, Python başlangıç", "دروس بايثون, تعلم بايثون, بايثون للمبتدئين", "уроки Python, учить Python, Python для начинающих"),
    intro: l5(
      "İki hissə var: sual-cavab səhifələri və ardıcıl dərs fəsilləri. Hamısı Nibras Code tərəfindən yazılıb və 5 dildə mövcuddur.",
      "There are two parts: question-and-answer pages and a sequence of lesson chapters. All of it is written by Nibras Code and available in 5 languages.",
      "İki bölüm var: soru-cevap sayfaları ve ardışık ders bölümleri. Hepsi Nibras Code tarafından yazıldı ve 5 dilde mevcut.",
      "هناك قسمان: صفحات أسئلة وأجوبة وفصول دروس متسلسلة. كتبها Nibras Code كلها وهي متاحة بخمس لغات.",
      "Два раздела: страницы «вопрос — ответ» и последовательные главы уроков. Всё написано Nibras Code и доступно на 5 языках.",
    ),
  },
  html: {
    slug: "html-kurs",
    title: l5("HTML dərsləri: sıfırdan öyrən", "HTML lessons: learn from scratch", "HTML dersleri: sıfırdan öğren", "دروس HTML: تعلّم من الصفر", "Уроки HTML: учимся с нуля"),
    description: l5(
      "HTML-i addım-addım öyrən: Nibras Code-un yazdığı dərs fəsilləri və yeni başlayanların ən çox verdiyi suallara qısa cavablar.",
      "Learn HTML step by step: lesson chapters written by Nibras Code and short answers to the questions beginners ask most.",
      "HTML'yi adım adım öğren: Nibras Code'un yazdığı ders bölümleri ve yeni başlayanların en çok sorduğu sorulara kısa cevaplar.",
      "تعلّم HTML خطوة بخطوة: فصول دروس كتبها Nibras Code وإجابات قصيرة عن أكثر أسئلة المبتدئين.",
      "Изучайте HTML шаг за шагом: главы уроков, написанные Nibras Code, и короткие ответы на частые вопросы новичков.",
    ),
    keywords: l5("HTML dərsləri, HTML öyrən, HTML başlanğıc", "HTML lessons, learn HTML, HTML for beginners", "HTML dersleri, HTML öğren, HTML başlangıç", "دروس HTML, تعلم HTML, HTML للمبتدئين", "уроки HTML, учить HTML, HTML для начинающих"),
    intro: l5(
      "İki hissə var: sual-cavab səhifələri və ardıcıl dərs fəsilləri. Hamısı Nibras Code tərəfindən yazılıb və 5 dildə mövcuddur.",
      "There are two parts: question-and-answer pages and a sequence of lesson chapters. All of it is written by Nibras Code and available in 5 languages.",
      "İki bölüm var: soru-cevap sayfaları ve ardışık ders bölümleri. Hepsi Nibras Code tarafından yazıldı ve 5 dilde mevcut.",
      "هناك قسمان: صفحات أسئلة وأجوبة وفصول دروس متسلسلة. كتبها Nibras Code كلها وهي متاحة بخمس لغات.",
      "Два раздела: страницы «вопрос — ответ» и последовательные главы уроков. Всё написано Nibras Code и доступно на 5 языках.",
    ),
  },
};

function chap(
  kind: CourseKind,
  file: string,
  title: L5,
  description: L5,
  keywords: L5,
): CoursePage {
  return { slug: `${kind}-dars-${file}`, kind, source: "book", file, title, description, keywords };
}
function own(kind: CourseKind, file: string, title: L5, description: L5, keywords: L5): CoursePage {
  return { slug: `${kind}-sual-${file}`, kind, source: "own", file, title, description, keywords };
}

export const COURSE_PAGES: readonly CoursePage[] = [
  // ---- Python: original question-and-answer pages (5 languages)
  own("python", "baslangic",
    l5("Python-a necə başlamaq olar? Quraşdırma və ilk proqram", "How do I start with Python? Install and first program", "Python'a nasıl başlanır? Kurulum ve ilk program", "كيف أبدأ مع بايثون؟ التثبيت وأول برنامج", "Как начать с Python? Установка и первая программа"),
    l5("Python quraşdırılması, terminalda yoxlama və ilk print proqramı.", "Installing Python, checking it in the terminal and the first print program.", "Python kurulumu, terminalde kontrol ve ilk print programı.", "تثبيت بايثون والتحقق منه في الطرفية وأول برنامج print.", "Установка Python, проверка в терминале и первая программа с print."),
    l5("Python quraşdırma, ilk proqram, hello world", "install Python, first program, hello world", "Python kurulum, ilk program, hello world", "تثبيت بايثون, أول برنامج, hello world", "установка Python, первая программа, hello world")),
  own("python", "deyisen",
    l5("Python-da dəyişənlər və məlumat tipləri", "Variables and data types in Python", "Python'da değişkenler ve veri tipleri", "المتغيرات وأنواع البيانات في بايثون", "Переменные и типы данных в Python"),
    l5("Dəyişən nədir, int, str, list və dict nə üçündür.", "What a variable is, and what int, str, list and dict are for.", "Değişken nedir; int, str, list ve dict ne işe yarar.", "ما المتغير، وما فائدة int وstr وlist وdict.", "Что такое переменная и зачем нужны int, str, list и dict."),
    l5("Python dəyişən, tiplər, list, dict", "Python variable, types, list, dict", "Python değişken, tipler, list, dict", "متغير بايثون, أنواع البيانات, list, dict", "переменные Python, типы, list, dict")),
  own("python", "sert-dovr",
    l5("Python-da if, for və while: şərt və dövr", "if, for and while in Python: conditions and loops", "Python'da if, for ve while: koşul ve döngü", "if وfor وwhile في بايثون: الشروط والحلقات", "if, for и while в Python: условия и циклы"),
    l5("Şərtlə qərar vermək və təkrar iş üçün dövr.", "Making decisions with conditions and repeating work with loops.", "Koşulla karar vermek ve tekrar için döngü.", "اتخاذ القرار بالشروط وتكرار العمل بالحلقات.", "Принятие решений по условию и повтор действий циклами."),
    l5("Python if else, for dövrü, while", "Python if else, for loop, while", "Python if else, for döngüsü, while", "بايثون if else, حلقة for, while", "Python if else, цикл for, while")),
  own("python", "funksiya",
    l5("Python funksiyası: def, parametr və return", "Python functions: def, parameters and return", "Python fonksiyonu: def, parametre ve return", "دوال بايثون: def والمعاملات وreturn", "Функции Python: def, параметры и return"),
    l5("Funksiyanı necə yazmaq və çağırmaq olar.", "How to write and call a function.", "Fonksiyon nasıl yazılır ve çağrılır.", "كيف تكتب دالة وتستدعيها.", "Как написать и вызвать функцию."),
    l5("Python funksiya, def, return, parametr", "Python function, def, return, parameter", "Python fonksiyon, def, return, parametre", "دالة بايثون, def, return, معامل", "функция Python, def, return, параметр")),
  own("python", "xeta",
    l5("Python xətaları: IndentationError, NameError, TypeError nə deməkdir?", "Python errors: what IndentationError, NameError and TypeError mean", "Python hataları: IndentationError, NameError, TypeError ne demek?", "أخطاء بايثون: ماذا تعني IndentationError وNameError وTypeError", "Ошибки Python: что значат IndentationError, NameError и TypeError"),
    l5("Ən çox rast gəlinən xətaları oxumaq və düzəltmək.", "Reading and fixing the most common errors.", "En sık karşılaşılan hataları okumak ve düzeltmek.", "قراءة أكثر الأخطاء شيوعاً وإصلاحها.", "Как читать и исправлять самые частые ошибки."),
    l5("Python xəta, IndentationError, NameError, TypeError", "Python error, IndentationError, NameError, TypeError", "Python hata, IndentationError, NameError, TypeError", "خطأ بايثون, IndentationError, NameError, TypeError", "ошибка Python, IndentationError, NameError, TypeError")),
  own("python", "hardan",
    l5("Python-u hardan başlamaq? Nə qədər vaxt çəkir və JavaScript ilə fərqi", "Where to start with Python? How long it takes and Python vs JavaScript", "Python'a nereden başlanır? Ne kadar sürer ve JavaScript'ten farkı", "من أين أبدأ بايثون؟ كم يستغرق وما الفرق عن JavaScript", "С чего начать Python? Сколько времени нужно и чем он отличается от JavaScript"),
    l5("Yeni başlayanlar üçün plan, layihə fikirləri və dil seçimi.", "A plan for beginners, project ideas and choosing a language.", "Yeni başlayanlar için plan, proje fikirleri ve dil seçimi.", "خطة للمبتدئين وأفكار مشاريع واختيار اللغة.", "План для новичков, идеи проектов и выбор языка."),
    l5("Python öyrənmək, nə qədər çəkir, Python JavaScript", "learn Python, how long, Python vs JavaScript", "Python öğrenmek, ne kadar sürer, Python JavaScript", "تعلم بايثون, كم يستغرق, بايثون أم جافاسكريبت", "учить Python, сколько времени, Python или JavaScript")),
  // ---- Python: lesson chapters (original Nibras Code text)
  chap("python", "first-steps", l5("İlk addımlar: ilk Python proqramı", "First steps: your first Python program", "İlk adımlar: ilk Python programı", "الخطوات الأولى: أول برنامج بايثون", "Первые шаги: первая программа на Python"), l5("Hello World proqramını interpretatorda və faylda işlət.", "Run Hello World in the interpreter and from a file.", "Hello World programını yorumlayıcıda ve dosyadan çalıştır.", "شغّل Hello World في المفسّر ومن ملف.", "Запустите Hello World в интерпретаторе и из файла."), l5("Python ilk proqram, hello world", "Python first program, hello world", "Python ilk program, hello world", "بايثون أول برنامج, hello world", "Python первая программа, hello world")),
  chap("python", "basics", l5("Əsaslar: sabitlər, dəyişənlər, sətirlər", "Basics: literals, variables, strings", "Temeller: sabitler, değişkenler, dizeler", "الأساسيات: القيم الثابتة والمتغيرات والنصوص", "Основы: литералы, переменные, строки"), l5("Şərhlər, ədədlər, sətirlər, dəyişənlər və sətir quruluşu.", "Comments, numbers, strings, variables and program structure.", "Yorumlar, sayılar, dizeler, değişkenler ve program yapısı.", "التعليقات والأعداد والنصوص والمتغيرات وبنية البرنامج.", "Комментарии, числа, строки, переменные и структура программы."), l5("Python əsaslar, dəyişən, sətir", "Python basics, variable, string", "Python temeller, değişken, dize", "أساسيات بايثون, متغير, نص", "основы Python, переменная, строка")),
  chap("python", "operators", l5("Operatorlar və ifadələr", "Operators and expressions", "Operatörler ve ifadeler", "العوامل والتعابير", "Операторы и выражения"), l5("Riyazi, müqayisə və məntiqi operatorlar, üstünlük sırası.", "Arithmetic, comparison and logical operators, and precedence.", "Aritmetik, karşılaştırma ve mantıksal operatörler, öncelik sırası.", "العوامل الحسابية والمقارنة والمنطقية وأسبقيتها.", "Арифметические, сравнительные и логические операторы, приоритет."), l5("Python operatorlar, ifadələr", "Python operators, expressions", "Python operatörler, ifadeler", "عوامل بايثون, تعابير", "операторы Python, выражения")),
  chap("python", "control-flow", l5("İdarəetmə axını: if, while, for", "Control flow: if, while, for", "Kontrol akışı: if, while, for", "تدفّق التحكم: if وwhile وfor", "Управление потоком: if, while, for"), l5("Şərtlər və dövrlər, break və continue.", "Conditions and loops, break and continue.", "Koşullar ve döngüler, break ve continue.", "الشروط والحلقات وbreak وcontinue.", "Условия и циклы, break и continue."), l5("Python if while for, dövr", "Python if while for, loop", "Python if while for, döngü", "بايثون if while for, حلقة", "Python if while for, цикл")),
  chap("python", "functions", l5("Funksiyalar", "Functions", "Fonksiyonlar", "الدوال", "Функции"), l5("Funksiya təyini, parametrlər, lokal dəyişənlər, return və docstring.", "Defining functions, parameters, local variables, return and docstrings.", "Fonksiyon tanımı, parametreler, yerel değişkenler, return ve docstring.", "تعريف الدوال والمعاملات والمتغيرات المحلية وreturn وdocstring.", "Определение функций, параметры, локальные переменные, return и docstring."), l5("Python funksiyalar, parametr, return", "Python functions, parameters, return", "Python fonksiyonlar, parametre, return", "دوال بايثون, معاملات, return", "функции Python, параметры, return")),
  chap("python", "modules", l5("Modullar", "Modules", "Modüller", "الوحدات", "Модули"), l5("import, öz modulunu yazmaq, paketlər və pip.", "import, writing your own module, packages and pip.", "import, kendi modülünü yazmak, paketler ve pip.", "import وكتابة وحدتك والحزم وpip.", "import, собственный модуль, пакеты и pip."), l5("Python modul, import, paket", "Python module, import, package", "Python modül, import, paket", "وحدة بايثون, import, حزمة", "модуль Python, import, пакет")),
  chap("python", "data-structures", l5("Məlumat strukturları: list, tuple, dict, set", "Data structures: list, tuple, dict, set", "Veri yapıları: list, tuple, dict, set", "بنى البيانات: list وtuple وdict وset", "Структуры данных: list, tuple, dict, set"), l5("Siyahı, dəstə, lüğət və çoxluq, ardıcıllıqlar.", "Lists, tuples, dictionaries, sets and sequences.", "Liste, demet, sözlük, küme ve diziler.", "القوائم والصفوف والقواميس والمجموعات والمتتاليات.", "Списки, кортежи, словари, множества и последовательности."), l5("Python list tuple dict set", "Python list tuple dict set", "Python list tuple dict set", "بايثون list tuple dict set", "Python list tuple dict set")),
  chap("python", "problem-solving", l5("Məsələ həlli: söz sayğacı", "Problem solving: a word counter", "Problem çözme: kelime sayacı", "حل المسائل: عدّاد كلمات", "Решение задач: счётчик слов"), l5("Real məsələni mərhələlərlə proqrama çevir.", "Turn a real problem into a program, step by step.", "Gerçek bir problemi adım adım programa çevir.", "حوّل مشكلة حقيقية إلى برنامج خطوة بخطوة.", "Превратите реальную задачу в программу шаг за шагом."), l5("Python layihə, məsələ həlli, söz sayğacı", "Python project, problem solving, word counter", "Python proje, problem çözme, kelime sayacı", "مشروع بايثون, حل المسائل, عداد كلمات", "проект Python, решение задач, счётчик слов")),
  chap("python", "oop", l5("Obyekt yönümlü proqramlaşdırma", "Object-oriented programming", "Nesne yönelimli programlama", "البرمجة كائنية التوجّه", "Объектно-ориентированное программирование"), l5("Sinif, obyekt, metod, __init__ və varislik.", "Classes, objects, methods, __init__ and inheritance.", "Sınıf, nesne, metot, __init__ ve kalıtım.", "الأصناف والكائنات والدوال والبناء __init__ والوراثة.", "Классы, объекты, методы, __init__ и наследование."), l5("Python OOP, sinif, obyekt, varislik", "Python OOP, class, object, inheritance", "Python OOP, sınıf, nesne, kalıtım", "بايثون OOP, صنف, كائن, وراثة", "Python ООП, класс, объект, наследование")),
  chap("python", "input-output", l5("Giriş və çıxış: input, fayllar, JSON", "Input and output: input, files, JSON", "Girdi ve çıktı: input, dosyalar, JSON", "الإدخال والإخراج: input والملفات وJSON", "Ввод и вывод: input, файлы, JSON"), l5("İstifadəçidən məlumat al, fayla yaz və fayldan oxu.", "Read user input, write to a file and read from it.", "Kullanıcıdan veri al, dosyaya yaz ve dosyadan oku.", "اقرأ مدخلات المستخدم واكتب في ملف واقرأ منه.", "Читайте ввод пользователя, пишите в файл и читайте из него."), l5("Python input, fayl oxumaq yazmaq", "Python input, read write file", "Python input, dosya okuma yazma", "بايثون input, قراءة وكتابة ملف", "Python input, чтение и запись файла")),
  chap("python", "exceptions", l5("İstisnalar: try, except, finally", "Exceptions: try, except, finally", "İstisnalar: try, except, finally", "الاستثناءات: try وexcept وfinally", "Исключения: try, except, finally"), l5("Xətanı tutmaq, raise və with ifadəsi.", "Catching errors, raise and the with statement.", "Hatayı yakalamak, raise ve with ifadesi.", "التقاط الأخطاء وraise وعبارة with.", "Перехват ошибок, raise и оператор with."), l5("Python try except, istisna", "Python try except, exception", "Python try except, istisna", "بايثون try except, استثناء", "Python try except, исключение")),
  chap("python", "stdlib", l5("Standart kitabxana", "The standard library", "Standart kütüphane", "المكتبة القياسية", "Стандартная библиотека"), l5("sys, os, pathlib, datetime, random və logging.", "sys, os, pathlib, datetime, random and logging.", "sys, os, pathlib, datetime, random ve logging.", "sys وos وpathlib وdatetime وrandom وlogging.", "sys, os, pathlib, datetime, random и logging."), l5("Python standart kitabxana, sys, logging", "Python standard library, sys, logging", "Python standart kütüphane, sys, logging", "المكتبة القياسية بايثون, sys, logging", "стандартная библиотека Python, sys, logging")),
  // ---- HTML: original question-and-answer pages (5 languages)
  own("html", "baslangic",
    l5("İlk HTML səhifəni necə yazmaq olar?", "How do I write my first HTML page?", "İlk HTML sayfası nasıl yazılır?", "كيف أكتب أول صفحة HTML؟", "Как написать первую HTML-страницу?"),
    l5("Səhifənin skeleti, faylı saxlamaq və brauzerdə açmaq.", "The page skeleton, saving the file and opening it in a browser.", "Sayfa iskeleti, dosyayı kaydetmek ve tarayıcıda açmak.", "هيكل الصفحة وحفظ الملف وفتحه في المتصفح.", "Каркас страницы, сохранение файла и открытие в браузере."),
    l5("HTML ilk səhifə, index.html, HTML skelet", "HTML first page, index.html, HTML skeleton", "HTML ilk sayfa, index.html, HTML iskelet", "أول صفحة HTML, index.html, هيكل HTML", "первая страница HTML, index.html, каркас HTML")),
  own("html", "teqler",
    l5("Ən çox işlənən HTML teqləri: qısa siyahı", "The most used HTML tags: a short list", "En çok kullanılan HTML etiketleri: kısa liste", "أكثر وسوم HTML استخداماً: قائمة مختصرة", "Самые используемые теги HTML: короткий список"),
    l5("Başlıq, abzas, siyahı, link, şəkil və div/span.", "Headings, paragraphs, lists, links, images and div/span.", "Başlık, paragraf, liste, bağlantı, görsel ve div/span.", "العناوين والفقرات والقوائم والروابط والصور وdiv/span.", "Заголовки, абзацы, списки, ссылки, картинки и div/span."),
    l5("HTML teqlər, h1, p, a, img, ul", "HTML tags, h1, p, a, img, ul", "HTML etiketleri, h1, p, a, img, ul", "وسوم HTML, h1, p, a, img, ul", "теги HTML, h1, p, a, img, ul")),
  own("html", "link-sekil",
    l5("HTML-də link və şəkil: href, src və alt", "Links and images in HTML: href, src and alt", "HTML'de bağlantı ve görsel: href, src ve alt", "الروابط والصور في HTML: href وsrc وalt", "Ссылки и изображения в HTML: href, src и alt"),
    l5("Link və şəkil niyə işləmir və alt mətni niyə vacibdir.", "Why a link or image does not work, and why alt text matters.", "Bağlantı veya görsel neden çalışmaz, alt metni neden önemli.", "لماذا لا يعمل الرابط أو الصورة ولماذا يهم النص البديل.", "Почему не работает ссылка или картинка и зачем нужен alt."),
    l5("HTML link, şəkil, alt, href, src", "HTML link, image, alt, href, src", "HTML bağlantı, görsel, alt, href, src", "رابط HTML, صورة, alt, href, src", "HTML ссылка, изображение, alt, href, src")),
  own("html", "form",
    l5("HTML formu: input, label və button", "HTML forms: input, label and button", "HTML formu: input, label ve button", "نماذج HTML: input وlabel وbutton", "HTML-формы: input, label и button"),
    l5("Sadə giriş formu qurmaq və sahə tipləri.", "Building a simple form and choosing field types.", "Basit bir form kurmak ve alan tipleri.", "بناء نموذج بسيط واختيار أنواع الحقول.", "Простая форма и типы полей."),
    l5("HTML form, input tipləri, label, button", "HTML form, input types, label, button", "HTML form, input tipleri, label, button", "نموذج HTML, أنواع input, label, button", "HTML форма, типы input, label, button")),
  own("html", "semantik",
    l5("Semantik HTML: header, nav, main, footer nə üçündür?", "Semantic HTML: what header, nav, main and footer are for", "Anlamsal HTML: header, nav, main, footer ne işe yarar?", "HTML الدلالي: فائدة header وnav وmain وfooter", "Семантический HTML: зачем header, nav, main и footer"),
    l5("Səhifəni mənalı hissələrə bölmək, əlçatanlıq və SEO.", "Dividing a page into meaningful parts, accessibility and SEO.", "Sayfayı anlamlı bölümlere ayırmak, erişilebilirlik ve SEO.", "تقسيم الصفحة إلى أجزاء ذات معنى وإمكانية الوصول وSEO.", "Деление страницы на смысловые части, доступность и SEO."),
    l5("semantik HTML, header, nav, main, footer", "semantic HTML, header, nav, main, footer", "anlamsal HTML, header, nav, main, footer", "HTML الدلالي, header, nav, main, footer", "семантический HTML, header, nav, main, footer")),
  own("html", "xeta",
    l5("HTML işləmir: ən çox edilən 8 səhv", "My HTML does not work: the 8 most common mistakes", "HTML çalışmıyor: en sık yapılan 8 hata", "HTML لا يعمل: أكثر 8 أخطاء شيوعاً", "HTML не работает: 8 самых частых ошибок"),
    l5("Bağlanmayan teq, yanlış fayl adı, kodlaşdırma və s.", "Unclosed tags, wrong file names, encoding and more.", "Kapanmayan etiket, yanlış dosya adı, karakter kodlaması ve fazlası.", "وسوم غير مغلقة وأسماء ملفات خاطئة والترميز وغيرها.", "Незакрытые теги, неверные имена файлов, кодировка и другое."),
    l5("HTML işləmir, HTML səhv, teq bağlanmır", "HTML not working, HTML mistakes, unclosed tag", "HTML çalışmıyor, HTML hata, etiket kapanmıyor", "HTML لا يعمل, أخطاء HTML, وسم غير مغلق", "HTML не работает, ошибки HTML, незакрытый тег")),
  // ---- HTML: lesson chapters (original Nibras Code text)
  chap("html", "basic-syntax", l5("HTML sintaksisinin əsasları", "Basic HTML syntax", "Temel HTML sözdizimi", "أساسيات صياغة HTML", "Основы синтаксиса HTML"), l5("Element, teq, atribut, boş elementlər, doctype və düzgün yerləşdirmə.", "Elements, tags, attributes, void elements, doctype and correct nesting.", "Öğe, etiket, nitelik, boş öğeler, doctype ve doğru iç içe yerleştirme.", "العناصر والوسوم والسمات والعناصر الفارغة وdoctype والتداخل الصحيح.", "Элементы, теги, атрибуты, пустые элементы, doctype и правильная вложенность."), l5("HTML sintaksis, element, teq, atribut", "HTML syntax, element, tag, attribute", "HTML sözdizimi, öğe, etiket, nitelik", "صياغة HTML, عنصر, وسم, سمة", "синтаксис HTML, элемент, тег, атрибут")),
  chap("html", "headings-paragraphs", l5("Başlıqlar və abzaslar", "Headings and paragraphs", "Başlıklar ve paragraflar", "العناوين والفقرات", "Заголовки и абзацы"), l5("h1–h6 iyerarxiyası və p elementi.", "The h1–h6 hierarchy and the p element.", "h1–h6 hiyerarşisi ve p öğesi.", "تسلسل h1–h6 وعنصر p.", "Иерархия h1–h6 и элемент p."), l5("HTML başlıq, h1, abzas, p", "HTML heading, h1, paragraph, p", "HTML başlık, h1, paragraf, p", "عناوين HTML, h1, فقرة, p", "HTML заголовок, h1, абзац, p")),
  chap("html", "lists", l5("Siyahılar", "Lists", "Listeler", "القوائم", "Списки"), l5("Nömrəsiz, nömrəli və təsvir siyahıları.", "Unordered, ordered and description lists.", "Sırasız, sıralı ve açıklama listeleri.", "القوائم غير المرتبة والمرتبة والوصفية.", "Маркированные, нумерованные списки и списки описаний."), l5("HTML siyahı, ul, ol, li", "HTML list, ul, ol, li", "HTML liste, ul, ol, li", "قائمة HTML, ul, ol, li", "HTML список, ul, ol, li")),
  chap("html", "emphasis", l5("Vurğu və əhəmiyyət", "Emphasis and importance", "Vurgu ve önem", "التوكيد والأهمية", "Выделение и важность"), l5("em, strong, i, b arasındakı fərq.", "The difference between em, strong, i and b.", "em, strong, i ve b arasındaki fark.", "الفرق بين em وstrong وi وb.", "Разница между em, strong, i и b."), l5("HTML em strong, qalın, maili", "HTML em strong, bold, italic", "HTML em strong, kalın, italik", "HTML em strong, عريض, مائل", "HTML em strong, жирный, курсив")),
  chap("html", "links", l5("Linklər yaratmaq", "Creating hyperlinks", "Bağlantılar oluşturmak", "إنشاء الروابط", "Создание гиперссылок"), l5("a elementi, nisbi və mütləq ünvan, e-poçt linki.", "The a element, relative and absolute URLs, email links.", "a öğesi, göreli ve mutlak adresler, e-posta bağlantısı.", "عنصر a والعناوين النسبية والمطلقة وروابط البريد.", "Элемент a, относительные и абсолютные адреса, ссылки на e-mail."), l5("HTML link, a href, bağlantı", "HTML link, a href, hyperlink", "HTML bağlantı, a href", "رابط HTML, a href", "HTML ссылка, a href")),
  chap("html", "images", l5("Şəkillər", "Images in HTML", "HTML'de görseller", "الصور في HTML", "Изображения в HTML"), l5("img, alt mətni, ölçü, figure və figcaption.", "img, alt text, sizing, figure and figcaption.", "img, alt metni, boyut, figure ve figcaption.", "img والنص البديل والأبعاد وfigure وfigcaption.", "img, alt-текст, размеры, figure и figcaption."), l5("HTML şəkil, img, alt", "HTML image, img, alt", "HTML görsel, img, alt", "صورة HTML, img, alt", "HTML изображение, img, alt")),
  chap("html", "tables", l5("Cədvəllərin əsasları", "HTML table basics", "HTML tablo temelleri", "أساسيات جداول HTML", "Основы таблиц HTML"), l5("table, tr, td, th, colspan və rowspan.", "table, tr, td, th, colspan and rowspan.", "table, tr, td, th, colspan ve rowspan.", "table وtr وtd وth وcolspan وrowspan.", "table, tr, td, th, colspan и rowspan."), l5("HTML cədvəl, table, tr, td", "HTML table, tr, td, th", "HTML tablo, table, tr, td", "جدول HTML, table, tr, td", "HTML таблица, table, tr, td")),
  chap("html", "forms", l5("HTML formları", "HTML forms", "HTML formları", "نماذج HTML", "HTML-формы"), l5("form, input, label, button və sahə növləri.", "form, input, label, button and field types.", "form, input, label, button ve alan türleri.", "form وinput وlabel وbutton وأنواع الحقول.", "form, input, label, button и типы полей."), l5("HTML form, input, label", "HTML form, input, label", "HTML form, input, label", "نموذج HTML, input, label", "HTML форма, input, label")),
  chap("html", "document-structure", l5("Sənədin quruluşu", "Document and website structure", "Belge ve site yapısı", "بنية المستند والموقع", "Структура документа и сайта"), l5("header, nav, main, article, section, aside, footer.", "header, nav, main, article, section, aside, footer.", "header, nav, main, article, section, aside, footer.", "header وnav وmain وarticle وsection وaside وfooter.", "header, nav, main, article, section, aside, footer."), l5("HTML sənəd quruluşu, semantik", "HTML document structure, semantic", "HTML belge yapısı, anlamsal", "بنية مستند HTML, دلالي", "структура HTML, семантика")),
  chap("html", "metadata", l5("Səhifə metaməlumatı: head və meta", "Webpage metadata: head and meta", "Sayfa üstverisi: head ve meta", "بيانات الصفحة الوصفية: head وmeta", "Метаданные страницы: head и meta"), l5("title, meta charset, viewport, description, favicon.", "title, meta charset, viewport, description, favicon.", "title, meta charset, viewport, description, favicon.", "title وmeta charset وviewport وdescription وfavicon.", "title, meta charset, viewport, description, favicon."), l5("HTML meta, head, viewport, title", "HTML meta, head, viewport, title", "HTML meta, head, viewport, title", "HTML meta, head, viewport, title", "HTML meta, head, viewport, title")),
  chap("html", "debugging", l5("HTML xətalarını tapmaq", "Debugging HTML", "HTML hata ayıklama", "تصحيح أخطاء HTML", "Отладка HTML"), l5("Validator, açılmayan teqlər və yanlış yerləşdirmə.", "The validator, unclosed tags and wrong nesting.", "Doğrulayıcı, kapanmayan etiketler ve yanlış iç içe yerleştirme.", "المدقّق والوسوم غير المغلقة والتداخل الخاطئ.", "Валидатор, незакрытые теги и неверная вложенность."), l5("HTML xəta, validator, debug", "HTML errors, validator, debug", "HTML hata, doğrulayıcı, debug", "أخطاء HTML, مدقق, تصحيح", "ошибки HTML, валидатор, отладка")),
];

export function isCourseHub(slug: string) {
  return slug === HUBS.python.slug || slug === HUBS.html.slug;
}
export function findCourse(slug: string): CoursePage | null {
  return COURSE_PAGES.find((p) => p.slug === slug) ?? null;
}
export function isCourseSlug(slug: string) {
  return isCourseHub(slug) || !!findCourse(slug);
}
export function hubFor(slug: string): CourseKind | null {
  if (slug === HUBS.python.slug) return "python";
  if (slug === HUBS.html.slug) return "html";
  return findCourse(slug)?.kind ?? null;
}
export function pagesOf(kind: CourseKind) {
  return COURSE_PAGES.filter((p) => p.kind === kind);
}
