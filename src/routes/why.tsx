import { createFileRoute } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";
import type { TKey } from "@/lib/i18n";

export const Route = createFileRoute("/why")({
  component: WhyPage,
});

const BELIEFS = ["why_b1", "why_b2", "why_b3", "why_b4", "why_b5", "why_b6"] as const;
const LINES = ["why_a1", "why_a2", "why_a3", "why_a4"] as const;

function WhyPage() {
  const { t } = useI18n();

  return (
    <main className="why-page">
      <div className="why-glow" aria-hidden="true" />
      <p className="eyebrow">
        <i />
        {t("why_kicker")}
      </p>
      <h1>{t("why_btn")}</h1>
      <p className="why-lead">{t("why_lead")}</p>
      <p>{t("why_p1")}</p>
      <p>{t("why_p2")}</p>

      <section>
        <h2>{t("why_believe_h")}</h2>
        <p>{t("why_believe_p")}</p>
        <p className="why-as">{t("why_as")}</p>
        <ul>
          {BELIEFS.map((key) => (
            <li key={key}>
              <i />
              {t(key as TKey)}
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2>{t("why_goal_h")}</h2>
        <p>{t("why_goal_p1")}</p>
        <p>{t("why_goal_p2")}</p>
      </section>

      <section>
        <h2>{t("why_approach_h")}</h2>
        <div className="why-lines">
          {LINES.map((key) => (
            <p key={key}>{t(key as TKey)}</p>
          ))}
        </div>
      </section>

      <p className="why-close">{t("why_close")}</p>
    </main>
  );
}
