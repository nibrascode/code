import { createFileRoute } from "@tanstack/react-router";
import { VoicePage, voiceMeta } from "@/voice/voice-page";

export const Route = createFileRoute("/ru/voice")({
  head: () => ({ meta: voiceMeta("ru") }),
  component: () => <VoicePage lang="ru" />,
});
