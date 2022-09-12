import FeedBack from './FeedBack';
import Header from './Header';
import './index.css';

function App() {
  return (
    <div className="flex flex-col justify-center items-center  bg-gradient-to-r from-indigo-600 to-blue-900 w-screen h-screen">
      <Header />
      <FeedBack />
    </div>
  );
}

export default App;
