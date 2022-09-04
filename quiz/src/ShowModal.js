const getPercent = (correctAnswers, totalAnswers) => {
  return (correctAnswers / totalAnswers) * 100;
};

export default function ShowModal({ questionRef, correctAnswer, questions }) {
  document.body.style.backgroundColor = 'rgba(0,0,0,0.7)';
  questionRef.current.style.backgroundColor = 'rgba(0,0,0,0.7)';
  return (
    <div className="finished-modal">
      <h2>Congrats</h2>
      <span className="results">
        {' '}
        You answered {getPercent(correctAnswer, questions)}% of question
        correctly
      </span>
      <button
        className=" start  again"
        onClick={() => window.location.reload()}
      >
        Play Again
      </button>
    </div>
  );
}
