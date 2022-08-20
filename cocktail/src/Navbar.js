import React from 'react';
import { Link } from 'react-router-dom';

import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
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
export default function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/">{<GetLogo />}</Link>
        <div className="right menus">
          <Link to="/">{<GetHome />}</Link>
          <Link to="/about-us">{<GetAboutUs />}</Link>
        </div>
      </nav>
      {/* <Routes>
        <Route path="about-us" element={<AboutUs />} />
      </Routes> */}
    </>
  );
}
