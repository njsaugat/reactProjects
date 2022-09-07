export const incrementNumber = (counterValue) => {
  return {
    type: 'INCREMENT',
    payload: counterValue,
  };
};

export const decrementNumber = (counterValue) => {
  return {
    type: 'DECREMENT',
    payload: counterValue,
  };
};
