import React, { useEffect, useState } from 'react';
//politics-24
//sports-21
//history-23
const getCategoryValue = (category) => {
  if (category.toLowerCase() === 'sports') {
    return 21;
  } else if (category.toLowerCase() === 'history') {
    return 23;
  } else if (category.toLowerCase() === 'politics') {
    return 24;
  }
};
export default function ShowQuestions({ questions, category, difficulty }) {
  const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${getCategoryValue(
    category
  )}&difficulty=${difficulty}&type=multiple`;

  const [quizQuestions, setQuizQuestions] = useState([]);

  useEffect(() => {
    async function getQuizQuestions() {
      const quizData = await fetch(API_URL, { accept: 'application/json' });
      const { results } = await quizData.json();
      setQuizQuestions(results);
    }
    getQuizQuestions();
  }, [API_URL]);
  //   console.log(questions, category, difficulty);
  console.log(quizQuestions);
  return (
    <div className="questions">
      {quizQuestions.map((quizQuestion) => {
        return (
          <div className="question">
            <h1>{quizQuestion.question}</h1>
          </div>
        );
      })}
    </div>
  );
}
