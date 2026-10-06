import type { Lang } from "@/lib/i18n";

export type FaqItem = {
  id: string;
  q: string;
  a: string;
  points?: readonly string[];
  notes?: readonly string[];
};
export type FaqLink = { href: string; label: string };

export type FaqCopy = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  keywords: string;
  heading: string;
  intro: string;
  more: string;
  links: readonly FaqLink[];
  items: readonly FaqItem[];
};

const LINKS: Record<Lang, readonly FaqLink[]> = {
  az: [
    { href: "/apps", label: "Tətbiqlər" },
    { href: "/programming", label: "Proqramlaşdırma" },
    { href: "/contact", label: "Əlaqə" },
    { href: "/privacy/nibras-arabic", label: "Məxfilik" },
  ],
  en: [
    { href: "/apps", label: "Apps" },
    { href: "/programming", label: "Programming" },
    { href: "/contact", label: "Contact" },
    { href: "/privacy/nibras-arabic", label: "Privacy" },
  ],
  tr: [
    { href: "/apps", label: "Uygulamalar" },
    { href: "/programming", label: "Programlama" },
    { href: "/contact", label: "İletişim" },
    { href: "/privacy/nibras-arabic", label: "Gizlilik" },
  ],
  ar: [
    { href: "/apps", label: "التطبيقات" },
    { href: "/programming", label: "البرمجة" },
    { href: "/contact", label: "تواصل" },
    { href: "/privacy/nibras-arabic", label: "الخصوصية" },
  ],
  ru: [
    { href: "/apps", label: "Приложения" },
    { href: "/programming", label: "Программирование" },
    { href: "/contact", label: "Контакт" },
    { href: "/privacy/nibras-arabic", label: "Конфиденциальность" },
  ],
};

