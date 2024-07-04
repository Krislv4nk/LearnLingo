

import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { LogOutModal } from '../Status/LogOut/LogOut';
import { AuthForm } from '../../../Auth/AuthForm/AuthForm';
import { Link } from 'react-router-dom';
import css from './MenuMob.module.css';
import sprite from '../../../../assets/sprite.svg';

export const MenuMob = ({onClose}) => {
const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
 const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);
  const [isSignIn, setIsSignIn] = useState(localStorage.getItem('isLogin') === 'true');

  const openLogOutModalHandler = () => {
    setOpenLogOutModal(true);

  };

  const openLoginModalHandler = () => {
    setOpenLoginModal(true);
    setOpenRegisterModal(false);
     setIsSignUp(false);
  };

  const openRegisterModalHandler = () => {
    setOpenRegisterModal(true);
    setOpenLoginModal(false);
    setIsSignUp(true);
  };

  const closeModalHandler = () => {
    setOpenLoginModal(false);
    setOpenRegisterModal(false);
    setOpenLogOutModal(false);
  };
  const handleSwitchToLogin = () => {
    setIsSignUp(false);
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };
  const handleLogoutSuccess = () => {
    setIsSignIn(false);
  };

  return (
        <div className={css.wrapper}>
        <button className={css.iconClose} onClick={onClose}>
          <svg  width={20} height={20}>
            <use xlinkHref={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
        <nav className={css.nav}>
        <ul className={css.navList}>
          <li> <button className={css.theme}><svg className={css.themeIcon} width={20} height={20}>
          <use xlinkHref={`${sprite}#icon-image`}></use>
        </svg></button></li>
  <li><Link className={css.link} to="/home">
         Home
        </Link></li>
  <li> <Link className={css.link} to="/teachers">
          Teachers
          </Link></li>
          {isSignIn ?
            <li>
              <Link className={css.link} to="/favorites">Favorites</Link>
            </li> : null}
</ul>
      </nav>
        {isSignIn ? <div className={css.authBox}>
            <button className={css.logInButton} onClick={openLoginModalHandler} type='button'>
          <svg className={css.iconLogIn} width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-user`}></use>
        </svg>Your profile</button>
            <button onClick={openLogOutModalHandler} className={css.registrButton} type='button'>
           LogOut
                </button>
                <StyledEngineProvider injectFirst>
        <Dialog open={openLogOutModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <LogOutModal onClose={closeModalHandler} isSignUp={isSignUp} onLogoutSuccess={handleLogoutSuccess}/>} />
      </StyledEngineProvider>
            
</div> : <ul className={css.authBox}>
         <li><button className={css.logInButton} onClick={openLoginModalHandler} type='button'>
          <svg className={css.iconLogIn} width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-login`}></use>
        </svg>Log In</button>
          <StyledEngineProvider injectFirst>
        <Dialog open={openLoginModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <AuthForm onClose={closeModalHandler} isSignUp={isSignUp} onSwitchToLogin={handleSwitchToLogin}/>} />
      </StyledEngineProvider>
        </li>
        <li><button onClick={openRegisterModalHandler} className={css.registrButton} type='button'>Registration</button>
          <StyledEngineProvider injectFirst>
        <Dialog open={openRegisterModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <AuthForm onClose={closeModalHandler} isSignUp={isSignUp} onSwitchToLogin={handleSwitchToLogin} />} />
      </StyledEngineProvider>
        </li>
      </ul>}
      </div>
   
    )
 
};
