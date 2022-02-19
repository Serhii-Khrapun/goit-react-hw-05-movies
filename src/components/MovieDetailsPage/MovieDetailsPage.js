import { movieDetails } from '../../services/movies-api';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MovieDetailsPage.module.css';
const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    movieDetails(movieId).then(res => {
      setMovieInfo(res.data);
    });
  }, [movieId]);

  return (
    <div className={styles.movie_container}>
      <div className={styles.movie_details}>
        <img src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`} alt="Poster" />
        <div className={styles.movie_info}>
          <h1>
            {movieInfo.title}({movieInfo.release_date})
          </h1>
          <p>User score: {movieInfo.vote_average * 10}%</p>
          <h2>Overview</h2>
          <p>{movieInfo.overview}</p>
          <h2>Genres</h2>
          <p>Genres list</p>
        </div>
      </div>
      <div className={styles.movie_additional}>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
