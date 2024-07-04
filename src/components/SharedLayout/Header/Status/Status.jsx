
import { useState } from 'react';
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import sprite from '../../../../assets/sprite.svg';
import css from './Status.module.css';
import { LogOutModal } from '../../Header/Status/LogOut/LogOut';

export const Status = ({isSignIn}) => {
;
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
 

  const openLogOutModalHandler = () => {
    setOpenLogOutModal(true);

  };

  const closeModalHandler = () => {
    setOpenLogOutModal(false);
  };
  return (
    <div className={css.statusBox}>
      <button className={css.profile} type='button'><svg className={css.icon} width={20} height={20}>
                <use href={`${sprite}#icon-user`}/>
            </svg>Your profile</button>
            
            <button onClick={openLogOutModalHandler} className={css.logOutButton} type='button'>
           LogOut
                </button>
                <StyledEngineProvider injectFirst>
        <Dialog open={openLogOutModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <LogOutModal onClose={closeModalHandler}  isSignIn={isSignIn}/>} />
      </StyledEngineProvider>
            
</div>
    )

}