import { notFound } from "@tanstack/react-router";
import { HelpCircle, Info, ShieldCheck } from "lucide-react";
import { BAR_GROUPS, BarGroupView, GROUP_SLUG, type BarGroup } from "@/components/home-bars";
import { InfoCard, InfoCards, splitSentences } from "@/components/info-card";
import { homePath, localeHref } from "@/lib/locale-path";
import type { Lang } from "@/lib/i18n";

type L = Record<Lang, string>;

const LEAD: Record<BarGroup, L> = {
  g1: { az: "Saytdakı bütün alətlər. Hesab açılmır.", en: "All tools on the site. No account needed.", tr: "Sitedeki tüm araçlar. Hesap gerekmez.", ar: "كل أدوات الموقع. لا حاجة إلى حساب.", ru: "Все инструменты сайта. Аккаунт не нужен." },
  g2: { az: "Kod yazmaq, APK və iş paneli — hamısı bir siyahıda.", en: "Writing code, APK, and work panels — all in one list.", tr: "Kod yazmak, APK ve çalışma paneli — hepsi bir listede.", ar: "كتابة الكود وAPK ولوحات العمل — كلها في قائمة واحدة.", ru: "Код, APK и рабочие панели — всё в одном списке." },
  g3: { az: "Dərslər, yoxlamalar və yardım səhifələri.", en: "Lessons, checks, and help pages.", tr: "Dersler, kontroller ve yardım sayfaları.", ar: "الدروس والفحوص وصفحات المساعدة.", ru: "Уроки, проверки и страницы помощи." },
};

const DESC: Record<BarGroup, L> = {
  g1: {
    az: "Pulsuz onlayn alətlər: PDF hazırla, QR hazırla, fon sil, şəkil sıx, hesabla, plan hazırla, sual qur və Nibras AI. Hesab lazım deyil.",
    en: "Free online tools: make a PDF, make a QR code, remove a background, compress photos, calculate, make a plan, build questions and Nibras AI. No account.",
    tr: "Ücretsiz çevrim içi araçlar: PDF hazırla, QR hazırla, arka plan sil, foto sıkıştır, hesapla, plan hazırla, soru kur ve Nibras AI. Hesap gerekmez.",
    ar: "أدوات مجانية على الإنترنت: PDF وQR وحذف الخلفية وضغط الصور والحساب والخطط والأسئلة وNibras AI. بلا حساب.",
    ru: "Бесплатные онлайн-инструменты: PDF, QR-код, удаление фона, сжатие фото, расчёты, планы, вопросы и Nibras AI. Без аккаунта.",
  },
  g2: {
    az: "Nibras Studio, Workspace və APK Studio: brauzerdə kod yaz, layihəni saxla və APK üçün ZIP hazırla. Pulsuz, hesabsız.",
    en: "Nibras Studio, Workspace and APK Studio: write code in the browser, keep projects and prepare a ZIP for an APK. Free, no account.",
    tr: "Nibras Studio, Workspace ve APK Studio: tarayıcıda kod yaz, projeyi sakla ve APK için ZIP hazırla. Ücretsiz, hesapsız.",
    ar: "Nibras Studio وWorkspace وAPK Studio: اكتب الكود في المتصفح واحفظ المشروع وجهّز ZIP لتطبيق APK. مجاني وبلا حساب.",
    ru: "Nibras Studio, Workspace и APK Studio: пишите код в браузере, храните проекты и готовьте ZIP для APK. Бесплатно, без аккаунта.",
  },
  g3: {
    az: "Learn, Logic Lab, Site Doctor, Error Help və digər yoxlama alətləri: öyrən, saytı yoxla, xətanı başa düş. Pulsuz.",
    en: "Learn, Logic Lab, Site Doctor, Error Help and other check tools: learn, check a site, understand an error. Free.",
    tr: "Learn, Logic Lab, Site Doctor, Error Help ve diğer kontrol araçları: öğren, siteyi kontrol et, hatayı anla. Ücretsiz.",
    ar: "Learn وLogic Lab وSite Doctor وError Help وأدوات فحص أخرى: تعلّم وافحص موقعك وافهم الخطأ. مجاناً.",
    ru: "Learn, Logic Lab, Site Doctor, Error Help и другие проверки: учитесь, проверяйте сайт, разбирайте ошибки. Бесплатно.",
  },
};

