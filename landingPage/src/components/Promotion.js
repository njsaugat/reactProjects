import React from 'react';
import promotion from '../images/promotion.png';

const Promotion = () => {
  return (
    <div className="md:flex my-32">
      <div className="left md:w-1/2 my-10">
        <h1 className="font-bold text-5xl my-5 leading-tight md:leading-snug">
          Find a better card deal in few easy steps.
        </h1>
        <span className="text-gray-400 w-1/3 ">
          The best card that can be useful to people using the credit card alot.
          The mode for making the payments can be done easily through the help
          of the card
        </span>
        <br />
        <button className="py-3 px-5 my-10 bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black">
          Get Started
        </button>
      </div>
      <div className="w-11/12 md:w-2/5">
        <img src={promotion} alt="" />
      </div>
    </div>
  );
};

export default Promotion;
