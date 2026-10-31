import { createFileRoute } from "@tanstack/react-router";
import { PhoneLab } from "@/phone/phone-lab";

export const Route = createFileRoute("/en/telefon")({
  component: PhoneLab,
});
