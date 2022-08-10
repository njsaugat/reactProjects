import React from 'react';
const totalColors = 21;
const colorsArr = new Array(totalColors).fill('');
export default function ColorGenerator() {
  return (
    <div className="container">
      {/* <h1>Color Generator</h1> */}
      {/* <img
        src="https://images.pexels.com/photos/673648/pexels-photo-673648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Rainbow"
        srcSet=""
      /> */}
      <form action="" className="form-control">
        <label htmlFor="paragraphs">Color Generator:</label>
        <input type="text" placeholder="#f15025" />
        <button
          className="btn generate"
          onClick={(e) => {
            e.preventDefault();
            // console.log(e.target.value);
          }}
        >
          Submit
        </button>
      </form>
      <div className="colors">
        {colorsArr.map((color, index) => {
          return (
            <div
              className="color"
              style={{ backgroundColor: 'red' }}
              key={index}
            >
              {index}
            </div>
          );
        })}
      </div>
    </div>
  );
}
