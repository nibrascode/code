import type { Lang } from "@/lib/i18n";

export type FaqItem = { q: string; a: string };

export type FaqCopy = {
  lang: Lang;
  path: string;
  title: string;
  description: string;
  keywords: string;
  heading: string;
  intro: string;
  items: readonly FaqItem[];
};

export const FAQ: Record<Lang, FaqCopy> = {
  az: {
    lang: "az",
    path: "/faq",
    title: "Tez-tez verilən suallar — Nibras Code",
    description:
      "Nibras Code nədir, hansı tətbiqləri hazırlayır, Nibras Arabic nədir və tətbiqlər pulsuzdurmu? Qısa cavablar.",
    keywords: "Nibras Code nədir, Nibras Arabic nədir, Nibras Code tətbiqləri, Nibras Code pulsuzdur",
    heading: "Tez-tez verilən suallar",
    intro: "Nibras Code haqqında ən çox verilən sualların qısa cavabları.",
    items: [
      {
        q: "Nibras Code nədir?",
        a: "Nibras Code sadə, faydalı və istifadəsi rahat tətbiqlər üzərində çalışan müstəqil layihədir. Məqsəd gündəlik ehtiyacı daha rahat həll etməkdir: aydın interfeys, həqiqətən lazım olan funksiyalar və reklam olmadan.",
      },
      {
        q: "Nibras Code hansı tətbiqləri hazırlayır?",
        a: "Hazırda Nibras Arabic istifadəyə açıqdır. Nibras PDF və Nibras Plans tezliklə, Nibras Docs isə hazırlanma mərhələsindədir. Hər tətbiqin öz səhifəsində qısa məlumat və yükləmə vəziyyəti göstərilir.",
      },
      {
        q: "Nibras Arabic nədir?",
        a: "Nibras Arabic ərəb dilini sadə və praktik öyrətmək üçün hazırlanmış mobil tətbiqdir. Təkcə hərflər deyil: isimlər, feillər, sifətlər və saylar, dialoqlar, testlər, flash kartlar və ətraflı feil babları bir yerdədir.",
      },
      {
        q: "Tətbiqlər pulsuzdur?",
        a: "Tətbiqlərin hamısı pullu deyil. Pulsuz tətbiqlərdə də reklam yoxdur. Premium sistemi olan tətbiqlərdə əsas funksiyaları pul ödəmədən istifadə etmək mümkündür. Premium daha intensiv istifadə edənlər üçün kiçik aylıq seçim kimi nəzərdə tutulur.",
      },
      {
        q: "Nibras Code şirkətdirmi?",
        a: "Xeyr. Nibras Code böyük şirkət deyil. Faydalı ideyaları tətbiqlərə çevirmək üçün başlanmış müstəqil şəxsi layihədir.",
      },
      {
        q: "Yeni tətbiqlər nə vaxt çıxacaq?",
        a: "Dəqiq çıxış tarixi elan olunmur. Nibras Arabic hazırdır. Nibras PDF və Nibras Plans tezliklə, Nibras Docs isə hazırlanır. Gələcəkdə dini bilikləri etibarlı mənbələrdən öyrənməyə kömək edən tətbiqlər də düşünülür.",
      },
    ],
  },
  en: {
    lang: "en",
    path: "/en/faq",
    title: "Frequently asked questions — Nibras Code",
    description:
      "What Nibras Code is, which apps it makes, what Nibras Arabic does, and whether the apps are free.",
    keywords: "what is Nibras Code, what is Nibras Arabic, Nibras Code apps, is Nibras Code free",
    heading: "Frequently asked questions",
    intro: "Short answers to the questions people ask most about Nibras Code.",
    items: [
      {
        q: "What is Nibras Code?",
        a: "Nibras Code is an independent project working on apps that are simple, useful, and comfortable to use. The aim is to make everyday needs easier: a clear interface, only the features that matter, and no ads.",
      },
      {
        q: "Which apps does Nibras Code make?",
        a: "Nibras Arabic is available now. Nibras PDF and Nibras Plans are coming soon, and Nibras Docs is in preparation. Each app page shows a short description and the current download status.",
      },
      {
        q: "What is Nibras Arabic?",
        a: "Nibras Arabic is a mobile app for learning Arabic in a simple, practical way. It is not only letters. Nouns, verbs, adjectives and numbers, dialogues, tests, flashcards, and detailed verb forms are in one place.",
      },
      {
        q: "Are the apps free?",
        a: "Not every app is paid. Free apps do not show ads. Where a Premium option exists, the main features can still be used without paying. Premium is a small monthly choice for people who use the app more intensively.",
      },
      {
        q: "Is Nibras Code a company?",
        a: "No. Nibras Code is not a large company. It is an independent personal project started to turn useful ideas into apps.",
      },
      {
        q: "When will new apps be released?",
        a: "No exact release date is announced. Nibras Arabic is ready. Nibras PDF and Nibras Plans are coming soon, and Nibras Docs is in preparation. Apps that help people learn religious knowledge from reliable sources are also being considered.",
      },
    ],
  },
  ru: {
    lang: "ru",
    path: "/ru/faq",
    title: "Частые вопросы — Nibras Code",
    description:
      "Что такое Nibras Code, какие приложения он делает, что такое Nibras Arabic и бесплатны ли приложения.",
    keywords: "что такое Nibras Code, что такое Nibras Arabic, приложения Nibras Code, Nibras Code бесплатно",
    heading: "Частые вопросы",
    intro: "Короткие ответы на вопросы, которые чаще всего задают о Nibras Code.",
    items: [
      {
        q: "Что такое Nibras Code?",
        a: "Nibras Code — независимый проект, который делает простые, полезные и удобные приложения. Цель — легче решать повседневные задачи: понятный интерфейс, только нужные функции и без рекламы.",
      },
      {
        q: "Какие приложения делает Nibras Code?",
        a: "Сейчас доступен Nibras Arabic. Nibras PDF и Nibras Plans скоро появятся, а Nibras Docs находится в подготовке. На странице каждого приложения есть короткое описание и статус загрузки.",
      },
      {
        q: "Что такое Nibras Arabic?",
        a: "Nibras Arabic — мобильное приложение, чтобы учить арабский просто и практично. Это не только буквы. В одном месте есть имена, глаголы, прилагательные и числительные, диалоги, тесты, карточки и подробные породы глагола.",
      },
      {
        q: "Приложения бесплатные?",
        a: "Не все приложения платные. В бесплатных приложениях нет рекламы. Там, где есть Premium, основные функции можно использовать без оплаты. Premium — небольшая месячная возможность для тех, кто пользуется приложением интенсивнее.",
      },
      {
        q: "Nibras Code — это компания?",
        a: "Нет. Nibras Code — не большая компания. Это независимый личный проект, начатый для того, чтобы превращать полезные идеи в приложения.",
      },
      {
        q: "Когда выйдут новые приложения?",
        a: "Точная дата выхода не объявляется. Nibras Arabic уже готов. Nibras PDF и Nibras Plans скоро, Nibras Docs готовится. В будущем также рассматриваются приложения, которые помогают изучать религиозные знания из надёжных источников.",
      },
    ],
  },
  ar: {
    lang: "ar",
    path: "/ar/faq",
    title: "أسئلة شائعة — Nibras Code",
    description: "ما هو Nibras Code، وما التطبيقات التي يُعدّها، وما هو Nibras Arabic، وهل التطبيقات مجانية.",
    keywords: "ما هو Nibras Code, ما هو Nibras Arabic, تطبيقات Nibras Code, Nibras Code مجاني",
    heading: "أسئلة شائعة",
    intro: "إجابات قصيرة عن أكثر الأسئلة حول Nibras Code.",
    items: [
      {
        q: "ما هو Nibras Code؟",
        a: "Nibras Code مشروع مستقل يعمل على تطبيقات بسيطة ومفيدة وسهلة الاستخدام. الهدف تسهيل الحاجة اليومية: واجهة واضحة، والوظائف التي يحتاجها المستخدم فعلًا، ومن غير إعلانات.",
      },
      {
        q: "ما التطبيقات التي يُعدّها Nibras Code؟",
        a: "Nibras Arabic متاح الآن. Nibras PDF وNibras Plans قريبًا، وNibras Docs قيد الإعداد. في صفحة كل تطبيق وصف قصير وحالة التحميل.",
      },
      {
        q: "ما هو Nibras Arabic؟",
        a: "Nibras Arabic تطبيق هاتف لتعلّم العربية بطريقة بسيطة وعملية. ليس الحروف فقط. فيه الاسم والفعل والصفة والعدد، والحوارات والاختبارات والبطاقات وأبواب الفعل المفصّلة في مكان واحد.",
      },
      {
        q: "هل التطبيقات مجانية؟",
        a: "ليست كل التطبيقات مدفوعة. ولا توجد إعلانات حتى في التطبيقات المجانية. وفي التطبيقات التي فيها Premium يمكن استخدام الوظائف الأساسية من غير دفع. Premium خيار شهري بسيط لمن يستخدم التطبيق بكثافة أكبر.",
      },
      {
        q: "هل Nibras Code شركة؟",
        a: "لا. Nibras Code ليست شركة كبيرة. هي مشروع شخصي مستقل بدأ لتحويل الأفكار المفيدة إلى تطبيقات.",
      },
      {
        q: "متى تصدر التطبيقات الجديدة؟",
        a: "لا يُعلَن تاريخ إصدار محدد. Nibras Arabic جاهز. Nibras PDF وNibras Plans قريبًا، وNibras Docs قيد الإعداد. وفي المستقبل تُدرس تطبيقات تساعد على تعلّم العلوم الدينية من مصادر موثوقة.",
      },
    ],
  },
  tr: {
    lang: "tr",
    path: "/tr/faq",
    title: "Sık sorulan sorular — Nibras Code",
    description:
      "Nibras Code nedir, hangi uygulamaları hazırlar, Nibras Arabic nedir ve uygulamalar ücretsiz mi?",
    keywords: "Nibras Code nedir, Nibras Arabic nedir, Nibras Code uygulamaları, Nibras Code ücretsiz mi",
    heading: "Sık sorulan sorular",
    intro: "Nibras Code hakkında en çok sorulan soruların kısa cevapları.",
    items: [
      {
        q: "Nibras Code nedir?",
        a: "Nibras Code; basit, faydalı ve kullanımı rahat uygulamalar üzerinde çalışan bağımsız bir projedir. Amaç günlük ihtiyacı daha kolay çözmektir: açık bir arayüz, gerçekten gereken işlevler ve reklamsız kullanım.",
      },
      {
        q: "Nibras Code hangi uygulamaları hazırlıyor?",
        a: "Şu anda Nibras Arabic kullanıma açıktır. Nibras PDF ve Nibras Plans yakında, Nibras Docs ise hazırlık aşamasındadır. Her uygulamanın sayfasında kısa bilgi ve indirme durumu yer alır.",
      },
      {
        q: "Nibras Arabic nedir?",
        a: "Nibras Arabic, Arapçayı basit ve pratik biçimde öğretmek için hazırlanmış bir mobil uygulamadır. Yalnızca harfler değil; isimler, fiiller, sıfatlar ve sayılar, diyaloglar, testler, kartlar ve ayrıntılı fiil babları bir aradadır.",
      },
      {
        q: "Uygulamalar ücretsiz mi?",
        a: "Uygulamaların hepsi ücretli değildir. Ücretsiz uygulamalarda da reklam yoktur. Premium seçeneği olan uygulamalarda temel işlevler ödeme yapmadan kullanılabilir. Premium, uygulamayı daha yoğun kullananlar için küçük bir aylık seçenektir.",
      },
      {
        q: "Nibras Code bir şirket mi?",
        a: "Hayır. Nibras Code büyük bir şirket değildir. Faydalı fikirleri uygulamalara dönüştürmek için başlatılmış bağımsız kişisel bir projedir.",
      },
      {
        q: "Yeni uygulamalar ne zaman çıkacak?",
        a: "Kesin bir çıkış tarihi açıklanmaz. Nibras Arabic hazırdır. Nibras PDF ve Nibras Plans yakında, Nibras Docs ise hazırlanıyor. İleride dini bilgileri güvenilir kaynaklardan öğrenmeye yardımcı olacak uygulamalar da düşünülmektedir.",
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
