import { createFileRoute, notFound } from "@tanstack/react-router";
import { VideoToolPage, isVideoTool } from "@/kit/video-tools";

export const Route = createFileRoute("/tr/video_/$tool")({
  beforeLoad: ({ params }) => {
    if (!isVideoTool(params.tool)) throw notFound();
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return isVideoTool(tool) ? <VideoToolPage tool={tool} /> : null;
  },
});
