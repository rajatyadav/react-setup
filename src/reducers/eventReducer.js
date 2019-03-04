import actionTypes from '../actions/actionTypes';

const initialState = {
  events: []
}

// API urls
// https://theinsider.docs.apiary.io/#reference/0/fetch-supported-cities/retrieve-all-cities?console=1

export default function eventList(state = initialState, action) {
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