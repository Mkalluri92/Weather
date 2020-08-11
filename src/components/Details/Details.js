import React from 'react';
import classes from './Details.module.css';

const Details = (props) => {
  
    console.log(props);
    let weatherDetails = props.details.map((current,index) => {
        return (
            <div key={index} className={classes.weatherDetails}>
                <span>Date: <b>{current.Date}</b></span>
                <span>Time: <b>{current.Time}</b></span>
                <span>Feels: <b>{current.feels}</b></span>
                <span>Temperature: <b>{current.temprature}</b></span>
            </div>
        )
    })
    return (
        <React.Fragment>
            <div>City Name: <b>{props.name}</b></div>
            <div className={classes.container}>
                {weatherDetails}
            </div>
        </React.Fragment>
    )
}

export default Details;