import { createFileRoute, redirect } from "@tanstack/react-router";
import { VideoHubPage } from "@/kit/video-tools";
import { localeHref } from "@/lib/locale-path";
import { readLang } from "@/lib/seo";

export const Route = createFileRoute("/video")({
  beforeLoad: ({ location }) => {
    const lang = readLang(location.searchStr);
    if (lang === "az") return;
    throw redirect({ href: localeHref(lang, "/video"), replace: true });
  },
  component: VideoHubPage,
});