const HOW_T: L = { az: "Necə istifadə etməli", en: "How to use", tr: "Nasıl kullanılır", ar: "طريقة الاستخدام", ru: "Как пользоваться" };
const FAQ_T: L = { az: "Tez-tez verilən suallar", en: "Frequently asked questions", tr: "Sık sorulan sorular", ar: "أسئلة شائعة", ru: "Частые вопросы" };
const PRIV_T: L = { az: "Məxfilik", en: "Privacy", tr: "Gizlilik", ar: "الخصوصية", ru: "Конфиденциальность" };
const POLICY: L = { az: "Məxfilik siyasəti", en: "Privacy policy", tr: "Gizlilik politikası", ar: "سياسة الخصوصية", ru: "Политика конфиденциальности" };
const AI_POLICY: L = { az: "Nibras AI məxfiliyi", en: "Nibras AI privacy", tr: "Nibras AI gizliliği", ar: "خصوصية Nibras AI", ru: "Конфиденциальность Nibras AI" };

const HOW: L = {
  az: "Lazım olan alətə toxunun — o dərhal açılır. Hesab, qeydiyyat və ödəniş yoxdur. Hamısı telefonda və kompüterdə brauzerdə işləyir.",
  en: "Tap the tool you need — it opens right away. There is no account, sign-up or payment. Everything works in the browser on phone and computer.",
  tr: "İhtiyacınız olan araca dokunun — hemen açılır. Hesap, kayıt veya ödeme yoktur. Hepsi telefonda ve bilgisayarda tarayıcıda çalışır.",
  ar: "اضغط على الأداة التي تحتاجها فتُفتح فوراً. لا حساب ولا تسجيل ولا دفع. كل شيء يعمل في المتصفح على الهاتف والكمبيوتر.",
  ru: "Нажмите нужный инструмент — он сразу откроется. Нет аккаунта, регистрации и оплаты. Всё работает в браузере на телефоне и компьютере.",
};

