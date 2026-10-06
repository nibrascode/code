import { LANGS, type Lang } from "@/lib/i18n";
import { isSplitPage, localeHref, stripLocalePrefix } from "@/lib/locale-path";
import { faqAnswerText, faqFromPath, faqPath, faqTopicFromPath, faqTopicPath } from "@/lib/faq";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import { findProgramming, PROGRAMMING } from "@/lib/programming";
import { CODE_SAMPLE_SEO, isCodeSampleChild, isCodeSampleSlug } from "@/lib/code-samples";
import { findProgrammingLocale, programmingFromPath, programmingLocalePath } from "@/lib/programming-locales";
import { RESURSLAR } from "@/lib/resurslar";
import { findResourceTopic, resourceArticleFromPath } from "@/lib/resource-topics";
import { RU_RESOURCES } from "@/lib/ru-resources";

export const SITE = "https://www.nibrascode.com";

type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
  features?: readonly string[];
};

type Copy = Record<Exclude<Lang, "tr">, PageSeo> & Partial<Record<Lang, PageSeo>>;

function seoLeaf(az: string, en: string, ar: string, ru: string): Copy {
  return {
    az: { title: `${az} — Nibras Code`, description: az },
    en: { title: `${en} — Nibras Code`, description: en },
    ar: { title: `${ar} — Nibras Code`, description: ar },
    ru: { title: `${ru} — Nibras Code`, description: ru },
  };
}

