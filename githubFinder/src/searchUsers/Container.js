import React from 'react';
import { useRef } from 'react';
// import { useState } from 'react';

const Container = ({ setSearchTerm }) => {
  const inputElement = useRef(null);
  return (
    <form action="" className="search  flex justify-center m-5">
      <input
        ref={inputElement}
        placeholder="Search"
        className="p-3 w-3/5 md:w-1/3 bg-slate-200 outline-none border-none rounded-tl-md rounded-bl-md"
        // onChange={(e)=>{
        //   setSearchTerm(e.target.value)
        // }}
      />
      <button
        type="submit"
        className="bg-black text-white rounded-tr-md rounded-br-md py-3 px-7 uppercase"
        onClick={(e) => {
          e.preventDefault();
          setSearchTerm(inputElement.current.value);
        }}
      >
        Go
      </button>
    </form>
  );
};

export default Container;
