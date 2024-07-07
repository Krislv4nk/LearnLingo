
import { useState } from 'react';
import sprite from '../../../assets/sprite.svg';

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
    experience
  } = teacher;

    const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    };
    
  return (
    <li key={teacher.index}>
      <img src={avatar_url} alt="avatar" />
      <div>
        <div>
          <p>Languages</p>
          <ul>
            <li>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-book`}></use>
              </svg>
              Lessons online
            </li>
            <span></span>
            <li>
              <p>Lessons done:</p>{lessons_done}
            </li>
            <span></span>
            <li>
              <svg width={20} height={20}>
                <use xlinkHref={`${sprite}#icon-star`}></use>
              </svg>
              <p>Rating</p>{rating}
            </li>
            <span></span>
            <li>
              <p>Price / 1 hour</p>{price_per_hour}
            </li>
          </ul>
          <button>
            <svg width={20} height={20}>
              <use xlinkHref={`${sprite}#icon-like`}></use>
            </svg>
          </button>
        </div>
        <h2>{name} {surname}</h2>
        <ul>
          <li>
            <p><span>Speaks:</span></p>
            <ul>
              {languages.map((language, index) => (
                <li key={index}>{language}</li>
              ))}
            </ul>
          </li>
          <li>
            <p><span>Lesson Info:</span> {lesson_info}</p>
          </li>
          <li>
            <p><span>Conditions:</span> {conditions}</p>
          </li>
        </ul>
        {isExpanded && (
          <>
            <ul>
              <li>
                <p>{experience}</p>
              </li>
            </ul>
            <ul>
              {reviews.map((review, index) => (
                <li key={index}>
                  <img src={review.review_avatar} alt="avatar" />
                  <p>Reviewer: {review.reviewer_name}</p>
                  <p>Rating: {review.reviewer_rating}</p>
                  <p>{review.comment}</p>
                </li>
              ))}
                      </ul>
                      <button type='button'>Book trial lesson</button>
          </>
        )}
    
        <button onClick={toggleExpand} type='button'>
          {isExpanded ? 'Show less' : 'Read more'}
        </button>
        <ul>
          {levels.map((level, index) => (
            <li key={index}>{level}</li>
          ))}
        </ul>
      </div>
    </li>
  );
};

