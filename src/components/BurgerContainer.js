import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    burgerFilter: "All"
  }

  getBurgerFilter = (selection) => {
    this.setState({ burgerFilter: selection })
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter getBurgerFilter={this.getBurgerFilter} />
        <BurgerList handleDeleteBurger={this.props.handleDeleteBurger} burgerFilter={this.state.burgerFilter} handleSelectBurger={this.props.handleSelectBurger} burgers={this.props.burgers} />
      </div>
    )
  }
}
