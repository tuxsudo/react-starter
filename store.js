import { createStore, combineReducers } from 'redux';

import people from './reducers/people.js';

let store = combineReducers({ people })

export default createStore( store );