const PAGES: Record<string, Copy> = {
  "/": {
    az: {
      title: "Nibras Code — sadə tətbiqlər, real fayda",
      description:
        "Nibras Code müstəqil layihədir. Gündəlik həyatı və öyrənməni asanlaşdıran sadə mobil tətbiqlər hazırlayır: Nibras Arabic, Nibras PDF, Nibras Docs və Nibras Plans.",
    },
    en: {
      title: "Nibras Code — simple apps, real benefit",
      description:
        "Nibras Code is an independent project making simple, useful mobile apps: Nibras Arabic, Nibras PDF, Nibras Docs, and Nibras Plans.",
    },
    ar: {
      title: "Nibras Code — تطبيقات بسيطة، فائدة حقيقية",
      description:
        "Nibras Code مشروع مستقل يُعدّ تطبيقات هاتف بسيطة ومفيدة: Nibras Arabic وNibras PDF وNibras Docs وNibras Plans.",
    },
    ru: {
      title: "Nibras Code — простые приложения, реальная польза",
      description:
        "Nibras Code — независимый проект. Простые мобильные приложения: Nibras Arabic, Nibras PDF, Nibras Docs и Nibras Plans.",
    },
  },
  "/about": {
    az: {
      title: "Biz kimik — Nibras Code",
      description:
        "Nibras Code böyük şirkət deyil. Faydalı ideyaları sadə tətbiqlərə çevirən müstəqil şəxsi layihədir. Hazırda Nibras Arabic mövcuddur.",
    },
    en: {
      title: "Who we are — Nibras Code",
      description:
        "Nibras Code is not a large company. It is an independent personal project turning useful ideas into simple apps. Nibras Arabic is available now.",
    },
    ar: {
      title: "من نحن — Nibras Code",
      description:
        "Nibras Code ليست شركة كبيرة. هي مشروع شخصي مستقل يحوّل الأفكار المفيدة إلى تطبيقات بسيطة. تطبيق Nibras Arabic متاح الآن.",
    },
    ru: {
      title: "Кто мы — Nibras Code",
      description:
        "Nibras Code — не большая компания, а независимый личный проект, который превращает полезные идеи в простые приложения. Сейчас доступен Nibras Arabic.",
    },
  },
  "/why": {
    az: {
      title: "Niyə Nibras Code — sadə və faydalı tətbiqlər",
      description:
        "Nibras Code sadə, faydalı və istifadəsi rahat tətbiqlər üzərində çalışan müstəqil layihədir. Məqsəd çox funksiya deyil, real fayda verməkdir.",
    },
    en: {
      title: "Why Nibras Code — simple, useful apps",
      description:
        "Nibras Code is an independent project focused on apps that are simple, useful, and comfortable to use. The goal is real benefit, not more features.",
    },
    ar: {
      title: "لماذا Nibras Code — تطبيقات بسيطة ومفيدة",
      description:
        "Nibras Code مشروع مستقل يعمل على تطبيقات بسيطة ومفيدة وسهلة الاستخدام. الهدف فائدة حقيقية، لا كثرة الخصائص.",
    },
    ru: {
      title: "Почему Nibras Code — простые и полезные приложения",
      description:
        "Nibras Code — независимый проект простых, полезных и удобных приложений. Цель — реальная польза, а не лишние функции.",
    },
  },
  "/unutma": {
    az: {
      title: "Unutma — Nibras Code xatırlatmaları",
      description:
        "Qısa xatırlatmalar: müvəffəqiyyət Allahdandır, çalışmaqla səbəblərə sarılmaq və axirəti unutmamaq haqqında.",
    },
    en: {
      title: "Remember — reminders from Nibras Code",
      description:
        "Short reminders: success is from Allah alone, take the means, and do not forget the hereafter.",
    },
    ar: {
      title: "تذكّر — تذكيرات Nibras Code",
      description:
        "تذكيرات قصيرة: التوفيق من الله وحده، والأخذ بالأسباب، وعدم نسيان الآخرة.",
    },
    ru: {
      title: "Помни — напоминания Nibras Code",
      description:
        "Короткие напоминания: успех только от Аллаха, держаться причин и не забывать вечную жизнь.",
    },
  },
  "/apps/nibras-arabic": {
    az: {
      title: "Nibras Arabic — ərəb dilini sadə öyrən",
      description:
        "Nibras Arabic Azərbaycan dilini bilən birinin ərəb dilini daha asan öyrənməsi üçündür. Şüar: Ərəb dili - daha yaxın. 704 feil, dialoqlar, testlər, 4400 kart və yazı məşqi. Nibras Code layihəsidir.",
      features: [
        "704 feil, 200 isim, 100 sifət və saylar",
        "186 dialoq, testlər və 4400 flash kart",
        "28 hərf yazı məşqi. Məlumat cihazda qalır",
      ],
    },
    en: {
      title: "Nibras Arabic — learn Arabic simply",
      description:
        "Nibras Arabic helps someone who knows Azerbaijani learn Arabic more easily. Slogan: Ərəb dili - daha yaxın. 704 verbs, dialogues, tests, 4400 cards, and writing practice. An app by Nibras Code.",
      features: [
        "704 verbs, 200 nouns, 100 adjectives, and numbers",
        "186 dialogues, tests, and 4400 flashcards",
        "Writing practice for 28 letters. Data stays on the device",
      ],
    },
    tr: {
      title: "Nibras Arabic — Arapçayı sade öğren",
      description:
        "Nibras Arabic, Azerbaycan Türkçesini bilen birinin Arapçayı daha kolay öğrenmesi içindir. Slogan: Ərəb dili - daha yaxın. 704 fiil, diyaloglar, testler, 4400 kart ve yazı alıştırması. Nibras Code projesidir.",
      features: [
        "704 fiil, 200 isim, 100 sıfat ve sayılar",
        "186 diyalog, testler ve 4400 kart",
        "28 harf yazı alıştırması. Bilgi cihazda kalır",
      ],
    },
    ar: {
      title: "Nibras Arabic — تعلّم العربية ببساطة",
      description:
        "Nibras Arabic لمن يعرف الأذربيجانية ليتعلّم العربية بسهولة أكبر. الشعار: Ərəb dili - daha yaxın. 704 أفعال وحوارات واختبارات و4400 بطاقة وتدريب كتابة. من مشروع Nibras Code.",
      features: ["704 أفعال و200 اسم و100 صفة", "186 حوارًا واختبارات و4400 بطاقة", "تدريب كتابة 28 حرفًا. البيانات على الجهاز"],
    },
    ru: {
      title: "Nibras Arabic — учите арабский просто",
      description:
        "Nibras Arabic помогает знающему азербайджанский учить арабский легче. Девиз: Ərəb dili - daha yaxın. 704 глагола, диалоги, тесты, 4400 карточек и письмо. Проект Nibras Code.",
      features: [
        "704 глагола, 200 имён, 100 прилагательных и числа",
        "186 диалогов, тесты и 4400 карточек",
        "Письмо 28 букв. Данные остаются на устройстве",
      ],
    },
  },
  "/apps/nibras-pdf": {
    az: {
      title: "Nibras PDF — PDF və şəkillərlə iş",
      description:
        "Nibras PDF telefonunuzda PDF və şəkillərlə işləmək üçün Android tətbiqidir. 18 alət var: birləşdir, böl, sıxışdır, çevir, qoru, imza, skan, Word və mətn. Fayllar cihazınızda qalır. Nibras Code layihəsidir.",
      features: ["PDF birləşdirmək və bölmək", "Sıxmaq, döndərmək və imzalamaq", "Sənəd skanı və şəkillər"],
    },
    en: {
      title: "Nibras PDF — PDFs and images on your phone",
      description:
        "Nibras PDF is an Android app for working with PDFs and images on your phone. It has 18 tools: merge, split, compress, rotate, protect, sign, scan, Word, and text. Your files stay on your device. An app by Nibras Code.",
      features: ["Merge and split PDFs", "Compress, rotate, and sign", "Scan documents and images"],
    },
    ar: {
      title: "Nibras PDF — ملفات PDF والصور على هاتفك",
      description:
        "Nibras PDF تطبيق أندرويد للعمل مع ملفات PDF والصور على هاتفك. فيه 18 أداة: دمج وتقسيم وضغط وتدوير وحماية وتوقيع ومسح وWord ونص. ملفاتك تبقى على جهازك. من مشروع Nibras Code.",
      features: ["دمج وتقسيم PDF", "ضغط وتدوير وتوقيع", "مسح المستندات والصور"],
    },
    ru: {
      title: "Nibras PDF — PDF и изображения на телефоне",
      description:
        "Nibras PDF — приложение для Android, чтобы работать с PDF и изображениями на телефоне. В нём 18 инструментов: объединение, разделение, сжатие, поворот, защита, подпись, скан, Word и текст. Ваши файлы остаются на устройстве. Проект Nibras Code.",
      features: ["Объединять и делить PDF", "Сжимать, поворачивать и подписывать", "Скан документов и изображений"],
    },
  },
  "/apps/nibras-docs": {
    az: {
      title: "Nibras Docs — sənəd yaz və paylaş",
      description:
        "Nibras Docs sənədlərlə sakit işləmək üçün Android tətbiqidir. Yazın, sadə redaktə edin və gündəlik paylaşın — bir yerdə, artıq səs-küy olmadan. Nibras Code layihəsidir.",
      features: ["Sənəd yazmaq", "Sadə redaktə", "Gündəlik paylaşım"],
    },
    en: {
      title: "Nibras Docs — write and share documents",
      description:
        "Nibras Docs is an Android app for calm work with documents. Write, edit simply, and share for everyday use — in one place, without extra noise. An app by Nibras Code.",
      features: ["Write documents", "Simple editing", "Everyday sharing"],
    },
    ar: {
      title: "Nibras Docs — اكتب المستندات وشاركها",
      description:
        "Nibras Docs تطبيق أندرويد للعمل الهادئ مع المستندات. اكتب وحرّر ببساطة وشارك في الاستخدام اليومي، في مكان واحد بلا ضجيج. من مشروع Nibras Code.",
      features: ["كتابة المستندات", "تحرير بسيط", "مشاركة يومية"],
    },
    ru: {
      title: "Nibras Docs — пишите документы и делитесь",
      description:
        "Nibras Docs — приложение для Android для спокойной работы с документами. Пишите, просто правьте и делитесь в повседневных делах — в одном месте, без лишнего шума. Проект Nibras Code.",
      features: ["Писать документы", "Простое редактирование", "Повседневный обмен"],
    },
  },
  "/apps/nibras-plans": {
    az: {
      title: "Nibras Plans — plan, cədvəl və hesabat",
      description:
        "Nibras Plans planları, cədvəlləri və hesabatları sadə saxlayan Android tətbiqidir. Plan qurun, gedişi izləyin və aydın hesabat alın. Gündəlik iş üçün nəzərdə tutulub. Nibras Code layihəsidir.",
      features: ["Plan qurmaq", "Sadə izləmə", "Aydın hesabatlar"],
    },
    en: {
      title: "Nibras Plans — plans, sheets, and reports",
      description:
        "Nibras Plans is an Android app that keeps plans, spreadsheets, and reports simple. Build a plan, follow progress, and get a clear report for daily work. An app by Nibras Code.",
      features: ["Build plans", "Simple tracking", "Clear reports"],
    },
    ar: {
      title: "Nibras Plans — خطط وجداول وتقارير",
      description:
        "Nibras Plans تطبيق أندرويد يُبقي الخطط والجداول والتقارير بسيطة. ضع خطة، وتابع التقدّم، واحصل على تقرير واضح للعمل اليومي. من مشروع Nibras Code.",
      features: ["وضع الخطط", "متابعة بسيطة", "تقارير واضحة"],
    },
    ru: {
      title: "Nibras Plans — планы, таблицы и отчёты",
      description:
        "Nibras Plans — приложение для Android, которое держит планы, таблицы и отчёты простыми. Составьте план, следите за ходом и получите ясный отчёт для ежедневной работы. Проект Nibras Code.",
      features: ["Составлять планы", "Простое отслеживание", "Ясные отчёты"],
    },
  },
  "/apps": {
    az: {
      title: "Tətbiqlər — Nibras Code",
      description:
        "Nibras Code tətbiqləri: Nibras Arabic, Nibras PDF, Nibras Docs və Nibras Plans. Hər tətbiqin qısa təqdimatı və səhifəsi.",
    },
    en: {
      title: "Apps — Nibras Code",
      description:
        "Nibras Code apps: Nibras Arabic, Nibras PDF, Nibras Docs, and Nibras Plans. A short introduction and a page for each app.",
    },
    ar: {
      title: "التطبيقات — Nibras Code",
      description:
        "تطبيقات Nibras Code: Nibras Arabic وNibras PDF وNibras Docs وNibras Plans. تعريف قصير وصفحة لكل تطبيق.",
    },
    ru: {
      title: "Приложения — Nibras Code",
      description:
        "Приложения Nibras Code: Nibras Arabic, Nibras PDF, Nibras Docs и Nibras Plans. Короткое представление и страница каждого.",
    },
  },
  "/resources": {
    az: {
      title: "Resurslar — Nibras Code",
      description: "Nibras Code resursları: PDF, ərəb dili, Android, fayl alətləri, təhsil və sənədlər.",
      keywords: "PDF bələdçisi, ərəb dili, Android fayl alətləri, Nibras Code resurslar",
    },
    en: {
      title: "Resources — Nibras Code",
      description: "Practical pages from Nibras Code on PDFs, Arabic, Android, file tools, study, and documents.",
      keywords: "PDF guides, Arabic learning, Android file tools, Nibras Code resources",
    },
    tr: {
      title: "Kaynaklar — Nibras Code",
      description: "Nibras Code kaynakları: PDF, Arapça, Android, dosya araçları, eğitim ve belgeler.",
      keywords: "PDF rehberi, Arapça öğrenme, Android dosya araçları, Nibras Code kaynaklar",
    },
    ar: {
      title: "موارد — Nibras Code",
      description: "صفحات عملية من Nibras Code عن PDF والعربية وأندرويد وأدوات الملفات والتعليم والمستندات.",
      keywords: "دليل PDF, تعلم العربية, أدوات الملفات لأندرويد, موارد Nibras Code",
    },
    ru: {
      title: "Ресурсы — Nibras Code",
      description: "Практические страницы Nibras Code: PDF, арабский, Android, файлы, учёба и документы.",
      keywords: "руководство PDF, арабский язык, инструменты для файлов Android, ресурсы Nibras Code",
    },
  },
  "/guides": {
    az: {
      title: "Bələdçilər — Nibras Code",
      description: "Nibras Code bələdçiləri: PDF, Android və ərəb dili.",
    },
    en: {
      title: "Guides — Nibras Code",
      description: "Nibras Code guides: PDF, Android, and Arabic.",
    },
    ar: {
      title: "أدلة — Nibras Code",
      description: "أدلة Nibras Code: PDF وأندرويد والعربية.",
    },
    ru: {
      title: "Руководства — Nibras Code",
      description: "Руководства Nibras Code: PDF, Android и арабский язык.",
    },
  },
  "/programming": {
    az: {
      title: "Proqramlaşdırma — Nibras Code",
      description: "Python, Java, React, Composer, Cargo, Make, pip, Linux və digər dillər və alətlər.",
      keywords: "proqramlaşdırma, Composer, Cargo, Make, pip, Linux, React",
    },
    en: {
      title: "Programming — Nibras Code",
      description: "Pages on Python, Java, React, Composer, Cargo, Make, pip, Linux, and other languages and tools.",
      keywords: "programming, Composer, Cargo, Make, pip, Linux, React",
    },
    tr: {
      title: "Programlama — Nibras Code",
      description: "Python, Java, React, Composer, Cargo, Make, pip, Linux ve diğer diller ile araçlar.",
      keywords: "programlama, Composer, Cargo, Make, pip, Linux, React",
    },
    ar: {
      title: "برمجة — Nibras Code",
      description: "صفحات عن Python وJava وReact وComposer وCargo وMake وpip وLinux وأدوات أخرى.",
      keywords: "برمجة, Composer, Cargo, Make, pip, Linux, React",
    },
    ru: {
      title: "Программирование — Nibras Code",
      description: "Страницы о Python, Java, React, Composer, Cargo, Make, pip, Linux и других языках и инструментах.",
      keywords: "программирование, Composer, Cargo, Make, pip, Linux, React",
    },
  },
  ...Object.fromEntries(PROGRAMMING.map((page) => [`/programming/${page.slug}`, page.seo])),
  "/resources/ereb-dili": seoLeaf("Ərəb dili — Resurslar", "Arabic — Resources", "العربية — موارد", "Арабский — Ресурсы"),
  "/resources/android": seoLeaf("Android — Resurslar", "Android — Resources", "Android — موارد", "Android — Ресурсы"),
  "/resources/fayl-aletleri": seoLeaf(
    "Fayl alətləri — Resurslar",
    "File tools — Resources",
    "أدوات الملفات — موارد",
    "Инструменты для файлов — Ресурсы",
  ),
  "/resources/tehsil": seoLeaf("Təhsil — Resurslar", "Education — Resources", "تعليم — موارد", "Обучение — Ресурсы"),
  "/resources/senedler": seoLeaf("Sənədlər — Resurslar", "Documents — Resources", "مستندات — موارد", "Документы — Ресурсы"),
  ...Object.fromEntries(RESURSLAR.map((page) => [`/resurslar/${page.slug}`, page.seo])),
  ...Object.fromEntries(
    RU_RESOURCES.map((page) => {
      const copy = {
        title: `${page.title} — Nibras Code`,
        description: page.description,
        keywords: page.keywords,
      };
      return [`/ru/resources/${page.slug}`, { az: copy, en: copy, tr: copy, ar: copy, ru: copy }];
    }),
  ),
  "/guides/pdf": {
    az: {
      title: "PDF bələdçisi — Nibras Code",
      description: "PDF faylını birləşdirmək, bölmək və sıxışdırmaq üçün qısa bələdçi. Ətraflı addımlar Nibras PDF çıxanda bu səhifədə olacaq.",
    },
    en: {
      title: "PDF guide — Nibras Code",
      description: "A short guide to merging, splitting, and compressing a PDF. Detailed steps will be added here when Nibras PDF is released.",
    },
    tr: {
      title: "PDF rehberi — Nibras Code",
      description: "PDF birleştirme, bölme ve sıkıştırma için kısa rehber. Ayrıntılı adımlar Nibras PDF çıkınca bu sayfada olacak.",
    },
    ar: {
      title: "دليل PDF — Nibras Code",
      description: "دليل قصير لدمج PDF وتقسيمه وضغطه. الخطوات المفصّلة تُضاف هنا عند إصدار Nibras PDF.",
    },
    ru: {
      title: "Руководство по PDF — Nibras Code",
      description: "Короткое руководство: объединить, разделить и сжать PDF. Подробные шаги появятся здесь, когда выйдет Nibras PDF.",
    },
  },
  "/guides/android": {
    az: {
      title: "Android bələdçisi — Nibras Code",
      description: "Nibras Code tətbiqlərini Android telefonda tapmaq və quraşdırmaq üçün qısa bələdçi.",
    },
    en: {
      title: "Android guide — Nibras Code",
      description: "A short guide to finding and installing Nibras Code apps on an Android phone.",
    },
    tr: {
      title: "Android rehberi — Nibras Code",
      description: "Nibras Code uygulamalarını Android telefonda bulmak ve kurmak için kısa rehber.",
    },
    ar: {
      title: "دليل Android — Nibras Code",
      description: "دليل قصير للعثور على تطبيقات Nibras Code وتثبيتها على هاتف أندرويد.",
    },
    ru: {
      title: "Руководство по Android — Nibras Code",
      description: "Короткое руководство: как найти и установить приложения Nibras Code на телефон Android.",
    },
  },
  "/guides/ereb-dili": {
    az: {
      title: "Ərəb dili bələdçisi — Nibras Code",
      description: "Ərəb dilinə Azərbaycan dilindən başlamaq üçün qısa bələdçi. Əsas tətbiq Nibras Arabic-dir.",
    },
    en: {
      title: "Arabic guide — Nibras Code",
      description: "A short guide to starting Arabic from Azerbaijani. The main app is Nibras Arabic.",
    },
    tr: {
      title: "Arapça rehberi — Nibras Code",
      description: "Azerbaycan Türkçesinden Arapçaya başlamak için kısa rehber. Ana uygulama Nibras Arabic'tir.",
    },
    ar: {
      title: "دليل العربية — Nibras Code",
      description: "دليل قصير لبدء العربية من الأذربيجانية. التطبيق الأساسي هو Nibras Arabic.",
    },
    ru: {
      title: "Руководство по арабскому — Nibras Code",
      description: "Короткое руководство: начать арабский с азербайджанского. Основное приложение — Nibras Arabic.",
    },
  },
  "/contact": {
    az: {
      title: "Əlaqə — Nibras Code",
      description: "Nibras Code ilə əlaqə üçün e-poçt: nibrascode@gmail.com. Tətbiq, səhifə və ya məxfilik haqqında sual yaza bilərsiniz.",
    },
    en: {
      title: "Contact — Nibras Code",
      description: "Contact Nibras Code by email at nibrascode@gmail.com. You can ask about an app, a page, or a privacy policy.",
    },
    ar: {
      title: "تواصل — Nibras Code",
      description: "للتواصل مع Nibras Code عبر البريد nibrascode@gmail.com. يمكن السؤال عن تطبيق أو صفحة أو سياسة خصوصية.",
    },
    ru: {
      title: "Контакт — Nibras Code",
      description: "Написать Nibras Code на nibrascode@gmail.com. Можно спросить о приложении, странице или политике конфиденциальности.",
    },
    tr: {
      title: "İletişim — Nibras Code",
      description: "Nibras Code ile iletişim için e-posta: nibrascode@gmail.com. Uygulama, sayfa veya gizlilik hakkında soru yazabilirsiniz.",
    },
  },
  "/privacy": {
    az: {
      title: "Məxfilik siyasəti — Nibras Code",
      description: "Nibras Code tətbiqlərinin məxfilik siyasəti. Hər tətbiqin öz səhifəsi var.",
    },
    en: {
      title: "Privacy policy — Nibras Code",
      description: "Privacy policy for Nibras Code apps. Each app has its own page.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras Code",
      description: "سياسة خصوصية تطبيقات Nibras Code. لكل تطبيق صفحته.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras Code",
      description: "Политика конфиденциальности приложений Nibras Code. У каждого приложения своя страница.",
    },
  },
  "/privacy/nibras-arabic": {
    az: {
      title: "Məxfilik siyasəti — Nibras Arabic",
      description:
        "Nibras Arabic məxfilik siyasəti, versiya 1.1.0, 30 sentyabr 2026: hesab tələb olunmur, öyrənmə məlumatı yalnız cihazda qalır.",
    },
    en: {
      title: "Privacy policy — Nibras Arabic",
      description:
        "Nibras Arabic privacy policy, version 1.1.0, 30 September 2026: no account is required and learning data stays on the device.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras Arabic",
      description:
        "سياسة خصوصية Nibras Arabic، الإصدار 1.1.0، 30 سبتمبر 2026: لا حساب، وبيانات التعلم تبقى على الجهاز.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras Arabic",
      description:
        "Политика Nibras Arabic, версия 1.1.0, 30 сентября 2026: аккаунт не нужен, данные обучения остаются на устройстве.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras Arabic",
      description:
        "Nibras Arabic gizlilik politikası, sürüm 1.1.0, 30 Eylül 2026: hesap istenmez, öğrenme verisi yalnızca cihazda kalır.",
    },
  },
  "/privacy/nibras-docs": {
    az: {
      title: "Məxfilik siyasəti — Nibras Docs",
      description:
        "Nibras Docs hələ çıxmayıb. Tam məxfilik siyasəti tətbiq hazır olanda bu səhifədə dərc olunacaq. İndi hesab və izləmə yoxdur.",
    },
    en: {
      title: "Privacy policy — Nibras Docs",
      description:
        "Nibras Docs is not released yet. The full privacy policy will be published here when the app is ready. There is no account or tracking now.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras Docs",
      description:
        "Nibras Docs henüz çıkmadı. Tam gizlilik politikası uygulama hazır olunca bu sayfada yayımlanacak. Şimdilik hesap ve izleme yok.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras Docs",
      description:
        "Nibras Docs لم يصدر بعد. تُنشر سياسة الخصوصية الكاملة هنا عندما يجهز التطبيق. لا حساب ولا تتبّع الآن.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras Docs",
      description:
        "Nibras Docs ещё не вышел. Полная политика будет опубликована здесь, когда приложение будет готово. Сейчас нет аккаунта и отслеживания.",
    },
  },
  "/privacy/nibras-plans": {
    az: {
      title: "Məxfilik siyasəti — Nibras Plans",
      description:
        "Nibras Plans hələ çıxmayıb. Tam məxfilik siyasəti tətbiq hazır olanda bu səhifədə dərc olunacaq. İndi hesab və izləmə yoxdur.",
    },
    en: {
      title: "Privacy policy — Nibras Plans",
      description:
        "Nibras Plans is not released yet. The full privacy policy will be published here when the app is ready. There is no account or tracking now.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras Plans",
      description:
        "Nibras Plans henüz çıkmadı. Tam gizlilik politikası uygulama hazır olunca bu sayfada yayımlanacak. Şimdilik hesap ve izleme yok.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras Plans",
      description:
        "Nibras Plans لم يصدر بعد. تُنشر سياسة الخصوصية الكاملة هنا عندما يجهز التطبيق. لا حساب ولا تتبّع الآن.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras Plans",
      description:
        "Nibras Plans ещё не вышел. Полная политика будет опубликована здесь, когда приложение будет готово. Сейчас нет аккаунта и отслеживания.",
    },
  },
  "/privacy/nibras-pdf": {
    az: {
      title: "Məxfilik siyasəti — Nibras PDF",
      description:
        "Nibras PDF məxfilik siyasəti, 29 sentyabr 2026: sənədlər telefonda qalır, Google Drive 1.0.4-də bağlıdır, hesab Clerk ilə könüllüdür.",
    },
    en: {
      title: "Privacy policy — Nibras PDF",
      description:
        "Nibras PDF privacy policy, 29 September 2026: files stay on the phone. Free daily limit is 10 document actions, 4 OCR, and 5 scans.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras PDF",
      description:
        "سياسة خصوصية Nibras PDF بتاريخ 29 سبتمبر 2026: تبقى الملفات على الهاتف. الحد اليومي 10 عمليات و4 OCR و5 عمليات مسح.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras PDF",
      description:
        "Политика Nibras PDF от 29 сентября 2026: документы остаются на телефоне, дневной лимит 10 действий, 4 OCR и 5 сканов.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras PDF",
      description:
        "Nibras PDF gizlilik politikası, 29 Eylül 2026: belgeler cihazda kalır, günlük sınır 10 işlem, 4 OCR ve 5 tarama.",
    },
  },
};

