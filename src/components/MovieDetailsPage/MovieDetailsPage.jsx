import { movieDetails } from '../../services/movies-api';
import { useParams, Link, Outlet, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import styles from './MovieDetailsPage.module.css';
const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState(null);
  const { movieId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    movieDetails(movieId).then(res => {
      setMovieInfo(res);
    });
  }, [movieId]);

  return (
    <div className={styles.movie_container}>
      <button onClick={() => navigate(-1)}>Go back</button>
      {movieInfo && (
        <>
          <div className={styles.movie_details}>
            <img
              src={`https://image.tmdb.org/t/p/w300${movieInfo.poster_path}`}
              alt="Poster"
            />
            <div className={styles.movie_info}>
              <h1>
                {movieInfo.title}({movieInfo.release_date.slice(0, 4)})
              </h1>
              <p>User score: {movieInfo.vote_average * 10}%</p>
              <h2>Overview</h2>
              <p>{movieInfo.overview}</p>
              <h2>Genres</h2>
              {movieInfo.genres.map(genre => (
                <span key={genre.id}>{genre.name} </span>
              ))}
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
        </>
      )}
    </div>
  );
};

export default MovieDetailsPage;
