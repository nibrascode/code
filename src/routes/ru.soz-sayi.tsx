import { createFileRoute } from "@tanstack/react-router";
import { WordCountPage } from "@/routes/soz-sayi";

export const Route = createFileRoute("/ru/soz-sayi")({
  component: WordCountPage,
});