export function readLang(searchStr: string | undefined): Lang {
  const raw = new URLSearchParams((searchStr ?? "").replace(/^\?/, "")).get("lang");
  if (raw === "en" || raw === "ar" || raw === "ru" || raw === "az" || raw === "tr") return raw;
  return "az";
}

function pageCopy(pathname: string, lang: Lang) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const topic = faqTopicFromPath(path);
  if (topic) {
    return {
      title: `${topic.item.q} — Nibras Code`,
      description: topic.item.a,
      keywords: `${topic.item.q}, Nibras Code`,
    };
  }
  const faq = faqFromPath(path);
  if (faq) return { title: faq.title, description: faq.description, keywords: faq.keywords };
  const located = programmingFromPath(path);
  if (located) {
    const article = findProgramming(located.slug);
    const articleLang = located.lang === "az" ? lang : located.lang;
    if (article) return article.seo[articleLang] ?? article.seo.en;
    const sample = CODE_SAMPLE_SEO[located.slug];
    if (sample) return sample[articleLang] ?? sample.en;
  }
  const resourceArticle = resourceArticleFromPath(path);
  if (resourceArticle) {
    return {
      title: `${resourceArticle.title[lang]} — Nibras Code`,
      description: resourceArticle.description[lang],
      keywords: resourceArticle.keywords[lang],
    };
  }
  const resourceTopic = path.match(/^\/resources\/([^/]+)$/);
  const topicCopy = resourceTopic ? findResourceTopic(resourceTopic[1]) : null;
  if (topicCopy) {
    const slug = resourceTopic?.[1] ?? "";
    const trTitle: Record<string, string> = {
      "ereb-dili": "Arapça — Kaynaklar — Nibras Code",
      android: "Android — Kaynaklar — Nibras Code",
      "fayl-aletleri": "Dosya araçları — Kaynaklar — Nibras Code",
      tehsil: "Eğitim — Kaynaklar — Nibras Code",
      senedler: "Belgeler — Kaynaklar — Nibras Code",
    };
    const known = PAGES[path]?.[lang] ?? PAGES[path]?.en;
    return {
      title: lang === "tr" ? (trTitle[slug] ?? known?.title ?? `${slug} — Nibras Code`) : (known?.title ?? `${slug} — Nibras Code`),
      description: topicCopy.description[lang],
      keywords: topicCopy.keywords[lang],
    };
  }
  const page = PAGES[path] ?? PAGES["/"];
  return page[lang] ?? page.en;
}

