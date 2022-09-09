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
      {/* <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div class="md:flex">
          <div class="md:shrink-0">
            <img
              class="h-48 w-full object-cover md:h-full md:w-48"
              src={middleLayer}
              alt="Man looking at item at a store"
            />
          </div>
          <div class="p-8">
            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
              Case study
            </div>
            <a
              href="#"
              class="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
            >
              Finding customers for your new business
            </a>
            <p class="mt-2 text-slate-500">
              Getting a new business off the ground is a lot of hard work. Here
              are five ideas you can use to find your first customers.
            </p>
          </div>
        </div>
      </div> */}
    </main>
  );
};

export default Title;
