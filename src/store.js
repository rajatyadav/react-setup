import { cretateStore } from 'redux';

import rootReducer from './reducers/index';

export const store = cretateStore(rootReducer);