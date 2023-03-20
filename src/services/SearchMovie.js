export const fetchMovies = async (search) => {
  const KEY = 'd743fb6525879ac74e28dd3cdcf25139';
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=en-US&query=${search}&page=1&include_adult=false`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results `));
  });
};