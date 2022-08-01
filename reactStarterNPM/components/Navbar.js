import React from 'react';
import ReactDOM from 'react-dom';

function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <div className="left">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" />
        </div>
        <div className="right">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact Us</li>
          <li>Login</li>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;
