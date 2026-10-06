import type { StackPage } from "@/lib/stack-pages";
import { lines, t, topic } from "@/lib/stack-pages";

export const STACK_REST: readonly StackPage[] = [
  topic(
    "php",
    "PHP",
    t("PHP nədir?", "What is PHP?", "PHP nedir?", "ما هي PHP؟", "Что такое PHP?"),
    t(
      "PHP serverdə işləyən veb dilidir. Səhifəni göndərməzdən əvvəl HTML yaradır. WordPress və Laravel onun üstündədir.",
      "PHP is a web language that runs on the server. It builds HTML before the page is sent. WordPress and Laravel sit on top of it.",
      "PHP sunucuda çalışan bir web dilidir. Sayfayı göndermeden önce HTML üretir. WordPress ve Laravel onun üstündedir.",
      "PHP لغة ويب تعمل على الخادم. تبني HTML قبل إرسال الصفحة. WordPress وLaravel مبنيان عليها.",
      "PHP — веб-язык, который работает на сервере. Он собирает HTML до отправки страницы. На нём стоят WordPress и Laravel.",
    ),
    t("PHP nədir, PHP dili, Laravel, WordPress PHP", "what is PHP, PHP language, Laravel, WordPress PHP", "PHP nedir, PHP dili, Laravel, WordPress", "ما هي PHP, لغة PHP, Laravel, WordPress", "что такое PHP, язык PHP, Laravel, WordPress"),
    {
      what: t(
        "PHP kodu adətən serverdə, Nginx və ya Apache arxasında işləyir. Brauzerə hazır HTML, bəzən JSON gedir. Dil 1995-ci ildən veb üçündür. Müasir PHP-də sinif, tip və paket meneceri Composer var.",
        "PHP usually runs on the server, behind Nginx or Apache. The browser receives finished HTML, and sometimes JSON. The language has been for the web since 1995. Modern PHP has classes, types, and the Composer package manager.",
        "PHP kodu genellikle sunucuda, Nginx veya Apache arkasında çalışır. Tarayıcıya hazır HTML, bazen JSON gider. Dil 1995’ten beri web içindir. Modern PHP’de sınıf, tip ve Composer paket yöneticisi vardır.",
        "يعمل كود PHP عادة على الخادم خلف Nginx أو Apache. يصل المتصفح HTML جاهز وأحياناً JSON. اللغة للويب منذ 1995. في PHP الحديثة أصناف وأنواع ومدير الحزم Composer.",
        "Код PHP обычно работает на сервере за Nginx или Apache. Браузер получает готовый HTML, иногда JSON. Язык для веба с 1995 года. В современном PHP есть классы, типы и менеджер пакетов Composer.",
      ),
      uses: t(
        "PHP sayt, idarə paneli və sadə API üçün işlənir. Hosting-lərin çoxu onu hazır verir.",
        "PHP is used for a site, an admin panel, and a simple API. Many hosts already provide it.",
        "PHP site, yönetim paneli ve basit API için kullanılır. Birçok barındırma onu hazır sunar.",
        "تُستخدم PHP للموقع ولوحة الإدارة وواجهة بسيطة. كثير من الاستضافات تقدمها جاهزة.",
        "PHP берут для сайта, панели управления и простого API. Многие хостинги уже дают его готовым.",
      ),
      useList: lines(
        ["WordPress saytı", "Laravel ilə tətbiq", "Formadan gələn məlumat", "MySQL ilə səhifə"],
        ["A WordPress site", "An app with Laravel", "Data from a form", "A page with MySQL"],
        ["WordPress sitesi", "Laravel ile uygulama", "Formdan gelen veri", "MySQL ile sayfa"],
        ["موقع WordPress", "تطبيق بـ Laravel", "بيانات من نموذج", "صفحة مع MySQL"],
        ["Сайт на WordPress", "Приложение на Laravel", "Данные из формы", "Страница с MySQL"],
      ),
      can: t(
        "PHP ilə məqalə saytı, girişli kabinet və ödənişdən sonra səhifə yazılır. Şablon HTML-in içinə qarışa bilər, amma Laravel kimi çərçivə bunu ayırır. Əmr sətri skripti də olar, amma əsas yeri vebdir.",
        "With PHP you write an article site, a cabinet with login, and a page after a payment. A template can mix into HTML, but a framework such as Laravel separates that. A command-line script is possible, but the main place is the web.",
        "PHP ile yazı sitesi, girişli kabine ve ödemeden sonra sayfa yazılır. Şablon HTML’in içine karışabilir, ama Laravel gibi bir çatı bunu ayırır. Komut satırı betiği de olur, asıl yeri webdir.",
        "بـ PHP تكتب موقع مقالات وخزانة بتسجيل دخول وصفحة بعد الدفع. قد يختلط القالب مع HTML، لكن إطاراً مثل Laravel يفصل ذلك. يمكن سكربت سطر أوامر، لكن المكان الأساسي هو الويب.",
        "На PHP пишут сайт со статьями, кабинет со входом и страницу после оплаты. Шаблон может смешаться с HTML, но фреймворк вроде Laravel это разделяет. Скрипт командной строки тоже возможен, главное место — веб.",
      ),
      hard: t(
        "Köhnə nümunələr qarışıqdır, ona görə dil çətin görünür. Müasir PHP, tip və Composer ilə daha düzdür. Çətin yer təhlükəsizlikdir: istifadəçi mətnini SQL-ə və HTML-ə birbaşa yapışdırmaq olmaz.",
        "Old examples are messy, so the language looks hard. Modern PHP with types and Composer is straighter. The hard part is security: do not paste user text straight into SQL or HTML.",
        "Eski örnekler karışıktır, bu yüzden dil zor görünür. Tipli modern PHP ve Composer daha düzdür. Zor yer güvenliktir: kullanıcı metnini SQL ve HTML içine doğrudan yapıştırmayın.",
        "الأمثلة القديمة فوضوية، لذلك تبدو اللغة صعبة. PHP الحديثة مع الأنواع وComposer أوضح. الصعب هو الأمان: لا تلصق نص المستخدم مباشرة في SQL أو HTML.",
        "Старые примеры беспорядочные, поэтому язык кажется трудным. Современный PHP с типами и Composer прямее. Трудное место — безопасность: нельзя вставлять текст пользователя прямо в SQL и HTML.",
      ),
      balance: t(
        "Üstünlük: hosting-də hazırdır, veb üçün kitabxana boldur, WordPress dünyası böyükdür. Məhdudiyyət: uzunömürlü masaüstü proqram və mobil tətbiq üçün seçilmir. Köhnə kodla yeni kod eyni layihədə qarışıq qala bilər.",
        "Advantage: it is ready on a host, the web libraries are many, and the WordPress world is large. Limit: it is not chosen for a long-lived desktop program or a mobile app. Old code and new code can stay mixed in one project.",
        "Avantaj: barındırmada hazırdır, web kütüphanesi çoktur, WordPress dünyası büyüktür. Sınır: uzun ömürlü masaüstü program ve mobil uygulama için seçilmez. Eski kod ile yeni kod aynı projede karışık kalabilir.",
        "الميزة: جاهزة على الاستضافة، ومكتبات الويب كثيرة، وعالم WordPress كبير. الحد: لا تُختار لبرنامج سطح مكتب طويل العمر أو تطبيق هاتف. قد يبقى الكود القديم والجديد مختلطين في مشروع واحد.",
        "Плюс: на хостинге уже есть, веб-библиотек много, мир WordPress большой. Ограничение: её не выбирают для долгой настольной программы и мобильного приложения. Старый и новый код могут остаться смешанными в одном проекте.",
      ),
      ideas: t(
        "PHP faylı <?php ilə açılır. Dəyişən $ ilə başlayır. Veb sorğusu $_GET və $_POST massivlərində gəlir.",
        "A PHP file opens with <?php. A variable starts with $. A web request arrives in the $_GET and $_POST arrays.",
        "PHP dosyası <?php ile açılır. Değişken $ ile başlar. Web isteği $_GET ve $_POST dizilerinde gelir.",
        "ملف PHP يُفتح بـ <?php. المتغير يبدأ بـ $. طلب الويب يصل في المصفوفتين $_GET و$_POST.",
        "Файл PHP открывается с <?php. Переменная начинается с $. Веб-запрос приходит в массивах $_GET и $_POST.",
      ),
      ideaList: lines(
        ["Composer paketləri quraşdırır", "PDO verilənlər bazasına təhlükəsiz sorğu üçündür", "Laravel marşrut və şablon verir", "php -S lokal server açır"],
        ["Composer installs packages", "PDO is for a safer database query", "Laravel gives routes and templates", "php -S opens a local server"],
        ["Composer paket kurar", "PDO veritabanına daha güvenli sorgu içindir", "Laravel rota ve şablon verir", "php -S yerel sunucu açar"],
        ["Composer يثبّت الحزم", "PDO لاستعلام أأمن لقاعدة البيانات", "Laravel يعطي المسارات والقوالب", "php -S يفتح خادماً محلياً"],
        ["Composer ставит пакеты", "PDO для более безопасного запроса к базе", "Laravel даёт маршруты и шаблоны", "php -S открывает локальный сервер"],
      ),
      sample: t(
        "Bu fayl brauzerə və ya terminala bir sətir çıxarır. Əmr: php hello.php.",
        "This file prints one line to the browser or the terminal. The command is php hello.php.",
        "Bu dosya tarayıcıya veya terminale bir satır basar. Komut: php hello.php.",
        "هذا الملف يطبع سطراً للمتصفح أو الطرفية. الأمر: php hello.php.",
        "Этот файл печатает одну строку в браузер или терминал. Команда: php hello.php.",
      ),
      code: `<?php
echo "Hello";
`,
      faq: lines(
        [
          "PHP ölüb? Xeyr. WordPress və bir çox sayt hələ PHP ilə işləyir.",
          "PHP və JavaScript eynidir? Xeyr. PHP serverdə, JavaScript əvvəl brauzerdə işləyir.",
          "PHP öyrənmək üçün HTML lazımdır? Səhifə çıxaranda bəli. Təmiz API-də daha az.",
        ],
        [
          "Is PHP dead? No. WordPress and many sites still run on PHP.",
          "Are PHP and JavaScript the same? No. PHP runs on the server. JavaScript starts in the browser.",
          "Do you need HTML to learn PHP? Yes when you output a page. Less so for a pure API.",
        ],
        [
          "PHP öldü mü? Hayır. WordPress ve birçok site hâlâ PHP ile çalışır.",
          "PHP ve JavaScript aynı mı? Hayır. PHP sunucuda, JavaScript önce tarayıcıda çalışır.",
          "PHP için HTML gerekir mi? Sayfa basarken evet. Saf API’de daha az.",
        ],
        [
          "هل ماتت PHP؟ لا. WordPress وكثير من المواقع ما زالت تعمل بـ PHP.",
          "هل PHP وJavaScript الشيء نفسه؟ لا. PHP على الخادم، وJavaScript تبدأ في المتصفح.",
          "هل يلزم HTML لتعلم PHP؟ نعم عند إخراج صفحة. أقل في واجهة خالصة.",
        ],
        [
          "PHP умер? Нет. WordPress и много сайтов всё ещё работают на PHP.",
          "PHP и JavaScript — одно и то же? Нет. PHP на сервере, JavaScript сначала в браузере.",
          "Нужен ли HTML, чтобы учить PHP? Да, когда выводишь страницу. Для чистого API меньше.",
        ],
      ),
    },
  ),
];
