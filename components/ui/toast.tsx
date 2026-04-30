"use client"

import { AnimatePresence, motion } from "framer-motion"
import { CheckCircle2, X, XCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastProps {
  open: boolean
  variant: "success" | "error"
  title: string
  message: string
  onClose: () => void
}

export function Toast({ open, variant, title, message, onClose }: ToastProps) {
  const baseStyle = "pointer-events-auto relative rounded-3xl border p-4 shadow-2xl"
  const variantStyle =
    variant === "success"
      ? "border-emerald-200 bg-emerald-50 text-emerald-900"
      : "border-rose-200 bg-rose-50 text-rose-900"

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.98 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={cn("w-full max-w-2xl mx-auto", baseStyle, variantStyle)}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1">
              {variant === "success" ? (
                <CheckCircle2 className="h-5 w-5" />
              ) : (
                <XCircle className="h-5 w-5" />
              )}
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-sm leading-relaxed text-current">{message}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-current opacity-80 hover:opacity-100 transition-opacity"
              aria-label="Close notification"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
