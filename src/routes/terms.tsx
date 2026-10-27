import { AlertTriangle, Ban, FileText, Gift, Mail, RefreshCw, Scale, ShieldCheck, User } from "lucide-react";
import { InfoCard, InfoCards } from "@/components/info-card";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/terms")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/terms"), replace: true });
  },
  component: TermsPage,
});

const COPY: Record<Lang, { eyebrow: string; title: string; body: string[] }> = {
  az: {
    eyebrow: "İstifadə şərtləri",
    title: "İstifadə şərtləri",
    body: [
      "Nibras Code müstəqil şəxsi layihədir. Bu, ofisi olan şirkət deyil. Telefon nömrəsi və fiziki ünvan yoxdur.",
      "Rəsmi əlaqə yalnız e-poçtdur: nibrascode@gmail.com. Məktub oxunur və cavablandırılır.",
      "Sayt və alətlər olduğu kimi, pulsuz təqdim olunur. Hesab açmaq şərt deyil. Özün yaratdığın fayl və mətn sənindir.",
      "Saytı qanuna zidd, başqasının hüququnu pozan və ya zərər vermək üçün istifadə etmə.",
      "Fasilə, səhv və ya məlumat itkisinə görə zəmanət verilmir. Vacib sənədin öz nüsxəsini saxla.",
      "Şərtlər dəyişə bilər. Keçərli olan bu səhifənin son halıdır. Məxfilik siyasəti ayrıca səhifədədir.",
    ],
  },
  en: {
    eyebrow: "Terms of use",
    title: "Terms of use",
    body: [
      "Nibras Code is an independent personal project. It is not a company with an office. There is no phone number and no physical address.",
      "The only official contact is email: nibrascode@gmail.com. A letter is read and answered.",
      "The site and the tools are offered as they are, free of charge. An account is not required. A file or text you create is yours.",
      "Do not use the site for anything illegal, for violating someone else’s rights, or to cause harm.",
      "There is no warranty against interruption, error, or loss of data. Keep your own copy of an important document.",
      "These terms can change. The current text of this page is the one that applies. The privacy policy is on its own page.",
    ],
  },
  tr: {
    eyebrow: "Kullanım şartları",
    title: "Kullanım şartları",
    body: [
      "Nibras Code bağımsız kişisel bir projedir. Ofisi olan bir şirket değildir. Telefon numarası ve fiziksel adres yoktur.",
      "Resmi iletişim yalnızca e-postadır: nibrascode@gmail.com. Mektup okunur ve cevaplanır.",
      "Site ve araçlar olduğu gibi, ücretsiz sunulur. Hesap açmak şart değildir. Kendin oluşturduğun dosya ve metin senindir.",
      "Siteyi yasaya aykırı, başkasının hakkını çiğneyen veya zarar vermek için kullanma.",
      "Kesinti, hata veya veri kaybı için garanti verilmez. Önemli belgenin kendi kopyasını sakla.",
      "Şartlar değişebilir. Geçerli olan bu sayfanın son halidir. Gizlilik politikası ayrı bir sayfadadır.",
    ],
  },
  ar: {
    eyebrow: "شروط الاستخدام",
    title: "شروط الاستخدام",
    body: [
      "Nibras Code مشروع شخصي مستقل. ليس شركة لها مكتب. لا يوجد رقم هاتف ولا عنوان فعلي.",
      "التواصل الرسمي بالبريد فقط: nibrascode@gmail.com. تُقرأ الرسالة ويُرد عليها.",
      "يُقدَّم الموقع والأدوات كما هي، مجاناً. فتح حساب ليس شرطاً. الملف أو النص الذي تنشئه لك.",
      "لا تستخدم الموقع فيما يخالف القانون أو ينتهك حق غيرك أو يسبب ضرراً.",
      "لا ضمان ضد الانقطاع أو الخطأ أو فقدان البيانات. احتفظ بنسختك من أي مستند مهم.",
      "قد تتغير الشروط. النص الحالي لهذه الصفحة هو المعمول به. سياسة الخصوصية في صفحة مستقلة.",
    ],
  },
  ru: {
    eyebrow: "Условия использования",
    title: "Условия использования",
    body: [
      "Nibras Code — независимый личный проект. Это не компания с офисом. Телефона и физического адреса нет.",
      "Официальная связь только по почте: nibrascode@gmail.com. Письмо читают и на него отвечают.",
      "Сайт и инструменты даются как есть, бесплатно. Учётная запись не обязательна. Файл или текст, который вы создали, ваш.",
      "Не используйте сайт для незаконного, для нарушения чужого права или чтобы причинить вред.",
      "Гарантии от перерыва, ошибки или потери данных нет. Важную копию храните у себя.",
      "Условия могут измениться. Действует последняя версия этой страницы. Политика конфиденциальности — на отдельной странице.",
    ],
  },
};

export function TermsPage() {
  const { lang } = useI18n();
  const copy = COPY[lang];
  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {copy.eyebrow}
      </p>
      <h1>{copy.title}</h1>
      <InfoCards>
        {copy.body.map((paragraph, i) => (
          <InfoCard key={paragraph} icon={[User, Mail, Gift, Ban, AlertTriangle, RefreshCw][i] ?? FileText}>
            <p>{paragraph}</p>
          </InfoCard>
        ))}
        <InfoCard icon={ShieldCheck} href={localeHref(lang, "/privacy")} title={lang === "az" ? "Məxfilik siyasəti" : lang === "tr" ? "Gizlilik politikası" : lang === "ar" ? "سياسة الخصوصية" : lang === "ru" ? "Политика конфиденциальности" : "Privacy policy"} />
        <InfoCard icon={Scale} href={localeHref(lang, "/tools-legal")} title={({az:"Studio, Workspace, Learn və Site Doctor üçün məxfilik və şərtlər",en:"Privacy and terms for Studio, Workspace, Learn and Site Doctor",tr:"Studio, Workspace, Learn ve Site Doctor için gizlilik ve koşullar",ar:"الخصوصية والشروط لـ Studio وWorkspace وLearn وSite Doctor",ru:"Конфиденциальность и условия для Studio, Workspace, Learn и Site Doctor"} as Record<string,string>)[lang] ?? "Privacy and terms for Studio, Workspace, Learn and Site Doctor"} />
      </InfoCards>
    </main>
  );
}
