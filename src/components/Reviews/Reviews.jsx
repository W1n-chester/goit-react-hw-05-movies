import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviews } from 'services/SearchReviews';
const Reviews = () => {
  const [reviewsData, setReviewsData] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    fetchReviews(movieId)
      .then(data => {
        setReviewsData(data.results);
        console.log(data.results);
      })
      .catch(err => console.log(err));
    
  }, [movieId]);
  console.log(reviewsData);
  return (
    <>
      <p>REVIEWS</p>
    </>
  );
};
export default Reviews;
