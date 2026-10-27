import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";
import { cn } from "../../lib/cn";

type PanelProps = {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  variant?: "sheet" | "menu";
  className?: string;
  /** Set when something points at this dialog with aria-controls. */
  id?: string;
  children: ReactNode;
};

/**
 * Native <dialog> modal: focus trap, inert background, Escape handling and
 * focus return come from the platform. Enter and exit transitions are CSS
 * (@starting-style + allow-discrete), so no animation library is involved.
 */
export function Panel({ open, onClose, labelledBy, variant = "sheet", className, id, children }: PanelProps) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (open && !el.open) el.showModal();
    else if (!open && el.open) el.close();
  }, [open]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const handleCancel = (event: Event) => {
      event.preventDefault();
      onClose();
    };
    const handleBackdrop = (event: MouseEvent) => {
      if (event.target === el) onClose();
    };
    el.addEventListener("cancel", handleCancel);
    el.addEventListener("click", handleBackdrop);
    return () => {
      el.removeEventListener("cancel", handleCancel);
      el.removeEventListener("click", handleBackdrop);
    };
  }, [onClose]);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("is-locked", open);
    return () => root.classList.remove("is-locked");
  }, [open]);

  return (
    <dialog
      ref={ref}
      id={id}
      className={cn(variant === "menu" ? "menu" : "sheet", className)}
      aria-labelledby={labelledBy}
    >
      {children}
    </dialog>
  );
}

type PanelCloseProps = {
  onClose: () => void;
  label?: string;
  className?: string;
};

export function PanelClose({ onClose, label = "Close", className }: PanelCloseProps) {
  return (
    <button
      type="button"
      onClick={onClose}
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-hairline transition-colors duration-300 hover:border-ink",
        className,
      )}
    >
      <X aria-hidden="true" className="size-5" strokeWidth={1.5} />
      <span className="sr-only">{label}</span>
    </button>
  );
}
