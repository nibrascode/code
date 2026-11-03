import { createFileRoute } from "@tanstack/react-router";
import { AudioPage, audioMeta } from "@/voice/audio-page";

export const Route = createFileRoute("/ru/audio")({
  head: () => ({ meta: audioMeta("ru") }),
  component: () => <AudioPage lang="ru" />,
});
