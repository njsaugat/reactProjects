import React from 'react';
import locate from '../images/locate.png';
import star from '../images/star.png';
import verify from '../images/verify.png';
const sellingFactors = [
  {
    id: 1,
    image: star,
    title: 'Rewards',
    content:
      'The best credit cards offer some tantalizing combinations of promotions and prizes',
  },
  {
    id: 2,
    image: verify,
    title: '100% Secured',
    content:
      'We take proactive steps make sure your information and transactions are secure.',
  },
  {
    id: 3,
    image: locate,
    title: 'Balance Transfer',
    content:
      'A balance transfer credit card can save you a lot of money in interest charges.',
  },
];
const Business = () => {
  const renderSellingFactors = sellingFactors.map((sellingFactor) => {
    let initialStyle = 'py-5 rounded-md  flex w-10/12 my-10 md:mx-5';
    let computedStyle = 'bg-gradient-to-b from-gray-600 to-transparent-500';
    initialStyle += sellingFactor.id === 2 ? ' ' + computedStyle : '';
    return (
      <div className={initialStyle} key={sellingFactor.id}>
        <img
          className=" md:w-16 md:h-16"
          src={sellingFactor.image}
          alt=""
          srcSet=""
        />
        <div className="factor">
          <h3>{sellingFactor.title}</h3>
          <span className="text-gray-400">{sellingFactor.content}</span>
        </div>
      </div>
    );
  });
  return (
    <div className="md:flex w-full items-center">
      <div className="left md:w-1/2 my-10">
        <h1 className="font-bold text-5xl my-5  leading-tight md:leading-snug">
          You do the business, we’ll handle the money.
        </h1>
        <span className="text-gray-400 w-1/2">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </span>
        <br />
        <button className="py-3 px-5 my-10 bg-gradient-to-t from-cyan-500 to-cyan-100  rounded-lg text-black">
          Get Started
        </button>
      </div>
      <div className="right md:w-1/3 md:ml-20 flex flex-col justify-center items-center">
        {renderSellingFactors}
      </div>
    </div>
  );
};

export default Business;
