import { createFileRoute } from "@tanstack/react-router";
import { GamesIndexGate } from "@/components/games-page";

export const Route = createFileRoute("/oyun")({
  component: GamesIndexGate,
});
