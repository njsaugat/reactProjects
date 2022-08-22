import React from 'react';
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const searchIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />;
const GetHome = () => {
  return <span className="home">Home</span>;
};
const GetAboutUs = () => {
  return <span className="about">About</span>;
};

const GetLogo = () => {
  return (
    <div className="left branding">
      The<span className="logo">Cocktail</span>DB
    </div>
  );
};

// const getSearchedItems = (e) => {
//   if (e.key === 'Enter') {
//     console.log(e.target.value);
//   }
// };
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">{<GetLogo />}</Link>
        <div className="search">
          <input type="text" placeholder="Search a cocktail.." />
          <span>{searchIcon}</span>
        </div>
        <div className="right menus">
          <Link to="/">{<GetHome />}</Link>
          <Link to="/about-us">{<GetAboutUs />}</Link>
        </div>
      </nav>
    </>
  );
}
