import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import {render} from 'react-dom';
import {Provider} from 'react-redux';

import routes from './routes.js';
import getStore from './store.js';

const store = getStore();

render(
    <Provider store={store}>
        <BrowserRouter>
            {routes}
        </BrowserRouter>        
    </Provider>,

    document.getElementById('app')
);
