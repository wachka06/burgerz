import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {
  render(){
    return (
      <div className="BurgerList">
        this is the list
        <BurgerItem />
      </div>
    )
  }
}
