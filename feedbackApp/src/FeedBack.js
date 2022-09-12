import React from 'react';
const ratingsArr = Array.from(Array(10).keys());
const FeedBack = () => {
  const renderRatings = ratingsArr.map((rating, index) => {
    return (
      <div
        className="rating w-8 h-8 flex justify-center items-center m-1.5 rounded-full bg-slate-300"
        key={index}
      >
        {rating + 1}
      </div>
    );
  });
  return (
    <div className="feedback flex flex-col justify-center items-center py-4 rounded-lg bg-slate-200 w-11/12 md:w-1/2 lg:w-2/5">
      <h1 className="font-bold text-2xl m-4">
        How would you rate your service with us?
      </h1>
      <div className="ratings  flex flex-wrap justify-center  my-5">
        {renderRatings}
      </div>
      <span className=" w-11/12 py-2 border-2 border-slate-300 justify-self-center flex justify-center mb-3">
        <input
          className="w-10/12 mr-2 p-1 outline-0 bg-transparent"
          placeholder="Write a review..."
        ></input>
        <button className="px-3 py-1 bg-slate-400 rounded-md">Send</button>
      </span>
    </div>
  );
};

export default FeedBack;
