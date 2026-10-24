import type { Lang } from "@/lib/i18n";
import type { SearchPiece } from "@/lib/search-pages";

type Extra = { slug: string; piece: Record<Lang, SearchPiece> };

/** Search-demand guides added Oct 2026: PDF→Word, phone PDF signing, free AI chats. */
export const EXTRA_HOWS: readonly Extra[] = [
  {
    slug: "pdf-word-cevirmek",
    piece: {
      az: {
        title: "PDF-i Word-a pulsuz necə çevirmək olar",
        lead: "PDF faylını Word (DOCX) sənədinə pulsuz çevirmək üçün proqram qurmaq və hesab açmaq lazım deyil. Nibras Code saytındakı «PDF-dən Word» aləti faylı birbaşa brauzerdə oxuyur və DOCX faylı hazırlayır. Fayl serverə göndərilmir, iş sizin telefonunuzda və ya kompüterinizdə gedir.\n\nAlət PDF-dəki mətni və sətir keçidlərini Word-a köçürür. Şəkillər, cədvəllər və mürəkkəb düzülüş köçürülmür. Yəni nəticə redaktə etmək üçün təmiz mətndir, orijinalın eyni surəti deyil. Skan edilmiş PDF-də (şəkil kimi səhifələrdə) mətn qatı yoxdur. Belə halda alət OCR, yəni şəkildən mətn tanıma işə salır. OCR Azərbaycan, ingilis, rus, türk və ərəb mətnlərini tanıyır, amma pis skanda səhv hərf ola bilər.",
        points: [
          "1-ci addım: nibrascode.com/pdf/pdf-word səhifəsini açın.",
          "2-ci addım: PDF faylını seçin. Parol varsa, alət parolu soruşur.",
          "3-cü addım: çevirmə bitəndə DOCX düyməsinə basıb faylı endirin.",
          "4-cü addım: faylı Word, Google Docs və ya WPS-də açıb düzülüşü yoxlayın.",
          "Yalnız mətn lazımdırsa, «PDF-dən mətn» aləti TXT verir.",
          "Telefonda tez-tez işləyirsinizsə, Nibras PDF Android tətbiqində də PDF-dən Word və digər alətlər var.",
        ],
        note: "Rəsmi sənəddə (müqavilə, arayış) çevirmədən sonra rəqəmləri, adları və tarixləri orijinalla mütləq tutuşdurun. OCR ilə çıxan mətndə «ə», «ı», «ğ» kimi hərflər bəzən səhv tanınır.",
      },
      en: {
        title: "How to convert PDF to Word for free",
        lead: "You do not need to install software or open an account to turn a PDF into a Word (DOCX) file. The PDF to Word tool on Nibras Code reads the file right in your browser and builds a DOCX file. The file is not sent to a server; the work happens on your phone or computer.\n\nThe tool moves the text and line breaks into Word. Images, tables and complex layout are not carried over. The result is clean text for editing, not an exact copy of the original. A scanned PDF (pages that are pictures) has no text layer, so the tool runs OCR, text recognition from images. OCR reads Azerbaijani, English, Russian, Turkish and Arabic, but a poor scan can produce wrong letters.",
        points: [
          "Step 1: open nibrascode.com/en/pdf/pdf-word.",
          "Step 2: choose the PDF. If it has a password, the tool asks for it.",
          "Step 3: when conversion ends, press DOCX and download the file.",
          "Step 4: open it in Word, Google Docs or WPS and check the layout.",
          "If you only need text, the PDF to text tool gives a TXT file.",
          "If you work on your phone a lot, the Nibras PDF Android app has PDF to Word and other tools too.",
        ],
        note: "For official papers (contracts, certificates) always compare numbers, names and dates with the original after converting. OCR text can misread letters such as «ə», «ı» or «ğ».",
      },
      tr: {
        title: "PDF'i Word'e ücretsiz nasıl çevirirsiniz",
        lead: "PDF dosyasını Word (DOCX) belgesine çevirmek için program kurmanız veya hesap açmanız gerekmez. Nibras Code'daki «PDF'den Word» aracı dosyayı doğrudan tarayıcıda okur ve DOCX dosyası hazırlar. Dosya sunucuya gönderilmez.\n\nAraç metni ve satır sonlarını aktarır. Resimler, tablolar ve karmaşık düzen aktarılmaz. Taranmış PDF'de araç OCR (resimden metin tanıma) kullanır.",
        points: ["nibrascode.com/tr/pdf/pdf-word sayfasını açın.", "PDF dosyasını seçin.", "DOCX düğmesine basıp indirin.", "Word veya Google Docs'ta açıp kontrol edin."],
        note: "Resmî belgelerde sayıları, adları ve tarihleri orijinalle karşılaştırın.",
      },
      ar: {
        title: "كيف تحوّل PDF إلى Word مجانًا",
        lead: "لا تحتاج إلى تثبيت برنامج أو فتح حساب لتحويل PDF إلى ملف Word (DOCX). أداة «من PDF إلى Word» في Nibras Code تقرأ الملف داخل المتصفح وتصنع ملف DOCX، ولا يُرسل الملف إلى خادم.\n\nتنقل الأداة النص وفواصل الأسطر فقط. الصور والجداول والتنسيق المعقد لا تُنقل. في PDF الممسوح ضوئيًا تستخدم الأداة OCR للتعرف على النص من الصورة.",
        points: ["افتح nibrascode.com/ar/pdf/pdf-word.", "اختر ملف PDF.", "اضغط DOCX ونزّل الملف.", "افتحه في Word أو Google Docs وراجع التنسيق."],
        note: "في الأوراق الرسمية قارن الأرقام والأسماء والتواريخ بالأصل.",
      },
      ru: {
        title: "Как бесплатно перевести PDF в Word",
        lead: "Чтобы превратить PDF в файл Word (DOCX), не нужно ставить программу или заводить аккаунт. Инструмент «PDF в Word» на Nibras Code читает файл прямо в браузере и собирает DOCX. Файл не отправляется на сервер.\n\nПереносятся текст и переносы строк. Картинки, таблицы и сложная вёрстка не переносятся. Для сканов инструмент включает OCR — распознавание текста с изображения.",
        points: ["Откройте nibrascode.com/ru/pdf/pdf-word.", "Выберите PDF.", "Нажмите DOCX и скачайте файл.", "Откройте в Word или Google Docs и проверьте вёрстку."],
        note: "В официальных документах сверяйте цифры, имена и даты с оригиналом.",
      },
    },
  },
  {
    slug: "telefonda-pdf-imzalamaq",
    piece: {
      az: {
        title: "Telefonda PDF necə imzalanır və doldurulur",
        lead: "Telefonda PDF-ə imza qoymaq üçün çap edib skan etmək lazım deyil. Nibras Code saytındakı «PDF imzala» aləti brauzerdə işləyir: imzanızı barmağınızla ekranda çəkirsiniz, sonra səhifəyə toxunub imzanı istədiyiniz yerə qoyursunuz. Fayl serverə yüklənmir, imzalanmış PDF telefonunuzda hazırlanır.\n\nBu, çəkilmiş imzanın şəkil kimi səhifəyə qoyulmasıdır. Hüquqi qüvvəsi olan elektron imza deyil. Azərbaycanda dövlət qurumları və bir çox şirkət gücləndirilmiş elektron imza (məsələn ASAN İmza və ya Elektron imza kartı) tələb edə bilər. Sənədi kimə göndərirsinizsə, hansı imzanı qəbul etdiyini əvvəlcədən soruşun.",
        points: [
          "1-ci addım: telefonda nibrascode.com/pdf/sign səhifəsini açın.",
          "2-ci addım: PDF faylını seçin.",
          "3-cü addım: imzanı barmaqla çəkin. Alınmasa, «Sil» basıb yenidən çəkin.",
          "4-cü addım: səhifə nömrəsini seçin, imza ölçüsünü tənzimləyin və səhifəyə toxunun.",
          "5-ci addım: imzalanmış PDF-i endirin və açıb yoxlayın.",
          "Formda doldurulacaq xanalar varsa, onları Adobe Acrobat Reader və ya Google Drive-ın PDF baxıcısı kimi form doldurmağı dəstəkləyən proqramda doldurun, sonra imzalayın.",
        ],
        note: "İmzanı sənəd tam doldurulandan sonra qoyun. Lazımdırsa, sonra «PDF parol» aləti ilə fayla parol qoya bilərsiniz.",
      },
      en: {
        title: "How to sign and fill a PDF on your phone",
        lead: "You do not need to print and scan to sign a PDF on your phone. The Sign PDF tool on Nibras Code works in the browser: you draw your signature with a finger on the screen, then tap the page to place it where you want. The file is not uploaded; the signed PDF is built on your phone.\n\nThis places a drawn signature on the page as a picture. It is not a legally qualified electronic signature. In Azerbaijan, government offices and many companies may require a qualified e-signature such as ASAN İmza or an e-signature card. Ask the receiver which signature they accept before you send.",
        points: [
          "Step 1: on your phone, open nibrascode.com/en/pdf/sign.",
          "Step 2: choose the PDF.",
          "Step 3: draw your signature with a finger. If it looks wrong, press Erase and draw again.",
          "Step 4: pick the page, adjust the signature size and tap the page.",
          "Step 5: download the signed PDF and open it to check.",
          "If the form has fillable fields, fill them in an app that supports PDF forms, such as Adobe Acrobat Reader or the Google Drive PDF viewer, then sign.",
        ],
        note: "Sign after the document is fully filled. If needed, add a password afterwards with the Password protect PDF tool.",
      },
      tr: {
        title: "Telefonda PDF nasıl imzalanır ve doldurulur",
        lead: "Telefonda PDF imzalamak için yazdırıp taramanız gerekmez. Nibras Code'daki «PDF imzala» aracı tarayıcıda çalışır: imzanızı parmakla çizer, sayfaya dokunarak yerleştirirsiniz. Dosya yüklenmez.\n\nBu, çizilmiş imzanın resim olarak eklenmesidir; nitelikli elektronik imza değildir.",
        points: ["nibrascode.com/tr/pdf/sign sayfasını açın.", "PDF'i seçin ve imzanızı çizin.", "Sayfaya dokunup imzayı yerleştirin.", "İmzalı PDF'i indirin."],
        note: "Doldurulabilir alanları önce PDF formlarını destekleyen bir uygulamada doldurun.",
      },
      ar: {
        title: "كيف توقّع ملف PDF وتملؤه على الهاتف",
        lead: "لا تحتاج إلى الطباعة والمسح لتوقيع PDF على الهاتف. أداة «توقيع PDF» في Nibras Code تعمل في المتصفح: ترسم توقيعك بإصبعك ثم تضغط على الصفحة لوضعه. لا يُرفع الملف.\n\nهذا توقيع مرسوم يوضع كصورة، وليس توقيعًا إلكترونيًا معتمدًا قانونيًا.",
        points: ["افتح nibrascode.com/ar/pdf/sign.", "اختر الملف وارسم توقيعك.", "اضغط على الصفحة لوضع التوقيع.", "نزّل الملف الموقّع."],
        note: "املأ الحقول أولًا في تطبيق يدعم نماذج PDF ثم وقّع.",
      },
      ru: {
        title: "Как подписать и заполнить PDF на телефоне",
        lead: "Чтобы подписать PDF на телефоне, не нужно печатать и сканировать. Инструмент «Подписать PDF» на Nibras Code работает в браузере: рисуете подпись пальцем и касанием ставите её на страницу. Файл не загружается.\n\nЭто нарисованная подпись в виде картинки, а не квалифицированная электронная подпись.",
        points: ["Откройте nibrascode.com/ru/pdf/sign.", "Выберите PDF и нарисуйте подпись.", "Коснитесь страницы, чтобы поставить подпись.", "Скачайте подписанный PDF."],
        note: "Заполняемые поля сначала заполните в приложении с поддержкой PDF-форм.",
      },
    },
  },
];

