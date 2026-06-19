export default function Badge({ children, variant = 'neutral' }) {
  const variants = {
    success: 'bg-green-300 text-green-900',

    warning: 'bg-yellow-300 text-yellow-900',

    error: 'bg-red-300 text-red-900',

    info: 'bg-blue-100 text-blue-700',

    neutral: 'bg-gray-100 text-gray-700',
  };
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-sm font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