export function pageUrl(pathname: string, lang: Lang) {
  const path = stripLocalePrefix(pathname).path;
  if (isSplitPage(path)) return `${SITE}${localeHref(lang, path)}`;
  const base = `${SITE}${path === "/" ? "" : path}`;
  if (lang === "az") return base || SITE;
  return `${base || SITE}?lang=${lang}`;
}

export function langFromLocation(pathname: string, searchStr?: string): Lang {
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  if (pathname.startsWith("/en/")) return "en";
  if (pathname.startsWith("/tr/")) return "tr";
  if (pathname.startsWith("/ar/")) return "ar";
  return readLang(searchStr);
}

export function canonicalUrl(pathname: string, lang: Lang) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  if (faqTopicFromPath(path)) {
    const topic = faqTopicFromPath(path)!;
    return `${SITE}${faqTopicPath(topic.page.lang, topic.item.id)}`;
  }
  if (faqFromPath(path)) return `${SITE}${faqPath(lang)}`;
  const pair = pdfPairFromPath(path);
  if (pair) {
    if (path.startsWith("/ru/") || lang === "ru") return `${SITE}${pair.ru}`;
    if (lang === "az") return `${SITE}${pair.az}`;
    return `${SITE}${pair.az}?lang=${lang}`;
  }
  const located = programmingFromPath(path);
  if (located) {
    const articleLang = located.lang === "az" ? lang : located.lang;
    if (articleLang === "az" || isCodeSampleSlug(located.slug) || findProgrammingLocale(articleLang, located.slug)) {
      return `${SITE}${programmingLocalePath(articleLang, located.slug)}`;
    }
  }
  return pageUrl(path, lang);
}

