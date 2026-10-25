import { createFileRoute } from "@tanstack/react-router";
import { SchemaPage } from "@/schema/schema";

export const Route = createFileRoute("/en/schema")({
  component: SchemaPage,
});
