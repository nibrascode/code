import { createFileRoute } from "@tanstack/react-router";
import { VcardPage } from "@/kit/vcard";

export const Route = createFileRoute("/en/vcard")({
  component: VcardPage,
});
