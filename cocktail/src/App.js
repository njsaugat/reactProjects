// import AboutUs from './AboutUs';
import Cocktails from './Cocktails';
import Navbar from './Navbar';
import './style.css';
import { Routes, Route } from 'react-router-dom';
import AboutUs from './AboutUs';
function App() {
  return (
    <>
      <div className="container">
        <Navbar />
        {/* <AboutUs /> */}
        {/* {window.location.pathname === '/' && <Cocktails />}
        {console.logwindow.location.pathname} */}
        <Cocktails />
      </div>
      <Routes>
        <Route
          path="about-us"
          element={
            <>
              {/* <Navbar /> */}
              <AboutUs />
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
