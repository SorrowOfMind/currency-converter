import {FETCH_EXRATES, SET_INPUTS_DATA, FETCH_COUNTRIES} from '../actions/types';

const initialState = {
    inputs: {},
    exRate: 0,
    countries: [],
}

const rootReducer = (state=initialState, action) => {
    switch (action.type) {
        case FETCH_EXRATES:
            return {
                ...state,
                exRate: action.payload
            }
        case SET_INPUTS_DATA:
            return {
                ...state,
                inputs: action.payload
            }
        case FETCH_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;