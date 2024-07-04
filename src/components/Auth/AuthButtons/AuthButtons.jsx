
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import { AuthForm } from '../AuthForm/AuthForm';
import css from './AuthButtons.module.css';
import sprite from '../../../assets/sprite.svg';

export const AuthButtons = () => {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [isSignUp, setIsSignUp] = useState(true);

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
  };

  const handleSwitchToLogin = () => {
    setIsSignUp(false);
    setOpenRegisterModal(false);
    setOpenLoginModal(true);
  };

  return (
  <div>
      <ul className={css.authBox}>
        <li>
          <button onClick={openLoginModalHandler} className={css.logInButton} type='button'>
            <svg className={css.iconLogIn} width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-login`}></use>
            </svg>
            Log In
          </button>
          <StyledEngineProvider injectFirst>
            <Dialog open={openLoginModal} onClose={closeModalHandler} className={css.backdrop}
              PaperComponent={() => <AuthForm onClose={closeModalHandler} isSignUp={isSignUp} onSwitchToLogin={handleSwitchToLogin} />} />
          </StyledEngineProvider>
        </li>
        <li>
          <button onClick={openRegisterModalHandler} className={css.registrButton} type='button'>
            Registration
          </button>
          <StyledEngineProvider injectFirst>
            <Dialog open={openRegisterModal} onClose={closeModalHandler} className={css.backdrop}
              PaperComponent={() => <AuthForm onClose={closeModalHandler} isSignUp={isSignUp} onSwitchToLogin={handleSwitchToLogin} />} />
          </StyledEngineProvider>
        </li>
      </ul>
      </div>
  );
};
