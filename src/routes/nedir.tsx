import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/nedir")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/nedir"), replace: true });
  },
  component: NedirPage,
});

type Copy = { title: string; lead: string; whoH: string; who: string; prodH: string; prods: [string, string, string][]; privH: string; priv: string; more: string; contact: string };

const COPY: Record<Lang, Copy> = {
  az: {
    title: "Nibras Code nədir?",
    lead: "Nibras Code pulsuz onlayn alətlər, Android tətbiqləri və öyrənmə səhifələri olan müstəqil sayt və layihədir. Qurucusu Mahir Əliyevdir.",
    whoH: "Kim üçündür",
    who: "PDF və şəkillə tez iş görmək istəyənlər, tələbələr, kod öyrənənlər və ərəb dilini öyrənənlər üçün. Sayt 5 dildədir: azərbaycan, ingilis, türk, ərəb, rus.",
    prodH: "Əsas məhsullar",
    prods: [["/pdf", "PDF alətləri", "birləşdirmək, bölmək, sıxmaq, səhifə nömrəsi, OCR və s."], ["/image", "Şəkil alətləri", "sıxmaq, ölçü, format, fon silmək"], ["/qr", "QR kod", "link, Wi-Fi, vizit kartı"], ["/ai", "Nibras AI", "sual-cavab köməkçisi"], ["/apps", "Tətbiqlər", "Nibras PDF, Nibras QR, Nibras Arabic və b."], ["/nece", "Bələdçilər", "addım-addım izahlar"]],
    privH: "Məxfilik",
    priv: "PDF, şəkil, QR və ZIP alətləri brauzerdə işləyir, fayl serverə getmir. Hesab lazım deyil.",
    more: "Ətraflı",
    contact: "Əlaqə: nibrascode@gmail.com",
  },
  en: {
    title: "What is Nibras Code?",
    lead: "Nibras Code is an independent site and project with free online tools, Android apps and learning pages. Its founder is Mahir Aliyev.",
    whoH: "Who it is for",
    who: "People who want quick PDF and image work, students, people learning to code, and Arabic learners. The site is in 5 languages: Azerbaijani, English, Turkish, Arabic, Russian.",
    prodH: "Main products",
    prods: [["/pdf", "PDF tools", "merge, split, compress, page numbers, OCR and more"], ["/image", "Image tools", "compress, resize, convert, remove background"], ["/qr", "QR codes", "link, Wi-Fi, contact card"], ["/ai", "Nibras AI", "question-and-answer assistant"], ["/apps", "Apps", "Nibras PDF, Nibras QR, Nibras Arabic and more"], ["/nece", "Guides", "step-by-step how-tos"]],
    privH: "Privacy",
    priv: "The PDF, image, QR and ZIP tools run in the browser; files do not go to a server. No account is needed.",
    more: "More",
    contact: "Contact: nibrascode@gmail.com",
  },
  tr: {
    title: "Nibras Code nedir?",
    lead: "Nibras Code ücretsiz çevrim içi araçlar, Android uygulamaları ve öğrenme sayfaları sunan bağımsız bir site ve projedir. Kurucusu Mahir Aliyev'dir.",
    whoH: "Kimin için",
    who: "PDF ve resimle hızlı iş yapmak isteyenler, öğrenciler, kod öğrenenler ve Arapça öğrenenler için. Site 5 dildedir: Azerbaycanca, İngilizce, Türkçe, Arapça, Rusça.",
    prodH: "Ana ürünler",
    prods: [["/pdf", "PDF araçları", "birleştirme, bölme, sıkıştırma, sayfa numarası, OCR vb."], ["/image", "Resim araçları", "sıkıştırma, boyut, format, arka plan silme"], ["/qr", "QR kod", "bağlantı, Wi-Fi, kartvizit"], ["/ai", "Nibras AI", "soru-cevap asistanı"], ["/apps", "Uygulamalar", "Nibras PDF, Nibras QR, Nibras Arabic ve diğerleri"], ["/nece", "Rehberler", "adım adım anlatımlar"]],
    privH: "Gizlilik",
    priv: "PDF, resim, QR ve ZIP araçları tarayıcıda çalışır, dosya sunucuya gitmez. Hesap gerekmez.",
    more: "Daha fazla",
    contact: "İletişim: nibrascode@gmail.com",
  },
  ar: {
    title: "ما هو Nibras Code؟",
    lead: "Nibras Code موقع ومشروع مستقل يقدّم أدوات مجانية على الإنترنت وتطبيقات أندرويد وصفحات تعليمية. مؤسسه ماهر علييف.",
    whoH: "لمن هو",
    who: "لمن يريد إنجاز عمل PDF والصور بسرعة، وللطلاب، ومتعلمي البرمجة، ومتعلمي العربية. الموقع بخمس لغات: الأذربيجانية والإنجليزية والتركية والعربية والروسية.",
    prodH: "المنتجات الرئيسية",
    prods: [["/pdf", "أدوات PDF", "دمج، تقسيم، ضغط، ترقيم الصفحات، OCR وغيرها"], ["/image", "أدوات الصور", "ضغط، تغيير الحجم، تحويل، إزالة الخلفية"], ["/qr", "رمز QR", "رابط، Wi-Fi، بطاقة اتصال"], ["/ai", "Nibras AI", "مساعد سؤال وجواب"], ["/apps", "التطبيقات", "Nibras PDF وNibras QR وNibras Arabic وغيرها"], ["/nece", "الأدلة", "شروح خطوة بخطوة"]],
    privH: "الخصوصية",
    priv: "أدوات PDF والصور وQR وZIP تعمل في المتصفح، ولا يذهب الملف إلى خادم. لا حاجة إلى حساب.",
    more: "المزيد",
    contact: "التواصل: nibrascode@gmail.com",
  },
  ru: {
    title: "Что такое Nibras Code?",
    lead: "Nibras Code — независимый сайт и проект с бесплатными онлайн-инструментами, Android-приложениями и учебными страницами. Основатель — Махир Алиев.",
    whoH: "Для кого",
    who: "Для тех, кому нужно быстро поработать с PDF и изображениями, для студентов, изучающих программирование и арабский язык. Сайт на 5 языках: азербайджанском, английском, турецком, арабском, русском.",
    prodH: "Основные продукты",
    prods: [["/pdf", "Инструменты PDF", "объединение, разделение, сжатие, нумерация, OCR и другое"], ["/image", "Инструменты изображений", "сжатие, размер, формат, удаление фона"], ["/qr", "QR-коды", "ссылка, Wi-Fi, визитка"], ["/ai", "Nibras AI", "помощник вопрос-ответ"], ["/apps", "Приложения", "Nibras PDF, Nibras QR, Nibras Arabic и другие"], ["/nece", "Руководства", "пошаговые инструкции"]],
    privH: "Конфиденциальность",
    priv: "Инструменты PDF, изображений, QR и ZIP работают в браузере, файл не уходит на сервер. Аккаунт не нужен.",
    more: "Подробнее",
    contact: "Связь: nibrascode@gmail.com",
  },
};

