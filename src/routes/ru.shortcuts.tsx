import { createFileRoute } from "@tanstack/react-router";
import { ShortcutsPage } from "@/shortcuts/shortcuts";

export const Route = createFileRoute("/ru/shortcuts")({
  component: ShortcutsPage,
});
