import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";
import { recordHit } from "@/lib/studio.functions";

export function VisitMeter() {
  const pathname = useRouterState({ select: (state) => state.location.pathname });

  useEffect(() => {
    if (pathname.startsWith("/nx-studio")) return;
    const day = new Date().toISOString().slice(0, 10);
    const key = `nibras_view_${day}`;
    if (localStorage.getItem(key)) return;
    recordHit({ data: { kind: "view", slug: "" } })
      .then((result) => {
        if (result.ok) localStorage.setItem(key, "1");
      })
      .catch(() => undefined);
  }, [pathname]);

  return null;
}

export function countDownload(slug: string) {
  if (!slug) return;
  recordHit({ data: { kind: "download", slug } }).catch(() => undefined);
}
