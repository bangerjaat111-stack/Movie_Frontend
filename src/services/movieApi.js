import Papa from "papaparse";
import posterMap from "../data/posterMap";

const moviesUrl = "/data/tmdb_5000_movies.csv";

const parseJSON = (value, fallback = []) => {
  try {
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
};

export const getPopularMovies = async () => {
  const response = await fetch(moviesUrl);

  if (!response.ok) {
    throw new Error("Unable to load movie dataset");
  }

  const csvText = await response.text();

  const result = Papa.parse(csvText, {
    header: true,
    skipEmptyLines: true,
  });

 const movies = result.data
  .filter((movie) => movie.id && movie.title)
  .map((movie) => {

    console.log("Movie:", movie.title);
    console.log("Poster:", posterMap[movie.title]);

    return {
      id: movie.id,
      title: movie.title,
      name: movie.title,

      overview:
        movie.overview || "No overview available.",

      release_date:
        movie.release_date || "N/A",

      popularity:
        Number(movie.popularity) || 0,

      vote_average:
        Number(movie.vote_average) || 0,

      vote_count:
        Number(movie.vote_count) || 0,

      runtime:
        Number(movie.runtime) || 0,

      genres:
        parseJSON(movie.genres),

      poster_path:
        posterMap[movie.title] || null,

      backdrop_path: null,
    };
  });

  movies.sort(
    (a, b) => b.popularity - a.popularity
  );

  return {
    results: movies,
    total_results: movies.length,
  };
};

export const searchMovies = async (query) => {
  const data = await getPopularMovies();

  const searchText = query
    .toLowerCase()
    .trim();

  const results = data.results.filter((movie) =>
    movie.title
      .toLowerCase()
      .includes(searchText)
  );

  return {
    results,
    total_results: results.length,
  };
};

export const getMovieDetails = async (id) => {
  const data = await getPopularMovies();

  const movie = data.results.find(
    (movie) =>
      String(movie.id) === String(id)
  );

  if (!movie) {
    throw new Error("Movie not found");
  }

  return movie;
};