import React from 'react';
import classes from './Details.module.css';

const Details = (props) => {
  
    console.log(props);
    let weatherDetails = props.details.map((current,index) => {
        return (
            <span key={index}>
                <div>Date: <b>{current.Date}</b></div>
                <div>Time: <b>{current.time}</b></div>
                <div>Feels: <b>{current.feels}</b></div>
                <div>Temperature: <b>{current.temprature}</b></div>
            </span>
        )
    })
    return (
        <div>
            <div>City Name: <b>{props.name}</b></div>
            {weatherDetails}
        </div>
    )
}

export default Details;