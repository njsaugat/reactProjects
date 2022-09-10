import Business from './components/Business';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Payment from './components/Payment';
import Promotion from './components/Promotion';
import Review from './components/Review';
import Stats from './components/Stats';
import Title from './components/Title';
import TryService from './components/TryService';
import './index.css';

function App() {
  return (
    <div className="bg-black text-white overflow-hidden  p-10 pr-0 md:pl-20 lg:pl-32">
      <Navbar />
      <Title />
      <Stats />
      <Business />
      <Payment />
      <Promotion />
      <Review />
      <TryService />
      <Footer />
    </div>
  );
}

export default App;
