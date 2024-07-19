
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { TeacherCard } from '../../components/TeachersList/TeacherCard/TeacherCard';
import { getFavoriteTeachers } from '../../Firebase/Teachers';
import css from './Favorites.module.css';

const Favorites = () => {
  
  const [teachers, setTeachers] = useState([]);
  const [visibleTeachers, setVisibleTeachers] = useState(4);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoriteTeachers = await getFavoriteTeachers();
        setTeachers(favoriteTeachers);
      } catch (error) {
        console.error('Error fetching favorite teachers:', error);
      }
    };
    fetchFavorites();
  }, []);

  const loadMoreTeachers = () => {
    setVisibleTeachers(prevVisibleTeachers => prevVisibleTeachers + 4);
  };

  return (
    <div className={css.pageWrapper}>
      {teachers.length ? (
        <>
           <ul className={css.list}>
            {teachers.slice(0, visibleTeachers).map((teacher, index) => (
              <TeacherCard key={index} teacher={teacher} />
            ))}
          </ul>
          {visibleTeachers < teachers.length && (
            <button className={css.loadBtn} type='button' onClick={loadMoreTeachers}>
              Load more
            </button>
          )}
        </>
      ) : (
        <p className={css.info}>
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


