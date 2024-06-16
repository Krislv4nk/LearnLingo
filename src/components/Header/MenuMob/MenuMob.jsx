
import { Link } from 'react-router-dom';
import css from './MenuMob.module.css';
import sprite from '../../../assets/sprite.svg';

export const MenuMob = ({onClose}) => {

  return (
  
      
        <div className={css.wrapper}>
      
        <button className={css.iconClose} onClick={onClose}>
          <svg width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
        <nav className={css.nav}>
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
              <use xlinkHref={`${sprite}#icon-log-in`}></use>
             </svg>Log In</button></li>
        <li><button className={css.registrButton} type='button'>Registration</button></li>
      </ul>
      </div>
   
    )
 
};
