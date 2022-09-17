import React from 'react';
import { useState } from 'react';
import FeedBack from './FeedBack';
import Header from './Header';
import MetaInfo from './MetaInfo';
import Reviews from './Reviews';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const questionIcon = <FontAwesomeIcon icon={faQuestion} />;

const Container = () => {
  const [reviews, setReviews] = useState(() => {
    const reviewsItems = JSON.parse(localStorage.getItem('reviews'));
    return reviewsItems ? reviewsItems : [];
  });

  const [editIndex, setEditIndex] = useState(-1);
  useEffect(() => {
    localStorage.setItem('reviews', JSON.stringify(reviews));
  }, [reviews]);
  return (
    <div className="flex relative flex-col justify-center items-center  bg-gradient-to-r from-indigo-600 to-blue-900 w-screen min-h-screen overflow-x-hidden">
      <Header />
      <FeedBack
        reviews={reviews}
        setReviews={setReviews}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      {reviews && <MetaInfo reviews={reviews} />}
      {reviews && (
        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          setEditIndex={setEditIndex}
        />
      )}
      <span className="absolute bottom-5  flex  self-end mr-5 mt-4 p-2 cursor-pointer hover:transition-all hover:text-pink-500 text-2xl text-white">
        <Link to="/about">{questionIcon}</Link>
      </span>
    </div>
  );
};

export default Container;
