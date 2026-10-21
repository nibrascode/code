import { createFileRoute } from "@tanstack/react-router";
import { GamesIndexGate } from "@/components/games-page";

export const Route = createFileRoute("/tr/oyun")({
  component: GamesIndexGate,
});
