import React from 'react';

const TryService = () => {
  return (
    <div className="flex p-20 justify-between items-center my-10 rounded-2xl bg-gradient-to-b from-gray-600 to-black-50 w-11/12">
      <div className="left w-3/5">
        <h1 className="font-bold text-5xl my-5  leading-tight md:leading-snug">
          Let’s try our service now!
        </h1>
        <span className="text-gray-400 w-11/12">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </span>
      </div>
      <div className="right w-1/4">
        <button className="py-3 px-5 my-10 bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default TryService;
