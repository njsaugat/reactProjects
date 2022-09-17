import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const About = () => {
  return (
    <div className="flex relative flex-col justify-center items-center  bg-gradient-to-r from-indigo-600 to-blue-900 w-screen min-h-screen overflow-x-hidden">
      <Header />
      <div
        className=" mt-20
      flex flex-col justify-center items-center py-4 rounded-lg bg-slate-200 w-11/12 md:w-1/2 lg:w-2/5"
      >
        <h1 className="font-bold text-2xl m-4">About This project</h1>
        <section>This is a react app to leave Feedback</section>
        <section>Version 1.0.0</section>
        <Link to="/" className="underline text-purple-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default About;
