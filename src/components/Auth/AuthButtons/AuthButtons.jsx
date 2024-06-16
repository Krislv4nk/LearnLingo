
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';

import { AuthForm } from '../AuthForm/AuthForm';
import css from './AuthButtons.module.css';
import sprite from '../../../assets/sprite.svg';



export const AuthButtons = () => {
   
  const [openModal, setOpenModal] = useState(false);
  
  const openModalHandler = () => {
    
    setOpenModal(true);
  };
  
  const closeModalHandler = () => {
    setOpenModal(false);
  };
    return (
        <ul className={css.authBox}>
        <li>
          <button onClick={() => openModalHandler('login')} className={css.logInButton} type='button'>
            <svg className={css.iconLogIn} width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-log-in`}></use>
            </svg>
            Log In
                </button>
                <StyledEngineProvider injectFirst>
        <Dialog open={openModal} onClose={closeModalHandler} 
           PaperComponent={() => <AuthForm onClose={closeModalHandler} />} />
      </StyledEngineProvider>
        </li>
        <li>
          <button onClick={() => openModalHandler('register')} className={css.registrButton} type='button'>
            Registration
                </button>
                <StyledEngineProvider injectFirst>
        <Dialog open={openModal} onClose={closeModalHandler} 
           PaperComponent={() => <AuthForm onClose={closeModalHandler} />} />
      </StyledEngineProvider>
            </li>
      </ul>

       

    )
}