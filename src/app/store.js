import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isBrowser from 'is-in-browser';

import {ALLOW_REDUX_DEV_TOOLS} from './env.js';

import * as reducers from './reducers';
import * as fromSystem from './reducers/system.js';

// create the master reducer
const rootReducer = combineReducers(reducers);


// Reexport scoped selectors here:
export const selectHTTPResponseCode = (state) => (
    fromSystem.selectHTTPResponseCode(state.system)
);

export const selectAllApplicationErrors = (state) => (
    fromSystem.selectAllApplicationErrors(state.system)
);

export const selectApplicationError = (state, id) => (
    fromSystem.selectApplicationError(state.system, id)
);



// determine initial state
const initialState = isBrowser && window.__INITIAL_STATE__ || {};


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && ALLOW_REDUX_DEV_TOOLS==="1" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : f => f
);

// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );
