export const fetchReviews = async id => {
  const KEY = 'd743fb6525879ac74e28dd3cdcf25139';
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error(`No results `));
  });
};