const LOCALES: Record<Lang, string> = {
  az: "az_AZ",
  en: "en_US",
  tr: "tr_TR",
  ar: "ar",
  ru: "ru_RU",
};

export function buildHead(pathname: string, lang: Lang) {
  const raw = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const split = stripLocalePrefix(raw);
  const path = isSplitPage(split.path) ? split.path : raw;
  const pageLang = isSplitPage(split.path) && split.lang ? split.lang : lang;
  if (path === "/nx-studio") {
    return {
      meta: [
        { title: "Nibras Code" },
        { name: "robots", content: "noindex, nofollow" },
      ],
      scripts: [],
    };
  }
  const copy = pageCopy(path, pageLang);
  const samplePath = programmingFromPath(raw);
  const hideSample = Boolean(samplePath && isCodeSampleChild(samplePath.slug));
  const url = canonicalUrl(path, pageLang);
  const image = path.startsWith("/apps/")
    ? `${SITE}/apps/${path.split("/").pop()}.jpg`
    : `${SITE}/home/bg-hero.jpg`;

  return {
    meta: [
      { title: copy.title },
      { name: "description", content: copy.description },
      ...(copy.keywords ? [{ name: "keywords", content: copy.keywords }] : []),
      { name: "robots", content: hideSample ? "noindex, follow" : "index, follow" },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Nibras Code" },
      { property: "og:title", content: copy.title },
      { property: "og:description", content: copy.description },
      { property: "og:url", content: url },
      { property: "og:locale", content: LOCALES[pageLang] },
      ...LANGS.filter((code) => code !== pageLang).map((code) => ({
        property: "og:locale:alternate",
        content: LOCALES[code],
      })),
      { property: "og:image", content: image },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: copy.title },
      { name: "twitter:description", content: copy.description },
      { name: "twitter:image", content: image },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd(path, pageLang, copy, url)),
      },
    ],
  };
}

