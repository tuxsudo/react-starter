import { createStore, combineReducers } from 'redux';

import people from './reducers/people.js';
import nav from './reducers/site-nav.js';

let store = combineReducers({ people, nav });

export default createStore( store );
