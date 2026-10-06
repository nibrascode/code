import { createFileRoute, Outlet, useRouterState } from "@tanstack/react-router";
import { FaqView } from "@/components/faq-page";
import { FAQ } from "@/lib/faq";

export const Route = createFileRoute("/ru/faq")({
  component: FaqRoute,
});

function FaqRoute() {
  const path = useRouterState({ select: (state) => state.location.pathname }).replace(/\/$/, "");
  if (path !== "/ru/faq") return <Outlet />;
  return <FaqView page={FAQ.ru} />;
}
