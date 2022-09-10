import { useDispatch, useSelector } from 'react-redux';
import {
  decrementCounter,
  divideCounter,
  incrementCounter,
  multiplyCounter,
} from './action';
import './style.css';

function App() {
  const dispatch = useDispatch();
  const { counter } = useSelector((globalState) => globalState.numberReducer);
  const { number } = useSelector(
    (globalState) => globalState.multiplyDivideReducer
  );
  return (
    <>
      <h1>Counter</h1>
      <h2>With React & Redux</h2>
      <button className="btn" onClick={() => dispatch(decrementCounter())}>
        -
      </button>
      <span className="value">{counter}</span>
      <button className="btn" onClick={() => dispatch(incrementCounter())}>
        +
      </button>
      <div className="multiply-divide">
        <button className="btn" onClick={() => dispatch(divideCounter())}>
          /
        </button>
        <span className="value">{number}</span>
        <button className="btn" onClick={() => dispatch(multiplyCounter())}>
          *
        </button>
      </div>
    </>
  );
}

export default App;
