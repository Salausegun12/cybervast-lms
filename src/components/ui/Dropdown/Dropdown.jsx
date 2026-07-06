export default function Dropdown({
  label,
  options = [],
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-2">
      
      {label && (
        <label className="font-medium">
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className="
          rounded-md
          border bg-purple-700 text-white hover:bg-purple-900
          
          px-6
          py-2
          outline-none
          focus:border-purple-700
        "
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>

    </div>
  );
}