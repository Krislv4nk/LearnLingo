
import sprite from '../../../assets/sprite.svg';
import css from './ModalForAuthenticate.module.css'



export const ModalForAuthenticate = ({onClose}) => {
    return (
        <div className={css.wrapper}>
            <button type="button" onClick={onClose} className={css.closeBtn}>
<svg className={css.cross}>
<use href={`${sprite}#icon-cross`} />
</svg>
</button>
            <p className={css.formInfo}>This feature is available for authenticated users only. Please log in to continue.</p>
         </div>
     )
}