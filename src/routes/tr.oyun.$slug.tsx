import { createFileRoute, notFound } from "@tanstack/react-router";
import { TicTacToe } from "@/components/games-page";
import { gameBySlug } from "@/lib/games";

export const Route = createFileRoute("/tr/oyun/$slug")({
  loader: ({ params }) => {
    if (!gameBySlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  component: TicTacToe,
});
