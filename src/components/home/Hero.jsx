import React from "react";
import { FaPlay, FaInfoCircle, FaStar } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] overflow-hidden bg-black">

      {/* Background Image */}
      <img
        src="https://image.tmdb.org/t/p/original/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg"
        alt="Featured movie"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[70vh] max-w-7xl items-center px-6 py-20">

        <div className="max-w-2xl">

          {/* Badge */}
          <div className="mb-5 flex items-center gap-2">
            <span className="rounded-md bg-red-500 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
              #1 Trending
            </span>

            <span className="text-sm text-gray-300">
              2024
            </span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-black uppercase tracking-tight text-white md:text-7xl">
            Deadpool
            <span className="block text-red-500">
              & Wolverine
            </span>
          </h1>

          {/* Movie Info */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-300">

            <span className="flex items-center gap-1 text-yellow-400">
              <FaStar />
              8.0
            </span>

            <span>2024</span>

            <span>2h 8m</span>

            <span className="rounded border border-gray-500 px-2 py-1">
              18+
            </span>

            <span>Action • Comedy • Sci-Fi</span>

          </div>

          {/* Description */}
          <p className="mt-5 max-w-xl leading-7 text-gray-300">
            Wade Wilson teams up with Wolverine on a mission that takes them
            across the multiverse in this action-packed adventure.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">

            <button
              className="flex items-center gap-2 rounded-lg bg-red-500
                         px-6 py-3 font-bold text-white
                         transition-all duration-300
                         hover:scale-105 hover:bg-red-600"
            >
              <FaPlay />
              Watch Now
            </button>

            <button
              className="flex items-center gap-2 rounded-lg
                         bg-white/10 px-6 py-3 font-bold text-white
                         backdrop-blur-md transition-all duration-300
                         hover:bg-white/20"
            >
              <FaInfoCircle />
              More Info
            </button>

          </div>

        </div>
      </div>
    </section>
  );
}