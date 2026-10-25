/** Privacy policy and terms of use for Nibras Studio, Workspace, Learn and Site Doctor. */
import { useI18n } from "@/lib/i18n-context";
import { localeHref } from "@/lib/locale-path";
import type { Lang } from "@/lib/i18n";
import { STUDIO_VERSION } from "@/studio/version";

type Copy = { eyebrow: string; title: string; updated: string; pTitle: string; privacy: string[]; tTitle: string; terms: string[]; contact: string; general: string; generalTerms: string };

const C: Record<Lang, Copy> = {
  az: {
    eyebrow: "Məxfilik və şərtlər", title: "Nibras Studio, Workspace, Learn və Site Doctor", updated: "Yenilənib: 25 oktyabr 2026",
    pTitle: "Məxfilik siyasəti",
    privacy: [
      "Hesab yoxdur. Qeydiyyat, giriş, ad və e-poçt istənmir.",
      "Studio, Workspace və Learn-də layihələr, kod, PDF mətni, suallar, kurslar, nəticələr və nüsxələr yalnız sizin brauzerinizdə (localStorage) saxlanır. Onlar Nibras Code serverinə yüklənmir və bizdə surəti yoxdur.",
      "PDF faylları brauzerdə oxunur. Fayl serverə göndərilmir.",
      "Xarici süni intellekt istifadə olunmur. Studio-dakı «AI köməkçi» brauzerdə işləyən daxili qaydalar və şablonlardır; kodunuz heç yerə göndərilmir.",
      "Site Doctor yazdığınız ünvanı yoxlamaq üçün həmin səhifəni server tərəfdən açır (yalnız açıq səhifə, robots.txt, sitemap və bir neçə keçid). Nəticə sizə qaytarılır və saxlanmır. Sui-istifadənin qarşısını almaq üçün IP ünvanı qısa müddət yalnız yaddaşda sorğu sürətini məhdudlaşdırmaq üçün istifadə olunur.",
      "«Nibras Dev-də aç» düyməsi layihəni linkin özünə (# hissəsinə) yazır; bu hissə serverə göndərilmir. «APK Studio» düyməsi ZIP faylını sizin cihazınıza endirir; onu APK Studio-ya özünüz yükləyirsiniz.",
      "Saytda anonim ziyarət sayğacı ola bilər (səhifə növü və gün). Layihə məzmunu sayğaca düşmür.",
      "Məlumatı silmək: layihəni silmə düyməsi ilə və ya brauzerin sayt məlumatlarını təmizləməklə. Brauzer məlumatını təmizləsəniz, layihələr geri qaytarılmır — vacib işin ZIP nüsxəsini saxlayın.",
    ],
    tTitle: "İstifadə şərtləri",
    terms: [
      "Alətlər pulsuzdur və «olduğu kimi» təqdim olunur. İşləmə, dəqiqlik və ya məlumatın qorunması üçün zəmanət verilmir.",
      "Yazdığınız kod və məzmun sizindir və ona görə məsuliyyət sizin üzərinizdədir. Başqasının hüququnu pozan, zərərli və ya qanuna zidd məzmun yaratmayın.",
      "Site Doctor-u yalnız yoxlamağa haqqınız olan saytlar üçün istifadə edin. Hesabat avtomatik yoxlamadır və peşəkar auditi əvəz etmir.",
      "Studio-nun yoxlama, düzəliş və izah funksiyaları sadə qaydalara əsaslanır; səhv nəticə verə bilər. Dəyişiklikdən əvvəl nüsxə saxlayın.",
      "Brauzer yaddaşı dolarsa və ya təmizlənərsə məlumat itə bilər. Nibras Code bu itkiyə görə məsuliyyət daşımır.",
      "Şərtlər dəyişə bilər; keçərli olan bu səhifənin son halıdır.",
    ],
    contact: "Əlaqə", general: "Saytın ümumi məxfilik siyasəti", generalTerms: "Saytın ümumi istifadə şərtləri",
  },
  en: {
    eyebrow: "Privacy and terms", title: "Nibras Studio, Workspace, Learn and Site Doctor", updated: "Updated: 25 October 2026",
    pTitle: "Privacy policy",
    privacy: [
      "There are no accounts. No sign-up, login, name or email is asked for.",
      "In Studio, Workspace and Learn, your projects, code, PDF text, questions, courses, results and snapshots are stored only in your browser (localStorage). They are not uploaded to a Nibras Code server and we have no copy.",
      "PDF files are read inside your browser. The file is not sent to a server.",
      "No external AI is used. The “AI Assistant” in Studio is a set of built-in rules and templates running in your browser; your code is not sent anywhere.",
      "Site Doctor opens the address you enter from our server to check it (only the public page, robots.txt, sitemap and a few links). The result is returned to you and not stored. To prevent abuse, your IP address is used briefly, in memory only, to limit request rate.",
      "“Open in Nibras Dev” puts the project into the link itself (the part after #), which is not sent to a server. “APK Studio” downloads a ZIP to your device; you upload it to APK Studio yourself.",
      "The site may count anonymous visits (page type and day). Project content is never counted.",
      "To delete data, use the delete-project button or clear this site's data in your browser. Cleared browser data cannot be recovered — keep a ZIP copy of important work.",
    ],
    tTitle: "Terms of use",
    terms: [
      "The tools are free and provided “as is”, without any warranty of availability, accuracy or data safety.",
      "Your code and content are yours, and you are responsible for them. Do not create content that infringes others' rights, is harmful or is unlawful.",
      "Use Site Doctor only on sites you are allowed to check. Its report is an automated check, not a professional audit.",
      "Studio's analyze, fix and explain features use simple rules and can be wrong. Save a snapshot before changes.",
      "Data can be lost if browser storage fills up or is cleared. Nibras Code is not liable for such loss.",
      "These terms may change; the current version of this page applies.",
    ],
    contact: "Contact", general: "General site privacy policy", generalTerms: "General site terms of use",
  },
  tr: {
    eyebrow: "Gizlilik ve koşullar", title: "Nibras Studio, Workspace, Learn ve Site Doctor", updated: "Güncellendi: 25 Ekim 2026",
    pTitle: "Gizlilik politikası",
    privacy: [
      "Hesap yoktur. Kayıt, giriş, ad veya e-posta istenmez.",
      "Studio, Workspace ve Learn'de projeler, kod, PDF metni, sorular, kurslar, sonuçlar ve kopyalar yalnızca tarayıcınızda (localStorage) saklanır. Nibras Code sunucusuna yüklenmez, bizde kopyası yoktur.",
      "PDF dosyaları tarayıcıda okunur; dosya sunucuya gönderilmez.",
      "Harici yapay zekâ kullanılmaz. Studio'daki “AI Asistan”, tarayıcıda çalışan yerleşik kurallar ve şablonlardır; kodunuz hiçbir yere gönderilmez.",
      "Site Doctor, girdiğiniz adresi kontrol etmek için sunucumuzdan açar (yalnızca herkese açık sayfa, robots.txt, sitemap ve birkaç bağlantı). Sonuç size döner ve saklanmaz. Kötüye kullanımı önlemek için IP adresiniz yalnızca bellekte kısa süre hız sınırı için kullanılır.",
      "“Nibras Dev'de aç” projeyi bağlantının # kısmına yazar; bu kısım sunucuya gönderilmez. “APK Studio” ZIP'i cihazınıza indirir; onu kendiniz yüklersiniz.",
      "Site anonim ziyaret sayabilir (sayfa türü ve gün). Proje içeriği sayılmaz.",
      "Veriyi silmek için proje silme düğmesini kullanın veya tarayıcıda site verilerini temizleyin. Temizlenen veri geri gelmez — önemli işlerin ZIP kopyasını saklayın.",
    ],
    tTitle: "Kullanım koşulları",
    terms: [
      "Araçlar ücretsizdir ve “olduğu gibi” sunulur; erişilebilirlik, doğruluk veya veri güvenliği garantisi yoktur.",
      "Kodunuz ve içeriğiniz sizindir; sorumluluğu size aittir. Başkalarının haklarını ihlal eden, zararlı veya yasa dışı içerik oluşturmayın.",
      "Site Doctor'u yalnızca kontrol etme hakkınız olan sitelerde kullanın. Rapor otomatik bir kontroldür, profesyonel denetim değildir.",
      "Studio'nun analiz, düzeltme ve açıklama özellikleri basit kurallara dayanır ve hatalı olabilir. Değişiklikten önce kopya kaydedin.",
      "Tarayıcı depolaması dolarsa veya temizlenirse veri kaybolabilir. Nibras Code bu kayıptan sorumlu değildir.",
      "Koşullar değişebilir; bu sayfanın güncel hali geçerlidir.",
    ],
    contact: "İletişim", general: "Genel gizlilik politikası", generalTerms: "Genel kullanım koşulları",
  },
  ar: {
    eyebrow: "الخصوصية والشروط", title: "Nibras Studio وWorkspace وLearn وSite Doctor", updated: "آخر تحديث: 25 أكتوبر 2026",
    pTitle: "سياسة الخصوصية",
    privacy: [
      "لا توجد حسابات. لا يُطلب تسجيل أو دخول أو اسم أو بريد إلكتروني.",
      "في Studio وWorkspace وLearn تُحفظ المشاريع والكود ونص PDF والأسئلة والدورات والنتائج والنسخ في متصفحك فقط (localStorage). لا تُرفع إلى خادم Nibras Code وليست لدينا نسخة منها.",
      "تُقرأ ملفات PDF داخل المتصفح، ولا يُرسل الملف إلى خادم.",
      "لا يُستخدم ذكاء اصطناعي خارجي. «المساعد الذكي» في Studio قواعد وقوالب مدمجة تعمل في متصفحك، ولا يُرسل كودك إلى أي مكان.",
      "يفتح Site Doctor العنوان الذي تكتبه من خادمنا لفحصه (الصفحة العامة وrobots.txt وsitemap وبعض الروابط فقط). تُعاد النتيجة إليك ولا تُحفظ. لمنع إساءة الاستخدام يُستخدم عنوان IP لفترة قصيرة وفي الذاكرة فقط لتحديد معدل الطلبات.",
      "زر «افتح في Nibras Dev» يضع المشروع داخل الرابط نفسه (الجزء بعد #) ولا يُرسل هذا الجزء إلى الخادم. زر «APK Studio» ينزّل ملف ZIP إلى جهازك وترفعه أنت بنفسك.",
      "قد يعدّ الموقع الزيارات بشكل مجهول (نوع الصفحة واليوم). لا يُعدّ محتوى المشاريع أبداً.",
      "لحذف البيانات استخدم زر حذف المشروع أو امسح بيانات الموقع في المتصفح. لا يمكن استعادة البيانات الممسوحة — احتفظ بنسخة ZIP من الأعمال المهمة.",
    ],
    tTitle: "شروط الاستخدام",
    terms: [
      "الأدوات مجانية وتُقدَّم «كما هي» دون أي ضمان للتوفر أو الدقة أو سلامة البيانات.",
      "كودك ومحتواك ملكك وأنت مسؤول عنهما. لا تنشئ محتوى ينتهك حقوق الآخرين أو ضاراً أو مخالفاً للقانون.",
      "استخدم Site Doctor فقط على المواقع التي يحق لك فحصها. التقرير فحص آلي وليس تدقيقاً مهنياً.",
      "ميزات التحليل والإصلاح والشرح في Studio تعتمد على قواعد بسيطة وقد تخطئ. احفظ نسخة قبل التغييرات.",
      "قد تضيع البيانات إذا امتلأت ذاكرة المتصفح أو مُسحت، ولا تتحمل Nibras Code مسؤولية ذلك.",
      "قد تتغير هذه الشروط، والنسخة الحالية من هذه الصفحة هي المعتمدة.",
    ],
    contact: "التواصل", general: "سياسة الخصوصية العامة للموقع", generalTerms: "شروط الاستخدام العامة للموقع",
  },
  ru: {
    eyebrow: "Конфиденциальность и условия", title: "Nibras Studio, Workspace, Learn и Site Doctor", updated: "Обновлено: 25 октября 2026",
    pTitle: "Политика конфиденциальности",
    privacy: [
      "Аккаунтов нет. Регистрация, вход, имя или e-mail не запрашиваются.",
      "В Studio, Workspace и Learn проекты, код, текст PDF, вопросы, курсы, результаты и снимки хранятся только в вашем браузере (localStorage). Они не загружаются на сервер Nibras Code, у нас нет их копии.",
      "PDF читаются в браузере; файл на сервер не отправляется.",
      "Внешний ИИ не используется. «Помощник» в Studio — встроенные правила и шаблоны в браузере; ваш код никуда не отправляется.",
      "Site Doctor открывает указанный адрес с нашего сервера для проверки (только публичную страницу, robots.txt, sitemap и несколько ссылок). Результат возвращается вам и не сохраняется. Для защиты от злоупотреблений IP-адрес кратко используется только в памяти для ограничения частоты запросов.",
      "«Открыть в Nibras Dev» записывает проект в саму ссылку (часть после #), которая не отправляется на сервер. «APK Studio» скачивает ZIP на ваше устройство; загружаете его вы сами.",
      "Сайт может анонимно считать посещения (тип страницы и день). Содержимое проектов не учитывается.",
      "Удалить данные можно кнопкой удаления проекта или очисткой данных сайта в браузере. Очищенные данные не восстановить — храните ZIP важных работ.",
    ],
    tTitle: "Условия использования",
    terms: [
      "Инструменты бесплатны и предоставляются «как есть», без гарантий доступности, точности или сохранности данных.",
      "Ваш код и контент принадлежат вам, и вы несёте за них ответственность. Не создавайте контент, нарушающий чужие права, вредоносный или незаконный.",
      "Используйте Site Doctor только для сайтов, которые вам разрешено проверять. Отчёт — автоматическая проверка, а не профессиональный аудит.",
      "Анализ, исправление и объяснение в Studio основаны на простых правилах и могут ошибаться. Сохраняйте снимок перед изменениями.",
      "Данные могут пропасть при переполнении или очистке хранилища браузера. Nibras Code за это не отвечает.",
      "Условия могут меняться; действует текущая версия этой страницы.",
    ],
    contact: "Контакты", general: "Общая политика конфиденциальности", generalTerms: "Общие условия использования",
  },
};

