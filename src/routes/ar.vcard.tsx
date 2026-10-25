import { createFileRoute } from "@tanstack/react-router";
import { VcardPage } from "@/kit/vcard";

export const Route = createFileRoute("/ar/vcard")({
  component: VcardPage,
});
