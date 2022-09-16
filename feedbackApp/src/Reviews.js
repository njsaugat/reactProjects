import { faPenToSquare, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const editIcon = <FontAwesomeIcon icon={faPenToSquare} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;
const iconStyle = 'cursor-pointer absolute top-1 text-red-700 ';
const Reviews = ({ reviews, setReviews, setEditIndex }) => {
  return (
    <div className="w-11/12 md:w-1/2 lg:w-2/5  my-10 flex flex-col items-center justify-center  ">
      {reviews.map((review) => {
        return (
          <div
            className="review relative w-full h-14 capitalize rounded-lg  bg-slate-200 my-3 flex  items-center pl-8 py-9"
            key={review.id}
            id={review.id}
          >
            {review.title}
            <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-t  from-orange-400 to-pink-600 flex justify-center items-center">
              {review.rating}
            </span>
            <span className="flex flex-col items-center ">
              <span
                className={`${iconStyle} right-12 `}
                onClick={(e) => {
                  const index = reviews.findIndex(
                    (review) => review.id === +e.target.closest('.review').id
                  );
                  setEditIndex(index);
                }}
              >
                {editIcon}
              </span>
              <span
                className={`${iconStyle} right-5 `}
                onClick={(e) => {
                  // {console.log(review.id)}
                  setReviews((prevReviews) => {
                    return prevReviews.filter((review) => {
                      return review.id !== +e.target.closest('.review').id;
                    });
                  });
                }}
              >
                {crossIcon}
              </span>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
