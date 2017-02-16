import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import citiesList from './citiesList';

export default combineReducers({
    citiesList,
    routing: routerReducer
});
