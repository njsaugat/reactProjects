import React from 'react';
import { useState } from 'react';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const crossIcon = <FontAwesomeIcon icon={faXmark} />;

export default function ShowModel() {
  const [clicked, setClicked] = useState(false);
  function ModelContent() {
    return (
      <div className="content">
        <span
          className="cross-icon"
          onClick={(e) => {
            setClicked(false);
          }}
        >
          {crossIcon}
        </span>
        Model Content
      </div>
    );
  }
  return (
    <div className={clicked ? 'containerOther inactive' : 'containerOther'}>
      <button
        className="btn"
        onClick={(e) => {
          setClicked(true);
        }}
      >
        Show Modal
      </button>
      {clicked ? <ModelContent /> : ''}
    </div>
  );
}