const MORE: Record<Lang, [string, string][]> = {
  az: [["/trust", "Şəffaflıq və xidmət səviyyəsi"], ["/about", "Haqqımızda"], ["/privacy", "Məxfilik siyasətləri"], ["/contact", "Əlaqə"]],
  en: [["/trust", "Transparency and service level"], ["/about", "About"], ["/privacy", "Privacy policies"], ["/contact", "Contact"]],
  tr: [["/trust", "Şeffaflık ve hizmet seviyesi"], ["/about", "Hakkımızda"], ["/privacy", "Gizlilik politikaları"], ["/contact", "İletişim"]],
  ar: [["/trust", "الشفافية ومستوى الخدمة"], ["/about", "من نحن"], ["/privacy", "سياسات الخصوصية"], ["/contact", "تواصل"]],
  ru: [["/trust", "Прозрачность и уровень сервиса"], ["/about", "О нас"], ["/privacy", "Политики конфиденциальности"], ["/contact", "Контакт"]],
};

export function NedirPage() {
  const { lang } = useI18n();
  const c = COPY[lang];
  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <h1>{c.title}</h1>
      <p className="why-lead">{c.lead}</p>
      <section>
        <h2>{c.whoH}</h2>
        <p>{c.who}</p>
      </section>
      <section>
        <h2>{c.prodH}</h2>
        <ul>
          {c.prods.map(([href, name, desc]) => (
            <li key={href}>
              <a href={localeHref(lang, href)}>{name}</a> — {desc}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>{c.privH}</h2>
        <p>{c.priv}</p>
      </section>
      <section>
        <h2>{c.more}</h2>
        <p>
          {MORE[lang].map(([href, label]) => (
            <span key={href}>
              <a href={localeHref(lang, href)}>{label}</a> ·{" "}
            </span>
          ))}
          <a href="/llms.txt">llms.txt</a>
        </p>
        <p>{c.contact}</p>
      </section>
    </main>
  );
}
