import React from 'react';

const MetaInfo = ({ reviews }) => {
  if (reviews.length > 0) {
    return (
      <div className="w-11/12 md:w-1/2 lg:w-2/5 mt-5 text-white flex justify-between">
        <span>
          {reviews.length}
          {reviews.length === 1 ? ' Review' : ' Reviews'}
        </span>
        <span>
          <span> Average Rating </span>
          {(
            reviews
              .map((review) => review.rating)
              .reduce((accumulator, currentNum) => {
                return accumulator + currentNum;
              }) / reviews.length
          ).toFixed(2)}
        </span>
      </div>
    );
  }
};

export default MetaInfo;