export const EXTRA_TOPICS: readonly Extra[] = [
  {
    slug: "pulsuz-chatgpt-alternativleri",
    piece: {
      az: {
        title: "ChatGPT-yə pulsuz alternativlər: Azərbaycan dilində işləyən AI söhbətləri",
        lead: "ChatGPT-nin pulsuz planı var, amma limitə çatanda və ya başqa üslub lazım olanda digər pulsuz süni intellekt söhbətlərinə baxmaq olar. Aşağıdakıların hamısında Azərbaycan dilində yazmaq olur. Cavabın keyfiyyəti modeldən və mövzudan asılıdır, ona görə eyni sualı iki yerdə yoxlamaq faydalıdır.\n\nPulsuz planların limitləri və modelləri tez-tez dəyişir. Bu səhifə ümumi istiqamət verir. Dəqiq limiti hər xidmətin öz saytında yoxlayın.",
        points: [
          "Google Gemini (gemini.google.com): Google hesabı ilə pulsuzdur, Azərbaycan dilini rəsmi dəstəkləyən dillər siyahısındadır.",
          "Microsoft Copilot (copilot.microsoft.com): pulsuz, Microsoft hesabı ilə daha çox imkan açılır.",
          "Claude (claude.ai): pulsuz planı var, uzun mətn və kod izahında güclüdür, gündəlik limiti azdır.",
          "DeepSeek (chat.deepseek.com): pulsuz, xüsusilə riyaziyyat və kodda istifadə olunur.",
          "Nibras AI (nibrascode.com/ai): bu saytın öz söhbətidir, hesabsız və pulsuzdur. Açıq pulsuz modellərlə işləyir, gündəlik limiti var. Proqramlaşdırma və sayt alətləri ilə bağlı suallar üçün nəzərdə tutulub.",
        ],
        note: "Heç bir AI söhbətinə şifrə, kart nömrəsi və ya şəxsiyyət vəsiqəsi məlumatı yazmayın. Rəqəm, tarix və qanunla bağlı cavabları başqa mənbədən yoxlayın.",
      },
      en: {
        title: "Free ChatGPT alternatives that work in Azerbaijani",
        lead: "ChatGPT has a free plan, but when you hit the limit or want a different style you can try other free AI chats. You can write in Azerbaijani in all of the ones below. Answer quality depends on the model and the topic, so it helps to ask the same question in two places.\n\nFree plan limits and models change often. This page gives a general direction; check the exact limit on each service's own site.",
        points: [
          "Google Gemini (gemini.google.com): free with a Google account; Azerbaijani is on its list of supported languages.",
          "Microsoft Copilot (copilot.microsoft.com): free; a Microsoft account unlocks more.",
          "Claude (claude.ai): has a free plan, strong at long text and code explanation, low daily limit.",
          "DeepSeek (chat.deepseek.com): free, often used for math and code.",
          "Nibras AI (nibrascode.com/ai): this site's own chat, free and without an account. It runs on open free models and has a daily limit. It is meant for programming and site-tool questions.",
        ],
        note: "Never type passwords, card numbers or ID details into any AI chat. Check answers about numbers, dates and laws against another source.",
      },
      tr: {
        title: "ChatGPT'ye ücretsiz alternatifler: Azerbaycanca çalışan yapay zeka sohbetleri",
        lead: "ChatGPT'nin ücretsiz planı var, ama limit dolunca başka ücretsiz sohbetler denenebilir. Aşağıdakilerin hepsinde Azerbaycanca yazılabilir. Limitler sık değişir.",
        points: ["Google Gemini: Google hesabıyla ücretsiz.", "Microsoft Copilot: ücretsiz.", "Claude: ücretsiz planı var, günlük limiti düşük.", "DeepSeek: ücretsiz.", "Nibras AI (nibrascode.com/ai): bu sitenin kendi sohbeti, hesapsız ve ücretsiz, günlük limiti var."],
        note: "Şifre ve kart bilgisi yazmayın. Önemli cevapları kontrol edin.",
      },
      ar: {
        title: "بدائل مجانية لـ ChatGPT تعمل باللغة الأذربيجانية",
        lead: "لدى ChatGPT خطة مجانية، لكن عند بلوغ الحد يمكن تجربة محادثات ذكاء اصطناعي مجانية أخرى. الحدود تتغير كثيرًا.",
        points: ["Google Gemini: مجاني بحساب Google.", "Microsoft Copilot: مجاني.", "Claude: له خطة مجانية بحد يومي منخفض.", "DeepSeek: مجاني.", "Nibras AI (nibrascode.com/ai): محادثة هذا الموقع، مجانية وبلا حساب، ولها حد يومي."],
        note: "لا تكتب كلمات المرور أو أرقام البطاقات. تحقق من الإجابات المهمة.",
      },
      ru: {
        title: "Бесплатные альтернативы ChatGPT, которые понимают азербайджанский",
        lead: "У ChatGPT есть бесплатный план, но когда лимит закончился, можно попробовать другие бесплатные ИИ-чаты. Лимиты часто меняются.",
        points: ["Google Gemini: бесплатно с аккаунтом Google.", "Microsoft Copilot: бесплатно.", "Claude: есть бесплатный план с небольшим дневным лимитом.", "DeepSeek: бесплатно.", "Nibras AI (nibrascode.com/ai): чат этого сайта, бесплатно и без аккаунта, есть дневной лимит."],
        note: "Не вводите пароли и номера карт. Проверяйте важные ответы.",
      },
    },
  },
];
