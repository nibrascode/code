import { createFileRoute } from "@tanstack/react-router";
import { VoicePage, voiceMeta } from "@/voice/voice-page";

export const Route = createFileRoute("/ar/voice")({
  head: () => ({ meta: voiceMeta("ar") }),
  component: () => <VoicePage lang="ar" />,
});
