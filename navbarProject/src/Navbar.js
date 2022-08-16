import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect } from 'react';
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />;
const twitterIcon = <FontAwesomeIcon icon={faTwitter} />;
const linkedinIcon = <FontAwesomeIcon icon={faLinkedin} />;
const menuIcon = <FontAwesomeIcon icon={faBars} />;

// const icon = <FontAwesomeIcon icon={faFacebook} />;
export default function Navbar() {
  const [clicked, setClicked] = useState(false);
  function MenuBar() {
    return (
      <div
        className="menu-bar"
        onClick={(e) => {
          clicked ? setClicked(false) : setClicked(true);
        }}
      >
        {menuIcon}
      </div>
    );
  }
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  useEffect(() => {
    // window.addEventListener('resize', () => {
    //   setWindowSize(window.innerWidth);
    // });
    function handleWindowResize() {
      setWindowSize(window.innerWidth);
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);
  return (
    <div className="container">
      <nav className={clicked ? 'active' : 'nav'}>
        <div className="title">
          <span className="coding">Coding </span>
          <span className="addict"> Addict</span>
        </div>
        {/* <ul className={clicked ? 'menu active' : 'menu'}> */}
        <ul className="menu">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Projects</a>
          <a href="#">Contacts</a>
          <a href="#">Profile</a>
        </ul>
        <div className="socials">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {facebookIcon}
          </a>
          <a
            href="https://twitter.com/home"
            target="_blank"
            rel="noopener noreferrer"
          >
            {twitterIcon}
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {linkedinIcon}
          </a>
          {console.log(windowSize)}
          {/* <a href="#"></a> */}
        </div>
        {windowSize <= 850 ? <MenuBar /> : () => setClicked(false)}
      </nav>
    </div>
  );
}
