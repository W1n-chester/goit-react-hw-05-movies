import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetchMovies } from 'services/SearchMovie';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [dataMovies, setDataMovies] = useState([]);
  const movieName = searchParams.get('name');

  useEffect(() => {
    if (movieName) {
      fetchMovies(movieName).then(data => {
        setDataMovies(data.results);
      });
    }
  }, [movieName]);

  return (
    <main>
      <Searchbar onSetSearchParams={setSearchParams} />
      <h1>movies</h1>
      <MoviesList Movies={dataMovies} />
    </main>
  );
};
export default Movies;
