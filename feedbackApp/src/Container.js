import React from 'react';
import { useState } from 'react';
import FeedBack from './FeedBack';
import Header from './Header';
import MetaInfo from './MetaInfo';
import Reviews from './Reviews';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const questionIcon = <FontAwesomeIcon icon={faQuestion} />;

const Container = () => {
  const [reviews, setReviews] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

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
      <Link to="about">
        <span className="fixed bottom-5  w-full flex justify-end pr-5 cursor-pointer  text-white">
          {questionIcon}
        </span>
      </Link>
    </div>
  );
};

export default Container;
