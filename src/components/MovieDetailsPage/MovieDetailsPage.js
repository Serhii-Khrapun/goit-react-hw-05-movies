import { movieDetails } from '../../services/movies-api';
import { useParams, Link, Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
const MovieDetailsPage = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const { movieId } = useParams();
  useEffect(() => {
    movieDetails(movieId).then(res => {
      setMovieInfo(res.data);
    });
  }, [movieId]);

  console.log(movieInfo);
  return (
    <div>
      <img src={`https://image.tmdb.org/t/p/w400${movieInfo.poster_path}`} alt="Poster" />
      <div>
        <h1>
          {movieInfo.title}({movieInfo.release_date})
        </h1>
        <p>User score: {movieInfo.vote_average * 10}%</p>
        <h2>Overview</h2>
        <p>{movieInfo.overview}</p>
        <h2>Genres</h2>
        {movieInfo.genres.map(genre => (
          <span key={genre.id}>{genre.name}</span>
        ))}
        <p>Genres list</p>
      </div>
      <div>
        <p>Additional information</p>
        <ul>
          <li>
            <Link to={`/movies/${movieId}/cast`}>Cast</Link>
          </li>
          <li>
            <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
