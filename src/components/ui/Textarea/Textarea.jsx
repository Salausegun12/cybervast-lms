export default function Textarea({
  label,
  placeholder,
  helperText,
  error,
  disabled = false,
  rows = 4,
  id,
  ...props
}) {
  return (
    <div className="flex w-full flex-col gap-1">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <textarea
        id={id}
        rows={rows}
        disabled={disabled}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={
          error ? `${id}-error` : helperText ? `${id}-helper` : undefined
        }
        className={`w-full resize-none rounded-md border px-3 py-2 transition-all outline-none ${
          error
            ? 'border-red-500 focus:ring-2 focus:ring-red-300'
            : 'border-gray-300 focus:ring-2 focus:ring-purple-300'
        } ${disabled ? 'cursor-not-allowed bg-gray-100 opacity-60' : ''}`}
        {...props}
      />

      {helperText && !error && (
        <p id={`${id}-helper`} className="text-xs text-gray-500">
          {helperText}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}
