import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const add = <FontAwesomeIcon icon={faPlus} />;
const minus = <FontAwesomeIcon icon={faMinus} />;

export default function IndividualQuestion({ question }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="question" key={question.id}>
      <div className="top">
        {question.title}
        <div
          className="additional"
          onClick={() => {
            if (!expanded) {
              setExpanded(true);
            } else {
              setExpanded(false);
            }
          }}
        >
          {!expanded ? add : minus}
        </div>
      </div>
      <div className="bottom">{expanded ? question.info : ''}</div>
    </div>
  );
}
