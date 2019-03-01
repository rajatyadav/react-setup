import { combineReducers } from 'redux';
import { routerReducer } from 'react-router';

import cityReducer from './cityReducer';

export default combineReducers({
  cityReducer,
  routing: routerReducer
});