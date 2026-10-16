import { C, N, P, S, U } from "../dsl";

export default [
  S("tools", ["Xətanı necə axtarmalı", "How to hunt for errors", "Hata nasıl aranır", "كيف تبحث عن الأخطاء", "Как искать ошибки"],
    P("HTML xəta verib dayanmır: brauzer səhv kodu «düzəltməyə» çalışır və nəticə gözləniləndən fərqli çıxır. Ona görə problemi görmək üçün alətlərə ehtiyac var. Ən yaxşı dost brauzerin «Inspect» (F12) pəncərəsidir: o, brauzerin gördüyü real ağacı göstərir.",
      "HTML does not stop with an error: the browser tries to “fix” bad code and the result differs from what you expected. So you need tools to see the problem. The best friend is the browser's Inspect (F12) panel, which shows the real tree the browser built.",
      "HTML hata verip durmaz: tarayıcı hatalı kodu «düzeltmeye» çalışır ve sonuç beklediğinden farklı çıkar. Bu yüzden sorunu görmek için araçlara ihtiyaç vardır. En iyi dost tarayıcının «Inspect» (F12) penceresidir: tarayıcının oluşturduğu gerçek ağacı gösterir.",
      "لا يتوقف HTML عند الخطأ: يحاول المتصفح «إصلاح» الكود السيئ فتأتي النتيجة مختلفة عن المتوقع. لذا تحتاج إلى أدوات لرؤية المشكلة، وأفضل صديق نافذة «فحص العنصر» (F12) التي تعرض الشجرة الفعلية التي بناها المتصفح.",
      "HTML не останавливается из-за ошибки: браузер пытается «починить» плохой код, и результат отличается от ожидаемого. Поэтому нужны инструменты, чтобы увидеть проблему. Лучший помощник — панель «Проверить» (F12): она показывает реальное дерево, которое построил браузер."),
    N(["Elementə sağ klik et və Inspect seç.", "Right-click an element and choose Inspect.", "Elemana sağ tıkla ve Inspect seç.", "انقر بزر الفأرة الأيمن على عنصر واختر Inspect.", "Щёлкните элемент правой кнопкой и выберите Inspect."],
      ["Gözlədiyin quruluşla real ağacı müqayisə et.", "Compare the real tree with the structure you expected.", "Gerçek ağacı beklediğin yapıyla karşılaştır.", "قارن الشجرة الفعلية بالبنية التي توقعتها.", "Сравните реальное дерево с ожидаемой структурой."],
      ["Əvvəl yuxarıdakı ilk səhvi düzəlt, çünki sonrakılar ondan yarana bilər.", "Fix the first mistake from the top first, since later ones may stem from it.", "Önce yukarıdaki ilk hatayı düzelt, çünkü sonrakiler ondan doğabilir.", "أصلح أول خطأ من الأعلى أولًا لأن ما بعده قد ينشأ عنه.", "Сначала исправьте самую верхнюю ошибку: последующие могут быть её следствием."])),
  S("common", ["Ən çox rast gəlinən səhvlər", "The most common mistakes", "En sık karşılaşılan hatalar", "أكثر الأخطاء شيوعًا", "Самые частые ошибки"],
    U(["Bağlanmayan teq: sonrakı məzmunun hamısı yanlış formada görünür.", "An unclosed tag: all the following content is displayed wrongly.", "Kapanmayan etiket: sonraki tüm içerik yanlış görünür.", "وسم غير مغلق: يظهر كل المحتوى اللاحق بشكل خاطئ.", "Незакрытый тег: весь последующий контент отображается неверно."],
      ["Yanlış iç-içə: <b><i>…</b></i>.", "Wrong nesting: <b><i>…</b></i>.", "Yanlış iç içe geçme: <b><i>…</b></i>.", "تداخل خاطئ: <b><i>…</b></i>.", "Неверная вложенность: <b><i>…</b></i>."],
      ["Dırnaq unudulub: <a href=\"page.html>.", "A missing quote: <a href=\"page.html>.", "Unutulan tırnak: <a href=\"page.html>.", "علامة اقتباس منسية: <a href=\"page.html>.", "Забытая кавычка: <a href=\"page.html>."],
      ["Fayl adının hərf registri: Photo.JPG ≠ photo.jpg.", "File name case: Photo.JPG is not photo.jpg.", "Dosya adının harf büyüklüğü: Photo.JPG ≠ photo.jpg.", "حالة أحرف اسم الملف: Photo.JPG تختلف عن photo.jpg.", "Регистр имени файла: Photo.JPG ≠ photo.jpg."],
      ["Kodlaşdırma yoxdur və hərflər pozulur.", "Missing encoding makes letters break.", "Karakter kodlaması yoksa harfler bozulur.", "غياب الترميز يفسد الحروف.", "Без указания кодировки буквы «ломаются»."],
      ["Eyni id iki dəfə işlədilib.", "The same id used twice.", "Aynı id iki kez kullanılmış.", "استخدام id نفسه مرتين.", "Один и тот же id использован дважды."]),
    C(`<!-- wrong -->
<p>Hello <b>world</p></b>
<img src="Photo.JPG" alt="">

<!-- right -->
<p>Hello <b>world</b></p>
<img src="photo.jpg" alt="A tidy desk">`)),
  S("validate", ["Validator və yoxlama siyahısı", "The validator and a checklist", "Doğrulayıcı ve kontrol listesi", "المدقّق وقائمة المراجعة", "Валидатор и чек-лист"],
    P("W3C Markup Validator kodu yapışdırıb yoxlamağa imkan verir və hər səhvi sətir nömrəsi ilə göstərir. Hər səhifədən əvvəl bu qısa siyahını keç: doctype var? lang yazılıb? title unikaldır? Bütün şəkillərdə alt var? Başlıq səviyyələri ardıcıldır?",
      "The W3C Markup Validator lets you paste code for checking and lists every mistake with its line number. Before publishing each page run through this short list: is there a doctype? lang set? title unique? alt on every image? heading levels in order?",
      "W3C Markup Validator kodu yapıştırıp denetlemene olanak verir ve her hatayı satır numarasıyla gösterir. Her sayfadan önce bu kısa listeyi geç: doctype var mı? lang yazıldı mı? title benzersiz mi? Tüm görsellerde alt var mı? Başlık düzeyleri ardışık mı?",
      "يتيح W3C Markup Validator لصق الكود لفحصه ويعرض كل خطأ مع رقم السطر. قبل نشر كل صفحة راجع هذه القائمة القصيرة: هل يوجد doctype؟ وهل كُتبت lang؟ وهل title فريد؟ وهل لكل الصور alt؟ وهل تسلسل العناوين صحيح؟",
      "W3C Markup Validator позволяет вставить код на проверку и показывает каждую ошибку с номером строки. Перед публикацией страницы пройдитесь по короткому списку: есть ли doctype? указан ли lang? уникален ли title? у всех ли картинок есть alt? последовательны ли уровни заголовков?")),
] ;
