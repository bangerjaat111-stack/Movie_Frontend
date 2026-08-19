import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiFilm,
  FiStar,
} from "react-icons/fi";

import { getMovieDetails } from "../services/movieApi";

export default function MovieDetail() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getMovieDetails(id);

        setMovie(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, [id]);

  // Loading
  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
        <div className="mx-auto max-w-6xl animate-pulse">
          <div className="mb-8 h-6 w-32 rounded bg-zinc-800" />

          <div className="grid gap-8 md:grid-cols-[280px_1fr]">
            <div className="aspect-[2/3] rounded-2xl bg-zinc-900" />

            <div>
              <div className="mb-4 h-10 w-2/3 rounded bg-zinc-800" />
              <div className="mb-6 h-5 w-1/3 rounded bg-zinc-800" />
              <div className="h-32 rounded bg-zinc-900" />
            </div>
          </div>
        </div>
      </main>
    );
  }

  // Error
  if (error || !movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-white">
        <div className="text-center">
          <FiFilm className="mx-auto mb-4 text-red-500" size={50} />

          <h1 className="text-2xl font-bold">
            Movie not found
          </h1>

          <p className="mt-2 text-gray-400">
            {error || "This movie does not exist."}
          </p>

          <Link
            to="/movies"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red-600 px-5 py-3 font-semibold transition hover:bg-red-700"
          >
            <FiArrowLeft />
            Back to Movies
          </Link>
        </div>
      </main>
    );
  }

  const year = movie.release_date
    ? movie.release_date.substring(0, 4)
    : "Unknown";

  const genres = Array.isArray(movie.genres)
    ? movie.genres
    : [];

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-8">

        {/* Back Button */}
        <Link
          to="/movies"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-white"
        >
          <FiArrowLeft />
          Back to Movies
        </Link>

        {/* Movie Details */}
        <section className="grid gap-8 md:grid-cols-[280px_1fr] lg:grid-cols-[320px_1fr]">

          {/* Poster */}
          <div className="overflow-hidden rounded-2xl bg-zinc-900 shadow-2xl">
            {movie.poster_path ? (
              <img
                src={movie.poster_path}
                alt={movie.title}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex aspect-[2/3] items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-950">
                <div className="px-6 text-center">
                  <FiFilm
                    size={60}
                    className="mx-auto mb-4 text-zinc-600"
                  />

                  <p className="text-lg font-semibold text-zinc-400">
                    {movie.title}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center">

            {/* Small label */}
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-red-500">
              <FiFilm />
              Movie Details
            </div>

            {/* Title */}
            <h1 className="text-4xl font-black leading-tight sm:text-5xl">
              {movie.title}
            </h1>

            {/* Meta */}
            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm text-gray-300">

              {/* Rating */}
              <span className="flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-2">
                <FiStar
                  className="text-yellow-400"
                  fill="currentColor"
                />

                {Number(movie.vote_average)
                  ? Number(movie.vote_average).toFixed(1)
                  : "N/A"}
              </span>

              {/* Year */}
              <span className="flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-2">
                <FiCalendar />
                {year}
              </span>

              {/* Runtime */}
              {movie.runtime > 0 && (
                <span className="flex items-center gap-1 rounded-lg bg-zinc-900 px-3 py-2">
                  <FiClock />
                  {movie.runtime} min
                </span>
              )}
            </div>

            {/* Genres */}
            {genres.length > 0 && (
              <div className="mt-5 flex flex-wrap gap-2">
                {genres.map((genre) => (
                  <span
                    key={genre.id || genre.name}
                    className="rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>
            )}

            {/* Overview */}
            <div className="mt-8">
              <h2 className="mb-3 text-xl font-bold">
                Overview
              </h2>

              <p className="max-w-3xl leading-7 text-gray-400">
                {movie.overview ||
                  "No overview available for this movie."}
              </p>
            </div>

            {/* Extra Information */}
            <div className="mt-8 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-3">

              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-xs text-gray-500">
                  Popularity
                </p>

                <p className="mt-1 font-semibold">
                  {Number(movie.popularity).toFixed(1)}
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-xs text-gray-500">
                  Votes
                </p>

                <p className="mt-1 font-semibold">
                  {Number(movie.vote_count).toLocaleString()}
                </p>
              </div>

              <div className="rounded-xl bg-zinc-900 p-4">
                <p className="text-xs text-gray-500">
                  Release
                </p>

                <p className="mt-1 font-semibold">
                  {movie.release_date || "N/A"}
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    </main>
  );
}