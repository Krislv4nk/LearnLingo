
import { useState } from 'react';
import { Link } from 'react-router-dom';
import css from './Header.module.css';
import sprite from '../../assets/sprite.svg';
import { MenuMob } from '../Header/MenuMob/MenuMob';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { AuthButtons } from '../Auth/AuthButtons/AuthButtons';

export const Header = () => {

  const [openMenuMob, setOpenMenuMob] = useState(false);
  
  
  const handleOpenClick = () => {
    setOpenMenuMob(true);
  };
  
  const handleCloseClick = () => {
    setOpenMenuMob(false);
  };

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
      <nav className={css.nav}>
        <ul className={css.navList}>
          <li>
            <Link className={css.link} to="/home">Home</Link>
          </li>
          <li>
            <Link className={css.link} to="/teachers">Teachers</Link>
          </li>
        </ul>
      </nav>

      <AuthButtons />
      

      <button className={css.mobileMenuButton} onClick={handleOpenClick} type='button' title='Menu'>
        <svg width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-menu`}></use>
        </svg>
      </button>
    
      <StyledEngineProvider injectFirst>
        <Dialog open={openMenuMob} onClose={handleCloseClick}
          PaperComponent={() => <MenuMob onClose={handleCloseClick} />} />
      </StyledEngineProvider>
    </header>
  );
};
