import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/trust")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/trust"), replace: true });
  },
  component: TrustPage,
});

type Block = { h: string; p: string[] };
type Copy = { eyebrow: string; title: string; lead: string; blocks: Block[]; levelTitle: string; levels: [string, string][]; links: [string, string][] };

const COPY: Record<Lang, Copy> = {
  az: {
    eyebrow: "Şəffaflıq",
    title: "Nibras Code-a nə qədər güvənmək olar",
    lead: "Bu səhifə açıq yazır: kimik, fayllarla nə olur və nəyi vəd edirik, nəyi yox.",
    blocks: [
      { h: "Kimik", p: ["Nibras Code müstəqil layihədir. Qurucusu Mahir Əliyevdir. Ofis və telefon yoxdur.", "Rəsmi əlaqə yalnız e-poçtdur: nibrascode@gmail.com."] },
      { h: "Fayllarınla nə olur", p: ["PDF, şəkil, QR, ZIP alətləri brauzerdə işləyir. Fayl serverə göndərilmir.", "Nibras AI-yə yazdığın mətn cavab üçün serverə gedir. Şəxsi məlumat yazma.", "Tətbiqlərin öz məxfilik səhifəsi var."] },
      { h: "Saxta rəy yoxdur", p: ["Saytda uydurma ulduz, reytinq, rəy və ya yükləmə sayı yoxdur və olmayacaq.", "Real reytinqlər Google Play-dədir. Saytda onları köçürmürük, yalnız mağazaya link veririk."] },
    ],
    levelTitle: "Xidmət səviyyəsi",
    levels: [
      ["Pulsuz alətlər", "Brauzerdə işləyir, hesab lazım deyil. Mümkün qədər işlək saxlanılır, amma zəmanət yoxdur."],
      ["Tətbiqlər", "Google Play və Huawei AppGallery linkləri realdır. Yeniləmələr mağaza vasitəsilə gəlir."],
      ["Nibras AI", "Pulsuzdur. Bəzən yavaşlaya və ya müvəqqəti dayana bilər. Cavab səhv ola bilər, yoxla."],
      ["Xəta olarsa", "nibrascode@gmail.com ünvanına yaz: hansı səhifə, nə baş verdi. Məktub oxunur."],
    ],
    links: [["/about", "Haqqımızda"], ["/privacy", "Bütün məxfilik siyasətləri"], ["/nedir", "Nibras Code nədir?"], ["/terms", "İstifadə şərtləri"], ["/contact", "Əlaqə"], ["/apps", "Tətbiqlər"]],
  },
  en: {
    eyebrow: "Transparency",
    title: "How far you can trust Nibras Code",
    lead: "This page says it plainly: who we are, what happens to files, and what we promise and what we do not.",
    blocks: [
      { h: "Who we are", p: ["Nibras Code is an independent project. Its founder is Mahir Aliyev. There is no office and no phone.", "The only official contact is email: nibrascode@gmail.com."] },
      { h: "What happens to your files", p: ["The PDF, image, QR and ZIP tools run in your browser. The file is not sent to a server.", "Text you write to Nibras AI goes to a server to get an answer. Do not write personal data.", "Each app has its own privacy page."] },
      { h: "No fake reviews", p: ["The site has no invented stars, ratings, reviews or download counts, and it will not.", "Real ratings live on Google Play. We do not copy numbers here, we only link to the store."] },
    ],
    levelTitle: "Service level",
    levels: [
      ["Free tools", "Run in the browser, no account. Kept working as well as possible, but with no guarantee."],
      ["Apps", "The Google Play and Huawei AppGallery links are real. Updates come through the store."],
      ["Nibras AI", "Free. It can be slow or stop for a while. An answer can be wrong, so check it."],
      ["If something breaks", "Write to nibrascode@gmail.com: which page and what happened. The letter is read."],
    ],
    links: [["/about", "About"], ["/privacy", "All privacy policies"], ["/nedir", "What is Nibras Code?"], ["/terms", "Terms"], ["/contact", "Contact"], ["/apps", "Apps"]],
  },
  tr: {
    eyebrow: "Şeffaflık",
    title: "Nibras Code'a ne kadar güvenilir",
    lead: "Bu sayfa açıkça yazar: kimiz, dosyalara ne olur, neyi vaat ediyoruz, neyi etmiyoruz.",
    blocks: [
      { h: "Kimiz", p: ["Nibras Code bağımsız bir projedir. Kurucusu Mahir Aliyev'dir. Ofis ve telefon yoktur.", "Resmi iletişim yalnızca e-postadır: nibrascode@gmail.com."] },
      { h: "Dosyalarına ne olur", p: ["PDF, resim, QR ve ZIP araçları tarayıcıda çalışır. Dosya sunucuya gönderilmez.", "Nibras AI'ye yazdığın metin cevap için sunucuya gider. Kişisel bilgi yazma.", "Uygulamaların kendi gizlilik sayfası vardır."] },
      { h: "Sahte yorum yok", p: ["Sitede uydurma yıldız, puan, yorum veya indirme sayısı yoktur ve olmayacak.", "Gerçek puanlar Google Play'dedir. Burada sayı kopyalamıyoruz, yalnızca mağazaya bağlantı veriyoruz."] },
    ],
    levelTitle: "Hizmet seviyesi",
    levels: [
      ["Ücretsiz araçlar", "Tarayıcıda çalışır, hesap gerekmez. Mümkün olduğunca çalışır tutulur, ama garanti yoktur."],
      ["Uygulamalar", "Google Play ve Huawei AppGallery bağlantıları gerçektir. Güncellemeler mağazadan gelir."],
      ["Nibras AI", "Ücretsizdir. Bazen yavaşlayabilir veya geçici durabilir. Cevap yanlış olabilir, kontrol et."],
      ["Hata olursa", "nibrascode@gmail.com adresine yaz: hangi sayfa, ne oldu. Mektup okunur."],
    ],
    links: [["/about", "Hakkımızda"], ["/privacy", "Tüm gizlilik politikaları"], ["/nedir", "Nibras Code nedir?"], ["/terms", "Kullanım şartları"], ["/contact", "İletişim"], ["/apps", "Uygulamalar"]],
  },
  ar: {
    eyebrow: "الشفافية",
    title: "إلى أي حد يمكن الوثوق بـ Nibras Code",
    lead: "هذه الصفحة تقول بوضوح: من نحن، وماذا يحدث للملفات، وما نعد به وما لا نعد به.",
    blocks: [
      { h: "من نحن", p: ["Nibras Code مشروع مستقل. مؤسسه ماهر علييف. لا مكتب ولا هاتف.", "التواصل الرسمي بالبريد فقط: nibrascode@gmail.com."] },
      { h: "ماذا يحدث لملفاتك", p: ["أدوات PDF والصور وQR وZIP تعمل في المتصفح. لا يُرسل الملف إلى خادم.", "النص الذي تكتبه لـ Nibras AI يذهب إلى خادم للحصول على جواب. لا تكتب بيانات شخصية.", "لكل تطبيق صفحة خصوصية خاصة."] },
      { h: "لا تقييمات مزيفة", p: ["لا توجد في الموقع نجوم أو تقييمات أو مراجعات أو أرقام تنزيل مختلقة، ولن توجد.", "التقييمات الحقيقية موجودة في Google Play. لا ننقل الأرقام هنا، بل نضع رابط المتجر فقط."] },
    ],
    levelTitle: "مستوى الخدمة",
    levels: [
      ["الأدوات المجانية", "تعمل في المتصفح بلا حساب. نحافظ على عملها قدر الإمكان، دون ضمان."],
      ["التطبيقات", "روابط Google Play وHuawei AppGallery حقيقية. التحديثات تأتي عبر المتجر."],
      ["Nibras AI", "مجاني. قد يبطئ أو يتوقف مؤقتاً. قد يكون الجواب خاطئاً، فتحقق منه."],
      ["إن حدث خطأ", "اكتب إلى nibrascode@gmail.com: أي صفحة وماذا حدث. تُقرأ الرسالة."],
    ],
    links: [["/about", "من نحن"], ["/privacy", "كل سياسات الخصوصية"], ["/nedir", "ما هو Nibras Code؟"], ["/terms", "شروط الاستخدام"], ["/contact", "تواصل"], ["/apps", "التطبيقات"]],
  },
  ru: {
    eyebrow: "Прозрачность",
    title: "Насколько можно доверять Nibras Code",
    lead: "Здесь прямо написано: кто мы, что происходит с файлами, что мы обещаем и чего нет.",
    blocks: [
      { h: "Кто мы", p: ["Nibras Code — независимый проект. Основатель — Махир Алиев. Офиса и телефона нет.", "Официальная связь только по почте: nibrascode@gmail.com."] },
      { h: "Что происходит с файлами", p: ["Инструменты PDF, изображений, QR и ZIP работают в браузере. Файл не отправляется на сервер.", "Текст для Nibras AI уходит на сервер, чтобы получить ответ. Не пишите личные данные.", "У каждого приложения своя страница конфиденциальности."] },
      { h: "Без фальшивых отзывов", p: ["На сайте нет выдуманных звёзд, оценок, отзывов или числа загрузок, и не будет.", "Настоящие оценки — в Google Play. Мы не переносим цифры сюда, а только даём ссылку на магазин."] },
    ],
    levelTitle: "Уровень сервиса",
    levels: [
      ["Бесплатные инструменты", "Работают в браузере, без аккаунта. Поддерживаются по мере сил, без гарантии."],
      ["Приложения", "Ссылки Google Play и Huawei AppGallery настоящие. Обновления приходят через магазин."],
      ["Nibras AI", "Бесплатно. Может замедлиться или временно остановиться. Ответ может быть неверным — проверяйте."],
      ["Если что-то сломалось", "Напишите на nibrascode@gmail.com: какая страница и что случилось. Письмо читают."],
    ],
    links: [["/about", "О нас"], ["/privacy", "Все политики конфиденциальности"], ["/nedir", "Что такое Nibras Code?"], ["/terms", "Условия"], ["/contact", "Контакт"], ["/apps", "Приложения"]],
  },
};

export function TrustPage() {
  const { lang } = useI18n();
  const c = COPY[lang];
  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {c.eyebrow}
      </p>
      <h1>{c.title}</h1>
      <p className="why-lead">{c.lead}</p>
      {c.blocks.map((b) => (
        <section key={b.h}>
          <h2>{b.h}</h2>
          {b.p.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </section>
      ))}
      <section>
        <h2>{c.levelTitle}</h2>
        {c.levels.map(([k, v]) => (
          <p key={k}>
            <strong>{k}:</strong> {v}
          </p>
        ))}
      </section>
      <p>
        {c.links.map(([href, label], i) => (
          <span key={href}>
            {i > 0 ? " · " : ""}
            <a href={localeHref(lang, href)}>{label}</a>
          </span>
        ))}
      </p>
    </main>
  );
}
