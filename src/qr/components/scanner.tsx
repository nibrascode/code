import { useEffect, useRef, useState } from "react";
import jsQR from "jsqr";
import { AlertTriangle, CalendarPlus, Camera, Copy, ExternalLink, ImageIcon, Mail, Phone, ShieldCheck, Trash2, UserPlus, Wifi } from "lucide-react";
import { toast } from "sonner";
import { useI18n } from "@/qr/lib/i18n";
import { Button } from "@/qr/ui/button";
import { Card } from "@/qr/ui/card";
import { cn } from "@/qr/lib/utils";
import { downloadBlob } from "@/qr/lib/render";
import { classify, urlWarnings, type UrlWarning } from "@/qr/lib/scan-intel";
import { LIMITS } from "@/qr/lib/local";

type Hit = { text: string; at: number };

const HISTORY_KEY = "nibras-scan-history";

function loadHistory(): Hit[] {
  try {
    const raw = localStorage.getItem(HISTORY_KEY);
    return raw ? (JSON.parse(raw) as Hit[]) : [];
  } catch {
    return [];
  }
}

function saveHistory(items: Hit[], max: number) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, max)));
}

function decodeCanvas(canvas: HTMLCanvasElement): string | null {
  const ctx = canvas.getContext("2d", { willReadFrequently: true });
  if (!ctx) return null;
  const img = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const code = jsQR(img.data, img.width, img.height, { inversionAttempts: "attemptBoth" });
  return code?.data ?? null;
}

export function Scanner({ pro = false }: { pro?: boolean }) {
  const maxHistory = pro ? LIMITS.pro.history : LIMITS.free.history;
  const { t, m, w } = useI18n();
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [live, setLive] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const [history, setHistory] = useState<Hit[]>([]);
  const [error, setError] = useState<string | null>(null);
  const raf = useRef<number>(0);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    setHistory(loadHistory());
    return () => stop();
  }, []);

  const pushHit = (text: string) => {
    setResult(text);
    setHistory((prev) => {
      const next = [{ text, at: Date.now() }, ...prev.filter((h) => h.text !== text)];
      saveHistory(next, maxHistory);
      return next.slice(0, maxHistory);
    });
  };

  const loop = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || video.readyState < 2) {
      raf.current = requestAnimationFrame(loop);
      return;
    }
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.drawImage(video, 0, 0);
      const text = decodeCanvas(canvas);
      if (text) {
        pushHit(text);
        stop();
        return;
      }
    }
    raf.current = requestAnimationFrame(loop);
  };

  const start = async () => {
    setError(null);
    setResult(null);
    try {
      if (!navigator.mediaDevices?.getUserMedia) throw new Error("no media devices");
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: { ideal: "environment" } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        await videoRef.current.play();
      }
      setLive(true);
      raf.current = requestAnimationFrame(loop);
    } catch (err) {
      const name = err instanceof DOMException ? err.name : "";
      setError(
        !navigator.mediaDevices?.getUserMedia
          ? w.camNone
          : name === "NotAllowedError" || name === "SecurityError"
            ? w.camBlocked
            : name === "NotFoundError" || name === "OverconstrainedError"
              ? w.camNone
              : t.scan.denied,
      );
    }
  };

  const stop = () => {
    cancelAnimationFrame(raf.current);
    streamRef.current?.getTracks().forEach((tr) => tr.stop());
    streamRef.current = null;
    setLive(false);
  };

  const onFile = async (file: File) => {
    const url = URL.createObjectURL(file);
    try {
      const img = new Image();
      await new Promise<void>((resolve, reject) => {
        img.onload = () => resolve();
        img.onerror = () => reject();
        img.src = url;
      });
      const canvas = canvasRef.current;
      if (!canvas) return;
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      ctx?.drawImage(img, 0, 0);
      const text = decodeCanvas(canvas);
      if (text) pushHit(text);
      else toast.error(t.scan.empty);
    } finally {
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
      <Card className="p-3">
        <div className="relative overflow-hidden rounded-xl bg-bg-subtle">
          <video
            ref={videoRef}
            className={cn("aspect-[3/4] w-full object-cover sm:aspect-video", !live && "hidden")}
            playsInline
            muted
          />
          {!live && (
            <div className="flex aspect-[3/4] flex-col items-center justify-center gap-3 text-muted sm:aspect-video">
              <ScanMark />
              <p className="px-6 text-center text-sm">{t.scan.empty}</p>
            </div>
          )}
          <canvas ref={canvasRef} className="hidden" />
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {live ? (
            <Button variant="secondary" onClick={stop}>
              {t.scan.stop}
            </Button>
          ) : (
            <Button onClick={() => void start()}>
              <Camera /> {t.scan.start}
            </Button>
          )}
          <Button asChild variant="outline">
            <label className="cursor-pointer">
              <ImageIcon /> {t.scan.gallery}
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) void onFile(f);
                }}
              />
            </label>
          </Button>
        </div>
        {error && <p className="mt-3 text-sm text-danger">{error}</p>}
      </Card>

      <div className="space-y-4">
        {result ? (
          <ResultCard key={result} text={result} />
        ) : (
          <Card className="p-5">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">{t.scan.result}</p>
            <p className="mt-2 text-sm text-muted">{t.scan.empty}</p>
          </Card>
        )}

        <Card className="p-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium tracking-wide text-muted uppercase">{t.scan.history}</p>
            {history.length > 0 && (
              <button
                type="button"
                className="text-xs text-muted hover:text-fg"
                onClick={() => {
                  setHistory([]);
                  saveHistory([], maxHistory);
                }}
              >
                <Trash2 className="mr-1 inline size-3" />
                {t.scan.clear}
              </button>
            )}
          </div>
          <ul className="mt-3 space-y-2">
            {history.slice(0, 20).map((h) => (
              <li key={h.at}>
                <button
                  type="button"
                  className="w-full truncate rounded-lg px-2 py-2 text-left font-mono text-xs text-muted hover:bg-bg-subtle hover:text-fg"
                  onClick={() => setResult(h.text)}
                >
                  {h.text}
                </button>
              </li>
            ))}
          </ul>
          {!pro && <p className="mt-3 text-xs text-subtle">{fmtN(m.historyFree, LIMITS.free.history)}</p>}
        </Card>
      </div>
    </div>
  );
}

