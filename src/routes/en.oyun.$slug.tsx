import { createFileRoute, notFound } from "@tanstack/react-router";
import { TicTacToe } from "@/components/games-page";
import { gameBySlug } from "@/lib/games";

export const Route = createFileRoute("/en/oyun/$slug")({
  loader: ({ params }) => {
    if (!gameBySlug(params.slug)) throw notFound();
    return { slug: params.slug };
  },
  component: TicTacToe,
});
