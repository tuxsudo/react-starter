import React from 'react';
import docTemplate from './HTML.js';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import Helmet from 'react-helmet';
import routes from './routes.js';
import getStore from './store.js';
import { minify } from 'html-minifier';
import { resolve } from './lib/ss-resolve';

import {API_HOST, APP_WEB_BASE_PATH} from './env.js';


export default (req, res, next) => {
    match({ routes, location: req.url }, (err, redirect, props) => {

        if (err) {
            return next(err);

        } else if (redirect) {
            res.redirect(redirect.pathname + redirect.search)

        } else if (props) {
            const store = getStore();

            resolve(props, store)
                .then(() => {
                    const initialState = store.getState();

                    const content = renderToString(
                        <Provider store={store}>
                            <RouterContext {...props} />
                        </Provider>
                    );

                    res.status(initialState.requestStatus||200).send(
                        minify(
                            docTemplate({
                                ...(Helmet.rewind()),
                                content,
                                initialState,
                                env: {API_HOST, APP_WEB_BASE_PATH},
                                base_path: APP_WEB_BASE_PATH
                            }),
                            { collapseWhitespace: true, removeAttributeQuotes: true }
                        )
                    );
                }).catch(next);

        } else {
            res.status(404).send('Not Found')
        }
    })
}
