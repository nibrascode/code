import { createFileRoute } from "@tanstack/react-router";
import { PlannerPage } from "@/routes/planner";

export const Route = createFileRoute("/en/planner")({
  head: () => ({
    links: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
  }),
  component: PlannerPage,
});
