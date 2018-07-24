import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    burgerFilter: "All"
  }

  updateBurgerFilter = (e) => {
    this.setState({ burgerFilter: e.target.value })
  }

  filteredBurgers = () => {
    if (this.state.burgerFilter === "All") {
      return this.props.burgers
    } else {
      return this.props.burgers.filter(b => b.category === this.state.burgerFilter )
    }
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter burgerFilter={this.state.burgerFilter} updateBurgerFilter={this.updateBurgerFilter} />
        <BurgerList removeBurger={this.props.removeBurger} selectBurger={this.props.selectBurger} burgers={this.filteredBurgers()}/>
      </div>
    )
  }
}
