import { LANGS, type Lang } from "@/lib/i18n";
import { isSplitPage, localeHref, stripLocalePrefix, homePath } from "@/lib/locale-path";
import { faqAnswerText, faqFromPath, faqPath, faqTopicFromPath, faqTopicPath } from "@/lib/faq";
import { pdfPairFromPath } from "@/lib/pdf-pairs";
import { isToolId, toolSeo } from "@/pdf/tool-seo";
import { SEARCH_FAQ } from "@/lib/search-faq";
import { TOOL_IDS } from "@/pdf/tool-text";
import { findCourse, HUBS, isCourseSlug } from "@/lib/course/meta";
import { PROGRAMMING_SEO } from "@/lib/programming-seo";
import { hasProgrammingLocale, programmingFromPath, programmingLocalePath } from "@/lib/programming-path";
import { CODE_SAMPLE_SEO, isCodeSampleSlug } from "@/lib/code-samples";
import { RESURSLAR } from "@/lib/resurslar";
import { findResourceTopic, resourceArticleFromPath } from "@/lib/resource-topics";
import { RU_RESOURCES } from "@/lib/ru-resources";
import { searchFromPath, searchTopicFromPath, searchPath, searchTopicPath } from "@/lib/search-pages";
import { COMPARE, compareFromPath, compareTopicFromPath, comparePath, compareTopicPath } from "@/lib/learn-pages";
import { PAKET, paketFromPath } from "@/lib/paket";
import { TOOLS, TOOLS_PAGE, toolFromPath, toolsFromPath, toolPath, toolsPath } from "@/lib/tools";
import { TOOL_LEAD } from "@/lib/tools-seo";
import { gameSeo } from "@/lib/games";

export const SITE = "https://nibrascode.com";

type PageSeo = {
  title: string;
  description: string;
  keywords?: string;
  features?: readonly string[];
};

type Copy = Record<Exclude<Lang, "tr">, PageSeo> & Partial<Record<Lang, PageSeo>>;

function seoLeaf(az: string, en: string, ar: string, ru: string, tr?: string): Copy {
  const copy: Copy = {
    az: { title: `${az} — Nibras Code`, description: az },
    en: { title: `${en} — Nibras Code`, description: en },
    ar: { title: `${ar} — Nibras Code`, description: ar },
    ru: { title: `${ru} — Nibras Code`, description: ru },
  };
  if (tr) copy.tr = { title: `${tr} — Nibras Code`, description: tr };
  return copy;
}

