import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import MovieGrid from "../movie/MovieGrid";
import { getPopularMovies } from "../../services/movieApi";

export default function Popular() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies();
        setMovies(data.results || []);
      } catch (error) {
        console.error(error);
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
          <p className="mb-1 text-sm uppercase tracking-wider text-red-500">
            Don't miss
          </p>

          <h2 className="text-2xl font-bold sm:text-3xl">
            Popular Movies
          </h2>
        </div>

        <Link
          to="/movies"
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-red-500"
        >
          View All
          <FiArrowRight />
        </Link>

      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="aspect-[2/3] animate-pulse rounded-xl bg-zinc-800"
            />
          ))}
        </div>
      ) : (
        <MovieGrid movies={movies.slice(0, 6)} />
      )}

    </section>
  );
}