export default function Card({
  image,
  courseName,
  duration,
  buttonText = 'View Course',
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md">
      {/* Image Section */}
      <img src={image} alt={courseName} className="h-48 w-full object-cover" />

      {/* Content Section */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{courseName}</h3>

        <p className="mt-2 text-sm text-gray-600">Duration: {duration}</p>
      </div>

      {/* Button Section */}
      <div className="p-4 pt-0">
        <button className="w-full rounded-md bg-[var(--color-primary)] px-4 py-2 text-white hover:bg-[var(--color-primary-dark)]">
          {buttonText}
        </button>
      </div>
    </div>
  );
}
