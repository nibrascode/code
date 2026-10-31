import type { StackPage } from "@/lib/stack-pages";
import { lines, t, topic } from "@/lib/stack-pages";

export const STACK_WEB_TOOLS: readonly StackPage[] = [
  topic(
    "password-generator",
    "JavaScript Password Generator",
    t(
      "JavaScript ilə şifrə generatoru: dərs",
      "Password generator in JavaScript: a lesson",
      "JavaScript ile şifre üreteci: ders",
      "مولّد كلمات المرور بـ JavaScript: درس",
      "Генератор паролей на JavaScript: урок",
    ),
    t(
      "crypto.getRandomValues ilə brauzerdə təhlükəsiz şifrə necə alınır: simvol dəstləri, uzunluq, rejection sampling, kopyalama və məxfilik. Kod nümunəsi və canlı alət.",
      "How a browser makes a safe password with crypto.getRandomValues: character sets, length, rejection sampling, copy and privacy. Code sample and a live tool.",
      "Tarayıcı crypto.getRandomValues ile güvenli şifreyi nasıl üretir: karakter setleri, uzunluk, rejection sampling, kopyalama ve gizlilik. Kod örneği ve canlı araç.",
      "كيف يصنع المتصفح كلمة مرور آمنة بـ crypto.getRandomValues: مجموعات الأحرف والطول وrejection sampling والنسخ والخصوصية. مثال كود وأداة مباشرة.",
      "Как браузер получает надёжный пароль через crypto.getRandomValues: наборы символов, длина, rejection sampling, копирование и приватность. Пример кода и живой инструмент.",
    ),
    t(
      "şifrə generatoru JavaScript, crypto.getRandomValues, təsadüfi şifrə, Math.random",
      "password generator JavaScript, crypto.getRandomValues, random password, Math.random",
      "şifre üreteci JavaScript, crypto.getRandomValues, rastgele şifre, Math.random",
      "مولد كلمات مرور JavaScript, crypto.getRandomValues, كلمة مرور عشوائية",
      "генератор паролей JavaScript, crypto.getRandomValues, случайный пароль, Math.random",
    ),
    {
      what: t(
        "Şifrə generatoru seçdiyin simvol dəstindən təsadüfi simvollar götürüb ard-arda düzür. Əsas sual budur: təsadüf haradan gəlir? Brauzerdə iki yol var. Math.random sürətlidir, amma şifrə üçün deyil, çünki onun nəticəsi proqnozlaşdırıla bilər. crypto.getRandomValues isə əməliyyat sisteminin kriptoqrafik mənbəyindən baytlar verir. Şifrə üçün yalnız ikincisi işlədilir. Hamısı səhifənin içində olur və heç nə serverə getmir.",
        "A password generator takes random characters from the set you choose and puts them in a row. The main question is where the randomness comes from. A browser has two ways. Math.random is fast, but it is not for passwords, because its output can be predicted. crypto.getRandomValues gives bytes from the operating system's cryptographic source. Only the second one is used for passwords. Everything happens inside the page and nothing goes to a server.",
        "Şifre üreteci seçtiğin karakter setinden rastgele karakterler alıp yan yana dizer. Asıl soru şudur: rastgelelik nereden gelir? Tarayıcıda iki yol var. Math.random hızlıdır ama şifre için değildir, çünkü sonucu tahmin edilebilir. crypto.getRandomValues ise işletim sisteminin kriptografik kaynağından bayt verir. Şifre için yalnız ikincisi kullanılır. Hepsi sayfanın içinde olur ve hiçbir şey sunucuya gitmez.",
        "مولّد كلمات المرور يأخذ أحرفاً عشوائية من المجموعة التي تختارها ويرصّها. السؤال الأساسي: من أين تأتي العشوائية؟ في المتصفح طريقان. Math.random سريع لكنه ليس لكلمات المرور لأن ناتجه قابل للتوقع. أما crypto.getRandomValues فيعطي بايتات من المصدر التشفيري لنظام التشغيل. لكلمات المرور يُستعمل الثاني فقط. كل شيء يحدث داخل الصفحة ولا يذهب شيء إلى خادم.",
        "Генератор паролей берёт случайные символы из выбранного набора и ставит их в ряд. Главный вопрос — откуда случайность. В браузере есть два пути. Math.random быстрый, но не для паролей: его результат можно предсказать. crypto.getRandomValues даёт байты из криптографического источника операционной системы. Для паролей используют только второй. Всё происходит внутри страницы, на сервер ничего не уходит.",
      ),
      uses: t(
        "Bu dərs JavaScript-də təhlükəsiz təsadüfi ədəd, form və kopyalama işini bir yerdə göstərir.",
        "This lesson shows secure random numbers, a form, and copying in JavaScript in one place.",
        "Bu ders JavaScript’te güvenli rastgele sayı, form ve kopyalama işini bir arada gösterir.",
        "هذا الدرس يجمع الأرقام العشوائية الآمنة والنموذج والنسخ في JavaScript.",
        "Этот урок показывает в одном месте безопасные случайные числа, форму и копирование в JavaScript.",
      ),
      useList: lines(
        ["Yeni hesab üçün güclü şifrə almaq", "Wi-Fi və ya API açarı üçün uzun sətir", "Math.random ilə crypto fərqini öyrənmək", "Clipboard API ilə kopyalama düyməsi"],
        ["Getting a strong password for a new account", "A long string for Wi-Fi or an API key", "Learning the difference between Math.random and crypto", "A copy button with the Clipboard API"],
        ["Yeni hesap için güçlü şifre almak", "Wi-Fi veya API anahtarı için uzun dizi", "Math.random ile crypto farkını öğrenmek", "Clipboard API ile kopyalama düğmesi"],
        ["الحصول على كلمة مرور قوية لحساب جديد", "سلسلة طويلة لشبكة Wi-Fi أو مفتاح API", "تعلّم الفرق بين Math.random وcrypto", "زر نسخ بـ Clipboard API"],
        ["Получить сильный пароль для нового аккаунта", "Длинная строка для Wi-Fi или API-ключа", "Понять разницу между Math.random и crypto", "Кнопка копирования через Clipboard API"],
      ),
      can: t(
        "İstifadəçi uzunluğu (məsələn 8–64) və dəstləri seçir: kiçik hərf, böyük hərf, rəqəm, simvol. Kod seçilən dəstləri bir sətirdə birləşdirir. Sonra hər simvol üçün təsadüfi indeks götürür. Hazır şifrəni bir düymə ilə kopyalamaq olur. Brauzer HTTPS-də navigator.clipboard verir, yoxdursa köhnə execCommand yolu qalır. Şifrə localStorage-a yazılmır və heç yerə göndərilmir. Bitmiş aləti sınamaq üçün /tools/password səhifəsinə bax.",
        "The user picks a length (for example 8–64) and the sets: lowercase, uppercase, digits, symbols. The code joins the chosen sets into one string. Then it takes a random index for each character. The finished password can be copied with one button. On HTTPS the browser gives navigator.clipboard; without it, the old execCommand path remains. The password is not written to localStorage and is not sent anywhere. To try the finished tool, see /tools/password.",
        "Kullanıcı uzunluğu (örneğin 8–64) ve setleri seçer: küçük harf, büyük harf, rakam, sembol. Kod seçilen setleri tek dizide birleştirir. Sonra her karakter için rastgele indeks alır. Hazır şifre tek düğmeyle kopyalanır. HTTPS’te tarayıcı navigator.clipboard verir, yoksa eski execCommand yolu kalır. Şifre localStorage’a yazılmaz ve hiçbir yere gönderilmez. Bitmiş aracı denemek için /tools/password sayfasına bak.",
        "يختار المستخدم الطول (مثلاً 8–64) والمجموعات: أحرف صغيرة وكبيرة وأرقام ورموز. الكود يجمع المجموعات المختارة في سلسلة واحدة. ثم يأخذ فهرساً عشوائياً لكل حرف. كلمة المرور الجاهزة تُنسخ بزر واحد. على HTTPS يعطي المتصفح navigator.clipboard، وإلا يبقى طريق execCommand القديم. لا تُكتب كلمة المرور في localStorage ولا تُرسل لأي مكان. لتجربة الأداة الكاملة افتح /tools/password.",
        "Пользователь выбирает длину (например, 8–64) и наборы: строчные, заглавные, цифры, символы. Код склеивает выбранные наборы в одну строку. Затем берёт случайный индекс для каждого символа. Готовый пароль копируется одной кнопкой. На HTTPS браузер даёт navigator.clipboard, иначе остаётся старый путь execCommand. Пароль не пишется в localStorage и никуда не отправляется. Готовый инструмент — на странице /tools/password.",
      ),
      hard: t(
        "Kod qısadır, amma bir tələ var. Təsadüfi baytı sadəcə «% uzunluq» ilə bölsən, bəzi simvollar digərlərindən tez-tez çıxır. Buna modulo meyli deyilir. Həll rejection sampling-dir: dəstin uzunluğuna tam bölünən ən böyük həddən yuxarı gələn ədədi atıb yenisini götürürsən. Bir də: hər seçilmiş dəstdən ən azı bir simvol olsun deyə sonradan qarışdırmaq lazımdır, qarışdırma da crypto ilə olmalıdır.",
        "The code is short, but there is a trap. If you simply take a random byte \"% length\", some characters come up more often than others. This is called modulo bias. The fix is rejection sampling: you throw away a number above the largest limit that divides evenly by the set length and take a new one. Also, if you want at least one character from each chosen set, you must shuffle afterwards, and the shuffle must use crypto too.",
        "Kod kısadır ama bir tuzak var. Rastgele baytı sadece «% uzunluk» ile bölersen bazı karakterler daha sık çıkar. Buna modulo yanlılığı denir. Çözüm rejection sampling’dir: set uzunluğuna tam bölünen en büyük sınırın üstündeki sayıyı atıp yenisini alırsın. Bir de: her seçilen setten en az bir karakter olsun diye sonradan karıştırmak gerekir ve karıştırma da crypto ile olmalıdır.",
        "الكود قصير لكن فيه فخ. إذا أخذت البايت العشوائي «% الطول» فقط، تظهر بعض الأحرف أكثر من غيرها. هذا يسمى انحياز modulo. الحل rejection sampling: ترمي الرقم الذي يتجاوز أكبر حد يقبل القسمة على طول المجموعة وتأخذ رقماً جديداً. وأيضاً: إذا أردت حرفاً واحداً على الأقل من كل مجموعة فعليك الخلط بعدها، والخلط يجب أن يستعمل crypto.",
        "Код короткий, но есть ловушка. Если просто взять случайный байт «% длина», одни символы выпадают чаще других. Это называется смещением по модулю. Решение — rejection sampling: число выше наибольшей границы, кратной длине набора, отбрасывают и берут новое. И ещё: чтобы был хотя бы один символ из каждого набора, нужно потом перемешать, и перемешивание тоже через crypto.",
      ),
      balance: t(
        "Üstünlük: server yoxdur, iz qalmır, kod hər brauzerdə işləyir. Məhdudiyyət: şifrəni saxlamaq sənin işindir — bunun üçün şifrə meneceri lazımdır. Uzunluq simvol növündən daha çox güc verir.",
        "Advantage: no server, no trace, and the code works in every browser. Limit: keeping the password is your job — use a password manager for that. Length adds more strength than character types.",
        "Avantaj: sunucu yok, iz kalmaz, kod her tarayıcıda çalışır. Sınır: şifreyi saklamak senin işin — bunun için şifre yöneticisi gerekir. Uzunluk, karakter türünden daha çok güç verir.",
        "الميزة: لا خادم ولا أثر والكود يعمل في كل متصفح. الحد: حفظ كلمة المرور مسؤوليتك — استعمل مدير كلمات مرور. الطول يعطي قوة أكثر من أنواع الأحرف.",
        "Плюс: нет сервера, нет следов, код работает в любом браузере. Ограничение: хранить пароль — твоя задача, для этого нужен менеджер паролей. Длина даёт больше силы, чем типы символов.",
      ),
      ideas: t(
        "Bu dörd anlayışı bilsən, kodun hər sətri aydın olur.",
        "If you know these four ideas, every line of the code is clear.",
        "Bu dört kavramı bilirsen kodun her satırı açık olur.",
        "إذا عرفت هذه الأفكار الأربع صار كل سطر في الكود واضحاً.",
        "Если знаешь эти четыре понятия, каждая строка кода понятна.",
      ),
      ideaList: lines(
        ["crypto.getRandomValues — kriptoqrafik təsadüf", "Math.random — oyun üçün, şifrə üçün deyil", "Rejection sampling — modulo meylinə qarşı", "Entropiya ≈ uzunluq × log2(dəst ölçüsü)"],
        ["crypto.getRandomValues — cryptographic randomness", "Math.random — for games, not passwords", "Rejection sampling — against modulo bias", "Entropy ≈ length × log2(set size)"],
        ["crypto.getRandomValues — kriptografik rastgelelik", "Math.random — oyun için, şifre için değil", "Rejection sampling — modulo yanlılığına karşı", "Entropi ≈ uzunluk × log2(set boyutu)"],
        ["crypto.getRandomValues — عشوائية تشفيرية", "Math.random — للألعاب لا لكلمات المرور", "Rejection sampling — ضد انحياز modulo", "الإنتروبيا ≈ الطول × log2(حجم المجموعة)"],
        ["crypto.getRandomValues — криптографическая случайность", "Math.random — для игр, не для паролей", "Rejection sampling — против смещения по модулю", "Энтропия ≈ длина × log2(размер набора)"],
      ),
      sample: t(
        "Təsadüfi indeksi meylsiz götürən funksiya və şifrə yığan dövr:",
        "A function that takes a random index without bias, and the loop that builds the password:",
        "Rastgele indeksi yanlılıksız alan fonksiyon ve şifreyi dizen döngü:",
        "دالة تأخذ فهرساً عشوائياً بلا انحياز، والحلقة التي تبني كلمة المرور:",
        "Функция, берущая случайный индекс без смещения, и цикл, собирающий пароль:",
      ),
      code: `function randomIndex(max) {
  // largest multiple of max below 2^32 -> no modulo bias
  const limit = Math.floor(0x100000000 / max) * max;
  const buf = new Uint32Array(1);
  do { crypto.getRandomValues(buf); } while (buf[0] >= limit);
  return buf[0] % max;
}

const SETS = {
  lower: "abcdefghijklmnopqrstuvwxyz",
  upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  digits: "0123456789",
  symbols: "!@#$%^&*()-_=+[]{};:,.?",
};

function makePassword(length, chosen) {
  const pool = chosen.map((k) => SETS[k]).join("");
  if (!pool) throw new Error("Choose at least one set");
  let out = "";
  for (let i = 0; i < length; i++) out += pool[randomIndex(pool.length)];
  return out;
}`,
      faq: lines(
        ["Math.random ilə olmaz? Şifrə üçün olmaz. Onun nəticəsi kriptoqrafik deyil və proqnozlaşdırıla bilər.", "Şifrə serverə gedir? Xeyr. Hamısı brauzerdə hesablanır və heç yerdə saxlanmır.", "Neçə simvol yaxşıdır? Ən azı 16. Uzunluq simvol növündən daha çox kömək edir.", "Hazır alət haradadır? nibrascode.com/tools/password səhifəsində."],
        ["Can I use Math.random? Not for passwords. Its output is not cryptographic and can be predicted.", "Is the password sent to a server? No. It is computed in the browser and stored nowhere.", "How many characters is good? At least 16. Length helps more than character types.", "Where is the finished tool? On nibrascode.com/tools/password."],
        ["Math.random kullanılabilir mi? Şifre için hayır. Sonucu kriptografik değildir ve tahmin edilebilir.", "Şifre sunucuya gider mi? Hayır. Tarayıcıda hesaplanır ve hiçbir yerde saklanmaz.", "Kaç karakter iyi? En az 16. Uzunluk, karakter türünden daha çok yardım eder.", "Hazır araç nerede? nibrascode.com/tools/password sayfasında."],
        ["هل أستعمل Math.random؟ ليس لكلمات المرور. ناتجه ليس تشفيرياً ويمكن توقعه.", "هل تُرسل كلمة المرور إلى خادم؟ لا. تُحسب في المتصفح ولا تُحفظ في أي مكان.", "كم حرفاً يكفي؟ 16 على الأقل. الطول يساعد أكثر من أنواع الأحرف.", "أين الأداة الجاهزة؟ في nibrascode.com/tools/password."],
        ["Можно ли Math.random? Для паролей нет. Его результат не криптографический и предсказуем.", "Пароль уходит на сервер? Нет. Он считается в браузере и нигде не хранится.", "Сколько символов хорошо? Не меньше 16. Длина помогает больше, чем типы символов.", "Где готовый инструмент? На nibrascode.com/tools/password."],
      ),
    },
  ),
  topic(
    "javascript-qr-code-generator",
    "JavaScript QR Code Generator",
    t(
      "HTML, CSS və JavaScript ilə QR kod generatoru: dərs",
      "QR code generator with HTML, CSS and JavaScript: a lesson",
      "HTML, CSS ve JavaScript ile QR kod üreteci: ders",
      "مولّد رموز QR بـ HTML وCSS وJavaScript: درس",
      "Генератор QR-кодов на HTML, CSS и JavaScript: урок",
    ),
    t(
      "QR kod nədir, qrcode-generator kitabxanası (MIT) necə işləyir, canvas-a çəkmək, sakit zona, ölçü və rəng, PNG yükləmə, oflayn iş və təhlükəsiz skan.",
      "What a QR code is, how the qrcode-generator library (MIT) works, drawing on canvas, the quiet zone, size and colors, PNG download, offline use and safe scanning.",
      "QR kod nedir, qrcode-generator kütüphanesi (MIT) nasıl çalışır, canvas’a çizim, sessiz bölge, boyut ve renk, PNG indirme, çevrimdışı kullanım ve güvenli tarama.",
      "ما رمز QR، وكيف تعمل مكتبة qrcode-generator (MIT)، والرسم على canvas، والمنطقة الهادئة، والحجم والألوان، وتنزيل PNG، والعمل دون اتصال والمسح الآمن.",
      "Что такое QR-код, как работает библиотека qrcode-generator (MIT), рисование на canvas, тихая зона, размер и цвета, скачивание PNG, офлайн и безопасное сканирование.",
    ),
    t(
      "QR kod generatoru JavaScript, qrcode-generator, canvas PNG, QR HTML CSS",
      "QR code generator JavaScript, qrcode-generator, canvas PNG, QR HTML CSS",
      "QR kod üreteci JavaScript, qrcode-generator, canvas PNG, QR HTML CSS",
      "مولد QR JavaScript, qrcode-generator, canvas PNG",
      "генератор QR JavaScript, qrcode-generator, canvas PNG",
    ),
    {
      what: t(
        "QR kod mətni ağ-qara kvadratlar («modullar») şəbəkəsində saxlayan iki ölçülü barkoddur. Üç küncdəki böyük kvadrat skanerə kodu tapmağa və çevirməyə kömək edir. Qalan şəbəkə məlumatı və onun ehtiyat hissəsini daşıyır. QR yalnız mətn saxlayır. Telefon mətni oxuyur və o, URL-ə oxşayırsa, açmağı təklif edir. Buna görə QR istənilən yerə — təhlükəsiz və ya zərərli — apara bilər.",
        "A QR code is a two-dimensional barcode that stores text as a grid of black and white squares (\"modules\"). The three big squares in the corners help a scanner find and turn the code. The rest of the grid carries the data and its redundancy. A QR code stores only text. The phone reads the text, and if it looks like a URL, it offers to open it. That is why a QR code can point anywhere, safe or harmful.",
        "QR kod, metni siyah-beyaz kareler («modüller») ızgarasında tutan iki boyutlu barkoddur. Köşelerdeki üç büyük kare tarayıcının kodu bulmasına ve döndürmesine yardım eder. Kalan ızgara veriyi ve yedeğini taşır. QR yalnız metin tutar. Telefon metni okur ve URL’ye benziyorsa açmayı önerir. Bu yüzden QR her yere — güvenli ya da zararlı — götürebilir.",
        "رمز QR باركود ثنائي الأبعاد يحفظ النص كشبكة مربعات سوداء وبيضاء («وحدات»). المربعات الثلاثة الكبيرة في الزوايا تساعد الماسح على إيجاد الرمز وتدويره. بقية الشبكة تحمل البيانات وتكرارها الاحتياطي. رمز QR يحفظ نصاً فقط. الهاتف يقرأ النص وإن بدا رابطاً يعرض فتحه. لذلك قد يقود الرمز إلى أي مكان، آمن أو ضار.",
        "QR-код — двумерный штрихкод, который хранит текст как сетку чёрно-белых квадратов («модулей»). Три больших квадрата по углам помогают сканеру найти и повернуть код. Остальная сетка несёт данные и их избыточность. QR хранит только текст. Телефон читает текст и, если он похож на URL, предлагает открыть. Поэтому QR может вести куда угодно — в безопасное или вредное место.",
      ),
      uses: t(
        "Bu dərs kitabxana, canvas və fayl yükləməni bir kiçik layihədə birləşdirir.",
        "This lesson joins a library, canvas, and file download in one small project.",
        "Bu ders kütüphane, canvas ve dosya indirmeyi tek küçük projede birleştirir.",
        "هذا الدرس يجمع مكتبة وcanvas وتنزيل ملف في مشروع صغير واحد.",
        "Этот урок соединяет библиотеку, canvas и скачивание файла в одном маленьком проекте.",
      ),
      useList: lines(
        ["Sayt linkini çap üçün QR-a çevirmək", "Mətni oflayn QR-a salmaq", "Hazır kitabxananı layihəyə qoşmağı öyrənmək", "canvas.toDataURL ilə PNG yükləmək"],
        ["Turning a site link into a QR for print", "Putting text into a QR offline", "Learning to add a ready library to a project", "Downloading a PNG with canvas.toDataURL"],
        ["Site linkini baskı için QR’a çevirmek", "Metni çevrimdışı QR’a koymak", "Hazır kütüphaneyi projeye eklemeyi öğrenmek", "canvas.toDataURL ile PNG indirmek"],
        ["تحويل رابط موقع إلى QR للطباعة", "وضع نص في QR دون اتصال", "تعلّم إضافة مكتبة جاهزة إلى مشروع", "تنزيل PNG بـ canvas.toDataURL"],
        ["Превратить ссылку сайта в QR для печати", "Положить текст в QR офлайн", "Научиться подключать готовую библиотеку", "Скачать PNG через canvas.toDataURL"],
      ),
      can: t(
        "Layihə dörd fayldır: index.html, style.css, script.js və lib/qrcode-generator.js (Kazuhiko Arase, MIT, v1.4.4). HTML əvvəl kitabxananı, sonra script.js-i yükləyir. Form göndəriləndə kod mətni yoxlayır, qrcode(0, 'M') ilə modul matrisini qurur və onu canvas-a çəkir. Ölçü 128–512 px arası seçilir, rənglər <input type=\"color\"> ilə gəlir. Eyni ön və arxa rəng qəbul edilmir, çünki skan olunmaz. Yükləmə düyməsinin href-i canvas.toDataURL('image/png') olur, ona görə PNG ekrandakı ilə eynidir. Kitabxana lokal fayldırsa, alət oflayn da işləyir. Çox növlü tam QR aləti üçün /qr səhifəsinə bax.",
        "The project is four files: index.html, style.css, script.js and lib/qrcode-generator.js (Kazuhiko Arase, MIT, v1.4.4). The HTML loads the library first, then script.js. When the form is submitted, the code checks the text, builds the module matrix with qrcode(0, 'M') and draws it on a canvas. Size is chosen between 128 and 512 px, and colors come from <input type=\"color\">. The same foreground and background color is refused, because it would not scan. The download button's href becomes canvas.toDataURL('image/png'), so the PNG matches the screen. If the library is a local file, the tool also works offline. For the full QR tool with many types, see /qr.",
        "Proje dört dosyadır: index.html, style.css, script.js ve lib/qrcode-generator.js (Kazuhiko Arase, MIT, v1.4.4). HTML önce kütüphaneyi, sonra script.js’i yükler. Form gönderilince kod metni kontrol eder, qrcode(0, 'M') ile modül matrisini kurar ve canvas’a çizer. Boyut 128–512 px arasında seçilir, renkler <input type=\"color\"> ile gelir. Aynı ön ve arka renk kabul edilmez, çünkü taranamaz. İndirme düğmesinin href’i canvas.toDataURL('image/png') olur, bu yüzden PNG ekrandakiyle aynıdır. Kütüphane yerel dosyaysa araç çevrimdışı da çalışır. Çok türlü tam QR aracı için /qr sayfasına bak.",
        "المشروع أربعة ملفات: index.html وstyle.css وscript.js وlib/qrcode-generator.js (Kazuhiko Arase، MIT، v1.4.4). يحمّل HTML المكتبة أولاً ثم script.js. عند إرسال النموذج يفحص الكود النص ويبني مصفوفة الوحدات بـ qrcode(0, 'M') ويرسمها على canvas. الحجم بين 128 و512 بكسل والألوان من <input type=\"color\">. اللون نفسه للأمام والخلفية مرفوض لأنه لن يُمسح. يصبح href لزر التنزيل canvas.toDataURL('image/png') فيطابق PNG ما على الشاشة. إذا كانت المكتبة ملفاً محلياً تعمل الأداة دون اتصال. لأداة QR الكاملة بأنواع كثيرة افتح /qr.",
        "Проект — четыре файла: index.html, style.css, script.js и lib/qrcode-generator.js (Kazuhiko Arase, MIT, v1.4.4). HTML сначала грузит библиотеку, потом script.js. При отправке формы код проверяет текст, строит матрицу модулей через qrcode(0, 'M') и рисует её на canvas. Размер — от 128 до 512 px, цвета — из <input type=\"color\">. Одинаковый цвет переднего плана и фона отклоняется: такой код не сканируется. href кнопки скачивания становится canvas.toDataURL('image/png'), поэтому PNG совпадает с экраном. Если библиотека — локальный файл, инструмент работает и офлайн. Полный QR-инструмент с многими типами — на /qr.",
      ),
      hard: t(
        "QR-ı sıfırdan kodlamaq çətindir: versiya seçimi, bloklar, Reed–Solomon xəta düzəlişi və maska. Buna görə hazır kitabxana işlədilir. Səviyyə M təxminən 15% zədəyə dözür, amma pis kontrastı və kəsilmiş sakit zonanı düzəltmir. Çox uzun mətn çox modul tələb edir: 128 px-də hər modula bir pikseldən az düşürsə, kod çəkilmir və daha böyük ölçü istənir. Həddən artıq mətndə kitabxana «code length overflow» atır, kod onu tutub aydın mesaj göstərir.",
        "Encoding a QR from scratch is hard: version choice, blocks, Reed–Solomon error correction and the mask. That is why a ready library is used. Level M tolerates about 15% damage, but it does not fix poor contrast or a cut quiet zone. Very long text needs many modules: if each module gets less than one pixel at 128 px, the code is not drawn and a larger size is asked for. For too much text the library throws \"code length overflow\", and the code catches it and shows a clear message.",
        "QR’ı sıfırdan kodlamak zordur: sürüm seçimi, bloklar, Reed–Solomon hata düzeltme ve maske. Bu yüzden hazır kütüphane kullanılır. M seviyesi yaklaşık %15 hasara dayanır ama kötü kontrastı ve kesilmiş sessiz bölgeyi düzeltmez. Çok uzun metin çok modül ister: 128 px’de her modüle bir pikselden az düşerse kod çizilmez ve daha büyük boyut istenir. Aşırı metinde kütüphane «code length overflow» atar, kod bunu yakalayıp açık mesaj gösterir.",
        "ترميز QR من الصفر صعب: اختيار الإصدار والكتل وتصحيح أخطاء Reed–Solomon والقناع. لذلك تُستعمل مكتبة جاهزة. المستوى M يتحمل نحو 15% من التلف لكنه لا يصلح التباين الضعيف ولا المنطقة الهادئة المقطوعة. النص الطويل جداً يحتاج وحدات كثيرة: إذا نال كل وحدة أقل من بكسل عند 128 بكسل لا يُرسم الرمز ويُطلب حجم أكبر. ومع نص زائد ترمي المكتبة «code length overflow» فيلتقطها الكود ويعرض رسالة واضحة.",
        "Кодировать QR с нуля трудно: выбор версии, блоки, коррекция ошибок Рида–Соломона и маска. Поэтому берут готовую библиотеку. Уровень M выдерживает около 15% повреждений, но не исправляет плохой контраст и обрезанную тихую зону. Очень длинный текст требует много модулей: если на модуль при 128 px приходится меньше пикселя, код не рисуется и просят размер больше. При слишком большом тексте библиотека бросает «code length overflow», код ловит это и показывает понятное сообщение.",
      ),
      balance: t(
        "Üstünlük: build yoxdur, server yoxdur, mətn heç yerə getmir, oflayn işləyir. Məhdudiyyət: QR kodun skan olunması onun təhlükəsiz olması demək deyil. Naməlum QR-ı yoxlanmamış link kimi qəbul et və domeni açmazdan əvvəl oxu.",
        "Advantage: no build, no server, the text goes nowhere, and it works offline. Limit: a QR code that scans is not a QR code that is safe. Treat an unknown QR like an unchecked link and read the domain before opening.",
        "Avantaj: build yok, sunucu yok, metin hiçbir yere gitmez, çevrimdışı çalışır. Sınır: taranan QR güvenli demek değildir. Bilinmeyen QR’ı kontrol edilmemiş link gibi gör ve açmadan önce alan adını oku.",
        "الميزة: لا بناء ولا خادم والنص لا يذهب لأي مكان ويعمل دون اتصال. الحد: كون الرمز يُمسح لا يعني أنه آمن. عامل QR مجهولاً كرابط غير مفحوص واقرأ النطاق قبل الفتح.",
        "Плюс: нет сборки, нет сервера, текст никуда не уходит, работает офлайн. Ограничение: если QR сканируется, это не значит, что он безопасен. Считай незнакомый QR непроверенной ссылкой и читай домен перед открытием.",
      ),
      ideas: t(
        "Kodun dayandığı əsas anlayışlar:",
        "The main ideas the code stands on:",
        "Kodun dayandığı temel kavramlar:",
        "الأفكار الأساسية التي يقوم عليها الكود:",
        "Основные понятия, на которых стоит код:",
      ),
      ideaList: lines(
        ["qrcode(0, 'M'): 0 = versiyanı özü seçir, M = ~15% xəta düzəlişi", "isDark(row, col): modul qaradırmı?", "Sakit zona: kənarda 4 modul boş yer", "canvas.toDataURL('image/png') ilə yükləmə"],
        ["qrcode(0, 'M'): 0 = picks the version itself, M = ~15% error correction", "isDark(row, col): is this module dark?", "Quiet zone: 4 empty modules around the edge", "Download with canvas.toDataURL('image/png')"],
        ["qrcode(0, 'M'): 0 = sürümü kendi seçer, M = ~%15 hata düzeltme", "isDark(row, col): bu modül koyu mu?", "Sessiz bölge: kenarda 4 modül boşluk", "canvas.toDataURL('image/png') ile indirme"],
        ["qrcode(0, 'M'): 0 = يختار الإصدار بنفسه، M = تصحيح أخطاء ~15%", "isDark(row, col): هل الوحدة داكنة؟", "المنطقة الهادئة: 4 وحدات فارغة حول الحافة", "التنزيل بـ canvas.toDataURL('image/png')"],
        ["qrcode(0, 'M'): 0 = версию выбирает сама, M = ~15% коррекции", "isDark(row, col): этот модуль тёмный?", "Тихая зона: 4 пустых модуля по краю", "Скачивание через canvas.toDataURL('image/png')"],
      ),
      sample: t(
        "Kitabxananı çağırmaq, canvas-a çəkmək və PNG linkini qoymaq:",
        "Calling the library, drawing on canvas, and setting the PNG link:",
        "Kütüphaneyi çağırmak, canvas’a çizmek ve PNG linkini koymak:",
        "استدعاء المكتبة والرسم على canvas ووضع رابط PNG:",
        "Вызов библиотеки, рисование на canvas и ссылка на PNG:",
      ),
      code: `// <script src="lib/qrcode-generator.js"></script> loads window.qrcode
const QUIET_ZONE = 4;

function drawQrCode(canvas, text, size, fg, bg) {
  const qr = qrcode(0, "M");      // 0 = auto version, M = ~15% recovery
  qr.addData(text, "Byte");
  qr.make();
  const modules = qr.getModuleCount();
  const cell = Math.floor(size / (modules + QUIET_ZONE * 2));
  if (cell < 1) throw new Error("Choose a larger size for this much text.");
  canvas.width = canvas.height = size;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, size, size);
  const offset = Math.floor((size - cell * modules) / 2);
  ctx.fillStyle = fg;
  for (let r = 0; r < modules; r++)
    for (let c = 0; c < modules; c++)
      if (qr.isDark(r, c)) ctx.fillRect(offset + c * cell, offset + r * cell, cell, cell);
}

drawQrCode(canvas, "https://nibrascode.com", 256, "#000000", "#ffffff");
downloadLink.href = canvas.toDataURL("image/png");`,
      faq: lines(
        ["QR kod pulsuzdur? Bəli. Standart açıqdır, kitabxana MIT lisenziyalıdır.", "İnternet lazımdır? Səhifə və lokal kitabxana bir dəfə yükləndikdən sonra yox.", "Mətn serverə gedir? Xeyr. Kodlama brauzerdə olur, fetch, cookie və analitika yoxdur.", "QR skan olunursa sayt təhlükəsizdir? Xeyr. QR sadəcə mətndir, domeni özün yoxla.", "Tam alət haradadır? nibrascode.com/qr səhifəsində."],
        ["Are QR codes free? Yes. The standard is open and the library is MIT licensed.", "Do I need the internet? Not after the page and the local library have loaded once.", "Is the text sent to a server? No. Encoding happens in the browser; no fetch, cookies or analytics.", "If a QR scans, is the site safe? No. A QR is only text; check the domain yourself.", "Where is the full tool? On nibrascode.com/qr."],
        ["QR kod ücretsiz mi? Evet. Standart açıktır, kütüphane MIT lisanslıdır.", "İnternet gerekir mi? Sayfa ve yerel kütüphane bir kez yüklendikten sonra hayır.", "Metin sunucuya gider mi? Hayır. Kodlama tarayıcıda olur; fetch, çerez ve analitik yok.", "QR taranıyorsa site güvenli mi? Hayır. QR sadece metindir, alan adını kendin kontrol et.", "Tam araç nerede? nibrascode.com/qr sayfasında."],
        ["هل رموز QR مجانية؟ نعم. المعيار مفتوح والمكتبة برخصة MIT.", "هل أحتاج الإنترنت؟ لا بعد تحميل الصفحة والمكتبة المحلية مرة واحدة.", "هل يُرسل النص إلى خادم؟ لا. الترميز في المتصفح بلا fetch ولا كوكيز ولا تحليلات.", "إذا مُسح الرمز فهل الموقع آمن؟ لا. QR مجرد نص، افحص النطاق بنفسك.", "أين الأداة الكاملة؟ في nibrascode.com/qr."],
        ["QR-коды бесплатны? Да. Стандарт открыт, библиотека под лицензией MIT.", "Нужен ли интернет? Нет, после того как страница и локальная библиотека загрузились один раз.", "Текст уходит на сервер? Нет. Кодирование в браузере, без fetch, cookie и аналитики.", "Если QR сканируется, сайт безопасен? Нет. QR — просто текст, проверяй домен сам.", "Где полный инструмент? На nibrascode.com/qr."],
      ),
    },
  ),
];
