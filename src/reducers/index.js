import { combineReducers } from 'redux';
import cityReducer from './cityReducer';
import eventReducer from './eventReducer';

const rootReducer = combineReducers({
  cityReducer,
  eventReducer
});

export default rootReducer;