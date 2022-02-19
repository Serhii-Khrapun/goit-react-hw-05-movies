import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { moviesTrending } from '../../services/movies-api';
const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = () => {
    moviesTrending().then(res => {
      setMovies([...res.data.results]);
    });
  };

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
