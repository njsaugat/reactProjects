import React, { useState } from 'react';
import reviews from './UserReview';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const quotes = <FontAwesomeIcon icon={faQuoteRight} />;
const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;
const randomValue = () => {
  return Math.floor(Math.random() * reviews.length);
};
export default function Review() {
  const [index, setIndex] = useState(0);
  const review = reviews[index];
  //   const [review,setReview]=useState(reviews[index])
  return (
    <>
      {/* {reviews.map((review) => { */}
      {/* return ( */}
      <div className="review" key={review.id}>
        <div
          className="image"
          //   style={{ backgroundImage: `url(${review.image})` }}
        >
          <div className="quotes">{quotes}</div>
          <img src={review.image} alt={review.name} srcSet="" />
        </div>
        <div className="name">{review.name}</div>
        <div className="job">{review.job}</div>
        <div className="info">{review.text}</div>
        <div className="arrows">
          <span
            className="left"
            onClick={() => {
              setIndex((prevIndex) =>
                prevIndex > 0 ? prevIndex - 1 : reviews.length - 1
              );
              // setReview(reviews)
            }}
          >
            {' '}
            {arrowLeft}{' '}
          </span>
          <span
            className="right"
            onClick={() => {
              setIndex((prevIndex) =>
                prevIndex < reviews.length - 1 ? prevIndex + 1 : 0
              );
              // setReview(reviews)
            }}
          >
            {' '}
            {arrowRight}{' '}
          </span>
        </div>
        <button
          className="surprise btn"
          onClick={() => {
            setIndex(randomValue());
          }}
        >
          Surprise Me
        </button>
      </div>
      {/* )})} */}
    </>
  );
}
