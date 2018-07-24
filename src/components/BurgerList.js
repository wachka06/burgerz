import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

export default class BurgerList extends Component {
  render(){
    return (
      <div className="BurgerList">
        { this.props.burgers.map(b => <BurgerItem key={b.id} burger={b} selectBurger={this.props.selectBurger} removeBurger={this.props.removeBurger}/>) }
      </div>
    )
  }
}
