import { movieReviews } from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './Reviews.module.css';

const Reviews = () => {
  const [reviews, setReviews] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    movieReviews(movieId).then(reviews => {
      setReviews(reviews);
    });
  }, [movieId]);
  console.log(reviews);
  return (
    <ul>
      {reviews.results.total_results > 0 &&
        reviews.results.map(result => (
          <li key={result.id}>
            <h3>Author: {result.author}</h3>
            <p className={styles.review_content}>{result.content}</p>
          </li>
        ))}
    </ul>
  );
};
export default Reviews;
