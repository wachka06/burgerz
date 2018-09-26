import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  state = {
    filterString: "All"
  }

  handleChange = (event) => {
    // console.log(event.target.value)
    this.setState({filterString: event.target.value})
  }

  render(){
    // console.log("PROPS", this.props)

    return (
      <div className="BurgerContainer">
        <BurgerFilter handleChange={this.handleChange}/>
        <BurgerList filterString={this.state.filterString} burgers={this.props.burgers} handleClick={this.props.handleClick} />
      </div>
    )
  }
}
