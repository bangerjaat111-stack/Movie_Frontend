import { useState } from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBar() {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`flex items-center rounded-full overflow-hidden transition-all duration-500 ${
        focus
          ? "w-72 bg-white"
          : "w-12 bg-white/10"
      }`}
    >
      <button className="p-3 text-black">
        <IoSearch />
      </button>

      <input
        type="text"
        placeholder="Search movies..."
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`outline-none bg-transparent text-black transition-all duration-300 ${
          focus ? "w-full px-2" : "w-0"
        }`}
      />
    </div>
  );
}