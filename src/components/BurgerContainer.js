import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {
  render(){
    return (
      <div className="BurgerContainer">
        this is the container
        <BurgerList />
        <BurgerFilter />
      </div>
    )
  }
}
