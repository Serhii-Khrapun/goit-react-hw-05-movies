import { movieActors } from '../../services/movies-api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Cast = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();
  useEffect(() => {
    movieActors(movieId).then(res => setActors(res));
  }, [movieId]);

  return (
    <ul>
      {actors &&
        actors.cast.map(actor => (
          <li key={actor.cast_id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt="Actor"
            />
            <p>{actor.name}</p>
            <p>Character:{actor.character}</p>
          </li>
        ))}
    </ul>
  );
};
export default Cast;
