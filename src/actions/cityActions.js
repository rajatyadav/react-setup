import { checkHttpStatus, parseJSON } from './utils';
import actionTypes from './actionTypes';
import constants from '../constants';

const BASE_URL = constants.BASE_URL,
      GET_CITIES_URL = '/tag/home-cities'

export default function fetchCities() {
    return function(dispatch) {
        dispatch({ type: actionTypes.GET_CITIES });
        return fetch(BASE_URL + GET_CITIES_URL, {
            method: "GET"
        })
        .then(checkHttpStatus)
        .then(parseJSON)
        .then((jsonResponse) => {
            console.log(jsonResponse);
            dispatch({
                type: actionTypes.GET_CITIES_SUCCESS,
                payload: jsonResponse
            });
        })
        .catch((error) => {
            dispatch({
                type: actionTypes.GET_CITIES_FAILED,
                error: error.message
            });
        })
    }
}