function jsonLd(path: string, lang: Lang, copy: PageSeo, url: string) {
  const org = {
    "@type": "Organization",
    name: "Nibras Code",
    url: SITE,
    email: "Nibrascode@gmail.com",
    description: (PAGES["/"][lang] ?? PAGES["/"].en).description,
  };

  const topic = faqTopicFromPath(path);
  if (topic) {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: topic.item.q,
      description: faqAnswerText(topic.item),
      url,
      inLanguage: topic.page.lang,
      mainEntity: [
        {
          "@type": "Question",
          name: topic.item.q,
          acceptedAnswer: { "@type": "Answer", text: faqAnswerText(topic.item) },
        },
      ],
      publisher: org,
    };
  }

  if (faqFromPath(path)) {
    const faq = faqFromPath(path)!;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: faq.heading,
      description: faq.description,
      url,
      inLanguage: faq.lang,
      mainEntity: faq.items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: faqAnswerText(item) },
      })),
      publisher: org,
    };
  }

  if (path.startsWith("/apps/")) {
    const names: Record<string, string> = {
      "/apps/nibras-arabic": "Nibras Arabic",
      "/apps/nibras-pdf": "Nibras PDF",
      "/apps/nibras-docs": "Nibras Docs",
      "/apps/nibras-plans": "Nibras Plans",
    };
    const categories: Record<string, string> = {
      "/apps/nibras-arabic": "EducationalApplication",
      "/apps/nibras-pdf": "UtilitiesApplication",
      "/apps/nibras-docs": "BusinessApplication",
      "/apps/nibras-plans": "BusinessApplication",
    };
    return {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: names[path] ?? "Nibras Code",
      applicationCategory: categories[path] ?? "UtilitiesApplication",
      operatingSystem: "Android",
      description: copy.description,
      featureList: copy.features,
      inLanguage: lang,
      url,
      publisher: org,
      author: org,
    };
  }

  if (path.startsWith("/resurslar/") || path.startsWith("/ru/resources/") || programmingFromPath(path) || resourceArticleFromPath(path)) {
    return {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: copy.title,
      description: copy.description,
      keywords: copy.keywords,
      inLanguage: lang,
      url,
      mainEntityOfPage: url,
      author: org,
      publisher: org,
    };
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: copy.title,
    description: copy.description,
    url,
    inLanguage: lang,
    isPartOf: { "@type": "WebSite", name: "Nibras Code", url: SITE },
    publisher: org,
  };
}

export const SITEMAP_PATHS = Object.keys(PAGES);
