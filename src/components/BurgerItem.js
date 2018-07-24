import React, { Component } from 'react';

const BurgerItem = (props) => {
  return (
    <div className="BurgerItem">
      { props.burger.name }
    </div>
  )
}

export default BurgerItem
