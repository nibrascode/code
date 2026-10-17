import { createFileRoute } from "@tanstack/react-router";
import { ImagePage } from "@/routes/image";

export const Route = createFileRoute("/ar/image")({
  component: ImagePage,
});
