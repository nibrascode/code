import type { Lang } from "@/lib/i18n";

export type PdfGuideSection = {
  title: string;
  paragraphs: readonly string[];
  points?: readonly string[];
};

export type PdfGuide = {
  title: string;
  description: string;
  keywords: string;
  lead: readonly string[];
  sections: readonly PdfGuideSection[];
};

export const NIBRAS_PDF_GUIDE: Record<Lang, PdfGuide> = {
  az: {
    title: "Nibras PDF panelləri və 18 alət",
    description:
      "Nibras PDF-in üst paneli, 18 aləti, son sənədləri, Fayl hazırdır ekranı və parametrləri. Şüar: Sadə · Sürətli · Güclü. Fayllar cihazda qalır.",
    keywords: "Nibras PDF, PDF alətləri, PDF birləşdir, PDF sıxışdır, PDF skan, Nibras PDF parametrlər",
    lead: [
      "Nibras PDF sənədlər və şəkillərlə işləmək üçün mobil tətbiqdir. Şüarı: Sadə · Sürətli · Güclü. Aşağıda tətbiqin beş paneli öz adı ilə yazılıb.",
    ],
    sections: [
      {
        title: "Əsas naviqasiya və üst panel",
        paragraphs: [
          "Bu panel tətbiqin idarəetmə yeridir. Sol yuxarıda loqo, NIBRAS PDF adı və SADƏ · SÜRƏTLİ · GÜCLÜ şüarı durur.",
          "Sağ yuxarıda üç ikon var: profil, Premium təcrübə və parametrlər. Aşağıda iki keçid var: Əsas və Alətlər. Alətlər bütün funksiyaların açıldığı bölmədir.",
        ],
      },
      {
        title: "Alətlər paneli",
        paragraphs: [
          "Alətlər panelinin sualı belədir: Nə etmək istəyirsiniz? Burada 18 alət var. Onlar sənədi düzəltmək, formatı çevirmək, məzmuna baxmaq və faylı qorumaq üçündür.",
        ],
        points: [
          "Birləşdir: bir neçə PDF-i sıra ilə toplayıb bir fayl edir.",
          "Böl: çoxsəhifəli sənədin səhifələrini ayırıb hər birini ayrıca PDF saxlayır.",
          "Sıxışdır: keyfiyyəti saxlayaraq faylın həcmini kiçildir.",
          "Səhifələri idarə et: səhifəni silir və ya sırasını dəyişir.",
          "Səhifə seç və çıxar: seçilmiş səhifələrdən yeni fayl çıxarır.",
          "Toplu əməliyyatlar: bir neçə PDF üzərində eyni işi bir dəfəyə görür.",
          "Şəkildən PDF: qalereyadakı şəkilləri bir PDF-ə yığır.",
          "PDF-dən şəkil: səhifələri şəkil kimi saxlayır.",
          "PDF-dən Word: məzmunu redaktə üçün DOCX faylına çevirir.",
          "Word-dan PDF: DOCX faylını PDF edir.",
          "Dönüşdür: səhifəni sola və ya sağa çevirir.",
          "Skan et: kamera ilə kağızı çəkib birbaşa PDF edir.",
          "Mətni tanı: şəkildəki yazını cihazda oxuyub rəqəmsal mətnə çevirir.",
          "PDF-dən mətn çıxar: səhifədəki mətni kopyalana bilən hala gətirir.",
          "PDF önizləmə: səhifələrə tətbiqin içində baxır və böyüdür.",
          "Qoru: fayla parol qoyur.",
          "Su nişanı: sənədə şəffaf yazı və ya nişan əlavə edir.",
          "İmza əlavə et: PDF-in üzərinə elektron imza qoyur.",
        ],
      },
      {
        title: "Son sənədlər",
        paragraphs: [
          "Son sənədlər ən axırıncı işlənmiş faylların siyahısıdır. Hər sətirdə faylın adı, son əməliyyatın növü və tarixi görünür. Əməliyyat, məsələn, Birləşdir və ya Şəkildən PDF ola bilər.",
        ],
      },
      {
        title: "Fayl hazırdır",
        paragraphs: [
          "Alət işini bitirəndə Fayl hazırdır ekranı açılır. Orada yeni faylın adı görünür.",
          "Paylaş düyməsi faylı başqa tətbiqlə göndərir. Qovluğa saxla və Qovluğu dəyiş faylın telefonda hansı qovluqda qalacağını seçir. Bulud üçün ekranda Tezliklə · Drive yazısı var. Drive hələ qoşulmayıb.",
        ],
      },
      {
        title: "Parametrlər",
        paragraphs: [
          "Parametrlər tətbiqin dilini, kilidini və məxfilik seçimlərini saxlayır.",
          "Tətbiq dili: Azərbaycan dili, English, Türkçe, Русский və العربية.",
          "Tətbiq kilidi PIN və ya biometrik ola bilər. Kilid tam söndürülə də bilər.",
          "Son sənədlərdə adları gizlət açıldıqda işlənmiş faylların adları siyahıda görünmür. Paylaşmadan əvvəl təsdiq istə göndərmədən əvvəl əlavə sual çıxarır.",
          "Panelin altında bildiriş durur: Fayllarınız cihazınızda qalır. Yəni sənəd xarici serverə göndərilmir.",
        ],
      },
    ],
  },
  en: {
    title: "Nibras PDF panels and 18 tools",
    description:
      "The Nibras PDF top bar, 18 tools, recent documents, the File ready screen, and settings. Line: Simple · Fast · Powerful. Files stay on the device.",
    keywords: "Nibras PDF, PDF tools, merge PDF, compress PDF, scan PDF, Nibras PDF settings",
    lead: [
      "Nibras PDF is a mobile app for documents and images. Its line is Simple · Fast · Powerful. The five panels below are named as they appear in the app.",
    ],
    sections: [
      {
        title: "Main navigation and top bar",
        paragraphs: [
          "This is the control area. At the top left are the logo, the name NIBRAS PDF, and the line SIMPLE · FAST · POWERFUL.",
          "At the top right are three icons: profile, Premium experience, and settings. At the bottom are two links: Home and Tools. Tools is where every function opens.",
        ],
      },
      {
        title: "Tools panel",
        paragraphs: [
          "The tools panel asks: What do you want to do? There are 18 tools, for changing a document, converting a format, reading the content, and protecting the file.",
        ],
        points: [
          "Merge: collect several PDFs, in order, into one file.",
          "Split: separate the pages of a long PDF and save each one on its own.",
          "Compress: make the file smaller while keeping the quality.",
          "Manage pages: delete a page or change the order.",
          "Select and extract: build a new file from only the pages you choose.",
          "Batch actions: run the same job on several PDFs at once.",
          "Image to PDF: gather gallery images into one PDF.",
          "PDF to image: save the pages as images.",
          "PDF to Word: turn the content into a DOCX file for editing.",
          "Word to PDF: turn a DOCX file into a PDF.",
          "Rotate: turn a page left or right.",
          "Scan: photograph paper with the camera and make a PDF directly.",
          "Recognize text: read writing in an image on the device and turn it into digital text.",
          "Extract text from PDF: make the page text something you can copy.",
          "PDF preview: open the pages inside the app and zoom in.",
          "Protect: put a password on the file.",
          "Watermark: add a transparent line or mark.",
          "Add signature: place an electronic signature on the PDF.",
        ],
      },
      {
        title: "Recent documents",
        paragraphs: [
          "Recent documents is the list of the latest files you worked on. Each row shows the file name, the last action, and the date. The action can be Merge or Image to PDF, for example.",
        ],
      },
      {
        title: "File ready",
        paragraphs: [
          "When a tool finishes, the File ready screen opens. It shows the new file name.",
          "Share sends the file through another app. Save to folder and Change folder choose where it stays on the phone. The screen also says Coming soon · Drive. Drive is not connected yet.",
        ],
      },
      {
        title: "Settings",
        paragraphs: [
          "Settings keep the language, the lock, and the privacy choices.",
          "App language: Azərbaycan dili, English, Türkçe, Русский, and العربية.",
          "The app lock can be a PIN or biometrics. It can also be turned off.",
          "Hide names in recent documents keeps finished file names off that list. Ask before sharing shows an extra question before a file is sent.",
          "At the bottom of the panel: Your files stay on your device. The document is not sent to an outside server.",
        ],
      },
    ],
  },
  tr: {
    title: "Nibras PDF panelleri ve 18 araç",
    description:
      "Nibras PDF üst paneli, 18 araç, son belgeler, Dosya hazır ekranı ve ayarlar. Slogan: Sade · Hızlı · Güçlü. Dosyalar cihazda kalır.",
    keywords: "Nibras PDF, PDF araçları, PDF birleştir, PDF sıkıştır, PDF tara, Nibras PDF ayarları",
    lead: [
      "Nibras PDF belgeler ve görseller için bir mobil uygulamadır. Sloganı: Sade · Hızlı · Güçlü. Aşağıdaki beş panel uygulamadaki adıyla yazılıdır.",
    ],
    sections: [
      {
        title: "Ana gezinti ve üst panel",
        paragraphs: [
          "Bu panel uygulamanın yönetim yeridir. Sol üstte logo, NIBRAS PDF adı ve SADE · HIZLI · GÜÇLÜ sloganı durur.",
          "Sağ üstte üç simge vardır: profil, Premium deneyim ve ayarlar. Altta iki geçiş vardır: Ana sayfa ve Araçlar. Araçlar bütün işlevlerin açıldığı bölümdür.",
        ],
      },
      {
        title: "Araçlar paneli",
        paragraphs: [
          "Araçlar panelinin sorusu şudur: Ne yapmak istiyorsunuz? Burada 18 araç vardır. Belgeyi düzenlemek, biçimi çevirmek, içeriğe bakmak ve dosyayı korumak içindir.",
        ],
        points: [
          "Birleştir: birkaç PDF’i sırayla toplayıp tek dosya yapar.",
          "Böl: uzun belgenin sayfalarını ayırıp her birini ayrı PDF kaydeder.",
          "Sıkıştır: kaliteyi koruyarak dosyayı küçültür.",
          "Sayfaları yönet: sayfa siler veya sırasını değiştirir.",
          "Sayfa seç ve çıkar: seçilen sayfalardan yeni dosya çıkarır.",
          "Toplu işlemler: aynı işi birkaç PDF üzerinde birden yapar.",
          "Görselden PDF: galerideki görselleri bir PDF’te toplar.",
          "PDF’den görsel: sayfaları görsel olarak kaydeder.",
          "PDF’den Word: içeriği düzenlemek için DOCX dosyasına çevirir.",
          "Word’dan PDF: DOCX dosyasını PDF yapar.",
          "Döndür: sayfayı sola veya sağa çevirir.",
          "Tara: kâğıdı kamerayla çekip doğrudan PDF yapar.",
          "Metni tanı: görseldeki yazıyı cihazda okuyup dijital metne çevirir.",
          "PDF’den metin çıkar: sayfadaki metni kopyalanabilir hale getirir.",
          "PDF önizleme: sayfalara uygulamanın içinde bakar ve yakınlaştırır.",
          "Koruma: dosyaya parola koyar.",
          "Filigran: belgeye saydam yazı veya işaret ekler.",
          "İmza ekle: PDF’in üzerine elektronik imza koyar.",
        ],
      },
      {
        title: "Son belgeler",
        paragraphs: [
          "Son belgeler en son işlenen dosyaların listesidir. Her satırda dosya adı, son işlemin türü ve tarih görünür. İşlem, örneğin Birleştir veya Görselden PDF olabilir.",
        ],
      },
      {
        title: "Dosya hazır",
        paragraphs: [
          "Araç bitince Dosya hazır ekranı açılır. Yeni dosyanın adı orada görünür.",
          "Paylaş düğmesi dosyayı başka uygulamayla gönderir. Klasöre kaydet ve Klasörü değiştir dosyanın telefonda nerede duracağını seçer. Bulut için ekranda Yakında · Drive yazar. Drive henüz bağlı değildir.",
        ],
      },
      {
        title: "Ayarlar",
        paragraphs: [
          "Ayarlar uygulamanın dilini, kilidini ve gizlilik seçimlerini tutar.",
          "Uygulama dili: Azərbaycan dili, English, Türkçe, Русский ve العربية.",
          "Uygulama kilidi PIN veya biyometrik olabilir. Kilit tamamen kapatılabilir de.",
          "Son belgelerde adları gizle açılınca işlenmiş dosya adları listede görünmez. Paylaşmadan önce onay iste göndermeden önce ek soru çıkarır.",
          "Panelin altında bildirim durur: Dosyalarınız cihazınızda kalır. Belge dış sunucuya gitmez.",
        ],
      },
    ],
  },
  ar: {
    title: "لوحات Nibras PDF و18 أداة",
    description:
      "الشريط العلوي في Nibras PDF و18 أداة والمستندات الأخيرة وشاشة الملف جاهز والإعدادات. الشعار: بسيط · سريع · قوي. الملفات تبقى على الجهاز.",
    keywords: "Nibras PDF, أدوات PDF, دمج PDF, ضغط PDF, مسح PDF, إعدادات Nibras PDF",
    lead: [
      "Nibras PDF تطبيق للهاتف للتعامل مع المستندات والصور. شعاره: بسيط · سريع · قوي. اللوحات الخمس أدناه بأسمائها داخل التطبيق.",
    ],
    sections: [
      {
        title: "التنقّل الرئيسي والشريط العلوي",
        paragraphs: [
          "هذه منطقة التحكم. في أعلى اليسار الشعار واسم NIBRAS PDF وعبارة SIMPLE · FAST · POWERFUL.",
          "في أعلى اليمين ثلاث أيقونات: الملف الشخصي وتجربة Premium والإعدادات. في الأسفل رابطان: الرئيسية والأدوات. الأدوات هي القسم الذي تُفتح منه كل الوظائف.",
        ],
      },
      {
        title: "لوحة الأدوات",
        paragraphs: [
          "سؤال لوحة الأدوات: ماذا تريد أن تفعل؟ فيها 18 أداة لتعديل المستند وتحويل الصيغة وقراءة المحتوى وحماية الملف.",
        ],
        points: [
          "دمج: يجمع عدة ملفات PDF بالترتيب في ملف واحد.",
          "تقسيم: يفصل صفحات المستند الطويل ويحفظ كل صفحة وحدها.",
          "ضغط: يصغّر حجم الملف مع الإبقاء على الجودة.",
          "إدارة الصفحات: يحذف صفحة أو يغيّر ترتيبها.",
          "اختيار واستخراج: يبني ملفاً جديداً من الصفحات المختارة فقط.",
          "عمليات دفعة: ينفّذ العمل نفسه على عدة ملفات PDF دفعة واحدة.",
          "من صورة إلى PDF: يجمع صور المعرض في PDF واحد.",
          "من PDF إلى صورة: يحفظ الصفحات كصور.",
          "من PDF إلى Word: يحوّل المحتوى إلى ملف DOCX للتحرير.",
          "من Word إلى PDF: يحوّل ملف DOCX إلى PDF.",
          "تدوير: يقلب الصفحة يساراً أو يميناً.",
          "مسح: يصوّر الورق بالكاميرا ويصنع PDF مباشرة.",
          "التعرّف على النص: يقرأ الكتابة في الصورة على الجهاز ويحوّلها إلى نص رقمي.",
          "استخراج النص من PDF: يجعل نص الصفحة قابلاً للنسخ.",
          "معاينة PDF: يفتح الصفحات داخل التطبيق ويكبّرها.",
          "حماية: يضع كلمة مرور على الملف.",
          "علامة مائية: يضيف كتابة أو علامة شفافة.",
          "إضافة توقيع: يضع توقيعاً إلكترونياً على PDF.",
        ],
      },
      {
        title: "المستندات الأخيرة",
        paragraphs: [
          "المستندات الأخيرة قائمة بآخر الملفات التي عُمل عليها. يظهر في كل سطر اسم الملف ونوع آخر عملية والتاريخ. قد تكون العملية دمجاً أو تحويلاً من صورة إلى PDF.",
        ],
      },
      {
        title: "الملف جاهز",
        paragraphs: [
          "عند انتهاء الأداة تُفتح شاشة الملف جاهز. يظهر فيها اسم الملف الجديد.",
          "زر المشاركة يرسل الملف عبر تطبيق آخر. الحفظ في مجلد وتغيير المجلد يختاران مكان الملف على الهاتف. على الشاشة أيضاً: قريباً · Drive. Drive غير متصل بعد.",
        ],
      },
      {
        title: "الإعدادات",
        paragraphs: [
          "الإعدادات تحفظ اللغة والقفل وخيارات الخصوصية.",
          "لغة التطبيق: Azərbaycan dili وEnglish وTürkçe وРусский والعربية.",
          "قفل التطبيق يمكن أن يكون PIN أو بصمة. ويمكن إطفاؤه تماماً.",
          "إخفاء الأسماء في المستندات الأخيرة يمنع ظهور أسماء الملفات الجاهزة في القائمة. طلب التأكيد قبل المشاركة يُظهر سؤالاً إضافياً قبل الإرسال.",
          "أسفل اللوحة تنبيه: ملفاتك تبقى على جهازك. المستند لا يُرسل إلى خادم خارجي.",
        ],
      },
    ],
  },
  ru: {
    title: "Панели Nibras PDF и 18 инструментов",
    description:
      "Верхняя панель Nibras PDF, 18 инструментов, недавние документы, экран «Файл готов» и настройки. Строка: Просто · Быстро · Сильно. Файлы остаются на устройстве.",
    keywords: "Nibras PDF, инструменты PDF, объединить PDF, сжать PDF, сканер PDF, настройки Nibras PDF",
    lead: [
      "Nibras PDF — мобильное приложение для документов и изображений. Его строка: Просто · Быстро · Сильно. Ниже пять панелей названы так, как они есть в приложении.",
    ],
    sections: [
      {
        title: "Основная навигация и верхняя панель",
        paragraphs: [
          "Это место управления. Слева сверху — знак, имя NIBRAS PDF и строка SIMPLE · FAST · POWERFUL.",
          "Справа сверху три значка: профиль, опыт Premium и настройки. Снизу две ссылки: Главная и Инструменты. Инструменты — раздел, где открываются все функции.",
        ],
      },
      {
        title: "Панель инструментов",
        paragraphs: [
          "Вопрос панели: Что вы хотите сделать? Здесь 18 инструментов: поправить документ, сменить формат, прочитать содержимое и защитить файл.",
        ],
        points: [
          "Объединить: собрать несколько PDF по порядку в один файл.",
          "Разделить: отделить страницы длинного PDF и сохранить каждую отдельно.",
          "Сжать: уменьшить размер, сохранив качество.",
          "Управлять страницами: удалить страницу или сменить порядок.",
          "Выбрать и извлечь: собрать новый файл только из выбранных страниц.",
          "Пакетные действия: сделать одну работу сразу с несколькими PDF.",
          "Из изображения в PDF: собрать снимки из галереи в один PDF.",
          "Из PDF в изображение: сохранить страницы как картинки.",
          "Из PDF в Word: перевести содержимое в DOCX для правки.",
          "Из Word в PDF: сделать PDF из файла DOCX.",
          "Повернуть: повернуть страницу влево или вправо.",
          "Сканировать: снять бумагу камерой и сразу сделать PDF.",
          "Распознать текст: прочитать надпись на снимке на устройстве и превратить её в цифровой текст.",
          "Извлечь текст из PDF: сделать текст страницы таким, чтобы его можно было скопировать.",
          "Просмотр PDF: открыть страницы внутри приложения и увеличить их.",
          "Защитить: поставить на файл пароль.",
          "Водяной знак: добавить прозрачную надпись или метку.",
          "Добавить подпись: поставить на PDF электронную подпись.",
        ],
      },
      {
        title: "Недавние документы",
        paragraphs: [
          "Недавние документы — список последних файлов. В каждой строке имя файла, вид последней операции и дата. Операция может быть, например, «Объединить» или «Из изображения в PDF».",
        ],
      },
      {
        title: "Файл готов",
        paragraphs: [
          "Когда инструмент заканчивает работу, открывается экран «Файл готов». Там видно имя нового файла.",
          "Кнопка «Поделиться» отправляет файл через другое приложение. «Сохранить в папку» и «Сменить папку» выбирают, где файл останется на телефоне. На экране также написано: Скоро · Drive. Drive ещё не подключён.",
        ],
      },
      {
        title: "Настройки",
        paragraphs: [
          "Настройки хранят язык, блокировку и выбор конфиденциальности.",
          "Язык приложения: Azərbaycan dili, English, Türkçe, Русский и العربية.",
          "Блокировка приложения может быть PIN или биометрией. Её можно и выключить.",
          "«Скрыть имена в недавних документах» убирает имена готовых файлов из списка. «Спрашивать перед отправкой» показывает лишний вопрос до того, как файл уйдёт.",
          "Внизу панели стоит строка: Ваши файлы остаются на устройстве. Документ не уходит на внешний сервер.",
        ],
      },
    ],
  },
};
