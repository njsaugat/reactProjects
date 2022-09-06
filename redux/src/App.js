import { useDispatch, useSelector } from 'react-redux';
import { decrementNumber, incrementNumber } from './actions';
import './style.css';
// import {useSelector,us}

function App() {
  const numberState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter</h1>
      <h2>With React & Redux</h2>
      <button className="btn" onClick={() => dispatch(decrementNumber(5))}>
        -
      </button>
      <span className="value">{numberState}</span>
      <button className="btn" onClick={() => dispatch(incrementNumber(5))}>
        +
      </button>
    </>
  );
}

export default App;
