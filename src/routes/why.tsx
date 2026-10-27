import { Compass, Heart, Target } from "lucide-react";
import { InfoCard, InfoCards } from "@/components/info-card";
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

      <InfoCards>
        <InfoCard icon={Heart} title={t("why_believe_h")}>
          <p>{t("why_believe_p")}</p>
          <p>{t("why_as")}</p>
          <ul className="faq-points">
            {BELIEFS.map((key) => (
              <li key={key}>{t(key as TKey)}</li>
            ))}
          </ul>
        </InfoCard>
        <InfoCard icon={Target} title={t("why_goal_h")}>
          <p>{t("why_goal_p1")}</p>
          <p>{t("why_goal_p2")}</p>
        </InfoCard>
        <InfoCard icon={Compass} title={t("why_approach_h")}>
          {LINES.map((key) => (
            <p key={key}>{t(key as TKey)}</p>
          ))}
        </InfoCard>
      </InfoCards>

      <p className="why-close">{t("why_close")}</p>
    </main>
  );
}
