import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import isBrowser from 'is-in-browser';
import { routerReducer as routing } from 'react-router-redux';

import {ALLOW_REDUX_DEV_TOOLS} from './env';

import system, * as fromSystem from './reducers/system';
import nav, * as fromSiteNav from './reducers/site-nav';
import pageMeta, * as fromPageMeta from './reducers/page-meta';

// create the master reducer
const rootReducer = combineReducers({nav, system, routing, pageMeta});


// Reexport scoped selectors here:
export const selectSiteNav = (state) => (
    fromSiteNav.selectSiteNav(state.nav)
);

export const selectHTTPResponseCode = (state) => (
    fromSystem.selectHTTPResponseCode(state.system)
);

export const selectAllApplicationErrors = (state) => (
    fromSystem.selectAllApplicationErrors(state.system)
);

export const selectApplicationError = (state, id) => (
    fromSystem.selectApplicationError(state.system, id)
);

export const selectPageMeta = (state) => (
  fromPageMeta.selectPageMeta(state.pageMeta)
);

export const selectPageTitle = (state) => (
  fromPageMeta.selectPageTitle(state.pageMeta)
);

export const selectMetaTags = (state) => (
  fromPageMeta.selectMetaTags(state.pageMeta)
);



// determine initial state
const initialState = isBrowser
  ? window.__INITIAL_STATE__ || {}
  : {};


const reduxMiddleware = compose(
    applyMiddleware(thunk),
    isBrowser && ALLOW_REDUX_DEV_TOOLS==="1" && typeof window.devToolsExtension !== "undefined"
      ? window.devToolsExtension()
      : f => f
);

// export a store creator factory with initial state if present...
export default () => createStore( rootReducer, initialState, reduxMiddleware );
