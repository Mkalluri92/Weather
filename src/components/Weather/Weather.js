import React from 'react';
import Button from '../Button/Button';

const Weather = (props) => {
    let disable = props.city.trim()? false: true;
    return (
        <React.Fragment>
            <h2>Weather Report</h2>
            <input type="text" placeholder="Enter the city Name" onChange={props.enterName}/>
            <Button clicked={props.submit} disableClick={disable}/>
        </React.Fragment>
    )
}

export default Weather;