import { createFileRoute } from "@tanstack/react-router";
import { ImagePage } from "@/routes/image";

export const Route = createFileRoute("/ru/image")({
  component: ImagePage,
});
