import { Crown, Lock, X } from "lucide-react";
import { create } from "zustand";
import { useI18n } from "@/qr/lib/i18n";
import { useQrAuth } from "@/qr/lib/auth";
import { cn } from "@/qr/lib/utils";
import { Button } from "@/qr/ui/button";

export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.nibras.qr";

export const useLock = create<{ open: boolean; show: () => void; hide: () => void }>((set) => ({
  open: false,
  show: () => set({ open: true }),
  hide: () => set({ open: false }),
}));

export function ProBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-amber-400 to-fuchsia-500 px-2 py-0.5 text-[10px] font-bold text-white",
        className,
      )}
    >
      <Lock className="size-2.5" /> PRO
    </span>
  );
}

/** "Pro coming soon on web / get Pro in the app" dialog. */
export function LockDialog() {
  const { w } = useI18n();
  const { open, hide } = useLock();
  const { user, signIn, busy } = useQrAuth();
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onClick={hide}>
      <div className="relative w-full max-w-sm rounded-2xl bg-bg-elevated p-6 shadow-[var(--shadow-border)]" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="absolute end-3 top-3 text-muted hover:text-fg" onClick={hide} aria-label="Close">
          <X className="size-5" />
        </button>
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-amber-400 to-fuchsia-500 text-white">
          <Crown className="size-6" />
        </span>
        <h2 className="mt-4 font-display text-xl font-bold">{w.lockTitle}</h2>
        <p className="mt-2 text-sm text-muted">{w.lockBody}</p>
        <div className="mt-5 grid gap-2">
          <Button asChild>
            <a href={PLAY_URL} target="_blank" rel="noreferrer">
              {w.getApp}
            </a>
          </Button>
          {!user && (
            <>
              <p className="mt-2 text-xs text-subtle">{w.lockSignIn}</p>
              <Button variant="outline" disabled={busy} onClick={() => void signIn()}>
                {w.signIn}
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
