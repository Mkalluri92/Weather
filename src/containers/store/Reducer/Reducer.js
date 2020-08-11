import * as actionTypes from '../Action/ActionTypes';

const initialState = {
    city: '',
    forecast: null,
    clicked: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_DEATILS:
            return {
                ...state,
               forecast: action.forecast,
               clicked: true,
               error: null
            }
        case actionTypes.ENTER_CITY:
            return {
                ...state,
                city: action.name,
                clicked: false,
                forecast: null,
                error: null
            }
        case actionTypes.SHOW_ERROR:
            return {
                ...state,
                clicked: true,
                forecast: null,
                error: action.error
            }
        default:
            return state
    }
};

export default reducer;