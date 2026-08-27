import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  helperText,
  error,
  id,
  className = '',
  ...props
}) => {
  const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
  const helperId = inputId ? `${inputId}-helper` : undefined;

  return (
    <div className="w-full space-y-1.5 text-left">
      {label && (
        <label
          htmlFor={inputId}
          className="block text-xs font-semibold text-[var(--text-secondary)] uppercase tracking-wider"
        >
          {label}
        </label>
      )}

      <input
        id={inputId}
        aria-describedby={helperText || error ? helperId : undefined}
        className={`w-full px-4 py-3 rounded-xl bg-[var(--bg-surface)] border text-[var(--text-primary)] placeholder-[var(--text-muted)] text-sm transition-colors focus:outline-none focus:border-[var(--primary)] ${
          error ? 'border-red-500' : 'border-[var(--border-subtle)]'
        } ${className}`}
        {...props}
      />

      {(helperText || error) && (
        <p
          id={helperId}
          className={`text-xs ${error ? 'text-red-500 font-medium' : 'text-[var(--text-muted)]'}`}
        >
          {error || helperText}
        </p>
      )}
    </div>
  );
};
