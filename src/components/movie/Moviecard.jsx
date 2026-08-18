import React from "react";
import { Link } from "react-router-dom";
import { FiStar, FiPlay } from "react-icons/fi";

import { getPosterUrl } from "../../utils/imageUrl";

export default function MovieCard({ movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group relative block overflow-hidden rounded-xl bg-zinc-900 transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative aspect-[2/3] overflow-hidden">

        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/70 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white">
            <FiPlay size={22} fill="currentColor" />
          </div>
        </div>

        {/* Rating */}
        <div className="absolute left-2 top-2 flex items-center gap-1 rounded-md bg-black/80 px-2 py-1 text-xs font-semibold text-yellow-400">
          <FiStar size={13} fill="currentColor" />
          {movie.vote_average?.toFixed(1)}
        </div>
      </div>

      <div className="p-3">
        <h3 className="truncate text-sm font-semibold text-white transition group-hover:text-red-500">
          {movie.title}
        </h3>

        <div className="mt-1 flex items-center justify-between text-xs text-gray-400">
          <span>
            {movie.release_date?.slice(0, 4) || "N/A"}
          </span>

          <span>Movie</span>
        </div>
      </div>
    </Link>
  );
}