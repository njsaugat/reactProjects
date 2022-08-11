import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const rightArrow = <FontAwesomeIcon icon={faAnglesRight} />;

export default function GetExperience({ experience, index }) {
  // console.log(experience.order);
  if (experience.order === index) {
    return (
      <div className="experience" key={experience.id}>
        <h3>{experience.title}</h3>
        <div className="company">{experience.company}</div>
        <div className="dates">{experience.dates}</div>
        {experience.duties.map((duty) => {
          return (
            <div className="duty-flex">
              <span className="arrow">{rightArrow}</span>
              <div className="duty">{duty}</div>
            </div>
          );
        })}
      </div>
    );
  }
}
