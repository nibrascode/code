import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const LEAD: Record<Lang, string> = {
  az: "Əsas sayt və Nibras AI burada izah olunur. Tətbiqlərin siyasəti aşağıdakı keçidlərdədir.",
  en: "The main site and Nibras AI are explained here. App policies are in the links below.",
  tr: "Ana site ve Nibras AI burada anlatılır. Uygulama politikaları aşağıdaki bağlantılardadır.",
  ar: "الموقع الرئيسي وNibras AI مذكوران هنا. سياسات التطبيقات في الروابط أدناه.",
  ru: "Основной сайт и Nibras AI описаны здесь. Политики приложений — по ссылкам ниже.",
};

const SITE: Record<Lang, { title: string; body: string[] }> = {
  az: {
    title: "Əsas sayt",
    body: [
      "www.nibrascode.com açıq səhifələrdir. Hesab tələb olunmur.",
      "Brauzer dil seçimini və bəzi alət nəticələrini öz yaddaşında saxlaya bilər. Bu məlumat bizə göndərilmir.",
      "Əlaqə üçün yazılan məktub yalnız cavab vermək üçün oxunur. Başqa məqsədlə saxlanmır.",
    ],
  },
  en: {
    title: "Main site",
    body: [
      "www.nibrascode.com is a set of open pages. No account is required.",
      "The browser may keep the language choice and some tool results in its own storage. That data is not sent to us.",
      "A message sent for contact is read only to reply. It is not kept for another purpose.",
    ],
  },
  tr: {
    title: "Ana site",
    body: [
      "www.nibrascode.com açık sayfalardır. Hesap gerekmez.",
      "Tarayıcı dil seçimini ve bazı araç sonuçlarını kendi belleğinde tutabilir. Bu veri bize gönderilmez.",
      "İletişim için yazılan mesaj yalnızca cevap vermek için okunur. Başka amaçla saklanmaz.",
    ],
  },
  ar: {
    title: "الموقع الرئيسي",
    body: [
      "www.nibrascode.com صفحات مفتوحة. لا يلزم حساب.",
      "قد يحفظ المتصفح اختيار اللغة وبعض نتائج الأدوات في ذاكرته. لا تُرسل هذه البيانات إلينا.",
      "الرسالة المرسلة للتواصل تُقرأ فقط للرد. لا تُحفظ لغرض آخر.",
    ],
  },
  ru: {
    title: "Основной сайт",
    body: [
      "www.nibrascode.com — открытые страницы. Учётная запись не нужна.",
      "Браузер может хранить выбор языка и некоторые результаты инструментов у себя. Эти данные нам не отправляются.",
      "Письмо для связи читается только для ответа. Для другой цели оно не хранится.",
    ],
  },
};

const AI: Record<Lang, { title: string; body: string[] }> = {
  az: {
    title: "Nibras AI",
    body: [
      "Söhbət 24 saat saxlanır, sonra silinir. Hesab yoxdur.",
      "Hazır cavab saytda qalır. Modelə gedən sual xarici süni intellekt xidmətinə göndərilir: xAI və ya Groq.",
      "Həmin xidmət sualı cavab vermək üçün oxuyur. Biz sualı reklam və ya başqa model öyrətmək üçün saxlamırıq.",
      "Şəxsi sənəd, şifrə və kart nömrəsi yazma.",
    ],
  },
  en: {
    title: "Nibras AI",
    body: [
      "A chat is kept for 24 hours, then deleted. There is no account.",
      "A ready answer stays on the site. A question that reaches a model is sent to an external AI service: xAI or Groq.",
      "That service reads the question to answer it. We do not keep the question for ads or to train another model.",
      "Do not write a private document, a password, or a card number.",
    ],
  },
  tr: {
    title: "Nibras AI",
    body: [
      "Sohbet 24 saat saklanır, sonra silinir. Hesap yoktur.",
      "Hazır cevap sitede kalır. Modele giden soru dış bir yapay zeka hizmetine gider: xAI veya Groq.",
      "O hizmet soruyu cevap vermek için okur. Soruyu reklam veya başka model eğitmek için saklamayız.",
      "Özel belge, şifre ve kart numarası yazmayın.",
    ],
  },
  ar: {
    title: "Nibras AI",
    body: [
      "تبقى المحادثة 24 ساعة ثم تُحذف. لا يوجد حساب.",
      "الجواب الجاهز يبقى في الموقع. السؤال الذي يصل إلى نموذج يُرسل إلى خدمة ذكاء اصطناعي خارجية: xAI أو Groq.",
      "تقرأ تلك الخدمة السؤال لتجيب. لا نحفظ السؤال للإعلان أو لتدريب نموذج آخر.",
      "لا تكتب مستندًا خاصًا أو كلمة سر أو رقم بطاقة.",
    ],
  },
  ru: {
    title: "Nibras AI",
    body: [
      "Разговор хранится 24 часа, затем удаляется. Учётной записи нет.",
      "Готовый ответ остаётся на сайте. Вопрос, который доходит до модели, уходит во внешний сервис ИИ: xAI или Groq.",
      "Тот сервис читает вопрос, чтобы ответить. Мы не храним вопрос для рекламы и не обучаем на нём другую модель.",
      "Не пишите личный документ, пароль или номер карты.",
    ],
  },
};

const APPS = [
  ["nibras-arabic", "Nibras Arabic"],
  ["nibras-pdf", "Nibras PDF"],
  ["nibras-qr", "Nibras QR"],
  ["nibras-docs", "Nibras Docs"],
  ["nibras-plans", "Nibras Plans"],
] as const;

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t, lang } = useI18n();
  const path = useRouterState({ select: (state) => state.location.pathname });
  if (path.replace(/\/$/, "") !== "/privacy") return <Outlet />;

  return (
    <main className="why-page privacy-page">
      <h1>{t("privacy_btn")}</h1>
      <p className="why-lead">{LEAD[lang]}</p>
      <section>
        <h2>{SITE[lang].title}</h2>
        {SITE[lang].body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
      <section>
        <h2>{AI[lang].title}</h2>
        {AI[lang].body.map((line) => (
          <p key={line}>{line}</p>
        ))}
      </section>
      <ul className="lib-list">
        {APPS.map(([slug, name]) => (
          <li key={slug}>
            <a href={`/privacy/${slug}`}>{name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
