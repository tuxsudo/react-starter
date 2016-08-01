import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {isBrowser} from './env.js';

import * as reducers from './reducers';

// create the master reducer
const rootReducer = combineReducers(reducers);


// determine initial state
const initialState = isBrowser && window.__INITIAL_STATE__ || {};


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
);

// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );
