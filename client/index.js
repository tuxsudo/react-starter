import { Router, browserHistory } from 'react-router';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import routes from '../app/routes.js';
import store from '../app/store.js';
import { bootstrap } from '../app/actions/bootstrap.js';

store.dispatch(bootstrap());

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,

    document.getElementById('app')
);