type QA = { q: L; a: L };
const FAQ: Record<BarGroup, QA[]> = {
  g1: [
    { q: { az: "Bu alətlər pulsuzdur?", en: "Are these tools free?", tr: "Bu araçlar ücretsiz mi?", ar: "هل هذه الأدوات مجانية؟", ru: "Эти инструменты бесплатные?" },
      a: { az: "Bəli, pulsuzdur. Hesab açmaq lazım deyil.", en: "Yes, they are free. You do not need an account.", tr: "Evet, ücretsiz. Hesap açmanız gerekmez.", ar: "نعم، مجانية. لا تحتاج إلى حساب.", ru: "Да, бесплатно. Аккаунт не нужен." } },
    { q: { az: "Faylım serverə yüklənir?", en: "Is my file uploaded to a server?", tr: "Dosyam sunucuya yüklenir mi?", ar: "هل يُرفع ملفي إلى خادم؟", ru: "Мой файл загружается на сервер?" },
      a: { az: "PDF, QR, fon silmə və şəkil sıxma brauzerinizdə işləyir. Fayl Nibras Code serverinə göndərilmir.", en: "PDF, QR, background removal and photo compression run in your browser. The file is not sent to a Nibras Code server.", tr: "PDF, QR, arka plan silme ve foto sıkıştırma tarayıcınızda çalışır. Dosya Nibras Code sunucusuna gönderilmez.", ar: "PDF وQR وحذف الخلفية وضغط الصور تعمل في متصفحك. لا يُرسل الملف إلى خادم Nibras Code.", ru: "PDF, QR, удаление фона и сжатие фото работают в браузере. Файл не отправляется на сервер Nibras Code." } },
    { q: { az: "Telefonda işləyir?", en: "Does it work on a phone?", tr: "Telefonda çalışır mı?", ar: "هل تعمل على الهاتف؟", ru: "Работает ли на телефоне?" },
      a: { az: "Bəli, istənilən müasir brauzerdə işləyir. Proqram quraşdırmaq lazım deyil.", en: "Yes, in any modern browser. Nothing to install.", tr: "Evet, her modern tarayıcıda çalışır. Kurulum gerekmez.", ar: "نعم، في أي متصفح حديث. لا حاجة إلى تثبيت.", ru: "Да, в любом современном браузере. Ничего устанавливать не нужно." } },
    { q: { az: "Nibras AI nədir?", en: "What is Nibras AI?", tr: "Nibras AI nedir?", ar: "ما هو Nibras AI؟", ru: "Что такое Nibras AI?" },
      a: { az: "Sual yazıb cavab aldığınız söhbət alətidir. Yazdığınız mətn cavab üçün serverə göndərilir.", en: "A chat tool where you type a question and get an answer. Your text is sent to a server to make the answer.", tr: "Soru yazıp cevap aldığınız sohbet aracıdır. Yazdığınız metin cevap için sunucuya gönderilir.", ar: "أداة محادثة تكتب فيها سؤالك وتحصل على جواب. يُرسل نصك إلى الخادم لإعداد الجواب.", ru: "Чат, где вы пишете вопрос и получаете ответ. Ваш текст отправляется на сервер для ответа." } },
  ],
  g2: [
    { q: { az: "Studio nədir?", en: "What is Studio?", tr: "Studio nedir?", ar: "ما هو Studio؟", ru: "Что такое Studio?" },
      a: { az: "Brauzerdə kod yazmaq və yoxlamaq üçün redaktordur. Layihələr brauzerinizdə saxlanır.", en: "An editor for writing and checking code in the browser. Projects are saved in your browser.", tr: "Tarayıcıda kod yazmak ve kontrol etmek için bir editördür. Projeler tarayıcınızda saklanır.", ar: "محرر لكتابة الكود وفحصه في المتصفح. تُحفظ المشاريع في متصفحك.", ru: "Редактор для написания и проверки кода в браузере. Проекты хранятся в вашем браузере." } },
    { q: { az: "APK necə hazırlanır?", en: "How do I make an APK?", tr: "APK nasıl hazırlanır?", ar: "كيف أجهّز APK؟", ru: "Как сделать APK?" },
      a: { az: "APK Studio layihəni ZIP kimi cihazınıza endirir. Onu sonra özünüz yığırsınız.", en: "APK Studio downloads the project as a ZIP to your device. You build it yourself afterwards.", tr: "APK Studio projeyi ZIP olarak cihazınıza indirir. Sonra kendiniz derlersiniz.", ar: "يحمّل APK Studio المشروع كملف ZIP إلى جهازك. ثم تبنيه بنفسك.", ru: "APK Studio скачивает проект ZIP-архивом на ваше устройство. Собираете его вы сами." } },
    { q: { az: "Brauzeri təmizləsəm nə olur?", en: "What if I clear my browser?", tr: "Tarayıcıyı temizlersem ne olur?", ar: "ماذا لو مسحت بيانات المتصفح؟", ru: "Что будет, если очистить браузер?" },
      a: { az: "Layihələr silinir və geri qaytarılmır. Vacib işin ZIP nüsxəsini saxlayın.", en: "Projects are deleted and cannot be restored. Keep a ZIP copy of important work.", tr: "Projeler silinir ve geri gelmez. Önemli işlerin ZIP kopyasını saklayın.", ar: "تُحذف المشاريع ولا يمكن استعادتها. احتفظ بنسخة ZIP من العمل المهم.", ru: "Проекты удалятся без возможности восстановления. Храните ZIP-копию важной работы." } },
  ],
  g3: [
    { q: { az: "Kimlər üçündür?", en: "Who is it for?", tr: "Kimler için?", ar: "لمن هذه الأدوات؟", ru: "Для кого это?" },
      a: { az: "Proqramlaşdırmağa yeni başlayanlar üçündür. Sadə dildə izah olunur.", en: "For people new to programming. Everything is explained in plain words.", tr: "Programlamaya yeni başlayanlar için. Sade dille anlatılır.", ar: "للمبتدئين في البرمجة. الشرح بلغة بسيطة.", ru: "Для тех, кто только начинает программировать. Объяснения простым языком." } },
    { q: { az: "Site Doctor nəyi yoxlayır?", en: "What does Site Doctor check?", tr: "Site Doctor neyi kontrol eder?", ar: "ماذا يفحص Site Doctor؟", ru: "Что проверяет Site Doctor?" },
      a: { az: "Yazdığınız ünvanın açıq səhifəsini, robots.txt və sitemap faylını yoxlayır. Nəticə saxlanmır.", en: "It checks the public page, robots.txt and sitemap of the address you enter. The result is not stored.", tr: "Girdiğiniz adresin açık sayfasını, robots.txt ve sitemap dosyasını kontrol eder. Sonuç saklanmaz.", ar: "يفحص الصفحة العامة وملف robots.txt وsitemap للعنوان الذي تكتبه. لا تُحفظ النتيجة.", ru: "Проверяет публичную страницу, robots.txt и sitemap указанного адреса. Результат не сохраняется." } },
    { q: { az: "Error Help necə işləyir?", en: "How does Error Help work?", tr: "Error Help nasıl çalışır?", ar: "كيف يعمل Error Help؟", ru: "Как работает Error Help?" },
      a: { az: "Xəta mətnini yapışdırırsınız və sadə izah alırsınız. Mətn izah üçün serverə göndərilir.", en: "You paste an error message and get a plain explanation. The text is sent to a server for the explanation.", tr: "Hata metnini yapıştırırsınız ve sade bir açıklama alırsınız. Metin açıklama için sunucuya gönderilir.", ar: "تلصق نص الخطأ وتحصل على شرح بسيط. يُرسل النص إلى الخادم للشرح.", ru: "Вставляете текст ошибки и получаете простое объяснение. Текст отправляется на сервер." } },
  ],
};

