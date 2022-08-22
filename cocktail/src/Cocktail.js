import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import getCocktail from './getCocktail';
import Ingridients from './Ingridients';
import ShowLoading from './ShowLoading';
import './style.css';

const API_URL = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';
export default function Cocktail() {
  const params = useParams();
  const [cocktails, setCocktail] = useState([]);

  useEffect(() => {
    async function getCocktailData() {
      const drink = await getCocktail(API_URL + params.id);
      setCocktail(drink);
    }
    getCocktailData();
  }, [params.id]);

  if (cocktails === null) {
    return <ShowLoading />;
  }
  return (
    <>
      {cocktails.map((cocktail, index) => {
        return (
          <div className="cocktail-enitre" key={index}>
            <div className="back-home">
              <Link to="/">
                <button className="cocktail-details btn">Back Home</button>
              </Link>
            </div>
            <h1 className="cocktail-name">{cocktail.strDrink}</h1>
            <div className="cocktail-flex">
              <img
                src={cocktail.strDrinkThumb}
                alt={cocktail.strDrink}
                srcSet=""
              />
              <div className="cocktail-rows">
                <div className="row">
                  <span className="heading">Name: </span>
                  <span className="name">{cocktail.strDrink}</span>
                </div>
                <div className="row">
                  <span className="heading">Category: </span>
                  <span className="category">{cocktail.strCategory}</span>
                </div>
                <div className="row">
                  <span className="heading">Info: </span>
                  <span className="info">{cocktail.strAlcoholic}</span>
                </div>
                <div className="row">
                  <span className="heading">Glass: </span>
                  <span className="glass">{cocktail.strGlass}</span>
                </div>
                <div className="row instructions">
                  <span className="heading">Instructions: </span>
                  <span className="instruction">
                    {cocktail.strInstructions}
                  </span>
                </div>
                <div className="row ingredients-heading">
                  <span className="heading ">Ingredients: </span>
                  {/* <span className="ingredients">{cocktail.strDrink}</span> */}
                  <Ingridients cocktail={cocktail} />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
