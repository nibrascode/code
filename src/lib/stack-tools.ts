import type { StackPage } from "@/lib/stack-pages";
import { lines, t, topic } from "@/lib/stack-pages";

export const STACK_TOOLS: readonly StackPage[] = [
  topic(
    "ubuntu",
    "Ubuntu",
    t("Ubuntu nədir?", "What is Ubuntu?", "Ubuntu nedir?", "ما هو Ubuntu؟", "Что такое Ubuntu?"),
    t(
      "Ubuntu Debian əsaslı Linux paylanmasıdır. Həm masaüstündə, həm də serverdə proqram qurmaq üçün işlənir.",
      "Ubuntu is a Debian-based Linux distribution. It is used on a desktop and on a server to install and run software.",
      "Ubuntu, Debian tabanlı bir Linux dağıtımıdır. Hem masaüstünde hem sunucuda program kurmak için kullanılır.",
      "Ubuntu توزيعة Linux مبنية على Debian. تُستخدم على سطح المكتب وعلى الخادم لتثبيت البرامج وتشغيلها.",
      "Ubuntu — дистрибутив Linux на базе Debian. Его ставят на рабочий стол и на сервер, чтобы ставить и запускать программы.",
    ),
    t("Ubuntu nədir, Ubuntu server, Linux Ubuntu, apt", "what is Ubuntu, Ubuntu server, Linux Ubuntu, apt", "Ubuntu nedir, Ubuntu server, Linux, apt", "ما هو Ubuntu, خادم Ubuntu, Linux, apt", "что такое Ubuntu, сервер Ubuntu, Linux, apt"),
    {
      what: t(
        "Ubuntu Linux nüvəsi üstündə hazır sistemdir. Proqramlar apt ilə paketlənir. Uzunmüddətli dəstəkli LTS buraxılışları, məsələn 22.04 və 24.04, server üçün seçilir. Bu proqramlaşdırma dili deyil: dil və alət onun üzərində qurulur.",
        "Ubuntu is a ready system on the Linux kernel. Programs are packaged with apt. Long-term support releases, such as 22.04 and 24.04, are chosen for servers. It is not a programming language: a language and a tool are installed on top of it.",
        "Ubuntu, Linux çekirdeği üzerinde hazır bir sistemdir. Programlar apt ile paketlenir. 22.04 ve 24.04 gibi uzun destekli LTS sürümleri sunucu için seçilir. Bu bir programlama dili değildir: dil ve araç onun üstüne kurulur.",
        "Ubuntu نظام جاهز فوق نواة Linux. تُحزَّم البرامج بـ apt. إصدارات الدعم الطويل مثل 22.04 و24.04 تُختار للخادم. ليست لغة برمجة: اللغة والأداة تُثبتان فوقها.",
        "Ubuntu — готовая система на ядре Linux. Программы пакуются через apt. Выпуски с долгой поддержкой, например 22.04 и 24.04, берут для сервера. Это не язык программирования: язык и инструмент ставят поверх.",
      ),
      uses: t(
        "Ubuntu inkişaf maşını və server üçün ən çox yayılmış Linux-lardan biridir.",
        "Ubuntu is one of the most common Linux systems for a development machine and a server.",
        "Ubuntu, geliştirme makinesi ve sunucu için en yaygın Linux’lardan biridir.",
        "Ubuntu من أكثر أنظمة Linux شيوعاً لجهاز التطوير وللخادم.",
        "Ubuntu — одна из самых распространённых Linux-систем для машины разработки и для сервера.",
      ),
      useList: lines(
        ["Veb server üçün maşın", "Docker və Nginx qurmaq", "Proqramı apt ilə quraşdırmaq", "Uzaq serverə SSH ilə girmək"],
        ["A machine for a web server", "Installing Docker and Nginx", "Installing a program with apt", "Entering a remote server with SSH"],
        ["Web sunucusu için makine", "Docker ve Nginx kurmak", "Programı apt ile kurmak", "Uzak sunucuya SSH ile girmek"],
        ["جهاز لخادم ويب", "تثبيت Docker وNginx", "تثبيت برنامج بـ apt", "الدخول إلى خادم بعيد بـ SSH"],
        ["Машина для веб-сервера", "Установка Docker и Nginx", "Установка программы через apt", "Вход на дальний сервер по SSH"],
      ),
      can: t(
        "Ubuntu-da terminaldan paket qurursan, fayl icazəsini dəyişirsən, servisi systemd ilə açıb-bağlayırsan. Masaüstü buraxılışında pəncərə mühiti də var. Server buraxılışında pəncərə olmur, iş əmr sətirindədir.",
        "On Ubuntu you install a package from the terminal, change a file permission, and start or stop a service with systemd. The desktop release also has a window environment. The server release has no windows. The work is on the command line.",
        "Ubuntu’da terminalden paket kurarsın, dosya iznini değiştirirsin, servisi systemd ile açıp kapatırsın. Masaüstü sürümünde pencere ortamı da vardır. Sunucu sürümünde pencere yoktur, iş komut satırındadır.",
        "على Ubuntu تثبّت حزمة من الطرفية وتغيّر إذن ملف وتفتح خدمة أو تغلقها بـ systemd. إصدار سطح المكتب فيه بيئة نوافذ. إصدار الخادم بلا نوافذ، والعمل في سطر الأوامر.",
        "В Ubuntu пакет ставят из терминала, меняют право файла и включают или выключают службу через systemd. В настольном выпуске есть оконная среда. В серверном окон нет, работа в командной строке.",
      ),
      hard: t(
        "Pəncərəli Ubuntu-da ilk gün asandır. Çətinlik terminal, icazə və servisdə başlayır. sudo hər əmr üçün lazım deyil. Yalnız sistem dəyişəndə işlədilir.",
        "The first day on desktop Ubuntu is easy. The difficulty starts with the terminal, permissions, and services. sudo is not needed for every command. It is used only when the system itself changes.",
        "Pencereli Ubuntu’da ilk gün kolaydır. Zorluk terminal, izin ve serviste başlar. sudo her komut için gerekmez. Yalnız sistem değişince kullanılır.",
        "اليوم الأول على Ubuntu المكتبي سهل. تبدأ الصعوبة مع الطرفية والأذونات والخدمات. sudo ليس لكل أمر. يُستخدم فقط حين يتغير النظام نفسه.",
        "Первый день на настольной Ubuntu простой. Трудность начинается с терминала, прав и служб. sudo не нужен для каждой команды. Его берут, только когда меняется сама система.",
      ),
      balance: t(
        "Üstünlük: pulsuzdur, paket çoxdur, server sənədləri boldur. Məhdudiyyət: bəzi qapalı masaüstü proqramları və oyunlar Windows üçündür. LTS ilə adi buraxılışı qarışdırmaq yeniləməni poza bilər.",
        "Advantage: it is free, there are many packages, and server documentation is plentiful. Limit: some closed desktop programs and games are for Windows. Mixing an LTS release with a short one can break an upgrade.",
        "Avantaj: ücretsizdir, paket çoktur, sunucu belgesi boldur. Sınır: bazı kapalı masaüstü programları ve oyunlar Windows içindir. LTS ile kısa sürümü karıştırmak yükseltmeyi bozabilir.",
        "الميزة: مجانية، والحزم كثيرة، ووثائق الخادم وفيرة. الحد: بعض برامج سطح المكتب المغلقة والألعاب لـ Windows. خلط إصدار LTS بإصدار قصير قد يكسر الترقية.",
        "Плюс: бесплатна, пакетов много, серверной документации много. Ограничение: часть закрытых настольных программ и игр только для Windows. Смешение выпуска LTS с коротким может сломать обновление.",
      ),
      ideas: t(
        "Paket mənbəyi repozitoridir. apt siyahını yeniləyir və paketi qurur. Servis arxa planda systemd ilə işləyir.",
        "A package source is a repository. apt refreshes the list and installs a package. A service runs in the background with systemd.",
        "Paket kaynağı depodur. apt listeyi yeniler ve paketi kurar. Servis arka planda systemd ile çalışır.",
        "مصدر الحزم مستودع. apt يحدّث القائمة ويثبّت الحزمة. الخدمة تعمل في الخلفية عبر systemd.",
        "Источник пакетов — репозиторий. apt обновляет список и ставит пакет. Служба работает в фоне через systemd.",
      ),
      ideaList: lines(
        ["LTS illərlə yeniləmə alır", "root ən yüksək istifadəçidir", "sudo həmin hüququ bir əmrə verir", "/etc tənzim fayllarının yeridir"],
        ["An LTS release gets updates for years", "root is the highest user", "sudo gives that right to one command", "/etc is the place for config files"],
        ["LTS yıllarca güncelleme alır", "root en yüksek kullanıcıdır", "sudo o hakkı bir komuta verir", "/etc ayar dosyalarının yeridir"],
        ["إصدار LTS يأخذ تحديثات لسنوات", "root أعلى مستخدم", "sudo يعطي ذلك الحق لأمر واحد", "/etc مكان ملفات الضبط"],
        ["Выпуск LTS получает обновления годами", "root — самый высокий пользователь", "sudo даёт это право одной команде", "/etc — место файлов настройки"],
      ),
      sample: t(
        "Bu əmrlər paket siyahısını yeniləyir və Nginx qurur. Serverdə bunu yalnız ehtiyac olanda işlət.",
        "These commands refresh the package list and install Nginx. On a server, run this only when you need it.",
        "Bu komutlar paket listesini yeniler ve Nginx kurar. Sunucuda bunu yalnız gerektiğinde çalıştır.",
        "هذه الأوامر تحدّث قائمة الحزم وتثبّت Nginx. على الخادم شغّلها فقط عند الحاجة.",
        "Эти команды обновляют список пакетов и ставят Nginx. На сервере запускай это только когда нужно.",
      ),
      code: `sudo apt update
sudo apt install -y nginx`,
      faq: lines(
        [
          "Ubuntu və Linux eynidir? Linux nüvədir. Ubuntu həmin nüvə ilə yığılmış paylanmadır.",
          "Ubuntu pulsuzdur? Bəli. Özəl dəstək ayrıca satıla bilər.",
          "Windows proqramı Ubuntu-da birbaşa açılır? Çox vaxt yox. Linux üçün qurulmuş variant lazımdır.",
        ],
        [
          "Are Ubuntu and Linux the same? Linux is the kernel. Ubuntu is a distribution built with that kernel.",
          "Is Ubuntu free? Yes. Private support can be sold separately.",
          "Does a Windows program open on Ubuntu? Usually no. You need a build made for Linux.",
        ],
        [
          "Ubuntu ve Linux aynı mı? Linux çekirdektir. Ubuntu o çekirdekle kurulmuş dağıtımdır.",
          "Ubuntu ücretsiz mi? Evet. Özel destek ayrıca satılabilir.",
          "Windows programı Ubuntu’da doğrudan açılır mı? Çoğu zaman hayır. Linux için yapılmış sürüm gerekir.",
        ],
        [
          "هل Ubuntu وLinux الشيء نفسه؟ Linux هي النواة. Ubuntu توزيعة مبنية بتلك النواة.",
          "هل Ubuntu مجانية؟ نعم. الدعم الخاص قد يُباع وحده.",
          "هل يفتح برنامج Windows على Ubuntu مباشرة؟ غالباً لا. يلزم بناء مصنوع لـ Linux.",
        ],
        [
          "Ubuntu и Linux — одно и то же? Linux — ядро. Ubuntu — дистрибутив, собранный с этим ядром.",
          "Ubuntu бесплатна? Да. Частную поддержку могут продавать отдельно.",
          "Программа Windows открывается в Ubuntu напрямую? Обычно нет. Нужна сборка для Linux.",
        ],
      ),
    },
  ),
  topic(
    "java-17",
    "Java 17",
    t("Java 17 nədir?", "What is Java 17?", "Java 17 nedir?", "ما هو Java 17؟", "Что такое Java 17?"),
    t(
      "Java 17 dilin uzunmüddətli dəstəkli buraxılışıdır. Ən yeni Java deyil, amma server və alətlərdə hələ geniş işlənir.",
      "Java 17 is a long-term support release of the language. It is not the newest Java, but servers and tools still use it widely.",
      "Java 17, dilin uzun destekli sürümüdür. En yeni Java değildir, ama sunucu ve araçlarda hâlâ geniş kullanılır.",
      "Java 17 إصدار دعم طويل للغة. ليس أحدث Java، لكن الخوادم والأدوات ما زالت تستخدمه على نطاق واسع.",
      "Java 17 — выпуск языка с долгой поддержкой. Это не самая новая Java, но серверы и инструменты всё ещё широко его используют.",
    ),
    t("Java 17, Java LTS, Java 17 record, Java 17 JDK", "Java 17, Java LTS, Java 17 records, Java 17 JDK", "Java 17, Java LTS, Java 17 record, JDK", "Java 17, Java LTS, سجلات Java 17, JDK", "Java 17, Java LTS, record Java 17, JDK"),
    {
      what: t(
        "Java 17 2021-ci ilin sentyabrında çıxıb və LTS-dir. Ondan əvvəl geniş LTS Java 11 idi, sonra Java 21 gəldi. 17-də record, sealed class və instanceof üçün pattern matching hazır vəziyyətdədir. Text block daha əvvəl gəlib, 17-də də var.",
        "Java 17 came out in September 2021 and is an LTS release. The wide LTS before it was Java 11, and Java 21 came later. In 17, records, sealed classes, and pattern matching for instanceof are finished. Text blocks arrived earlier and are in 17 too.",
        "Java 17 Eylül 2021’de çıktı ve LTS’tir. Ondan önce yaygın LTS Java 11 idi, sonra Java 21 geldi. 17’de record, sealed class ve instanceof için pattern matching hazırdır. Text block daha önce geldi, 17’de de vardır.",
        "صدر Java 17 في سبتمبر 2021 وهو إصدار LTS. قبله كان Java 11 هو LTS الواسع، ثم جاء Java 21. في 17 أصبحت records وsealed class وpattern matching لـ instanceof جاهزة. كتل النص جاءت قبل ذلك وهي موجودة في 17 أيضاً.",
        "Java 17 вышла в сентябре 2021 года и это выпуск LTS. Широкий LTS до неё был Java 11, позже пришла Java 21. В 17 готовы record, sealed class и pattern matching для instanceof. Текстовые блоки пришли раньше и в 17 тоже есть.",
      ),
      uses: t(
        "Java 17 server tətbiqi, kitabxana və bəzi Android yığım alətlərinin hədəfidir.",
        "Java 17 is a target for a server app, a library, and some Android build tools.",
        "Java 17 sunucu uygulaması, kütüphane ve bazı Android derleme araçlarının hedefidir.",
        "Java 17 هدف لتطبيق خادم ومكتبة وبعض أدوات بناء Android.",
        "Java 17 — цель для серверного приложения, библиотеки и части инструментов сборки Android.",
      ),
      useList: lines(
        ["Spring kimi server çərçivəsi", "Köhnə 8 və 11 kodunu yeniləmək", "Record ilə qısa məlumat tipi", "JDK alətlərini sabit saxlamaq"],
        ["A server framework such as Spring", "Moving old Java 8 or 11 code", "A short data type with a record", "Keeping the JDK tools stable"],
        ["Spring gibi sunucu çatısı", "Eski Java 8 veya 11 kodunu taşımak", "Record ile kısa veri tipi", "JDK araçlarını sabit tutmak"],
        ["إطار خادم مثل Spring", "نقل كود Java 8 أو 11 القديم", "نوع بيانات قصير بـ record", "إبقاء أدوات JDK ثابتة"],
        ["Серверный фреймворк вроде Spring", "Перенос старого кода Java 8 или 11", "Короткий тип данных через record", "Стабильные инструменты JDK"],
      ),
      can: t(
        "Java 17 ilə Java 11-də yazılmış proqramı, sınadıqdan sonra, daha yeni sintaksislə aparmaq olar. Yeni layihədə record DTO-nu qısaldır. Ən son sintaksis, məsələn sonrakı LTS-də gələn bəzi şeylər, 17-də yoxdur.",
        "With Java 17 you can move a program written on Java 11 to newer syntax after you test it. In a new project a record shortens a DTO. The very newest syntax, including some things from a later LTS, is not in 17.",
        "Java 17 ile Java 11’de yazılmış programı sınadıktan sonra daha yeni sözdizimine taşıyabilirsin. Yeni projede record bir DTO’yu kısaltır. En yeni sözdizimi, sonraki LTS’te gelen bazı şeyler, 17’de yoktur.",
        "بـ Java 17 يمكن نقل برنامج مكتوب على Java 11 إلى صياغة أحدث بعد الاختبار. في مشروع جديد يقصّر record نوع البيانات. أحدث صياغة، ومنها أشياء من LTS لاحق، ليست في 17.",
        "На Java 17 программу с Java 11 можно перенести на более новый синтаксис после проверки. В новом проекте record укорачивает DTO. Самого нового синтаксиса, включая часть вещей из более позднего LTS, в 17 нет.",
      ),
      hard: t(
        "Java bilən üçün 17 yeni dil deyil. Çətinlik köhnə JDK-dan keçid, silinmiş daxili API və yığım alətinin versiyasıdır. java --version 17 göstərmirsə, kod 17 sayılmır.",
        "For someone who knows Java, 17 is not a new language. The difficulty is the move from an old JDK, removed internal APIs, and the version of the build tool. If java --version does not show 17, the code is not on 17.",
        "Java bilen için 17 yeni bir dil değildir. Zorluk eski JDK’dan geçiş, kaldırılmış iç API ve derleme aracının sürümüdür. java --version 17 göstermiyorsa kod 17 sayılmaz.",
        "لمن يعرف Java، الإصدار 17 ليس لغة جديدة. الصعوبة في الانتقال من JDK قديم وواجهات داخلية أُزيلت وإصدار أداة البناء. إذا لم يُظهر java --version الرقم 17 فالكود ليس على 17.",
        "Для того, кто знает Java, 17 — не новый язык. Трудность в переходе со старого JDK, удалённых внутренних API и версии инструмента сборки. Если java --version не показывает 17, код не на 17.",
      ),
      balance: t(
        "Üstünlük: illərlə dəstək, sabitlik və geniş kitabxana. Məhdudiyyət: 21 və sonrakı LTS-də olan bəzi dil imkanları burada yoxdur. Layihə 8-də qalıbsa, keçid testsiz olmaz.",
        "Advantage: years of support, stability, and a wide library set. Limit: some language features from 21 and later LTS releases are not here. If a project is still on 8, the move is not free of tests.",
        "Avantaj: yıllarca destek, kararlılık ve geniş kütüphane. Sınır: 21 ve sonraki LTS’teki bazı dil olanakları burada yoktur. Proje 8’de kaldıysa geçiş testsiz olmaz.",
        "الميزة: دعم لسنوات وثبات ومكتبات واسعة. الحد: بعض إمكانات اللغة من 21 وما بعده ليست هنا. إذا بقي المشروع على 8 فالانتقال لا يخلو من اختبار.",
        "Плюс: поддержка на годы, стабильность и широкие библиотеки. Ограничение: части возможностей языка из 21 и более поздних LTS здесь нет. Если проект ещё на 8, переход не обходится без тестов.",
      ),
      ideas: t(
        "JDK dili və alətləri verir. JRE yalnız işlətmək üçündür. Record sahələri olan qısa sinifdir.",
        "The JDK gives the language and the tools. A JRE is only for running. A record is a short class with fields.",
        "JDK dili ve araçları verir. JRE yalnız çalıştırmak içindir. Record alanları olan kısa sınıftır.",
        "JDK يعطي اللغة والأدوات. JRE للتشغيل فقط. record صنف قصير بحقول.",
        "JDK даёт язык и инструменты. JRE только для запуска. record — короткий класс с полями.",
      ),
      ideaList: lines(
        ["LTS uzunmüddətli dəstək deməkdir", "sealed class kim miras ala bilər, onu məhdudlaşdırır", "pattern matching instanceof yoxlamanı qısaldır", "Gradle və ya Maven hansı JDK ilə yığdığını seçir"],
        ["LTS means long-term support", "A sealed class limits who can extend it", "Pattern matching shortens an instanceof check", "Gradle or Maven chooses which JDK builds the project"],
        ["LTS uzun destek demektir", "sealed class kimin kalıt alacağını sınırlar", "pattern matching instanceof kontrolünü kısaltır", "Gradle veya Maven projenin hangi JDK ile derleneceğini seçer"],
        ["LTS تعني دعماً طويلاً", "sealed class يحد من يرثه", "pattern matching يقصّر فحص instanceof", "Gradle أو Maven يختار أي JDK يبني المشروع"],
        ["LTS значит долгую поддержку", "sealed class ограничивает, кто может наследоваться", "pattern matching укорачивает проверку instanceof", "Gradle или Maven выбирает, каким JDK собирать проект"],
      ),
      sample: t(
        "Əvvəl quraşdırılmış versiyaya bax. Sonra record kiçik məlumat tipini belə yazır.",
        "First look at the installed version. Then a record writes a small data type like this.",
        "Önce kurulu sürüme bak. Sonra record küçük bir veri tipini böyle yazar.",
        "انظر أولاً إلى الإصدار المثبّت. ثم يكتب record نوع بيانات صغير هكذا.",
        "Сначала посмотри установленную версию. Затем record записывает маленький тип данных так.",
      ),
      code: `java --version

record Point(int x, int y) {}
`,
      faq: lines(
        [
          "Java 17 ən yeni versiyadır? Xeyr. Daha yeni LTS var. 17 hələ çox yerdə hədəfdir.",
          "Java 17 və Java dili ayrıdır? Xeyr. 17 dilin bir buraxılışıdır.",
          "Android üçün Java 17 kifayətdir? Yığım aləti icazə verirsə bəli. Bunu layihənin Gradle faylı göstərir.",
        ],
        [
          "Is Java 17 the newest version? No. A newer LTS exists. 17 is still the target in many places.",
          "Are Java 17 and the Java language different? No. 17 is one release of the language.",
          "Is Java 17 enough for Android? Yes if the build tool allows it. The project's Gradle file shows that.",
        ],
        [
          "Java 17 en yeni sürüm mü? Hayır. Daha yeni bir LTS vardır. 17 hâlâ birçok yerde hedeftir.",
          "Java 17 ve Java dili ayrı mı? Hayır. 17 dilin bir sürümüdür.",
          "Android için Java 17 yeter mi? Derleme aracı izin veriyorsa evet. Bunu projenin Gradle dosyası gösterir.",
        ],
        [
          "هل Java 17 أحدث إصدار؟ لا. يوجد LTS أحدث. 17 ما زال هدفاً في أماكن كثيرة.",
          "هل Java 17 ولغة Java مختلفان؟ لا. 17 إصدار من اللغة.",
          "هل Java 17 يكفي لـ Android؟ نعم إذا سمحت أداة البناء. ملف Gradle في المشروع يُظهر ذلك.",
        ],
        [
          "Java 17 — самая новая версия? Нет. Есть более новый LTS. 17 всё ещё цель во многих местах.",
          "Java 17 и язык Java — разное? Нет. 17 — один выпуск языка.",
          "Java 17 хватает для Android? Да, если инструмент сборки разрешает. Это видно в Gradle-файле проекта.",
        ],
      ),
    },
  ),
];
