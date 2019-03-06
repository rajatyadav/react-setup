import actionTypes from './actionTypes';

export function fetchCities() {
  return dispatch => {
    dispatch({ type: actionTypes.GET_CITIES })
    return fetch(`https://theinsider.docs.apiary.io/#reference/0/fetch-supported-cities/retrieve-all-cities?console=1`)
      .then(response => response.json())
      .then(jsonResponse => dispatch({
          type: actionTypes.GET_CITIES_SUCCESS,
          payload: jsonResponse
        })
      )
      .catch(error => dispatch({
          type: actionTypes.GET_CITIES_FAILED,
          error: error.message
        })
      )
  }
}