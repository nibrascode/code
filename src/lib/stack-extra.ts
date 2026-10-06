import type { StackPage } from "@/lib/stack-pages";
import { lines, t, topic } from "@/lib/stack-pages";

export const STACK_EXTRA: readonly StackPage[] = [
  topic(
    "kotlin",
    "Kotlin",
    t("Kotlin nədir?", "What is Kotlin?", "Kotlin nedir?", "ما هي Kotlin؟", "Что такое Kotlin?"),
    t(
      "Kotlin JVM üzərində işləyən dildir. Android üçün rəsmi dildir və Java kodu ilə eyni layihədə dura bilir.",
      "Kotlin is a language that runs on the JVM. It is an official language for Android and can sit in the same project as Java code.",
      "Kotlin, JVM üzerinde çalışan bir dildir. Android için resmi dildir ve Java kodu ile aynı projede durabilir.",
      "Kotlin لغة تعمل على JVM. هي لغة رسمية لـ Android ويمكن أن تقف في المشروع نفسه مع كود Java.",
      "Kotlin — язык на JVM. Это официальный язык для Android, и он может стоять в одном проекте с кодом Java.",
    ),
    t("Kotlin nədir, Kotlin Android, Kotlin JVM, Kotlin və Java", "what is Kotlin, Kotlin Android, Kotlin JVM, Kotlin and Java", "Kotlin nedir, Kotlin Android, Kotlin JVM", "ما هي Kotlin, Kotlin Android, Kotlin وJava", "что такое Kotlin, Kotlin Android, Kotlin и Java"),
    {
      what: t(
        "Kotlin JetBrains-də yaranıb. Sintaksis Java-dan qısadır, null təhlükəsini tipdə göstərir. Java kitabxanası Kotlin-dən çağırıla bilir. Serverdə Ktor və ya Spring ilə də işləyir, amma ən geniş yeri Android-dir.",
        "Kotlin started at JetBrains. The syntax is shorter than Java, and the type shows null danger. A Java library can be called from Kotlin. It also runs on a server with Ktor or Spring, but the widest place is Android.",
        "Kotlin JetBrains’te doğdu. Sözdizimi Java’dan kısadır, null tehlikesini tipte gösterir. Java kütüphanesi Kotlin’den çağrılabilir. Sunucuda Ktor veya Spring ile de çalışır, en geniş yeri Android’dir.",
        "بدأت Kotlin في JetBrains. القواعد أقصر من Java، والنوع يُظهر خطر null. يمكن استدعاء مكتبة Java من Kotlin. تعمل أيضاً على خادم مع Ktor أو Spring، لكن أوسع مكان هو Android.",
        "Kotlin появилась в JetBrains. Синтаксис короче Java, а тип показывает опасность null. Библиотеку Java можно вызвать из Kotlin. На сервере она тоже работает с Ktor или Spring, но самое широкое место — Android.",
      ),
      uses: t("Kotlin yeni Android tətbiqində və Java layihəsini qısaltmaqda işlənir.", "Kotlin is used in a new Android app and to shorten a Java project.", "Kotlin yeni Android uygulamasında ve Java projesini kısaltmakta kullanılır.", "تُستخدم Kotlin في تطبيق Android جديد ولتقصير مشروع Java.", "Kotlin берут в новом приложении Android и чтобы укоротить проект на Java."),
      useList: lines(
        ["Android ekranı və məntiqi", "Java sinfini tədricən əvəz etmək", "Server API", "Ortaq mobil kod"],
        ["An Android screen and its logic", "Replacing a Java class step by step", "A server API", "Shared mobile code"],
        ["Android ekranı ve mantığı", "Java sınıfını adım adım değiştirmek", "Sunucu API", "Ortak mobil kod"],
        ["شاشة Android ومنطقها", "استبدال صنف Java خطوة بخطوة", "واجهة خادم", "كود هاتف مشترك"],
        ["Экран Android и его логика", "Постепенная замена класса Java", "Серверный API", "Общий мобильный код"],
      ),
      can: t(
        "Kotlin ilə Activity və ya Compose ekranı, siyahı və şəbəkə sorğusu yazılır. data class Java-dakı uzun POJO-nu əvəz edir. Java faylı silinmədən yanına Kotlin faylı qoyula bilər.",
        "With Kotlin you write an Activity or a Compose screen, a list, and a network call. A data class replaces a long Java POJO. A Kotlin file can sit beside a Java file without deleting it.",
        "Kotlin ile Activity veya Compose ekranı, liste ve ağ çağrısı yazılır. data class Java’daki uzun POJO’nun yerine geçer. Java dosyası silinmeden yanına Kotlin dosyası konabilir.",
        "بـ Kotlin تكتب شاشة Activity أو Compose وقائمة وطلب شبكة. data class يحل محل POJO الطويل في Java. يمكن وضع ملف Kotlin بجانب ملف Java دون حذفه.",
        "На Kotlin пишут экран Activity или Compose, список и сетевой запрос. data class заменяет длинный Java POJO. Файл Kotlin можно положить рядом с файлом Java, не удаляя его.",
      ),
      hard: t(
        "Java bilən tez oxuyur. Çətinlik null sistemi, coroutine və Android-in öz ömrü ilə qarışmasındadır. Dil kiçik nümunədə asan, tətbiqin arxitekturasında orta səviyyədir.",
        "Someone who knows Java reads it quickly. The difficulty is the null system, coroutines, and mixing them with Android’s own lifetime. The language is easy in a small sample and middling in an app’s architecture.",
        "Java bilen çabuk okur. Zorluk null sistemi, coroutine ve Android’in kendi ömrüyle karışmasındadır. Dil küçük örnekte kolay, uygulamanın mimarisinde ortadır.",
        "من يعرف Java يقرؤها سريعاً. الصعوبة في نظام null وcoroutine وخلطها بعمر Android نفسه. اللغة سهلة في مثال صغير ومتوسطة في بنية التطبيق.",
        "Кто знает Java, читает её быстро. Трудность в системе null, корутинах и в том, как они смешиваются со временем жизни Android. В маленьком примере язык лёгкий, в архитектуре приложения средний.",
      ),
      balance: t(
        "Üstünlük: qısa kod, null yoxlaması və Java ilə birgə yaşamaq. Məhdudiyyət: yığım Java-dan yavaş ola bilər, coroutine səhv işlədəndə axını qarışdırır. Köhnə Android nümunələri hələ Java-dadır.",
        "Advantage: short code, null checks, and living next to Java. Limit: the build can be slower than Java, and a misused coroutine mixes up the flow. Old Android samples are still in Java.",
        "Avantaj: kısa kod, null kontrolü ve Java ile yan yana durmak. Sınır: derleme Java’dan yavaş olabilir, yanlış coroutine akışı karıştırır. Eski Android örnekleri hâlâ Java’dadır.",
        "الميزة: كود قصير وفحص null والعيش بجانب Java. الحد: قد يكون البناء أبطأ من Java، وcoroutine تُساء استخدامها تخلط التدفق. أمثلة Android القديمة ما زالت بـ Java.",
        "Плюс: короткий код, проверка null и жизнь рядом с Java. Ограничение: сборка может быть медленнее Java, а неправильная корутина путает поток. Старые примеры Android всё ещё на Java.",
      ),
      ideas: t(
        "val dəyişməyən, var dəyişən dəyərdir. ? tipi null ola bilər. data class bərabərlik və kopya yaradır.",
        "val is a value that does not change. var can change. A type with ? may be null. A data class creates equality and a copy.",
        "val değişmeyen, var değişen değerdir. ? tipi null olabilir. data class eşitlik ve kopya üretir.",
        "val قيمة لا تتغير، وvar تتغير. النوع مع ? قد يكون null. data class يصنع المساواة والنسخ.",
        "val — значение, которое не меняется, var меняется. Тип с ? может быть null. data class создаёт равенство и копию.",
      ),
      ideaList: lines(
        ["fun funksiya açır", "coroutine uzun işi dayandırmadan gözləyir", "Gradle Kotlin DSL yığımı təsvir edir", "Java faylı və Kotlin faylı eyni modulda ola bilər"],
        ["fun opens a function", "A coroutine waits for a long job without blocking", "The Gradle Kotlin DSL describes the build", "A Java file and a Kotlin file can share a module"],
        ["fun fonksiyon açar", "coroutine uzun işi kilitlemeden bekler", "Gradle Kotlin DSL derlemeyi anlatır", "Java dosyası ve Kotlin dosyası aynı modülde olabilir"],
        ["fun تفتح دالة", "coroutine تنتظر عملاً طويلاً بلا حجز", "Gradle Kotlin DSL يصف البناء", "ملف Java وملف Kotlin يمكن أن يكونا في الوحدة نفسها"],
        ["fun открывает функцию", "корутина ждёт долгую работу без блокировки", "Gradle Kotlin DSL описывает сборку", "файл Java и файл Kotlin могут быть в одном модуле"],
      ),
      sample: t("Bu proqram əsas funksiyadan bir sətir yazır.", "This program writes one line from the main function.", "Bu program ana fonksiyondan bir satır yazar.", "هذا البرنامج يكتب سطراً من الدالة الرئيسية.", "Эта программа пишет одну строку из главной функции."),
      code: `fun main() {
    println("Hello")
}`,
      faq: lines(
        ["Kotlin Java-nı silir? Xeyr. Java kitabxanası qalır, yeni kod çox vaxt Kotlin olur.", "Kotlin yalnız Android üçündür? Xeyr. Serverdə də işləyir.", "Swift ilə eynidir? Xeyr. Swift Apple üçündür, Kotlin JVM və Android üçündür."],
        ["Does Kotlin delete Java? No. Java libraries stay. New code is often Kotlin.", "Is Kotlin only for Android? No. It also runs on a server.", "Is it the same as Swift? No. Swift is for Apple. Kotlin is for the JVM and Android."],
        ["Kotlin Java’yı siler mi? Hayır. Java kütüphanesi kalır, yeni kod çoğu zaman Kotlin olur.", "Kotlin yalnız Android için mi? Hayır. Sunucuda da çalışır.", "Swift ile aynı mı? Hayır. Swift Apple için, Kotlin JVM ve Android içindir."],
        ["هل تحذف Kotlin لغة Java؟ لا. مكتبات Java تبقى، والكود الجديد غالباً Kotlin.", "هل Kotlin لـ Android فقط؟ لا. تعمل على الخادم أيضاً.", "هل هي مثل Swift؟ لا. Swift لـ Apple، وKotlin لـ JVM وAndroid."],
        ["Kotlin удаляет Java? Нет. Библиотеки Java остаются, новый код часто на Kotlin.", "Kotlin только для Android? Нет. Она работает и на сервере.", "Это то же, что Swift? Нет. Swift для Apple, Kotlin для JVM и Android."],
      ),
    },
  ),
  topic(
    "cpp",
    "C++",
    t("C++ nədir?", "What is C++?", "C++ nedir?", "ما هي C++؟", "Что такое C++?"),
    t(
      "C++ sürət və nəzarət üçün sistem dilidir. Oyun, brauzer mühərriki və cihaz proqramında işlənir.",
      "C++ is a systems language for speed and control. It is used in games, browser engines, and device software.",
      "C++ hız ve denetim için bir sistem dilidir. Oyun, tarayıcı motoru ve cihaz yazılımında kullanılır.",
      "C++ لغة أنظمة للسرعة والتحكم. تُستخدم في الألعاب ومحركات المتصفح وبرمجيات الأجهزة.",
      "C++ — системный язык для скорости и контроля. Его используют в играх, движках браузеров и программах устройств.",
    ),
    t("C++ nədir, C++ dili, C++ proqramlaşdırma, C++ yaddaş", "what is C++, C++ language, C++ programming, C++ memory", "C++ nedir, C++ dili, C++ programlama", "ما هي C++, لغة C++, برمجة C++", "что такое C++, язык C++, программирование на C++"),
    {
      what: t(
        "C++ C dilinin üstünə sinif, şablon və daha böyük standart kitabxana əlavə edir. Proqram maşın koduna yığılır. Yaddaşın nə vaxt alınacağını və qaytarılacağını çox vaxt proqramçı görür. Bu, sürət verir və səhv də bahalı edir.",
        "C++ adds classes, templates, and a larger standard library on top of C. The program compiles to machine code. The programmer usually decides when memory is taken and returned. That gives speed, and it also makes a mistake expensive.",
        "C++ , C dilinin üstüne sınıf, şablon ve daha büyük standart kütüphane ekler. Program makine koduna derlenir. Belleğin ne zaman alınıp verileceğini çoğu zaman programcı görür. Bu hız verir ve hatayı da pahalı yapar.",
        "تضيف C++ الأصناف والقوالب ومكتبة قياسية أكبر فوق C. يُصرَّف البرنامج إلى كود آلة. المبرمج عادة يقرر متى تُؤخذ الذاكرة ومتى تُعاد. هذا يعطي سرعة ويجعل الخطأ مكلفاً.",
        "C++ добавляет к C классы, шаблоны и большую стандартную библиотеку. Программа собирается в машинный код. Программист обычно сам решает, когда память берётся и возвращается. Это даёт скорость и делает ошибку дорогой.",
      ),
      uses: t("C++ hər millisaniyənin sayıldığı yerdə qalır.", "C++ stays where every millisecond is counted.", "C++ her milisaniyenin sayıldığı yerde kalır.", "تبقى C++ حيث تُحسب كل ملي ثانية.", "C++ остаётся там, где считают каждую миллисекунду."),
      useList: lines(
        ["Oyun mühərriki", "Brauzerin sürətli hissəsi", "Əməliyyat sisteminə yaxın kod", "Elmi və qrafik hesablama"],
        ["A game engine", "A fast part of a browser", "Code close to the operating system", "Scientific and graphics computation"],
        ["Oyun motoru", "Tarayıcının hızlı kısmı", "İşletim sistemine yakın kod", "Bilimsel ve grafik hesap"],
        ["محرك ألعاب", "جزء سريع من المتصفح", "كود قريب من نظام التشغيل", "حساب علمي ورسوم"],
        ["Игровой движок", "Быстрая часть браузера", "Код рядом с операционной системой", "Научный и графический счёт"],
      ),
      can: t(
        "C++ ilə böyük həcmli məlumatı az yaddaşla emal etmək, oyun dövrəsini yazmaq və mövcud C kitabxanasını çağırmaq olar. Kiçik veb səhifə və adi mobil forma üçün adətən ağırdır.",
        "With C++ you can process a large amount of data with little memory, write a game loop, and call an existing C library. For a small web page and an ordinary mobile form it is usually too heavy.",
        "C++ ile büyük veriyi az bellekle işlemek, oyun döngüsü yazmak ve mevcut C kütüphanesini çağırmak olur. Küçük web sayfası ve sıradan mobil form için genellikle ağırdır.",
        "بـ C++ يمكن معالجة بيانات كبيرة بذاكرة قليلة وكتابة حلقة لعبة واستدعاء مكتبة C موجودة. لصفحة ويب صغيرة ونموذج هاتف عادي تكون عادة ثقيلة.",
        "На C++ можно обрабатывать большой объём данных малой памятью, писать игровой цикл и вызывать готовую библиотеку C. Для маленькой веб-страницы и обычной мобильной формы это обычно слишком тяжело.",
      ),
      hard: t(
        "Öyrənmək çətindir. Göstərici, ömür və şablon xətası yeni başlayanı dayandırır. Əvvəl C və ya başqa dil görmək kömək edir, amma məcburi deyil. İlk faydalı proqram Go və ya Python-dan gec gəlir.",
        "It is hard to learn. Pointers, lifetimes, and template errors stop a beginner. Seeing C or another language first helps, but it is not required. The first useful program comes later than in Go or Python.",
        "Öğrenmesi zordur. İşaretçi, ömür ve şablon hatası yeni başlayanı durdurur. Önce C veya başka dil görmek yardım eder, ama zorunlu değildir. İlk yararlı program Go veya Python’dan geç gelir.",
        "تعلّمها صعب. المؤشرات والعمر وأخطاء القوالب توقف المبتدئ. رؤية C أو لغة أخرى أولاً تساعد، لكنها ليست واجبة. البرنامج المفيد الأول يأتي أبعد مما في Go أو Python.",
        "Учить трудно. Указатели, время жизни и ошибки шаблонов останавливают новичка. Сначала увидеть C или другой язык помогает, но не обязательно. Первая полезная программа приходит позже, чем на Go или Python.",
      ),
      balance: t(
        "Üstünlük: sürət, nəzarət və hazır sənaye kodu. Məhdudiyyət: yığım ləng ola bilər, yaddaş səhvi təhlükəlidir, sadə səhifə üçün artıqdır. Rust eyni sahədə yaddaşı daha sərt yoxlayır.",
        "Advantage: speed, control, and a large body of industry code. Limit: the build can be slow, a memory mistake is dangerous, and it is too much for a simple page. Rust checks memory more strictly in the same area.",
        "Avantaj: hız, denetim ve hazır sanayi kodu. Sınır: derleme yavaş olabilir, bellek hatası tehlikelidir, basit sayfa için fazladır. Rust aynı alanda belleği daha sert denetler.",
        "الميزة: السرعة والتحكم وكود صناعي جاهز كثير. الحد: قد يبطؤ البناء، وخطأ الذاكرة خطر، وهي زائدة لصفحة بسيطة. Rust تفحص الذاكرة بصرامة أكبر في المجال نفسه.",
        "Плюс: скорость, контроль и много готового промышленного кода. Ограничение: сборка может быть медленной, ошибка памяти опасна, для простой страницы этого слишком много. Rust в той же области проверяет память жёстче.",
      ),
      ideas: t(
        "Başlıq faylı elanı, mənbə faylı tətbiqi saxlayır. #include başqa faylı görür. new yaddaş alır, delete və ya ağıllı göstərici qaytarır.",
        "A header holds a declaration. A source file holds the implementation. #include sees another file. new takes memory. delete or a smart pointer gives it back.",
        "Başlık dosyası bildirimi, kaynak dosyası uygulamayı tutar. #include başka dosyayı görür. new bellek alır, delete veya akıllı işaretçi geri verir.",
        "ملف الترويسة يحمل التصريح، وملف المصدر يحمل التنفيذ. #include يرى ملفاً آخر. new يأخذ الذاكرة، وdelete أو المؤشر الذكي يعيدها.",
        "Заголовок хранит объявление, файл исходника — реализацию. #include видит другой файл. new берёт память, delete или умный указатель её возвращает.",
      ),
      ideaList: lines(
        ["class vəziyyət və funksiyanı bir yerdə saxlayır", "şablon tipi sonra doldurur", "RAII resursu obyektin ömrünə bağlayır", "CMake və ya başqa sistem yığımı təsvir edir"],
        ["A class keeps state and functions together", "A template fills in a type later", "RAII ties a resource to an object’s life", "CMake or another system describes the build"],
        ["class durum ve fonksiyonu bir yerde tutar", "şablon tipi sonra doldurur", "RAII kaynağı nesnenin ömrüne bağlar", "CMake veya başka sistem derlemeyi anlatır"],
        ["class تجمع الحالة والدوال", "القالب يملأ النوع لاحقاً", "RAII يربط المورد بعمر الكائن", "CMake أو نظام آخر يصف البناء"],
        ["class держит состояние и функции вместе", "шаблон подставляет тип позже", "RAII связывает ресурс со временем жизни объекта", "CMake или другая система описывает сборку"],
      ),
      sample: t("Bu proqram standart çıxışa bir sətir yazır və 0 ilə bitir.", "This program writes one line to standard output and ends with 0.", "Bu program standart çıktıya bir satır yazar ve 0 ile biter.", "هذا البرنامج يكتب سطراً في الخرج القياسي وينتهي بـ 0.", "Эта программа пишет одну строку в стандартный вывод и заканчивается нулём."),
      code: `#include <iostream>

int main() {
    std::cout << "Hello\\n";
    return 0;
}`,
      faq: lines(
        ["C və C++ eynidir? Xeyr. C++ sinif və şablon əlavə edir, köhnə C kodunu çox vaxt qəbul edir.", "C++ veb sayt üçündürmü? Əsas yol deyil. Sürətli xidmətdə ola bilər.", "Hər yeni layihə C++ olmalıdır? Xeyr. Sadə alət üçün Go, Python və ya Java daha qısa yoldur."],
        ["Are C and C++ the same? No. C++ adds classes and templates and often accepts old C code.", "Is C++ for a website? Not the main path. It can appear in a fast service.", "Must every new project be C++? No. For a simple tool, Go, Python, or Java is a shorter path."],
        ["C ve C++ aynı mı? Hayır. C++ sınıf ve şablon ekler, eski C kodunu çoğu zaman kabul eder.", "C++ web sitesi için mi? Ana yol değil. Hızlı bir hizmette görülebilir.", "Her yeni proje C++ olmalı mı? Hayır. Basit araç için Go, Python veya Java daha kısa yoldur."],
        ["هل C وC++ الشيء نفسه؟ لا. C++ تضيف الأصناف والقوالب وتقبل غالباً كود C القديم.", "هل C++ لموقع ويب؟ ليست الطريق الأساسي. قد تظهر في خدمة سريعة.", "هل يجب أن يكون كل مشروع جديد بـ C++؟ لا. للأداة البسيطة Go أو Python أو Java أقصر."],
        ["C и C++ — одно и то же? Нет. C++ добавляет классы и шаблоны и часто принимает старый код C.", "C++ для сайта? Не основной путь. Может быть в быстрой службе.", "Каждый новый проект должен быть на C++? Нет. Для простой утилиты Go, Python или Java короче."],
      ),
    },
  ),
  topic(
    "rust",
    "Rust",
    t("Rust nədir?", "What is Rust?", "Rust nedir?", "ما هي Rust؟", "Что такое Rust?"),
    t(
      "Rust yaddaş səhvini kompilyatorla tutan sistem dilidir. Sürət istəyəndə və C++ qədər əl ilə yaddaş istəməyəndə seçilir.",
      "Rust is a systems language that catches memory mistakes in the compiler. It is chosen when you want speed without managing memory by hand as in C++.",
      "Rust, bellek hatasını derleyicide tutan bir sistem dilidir. Hız istenip C++ kadar elle bellek istenmediğinde seçilir.",
      "Rust لغة أنظمة تمسك خطأ الذاكرة في المصرّف. تُختار حين تريد السرعة دون إدارة الذاكرة يدوياً كما في C++.",
      "Rust — системный язык, который ловит ошибку памяти в компиляторе. Его выбирают, когда нужна скорость без ручной памяти, как в C++.",
    ),
    t("Rust nədir, Rust dili, Rust ownership, Rust proqramlaşdırma", "what is Rust, Rust language, Rust ownership, Rust programming", "Rust nedir, Rust dili, Rust ownership", "ما هي Rust, لغة Rust, ملكية Rust", "что такое Rust, язык Rust, ownership Rust"),
    {
      what: t(
        "Rust Mozilla ətrafında başlayıb, indi ayrıca layihədir. Zibil yığan yoxdur. Bunun yerinə ownership qaydası var: hər dəyərin bir sahibi olur. Qayda pozularsa proqram yığılmır. Bu, çox səhvi işləmə anından əvvəl dayandırır.",
        "Rust started around Mozilla and is now a separate project. There is no garbage collector. Instead there is an ownership rule: every value has one owner. If the rule breaks, the program does not build. That stops many mistakes before the program runs.",
        "Rust Mozilla çevresinde başladı, şimdi ayrı bir projedir. Çöp toplayıcı yoktur. Yerine ownership kuralı vardır: her değerin bir sahibi olur. Kural bozulursa program derlenmez. Bu, birçok hatayı çalışma anından önce durdurur.",
        "بدأت Rust حول Mozilla وهي الآن مشروع مستقل. لا يوجد جامع قمامة. بدلاً منه قاعدة ownership: لكل قيمة مالك واحد. إذا انكسرت القاعدة لا يُبنى البرنامج. هذا يوقف كثيراً من الأخطاء قبل التشغيل.",
        "Rust началась вокруг Mozilla, теперь это отдельный проект. Сборщика мусора нет. Вместо него правило ownership: у каждого значения один владелец. Если правило нарушено, программа не собирается. Так много ошибок останавливается до запуска.",
      ),
      uses: t("Rust əmr sətri, şəbəkə xidməti, brauzer hissəsi və Wasm modulunda görünür.", "Rust shows up in a command-line tool, a network service, a browser piece, and a Wasm module.", "Rust komut satırı, ağ hizmeti, tarayıcı parçası ve Wasm modülünde görünür.", "تظهر Rust في أداة سطر أوامر وخدمة شبكة وجزء متصفح ووحدة Wasm.", "Rust встречается в утилите командной строки, сетевой службе, части браузера и модуле Wasm."),
      useList: lines(
        ["Təhlükəsiz sistem aləti", "Sürətli API", "Mövcud C kitabxanasını çağırmaq", "Wasm ilə brauzerdə iş"],
        ["A safer system tool", "A fast API", "Calling an existing C library", "Work in the browser with Wasm"],
        ["Daha güvenli sistem aracı", "Hızlı API", "Mevcut C kütüphanesini çağırmak", "Wasm ile tarayıcıda iş"],
        ["أداة نظام أأمن", "واجهة سريعة", "استدعاء مكتبة C موجودة", "عمل في المتصفح مع Wasm"],
        ["Более безопасная системная утилита", "Быстрый API", "Вызов готовой библиотеки C", "Работа в браузере через Wasm"],
      ),
      can: t(
        "Rust ilə yaddaş daşması riski az olan alət və servis yazılır. cargo paket qurur və test işlədir. Öyrənmə əyrisi dikdir, ona görə kiçik skript üçün Python qısa qalır.",
        "With Rust you write a tool and a service with less risk of a memory overrun. cargo builds the package and runs tests. The learning curve is steep, so Python stays shorter for a small script.",
        "Rust ile bellek taşması riski az olan araç ve servis yazılır. cargo paketi derler ve testi çalıştırır. Öğrenme eğrisi diktir, bu yüzden küçük betik için Python kısa kalır.",
        "بـ Rust تكتب أداة وخدمة بخطر أقل لتجاوز الذاكرة. cargo يبني الحزمة ويشغّل الاختبار. منحنى التعلم حاد، لذلك تبقى Python أقصر لسكربت صغير.",
        "На Rust пишут утилиту и сервис с меньшим риском выхода за память. cargo собирает пакет и запускает тесты. Кривая обучения крутая, поэтому для маленького скрипта Python короче.",
      ),
      hard: t(
        "İlk həftə çətindir. Borrow checker kodu rədd edəndə səbəb yaddaş qaydasıdır, sintaksis deyil. Öyrənəndən sonra refaktor daha sakit olur, çünki çox səhv yığılmır.",
        "The first week is hard. When the borrow checker rejects code, the reason is a memory rule, not the syntax. After that, a refactor is calmer because many mistakes do not build.",
        "İlk hafta zordur. Borrow checker kodu reddedince sebep bellek kuralıdır, sözdizimi değil. Öğrenince refaktör daha sakindir, çünkü çok hata derlenmez.",
        "الأسبوع الأول صعب. حين يرفض borrow checker الكود فالسبب قاعدة ذاكرة لا القواعد. بعد التعلم تصبح إعادة الهيكلة أهدأ لأن كثيراً من الأخطاء لا تُبنى.",
        "Первая неделя трудная. Когда borrow checker отвергает код, причина в правиле памяти, не в синтаксисе. После обучения рефакторинг спокойнее, потому что многие ошибки не собираются.",
      ),
      balance: t(
        "Üstünlük: sürət və yaddaş təhlükəsizliyi bir yerdədir. Məhdudiyyət: kompilyator sərtidir, yığım vaxtı uzana bilər, GUI və sadə veb hələ birinci seçim deyil.",
        "Advantage: speed and memory safety sit together. Limit: the compiler is strict, build time can grow, and a GUI or a simple website is still not the first choice.",
        "Avantaj: hız ve bellek güvenliği bir yerdedir. Sınır: derleyici serttir, derleme süresi uzayabilir, GUI ve basit web hâlâ ilk seçim değildir.",
        "الميزة: السرعة وأمان الذاكرة معاً. الحد: المصرّف صارم، وقد يطول البناء، وواجهة الرسومات أو الموقع البسيط ليسا الخيار الأول بعد.",
        "Плюс: скорость и безопасность памяти вместе. Ограничение: компилятор строгий, сборка может длиться, GUI и простой сайт всё ещё не первый выбор.",
      ),
      ideas: t(
        "Ownership sahibliyi, borrow isə müvəqqəti baxışı deyir. String böyüyən mətndir. &str isə başqa yerdə duran mətnə baxışdır.",
        "Ownership is who owns a value. A borrow is a temporary look. String is growable text. &str is a view of text that lives somewhere else.",
        "Ownership sahipliği, borrow geçici bakışı söyler. String büyüyen metindir. &str başka yerde duran metne bakıştır.",
        "ownership هي الملكية، وborrow نظرة مؤقتة. String نص قابل للنمو. ‎&str نظرة إلى نص يعيش في مكان آخر.",
        "Ownership — кто владеет значением. borrow — временный взгляд. String — растущий текст. &str — взгляд на текст, который живёт в другом месте.",
      ),
      ideaList: lines(
        ["cargo new layihə açır", "crate paketdir", "Result xətanı dəyərlə qaytarır", "unsafe bloku qaydanı bilərəkdən gevşedir"],
        ["cargo new opens a project", "A crate is a package", "Result returns an error as a value", "An unsafe block loosens the rule on purpose"],
        ["cargo new proje açar", "crate pakettir", "Result hatayı değerle döndürür", "unsafe bloğu kuralı bilerek gevşetir"],
        ["cargo new يفتح مشروعاً", "crate حزمة", "Result يعيد الخطأ كقيمة", "كتلة unsafe ترخي القاعدة عن قصد"],
        ["cargo new открывает проект", "crate — пакет", "Result возвращает ошибку значением", "блок unsafe специально ослабляет правило"],
      ),
      sample: t("Bu proqram terminala bir sətir yazır. Əmr: cargo run.", "This program writes one line to the terminal. The command is cargo run.", "Bu program terminale bir satır yazar. Komut: cargo run.", "هذا البرنامج يكتب سطراً في الطرفية. الأمر: cargo run.", "Эта программа пишет одну строку в терминал. Команда: cargo run."),
      code: `fn main() {
    println!("Hello");
}`,
      faq: lines(
        ["Rust C++ yerinə keçib? Hər yerdə yox. Yeni sistem alətində tez-tez seçilir, köhnə kod qalır.", "Zibil yığan var? Xeyr. Yaddaş sahiblik qaydası ilə izlənir.", "Öyrənmək Python qədər tezdir? Xeyr. İlk həftə daha dikdir."],
        ["Has Rust replaced C++? Not everywhere. It is often chosen for a new system tool. Old code stays.", "Is there a garbage collector? No. Memory is tracked by the ownership rule.", "Is it as fast to learn as Python? No. The first week is steeper."],
        ["Rust, C++’ın yerine geçti mi? Her yerde değil. Yeni sistem aracında sık seçilir, eski kod kalır.", "Çöp toplayıcı var mı? Hayır. Bellek sahiplik kuralıyla izlenir.", "Öğrenmek Python kadar hızlı mı? Hayır. İlk hafta daha diktir."],
        ["هل حلّت Rust محل C++؟ ليس في كل مكان. تُختار كثيراً لأداة نظام جديدة، والكود القديم يبقى.", "هل يوجد جامع قمامة؟ لا. تُتابع الذاكرة بقاعدة الملكية.", "هل التعلّم بسرعة Python؟ لا. الأسبوع الأول أحدّ."],
        ["Rust заменила C++? Не везде. Её часто выбирают для новой системной утилиты. Старый код остаётся.", "Есть сборщик мусора? Нет. Память следит по правилу владения.", "Учится так же быстро, как Python? Нет. Первая неделя круче."],
      ),
    },
  ),
];
