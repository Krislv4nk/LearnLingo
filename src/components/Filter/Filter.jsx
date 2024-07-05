


import css from './Filter.module.css';
import icons from '../../assets/sprite.svg';


export const Filter = () => {

    return (
        <div className={css.wrapper}>
            <ul className={css.list}>
                <li className={css.item}>
                    <label htmlFor="Languages" className={css.label}>Languages</label>
                        <input className={css.input} id="Languages" type="text" />
                        <svg className={css.icon} width={20} height={20}>
                    <use xlinkHref={`${icons}#icon-down`}></use>
                        </svg>
                </li>
                <li className={css.item}>
                    <label className={css.label} htmlFor="Level of knowledge">Level of knowledge</label>
                    <input className={css.input} id="Level of knowledge" type="text"/><svg className={css.icon} width={20} height={20}>
                    <use xlinkHref={`${icons}#icon-down`}></use>
                </svg>
                </li>
                <li className={css.item}>
                    <label className={css.label} htmlFor="Price">Price</label>
                    <input className={css.input} id="Price" type="number"/><svg className={css.icon} width={20} height={20}>
                    <use xlinkHref={`${icons}#icon-down`}></use>
                </svg>
                </li>
            </ul>
        </div>
    )
}


