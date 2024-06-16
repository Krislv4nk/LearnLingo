

import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import { AuthForm } from '../../Auth/AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import css from './MenuMob.module.css';
import sprite from '../../../assets/sprite.svg';

export const MenuMob = ({onClose}) => {

   const [openModal, setOpenModal] = useState(false);
  
  const openModalHandler = () => {
    
    setOpenModal(true);
  };
  
  const closeModalHandler = () => {
    setOpenModal(false);
  };
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
        <li><button className={css.logInButton} onClick={() => openModalHandler('login')} type='button'>
          <svg className={css.iconLogIn} width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-log-in`}></use>
        </svg>Log In</button>
          <StyledEngineProvider injectFirst>
        <Dialog open={openModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <AuthForm onClose={closeModalHandler} />} />
      </StyledEngineProvider>
        </li>
        <li><button onClick={() => openModalHandler('register')} className={css.registrButton} type='button'>Registration</button>
          <StyledEngineProvider injectFirst>
        <Dialog open={openModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <AuthForm onClose={closeModalHandler} />} />
      </StyledEngineProvider>
        </li>
      </ul>
      </div>
   
    )
 
};
