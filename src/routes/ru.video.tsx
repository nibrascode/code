import { createFileRoute } from "@tanstack/react-router";
import { VideoHubPage } from "@/kit/video-tools";

export const Route = createFileRoute("/ru/video")({
  component: VideoHubPage,
});
