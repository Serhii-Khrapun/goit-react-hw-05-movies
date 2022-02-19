import { useState } from 'react';
import { Link } from 'react-router-dom';
import { searchMovie } from '../../services/movies-api';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const searchQueryChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Введіть пошуковий запит!');
    }
    movie(searchQuery);
    setSearchQuery('');
  };
  const movie = searchQuery => {
    searchMovie(searchQuery).then(res => {
      setSearchResults([...res.data.results]);
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.SearchForm}>
        <input
          className={styles.SearchForm_input}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
          value={searchQuery}
          onChange={searchQueryChange}
        />
        <button type="submit" className={styles.SearchForm_button}>
          Search
        </button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
