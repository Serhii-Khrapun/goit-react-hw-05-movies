import axios from 'axios';

const key = 'ae1577010b6792d62b3291f220b00a44';

export const moviesTrending = () => {
  return axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`);
};

export const searchMovie = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`,
  );
};

export const movieDetails = id => {
  return axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
};
