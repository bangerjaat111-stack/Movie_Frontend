import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FiArrowLeft,
  FiCalendar,
  FiClock,
  FiStar,
  FiPlay,
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

  if (loading) {
    return (
      <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="h-500px animate-pulse rounded-2xl bg-zinc-900" />
        </div>
      </main>
    );
  }

  if (error || !movie) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-4 text-white">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            Movie Not Found
          </h1>

          <p className="mt-3 text-gray-400">
            {error}
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

  const backdrop = movie.backdrop_path
    ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
    : "";

  const poster = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : "/placeholder-movie.jpg";

  return (
    <main className="min-h-screen bg-zinc-950 text-white">

      {/* Hero */}
      <section className="relative min-h-[650px] overflow-hidden">

        {/* Backdrop */}
        {backdrop && (
          <img
            src={backdrop}
            alt=""
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />

        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

        {/* Content */}
        <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-end px-4 py-12 sm:px-6 lg:px-8">

          <div className="grid w-full gap-8 md:grid-cols-[260px_1fr]">

            {/* Poster */}
            <div className="hidden overflow-hidden rounded-xl shadow-2xl md:block">
              <img
                src={poster}
                alt={movie.title}
                className="w-full object-cover"
              />
            </div>

            {/* Information */}
            <div className="self-end">

              <div className="mb-4 flex flex-wrap items-center gap-3">

                <span className="flex items-center gap-1 rounded-lg bg-yellow-500/20 px-3 py-1.5 text-sm font-semibold text-yellow-400">
                  <FiStar fill="currentColor" />
                  {movie.vote_average?.toFixed(1)}
                </span>

                <span className="flex items-center gap-1 text-sm text-gray-300">
                  <FiCalendar />
                  {movie.release_date || "N/A"}
                </span>

                {movie.runtime && (
                  <span className="flex items-center gap-1 text-sm text-gray-300">
                    <FiClock />
                    {movie.runtime} min
                  </span>
                )}

              </div>

              <h1 className="text-4xl font-black sm:text-5xl lg:text-6xl">
                {movie.title}
              </h1>

              {movie.tagline && (
                <p className="mt-4 text-lg italic text-gray-400">
                  "{movie.tagline}"
                </p>
              )}

              {/* Genres */}
              <div className="mt-5 flex flex-wrap gap-2">
                {movie.genres?.map((genre) => (
                  <span
                    key={genre.id}
                    className="rounded-full border border-zinc-700 bg-zinc-900/70 px-3 py-1 text-xs text-gray-300"
                  >
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* Overview */}
              <p className="mt-6 max-w-3xl leading-7 text-gray-300">
                {movie.overview}
              </p>

              {/* Buttons */}
              <div className="mt-7 flex flex-wrap gap-3">

                <button className="flex items-center gap-2 rounded-lg bg-red-600 px-6 py-3 font-semibold transition hover:bg-red-700">
                  <FiPlay fill="currentColor" />
                  Watch Trailer
                </button>

                <Link
                  to="/movies"
                  className="flex items-center gap-2 rounded-lg bg-white/10 px-6 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
                >
                  <FiArrowLeft />
                  Back
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Extra information */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        <h2 className="text-2xl font-bold">
          Movie Information
        </h2>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <InfoCard
            title="Original Title"
            value={movie.original_title}
          />

          <InfoCard
            title="Language"
            value={movie.original_language?.toUpperCase()}
          />

          <InfoCard
            title="Status"
            value={movie.status}
          />

          <InfoCard
            title="Budget"
            value={
              movie.budget
                ? `$${movie.budget.toLocaleString()}`
                : "N/A"
            }
          />

        </div>
      </section>

    </main>
  );
}

function InfoCard({ title, value }) {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 font-semibold text-white">
        {value || "N/A"}
      </p>
    </div>
  );
}