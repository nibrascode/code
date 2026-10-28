import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { VideoToolPage, isVideoTool } from "@/kit/video-tools";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/video_/$tool")({
  beforeLoad: ({ location, params }) => {
    if (!isVideoTool(params.tool)) throw notFound();
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return isVideoTool(tool) ? <VideoToolPage tool={tool} /> : null;
  },
});
