import React, { Component } from 'react';
import Weather from './components/Weather/Weather';
import classes from './App.module.css';
import Details from './components/Details/Details';
import axios from 'axios';


class App extends Component {
  state = {
    city: '',
    forecast: null,
    clicked: false
  }

  onEnterName = (event) => {
    let cityName = this.state;
    cityName.city = event.target.value;
    this.setState({
      state: cityName,
      clicked: false
    })
  }

  onClickSubmit = () => {
    axios.get(`http://localhost:8080/get_weather_details?city=${this.state.city}`)
    .then (response =>  {
      this.setState({
        forecast: response.data,
        clicked: true
      })
    }).catch (error => {
      this.setState({
        forecast: null,
        clicked: true
      })
    })
  }

  

  render () {
    let weatherDetails = null;

    if((this.state.forecast && this.state.clicked)) {
      weatherDetails = <Details details={this.state.forecast} />
    } else if ((this.state.forecast === null && this.state.clicked)) {
      weatherDetails = <div className={classes.error}> {this.state.city} city doesnot exist...!</div>
    }
     
    return (
      <div className={classes.App}>
        <Weather enterName={this.onEnterName} submit={this.onClickSubmit} city={this.state.city}/>
        {weatherDetails}
      </div>
    )
  }
}

export default App;
