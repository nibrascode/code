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
      "Nibras Code nədir, hansı tətbiqləri var, Nibras Arabic, Nibras PDF, Nibras Plans və Nibras Docs haqqında suallar. Pulsuz istifadə, reklam, məxfilik və əlaqə.",
    keywords:
      "Nibras Code nədir, Nibras Arabic nədir, Nibras PDF, Nibras Plans, Nibras Docs, Nibras Code pulsuzdur, Nibras Code əlaqə",
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
        id: "diger",
        q: "Nibras AI, Nibras Dev və Nibras Apk nədir?",
        a: "Bunlar ana səhifədəki əlavə bölmələrdir. Nibras AI saytdakı səhifədir. Nibras Dev dev.nibrascode.com ünvanındadır. Nibras Apk studio.nibrascode.com ünvanındadır.",
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
      "What Nibras Code is, which apps it makes, and answers about Nibras Arabic, Nibras PDF, Nibras Plans, and Nibras Docs. Free use, ads, privacy, and contact.",
    keywords:
      "what is Nibras Code, what is Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, is Nibras Code free, Nibras Code contact",
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
        id: "diger",
        q: "What are Nibras AI, Nibras Dev, and Nibras Apk?",
        a: "They are extra sections on the homepage. Nibras AI is a page on this site. Nibras Dev is at dev.nibrascode.com. Nibras Apk is at studio.nibrascode.com.",
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
      "Nibras Code nedir, hangi uygulamaları vardır, Nibras Arabic, Nibras PDF, Nibras Plans ve Nibras Docs hakkında sorular. Ücretsiz kullanım, reklam, gizlilik ve iletişim.",
    keywords:
      "Nibras Code nedir, Nibras Arabic nedir, Nibras PDF, Nibras Plans, Nibras Docs, Nibras Code ücretsiz mi, Nibras Code iletişim",
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
        id: "diger",
        q: "Nibras AI, Nibras Dev ve Nibras Apk nedir?",
        a: "Bunlar ana sayfadaki ek bölümlerdir. Nibras AI sitedeki bir sayfadır. Nibras Dev dev.nibrascode.com adresindedir. Nibras Apk studio.nibrascode.com adresindedir.",
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
      "ما هو Nibras Code، وما تطبيقاته، وإجابات عن Nibras Arabic وNibras PDF وNibras Plans وNibras Docs. الاستخدام المجاني، والإعلانات، والخصوصية، والتواصل.",
    keywords:
      "ما هو Nibras Code, ما هو Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, Nibras Code مجاني, تواصل Nibras Code",
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
        id: "diger",
        q: "ما هي Nibras AI وNibras Dev وNibras Apk؟",
        a: "هذه أقسام إضافية في الصفحة الرئيسية. Nibras AI صفحة في هذا الموقع. Nibras Dev على dev.nibrascode.com. وNibras Apk على studio.nibrascode.com.",
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
      "Что такое Nibras Code, какие у него приложения, и ответы о Nibras Arabic, Nibras PDF, Nibras Plans и Nibras Docs. Бесплатное использование, реклама, конфиденциальность и контакт.",
    keywords:
      "что такое Nibras Code, что такое Nibras Arabic, Nibras PDF, Nibras Plans, Nibras Docs, Nibras Code бесплатно, контакт Nibras Code",
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
        id: "diger",
        q: "Что такое Nibras AI, Nibras Dev и Nibras Apk?",
        a: "Это дополнительные разделы на главной странице. Nibras AI — страница на этом сайте. Nibras Dev находится на dev.nibrascode.com. Nibras Apk — на studio.nibrascode.com.",
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
