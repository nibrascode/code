import { createFileRoute } from "@tanstack/react-router";
import { VoicePage, voiceMeta } from "@/voice/voice-page";

export const Route = createFileRoute("/en/voice")({
  head: () => ({ meta: voiceMeta("en") }),
  component: () => <VoicePage lang="en" />,
});
