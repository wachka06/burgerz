import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={""/* Insert burger image URL */}/>
      <br/>
      <h2>Insert Name of Burger</h2>
      <br/>
      <select onChange={console.log}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
