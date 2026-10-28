import { createFileRoute } from "@tanstack/react-router";
import { VideoHubPage } from "@/kit/video-tools";

export const Route = createFileRoute("/en/video")({
  component: VideoHubPage,
});
