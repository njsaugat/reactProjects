import React, { useRef } from 'react';

const categories = ['sports', 'history', 'politics'];

const difficulties = ['easy', 'medium', 'hard'];

export default function ShowForm({ getDataFromForm }) {
  const totalQuestions = useRef(null);
  const selectedCategory = useRef(null);
  const selectedDifficulty = useRef(null);
  const formDisplay = useRef(null);
  return (
    <form action="" className="form-control" ref={formDisplay}>
      <h1>Setup Quiz</h1>
      <div className="topic">
        <label htmlFor="numberOfQuestions"> Number of Questions</label>
        <input type="number" defaultValue={10} ref={totalQuestions} />
      </div>
      <div className="topic">
        <label htmlFor="Category">Category</label>
        <select ref={selectedCategory}>
          {categories.map((category, index) => {
            return <option key={index}>{category}</option>;
          })}
        </select>
      </div>
      <div className="topic">
        <label htmlFor="Difficulty">Select Difficulty</label>
        <select ref={selectedDifficulty}>
          {difficulties.map((difficulty, index) => {
            return <option key={index}>{difficulty}</option>;
          })}
        </select>
      </div>
      <button
        className="start btn"
        onClick={(e) => {
          e.preventDefault();
          getDataFromForm({
            totalQuestions,
            selectedCategory,
            selectedDifficulty,
          });
          // formDisplay.current.style.display = 'none';
          formDisplay.current.remove();
        }}
      >
        Start
      </button>
    </form>
  );
}
