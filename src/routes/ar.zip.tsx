import { createFileRoute } from "@tanstack/react-router";
import { ZipPage } from "@/kit/zip";

export const Route = createFileRoute("/ar/zip")({
  component: ZipPage,
});
