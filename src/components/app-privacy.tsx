import { ARABIC_PRIVACY } from "@/lib/arabic-privacy";
import { PDF_PRIVACY } from "@/lib/pdf-privacy";
import { QR_PRIVACY } from "@/lib/qr-privacy";
import type { Lang } from "@/lib/i18n";
import type { StudioPrivacyRow } from "@/lib/studio";
import { useI18n } from "@/lib/i18n-context";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(nibrascode@gmail\.com|nibrascode\.com)/gi);
  return (
    <>
      {parts.map((part, index) => {
        const lower = part.toLowerCase();
        if (lower === "nibrascode@gmail.com") {
          return (
            <a key={index} href="mailto:nibrascode@gmail.com">
              {part}
            </a>
          );
        }
        if (lower === "nibrascode.com") {
          return (
            <a key={index} href="https://nibrascode.com">
              {part}
            </a>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

const NAMES: Record<string, string> = {
  "nibras-arabic": "Nibras Arabic",
  "nibras-pdf": "Nibras PDF",
  "nibras-qr": "Nibras QR",
  "nibras-docs": "Nibras Docs",
  "nibras-plans": "Nibras Plans",
};

type Policy = { title: string; updated: string; paragraphs: string[] };

function pending(name: string): Record<Lang, Policy> {
  return {
    az: {
      title: `Məxfilik siyasəti — ${name}`,
      updated: "Tətbiq hələ çıxmayıb",
      paragraphs: [
        `${name} hələ istifadəyə verilməyib. Tam məxfilik siyasəti tətbiq çıxanda bu səhifədə dərc olunacaq.`,
        "O vaxta qədər hesab, reklam izləyicisi və ya ödəniş məlumatı toplanmır, çünki tətbiqin özü hələ yoxdur.",
        "Sualınız varsa, nibrascode@gmail.com ünvanına yazın.",
      ],
    },
    en: {
      title: `Privacy policy — ${name}`,
      updated: "The app is not released yet",
      paragraphs: [
        `${name} is not available yet. The full privacy policy will be published on this page when the app is released.`,
        "Until then there is no account, ad tracking, or payment data, because the app itself does not exist yet.",
        "If you have a question, write to nibrascode@gmail.com.",
      ],
    },
    tr: {
      title: `Gizlilik politikası — ${name}`,
      updated: "Uygulama henüz çıkmadı",
      paragraphs: [
        `${name} henüz kullanıma açılmadı. Tam gizlilik politikası uygulama çıkınca bu sayfada yayımlanacak.`,
        "O zamana kadar hesap, reklam izleyici veya ödeme bilgisi toplanmaz, çünkü uygulamanın kendisi henüz yok.",
        "Sorunuz varsa nibrascode@gmail.com adresine yazın.",
      ],
    },
    ar: {
      title: `سياسة الخصوصية — ${name}`,
      updated: "التطبيق لم يصدر بعد",
      paragraphs: [
        `${name} غير متاح بعد. تُنشر سياسة الخصوصية الكاملة في هذه الصفحة عند إصدار التطبيق.`,
        "إلى ذلك الحين لا يُجمع حساب ولا تتبّع إعلانات ولا بيانات دفع، لأن التطبيق نفسه غير موجود بعد.",
        "إن كان لديك سؤال، اكتب إلى nibrascode@gmail.com.",
      ],
    },
    ru: {
      title: `Политика конфиденциальности — ${name}`,
      updated: "Приложение ещё не вышло",
      paragraphs: [
        `${name} ещё не доступен. Полная политика будет опубликована на этой странице, когда приложение выйдет.`,
        "До тех пор нет аккаунта, рекламного отслеживания и платёжных данных, потому что самого приложения ещё нет.",
        "Если есть вопрос, напишите на nibrascode@gmail.com.",
      ],
    },
  };
}

const PENDING: Record<string, Record<Lang, Policy>> = {
  "nibras-docs": pending("Nibras Docs"),
  "nibras-plans": pending("Nibras Plans"),
};

export function AppPrivacyView({ slug, rows }: { slug: string; rows: StudioPrivacyRow[] }) {
  const { lang } = useI18n();
  // Nibras PDF ships its policy with the code (src/lib/pdf-privacy.ts) so the page
  // always matches the released app version; studio rows apply to other apps.
  // Nibras QR ships its policy with the code too (src/lib/qr-privacy.ts, AZ + EN).
  const codePolicy = slug === "nibras-pdf" || slug === "nibras-qr";
  const live = codePolicy ? undefined : rows.find((row) => row.slug === slug && row.lang === lang);
  const fallback =
    slug === "nibras-pdf" ? PDF_PRIVACY[lang] : slug === "nibras-qr" ? (lang === "az" ? QR_PRIVACY.az : QR_PRIVACY.en) : slug === "nibras-arabic" ? ARABIC_PRIVACY : PENDING[slug]?.[lang] ?? null;
  const copy = live
    ? {
        title: live.title,
        updated: live.updated_label,
        paragraphs: live.body
          .split(/\n\s*\n/)
          .map((part) => part.trim())
          .filter(Boolean),
      }
    : fallback;

  return (
    <main className="why-page privacy-page" lang={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="eyebrow">
        <i />
        {NAMES[slug] ?? slug}
      </div>
      <h1>{copy?.title || "Məxfilik siyasəti"}</h1>
      {copy?.updated ? <p className="privacy-updated">{copy.updated}</p> : null}
      {copy?.paragraphs.map((paragraph) =>
        /^\d+\.\s/.test(paragraph) ? (
          <h2 key={paragraph}>{paragraph}</h2>
        ) : (
          <p key={paragraph}>
            <RichText text={paragraph} />
          </p>
        ),
      )}
      {slug === "nibras-qr" ? (
        <p>
          <a href="/privacy/nibras-qr/delete-account">
            {lang === "az" ? "Hesabın silinməsi — Nibras QR" : "Delete your account — Nibras QR"}
          </a>
        </p>
      ) : null}
    </main>
  );
}
