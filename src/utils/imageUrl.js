const IMAGE_BASE_URL = "https://image.tmdb.org/t/p";

export const getPosterUrl = (path, size = "w500") => {
  if (!path) {
    return "/placeholder-movie.jpg";
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
};

export const getBackdropUrl = (path, size = "original") => {
  if (!path) {
    return "/placeholder-backdrop.jpg";
  }

  return `${IMAGE_BASE_URL}/${size}${path}`;
};