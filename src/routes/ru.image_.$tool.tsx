import { createFileRoute, notFound } from "@tanstack/react-router";
import { ImageToolPage, isImageTool } from "@/kit/image-tools";

export const Route = createFileRoute("/ru/image_/$tool")({
  beforeLoad: ({ params }) => {
    if (!isImageTool(params.tool)) throw notFound();
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return isImageTool(tool) ? <ImageToolPage tool={tool} /> : null;
  },
});
