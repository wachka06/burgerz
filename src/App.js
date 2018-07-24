import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = {
    burgers: [],
    burgerId: null
  }

  componentDidMount(){
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(data => {
      this.setState({
        burgers: data,
        burgerId: 1
      })
    })
  }

  handleSelectBurger = (burger) => {
    this.setState({
      burgerId: burger.id
    })
  }

  selectedBurger = () => {
    if (this.state.burgerId) {
      return this.state.burgers.find( b => b.id === this.state.burgerId)
    } else {
      return {
        id: 1,
        name: "The Baconator",
        category: "Relatable",
        imgURL: "https://www.lovelesscafe.com/uploads/recipeimages/BBQBaconBurger-web.jpg"
      }
    }
  }

  updateBurger = () => {
    const burgers = this.state.burgers.map(burger => {
      if (burger.id === this.state.burgerId){
        burger.category = burger.category === "Bougie" ? "Relatable" : "Bougie"
      }
      return burger
    })
    this.setState({ burgers }, this.persistBurgerChange )
  }

  persistBurgerChange = () => {
    const burger = this.selectedBurger()
    const options = {
      method: "PATCH",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({ category: burger.category })
    }
    fetch(`http://localhost:3001/burgers/${burger.id}`, options)
  }

  handleDeleteBurger = (burger) => {
      const newBurgers = this.state.burgers.filter((burgerItem) => burgerItem.id !== burger.id)

      this.setState({
        burgers: newBurgers,
        burgerId: newBurgers[0].id
      })
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer handleDeleteBurger={this.handleDeleteBurger} handleSelectBurger={this.handleSelectBurger} burgers={this.state.burgers} />
        <BurgerDisplay updateBurger={this.updateBurger} burger={ this.selectedBurger() }/>
      </div>
    );
  }
}

export default App;
