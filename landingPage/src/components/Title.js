import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import robotLayers from '../images/robotLayers.png';
// import middleLayerobot from '../images/middleLayerobot.png'
const arrowUp = <FontAwesomeIcon icon={faArrowUp} />;
const Title = () => {
  return (
    <main className="w-full relative md:flex md:justify-between overflow-hidden   mb-32">
      <div className="left my-24  md:w-3/5">
        <section className="text-5xl leading-normal md:text-6xl md:leading-normal my-10 font-bold ">
          The Next
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-cyan-100">
            Generation
          </span>
          <br />
          Payment Method. <br />
        </section>
        <section className="description text-gray-400 md:w-1/2">
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </section>
      </div>
      <div className="hidden md:flex  absolute md:top-1/4 left-1/3 top-96 translate-x-1/2 translate-y-1/2 rounded-full border-2 border-cyan-300 w-28  h-28 flex-col justify-center items-center ">
        <span>Get </span>
        <span className=" rotate-45">{arrowUp}</span>
        <div>Started</div>
      </div>
      <div className="md:w-1/2      ">
        <img className=" object-cover" src={robotLayers} alt="" srcSet="" />
      </div>
    </main>
  );
};

export default Title;
