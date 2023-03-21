import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/SearchMovieInfo';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
      fetchMovieInfo(movieId)
        .then(data => {
          console.log(data);
          setInfo(data);
        })
        .catch(err => console.log(err));
  }, [movieId]);
    const location = useLocation()
const backLinkHref = location.state?.from ?? "/";
  return (
    <>
      <h3>xxxxxx</h3>
      <BackLink to={backLinkHref}>Back</BackLink>
      <img
        width={200}
        src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
        alt="poster"
      />
      <p>{info.original_title}</p>
      <p>{`User Score${info.vote_average}`}</p>
      <h3>Additional information</h3>
      <p>
        <Link to="cast">Cast</Link>
      </p>
      <p>
        <Link to="reviews">Reviews</Link>
      </p>
      <Outlet/>
    </>
  );
};
export default MovieDetails;
