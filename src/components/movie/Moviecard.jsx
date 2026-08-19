import React from "react";
import { Link } from "react-router-dom";
import { FiStar } from "react-icons/fi";

export default function MovieCard({ movie }) {
  const posterUrl = movie.poster_path || null;

  return (
    <Link
      to={`/movie/${movie.id}`}
      className="group block overflow-hidden rounded-xl bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/10"
    >
      <div className="relative aspect-[2/3] overflow-hidden bg-zinc-800">

        {/* Movie Poster */}
        {posterUrl ? (
          <img
            src={posterUrl}
            alt={movie.title || "Movie"}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-6xl">🎬</span>
          </div>
        )}

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

        {/* Rating */}
        <div className="absolute right-2 top-2 flex items-center gap-1 rounded-lg bg-black/70 px-2 py-1 text-xs font-semibold text-yellow-400 backdrop-blur">
          <FiStar size={13} fill="currentColor" />

          {movie.vote_average
            ? Number(movie.vote_average).toFixed(1)
            : "N/A"}
        </div>

        {/* Movie Information */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
          <h2 className="line-clamp-2 text-sm font-semibold text-white">
            {movie.title || "Unknown"}
          </h2>

          <p className="mt-1 text-xs text-gray-400">
            {movie.release_date
              ? String(movie.release_date).substring(0, 4)
              : "Unknown"}
          </p>
        </div>

      </div>
    </Link>
  );
}