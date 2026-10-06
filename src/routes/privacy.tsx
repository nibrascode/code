import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import type { Lang } from "@/lib/i18n";

const LEAD: Record<Lang, string> = {
  az: "Hər tətbiqin məxfilik siyasəti ayrı səhifədədir. Nibras Docs və Nibras Plans hələ çıxmayıb, ona görə onların mətni qısa qalır.",
  en: "Each app has its own privacy page. Nibras Docs and Nibras Plans are not out yet, so those pages stay short.",
  tr: "Her uygulamanın gizlilik politikası ayrı sayfadadır. Nibras Docs ve Nibras Plans henüz çıkmadığı için o sayfalar kısa kalır.",
  ar: "لكل تطبيق صفحة خصوصية مستقلة. Nibras Docs وNibras Plans لم يصدرا بعد، لذلك تبقى صفحتاهما قصيرة.",
  ru: "У каждого приложения своя страница политики. Nibras Docs и Nibras Plans ещё не вышли, поэтому эти страницы короткие.",
};

const APPS = [
  ["nibras-arabic", "Nibras Arabic"],
  ["nibras-pdf", "Nibras PDF"],
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
