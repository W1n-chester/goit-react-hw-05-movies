import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchTrendingMovies } from 'services/TrendingAPI';

const Home = () => {
  // const a = ['1', '2', '3', '4', '5']
  const [trendingMovies, setTrendingMovies] = useState([]);
  useEffect(() => {
    fetchTrendingMovies().then(data => {
      setTrendingMovies(data.results);
    });
  }, []);
const location = useLocation()
  return (
    <main>
      <h1>Home</h1>
      <ul>
        {trendingMovies.map(mov => {
          return (
            <li key={mov.id}>
              <Link to={`/movies/${mov.id}`} state={{ from: location }}>
                {mov.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
export default Home;
