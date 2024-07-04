
import sprite from '../../../../../assets/sprite.svg';
import { LogOut } from '../../../../../Firebase/User';
import css from '../LogOut/LogOut.module.css';


export const LogOutModal = ({onClose, onLogoutSuccess}) => {
  
  
const handleLogout = async () => {
    await LogOut();
  onLogoutSuccess();
    onClose(); 
  };
  
    return (
        <div className={css.wrapper}>
            <button type="button" onClick={onClose} className={css.closeBtn}>
<svg className={css.cross}>
<use href={`${sprite}#icon-cross`} />
</svg>
</button>
            <h2 className={css.title}>Log Out</h2>
            
          <p className={css.formInfo}>Do you really want to leave?</p>
            <button className={css.logOutBtn} onClick={handleLogout} type="button">
              Log out
            </button>
       
        </div>
    )
}