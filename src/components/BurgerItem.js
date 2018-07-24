import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div>
      <div className="BurgerItem">
        { props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.selectBurger(props.burger.id)}>Show</button>
        <button onClick={() => props.removeBurger(props.burger.id)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
