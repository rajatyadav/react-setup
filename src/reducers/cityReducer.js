import actionTypes from '../actions/actionTypes';

const initialState = {
  citise: []
}

export default function citiesList(state = initialState, action) {
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