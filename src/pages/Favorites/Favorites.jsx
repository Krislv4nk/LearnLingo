
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TeacherCard } from '../../components/TeachersList/TeacherCard/TeacherCard';
import css from './Favorites.module.css';


const Favorites = () => {

    const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);


    return (
        <div>
            <h2>Favorites</h2>
            {favorites.length ? (
        <ul>
          {favorites.map((teacher) => (
            <TeacherCard key={teacher.index} teacher={teacher} />
          ))}
        </ul>
      ) : (
        <p className={css.no_items}>
          No selected teachers yet, go to
          <NavLink className={css.link} to="/teachers">
            {' '}
            Teachers
          </NavLink>
        </p>
      )}
        </div>
    );
};

export default Favorites;