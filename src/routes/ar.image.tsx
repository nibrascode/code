import { createFileRoute } from "@tanstack/react-router";
import { ImagePage } from "@/image/image-page";

export const Route = createFileRoute("/ar/image")({
  component: ImagePage,
});
