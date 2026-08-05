import { FaMoon, FaSun } from "react-icons/fa";

export default function ThemeToggle({
  dark,
  setDark,
}) {
  return (
    <button
      onClick={() => setDark(!dark)}
      className="relative flex h-11 w-20 items-center rounded-full bg-zinc-800 p-1"
    >
      <div
        className={`absolute h-9 w-9 rounded-full bg-red-600 transition-all duration-500 ${
          dark
            ? "translate-x-0"
            : "translate-x-9"
        }`}
      />

      <div className="flex w-full justify-between px-2 text-white z-10">
        <FaMoon />
        <FaSun />
      </div>
    </button>
  );
}