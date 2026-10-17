import { createFileRoute } from "@tanstack/react-router";
import { WifiPage } from "@/routes/wifi";

export const Route = createFileRoute("/ru/wifi")({
  component: WifiPage,
});
