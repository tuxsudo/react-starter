import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './containers/app.js';
import Home from './containers/home.js';
import NotFound from './containers/not-found.js';
import {APP_WEB_BASE_PATH} from './env.js';

const routes = (
    <Route
        path="/"
        render={props => (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="*" component={NotFound} />
            </Switch>
        )}
    />
);

export default routes;
