import { createFileRoute } from "@tanstack/react-router";
import { ZipPage } from "@/kit/zip";

export const Route = createFileRoute("/en/zip")({
  component: ZipPage,
});
