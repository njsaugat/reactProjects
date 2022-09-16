import { useState } from 'react';
import FeedBack from './FeedBack';
import Header from './Header';
import './index.css';
import MetaInfo from './MetaInfo';
import Reviews from './Reviews';

function App() {
  const [reviews, setReviews] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  return (
    <div className="flex relative flex-col justify-center items-center  bg-gradient-to-r from-indigo-600 to-blue-900 w-screen min-h-screen overflow-x-hidden">
      <Header />
      <FeedBack
        reviews={reviews}
        setReviews={setReviews}
        editIndex={editIndex}
        setEditIndex={setEditIndex}
      />
      {reviews && <MetaInfo reviews={reviews} />}
      {reviews && (
        <Reviews
          reviews={reviews}
          setReviews={setReviews}
          setEditIndex={setEditIndex}
        />
      )}
    </div>
  );
}

export default App;
