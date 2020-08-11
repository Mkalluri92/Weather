import React, { Component } from 'react';
import Weather from './components/Weather/Weather';
import classes from './App.module.css';
import Details from './components/Details/Details';

import { connect } from 'react-redux';
import * as actions from './containers/store/Action/Actions';


class App extends Component {
  

  render () {
    let weatherDetails = null;

    if((this.props.forecast && this.props.clicked)) {
      weatherDetails = <Details details={this.props.forecast} />
    } else if ((this.props.forecast === null && this.props.clicked)) {
      weatherDetails = <div className={classes.error}> 
        {this.props.error.toString()}...!</div>
    }
     
    return (
      <div className={classes.App}>
        <Weather enterName={this.props.onEnterCity} 
          submit={this.props.getWeatherDetails.bind(null,this.props.city)} city={this.props.city}/>
        {weatherDetails}
      </div>
    )
  }
}

const connectStateToProps = state => {
  return {
    city: state.city,
    forecast: state.forecast,
    clicked: state.clicked,
    error: state.error
  }
}

const connectDispatchToProps = dispatch => {
  return {
    getWeatherDetails: (city) => dispatch(actions.getForecast(city)),
    onEnterCity: (event) => dispatch(actions.enterCity(event))
  }
}

export default connect(connectStateToProps,connectDispatchToProps)(App);
