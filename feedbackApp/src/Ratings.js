import React from 'react';
import { useState } from 'react';
import buttonProperties from './buttonProperties';

const ratingsArr = Array.from(Array(10).keys());

const selected = '  bg-gradient-to-t  from-orange-400 to-pink-600 text-white';

const Ratings = ({ selectedReview, setSelectedReview }) => {
  const [buttonStyle, setButtonStyle] = useState(buttonProperties);

  return (
    <>
      {ratingsArr.map((rating, index) => {
        return (
          <div
            className={
              selectedReview === index + 1 ? buttonStyle : buttonProperties
            }
            key={index}
            onClick={(e) => {
              setButtonStyle((prevProperties) => prevProperties + selected);
              setSelectedReview(+e.target.innerText);
            }}
          >
            {rating + 1}
          </div>
        );
      })}
    </>
  );
};

export default Ratings;
