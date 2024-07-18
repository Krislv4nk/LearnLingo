
import { useState, useEffect } from 'react';
import sprite from '../../../assets/sprite.svg';
import css from './TeacherCard.module.css';
import { getFavoriteTeachers, addToFavorites, removeFromFavorites } from '../../../Firebase/Teachers';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { StyledEngineProvider } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { ModalForAuthenticate} from '../../Auth/ModalForAuthenticate/ModalForAuthenticate';
import { BookTrial } from './BookTrial/BookTrial';

export const TeacherCard = ({ teacher }) => {
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
    experience,
    index
  } = teacher;

  const [isExpanded, setIsExpanded] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openBookTrial, setOpenBookTrial] = useState(false);


  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const favoriteTeachers = await getFavoriteTeachers();
        setFavorites(favoriteTeachers);
        setIsFavorite(favoriteTeachers.some(fav => fav.index === index));
      } catch (error) {
        console.error('Error fetching favorite teachers:', error);
      }
    };

    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
        fetchFavorites();
      } else {
        setIsAuthenticated(false);
      }
    });
  }, [index]);

  const handleFavoriteButtonClick = async () => {
    if (!isAuthenticated) {
      setOpenModal(true);
      return;
    }

    try {
      if (isFavorite) {
        await removeFromFavorites(index);
        setFavorites(favorites.filter(fav => fav.index !== index));
      } else {
        await addToFavorites(teacher);
        setFavorites([...favorites, teacher]);
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Error handling favorite click:', error);
    }
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const openBookTrialHandler = () => {
    setOpenBookTrial(true)
  }


  const closeBookTrialHandler = () => {
    setOpenBookTrial(false)
  }


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

          
          <button type='button'  className={css.likeButton} onClick={handleFavoriteButtonClick}>
            <svg width={20} height={20} 
              className={isFavorite ? css.svg_heart_red : css.svg_heart}
            >
              <use xlinkHref={`${sprite}#icon-like`}></use>
            </svg>
          </button>

          {openModal && (
<StyledEngineProvider injectFirst>
        <Dialog open={openModal} onClose={closeModalHandler} className={css.backdrop}
           PaperComponent={() => <ModalForAuthenticate onClose={closeModalHandler} />} />
      </StyledEngineProvider>
      )}
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
          <>
    <button type='button' className={css.bookTrialBtn} onClick={openBookTrialHandler}>Book trial lesson</button>

    <StyledEngineProvider injectFirst>
      <Dialog open={openBookTrial} onClose={closeBookTrialHandler} className={css.backdrop}
                PaperComponent={() => <BookTrial onClose={closeBookTrialHandler} teacher={teacher} />} />
    </StyledEngineProvider>
  </>
        )}
      </div>
    </li>
  );
};

