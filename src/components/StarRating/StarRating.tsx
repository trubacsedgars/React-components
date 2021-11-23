import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import './StarRating.scss';

const ratings = [0, 1, 2, 3, 4];

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const selectRating = (ratingValue: number) => {
    setRating(ratingValue);
  };

  const hoverOverRating = (hoverOver: number) => {
    setHover(hoverOver);
  };

  const hoverOutRating = (hoverOut: number) => {
    setHover(hoverOut);
  };

  return (
    <div className="rating">
      {ratings.map((_, index) => {
        const ratingValue = index + 1;
        return (
          <button
            className="rating__star"
            key={ratingValue}
            onClick={() => selectRating(ratingValue)}
            onMouseEnter={() => hoverOverRating(ratingValue)}
            onMouseLeave={() => hoverOutRating(rating)}
          >
            <FontAwesomeIcon
              className="rating__star-icon"
              icon={faStar}
              color={ratingValue <= (hover || rating) ? '#FACC15' : '#6B7280'}
            />
          </button>
        );
      })}
      <div className="rating__score">
        <span className="rating__score-content">
          {`You have rated our service as ${rating} of 5, Thank you!`}
        </span>
      </div>
    </div>
  );
};

export default StarRating;
