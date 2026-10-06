import type { Lang } from "@/lib/i18n";

export type FaqItem = { id: string; q: string; a: string };
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
        a: "Nibras Arabic ərəb dilini sadə və praktik öyrətmək üçün hazırlanmış mobil tətbiqdir. Təkcə hərflər deyil: isimlər, feillər, sifətlər və saylar, dialoqlar, testlər, flash kartlar və ətraflı feil babları bir yerdədir.",
      },
      {
        id: "pdf",
        q: "Nibras PDF nədir?",
        a: "Nibras PDF sənədlər və şəkillərlə işləmək üçün hazırlanan mobil tətbiqdir. Birləşdirmə, bölmə, sıxışdırma və gündəlik PDF işləri üçün nəzərdə tutulub. Hazırda tezliklədir.",
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
        a: "Nibras Arabic is a mobile app for learning Arabic in a simple, practical way. It is not only letters. Nouns, verbs, adjectives and numbers, dialogues, tests, flashcards, and detailed verb forms are in one place.",
      },
      {
        id: "pdf",
        q: "What is Nibras PDF?",
        a: "Nibras PDF is a mobile app for working with documents and images. It is meant for merge, split, compress, and everyday PDF work. It is coming soon.",
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
        a: "Nibras Arabic, Arapçayı basit ve pratik biçimde öğretmek için hazırlanmış bir mobil uygulamadır. Yalnızca harfler değil; isimler, fiiller, sıfatlar ve sayılar, diyaloglar, testler, kartlar ve ayrıntılı fiil babları bir aradadır.",
      },
      {
        id: "pdf",
        q: "Nibras PDF nedir?",
        a: "Nibras PDF, belgeler ve görsellerle çalışmak için hazırlanan bir mobil uygulamadır. Birleştirme, bölme, sıkıştırma ve günlük PDF işleri için düşünülmüştür. Şu anda yakındadır.",
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
        a: "Nibras Arabic تطبيق هاتف لتعلّم العربية بطريقة بسيطة وعملية. ليس الحروف فقط. فيه الاسم والفعل والصفة والعدد، والحوارات والاختبارات والبطاقات وأبواب الفعل المفصّلة في مكان واحد.",
      },
      {
        id: "pdf",
        q: "ما هو Nibras PDF؟",
        a: "Nibras PDF تطبيق هاتف للعمل مع المستندات والصور. أُعدّ للدمج والتقسيم والضغط وأعمال PDF اليومية. وهو قريبًا.",
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
        a: "Nibras Arabic — мобильное приложение, чтобы учить арабский просто и практично. Это не только буквы. В одном месте есть имена, глаголы, прилагательные и числительные, диалоги, тесты, карточки и подробные породы глагола.",
      },
      {
        id: "pdf",
        q: "Что такое Nibras PDF?",
        a: "Nibras PDF — мобильное приложение для работы с документами и изображениями. Оно задумано для объединения, разделения, сжатия и повседневной работы с PDF. Сейчас оно скоро появится.",
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
