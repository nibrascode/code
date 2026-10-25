import { createFileRoute } from "@tanstack/react-router";
import { ShortcutsPage } from "@/shortcuts/shortcuts";

export const Route = createFileRoute("/tr/shortcuts")({
  component: ShortcutsPage,
});
