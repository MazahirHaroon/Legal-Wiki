const media = {
  baseURL: "https://image.tmdb.org/t/p",
  size: "/w500"
};

const API_KEY = "ec7a7eff407fd34644862c35299e68df";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&languages=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&languages=en-US`
};

export { requests, media };
