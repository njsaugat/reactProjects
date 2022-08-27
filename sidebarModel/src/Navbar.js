import {
  faBars,
  faHome,
  faUserGroup,
  faFolderOpen,
  faCalendarDays,
  faFile,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const menuBar = <FontAwesomeIcon icon={faBars} />;
const homeIcon = <FontAwesomeIcon icon={faHome} />;
const peopleIcon = <FontAwesomeIcon icon={faUserGroup} />;
const projectIcon = <FontAwesomeIcon icon={faFolderOpen} />;
const calendarIcon = <FontAwesomeIcon icon={faCalendarDays} />;
const documentIcon = <FontAwesomeIcon icon={faFile} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;
export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  return (
    <>
      <div
        className={clicked ? 'menu-bar inactive' : 'menu-bar'}
        onClick={(e) => {
          setClicked(true);
        }}
      >
        {menuBar}
      </div>
      <div className={clicked ? 'nav-content active' : 'nav-content'}>
        {/* <div className={clicked ? 'naviagation active' : 'naviagation'}> */}
        <div className="header">
          <div className="title">
            <span className="coding">Coding </span>
            <span className="addict"> Addict</span>
          </div>
          <div
            className="cross"
            onClick={(e) => {
              setClicked(false);
            }}
          >
            {crossIcon}
          </div>
        </div>
        <nav>
          <ul>
            <a href="#">
              <span className="Home">{homeIcon}</span>
              <span className="name">Home</span>
            </a>
            <a href="#">
              <span className="Team">{peopleIcon}</span>
              <span className="name">Team</span>
            </a>
            <a href="#">
              <span className="Projects">{projectIcon}</span>
              <span className="name">Projects</span>
            </a>
            <a href="#">
              <span className="Calendar">{calendarIcon}</span>
              <span className="name">Calendar</span>
            </a>
            <a href="#">
              <span className="Documents">{documentIcon}</span>
              <span className="name">Documents</span>
            </a>
          </ul>
        </nav>
      </div>
      {/* </div> */}
    </>
  );
}
