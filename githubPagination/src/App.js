import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShowUsers from './ShowUsers';
import './style.css';
function App() {
  return (
    // <ShowUsers />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShowUsers />} />
        <Route path="/page/:id" element={<ShowUsers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
