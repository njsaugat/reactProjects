import './index.css';
import { Route, Routes } from 'react-router-dom';
import Container from './Container';
import About from './About';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Container />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default App;
