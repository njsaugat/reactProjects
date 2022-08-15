import React, { useEffect, useState } from 'react';
import people from './reviewData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faQuoteRight,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

const quotes = <FontAwesomeIcon icon={faQuoteRight} />;
const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;

export default function Reviews() {
  const [reviewIndex, setIndex] = useState(0);
  function moveForward() {
    setIndex((prevIndex) => {
      clearInterval(interval);
      return prevIndex < people.length - 1 ? prevIndex + 1 : 0;
    });
  }
  function moveBackword() {
    setIndex((prevIndex) => {
      clearInterval(interval);
      return prevIndex > 0 ? prevIndex - 1 : people.length - 1;
    });
  }
  let interval;
  useEffect(() => {
    interval = setInterval(() => moveForward(), 4000);
  }, []);

  return (
    <>
      <h1>
        <span className="slash"> / </span>
        Reviews
      </h1>
      <div className="container">
        <div
          className="leftarrow arrow"
          onClick={() => {
            moveBackword();
          }}
        >
          {arrowLeft}
        </div>
        <div className="reviews">
          {people.map((person, index) => {
            return (
              <div
                className={index === reviewIndex ? 'review active' : 'review'}
                key={person.id}
              >
                <div className="image">
                  <img src={person.image} alt={person.name} srcSet="" />
                </div>
                <div className="name">{person.name}</div>
                <div className="title">{person.title}</div>
                <div className="quote">{person.quote}</div>
                <div className="quotes">{quotes}</div>
              </div>
            );
          })}
        </div>
        <div
          className="rightarrow arrow"
          onClick={() => {
            moveForward();
          }}
        >
          {arrowRight}
        </div>
      </div>
    </>
  );
}
