import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={ props.selectedBurger.imgURL }/>
      <br/>
      <h2>{ props.selectedBurger.name }</h2>
      <br/>
      <select value={props.selectedBurger.category} onChange={console.log}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