export const LEGAL_LABEL: Record<Lang, { privacy: string; terms: string }> = {
  az: { privacy: "Məxfilik", terms: "İstifadə şərtləri" }, en: { privacy: "Privacy", terms: "Terms of use" }, tr: { privacy: "Gizlilik", terms: "Kullanım koşulları" },
  ar: { privacy: "الخصوصية", terms: "شروط الاستخدام" }, ru: { privacy: "Конфиденциальность", terms: "Условия" },
};

/** Small footer used by the tools: version, privacy and terms links. */
export function ToolsLegalLinks({ version = false, className = "" }: { version?: boolean; className?: string }) {
  const { lang } = useI18n();
  const l = LEGAL_LABEL[lang] ?? LEGAL_LABEL.en;
  const base = localeHref(lang, "/tools-legal");
  return (
    <p className={"flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted " + className} data-testid="tools-legal">
      {version ? <span>Nibras Studio v{STUDIO_VERSION}</span> : null}
      <a className="underline-offset-2 hover:underline" href={`${base}#privacy`}>{l.privacy}</a>
      <a className="underline-offset-2 hover:underline" href={`${base}#terms`}>{l.terms}</a>
    </p>
  );
}

export function ToolsLegalPage() {
  const { lang } = useI18n();
  const c = C[lang] ?? C.en;
  return (
    <main className="why-page" dir={lang === "ar" ? "rtl" : "ltr"} data-testid="tools-legal-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow"><i />{c.eyebrow}</p>
      <h1>{c.title}</h1>
      <p className="text-sm opacity-70">{c.updated} · Nibras Studio v{STUDIO_VERSION}</p>
      <h2 id="privacy" className="mt-8 scroll-mt-28 text-2xl font-bold">{c.pTitle}</h2>
      {c.privacy.map((x) => <p key={x}>{x}</p>)}
      <h2 id="terms" className="mt-8 scroll-mt-28 text-2xl font-bold">{c.tTitle}</h2>
      {c.terms.map((x) => <p key={x}>{x}</p>)}
      <h2 className="mt-8 text-xl font-bold">{c.contact}</h2>
      <p><a href="mailto:nibrascode@gmail.com">nibrascode@gmail.com</a> · <a href={localeHref(lang, "/contact")}>nibrascode.com/contact</a></p>
      <p><a href={localeHref(lang, "/privacy")}>{c.general}</a> · <a href={localeHref(lang, "/terms")}>{c.generalTerms}</a></p>
    </main>
  );
}
