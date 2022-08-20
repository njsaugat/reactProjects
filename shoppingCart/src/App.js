import { useState } from 'react';
import Navbar from './Navbar';
import ShowItems from './ShowItems';
import './style.css';
// let items = 0;
function App() {
  const [items, setItems] = useState(0);
  const getTotalItems = (totalItems) => {
    setItems(totalItems);
  };
  return (
    <div className="container">
      <Navbar itemsCount={items} />
      <ShowItems passTotalItems={getTotalItems} />
    </div>
  );
}

export default App;
