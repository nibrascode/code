import { createFileRoute } from "@tanstack/react-router";
import { ErrorHelpPage } from "@/error-help/error-help";

export const Route = createFileRoute("/en/error-help")({
  component: ErrorHelpPage,
});
