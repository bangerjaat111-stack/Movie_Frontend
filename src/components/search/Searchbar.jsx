import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();

    if (!search.trim()) return;

    navigate(`/search?query=${encodeURIComponent(search)}`);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-full max-w-sm"
    >
      <div className="relative w-full">
        <FiSearch
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          size={20}
        />

        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-full bg-zinc-800 border border-zinc-700 py-2.5 pl-10 pr-4 text-sm text-white outline-none transition focus:border-red-500"
        />
      </div>
    </form>
  );
}