import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const About = () => {
  return (
    <div className="bg-gradient-to-b text-slate-100 from-gray-600 to-slate-700 w-screen min-h-screen  flex flex-col items-center ">
      <Navbar />
      <div
        className=" mt-20
      flex flex-col justify-center bg-slate-700 transition-all hover:bg-slate-800 items-center py-4 rounded-lg w-11/12 md:w-1/2 lg:w-2/5"
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
