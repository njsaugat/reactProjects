import React, { useEffect, useState } from 'react';
import { useRef } from 'react';
import { getCategoryValue } from './getCategoryValue';
import ShowModal from './ShowModal';
import { shuffleArray } from './shuffleArray';

export default function ShowQuestions({ questions, category, difficulty }) {
  const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${getCategoryValue(
    category
  )}&difficulty=${difficulty}&type=multiple`;

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [questionIndex, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const questionRef = useRef(null);

  const getNextQuestion = () => {
    setIndex(questionIndex + 1);
  };
  useEffect(() => {
    async function getQuizQuestions() {
      const quizData = await fetch(API_URL, { accept: 'application/json' });
      const { results } = await quizData.json();
      setQuizQuestions(results);
    }
    getQuizQuestions();
  }, [API_URL]);

  if (quizQuestions === null || quizQuestions.length === 0) {
    return <div className="loader"></div>;
  }
  return (
    <div className="questions">
      {quizQuestions.map((quizQuestion, index) => {
        return (
          questionIndex === index && (
            <div
              className="question form-control"
              key={index}
              ref={questionRef}
            >
              <div className="state">
                Correct Answer: {correctAnswer} / {questionIndex}{' '}
              </div>
              <h1>
                {index + 1}. {quizQuestion.question}
              </h1>
              <div className="answers">
                {shuffleArray(
                  Array.from([
                    ...quizQuestion.incorrect_answers,
                    quizQuestion.correct_answer,
                  ])
                ).map((answer) => {
                  return (
                    <button
                      className="answer start"
                      onClick={(e) => {
                        getNextQuestion();
                        if (
                          e.target.innerText === quizQuestion.correct_answer
                        ) {
                          setCorrectAnswer(correctAnswer + 1);
                        }
                      }}
                    >
                      {answer}
                    </button>
                  );
                })}
              </div>
              <button onClick={getNextQuestion} className="btn start next">
                Next
              </button>
            </div>
          )
        );
      })}
      {questionIndex === +questions && (
        <ShowModal
          questionRef={questionRef}
          correctAnswer={correctAnswer}
          questions={questions}
        />
      )}
    </div>
  );
}
