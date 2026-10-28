import { createFileRoute } from "@tanstack/react-router";
import { VoicePage, voiceMeta } from "@/voice/voice-page";

export const Route = createFileRoute("/tr/voice")({
  head: () => ({ meta: voiceMeta("tr") }),
  component: () => <VoicePage lang="tr" />,
});
