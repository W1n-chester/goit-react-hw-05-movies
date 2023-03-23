import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'services/SearchCast';

const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchCast(movieId)
      .then(data => {
        setCastData(data.cast);
        console.log(data.cast);
      })
      .catch(err => console.log(err));
  }, [movieId]);
    console.log(castData)
  return (
    <>
      <p>CAST</p>
      <ul>
        {castData.map(actor => (
          <li key={actor.cast_id}>
            <p>Character: {actor.character}</p>
            <img
              src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
              alt={actor.original_name}
              width="150px"
              height="225px"
            />
            <h3>{actor.original_name}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
