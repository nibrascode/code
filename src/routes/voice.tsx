import { createFileRoute } from "@tanstack/react-router";
import { VoicePage, voiceMeta } from "@/voice/voice-page";

export const Route = createFileRoute("/voice")({
  head: () => ({ meta: voiceMeta("az") }),
  component: () => <VoicePage lang="az" />,
});
