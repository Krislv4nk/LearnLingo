
import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';
import css from './TeacherCard.module.css';

export const TeacherCard = ({ teacher}) => {
  const {
    name,
    surname,
    languages,
    levels,
    rating,
    reviews,
    price_per_hour,
    lessons_done,
    avatar_url,
    lesson_info,
    conditions,
    experience
  } = teacher;

  const [isExpanded, setIsExpanded] = useState(false);

  // const isFavorite = Array.isArray(favorites) && favorites.some((fav) => fav.index === teacher.index);

  // const handleFavoriteClick = () => {

  // }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    };
    
  return (
    <li key={teacher.index} className={`${css.itemCard} ${isExpanded ? css.expanded : ''}`}>
      <div className={css.avatarBorder}>
        <img className={css.avatar} src={avatar_url} alt="avatar" />
        </div>
      <div className={css.infoWrapper}>
        <div className={css.infoDetails}>
          <p className={css.lang}>Languages</p>
          <ul className={css.lessonInfo}>
            <li className={css.lessonItem}>
              <svg className={css.bookIcon} width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-book`}></use>
              </svg>
              Lessons online
            </li>
            <span className={css.spanDeco}></span>
            <li className={css.lessonItem}>
              <p>Lessons done:</p>{lessons_done}
            </li>
            <span className={css.spanDeco}></span>
            <li className={css.lessonItem}>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>Rating</p>{rating}
            </li>
            <span className={css.spanDeco}></span>
            <li className={css.lessonItem}>
              <p>Price / 1 hour</p> <span className={css.spanPrice}>{price_per_hour} $</span>
            </li>
          </ul>

          {/* onClick={handleFavoriteClick} */}
          <button type='button'  className={css.likeButton}>
            <svg width={20} height={20} className={css.svg_heart}
              // className={isFavorite ? css.svg_heart_red : css.svg_heart}
            >
              <use xlinkHref={`${sprite}#icon-like`}></use>
            </svg>
          </button>
        </div>
        <h2 className={css.name}>{name} {surname}</h2>
        <ul className={css.basicInfo}>
          <li className={css.basicInfoItem}>
            <div className={css.basicInfoPh}><span className={css.spanBasicInfo}>Speaks: </span>
            <ul className={css.langList}>
              {languages.map((language, index) => (
                <li className={css.langItem} key={index}>{language}</li>
              ))}
            </ul></div>
          </li>
          <li className={css.basicInfoItem}>
            <p className={css.basicInfoPh}><span className={css.spanBasicInfo}>Lesson Info:</span> {lesson_info}</p>
          </li>
          <li className={css.basicInfoItem}>
            <p className={css.basicInfoPh}><span className={css.spanBasicInfo}>Conditions:</span> {conditions}</p>
          </li>
        </ul>
        {isExpanded && (
          <div>
                <p className={css.experience}>{experience}</p>
             
            <ul className={css.reviewers}>
              {reviews.map((review, index) => (
                <li key={index}>
                  <div className={css.reviewerBox}><span className={css.avatarReviewer}>{review.reviewer_name.charAt(0).toUpperCase()}</span>
                  <div>
                  <p className={css.reviewName}>{review.reviewer_name}</p>
                    <p className={css.rate}><svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>{review.reviewer_rating.toFixed(2)}</p>
                    </div></div>
                  <p>{review.comment}</p>
                </li>
              ))}
                      </ul>
          </div>
        )}
    
        <button className={css.toggleExpand} onClick={toggleExpand} type='button'>
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
        <ul className={css.levelsList}>
          {levels.map((level, index) => (
            <li className={css.levelsItem} key={index}>{level}</li>
          ))}
        </ul>
        {isExpanded && (
          <button type='button' className={css.bookTrialBtn}>Book trial lesson</button>
        )}
      </div>
    </li>
  );
};

