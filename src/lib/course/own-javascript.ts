import { l5 as t } from "./meta";
import type { OwnPageContent } from "./own-types";

export const OWN_JS: OwnPageContent = {
  baslangic: [
    {
      id: "log",
      title: t("İlk sətir: console.log", "The first line: console.log", "İlk satır: console.log", "السطر الأول: console.log", "Первая строка: console.log"),
      blocks: [
        {
          paragraphs: [t(
            "JavaScript brauzerin dilidir. İlk proqram bir cümləni konsola yazır. Faylı index.html adlandır və skripti onun içinə qoy.",
            "JavaScript is the language of the browser. The first program writes one sentence to the console. Name the file index.html and put the script inside it.",
            "JavaScript tarayıcının dilidir. İlk program konsola bir cümle yazar. Dosyayı index.html adlandır ve betiği içine koy.",
            "جافاسكريبت لغة المتصفح. أول برنامج يكتب جملة في وحدة التحكم. سمّ الملف index.html وضع السكربت داخله.",
            "JavaScript — язык браузера. Первая программа пишет одну фразу в консоль. Назовите файл index.html и поместите скрипт внутрь.",
          )],
          code: '<!DOCTYPE html>\n<html lang="en">\n  <body>\n    <h1>Hello</h1>\n    <script>\n      console.log("Hello, JavaScript");\n    </script>\n  </body>\n</html>',
        },
      ],
    },
    {
      id: "open",
      title: t("Nəticəni harada görmək olar", "Where to see the result", "Sonucu nerede görmek", "أين ترى النتيجة", "Где увидеть результат"),
      blocks: [
        {
          ordered: true,
          list: [
            t("Faylı brauzerdə aç.", "Open the file in a browser.", "Dosyayı tarayıcıda aç.", "افتح الملف في المتصفح.", "Откройте файл в браузере."),
            t("F12 basın və Console bölməsini açın.", "Press F12 and open the Console tab.", "F12'ye bas ve Console bölümünü aç.", "اضغط F12 وافتح تبويب Console.", "Нажмите F12 и откройте вкладку Console."),
            t("Hello, JavaScript yazısını orada görəcəksiniz.", "You will see the text Hello, JavaScript there.", "Orada Hello, JavaScript yazısını göreceksiniz.", "سترى هناك النص Hello, JavaScript.", "Там появится текст Hello, JavaScript."),
          ],
        },
        {
          paragraphs: [t(
            "console.log ekrana düymə qoymur. O, yoxlama üçündür: proqramın nə düşündüyünü göstərir.",
            "console.log does not put a button on the page. It is for checking: it shows what the program is thinking.",
            "console.log sayfaya düğme koymaz. Kontrol içindir: programın ne düşündüğünü gösterir.",
            "console.log لا يضع زراً في الصفحة. هو للفحص: يُظهر ما يفكر فيه البرنامج.",
            "console.log не ставит кнопку на страницу. Он для проверки: показывает, что думает программа.",
          )],
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("JavaScript-i harada yazmaq olar? Brauzerdə, HTML faylının script teqinin içində.", "Where do I write JavaScript? In the browser, inside the script tag of an HTML file.", "JavaScript nerede yazılır? Tarayıcıda, HTML dosyasının script etiketinin içinde.", "أين أكتب جافاسكريبت؟ في المتصفح، داخل وسم script في ملف HTML.", "Где писать JavaScript? В браузере, внутри тега script HTML-файла."),
            t("console.log nə edir? Mətni və ya ədədi konsola yazır.", "What does console.log do? It writes text or a number to the console.", "console.log ne yapar? Metni veya sayıyı konsola yazar.", "ماذا يفعل console.log؟ يكتب نصاً أو رقماً في وحدة التحكم.", "Что делает console.log? Пишет текст или число в консоль."),
            t("Səhifədə görünür? Xeyr. Yalnız Console panelində görünür.", "Does it show on the page? No. It shows only in the Console panel.", "Sayfada görünür mü? Hayır. Yalnız Console panelinde görünür.", "هل يظهر في الصفحة؟ لا. يظهر فقط في لوحة Console.", "Видно ли это на странице? Нет. Только в панели Console."),
            t("Proqram quraşdırmaq lazımdır? İlk addım üçün yox. Brauzer kifayətdir.", "Do I need to install a program? Not for the first step. A browser is enough.", "Program kurmak gerekir mi? İlk adım için hayır. Tarayıcı yeter.", "هل أحتاج إلى تثبيت برنامج؟ للخطوة الأولى لا. المتصفح يكفي.", "Нужно ли ставить программу? Для первого шага нет. Хватает браузера."),
          ],
        },
      ],
    },
  ],
  idare: [
    {
      id: "if",
      title: t("if: şərt", "if: a condition", "if: koşul", "if: شرط", "if: условие"),
      blocks: [
        {
          paragraphs: [t(
            "if bir qərardır. Şərt doğrudursa içindəki sətirlər işləyir.",
            "if is a decision. If the condition is true, the lines inside run.",
            "if bir karardır. Koşul doğruysa içindeki satırlar çalışır.",
            "if قرار. إذا كان الشرط صحيحاً تعمل الأسطر داخله.",
            "if — это решение. Если условие верно, строки внутри выполняются.",
          )],
          code: 'const age = 18;\nif (age >= 18) {\n  console.log("open");\n} else {\n  console.log("closed");\n}',
        },
      ],
    },
    {
      id: "for",
      title: t("for: təkrar", "for: repeat", "for: tekrar", "for: تكرار", "for: повтор"),
      blocks: [
        {
          paragraphs: [t(
            "for eyni işi say ilə təkrar edir. Bu nümunə 1, 2 və 3 yazır.",
            "for repeats the same work a set number of times. This example prints 1, 2 and 3.",
            "for aynı işi belirli sayıda tekrar eder. Bu örnek 1, 2 ve 3 yazar.",
            "for يكرر العمل نفسه عدداً معلوماً. هذا المثال يطبع 1 و2 و3.",
            "for повторяет одну работу заданное число раз. Этот пример печатает 1, 2 и 3.",
          )],
          code: 'for (let n = 1; n <= 3; n++) {\n  console.log(n);\n}',
        },
      ],
    },
    {
      id: "fn",
      title: t("function: öz əmrin", "function: your own command", "function: kendi komutun", "function: أمرك", "function: своя команда"),
      blocks: [
        {
          paragraphs: [t(
            "function bir işi ada bağlayır. Sonra həmin adı çağırırsan.",
            "function ties a job to a name. Then you call that name.",
            "function bir işi ada bağlar. Sonra o adı çağırırsın.",
            "function يربط عملاً باسم. ثم تنادي ذلك الاسم.",
            "function связывает работу с именем. Потом вы вызываете это имя.",
          )],
          code: 'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 5));',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("if və else fərqi nədir? if şərt doğru olanda işləyir, else isə doğru olmayanda.", "What is the difference between if and else? if runs when the condition is true, else when it is not.", "if ve else farkı nedir? if koşul doğruysa çalışır, else doğru değilse.", "ما الفرق بين if وelse؟ if يعمل إذا صح الشرط، وelse إذا لم يصح.", "Чем if отличается от else? if выполняется, когда условие верно, else — когда нет."),
            t("for nə vaxt lazımdır? Eyni əmri bir neçə dəfə təkrarlamaq lazım olanda.", "When do I need for? When the same command must run several times.", "for ne zaman gerekir? Aynı komut birkaç kez tekrarlanacaksa.", "متى أحتاج for؟ عندما يجب تكرار الأمر نفسه عدة مرات.", "Когда нужен for? Когда одну команду надо повторить несколько раз."),
            t("return nə qaytarır? Funksiyanın nəticəsini. add(2, 5) 7 qaytarır.", "What does return give back? The result of the function. add(2, 5) returns 7.", "return ne döndürür? Fonksiyonun sonucunu. add(2, 5) 7 döndürür.", "ماذا يُرجع return؟ نتيجة الدالة. add(2, 5) تُرجع 7.", "Что возвращает return? Результат функции. add(2, 5) возвращает 7."),
            t("const ilə let fərqi? const sonradan dəyişmir, let dəyişə bilər.", "const or let? const does not change later, let can change.", "const ile let farkı? const sonradan değişmez, let değişebilir.", "الفرق بين const وlet؟ const لا يتغير لاحقاً، وlet يمكن أن يتغير.", "Разница const и let? const потом не меняется, let может меняться."),
          ],
        },
      ],
    },
  ],
  massiv: [
    {
      id: "array",
      title: t("Massiv nədir", "What an array is", "Dizi nedir", "ما هي المصفوفة", "Что такое массив"),
      blocks: [
        {
          paragraphs: [t(
            "Massiv bir neçə məlumatı bir dəyişəndə saxlayır: adlar, oyunlar, xallar. Hər biri üçün ayrıca dəyişən lazım deyil.",
            "An array keeps several values in one variable: names, games, scores. You do not need a separate variable for each.",
            "Dizi birkaç veriyi tek değişkende tutar: adlar, oyunlar, puanlar. Her biri için ayrı değişken gerekmez.",
            "المصفوفة تحفظ عدة قيم في متغير واحد: أسماء وألعاب ونقاط. لا حاجة لمتغير لكل واحدة.",
            "Массив хранит несколько значений в одной переменной: имена, игры, очки. Отдельная переменная на каждое не нужна.",
          )],
          code: 'let meyveler = ["Alma", "Armud", "Banan"];\nconsole.log(meyveler);\n// ["Alma", "Armud", "Banan"]',
        },
      ],
    },
    {
      id: "push",
      title: t("push: sona əlavə et", "push: add to the end", "push: sona ekle", "push: أضف في النهاية", "push: добавить в конец"),
      blocks: [
        {
          paragraphs: [t(
            "push() massivin sonuna element qoyur. Köhnə elementlər silinmir. Bir çağırışda bir neçə element də vermək olur.",
            "push() puts an item at the end of the array. The old items stay. One call can add several items.",
            "push() dizinin sonuna öğe koyar. Eski öğeler silinmez. Bir çağrıda birkaç öğe de verilebilir.",
            "push() يضع عنصراً في نهاية المصفوفة. العناصر القديمة تبقى. يمكن تمرير عدة عناصر في نداء واحد.",
            "push() кладёт элемент в конец массива. Старые элементы остаются. За один вызов можно добавить несколько.",
          )],
          code: 'let oyunlar = ["Minecraft", "Roblox"];\noyunlar.push("GTA", "FIFA");\nconsole.log(oyunlar);\n// ["Minecraft", "Roblox", "GTA", "FIFA"]',
        },
      ],
    },
    {
      id: "length",
      title: t("length və indeks", "length and the index", "length ve indeks", "length والفهرس", "length и индекс"),
      blocks: [
        {
          paragraphs: [t(
            "length elementlərin sayıdır. Bu metod deyil, ona görə mötərizə yazılmır: meyveler.length. İndeks 0-dan başlayır. Olmayan indeks undefined qaytarır.",
            "length is the number of items. It is not a method, so there are no parentheses: meyveler.length. The index starts at 0. A missing index returns undefined.",
            "length öğe sayısıdır. Metot değildir, bu yüzden parantez yazılmaz: meyveler.length. İndeks 0'dan başlar. Olmayan indeks undefined döndürür.",
            "length عدد العناصر. ليست دالة، لذلك لا تُكتب الأقواس: meyveler.length. الفهرس يبدأ من 0. الفهرس غير الموجود يُرجع undefined.",
            "length — число элементов. Это не метод, скобки не пишут: meyveler.length. Индекс начинается с 0. Несуществующий индекс возвращает undefined.",
          )],
          code: 'let heyvanlar = ["Pişik", "İt"];\nconsole.log(heyvanlar.length); // 2\nheyvanlar.push("Dovşan");\nconsole.log(heyvanlar.length); // 3\nconsole.log(heyvanlar[0]); // Pişik\nconsole.log(heyvanlar[5]); // undefined',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("push nə edir? Massivin sonuna yeni element əlavə edir.", "What does push do? It adds a new item at the end of the array.", "push ne yapar? Dizinin sonuna yeni öğe ekler.", "ماذا يفعل push؟ يضيف عنصراً جديداً في نهاية المصفوفة.", "Что делает push? Добавляет новый элемент в конец массива."),
            t("length() yazmaq olarmı? Xeyr. length xüsusiyyətdir, mötərizəsiz yazılır.", "Can I write length()? No. length is a property, written without parentheses.", "length() yazılır mı? Hayır. length özelliktir, parantezsiz yazılır.", "هل أكتب length()؟ لا. length خاصية وتُكتب بلا أقواس.", "Можно ли писать length()? Нет. length — свойство, без скобок."),
            t("Birinci element hansı indeksdədir? 0-da. İkinci 1-dədir.", "Which index is the first item? 0. The second is 1.", "İlk öğe hangi indekste? 0'da. İkincisi 1'dedir.", "في أي فهرس العنصر الأول؟ في 0. والثاني في 1.", "На каком индексе первый элемент? На 0. Второй на 1."),
            t("Olmayan indeks nə verir? undefined. Massiv özü yeni element yaratmır.", "What does a missing index give? undefined. The array does not invent an item.", "Olmayan indeks ne verir? undefined. Dizi kendiliğinden öğe yaratmaz.", "ماذا يعطي فهرس غير موجود؟ undefined. المصفوفة لا تخترع عنصراً.", "Что даёт несуществующий индекс? undefined. Массив сам элемент не создаёт."),
          ],
        },
      ],
    },
  ],
  "for-massiv": [
    {
      id: "walk",
      title: t("for ilə massivi gəz", "Walk an array with for", "for ile diziyi gez", "امشِ المصفوفة بـ for", "Пройди массив через for"),
      blocks: [
        {
          paragraphs: [t(
            "for üç hissədən ibarətdir: başlanğıc, şərt və addım. Massiv üçün sayğac 0-dan başlayır və length-dən kiçik qaldıqca artır. meyveler[i] cari elementdir.",
            "for has three parts: a start, a condition and a step. For an array the counter starts at 0 and grows while it is smaller than length. meyveler[i] is the current item.",
            "for üç parçadan oluşur: başlangıç, koşul ve adım. Dizi için sayaç 0'dan başlar ve length'ten küçük kaldıkça artar. meyveler[i] o anki öğedir.",
            "for من ثلاثة أجزاء: البداية والشرط والخطوة. للمصفوفة يبدأ العدّاد من 0 ويزيد ما دام أصغر من length. meyveler[i] هو العنصر الحالي.",
            "У for три части: начало, условие и шаг. Для массива счётчик начинается с 0 и растёт, пока он меньше length. meyveler[i] — текущий элемент.",
          )],
          code: 'let meyveler = ["alma", "armud", "banan", "gilas"];\nfor (let i = 0; i < meyveler.length; i++) {\n  console.log(meyveler[i]);\n}\n// alma, armud, banan, gilas',
        },
      ],
    },
    {
      id: "sum",
      title: t("Cəm, ən böyük və cüt", "Sum, the largest and the evens", "Toplam, en büyük ve çiftler", "المجموع والأكبر والأزواج", "Сумма, максимум и чётные"),
      blocks: [
        {
          paragraphs: [t(
            "Eyni dövrə şərt əlavə olunur. Cəm üçün hər elementi toplayırsan. Ən böyük üçün birinci elementi götürüb qalanları onunla müqayisə edirsən. Cüt ədəd % 2 === 0 olandır.",
            "The same loop takes a condition. For a sum you add each item. For the largest you start with the first item and compare the rest. An even number is one where % 2 === 0.",
            "Aynı döngüye koşul eklenir. Toplam için her öğeyi eklersin. En büyük için ilk öğeyi alıp kalanlarla karşılaştırırsın. Çift sayı % 2 === 0 olanıdır.",
            "تُضاف شرط إلى الحلقة نفسها. للمجموع تجمع كل عنصر. للأكبر تبدأ بالأول وتقارن الباقي. العدد الزوجي هو الذي % 2 === 0.",
            "В тот же цикл добавляется условие. Для суммы складываешь каждый элемент. Для максимума берёшь первый и сравниваешь остальные. Чётное число — то, у которого % 2 === 0.",
          )],
          code: 'let reqemler = [12, 45, 7, 89, 34];\nlet cem = 0;\nlet enBoyuk = reqemler[0];\nfor (let i = 0; i < reqemler.length; i++) {\n  cem = cem + reqemler[i];\n  if (reqemler[i] > enBoyuk) enBoyuk = reqemler[i];\n  if (reqemler[i] % 2 === 0) console.log(reqemler[i]);\n}\nconsole.log(cem, enBoyuk);',
        },
      ],
    },
    {
      id: "back",
      title: t("Tərsinə və for...of", "Backwards and for...of", "Tersten ve for...of", "عكساً وfor...of", "Назад и for...of"),
      blocks: [
        {
          paragraphs: [t(
            "Tərsinə getmək üçün sonuncu indeksdən başla: length - 1, və i-- ilə azal. İndeks lazım deyilsə for...of daha qısadır. i <= length yazma: son addım undefined olur. i++ unudulanda dövr bitmir.",
            "To go backwards, start at the last index: length - 1, and step down with i--. If you do not need the index, for...of is shorter. Do not write i <= length: the last step is undefined. If you forget i++, the loop never ends.",
            "Tersten gitmek için son indeksten başla: length - 1, ve i-- ile azalt. İndeks gerekmiyorsa for...of daha kısadır. i <= length yazma: son adım undefined olur. i++ unutulursa döngü bitmez.",
            "للسير عكساً ابدأ من الفهرس الأخير: length - 1، وانقص بـ i--. إذا لم تحتج الفهرس فـ for...of أقصر. لا تكتب i <= length: الخطوة الأخيرة undefined. إذا نسيت i++ لا تنتهي الحلقة.",
            "Чтобы идти назад, начни с последнего индекса: length - 1, и уменьшай через i--. Если индекс не нужен, for...of короче. Не пиши i <= length: последний шаг будет undefined. Если забыть i++, цикл не кончится.",
          )],
          code: 'for (let i = meyveler.length - 1; i >= 0; i--) {\n  console.log(meyveler[i]);\n}\nfor (let meyve of meyveler) {\n  console.log(meyve);\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("for niyə 0-dan başlayır? Birinci elementin indeksi 0-dır.", "Why does for start at 0? The first item's index is 0.", "for neden 0'dan başlar? İlk öğenin indeksi 0'dır.", "لماذا يبدأ for من 0؟ فهرس العنصر الأول هو 0.", "Почему for начинается с 0? Индекс первого элемента — 0."),
            t("Şərt niyə i < length-dir? Sonuncu indeks length - 1-dir. Bərabər yazılanda olmayan yer undefined olur.", "Why is the condition i < length? The last index is length - 1. With equal, the missing place is undefined.", "Koşul neden i < length? Son indeks length - 1'dir. Eşit yazılırsa olmayan yer undefined olur.", "لماذا الشرط i < length؟ الفهرس الأخير هو length - 1. مع المساواة يصبح المكان غير الموجود undefined.", "Почему условие i < length? Последний индекс — length - 1. При равенстве несуществующее место даёт undefined."),
            t("Cüt ədəd necə bilinir? Ədədi 2-yə böldükdə qalıq 0-dırsa: n % 2 === 0.", "How do you know a number is even? If the remainder of dividing by 2 is 0: n % 2 === 0.", "Çift sayı nasıl bilinir? 2'ye bölününce kalan 0 ise: n % 2 === 0.", "كيف تعرف أن العدد زوجي؟ إذا كان باقي القسمة على 2 صفراً: n % 2 === 0.", "Как узнать, что число чётное? Если остаток от деления на 2 равен 0: n % 2 === 0."),
            t("for...of nə vaxt olur? İndeks lazım olmayanda. İndeks və ya element dəyişmək lazımdırsa adi for yaz.", "When is for...of enough? When you do not need the index. If you need the index or must change an item, write a plain for.", "for...of ne zaman olur? İndeks gerekmeyince. İndeks veya öğe değiştirmek gerekirse düz for yaz.", "متى يكفي for...of؟ عندما لا تحتاج الفهرس. إذا احتجت الفهرس أو تغيير عنصر فاكتب for العادي.", "Когда хватает for...of? Когда индекс не нужен. Если нужен индекс или надо менять элемент, пиши обычный for."),
          ],
        },
      ],
    },
  ],
  funksiya: [
    {
      id: "write",
      title: t("Funksiyanı yaz və çağır", "Write a function and call it", "Fonksiyonu yaz ve çağır", "اكتب دالة واستدعها", "Напиши функцию и вызови её"),
      blocks: [
        {
          paragraphs: [t(
            "Funksiya bir işi bir dəfə yazıb dəfələrlə işlətmək üçündür. function sözündən sonra ad, sonra () və {} gəlir. Yazmaq onu işə salmır. Adını və () yazanda çağırılır. Mötərizə unudulsa heç nə olmur.",
            "A function writes one job once and runs it many times. After function come the name, then () and {}. Writing it does not run it. It runs when you write the name and (). If you forget the parentheses, nothing happens.",
            "Fonksiyon bir işi bir kez yazıp defalarca çalıştırmak içindir. function sözünden sonra ad, sonra () ve {} gelir. Yazmak onu çalıştırmaz. Adı ve () yazılınca çağrılır. Parantez unutulursa hiçbir şey olmaz.",
            "الدالة تكتب عملاً مرة وتُشغّله مرات. بعد function يأتي الاسم ثم () و{}. كتابتها لا تُشغّلها. تُستدعى حين تكتب الاسم و(). إذا نسيت القوسين لا يحدث شيء.",
            "Функция пишет одно дело один раз и запускает его много раз. После function идут имя, затем () и {}. Написание её не запускает. Она вызывается, когда пишешь имя и (). Если забыть скобки, ничего не случится.",
          )],
          code: 'function seslen() {\n  console.log("Burdayam");\n}\nseslen();\n\nfunction yazdir(ad) {\n  console.log(ad);\n}\nyazdir("Əli");',
        },
      ],
    },
    {
      id: "return",
      title: t("Parametr və return", "A parameter and return", "Parametre ve return", "المعامل وreturn", "Параметр и return"),
      blocks: [
        {
          paragraphs: [t(
            "Parametr funksiyaya verilən məlumatdır. return nəticəni geri qaytarır və funksiyanı həmin sətirdə dayandırır. console.log yalnız ekrana yazır, dəyəri saxlamır. İkinci parametr verilməsə nəticə NaN olur.",
            "A parameter is information given to the function. return sends a result back and stops the function on that line. console.log only prints. It does not keep the value. If the second parameter is missing, the result is NaN.",
            "Parametre fonksiyona verilen bilgidir. return sonucu geri verir ve fonksiyonu o satırda durdurur. console.log yalnız ekrana yazar, değeri saklamaz. İkinci parametre verilmezse sonuç NaN olur.",
            "المعامل معلومة تُعطى للدالة. return يُرجع النتيجة ويوقف الدالة في ذلك السطر. console.log يطبع فقط ولا يحفظ القيمة. إذا غاب المعامل الثاني صارت النتيجة NaN.",
            "Параметр — это данные, которые дают функции. return возвращает результат и останавливает функцию на этой строке. console.log только печатает, значение не хранит. Если второго параметра нет, результат будет NaN.",
          )],
          code: 'function topla(a, b) {\n  return a + b;\n}\nconsole.log(topla(4, 6)); // 10\n\nfunction yoxla(bal) {\n  if (bal >= 50) return "Keçdi";\n  return "Kəsildi";\n}\nconsole.log(yoxla(40));',
        },
      ],
    },
    {
      id: "array",
      title: t("Funksiya və massiv", "A function and an array", "Fonksiyon ve dizi", "دالة ومصفوفة", "Функция и массив"),
      blocks: [
        {
          paragraphs: [t(
            "Massiv də parametr ola bilər. İçində for ilə cəmi və ən böyük ədədi tapmaq olur. {} bağlanmasa xəta yaranır. return-dən sonrakı sətir işləmir.",
            "An array can be a parameter too. Inside, a for loop can find the sum and the largest number. If {} is not closed, you get an error. The line after return does not run.",
            "Dizi de parametre olabilir. İçinde for ile toplam ve en büyük sayı bulunur. {} kapanmazsa hata çıkar. return'den sonraki satır çalışmaz.",
            "يمكن أن تكون المصفوفة معاملاً أيضاً. في الداخل تجد حلقة for المجموع والعدد الأكبر. إذا لم يُغلق {} ظهر خطأ. السطر بعد return لا يعمل.",
            "Массив тоже может быть параметром. Внутри for можно найти сумму и самое большое число. Если {} не закрыта, будет ошибка. Строка после return не выполняется.",
          )],
          code: 'function massivCemi(ededler) {\n  let cem = 0;\n  for (let i = 0; i < ededler.length; i++) {\n    cem = cem + ededler[i];\n  }\n  return cem;\n}\nconsole.log(massivCemi([1, 2, 3, 4])); // 10\n\nfunction enBoyuk(ededler) {\n  let max = ededler[0];\n  for (let i = 1; i < ededler.length; i++) {\n    if (ededler[i] > max) max = ededler[i];\n  }\n  return max;\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("Funksiya özü niyə işləmir? Onu çağırmaq lazımdır: seslen(). Mötərizəsiz yalnız ad yazmaq kifayət etmir.", "Why does a function not run by itself? You must call it: seslen(). Writing only the name, without parentheses, is not enough.", "Fonksiyon kendiliğinden neden çalışmaz? Çağırmak gerekir: seslen(). Parantezsiz yalnız ad yazmak yetmez.", "لماذا لا تعمل الدالة وحدها؟ يجب استدعاؤها: seslen(). كتابة الاسم بلا قوسين لا تكفي.", "Почему функция сама не работает? Её надо вызвать: seslen(). Одного имени без скобок мало."),
            t("console.log və return fərqi nədir? console.log göstərir. return dəyəri geri verir ki, onu başqa yerdə saxlayasan.", "What is the difference between console.log and return? console.log shows. return gives the value back so you can keep it somewhere else.", "console.log ve return farkı nedir? console.log gösterir. return değeri geri verir ki, başka yerde saklayasan.", "ما الفرق بين console.log وreturn؟ console.log يُظهر. return يُرجع القيمة كي تحفظها في مكان آخر.", "В чём разница console.log и return? console.log показывает. return отдаёт значение, чтобы сохранить его в другом месте."),
            t("return-dən sonra kod niyə işləmir? return funksiyanı dayandırır. Ondan sonrakı sətir oxunmur.", "Why does code after return not run? return stops the function. The line after it is not read.", "return'den sonra kod neden çalışmaz? return fonksiyonu durdurur. Ondan sonraki satır okunmaz.", "لماذا لا يعمل الكود بعد return؟ return يوقف الدالة. السطر بعده لا يُقرأ.", "Почему код после return не работает? return останавливает функцию. Следующая строка не читается."),
            t("İki parametrli funksiyaya bir ədəd versəm? İkincisi undefined olur və toplama NaN verir. Hər parametri göndər.", "What if I pass one number to a function with two parameters? The second is undefined and the sum is NaN. Pass every parameter.", "İki parametreli fonksiyona bir sayı versem? İkincisi undefined olur ve toplama NaN verir. Her parametreyi gönder.", "ماذا إذا مرّرت رقماً واحداً لدالة بمعاملين؟ الثاني يصير undefined والمجموع NaN. مرّر كل معامل.", "Что если функции с двумя параметрами дать одно число? Второе будет undefined, и сумма станет NaN. Передавай каждый параметр."),
          ],
        },
      ],
    },
  ],
  obyekt: [
    {
      id: "write",
      title: t("Obyekti yaz", "Write an object", "Nesneyi yaz", "اكتب كائناً", "Напиши объект"),
      blocks: [
        {
          paragraphs: [t(
            "Obyekt bir neçə məlumatı bir yerdə saxlayır. Hər xüsusiyyət açar və dəyərdir. Açar ilə dəyər arasına iki nöqtə qoyulur, xüsusiyyətlər vergüllə ayrılır. = burada səhvdir.",
            "An object keeps several pieces of information together. Each property is a key and a value. A colon goes between them, and properties are separated by commas. = is wrong here.",
            "Nesne birkaç bilgiyi bir yerde tutar. Her özellik anahtar ve değerdir. Araya iki nokta konur, özellikler virgülle ayrılır. = burada yanlıştır.",
            "الكائن يحفظ عدة معلومات معاً. كل خاصية مفتاح وقيمة. توضع نقطتان بينهما، وتُفصل الخصائص بفاصلة. = هنا خطأ.",
            "Объект хранит несколько данных вместе. Каждое свойство — ключ и значение. Между ними двоеточие, свойства разделяются запятыми. = здесь ошибка.",
          )],
          code: 'let telebe = {\n  ad: "Əli",\n  yas: 20\n};\nconsole.log(telebe.ad); // Əli\nconsole.log(telebe.yas); // 20',
        },
      ],
    },
    {
      id: "read",
      title: t("Oxu və dəyiş", "Read and change", "Oku ve değiştir", "اقرأ وغيّر", "Прочитай и измени"),
      blocks: [
        {
          paragraphs: [t(
            "Nöqtə ilə oxuyursan və bərabərliklə dəyişirsən. Olmayan xüsusiyyət undefined verir. Kvadrat mötərizədə açar dırnaqda olmalıdır. Dırnaq yoxdursa JavaScript onu dəyişən sanır.",
            "You read with a dot and change with equals. A missing property gives undefined. Inside square brackets the key must be in quotes. Without quotes JavaScript looks for a variable.",
            "Nokta ile okursun ve eşitle değiştirirsin. Olmayan özellik undefined verir. Köşeli parantezde anahtar tırnakta olmalıdır. Tırnak yoksa JavaScript onu değişken sanır.",
            "تقرأ بنقطة وتغيّر بالمساواة. الخاصية غير الموجودة تعطي undefined. داخل الأقواس المربعة يجب أن يكون المفتاح بين علامتي اقتباس. بلا اقتباس يبحث جافاسكريبت عن متغير.",
            "Читаешь точкой и меняешь знаком равенства. Нет свойства — будет undefined. В квадратных скобках ключ должен быть в кавычках. Без кавычек JavaScript ищет переменную.",
          )],
          code: 'let mehsul = { ad: "Kitab", qiymet: 12 };\nmehsul.qiymet = 15;\nconsole.log(mehsul.qiymet); // 15\nconsole.log(mehsul.reng); // undefined\nconsole.log(mehsul["ad"]); // Kitab',
        },
      ],
    },
    {
      id: "list",
      title: t("Əlavə et, sil, massiv", "Add, delete, array", "Ekle, sil, dizi", "أضف واحذف ومصفوفة", "Добавь, удали, массив"),
      blocks: [
        {
          paragraphs: [t(
            "Yeni xüsusiyyət nöqtə ilə əlavə olunur. delete onu silir. Obyektin içində massiv, massivin içində isə obyekt ola bilər. Birinci elementin indeksi 0-dır.",
            "A new property is added with a dot. delete removes it. An object can hold an array, and an array can hold objects. The first item's index is 0.",
            "Yeni özellik nokta ile eklenir. delete onu siler. Nesnenin içinde dizi, dizinin içinde nesne olabilir. İlk öğenin indeksi 0'dır.",
            "تُضاف خاصية جديدة بنقطة. delete يحذفها. يمكن أن يحمل الكائن مصفوفة، والمصفوفة كائنات. فهرس العنصر الأول 0.",
            "Новое свойство добавляется точкой. delete его удаляет. В объекте может быть массив, а в массиве — объекты. Индекс первого элемента — 0.",
          )],
          code: 'let telefon = { marka: "Honor", qiymet: 600 };\ntelefon.reng = "Qara";\ndelete telefon.qiymet;\nconsole.log(telefon.qiymet); // undefined\n\nlet mallar = [\n  { ad: "Qələm", qiymet: 2 },\n  { ad: "Dəftər", qiymet: 5 }\n];\nconsole.log(mallar[1].qiymet); // 5',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("Açar ilə dəyər arasına nə qoyulur? İki nöqtə. Bərabərlik yalnız sonra, dəyəri dəyişəndə işlənir.", "What goes between a key and a value? A colon. Equals is only used later, when you change the value.", "Anahtar ile değer arasına ne konur? İki nokta. Eşittir yalnız sonra, değeri değiştirirken kullanılır.", "ماذا يوضع بين المفتاح والقيمة؟ نقطتان. المساواة تُستخدم لاحقاً عند تغيير القيمة.", "Что ставится между ключом и значением? Двоеточие. Знак равенства только потом, когда меняешь значение."),
            t("Vergül niyə lazımdır? Xüsusiyyətləri ayırır. Unudulsa kod xəta verir.", "Why is the comma needed? It separates properties. If you forget it, the code throws an error.", "Virgül neden gerekir? Özellikleri ayırır. Unutulursa kod hata verir.", "لماذا الفاصلة؟ تفصل الخصائص. إذا نُسيت ظهر خطأ.", "Зачем запятая? Она разделяет свойства. Если забыть, код даст ошибку."),
            t("Olmayan xüsusiyyət nə verir? undefined. Bu, məlumatın olmadığını deyir.", "What does a missing property give? undefined. That says the information is not there.", "Olmayan özellik ne verir? undefined. Bu, bilginin olmadığını söyler.", "ماذا تعطي خاصية غير موجودة؟ undefined. هذا يقول إن المعلومة غير موجودة.", "Что даёт отсутствующее свойство? undefined. Это значит, что данных нет."),
            t("a[ad] niyə işləmir? Dırnaq yoxdur. Doğrusu a[\"ad\"]-dır. Nöqtə ilə a.ad da olur.", "Why does a[ad] fail? There are no quotes. The correct form is a[\"ad\"]. a.ad also works.", "a[ad] neden çalışmaz? Tırnak yok. Doğrusu a[\"ad\"]. Nokta ile a.ad da olur.", "لماذا يفشل a[ad]؟ لا توجد علامات اقتباس. الصحيح a[\"ad\"]. وa.ad يعمل أيضاً.", "Почему a[ad] не работает? Нет кавычек. Правильно a[\"ad\"]. a.ad тоже работает."),
          ],
        },
      ],
    },
  ],
  duyme: [
    {
      id: "click",
      title: t("Düyməyə basanda", "When a button is clicked", "Düğmeye basınca", "عند الضغط على الزر", "Когда нажали кнопку"),
      blocks: [
        {
          paragraphs: [t(
            "Hadisə istifadəçinin hərəkətidir. Ən çox işlənəni klikdir. onclick sadə nümunə üçündür. Ayrı skriptdə addEventListener daha düzgündür.",
            "An event is something the user does. The most used one is a click. onclick is fine for a small example. In a separate script, addEventListener is the clearer way.",
            "Olay kullanıcının hareketidir. En çok kullanılanı tıklamadır. onclick küçük örnek içindir. Ayrı betikte addEventListener daha doğrudur.",
            "الحدث هو فعل المستخدم. الأكثر استخداماً هو النقر. onclick يكفي لمثال صغير. في سكربت منفصل addEventListener أوضح.",
            "Событие — это действие пользователя. Чаще всего это клик. onclick годится для короткого примера. В отдельном скрипте яснее addEventListener.",
          )],
          code: '<button id="menimDuyme">Bas mənə</button>\n<script>\n  const duyme = document.getElementById("menimDuyme");\n  duyme.addEventListener("click", function () {\n    alert("Düyməyə basdın!");\n  });\n</script>',
        },
      ],
    },
    {
      id: "text",
      title: t("Yazını dəyiş və say", "Change the text and count", "Yazıyı değiştir ve say", "غيّر النص وعدّ", "Меняй текст и считай"),
      blocks: [
        {
          paragraphs: [t(
            "getElementById elementi id ilə tapır. textContent həmin elementin mətnini dəyişir. Səhifə yenidən yüklənmir.",
            "getElementById finds an element by its id. textContent changes that element's text. The page does not reload.",
            "getElementById öğeyi id ile bulur. textContent o öğenin metnini değiştirir. Sayfa yeniden yüklenmez.",
            "getElementById يجد العنصر بمعرّفه. textContent يغيّر نص ذلك العنصر. الصفحة لا تُعاد تحميلها.",
            "getElementById находит элемент по id. textContent меняет его текст. Страница не перезагружается.",
          )],
          code: 'let say = 0;\nconst sayElementi = document.getElementById("say");\nconst duyme = document.getElementById("artir");\nduyme.addEventListener("click", function () {\n  say = say + 1;\n  sayElementi.textContent = say;\n  if (say >= 5) {\n    document.getElementById("mesaj").textContent = "Sayğac 5-ə çatdı.";\n  }\n});',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("onclick nədir? Klik olanda işləyən qısa əmrdir. Kiçik nümunə üçün kifayətdir.", "What is onclick? A short command that runs on a click. Enough for a small example.", "onclick nedir? Tıklayınca çalışan kısa komuttur. Küçük örnek için yeter.", "ما هو onclick؟ أمر قصير يعمل عند النقر. يكفي لمثال صغير.", "Что такое onclick? Короткая команда при клике. Для маленького примера хватает."),
            t("addEventListener nə gözləyir? Birinci arqument hadisənin adıdır, məsələn click. İkinci funksiyadır.", "What does addEventListener wait for? The first argument is the event name, such as click. The second is a function.", "addEventListener ne bekler? İlk argüman olayın adıdır, örneğin click. İkincisi fonksiyondur.", "ماذا ينتظر addEventListener؟ الوسيط الأول اسم الحدث مثل click. والثاني دالة.", "Чего ждёт addEventListener? Первый аргумент — имя события, например click. Второй — функция."),
            t("id niyə lazımdır? JavaScript həmin elementi tapmaq üçün. Səhifədə təkrar olmamalıdır.", "Why is an id needed? So JavaScript can find that element. It should not repeat on the page.", "id neden gerekir? JavaScript o öğeyi bulsun diye. Sayfada tekrar etmemelidir.", "لماذا نحتاج id؟ كي يجد جافاسكريبت ذلك العنصر. يجب ألا يتكرر في الصفحة.", "Зачем id? Чтобы JavaScript нашёл этот элемент. На странице он не должен повторяться."),
            t("textContent nə dəyişir? Elementin görünən mətnini. Səhifəni yeniləmədən.", "What does textContent change? The visible text of the element. Without reloading the page.", "textContent neyi değiştirir? Öğenin görünen metnini. Sayfayı yenilemeden.", "ماذا يغيّر textContent؟ النص الظاهر للعنصر. دون إعادة تحميل الصفحة.", "Что меняет textContent? Видимый текст элемента. Без перезагрузки страницы."),
          ],
        },
      ],
    },
  ],
  input: [
    {
      id: "prompt",
      title: t("prompt ilə soruş", "Ask with prompt", "prompt ile sor", "اسأل بـ prompt", "Спроси через prompt"),
      blocks: [
        {
          paragraphs: [t(
            "prompt brauzerdə kiçik pəncərə açır və yazını qaytarır. Cancel basılanda null olur. Qaytarılan həmişə mətndir. Ədəd lazımdırsa Number yaz, yoxsa \"12\" + \"34\" \"1234\" olar.",
            "prompt opens a small window in the browser and returns the text. Cancel gives null. The result is always text. If you need a number, write Number, or \"12\" + \"34\" becomes \"1234\".",
            "prompt tarayıcıda küçük bir pencere açar ve yazıyı döndürür. Cancel basılırsa null olur. Dönen her zaman metindir. Sayı gerekirse Number yaz, yoksa \"12\" + \"34\" \"1234\" olur.",
            "prompt يفتح نافذة صغيرة في المتصفح ويُرجع النص. عند الإلغاء تكون النتيجة null. الناتج دائماً نص. إذا احتجت رقماً اكتب Number، وإلا أصبح \"12\" + \"34\" هو \"1234\".",
            "prompt открывает в браузере маленькое окно и возвращает текст. При отмене будет null. Результат всегда текст. Если нужно число, напиши Number, иначе \"12\" + \"34\" станет \"1234\".",
          )],
          code: 'let ad = prompt("Adınızı daxil edin:");\nif (ad === null) {\n  console.log("İmtina edildi.");\n} else {\n  console.log("Salam, " + ad + "!");\n}\nlet a = Number(prompt("Birinci ədəd:"));\nlet b = Number(prompt("İkinci ədəd:"));\nconsole.log(a + b);',
        },
      ],
    },
    {
      id: "html",
      title: t("HTML input-dan oxu", "Read an HTML input", "HTML input'tan oku", "اقرأ من input في HTML", "Прочитай HTML input"),
      blocks: [
        {
          paragraphs: [t(
            "Səhifədəki qutunun mətni .value-dadır. Düyməyə basılanda oxu və textContent ilə göstər. Forma göndəriləndə səhifə yenilənməsin deyə preventDefault çağır.",
            "The text in a page box is in .value. Read it when the button is clicked and show it with textContent. On a form submit, call preventDefault so the page does not reload.",
            "Sayfadaki kutunun metni .value içindedir. Düğmeye basılınca oku ve textContent ile göster. Form gönderilince sayfa yenilenmesin diye preventDefault çağır.",
            "نص الصندوق في الصفحة داخل .value. اقرأه عند الضغط على الزر وأظهره بـ textContent. عند إرسال النموذج استدعِ preventDefault كي لا تُعاد تحميل الصفحة.",
            "Текст поля на странице лежит в .value. Прочитай его по клику и покажи через textContent. При отправке формы вызови preventDefault, чтобы страница не обновилась.",
          )],
          code: '<input id="adInput" type="text">\n<button id="gosterBtn">Göstər</button>\n<p id="netice"></p>\n<script>\n  const adInput = document.getElementById("adInput");\n  const netice = document.getElementById("netice");\n  document.getElementById("gosterBtn").addEventListener("click", function () {\n    netice.textContent = "Salam, " + adInput.value + "!";\n  });\n</script>',
        },
      ],
    },
    {
      id: "node",
      title: t("Node.js-də readline", "readline in Node.js", "Node.js'te readline", "readline في Node.js", "readline в Node.js"),
      blocks: [
        {
          paragraphs: [t(
            "Brauzerdən kənar, terminalda, readline sual verir. Cavab funksiyaya düşür. Sonda rl.close() çağır, yoxsa proqram gözləməkdə qalır. Sayt dərsi üçün prompt və HTML input kifayətdir.",
            "Outside the browser, in a terminal, readline asks a question. The answer arrives in a function. Call rl.close() at the end, or the program keeps waiting. For a page lesson, prompt and an HTML input are enough.",
            "Tarayıcı dışında, terminalde, readline soru sorar. Cevap fonksiyona düşer. Sonda rl.close() çağır, yoksa program beklemeye devam eder. Sayfa dersi için prompt ve HTML input yeter.",
            "خارج المتصفح، في الطرفية، readline يطرح سؤالاً. يصل الجواب إلى دالة. في النهاية استدعِ rl.close() وإلا بقي البرنامج منتظراً. لدرس الصفحة يكفي prompt وinput في HTML.",
            "Вне браузера, в терминале, readline задаёт вопрос. Ответ приходит в функцию. В конце вызови rl.close(), иначе программа продолжит ждать. Для урока на странице хватает prompt и HTML input.",
          )],
          code: 'const readline = require("readline");\nconst rl = readline.createInterface({\n  input: process.stdin,\n  output: process.stdout,\n});\nrl.question("Adınız: ", function (ad) {\n  console.log("Salam, " + ad + "!");\n  rl.close();\n});',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("prompt nə qaytarır? Mətn. Cancel basılanda null.", "What does prompt return? Text. null if Cancel is pressed.", "prompt ne döndürür? Metin. Cancel basılırsa null.", "ماذا يُرجع prompt؟ نصاً. null عند الإلغاء.", "Что возвращает prompt? Текст. null, если нажали Cancel."),
            t("İki ədəd niyə yapışır? Onlar hələ mətndir. Number() ilə çevir, sonra topla.", "Why do two numbers stick together? They are still text. Convert with Number(), then add.", "İki sayı neden yapışır? Onlar hâlâ metindir. Number() ile çevir, sonra topla.", "لماذا يلتصق الرقمان؟ ما زالا نصاً. حوّلهما بـ Number() ثم اجمع.", "Почему два числа слипаются? Они ещё текст. Переведи через Number(), потом сложи."),
            t("HTML qutusunun yazısı haradadır? input.value. Göstərmək üçün başqa elementin textContent-ini dəyiş.", "Where is the text of an HTML box? input.value. To show it, change another element's textContent.", "HTML kutusunun yazısı nerede? input.value. Göstermek için başka öğenin textContent'ini değiştir.", "أين نص صندوق HTML؟ في input.value. لإظهاره غيّر textContent لعنصر آخر.", "Где текст поля HTML? В input.value. Чтобы показать, измени textContent другого элемента."),
            t("Forma niyə səhifəni yeniləyir? submit bunu edir. event.preventDefault() yeniləməni dayandırır.", "Why does a form reload the page? submit does that. event.preventDefault() stops the reload.", "Form neden sayfayı yeniler? submit bunu yapar. event.preventDefault() yenilemeyi durdurur.", "لماذا يعيد النموذج تحميل الصفحة؟ submit يفعل ذلك. event.preventDefault() يوقف إعادة التحميل.", "Почему форма обновляет страницу? Это делает submit. event.preventDefault() останавливает обновление."),
          ],
        },
      ],
    },
  ],
  undefined: [
    {
      id: "var",
      title: t("Dəyər verilməyən dəyişən", "A variable with no value", "Değeri olmayan değişken", "متغير بلا قيمة", "Переменная без значения"),
      blocks: [
        {
          paragraphs: [t(
            "undefined həmişə xəta deyil. Dəyişən yaradılıb, amma dəyər verilməyibsə, onun dəyəri undefined olur.",
            "undefined is not always an error. If a variable was created but never given a value, its value is undefined.",
            "undefined her zaman hata değildir. Değişken yaratıldı ama değer verilmediyse değeri undefined olur.",
            "undefined ليس دائماً خطأ. إذا أُنشئ متغير ولم تُعطَ له قيمة فقيمته undefined.",
            "undefined — не всегда ошибка. Если переменную создали и не дали значение, её значение undefined.",
          )],
          code: 'let ad;\nconsole.log(ad); // undefined\nad = "Murad";\nconsole.log(ad); // Murad',
        },
      ],
    },
    {
      id: "missing",
      title: t("Olmayan indeks və xüsusiyyət", "A missing index or property", "Olmayan indeks ve özellik", "فهرس أو خاصية غير موجودة", "Нет индекса или свойства"),
      blocks: [
        {
          paragraphs: [t(
            "Massivdə olmayan indeks və obyektdə olmayan xüsusiyyət də undefined qaytarır. Bu, məlumatın olmadığını deyir, proqramı özü dayandırmır.",
            "A missing array index and a missing object property also return undefined. That says the data is not there. It does not stop the program by itself.",
            "Dizide olmayan indeks ve nesnede olmayan özellik de undefined döndürür. Bu, verinin olmadığını söyler, programı kendiliğinden durdurmaz.",
            "الفهرس غير الموجود في المصفوفة والخاصية غير الموجودة في الكائن يُرجعان undefined أيضاً. هذا يقول إن البيانات غير موجودة ولا يوقف البرنامج وحده.",
            "Несуществующий индекс массива и отсутствующее свойство объекта тоже возвращают undefined. Это говорит, что данных нет, и само по себе программу не останавливает.",
          )],
          code: 'let meyveler = ["Alma", "Armud", "Banan"];\nconsole.log(meyveler[5]); // undefined\nlet telebe = { ad: "Aysel", yas: 20 };\nconsole.log(telebe.soyad); // undefined',
        },
      ],
    },
    {
      id: "null",
      title: t("null və TypeError", "null and TypeError", "null ve TypeError", "null وTypeError", "null и TypeError"),
      blocks: [
        {
          paragraphs: [t(
            "null proqramçının bilərəkdən qoyduğu boş dəyərdir. undefined isə dəyərin hələ verilmədiyini göstərir. undefined olan dəyərdən xüsusiyyət oxumaq TypeError yaradır. Əvvəl yoxla.",
            "null is an empty value the programmer set on purpose. undefined means a value was never given. Reading a property from undefined throws a TypeError. Check first.",
            "null programcının bilerek koyduğu boş değerdir. undefined ise değerin henüz verilmediğini gösterir. undefined olan değerden özellik okumak TypeError üretir. Önce kontrol et.",
            "null قيمة فارغة وضعها المبرمج عمداً. undefined يعني أن القيمة لم تُعطَ بعد. قراءة خاصية من undefined تُنتج TypeError. افحص أولاً.",
            "null — пустое значение, которое программист поставил намеренно. undefined значит, что значение ещё не задавали. Чтение свойства у undefined даёт TypeError. Сначала проверьте.",
          )],
          code: 'let secilmis = null;\nlet telebe;\nif (telebe !== undefined) {\n  console.log(telebe.ad);\n} else {\n  console.log("Tələbə məlumatı yoxdur.");\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("undefined xətadırmı? Özü xəta deyil. Dəyər verilməyib və ya axtarılan məlumat yoxdur.", "Is undefined an error? By itself, no. A value was not given, or the data you asked for is missing.", "undefined hata mıdır? Kendi başına değil. Değer verilmemiştir veya aranan veri yoktur.", "هل undefined خطأ؟ بذاته لا. القيمة لم تُعطَ أو البيانات المطلوبة غير موجودة.", "undefined — это ошибка? Само по себе нет. Значение не задано или запрошенных данных нет."),
            t("null ilə fərqi nədir? null qəsdən boş qoyulub. undefined isə təyin olunmayıb.", "How is it different from null? null was left empty on purpose. undefined was never set.", "null ile farkı nedir? null bilerek boş bırakılmıştır. undefined ise atanmamıştır.", "ما الفرق عن null؟ null تُرك فارغاً عمداً. undefined لم يُعيَّن.", "Чем отличается от null? null оставили пустым нарочно. undefined не задавали."),
            t("Nə vaxt TypeError olur? undefined dəyərdən nöqtə ilə xüsusiyyət oxuyanda. Məsələn telebe.ad, telebe isə undefined-dirsə.", "When does a TypeError happen? When you read a property from undefined with a dot. For example telebe.ad while telebe is undefined.", "TypeError ne zaman olur? undefined değerden noktayla özellik okununca. Örneğin telebe undefined iken telebe.ad.", "متى يحدث TypeError؟ عند قراءة خاصية من undefined بنقطة. مثلاً telebe.ad بينما telebe هي undefined.", "Когда бывает TypeError? Когда через точку читают свойство у undefined. Например telebe.ad, если telebe равен undefined."),
            t("Necə yoxlamaq olar? if (ad === undefined). Dəyər varsa ad !== undefined.", "How do I check? if (ad === undefined). If there is a value, ad !== undefined.", "Nasıl kontrol edilir? if (ad === undefined). Değer varsa ad !== undefined.", "كيف أفحص؟ if (ad === undefined). إذا وُجدت قيمة فـ ad !== undefined.", "Как проверить? if (ad === undefined). Если значение есть, ad !== undefined."),
          ],
        },
      ],
    },
  ],
};

