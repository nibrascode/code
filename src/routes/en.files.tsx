import { createFileRoute } from "@tanstack/react-router";
import { FilesPage } from "@/files/files-page";

export const Route = createFileRoute("/en/files")({
  component: FilesPage,
});