function ScanMark() {
  return (
    <div className="relative size-28">
      <span className="absolute top-0 left-0 h-8 w-8 rounded-tl-lg border-t-2 border-l-2 border-primary" />
      <span className="absolute top-0 right-0 h-8 w-8 rounded-tr-lg border-t-2 border-r-2 border-primary" />
      <span className="absolute bottom-0 left-0 h-8 w-8 rounded-bl-lg border-b-2 border-l-2 border-primary" />
      <span className="absolute right-0 bottom-0 h-8 w-8 rounded-br-lg border-b-2 border-r-2 border-primary" />
    </div>
  );
}

const fmtN = (s: string, n: number) => s.replace("{n}", String(n));

function copy(text: string, done: string) {
  void navigator.clipboard.writeText(text).then(() => toast.success(done));
}

/** Scan result with smart actions and an offline link-safety check. */
function ResultCard({ text }: { text: string }) {
  const { t, m } = useI18n();
  const s = classify(text);
  const warnings: UrlWarning[] = s.kind === "url" ? urlWarnings(s.url) : [];
  const [confirm, setConfirm] = useState(false);
  const warnText: Record<UrlWarning, string> = {
    short: m.warnShort,
    ip: m.warnIp,
    http: m.warnHttp,
    puny: m.warnPuny,
    at: m.warnAt,
    tld: m.warnTld,
  };
  return (
    <Card className="space-y-3 p-5" data-testid="scan-result">
      <p className="text-xs font-medium tracking-wide text-muted uppercase">{t.scan.result}</p>
      {s.kind === "wifi" ? (
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-teal-500/15 text-teal-400">
            <Wifi className="size-5" />
          </span>
          <div className="min-w-0 text-sm">
            <p>
              <span className="text-muted">{m.wifiNetwork}: </span>
              <span className="font-semibold">{s.wifi.ssid}</span>
            </p>
            {s.wifi.password && (
              <p className="break-all">
                <span className="text-muted">{m.wifiPassword}: </span>
                <span className="font-mono">{s.wifi.password}</span>
              </p>
            )}
            <p className="mt-1 text-xs text-subtle">{m.wifiHint}</p>
          </div>
        </div>
      ) : (
        <p className="break-all font-mono text-sm" data-testid="scan-text">
          {s.kind === "vcard" ? (s.name ?? text) : s.kind === "event" ? (s.title ?? text) : text}
        </p>
      )}
      {s.kind === "url" && (
        <div
          className={cn(
            "flex items-start gap-2 rounded-xl p-2.5 text-xs",
            warnings.length ? "bg-amber-500/10 text-amber-400" : "bg-emerald-500/10 text-emerald-400",
          )}
        >
          {warnings.length ? <AlertTriangle className="size-4 shrink-0" /> : <ShieldCheck className="size-4 shrink-0" />}
          <div>
            <p className="font-semibold">{warnings.length ? m.warnTitle : m.safeLink}</p>
            {warnings.map((w) => (
              <p key={w}>• {warnText[w]}</p>
            ))}
          </div>
        </div>
      )}
      <div className="flex flex-wrap gap-2">
        {s.kind === "url" && (
          <Button
            size="sm"
            variant={warnings.length && !confirm ? "outline" : "default"}
            onClick={() => {
              if (warnings.length && !confirm) return setConfirm(true);
              window.open(s.url, "_blank", "noopener,noreferrer");
            }}
          >
            <ExternalLink /> {warnings.length && confirm ? m.openAnyway : t.scan.open}
          </Button>
        )}
        {s.kind === "wifi" && s.wifi.password && (
          <Button size="sm" onClick={() => copy(s.wifi.password, t.export.copied)}>
            <Copy /> {m.copyPassword}
          </Button>
        )}
        {s.kind === "vcard" && (
          <Button size="sm" onClick={() => downloadBlob(new Blob([s.raw], { type: "text/vcard" }), "contact.vcf")}>
            <UserPlus /> {m.addContact}
          </Button>
        )}
        {s.kind === "event" && (
          <Button size="sm" onClick={() => downloadBlob(new Blob([s.raw], { type: "text/calendar" }), "event.ics")}>
            <CalendarPlus /> {m.addEvent}
          </Button>
        )}
        {s.kind === "tel" && (
          <Button size="sm" asChild>
            <a href={`tel:${s.number}`}>
              <Phone /> {m.call}
            </a>
          </Button>
        )}
        {s.kind === "email" && (
          <Button size="sm" asChild>
            <a href={`mailto:${s.address}`}>
              <Mail /> {m.sendEmail}
            </a>
          </Button>
        )}
        <Button size="sm" variant="secondary" onClick={() => copy(text, t.export.copied)}>
          <Copy /> {t.scan.copy}
        </Button>
      </div>
    </Card>
  );
}
