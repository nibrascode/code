import { createFileRoute } from "@tanstack/react-router";
import { AudioPage, audioMeta } from "@/voice/audio-page";

export const Route = createFileRoute("/en/audio")({
  head: () => ({ meta: audioMeta("en") }),
  component: () => <AudioPage lang="en" />,
});
