import { l5 as t } from "./meta";
import type { OwnPageContent } from "./own-types";

/** Original text written for Nibras Code (not copied from any book). */
export const OWN_PYTHON: OwnPageContent = {
  baslangic: [
    {
      id: "install",
      title: t("Quraşdırma", "Installing Python", "Kurulum", "التثبيت", "Установка"),
      blocks: [
        {
          paragraphs: [
            t("Python-u python.org saytından yüklə. Windows-da quraşdırıcının ilk pəncərəsində «Add python.exe to PATH» xanasını mütləq işarələ, yoxsa terminal Python-u tapmayacaq.",
              "Download Python from python.org. On Windows, tick “Add python.exe to PATH” in the first installer window, otherwise the terminal will not find Python.",
              "Python'u python.org adresinden indir. Windows'ta kurulumun ilk penceresinde «Add python.exe to PATH» kutusunu mutlaka işaretle, yoksa terminal Python'u bulamaz.",
              "نزّل بايثون من python.org. في ويندوز فعّل خيار «Add python.exe to PATH» في أول نافذة للتثبيت، وإلا لن تجده الطرفية.",
              "Скачайте Python с python.org. В Windows в первом окне установщика обязательно отметьте «Add python.exe to PATH», иначе терминал не найдёт Python."),
          ],
        },
        {
          paragraphs: [t("Terminalı aç və versiyanı yoxla:", "Open a terminal and check the version:", "Terminali aç ve sürümü kontrol et:", "افتح الطرفية وتحقق من الإصدار:", "Откройте терминал и проверьте версию:")],
          code: "python --version\n# on macOS / Linux it is often:\npython3 --version",
        },
        {
          paragraphs: [t("3.x ilə başlayan nömrə görürsənsə, hər şey hazırdır.", "If you see a number starting with 3, you are ready.", "3 ile başlayan bir sürüm görüyorsan hazırsın.", "إذا ظهر رقم يبدأ بـ 3 فأنت جاهز.", "Если видите версию, начинающуюся с 3, всё готово.")],
        },
      ],
    },
    {
      id: "first",
      title: t("İlk proqram", "Your first program", "İlk program", "أول برنامج", "Первая программа"),
      blocks: [
        {
          paragraphs: [t("hello.py adlı fayl yarat, içinə bunu yaz və saxla:", "Create a file named hello.py, put this in it and save:", "hello.py adlı bir dosya oluştur, içine şunu yaz ve kaydet:", "أنشئ ملفاً باسم hello.py واكتب فيه ما يلي واحفظه:", "Создайте файл hello.py, впишите в него это и сохраните:")],
          code: 'name = input("Your name: ")\nprint("Hello,", name)',
        },
        {
          paragraphs: [t("Sonra terminalda həmin qovluqda işə sal:", "Then run it in the terminal, from the same folder:", "Sonra aynı klasörde terminalden çalıştır:", "ثم شغّله في الطرفية من المجلد نفسه:", "Затем запустите в терминале из той же папки:")],
          code: "python hello.py",
        },
      ],
    },
    {
      id: "tips",
      title: t("Yeni başlayanın tipik problemləri", "Typical beginner problems", "Yeni başlayanların tipik sorunları", "مشاكل المبتدئين الشائعة", "Типичные проблемы новичков"),
      blocks: [
        {
          list: [
            t("«python tanınmır»: PATH əlavə olunmayıb — quraşdırıcını yenidən işə sal.", "“python is not recognized”: PATH was not added — run the installer again.", "«python tanınmıyor»: PATH eklenmemiş — kurulumu yeniden çalıştır.", "«python غير معروف»: لم يُضف PATH — أعد تشغيل المثبّت.", "«python не распознан»: PATH не добавлен — запустите установщик заново."),
            t("Fayl adı kod modulunun adı ilə eyni olmasın (məs., random.py yazma).", "Do not name your file after a built-in module (for example random.py).", "Dosya adını yerleşik bir modülle aynı yapma (ör. random.py).", "لا تسمِّ ملفك باسم وحدة مدمجة (مثل random.py).", "Не называйте файл так же, как встроенный модуль (например, random.py)."),
            t("Kodu Word-də yox, VS Code, Notepad++ və ya IDLE kimi redaktorda yaz.", "Write code in an editor such as VS Code or IDLE, not in Word.", "Kodu Word'de değil, VS Code veya IDLE gibi bir editörde yaz.", "اكتب الشيفرة في محرر مثل VS Code أو IDLE وليس في Word.", "Пишите код в редакторе (VS Code, IDLE), а не в Word."),
          ],
        },
      ],
    },
  ],
  deyisen: [
    {
      id: "variable",
      title: t("Dəyişən nədir?", "What is a variable?", "Değişken nedir?", "ما هو المتغير؟", "Что такое переменная?"),
      blocks: [
        {
          paragraphs: [t("Dəyişən dəyərə verilmiş addır. «=» işarəsi dəyəri adın içinə yazır.", "A variable is a name for a value. The “=” sign stores the value under that name.", "Değişken, bir değere verilmiş addır. «=» işareti değeri bu ada kaydeder.", "المتغير اسم لقيمة. تخزّن علامة «=» القيمة تحت هذا الاسم.", "Переменная — это имя для значения. Знак «=» сохраняет значение под этим именем.")],
          code: 'age = 15\nname = "Aysel"\nprice = 4.5\nprint(name, age, price)',
        },
      ],
    },
    {
      id: "types",
      title: t("Əsas tiplər", "Main data types", "Temel veri tipleri", "الأنواع الأساسية", "Основные типы данных"),
      blocks: [
        {
          list: [
            t("int — tam ədəd: 7, -3", "int — whole number: 7, -3", "int — tam sayı: 7, -3", "int — عدد صحيح: 7, -3", "int — целое число: 7, -3"),
            t("float — kəsr ədəd: 3.14", "float — decimal number: 3.14", "float — ondalıklı sayı: 3.14", "float — عدد عشري: 3.14", "float — дробное число: 3.14"),
            t("str — mətn: \"salam\"", "str — text: \"hello\"", "str — metin: \"merhaba\"", "str — نص: \"مرحبا\"", "str — текст: \"привет\""),
            t("bool — True və ya False", "bool — True or False", "bool — True veya False", "bool — True أو False", "bool — True или False"),
            t("list — dəyişdirilə bilən siyahı: [1, 2, 3]", "list — changeable list: [1, 2, 3]", "list — değiştirilebilir liste: [1, 2, 3]", "list — قائمة قابلة للتعديل: [1, 2, 3]", "list — изменяемый список: [1, 2, 3]"),
            t("dict — açar: dəyər cütləri: {\"ad\": \"Aysel\"}", "dict — key: value pairs: {\"name\": \"Aysel\"}", "dict — anahtar: değer çiftleri: {\"ad\": \"Aysel\"}", "dict — أزواج مفتاح: قيمة: {\"name\": \"Aysel\"}", "dict — пары ключ: значение: {\"name\": \"Aysel\"}"),
          ],
        },
        {
          code: 'fruits = ["apple", "pear"]\nfruits.append("plum")\nprint(len(fruits), fruits[0])\n\nuser = {"name": "Aysel", "age": 15}\nprint(user["name"])\nprint(type(user))',
        },
      ],
    },
    {
      id: "convert",
      title: t("Tip çevirmə", "Converting types", "Tip dönüştürme", "تحويل الأنواع", "Преобразование типов"),
      blocks: [
        {
          paragraphs: [t("input() həmişə mətn qaytarır. Ədədlə hesablamaq üçün çevir:", "input() always returns text. Convert it before doing maths:", "input() her zaman metin döndürür. Hesap yapmadan önce çevir:", "تُرجع input() نصاً دائماً. حوّله قبل إجراء الحسابات:", "input() всегда возвращает текст. Преобразуйте его перед вычислениями:")],
          code: 'x = int(input("Number: "))\nprint(x * 2)',
        },
        {
          paragraphs: [t("Ən çox yayılmış səhv: \"5\" + 3 — mətn və ədəd toplanmır (TypeError).", "The most common mistake: \"5\" + 3 — text and a number cannot be added (TypeError).", "En yaygın hata: \"5\" + 3 — metin ile sayı toplanmaz (TypeError).", "أشيع خطأ: \"5\" + 3 — لا يمكن جمع نص مع عدد (TypeError).", "Самая частая ошибка: \"5\" + 3 — текст и число нельзя складывать (TypeError).")],
        },
      ],
    },
  ],
  "sert-dovr": [
    {
      id: "if",
      title: t("if / elif / else", "if / elif / else", "if / elif / else", "if / elif / else", "if / elif / else"),
      blocks: [
        {
          paragraphs: [t("Şərt doğrudursa, girintili blok işləyir. Python-da girinti (4 boşluq) sintaksisin bir hissəsidir.", "If the condition is true, the indented block runs. In Python, indentation (4 spaces) is part of the syntax.", "Koşul doğruysa girintili blok çalışır. Python'da girinti (4 boşluk) sözdiziminin parçasıdır.", "إذا تحقق الشرط يُنفَّذ الكتلة المزاحة. في بايثون الإزاحة (4 مسافات) جزء من الصياغة.", "Если условие истинно, выполняется блок с отступом. В Python отступ (4 пробела) — часть синтаксиса.")],
          code: 'score = 72\nif score >= 90:\n    print("A")\nelif score >= 70:\n    print("B")\nelse:\n    print("C")',
        },
        {
          paragraphs: [t("Müqayisə üçün == işlət, = yalnız mənimsətmədir.", "Use == to compare; a single = only assigns.", "Karşılaştırma için == kullan; tek = yalnızca atama yapar.", "استخدم == للمقارنة؛ أما = الواحدة فللإسناد فقط.", "Для сравнения используйте ==; одиночный = только присваивает.")],
        },
      ],
    },
    {
      id: "for",
      title: t("for dövrü", "The for loop", "for döngüsü", "حلقة for", "Цикл for"),
      blocks: [
        {
          paragraphs: [t("for məlum sayda təkrar üçündür: siyahı üzərində və ya range ilə.", "for repeats a known number of times: over a list, or with range.", "for, bilinen sayıda tekrar içindir: liste üzerinde veya range ile.", "تُستخدم for لتكرار عدد معروف من المرات: على قائمة أو مع range.", "for повторяет известное число раз: по списку или с range.")],
          code: 'for i in range(3):\n    print(i)        # 0 1 2\n\nfor fruit in ["apple", "pear"]:\n    print(fruit)',
        },
      ],
    },
    {
      id: "while",
      title: t("while dövrü", "The while loop", "while döngüsü", "حلقة while", "Цикл while"),
      blocks: [
        {
          paragraphs: [t("while şərt doğru olduğu müddətdə işləyir. Şərtin bir gün yalan olmasına əmin ol, yoxsa dövr sonsuz olar. break dövrü dərhal bitirir.", "while runs as long as the condition is true. Make sure it eventually becomes false, or the loop never ends. break stops the loop at once.", "while, koşul doğru olduğu sürece çalışır. Koşulun bir gün yanlış olacağından emin ol, yoksa döngü sonsuz olur. break döngüyü hemen bitirir.", "تعمل while ما دام الشرط صحيحاً. تأكد أنه سيصبح خاطئاً يوماً وإلا صارت الحلقة لانهائية. توقف break الحلقة فوراً.", "while работает, пока условие истинно. Убедитесь, что оно станет ложным, иначе цикл бесконечен. break сразу завершает цикл.")],
          code: 'n = 3\nwhile n > 0:\n    print(n)\n    n -= 1\nprint("go!")',
        },
      ],
    },
  ],
  funksiya: [
    {
      id: "def",
      title: t("Funksiyanı təyin etmək", "Defining a function", "Fonksiyon tanımlamak", "تعريف دالة", "Определение функции"),
      blocks: [
        {
          paragraphs: [t("Eyni kodu təkrar yazmamaq üçün funksiya yaradırıq. def açar sözü, ad, mötərizədə parametrlər və iki nöqtə lazımdır.", "A function lets you avoid repeating code. You need the def keyword, a name, parameters in brackets and a colon.", "Aynı kodu tekrar yazmamak için fonksiyon yazarız. def anahtar sözcüğü, ad, parantez içinde parametreler ve iki nokta gerekir.", "تتيح الدالة تجنب تكرار الشيفرة. تحتاج الكلمة def واسماً ومعاملات بين قوسين ونقطتين.", "Функция позволяет не повторять код. Нужны слово def, имя, параметры в скобках и двоеточие.")],
          code: 'def greet(name):\n    print("Hello,", name)\n\ngreet("Aysel")\ngreet("Murad")',
        },
      ],
    },
    {
      id: "return",
      title: t("return və nəticə", "return and results", "return ve sonuç", "return والنتيجة", "return и результат"),
      blocks: [
        {
          paragraphs: [t("print ekrana yazır, return isə dəyəri geri verir ki, onu dəyişənə mənimsədəsən.", "print writes to the screen; return hands the value back so you can store it in a variable.", "print ekrana yazar; return değeri geri verir, böylece bir değişkene atayabilirsin.", "print تكتب على الشاشة أما return فتعيد القيمة لتخزنها في متغير.", "print выводит на экран, а return возвращает значение, чтобы сохранить его в переменную.")],
          code: 'def add(a, b):\n    return a + b\n\nresult = add(2, 3)\nprint(result)   # 5',
        },
        {
          paragraphs: [t("Default dəyər: def power(x, n=2). return yazmasan funksiya None qaytarır — tez-tez rast gəlinən çaşqınlıq.", "Default value: def power(x, n=2). If you forget return the function gives None — a common surprise.", "Varsayılan değer: def power(x, n=2). return yazmazsan fonksiyon None döndürür — sık rastlanan şaşkınlık.", "قيمة افتراضية: def power(x, n=2). إن نسيت return تعيد الدالة None — مفاجأة شائعة.", "Значение по умолчанию: def power(x, n=2). Если забыть return, функция вернёт None — частая неожиданность.")],
        },
      ],
    },
  ],
  xeta: [
    {
      id: "read",
      title: t("Xəta mesajını necə oxumaq olar", "How to read an error message", "Hata mesajı nasıl okunur", "كيف تقرأ رسالة الخطأ", "Как читать сообщение об ошибке"),
      blocks: [
        {
          paragraphs: [t("Mesajın ən aşağı sətri xətanın növünü və səbəbini deyir; yuxarıdakı sətir isə hansı fayl və sətirdə baş verdiyini göstərir. Əvvəlcə aşağıdan oxu.", "The last line names the kind of error and the reason; the lines above show the file and line number. Read from the bottom up.", "Mesajın son satırı hatanın türünü ve nedenini söyler; yukarıdaki satırlar dosya ve satır numarasını gösterir. Aşağıdan yukarı oku.", "السطر الأخير يذكر نوع الخطأ وسببه، والأسطر التي فوقه تُظهر الملف ورقم السطر. اقرأ من الأسفل إلى الأعلى.", "Последняя строка называет тип ошибки и причину, строки выше показывают файл и номер строки. Читайте снизу вверх.")],
        },
      ],
    },
    {
      id: "common",
      title: t("Tez-tez rast gəlinən xətalar", "Common errors", "Sık görülen hatalar", "أخطاء شائعة", "Частые ошибки"),
      blocks: [
        {
          list: [
            t("IndentationError — girinti səhvdir; bloku 4 boşluqla yaz və tab ilə boşluğu qarışdırma.", "IndentationError — wrong indentation; use 4 spaces and do not mix tabs and spaces.", "IndentationError — girinti yanlış; 4 boşluk kullan, tab ile boşluğu karıştırma.", "IndentationError — إزاحة خاطئة؛ استخدم 4 مسافات ولا تخلط التبويب بالمسافات.", "IndentationError — неверный отступ; используйте 4 пробела, не смешивайте табы и пробелы."),
            t("SyntaxError — iki nöqtə, mötərizə və ya dırnaq unudulub.", "SyntaxError — a colon, bracket or quote is missing.", "SyntaxError — iki nokta, parantez veya tırnak unutulmuş.", "SyntaxError — نقص نقطتين أو قوس أو علامة اقتباس.", "SyntaxError — забыто двоеточие, скобка или кавычка."),
            t("NameError — dəyişən təyin olunmamış və ya adı səhv yazılıb (Name ≠ name).", "NameError — the variable is not defined or misspelled (Name ≠ name).", "NameError — değişken tanımlı değil veya yanlış yazılmış (Name ≠ name).", "NameError — المتغير غير معرّف أو مكتوب خطأً (Name ≠ name).", "NameError — переменная не определена или опечатка (Name ≠ name)."),
            t("TypeError — tipi uyğun gəlməyən əməliyyat, məs. mətn + ədəd.", "TypeError — an operation on the wrong type, e.g. text + number.", "TypeError — uygun olmayan tipte işlem, ör. metin + sayı.", "TypeError — عملية على نوع غير مناسب، مثل نص + عدد.", "TypeError — операция с неподходящим типом, например текст + число."),
            t("IndexError — siyahıda olmayan nömrəyə müraciət.", "IndexError — using a position that is not in the list.", "IndexError — listede olmayan bir sıraya erişim.", "IndexError — الوصول إلى موضع غير موجود في القائمة.", "IndexError — обращение к несуществующему индексу списка."),
            t("ModuleNotFoundError — kitabxana quraşdırılmayıb: pip install ad.", "ModuleNotFoundError — the library is not installed: pip install name.", "ModuleNotFoundError — kütüphane kurulu değil: pip install ad.", "ModuleNotFoundError — المكتبة غير مثبتة: pip install name.", "ModuleNotFoundError — библиотека не установлена: pip install имя."),
          ],
        },
        {
          code: 'try:\n    x = int(input("Number: "))\nexcept ValueError:\n    print("That was not a number")',
        },
      ],
    },
  ],
  hardan: [
    {
      id: "plan",
      title: t("Başlanğıc planı", "A starter plan", "Başlangıç planı", "خطة للبداية", "План для старта"),
      blocks: [
        {
          list: [
            t("1–2 həftə: dəyişənlər, tiplər, if, dövrlər, funksiyalar.", "Weeks 1–2: variables, types, if, loops, functions.", "1–2 hafta: değişkenler, tipler, if, döngüler, fonksiyonlar.", "الأسبوعان 1–2: المتغيرات والأنواع وif والحلقات والدوال.", "Недели 1–2: переменные, типы, if, циклы, функции."),
            t("3–4 həftə: list, dict, fayllar, xətaların tutulması.", "Weeks 3–4: lists, dicts, files, error handling.", "3–4. hafta: list, dict, dosyalar, hata yakalama.", "الأسبوعان 3–4: القوائم والقواميس والملفات ومعالجة الأخطاء.", "Недели 3–4: списки, словари, файлы, обработка ошибок."),
            t("2-ci ay: kiçik layihə — rəqəm tapmaca, qeyd dəftəri, hesab-kitab proqramı.", "Month 2: a small project — a number-guessing game, a notes app, a budget calculator.", "2. ay: küçük proje — sayı tahmin oyunu, not defteri, bütçe hesaplayıcı.", "الشهر 2: مشروع صغير — لعبة تخمين رقم أو دفتر ملاحظات أو حاسبة ميزانية.", "Месяц 2: небольшой проект — угадай число, блокнот, калькулятор бюджета."),
            t("Sonra: yoxla — veb (Flask), data (pandas), avtomatlaşdırma.", "Then pick a direction: web (Flask), data (pandas), automation.", "Sonra yön seç: web (Flask), veri (pandas), otomasyon.", "ثم اختر اتجاهاً: الويب (Flask) أو البيانات (pandas) أو الأتمتة.", "Затем выберите направление: веб (Flask), данные (pandas), автоматизация."),
          ],
        },
        {
          paragraphs: [t("Gündə 30–60 dəqiqə kifayətdir; əsas şey hər gün kod yazmaqdır. Təxmini müddət: əsasları 1–2 ayda öyrənmək olar, amma bu, hər adamda fərqlidir.", "30–60 minutes a day is enough; the key is to write code every day. Roughly, the basics take 1–2 months, but this varies a lot between people.", "Günde 30–60 dakika yeterli; önemli olan her gün kod yazmak. Yaklaşık olarak temeller 1–2 ayda öğrenilir, ama bu kişiden kişiye çok değişir.", "30–60 دقيقة يومياً تكفي؛ المهم أن تكتب شيفرة كل يوم. تقريباً تُتعلَّم الأساسيات في شهر إلى شهرين، لكن ذلك يختلف كثيراً بين الناس.", "Достаточно 30–60 минут в день; главное — писать код каждый день. Примерно основы осваиваются за 1–2 месяца, но у всех по-разному.")],
        },
      ],
    },
    {
      id: "vs",
      title: t("Python, yoxsa JavaScript?", "Python or JavaScript?", "Python mı, JavaScript mi?", "بايثون أم جافاسكريبت؟", "Python или JavaScript?"),
      blocks: [
        {
          paragraphs: [
            t("Python sadə sintaksisi ilə ilk dil kimi məşhurdur və data, süni intellekt və avtomatlaşdırmada güclüdür. JavaScript brauzerdə işləyən yeganə dildir: saytlar və interaktiv səhifələr üçün lazımdır. Sayt düzəltmək istəyirsənsə HTML + JavaScript, data və avtomatlaşdırma istəyirsənsə Python seç.", "Python has a simple syntax, is a popular first language and is strong in data, AI and automation. JavaScript is the language of the browser: you need it for websites and interactive pages. Choose HTML + JavaScript to build websites, Python for data and automation.", "Python sade sözdizimiyle popüler bir ilk dildir; veri, yapay zekâ ve otomasyonda güçlüdür. JavaScript tarayıcının dilidir: web siteleri ve etkileşimli sayfalar için gerekir. Web sitesi yapmak istiyorsan HTML + JavaScript, veri ve otomasyon için Python seç.", "بايثون ذات صياغة بسيطة وهي لغة أولى شائعة وقوية في البيانات والذكاء الاصطناعي والأتمتة. جافاسكريبت لغة المتصفح وتلزمك للمواقع والصفحات التفاعلية. اختر HTML + جافاسكريبت لبناء المواقع وبايثون للبيانات والأتمتة.", "Python отличается простым синтаксисом, популярен как первый язык и силён в данных, ИИ и автоматизации. JavaScript — язык браузера: нужен для сайтов и интерактивных страниц. Для сайтов выбирайте HTML + JavaScript, для данных и автоматизации — Python."),
          ],
        },
      ],
    },
  ],
};
