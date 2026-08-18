import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MovieGrid from "../movie/MovieGrid";
import { getTrendingMovies } from "../../services/movieApi";

export default function Trending() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTrendingMovies();

        setMovies(data.results || []);
      } catch (err) {
        console.error(err);
        setError("Unable to load trending movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="mx-auto max-w-7xl px-4 py-10">

      <div className="mb-6 flex items-end justify-between">

        <div>
          <p className="mb-1 text-sm font-medium uppercase tracking-wider text-red-500">
            What's hot
          </p>

          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Trending Movies
          </h2>
        </div>

        <Link
          to="/movies"
          className="flex items-center gap-2 text-sm text-gray-400 transition hover:text-red-500"
        >
          View All
          <FiArrowRight />
        </Link>

      </div>

      {loading && (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[2/3] animate-pulse rounded-xl bg-zinc-800"
            />
          ))}
        </div>
      )}

      {error && (
        <p className="rounded-lg bg-red-500/10 p-4 text-red-400">
          {error}
        </p>
      )}

      {!loading && !error && (
        <MovieGrid movies={movies.slice(0, 6)} />
      )}

    </section>
  );
}