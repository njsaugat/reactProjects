import React, { useRef } from 'react';
import { useState } from 'react';

const ratingsArr = Array.from(Array(10).keys());

const FeedBack = ({ setReviews }) => {
  const buttonProperties = `rating cursor-pointer w-8 h-8 flex justify-center items-center m-1.5 rounded-full    bg-slate-300`;
  const [buttonStyle, setButtonStyle] = useState(buttonProperties);
  const [selectedReview, setSelectedReview] = useState(0);
  const [showError, setShowError] = useState('');
  const inputRel = useRef(null);
  const selected = ' bg-slate-800 text-white';

  const RenderError = () => {
    return <h3 className="text-red-600 tracking-wider">{showError}</h3>;
  };

  const renderRatings = ratingsArr.map((rating, index) => {
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
  });
  return (
    <form
      className="feedback mt-20
     flex flex-col justify-center items-center py-4 rounded-lg bg-slate-200 w-11/12 md:w-1/2 lg:w-2/5"
    >
      {showError !== '' && <RenderError />}
      <h1 className="font-bold text-2xl m-4">
        How would you rate your service with us?
      </h1>
      <div className="ratings  flex flex-wrap justify-center  my-5">
        {renderRatings}
      </div>
      <span className=" w-11/12 py-2 border-2 border-slate-300 justify-self-center flex justify-center mb-3">
        <input
          ref={inputRel}
          className="w-10/12 mr-2 p-1 outline-0 bg-transparent"
          placeholder="Write a review..."
        ></input>
        <button
          type="submit"
          className="px-3 py-1 bg-slate-400 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            if (selectedReview === 0) {
              return setShowError('Enter the review rating.');
            }
            if (inputRel.current.value === '') {
              return setShowError('Enter the review.');
            }
            setReviews((prevReviews) => {
              setShowError('');
              setTimeout(() => {
                inputRel.current.value = '';
                selectedReview(0);
              }, 0);
              return [
                ...prevReviews,
                {
                  id: new Date().getTime(),
                  title: inputRel.current.value,
                  rating: selectedReview,
                },
              ];
            });
          }}
        >
          Send
        </button>
      </span>
    </form>
  );
};

export default FeedBack;
