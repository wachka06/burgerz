import React, { Component } from 'react';

const BurgerDisplay = (props) => {
    return (
      <div className="BurgerDisplay">
        <img src={props.burger.imgURL}/>
        <br/>
        <h2>{props.burger.name}</h2>
        <br/>
        <select value={props.burger.category} onChange={() => props.updateBurger(props.burger.id)}>
          <option value="Relatable">Relatable</option>
          <option value="Bougie">Bougie</option>
        </select>
      </div>
    )
}

export default BurgerDisplay
