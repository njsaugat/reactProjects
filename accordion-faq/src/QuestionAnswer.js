import React from 'react';
import questions from './data';
import IndividualQuestion from './IndividualQuestion';

export default function QuestionAnswer() {
  return (
    <div className="container">
      <h2>Questions and Answers About Login</h2>
      <div className="questions">
        {questions.map((question) => {
          return <IndividualQuestion question={question} />;
        })}
      </div>
    </div>
  );
}
