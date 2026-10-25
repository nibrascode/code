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

  usePresence();
  return null;
}

// Anonim "indi saytda" siqnalı. Səhifə tam yüklənəndən və brauzer boş qalandan sonra başlayır,
// kiçik sendBeacon/keepalive sorğusu göndərir; heç vaxt render-i və ya yüklənməni gözlətmir.
function usePresence() {
  useEffect(() => {
    if (location.pathname.startsWith("/nx-studio")) return;
    let timer = 0;
    let idle = 0;
    let stopped = false;
    const sid = (() => {
      try {
        let v = sessionStorage.getItem("nb_sid");
        if (!v) {
          v = (crypto.randomUUID?.() || `${Math.random()}${Date.now()}`).replace(/[^a-z0-9]/gi, "").toLowerCase().slice(0, 32);
          sessionStorage.setItem("nb_sid", v);
        }
        return v;
      } catch {
        return "";
      }
    })();
    if (!sid) return;
    const body = JSON.stringify({ sid });
    const ping = () => {
      if (stopped || document.visibilityState === "hidden") return;
      try {
        if (navigator.sendBeacon?.("/api/presence", new Blob([body], { type: "application/json" }))) return;
        fetch("/api/presence", { method: "POST", body, keepalive: true, headers: { "Content-Type": "application/json" } }).catch(() => undefined);
      } catch {
        /* səssiz */
      }
    };
    const onVis = () => {
      if (document.visibilityState === "visible") ping();
    };
    const start = () => {
      const ric = (window as Window & { requestIdleCallback?: (cb: () => void, o?: { timeout: number }) => number }).requestIdleCallback;
      const go = () => {
        ping();
        timer = window.setInterval(ping, 45_000);
        document.addEventListener("visibilitychange", onVis);
      };
      idle = ric ? ric(go, { timeout: 5000 }) : window.setTimeout(go, 2000);
    };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => {
      stopped = true;
      window.removeEventListener("load", start);
      window.clearInterval(timer);
      window.clearTimeout(idle);
      (window as Window & { cancelIdleCallback?: (id: number) => void }).cancelIdleCallback?.(idle);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);
}

export function countDownload(slug: string) {
  if (!slug) return;
  recordHit({ data: { kind: "download", slug } }).catch(() => undefined);
}
