import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  console.log("DISPLAY", props)

  return (
    <div className="BurgerDisplay">
      <img src={props.burger.imgURL}/>
      <br/>
      <h1>{props.burger.name}</h1>
      <br/>
      <select value={props.burger.category} onChange={console.log}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
