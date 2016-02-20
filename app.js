// import styles from './style.css';
import { Router, browserHistory } from 'react-router';
// import App from './containers/App/App.js';
import routes from './routes.js';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import store from './store.js';
import { bootstrap } from './actions/bootstrap.js';
// import * as actions from './store/people/actions.js';


const people = [
    'Jared Anderson',
    'Sara Anderson',
    'Elijah Anderson',
    'Xander Anderson',
    'Maxwell Anderson',
    'Amelia Anderson',
    'Ivy Anderson',
    'Grandpa Anderson',
    'Grandma Anderson',
    'Grandpa Jensen',
    'Grandma Jensen',
    'Grandpa Ross'
];

store.dispatch(bootstrap({people}));



render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,

    document.getElementById('app')
);
