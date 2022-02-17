import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import HomePage from './components/HomePage/HomePage';
import MoviesPage from './components/MoviesPage/MoviesPage';
import NotFoundView from './components/NotFoundView/NotFoundView';
const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route element={<NotFoundView />} />
      </Routes>
    </div>
  );
};

export default App;
