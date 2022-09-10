import React from 'react';
import person1 from '../images/person1.png';
import person2 from '../images/person2.png';
import person3 from '../images/person3.png';
import quotes from '../images/quotes.svg';
import recommenders from '../images/recommenders.png';

const recommendations = [
  {
    id: 1,
    review:
      'Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.',
    recommenderImage: person1,
    recommendarName: 'Herman Jensen',
    recommenderTitle: 'Founder & Leader',
  },
  {
    id: 2,
    review:
      "Money makes your life easier. If you're lucky to have it, you're lucky.",
    recommenderImage: person2,
    recommendarName: 'Steve Mark',
    recommenderTitle: 'Founder & Leader',
  },
  {
    id: 3,
    review:
      'It is usually people in the money business, finance, and international trade that are really rich.',
    recommenderImage: person3,
    recommendarName: 'Kenn Gallagher',
    recommenderTitle: 'Founder & Leader',
  },
];
const Review = () => {
  const renderRecommendations = recommendations.map((recommendation) => {
    let initialStyle =
      'flex flex-col  justify-center  py-30 p-10 w-11/12 md:w-1/4 rounded-md  my-5 ';
    let computedStyle = 'bg-gradient-to-b from-gray-600 to-transparent-500';
    initialStyle += recommendation.id === 1 ? ' ' + computedStyle : '';
    return (
      <div className={initialStyle} key={recommendation.id}>
        <div className="quotes">
          <img src={quotes} alt="" srcSet="" />
        </div>
        <div className="content leading-8 text-xl text-gray-50 my-5">
          {recommendation.review}
        </div>
        <div className="recommendar flex ">
          <div className="left w-15 h-15 rounded-full mr-5">
            <img src={recommendation.recommenderImage} alt="" srcSet="" />
          </div>
          <div className="right flex flex-col">
            <span>{recommendation.recommendarName}</span>
            <span className="text-gray-500">
              {recommendation.recommenderTitle}
            </span>
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="my-20">
      <div className="md:flex  gap-20 items-center">
        <div className="left ">
          <h1 className="font-bold text-5xl my-5 leading-tight md:leading-snug">
            What people are
            <br />
            saying about us
          </h1>
        </div>
        <span className="text-gray-400 w-1/3 ">
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </span>
      </div>
      <div className="recommendations flex md:justify-center flex-wrap gap-10">
        {renderRecommendations}
      </div>
      <div className="recommenders w-full my-10 pr-10 md:pr-0 flex justify-center items-center">
        <img src={recommenders} alt="" srcSet="" />
      </div>
    </div>
  );
};

export default Review;
