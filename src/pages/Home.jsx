import { useEffect, useState } from 'react';
import { fetchTrendingMovies } from 'services/TrendingAPI';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);

  return (
    <main>
      <h1>Home</h1>
      <MoviesList Movies={trendingMovies} />
    </main>
  );
};
export default Home;
