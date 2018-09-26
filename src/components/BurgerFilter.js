import React, { Component } from 'react';

const BurgerFilter = (props) => {
  console.log("PROPS", props)
  
  return (
    <div className="BurgerFilter">
      <select onChange={props.handleChange}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
