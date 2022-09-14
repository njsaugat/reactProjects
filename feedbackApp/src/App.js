import { useState } from 'react';
import FeedBack from './FeedBack';
import Header from './Header';
import './index.css';
import Reviews from './Reviews';

function App() {
  const [reviews, setReviews] = useState([]);
  return (
    <div className="flex relative flex-col justify-center items-center  bg-gradient-to-r from-indigo-600 to-blue-900 w-screen min-h-screen overflow-x-hidden">
      <Header />
      <FeedBack setReviews={setReviews} />
      {reviews && <Reviews reviews={reviews} />}
    </div>
  );
}

export default App;