const PAGES: Record<string, Copy> = {
  "/": {
    az: {
      title: "Nibras Code — sadə tətbiqlər, real fayda",
      description:
        "Nibras Code müstəqil layihədir. Nibras AI sual, kod və şəkil köməkçisidir: nibrascode.com/ai. Tətbiqlər: Nibras Arabic, Nibras PDF, Nibras Docs və Nibras Plans.",
    },
    en: {
      title: "Nibras Code — simple apps, real benefit",
      description:
        "Nibras Code is an independent project. Nibras AI is its assistant for questions, code, and images at nibrascode.com/ai. Apps: Nibras Arabic, Nibras PDF, Nibras Docs, and Nibras Plans.",
    },
    tr: {
      title: "Nibras Code — sade uygulamalar, gerçek fayda",
      description:
        "Nibras Code bağımsız bir projedir. Nibras AI soru, kod ve görsel yardımcısıdır: nibrascode.com/ai. Uygulamalar: Nibras Arabic, Nibras PDF, Nibras Docs ve Nibras Plans.",
    },
    ar: {
      title: "Nibras Code — تطبيقات بسيطة، فائدة حقيقية",
      description:
        "Nibras Code مشروع مستقل. Nibras AI مساعد للسؤال والكود والصورة: nibrascode.com/ai. التطبيقات: Nibras Arabic وNibras PDF وNibras Docs وNibras Plans.",
    },
    ru: {
      title: "Nibras Code — простые приложения, реальная польза",
      description:
        "Nibras Code — независимый проект. Nibras AI — помощник для вопросов, кода и изображений: nibrascode.com/ai. Приложения: Nibras Arabic, Nibras PDF, Nibras Docs и Nibras Plans.",
    },
  },
  "/about": {
    az: {
      title: "Biz kimik — Nibras Code",
      description:
        "Nibras Code müstəqil şəxsi layihədir. Qurucusu Mahir Əliyev. Nibras Arabic açıqdır. Saytda Nibras AI, Nibras Dev, Nibras Apk, Nibras QR, Nibras Erase və Xidmətlər var.",
    },
    en: {
      title: "Who we are — Nibras Code",
      description:
        "Nibras Code is an independent personal project. Founder: Mahir Əliyev. Nibras Arabic is available. The site also has Nibras AI, Nibras Dev, Nibras Apk, Nibras QR, Nibras Erase, and Tools.",
    },
    ar: {
      title: "من نحن — Nibras Code",
      description:
        "Nibras Code مشروع شخصي مستقل. المؤسس Mahir Əliyev. Nibras Arabic متاح. وفي الموقع أيضًا Nibras AI وNibras Dev وNibras Apk وNibras QR وNibras Erase والخدمات.",
    },
    ru: {
      title: "Кто мы — Nibras Code",
      description:
        "Nibras Code — независимый личный проект. Основатель — Mahir Əliyev. Nibras Arabic доступен. На сайте также есть Nibras AI, Nibras Dev, Nibras Apk, Nibras QR, Nibras Erase и Сервисы.",
    },
    tr: {
      title: "Biz kimiz — Nibras Code",
      description:
        "Nibras Code bağımsız bir kişisel projedir. Kurucusu Mahir Əliyev. Nibras Arabic açıktır. Sitede Nibras AI, Nibras Dev, Nibras Apk, Nibras QR, Nibras Erase ve Hizmetler vardır.",
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
    tr: {
      title: "Neden Nibras Code — sade ve faydalı uygulamalar",
      description:
        "Nibras Code, sade, faydalı ve kullanımı rahat uygulamalar üzerinde çalışan bağımsız bir projedir. Amaç çok özellik değil, gerçek fayda vermektir.",
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
    tr: {
      title: "Unutma — Nibras Code hatırlatmaları",
      description:
        "Kısa hatırlatmalar: başarı Allah'tandır, sebeplere sarılmak ve ahireti unutmamak üzerine.",
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
    tr: {
      title: "Nibras PDF — telefonda PDF ve görseller",
      description:
        "Nibras PDF, telefonda PDF ve görsellerle çalışmak için bir Android uygulamasıdır. 18 araç vardır: birleştir, böl, sıkıştır, döndür, koru, imzala, tara, Word ve metin. Dosyalarınız cihazınızda kalır. Nibras Code projesidir.",
      features: ["PDF birleştirme ve bölme", "Sıkıştırma, döndürme ve imza", "Belge tarama ve görseller"],
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
    tr: {
      title: "Nibras Docs — belge yaz ve paylaş",
      description:
        "Nibras Docs, belgelerle sakin çalışmak için bir Android uygulamasıdır. Yazın, sade düzenleyin ve günlük paylaşın — tek yerde, gereksiz gürültü olmadan. Nibras Code projesidir.",
      features: ["Belge yazmak", "Sade düzenleme", "Günlük paylaşım"],
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
    tr: {
      title: "Nibras Plans — plan, tablo ve rapor",
      description:
        "Nibras Plans, planları, tabloları ve raporları sade tutan bir Android uygulamasıdır. Plan kurun, ilerlemeyi izleyin ve net bir rapor alın. Günlük iş için tasarlanmıştır. Nibras Code projesidir.",
      features: ["Plan kurmak", "Sade takip", "Net raporlar"],
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
    tr: {
      title: "Uygulamalar — Nibras Code",
      description:
        "Nibras Code uygulamaları: Nibras Arabic, Nibras PDF, Nibras Docs ve Nibras Plans. Her uygulamanın kısa tanıtımı ve sayfası.",
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
    tr: {
      title: "Rehberler — Nibras Code",
      description: "Nibras Code rehberleri: PDF, Android ve Arapça.",
    },
  },
  "/programming": {
    az: {
      title: "Proqramlaşdırma — Nibras Code",
      description: "Python, Java, React, PostgreSQL, Markdown, rsync, Maven, Linux və digər dillər və alətlər.",
      keywords: "proqramlaşdırma, PostgreSQL, Markdown, rsync, Maven, Linux, React",
    },
    en: {
      title: "Programming — Nibras Code",
      description: "Pages on Python, Java, React, PostgreSQL, Markdown, rsync, Maven, Linux, and other languages and tools.",
      keywords: "programming, PostgreSQL, Markdown, rsync, Maven, Linux, React",
    },
    tr: {
      title: "Programlama — Nibras Code",
      description: "Python, Java, React, PostgreSQL, Markdown, rsync, Maven, Linux ve diğer diller ile araçlar.",
      keywords: "programlama, PostgreSQL, Markdown, rsync, Maven, Linux, React",
    },
    ar: {
      title: "برمجة — Nibras Code",
      description: "صفحات عن Python وJava وReact وPostgreSQL وMarkdown وrsync وMaven وLinux وأدوات أخرى.",
      keywords: "برمجة, PostgreSQL, Markdown, rsync, Maven, Linux, React",
    },
    ru: {
      title: "Программирование — Nibras Code",
      description: "Страницы о Python, Java, React, PostgreSQL, Markdown, rsync, Maven, Linux и других языках и инструментах.",
      keywords: "программирование, PostgreSQL, Markdown, rsync, Maven, Linux, React",
    },
  },
  ...Object.fromEntries(Object.entries(PROGRAMMING_SEO).map(([slug, copy]) => [`/programming/${slug}`, copy])),
  "/resources/ereb-dili": seoLeaf(
    "Ərəb dili — Resurslar",
    "Arabic — Resources",
    "العربية — موارد",
    "Арабский — Ресурсы",
    "Arapça — Kaynaklar",
  ),
  "/resources/android": seoLeaf(
    "Android — Resurslar",
    "Android — Resources",
    "Android — موارد",
    "Android — Ресурсы",
    "Android — Kaynaklar",
  ),
  "/resources/fayl-aletleri": seoLeaf(
    "Fayl alətləri — Resurslar",
    "File tools — Resources",
    "أدوات الملفات — موارد",
    "Инструменты для файлов — Ресурсы",
    "Dosya araçları — Kaynaklar",
  ),
  "/resources/tehsil": seoLeaf(
    "Təhsil — Resurslar",
    "Education — Resources",
    "تعليم — موارد",
    "Обучение — Ресурсы",
    "Eğitim — Kaynaklar",
  ),
  "/resources/senedler": seoLeaf(
    "Sənədlər — Resurslar",
    "Documents — Resources",
    "مستندات — موارد",
    "Документы — Ресурсы",
    "Belgeler — Kaynaklar",
  ),
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
  "/terms": {
    az: {
      title: "İstifadə şərtləri — Nibras Code",
      description:
        "Nibras Code şəxsi layihədir. Əlaqə nibrascode@gmail.com. Telefon və ofis ünvanı yoxdur.",
    },
    en: {
      title: "Terms of use — Nibras Code",
      description:
        "Nibras Code is a personal project. Contact nibrascode@gmail.com. There is no phone number and no office address.",
    },
    tr: {
      title: "Kullanım şartları — Nibras Code",
      description:
        "Nibras Code kişisel bir projedir. İletişim nibrascode@gmail.com. Telefon ve ofis adresi yoktur.",
    },
    ar: {
      title: "شروط الاستخدام — Nibras Code",
      description:
        "Nibras Code مشروع شخصي. التواصل nibrascode@gmail.com. لا هاتف ولا عنوان مكتب.",
    },
    ru: {
      title: "Условия использования — Nibras Code",
      description:
        "Nibras Code — личный проект. Связь: nibrascode@gmail.com. Телефона и адреса офиса нет.",
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
    tr: {
      title: "Gizlilik politikası — Nibras Code",
      description: "Nibras Code uygulamalarının gizlilik politikası. Her uygulamanın kendi sayfası vardır.",
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
      title: "Nibras Docs məxfilik siyasəti",
      description:
        "Nibras Docs 1.0.1 məxfilik siyasəti: sənədlər cihazınızda qalır, bulud sinxronu yoxdur, şəkillər sistem foto seçicisi ilə, reklam və izləmə yoxdur, bütün funksiyalar pulsuzdur.",
    },
    en: {
      title: "Nibras Docs privacy policy",
      description:
        "Nibras Docs 1.0.1 privacy policy: documents stay on your device, cloud sync is off, images via the system photo picker, no ads or tracking, all features currently free.",
    },
    tr: {
      title: "Nibras Docs gizlilik politikası",
      description:
        "Nibras Docs 1.0.1 gizlilik politikası: belgeler cihazınızda kalır, bulut senkronu kapalı, görseller sistem fotoğraf seçicisiyle, reklam ve izleme yok, tüm özellikler şu an ücretsiz.",
    },
    ar: {
      title: "سياسة خصوصية Nibras Docs",
      description:
        "سياسة خصوصية Nibras Docs 1.0.1: المستندات تبقى على جهازك، بلا مزامنة سحابية، الصور عبر منتقي النظام، بلا إعلانات أو تتبع، وجميع الميزات مجانية حالياً.",
    },
    ru: {
      title: "Политика конфиденциальности Nibras Docs",
      description:
        "Политика Nibras Docs 1.0.1: документы на устройстве, без облачной синхронизации, изображения через системный фотовыбор, без рекламы и слежки, все функции сейчас бесплатны.",
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
  "/apps/nibras-qr": {
    az: {
      title: "Nibras QR — QR kod düzəlt, dizayn et, skan et",
      description:
        "Nibras QR QR kod və barkodlar üçün Android tətbiqidir: 11 növ QR, loqo və çərçivəli dizayn, şablonlar, ağıllı və təhlükəsiz skaner. Əsas funksiyalar internetsiz işləyir. Pro: dinamik QR və statistika. Nibras Code layihəsidir.",
      features: ["11 növ QR və dizayn", "Ağıllı, təhlükəsiz skaner", "Dinamik QR və statistika (Pro)"],
    },
    en: {
      title: "Nibras QR — create, design and scan QR codes",
      description:
        "Nibras QR is an Android app for QR codes and barcodes: 11 QR types, logo and frame designs, templates and a smart, safe scanner. Core features work offline. Pro: dynamic QR with stats. An app by Nibras Code.",
      features: ["11 QR types and designs", "Smart, safe scanner", "Dynamic QR and stats (Pro)"],
    },
    ar: {
      title: "Nibras QR — أنشئ وصمّم وامسح رموز QR",
      description:
        "Nibras QR تطبيق أندرويد لرموز QR والباركود: 11 نوعاً، تصاميم بشعار وإطار، قوالب وماسح ذكي وآمن. الميزات الأساسية تعمل دون إنترنت. من Nibras Code.",
    },
    ru: {
      title: "Nibras QR — создавайте, оформляйте и сканируйте QR-коды",
      description:
        "Nibras QR — Android-приложение для QR-кодов и штрихкодов: 11 типов, дизайн с логотипом и рамкой, шаблоны и умный безопасный сканер. Основное работает офлайн. Проект Nibras Code.",
    },
    tr: {
      title: "Nibras QR — QR kod oluştur, tasarla, tara",
      description:
        "Nibras QR, QR kod ve barkodlar için bir Android uygulamasıdır: 11 QR türü, logo ve çerçeveli tasarım, şablonlar, akıllı ve güvenli tarayıcı. Temel özellikler internetsiz çalışır. Pro: dinamik QR ve istatistik. Nibras Code projesidir.",
      features: ["11 QR türü ve tasarım", "Akıllı, güvenli tarayıcı", "Dinamik QR ve istatistik (Pro)"],
    },
  },
  "/erase": {
    az: {
      title: "Şəkil fon sil — pulsuz",
      description: "Şəkil fonunu sil, şəffaf PNG yüklə. Pulsuz, hesabsız, şəkil brauzerdən çıxmır.",
    },
    en: {
      title: "Remove image background — free",
      description: "Remove a photo background and download a transparent PNG. Free, no account, the photo stays in your browser.",
    },
    tr: {
      title: "Fotoğraf arka plan sil — ücretsiz",
      description: "Fotoğrafın arka planını sil, şeffaf PNG indir. Ücretsiz, hesapsız, fotoğraf tarayıcıdan çıkmaz.",
    },
    ar: {
      title: "حذف خلفية الصورة — مجاناً",
      description: "احذف خلفية الصورة ونزّل PNG شفافاً. مجاناً وبلا حساب، والصورة تبقى في المتصفح.",
    },
    ru: {
      title: "Удалить фон фото — бесплатно",
      description: "Уберите фон фото и скачайте прозрачный PNG. Бесплатно, без аккаунта, фото остаётся в браузере.",
    },
  },
  "/image": {
    az: {
      title: "Şəkil sıx — pulsuz",
      description: "Şəkilin ölçüsünü kiçilt. JPG, PNG və WebP. Pulsuz, hesabsız, şəkil brauzerdən çıxmır.",
    },
    en: {
      title: "Compress photo — free",
      description: "Make a photo smaller. JPG, PNG and WebP. Free, no account, the photo stays in your browser.",
    },
    tr: {
      title: "Fotoğraf sıkıştır — ücretsiz",
      description: "Fotoğrafın boyutunu küçült. JPG, PNG ve WebP. Ücretsiz, hesapsız, fotoğraf tarayıcıdan çıkmaz.",
    },
    ar: {
      title: "ضغط الصورة — مجاناً",
      description: "صغّر حجم الصورة. JPG وPNG وWebP. مجاناً وبلا حساب، والصورة تبقى في المتصفح.",
    },
    ru: {
      title: "Сжать фото — бесплатно",
      description: "Уменьшите размер фото. JPG, PNG и WebP. Бесплатно, без аккаунта, фото остаётся в браузере.",
    },
  },
  "/soz-sayi": {
    az: { title: "Söz sayı — pulsuz", description: "Mətndə söz, hərf və sətir say. Pulsuz, mətn brauzerdən çıxmır." },
    en: { title: "Word count — free", description: "Count words, letters and lines. Free, the text stays in your browser." },
    tr: { title: "Söz sayısı — ücretsiz", description: "Metindeki söz, harf ve satırı say. Ücretsiz, metin tarayıcıdan çıkmaz." },
    ar: { title: "عدد الكلمات — مجاناً", description: "عدّ الكلمات والحروف والأسطر. مجاناً، والنص يبقى في المتصفح." },
    ru: { title: "Количество слов — бесплатно", description: "Посчитайте слова, буквы и строки. Бесплатно, текст остаётся в браузере." },
  },
  "/faiz": {
    az: { title: "Faiz hesabla — pulsuz", description: "Faizin nəticəsini və bir ədədin neçə faiz olduğunu hesabla. Hesab yoxdur." },
    en: { title: "Calculate a percent — free", description: "Find a percent of a number and what percent one number is of another. No account." },
    tr: { title: "Yüzde hesapla — ücretsiz", description: "Yüzdenin sonucunu ve bir sayının yüzde kaç olduğunu hesapla. Hesap yok." },
    ar: { title: "احسب النسبة — مجاناً", description: "احسب ناتج النسبة وكم بالمئة عدد من آخر. بلا حساب." },
    ru: { title: "Посчитать процент — бесплатно", description: "Найдите процент от числа и сколько процентов одно число от другого. Без аккаунта." },
  },
  "/wifi": {
    az: { title: "Wi-Fi QR — pulsuz", description: "Şəbəkə adı və şifrədən QR kod yarat. Qonaq skan edib qoşulsun. Şifrə yüklənmir." },
    en: { title: "Wi-Fi QR code — free", description: "Make a QR code from a network name and password. A guest scans and joins. The password is not uploaded." },
    tr: { title: "Wi-Fi QR — ücretsiz", description: "Ağ adı ve şifreden QR kod yap. Konuk tarayıp bağlansın. Şifre yüklenmez." },
    ar: { title: "رمز QR لـ Wi-Fi — مجاناً", description: "اصنع رمز QR من اسم الشبكة وكلمة المرور. يمسحه الضيف ويتصل. لا تُرفع كلمة المرور." },
    ru: { title: "Wi-Fi QR — бесплатно", description: "Сделайте QR-код из имени сети и пароля. Гость сканирует и подключается. Пароль не загружается." },
  },
  "/seo": {
    az: { title: "Nibras SEO Check — bir səhifəni yoxla", description: "Title, description, canonical, robots.txt və sitemap. Bir ünvan yoxlanır, başqa səhifələr açılmır." },
    en: { title: "Nibras SEO Check — check one page", description: "Title, description, canonical, robots.txt and sitemap. One address is checked. Other pages are not opened." },
    tr: { title: "Nibras SEO Check — bir sayfaya bak", description: "Title, description, canonical, robots.txt ve sitemap. Bir adres bakılır, başka sayfalar açılmaz." },
    ar: { title: "Nibras SEO Check — افحص صفحة", description: "العنوان والوصف والرابط الأساسي وrobots.txt وsitemap. يُفحص عنوان واحد ولا تُفتح الصفحات الأخرى." },
    ru: { title: "Nibras SEO Check — проверить одну страницу", description: "Title, description, canonical, robots.txt и sitemap. Проверяется один адрес, другие страницы не открываются." },
  },
  "/flow": {
    az: { title: "Nibras Flow — ideyadan plana", description: "İdeyanı yaz. Səhifə xəritəsi, qovluq, iş sırası və başlanğıc fayl adları bu səhifədə qurulur. Kod yazılmır." },
    en: { title: "Nibras Flow — from an idea to a plan", description: "Write the idea. The page map, folders, work order, and starter file names are built on this page. No code is written." },
    tr: { title: "Nibras Flow — fikirden plana", description: "Fikri yaz. Sayfa haritası, klasör, iş sırası ve başlangıç dosya adları bu sayfada kurulur. Kod yazılmaz." },
    ar: { title: "Nibras Flow — من الفكرة إلى الخطة", description: "اكتب الفكرة. تُبنى خريطة الصفحات والمجلدات وترتيب العمل وأسماء الملفات هنا. لا يُكتب كود." },
    ru: { title: "Nibras Flow — от идеи к плану", description: "Напишите идею. Карта страниц, папки, порядок работы и имена начальных файлов собираются на этой странице. Код не пишется." },
  },
  "/logic": {
    az: { title: "Nibras Logic — sual və cavab yolu", description: "Kod yazmadan sual-cavab yolu qur. Cavab növbəti suala və ya sona gedir. Link ünvanın içindədir, heç nə saxlanmır." },
    en: { title: "Nibras Logic — a question and answer path", description: "Build a question and answer path without code. An answer goes to the next question or to the end. The link is in the address. Nothing is stored." },
    tr: { title: "Nibras Logic — soru ve cevap yolu", description: "Kod yazmadan soru-cevap yolu kur. Cevap sonraki soruya ya da sona gider. Bağlantı adresin içindedir, hiçbir şey saklanmaz." },
    ar: { title: "Nibras Logic — طريق سؤال وجواب", description: "ابنِ طريق سؤال وجواب بلا كود. الجواب يذهب إلى السؤال التالي أو إلى النهاية. الرابط داخل العنوان ولا يُحفظ شيء." },
    ru: { title: "Nibras Logic — путь вопросов и ответов", description: "Соберите путь вопросов и ответов без кода. Ответ ведёт к следующему вопросу или к концу. Ссылка внутри адреса, ничего не сохраняется." },
  },
  "/unknown": {
    az: { title: "Nibras Unknown — üç addımlı sirr", description: "Qeyd, kod və şifrə. Düzgün açılış növbəti hissəni göstərir. Server yoxdur, bu cihazda qalır." },
    en: { title: "Nibras Unknown — a three-step secret", description: "A note, a code and a password. The right one opens the next part. No server. It stays on this device." },
    tr: { title: "Nibras Unknown — üç adımlı sır", description: "Not, kod ve şifre. Doğru açılış sonraki parçayı gösterir. Sunucu yok, bu cihazda kalır." },
    ar: { title: "Nibras Unknown — سر من ثلاث خطوات", description: "ملاحظة وكود وكلمة سر. الفتح الصحيح يُظهر الجزء التالي. لا خادم ويبقى على هذا الجهاز." },
    ru: { title: "Nibras Unknown — тайна из трёх шагов", description: "Записка, код и пароль. Верный ввод открывает следующую часть. Сервера нет, остаётся на этом устройстве." },
  },
  "/pdf": {
    az: {
      title: "Nibras PDF — PDF birləşdir, böl, sıxışdır, imzala (pulsuz)",
      description: "Brauzerdə 19 PDF aləti: birləşdir, böl, sıxışdır, şəkildən PDF, PDF-dən şəkil və Word, OCR, parol, watermark, imza. Pulsuz, hesabsız, fayllar yüklənmir.",
    },
    en: {
      title: "Nibras PDF — merge, split, compress, sign PDF (free)",
      description: "19 PDF tools in your browser: merge, split, compress, images to PDF, PDF to image and Word, OCR, password, watermark, signature. Free, no account, files stay on your device.",
    },
    tr: {
      title: "Nibras PDF — PDF birleştir, böl, sıkıştır, imzala (ücretsiz)",
      description: "Tarayıcıda 19 PDF aracı: birleştir, böl, sıkıştır, görselden PDF, PDF'den görsel ve Word, OCR, parola, filigran, imza. Ücretsiz, hesapsız, dosyalar yüklenmez.",
    },
    ar: {
      title: "Nibras PDF — دمج وتقسيم وضغط وتوقيع PDF مجاناً",
      description: "19 أداة PDF في المتصفح: دمج وتقسيم وضغط وتحويل الصور وWord وOCR وكلمة مرور وعلامة مائية وتوقيع. مجاناً وبلا حساب وتبقى الملفات على جهازك.",
    },
    ru: {
      title: "Nibras PDF — объединить, разделить, сжать, подписать PDF бесплатно",
      description: "19 PDF-инструментов в браузере: объединение, разделение, сжатие, изображения и Word, OCR, пароль, водяной знак, подпись. Бесплатно, без аккаунта, файлы остаются на устройстве.",
    },
  },
  "/qr": {
    az: {
      title: "QR kod generatoru — Nibras QR onlayn",
      description: "Pulsuz onlayn QR kod generatoru: link, Wi-Fi, vizit kartı, WhatsApp və daha çox. Rəng, nöqtə və göz formaları, şablonlar, PNG/JPG export, kamera və şəkildən skan. Hər şey brauzerdə işləyir.",
    },
    en: {
      title: "QR code generator — Nibras QR online",
      description: "Free online QR code generator: links, Wi-Fi, business cards, WhatsApp and more. Colours, dot and eye shapes, templates, PNG/JPG export, scan from camera or image. Runs entirely in your browser.",
    },
    ar: {
      title: "مولّد رموز QR — Nibras QR عبر الإنترنت",
      description: "مولّد رموز QR مجاني: روابط وWi-Fi وبطاقات عمل وواتساب وغيرها. ألوان وأشكال وقوالب وتصدير PNG/JPG ومسح من الكاميرا أو صورة. يعمل بالكامل في متصفحك.",
    },
    ru: {
      title: "Генератор QR-кодов — Nibras QR онлайн",
      description: "Бесплатный онлайн-генератор QR-кодов: ссылки, Wi-Fi, визитки, WhatsApp и другое. Цвета, формы, шаблоны, экспорт PNG/JPG, сканирование с камеры или изображения. Работает в браузере.",
    },
    tr: {
      title: "QR kod oluşturucu — Nibras QR çevrimiçi",
      description: "Ücretsiz çevrimiçi QR kod oluşturucu: link, Wi-Fi, kartvizit, WhatsApp ve daha fazlası. Renkler, şekiller, şablonlar, PNG/JPG dışa aktarma, kamera veya görselden tarama. Tamamen tarayıcıda çalışır.",
    },
  },
  "/planner": {
    az: {
      title: "Nibras Planner — tikinti material hesablayıcısı",
      description:
        "Evin ölçülərini yaz — kərpic, sement, boya və kafelin sayını, qiymətini, 3D çertyoju və mənzil planını bir anda gör.",
    },
    en: {
      title: "Nibras Planner — construction material calculator",
      description: "Enter the house size and see brick, cement, paint and tile quantities, the estimate, a live 3D drawing and the floor plan.",
    },
    tr: {
      title: "Nibras Planner — inşaat malzeme hesaplayıcı",
      description: "Ev ölçülerini yaz — tuğla, çimento, boya ve fayans miktarını, maliyeti, 3D çizimi ve daire planını bir arada gör.",
    },
    ar: {
      title: "Nibras Planner — حاسبة مواد البناء",
      description: "اكتب مقاسات البيت وشاهد كمية الطوب والإسمنت والدهان والبلاط والتكلفة والمخطط ثلاثي الأبعاد ومخطط الشقة.",
    },
    ru: {
      title: "Nibras Planner — калькулятор стройматериалов",
      description: "Введите размеры дома и сразу увидьте количество кирпича, цемента, краски и плитки, смету, 3D-чертёж и план.",
    },
  },
  "/privacy/nibras-qr": {
    az: {
      title: "Məxfilik siyasəti — Nibras QR",
      description:
        "Nibras QR məxfilik siyasəti, 11 oktyabr 2026: skan cihazda oflayn, kodlar cihazda saxlanılır, Google ilə giriş könüllüdür (Supabase), reklam yoxdur, ödənişlər Google Play ilə.",
    },
    en: {
      title: "Privacy policy — Nibras QR",
      description:
        "Nibras QR privacy policy, 11 October 2026: scanning on-device and offline, codes stored on the device, optional Google sign-in (Supabase), no ads, payments via Google Play.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras QR",
      description: "سياسة خصوصية Nibras QR، 11 أكتوبر 2026: المسح على الجهاز دون إنترنت، لا إعلانات، الدفع عبر Google Play.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras QR",
      description: "Политика Nibras QR, 11 октября 2026: сканирование на устройстве офлайн, без рекламы, оплата через Google Play.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras QR",
      description:
        "Nibras QR gizlilik politikası, 11 Ekim 2026: tarama cihazda ve çevrimdışı, kodlar cihazda saklanır, Google ile giriş isteğe bağlıdır (Supabase), reklam yoktur, ödemeler Google Play üzerinden.",
    },
  },
  "/privacy/nibras-qr/delete-account": {
    az: {
      title: "Hesabın silinməsi — Nibras QR",
      description: "Nibras QR hesabını tətbiqdə (Hesab › Hesabı sil) və ya nibrascode@gmail.com ünvanına e-poçtla necə silmək olar; nələr silinir, nələr qalır.",
    },
    en: {
      title: "Delete your account — Nibras QR",
      description: "How to delete your Nibras QR account in the app (Account › Delete account) or by email to nibrascode@gmail.com; what is deleted and what is kept.",
    },
    ar: {
      title: "حذف الحساب — Nibras QR",
      description: "كيفية حذف حساب Nibras QR من التطبيق أو بالبريد إلى nibrascode@gmail.com.",
    },
    ru: {
      title: "Удаление аккаунта — Nibras QR",
      description: "Как удалить аккаунт Nibras QR в приложении или письмом на nibrascode@gmail.com.",
    },
    tr: {
      title: "Hesabı sil — Nibras QR",
      description:
        "Nibras QR hesabı uygulamada (Hesap › Hesabı sil) veya nibrascode@gmail.com adresine e-posta ile nasıl silinir; neler silinir, neler kalır.",
    },
  },
  "/privacy/nibras-pdf": {
    az: {
      title: "Məxfilik siyasəti — Nibras PDF",
      description:
        "Nibras PDF 1.0.5 məxfilik siyasəti, 11 oktyabr 2026: sənədlər telefonda qalır, Google Drive 1.0.5-də bağlıdır, hesab Clerk ilə könüllüdür.",
    },
    en: {
      title: "Privacy policy — Nibras PDF",
      description:
        "Nibras PDF 1.0.5 privacy policy, 11 October 2026: files stay on the phone. Free daily limit is 10 document actions, 4 OCR, and 5 scans.",
    },
    ar: {
      title: "سياسة الخصوصية — Nibras PDF",
      description:
        "سياسة خصوصية Nibras PDF 1.0.5 بتاريخ 11 أكتوبر 2026: تبقى الملفات على الهاتف. الحد اليومي 10 عمليات و4 OCR و5 عمليات مسح.",
    },
    ru: {
      title: "Политика конфиденциальности — Nibras PDF",
      description:
        "Политика Nibras PDF 1.0.5 от 11 октября 2026: документы остаются на телефоне, дневной лимит 10 действий, 4 OCR и 5 сканов.",
    },
    tr: {
      title: "Gizlilik politikası — Nibras PDF",
      description:
        "Nibras PDF 1.0.5 gizlilik politikası, 11 Ekim 2026: belgeler cihazda kalır, günlük sınır 10 işlem, 4 OCR ve 5 tarama.",
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
  const game = gameSeo(path, lang);
  if (game) return game;
  const topic = faqTopicFromPath(path);
  if (topic) {
    return {
      title: `${topic.item.q} — Nibras Code`,
      description: topic.item.a,
      keywords: `${topic.item.q}, Nibras Code`,
    };
  }
  const searched = searchTopicFromPath(path);
  if (searched) {
    return {
      title: `${searched.piece.title} — Nibras Code`,
      description: searched.piece.lead.split("\n\n")[0],
      keywords: `${searched.piece.title}, Nibras Code`,
    };
  }
  const searchIndex = searchFromPath(path);
  if (searchIndex) {
    return {
      title: `${searchIndex.section.title[searchIndex.lang]} — Nibras Code`,
      description: searchIndex.section.description[searchIndex.lang],
      keywords: searchIndex.section.title[searchIndex.lang],
    };
  }
  const paket = paketFromPath(path);
  if (paket) {
    return {
      title: `${PAKET.title[paket]} — Nibras Code`,
      description: PAKET.description[paket],
      keywords: PAKET.heading[paket],
    };
  }
  const tool = toolFromPath(path);
  if (tool) {
    const item = TOOLS.find((entry) => entry.id === tool.id)!;
    return {
      title: `${item.label[tool.lang]} — Nibras Code`,
      description: TOOL_LEAD[tool.id][tool.lang].split("\n\n")[0],
      keywords: item.label[tool.lang],
    };
  }
  const tools = toolsFromPath(path);
  if (tools) {
    return {
      title: `${TOOLS_PAGE.title[tools]} — Nibras Code`,
      description: TOOLS_PAGE.description[tools],
      keywords: TOOLS_PAGE.heading[tools],
    };
  }
  const compared = compareTopicFromPath(path);
  if (compared) {
    return {
      title: `${compared.item.title[compared.lang]} — Nibras Code`,
      description: compared.item.lead[compared.lang].split("\n\n")[0],
      keywords: compared.item.title[compared.lang],
    };
  }
  const compareIndex = compareFromPath(path);
  if (compareIndex) {
    return {
      title: `${COMPARE.title[compareIndex.lang]} — Nibras Code`,
      description: COMPARE.description[compareIndex.lang],
      keywords: COMPARE.title[compareIndex.lang],
    };
  }
  const faq = faqFromPath(path);
  if (faq) return { title: faq.title, description: faq.description, keywords: faq.keywords };
  const located = programmingFromPath(path);
  if (located && isCourseSlug(located.slug)) {
    const courseLang = located.lang === "az" ? lang : located.lang;
    const hub = Object.values(HUBS).find((item) => item.slug === located.slug);
    const course = findCourse(located.slug);
    const entry = hub ?? course;
    if (entry) {
      return {
        title: `${entry.title[courseLang]} — Nibras Code`,
        description: entry.description[courseLang],
        keywords: entry.keywords[courseLang],
      };
    }
  }
  if (located) {
    const articleLang = located.lang === "az" ? lang : located.lang;
    const articleSeo = PROGRAMMING_SEO[located.slug];
    if (articleSeo) return articleSeo[articleLang] ?? articleSeo.en;
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
  const pdfTool = path.match(/^\/pdf\/([a-z-]+)$/);
  if (pdfTool && isToolId(pdfTool[1])) return toolSeo(lang, pdfTool[1]);
  const page = PAGES[path] ?? PAGES["/"];
  return page[lang] ?? page.en;
}

export function pageUrl(pathname: string, lang: Lang) {
  const path = stripLocalePrefix(pathname).path;
  if (path === "/") return `${SITE}${homePath(lang) === "/" ? "" : homePath(lang)}`;
  if (isSplitPage(path)) return `${SITE}${localeHref(lang, path)}`;
  const base = `${SITE}${path === "/" ? "" : path}`;
  if (lang === "az") return base || SITE;
  return `${base || SITE}?lang=${lang}`;
}

export function langFromLocation(pathname: string, searchStr?: string): Lang {
  if (pathname === "/ru" || pathname.startsWith("/ru/")) return "ru";
  if (pathname === "/en" || pathname.startsWith("/en/")) return "en";
  if (pathname === "/tr" || pathname.startsWith("/tr/")) return "tr";
  if (pathname === "/ar" || pathname.startsWith("/ar/")) return "ar";
  return readLang(searchStr);
}

export function canonicalUrl(pathname: string, lang: Lang) {
  const path = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  if (faqTopicFromPath(path)) {
    const topic = faqTopicFromPath(path)!;
    return `${SITE}${faqTopicPath(topic.page.lang, topic.item.id)}`;
  }
  const searched = searchTopicFromPath(path);
  if (searched) return `${SITE}${searchTopicPath(searched.lang, searched.kind, searched.item.slug)}`;
  const searchIndex = searchFromPath(path);
  if (searchIndex) return `${SITE}${searchPath(searchIndex.lang, searchIndex.kind)}`;
  const compared = compareTopicFromPath(path);
  if (compared) return `${SITE}${compareTopicPath(compared.lang, compared.item.slug)}`;
  const compareIndex = compareFromPath(path);
  if (compareIndex) return `${SITE}${comparePath(compareIndex.lang)}`;
  const tool = toolFromPath(path);
  if (tool) return `${SITE}${toolPath(tool.lang, tool.id)}`;
  const tools = toolsFromPath(path);
  if (tools) return `${SITE}${toolsPath(tools)}`;
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
    if (articleLang === "az" || isCodeSampleSlug(located.slug) || isCourseSlug(located.slug) || hasProgrammingLocale(articleLang, located.slug)) {
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

function ogImage(path: string) {
  const bare = stripLocalePrefix(path).path;
  if (bare === "/ai" || bare.startsWith("/ai/")) return `${SITE}/og-ai.jpg`;
  if (bare === "/qr" || bare.startsWith("/qr/")) return `${SITE}/og-qr.jpg`;
  if (bare === "/erase" || bare.startsWith("/erase/")) return `${SITE}/og-tools.jpg`;
  if (bare === "/image" || bare.startsWith("/image/")) return `${SITE}/apps/nibras-image.png`;
  if (bare === "/pdf" || bare.startsWith("/pdf/")) return `${SITE}/apps/nibras-pdf.jpg`;
  if (bare === "/tools" || bare.startsWith("/tools/")) return `${SITE}/og-tools.jpg`;
  if (bare === "/faq" || bare.startsWith("/faq/")) return `${SITE}/og-faq.jpg`;
  if (bare === "/programming" || bare.startsWith("/programming/")) return `${SITE}/og-programming.jpg`;
  if (bare.startsWith("/apps/") && bare !== "/apps") return `${SITE}/apps/${bare.split("/").pop()}.jpg`;
  return `${SITE}/og.jpg`;
}

export function buildHead(pathname: string, lang: Lang) {
  const raw = pathname.length > 1 ? pathname.replace(/\/$/, "") : "/";
  const split = stripLocalePrefix(raw);
  const path = split.path === "/" || isSplitPage(split.path) ? split.path : raw;
  const pageLang = split.lang ?? lang;
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
  const url = canonicalUrl(path, pageLang);
  const image = ogImage(path);

  return {
    meta: [
      { title: copy.title },
      { name: "description", content: copy.description },
      ...(copy.keywords ? [{ name: "keywords", content: copy.keywords }] : []),
      { name: "robots", content: "index, follow" },
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
    sameAs: ["https://www.youtube.com/@NibrasCode"],
    description: (PAGES["/"][lang] ?? PAGES["/"].en).description,
    founder: { "@type": "Person", name: "Mahir Əliyev", url: `${SITE}/about` },
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

  const searched = searchTopicFromPath(path);
  if (searched) {
    const answer = [searched.piece.lead, ...searched.piece.points, searched.piece.note, searched.item.code].filter(Boolean).join(" ");
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: searched.piece.title,
      description: searched.piece.lead.split("\n\n")[0],
      url,
      inLanguage: searched.lang,
      mainEntity: [{ "@type": "Question", name: searched.piece.title, acceptedAnswer: { "@type": "Answer", text: answer } }],
      publisher: org,
    };
  }

  const compared = compareTopicFromPath(path);
  if (compared) {
    const answer = [compared.item.lead[compared.lang], ...compared.item.points[compared.lang], compared.item.note[compared.lang]].join(" ");
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: compared.item.title[compared.lang],
      description: compared.item.lead[compared.lang].split("\n\n")[0],
      url,
      inLanguage: compared.lang,
      mainEntity: [{ "@type": "Question", name: compared.item.title[compared.lang], acceptedAnswer: { "@type": "Answer", text: answer } }],
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
      "/apps/nibras-qr": "Nibras QR",
      "/apps/nibras-docs": "Nibras Docs",
      "/apps/nibras-plans": "Nibras Plans",
    };
    const categories: Record<string, string> = {
      "/apps/nibras-arabic": "EducationalApplication",
      "/apps/nibras-pdf": "UtilitiesApplication",
      "/apps/nibras-qr": "UtilitiesApplication",
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

  if (path === "/") {
    const ai: Record<Lang, string> = {
      az: "Nibras AI Nibras Code-un ayrıca köməkçisidir. Sual vermək, kod yazmaq və şəkil hazırlamaq olur.",
      en: "Nibras AI is Nibras Code’s assistant. You can ask a question, write code, and make an image.",
      tr: "Nibras AI, Nibras Code’un yardımcısıdır. Soru sorulur, kod yazılır ve görsel hazırlanır.",
      ar: "Nibras AI مساعد Nibras Code. يمكن طرح سؤال وكتابة كود وإعداد صورة.",
      ru: "Nibras AI — помощник Nibras Code. Можно задать вопрос, написать код и сделать изображение.",
    };
    return {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "WebSite",
          "@id": `${SITE}/#website`,
          name: "Nibras Code",
          url: SITE,
          publisher: { "@id": `${SITE}/#org` },
        },
        {
          "@type": "Organization",
          "@id": `${SITE}/#org`,
          name: "Nibras Code",
          url: SITE,
          email: "Nibrascode@gmail.com",
          sameAs: ["https://www.youtube.com/@NibrasCode"],
          description: copy.description,
          founder: { "@type": "Person", name: "Mahir Əliyev", url: `${SITE}/about` },
        },
        {
          "@type": "SoftwareApplication",
          name: "Nibras AI",
          applicationCategory: "UtilitiesApplication",
          operatingSystem: "Web",
          url: `${SITE}/ai`,
          description: ai[lang] ?? ai.en,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
          provider: { "@id": `${SITE}/#org` },
        },
      ],
    };
  }

  const pdfFaq = path.match(/^\/pdf\/([a-z-]+)$/);
  if (pdfFaq && isToolId(pdfFaq[1])) {
    const faqs = toolSeo(lang, pdfFaq[1]).faqs;
    if (faqs.length) {
      return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        name: copy.title,
        description: copy.description,
        url,
        inLanguage: lang,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
        publisher: org,
      };
    }
  }
  if (path === "/erase" || path === "/image" || path === "/soz-sayi" || path === "/faiz" || path === "/wifi" || path === "/seo" || path === "/flow" || path === "/logic" || path === "/unknown") {
    const block = SEARCH_FAQ[path];
    const items = block.items[lang] ?? block.items.en;
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      name: copy.title,
      description: copy.description,
      url,
      inLanguage: lang,
      mainEntity: items.map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: { "@type": "Answer", text: item.a },
      })),
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

export const SITEMAP_PATHS = [...Object.keys(PAGES), ...TOOL_IDS.map((id) => `/pdf/${id}`)];
