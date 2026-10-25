import { createFileRoute, notFound, redirect } from "@tanstack/react-router";
import { ImageToolPage, isImageTool } from "@/kit/image-tools";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/image_/$tool")({
  beforeLoad: ({ location, params }) => {
    if (!isImageTool(params.tool)) throw notFound();
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, location.pathname), replace: true });
  },
  component: function Page() {
    const { tool } = Route.useParams();
    return isImageTool(tool) ? <ImageToolPage tool={tool} /> : null;
  },
});
