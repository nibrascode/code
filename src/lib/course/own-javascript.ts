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
};
