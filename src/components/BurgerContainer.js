import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    burgers: []
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(data => this.setState({
      burgers: data
    }))
  }

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter />
        <BurgerList burgers={this.state.burgers} />
      </div>
    )
  }
}
