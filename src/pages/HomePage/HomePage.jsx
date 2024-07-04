
import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import girl from '../../assets/images/girl.png';
import sprite from '../../assets/sprite.svg';

const HomePage = () => {
    return (
        <div className={css.pageWrapper}>
            <div className={css.mainContentWrapper}>
                <div className={css.mainBox}>
                    <h1 className={css.mainTitle}>Unlock your potential with the best <span className={css.span}>language</span> tutors</h1>
                    <p className={css.info}>Embark on an Exciting Language Journey with Expert Language Tutors:
                        Elevate your language proficiency to new heights by connecting with highly qualified and experienced tutors.</p>
                    <Link className={css.link} to="/teachers">Get started</Link>
                </div>
                <div className={css.imageBg}>
                    <img src={girl} alt="girl" className={css.girl} />
                   
                    <div className={css.macBook}>
                   <svg className={css.apple}>
          <use xlinkHref={`${sprite}#icon-apple`}></use>
        </svg>
                    </div>
                </div>
            </div>
            <ul className={css.list}>
                <li className={css.item}><span className={css.itemSpan}>32,000 + </span><p className={css.itemPh}>Experienced tutors</p></li>
                <li className={css.item}><span className={css.itemSpan}>300,000 + </span><p className={css.itemPh}>5-star tutor reviews</p></li>
                <li className={css.item}><span className={css.itemSpan}>120 + </span><p className={css.itemPh}>Subjects taught</p></li>
                <li className={css.item}><span className={css.itemSpan}>200 + </span><p className={css.itemPh}>Tutor nationalities</p></li>
            </ul>
        </div>
    );
};

export default HomePage;

//  <stop stopColor="var(--accentBg)" />
//       <stop offset="1" stopColor="var(--iconColor)" />