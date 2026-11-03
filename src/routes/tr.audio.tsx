import { createFileRoute } from "@tanstack/react-router";
import { AudioPage, audioMeta } from "@/voice/audio-page";

export const Route = createFileRoute("/tr/audio")({
  head: () => ({ meta: audioMeta("tr") }),
  component: () => <AudioPage lang="tr" />,
});
