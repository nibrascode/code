import { createFileRoute } from "@tanstack/react-router";
import { AudioPage, audioMeta } from "@/voice/audio-page";

export const Route = createFileRoute("/audio")({
  head: () => ({ meta: audioMeta("az") }),
  component: () => <AudioPage lang="az" />,
});
