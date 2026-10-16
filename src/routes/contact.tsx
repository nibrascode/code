import { createFileRoute, redirect } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";
import type { Lang } from "@/lib/i18n";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/contact")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/contact"), replace: true });
  },
  component: ContactPage,
});

const MAIL = "nibrascode@gmail.com";

const NOTE: Record<Lang, string[]> = {
  az: [
    "Nibras Code-u Mahir Əliyev idarə edir. Bu, şəxsi layihədir, ofisi olan şirkət deyil.",
    "Telefon nömrəsi və fiziki ünvan yoxdur. Rəsmi əlaqə yalnız bu e-poçtdur.",
  ],
  en: [
    "Mahir Əliyev runs Nibras Code. It is a personal project, not a company with an office.",
    "There is no phone number and no physical address. This email is the only official contact.",
  ],
  tr: [
    "Nibras Code’u Mahir Əliyev yönetir. Bu kişisel bir projedir, ofisi olan bir şirket değildir.",
    "Telefon numarası ve fiziksel adres yoktur. Resmi iletişim yalnızca bu e-postadır.",
  ],
  ar: [
    "يدير Mahir Əliyev مشروع Nibras Code. هذا مشروع شخصي، وليس شركة لها مكتب.",
    "لا يوجد رقم هاتف ولا عنوان فعلي. هذا البريد هو التواصل الرسمي الوحيد.",
  ],
  ru: [
    "Nibras Code ведёт Mahir Əliyev. Это личный проект, не компания с офисом.",
    "Телефона и физического адреса нет. Официальная связь только эта почта.",
  ],
};

export function ContactPage() {
  const { t, lang } = useI18n();

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {t("nx_nav_contact")}
      </p>
      <h1>{t("contact_title")}</h1>
      <p className="why-lead">{t("contact_note")}</p>
      {NOTE[lang].map((line) => (
        <p key={line}>{line}</p>
      ))}
      <a className="contact-mail" href={`mailto:${MAIL}`}>
        <Mail className="size-4" />
        {MAIL}
      </a>
    </main>
  );
}