export const FAQ: Record<Lang, FaqCopy> = {
  az: {
    lang: "az",
    path: "/faq",
    title: "Tez-tez verilən suallar — Nibras Code",
    description:
      "Nibras Code nədir, hansı tətbiqləri var, Nibras Arabic, Nibras PDF, Nibras Plans və Nibras Docs haqqında suallar. Nibras AI, Nibras Dev, Nibras Apk, pulsuz istifadə, reklam, məxfilik və əlaqə.",
    keywords:
      "Nibras Code nədir, Nibras Arabic, Nibras PDF, Nibras AI, Nibras Dev, Nibras Apk, APK Studio, Nibras Code pulsuzdur",
    heading: "Tez-tez verilən suallar",
    intro: "Nibras Code, tətbiqləri və sayt haqqında ən çox verilən sualların cavabları.",
    more: "Bütün suallar",
    links: LINKS.az,
    items: [
      {
        id: "nedir",
        q: "Nibras Code nədir?",
        a: "Nibras Code sadə, faydalı və istifadəsi rahat tətbiqlər üzərində çalışan müstəqil layihədir. Məqsəd gündəlik ehtiyacı daha rahat həll etməkdir: aydın interfeys, həqiqətən lazım olan funksiyalar və reklamsız istifadə.",
      },
      {
        id: "sirket",
        q: "Nibras Code şirkətdirmi?",
        a: "Xeyr. Nibras Code böyük şirkət deyil. Faydalı ideyaları tətbiqlərə çevirmək üçün başlanmış müstəqil şəxsi layihədir.",
      },
      {
        id: "tetbiqler",
        q: "Nibras Code hansı tətbiqləri hazırlayır?",
        a: "Hazırda Nibras Arabic istifadəyə açıqdır. Nibras PDF, Nibras Plans və Nibras Docs tezliklədir. Hər tətbiqin öz səhifəsində adı, qısa məlumatı və yükləmə vəziyyəti göstərilir. Tətbiq adları dildən asılı olmayaraq eyni qalır.",
      },
      {
        id: "arabic",
        q: "Nibras Arabic nədir?",
        a: "Nibras Arabic Azərbaycan dilini bilən birinin ərəb dilini daha asan öyrənməsi üçün nəzərdə tutulub. Tətbiqin adı Nibras Arabic, şüarı isə «Ərəb dili - daha yaxın»dır. Versiya v1.1.0. Öyrənilən məlumatlar cihazda saxlanılır.",
        points: [
          "Üst paneldə Ayarlar və gecə/gündüz rejimi var.",
          "Sürətli statistika: öyrənmə seriyası, öyrənilən söz sayı (məsələn 12 / 5100), səviyyə (məsələn Başlanğıc) və gündəlik hədəf (məsələn 50 XP, təxminən 15 dəqiqə).",
          "Günün sözü səslə dinlənilir. «Sözə bax» düyməsi ilə açılır. Nümunə: ظَلَّ — davam etmək.",
          "Öyrənməyə başla: 704 əsas feil, 200 isim, 100 sifət, 200 say nümunəsi və 1204 sözlük qarışıq baza.",
          "Söz ekranında axtarış, favorit və bağla var. Keçmiş, indiki və əmr formaları, oxunuş, səs və Azərbaycan dilinə tərcümə göstərilir. Bütün bablar kökə görə açılır. Aşağıda Öyrəndim, Əvvəlki və Növbəti var.",
          "Dialoqlar: 186 ifadə. Tərcümələri gizlətmək olar. Hər ifadənin hərəkəli yazılışı, səsi və tərcüməsi var.",
          "Testlər: 514 suallıq adi test, çətin suallar, hər suala 10 saniyə verilən 10 suallıq sürətli cavab və söz birləşdirmə.",
          "Flash kartlar: 4400 sözdə ağıllı təkrar (SRS), çətin sözlər, bütün sözlər, yalnız öyrənilməmişlər və favoritlər.",
          "Yazı məşqi: 28 əlifba hərfi. Boz hərfin üzərindən barmaqla yazılır. Təmizlə, Əvvəlki və Növbəti var.",
          "Statistika: ümumi XP, feillər, dialoqlar, testlər, cari və ən uzun seriya, son 7 günün XP qrafiki və nailiyyətlər.",
        ],
      },
      {
        id: "pdf",
        q: "Nibras PDF nədir?",
        a: "Nibras PDF sənədlər və şəkillərlə işləmək üçün mobil tətbiqdir. Şüarı: Sadə · Sürətli · Güclü. Aşağı menyuda Əsas və Alətlər var. Üstdə istifadəçi profili, Premium təcrübə və Parametrlər yerləşir. Alətlər bölməsində 18 alət var.",
        points: [
          "Birləşdir: bir neçə PDF-i bir faylda topla",
          "Böl: səhifələri ayrıca fayllara ayır",
          "Sıxışdır: fayl ölçüsünü kiçilt",
          "Şəkildən PDF: şəkilləri PDF sənədinə çevir",
          "PDF-dən şəkil: səhifələri şəkil kimi saxla",
          "Dönüşdür: PDF-i sola və ya sağa çevir",
          "Qoru: parol ilə təhlükəsizləşdir",
          "Su nişanı: sənədə yazı və ya nişan əlavə et",
          "Səhifələri idarə et: səhifələri sil və sırasını dəyiş",
          "Skan et: kamera ilə sənədi PDF-ə çevir",
          "İmza əlavə et: PDF-ə elektron imza yerləşdir",
          "Mətni tanı: şəkildən mətni cihazda çıxar",
          "PDF-dən mətn çıxar: PDF səhifələrindəki mətni çıxar",
          "PDF-dən Word: məzmunu redaktə etmək üçün",
          "PDF önizləmə: səhifələrə bax və böyüt",
          "Toplu əməliyyatlar: bir neçə PDF-i eyni anda emal et",
          "Səhifə seç və çıxar: seçilmiş səhifələrdən yeni fayl çıxar",
          "Word-dan PDF: DOCX faylını PDF sənədinə çevir",
        ],
        notes: [
          "Əsas ekranda son sənədlər görünür: əməliyyat növü və tarix, məsələn Birləşdir.",
          "Fayl hazırdır ekranında yeni faylın adı göstərilir. Paylaş, Qovluğa saxla və Qovluğu dəyiş var. Drive hələlik Tezliklədir.",
          "Tətbiq dili: Azərbaycan dili, English, Türkçe, Русский və العربية. Tətbiq kilidi PIN və ya biometrik ola bilər. Kilidi sıfırlamaq, son sənədlərdə adları gizlətmək və paylaşmadan əvvəl təsdiq istəmək mümkündür. Fayllarınız cihazınızda qalır.",
        ],
      },
      {
        id: "plans",
        q: "Nibras Plans nədir?",
        a: "Nibras Plans plan, cədvəl və hesabatları sadə saxlamaq üçün hazırlanan tətbiqdir. Hazırda tezliklədir.",
      },
      {
        id: "docs",
        q: "Nibras Docs nədir?",
        a: "Nibras Docs sənəd yazmaq, redaktə etmək və paylaşmaq üçün hazırlanan tətbiqdir. Vəziyyəti tezliklədir.",
      },
      {
        id: "pulsuz",
        q: "Tətbiqlər pulsuzdurmu və reklam varmı?",
        a: "Tətbiqlərin hamısı pullu deyil. Pulsuz tətbiqlərdə də reklam yoxdur. Premium sistemi olan tətbiqdə əsas funksiyaları pul ödəmədən istifadə etmək mümkündür. Premium daha intensiv istifadə edənlər üçün kiçik aylıq seçimdir.",
      },
      {
        id: "yukleme",
        q: "Tətbiqi haradan yükləmək olar?",
        a: "Yükləmə linki hazır olanda həmin tətbiqin səhifəsində görünür. Google Play, Huawei, App Store, Galaxy Store və Xiaomi üçün boş link göstərilmir.",
      },
      {
        id: "mexfilik",
        q: "Məxfilik siyasəti haradadır?",
        a: "Hər tətbiqin səhifəsində Məxfilik siyasəti düyməsi var. Nibras Arabic və Nibras PDF üçün siyasət mətnləri saytda ayrıca səhifə kimi açıqdır.",
      },
      {
        id: "diller",
        q: "Sayt hansı dillərdədir?",
        a: "Sayt beş dildədir: Azərbaycan dili, English, Türkçe, العربية və Русский. Dil seçimi səhifənin yuxarısındadır. Tətbiq adları dəyişmir, məlumat mətnləri isə seçilən dilə keçir.",
      },
      {
        id: "elaqe",
        q: "Nibras Code ilə necə əlaqə saxlamaq olar?",
        a: "Əlaqə səhifəsindən və ya nibrascode@gmail.com ünvanından yazmaq olar.",
      },
      {
        id: "sayt",
        q: "Saytda tətbiqlərdən başqa nə var?",
        a: "Resurslar, bələdçilər və proqramlaşdırma bölmələri var. Proqramlaşdırmada Python, JavaScript, Java, C#, TypeScript, HTML/CSS və SQL haqqında ayrıca səhifələr var.",
      },
      {
        id: "ai",
        q: "Nibras AI nədir?",
        a: "Nibras AI Nibras Code-un süni intellekt köməkçisidir: nibrascode.com/ai. Sual vermək, fikir vermək, kod yazmaq və şəkil düzəltmək olar. Söhbətlər 24 saat saxlanılır.",
      },
      {
        id: "dev",
        q: "Nibras Dev nədir?",
        a: "Nibras Dev brauzerdə işləyən kod studiyasıdır: dev.nibrascode.com. Python, HTML/CSS, JavaScript, SQL, C, C++, Java, PHP, Go, Rust və başqa dillərdə kod yazılır, nəticə yeni səhifədə açılır, kod telefona və ya ZIP kimi yüklənir. Ctrl+Enter ilə işə düşür və yazılan kod avtomatik yadda saxlanılır.",
      },
      {
        id: "apk",
        q: "Nibras Apk nədir?",
        a: "Nibras Apk, yəni APK Studio, saytı Android tətbiqinə çevirən sistemdir: studio.nibrascode.com. Sayt linki və ya index.html olan statik ZIP verilir, ad, ikon və paket adı seçilir, sonra APK yığılır. Qeydiyyat, Android Studio və kod bilgisi tələb olunmur. Hazır APK test və birbaşa quraşdırma üçün debug imzalıdır. Zərərli tətbiq hazırlamaq qadağandır.",
      },
      {
        id: "yeni",
        q: "Yeni tətbiqlər nə vaxt çıxacaq?",
        a: "Dəqiq çıxış tarixi elan olunmur. Nibras Arabic hazırdır. Nibras PDF, Nibras Plans və Nibras Docs tezliklədir. Gələcəkdə veb saytlar və dini bilikləri etibarlı mənbələrdən öyrənməyə kömək edən tətbiqlər də düşünülə bilər.",
      },
    ],
  },
  en: {
    lang: "en",
    path: "/en/faq",
    title: "Frequently asked questions — Nibras Code",
    description:
      "What Nibras Code is, which apps it makes, and answers about Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, Nibras AI, Nibras Dev, and Nibras Apk.",
    keywords:
      "what is Nibras Code, Nibras Arabic, Nibras PDF, Nibras AI, Nibras Dev, Nibras Apk, APK Studio, is Nibras Code free",
    heading: "Frequently asked questions",
    intro: "Answers to the questions people ask most about Nibras Code, its apps, and this site.",
    more: "All questions",
    links: LINKS.en,
    items: [
      {
        id: "nedir",
        q: "What is Nibras Code?",
        a: "Nibras Code is an independent project working on apps that are simple, useful, and comfortable to use. The aim is to make everyday needs easier: a clear interface, only the features that matter, and no ads.",
      },
      {
        id: "sirket",
        q: "Is Nibras Code a company?",
        a: "No. Nibras Code is not a large company. It is an independent personal project started to turn useful ideas into apps.",
      },
      {
        id: "tetbiqler",
        q: "Which apps does Nibras Code make?",
        a: "Nibras Arabic is available now. Nibras PDF, Nibras Plans, and Nibras Docs are coming soon. Each app page shows the name, a short description, and the download status. App names stay the same in every language.",
      },
      {
        id: "arabic",
        q: "What is Nibras Arabic?",
        a: "Nibras Arabic is made so someone who already knows Azerbaijani can learn Arabic more easily. The app name stays Nibras Arabic. The slogan is «Ərəb dili - daha yaxın» — Arabic, a little closer. Version v1.1.0. What you learn is saved on the device.",
        points: [
          "The top bar has Settings and a day/night switch.",
          "Quick stats: learning streak, words learned (for example 12 / 5100), level (for example Beginner), and a daily goal (for example 50 XP, about 15 minutes).",
          "Word of the day can be played aloud. Open it with Word. Example: ظَلَّ — to continue.",
          "Start learning: 704 core verbs, 200 nouns, 100 adjectives, 200 number examples, and a mixed dictionary of 1204 words.",
          "On a word screen: search, favorite, and close. Past, present, and imperative forms, pronunciation, audio, and an Azerbaijani translation. All verb forms open from the root. Learned, Previous, and Next sit at the bottom.",
          "Dialogues: 186 phrases. Translations can be hidden. Each line has vowelled Arabic, audio, and an Azerbaijani translation.",
          "Tests: a regular set of 514 questions, a hard set, a 10-question speed round with 10 seconds each, and word matching.",
          "Flashcards: spaced repetition over 4400 words, hard words, all words, only new words, and favorites.",
          "Writing practice: 28 alphabet letters. Trace the grey letter with a finger. Clear, Previous, and Next are on screen.",
          "Statistics: total XP, verbs, dialogues, tests, current and longest streak, a 7-day XP chart, and achievements.",
        ],
      },
      {
        id: "pdf",
        q: "What is Nibras PDF?",
        a: "Nibras PDF is a mobile app for working with documents and images. Its line is Simple · Fast · Powerful. The bottom menu has Home and Tools. The top has the user profile, Premium experience, and Settings. The Tools section has 18 tools.",
        points: [
          "Merge: combine several PDFs into one file",
          "Split: separate pages into their own files",
          "Compress: reduce the file size",
          "Image to PDF: turn images into a PDF document",
          "PDF to image: save pages as images",
          "Rotate: turn the PDF left or right",
          "Protect: secure it with a password",
          "Watermark: add text or a mark to the document",
          "Manage pages: delete pages and change their order",
          "Scan: turn a document into a PDF with the camera",
          "Add signature: place an electronic signature on the PDF",
          "Recognize text: extract text from an image on the device",
          "Extract text from PDF: pull the text out of PDF pages",
          "PDF to Word: for editing the content",
          "PDF preview: view pages and zoom in",
          "Batch actions: process several PDFs at once",
          "Pick pages and extract: make a new file from selected pages",
          "Word to PDF: convert a DOCX file into a PDF",
        ],
        notes: [
          "The home screen lists recent documents, with the action and the date, such as Merge.",
          "The File is ready screen shows the new file name. Share, Save to folder, and Change folder are available. Drive is still Coming soon.",
          "App language: Azərbaycan dili, English, Türkçe, Русский, and العربية. The app lock can be a PIN or biometrics. You can reset the lock, hide names in recent documents, and ask for confirmation before sharing. Your files stay on your device.",
        ],
      },
      {
        id: "plans",
        q: "What is Nibras Plans?",
        a: "Nibras Plans is an app for keeping plans, sheets, and reports simple. It is coming soon.",
      },
      {
        id: "docs",
        q: "What is Nibras Docs?",
        a: "Nibras Docs is an app for writing, editing, and sharing documents. It is coming soon.",
      },
      {
        id: "pulsuz",
        q: "Are the apps free, and do they show ads?",
        a: "Not every app is paid. Free apps do not show ads. Where a Premium option exists, the main features can still be used without paying. Premium is a small monthly choice for people who use the app more intensively.",
      },
      {
        id: "yukleme",
        q: "Where can I download an app?",
        a: "A download link appears on that app’s page when it is ready. Empty links for Google Play, Huawei, the App Store, Galaxy Store, and Xiaomi are not shown.",
      },
      {
        id: "mexfilik",
        q: "Where is the privacy policy?",
        a: "Every app page has a Privacy policy button. The Nibras Arabic and Nibras PDF policies are published as their own pages on this site.",
      },
      {
        id: "diller",
        q: "Which languages is the site in?",
        a: "The site is in five languages: Azerbaijani, English, Turkish, Arabic, and Russian. The language control is at the top of the page. App names do not change. Only the information text changes.",
      },
      {
        id: "elaqe",
        q: "How can I contact Nibras Code?",
        a: "Use the contact page, or write to nibrascode@gmail.com.",
      },
      {
        id: "sayt",
        q: "What else is on the site besides the apps?",
        a: "There are resources, guides, and a programming section. Programming has separate pages for Python, JavaScript, Java, C#, TypeScript, HTML/CSS, and SQL.",
      },
      {
        id: "ai",
        q: "What is Nibras AI?",
        a: "Nibras AI is Nibras Code’s assistant at nibrascode.com/ai. You can ask a question, share an idea, write code, and edit an image. Conversations are kept for 24 hours.",
      },
      {
        id: "dev",
        q: "What is Nibras Dev?",
        a: "Nibras Dev is a code studio that runs in the browser at dev.nibrascode.com. You can write Python, HTML/CSS, JavaScript, SQL, C, C++, Java, PHP, Go, Rust, and other languages, open the result in a new page, and download the code to a phone or as a ZIP. Ctrl+Enter runs it, and the code is saved automatically.",
      },
      {
        id: "apk",
        q: "What is Nibras Apk?",
        a: "Nibras Apk, also called APK Studio, turns a website into an Android app at studio.nibrascode.com. You give a site link or a static ZIP that contains index.html, choose the name, icon, and package name, and the APK is built. No account, Android Studio, or coding knowledge is required. The finished APK is debug-signed for testing and direct install. Making harmful apps is not allowed.",
      },
      {
        id: "yeni",
        q: "When will new apps be released?",
        a: "No exact release date is announced. Nibras Arabic is ready. Nibras PDF, Nibras Plans, and Nibras Docs are coming soon. Websites, and apps that help people learn religious knowledge from reliable sources, may also be considered later.",
      },
    ],
  },
  tr: {
    lang: "tr",
    path: "/tr/faq",
    title: "Sık sorulan sorular — Nibras Code",
    description:
      "Nibras Code nedir, hangi uygulamaları vardır ve Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, Nibras AI, Nibras Dev ile Nibras Apk hakkında sorular.",
    keywords:
      "Nibras Code nedir, Nibras Arabic, Nibras PDF, Nibras AI, Nibras Dev, Nibras Apk, APK Studio, Nibras Code ücretsiz mi",
    heading: "Sık sorulan sorular",
    intro: "Nibras Code, uygulamaları ve site hakkında en çok sorulan soruların cevapları.",
    more: "Tüm sorular",
    links: LINKS.tr,
    items: [
      {
        id: "nedir",
        q: "Nibras Code nedir?",
        a: "Nibras Code; basit, faydalı ve kullanımı rahat uygulamalar üzerinde çalışan bağımsız bir projedir. Amaç günlük ihtiyacı daha kolay çözmektir: açık bir arayüz, gerçekten gereken işlevler ve reklamsız kullanım.",
      },
      {
        id: "sirket",
        q: "Nibras Code bir şirket mi?",
        a: "Hayır. Nibras Code büyük bir şirket değildir. Faydalı fikirleri uygulamalara dönüştürmek için başlatılmış bağımsız kişisel bir projedir.",
      },
      {
        id: "tetbiqler",
        q: "Nibras Code hangi uygulamaları hazırlıyor?",
        a: "Şu anda Nibras Arabic kullanıma açıktır. Nibras PDF, Nibras Plans ve Nibras Docs yakındadır. Her uygulamanın sayfasında adı, kısa bilgisi ve indirme durumu yer alır. Uygulama adları dil değişince aynı kalır.",
      },
      {
        id: "arabic",
        q: "Nibras Arabic nedir?",
        a: "Nibras Arabic, Azerbaycan Türkçesini bilen birinin Arapçayı daha kolay öğrenmesi için tasarlanmıştır. Uygulama adı Nibras Arabic olarak kalır. Sloganı «Ərəb dili - daha yaxın»dır: Arapça, biraz daha yakın. Sürüm v1.1.0. Öğrenilen bilgiler cihazda saklanır.",
        points: [
          "Üst barda Ayarlar ve gece/gündüz geçişi vardır.",
          "Hızlı istatistik: öğrenme serisi, öğrenilen sözcük sayısı (örneğin 12 / 5100), seviye (örneğin Başlangıç) ve günlük hedef (örneğin 50 XP, yaklaşık 15 dakika).",
          "Günün sözü sesli dinlenir. «Söze bak» ile açılır. Örnek: ظَلَّ — devam etmek.",
          "Öğrenmeye başla: 704 temel fiil, 200 isim, 100 sıfat, 200 sayı örneği ve 1204 sözcüklük karışık sözlük.",
          "Söz ekranında arama, favori ve kapat vardır. Geçmiş, şimdiki ve emir kipleri, okunuş, ses ve Azerbaycan Türkçesi çevirisi gösterilir. Tüm bablar köke göre açılır. Altta Öğrendim, Önceki ve Sonraki vardır.",
          "Diyaloglar: 186 ifade. Çeviriler gizlenebilir. Her ifadenin harekeli yazılışı, sesi ve çevirisi vardır.",
          "Testler: 514 soruluk normal test, zor sorular, her birine 10 saniye verilen 10 soruluk hızlı cevap ve sözcük eşleştirme.",
          "Kartlar: 4400 sözcükte aralıklı tekrar (SRS), zor sözcükler, tüm sözcükler, yalnızca öğrenilmemişler ve favoriler.",
          "Yazı alıştırması: 28 alfabe harfi. Gri harfin üzerinden parmakla yazılır. Temizle, Önceki ve Sonraki vardır.",
          "İstatistik: toplam XP, fiiller, diyaloglar, testler, güncel ve en uzun seri, son 7 günün XP grafiği ve başarılar.",
        ],
      },
      {
        id: "pdf",
        q: "Nibras PDF nedir?",
        a: "Nibras PDF belgeler ve görsellerle çalışmak için bir mobil uygulamadır. Sloganı: Sade · Hızlı · Güçlü. Alt menüde Ana sayfa ve Araçlar vardır. Üstte kullanıcı profili, Premium deneyim ve Ayarlar durur. Araçlar bölümünde 18 araç vardır.",
        points: [
          "Birleştir: birkaç PDF’i tek dosyada topla",
          "Böl: sayfaları ayrı dosyalara ayır",
          "Sıkıştır: dosya boyutunu küçült",
          "Görselden PDF: görselleri PDF belgesine çevir",
          "PDF’den görsel: sayfaları görsel olarak kaydet",
          "Döndür: PDF’i sola veya sağa çevir",
          "Koruma: parola ile güvene al",
          "Filigran: belgeye yazı veya işaret ekle",
          "Sayfaları yönet: sayfaları sil ve sırasını değiştir",
          "Tara: kamerayla belgeyi PDF’e çevir",
          "İmza ekle: PDF’e elektronik imza yerleştir",
          "Metni tanı: görselden metni cihazda çıkar",
          "PDF’den metin çıkar: PDF sayfalarındaki metni çıkar",
          "PDF’den Word: içeriği düzenlemek için",
          "PDF önizleme: sayfalara bak ve yakınlaştır",
          "Toplu işlemler: birkaç PDF’i aynı anda işle",
          "Sayfa seç ve çıkar: seçilen sayfalardan yeni dosya çıkar",
          "Word’dan PDF: DOCX dosyasını PDF belgesine çevir",
        ],
        notes: [
          "Ana ekranda son belgeler görünür: işlem türü ve tarih, örneğin Birleştir.",
          "Dosya hazır ekranında yeni dosyanın adı gösterilir. Paylaş, Klasöre kaydet ve Klasörü değiştir vardır. Drive şimdilik Yakında.",
          "Uygulama dili: Azərbaycan dili, English, Türkçe, Русский ve العربية. Uygulama kilidi PIN veya biyometrik olabilir. Kilidi sıfırlamak, son belgelerde adları gizlemek ve paylaşmadan önce onay istemek mümkündür. Dosyalarınız cihazınızda kalır.",
        ],
      },
      {
        id: "plans",
        q: "Nibras Plans nedir?",
        a: "Nibras Plans, plan, tablo ve raporları sade tutmak için hazırlanan uygulamadır. Şu anda yakındadır.",
      },
      {
        id: "docs",
        q: "Nibras Docs nedir?",
        a: "Nibras Docs, belge yazmak, düzenlemek ve paylaşmak için hazırlanan uygulamadır. Durumu yakındadır.",
      },
      {
        id: "pulsuz",
        q: "Uygulamalar ücretsiz mi, reklam var mı?",
        a: "Uygulamaların hepsi ücretli değildir. Ücretsiz uygulamalarda da reklam yoktur. Premium seçeneği olan uygulamada temel işlevler ödeme yapmadan kullanılabilir. Premium, uygulamayı daha yoğun kullananlar için küçük bir aylık seçenektir.",
      },
      {
        id: "yukleme",
        q: "Uygulama nereden indirilir?",
        a: "İndirme bağlantısı hazır olduğunda o uygulamanın sayfasında görünür. Google Play, Huawei, App Store, Galaxy Store ve Xiaomi için boş bağlantı gösterilmez.",
      },
      {
        id: "mexfilik",
        q: "Gizlilik politikası nerede?",
        a: "Her uygulamanın sayfasında Gizlilik politikası düğmesi vardır. Nibras Arabic ve Nibras PDF politikaları sitede ayrı sayfa olarak açıktır.",
      },
      {
        id: "diller",
        q: "Site hangi dillerde?",
        a: "Site beş dildedir: Azerbaycanca, English, Türkçe, العربية ve Русский. Dil seçimi sayfanın üstündedir. Uygulama adları değişmez, bilgi metinleri seçilen dile geçer.",
      },
      {
        id: "elaqe",
        q: "Nibras Code ile nasıl iletişim kurulur?",
        a: "İletişim sayfasından veya nibrascode@gmail.com adresinden yazabilirsiniz.",
      },
      {
        id: "sayt",
        q: "Sitede uygulamalardan başka ne var?",
        a: "Kaynaklar, rehberler ve programlama bölümleri vardır. Programlamada Python, JavaScript, Java, C#, TypeScript, HTML/CSS ve SQL için ayrı sayfalar vardır.",
      },
      {
        id: "ai",
        q: "Nibras AI nedir?",
        a: "Nibras AI, Nibras Code’un yapay zeka yardımcısıdır: nibrascode.com/ai. Soru sorulabilir, fikir verilebilir, kod yazılabilir ve görsel düzeltilebilir. Sohbetler 24 saat saklanır.",
      },
      {
        id: "dev",
        q: "Nibras Dev nedir?",
        a: "Nibras Dev tarayıcıda çalışan bir kod stüdyosudur: dev.nibrascode.com. Python, HTML/CSS, JavaScript, SQL, C, C++, Java, PHP, Go, Rust ve başka dillerde kod yazılır, sonuç yeni sayfada açılır, kod telefona veya ZIP olarak indirilir. Ctrl+Enter ile çalışır ve yazılan kod otomatik kaydedilir.",
      },
      {
        id: "apk",
        q: "Nibras Apk nedir?",
        a: "Nibras Apk, yani APK Studio, siteyi Android uygulamasına çeviren sistemdir: studio.nibrascode.com. Site bağlantısı veya index.html bulunan statik bir ZIP verilir, ad, ikon ve paket adı seçilir, sonra APK hazırlanır. Kayıt, Android Studio ve kod bilgisi gerekmez. Hazır APK test ve doğrudan kurulum için debug imzalıdır. Zararlı uygulama yapmak yasaktır.",
      },
      {
        id: "yeni",
        q: "Yeni uygulamalar ne zaman çıkacak?",
        a: "Kesin bir çıkış tarihi açıklanmaz. Nibras Arabic hazırdır. Nibras PDF, Nibras Plans ve Nibras Docs yakındadır. İleride web siteleri ve dini bilgileri güvenilir kaynaklardan öğrenmeye yardımcı uygulamalar da düşünülebilir.",
      },
    ],
  },
  ar: {
    lang: "ar",
    path: "/ar/faq",
    title: "أسئلة شائعة — Nibras Code",
    description:
      "ما هو Nibras Code، وما تطبيقاته، وإجابات عن Nibras Arabic وNibras PDF وNibras Plans وNibras Docs وNibras AI وNibras Dev وNibras Apk.",
    keywords:
      "ما هو Nibras Code, Nibras Arabic, Nibras PDF, Nibras AI, Nibras Dev, Nibras Apk, APK Studio, Nibras Code مجاني",
    heading: "أسئلة شائعة",
    intro: "إجابات عن أكثر الأسئلة حول Nibras Code وتطبيقاته وهذا الموقع.",
    more: "كل الأسئلة",
    links: LINKS.ar,
    items: [
      {
        id: "nedir",
        q: "ما هو Nibras Code؟",
        a: "Nibras Code مشروع مستقل يعمل على تطبيقات بسيطة ومفيدة وسهلة الاستخدام. الهدف تسهيل الحاجة اليومية: واجهة واضحة، والوظائف التي يحتاجها المستخدم فعلًا، ومن غير إعلانات.",
      },
      {
        id: "sirket",
        q: "هل Nibras Code شركة؟",
        a: "لا. Nibras Code ليست شركة كبيرة. هي مشروع شخصي مستقل بدأ لتحويل الأفكار المفيدة إلى تطبيقات.",
      },
      {
        id: "tetbiqler",
        q: "ما التطبيقات التي يُعدّها Nibras Code؟",
        a: "Nibras Arabic متاح الآن. Nibras PDF وNibras Plans وNibras Docs قريبًا. في صفحة كل تطبيق الاسم ووصف قصير وحالة التحميل. أسماء التطبيقات تبقى كما هي في كل اللغات.",
      },
      {
        id: "arabic",
        q: "ما هو Nibras Arabic؟",
        a: "Nibras Arabic مُعدّ لمن يعرف الأذربيجانية ليتعلّم العربية بسهولة أكبر. يبقى اسم التطبيق Nibras Arabic. شعاره «Ərəb dili - daha yaxın»، أي العربية أقرب. الإصدار v1.1.0. تُحفظ بيانات التعلّم على الجهاز.",
        points: [
          "في الشريط العلوي زر الإعدادات ومفتاح وضع الليل والنهار.",
          "إحصاء سريع: سلسلة التعلّم، وعدد الكلمات المتعلَّمة (مثل 12 / 5100)، والمستوى (مثل مبتدئ)، والهدف اليومي (مثل 50 XP، نحو 15 دقيقة).",
          "كلمة اليوم تُسمع صوتًا وتُفتح بزر «انظر إلى الكلمة». مثال: ظَلَّ — استمرّ.",
          "ابدأ التعلّم: 704 أفعال أساسية، و200 اسم، و100 صفة، و200 مثال للأعداد، وقاموس مختلط من 1204 كلمات.",
          "في شاشة الكلمة: بحث ومفضلة وإغلاق. صيغ الماضي والمضارع والأمر، والنطق والصوت والترجمة إلى الأذربيجانية. تُفتح الأبواب بحسب الجذر. وفي الأسفل تعلّمت والسابق والتالي.",
          "حوارات: 186 عبارة. يمكن إخفاء الترجمات. لكل عبارة كتابة مشكولة وصوت وترجمة.",
          "اختبارات: اختبار عادي من 514 سؤالًا، وأسئلة صعبة، وإجابة سريعة من 10 أسئلة بواقع 10 ثوانٍ لكل سؤال، ومطابقة الكلمات.",
          "بطاقات: تكرار متباعد لـ4400 كلمة، والكلمات الصعبة، وكل الكلمات، وغير المتعلَّمة فقط، والمفضلة.",
          "تدريب الكتابة: 28 حرفًا. يمرّ الإصبع فوق الحرف الرمادي. في الشاشة مسح والسابق والتالي.",
          "إحصاءات: مجموع XP، والأفعال، والحوارات، والاختبارات، والسلسلة الحالية والأطول، ورسم XP لآخر 7 أيام، والإنجازات.",
        ],
      },
      {
        id: "pdf",
        q: "ما هو Nibras PDF؟",
        a: "Nibras PDF تطبيق هاتف للعمل مع المستندات والصور. شعاره: بسيط · سريع · قوي. القائمة السفلية فيها الرئيسية والأدوات. في الأعلى ملف المستخدم وتجربة Premium والإعدادات. قسم الأدوات فيه 18 أداة.",
        points: [
          "دمج: اجمع عدة ملفات PDF في ملف واحد",
          "تقسيم: افصل الصفحات في ملفات مستقلة",
          "ضغط: صغّر حجم الملف",
          "من صورة إلى PDF: حوّل الصور إلى مستند PDF",
          "من PDF إلى صورة: احفظ الصفحات كصور",
          "تدوير: أدر ملف PDF يمينًا أو يسارًا",
          "حماية: أمّنه بكلمة مرور",
          "علامة مائية: أضف كتابة أو علامة إلى المستند",
          "إدارة الصفحات: احذف الصفحات وغيّر ترتيبها",
          "مسح: حوّل المستند إلى PDF بالكاميرا",
          "إضافة توقيع: ضع توقيعًا إلكترونيًا على PDF",
          "التعرّف على النص: استخرج النص من الصورة على الجهاز",
          "استخراج النص من PDF: أخرج النص من صفحات PDF",
          "من PDF إلى Word: لتحرير المحتوى",
          "معاينة PDF: اعرض الصفحات وكبّرها",
          "عمليات دفعة: عالج عدة ملفات PDF معًا",
          "اختر صفحات واستخرج: أخرج ملفًا جديدًا من الصفحات المختارة",
          "من Word إلى PDF: حوّل ملف DOCX إلى مستند PDF",
        ],
        notes: [
          "تعرض الشاشة الرئيسية المستندات الأخيرة، مع نوع العملية والتاريخ، مثل دمج.",
          "شاشة الملف جاهز تعرض اسم الملف الجديد. المشاركة والحفظ في مجلد وتغيير المجلد متاحة. Drive ما زال قريبًا.",
          "لغة التطبيق: Azərbaycan dili وEnglish وTürkçe وРусский والعربية. قفل التطبيق يمكن أن يكون PIN أو بصمة. يمكن إعادة تعيين القفل وإخفاء الأسماء في المستندات الأخيرة وطلب تأكيد قبل المشاركة. ملفاتك تبقى على جهازك.",
        ],
      },
      {
        id: "plans",
        q: "ما هو Nibras Plans؟",
        a: "Nibras Plans تطبيق لإبقاء الخطط والجداول والتقارير بسيطة. وهو قريبًا.",
      },
      {
        id: "docs",
        q: "ما هو Nibras Docs؟",
        a: "Nibras Docs تطبيق لكتابة المستندات وتحريرها ومشاركتها. حالته قريبًا.",
      },
      {
        id: "pulsuz",
        q: "هل التطبيقات مجانية، وهل فيها إعلانات؟",
        a: "ليست كل التطبيقات مدفوعة. ولا توجد إعلانات حتى في التطبيقات المجانية. وفي التطبيق الذي فيه Premium يمكن استخدام الوظائف الأساسية من غير دفع. Premium خيار شهري بسيط لمن يستخدم التطبيق بكثافة أكبر.",
      },
      {
        id: "yukleme",
        q: "من أين يُحمَّل التطبيق؟",
        a: "يظهر رابط التحميل في صفحة ذلك التطبيق عندما يكون جاهزًا. لا تُعرض روابط فارغة لـ Google Play أو Huawei أو App Store أو Galaxy Store أو Xiaomi.",
      },
      {
        id: "mexfilik",
        q: "أين سياسة الخصوصية؟",
        a: "في صفحة كل تطبيق زر لسياسة الخصوصية. سياستا Nibras Arabic وNibras PDF منشورتان كصفحتين مستقلتين في الموقع.",
      },
      {
        id: "diller",
        q: "بأي لغات الموقع؟",
        a: "الموقع بخمس لغات: الأذربيجانية والإنجليزية والتركية والعربية والروسية. اختيار اللغة في أعلى الصفحة. أسماء التطبيقات لا تتغير، ونصوص المعلومات وحدها تتغير.",
      },
      {
        id: "elaqe",
        q: "كيف يكون التواصل مع Nibras Code؟",
        a: "من صفحة التواصل، أو بالكتابة إلى nibrascode@gmail.com.",
      },
      {
        id: "sayt",
        q: "ماذا يوجد في الموقع غير التطبيقات؟",
        a: "توجد أقسام للموارد والأدلة والبرمجة. وفي البرمجة صفحات مستقلة عن Python وJavaScript وJava وC# وTypeScript وHTML/CSS وSQL.",
      },
      {
        id: "ai",
        q: "ما هو Nibras AI؟",
        a: "Nibras AI مساعد Nibras Code على nibrascode.com/ai. يمكن طرح سؤال، وإعطاء فكرة، وكتابة كود، وتعديل صورة. تُحفظ المحادثات لمدة 24 ساعة.",
      },
      {
        id: "dev",
        q: "ما هو Nibras Dev؟",
        a: "Nibras Dev استوديو كود يعمل في المتصفح على dev.nibrascode.com. يُكتب فيه Python وHTML/CSS وJavaScript وSQL وC وC++ وJava وPHP وGo وRust ولغات أخرى، وتُفتح النتيجة في صفحة جديدة، ويمكن تنزيل الكود إلى الهاتف أو كملف ZIP. يعمل بـ Ctrl+Enter، والكود يُحفظ تلقائيًا.",
      },
      {
        id: "apk",
        q: "ما هو Nibras Apk؟",
        a: "Nibras Apk، وهو APK Studio، نظام يحوّل الموقع إلى تطبيق أندرويد على studio.nibrascode.com. يُعطى رابط الموقع أو ملف ZIP ثابت فيه index.html، ثم يُختار الاسم والأيقونة واسم الحزمة، ويُبنى ملف APK. لا يلزم حساب ولا Android Studio ولا معرفة بالبرمجة. ملف APK الجاهز موقّع للتوقيع التجريبي من أجل الاختبار والتثبيت المباشر. صنع تطبيقات ضارة ممنوع.",
      },
      {
        id: "yeni",
        q: "متى تصدر التطبيقات الجديدة؟",
        a: "لا يُعلَن تاريخ إصدار محدد. Nibras Arabic جاهز. Nibras PDF وNibras Plans وNibras Docs قريبًا. وقد تُدرس لاحقًا مواقع ويب وتطبيقات تساعد على تعلّم العلوم الدينية من مصادر موثوقة.",
      },
    ],
  },
  ru: {
    lang: "ru",
    path: "/ru/faq",
    title: "Частые вопросы — Nibras Code",
    description:
      "Что такое Nibras Code, какие у него приложения, и ответы о Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, Nibras AI, Nibras Dev и Nibras Apk.",
    keywords:
      "что такое Nibras Code, Nibras Arabic, Nibras PDF, Nibras AI, Nibras Dev, Nibras Apk, APK Studio, Nibras Code бесплатно",
    heading: "Частые вопросы",
    intro: "Ответы на вопросы, которые чаще всего задают о Nibras Code, его приложениях и этом сайте.",
    more: "Все вопросы",
    links: LINKS.ru,
    items: [
      {
        id: "nedir",
        q: "Что такое Nibras Code?",
        a: "Nibras Code — независимый проект, который делает простые, полезные и удобные приложения. Цель — легче решать повседневные задачи: понятный интерфейс, только нужные функции и без рекламы.",
      },
      {
        id: "sirket",
        q: "Nibras Code — это компания?",
        a: "Нет. Nibras Code — не большая компания. Это независимый личный проект, начатый для того, чтобы превращать полезные идеи в приложения.",
      },
      {
        id: "tetbiqler",
        q: "Какие приложения делает Nibras Code?",
        a: "Сейчас доступен Nibras Arabic. Nibras PDF, Nibras Plans и Nibras Docs скоро появятся. На странице каждого приложения есть имя, короткое описание и статус загрузки. Названия приложений не меняются ни на одном языке.",
      },
      {
        id: "arabic",
        q: "Что такое Nibras Arabic?",
        a: "Nibras Arabic сделан для того, кто уже знает азербайджанский и хочет учить арабский легче. Название приложения остаётся Nibras Arabic. Девиз: «Ərəb dili - daha yaxın» — арабский ближе. Версия v1.1.0. Данные обучения хранятся на устройстве.",
        points: [
          "На верхней панели есть Настройки и переключатель дня и ночи.",
          "Краткая статистика: серия обучения, число выученных слов (например 12 / 5100), уровень (например Начальный) и дневная цель (например 50 XP, около 15 минут).",
          "Слово дня можно прослушать. Кнопка «Смотреть слово» открывает его. Пример: ظَلَّ — продолжать.",
          "Начать обучение: 704 основных глагола, 200 имён, 100 прилагательных, 200 примеров чисел и смешанный словарь из 1204 слов.",
          "На экране слова: поиск, избранное и закрыть. Прошедшее, настоящее и повелительное, произношение, звук и перевод на азербайджанский. Все породы открываются по корню. Внизу Выучил, Назад и Далее.",
          "Диалоги: 186 фраз. Переводы можно скрыть. У каждой фразы огласованное письмо, звук и перевод.",
          "Тесты: обычный набор из 514 вопросов, сложные вопросы, быстрый ответ из 10 вопросов по 10 секунд и соединение слов.",
          "Карточки: интервальное повторение 4400 слов, сложные слова, все слова, только новые и избранное.",
          "Письмо: 28 букв алфавита. Серую букву обводят пальцем. На экране Очистить, Назад и Далее.",
          "Статистика: общий XP, глаголы, диалоги, тесты, текущая и самая длинная серия, график XP за 7 дней и достижения.",
        ],
      },
      {
        id: "pdf",
        q: "Что такое Nibras PDF?",
        a: "Nibras PDF — мобильное приложение для работы с документами и изображениями. Его линия: Просто · Быстро · Сильно. В нижнем меню есть Главная и Инструменты. Сверху — профиль, Premium и Настройки. В разделе инструментов 18 средств.",
        points: [
          "Объединить: собрать несколько PDF в один файл",
          "Разделить: вынести страницы в отдельные файлы",
          "Сжать: уменьшить размер файла",
          "Из изображения в PDF: превратить изображения в документ PDF",
          "Из PDF в изображение: сохранить страницы как картинки",
          "Повернуть: повернуть PDF влево или вправо",
          "Защитить: закрыть паролем",
          "Водяной знак: добавить на документ текст или знак",
          "Управлять страницами: удалять страницы и менять их порядок",
          "Сканировать: превратить документ в PDF камерой",
          "Добавить подпись: поставить на PDF электронную подпись",
          "Распознать текст: извлечь текст из изображения на устройстве",
          "Извлечь текст из PDF: вынуть текст со страниц PDF",
          "Из PDF в Word: чтобы править содержание",
          "Просмотр PDF: смотреть страницы и увеличивать",
          "Пакетные действия: обработать несколько PDF сразу",
          "Выбрать страницы и извлечь: сделать новый файл из выбранных страниц",
          "Из Word в PDF: превратить файл DOCX в документ PDF",
        ],
        notes: [
          "На главном экране видны недавние документы: тип действия и дата, например Объединить.",
          "На экране Файл готов показано имя нового файла. Есть Поделиться, Сохранить в папку и Сменить папку. Drive пока Скоро.",
          "Язык приложения: Azərbaycan dili, English, Türkçe, Русский и العربية. Блокировка приложения может быть PIN или биометрией. Можно сбросить блокировку, скрыть имена в недавних документах и спрашивать подтверждение перед отправкой. Ваши файлы остаются на устройстве.",
        ],
      },
      {
        id: "plans",
        q: "Что такое Nibras Plans?",
        a: "Nibras Plans — приложение, чтобы планы, таблицы и отчёты оставались простыми. Сейчас оно скоро появится.",
      },
      {
        id: "docs",
        q: "Что такое Nibras Docs?",
        a: "Nibras Docs — приложение, чтобы писать, править и делиться документами. Его статус — скоро.",
      },
      {
        id: "pulsuz",
        q: "Приложения бесплатные и есть ли реклама?",
        a: "Не все приложения платные. В бесплатных приложениях нет рекламы. Там, где есть Premium, основные функции можно использовать без оплаты. Premium — небольшая месячная возможность для тех, кто пользуется приложением интенсивнее.",
      },
      {
        id: "yukleme",
        q: "Откуда скачать приложение?",
        a: "Ссылка на загрузку появляется на странице этого приложения, когда она готова. Пустые ссылки Google Play, Huawei, App Store, Galaxy Store и Xiaomi не показываются.",
      },
      {
        id: "mexfilik",
        q: "Где политика конфиденциальности?",
        a: "На странице каждого приложения есть кнопка политики конфиденциальности. Политики Nibras Arabic и Nibras PDF опубликованы на сайте отдельными страницами.",
      },
      {
        id: "diller",
        q: "На каких языках сайт?",
        a: "Сайт на пяти языках: азербайджанский, English, Türkçe, العربية и русский. Выбор языка находится сверху страницы. Названия приложений не меняются, меняются только информационные тексты.",
      },
      {
        id: "elaqe",
        q: "Как связаться с Nibras Code?",
        a: "Через страницу контакта или по адресу nibrascode@gmail.com.",
      },
      {
        id: "sayt",
        q: "Что ещё есть на сайте кроме приложений?",
        a: "Есть разделы ресурсов, руководств и программирования. В программировании отдельные страницы о Python, JavaScript, Java, C#, TypeScript, HTML/CSS и SQL.",
      },
      {
        id: "ai",
        q: "Что такое Nibras AI?",
        a: "Nibras AI — помощник Nibras Code на nibrascode.com/ai. Можно задать вопрос, предложить идею, написать код и поправить изображение. Разговоры хранятся 24 часа.",
      },
      {
        id: "dev",
        q: "Что такое Nibras Dev?",
        a: "Nibras Dev — студия кода в браузере на dev.nibrascode.com. Можно писать на Python, HTML/CSS, JavaScript, SQL, C, C++, Java, PHP, Go, Rust и других языках, открыть результат на новой странице и скачать код на телефон или как ZIP. Запуск — Ctrl+Enter, код сохраняется автоматически.",
      },
      {
        id: "apk",
        q: "Что такое Nibras Apk?",
        a: "Nibras Apk, он же APK Studio, превращает сайт в приложение Android на studio.nibrascode.com. Нужна ссылка на сайт или статический ZIP с index.html, затем выбираются имя, значок и имя пакета, и собирается APK. Регистрация, Android Studio и знание кода не нужны. Готовый APK подписан отладочной подписью для теста и прямой установки. Вредные приложения делать запрещено.",
      },
      {
        id: "yeni",
        q: "Когда выйдут новые приложения?",
        a: "Точная дата выхода не объявляется. Nibras Arabic уже готов. Nibras PDF, Nibras Plans и Nibras Docs скоро. Позже также могут рассматриваться сайты и приложения, которые помогают изучать религиозные знания из надёжных источников.",
      },
    ],
  },
};

