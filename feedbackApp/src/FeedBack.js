import React, { useRef } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Ratings from './Ratings';
import RenderError from './RenderError';

const getRandomNumber = () => Math.floor(Math.random() * 10000);
const FeedBack = ({ reviews, setReviews, editIndex, setEditIndex }) => {
  const [showError, setShowError] = useState('');
  const [selectedReview, setSelectedReview] = useState(0);

  const inputRel = useRef(null);
  //if we kept above it would run everytime the component would rerender but keeping in useEffect would run only when editIndex changes
  useEffect(() => {
    if (editIndex >= 0) {
      inputRel.current.value = reviews[editIndex].title;
      setSelectedReview(reviews[editIndex].rating);
    }
  }, [editIndex, reviews]);

  return (
    <form
      className="feedback mt-20
     flex flex-col justify-center items-center py-4 rounded-lg bg-slate-200 w-11/12 md:w-1/2 lg:w-2/5"
    >
      {showError !== '' && <RenderError showError={showError} />}
      <h1 className="font-bold text-2xl m-4">
        How would you rate your service with us?
      </h1>
      <div className="ratings  flex flex-wrap justify-center  my-5">
        <Ratings
          selectedReview={selectedReview}
          setSelectedReview={setSelectedReview}
        />
      </div>
      <span className=" w-11/12 py-2 border-2 border-slate-300 justify-self-center flex justify-center mb-3">
        <input
          ref={inputRel}
          className="w-10/12 mr-2 p-1 outline-0 bg-transparent"
          placeholder="Write a review..."
          // value={}
          // onChange={(}
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
              setSelectedReview(0);
              setTimeout(() => {
                inputRel.current.value = '';
              }, 0);

              if (editIndex >= 0) {
                console.log(prevReviews[editIndex]);
                prevReviews[editIndex] = {
                  ...prevReviews[editIndex],
                  title: inputRel.current.value,
                  rating: selectedReview,
                };
                setEditIndex(-1);
                return [...prevReviews];
              }
              return [
                ...prevReviews,
                {
                  id: new Date().getTime() + getRandomNumber(),
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
