import React from 'react';

const Reviews = ({ reviews }) => {
  return (
    <div className="w-11/12 md:w-1/2 lg:w-2/5  my-10 flex flex-col items-center justify-center  ">
      {reviews.map((review) => {
        return (
          <div
            className="review relative w-full h-14 capitalize rounded-lg  bg-slate-200 my-3 flex  items-center justify-center"
            key={review.id}
          >
            {review.title}
            <span className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-orange-500 flex justify-center items-center">
              {review.rating}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Reviews;
