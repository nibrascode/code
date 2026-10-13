import { createFileRoute } from "@tanstack/react-router";
import { FilesPage } from "@/files/files-page";

export const Route = createFileRoute("/ar/files")({
  component: FilesPage,
});
