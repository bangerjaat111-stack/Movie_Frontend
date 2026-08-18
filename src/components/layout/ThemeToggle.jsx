import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-800 text-white transition hover:bg-red-500"
      aria-label="Toggle theme"
    >
      {dark ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
}