export function faqPath(lang: Lang) {
  return FAQ[lang].path;
}

export function faqFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  return Object.values(FAQ).find((page) => page.path === path) ?? null;
}

export const FAQ_SLUGS: Record<string, string> = {
  nedir: "nibras-code",
  sirket: "nibras-code-layihe",
  tetbiqler: "nibras-code-tetbiqleri",
  arabic: "nibras-arabic",
  pdf: "nibras-pdf",
  plans: "nibras-plans",
  docs: "nibras-docs",
  pulsuz: "pulsuz-ve-reklam",
  yukleme: "tetbiq-yuklemek",
  mexfilik: "mexfilik-siyaseti",
  diller: "sayt-dilleri",
  elaqe: "elaqe",
  sayt: "resurslar-ve-proqramlasdirma",
  ai: "nibras-ai",
  dev: "nibras-dev",
  apk: "nibras-apk",
  yeni: "yeni-tetbiqler",
};

const TOPIC_HREF: Record<string, string> = {
  tetbiqler: "/apps",
  arabic: "/apps/nibras-arabic",
  pdf: "/apps/nibras-pdf",
  plans: "/apps/nibras-plans",
  docs: "/apps/nibras-docs",
  mexfilik: "/privacy/nibras-arabic",
  elaqe: "/contact",
  sayt: "/programming",
  ai: "https://www.nibrascode.com/ai",
  dev: "https://dev.nibrascode.com/",
  apk: "https://studio.nibrascode.com/",
};

export function faqAnswerText(item: FaqItem) {
  return [item.a, ...(item.points ?? []), ...(item.notes ?? [])].join(" ");
}

export function faqSlug(id: string) {
  return FAQ_SLUGS[id] ?? id;
}

export function faqTopicPath(lang: Lang, idOrSlug: string) {
  const slug = FAQ_SLUGS[idOrSlug] ?? idOrSlug;
  return `${faqPath(lang)}/${slug}`;
}

export function faqTopicHref(id: string) {
  return TOPIC_HREF[id] ?? null;
}

export function faqTopicFromPath(pathname: string) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : pathname;
  const match = path.match(/^\/(?:(en|tr|ar|ru)\/)?faq\/([^/]+)$/);
  if (!match) return null;
  const lang = (match[1] ?? "az") as Lang;
  const page = FAQ[lang];
  const item = page.items.find((entry) => faqSlug(entry.id) === match[2]);
  if (!item) return null;
  return { page, item };
}
