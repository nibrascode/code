import { createFileRoute } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const MAIL = "NIBRASCODE@GMAIL.COM";

function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {t("nx_nav_contact")}
      </p>
      <h1>{t("contact_title")}</h1>
      <p className="why-lead">{t("contact_note")}</p>
      <a className="contact-mail" href={`mailto:${MAIL}`}>
        <Mail className="size-4" />
        {MAIL}
      </a>
    </main>
  );
}
