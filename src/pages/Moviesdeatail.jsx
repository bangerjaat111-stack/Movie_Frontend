import React from "react";
import { useParams, Link } from "react-router-dom";
import { FiPlay, FiArrowLeft, FiStar, FiClock } from "react-icons/fi";

const movie = {
  id: 1,
  title: "Interstellar",
  backdrop:
    "https://image.tmdb.org/t/p/original/pbrkL804c8yAv3zBZR4QPEafpAR.jpg",
  poster:
    "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  rating: 8.7,
  year: 2014,
  duration: "2h 49m",
  genre: ["Sci-Fi", "Adventure", "Drama"],
  description:
    "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
  director: "Christopher Nolan",
};

export default function MovieDetails() {
  const { id } = useParams();

  console.log("Movie ID:", id);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero Backdrop */}
      <section className="relative min-h-[650px] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={movie.backdrop}
            alt={movie.title}
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/60" />

          <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/20" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 py-20">

          {/* Back button */}
          <Link
            to="/"
            className="mb-10 inline-flex items-center gap-2 rounded-lg bg-black/40 px-4 py-2 text-sm text-gray-300 backdrop-blur transition hover:bg-red-600 hover:text-white"
          >
            <FiArrowLeft />
            Back
          </Link>

          <div className="flex flex-col gap-8 md:flex-row md:items-end">

            {/* Poster */}
            <div className="hidden w-64 shrink-0 overflow-hidden rounded-xl shadow-2xl md:block">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full object-cover"
              />
            </div>

            {/* Movie Info */}
            <div className="max-w-3xl">

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
                Movie Details
              </p>

              <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
                {movie.title}
              </h1>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap items-center gap-4 text-sm">

                <span className="flex items-center gap-1 font-semibold text-yellow-400">
                  <FiStar fill="currentColor" />
                  {movie.rating}
                </span>

                <span className="text-gray-300">
                  {movie.year}
                </span>

                <span className="flex items-center gap-1 text-gray-300">
                  <FiClock />
                  {movie.duration}
                </span>

                <span className="rounded border border-gray-500 px-2 py-1 text-xs">
                  HD
                </span>

              </div>

              {/* Genres */}
              <div className="mt-5 flex flex-wrap gap-2">
                {movie.genre.map((genre) => (
                  <span
                    key={genre}
                    className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 backdrop-blur"
                  >
                    {genre}
                  </span>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 max-w-2xl leading-7 text-gray-300">
                {movie.description}
              </p>

              {/* Director */}
              <p className="mt-4 text-sm text-gray-400">
                Director:
                <span className="ml-2 font-medium text-white">
                  {movie.director}
                </span>
              </p>

              {/* Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">

                <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">
                  <FiPlay fill="currentColor" />
                  Watch Trailer
                </button>

                <button className="rounded-lg bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20">
                  + Add to Watchlist
                </button>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="mx-auto max-w-7xl px-4 py-12">

        <h2 className="mb-6 text-2xl font-bold">
          About {movie.title}
        </h2>

        <p className="max-w-3xl leading-8 text-gray-400">
          {movie.description}
        </p>

      </section>

    </main>
  );
}