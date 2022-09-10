import React from 'react';
import logo from '../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faCoins,
  faHouse,
  faListCheck,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { createPortal } from 'react-dom';

const menuIcon = <FontAwesomeIcon icon={faBars} />;
const crossIcon = <FontAwesomeIcon icon={faXmark} />;

const homeIcon = <FontAwesomeIcon icon={faHouse} />;
const aboutUsIcon = <FontAwesomeIcon icon={faUser} />;
const featuresIcon = <FontAwesomeIcon icon={faListCheck} />;
const solutionIcon = <FontAwesomeIcon icon={faCoins} />;

const menuIcons = [homeIcon, aboutUsIcon, featuresIcon, solutionIcon];
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const RenderMenuList = ({ icons }) => {
    return (
      <>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[0]} Home
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[1]} About Us
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[2]} Features
        </a>
        <a href="# " target="_blank" rel="noreferrer" className="list-none">
          {icons && icons[3]} Solution
        </a>
      </>
    );
  };

  const ShowPortal = () => {
    return createPortal(
      <div
        className="fixed top-0 left-0 right-0 bottom-0 z-100 bg-gray-800  bg-opacity-95 overflow-y-hidden
      w-11/12 h-screen text-white  transition ease-in-out delay-400"
      >
        <div className="absolute    flex justify-between w-11/12 h-screen z-100    text-2xl  p-10 ">
          <div className="lists flex flex-col gap-10">
            <RenderMenuList icons={menuIcons} />
          </div>
          <span
            onClick={() => setShowMenu(false)}
            className="cursor-pointer rounded-lg  p-2 bg-gradient-to-b from-gray-600 to-black-50 w-10 h-10 flex justify-center items-center"
          >
            {crossIcon}
          </span>
        </div>
      </div>,
      document.getElementById('portal')
    );
  };
  return (
    <nav className="flex  items-center space-x-2 p-3 w-screen gap-10 md:gap-32 lg:gap-1 md:mb-10 relative ">
      <div className="logo w-3/5  flex items-center font-bold text-4xl my-5  leading-tight md:leading-snug md:w-1/2">
        <div className="mr-3">
          <img className="" src={logo} alt="" srcSet="" />
        </div>
        <span>Hoo</span>
        <span className="text-cyan-400">Bank</span>
      </div>
      <div
        className="lg:hidden md:ml-32 text-3xl cursor-pointer rounded-lg  p-2 bg-gradient-to-b from-gray-600 to-black-50"
        onClick={() => {
          setShowMenu(true);
        }}
      >
        {menuIcon}
      </div>
      {showMenu && <ShowPortal />}
      <ul
        className={`hidden lg:flex lg:gap-10 lg:pl-1/2 md:w-11/12 lg:w-3/5 text-xl  items-center my-3`}
      >
        <RenderMenuList />
      </ul>
    </nav>
  );
};

export default Navbar;