const PRIV: Record<BarGroup, L> = {
  g1: {
    az: "PDF hazırla, QR hazırla, fon sil, şəkil sıx və ZIP brauzerinizdə işləyir. Seçdiyiniz fayllar Nibras Code serverinə göndərilmir. Hesabla, Plan hazırla və Sual qur məlumatı brauzerdə saxlayır. SEO yoxla yazdığınız ünvanı yoxlamaq üçün serverə göndərir. Nibras AI-yə yazdığınız mətn cavab üçün serverə göndərilir. Şəxsi məlumat, şifrə və ya kart nömrəsi yazmayın.",
    en: "Make a PDF, Make a QR, Remove background, Compress photo and ZIP run in your browser. Files you choose are not sent to a Nibras Code server. Calculate, Make a plan and Build questions keep data in the browser. Check SEO sends the address you enter to the server to check it. Text you type into Nibras AI is sent to a server for the answer. Do not type personal data, passwords or card numbers.",
    tr: "PDF hazırla, QR hazırla, arka plan sil, foto sıkıştır ve ZIP tarayıcınızda çalışır. Seçtiğiniz dosyalar Nibras Code sunucusuna gönderilmez. Hesapla, Plan hazırla ve Soru kur verileri tarayıcıda saklar. SEO bak girdiğiniz adresi kontrol için sunucuya gönderir. Nibras AI'ya yazdığınız metin cevap için sunucuya gönderilir. Kişisel veri, şifre veya kart numarası yazmayın.",
    ar: "أدوات PDF وQR وحذف الخلفية وضغط الصور وZIP تعمل في متصفحك. لا تُرسل الملفات التي تختارها إلى خادم Nibras Code. أدوات الحساب والخطة والأسئلة تحفظ البيانات في المتصفح. فحص SEO يرسل العنوان الذي تكتبه إلى الخادم لفحصه. النص الذي تكتبه في Nibras AI يُرسل إلى الخادم للجواب. لا تكتب بيانات شخصية أو كلمات مرور أو أرقام بطاقات.",
    ru: "PDF, QR, удаление фона, сжатие фото и ZIP работают в браузере. Выбранные файлы не отправляются на сервер Nibras Code. Расчёты, планы и вопросы хранят данные в браузере. Проверка SEO отправляет введённый адрес на сервер для проверки. Текст для Nibras AI отправляется на сервер для ответа. Не вводите личные данные, пароли или номера карт.",
  },
  g2: {
    az: "Studio və Workspace layihələri yalnız brauzerinizdə saxlanır. Kodunuz Nibras Code serverinə yüklənmir. Studio-dakı köməkçi brauzerdə işləyən qaydalardır və kodu xarici AI-yə göndərmir.",
    en: "Studio and Workspace projects are stored only in your browser. Your code is not uploaded to a Nibras Code server. The Studio assistant is rules running in your browser and does not send code to external AI.",
    tr: "Studio ve Workspace projeleri yalnızca tarayıcınızda saklanır. Kodunuz Nibras Code sunucusuna yüklenmez. Studio yardımcısı tarayıcıda çalışan kurallardır ve kodu harici yapay zekâya göndermez.",
    ar: "تُحفظ مشاريع Studio وWorkspace في متصفحك فقط. لا يُرفع كودك إلى خادم Nibras Code. مساعد Studio قواعد تعمل في متصفحك ولا يرسل الكود إلى ذكاء اصطناعي خارجي.",
    ru: "Проекты Studio и Workspace хранятся только в вашем браузере. Код не загружается на сервер Nibras Code. Помощник Studio — это правила в браузере, код не уходит во внешний ИИ.",
  },
  g3: {
    az: "Learn, Logic Lab və File Check brauzerinizdə işləyir. Site Doctor ünvanı yoxlamaq üçün serverə göndərir və nəticəni saxlamır. Error Help xəta mətnini izah üçün serverə və AI xidmətlərinə göndərir. Gizli açar və şifrə yapışdırmayın.",
    en: "Learn, Logic Lab and File Check run in your browser. Site Doctor sends the address to the server to check it and does not store the result. Error Help sends the error text to the server and AI services for the explanation. Do not paste secret keys or passwords.",
    tr: "Learn, Logic Lab ve File Check tarayıcınızda çalışır. Site Doctor adresi kontrol için sunucuya gönderir ve sonucu saklamaz. Error Help hata metnini açıklama için sunucuya ve yapay zekâ servislerine gönderir. Gizli anahtar veya şifre yapıştırmayın.",
    ar: "تعمل Learn وLogic Lab وFile Check في متصفحك. يرسل Site Doctor العنوان إلى الخادم لفحصه ولا يحفظ النتيجة. يرسل Error Help نص الخطأ إلى الخادم وخدمات الذكاء الاصطناعي للشرح. لا تلصق مفاتيح سرية أو كلمات مرور.",
    ru: "Learn, Logic Lab и File Check работают в браузере. Site Doctor отправляет адрес на сервер для проверки и не хранит результат. Error Help отправляет текст ошибки на сервер и в ИИ-сервисы. Не вставляйте секретные ключи и пароли.",
  },
};

