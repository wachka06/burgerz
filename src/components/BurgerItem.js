import React, { Component } from 'react';
const BurgerItem = (props) => {
  const callback = function(arg){
    console.log("hhhheeeeeeyyyyy", arg)
  }
  return (
    <div>
      <div className="BurgerItem">
        { props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.handleSelectBurger(props.burger) }>Show</button>
        <button onClick={() => props.handleDeleteBurger(props.burger)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
