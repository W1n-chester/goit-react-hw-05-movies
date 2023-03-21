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
    </>
  );
};
export default Cast;
