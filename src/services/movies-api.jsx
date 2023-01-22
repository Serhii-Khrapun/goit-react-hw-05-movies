import axios from 'axios';

const key = 'ae1577010b6792d62b3291f220b00a44';

export const moviesTrending = () => {
  return axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}`
  );
};

export const searchMovie = query => {
  return axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=${query}&page=1&include_adult=false`
  );
};

export const movieDetails = async id => {
  const response = await axios.get(`
https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`);
  let data = {};
  data = response.data;
  return data;
};

export const movieActors = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
  );
  let data = {};
  data = response.data;
  return data;
};

export const movieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  const data = [];
  response.data.results.map(result => {
    return data.push(result);
  });
  return data;
};
