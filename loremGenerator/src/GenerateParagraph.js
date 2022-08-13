import React, { useState } from 'react';
import { faker } from '@faker-js/faker';
const sentenceCount = 7;
export default function GenerateParagraph() {
  const [paragraphs, setParagraphs] = useState(0);
  const [clicked, setClicked] = useState(false);
  console.log(faker.lorem.paragraphs(1));
  return (
    <>
      <h1>Tired of boring lorem ipsum</h1>
      <form action="" className="form-control">
        <label htmlFor="paragraphs">Paragraphs:</label>
        <input
          type="number"
          min={0}
          onChange={(e) => {
            setClicked(false);
            setParagraphs(+e.target.value);
          }}
        />
        <button
          className="btn generate"
          onClick={(e) => {
            e.preventDefault();
            // console.log(e.target.value);
            // setParagraphs(+e.target.value);
            setClicked(true);
          }}
        >
          generate
        </button>
      </form>
      <div className="paragraphs">
        {/* {paragraphs > 0 ? getLoremParagraphs(paragraphs) : ''} */}
        {clicked ? getLoremParagraphs(paragraphs) : ''}
      </div>
    </>
  );
}

function getLoremParagraphs(paragraphs) {
  const paragraphArr = new Array(paragraphs).fill('');

  return paragraphArr.map((paragraph, index) => {
    return (
      <div className="paragraph" key={index}>
        {faker.lorem.paragraph(sentenceCount)}
      </div>
    );
  });
}
