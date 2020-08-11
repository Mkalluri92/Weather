import React, { Component } from 'react';
import Weather from './components/Weather/Weather';
import './App.css';

class App extends Component {
  state = {
    city: '',
    clicked: false
  }

  onEnterName = (event) => {
    let cityName = this.state;
    cityName.city = event.target.value;
    this.setState({
      state: cityName
    })
  }

  render () {
    return (
      <React.Fragment>
        <Weather enterName={this.onEnterName}/>
      </React.Fragment>
    )
  }
}

export default App;
