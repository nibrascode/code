import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans font-semibold tracking-wider uppercase transition-[transform,background-color,color,box-shadow,border-color,opacity] duration-150 ease-out active:not-disabled:scale-[0.96] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-fg text-ink shadow-[0_12px_40px_rgb(109_132_255_/_0.22)] hover:bg-white",
        ghost:
          "border border-line-strong bg-white/4 text-fg hover:border-line-hot hover:bg-white/7",
        nav: "border border-line bg-white/4 text-fg hover:border-line-hot",
      },
      size: {
        default: "h-11 rounded-full px-5 text-2xs",
        sm: "h-10 rounded-full px-4 text-2xs",
        lg: "h-12 rounded-full px-6 text-2xs",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}
