import { createFileRoute } from "@tanstack/react-router";
import { FileCheckPage } from "@/filecheck/filecheck";

export const Route = createFileRoute("/en/filecheck")({
  component: FileCheckPage,
});
