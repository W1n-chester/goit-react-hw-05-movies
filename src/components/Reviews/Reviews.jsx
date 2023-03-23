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
      {reviewsData.length
        ? (
        <ul>
          {reviewsData.map(review => (
            <li key={review.id}>
              <h3>Author: {review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      )
        : (
        <h3>We donn`t any reviews for this movie.</h3>
      )}
    </>
  );
};
export default Reviews;
