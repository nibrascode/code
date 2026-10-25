import { createFileRoute } from "@tanstack/react-router";
import { DoctorPage } from "@/doctor/doctor";

export const Route = createFileRoute("/tr/doctor")({
  component: DoctorPage,
});
