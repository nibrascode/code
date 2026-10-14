import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";
import { PLANNER_MARKUP } from "@/planner/markup";
import { mountPlanner } from "@/planner/mount";
import "@/planner/planner.css";

export const Route = createFileRoute("/planner")({
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

function PlannerPage() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    return mountPlanner(node);
  }, []);

  return (
    <div
      ref={ref}
      className="nibras-planner"
      dangerouslySetInnerHTML={{ __html: PLANNER_MARKUP }}
    />
  );
}
