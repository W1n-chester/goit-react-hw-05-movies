import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
// COMPONENTS
import { SharedLayout } from './SharedLayout/SharedLayout';
import Cast from './Cast/Cast';
import Reviews from './Reviews/Reviews';
// PAGES
// import Home from 'pages/Home';
// import Movies from 'pages/Movies';
// import MovieDetails from 'pages/MovieDetails';

const Home = lazy(() => import('../pages/Home'))
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

export const App = () => {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
          </Route>
        </Routes>
      </div>
    </>
  );
};
