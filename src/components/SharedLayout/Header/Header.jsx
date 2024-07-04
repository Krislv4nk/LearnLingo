
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import sprite from '../../../assets/sprite.svg';
import { MenuMob } from './MenuMob/MenuMob';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { AuthButtons } from '../../Auth/AuthButtons/AuthButtons';
import { Status } from '../Header/Status/Status'

export const Header = () => {
const [isSignIn, setIsSignIn] = useState(localStorage.getItem('isLogin') === 'true');
  const [openMenuMob, setOpenMenuMob] = useState(false);

  useEffect(() => {
    setIsSignIn(localStorage.getItem('isLogin') === 'true');
  }, []);

  const handleOpenClick = () => {
    setOpenMenuMob(true);
  };
  
  const handleCloseClick = () => {
    setOpenMenuMob(false);
  };

  const handleLogoutSuccess = () => {
    setIsSignIn(false);
    localStorage.removeItem('isLogin');
  };

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link className={css.logoLink} to={'/'}>
          <svg width={28} height={28}>
            <use href={`${sprite}#icon-ukraine`}></use>
          </svg>
          <p className={css.logoText}>LearnLingo</p>
        </Link>
      </div>
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <Link className={css.link} to="/">Home</Link>
          </li>
          
          <li>
            <Link className={css.link} to="/teachers">Teachers</Link>
          </li>
          {isSignIn ?
            <li>
              <Link className={css.link} to="/favorites">Favorites</Link>
            </li> : null}
        </ul>
      </nav>
      {isSignIn ?
        (<Status isSignIn={isSignIn} onLogoutSuccess={handleLogoutSuccess}/>)
        :
        (<AuthButtons />)}
      

      <button className={css.mobileMenuButton} onClick={handleOpenClick} type='button' title='Menu'>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
    
      <StyledEngineProvider injectFirst>
        <Dialog open={openMenuMob} onClose={handleCloseClick} className={css.backdrop}
          PaperComponent={() => <MenuMob onClose={handleCloseClick} isSignIn={isSignIn} />} />
      </StyledEngineProvider>
    </header>
  );
};
