import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  console.log("BURGER LIST", props)

  let filteredArray = props.burgers

  if (props.filterString !== "All") {
  filteredArray = props.burgers.filter((burger) => {
    return burger.category === props.filterString
  })
}

  return (
    <div className="BurgerList">
      { filteredArray.map((burger) => {
        return <BurgerItem burger={burger} handleClick={props.handleClick}/>
      }) }
    </div>
  )
}

export default BurgerList
