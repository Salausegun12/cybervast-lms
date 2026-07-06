import React, { TextareaHTMLAttributes, forwardRef, useId } from "react";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, helperText, disabled, className, id, ...props }, ref) => {
    const defaultId = useId();
    const textareaId = id || defaultId;

    const baseStyles = "flex w-full rounded-md border bg-transparent px-3 py-2 text-sm transition-colors placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 min-h-[80px]";
    const errorStyles = "border-[var(--danger-color,#ef4444)] focus:ring-[var(--danger-color,#ef4444)] text-[var(--danger-color,#ef4444)]";
    const defaultStyles = "border-gray-300 focus:ring-[var(--primary-color,#3b82f6)]";

    return (
      <div className="w-full flex flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          disabled={disabled}
          className={`${baseStyles} ${error ? errorStyles : defaultStyles} ${className || ""}`}
          {...props}
        />
        {error && <p className="text-sm text-[var(--danger-color,#ef4444)]">{error}</p>}
        {helperText && !error && <p className="text-sm text-gray-500">{helperText}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
