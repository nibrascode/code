import { createFileRoute } from "@tanstack/react-router";
import { WordCountPage } from "@/routes/soz-sayi";

export const Route = createFileRoute("/ar/soz-sayi")({
  component: WordCountPage,
});
