import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  counter: 0,
};

const initialMultiply = {
  number: 1,
  counters: 2,
  hello: 3,
};
export const changeNumber = createReducer(initialState, {
  increment: (state) => {
    state.counter = state.counter + 1;
  },
  decrement: (state) => {
    state.counter = state.counter - 1;
  },
});

export const multiplyDivide = createReducer(initialMultiply, {
  multiply: (state) => {
    return { ...state, number: (state.number * 1.2).toFixed(2) };
  },
  divide: (state) => {
    // state.number=state.number/0.9
    return { ...state, number: (state.number / 1.2).toFixed(2) };
  },
});
