import React from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import SearchBar from "./SearchBar";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-zinc-950/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4">

        <div className="group relative cursor-pointer">
          <h1 className="relative text-4xl font-extrabold tracking-[0.15em] uppercase
                 text-white
                 drop-shadow-[0_0_12px_rgba(239,68,68,0.6)]
                 transition-all duration-300
                 group-hover:scale-105">

            BAN
            <span className="text-red-500">GER</span>

          </h1>

          <span className="absolute -bottom-1 left-0 h-[2px] w-0 
                   bg-red-500 transition-all duration-500
                   group-hover:w-full">
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive
                ? "text-red-500"
                : "text-gray-300 hover:text-red-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/movies"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive
                ? "text-red-500"
                : "text-gray-300 hover:text-red-500"
              }`
            }
          >
            Movies
          </NavLink>

          <NavLink
            to="/popular"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive
                ? "text-red-500"
                : "text-gray-300 hover:text-red-500"
              }`
            }
          >
            Popular
          </NavLink>

          <NavLink
            to="/top-rated"
            className={({ isActive }) =>
              `text-sm font-medium transition ${isActive
                ? "text-red-500"
                : "text-gray-300 hover:text-red-500"
              }`
            }
          >
            Top Rated
          </NavLink>

        </div>

        {/* Search + Theme */}
        <div className="hidden items-center gap-3 lg:flex">
          <SearchBar />
          <ThemeToggle />
        </div>

        {/* Mobile Menu */}
        <button
          className="rounded-lg p-2 text-white hover:bg-zinc-800 md:hidden"
          aria-label="Open menu"
        >
          <FiMenu size={24} />
        </button>

      </nav>
    </header >
  );
}