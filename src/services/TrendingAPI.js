export const fetchTrendingMovies = async () => {
  const KEY = 'd743fb6525879ac74e28dd3cdcf25139';
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${KEY}`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results `));
  });
};