import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
const githubIcon = <FontAwesomeIcon icon={faGithub} />;
// import github.svg from 'github.svg'
const Navbar = () => {
  return (
    <div className="flex shadow-md w-screen justify-between items-center bg-black text-white p-5 ">
      <div className="left font-bold tracking-wide pl-10 w-3/5 md:w-4/5 lg:w-10/12 text-xl">
        <Link to="/">
          <span className="mr-3 text-xl">{githubIcon}</span>
          Github Finder
        </Link>
      </div>
      <div className="right w-1/3 flex gap-10 ">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/about">
          <span>About</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
