import React from 'react';
import Ingridients from './Ingridients';
import './style.css';

export default function Cocktail({ cocktail }) {
  return (
    <div className="cocktail-enitre">
      <div className="back-home">
        <button className="cocktail-details btn">Back Home</button>
      </div>
      <h1 className="cocktail-name">{cocktail.strDrink}</h1>
      <div className="cocktail-flex">
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} srcSet="" />
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
            <span className="instruction">{cocktail.strInstructions}</span>
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
}
