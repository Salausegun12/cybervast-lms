export default function NavItem({ icon, label, active = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex w-full items-center gap-3 rounded-lg px-4 py-3 transition ${
        active
          ? 'bg-[var(--color-primary)] text-white'
          : 'text-gray-700 hover:bg-gray-100'
      } `}
    >
      <span>{icon}</span>
      <span>{label}</span>
    </button>
  );
}
