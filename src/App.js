import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerArray: [],
    selectedBurger: {imgURL: ""}
    // or selectedBurger: {}
  }

  // Once App gets mounted(loaded), componentDidMount fires up(invoked).
  componentDidMount() {
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(data => {
      this.setState({burgerArray: data})
    })
  }

  handleClick = (burger) => {
    // console.log(burger)
    this.setState({selectedBurger: burger})
  }



  render() {
    console.log("STATE", this.state)

    return (
      <div id="App">
        <BurgerContainer burgers={this.state.burgerArray} handleClick={this.handleClick} />
        <BurgerDisplay burger={this.state.selectedBurger}/>
      </div>
    );
  }
}

export default App;
