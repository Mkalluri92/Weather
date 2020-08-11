import React from 'react';

const Details = (props) => {
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getUTCFullYear();
    let hours = date.getHours(); // => 9
    let minutes = date.getMinutes(); // =>  30
    let seconds = date.getSeconds();
    return (
        <div>
            <div>City Name: <b>{props.city}</b></div>
            <div>Date: <b>{day}-{month+1}-{year}</b></div>
            <div>Time: <b>{hours}:{minutes}:{seconds}</b></div>
            <div>Temperature: <b>{props.temperature}</b></div>
        </div>
    )
}

export default Details;