import React from 'react';
import logo from '../images/logo.png';
const getDate = () => {
  return new Date().getFullYear();
};
const usefulLinks = [
  {
    id: 1,
    name: 'Useful Link',
    links: ['Content', 'How', 'Create', 'Explore', 'Teams'],
  },
  {
    id: 2,
    name: 'Community',
    links: ['Help Center', 'Partners', 'Suggestions', 'Blog', 'Newsletters'],
  },
  {
    id: 3,
    name: 'Partner',
    links: ['Our Partner', 'Become a partner'],
  },
];
const Footer = () => {
  const renderUsefulLinks = usefulLinks.map((usefulLink) => {
    return (
      <div className="category flex flex-col" key={usefulLink.id}>
        <h1 className="font-bold text-xl my-3  leading-tight md:leading-snug">
          {usefulLink.name}
        </h1>
        {usefulLink.links.map((link, index) => {
          return (
            <a
              className="no-underline my-1"
              href="h"
              key={index}
              xtarget="_blank"
              rel="noreferrer"
            >
              {link}
            </a>
          );
        })}
      </div>
    );
  });
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="left flex flex-col justify-center items-center w-full md:w-2/5 my-10">
          <div className="logo flex items-center font-bold text-5xl my-5  leading-tight md:leading-snug">
            <div className="mr-3">
              <img className="" src={logo} alt="" srcSet="" />
            </div>
            <span>Hoo</span>
            <span className="text-cyan-400">Bank</span>
          </div>
          <span className="text-gray-400 mt-10">
            A new way to make the
            <br />
            payments easy, reliable and secure.
          </span>
        </div>
        <div className="right item flex justify-center  w-full md:w-3/5 gap-10 md:gap-x-32">
          {renderUsefulLinks}
        </div>
      </div>
      <div className=" bg-gray-500 pr-10 w-11/12 h-0.5 my-5 "></div>
      <span className="py- text-gray-400 flex justify-center items-center">
        Copyright © {getDate()} HooBank. All Rights Reserved.
      </span>
    </>
  );
};

export default Footer;
