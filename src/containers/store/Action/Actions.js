import axios from "axios";
import * as actionTypes from './ActionTypes';

const getDeatils = (response) => {
    return {
        type: actionTypes.GET_DEATILS,
        forecast: response
    }
}

export const enterCity = (event) => {
    return {
        type: actionTypes.ENTER_CITY,
        name: event.target.value
    }
}

const showError = (error) => {
    return {
        type: actionTypes.SHOW_ERROR,
        error: error
    }
}


export const getForecast = (cityName) => {
    console.log(cityName);
    return dispatch => {
        axios.get(`http://localhost:8080/get_weather_details?city=${cityName}`)
        .then(response => {
            dispatch (getDeatils(response.data))
        }).catch(error => {
            console.log(error);
            dispatch (showError(error.response.data.error))
        })
    }
}