import {FETCH_EXRATES, SET_INPUTS_DATA, FETCH_COUNTRIES} from './types';

export const fetchCountries = (to) => async (dispatch) => {
    try {
        const resp = await fetch(`https://restcountries.eu/rest/v2/currency/${to}`);
        const data = await resp.json();
        const countries = data.map(country => country.name);
        dispatch ({
            type: FETCH_COUNTRIES,
            payload: countries
        })
    } catch (err) {
        alert(err);
    }
}

export const fetchExRates = ({from, to}) => async (dispatch) => {
    const api = 'http://data.fixer.io/api/latest?access_key=f68b13604ac8e570a00f7d8fe7f25e1b&format=1';
    const response = await fetch(api);
    const data = await response.json();
    const rates = data.rates;

    const EUR = 1/rates[from];
    const exRate = EUR * rates[to];

    if(isNaN(exRate)) {
        alert(`Can't get currency ${from} and ${to}`)
    } else {
        dispatch({
            type: FETCH_EXRATES,
            payload: exRate
        });
    }
}

export const setInputsData = (inputs) => {
    return {
        type: SET_INPUTS_DATA,
        payload: inputs
    }
}