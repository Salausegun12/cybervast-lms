export default function Avatar({
  src,
  name = "",
  size = "md",
}) {
  const sizes = {
    xs: "h-8 w-8 text-xs",
    sm: "h-10 w-10 text-sm",
    md: "h-14 w-14 text-base",
    lg: "h-20 w-20 text-lg",
  };

  //--- Initials generate----
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className={`
        ${sizes[size]}
        flex
        items-center
        justify-center
        overflow-hidden
        rounded-full
        bg-[var(--color-primary)]
        font-semibold
        text-white
      `}
    >
      {src ? (
        <img
          src={src}
          alt={name}
          className="h-full w-full object-cover"
        />
      ) : (
        initials
      )}
    </div>
  );
}