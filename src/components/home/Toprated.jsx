import React, { useEffect, useState } from "react";

import MovieGrid from "../movie/MovieGrid";
import { getTopRatedMovies } from "../../services/movieApi";

export default function Toprated() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getTopRatedMovies();

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

      <div className="mb-6">
        <p className="mb-1 text-sm uppercase tracking-wider text-red-500">
          Highest rated
        </p>

        <h2 className="text-2xl font-bold sm:text-3xl">
          Top Rated Movies
        </h2>
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