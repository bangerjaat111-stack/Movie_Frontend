import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import MovieGrid from "../components/movie/MovieGrid";
import { searchMovies } from "../services/movieApi.js";

export default function Search() {
  const [searchParams] = useSearchParams();

  const query = searchParams.get("query") || "";

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!query.trim()) {
        setMovies([]);
        return;
      }

      try {
        setLoading(true);
        setError("");

        const data = await searchMovies(query);

        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
        setError("Unable to search movies.");
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
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
            Search Results
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

        {/* Empty Query */}
        {!query && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
            <FiSearch
              size={40}
              className="mx-auto mb-4 text-gray-600"
            />

            <h2 className="text-xl font-semibold">
              Search for a movie
            </h2>

            <p className="mt-2 text-gray-500">
              Enter a movie name in the search box above.
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

        {/* No Results */}
        {!loading && !error && query && movies.length === 0 && (
          <div className="rounded-xl border border-zinc-800 bg-zinc-900 p-10 text-center">
            <h2 className="text-xl font-semibold">
              No movies found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with another movie name.
            </p>
          </div>
        )}

        {/* Results */}
        {!loading && !error && movies.length > 0 && (
          <MovieGrid movies={movies} />
        )}

      </div>
    </main>
  );
}