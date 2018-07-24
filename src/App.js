import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerId: null,
    burgers: []
  }

  componentDidMount(){
    fetch("http://localhost:3001/burgers")
      .then(r => r.json())
      .then(burgers => this.setState({ burgerId: 1, burgers }) )
  }

  updateBurger = (burgerId) => {
    const burgers = this.state.burgers.map( burger => {
      if (burger.id === burgerId){
        burger.category = burger.category === "Relatable" ? "Bougie" : "Relatable"
      }
      return burger
    })
    this.setState({ burgers })
  }

  selectedBurger = () => {
    if (this.state.burgerId){
      return this.state.burgers.find(b => b.id === this.state.burgerId)
    } else {
      return {
        id: 1,
        name: "The Baconator",
        category: "Relatable",
        imgURL: "https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg"
      }
    }
  }

  selectBurger = (burgerId) => {
    this.setState({ burgerId })
  }

  removeBurger = (burgerId) => {
    const burgers = this.state.burgers.filter(b => b.id !== burgerId)
    this.setState({ burgers })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer removeBurger={this.removeBurger} selectBurger={this.selectBurger} burgers={this.state.burgers} />
        <BurgerDisplay updateBurger={this.updateBurger} burger={this.selectedBurger()}/>
      </div>
    );
  }
}

export default App;
