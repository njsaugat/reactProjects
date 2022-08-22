import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getCocktail from './getCocktail';
import ShowLoading from './ShowLoading';
const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
const initialSearchTerm = 'a';
export default function Cocktails() {
  const [cocktails, setCocktails] = useState([]);
  const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
  useEffect(() => {
    async function getCocktailsData() {
      const drinks = await getCocktail(API_URL + searchTerm);
      setCocktails(drinks);
    }
    getCocktailsData();

    const inputEl = document.body.querySelector('input');
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        setSearchTerm(e.target.value);
        setCocktails([]);
        e.target.value = '';
      }
    });
  }, [searchTerm]);
  if (cocktails === null) {
    return <ShowLoading />;
  }
  return (
    <>
      <h1>Cocktails</h1>
      <div className="cocktails">
        {cocktails.map((cocktail, index) => {
          return (
            <div className="cocktail" key={index}>
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                srcSet=""
              />
              <h2 className="cocktail-name">{cocktail.strDrink}</h2>
              <div className="cocktail-glass">{cocktail.strGlass}</div>
              <div className="cocktail-type">{cocktail.strAlcoholic}</div>
              <Link to={`/cocktail/${cocktail.idDrink}`}>
                <button className="cocktail-details">Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
}
