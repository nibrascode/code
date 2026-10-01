import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n-context";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
});

function PrivacyPage() {
  const { t } = useI18n();
  const path = useRouterState({ select: (state) => state.location.pathname });
  if (path.replace(/\/$/, "") !== "/privacy") return <Outlet />;

  return (
    <main className="why-page privacy-page">
      <h1>{t("privacy_btn")}</h1>
    </main>
  );
}
