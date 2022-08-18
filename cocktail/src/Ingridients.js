import React from 'react';
const totalIngredientsCount = 15;
const ingredientsArr = new Array(totalIngredientsCount).fill('');
// let currIngredientsCount=0;

export default function Ingridients({ cocktail }) {
  // for(const item in cocktail){
  //     console.log(item)
  // }
  const ingredientsJSX = ingredientsArr.map((item, index) => {
    return <span>{cocktail['strIngredient' + (index + 1)]}</span>;
  });
  return <span className="ingredients">{ingredientsJSX}</span>;
}