export function groupFromSlug(slug: string): BarGroup {
  const found = (Object.keys(GROUP_SLUG) as BarGroup[]).find((g) => GROUP_SLUG[g] === slug);
  if (!found) throw notFound();
  return found;
}

export function groupTitle(lang: Lang, group: BarGroup) {
  return `${BAR_GROUPS[group][lang]} — Nibras Code`;
}

export function groupDescription(lang: Lang, group: BarGroup) {
  return DESC[group][lang];
}

export function groupMeta(lang: Lang, group: BarGroup) {
  const title = groupTitle(lang, group);
  const description = groupDescription(lang, group);
  return [
    { title },
    { property: "og:title", content: title },
    { name: "description", content: description },
    { property: "og:description", content: description },
  ];
}

function Sentences({ text, icon }: { text: string; icon: typeof Info }) {
  return (
    <InfoCards>
      {splitSentences(text).map((s, i) => (
        <InfoCard key={i} icon={icon}>
          <p>{s}</p>
        </InfoCard>
      ))}
    </InfoCards>
  );
}

export function GroupPage({ lang, group }: { lang: Lang; group: BarGroup }) {
  return (
    <main className="why-page nx-group-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        <a href={homePath(lang)}>Nibras Code</a>
      </p>
      <h1>{BAR_GROUPS[group][lang]}</h1>
      <p>{LEAD[group][lang]}</p>
      <div className="nx-bars nx-bars--full">
        <BarGroupView lang={lang} group={group} full />
      </div>
      <h2 className="info-section-title">{HOW_T[lang]}</h2>
      <Sentences text={HOW[lang]} icon={Info} />
      <h2 className="info-section-title">{FAQ_T[lang]}</h2>
      {FAQ[group].map((x) => (
        <section key={x.q.en}>
          <h3 className="info-section-title">{x.q[lang]}</h3>
          <Sentences text={x.a[lang]} icon={HelpCircle} />
        </section>
      ))}
      <h2 id="privacy" className="info-section-title">{PRIV_T[lang]}</h2>
      <Sentences text={PRIV[group][lang]} icon={ShieldCheck} />
      <InfoCards>
        <InfoCard icon={ShieldCheck} title={POLICY[lang]} href={`${localeHref(lang, "/tools-legal")}#privacy`} />
        {group === "g1" ? <InfoCard icon={ShieldCheck} title={AI_POLICY[lang]} href={localeHref(lang, "/privacy")} /> : null}
      </InfoCards>
    </main>
  );
}
