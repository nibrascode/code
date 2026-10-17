import { createFileRoute } from "@tanstack/react-router";
import { WordCountPage } from "@/routes/soz-sayi";

export const Route = createFileRoute("/tr/soz-sayi")({
  component: WordCountPage,
});
