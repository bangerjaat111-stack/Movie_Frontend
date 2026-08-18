const BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const request = async (endpoint) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch movie data");
  }

  return response.json();
};

export const getTrendingMovies = () => {
  return request("/trending/movie/week");
};

export const getPopularMovies = () => {
  return request("/movie/popular");
};

export const getTopRatedMovies = () => {
  return request("/movie/top_rated");
};

export const getMovieDetails = (id) => {
  return request(`/movie/${id}?append_to_response=credits,videos`);
};

export const searchMovies = (query) => {
  return request(
    `/search/movie?query=${encodeURIComponent(query)}`
  );
};