import React from 'react';
const totalIngredientsCount = 15;
const ingredientsArr = new Array(totalIngredientsCount).fill('');

export default function Ingridients({ cocktail }) {
  const ingredientsJSX = ingredientsArr.map((item, index) => {
    return <span key={index}>{cocktail['strIngredient' + (index + 1)]}</span>;
  });
  return <span className="ingredients">{ingredientsJSX}</span>;
}
