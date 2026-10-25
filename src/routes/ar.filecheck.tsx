import { createFileRoute } from "@tanstack/react-router";
import { FileCheckPage } from "@/filecheck/filecheck";

export const Route = createFileRoute("/ar/filecheck")({
  component: FileCheckPage,
});
