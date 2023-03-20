import { useEffect, useState } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/SearchMovie';

const Movies = () => {
  const [request, setRequest] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataMovies, setDataMovies] = useState([]);
  const movieName = searchParams.get('name');
  const writeInput = e => {
    const { value } = e.currentTarget;
    setRequest(value);
  };
  useEffect(() => {
    if (movieName) {
      fetchMovies(movieName).then(data => {
        setDataMovies(data.results);
      });
    }
  }, [movieName]);

  const formSubmit = e => {
    e.preventDefault();
    const nextParams =
      e.target.request.value !== '' ? { name: e.target.request.value } : {};
    setSearchParams(nextParams);
    reset();
  };
  const reset = () => {
    setRequest('');
  };
  const location = useLocation();
  return (
    <main>
      <form onSubmit={formSubmit}>
        <input
          name="request"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          value={request}
          onChange={writeInput}
        />
        <button type="submit">Search</button>
      </form>
      <h1>movies</h1>
      <ul>
        {dataMovies.map(mov => {
          return (
            <li key={mov.id}>
              <Link to={`${mov.id}`} state={{ from: location }}>
                {mov.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Movies;
