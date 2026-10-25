import { AlertTriangle } from "lucide-react";
export function ConfirmDialog({ title, body, ok, cancel, onOk, onCancel }: { title: string; body: string; ok: string; cancel: string; onOk: () => void; onCancel: () => void }) {
  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/60 p-4 backdrop-blur-sm" onClick={onCancel} role="presentation">
      <div role="alertdialog" aria-modal="true" aria-labelledby="cd-t" className="w-full max-w-sm rounded-2xl border border-red-500/40 bg-[#120c14] p-5 text-[#e8ecf7] shadow-[0_20px_60px_-20px_#ff3b3b]" onClick={(e) => e.stopPropagation()} data-testid="confirm-dialog">
        <div className="flex items-start gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-red-500/15 text-red-400"><AlertTriangle className="size-5" /></span>
          <div className="min-w-0"><h2 id="cd-t" className="text-base font-semibold">{title}</h2><p className="mt-1 break-words text-sm text-[#b9c0d6]">{body}</p></div>
        </div>
        <div className="mt-5 flex justify-end gap-2">
          <button autoFocus className="min-h-10 rounded-xl border border-white/15 px-4 text-sm hover:bg-white/5" onClick={onCancel} data-testid="confirm-cancel">{cancel}</button>
          <button className="min-h-10 rounded-xl bg-red-600 px-4 text-sm font-semibold text-white hover:bg-red-500" onClick={onOk} data-testid="confirm-ok">{ok}</button>
        </div>
      </div>
    </div>
  );
}
