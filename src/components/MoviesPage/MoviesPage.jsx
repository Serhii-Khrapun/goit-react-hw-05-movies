import { useState, useEffect } from 'react';
import {
  Link,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { searchMovie } from '../../services/movies-api';
import styles from './MoviesPage.module.css';

const MoviesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('');
  const [searchResults, setSearchResults] = useState(null);
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const navigate = useNavigate();
  const search = searchParams.get('query');
  console.log(search);
  useEffect(() => {
    if (searchQuery === '') {
      return;
    }

    searchMovie(searchQuery).then(res => {
      setSearchResults([...res.data.results]);
    });
  }, [searchQuery]);
  useEffect(() => {
    if (search === null) {
      return;
    }

    searchMovie(search).then(res => {
      setSearchResults([...res.data.results]);
    });
  }, [search]);

  const searchQueryChange = event => {
    setFilter(event.currentTarget.value.toLowerCase());
  };
  const handleSubmit = event => {
    event.preventDefault();
    if (filter.trim() === '') {
      return alert('Введіть пошуковий запит!');
    }
    setSearchQuery(filter);
    navigate({ ...location, search: `query=${filter}` });
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
              <Link to={`/movies/${movie.id}`}>
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
      {searchResults && searchResults.length === 0 && (
        <p>Nothing found for your request</p>
      )}
    </div>
  );
};

export default MoviesPage;
