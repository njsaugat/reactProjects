import { useState } from 'react';
import ShowForm from './ShowForm';
import ShowQuestions from './ShowQuestions';
import './style.css';

function App() {
  const [questions, setQuestions] = useState(0);
  const [category, setCategory] = useState('');
  const [difficulty, setDifficulty] = useState('');
  function getDataFromForm({
    totalQuestions,
    selectedCategory,
    selectedDifficulty,
  }) {
    setQuestions(totalQuestions.current.value);
    setCategory(selectedCategory.current.value);
    setDifficulty(selectedDifficulty.current.value);
  }

  return (
    <>
      <ShowForm getDataFromForm={getDataFromForm} />
      {/* {console.log(questions, category, difficulty)} */}
      {questions > 0 && (
        <ShowQuestions
          questions={questions}
          category={category}
          difficulty={difficulty}
        />
      )}
    </>
  );
}

export default App;
