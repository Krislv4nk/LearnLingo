import { Link } from 'react-router-dom';
import css from './Header.module.css';
import sprite from '../../assets/sprite.svg';

export const Header = () => {

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link className={css.logoLink} to={'/home'}>
             <svg width={28} height={28}>
              <use href={`${sprite}#icon-ukraine`}></use>
             </svg>
            <p className={css.logoText}>LearnLingo</p>
        </Link>
    </div>
      <nav>
<ul className={css.navList}>
  <li><Link className={css.link} to="/home">
         Home
        </Link></li>
  <li> <Link className={css.link} to="/teachers">
          Teachers
        </Link></li>
</ul>
      </nav>
      <ul className={css.authBox}>
        <li><button className={css.logInButton} type='button'><svg className={css.iconLogIn} width={20} height={20}>
              <use href={`${sprite}#icon-log-in`}></use>
             </svg>Log In</button></li>
        <li><button className={css.registrButton} type='button'>Registration</button></li>
      </ul>
    </header>
  );
};
