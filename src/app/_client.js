import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import routes from './routes.js';
import getStore from './store.js';

const store = getStore();
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>,

    document.getElementById('app')
);
