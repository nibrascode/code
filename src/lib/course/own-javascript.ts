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
  api: [
    {
      id: "key",
      title: t("API və açar", "The API and the key", "API ve anahtar", "الواجهة والمفتاح", "API и ключ"),
      blocks: [
        {
          paragraphs: [t(
            "Modeli sıfırdan yazmırsan. API kodunla hazır modeli birləşdirən körpüdür. Kod sualı göndərir, server cavabı qaytarır. Başlanğıc üçün Gemini pulsuz açar verir, kart istəmir. aistudio.google.com saytında Get API key, sonra Create API key. Açar şifrə kimidir: paylaşma və açıq GitHub-a qoyma.",
            "You do not write the model from scratch. An API is the bridge between your code and a ready model. The code sends a question and the server returns an answer. For a start, Gemini gives a free key and does not ask for a card. On aistudio.google.com choose Get API key, then Create API key. The key is like a password: do not share it and do not put it on a public GitHub.",
            "Modeli sıfırdan yazmazsın. API kodunla hazır modeli birleştiren köprüdür. Kod soruyu gönderir, sunucu cevabı döndürür. Başlangıç için Gemini ücretsiz anahtar verir, kart istemez. aistudio.google.com sitesinde Get API key, sonra Create API key. Anahtar şifre gibidir: paylaşma ve açık GitHub'a koyma.",
            "لا تكتب النموذج من الصفر. الواجهة جسر بين كودك ونموذج جاهز. الكود يرسل السؤال والخادم يُرجع الجواب. للبداية يعطي Gemini مفتاحاً مجانياً ولا يطلب بطاقة. في aistudio.google.com اختر Get API key ثم Create API key. المفتاح ككلمة السر: لا تشاركه ولا تضعه على GitHub عام.",
            "Модель с нуля не пишешь. API — мост между твоим кодом и готовой моделью. Код отправляет вопрос, сервер возвращает ответ. Для начала Gemini даёт бесплатный ключ и не просит карту. На aistudio.google.com выбери Get API key, затем Create API key. Ключ как пароль: не делись им и не клади на открытый GitHub.",
          )],
        },
      ],
    },
    {
      id: "json",
      title: t("Sorğu obyektidir", "The request is an object", "Sorgu bir nesnedir", "الطلب كائن", "Запрос — это объект"),
      blocks: [
        {
          paragraphs: [t(
            "Sual obyektin içində gedir. Cavab mətni candidates[0].content.parts[0].text ünvanındadır. candidates massivdir, ona görə [0] yazılır. [0] unudulsa nəticə undefined olur.",
            "The question travels inside an object. The answer text is at candidates[0].content.parts[0].text. candidates is an array, so you write [0]. If you forget [0], the result is undefined.",
            "Soru nesnenin içinde gider. Cevap metni candidates[0].content.parts[0].text adresindedir. candidates dizidir, bu yüzden [0] yazılır. [0] unutulursa sonuç undefined olur.",
            "السؤال يذهب داخل كائن. نص الجواب في candidates[0].content.parts[0].text. candidates مصفوفة، لذلك تُكتب [0]. إذا نُسيت [0] كانت النتيجة undefined.",
            "Вопрос уходит внутри объекта. Текст ответа лежит в candidates[0].content.parts[0].text. candidates — массив, поэтому пишется [0]. Если забыть [0], результат будет undefined.",
          )],
          code: 'const sorguMelumati = {\n  contents: [\n    {\n      parts: [{ text: "JavaScript-də dəyişən nədir?" }]\n    }\n  ]\n};',
        },
      ],
    },
    {
      id: "fetch",
      title: t("fetch ilə göndər", "Send it with fetch", "fetch ile gönder", "أرسله بـ fetch", "Отправь через fetch"),
      blocks: [
        {
          paragraphs: [t(
            "POST sualı göndərir. JSON.stringify obyekti mətnə çevirir ki, getsin. cavab.json() gələn mətni yenidən obyekt edir. Açarın əvvəlində və sonunda boşluq olmasın. Açarı səhifənin içinə qoyma: görən şəxs onu götürə bilər.",
            "POST sends the question. JSON.stringify turns the object into text so it can travel. cavab.json() turns the answer back into an object. The key must not have a space at the start or the end. Do not put the key inside the page: anyone who sees it can take it.",
            "POST soruyu gönderir. JSON.stringify nesneyi metne çevirir ki, gitsin. cavab.json() gelen metni yeniden nesne yapar. Anahtarın başında ve sonunda boşluk olmasın. Anahtarı sayfanın içine koyma: gören kişi onu alabilir.",
            "POST يرسل السؤال. JSON.stringify يحوّل الكائن إلى نص كي يسافر. cavab.json() يُعيد النص القادم إلى كائن. يجب ألا يكون في أول المفتاح أو آخره فراغ. لا تضع المفتاح داخل الصفحة: من يراه يستطيع أخذه.",
            "POST отправляет вопрос. JSON.stringify превращает объект в текст, чтобы он ушёл. cavab.json() снова делает из ответа объект. В начале и в конце ключа не должно быть пробела. Не клади ключ внутрь страницы: кто увидит, тот сможет его забрать.",
          )],
          code: 'const apiKey = "BURAYA_OZ_API_ACARINIZI_YAZIN";\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\nfetch(url, {\n  method: "POST",\n  headers: { "Content-Type": "application/json" },\n  body: JSON.stringify(sorguMelumati)\n})\n  .then(cavab => cavab.json())\n  .then(melumat => {\n    const aiMetni = melumat.candidates[0].content.parts[0].text;\n    console.log(aiMetni);\n  });',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("400 və ya 403 niyə gəlir? Açar səhvdir və ya ətrafında boşluq var. Dırnağın içində yalnız açarın özü olsun.", "Why do you get 400 or 403? The key is wrong, or there is a space around it. Inside the quotes there should be only the key.", "400 veya 403 neden gelir? Anahtar yanlıştır veya etrafında boşluk vardır. Tırnağın içinde yalnız anahtarın kendisi olsun.", "لماذا يظهر 400 أو 403؟ المفتاح خطأ أو حوله فراغ. داخل علامات الاقتباس يجب أن يكون المفتاح وحده.", "Почему приходит 400 или 403? Ключ неверный или вокруг него пробел. В кавычках должен быть только сам ключ."),
            t("body niyə getmir? Obyekti birbaşa yazmaq olmaz. JSON.stringify(sorguMelumati) lazımdır.", "Why does the body not go? You cannot write the object directly. You need JSON.stringify(sorguMelumati).", "body neden gitmez? Nesneyi doğrudan yazmak olmaz. JSON.stringify(sorguMelumati) gerekir.", "لماذا لا يذهب body؟ لا يمكن كتابة الكائن مباشرة. يلزم JSON.stringify(sorguMelumati).", "Почему body не уходит? Объект нельзя писать напрямую. Нужен JSON.stringify(sorguMelumati)."),
            t("Cavab niyə undefined olur? candidates massivdir. [0] yazılmalıdır. candidates.content səhvdir.", "Why is the answer undefined? candidates is an array. You must write [0]. candidates.content is wrong.", "Cevap neden undefined olur? candidates dizidir. [0] yazılmalıdır. candidates.content yanlıştır.", "لماذا يكون الجواب undefined؟ candidates مصفوفة. يجب كتابة [0]. candidates.content خطأ.", "Почему ответ undefined? candidates — массив. Нужно написать [0]. candidates.content неправильно."),
            t("Mətn haradan oxunur? melumat.candidates[0].content.parts[0].text", "Where do you read the text? melumat.candidates[0].content.parts[0].text", "Metin nereden okunur? melumat.candidates[0].content.parts[0].text", "من أين يُقرأ النص؟ melumat.candidates[0].content.parts[0].text", "Откуда читается текст? melumat.candidates[0].content.parts[0].text"),
          ],
        },
      ],
    },
  ],
  async: [
    {
      id: "wait",
      title: t("Cavabı gözlə", "Wait for the answer", "Cevabı bekle", "انتظر الجواب", "Дождись ответа"),
      blocks: [
        {
          paragraphs: [t(
            "Server 1-2 saniyə gecikir. Gözləməsən nəticə undefined və ya Promise olur. async funksiyanın əvvəlində yazılır. await yalnız fetch və json qarşısına qoyulur və növbəti sətirə keçməyə qoymur.",
            "The server takes 1–2 seconds. If you do not wait, the result is undefined or a Promise. async is written at the start of the function. await goes only in front of fetch and json, and it does not let the next line run yet.",
            "Sunucu 1-2 saniye gecikir. Beklemezsen sonuç undefined veya Promise olur. async fonksiyonun başında yazılır. await yalnız fetch ve json önüne konur ve sonraki satıra geçirmez.",
            "الخادم يتأخر ثانية أو اثنتين. إذا لم تنتظر صارت النتيجة undefined أو Promise. تُكتب async في أول الدالة. await توضع فقط أمام fetch وjson ولا تسمح بالسطر التالي بعد.",
            "Сервер отвечает через 1–2 секунды. Если не ждать, результат будет undefined или Promise. async пишется в начале функции. await ставится только перед fetch и json и не пускает следующую строку раньше времени.",
          )],
          code: 'async function numune() {\n  const cavab = await fetch(url);\n  const melumat = await cavab.json();\n}',
        },
      ],
    },
    {
      id: "send",
      title: t("async ilə sual göndər", "Send a question with async", "async ile soru gönder", "أرسل سؤالاً بـ async", "Отправь вопрос через async"),
      blocks: [
        {
          paragraphs: [t(
            "Eyni sorğu indi funksiyanın içindədir. await hər iki yerdə durur: fetch və json. Funksiya özü işləmir, sonunda adı ilə çağırılır. Açar yenə də səhifəyə yazılmır.",
            "The same request now sits inside a function. await stands in both places: fetch and json. The function does not run by itself. Call it by name at the end. The key still does not belong on the page.",
            "Aynı sorgu şimdi fonksiyonun içindedir. await iki yerde durur: fetch ve json. Fonksiyon kendiliğinden çalışmaz, sonda adıyla çağrılır. Anahtar yine sayfaya yazılmaz.",
            "الطلب نفسه الآن داخل دالة. await تقف في الموضعين: fetch وjson. الدالة لا تعمل وحدها، تُستدعى باسمها في النهاية. المفتاح لا يُكتب في الصفحة.",
            "Тот же запрос теперь внутри функции. await стоит в обоих местах: fetch и json. Функция сама не работает, в конце её вызывают по имени. Ключ по-прежнему не пишут на страницу.",
          )],
          code: 'const apiKey = "BURAYA_OZ_API_ACARINIZI_YAZIN";\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\n\nasync function aiSualGonder(sualMetni) {\n  const sorguMelumati = {\n    contents: [{ parts: [{ text: sualMetni }] }]\n  };\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(sorguMelumati)\n  });\n  const melumat = await cavab.json();\n  const aiMetni = melumat.candidates[0].content.parts[0].text;\n  console.log(aiMetni);\n}\n\naiSualGonder("JavaScript-də massiv nədir?");',
        },
      ],
    },
    {
      id: "catch",
      title: t("try və catch", "try and catch", "try ve catch", "try وcatch", "try и catch"),
      blocks: [
        {
          paragraphs: [t(
            "İnternet kəsilə bilər və ya açar səhv ola bilər. try içinə işləməli kod yazılır. Xəta olsa proqram dayanmır, catch işə düşür.",
            "The internet can drop, or the key can be wrong. The code that should run goes inside try. If there is an error, the program does not stop. catch runs instead.",
            "İnternet kesilebilir veya anahtar yanlış olabilir. Çalışması gereken kod try içine yazılır. Hata olursa program durmaz, catch çalışır.",
            "قد ينقطع الإنترنت أو يكون المفتاح خطأ. الكود الذي يجب أن يعمل يُكتب داخل try. إذا حدث خطأ لا يتوقف البرنامج، ويعمل catch.",
            "Интернет может пропасть или ключ может быть неверным. Код, который должен работать, пишется в try. Если будет ошибка, программа не останавливается, срабатывает catch.",
          )],
          code: 'async function tehlukesizSorgu(sual) {\n  try {\n    const cavab = await fetch(url, {\n      method: "POST",\n      headers: { "Content-Type": "application/json" },\n      body: JSON.stringify({\n        contents: [{ parts: [{ text: sual }] }]\n      })\n    });\n    const melumat = await cavab.json();\n    console.log(melumat.candidates[0].content.parts[0].text);\n  } catch (xeta) {\n    console.log("Xəta baş verdi. İnterneti və açarı yoxla.");\n  }\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("await niyə xəta verir? Funksiyanın əvvəlində async yoxdur. İkisi birlikdə işləyir.", "Why does await throw? The function has no async at the start. The two work together.", "await neden hata verir? Fonksiyonun başında async yoktur. İkisi birlikte çalışır.", "لماذا يُظهر await خطأ؟ لا توجد async في أول الدالة. الاثنان يعملان معاً.", "Почему await даёт ошибку? В начале функции нет async. Они работают вместе."),
            t("Ekranda Promise niyə görünür? cavab.json() qarşısında await yoxdur. fetch qarşısında da olmalıdır.", "Why do you see a Promise? There is no await in front of cavab.json(). It is also required in front of fetch.", "Ekranda Promise neden görünür? cavab.json() önünde await yoktur. fetch önünde de olmalıdır.", "لماذا تظهر Promise؟ لا توجد await أمام cavab.json(). وهي لازمة أيضاً أمام fetch.", "Почему на экране Promise? Перед cavab.json() нет await. Перед fetch она тоже нужна."),
            t("Funksiya niyə işləmir? Yazmaq kifayət etmir. Sonda aiSualGonder(\"sual\") çağır.", "Why does the function not run? Writing it is not enough. Call aiSualGonder(\"sual\") at the end.", "Fonksiyon neden çalışmaz? Yazmak yetmez. Sonda aiSualGonder(\"sual\") çağır.", "لماذا لا تعمل الدالة؟ كتابتها لا تكفي. في النهاية استدعِ aiSualGonder(\"sual\").", "Почему функция не работает? Написать её мало. В конце вызови aiSualGonder(\"sual\")."),
            t(".then() ilə fərqi nədir? async/await eyni işi alt-alta yazır. Xəta ayrıca catch deyil, try və catch ilə tutulur.", "What is the difference from .then()? async/await writes the same job line by line. The error is not a separate catch chain. try and catch hold it.", ".then() ile farkı nedir? async/await aynı işi alt alta yazar. Hata ayrı catch değil, try ve catch ile tutulur.", "ما الفرق عن .then()؟ async/await تكتب العمل نفسه سطراً تحت سطر. الخطأ لا يُمسك بسلسلة catch منفصلة، بل بـ try وcatch.", "В чём разница с .then()? async/await пишет ту же работу строка за строкой. Ошибку ловят не отдельной цепочкой catch, а try и catch."),
          ],
        },
      ],
    },
  ],
  env: [
    {
      id: "risk",
      title: t("Açar kodda olmasın", "The key does not belong in the code", "Anahtar kodda olmasın", "لا تضع المفتاح في الكود", "Ключ не должен быть в коде"),
      blocks: [
        {
          paragraphs: [t(
            "Açarı JavaScript-in içinə yazmaq yalnız öz kompüterində məşq üçündür. GitHub-a düşəndə botlar onu saniyələrlə tapır. Başqası sənin açarınla sorğu göndərir, limitin və balansın bitir. Saytın görünən hissəsində olsa, F12 ilə hər kəs görür. Sorğu arxa planda, serverdə getməlidir.",
            "Writing the key inside JavaScript is only for practice on your own computer. Once it reaches GitHub, bots find it in seconds. Someone else sends requests with your key, and your limit and balance run out. If it is in the visible part of the site, anyone can see it with F12. The request must go in the background, on the server.",
            "Anahtarı JavaScript'in içine yazmak yalnız kendi bilgisayarında alıştırma içindir. GitHub'a düşünce botlar onu saniyelerle bulur. Başkası senin anahtarınla sorgu gönderir, limitin ve bakiyen biter. Sitenin görünen yerindeyse F12 ile herkes görür. Sorgu arka planda, sunucuda gitmelidir.",
            "كتابة المفتاح داخل جافاسكريبت للتدريب على حاسوبك فقط. حين يصل إلى GitHub تجده البرامج خلال ثوانٍ. يرسل غيرك طلبات بمفتاحك فينفد الحد والرصيد. إذا كان في الجزء الظاهر من الموقع يراه أي شخص بـ F12. يجب أن يذهب الطلب في الخلفية، على الخادم.",
            "Писать ключ внутри JavaScript можно только для тренировки на своём компьютере. Как только он попадёт на GitHub, боты найдут его за секунды. Чужой шлёт запросы твоим ключом, лимит и баланс кончаются. Если ключ в видимой части сайта, его увидит каждый через F12. Запрос должен идти в фоне, на сервере.",
          )],
        },
      ],
    },
    {
      id: "file",
      title: t(".env faylı", "The .env file", ".env dosyası", "ملف .env", "Файл .env"),
      blocks: [
        {
          paragraphs: [t(
            "Faylın adı .env-dir, ad.env deyil. Layihənin əsas qovluğunda durur. Ad böyük hərflə yazılır, sözlər _ ilə ayrılır. Dırnaq, nöqtəli vergül və const yazılmır. Kodda process.env.GEMINI_API_KEY ilə oxunur. Təmiz Node.js-də əvvəlcə npm install dotenv, sonra import \"dotenv/config\".",
            "The file is named .env, not ad.env. It sits in the project's main folder. The name is in capital letters, words are separated by _. No quotes, no semicolon and no const. The code reads it with process.env.GEMINI_API_KEY. In plain Node.js, first npm install dotenv, then import \"dotenv/config\".",
            "Dosyanın adı .env'dir, ad.env değil. Projenin ana klasöründe durur. Ad büyük harfle yazılır, sözcükler _ ile ayrılır. Tırnak, noktalı virgül ve const yazılmaz. Kodda process.env.GEMINI_API_KEY ile okunur. Düz Node.js'te önce npm install dotenv, sonra import \"dotenv/config\".",
            "اسم الملف .env وليس ad.env. يقف في المجلد الرئيسي للمشروع. يُكتب الاسم بأحرف كبيرة وتُفصل الكلمات بـ _. بلا علامات اقتباس ولا فاصلة منقوطة ولا const. يقرأه الكود بـ process.env.GEMINI_API_KEY. في Node.js العادي أولاً npm install dotenv ثم import \"dotenv/config\".",
            "Файл называется .env, не ad.env. Он лежит в главной папке проекта. Имя пишется большими буквами, слова разделяются _. Без кавычек, точки с запятой и const. Код читает его через process.env.GEMINI_API_KEY. В чистом Node.js сначала npm install dotenv, потом import \"dotenv/config\".",
          )],
          code: 'GEMINI_API_KEY=acar\n\nconst apiKey = process.env.GEMINI_API_KEY;',
        },
      ],
    },
    {
      id: "hide",
      title: t("GitHub və Vercel", "GitHub and Vercel", "GitHub ve Vercel", "GitHub وVercel", "GitHub и Vercel"),
      blocks: [
        {
          paragraphs: [t(
            ".gitignore içinə .env və .env.local yaz. Onda kod gedir, açar cihazda qalır. Vercel-də Settings, Environment Variables: ad GEMINI_API_KEY, dəyər açarın özüdür. Faylı dəyişəndən sonra terminalı dayandırıb yenidən aç, yoxsa nəticə undefined olur. Next.js-də açarın əvvəlinə NEXT_PUBLIC_ yazma: o, brauzerə çıxır.",
            "Write .env and .env.local inside .gitignore. Then the code goes out and the key stays on the device. On Vercel, Settings, Environment Variables: the name is GEMINI_API_KEY and the value is the key itself. After you change the file, stop the terminal and start it again, or the result is undefined. In Next.js do not put NEXT_PUBLIC_ in front of the key: that sends it to the browser.",
            ".gitignore içine .env ve .env.local yaz. O zaman kod gider, anahtar cihazda kalır. Vercel'de Settings, Environment Variables: ad GEMINI_API_KEY, değer anahtarın kendisidir. Dosyayı değiştirdikten sonra terminali durdurup yeniden aç, yoksa sonuç undefined olur. Next.js'te anahtarın başına NEXT_PUBLIC_ yazma: o, tarayıcıya çıkar.",
            "اكتب .env و.env.local داخل .gitignore. عندها يذهب الكود ويبقى المفتاح على الجهاز. في Vercel: Settings ثم Environment Variables. الاسم GEMINI_API_KEY والقيمة هي المفتاح نفسه. بعد تغيير الملف أوقف الطرفية وأعد تشغيلها، وإلا كانت النتيجة undefined. في Next.js لا تكتب NEXT_PUBLIC_ أمام المفتاح: ذلك يرسله إلى المتصفح.",
            "В .gitignore напиши .env и .env.local. Тогда код уходит, а ключ остаётся на устройстве. В Vercel: Settings, Environment Variables. Имя GEMINI_API_KEY, значение — сам ключ. После правки файла останови терминал и запусти снова, иначе результат будет undefined. В Next.js не пиши NEXT_PUBLIC_ перед ключом: так он попадёт в браузер.",
          )],
          code: 'node_modules\n.env\n.env.local',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t(".env içinə const və dırnaq yazmaq olarmı? Xeyr. Yalnız AD=DEYER. Bərabərliyin yanında boşluq da qoyma.", "Can I write const and quotes inside .env? No. Only NAME=VALUE. Do not put a space next to the equals sign either.", ".env içine const ve tırnak yazılır mı? Hayır. Yalnız AD=DEGER. Eşittirin yanında boşluk da koyma.", "هل أكتب const وعلامات اقتباس داخل .env؟ لا. فقط الاسم=القيمة. ولا تضع فراغاً بجانب علامة المساواة.", "Можно ли писать const и кавычки в .env? Нет. Только ИМЯ=ЗНАЧЕНИЕ. Пробел рядом со знаком равенства тоже не ставь."),
            t("process.env niyə undefined verir? Fayl yeni dəyişib, server köhnəni saxlayır. Terminalı bağla və yenidən işə sal.", "Why does process.env give undefined? The file just changed and the server still has the old one. Close the terminal and start it again.", "process.env neden undefined verir? Dosya yeni değişti, sunucu eskisini tutuyor. Terminali kapat ve yeniden başlat.", "لماذا يعطي process.env قيمة undefined؟ الملف تغيّر للتو والخادم ما زال يمسك القديم. أغلق الطرفية وشغّلها من جديد.", "Почему process.env даёт undefined? Файл только что изменился, а сервер держит старое. Закрой терминал и запусти снова."),
            t("NEXT_PUBLIC_ niyə təhlükəlidir? Bu söz dəyişəni brauzerə göndərir. Gizli açarda işlətmə.", "Why is NEXT_PUBLIC_ dangerous? That word sends the variable to the browser. Do not use it on a secret key.", "NEXT_PUBLIC_ neden tehlikelidir? Bu sözcük değişkeni tarayıcıya gönderir. Gizli anahtarda kullanma.", "لماذا NEXT_PUBLIC_ خطرة؟ هذه الكلمة ترسل المتغير إلى المتصفح. لا تستخدمها مع مفتاح سري.", "Почему NEXT_PUBLIC_ опасно? Это слово отправляет переменную в браузер. На секретном ключе его не используй."),
            t("Açar harada durmalıdır? Serverdə, process.env içində. Brauzerdəki kodda yox.", "Where should the key live? On the server, inside process.env. Not in the code that runs in the browser.", "Anahtar nerede durmalı? Sunucuda, process.env içinde. Tarayıcıdaki kodda değil.", "أين يجب أن يبقى المفتاح؟ على الخادم، داخل process.env. لا في الكود الذي يعمل في المتصفح.", "Где должен лежать ключ? На сервере, внутри process.env. Не в коде, который работает в браузере."),
          ],
        },
      ],
    },
  ],
  system: [
    {
      id: "rule",
      title: t("Gizli qayda", "A hidden rule", "Gizli kural", "قاعدة مخفية", "Скрытое правило"),
      blocks: [
        {
          paragraphs: [t(
            "System prompt istifadəçinin görmədiyi qaydadır. Onu proqramçı yazır. contents isə istifadəçinin sualıdır. Qayda AI-ya deyir: kimdir, cavab nə qədər olsun, hansı mövzudan imtina etsin.",
            "A system prompt is a rule the user does not see. The programmer writes it. contents is the user's question. The rule tells the AI who it is, how long the answer should be, and which topic to refuse.",
            "System prompt kullanıcının görmediği kuraldır. Onu programcı yazar. contents ise kullanıcının sorusudur. Kural AI'ya der: kimdir, cevap ne kadar olsun, hangi konudan geri çevirsin.",
            "تعليمة النظام قاعدة لا يراها المستخدم. يكتبها المبرمج. contents هو سؤال المستخدم. تقول القاعدة للذكاء من هو، وكم يكون طول الجواب، وأي موضوع يرفض.",
            "System prompt — правило, которое пользователь не видит. Его пишет программист. contents — это вопрос пользователя. Правило говорит ИИ, кто он, какой длины ответ и от какой темы отказаться.",
          )],
          code: 'const sorguMelumati = {\n  systemInstruction: {\n    parts: [{ text: "Sən Nibras Code müəllimisən. Yalnız qısa cümlə ilə cavab ver." }]\n  },\n  contents: [\n    { parts: [{ text: "JavaScript nədir?" }] }\n  ]\n};',
        },
      ],
    },
    {
      id: "role",
      title: t("Rol dəyişir, kod yox", "The role changes, the code does not", "Rol değişir, kod değil", "يتغير الدور لا الكود", "Меняется роль, не код"),
      blocks: [
        {
          paragraphs: [t(
            "Eyni funksiyada yalnız systemInstruction mətni dəyişir. Müəllim kənar suala imtina edir. Ərəb dili müəllimi isə sözü hərəkə ilə yazır və bir cümlə qurur, əlavə izah yazmır. Açar process.env-dən gəlir.",
            "In the same function only the systemInstruction text changes. A teacher refuses an off-topic question. An Arabic teacher writes the word with vowel marks and one sentence, and adds no extra explanation. The key comes from process.env.",
            "Aynı fonksiyonda yalnız systemInstruction metni değişir. Öğretmen konu dışı soruyu geri çevirir. Arapça öğretmeni ise sözü harekeyle yazar ve bir cümle kurar, ek açıklama yazmaz. Anahtar process.env'den gelir.",
            "في الدالة نفسها يتغير نص systemInstruction فقط. المعلّم يرفض السؤال الخارج عن الموضوع. معلّم العربية يكتب الكلمة بالحركات وجملة واحدة بلا شرح إضافي. المفتاح يأتي من process.env.",
            "В той же функции меняется только текст systemInstruction. Учитель отказывает на посторонний вопрос. Учитель арабского пишет слово с огласовками и одно предложение, без лишнего объяснения. Ключ берётся из process.env.",
          )],
          code: 'const apiKey = process.env.GEMINI_API_KEY;\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\n\nasync function muellimBot(istifadeciSuali) {\n  const sorguMelumati = {\n    systemInstruction: {\n      parts: [{\n        text: "Sən JavaScript müəllimisən. Yalnız proqramlaşdırma sualına cavab ver. Başqa mövzuda belə yaz: Üzr istəyirəm, mən yalnız proqramlaşdırma üzrə kömək edə bilərəm."\n      }]\n    },\n    contents: [{ parts: [{ text: istifadeciSuali }] }]\n  };\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(sorguMelumati)\n  });\n  const melumat = await cavab.json();\n  console.log(melumat.candidates[0].content.parts[0].text);\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("Ad necə yazılır? systemInstruction. systeminstruction və system_instruction səhvdir. I böyükdür.", "How is the name written? systemInstruction. systeminstruction and system_instruction are wrong. The I is capital.", "Ad nasıl yazılır? systemInstruction. systeminstruction ve system_instruction yanlıştır. I büyüktür.", "كيف يُكتب الاسم؟ systemInstruction. systeminstruction وsystem_instruction خطأ. حرف I كبير.", "Как пишется имя? systemInstruction. systeminstruction и system_instruction неправильно. I большая."),
            t("Qayda niyə pozulur? Təlimat özü ilə ziddiyyət təşkil edir. Həm uzun izah, həm bir cümlə demə. Qısa və aydın yaz.", "Why is the rule broken? The instruction contradicts itself. Do not ask for a long explanation and one sentence at the same time. Write it short and clear.", "Kural neden bozulur? Talimat kendiyle çelişir. Hem uzun açıklama hem bir cümle deme. Kısa ve açık yaz.", "لماذا تُكسر القاعدة؟ التعليمة تناقض نفسها. لا تطلب شرحاً طويلاً وجملة واحدة معاً. اكتبها قصيرة وواضحة.", "Почему правило ломается? Инструкция противоречит себе. Не проси длинное объяснение и одно предложение сразу. Пиши коротко и ясно."),
            t("Qaydanı contents içinə yazmaq olarmı? İşləyir, amma uzun söhbətdə unudulur. Qayda systemInstruction-dadır.", "Can I put the rule inside contents? It works, but it is forgotten in a long chat. The rule belongs in systemInstruction.", "Kuralı contents içine yazmak olur mu? Çalışır, ama uzun sohbette unutulur. Kural systemInstruction'dadır.", "هل أضع القاعدة داخل contents؟ يعمل، لكنه يُنسى في حديث طويل. القاعدة مكانها systemInstruction.", "Можно ли писать правило внутрь contents? Работает, но в длинном разговоре забывается. Правило живёт в systemInstruction."),
            t("Güclü təlimatda nə olur? Kimlik, uzunluq, qadağa və çıxış forması. Dördü də bir-birinə zidd olmamalıdır.", "What goes in a strong instruction? Identity, length, a ban and the output shape. The four must not contradict each other.", "Güçlü talimatta ne olur? Kimlik, uzunluk, yasak ve çıkış biçimi. Dördü de birbirine zıt olmamalıdır.", "ماذا في التعليمة القوية؟ الهوية والطول والمنع وشكل الناتج. الأربعة يجب ألا تناقض بعضها.", "Что в сильной инструкции? Личность, длина, запрет и форма ответа. Четыре пункта не должны противоречить друг другу."),
          ],
        },
      ],
    },
  ],
  yaddas: [
    {
      id: "forget",
      title: t("Niyə unudur", "Why it forgets", "Neden unutur", "لماذا ينسى", "Почему забывает"),
      blocks: [
        {
          paragraphs: [t(
            "API-nin öz yaddaşı yoxdur. Hər fetch yeni söhbətdir. Adı xatırlaması üçün bütün tarixçəni massivdə saxlayıb hər sorğuda contents kimi göndərmək lazımdır. İnsan mesajının rolu user, AI cavabının rolu model-dir. assistant və ai burada səhvdir, server 400 verir.",
            "The API has no memory of its own. Every fetch is a new chat. To remember a name you keep the whole history in an array and send it as contents on every request. A human message has the role user. An AI answer has the role model. assistant and ai are wrong here. The server returns 400.",
            "API'nin kendi hafızası yoktur. Her fetch yeni sohbettir. Adı hatırlaması için bütün geçmişi dizide tutup her sorguda contents olarak göndermek gerekir. İnsan mesajının rolü user, AI cevabının rolü model'dir. assistant ve ai burada yanlıştır, sunucu 400 verir.",
            "لا ذاكرة للواجهة وحدها. كل fetch محادثة جديدة. كي يتذكر الاسم احفظ التاريخ كله في مصفوفة وأرسله كـ contents في كل طلب. رسالة الإنسان دورها user وجواب الذكاء دوره model. assistant وai خطأ هنا، والخادم يُرجع 400.",
            "У API нет своей памяти. Каждый fetch — новый разговор. Чтобы помнить имя, храни всю историю в массиве и отправляй её как contents в каждом запросе. У сообщения человека роль user, у ответа ИИ роль model. assistant и ai здесь ошибка, сервер вернёт 400.",
          )],
          code: 'let sohbetTarixcesi = [\n  { role: "user", parts: [{ text: "Mənim adım Ömərdir." }] },\n  { role: "model", parts: [{ text: "Tanışlığımıza şadam, Ömər." }] },\n  { role: "user", parts: [{ text: "Mənim adım nə oldu?" }] }\n];',
        },
      ],
    },
    {
      id: "push",
      title: t("push ilə yadda saxla", "Remember with push", "push ile hatırla", "احفظ بـ push", "Запоминай через push"),
      blocks: [
        {
          paragraphs: [t(
            "Massiv funksiyanın çölündə yaradılır. İçində yaradılsa hər çağırışda sıfırlanır. Əvvəl user mesajı push olunur, massiv göndərilir, gələn cavab model kimi yenə push olunur. Model cavabı əlavə olunmasa iki user ard-arda düşür və növbə pozulur. Uzun söhbətdə slice(-10) yalnız son 10 mesajı göndərir.",
            "The array is created outside the function. Inside it, every call resets it. First the user message is pushed, the array is sent, and the answer is pushed again as model. If the model answer is not added, two user messages sit in a row and the turn order breaks. In a long chat, slice(-10) sends only the last 10 messages.",
            "Dizi fonksiyonun dışında yaratılır. İçinde yaratılırsa her çağrıda sıfırlanır. Önce user mesajı push edilir, dizi gönderilir, gelen cevap model olarak yine push edilir. Model cevabı eklenmezse iki user art arda düşer ve sıra bozulur. Uzun sohbette slice(-10) yalnız son 10 mesajı gönderir.",
            "تُنشأ المصفوفة خارج الدالة. إذا أُنشئت داخلها صُفّرت في كل استدعاء. أولاً تُدفع رسالة user، ثم تُرسل المصفوفة، ثم يُدفع الجواب القادم كـ model. إذا لم يُضف جواب model صار user مرتين متتاليتين وانكسر الترتيب. في حديث طويل slice(-10) يرسل آخر 10 رسائل فقط.",
            "Массив создаётся вне функции. Если создать его внутри, каждый вызов обнулит его. Сначала push сообщения user, массив отправляется, пришедший ответ снова push как model. Если ответ model не добавить, два user встанут подряд и очередь сломается. В длинном чате slice(-10) отправляет только последние 10 сообщений.",
          )],
          code: 'const apiKey = process.env.GEMINI_API_KEY;\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\nlet sohbetTarixcesi = [];\n\nasync function mesajGonder(yeniMesaj) {\n  sohbetTarixcesi.push({ role: "user", parts: [{ text: yeniMesaj }] });\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ contents: sohbetTarixcesi.slice(-10) })\n  });\n  const melumat = await cavab.json();\n  const aiCavabi = melumat.candidates[0].content.parts[0].text;\n  sohbetTarixcesi.push({ role: "model", parts: [{ text: aiCavabi }] });\n  console.log(aiCavabi);\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("İkinci sual niyə adı bilmir? Tarixçə göndərilməyib. contents tək sual yox, bütün massiv olmalıdır.", "Why does the second question not know the name? The history was not sent. contents must be the whole array, not one question.", "İkinci soru adı neden bilmiyor? Geçmiş gönderilmemiş. contents tek soru değil, bütün dizi olmalıdır.", "لماذا لا يعرف السؤال الثاني الاسم؟ لم يُرسل التاريخ. contents يجب أن يكون المصفوفة كلها لا سؤالاً واحداً.", "Почему второй вопрос не знает имя? История не отправлена. contents должен быть весь массив, не один вопрос."),
            t("Massiv niyə boşalır? O, funksiyanın içində yaradılıb. Yuxarıda, bir dəfə yarat.", "Why does the array go empty? It was created inside the function. Create it above, once.", "Dizi neden boşalır? Fonksiyonun içinde yaratılmış. Yukarıda, bir kez yarat.", "لماذا تفرغ المصفوفة؟ أُنشئت داخل الدالة. أنشئها فوق، مرة واحدة.", "Почему массив пустеет? Его создали внутри функции. Создай его выше, один раз."),
            t("400 niyə gəlir? Rol model deyil. Gemini-də assistant yazılmır.", "Why do you get 400? The role is not model. Gemini does not use assistant.", "400 neden gelir? Rol model değil. Gemini'de assistant yazılmaz.", "لماذا يظهر 400؟ الدور ليس model. في Gemini لا تُكتب assistant.", "Почему приходит 400? Роль не model. В Gemini assistant не пишется."),
            t("Yaddaşı necə silmək olar? sohbetTarixcesi = []. Köhnə massiv atılır, yeni boş massiv qalır.", "How do you clear the memory? sohbetTarixcesi = []. The old array is dropped and a new empty one remains.", "Hafıza nasıl silinir? sohbetTarixcesi = []. Eski dizi atılır, yeni boş dizi kalır.", "كيف تُمسح الذاكرة؟ sohbetTarixcesi = []. تُرمى المصفوفة القديمة وتبقى واحدة جديدة فارغة.", "Как стереть память? sohbetTarixcesi = []. Старый массив выбрасывается, остаётся новый пустой."),
          ],
        },
      ],
    },
  ],
  json: [
    {
      id: "why",
      title: t("Mətn yox, JSON", "JSON, not text", "Metin değil, JSON", "ليس نصاً، بل JSON", "Не текст, а JSON"),
      blocks: [
        {
          paragraphs: [t(
            "Çat üçün mətn kifayətdir. Test, lüğət və mağazada sualı, variantı və düzgün cavabı ayrı-ayrı götürmək lazımdır. Uzun cümlədən bunu çıxarmaq çətindir. generationConfig içində responseMimeType: \"application/json\" AI-nı təmiz JSON-a məcbur edir. \"Salam, buyurun\" yazmır. generationConfig contents-in içində deyil, onunla eyni səviyyədə durur.",
            "Text is enough for a chat. In a quiz, a dictionary and a shop you need the question, the options and the right answer separately. Pulling that out of a long sentence is hard. responseMimeType: \"application/json\" inside generationConfig forces the AI to return clean JSON. It does not write \"Hello, here you go\". generationConfig is not inside contents. It sits at the same level.",
            "Sohbet için metin yeter. Test, sözlük ve mağazada soruyu, seçeneği ve doğru cevabı ayrı ayrı almak gerekir. Uzun cümleden bunu çıkarmak zordur. generationConfig içinde responseMimeType: \"application/json\" AI'yı temiz JSON'a zorlar. \"Merhaba, buyurun\" yazmaz. generationConfig contents'in içinde değil, onunla aynı seviyededir.",
            "النص يكفي للمحادثة. في اختبار وقاموس ومتجر تحتاج السؤال والخيارات والجواب الصحيح كل واحد على حدة. إخراجه من جملة طويلة صعب. responseMimeType: \"application/json\" داخل generationConfig يُجبر الذكاء على JSON نظيف. لا يكتب \"مرحباً، تفضل\". generationConfig ليس داخل contents، بل في مستواه.",
            "Для чата текста хватает. В тесте, словаре и магазине вопрос, варианты и верный ответ нужно брать по отдельности. Вытащить это из длинного предложения трудно. responseMimeType: \"application/json\" внутри generationConfig заставляет ИИ вернуть чистый JSON. Он не пишет «Здравствуйте, вот». generationConfig не внутри contents, а на одном уровне с ним.",
          )],
          code: 'const sorguMelumati = {\n  contents: [{ parts: [{ text: "2 rəng adı və kodu ver." }] }],\n  generationConfig: { responseMimeType: "application/json" }\n};',
        },
      ],
    },
    {
      id: "parse",
      title: t("JSON.parse və test", "JSON.parse and a quiz", "JSON.parse ve test", "JSON.parse واختبار", "JSON.parse и тест"),
      blocks: [
        {
          paragraphs: [t(
            "Gələn hissə hələ mətndir, obyekt deyil. JSON.stringify obyekti göndərmək üçün mətnə çevirir. JSON.parse mətni massivə çevirir. Açar adlarını sualda dəqiq yaz: sual, variantlar, duzgunCavab. Yazmasan AI hər dəfə başqa ad uydurur. Sonra testler[0].sual və testler[0].duzgunCavab oxunur.",
            "The part that arrives is still text, not an object. JSON.stringify turns an object into text so you can send it. JSON.parse turns the text into an array. Write the key names exactly in the question: sual, variantlar, duzgunCavab. If you do not, the AI invents a different name each time. Then you read testler[0].sual and testler[0].duzgunCavab.",
            "Gelen parça hâlâ metindir, nesne değil. JSON.stringify nesneyi göndermek için metne çevirir. JSON.parse metni diziye çevirir. Anahtar adlarını soruda net yaz: sual, variantlar, duzgunCavab. Yazmazsan AI her seferinde başka ad uydurur. Sonra testler[0].sual ve testler[0].duzgunCavab okunur.",
            "الجزء القادم ما زال نصاً لا كائناً. JSON.stringify يحوّل الكائن إلى نص كي ترسله. JSON.parse يحوّل النص إلى مصفوفة. اكتب أسماء المفاتيح في السؤال بدقة: sual وvariantlar وduzgunCavab. وإلا اخترع الذكاء اسماً مختلفاً كل مرة. ثم تقرأ testler[0].sual وtestler[0].duzgunCavab.",
            "Пришедшая часть всё ещё текст, не объект. JSON.stringify превращает объект в текст, чтобы отправить. JSON.parse превращает текст в массив. Имена ключей напиши в вопросе точно: sual, variantlar, duzgunCavab. Иначе ИИ каждый раз выдумает другое имя. Потом читаются testler[0].sual и testler[0].duzgunCavab.",
          )],
          code: 'const apiKey = process.env.GEMINI_API_KEY;\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\n\nasync function testYarat(movzu) {\n  const telimat = `${movzu} mövzusunda 2 sual hazırla. Massiv qaytar. Hər obyektdə sual, variantlar və duzgunCavab olsun.`;\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({\n      contents: [{ parts: [{ text: telimat }] }],\n      generationConfig: { responseMimeType: "application/json" }\n    })\n  });\n  const melumat = await cavab.json();\n  const jsonMetni = melumat.candidates[0].content.parts[0].text;\n  const testler = JSON.parse(jsonMetni);\n  console.log(testler[0].sual, testler[0].duzgunCavab);\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("sual niyə undefined olur? JSON.parse yazılmayıb. jsonMetni hələ mətndir, massiv deyil.", "Why is sual undefined? JSON.parse was not written. jsonMetni is still text, not an array.", "sual neden undefined olur? JSON.parse yazılmamış. jsonMetni hâlâ metindir, dizi değil.", "لماذا يكون sual قيمة undefined؟ لم يُكتب JSON.parse. jsonMetni ما زال نصاً لا مصفوفة.", "Почему sual равен undefined? JSON.parse не написан. jsonMetni всё ещё текст, не массив."),
            t("Açar niyə hər dəfə dəyişir? Sualda adlar yoxdur. sual, variantlar və duzgunCavab sözlərini təlimata yaz.", "Why does the key change every time? The question has no names. Write the words sual, variantlar and duzgunCavab into the instruction.", "Anahtar neden her seferinde değişir? Soruda adlar yok. sual, variantlar ve duzgunCavab sözcüklerini talimata yaz.", "لماذا يتغير المفتاح كل مرة؟ لا أسماء في السؤال. اكتب كلمات sual وvariantlar وduzgunCavab في التعليمة.", "Почему ключ каждый раз другой? В вопросе нет имён. Напиши слова sual, variantlar и duzgunCavab в инструкцию."),
            t("generationConfig hara düşür? contents-in yanına, içinə yox. responseMimeType dəyəri application/json-dur.", "Where does generationConfig go? Next to contents, not inside it. The value of responseMimeType is application/json.", "generationConfig nereye düşer? contents'in yanına, içine değil. responseMimeType değeri application/json'dur.", "أين يوضع generationConfig؟ بجانب contents لا داخله. قيمة responseMimeType هي application/json.", "Куда ставится generationConfig? Рядом с contents, не внутрь. Значение responseMimeType — application/json."),
            t("stringify və parse fərqi nədir? stringify göndərir. parse gələn mətni obyekt edir.", "What is the difference between stringify and parse? stringify sends. parse turns the arriving text into an object.", "stringify ve parse farkı nedir? stringify gönderir. parse gelen metni nesne yapar.", "ما الفرق بين stringify وparse؟ stringify يُرسل. parse يحوّل النص القادم إلى كائن.", "В чём разница stringify и parse? stringify отправляет. parse делает из пришедшего текста объект."),
          ],
        },
      ],
    },
  ],
  rag: [
    {
      id: "what",
      title: t("RAG nədir", "What RAG is", "RAG nedir", "ما هو RAG", "Что такое RAG"),
      blocks: [
        {
          paragraphs: [t(
            "AI ümumi mövzunu bilir, sənin PDF-ini yox. Bütün kitabı bir sorğuya qoymaq olmur: limit dolur. Tanımadığı yerdə isə uydurur. RAG əvvəl suala uyğun paraqrafı tapır, sonra AI-ya deyir: yalnız bu mətndən cavab ver. Mətn yoxdursa, \"Bu məlumat sənəddə yoxdur\" yaz.",
            "The AI knows a general topic, not your PDF. You cannot put a whole book into one request: the limit fills up. Where it does not know the text, it invents. RAG first finds the paragraph that matches the question, then tells the AI: answer only from this text. If the text has no answer, write \"This information is not in the document\".",
            "AI genel konuyu bilir, senin PDF'ini değil. Bütün kitabı bir sorguya koymak olmaz: limit dolar. Tanımadığı yerde ise uydurur. RAG önce soruya uyan paragrafı bulur, sonra AI'ya der: yalnız bu metinden cevap ver. Metin yoksa, \"Bu bilgi belgede yok\" yaz.",
            "الذكاء يعرف الموضوع العام لا ملف PDF الخاص بك. لا يمكن وضع الكتاب كله في طلب واحد: يمتلئ الحد. وحيث لا يعرف النص يخترع. RAG يجد أولاً الفقرة المناسبة للسؤال ثم يقول للذكاء: أجب من هذا النص فقط. إذا لم يكن الجواب فاكتب \"هذه المعلومة ليست في المستند\".",
            "ИИ знает общую тему, не твой PDF. Целую книгу в один запрос не положишь: лимит кончится. Где текста нет, он выдумывает. RAG сначала находит абзац под вопрос, потом говорит ИИ: отвечай только из этого текста. Если ответа нет, напиши «Этой информации в документе нет».",
          )],
        },
      ],
    },
    {
      id: "steps",
      title: t("Dörd addım və kod", "Four steps and the code", "Dört adım ve kod", "أربع خطوات والكود", "Четыре шага и код"),
      blocks: [
        {
          paragraphs: [t(
            "Sənəd kiçik paraqraflara bölünür. Hər paraqraf rəqəmə, vektora çevrilir ki, məna tutulsun. Sual gələndə ən oxşar paraqraf tapılır. O paraqraf və sual birlikdə göndərilir. Minlərlə parça adi massivə sığmır. Supabase-də pgvector ilə saxlanır və SQL ən yaxın parçanı tapır. Axtarış səhv paraqraf seçsə, cavab da səhv olur.",
            "The document is split into small paragraphs. Each paragraph becomes numbers, a vector, so the meaning can be matched. When a question arrives, the closest paragraph is found. That paragraph and the question are sent together. Thousands of pieces do not fit in a plain array. In Supabase they are stored with pgvector, and SQL finds the closest piece. If the search picks the wrong paragraph, the answer is wrong too.",
            "Belge küçük paragraflara bölünür. Her paragraf rakama, vektöre çevrilir ki, anlam tutulsun. Soru gelince en benzer paragraf bulunur. O paragraf ve soru birlikte gönderilir. Binlerce parça düz diziye sığmaz. Supabase'de pgvector ile saklanır ve SQL en yakın parçayı bulur. Arama yanlış paragraf seçerse cevap da yanlış olur.",
            "يُقسّم المستند إلى فقرات صغيرة. كل فقرة تصبح أرقاماً، متجهاً، كي يُطابق المعنى. عند وصول السؤال تُوجد أقرب فقرة. تُرسل تلك الفقرة والسؤال معاً. آلاف القطع لا تسع في مصفوفة عادية. في Supabase تُحفظ بـ pgvector ويجد SQL أقرب قطعة. إذا اختار البحث فقرة خاطئة صار الجواب خاطئاً أيضاً.",
            "Документ режется на короткие абзацы. Каждый абзац становится числами, вектором, чтобы смысл совпал. Когда приходит вопрос, находится самый близкий абзац. Этот абзац и вопрос уходят вместе. Тысячи кусков в обычный массив не лезут. В Supabase их хранят через pgvector, и SQL находит ближайший кусок. Если поиск выбрал не тот абзац, ответ тоже будет неверным.",
          )],
          code: 'const apiKey = process.env.GEMINI_API_KEY;\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\n\nasync function seneddenCavabAl(istifadeciSuali, senedinParaqrafi) {\n  const sorguMelumati = {\n    systemInstruction: {\n      parts: [{\n        text: "Sən sənəd köməkçisisən. Yalnız verilən mətndən cavab ver. Mətndə yoxdursa yaz: Bu məlumat sənəddə yoxdur. Uydurma."\n      }]\n    },\n    contents: [{\n      parts: [{\n        text: `Kontekst:\\n${senedinParaqrafi}\\n\\nSual: ${istifadeciSuali}`\n      }]\n    }]\n  };\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(sorguMelumati)\n  });\n  const melumat = await cavab.json();\n  console.log(melumat.candidates[0].content.parts[0].text);\n}\n\nconst pdfdenTapilanHisse = "Nibras PDF aləti brauzerdə açılır. Fayl serverə yüklənmir.";\nseneddenCavabAl("PDF aləti harada açılır?", pdfdenTapilanHisse);',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("100 səhifəni bir contents-ə qoymaq olarmı? Xeyr. Token limiti dolur. Sənəd kiçik paraqraflara bölünür.", "Can I put 100 pages into one contents? No. The token limit fills up. The document is split into small paragraphs.", "100 sayfayı bir contents'e koymak olur mu? Hayır. Token limiti dolar. Belge küçük paragraflara bölünür.", "هل أضع 100 صفحة في contents واحد؟ لا. يمتلئ حد الرموز. يُقسّم المستند إلى فقرات صغيرة.", "Можно ли положить 100 страниц в один contents? Нет. Лимит токенов кончится. Документ режется на короткие абзацы."),
            t("Niyə uydurur? Təlimatda qadağa yoxdur. \"Yalnız bu mətndən cavab ver, yoxdursa belə yaz\" cümləsi systemInstruction-da durmalıdır.", "Why does it invent? The instruction has no ban. The sentence \"Answer only from this text, and if it is missing, say so\" must sit in systemInstruction.", "Neden uydurur? Talimatta yasak yok. \"Yalnız bu metinden cevap ver, yoksa böyle yaz\" cümlesi systemInstruction'da durmalıdır.", "لماذا يخترع؟ لا منع في التعليمة. جملة \"أجب من هذا النص فقط، وإذا غاب فاكتب ذلك\" يجب أن تقف في systemInstruction.", "Почему выдумывает? В инструкции нет запрета. Фраза «Отвечай только из этого текста, если нет — так и напиши» должна стоять в systemInstruction."),
            t("Cavab niyə səhv paraqrafdan gəlir? Axtarış uyğun parçanı seçməyib. AI yalnız ona veriləni görür.", "Why does the answer come from the wrong paragraph? The search did not pick the matching piece. The AI only sees what it was given.", "Cevap neden yanlış paragraftan gelir? Arama uyan parçayı seçmemiş. AI yalnız kendine verileni görür.", "لماذا يأتي الجواب من فقرة خاطئة؟ البحث لم يختر القطعة المناسبة. الذكاء يرى فقط ما أُعطي له.", "Почему ответ из не того абзаца? Поиск не выбрал подходящий кусок. ИИ видит только то, что ему дали."),
            t("RAG iki sözdə nədir? Tap və yalnız tapılandan yaz. Özündən əlavə etmə.", "What is RAG in two words? Find, and write only from what was found. Do not add anything of your own.", "RAG iki sözde nedir? Bul ve yalnız bulunandan yaz. Kendinden ekleme.", "ما هو RAG بكلمتين؟ جد واكتب فقط مما وُجد. لا تضف من عندك.", "Что такое RAG в двух словах? Найди и пиши только из найденного. Своего не добавляй."),
          ],
        },
      ],
    },
  ],
  agent: [
    {
      id: "what",
      title: t("Çatbot və agent", "A chatbot and an agent", "Sohbet ve agent", "محادثة ووكيل", "Чат и агент"),
      blocks: [
        {
          paragraphs: [t(
            "Çatbot yalnız mətn yazır. Bazanı və sənin funksiyanı işlədə bilmir. Agent hərəkət edir, amma funksiyanı özü çağırmır. tools siyahısında ad, description və parametrlər durur. AI sualı oxuyub functionCall qaytarır: ad və args. Sən həmin funksiyanı işlədib nəticəni functionResponse ilə geri göndərirsən. AI son cümləni ondan yazır. description boşdursa, səhv funksiya seçilir. Tip böyük hərflədir: STRING, NUMBER, OBJECT.",
            "A chatbot only writes text. It cannot run your database or your function. An agent acts, but it does not call the function itself. The tools list holds the name, the description and the parameters. The AI reads the question and returns a functionCall: a name and args. You run that function and send the result back with functionResponse. The AI writes the final sentence from it. If description is empty, it picks the wrong function. The type is in capital letters: STRING, NUMBER, OBJECT.",
            "Sohbet yalnız metin yazar. Veritabanını ve senin fonksiyonunu çalıştıramaz. Agent harekete geçer, ama fonksiyonu kendisi çağırmaz. tools listesinde ad, description ve parametreler durur. AI soruyu okuyup functionCall döndürür: ad ve args. Sen o fonksiyonu çalıştırıp sonucu functionResponse ile geri gönderirsin. AI son cümleyi ondan yazar. description boşsa yanlış fonksiyon seçilir. Tip büyük harftir: STRING, NUMBER, OBJECT.",
            "المحادثة تكتب نصاً فقط. لا تستطيع تشغيل قاعدتك أو دالتك. الوكيل يتحرك، لكنه لا يستدعي الدالة بنفسه. قائمة tools تحمل الاسم وdescription والمعاملات. يقرأ الذكاء السؤال ويُرجع functionCall: اسماً وargs. أنت تشغّل تلك الدالة وتُعيد النتيجة بـ functionResponse. يكتب الذكاء الجملة الأخيرة منها. إذا كان description فارغاً اختار دالة خاطئة. النوع بأحرف كبيرة: STRING وNUMBER وOBJECT.",
            "Чат пишет только текст. Базу и твою функцию он не запускает. Агент действует, но функцию сам не вызывает. В списке tools стоят имя, description и параметры. ИИ читает вопрос и возвращает functionCall: имя и args. Ты запускаешь эту функцию и отправляешь результат обратно через functionResponse. Итоговое предложение ИИ пишет из него. Если description пустой, выбирается не та функция. Тип большими буквами: STRING, NUMBER, OBJECT.",
          )],
        },
      ],
    },
    {
      id: "call",
      title: t("functionCall və geri dönüş", "functionCall and the return", "functionCall ve geri dönüş", "functionCall والرد", "functionCall и возврат"),
      blocks: [
        {
          paragraphs: [t(
            "Birinci sorğu alətlərlə gedir. parts[0].functionCall varsa, mətn yoxdur, əmr var. Funksiyanı sən işlədirsən. İkinci sorğuda üç hissə durur: sual, modelin functionCall-u və functionResponse. Nəticəni yalnız console.log edib geri göndərməsən, istifadəçi səliqəli cümlə görmür. Salam kimi sualda functionCall olmur, birbaşa text gəlir.",
            "The first request goes with the tools. If parts[0].functionCall is there, there is no text, there is a command. You run the function. The second request has three parts: the question, the model's functionCall and the functionResponse. If you only console.log the result and do not send it back, the user never sees a clean sentence. A question like hello has no functionCall. text comes directly.",
            "İlk sorgu araçlarla gider. parts[0].functionCall varsa metin yok, emir var. Fonksiyonu sen çalıştırırsın. İkinci sorguda üç parça durur: soru, modelin functionCall'u ve functionResponse. Sonucu yalnız console.log edip geri göndermezsen kullanıcı düzgün cümle görmez. Selam gibi soruda functionCall olmaz, doğrudan text gelir.",
            "الطلب الأول يذهب مع الأدوات. إذا وُجد parts[0].functionCall فلا نص، بل أمر. أنت تشغّل الدالة. في الطلب الثاني ثلاث قطع: السؤال وfunctionCall الخاص بالنموذج وfunctionResponse. إذا اكتفيت بـ console.log ولم تُعد النتيجة فلن يرى المستخدم جملة مرتبة. في سؤال مثل مرحباً لا يوجد functionCall، ويأتي text مباشرة.",
            "Первый запрос уходит с инструментами. Если есть parts[0].functionCall, текста нет, есть команда. Функцию запускаешь ты. Во втором запросе три части: вопрос, functionCall модели и functionResponse. Если только сделать console.log и не отправить результат назад, пользователь не увидит чистую фразу. На вопрос вроде «привет» functionCall нет, сразу приходит text.",
          )],
          code: 'const apiKey = process.env.GEMINI_API_KEY;\nconst url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;\n\nfunction havaMelumatiniVer(seher) {\n  if (seher === "Baku") return "Bakıda 24 dərəcə, günəşlidir.";\n  return "Bu şəhər üçün məlumat yoxdur.";\n}\n\nconst aletler = [{\n  functionDeclarations: [{\n    name: "havaMelumatiniVer",\n    description: "Verilmiş şəhər üçün hava mətnini qaytarır.",\n    parameters: {\n      type: "OBJECT",\n      properties: { seher: { type: "STRING", description: "Şəhər, məsələn Baku" } },\n      required: ["seher"]\n    }\n  }]\n}];\n\nasync function agentSorgusuGonder(istifadeciSuali) {\n  const ilkBody = {\n    contents: [{ role: "user", parts: [{ text: istifadeciSuali }] }],\n    tools: aletler\n  };\n  const cavab = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(ilkBody)\n  });\n  const melumat = await cavab.json();\n  const hisse = melumat.candidates[0].content.parts[0];\n  if (!hisse.functionCall) {\n    console.log(hisse.text);\n    return;\n  }\n  const ad = hisse.functionCall.name;\n  const netice = havaMelumatiniVer(hisse.functionCall.args.seher);\n  const ikinciBody = {\n    contents: [\n      { role: "user", parts: [{ text: istifadeciSuali }] },\n      { role: "model", parts: [{ functionCall: hisse.functionCall }] },\n      { role: "user", parts: [{ functionResponse: { name: ad, response: { netice } } }] }\n    ],\n    tools: aletler\n  };\n  const cavab2 = await fetch(url, {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify(ikinciBody)\n  });\n  const melumat2 = await cavab2.json();\n  console.log(melumat2.candidates[0].content.parts[0].text);\n}',
        },
      ],
    },
    {
      id: "faq",
      title: t("Suallar", "Questions", "Sorular", "أسئلة", "Вопросы"),
      blocks: [
        {
          paragraphs: [
            t("AI funksiyanı özü işlədirmi? Xeyr. Yalnız adını və parametrini deyir. İşlədən sənin kodundur.", "Does the AI run the function itself? No. It only says the name and the parameter. Your code runs it.", "AI fonksiyonu kendisi çalıştırır mı? Hayır. Yalnız adını ve parametresini söyler. Çalıştıran senin kodundur.", "هل يشغّل الذكاء الدالة بنفسه؟ لا. يقول الاسم والمعامل فقط. الذي يشغّلها هو كودك.", "ИИ сам запускает функцию? Нет. Он только говорит имя и параметр. Запускает твой код."),
            t("description niyə vacibdir? AI funksiyanı nə vaxt seçəcəyini bu mətndən bilir. Boş və ya dumanlı olsa, səhvini çağırır.", "Why does description matter? The AI knows when to pick the function from this text. If it is empty or vague, it calls the wrong one.", "description neden önemlidir? AI fonksiyonu ne zaman seçeceğini bu metinden bilir. Boş veya bulanıksa yanlışını çağırır.", "لماذا description مهم؟ يعرف الذكاء متى يختار الدالة من هذا النص. إذا كان فارغاً أو غامضاً استدعى الخطأ.", "Зачем description? ИИ понимает, когда выбрать функцию, из этого текста. Если он пустой или мутный, вызовется не та."),
            t("STRING kiçik hərflə yazılsa? Gemini xəta verir. Tip OBJECT, STRING və NUMBER böyük hərflədir.", "What if STRING is written in small letters? Gemini returns an error. The types OBJECT, STRING and NUMBER are in capital letters.", "STRING küçük harfle yazılırsa? Gemini hata verir. Tip OBJECT, STRING ve NUMBER büyük harftedir.", "ماذا إذا كُتب STRING بأحرف صغيرة؟ Gemini يُرجع خطأ. الأنواع OBJECT وSTRING وNUMBER بأحرف كبيرة.", "Если написать STRING маленькими буквами? Gemini вернёт ошибку. Типы OBJECT, STRING и NUMBER пишутся большими."),
            t("Nəticə niyə istifadəçiyə çatmır? functionResponse ikinci sorğuda yoxdur. console.log kifayət etmir.", "Why does the result not reach the user? functionResponse is missing from the second request. console.log is not enough.", "Sonuç neden kullanıcıya ulaşmıyor? functionResponse ikinci sorguda yok. console.log yetmez.", "لماذا لا تصل النتيجة إلى المستخدم؟ functionResponse غائب في الطلب الثاني. console.log لا يكفي.", "Почему результат не доходит до пользователя? Во втором запросе нет functionResponse. console.log мало."),
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

