import { BackLink } from 'components/BackLink/BackLink';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieInfo } from 'services/SearchMovieInfo';
import { FilmStand, Title, P, SubTitle } from './MoveDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [info, setInfo] = useState({});

  useEffect(() => {
    fetchMovieInfo(movieId)
      .then(data => {
        // console.log(data);
        setInfo(data);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  return (
    <>
      <BackLink to={backLinkHref}>Back</BackLink>
      <FilmStand>
        <img
          src={`https://image.tmdb.org/t/p/w500${info.poster_path}`}
          alt="poster"
          width="300px"
          height="440px"
        />
        <div>
          <Title>{info.original_title}</Title>
          <P>{`User Score: ${(info.vote_average * 10).toFixed(1)}%`}</P>
          <SubTitle>Overview</SubTitle>
          <P>{info.overview}</P>
          <SubTitle>Geners</SubTitle>
          <P>
            {info.genres
              ? info.genres.map(genre => genre.name + ' ')
              : 'no genre'}
          </P>
        </div>
      </FilmStand>
      <h3>Additional information</h3>
      <p>
        <Link to="cast" state={{ from: backLinkHref }}>
          Cast
        </Link>
      </p>
      <p>
        <Link to="reviews" state={{ from: backLinkHref }}>
          Reviews
        </Link>
      </p>

      <Outlet />
    </>
  );
};
export default MovieDetails;
