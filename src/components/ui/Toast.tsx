'use client';

import React, { useEffect } from 'react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, onClose, duration = 2500 }: ToastProps) {
  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [message, duration, onClose]);

  if (!message) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-bold)] shadow-2xl text-[var(--text-primary)] text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-200"
    >
      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 font-bold text-xs">
        ✓
      </span>
      <span>{message}</span>
    </div>
  );
}
