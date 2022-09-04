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

function ShowModal() {
  document.body.style.backgroundColor = 'black';
  return (
    <div className="finished-modal">
      <h2>Congrats</h2>
      You answered 50% of question correctly
      <button className=" start next" onClick={() => window.location.reload()}>
        Play Again
      </button>
    </div>
  );
}
export default function ShowQuestions({ questions, category, difficulty }) {
  const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${getCategoryValue(
    category
  )}&difficulty=${difficulty}&type=multiple`;

  const [quizQuestions, setQuizQuestions] = useState([]);
  const [questionIndex, setIndex] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const getNextQuestion = () => {
    if (questionIndex === questions - 1) {
      return setIndex(9);
    }
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
  //   console.log(questions, category, difficulty);
  console.log(quizQuestions);
  if (quizQuestions === null || quizQuestions.length === 0) {
    return <div className="loader"></div>;
  }
  // if (questionIndex === questions - 1) {
  //   return <div className="finish">Finished</div>;
  // }
  return (
    <div className="questions">
      {quizQuestions.map((quizQuestion, index) => {
        return (
          questionIndex === index && (
            <div className="question form-control" key={index}>
              <div className="state">
                Correct Answer: {correctAnswer} / {questionIndex}{' '}
              </div>
              <h1>{quizQuestion.question}</h1>
              <div className="answers">
                {Array.from([
                  ...quizQuestion.incorrect_answers,
                  quizQuestion.correct_answer,
                ]).map((answer) => {
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
              {console.log(questionIndex)}
            </div>
          )
        );
      })}
      {questionIndex === questions - 1 && <ShowModal />}
    </div>
  );
}
