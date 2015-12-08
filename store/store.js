import { createStore, combineReducers } from 'redux';

// import all your reducers here.
import people from './people/reducers.js';


let store = combineReducers({ people })

export default createStore( store );
