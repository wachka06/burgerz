import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {
  state = {
    selectedBurger: {
      id: 8,
      name: "Green Eggs and Hamburger",
      category: "Relatable",
      imgURL: "https://stupiddope.com/wp-content/uploads/2016/05/mcdonalds-green-angry-birds-burger-01.jpg"
    }
  }

  render() {
    return (
      <div id="App">
        <BurgerContainer />
        <BurgerDisplay selectedBurger={this.state.selectedBurger} />
      </div>
    );
  }
}

export default App;
