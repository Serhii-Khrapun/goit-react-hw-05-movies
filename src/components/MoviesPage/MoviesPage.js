import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { searchMovie } from '../../services/movies-api';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({});

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    setSearchParams({ query: searchQuery });
    searchMovie(searchQuery).then(res => {
      setSearchResults([...res.data.results]);
    });
  }, [searchQuery]);

  const searchQueryChange = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (filter.trim() === '') {
      return alert('Введіть пошуковий запит!');
    }
    setSearchQuery(filter);

    setFilter('');
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
          value={filter}
          onChange={searchQueryChange}
        />
        <button type="submit" className={styles.SearchForm_button}>
          Search
        </button>
      </form>
      {searchResults && searchResults.length > 0 && (
        <ul>
          {searchResults.map(movie => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title || movie.name}</Link>
            </li>
          ))}
        </ul>
      )}
      {searchResults && searchResults.length === 0 && <p>Nothing found for your request</p>}
    </div>
  );
};

export default MoviesPage;
