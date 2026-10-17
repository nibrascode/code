import { createFileRoute } from "@tanstack/react-router";
import { WifiPage } from "@/routes/wifi";

export const Route = createFileRoute("/en/wifi")({
  component: WifiPage,
});
