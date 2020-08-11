import React, { Component } from 'react';
import Weather from './components/Weather/Weather';
import classes from './App.module.css';
import Details from './components/Details/Details';

class App extends Component {
  state = {
    city: '',
    temperature: '30c',
    clicked: false
  }

  onEnterName = (event) => {
    let cityName = this.state;
    cityName.city = event.target.value;
    this.setState({
      state: cityName
    })
  }

  onClickSubmit = () => {
    this.setState((PrevState,props) => {
      return {
        clicked: !PrevState.clicked
      }
    })
  }

  render () {
    let weatherDetails = this.state.clicked? <Details 
      city={this.state.city} temperature={this.state.temperature}/>: null
    return (
      <div className={classes.App}>
        <Weather enterName={this.onEnterName} submit={this.onClickSubmit} city={this.state.city}/>
        {weatherDetails}
      </div>
    )
  }
}

export default App;
