import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="left branding">
        The<span className="logo">Cocktail</span>DB
      </div>
      <div className="right menus">
        <span className="home">Home</span>
        <span className="about">About</span>
      </div>
    </nav>
  );
}
