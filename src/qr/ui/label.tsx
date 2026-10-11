import type { LabelHTMLAttributes } from "react";
import { cn } from "@/qr/lib/utils";

export function Label({ className, ...props }: LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn("text-xs font-medium text-muted", className)}
      {...props}
    />
  );
}
