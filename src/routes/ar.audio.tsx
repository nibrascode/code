import { createFileRoute } from "@tanstack/react-router";
import { AudioPage, audioMeta } from "@/voice/audio-page";

export const Route = createFileRoute("/ar/audio")({
  head: () => ({ meta: audioMeta("ar") }),
  component: () => <AudioPage lang="ar" />,
});
