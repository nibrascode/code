import { createFileRoute } from "@tanstack/react-router";
import { ErasePage } from "@/erase/erase-page";

export const Route = createFileRoute("/ru/erase")({
  component: ErasePage,
});
