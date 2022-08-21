import Cocktails from './Cocktails';
import Navbar from './Navbar';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
import Cocktail from './Cocktail';
function Container({ Component }) {
  return (
    <div className="container">
      <Navbar />
      <Component />
    </div>
  );
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Container Component={Cocktails} />} />
        <Route path="about-us" element={<Container Component={AboutUs} />} />
        <Route
          path="/cocktail/:id"
          element={<Container Component={Cocktail} />}
        />
      </Routes>
    </>
  );
}

export default App;
