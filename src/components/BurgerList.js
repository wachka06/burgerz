import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {

  const filteredList = () => {
    if(props.burgerFilter === "All"){
      return props.burgers
    }
    else{
      return props.burgers.filter((burger) => burger.category === props.burgerFilter)
    }
  }

  return (
    <div className="BurgerList">
      { filteredList().map((burger) => {
        return <BurgerItem key={burger.id} handleDeleteBurger={props.handleDeleteBurger} handleSelectBurger={props.handleSelectBurger} burger={burger} />
      }) }
    </div>
  )
}

export default BurgerList
