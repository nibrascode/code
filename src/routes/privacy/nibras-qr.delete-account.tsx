import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import { QR_DELETE } from "@/lib/qr-privacy";

export const Route = createFileRoute("/privacy/nibras-qr/delete-account")({
  component: NibrasQrDeleteAccountPage,
});

function linkify(text: string) {
  return text.split(/(nibrascode@gmail\.com)/gi).map((part, index) =>
    part.toLowerCase() === "nibrascode@gmail.com" ? (
      <a key={index} href="mailto:nibrascode@gmail.com?subject=Nibras%20QR%20account%20deletion">
        {part}
      </a>
    ) : (
      <span key={index}>{part}</span>
    ),
  );
}

function NibrasQrDeleteAccountPage() {
  const { lang } = useI18n();
  const copy = lang === "az" ? QR_DELETE.az : QR_DELETE.en;
  return (
    <main className="why-page privacy-page" lang={lang === "az" ? "az" : "en"} dir="ltr">
      <div className="eyebrow">
        <i />
        Nibras QR
      </div>
      <h1>{copy.title}</h1>
      <p className="privacy-updated">{copy.updated}</p>
      {copy.paragraphs.map((paragraph) =>
        /^\d+\.\s/.test(paragraph) ? <h2 key={paragraph}>{paragraph}</h2> : <p key={paragraph}>{linkify(paragraph)}</p>,
      )}
      <p>
        <a href="/privacy/nibras-qr">{lang === "az" ? "Məxfilik siyasəti — Nibras QR" : "Privacy policy — Nibras QR"}</a>
      </p>
    </main>
  );
}
