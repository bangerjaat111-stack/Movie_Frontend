import React, { useEffect, useState } from "react";
import { FiFilm } from "react-icons/fi";

import MovieGrid from "../components/movie/MovieGrid";
import { getPopularMovies } from "../services/movieApi";

export default function AllMovies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);

        const data = await getPopularMovies();

        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
        setError("Unable to load movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-red-500">
            <FiFilm size={20} />

            <span className="text-sm font-semibold uppercase tracking-wider">
              Discover
            </span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            All Movies
          </h1>

          <p className="mt-2 text-gray-400">
            Explore popular movies and discover something new.
          </p>
        </div>

        {loading && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 18 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[2/3] animate-pulse rounded-xl bg-zinc-900"
              />
            ))}
          </div>
        )}

        {!loading && error && (
          <div className="rounded-xl bg-red-500/10 p-6 text-center text-red-400">
            {error}
          </div>
        )}

        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} />
        )}

      </div>
    </main>
  );
}