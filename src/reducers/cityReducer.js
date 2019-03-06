import actionTypes from '../actions/actionTypes';

const initialState = {
  cities: []
}

export default function cityReducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.GET_CITIES_SUCCESS: {
      return Object.assign({}, state, {
        cities: action.payload.data.cities
      });
    }

    default: {
      return state;
    }
  }
}