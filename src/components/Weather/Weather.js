import React from 'react';
import Button from '../Button/Button';

const Weather = (props) => {
    return (
        <React.Fragment>
            <h2>Weather Report</h2>
            <input type="text" placeholder="Enter the city Name" onChange={props.enterName}/>
            <Button />
        </React.Fragment>
    )
}

export default Weather;