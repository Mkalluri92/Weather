import React from 'react';
import Button from '../Button/Button';
import classes from './Weather.module.css';

const Weather = (props) => {
    let disable = props.city.trim()? false: true;
    return (
        <React.Fragment>
            <h2 className={classes.title}>Weather Report</h2>
            <input className={classes.city} type="text" placeholder="Enter the city Name" onChange={props.enterName}/>
            <Button clicked={props.submit} disableClick={disable}/>
        </React.Fragment>
    )
}

export default Weather;