import { createFileRoute } from "@tanstack/react-router";
import { LearnPage } from "@/learn/learn";

export const Route = createFileRoute("/ru/learn")({
  component: LearnPage,
});
