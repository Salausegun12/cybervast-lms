export default function ProgressBar({
  value = 0,
}) {
  return (
    <div className="w-full">
      
      <div className="mb-2 flex justify-between">
        <span>Progress</span>
        <span>{value}%</span>
      </div>

      <div className="h-3 w-full rounded-full bg-gray-200">
        <div
          className="h-3 rounded-full bg-[var(--color-primary)] transition-all"
          style={{
            width: `${value}%`,
          }}
        />
      </div>

    </div>
  );
}