import React from 'react';

const RenderError = ({ showError }) => {
  return <h3 className="text-red-600 tracking-wider">{showError}</h3>;
};
export default RenderError;
