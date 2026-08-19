import React, { useEffect, useState } from "react";
import { FiSearch, FiFilm } from "react-icons/fi";
import { useSearchParams } from "react-router-dom";

import MovieGrid from "../components/movie/MovieGrid";
import { searchMovies } from "../services/movieApi";

export default function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("q") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const search = async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(query);

        setMovies(data.results || []);
      } catch (err) {
        console.error(err);
        setError("Unable to search movies.");
      } finally {
        setLoading(false);
      }
    };

    search();
  }, [query]);

  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-10 text-white">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-8">
          <div className="mb-2 flex items-center gap-2 text-red-500">
            <FiSearch size={20} />

            <span className="text-sm font-semibold uppercase tracking-wider">
              Search
            </span>
          </div>

          <h1 className="text-3xl font-bold sm:text-4xl">
            Search Movies
          </h1>

          {query && (
            <p className="mt-2 text-gray-400">
              Results for{" "}
              <span className="font-semibold text-white">
                "{query}"
              </span>
            </p>
          )}
        </div>

        {/* No search */}
        {!query && (
          <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
            <FiSearch
              size={60}
              className="mb-5 text-zinc-700"
            />

            <h2 className="text-2xl font-bold">
              Search for a movie
            </h2>

            <p className="mt-2 text-gray-500">
              Enter a movie name in the search bar.
            </p>
          </div>
        )}

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div
                key={index}
                className="aspect-[2/3] animate-pulse rounded-xl bg-zinc-900"
              />
            ))}
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="rounded-xl bg-red-500/10 p-6 text-center text-red-400">
            {error}
          </div>
        )}

        {/* Results */}
        {!loading && !error && query && movies.length > 0 && (
          <>
            <div className="mb-5 flex items-center gap-2 text-gray-400">
              <FiFilm />

              <span>
                {movies.length} movie
                {movies.length !== 1 ? "s" : ""} found
              </span>
            </div>

            <MovieGrid movies={movies} />
          </>
        )}

        {/* No results */}
        {!loading && !error && query && movies.length === 0 && (
          <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
            <FiFilm
              size={55}
              className="mb-4 text-zinc-700"
            />

            <h2 className="text-2xl font-bold">
              No movies found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with another movie name.
            </p>
          </div>
        )}

      </div>
    </main>
  );
}