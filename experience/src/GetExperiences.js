import React, { useEffect, useState } from 'react';
import GetExperience from './GetExperience';
const API_URL = 'https://course-api.com/react-tabs-project';

export default function GetExperiences() {
  const [experiencs, setExperiences] = useState([]);
  const [index, setIndex] = useState(0); //initially set 0

  function getSelectedExperience(e) {
    setIndex(+e.target.getAttribute('id'));
    removeActiveClasses();
    e.currentTarget.classList.add('selected');
  }

  const getExperience = async () => {
    const data = await fetch(API_URL, { accept: 'application/json' });
    const results = await data.json();
    setExperiences(results);
    setIndex(results.length); //setting to max possible value
  };
  useEffect(() => {
    getExperience();
  }, []);

  if (experiencs.length === 0) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Experience</h1>
      <div className="highlight"></div>
      <div className="container">
        {/* navbar */}
        <div className="navbar">
          {experiencs.map((experience) => {
            return (
              <span
                onClick={getSelectedExperience}
                key={experience.order}
                id={experience.order}
                className={
                  experience.order === experiencs.length ? 'selected' : ''
                }
              >
                {experience.company}
              </span>
            );
          })}
        </div>
        {/* experiences */}
        <div className="experiences">
          {experiencs.map((experience) => {
            return (
              <GetExperience
                experience={experience}
                index={index}
                key={experience.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

function removeActiveClasses() {
  const targets = document.body.querySelectorAll('.navbar span');
  targets.forEach((target) => {
    target.classList.remove('selected');
  });
}
