import { createFileRoute } from "@tanstack/react-router";
import { DoctorPage } from "@/doctor/doctor";

export const Route = createFileRoute("/ar/doctor")({
  component: DoctorPage,
});
