import React from 'react';
import logo from '../images/logo.png';
const Navbar = () => {
  return (
    <nav className="flex justify-center space-x-2 p-3 w-screen gap-20 ">
      {/* <span className="flex items-end ">
        <img src="../images/logo.png" alt="" srcSet="" className="" />
        <img src={logo} alt="" srcSet="" className="" />
        <span> HooBank</span>
      </span> */}
      <div className="logo flex items-center font-bold text-5xl my-5  leading-tight md:leading-snug">
        <div className="mr-3 w-20">
          <img className="" src={logo} alt="" srcSet="" />
        </div>
        <span>Hoo</span>
        <span className="text-cyan-400">Bank</span>
      </div>
      <ul className="flex gap-2  items-end">
        <li className="list-none">Home</li>
        <li className="list-none">About Us</li>
        <li className="list-none">Features</li>
        <li className="list-none">Solution</li>
      </ul>
    </nav>
  );
};

export default Navbar;
