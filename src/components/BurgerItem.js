import React, { Component } from 'react';

const BurgerItem = (props) => {
  // console.log("BURGER ITEM", props)

  return (
    <div>
      <div className="BurgerItem">
        { props.burger.name }
      </div>
      <div className="BurgerBottomBun">
        <button onClick={() => props.handleClick(props.burger)}>Show</button>
        <button onClick={console.log}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
