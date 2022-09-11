import { configureStore } from '@reduxjs/toolkit';

// import rootReducer from './reducers'
import { changeNumber, multiplyDivide } from './Reducers';

function returnAllReducers() {
  return {
    reducer: {
      numberReducer: changeNumber,
      multiplyDivideReducer: multiplyDivide,
    },
  };
}

const store = configureStore(returnAllReducers());
export default store;
