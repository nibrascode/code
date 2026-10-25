import { createFileRoute } from "@tanstack/react-router";
import { DoctorPage } from "@/doctor/doctor";

export const Route = createFileRoute("/ru/doctor")({
  component: DoctorPage,
});
