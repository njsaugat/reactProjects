import Cocktail from './Cocktail';
import React, { useEffect, useState } from 'react';
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);

  async function getCocktails(letter) {
    const result = await fetch(API_URL + letter, {
      accept: 'application/json',
    });
    const { drinks } = await result.json();
    console.log(drinks);
    setCocktails(drinks);
  }
  useEffect(() => {
    getCocktails('a');
  }, []);

  return (
    <>
      {cocktails.length > 0 ? <Cocktail cocktail={cocktails[0]} /> : ''}
      <h1>Cocktails</h1>
      <div className="cocktails">
        {cocktails.map((cocktail) => {
          return (
            <div className="cocktail">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                srcSet=""
              />
              <h2 className="cocktail-name">{cocktail.strDrink}</h2>
              <div className="cocktail-glass">{cocktail.strGlass}</div>
              <div className="cocktail-type">{cocktail.strAlcoholic}</div>
              <button className="cocktail-details">Details</button>
            </div>
          );
        })}
      </div>
    </>
  );
}
