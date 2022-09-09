import React from 'react';
import payment from '../images/payment.png';
import googleStore from '../images/googleStore.svg';
import appleStore from '../images/appleStore.svg';

const Payment = () => {
  return (
    <div className="md:flex my-32 md:justify-center md:items-center">
      <div className="left lg:w-1/2 content-start my-10">
        <img src={payment} alt="" srcSet="" />
      </div>

      <div className="right lg:w-1/3">
        <h1 className="font-bold text-5xl my-5 leading-tight md:leading-snug">
          Easily control your billing & invoicing.
        </h1>
        <span className="text-gray-400 w-1/2">
          A proper way to do the banking is now through the help of HOOBank.
          It's the particular way to go through all the tech people out there
          working in the industry. A nice solution to the existing problem of
          managing every payment at one go.
        </span>
        <div className="flex my-10 gap-10">
          <img src={googleStore} alt="" srcset="" />
          <img src={appleStore} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
