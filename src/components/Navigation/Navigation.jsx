import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
const Navigation = () => {
  return (
    <header className={styles.header}>
      <nav>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? `${styles.header__activeLink}` : `${styles.header__link}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/movies"
          className={({ isActive }) =>
            isActive ? `${styles.header__activeLink}` : `${styles.header__link}`
          }
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
